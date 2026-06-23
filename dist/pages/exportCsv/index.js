"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/exportCsv/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/exportCsv/index!./src/pages/exportCsv/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/exportCsv/index!./src/pages/exportCsv/index.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PrimaryButton */ "./src/components/PrimaryButton/index.tsx");
/* harmony import */ var _services_export__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/export */ "./src/services/export.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/exportCsv/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");












function ExportCsvPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().startOf('month').format('YYYY-MM-DD')),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    start = _useState2[0],
    setStart = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD')),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    end = _useState4[0],
    setEnd = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var runExport = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
      var tempFilePath, saved, filePath, _t, _t2;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!loading) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!dayjs__WEBPACK_IMPORTED_MODULE_2___default()(start).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(end))) {
              _context.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '开始日期不能晚于结束日期',
              icon: 'none'
            });
            return _context.a(2);
          case 2:
            setLoading(true);
            _context.p = 3;
            _context.n = 4;
            return (0,_services_export__WEBPACK_IMPORTED_MODULE_5__.downloadCsv)(start, end);
          case 4:
            tempFilePath = _context.v;
            _context.n = 5;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().saveFile({
              tempFilePath: tempFilePath
            });
          case 5:
            saved = _context.v;
            filePath = saved.savedFilePath || tempFilePath;
            _context.p = 6;
            _context.n = 7;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().openDocument({
              filePath: filePath,
              fileType: 'csv'
            });
          case 7:
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t = _context.v;
            console.error('[Export] openDocument failed', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已导出（文件已保存）',
              icon: 'success'
            });
          case 9:
            _context.n = 11;
            break;
          case 10:
            _context.p = 10;
            _t2 = _context.v;
            console.error('[Export] export failed', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '导出失败',
              icon: 'none'
            });
          case 11:
            _context.p = 11;
            setLoading(false);
            return _context.f(11);
          case 12:
            return _context.a(2);
        }
      }, _callee, null, [[6, 8], [3, 10, 11, 12]]);
    }));
    return function runExport() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].sectionTitle,
      children: "\u65E5\u671F\u8303\u56F4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Picker, {
          mode: "date",
          value: start,
          onChange: function onChange(e) {
            return setStart(e.detail.value);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].pickerText,
              children: ["\u5F00\u59CB\uFF1A", start]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Picker, {
          mode: "date",
          value: end,
          onChange: function onChange(e) {
            return setEnd(e.detail.value);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].pickerText,
              children: ["\u7ED3\u675F\uFF1A", end]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tip,
        children: "\u5BFC\u51FA\u7684 CSV \u4E3A UTF-8\uFF08\u5E26 BOM\uFF09\uFF0CExcel \u6253\u5F00\u4E0D\u4F1A\u4E71\u7801\u3002"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].section,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: loading ? '导出中…' : '开始导出',
        disabled: loading,
        onClick: runExport
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (ExportCsvPage);

/***/ }),

/***/ "./src/pages/exportCsv/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/exportCsv/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exportCsv_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/exportCsv/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/exportCsv/index!./src/pages/exportCsv/index.tsx");


var config = {"navigationBarTitleText":"导出 CSV"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exportCsv_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/exportCsv/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exportCsv_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exportCsv_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exportCsv_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_exportCsv_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/services/export.ts":
/*!********************************!*\
  !*** ./src/services/export.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadCsv: function() { return /* binding */ downloadCsv; }
/* harmony export */ });
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/auth */ "./src/store/auth.ts");
/* harmony import */ var _store_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/settings */ "./src/store/settings.ts");
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/query */ "./src/utils/query.ts");






function downloadCsv(_x, _x2) {
  return _downloadCsv.apply(this, arguments);
}
function _downloadCsv() {
  _downloadCsv = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee(start, end) {
    var _useAuthStore$getStat, token, _useSettingsStore$get, baseUrl, qs, url, res;
    return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _useAuthStore$getStat = _store_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthStore.getState(), token = _useAuthStore$getStat.token;
          _useSettingsStore$get = _store_settings__WEBPACK_IMPORTED_MODULE_2__.useSettingsStore.getState(), baseUrl = _useSettingsStore$get.baseUrl;
          qs = (0,_utils_query__WEBPACK_IMPORTED_MODULE_5__.toQueryString)({
            start: start,
            end: end
          });
          url = "".concat(baseUrl, "/export/csv").concat(qs);
          _context.n = 1;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().downloadFile({
            url: url,
            header: token ? {
              Authorization: "Bearer ".concat(token)
            } : {}
          });
        case 1:
          res = _context.v;
          if (!(res.statusCode && res.statusCode >= 200 && res.statusCode < 300 && res.tempFilePath)) {
            _context.n = 2;
            break;
          }
          return _context.a(2, res.tempFilePath);
        case 2:
          console.error('[Export] download failed', {
            url: url,
            statusCode: res.statusCode
          });
          throw new Error('download_failed');
        case 3:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _downloadCsv.apply(this, arguments);
}

/***/ }),

/***/ "./src/pages/exportCsv/index.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/exportCsv/index.module.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___Qyyqp","sectionTitle":"index-module__sectionTitle___OpDkN","picker":"index-module__picker___hNbkl","pickerText":"index-module__pickerText___PpI57","section":"index-module__section___uvbQL","tip":"index-module__tip___kU7op"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/exportCsv/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map