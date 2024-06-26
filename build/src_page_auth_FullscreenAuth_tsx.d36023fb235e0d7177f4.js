"use strict";
(self["webpackChunktechfront"] = self["webpackChunktechfront"] || []).push([["src_page_auth_FullscreenAuth_tsx"],{

/***/ "./src/page/auth/FullscreenAuth.tsx":
/*!******************************************!*\
  !*** ./src/page/auth/FullscreenAuth.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FullscreenAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ "./node_modules/@mui/icons-material/LockOutlined.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }














function Copyright(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, props), {}, {
    children: ['Copyright © ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "inherit",
      href: "https://mui.com/",
      children: "Your Website"
    }), ' ', new Date().getFullYear(), '.']
  }));
}
var defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
function FullscreenAuth() {
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: defaultTheme,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
          sx: {
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
            sx: {
              m: 1,
              bgcolor: 'secondary.main'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
            component: "h1",
            variant: "h5",
            children: "Sign in"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
            component: "form",
            noValidate: true,
            onSubmit: function onSubmit() {
              return handleSubmit;
            },
            sx: {
              mt: 1
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
              margin: "normal",
              required: true,
              fullWidth: true,
              id: "email",
              label: "Email Address",
              name: "email",
              autoComplete: "email",
              autoFocus: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
              margin: "normal",
              required: true,
              fullWidth: true,
              name: "password",
              label: "Password",
              type: "password",
              id: "password",
              autoComplete: "current-password"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
              control: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
                value: "remember",
                color: "primary"
              }),
              label: "Remember me"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
              type: "submit",
              fullWidth: true,
              variant: "contained",
              sx: {
                mt: 3,
                mb: 2
              },
              children: "Sign In"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
              container: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
                item: true,
                xs: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  href: "#",
                  variant: "body2",
                  children: "Forgot password?"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
                item: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  href: "#",
                  variant: "body2",
                  children: "Don't have an account? Sign Up"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Copyright, {
              sx: {
                mt: 5
              }
            })]
          })]
        })
      })]
    })
  });
}

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VfYXV0aF9GdWxsc2NyZWVuQXV0aF90c3guZDM2MDIzZmIyMzVlMGQ3MTc3ZjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNBO0FBQ1U7QUFDSjtBQUNjO0FBQ2hCO0FBQ1I7QUFFRjtBQUNFO0FBQzBCO0FBQ2Q7QUFDZ0I7QUFBQTtBQUVsRSxTQUFTa0IsU0FBU0EsQ0FBQ0MsS0FBVSxFQUFFO0VBQzdCLG9CQUNJRix1REFBQSxDQUFDTixnRUFBVSxFQUFBUyxhQUFBLENBQUFBLGFBQUE7SUFBQ0MsT0FBTyxFQUFDLE9BQU87SUFBQ0MsS0FBSyxFQUFDLGdCQUFnQjtJQUFDQyxLQUFLLEVBQUM7RUFBUSxHQUFLSixLQUFLO0lBQUFLLFFBQUEsR0FDeEUsY0FBYyxlQUNmVCxzREFBQSxDQUFDUiwwREFBSTtNQUFDZSxLQUFLLEVBQUMsU0FBUztNQUFDRyxJQUFJLEVBQUMsa0JBQWtCO01BQUFELFFBQUEsRUFBQztJQUU5QyxDQUFNLENBQUMsRUFBQyxHQUFHLEVBQ1YsSUFBSUUsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsRUFDeEIsR0FBRztFQUFBLEVBQ00sQ0FBQztBQUVuQjtBQUVBLElBQU1DLFlBQVksR0FBR2hCLGdFQUFXLENBQUMsQ0FBQztBQUVuQixTQUFTaUIsY0FBY0EsQ0FBQSxFQUFHO0VBQ3ZDLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUF1QyxFQUFLO0lBQ2hFQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLElBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFRLENBQUNILEtBQUssQ0FBQ0ksYUFBYSxDQUFDO0lBQzlDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztNQUNWQyxLQUFLLEVBQUVMLElBQUksQ0FBQ00sR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUN4QkMsUUFBUSxFQUFFUCxJQUFJLENBQUNNLEdBQUcs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R0FBRztrQkFBQ0osT0FBTyxFQUFDLE9BQU87a0JBQUFHLFFBQUEsRUFDM0I7Z0JBQWdDLENBQzdCO2NBQUMsQ0FDSCxDQUFDO1lBQUEsQ0FDSCxDQUFDLGVBQ1BULHNEQUFBLENBQUNHLFNBQVM7Y0FBQ3dCLEVBQUUsRUFBRTtnQkFBRVcsRUFBRSxFQUFFO2NBQUU7WUFBRSxDQUFFLENBQUM7VUFBQSxDQUN6QixDQUFDO1FBQUEsQ0FDSDtNQUFDLENBQ0gsQ0FBQztJQUFBLENBQ0g7RUFBQyxDQUNPLENBQUM7QUFFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoZnJvbnQvLi9zcmMvcGFnZS9hdXRoL0Z1bGxzY3JlZW5BdXRoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2hlY2tib3gnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9ja091dGxpbmVkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuZnVuY3Rpb24gQ29weXJpZ2h0KHByb3BzOiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiIHsuLi5wcm9wc30+XG4gICAgICAgIHsnQ29weXJpZ2h0IMKpICd9XG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL211aS5jb20vXCI+XG4gICAgICAgICAgWW91ciBXZWJzaXRlXG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICB7Jy4nfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuXG5jb25zdCBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGdWxsc2NyZWVuQXV0aCgpIHtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICBlbWFpbDogZGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICBwYXNzd29yZDogZGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkZWZhdWx0VGhlbWV9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxkaXYvPlxuICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBteTogOCxcbiAgICAgICAgICAgICAgICAgIG14OiA0LFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyIHN4PXt7IG06IDEsIGJnY29sb3I6ICdzZWNvbmRhcnkubWFpbicgfX0+XG4gICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG5vVmFsaWRhdGUgb25TdWJtaXQ9eygpPT5oYW5kbGVTdWJtaXR9IHN4PXt7IG10OiAxIH19PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCB2YWx1ZT1cInJlbWVtYmVyXCIgY29sb3I9XCJwcmltYXJ5XCIgLz59XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVtZW1iZXIgbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBzeD17eyBtdDogMywgbWI6IDIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1wiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBTaWduIFVwXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPENvcHlyaWdodCBzeD17eyBtdDogNSB9fSAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkJ1dHRvbiIsIkNzc0Jhc2VsaW5lIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiTGluayIsIkJveCIsIkdyaWQiLCJMb2NrT3V0bGluZWRJY29uIiwiVHlwb2dyYXBoeSIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJDb3B5cmlnaHQiLCJwcm9wcyIsIl9vYmplY3RTcHJlYWQiLCJ2YXJpYW50IiwiY29sb3IiLCJhbGlnbiIsImNoaWxkcmVuIiwiaHJlZiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRlZmF1bHRUaGVtZSIsIkZ1bGxzY3JlZW5BdXRoIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsInRoZW1lIiwic3giLCJteSIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibSIsImJnY29sb3IiLCJjb21wb25lbnQiLCJub1ZhbGlkYXRlIiwib25TdWJtaXQiLCJtdCIsIm1hcmdpbiIsInJlcXVpcmVkIiwiZnVsbFdpZHRoIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJ0eXBlIiwiY29udHJvbCIsInZhbHVlIiwibWIiLCJjb250YWluZXIiLCJpdGVtIiwieHMiXSwic291cmNlUm9vdCI6IiJ9