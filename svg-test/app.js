
/**
 * ECG报告模版
 * @param {*} page 
 */
function ECGReport(page) {
    this.page = page;
}

/**
 * 构建SVG
 * @returns 
 */
ECGReport.prototype.buildSVG = function () {
    let grid = this.buildGrid();
    let temp = `
    <svg width="${this.page.width}" height="${this.page.heigth}" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="${this.page.width}" height="${this.page.heigth}" stroke="black" stroke-width="1" fill="white"/>
        ${grid.smallGridPath}
        ${grid.bigGridPath}
    </svg>`;
    return temp;
}

/**
 * 构建网格
 */
ECGReport.prototype.buildGrid = function () {
    let bigGridPath = this.buildBigGridPath(this.page);
    let smallGridPath = this.buildSmallGridPath2(this.page);
    return Object.assign(bigGridPath, smallGridPath);
}

/**
 * 构建大网格
 * @param {*} page 
 * @returns 
 */
ECGReport.prototype.buildBigGridPath = function (page) {
    let { width, heigth, pixmm } = page;
    let { xboxNum, yboxNum, offsetY } = page.grid;
    let { lineWidth, color } = page.grid.style;

    let lines = [];

    let boxWidth = pixmm * 5;
    let boxHeight = pixmm * 5;
    let offsetX = (width - xboxNum * boxWidth) / 2;

    for (let i = 0; i < xboxNum + 1; i++) {
        let x = offsetX + i * boxWidth;
        let y = offsetY;
        let end = y + boxHeight * yboxNum;
        let line = `M${this.fmtNum(x)} ${this.fmtNum(y)} V ${this.fmtNum(end)}`;
        lines.push(line);
    }

    for (let i = 0; i < yboxNum + 1; i++) {
        let x = offsetX;
        let y = offsetY + i * boxHeight;
        let end = x + boxWidth * xboxNum;
        let line = `M${this.fmtNum(x)} ${this.fmtNum(y)} H ${this.fmtNum(end)}`;
        lines.push(line);
    }

    let bigGridPath = `<path style="fill:none;stroke:${color};stroke-width:${lineWidth};" d="${lines.join(" ")}"></path>`;

    return { bigGridPath, offsetX };
}

/**
 * 采用短横线构建小网格
 * @param {*} page 
 * @returns 
 */
ECGReport.prototype.buildSmallGridPath = function (page) {
    let { width, heigth, pixmm } = page;
    let { xboxNum, yboxNum, offsetY } = page.grid;
    let { lineWidth, color } = page.grid.style;

    let boxWidth = pixmm * 5;
    let offsetX = (width - xboxNum * boxWidth) / 2;
    let lines = [];

    for (let i = 0; i < xboxNum; i++) {
        for (let j = 0; j < yboxNum * 5; j++) {
            if (j % 5 == 0) {
                continue;
            }
            let x = i * boxWidth + offsetX + pixmm - lineWidth / 2;
            let y = offsetY + pixmm * j;
            let end = x + boxWidth - pixmm;
            let line = `M${this.fmtNum(x)} ${this.fmtNum(y)} H ${this.fmtNum(end)}`;
            lines.push(line);
        }
    }

    let smallGridPath = `<path style="fill:none;stroke-dasharray:${lineWidth},${pixmm - lineWidth};stroke:${color};stroke-width:${lineWidth};" d="${lines.join(" ")}" ></path>`;
    return { smallGridPath, offsetX };
}

/**
 * 采用虚线构建小网格
 */
ECGReport.prototype.buildSmallGridPath2 = function (page) {
    let { width, heigth, pixmm } = page;
    let { xboxNum, yboxNum, offsetY } = page.grid;
    let { lineWidth, color } = page.grid.style;

    let boxWidth = pixmm * 5;
    let offsetX = (width - xboxNum * boxWidth) / 2;
    let lines = [];

    for (let i = 0; i < yboxNum * 5; i++) {
        if (i % 5 == 0) {
            continue;
        }
        let line = `M${this.fmtNum(offsetX + pixmm - lineWidth / 2)} ${this.fmtNum(offsetY + pixmm * i)} H ${this.fmtNum(offsetX + boxWidth * xboxNum)}`;
        lines.push(line);
    }

    let smallGridPath = `<path style="fill:none;stroke-dasharray:${lineWidth},${pixmm - lineWidth};stroke:${color};stroke-width:${lineWidth};" d="${lines.join(" ")}"></path>`;
    return { smallGridPath, offsetX };
}

/**
 * 数据保留3位小数
 * @param {*} input 
 * @returns 
 */
ECGReport.prototype.fmtNum = function (input) {
    let number = Number(input);

    if (isNaN(number)) {
        return input;
    }
    if (Number.isInteger(number)) {
        return input;
    }
    return number.toFixed(3);
}

const fs = require("fs");

function test() {
    let page = {
        name: "a4",
        width: 1064,
        heigth: 775,
        pixmm: 3.77,
        grid: {
            xboxNum: 54,
            yboxNum: 28,
            offsetY: 200,
            style: { lineWidth: 1, color: "#d61f1f" }
        }
    };

    let ecgReport = new ECGReport(page);
    let svg = ecgReport.buildSVG();

    fs.writeFileSync("./test.svg", svg);
}


test();