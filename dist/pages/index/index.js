"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_Cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Cell */ "./src/components/Cell/index.tsx");
/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ProgressBar */ "./src/components/ProgressBar/index.tsx");
/* harmony import */ var _services_accounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/accounts */ "./src/services/accounts.ts");
/* harmony import */ var _services_budgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/budgets */ "./src/services/budgets.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/services/categories */ "./src/services/categories.ts");
/* harmony import */ var _services_recurring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/services/recurring */ "./src/services/recurring.ts");
/* harmony import */ var _services_transactions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/services/transactions */ "./src/services/transactions.ts");
/* harmony import */ var _utils_transactionDisplay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/transactionDisplay */ "./src/utils/transactionDisplay.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");


















function HomePage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_useState3, 2),
    pending = _useState4[0],
    setPending = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_useState5, 2),
    txs = _useState6[0],
    setTxs = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_useState7, 2),
    budgets = _useState8[0],
    setBudgets = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_useState9, 2),
    accounts = _useState0[0],
    setAccounts = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_useState1, 2),
    categories = _useState10[0],
    setCategories = _useState10[1];
  var month = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM');
  var summary = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var income = 0;
    var expense = 0;
    txs.forEach(function (t) {
      if (t.type === 'income') income += Number(t.amount);
      if (t.type === 'expense') expense += Number(t.amount);
    });
    return {
      income: income,
      expense: expense
    };
  }, [txs]);
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      return (0,_utils_transactionDisplay__WEBPACK_IMPORTED_MODULE_11__.buildTransactionMaps)(accounts, categories);
    }, [accounts, categories]),
    accountMap = _useMemo.accountMap,
    categoryMap = _useMemo.categoryMap;
  var refresh = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_16__["default"])().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, p, list, b, a, c, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_16__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!loading) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setLoading(true);
            _context.p = 2;
            _context.n = 3;
            return Promise.all([(0,_services_recurring__WEBPACK_IMPORTED_MODULE_9__.getPendingTransactions)(), (0,_services_transactions__WEBPACK_IMPORTED_MODULE_10__.getTransactions)({
              month: month
            }), (0,_services_budgets__WEBPACK_IMPORTED_MODULE_7__.getBudgets)(), (0,_services_accounts__WEBPACK_IMPORTED_MODULE_6__.getAccounts)(), (0,_services_categories__WEBPACK_IMPORTED_MODULE_8__.getCategories)()]);
          case 3:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_yield$Promise$all, 5);
            p = _yield$Promise$all2[0];
            list = _yield$Promise$all2[1];
            b = _yield$Promise$all2[2];
            a = _yield$Promise$all2[3];
            c = _yield$Promise$all2[4];
            setPending(p.filter(function (it) {
              return it.status === 'pending';
            }));
            setTxs(list.slice(0, 30));
            setBudgets(b.filter(function (it) {
              return it.is_active;
            }).slice(0, 3));
            setAccounts(a);
            setCategories(c);
            console.info('[Home] refresh ok', {
              month: month
            });
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('[Home] refresh failed', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载失败，请检查后端',
              icon: 'none'
            });
          case 5:
            _context.p = 5;
            setLoading(false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
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
  var openPending = function openPending() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/pendingTransactions/index'
    });
  };
  var openAdd = function openAdd() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showActionSheet({
      itemList: ['记一笔', '转账']
    }).then(function (res) {
      if (res.tapIndex === 0) _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/addTransaction/index'
      });
      if (res.tapIndex === 1) _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/transfer/index'
      });
    }).catch(function () {});
  };
  var openBudgets = function openBudgets() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: '/pages/budgets/index'
    });
  };
  var openAllTransactions = function openAllTransactions() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/transactions/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].titleRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].title,
          children: [month, " \u6982\u89C8"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].subTitle,
          children: loading ? '刷新中…' : '下拉或切页自动刷新'
        })]
      }), pending.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].pendingBanner,
        onClick: openPending,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].pendingText,
          children: ["\u4F60\u6709 ", pending.length, " \u7B14\u5F85\u786E\u8BA4\u8D26\u5355\uFF0C\u70B9\u6211\u5904\u7406"]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].sectionTitle,
        children: "\u9884\u7B97\u8FDB\u5EA6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [budgets.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "\u6682\u65E0\u6D3B\u8DC3\u9884\u7B97",
          desc: "\u53BB\u9884\u7B97\u9875\u521B\u5EFA\u4E00\u4E2A\u6708\u9884\u7B97",
          onClick: openBudgets
        }), budgets.map(function (b) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].budgetItem,
            onClick: openBudgets,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
              name: b.name,
              sub: b.period_start && b.period_end ? "".concat(b.period_start, " ~ ").concat(b.period_end) : undefined,
              percent: b.percent,
              isOver: b.is_over,
              rightText: "".concat(b.spent.toFixed(0), "/").concat(b.amount.toFixed(0))
            })
          }, b.id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].linkRow,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].linkText,
            onClick: openBudgets,
            children: "\u53BB\u7BA1\u7406\u9884\u7B97 \u2192"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].sectionTitle,
        children: "\u672C\u6708\u6536\u652F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].summaryRow,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].summaryItem,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].summaryLabel,
              children: "\u6536\u5165"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].summaryValueIncome,
              children: ["+", summary.income.toFixed(2)]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].summaryItem,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].summaryLabel,
              children: "\u652F\u51FA"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].summaryValueExpense,
              children: ["-", summary.expense.toFixed(2)]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].sectionTitle,
        children: "\u6700\u8FD1\u8D26\u5355"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [txs.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "\u6682\u65E0\u6570\u636E",
          desc: "\u5148\u53BB\u8BB0\u4E00\u7B14\uFF0C\u6216\u786E\u8BA4\u5468\u671F\u8D26\u5355"
        }), txs.map(function (t) {
          var sign = t.type === 'income' ? '+' : t.type === 'expense' ? '-' : '';
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: (0,_utils_transactionDisplay__WEBPACK_IMPORTED_MODULE_11__.getTransactionTitle)(t, categoryMap),
            desc: (0,_utils_transactionDisplay__WEBPACK_IMPORTED_MODULE_11__.getTransactionDesc)(t, accountMap, categoryMap),
            rightText: "".concat(sign).concat(Number(t.amount).toFixed(2))
          }, t.id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].linkRow,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].linkText,
            onClick: openAllTransactions,
            children: "\u67E5\u770B\u5168\u90E8\u8D26\u5355 \u2192"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].floatBtn,
      onClick: openAdd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].floatBtnText,
        children: "+"
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/index/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/index/index.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/index/index.module.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___UUXPz","header":"index-module__header___frnFD","titleRow":"index-module__titleRow___dSjMt","title":"index-module__title___tZK8H","subTitle":"index-module__subTitle___d1LgR","pendingBanner":"index-module__pendingBanner___ag3Us","pendingText":"index-module__pendingText___GS8M8","section":"index-module__section___eIlqH","sectionTitle":"index-module__sectionTitle___ANgxg","budgetItem":"index-module__budgetItem___HyYCx","linkRow":"index-module__linkRow___h6E01","linkText":"index-module__linkText___pFjU5","summaryRow":"index-module__summaryRow___PB7OA","summaryItem":"index-module__summaryItem___uBIUT","summaryLabel":"index-module__summaryLabel___ZT4ig","summaryValueIncome":"index-module__summaryValueIncome___ZmfUa","summaryValueExpense":"index-module__summaryValueExpense___NT0HE","floatBtn":"index-module__floatBtn___KLnAT","floatBtnText":"index-module__floatBtnText___AboQU"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map