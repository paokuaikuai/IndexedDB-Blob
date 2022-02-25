/**
 * zrender画心电波形
 * @param {*} config 
 * {
 *      pix_mm: 3.777,//毫米转换,
 *      opts: {}, //zrender初始化配置
 *      grid :{
 *          col: 10, //大表格列
 *          row: 20, //大表格列
 *          style : {} //zrender大表格样式
 *          minStyle: {} //zrender小表格样式
 *      }
 * }
 */
function ZRECG(config) {
    this.config = config;
    this.position = [5, 5]; //容器位置

    //初始化容器宽高
    this.width = this.config.pix_mm * 5 * this.config.grid.col; //5格小格等于一大格
    this.height = this.config.pix_mm * 5 * this.config.grid.row;
    this.dom = document.getElementById(this.config.id);
    this.dom.style.width = this.width + this.position[0] * 2 + "px";
    this.dom.style.height = this.height + this.position[1] * 2 + "px";

    //初始化zrender
    this.zr = zrender.init(this.dom, this.config.opts);

    this.gridGroup = new zrender.Group();
    this.ecgGroup = new zrender.Group();
}

/**
 * 画表格
 */
ZRECG.prototype.drawGrid = function () {
    let [height, width] = [this.config.pix_mm * 5, this.config.pix_mm * 5];

    for (let i = 0; i <= this.config.grid.col; i++) {
        this.gridGroup.add(this.buildLine(width * i, 0, width * i, height * this.config.grid.row, this.config.grid.style, this.gridGroup));
    }

    for (let i = 0; i <= this.config.grid.row; i++) {
        this.gridGroup.add(this.buildLine(0, height * i, width * this.config.grid.col, height * i, this.config.grid.style, this.gridGroup));
    }

    for (let i = 0; i <= this.config.grid.col * 5; i++) {
        if (i % 5 == 0) {
            continue;
        }
        this.gridGroup.add(this.buildLine(this.config.pix_mm * i, 0, this.config.pix_mm * i, height * this.config.grid.row, this.config.grid.minStyle, this.gridGroup));
    }

    for (let i = 0; i <= this.config.grid.row * 5; i++) {
        if (i % 5 == 0) {
            continue;
        }
        this.gridGroup.add(this.buildLine(0, this.config.pix_mm * i, width * this.config.grid.col, this.config.pix_mm * i, this.config.grid.minStyle));
    }
    this.gridGroup.attr("position", this.position);
    this.zr.add(this.gridGroup);
}

/**
 * 画增益
 */
ZRECG.prototype.drawGainLine = function () {
    let gain = this.config.ecg.opts.gain;
    let lineHeight = this.config.pix_mm * gain;
    let points = [
        [0, 0],
        [this.config.pix_mm * 1, 0],
        [this.config.pix_mm * 1, lineHeight * -1],
        [this.config.pix_mm * 4, lineHeight * -1],
        [this.config.pix_mm * 4, 0],
        [this.config.pix_mm * 5, 0]
    ];

    let height = this.config.pix_mm * 5 * this.config.grid.row;

    this.ecgGroup.add(this.buildPolyline(points, [0, height / 2 + lineHeight / 2], this.config.ecg.style));
}


/**
 * 改变波形结构, 可以在此进行排序
 */
ZRECG.prototype.getWaveData = function () {
    let data = [];
    let label = [];
    for (let key in this.config.ecg.data) {
        data.push(this.config.ecg.data[key]);
        label.push(key);
    }
    return {
        label: label,
        data: data
    };
};


/**
 * 画心电波形
 */
ZRECG.prototype.drawEcg = function () {
    let width = this.config.pix_mm * 5 * this.config.grid.col;
    let height = this.config.pix_mm * 5 * this.config.grid.row;

    let lay = this.config.ecg.opts.layout;
    let wave = this.getWaveData();
    let waveHeight = height / (lay.row + lay.single.length);
    let waveWidth = width / lay.col - lay.col * this.config.pix_mm;

    for (let i = 0; i < lay.col; i++) {
        for (let j = 0; j < lay.row; j++) {
            this.drawECGPolylineGroup(wave.label[i * lay.row + j], this.transformData(wave.data[i * lay.row + j], waveWidth), [this.config.pix_mm * 5 + waveWidth * i, waveHeight * j + waveHeight / 2]);
        }
    }

    for (let i = 0; i < lay.single.length; i++) {
        this.drawECGPolylineGroup(lay.single[i], this.transformData(this.config.ecg.data[lay.single[i]], waveWidth * lay.col), [this.config.pix_mm * 5, waveHeight * lay.row + waveHeight * i + waveHeight / 2]);
    }

    this.drawGainLine();

    this.ecgGroup.attr("position", this.position);

    this.zr.add(this.ecgGroup);
}

/**
 * 绘制心电波形组
 * @param {*} data 
 * @param {*} pos 
 */
ZRECG.prototype.drawECGPolylineGroup = function (label, data, pos) {
    this.ecgGroup.add(this.buildPolyline(data, pos, this.config.ecg.style));

    let style = {
        lineDash: [this.config.pix_mm, this.config.pix_mm * 4 / 5],
        stroke: this.config.ecg.style.stroke,
        lineWidth: this.config.ecg.style.lineWidth,
    };

    this.ecgGroup.add(this.buildLine(pos[0], pos[1] - this.config.pix_mm * 5 * 3 / 2, pos[0], pos[1] + this.config.pix_mm * 5 * 3 / 2, style));

    let textStyle = {
        fill: this.config.ecg.style.stroke,
        lineWidth: 0.5,
        text: this.formatEcgLabel(label)
    };

    this.drawText(pos[0] + this.config.pix_mm, pos[1] - this.config.pix_mm * 5 * 3 / 2, textStyle, this.ecgGroup);
}

/**
 * 波形数据转换
 * @param {*} waveArray 
 * @returns 
 */
ZRECG.prototype.transformData = function (waveArray, waveWidth) {
    let list = [];
    let gain = this.config.ecg.opts.gain;
    let speed = this.config.ecg.opts.speed;
    for (let i = 0; i < waveArray.length; i++) {
        let x = i * speed * this.config.pix_mm / 1000;
        if (x > waveWidth - this.config.pix_mm * 5) {
            break;
        }
        list.push([x, -1 * waveArray[i] * gain * this.config.pix_mm / 1000]);
    }
    return list
}

/**
 * 画表格线
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @param {*} style 
 */
ZRECG.prototype.buildLine = function (x1, y1, x2, y2, style) {
    var line = new zrender.Line({
        shape: {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        },
        style: style
    });

    return line;
}

/**
 * label转换
 * @param {*} label 
 * @returns 
 */
ZRECG.prototype.formatEcgLabel = function (label) {
    return label.substring(label.lastIndexOf("_") + 1);
}

/**
 * 画文字
 * @param {*} x 
 * @param {*} y 
 * @param {*} style 
 * @param {*} group 
 */
ZRECG.prototype.drawText = function (x, y, style, group) {
    var line = new zrender.Text({
        style: style
    });
    line.attr("position", [x, y]);
    group.add(line);
}


/**
 * 绘制新的波形
 * @param {*} points 
 * @param {*} position 
 */
ZRECG.prototype.buildPolyline = function (points, position, style) {
    var polyline = new zrender.Polyline({
        style: style,
        shape: {
            points: points //点集
        }
    });
    polyline.attr("position", position);
    return polyline;
}


/**
 * 绘制ECG
 */
ZRECG.prototype.draw = function () {
    this.drawGrid();
    this.drawEcg();
}
