"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/transfer/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/transfer/index!./src/pages/transfer/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/transfer/index!./src/pages/transfer/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PrimaryButton */ "./src/components/PrimaryButton/index.tsx");
/* harmony import */ var _services_accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/accounts */ "./src/services/accounts.ts");
/* harmony import */ var _services_transactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/transactions */ "./src/services/transactions.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/transfer/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");













function TransferPage() {
  var _accounts$find, _accounts$find2;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState3, 2),
    accounts = _useState4[0],
    setAccounts = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState5, 2),
    fromAccountId = _useState6[0],
    setFromAccountId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState7, 2),
    toAccountId = _useState8[0],
    setToAccountId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState9, 2),
    amount = _useState0[0],
    setAmount = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD')),
    _useState10 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState1, 2),
    date = _useState10[0],
    setDate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState11, 2),
    note = _useState12[0],
    setNote = _useState12[1];
  var accountOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return accounts.map(function (a) {
      return a.name;
    });
  }, [accounts]);
  var fromIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!fromAccountId) return 0;
    var idx = accounts.findIndex(function (a) {
      return a.id === fromAccountId;
    });
    return idx >= 0 ? idx : 0;
  }, [accounts, fromAccountId]);
  var toIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!toAccountId) return 0;
    var idx = accounts.findIndex(function (a) {
      return a.id === toAccountId;
    });
    return idx >= 0 ? idx : 0;
  }, [accounts, toAccountId]);
  var loadAccounts = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee() {
      var res, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return (0,_services_accounts__WEBPACK_IMPORTED_MODULE_5__.getAccounts)();
          case 1:
            res = _context.v;
            setAccounts(res);
            if (res.length >= 2) {
              if (!fromAccountId) setFromAccountId(res[0].id);
              if (!toAccountId) setToAccountId(res[1].id);
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[Transfer] load accounts failed', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载账户失败',
              icon: 'none'
            });
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadAccounts() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadAccounts();
  }, []);
  var submit = /*#__PURE__*/function () {
    var _ref2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee2() {
      var amt, _t2;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!loading) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (!(!fromAccountId || !toAccountId)) {
              _context2.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请选择账户',
              icon: 'none'
            });
            return _context2.a(2);
          case 2:
            if (!(fromAccountId === toAccountId)) {
              _context2.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '转出/转入账户不能相同',
              icon: 'none'
            });
            return _context2.a(2);
          case 3:
            amt = Number(amount);
            if (!(!Number.isFinite(amt) || amt <= 0)) {
              _context2.n = 4;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入正确金额',
              icon: 'none'
            });
            return _context2.a(2);
          case 4:
            setLoading(true);
            _context2.p = 5;
            _context2.n = 6;
            return (0,_services_transactions__WEBPACK_IMPORTED_MODULE_6__.transfer)({
              from_account_id: fromAccountId,
              to_account_id: toAccountId,
              amount: amt,
              date: date,
              note: note.trim()
            });
          case 6:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '转账成功',
              icon: 'success'
            });
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
            _context2.n = 8;
            break;
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            console.error('[Transfer] submit failed', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '转账失败',
              icon: 'none'
            });
          case 8:
            _context2.p = 8;
            setLoading(false);
            return _context2.f(8);
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[5, 7, 8, 9]]);
    }));
    return function submit() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].sectionTitle,
      children: "\u8F6C\u8D26"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Picker, {
          mode: "selector",
          range: accountOptions,
          value: fromIndex,
          onChange: function onChange(e) {
            var _accounts$Number$id, _accounts$Number;
            return setFromAccountId((_accounts$Number$id = (_accounts$Number = accounts[Number(e.detail.value)]) === null || _accounts$Number === void 0 ? void 0 : _accounts$Number.id) !== null && _accounts$Number$id !== void 0 ? _accounts$Number$id : null);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].pickerText,
              children: ["\u8F6C\u51FA\uFF1A", fromAccountId ? (_accounts$find = accounts.find(function (a) {
                return a.id === fromAccountId;
              })) === null || _accounts$find === void 0 ? void 0 : _accounts$find.name : '选择账户']
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Picker, {
          mode: "selector",
          range: accountOptions,
          value: toIndex,
          onChange: function onChange(e) {
            var _accounts$Number$id2, _accounts$Number2;
            return setToAccountId((_accounts$Number$id2 = (_accounts$Number2 = accounts[Number(e.detail.value)]) === null || _accounts$Number2 === void 0 ? void 0 : _accounts$Number2.id) !== null && _accounts$Number$id2 !== void 0 ? _accounts$Number$id2 : null);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].pickerText,
              children: ["\u8F6C\u5165\uFF1A", toAccountId ? (_accounts$find2 = accounts.find(function (a) {
                return a.id === toAccountId;
              })) === null || _accounts$find2 === void 0 ? void 0 : _accounts$find2.name : '选择账户']
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].input,
          value: amount,
          type: "number",
          onInput: function onInput(e) {
            return setAmount(e.detail.value);
          },
          placeholder: "\u91D1\u989D"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Picker, {
          mode: "date",
          value: date,
          onChange: function onChange(e) {
            return setDate(e.detail.value);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].pickerText,
              children: ["\u65E5\u671F\uFF1A", date]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].input,
          value: note,
          onInput: function onInput(e) {
            return setNote(e.detail.value);
          },
          placeholder: "\u5907\u6CE8\uFF08\u53EF\u9009\uFF09"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].tip,
          children: "\u8F6C\u8D26\u4E0D\u4F1A\u8BA1\u5165\u6536\u5165/\u652F\u51FA\uFF0C\u53EA\u6539\u53D8\u8D26\u6237\u4F59\u989D\u3002"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: loading ? '提交中…' : '确认转账',
        disabled: loading,
        onClick: submit
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (TransferPage);

/***/ }),

/***/ "./src/pages/transfer/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/transfer/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transfer_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/transfer/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/transfer/index!./src/pages/transfer/index.tsx");


var config = {"navigationBarTitleText":"转账"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transfer_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/transfer/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transfer_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transfer_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transfer_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transfer_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/transfer/index.module.scss":
/*!**********************************************!*\
  !*** ./src/pages/transfer/index.module.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___xtzfP","sectionTitle":"index-module__sectionTitle___N9ucI","section":"index-module__section___ewoQe","picker":"index-module__picker___VJt7t","pickerText":"index-module__pickerText___xfPZR","input":"index-module__input___f9Rao","row":"index-module__row___sSC9H","half":"index-module__half___RNYu8","tip":"index-module__tip___zibZ0"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/transfer/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map