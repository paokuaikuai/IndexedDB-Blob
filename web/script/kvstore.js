/**
 * 基于indexedDB键值对存储
 * @param {*} dbName 
 * @param {*} storeName 
 * @param {*} version 
 */
function KVStore(dbName, storeName, version) {
    this.dbName = dbName;
    this.storeName = storeName;
    this.version = version;
    this.openDB();
}


/**
 * 打开数据库，并且创建表
 */
KVStore.prototype.openDB = function () {
    let ctx = this;
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(ctx.dbName, ctx.version);
        request.onsuccess = function (e) {
            resolve(e.target.result);
        };
        request.onerror = function (e) {
            reject(e);
        };
        request.onupgradeneeded = function (e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(ctx.storeName)) {
                db.createObjectStore(ctx.storeName);
            }
        };
    });
}

/**
 * 插入键值对
 * @param {*} key 
 * @param {*} block 
 */
KVStore.prototype.insert = function (key, block) {
    let ctx = this;
    return new Promise((resolve, reject) => {
        ctx.openDB(ctx.dbName, ctx.version, ctx.storeName).then(db => {
            const tx = db.transaction(ctx.storeName, 'readwrite');
            const store = tx.objectStore(ctx.storeName);
            const req = store.put(block, key);
            req.onsuccess = res => {
                resolve(res);
            };
        }).catch(err => {
            reject(err);
        });
    });
}

/**
 * 通过key查询结果
 * @param {*} key 
 * @returns 
 */
KVStore.prototype.query =  function (key) {
    let ctx = this;
    return new Promise((resolve, reject) => {
        ctx.openDB(ctx.dbName, ctx.version, ctx.storeName).then(db => {
            const tx = db.transaction(ctx.storeName, 'readwrite');
            const store = tx.objectStore(ctx.storeName);
            const req = store.get(key);
            req.onsuccess = (res) => {
                resolve(res.target.result);
            }
        }).catch(err => {
            resolve(null);
        });
    });
}