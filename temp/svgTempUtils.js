$(document).ready(function () {

  const svgElementMenu = {
    elements: [
      {
        type: "text",
        name: "文本框",
        ghost: `<svg width="120" height="100" t="1755072063780" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1496" width="200" height="200"><path d="M896 928H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32zM160 864h704V160H160z" fill="#4A8BFE" p-id="1497"></path><path d="M768 288H256a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64z" fill="#4A8BFE" p-id="1498"></path><path d="M512 800a32 32 0 0 1-32-32V256a32 32 0 0 1 64 0v512a32 32 0 0 1-32 32z" fill="#4A8BFE" p-id="1499"></path></svg>`,
        attr: {
          "font-size": "12px",
          fill: "#2c3e50",
        },
        field: {
          textContent: "这是一个文本",
        },
      },
      {
        type: "line",
        name: "分割线",
        ghost: `<svg width="120" height="100" t="1755072157881" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2623" width="200" height="200"><path d="M921.6 0H102.4C46.08 0 0 46.08 0 102.4v819.2c0 56.32 46.08 102.4 102.4 102.4h819.2c56.32 0 102.4-46.08 102.4-102.4V102.4c0-56.32-46.08-102.4-102.4-102.4z m51.2 921.6c0 30.72-20.48 51.2-51.2 51.2H102.4c-30.72 0-51.2-20.48-51.2-51.2V102.4c0-30.72 20.48-51.2 51.2-51.2h819.2c30.72 0 51.2 20.48 51.2 51.2v819.2z" fill-opacity=".08" p-id="2624"></path><path d="M819.2 486.4c0 15.36-10.24 25.6-25.6 25.6h-563.2c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h563.2c15.36 0 25.6 10.24 25.6 25.6z" fill="#2F90EA" p-id="2625"></path></svg>`,
        attr: {
          "stroke-width": "1px",
          "lineLength": 1037,
          stroke: "#000000"
        },
        field: {

        },
      },
      {
        type: "image",
        name: "图片",
        ghost: `<svg width="120" height="100" t="1755072197446" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3731" width="200" height="200"><path d="M829.64898 849.502041H194.35102c-43.885714 0-79.412245-35.526531-79.412244-79.412245V253.910204c0-43.885714 35.526531-79.412245 79.412244-79.412245h635.29796c43.885714 0 79.412245 35.526531 79.412244 79.412245v516.179592c0 43.885714-35.526531 79.412245-79.412244 79.412245z" fill="#D2F4FF" p-id="3732"></path><path d="M909.061224 656.195918l-39.706122-48.065306L626.416327 365.714286c-19.330612-19.330612-50.677551-19.330612-70.008164 0L419.526531 502.073469c-2.612245 2.612245-5.22449 3.134694-6.791837 3.134694-1.567347 0-4.702041-0.522449-6.791837-3.134694L368.326531 464.979592c-19.330612-19.330612-50.677551-19.330612-70.008164 0l-143.673469 143.673469-39.706122 48.065306v113.893878c0 43.885714 35.526531 79.412245 79.412244 79.412245h635.29796c43.885714 0 79.412245-35.526531 79.412244-79.412245v-114.416327" fill="#16C4AF" p-id="3733"></path><path d="M273.763265 313.469388m-49.632653 0a49.632653 49.632653 0 1 0 99.265306 0 49.632653 49.632653 0 1 0-99.265306 0Z" fill="#E5404F" p-id="3734"></path><path d="M644.179592 768h-365.714286c-11.493878 0-20.897959-9.404082-20.897959-20.897959s9.404082-20.897959 20.897959-20.897959h365.714286c11.493878 0 20.897959 9.404082 20.897959 20.897959s-9.404082 20.897959-20.897959 20.897959zM461.322449 670.82449h-182.857143c-11.493878 0-20.897959-9.404082-20.897959-20.897959s9.404082-20.897959 20.897959-20.89796h182.857143c11.493878 0 20.897959 9.404082 20.897959 20.89796s-9.404082 20.897959-20.897959 20.897959z" fill="#0B9682" p-id="3735"></path></svg>`,
        attr: {
          width: "80",
          height: "80",
          href: "data:image/png;base64,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"
        },
        field: {},
      },
      {
        type: "table",
        name: "表格",
        ghost: `<svg width="120" height="100" t="1755072241276" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4766" width="200" height="200"><path d="M924.16 812.544V343.552h-58.368v208.384h-132.096V343.552h-58.368v208.384h-128.512V343.552H487.936v208.384H358.4V343.552H300.032v208.384H166.4V343.552H108.032V870.4h19.456v0.512h797.184l-0.512-58.368z m-58.368-201.728v201.728h-132.096v-201.728h132.096z m-190.976 0v201.728h-128.512v-201.728h128.512z m-186.88 0v201.728H358.4v-201.728h129.536z m-187.904 0v201.728H166.4v-201.728h133.632z" fill="#E1F1F9" p-id="4767"></path><path d="M108.032 147.456h816.128v196.608H108.032z" fill="#0FA7DB" p-id="4768"></path></svg>`,
        attr: {
          rows: 7,
          cols: 4,
          x: 50,
          y: 50,
          cellWidths: [100, 100, 100, 100],
          cellHeights: [20, 20, 20, 20, 20, 20, 20],
          showBorder: true,
          showGridLines: true,
          textAlign: 'left',
          strokeColor: '#000000',
          gridLineColor: '#000000',
          fillColor: '#ffffff',
          strokeWidth: 1,
          "font-size": 12,
          fontFamily: 'Arial',
          cellContent: null
        }
      },
      {
        type: "ecg",
        name: "心电",
        ghost: `<svg width="120" height="100" t="1755073082007" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6373" width="200" height="200"><path d="M914.27 624.45H914l-331.8-5.61a56.05 56.05 0 0 1-50.89-34.41l-28.47-67.87-27.24 69.19a24.72 24.72 0 0 1-24.6 16.12 25.19 25.19 0 0 1-23.41-17.79l-64-203.14-56 199a53 53 0 0 1-50.85 38.51H109.66a17.15 17.15 0 1 1 0-34.3h147.06a18.58 18.58 0 0 0 17.83-13.5l60.64-215.49a29 29 0 0 1 27.68-21.28h0.45a29 29 0 0 1 27.82 20.43L452.83 550l22.49-57.14a29.29 29.29 0 0 1 27.05-18.64 29.69 29.69 0 0 1 27.48 18.05l33.09 78.92a21.77 21.77 0 0 0 19.79 13.36l331.81 5.61a17.15 17.15 0 0 1-0.27 34.3z" fill="#57EA96" p-id="6374"></path><path d="M799.94 783.67H224c-72.49 0-131.47-59-131.47-131.47V372.67c0-72.49 59-131.47 131.47-131.47h576c72.48 0 131.46 59 131.46 131.47V652.2c-0.06 72.49-59.04 131.47-131.52 131.47zM224 275.5a97.29 97.29 0 0 0-97.18 97.17V652.2A97.3 97.3 0 0 0 224 749.38h576a97.29 97.29 0 0 0 97.17-97.18V372.67A97.29 97.29 0 0 0 800 275.5z" fill="#06A0FF" p-id="6375"></path></svg>`,
        attr: {},
        field: {},
      },
    ],
  };

  const objUtils = {
    getFormData: function (id, clazz) {
      const formData = {};
      $(`#${id}`).find(clazz || ".form-input").each((index, input) => {
        const $input = $(input);
        const fullName = $input.attr("name");
        let value = $input.val();

        if ($input.attr("type") === "checkbox") {
          value = $input.is(":checked");
        } else if ($input.attr("type") === "radio") {
          if (!$input.is(":checked")) return;
        }

        if (fullName.includes(".")) {
          const keys = fullName.split(".");
          let currentLevel = formData;
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (i === keys.length - 1) {
              currentLevel[key] = value;
            } else {
              if (!currentLevel[key]) {
                currentLevel[key] = {};
              }
              currentLevel = currentLevel[key];
            }
          }
        } else {
          formData[fullName] = value;
        }
      });
      return formData;
    },
    deepMerge: function (target, source, options = {}) {
      const { arrayMerge = 'concat' } = options;

      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          const sourceValue = source[key];
          const targetValue = target[key];

          if (this.isObject(sourceValue) && !Array.isArray(sourceValue)) {
            if (!this.isObject(targetValue) || targetValue === null) {
              target[key] = {};
            }
            this.deepMerge(target[key], sourceValue, options);
          }
          else if (Array.isArray(sourceValue)) {
            if (arrayMerge === 'replace') {
              target[key] = [...sourceValue];
            } else if (arrayMerge === 'concat') {
              target[key] = Array.isArray(targetValue)
                ? targetValue.concat(sourceValue)
                : [...sourceValue];
            } else if (arrayMerge === 'merge') {
              target[key] = Array.isArray(targetValue)
                ? this.deepMergeArray(targetValue, sourceValue, options)
                : [...sourceValue];
            }
          }
          else {
            target[key] = sourceValue;
          }
        }
      }

      return target;
    },
    deepMergeArray: function (targetArray, sourceArray, options) {
      const result = [...targetArray];

      sourceArray.forEach((sourceItem, index) => {
        if (this.isObject(sourceItem)) {
          if (index < result.length && this.isObject(result[index])) {
            result[index] = this.deepMerge(result[index], sourceItem, options);
          } else {
            result[index] = { ...sourceItem };
          }
        } else {
          result[index] = sourceItem;
        }
      });

      if (sourceArray.length > targetArray.length) {
        result.push(...sourceArray.slice(targetArray.length));
      }

      return result;
    },
    adjustArrayLen: function (arr, targetLength, val) {
      if (targetLength < arr.length) {
        arr.length = targetLength;
        return;
      }
      if (targetLength > arr.length) {
        const diff = targetLength - arr.length;
        arr.push(...Array(diff).fill(val || 0));
      }
      return;
    },
    adjust2DArrayLen: function (array, targetRows, targetCols, fillValue) {
      if (array.length < targetRows) {
        for (let i = array.length; i < targetRows; i++) {
          const newRow = new Array(targetCols).fill(fillValue);
          array.push(newRow);
        }
      } else if (array.length > targetRows) {
        array.length = targetRows;
      }

      for (let i = 0; i < array.length; i++) {
        if (array[i].length < targetCols) {
          for (let j = array[i].length; j < targetCols; j++) {
            array[i][j] = fillValue;
          }
        } else if (array[i].length > targetCols) {
          array[i].length = targetCols;
        }
      }

      return array;
    },
    create2DArray(rows, cols, fillValue) {
      return Array.from({ length: rows }, () =>
        Array(cols).fill(fillValue)
      )
    },
    isObject: function (item) {
      return item && typeof item === 'object' && !Array.isArray(item);
    }
  }

  const svgTempUtils = {
    ns: {
      svgNS: "http://www.w3.org/2000/svg"
    },

    createSVG: function (paper) {
      let width = paper.width;
      let height = paper.height;

      const svg = $(`<svg  
                id="${paper.id}"
                class="${paper.class}"
                width="${width}" 
                height="${height}" 
                viewBox="0 0 ${width} ${height}"
                xmlns="${this.ns.svgNS}" version="1.1"
                style="background-color: white;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);"></svg>`);
      svg.attr("data-opts", JSON.stringify(paper));
      return svg;
    },
    updateElemet(element, opts) {
      if (opts.type == "image") {
        opts.attr['xmlns:xlink'] = "http://www.w3.org/1999/xlink";
        opts.attr['xlink:href'] = opts.attr.href;
      }
      for (let key in opts.attr) {
        element.setAttribute(key, opts.attr[key]);
      }

      for (let key in opts.field) {
        element[key] = opts.field[key];
      }

      element.setAttribute("data-opts", JSON.stringify(opts));
    },
    createElement: function (opts) {
      let el = null;
      if (opts.type === "table") {
        el = this.createTable(opts);
      }
      else if (opts.type == "line") {
        const element = document.createElementNS(this.ns.svgNS, opts.type);

        opts.attr.x1 = opts.attr.x;
        opts.attr.y1 = opts.attr.y;
        opts.attr.x2 = opts.attr.x + opts.attr.lineLength;
        opts.attr.y2 = opts.attr.y;
        delete opts.attr.x;
        delete opts.attr.y;

        el = { element, data: { type: opts.type, attr: opts.attr, field: opts.field } };
        this.updateElemet(el.element, el.data);
        el.element.setAttribute("data-opts", JSON.stringify(el.data));
      }
      else if (opts.type == "ecg") {
        opts.attr = {
          width: opts.paper.width,
          heigth: opts.paper.heigth,
          pixmm: opts.paper.pixmm,
          grid: {
            xboxNum: opts.paper.grid.xboxNum,
            yboxNum: opts.paper.grid.yboxNum,
            offsetY: opts.paper.grid.offsetY,
            style: { lineWidth: 1, color: "#fb2d2d" }
          }
        }
        el = this.createECGPath(opts);
      }
      else {
        const element = document.createElementNS(this.ns.svgNS, opts.type);
        el = { element, data: { type: opts.type, attr: opts.attr, field: opts.field } };
        this.updateElemet(el.element, el.data);
      }
      el.element.setAttribute("data-id", "elem-" + Date.now());
      return el.element;
    },
    updateTable: function (g, opts) {
      g.innerHTML = '';
      const attr = Object.assign({}, opts.attr);
      const svgNS = this.ns.svgNS;
      const tableWidth = attr.cellWidths.reduce((sum, width) => sum + width, 0);
      const tableHeight = attr.cellHeights.reduce((sum, height) => sum + height, 0);

      if (attr.showBorder) {
        const border = document.createElementNS(svgNS, 'rect');
        border.setAttribute('x', '0');
        border.setAttribute('y', '0');
        border.setAttribute('width', tableWidth);
        border.setAttribute('height', tableHeight);
        border.setAttribute('fill', attr.fillColor);
        border.setAttribute('stroke', attr.strokeColor);
        border.setAttribute('stroke-width', attr.strokeWidth);
        border.setAttribute('fill-opacity', '1');
        g.appendChild(border);
      }

      let currentY = 0;

      if (!attr.cellContent) {
        attr.cellContent = objUtils.create2DArray(attr.rows, attr.cols, "这是一个文本");
      }

      for (let row = 0; row < attr.rows; row++) {
        const cellHeight = attr.cellHeights[row];
        let currentX = 0;

        for (let col = 0; col < attr.cols; col++) {
          const cellWidth = attr.cellWidths[col];

          if (attr.showGridLines) {
            if (col < attr.cols - 1) {
              const vLine = document.createElementNS(svgNS, 'line');
              vLine.setAttribute('x1', currentX + cellWidth);
              vLine.setAttribute('y1', currentY);
              vLine.setAttribute('x2', currentX + cellWidth);
              vLine.setAttribute('y2', currentY + cellHeight);
              vLine.setAttribute('stroke', attr.gridLineColor);
              vLine.setAttribute('stroke-width', attr.strokeWidth);
              g.appendChild(vLine);
            }

            if (row < attr.rows - 1) {
              const hLine = document.createElementNS(svgNS, 'line');
              hLine.setAttribute('x1', currentX);
              hLine.setAttribute('y1', currentY + cellHeight);
              hLine.setAttribute('x2', currentX + cellWidth);
              hLine.setAttribute('y2', currentY + cellHeight);
              hLine.setAttribute('stroke', attr.gridLineColor);
              hLine.setAttribute('stroke-width', attr.strokeWidth);
              g.appendChild(hLine);
            }
          }

          const text = document.createElementNS(svgNS, 'text');
          //text.setAttribute('font-family', opts.fontFamily);
          text.setAttribute('font-size', attr['font-size']);
          text.setAttribute('fill', attr.strokeColor);
          text.setAttribute('dominant-baseline', 'middle');

          let textAnchor = 'middle';
          let textX = currentX + cellWidth / 2;
          let textY = currentY + cellHeight / 2;

          if (attr.textAlign === 'left') {
            textAnchor = 'start';
            textX = currentX + 5;
          } else if (attr.textAlign === 'right') {
            textAnchor = 'end';
            textX = currentX + cellWidth - 5;
          }

          text.setAttribute('text-anchor', textAnchor);
          text.setAttribute('x', textX);
          text.setAttribute('y', textY);

          text.textContent = attr.cellContent[row][col];
          g.appendChild(text);

          currentX += cellWidth;
        }

        currentY += cellHeight;
      }

      const el = { element: g, data: { type: opts.type, attr: attr, field: opts.field } };

      el.element.setAttribute("data-opts", JSON.stringify(el.data));

      return el;
    },
    createTable: function (opts) {
      const attr = Object.assign({}, opts.attr);
      const svgNS = this.ns.svgNS;

      const g = document.createElementNS(svgNS, 'g');
      g.setAttribute('transform', `translate(${attr.x}, ${attr.y})`);

      return this.updateTable(g, opts);
    },
    createECGPath: function (opts) {
      const g = document.createElementNS(this.ns.svgNS, 'g');
      const boxWidth = opts.attr.pixmm * 5;
      const offsetX = this.fmtNum((opts.attr.width - opts.attr.grid.xboxNum * boxWidth) / 2);

      g.setAttribute('transform', `translate(${offsetX}, ${opts.attr.grid.offsetY})`);
      const bigGrid = this.createBigGridPath(opts.attr).bigGridPath;
      const smallGraid = this.createSmallGridPath(opts.attr).smallGridPath;

      g.appendChild(bigGrid);
      g.appendChild(smallGraid);

      const el = { element: g, data: { type: opts.type, attr: opts.attr, field: opts.field } };
      el.element.setAttribute("data-opts", JSON.stringify(el.data));

      return el;
    },
    createBigGridPath: function (page) {
      let { width, heigth, pixmm } = page;
      let offsetY = 0;
      let { xboxNum, yboxNum } = page.grid;
      let { lineWidth, color } = page.grid.style;

      let lines = [];

      let boxWidth = pixmm * 5;
      let boxHeight = pixmm * 5;
      let offsetX = 0;

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

      const bigGridPath = document.createElementNS(this.ns.svgNS, "path");

      bigGridPath.setAttribute("fill", "none");
      bigGridPath.setAttribute("stroke", color);
      bigGridPath.setAttribute("stroke-width", lineWidth);
      bigGridPath.setAttribute("d", lines.join(" "));

      return { bigGridPath, offsetX };
    },

    createSmallGridPath: function (page) {
      let { width, heigth, pixmm } = page;
      let offsetY = 0;
      let { xboxNum, yboxNum } = page.grid;
      let { lineWidth, color } = page.grid.style;

      let boxWidth = pixmm * 5;
      let offsetX = 0;
      let lines = [];

      for (let i = 0; i < yboxNum * 5; i++) {
        if (i % 5 == 0) {
          continue;
        }
        let line = `M${this.fmtNum(offsetX + pixmm - lineWidth / 2)} ${this.fmtNum(offsetY + pixmm * i)} H ${this.fmtNum(offsetX + boxWidth * xboxNum)}`;
        lines.push(line);
      }

      //let smallGridPath = `<path style="fill:none;stroke-dasharray:${lineWidth},${pixmm - lineWidth};stroke:${color};stroke-width:${lineWidth};" d="${lines.join(" ")}"></path>`;
      const smallGridPath = document.createElementNS(this.ns.svgNS, "path");

      smallGridPath.setAttribute("fill", "none");
      smallGridPath.setAttribute("stroke", color);
      smallGridPath.setAttribute("stroke-width", lineWidth);
      smallGridPath.setAttribute("stroke-dasharray", `${lineWidth},${pixmm - lineWidth}`);
      smallGridPath.setAttribute("d", lines.join(" "));
      return { smallGridPath, offsetX };
    },
    fmtNum: function (input) {
      let number = Number(input);

      if (isNaN(number)) {
        return input;
      }
      if (Number.isInteger(number)) {
        return input;
      }
      return number.toFixed(3);
    }

  };

  function SVGTempDesigner() { }

  SVGTempDesigner.prototype.init = function (menuId, paperId, attrId, paper) {
    this.menuId = menuId;
    this.paperId = paperId;
    this.attrId = attrId;
    this.paper = paper;
    this.selectedElement = null;
    this.svg = svgTempUtils.createSVG(paper);
    $(`#${this.paperId}`).html("");
    $(`#${this.paperId}`).append(this.svg);
    this.createMenu();
    this.setElementKeyEvent();
    this.setSelectedEvent();
  };

  SVGTempDesigner.prototype.createMenu = function () {
    $(`#${this.menuId}`).html("");
    for (let i = 0; i < svgElementMenu.elements.length; i++) {
      const el = svgElementMenu.elements[i];
      const item = $(
        `<li data-type="${el.type}" data-index=${i}>${el.name}</li>`
      );
      $(`#${this.menuId}`).append(item);
      this.setMenuDraggable(item, el);
    }
  };

  SVGTempDesigner.prototype.setMenuDraggable = function ($element, config) {
    let ctx = this;
    $element.on("mousedown", function (e) {
      e.preventDefault();
      const opacity = 0.5;

      // 设置幽灵元素
      const $ghost = $("#drag-ghost");
      $ghost.html(`${config.ghost}`);
      $ghost.css({
        display: "block",
        left: e.pageX + 10,
        top: e.pageY + 10,
      });

      // 鼠标移动事件
      $(document).on("mousemove.drag", function (e) {
        $ghost.css({
          left: e.pageX + 10,
          top: e.pageY + 10,
        });
      });

      // 鼠标释放事件
      $(document).on("mouseup.drag", function (e) {
        $(document).off("mousemove.drag mouseup.drag");
        $ghost.hide();

        // 检查是否释放到SVG上
        const svgOffset = ctx.svg.offset();
        const svgWidth = ctx.svg.width();
        const svgHeight = ctx.svg.height();

        if (
          e.pageX >= svgOffset.left &&
          e.pageX <= svgOffset.left + svgWidth &&
          e.pageY >= svgOffset.top &&
          e.pageY <= svgOffset.top + svgHeight
        ) {
          // 计算在SVG中的位置
          const x = e.pageX - svgOffset.left;
          const y = e.pageY - svgOffset.top;

          // 根据类型创建元素
          ctx.createSvgElement(config, x, y);
        }
      });
    });
  };

  SVGTempDesigner.prototype.createSvgElement = function (config, x, y) {
    const svg = this.svg;
    const opts = {
      type: config.type,
      attr: Object.assign(config.attr, { x, y }),
      field: config.field,
      paper: this.paper
    };
    let element = svgTempUtils.createElement(opts);
    svg.append(element);
    this.makeElementDraggable(element);
    $(element).trigger("click");
  };

  SVGTempDesigner.prototype.makeElementDraggable = function (element) {
    const ctx = this;
    const $element = $(element);
    let isDragging = false;
    let startX, startY, startTransformX, startTransformY;
    $element.addClass("draggable");
    $element.on("mousedown", function (e) {
      e.stopPropagation();

      ctx.svg.find(".selected").removeClass("selected");
      $element.addClass("selected");

      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

      const transform = $element.attr("transform");
      if (transform) {
        const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
        if (match) {
          startTransformX = parseFloat(match[1]);
          startTransformY = parseFloat(match[2]);
        }
      } else {
        startTransformX = 0;
        startTransformY = 0;
      }

      document.body.style.userSelect = "none";
    });

    $(document).on("mousemove", function (e) {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      const newX = startTransformX + dx;
      const newY = startTransformY + dy;

      $element.attr("transform", `translate(${newX}, ${newY})`);
    });

    $(document).on("mouseup", function () {
      isDragging = false;
      document.body.style.userSelect = "";
    });
  };

  SVGTempDesigner.prototype.setElementKeyEvent = function () {
    let moveInterval;
    const ctx = this;

    $(document).on("keydown", function (e) {
      if (e.key === "Delete") {
        if (ctx.selectedElement) {
          ctx.selectedElement.remove();
          ctx.selectedElement = null;
        }
        return;
      }

      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {

        if (e.target.nodeName != "BODY") {
          return;
        }

        e.preventDefault();

        // if (!ctx.selectedElement && ctx.svg.find(".draggable").length > 0) {
        //   ctx.selectedElement = $(ctx.svg.find(".draggable")[0]);
        //   ctx.selectedElement.addClass("selected");
        // }

        if (!ctx.selectedElement) return;


        if (moveInterval) clearInterval(moveInterval);

        const step = 1;

        function moveOnce() {
          const transform = ctx.selectedElement.attr("transform") || "translate(0, 0)";
          const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
          let x = match ? parseFloat(match[1]) : 0;
          let y = match ? parseFloat(match[2]) : 0;

          switch (e.key) {
            case "ArrowUp":
              y -= step;
              break;
            case "ArrowDown":
              y += step;
              break;
            case "ArrowLeft":
              x -= step;
              break;
            case "ArrowRight":
              x += step;
              break;
          }

          ctx.selectedElement.attr("transform", `translate(${x}, ${y})`);
        }

        moveOnce();

        // 长按持续移动
        if (e.originalEvent && e.originalEvent.repeat) {
          moveInterval = setInterval(moveOnce, 50);
        }
      }
    });

    $(document).on("keyup", function (e) {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        if (moveInterval) {
          clearInterval(moveInterval);
          moveInterval = null;
        }
      }
    });
  };

  SVGTempDesigner.prototype.setSelectedEvent = function () {
    const ctx = this;
    ctx.svg.on("click", ".draggable", function (e) {
      e.stopPropagation();
      ctx.svg.find(".selected").removeClass("selected");
      $(this).addClass("selected");
      ctx.selectedElement = $(this);
      ctx.viewSelectedAttr(this);
    });

    ctx.svg.on("click", function () {
      ctx.svg.find(".selected").removeClass("selected");
      ctx.selectedElement = null;
      $(`#${ctx.attrId}`).html("");
    });
  };

  SVGTempDesigner.prototype.viewSelectedAttr = function (element) {
    let opts = JSON.parse($(element).attr("data-opts"));
    if (opts.type === "text") {
      this.viewTextAttr(element, opts);
    }
    else if (opts.type === "line") {
      this.viewLineAttr(element, opts);
    }
    else if (opts.type === "image") {
      this.viewImageAttr(element, opts);
    }
    else if (opts.type === "table") {
      this.viewTableAttr(element, opts);
    }
    else {
      $(`#${this.attrId}`).html("");
    }
  }

  SVGTempDesigner.prototype.getTransform = function (element) {
    const transform = $(element).attr("transform");
    if (!transform) {
      return { x: 0, y: 0 };
    }
    const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
    let x = match ? parseFloat(match[1]) : 0;
    let y = match ? parseFloat(match[2]) : 0;
    return { x, y };
  }

  SVGTempDesigner.prototype.viewTextAttr = function (element, opts) {
    const id = "text-settings-form";
    const temp = `
      <form id="${id}">
        <h3>文本</h3>
        <div class="settings-group">
            <label>内容</label>
            <input type="text" class="form-input" name="field.textContent" value="${opts.field.textContent}">
        </div>
        <div class="settings-group">
            <label>字体大小</label>
            <input type="text" class="form-input" name="attr.font-size" value="${opts.attr['font-size']}">
        </div>

        <div class="settings-group">
            <label>布局</label>
            <select class="form-input" name="attr.align">
              <option value="">无</option>
              <option value="center">居中</option>
              <option value="left">居左</option>
              <option value="right">居右</option>
            </select>
        </div>
      </form>
    `;

    const $container = $(`#${this.attrId}`).html(temp);

    $container.find("select[name='attr.align']").val(opts.attr.align);

    $container.off("change", ".form-input").on("change", ".form-input", () => {
      const formData = objUtils.getFormData(id);
      objUtils.deepMerge(opts, formData);

      let pos = this.getTransform(element);
      opts.attr.transform = `translate(${pos.x}, ${pos.y})`;

      if (opts.attr.align === "center") {
        let pos = this.getTransform(element);
        opts.attr.x = this.svg.width() / 2;
        opts.attr.transform = `translate(0, ${pos.y})`;
        opts.attr["text-anchor"] = "middle";
      }
      else if (opts.attr.align === "left") {
        let pos = this.getTransform(element);
        opts.attr["text-anchor"] = "start";
        opts.attr.x = 0;
      }
      else if (opts.attr.align === "right") {
        let pos = this.getTransform(element);
        opts.attr["text-anchor"] = "end";
        opts.attr.x = this.svg.width();
      }

      svgTempUtils.updateElemet(element, opts);
    });
  }

  SVGTempDesigner.prototype.viewLineAttr = function (element, opts) {
    const id = "line-attr-view";
    const temp = `
      <div id="${id}">
        <h3>分割线</h3>
        <div class="settings-group">
            <label>线宽</label>
            <input type="text" name="attr.stroke-width" class="form-input" value="${opts.attr['stroke-width']}">
        </div>
        <div class="settings-group">
            <label>线长</label>
            <input type="number" name="attr.lineLength" class="form-input" value="${opts.attr.lineLength}">
        </div>
      </div>
        `;

    const $container = $(`#${this.attrId}`).html(temp);

    $container.off("change", ".form-input").on("change", ".form-input", () => {
      const formData = objUtils.getFormData(id);
      objUtils.deepMerge(opts, formData);

      opts.attr.x2 = opts.attr.x1 + new Number(opts.attr.lineLength);

      svgTempUtils.updateElemet(element, opts);
    });
  }

  SVGTempDesigner.prototype.viewTableAttr = function (element, opts) {

    const id = "table-attr-view";
    const temp = `
      <div id="${id}">
        <h3>表格</h3>
        <div class="settings-group">
            <label>行</label>
            <input type="number" name="attr.rows" class="form-input" value="${opts.attr.rows}">
        </div>
        <div class="settings-group">
            <label>列</label>
            <input type="number" name="attr.cols" class="form-input" value="${opts.attr.cols}">
        </div>
        <div class="settings-group">
            <label>字体大小</label>
            <input type="number" name="attr.font-size" class="form-input" value="${opts.attr['font-size']}">
        </div>
        <div class="settings-group">
            <label>文本布局</label>
            <select class="form-input" name="attr.textAlign">
              <option value="left">居左</option>
              <option value="middle">居中</option>
              <option value="right">居右</option>
            </select>
        </div>
        <div class="settings-group">
            <label>列宽</label>
            <input type="text" name="attr.cellWidths" class="form-input" value="${opts.attr.cellWidths.join(",")}">
        </div>
        <div class="settings-group">
            <label>行高</label>
            <input type="text" name="attr.cellHeights" class="form-input" value="${opts.attr.cellHeights.join(",")}">
        </div>
        <div class="settings-group">
            <span>边框</label>
            <input type="checkbox" name="attr.showBorder" class="form-input" style="width:50px" ${opts.attr.showBorder ? "checked" : ""}>
            <span>网格</label>
            <input type="checkbox" name="attr.showGridLines" class="form-input" style="width:50px" ${opts.attr.showGridLines ? "checked" : ""}>
        </div>
        <h3></h3>
        <div class="settings-group">
            <label>表格内容</label>
            <div id="edit-table-text"></div>
        </div>
      </div>
        `;

    const $container = $(`#${this.attrId}`).html(temp);
    const ctx = this;

    const editTableId = "edit-table-text";
    function flsuTable() {
      const $editTable = ctx.genEditableTable(opts.attr.cellContent);

      $editTable.off("change", ".table-text-input");

      $(`#${editTableId}`).html("");
      $(`#${editTableId}`).append($editTable);

      $editTable.on("change", ".table-text-input", () => {
        opts.attr.cellContent = ctx.getEditableTableVal(editTableId);
        svgTempUtils.updateTable(element, opts);
      });
    }

    flsuTable();

    $container.off("change", ".form-input").on("change", ".form-input", () => {
      const formData = objUtils.getFormData(id);

      formData.attr.cellWidths = formData.attr.cellWidths.split(',').map(Number);
      formData.attr.cellHeights = formData.attr.cellHeights.split(',').map(Number);

      objUtils.deepMerge(opts, formData, { arrayMerge: 'replace' });

      opts.attr.cols = parseInt(opts.attr.cols);
      opts.attr.rows = parseInt(opts.attr.rows);

      opts.attr.cellContent = this.getEditableTableVal(editTableId);
      opts.attr.cellContent = objUtils.adjust2DArrayLen(opts.attr.cellContent, opts.attr.rows, opts.attr.cols, "这是一个文本");
      flsuTable();

      objUtils.adjustArrayLen(opts.attr.cellWidths, opts.attr.cols, 100);
      objUtils.adjustArrayLen(opts.attr.cellHeights, opts.attr.rows, 20);

      $("input[name='attr.cellWidths']").val(opts.attr.cellWidths.join(","));
      $("input[name='attr.cellHeights']").val(opts.attr.cellHeights.join(","));

      svgTempUtils.updateTable(element, opts);
    });
    //input
  }

  SVGTempDesigner.prototype.viewImageAttr = function (element, opts) {
    const id = "image-attr-view";
    const temp = `
      <div id="${id}">
        <h3>文本</h3>
        <div class="settings-group">
            <label>宽度</label>
            <input type="number" class="form-input" name="attr.width" value="${opts.attr.width}">
        </div>
        <div class="settings-group">
            <label>高度</label>
            <input type="number" class="form-input" name="attr.height" value="${opts.attr.height}">
        </div>
         <div class="settings-group">
            <label>地址</label>
            <input type="text" class="form-input" name="attr.href" value="${opts.attr.href}">
        </div>
      </div>
        `;

    const $container = $(`#${this.attrId}`).html(temp);

    $container.off("change", ".form-input").on("change", ".form-input", () => {
      const formData = objUtils.getFormData(id);
      objUtils.deepMerge(opts, formData, { arrayMerge: 'replace' });
      svgTempUtils.updateElemet(element, opts);
    });

  }

  SVGTempDesigner.prototype.genEditableTable = function (array) {
    const $table = $("<table>", { class: "editable-table" });

    $.each(array, function (rowIndex, row) {
      const $tr = $("<tr></tr>");

      $.each(row, function (colIndex, cell) {
        const $td = $("<td></td>");
        const $input = $("<input>", {
          type: "text",
          value: cell,
          "data-row": rowIndex,
          "data-col": colIndex,
          "class": "table-text-input"
        });

        $td.append($input);
        $tr.append($td);
      });

      $table.append($tr);
    });

    return $table;
  }

  SVGTempDesigner.prototype.getEditableTableVal = function (id) {
    const updatedArray = [];

    $(`#${id} input`).each(function () {
      const rowIndex = parseInt($(this).data("row"));
      const colIndex = parseInt($(this).data("col"));
      const value = $(this).val();

      if (!updatedArray[rowIndex]) {
        updatedArray[rowIndex] = [];
      }

      updatedArray[rowIndex][colIndex] = value;
    });

    return updatedArray;
  }

  SVGTempDesigner.prototype.export = function (filename) {
    const $svg = this.svg;
    if ($svg.length === 0) {
      console.error(`SVG 元素 #${svgId} 未找到！`);
      return;
    }

    try {
      const svgData = new XMLSerializer().serializeToString($svg[0]);
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('导出失败:', error);
    }
  }

  SVGTempDesigner.prototype.load = function (menuId, paperId, attrId, svgContent) {
    const $svg = $(svgContent);
    const paper = JSON.parse($svg.attr("data-opts"));
    this.svg = $svg;
    this.menuId = menuId;
    this.paperId = paperId;
    this.attrId = attrId;
    this.paper = paper;
    this.selectedElement = null;
    $(`#${this.paperId}`).html("");
    $(`#${this.paperId}`).append($svg);
    this.createMenu();
    this.setElementKeyEvent();
    this.setSelectedEvent();
    $svg.find(".draggable").each((index, element) => { this.makeElementDraggable(element) });
  }

  window.SVGTempDesigner = SVGTempDesigner;
});
