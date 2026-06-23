"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/pendingTransactions/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/pendingTransactions/index!./src/pages/pendingTransactions/index.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/pendingTransactions/index!./src/pages/pendingTransactions/index.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _services_recurring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/recurring */ "./src/services/recurring.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/pendingTransactions/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");











function PendingTransactionsPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    loadingId = _useState4[0],
    setLoadingId = _useState4[1];
  var pendingList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return list.filter(function (it) {
      return it.status === 'pending';
    });
  }, [list]);
  var refresh = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee() {
      var res, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return (0,_services_recurring__WEBPACK_IMPORTED_MODULE_4__.getPendingTransactions)();
          case 1:
            res = _context.v;
            setList(res);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[Pending] refresh failed', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载失败',
              icon: 'none'
            });
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function refresh() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    refresh();
  }, []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    refresh();
  });
  var confirmOne = /*#__PURE__*/function () {
    var _ref2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee2(p) {
      var _t2;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!loadingId) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setLoadingId(p.id);
            _context2.p = 2;
            _context2.n = 3;
            return (0,_services_recurring__WEBPACK_IMPORTED_MODULE_4__.confirmPendingTransaction)(p.id);
          case 3:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已入账',
              icon: 'success'
            });
            refresh();
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error('[Pending] confirm failed', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '确认失败',
              icon: 'none'
            });
          case 5:
            _context2.p = 5;
            setLoadingId(null);
            return _context2.f(5);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4, 5, 6]]);
    }));
    return function confirmOne(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var skipOne = /*#__PURE__*/function () {
    var _ref3 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee3(p) {
      var res, _t3;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '跳过',
              content: '确认跳过这笔待确认账单？'
            });
          case 1:
            res = _context3.v;
            if (res.confirm) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2);
          case 2:
            if (!loadingId) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2);
          case 3:
            setLoadingId(p.id);
            _context3.p = 4;
            _context3.n = 5;
            return (0,_services_recurring__WEBPACK_IMPORTED_MODULE_4__.skipPendingTransaction)(p.id);
          case 5:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已跳过',
              icon: 'success'
            });
            refresh();
            _context3.n = 7;
            break;
          case 6:
            _context3.p = 6;
            _t3 = _context3.v;
            console.error('[Pending] skip failed', _t3);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '操作失败',
              icon: 'none'
            });
          case 7:
            _context3.p = 7;
            setLoadingId(null);
            return _context3.f(7);
          case 8:
            return _context3.a(2);
        }
      }, _callee3, null, [[4, 6, 7, 8]]);
    }));
    return function skipOne(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container,
    children: [pendingList.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].desc,
        children: "\u6682\u65E0\u5F85\u786E\u8BA4\u8D26\u5355"
      })
    }), pendingList.map(function (p) {
      var amountText = "".concat(p.type === 'expense' ? '-' : '+').concat(Number(p.amount).toFixed(2));
      var dateText = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(p.date).format('YYYY-MM-DD');
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].item,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].topRow,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title,
              children: p.note || '周期账单'
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: p.type === 'expense' ? _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].amountExpense : _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].amountIncome,
              children: amountText
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].desc,
            children: ["\u5165\u8D26\u65E5\u671F\uFF1A", dateText]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btnRow,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Button, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn,
              disabled: loadingId === p.id,
              onClick: function onClick() {
                return skipOne(p);
              },
              children: "\u8DF3\u8FC7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Button, {
              className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btnPrimary),
              disabled: loadingId === p.id,
              onClick: function onClick() {
                return confirmOne(p);
              },
              children: "\u786E\u8BA4\u5165\u8D26"
            })]
          })]
        })
      }, p.id);
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (PendingTransactionsPage);

/***/ }),

/***/ "./src/pages/pendingTransactions/index.tsx":
/*!*************************************************!*\
  !*** ./src/pages/pendingTransactions/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_pendingTransactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/pendingTransactions/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/pendingTransactions/index!./src/pages/pendingTransactions/index.tsx");


var config = {"navigationBarTitleText":"待确认账单"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_pendingTransactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/pendingTransactions/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_pendingTransactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_pendingTransactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_pendingTransactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_pendingTransactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/pendingTransactions/index.module.scss":
/*!*********************************************************!*\
  !*** ./src/pages/pendingTransactions/index.module.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___PyOsq","item":"index-module__item___rtlb7","topRow":"index-module__topRow___ugEHO","title":"index-module__title___CUvX3","amountExpense":"index-module__amountExpense___DubFH","amountIncome":"index-module__amountIncome___WgFFu","desc":"index-module__desc___ejINx","btnRow":"index-module__btnRow___rHIJu","btn":"index-module__btn___NNZ7w","btnPrimary":"index-module__btnPrimary___ZDO35","btnDanger":"index-module__btnDanger___cl50R"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/pendingTransactions/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map