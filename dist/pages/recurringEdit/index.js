"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/recurringEdit/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/recurringEdit/index!./src/pages/recurringEdit/index.tsx":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/recurringEdit/index!./src/pages/recurringEdit/index.tsx ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PrimaryButton */ "./src/components/PrimaryButton/index.tsx");
/* harmony import */ var _services_accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/accounts */ "./src/services/accounts.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/categories */ "./src/services/categories.ts");
/* harmony import */ var _services_recurring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/recurring */ "./src/services/recurring.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/recurringEdit/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");















function RecurringEditPage() {
  var _Taro$getCurrentInsta, _accounts$find, _categories$find;
  var idParam = (_Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance().router) === null || _Taro$getCurrentInsta === void 0 || (_Taro$getCurrentInsta = _Taro$getCurrentInsta.params) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.id;
  var templateId = idParam ? Number(idParam) : null;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    accounts = _useState2[0],
    setAccounts = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    categories = _useState4[0],
    setCategories = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState7, 2),
    name = _useState8[0],
    setName = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('expense'),
    _useState0 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState9, 2),
    type = _useState0[0],
    setType = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),
    _useState10 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState1, 2),
    amount = _useState10[0],
    setAmount = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState11, 2),
    accountId = _useState12[0],
    setAccountId = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState13, 2),
    categoryId = _useState14[0],
    setCategoryId = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('monthly'),
    _useState16 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState15, 2),
    cycleType = _useState16[0],
    setCycleType = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState18 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState17, 2),
    cycleDay = _useState18[0],
    setCycleDay = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD')),
    _useState20 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState19, 2),
    nextDueDate = _useState20[0],
    setNextDueDate = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState22 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState21, 2),
    isActive = _useState22[0],
    setIsActive = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState23, 2),
    note = _useState24[0],
    setNote = _useState24[1];
  var accountOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return accounts.map(function (a) {
      return a.name;
    });
  }, [accounts]);
  var categoryOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return ['不指定'].concat((0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(categories.map(function (c) {
      return "".concat(c.icon || '').concat(c.name);
    })));
  }, [categories]);
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
    return idx >= 0 ? idx + 1 : 0;
  }, [categories, categoryId]);
  var loadBaseData = /*#__PURE__*/function () {
    var _ref = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, a, c, _t;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return Promise.all([(0,_services_accounts__WEBPACK_IMPORTED_MODULE_5__.getAccounts)(), (0,_services_categories__WEBPACK_IMPORTED_MODULE_6__.getCategories)()]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_yield$Promise$all, 2);
            a = _yield$Promise$all2[0];
            c = _yield$Promise$all2[1];
            setAccounts(a);
            setCategories(c.filter(function (it) {
              return it.type === type;
            }));
            if (!accountId && a.length) setAccountId(a[0].id);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('[RecurringEdit] load base data failed', _t);
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
  var loadTemplate = /*#__PURE__*/function () {
    var _ref2 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])().m(function _callee2() {
      var list, tpl, _t2;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (templateId) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return (0,_services_recurring__WEBPACK_IMPORTED_MODULE_7__.getRecurringTemplates)();
          case 2:
            list = _context2.v;
            tpl = list.find(function (it) {
              return it.id === templateId;
            });
            if (tpl) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2);
          case 3:
            setName(tpl.name);
            setType(tpl.type);
            setAmount(String(tpl.amount));
            setAccountId(tpl.account_id);
            setCategoryId(tpl.category_id ? tpl.category_id : null);
            setCycleType(tpl.cycle_type);
            setCycleDay(tpl.cycle_day);
            setNextDueDate(tpl.next_due_date);
            setIsActive(tpl.is_active);
            setNote(tpl.note || '');
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error('[RecurringEdit] load template failed', _t2);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }));
    return function loadTemplate() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadBaseData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadTemplate();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadBaseData();
  }, [type]);
  var save = /*#__PURE__*/function () {
    var _ref3 = (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])(/*#__PURE__*/(0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])().m(function _callee3() {
      var amt, payload, _t3;
      return (0,E_PersonalFiles_Coding_payBook_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])().w(function (_context3) {
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
              title: '请输入名称',
              icon: 'none'
            });
            return _context3.a(2);
          case 2:
            if (accountId) {
              _context3.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请选择账户',
              icon: 'none'
            });
            return _context3.a(2);
          case 3:
            amt = Number(amount);
            if (!(!Number.isFinite(amt) || amt <= 0)) {
              _context3.n = 4;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '金额不合法',
              icon: 'none'
            });
            return _context3.a(2);
          case 4:
            setLoading(true);
            _context3.p = 5;
            payload = {
              name: name.trim(),
              type: type,
              amount: amt,
              category_id: categoryId,
              account_id: accountId,
              cycle_type: cycleType,
              cycle_day: cycleDay,
              next_due_date: nextDueDate,
              is_active: isActive,
              note: note.trim()
            };
            if (!templateId) {
              _context3.n = 7;
              break;
            }
            _context3.n = 6;
            return (0,_services_recurring__WEBPACK_IMPORTED_MODULE_7__.updateRecurringTemplate)(templateId, payload);
          case 6:
            _context3.n = 8;
            break;
          case 7:
            _context3.n = 8;
            return (0,_services_recurring__WEBPACK_IMPORTED_MODULE_7__.createRecurringTemplate)(payload);
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
            console.error('[RecurringEdit] save failed', _t3);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].sectionTitle,
      children: "\u57FA\u672C\u4FE1\u606F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].input,
          value: name,
          onInput: function onInput(e) {
            return setName(e.detail.value);
          },
          placeholder: "\u4F8B\u5982 \u623F\u79DF"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].half,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Picker, {
              mode: "selector",
              range: ['支出', '收入'],
              value: type === 'expense' ? 0 : 1,
              onChange: function onChange(e) {
                return setType(e.detail.value === '0' ? 'expense' : 'income');
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].picker,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].pickerText,
                  children: type === 'expense' ? '支出' : '收入'
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].half,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].input,
              value: amount,
              type: "number",
              onInput: function onInput(e) {
                return setAmount(e.detail.value);
              },
              placeholder: "\u91D1\u989D"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Picker, {
          mode: "selector",
          range: accountOptions,
          value: selectedAccountIndex,
          onChange: function onChange(e) {
            var idx = Number(e.detail.value);
            var acc = accounts[idx];
            if (acc) setAccountId(acc.id);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].pickerText,
              children: accountId ? (_accounts$find = accounts.find(function (a) {
                return a.id === accountId;
              })) === null || _accounts$find === void 0 ? void 0 : _accounts$find.name : '选择账户'
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Picker, {
          mode: "selector",
          range: categoryOptions,
          value: selectedCategoryIndex,
          onChange: function onChange(e) {
            var _categories$id, _categories;
            var idx = Number(e.detail.value);
            if (idx === 0) setCategoryId(null);else setCategoryId((_categories$id = (_categories = categories[idx - 1]) === null || _categories === void 0 ? void 0 : _categories.id) !== null && _categories$id !== void 0 ? _categories$id : null);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].picker,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].pickerText,
              children: categoryId ? (_categories$find = categories.find(function (c) {
                return c.id === categoryId;
              })) === null || _categories$find === void 0 ? void 0 : _categories$find.name : '不指定分类'
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].sectionTitle,
        children: "\u5468\u671F\u8BBE\u7F6E"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Picker, {
            mode: "selector",
            range: ['每月', '每周'],
            value: cycleType === 'monthly' ? 0 : 1,
            onChange: function onChange(e) {
              return setCycleType(e.detail.value === '0' ? 'monthly' : 'weekly');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].picker,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].pickerText,
                children: cycleType === 'monthly' ? '每月' : '每周'
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].input,
            value: String(cycleDay),
            type: "number",
            onInput: function onInput(e) {
              return setCycleDay(Number(e.detail.value || 0));
            },
            placeholder: cycleType === 'monthly' ? '每月第几天(1-31)' : '每周几(0-6, 0=周日)'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].tip,
            children: cycleType === 'monthly' ? 'monthly：cycle_day=1-31，超出当月最大天数时自动按月末处理' : 'weekly：cycle_day=0-6（0=周日），当前版本按 next_due_date 每 7 天滚动'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Picker, {
            mode: "date",
            value: nextDueDate,
            onChange: function onChange(e) {
              return setNextDueDate(e.detail.value);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].picker,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].pickerText,
                children: ["\u4E0B\u6B21\u751F\u6210\u65E5\u671F\uFF1A", nextDueDate]
              })
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].sectionTitle,
        children: "\u5176\u4ED6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].input,
            value: note,
            onInput: function onInput(e) {
              return setNote(e.detail.value);
            },
            placeholder: "\u5907\u6CE8\u6A21\u677F(\u53EF\u9009)"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].row,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].half,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].tip,
                children: "\u542F\u7528"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].half,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Switch, {
                checked: isActive,
                onChange: function onChange(e) {
                  return setIsActive(e.detail.value);
                }
              })
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].section,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: loading ? '保存中…' : '保存',
        disabled: loading,
        onClick: save
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (RecurringEditPage);

/***/ }),

/***/ "./src/pages/recurringEdit/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/recurringEdit/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/recurringEdit/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/recurringEdit/index!./src/pages/recurringEdit/index.tsx");


var config = {"navigationBarTitleText":"编辑模板"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/recurringEdit/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_recurringEdit_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/recurringEdit/index.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/recurringEdit/index.module.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___HtqqW","sectionTitle":"index-module__sectionTitle___LK61z","input":"index-module__input___YV3bS","picker":"index-module__picker___k2NdQ","pickerText":"index-module__pickerText___LZvcZ","tip":"index-module__tip___sI20O","section":"index-module__section___FUojm","row":"index-module__row___xA163","half":"index-module__half___OcB2b"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/recurringEdit/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map