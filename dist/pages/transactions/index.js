"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/transactions/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/transactions/index!./src/pages/transactions/index.tsx":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/transactions/index!./src/pages/transactions/index.tsx ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_Cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Cell */ "./src/components/Cell/index.tsx");
/* harmony import */ var _components_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PrimaryButton */ "./src/components/PrimaryButton/index.tsx");
/* harmony import */ var _services_accounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/accounts */ "./src/services/accounts.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/categories */ "./src/services/categories.ts");
/* harmony import */ var _services_transactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/services/transactions */ "./src/services/transactions.ts");
/* harmony import */ var _utils_transactionDisplay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/transactionDisplay */ "./src/utils/transactionDisplay.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/transactions/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");

















function TransactionsPage() {
  var _accounts$find, _categories$find;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState5, 2),
    accounts = _useState6[0],
    setAccounts = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState7, 2),
    categories = _useState8[0],
    setCategories = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM')),
    _useState0 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState9, 2),
    month = _useState0[0],
    setMonth = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState1, 2),
    keyword = _useState10[0],
    setKeyword = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState11, 2),
    accountId = _useState12[0],
    setAccountId = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState13, 2),
    categoryId = _useState14[0],
    setCategoryId = _useState14[1];
  var accountOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return ['全部账户'].concat((0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(accounts.map(function (a) {
      return a.name;
    })));
  }, [accounts]);
  var categoryOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return ['全部分类'].concat((0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(categories.map(function (c) {
      return "".concat(c.icon || '').concat(c.name);
    })));
  }, [categories]);
  var selectedAccountIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!accountId) return 0;
    var idx = accounts.findIndex(function (a) {
      return a.id === accountId;
    });
    return idx >= 0 ? idx + 1 : 0;
  }, [accounts, accountId]);
  var selectedCategoryIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!categoryId) return 0;
    var idx = categories.findIndex(function (c) {
      return c.id === categoryId;
    });
    return idx >= 0 ? idx + 1 : 0;
  }, [categories, categoryId]);
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      return (0,_utils_transactionDisplay__WEBPACK_IMPORTED_MODULE_9__.buildTransactionMaps)(accounts, categories);
    }, [accounts, categories]),
    accountMap = _useMemo.accountMap,
    categoryMap = _useMemo.categoryMap;
  var loadBase = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, a, c, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return Promise.all([(0,_services_accounts__WEBPACK_IMPORTED_MODULE_6__.getAccounts)(), (0,_services_categories__WEBPACK_IMPORTED_MODULE_7__.getCategories)()]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_yield$Promise$all, 2);
            a = _yield$Promise$all2[0];
            c = _yield$Promise$all2[1];
            setAccounts(a);
            setCategories(c);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[Transactions] load base failed', _t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadBase() {
      return _ref.apply(this, arguments);
    };
  }();
  var refresh = /*#__PURE__*/function () {
    var _ref2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])().m(function _callee2() {
      var res, _t2;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!loading) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setLoading(true);
            _context2.p = 2;
            _context2.n = 3;
            return (0,_services_transactions__WEBPACK_IMPORTED_MODULE_8__.getTransactions)({
              month: month,
              keyword: keyword.trim() || undefined,
              account_id: accountId || undefined,
              category_id: categoryId || undefined
            });
          case 3:
            res = _context2.v;
            setList(res);
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error('[Transactions] refresh failed', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载失败',
              icon: 'none'
            });
          case 5:
            _context2.p = 5;
            setLoading(false);
            return _context2.f(5);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4, 5, 6]]);
    }));
    return function refresh() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadBase();
    refresh();
  }, []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    refresh();
  });
  var clearFilters = function clearFilters() {
    setKeyword('');
    setAccountId(null);
    setCategoryId(null);
    setMonth(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM'));
    setTimeout(function () {
      return refresh();
    }, 0);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].sectionTitle,
      children: "\u7B5B\u9009"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Picker, {
          mode: "date",
          fields: "month",
          value: "".concat(month, "-01"),
          onChange: function onChange(e) {
            return setMonth(e.detail.value.slice(0, 7));
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].pickerText,
              children: ["\u6708\u4EFD\uFF1A", month]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].input,
          value: keyword,
          onInput: function onInput(e) {
            return setKeyword(e.detail.value);
          },
          placeholder: "\u5907\u6CE8\u5173\u952E\u8BCD"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].section,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].half,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Picker, {
              mode: "selector",
              range: accountOptions,
              value: selectedAccountIndex,
              onChange: function onChange(e) {
                var _accounts$id, _accounts;
                var idx = Number(e.detail.value);
                if (idx === 0) setAccountId(null);else setAccountId((_accounts$id = (_accounts = accounts[idx - 1]) === null || _accounts === void 0 ? void 0 : _accounts.id) !== null && _accounts$id !== void 0 ? _accounts$id : null);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].picker,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].pickerText,
                  children: accountId ? (_accounts$find = accounts.find(function (a) {
                    return a.id === accountId;
                  })) === null || _accounts$find === void 0 ? void 0 : _accounts$find.name : '全部账户'
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].half,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Picker, {
              mode: "selector",
              range: categoryOptions,
              value: selectedCategoryIndex,
              onChange: function onChange(e) {
                var _categories$id, _categories;
                var idx = Number(e.detail.value);
                if (idx === 0) setCategoryId(null);else setCategoryId((_categories$id = (_categories = categories[idx - 1]) === null || _categories === void 0 ? void 0 : _categories.id) !== null && _categories$id !== void 0 ? _categories$id : null);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].picker,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].pickerText,
                  children: categoryId ? (_categories$find = categories.find(function (c) {
                    return c.id === categoryId;
                  })) === null || _categories$find === void 0 ? void 0 : _categories$find.name : '全部分类'
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].tip,
          children: "\u7B5B\u9009\u540E\u70B9\u201C\u67E5\u8BE2\u201D\u5237\u65B0\u5217\u8868"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].half,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
              text: loading ? '查询中…' : '查询',
              disabled: loading,
              onClick: refresh
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].half,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
              text: "\u6E05\u7A7A",
              size: "sm",
              onClick: clearFilters
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].sectionTitle,
        children: ["\u7ED3\u679C\uFF08", list.length, "\uFF09"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [list.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "\u6682\u65E0\u7ED3\u679C",
          desc: "\u6362\u4E2A\u6761\u4EF6\u8BD5\u8BD5"
        }), list.map(function (t) {
          var sign = t.type === 'income' ? '+' : t.type === 'expense' ? '-' : '';
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: (0,_utils_transactionDisplay__WEBPACK_IMPORTED_MODULE_9__.getTransactionTitle)(t, categoryMap),
            desc: (0,_utils_transactionDisplay__WEBPACK_IMPORTED_MODULE_9__.getTransactionDesc)(t, accountMap, categoryMap),
            rightText: "".concat(sign).concat(Number(t.amount).toFixed(2))
          }, t.id);
        })]
      })]
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (TransactionsPage);

/***/ }),

/***/ "./src/pages/transactions/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/transactions/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/transactions/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/transactions/index!./src/pages/transactions/index.tsx");


var config = {"navigationBarTitleText":"账单"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/transactions/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_transactions_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/transactions/index.module.scss":
/*!**************************************************!*\
  !*** ./src/pages/transactions/index.module.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___PBkD6","sectionTitle":"index-module__sectionTitle___DMuMh","section":"index-module__section___LGeS5","row":"index-module__row___fSz9b","half":"index-module__half___E8Z1n","picker":"index-module__picker___OJFsC","pickerText":"index-module__pickerText___HQZ8r","input":"index-module__input____9P78","tip":"index-module__tip___eX43E"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/transactions/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map