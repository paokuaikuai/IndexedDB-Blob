/**
 * 文件存储
 * @param {*} id 
 */
let remoteConfig = {
    configUrl: "http://192.168.7.65:9090/holter/resources/dat/config?id={id}", //远程文件信息，主要获取文件大小(fileSize)
    downloadUrl: "http://192.168.7.65:9090/holter/resources/dat/download?id={id}&pos={pos}&size={size}", //远程下载地址
    blockSize: 1024 * 1000 * 2 //下载大小2M
}

function FileDB(id) {
    this.id = id;
    this.fileStore = new KVStore("file_" + id, "file", 1);
    this.fileDescStore = new KVStore("file_desc", "desc", 1);
    this.percent = 0;
    this.file = null;
}

/**
 * 构建URL
 * @param {*} url 
 * @param {*} params 
 * @returns 
 */
FileDB.prototype.buildURL = function (url, params) {
    for (let key in params) {
        url = url.replace("{" + key + "}", params[key]);
    }
    return url;
};

/**
 * 下载文件
 * @returns 
 */
FileDB.prototype.download = async function () {
    if (this.file != null) {
        this.percent = 1;
        return this.file;
    }
    let desc = await this.fileDescStore.query(this.id);
    if (desc == null) {
        desc = JSON.parse(await this.httpGet(this.buildURL(remoteConfig.configUrl, { id: this.id }), "text")).data;
        this.fileDescStore.insert(this.id, desc);
    }

    let fileSize = desc.fileSize;
    let bag = remoteConfig.blockSize;
    let size = fileSize < bag ? fileSize : bag;
    let page = Math.ceil((fileSize + size - 1) / size);
    let blobs = [];

    for (let i = 0; i < page - 1; i++) {
        let blob = await this.fileStore.query(i);
        if (blob != null) {
            blobs.push(blob);
            continue;
        }
        blob = await this.httpGet(this.buildURL(remoteConfig.downloadUrl, { id: this.id, pos: i * size, size: size }), "blob");
        if (blob != null) {
            this.fileStore.insert(i, blob);
            blobs.push(blob);
            this.percent = i / (page - 1);
        } else {
            console.log("下载失败");
            i--;//重新下载
        }
    }

    this.percent = 1;

    this.file = {
        desc: desc,
        blob: new Blob(blobs, { type: "application/octet-stream" })
    };

    return this.file;
}

/**
 * short文件数据读取
 * @param {*} pos 
 * @param {*} size 
 * @returns 
 */
FileDB.prototype.readInt16Array = async function (pos, size) {
    if(this.file == null){
        await fdb.download();
    }

    if(pos > this.file.blob.size){
        pos = this.file.blob.size;
    }

    if(pos + size > this.file.blob.size){
        size = this.file.blob.size - pos;
    }

    let b = this.file.blob.slice(pos, pos + size);

    let bf = await b.arrayBuffer();
    return new Int16Array(bf);
}


/**
 * 下载进度
 * @returns 
 */
FileDB.prototype.getPercent = function () {
    return this.percent;
}


/**
 * 获取远程接口内容
 * @param {*} url 
 * @param {*} type 
 * @returns 
 */
FileDB.prototype.httpGet = function (url, type) {
    return new Promise(function (resolve, reject) {
        try {
            let xhr = new XMLHttpRequest();
            xhr.responseType = type;
            xhr.onload = function (e) {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    resolve(null);
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        } catch (e) {
            resolve(null);
        }
    });
}
