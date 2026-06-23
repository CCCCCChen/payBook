"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/budgetEdit/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/budgetEdit/index!./src/pages/budgetEdit/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/budgetEdit/index!./src/pages/budgetEdit/index.tsx ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PrimaryButton */ "./src/components/PrimaryButton/index.tsx");
/* harmony import */ var _services_budgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/budgets */ "./src/services/budgets.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/categories */ "./src/services/categories.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/budgetEdit/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");














function BudgetEditPage() {
  var _Taro$getCurrentInsta, _Taro$getCurrentInsta2;
  var idParam = (_Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance().router) === null || _Taro$getCurrentInsta === void 0 || (_Taro$getCurrentInsta = _Taro$getCurrentInsta.params) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.id;
  var presetParam = (_Taro$getCurrentInsta2 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance().router) === null || _Taro$getCurrentInsta2 === void 0 || (_Taro$getCurrentInsta2 = _Taro$getCurrentInsta2.params) === null || _Taro$getCurrentInsta2 === void 0 ? void 0 : _Taro$getCurrentInsta2.preset;
  var budgetId = idParam ? Number(idParam) : null;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState3, 2),
    categories = _useState4[0],
    setCategories = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState5, 2),
    name = _useState6[0],
    setName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),
    _useState8 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState7, 2),
    amount = _useState8[0],
    setAmount = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(presetParam || 'monthly'),
    _useState0 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState9, 2),
    cycleType = _useState0[0],
    setCycleType = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().startOf('month').format('YYYY-MM-DD')),
    _useState10 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState1, 2),
    startDate = _useState10[0],
    setStartDate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().endOf('month').format('YYYY-MM-DD')),
    _useState12 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState11, 2),
    endDate = _useState12[0],
    setEndDate = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState13, 2),
    isActive = _useState14[0],
    setIsActive = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all'),
    _useState16 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState15, 2),
    scopeMode = _useState16[0],
    setScopeMode = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState17, 2),
    scopeIds = _useState18[0],
    setScopeIds = _useState18[1];
  var expenseCategories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return categories.filter(function (c) {
      return c.type === 'expense';
    });
  }, [categories]);
  var loadBase = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee() {
      var cats, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return (0,_services_categories__WEBPACK_IMPORTED_MODULE_6__.getCategories)();
          case 1:
            cats = _context.v;
            setCategories(cats);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[BudgetEdit] load categories failed', _t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadBase() {
      return _ref.apply(this, arguments);
    };
  }();
  var loadBudget = /*#__PURE__*/function () {
    var _ref2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee2() {
      var list, b, _t2;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (budgetId) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return (0,_services_budgets__WEBPACK_IMPORTED_MODULE_5__.getBudgets)();
          case 2:
            list = _context2.v;
            b = list.find(function (it) {
              return it.id === budgetId;
            });
            if (b) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2);
          case 3:
            setName(b.name);
            setAmount(String(b.amount));
            setCycleType(b.cycle_type);
            setStartDate(b.start_date || startDate);
            setEndDate(b.end_date || endDate);
            setIsActive(b.is_active);
            if (b.category_scope && b.category_scope.length > 0) {
              setScopeMode('custom');
              setScopeIds(b.category_scope);
            } else {
              setScopeMode('all');
              setScopeIds([]);
            }
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error('[BudgetEdit] load budget failed', _t2);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }));
    return function loadBudget() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadBase();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadBudget();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (presetParam === 'monthly') {
      setStartDate(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().startOf('month').format('YYYY-MM-DD'));
      setEndDate(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().endOf('month').format('YYYY-MM-DD'));
    }
  }, [presetParam]);
  var toggleScope = function toggleScope(id) {
    setScopeIds(function (prev) {
      if (prev.includes(id)) return prev.filter(function (x) {
        return x !== id;
      });
      return [].concat((0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(prev), [id]);
    });
  };
  var save = /*#__PURE__*/function () {
    var _ref3 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee3() {
      var amt, payload, _t3;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!loading) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            if (name.trim()) {
              _context3.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请输入预算名称',
              icon: 'none'
            });
            return _context3.a(2);
          case 2:
            amt = Number(amount);
            if (!(!Number.isFinite(amt) || amt <= 0)) {
              _context3.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '预算金额不合法',
              icon: 'none'
            });
            return _context3.a(2);
          case 3:
            if (!(cycleType === 'custom' && dayjs__WEBPACK_IMPORTED_MODULE_2___default()(startDate).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(endDate)))) {
              _context3.n = 4;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '开始日期不能晚于结束日期',
              icon: 'none'
            });
            return _context3.a(2);
          case 4:
            setLoading(true);
            _context3.p = 5;
            payload = {
              name: name.trim(),
              cycle_type: cycleType,
              start_date: cycleType === 'custom' ? startDate : null,
              end_date: cycleType === 'custom' ? endDate : null,
              amount: amt,
              category_scope: scopeMode === 'custom' ? scopeIds : [],
              is_active: isActive
            };
            if (!budgetId) {
              _context3.n = 7;
              break;
            }
            _context3.n = 6;
            return (0,_services_budgets__WEBPACK_IMPORTED_MODULE_5__.updateBudget)(budgetId, payload);
          case 6:
            _context3.n = 8;
            break;
          case 7:
            _context3.n = 8;
            return (0,_services_budgets__WEBPACK_IMPORTED_MODULE_5__.createBudget)(payload);
          case 8:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已保存',
              icon: 'success'
            });
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t3 = _context3.v;
            console.error('[BudgetEdit] save failed', _t3);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '保存失败',
              icon: 'none'
            });
          case 10:
            _context3.p = 10;
            setLoading(false);
            return _context3.f(10);
          case 11:
            return _context3.a(2);
        }
      }, _callee3, null, [[5, 9, 10, 11]]);
    }));
    return function save() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].sectionTitle,
      children: "\u57FA\u672C\u4FE1\u606F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].input,
          value: name,
          onInput: function onInput(e) {
            return setName(e.detail.value);
          },
          placeholder: "\u4F8B\u5982 \u672C\u6708\u603B\u9884\u7B97"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].input,
          value: amount,
          type: "number",
          onInput: function onInput(e) {
            return setAmount(e.detail.value);
          },
          placeholder: "\u9884\u7B97\u91D1\u989D"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
          mode: "selector",
          range: ['每月', '每周', '自定义'],
          value: cycleType === 'monthly' ? 0 : cycleType === 'weekly' ? 1 : 2,
          onChange: function onChange(e) {
            return setCycleType(e.detail.value === '0' ? 'monthly' : e.detail.value === '1' ? 'weekly' : 'custom');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].pickerText,
              children: cycleType === 'monthly' ? '每月' : cycleType === 'weekly' ? '每周' : '自定义周期'
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].tip,
          children: "\u6708/\u5468\u9884\u7B97\u4F1A\u81EA\u52A8\u6309\u201C\u672C\u6708/\u672C\u5468\u201D\u8BA1\u7B97\u8FDB\u5EA6\uFF0C\u81EA\u5B9A\u4E49\u6309\u4F60\u9009\u7684\u65E5\u671F\u8303\u56F4\u3002"
        })]
      }), cycleType === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].half,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
              mode: "date",
              value: startDate,
              onChange: function onChange(e) {
                return setStartDate(e.detail.value);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].picker,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].pickerText,
                  children: ["\u5F00\u59CB\uFF1A", startDate]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].half,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
              mode: "date",
              value: endDate,
              onChange: function onChange(e) {
                return setEndDate(e.detail.value);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].picker,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].pickerText,
                  children: ["\u7ED3\u675F\uFF1A", endDate]
                })
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].switchRow,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].switchLabel,
            children: "\u542F\u7528"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Switch, {
            checked: isActive,
            onChange: function onChange(e) {
              return setIsActive(e.detail.value);
            }
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].sectionTitle,
        children: "\u9884\u7B97\u8303\u56F4\uFF08\u652F\u51FA\u5206\u7C7B\uFF09"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "selector",
            range: ['全部分类', '指定分类'],
            value: scopeMode === 'all' ? 0 : 1,
            onChange: function onChange(e) {
              return setScopeMode(e.detail.value === '0' ? 'all' : 'custom');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].picker,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].pickerText,
                children: scopeMode === 'all' ? '全部分类' : '指定分类'
              })
            })
          })
        }), scopeMode === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].checkboxList,
            children: expenseCategories.map(function (c) {
              var active = scopeIds.includes(c.id);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].checkboxItem, " ").concat(active ? _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].checkboxItemActive : ''),
                onClick: function onClick() {
                  return toggleScope(c.id);
                },
                children: (c.icon || '') + c.name
              }, c.id);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].tip,
            children: "\u5F53\u524D\u7248\u672C\u7684\u9884\u7B97\u8FDB\u5EA6\u7EDF\u8BA1\u53EA\u8BA1\u7B97\u201C\u5173\u8054\u5230\u8BE5\u9884\u7B97\u201D\u7684\u652F\u51FA\u8BB0\u5F55\u3002"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].section,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: loading ? '保存中…' : '保存',
        disabled: loading,
        onClick: save
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (BudgetEditPage);

/***/ }),

/***/ "./src/pages/budgetEdit/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/budgetEdit/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_budgetEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/budgetEdit/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/budgetEdit/index!./src/pages/budgetEdit/index.tsx");


var config = {"navigationBarTitleText":"编辑预算"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_budgetEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/budgetEdit/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_budgetEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_budgetEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_budgetEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_budgetEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/budgetEdit/index.module.scss":
/*!************************************************!*\
  !*** ./src/pages/budgetEdit/index.module.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___o08Nc","sectionTitle":"index-module__sectionTitle___G535D","section":"index-module__section___Z1k0M","input":"index-module__input___j9t8P","picker":"index-module__picker___l2B8p","pickerText":"index-module__pickerText___Zombj","row":"index-module__row___WC12h","half":"index-module__half___zk5sT","tip":"index-module__tip___Vh9AJ","checkboxList":"index-module__checkboxList___nDUUX","checkboxItem":"index-module__checkboxItem___KeDsh","checkboxItemActive":"index-module__checkboxItemActive___KB_Ca","switchRow":"index-module__switchRow___pkxph","switchLabel":"index-module__switchLabel___wJ98q"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/budgetEdit/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map