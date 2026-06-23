"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx ***!
  \**************************************************************************************************************/
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
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/auth */ "./src/services/auth.ts");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/auth */ "./src/store/auth.ts");
/* harmony import */ var _store_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/settings */ "./src/store/settings.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/mine/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");














function MinePage() {
  var _useAuthStore = (0,_store_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthStore)(),
    token = _useAuthStore.token,
    setToken = _useAuthStore.setToken,
    logout = _useAuthStore.logout;
  var _useSettingsStore = (0,_store_settings__WEBPACK_IMPORTED_MODULE_7__.useSettingsStore)(),
    baseUrl = _useSettingsStore.baseUrl,
    setBaseUrl = _useSettingsStore.setBaseUrl;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(baseUrl),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    editingBaseUrl = _useState2[0],
    setEditingBaseUrl = _useState2[1];
  var shortToken = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!token) return '未登录';
    return "".concat(token.slice(0, 10), "...").concat(token.slice(-6));
  }, [token]);
  var saveBaseUrl = function saveBaseUrl() {
    setBaseUrl(editingBaseUrl.trim());
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '已保存',
      icon: 'success'
    });
  };
  var goRecurring = function goRecurring() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/recurringTemplates/index'
    });
  };
  var goExport = function goExport() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/exportCsv/index'
    });
  };
  var goTransactions = function goTransactions() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/transactions/index'
    });
  };
  var goTransfer = function goTransfer() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/transfer/index'
    });
  };
  var relogin = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee() {
      var res, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.loginWithWechatCode)();
          case 1:
            res = _context.v;
            setToken(res.access_token);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '登录成功',
              icon: 'success'
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[Mine] relogin failed', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '登录失败',
              icon: 'none'
            });
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function relogin() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].title,
      children: "\u6211\u7684"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].sectionTitle,
        children: "\u5FEB\u6377\u5165\u53E3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "\u8D26\u5355\u5217\u8868",
          desc: "\u641C\u7D22\u4E0E\u7B5B\u9009",
          onClick: goTransactions
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "\u8F6C\u8D26",
          desc: "\u8D26\u6237\u4E4B\u95F4\u5212\u8F6C",
          onClick: goTransfer
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "\u5468\u671F\u6027\u8D26\u5355",
          desc: "\u521B\u5EFA\u6A21\u677F\u3001\u751F\u6210\u5F85\u786E\u8BA4\u3001\u786E\u8BA4\u5165\u8D26",
          onClick: goRecurring
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "\u5BFC\u51FA CSV",
          desc: "\u6309\u65E5\u671F\u8303\u56F4\u5BFC\u51FA\u8D26\u5355",
          onClick: goExport
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].sectionTitle,
        children: "\u540E\u7AEF\u5730\u5740"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].input,
        value: editingBaseUrl,
        onInput: function onInput(e) {
          return setEditingBaseUrl(e.detail.value);
        },
        placeholder: "\u4F8B\u5982 https://api.example.com/api/v1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].tip,
        children: "\u771F\u673A\u8C03\u8BD5\u4E0D\u80FD\u8BBF\u95EE localhost\uFF1B\u53EA\u6709\u672C\u673A\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u8054\u8C03\u65F6\u624D\u5EFA\u8BAE\u586B http://localhost:8000/api/v1\u3002"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].btnRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].half,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "\u4FDD\u5B58",
            size: "sm",
            onClick: saveBaseUrl
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].half,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "\u91CD\u65B0\u767B\u5F55",
            size: "sm",
            onClick: relogin
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].sectionTitle,
        children: "\u767B\u5F55\u72B6\u6001"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "Token",
          desc: shortToken
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].btnRow,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: "\u9000\u51FA\u767B\u5F55",
          size: "sm",
          onClick: function onClick() {
            logout();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已退出',
              icon: 'success'
            });
          }
        })
      })]
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (MinePage);

/***/ }),

/***/ "./src/pages/mine/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/mine/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx");


var config = {"navigationBarTitleText":"我的"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/mine/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/mine/index.module.scss":
/*!******************************************!*\
  !*** ./src/pages/mine/index.module.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___bs1ya","title":"index-module__title___wUH8C","section":"index-module__section___SwLgm","sectionTitle":"index-module__sectionTitle___vTFqz","input":"index-module__input___IPoUU","tip":"index-module__tip___W_CbL","btnRow":"index-module__btnRow___dKWqn","half":"index-module__half___t5KPq"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/mine/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map