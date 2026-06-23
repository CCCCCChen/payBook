"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/recurringTemplates/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/recurringTemplates/index!./src/pages/recurringTemplates/index.tsx":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/recurringTemplates/index!./src/pages/recurringTemplates/index.tsx ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_Cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Cell */ "./src/components/Cell/index.tsx");
/* harmony import */ var _components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PrimaryButton */ "./src/components/PrimaryButton/index.tsx");
/* harmony import */ var _services_accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/accounts */ "./src/services/accounts.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/categories */ "./src/services/categories.ts");
/* harmony import */ var _services_recurring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/recurring */ "./src/services/recurring.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/recurringTemplates/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");














function RecurringTemplatesPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    templates = _useState2[0],
    setTemplates = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    pending = _useState4[0],
    setPending = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState5, 2),
    accounts = _useState6[0],
    setAccounts = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState7, 2),
    categories = _useState8[0],
    setCategories = _useState8[1];
  var accountMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var map = new Map();
    accounts.forEach(function (a) {
      return map.set(a.id, a.name);
    });
    return map;
  }, [accounts]);
  var categoryMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var map = new Map();
    categories.forEach(function (c) {
      return map.set(c.id, c.name);
    });
    return map;
  }, [categories]);
  var refresh = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, t, p, a, c, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return Promise.all([(0,_services_recurring__WEBPACK_IMPORTED_MODULE_7__.getRecurringTemplates)(), (0,_services_recurring__WEBPACK_IMPORTED_MODULE_7__.getPendingTransactions)(), (0,_services_accounts__WEBPACK_IMPORTED_MODULE_5__.getAccounts)(), (0,_services_categories__WEBPACK_IMPORTED_MODULE_6__.getCategories)()]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_yield$Promise$all, 4);
            t = _yield$Promise$all2[0];
            p = _yield$Promise$all2[1];
            a = _yield$Promise$all2[2];
            c = _yield$Promise$all2[3];
            setTemplates(t);
            setPending(p.filter(function (it) {
              return it.status === 'pending';
            }));
            setAccounts(a);
            setCategories(c);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[RecurringTemplates] refresh failed', _t);
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
  var openEdit = function openEdit(id) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/recurringEdit/index".concat(id ? "?id=".concat(id) : '')
    });
  };
  var openPending = function openPending() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/pendingTransactions/index'
    });
  };
  var removeTemplate = /*#__PURE__*/function () {
    var _ref2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee2(tpl) {
      var res, _t2;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '删除模板',
              content: "\u786E\u8BA4\u5220\u9664\u300C".concat(tpl.name, "\u300D\uFF1F")
            });
          case 1:
            res = _context2.v;
            if (res.confirm) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            _context2.p = 2;
            _context2.n = 3;
            return (0,_services_recurring__WEBPACK_IMPORTED_MODULE_7__.deleteRecurringTemplate)(tpl.id);
          case 3:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已删除',
              icon: 'success'
            });
            refresh();
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error('[RecurringTemplates] delete failed', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '删除失败',
              icon: 'none'
            });
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return function removeTemplate(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].topRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].half,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: "\u65B0\u5EFA\u6A21\u677F",
          onClick: function onClick() {
            return openEdit();
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].half,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: "\u5F85\u786E\u8BA4 ".concat(pending.length),
          onClick: openPending
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].sectionTitle,
      children: "\u6A21\u677F\u5217\u8868"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [templates.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "\u6682\u65E0\u6A21\u677F",
        desc: "\u70B9\u4E0A\u65B9\u201C\u65B0\u5EFA\u6A21\u677F\u201D\u5F00\u59CB"
      }), templates.map(function (t) {
        var accountName = accountMap.get(t.account_id) || "\u8D26\u6237#".concat(t.account_id);
        var categoryName = t.category_id && categoryMap.get(t.category_id) ? categoryMap.get(t.category_id) : '未指定分类';
        var desc = "".concat(t.type === 'expense' ? '支出' : '收入', " \xB7 ").concat(accountName, " \xB7 ").concat(categoryName, " \xB7 ").concat(t.cycle_type === 'weekly' ? "\u6BCF\u5468".concat(t.cycle_day) : "\u6BCF\u6708".concat(t.cycle_day, "\u53F7"));
        var right = "".concat(t.is_active ? '启用' : '停用', " \xB7 ").concat(Number(t.amount).toFixed(2));
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: t.name,
            desc: "".concat(desc, " \xB7 \u4E0B\u6B21 ").concat(t.next_due_date),
            rightText: right,
            onClick: function onClick() {
              return openEdit(t.id);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].dangerBtn,
            onClick: function onClick() {
              return removeTemplate(t);
            },
            children: "\u5220\u9664"
          })]
        }, t.id);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hint,
      children: "weekly \u7684 cycle_day \u5EFA\u8BAE\u7528 0-6\uFF080=\u5468\u65E5\uFF09\uFF0Cmonthly \u7528 1-31\u3002"
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (RecurringTemplatesPage);

/***/ }),

/***/ "./src/pages/recurringTemplates/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/recurringTemplates/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringTemplates_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/recurringTemplates/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/recurringTemplates/index!./src/pages/recurringTemplates/index.tsx");


var config = {"navigationBarTitleText":"周期性账单"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringTemplates_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/recurringTemplates/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringTemplates_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringTemplates_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringTemplates_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringTemplates_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/recurringTemplates/index.module.scss":
/*!********************************************************!*\
  !*** ./src/pages/recurringTemplates/index.module.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___sZkah","sectionTitle":"index-module__sectionTitle___KNRRQ","topRow":"index-module__topRow___pcbmH","half":"index-module__half___jLSfE","hint":"index-module__hint___LL9i9","dangerBtn":"index-module__dangerBtn___f5Tvq"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/recurringTemplates/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map