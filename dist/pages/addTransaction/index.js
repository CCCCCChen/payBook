"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/addTransaction/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/addTransaction/index!./src/pages/addTransaction/index.tsx":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/addTransaction/index!./src/pages/addTransaction/index.tsx ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PrimaryButton */ "./src/components/PrimaryButton/index.tsx");
/* harmony import */ var _services_accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/accounts */ "./src/services/accounts.ts");
/* harmony import */ var _services_budgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/budgets */ "./src/services/budgets.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/categories */ "./src/services/categories.ts");
/* harmony import */ var _services_transactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/services/transactions */ "./src/services/transactions.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/addTransaction/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
















function AddTransactionPage() {
  var _accounts$find, _categories$find, _budgets$find;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState3, 2),
    accounts = _useState4[0],
    setAccounts = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState5, 2),
    categories = _useState6[0],
    setCategories = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState7, 2),
    budgets = _useState8[0],
    setBudgets = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('expense'),
    _useState0 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState9, 2),
    type = _useState0[0],
    setType = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState1, 2),
    amount = _useState10[0],
    setAmount = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState11, 2),
    accountId = _useState12[0],
    setAccountId = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState13, 2),
    categoryId = _useState14[0],
    setCategoryId = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState15, 2),
    budgetId = _useState16[0],
    setBudgetId = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD')),
    _useState18 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState17, 2),
    date = _useState18[0],
    setDate = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState19, 2),
    note = _useState20[0],
    setNote = _useState20[1];
  var accountOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return accounts.map(function (a) {
      return a.name;
    });
  }, [accounts]);
  var categoryOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return categories.map(function (c) {
      return "".concat(c.icon || '').concat(c.name);
    });
  }, [categories]);
  var budgetOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return ['不关联预算'].concat((0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(budgets.map(function (b) {
      return b.name;
    })));
  }, [budgets]);
  var selectedAccountIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!accountId) return 0;
    var idx = accounts.findIndex(function (a) {
      return a.id === accountId;
    });
    return idx >= 0 ? idx : 0;
  }, [accounts, accountId]);
  var selectedCategoryIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!categoryId) return 0;
    var idx = categories.findIndex(function (c) {
      return c.id === categoryId;
    });
    return idx >= 0 ? idx : 0;
  }, [categories, categoryId]);
  var selectedBudgetIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!budgetId) return 0;
    var idx = budgets.findIndex(function (b) {
      return b.id === budgetId;
    });
    return idx >= 0 ? idx + 1 : 0;
  }, [budgets, budgetId]);
  var loadBaseData = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_14__["default"])().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, a, c, b, filtered, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_14__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return Promise.all([(0,_services_accounts__WEBPACK_IMPORTED_MODULE_5__.getAccounts)(), (0,_services_categories__WEBPACK_IMPORTED_MODULE_7__.getCategories)(), (0,_services_budgets__WEBPACK_IMPORTED_MODULE_6__.getBudgets)()]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_yield$Promise$all, 3);
            a = _yield$Promise$all2[0];
            c = _yield$Promise$all2[1];
            b = _yield$Promise$all2[2];
            setAccounts(a);
            filtered = c.filter(function (it) {
              return it.type === type;
            });
            setCategories(filtered);
            setBudgets(b.filter(function (it) {
              return it.is_active;
            }));
            if (!accountId && a.length) setAccountId(a[0].id);
            if (!categoryId && filtered.length) setCategoryId(filtered[0].id);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[AddTransaction] load base data failed', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '加载失败',
              icon: 'none'
            });
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadBaseData() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadBaseData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadBaseData();
  }, [type]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (categories.length === 0) {
      setCategoryId(null);
      return;
    }
    var exists = categoryId ? categories.some(function (c) {
      return c.id === categoryId;
    }) : false;
    if (!exists) {
      setCategoryId(categories[0].id);
    }
  }, [categories, categoryId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (budgets.length === 0) {
      setBudgetId(null);
      return;
    }
    if (budgetId && !budgets.some(function (b) {
      return b.id === budgetId;
    })) {
      setBudgetId(null);
    }
  }, [budgets, budgetId]);
  var save = /*#__PURE__*/function () {
    var _ref2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_14__["default"])().m(function _callee2() {
      var amt, payload, _t2;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_14__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!loading) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            amt = Number(amount);
            if (!(!Number.isFinite(amt) || amt <= 0)) {
              _context2.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入正确金额',
              icon: 'none'
            });
            return _context2.a(2);
          case 2:
            if (accountId) {
              _context2.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请选择账户',
              icon: 'none'
            });
            return _context2.a(2);
          case 3:
            if (categoryId) {
              _context2.n = 4;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请选择分类',
              icon: 'none'
            });
            return _context2.a(2);
          case 4:
            setLoading(true);
            _context2.p = 5;
            payload = {
              type: type,
              amount: amt,
              category_id: categoryId,
              account_id: accountId,
              to_account_id: null,
              date: date,
              note: note.trim(),
              budget_id: type === 'expense' ? budgetId : null
            };
            _context2.n = 6;
            return (0,_services_transactions__WEBPACK_IMPORTED_MODULE_8__.createTransaction)(payload);
          case 6:
            console.info('[AddTransaction] save payload', payload);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已保存',
              icon: 'success'
            });
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
            _context2.n = 8;
            break;
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            console.error('[AddTransaction] save failed', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '保存失败',
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
    return function save() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].sectionTitle,
      children: "\u8BB0\u4E00\u7B14"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Picker, {
          mode: "selector",
          range: ['支出', '收入'],
          value: type === 'expense' ? 0 : 1,
          onChange: function onChange(e) {
            return setType(e.detail.value === '0' ? 'expense' : 'income');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].pickerText,
              children: type === 'expense' ? '支出' : '收入'
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].input,
          value: amount,
          type: "number",
          onInput: function onInput(e) {
            return setAmount(e.detail.value);
          },
          placeholder: "\u91D1\u989D"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Picker, {
          mode: "selector",
          range: accountOptions,
          value: selectedAccountIndex,
          onChange: function onChange(e) {
            var idx = Number(e.detail.value);
            var acc = accounts[idx];
            if (acc) setAccountId(acc.id);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].pickerText,
              children: accountId ? (_accounts$find = accounts.find(function (a) {
                return a.id === accountId;
              })) === null || _accounts$find === void 0 ? void 0 : _accounts$find.name : '选择账户'
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Picker, {
          mode: "selector",
          range: categoryOptions,
          value: selectedCategoryIndex,
          onChange: function onChange(e) {
            var idx = Number(e.detail.value);
            var cat = categories[idx];
            if (cat) setCategoryId(cat.id);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].pickerText,
              children: categoryId ? (_categories$find = categories.find(function (c) {
                return c.id === categoryId;
              })) === null || _categories$find === void 0 ? void 0 : _categories$find.name : '选择分类'
            })
          })
        })
      }), type === 'expense' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Picker, {
          mode: "selector",
          range: budgetOptions,
          value: selectedBudgetIndex,
          onChange: function onChange(e) {
            var _budgets$id, _budgets;
            var idx = Number(e.detail.value);
            if (idx === 0) setBudgetId(null);else setBudgetId((_budgets$id = (_budgets = budgets[idx - 1]) === null || _budgets === void 0 ? void 0 : _budgets.id) !== null && _budgets$id !== void 0 ? _budgets$id : null);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].pickerText,
              children: budgetId ? (_budgets$find = budgets.find(function (b) {
                return b.id === budgetId;
              })) === null || _budgets$find === void 0 ? void 0 : _budgets$find.name : '不关联预算'
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Picker, {
          mode: "date",
          value: date,
          onChange: function onChange(e) {
            return setDate(e.detail.value);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].pickerText,
              children: ["\u65E5\u671F\uFF1A", date]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].input,
          value: note,
          onInput: function onInput(e) {
            return setNote(e.detail.value);
          },
          placeholder: "\u5907\u6CE8\uFF08\u53EF\u9009\uFF09"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].section,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: loading ? '保存中…' : '保存',
        disabled: loading,
        onClick: save
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (AddTransactionPage);

/***/ }),

/***/ "./src/pages/addTransaction/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/addTransaction/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_addTransaction_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/addTransaction/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/addTransaction/index!./src/pages/addTransaction/index.tsx");


var config = {"navigationBarTitleText":"记一笔"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_addTransaction_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/addTransaction/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_addTransaction_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_addTransaction_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_addTransaction_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_addTransaction_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/addTransaction/index.module.scss":
/*!****************************************************!*\
  !*** ./src/pages/addTransaction/index.module.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___uB8mE","sectionTitle":"index-module__sectionTitle___Fm1am","input":"index-module__input___OGlhQ","picker":"index-module__picker___eBtCM","pickerText":"index-module__pickerText___o6e2o","section":"index-module__section___DVyjp","row":"index-module__row___TdOKh","half":"index-module__half___HB3VH"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/addTransaction/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map