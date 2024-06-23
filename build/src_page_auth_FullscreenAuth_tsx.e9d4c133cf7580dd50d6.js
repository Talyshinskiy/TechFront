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
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ "./node_modules/@mui/icons-material/LockOutlined.js");
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

// TODO remove, this demo shouldn't need to reset the theme.
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
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: false,
        sm: 4,
        md: 7,
        sx: {
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: function backgroundColor(t) {
            return t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900];
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 12,
        sm: 8,
        md: 5,
        elevation: 6,
        square: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
          sx: {
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            sx: {
              m: 1,
              bgcolor: 'secondary.main'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
            component: "h1",
            variant: "h5",
            children: "Sign in"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
            component: "form",
            noValidate: true,
            onSubmit: function onSubmit() {
              return handleSubmit;
            },
            sx: {
              mt: 1
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
              margin: "normal",
              required: true,
              fullWidth: true,
              id: "email",
              label: "Email Address",
              name: "email",
              autoComplete: "email",
              autoFocus: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
              margin: "normal",
              required: true,
              fullWidth: true,
              name: "password",
              label: "Password",
              type: "password",
              id: "password",
              autoComplete: "current-password"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
              control: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
                value: "remember",
                color: "primary"
              }),
              label: "Remember me"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
              type: "submit",
              fullWidth: true,
              variant: "contained",
              sx: {
                mt: 3,
                mb: 2
              },
              children: "Sign In"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
              container: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                item: true,
                xs: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  href: "#",
                  variant: "body2",
                  children: "Forgot password?"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VfYXV0aF9GdWxsc2NyZWVuQXV0aF90c3guZTlkNGMxMzNjZjc1ODBkZDUwZDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNBO0FBQ1U7QUFDSjtBQUNjO0FBQ2hCO0FBQ1I7QUFFRjtBQUNFO0FBQzBCO0FBQ2Q7QUFDZ0I7QUFBQTtBQUVsRSxTQUFTa0IsU0FBU0EsQ0FBQ0MsS0FBVSxFQUFFO0VBQzdCLG9CQUNJRix1REFBQSxDQUFDTixnRUFBVSxFQUFBUyxhQUFBLENBQUFBLGFBQUE7SUFBQ0MsT0FBTyxFQUFDLE9BQU87SUFBQ0MsS0FBSyxFQUFDLGdCQUFnQjtJQUFDQyxLQUFLLEVBQUM7RUFBUSxHQUFLSixLQUFLO0lBQUFLLFFBQUEsR0FDeEUsY0FBYyxlQUNmVCxzREFBQSxDQUFDUiwwREFBSTtNQUFDZSxLQUFLLEVBQUMsU0FBUztNQUFDRyxJQUFJLEVBQUMsa0JBQWtCO01BQUFELFFBQUEsRUFBQztJQUU5QyxDQUFNLENBQUMsRUFBQyxHQUFHLEVBQ1YsSUFBSUUsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsRUFDeEIsR0FBRztFQUFBLEVBQ00sQ0FBQztBQUVuQjs7QUFFQTtBQUNBLElBQU1DLFlBQVksR0FBR2hCLGdFQUFXLENBQUMsQ0FBQztBQUVuQixTQUFTaUIsY0FBY0EsQ0FBQSxFQUFHO0VBQ3ZDLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUF1QyxFQUFLO0lBQ2hFQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLElBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFRLENBQUNILEtBQUssQ0FBQ0ksYUFBYSxDQUFDO0lBQzlDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztNQUNWQyxLQUFLLEVBQUVMLElBQUksQ0FBQ00sR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUN4QkMsUUFBUSxFQUFFUCxJQUFJLENBQUNN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RUFBQztZQUFhLENBQ3RCLENBQUMsZUFDRjFELHNEQUFBLENBQUNiLDZEQUFNO2NBQ0gyRSxJQUFJLEVBQUMsUUFBUTtjQUNiTixTQUFTO2NBQ1RsRCxPQUFPLEVBQUMsV0FBVztjQUNuQnlCLEVBQUUsRUFBRTtnQkFBRXNCLEVBQUUsRUFBRSxDQUFDO2dCQUFFWSxFQUFFLEVBQUU7Y0FBRSxDQUFFO2NBQUF4RCxRQUFBLEVBQ3hCO1lBRUQsQ0FBUSxDQUFDLGVBQ1RQLHVEQUFBLENBQUNSLDBEQUFJO2NBQUN3RSxTQUFTO2NBQUF6RCxRQUFBLGdCQUNiVCxzREFBQSxDQUFDTiwwREFBSTtnQkFBQ2lDLElBQUk7Z0JBQUNDLEVBQUU7Z0JBQUFuQixRQUFBLGVBQ1hULHNEQUFBLENBQUNSLDBEQUFJO2tCQUFDa0IsSUFBSSxFQUFDLEdBQUc7a0JBQUNKLE9BQU8sRUFBQyxPQUFPO2tCQUFBRyxRQUFBLEVBQUM7Z0JBRS9CLENBQU07Y0FBQyxDQUNILENBQUMsZUFDUFQsc0RBQUEsQ0FBQ04sMERBQUk7Z0JBQUNpQyxJQUFJO2dCQUFBbEIsUUFBQSxlQUNSVCxzREFBQSxDQUFDUiwwREFBSTtrQkFBQ2tCLElBQUksRUFBQyxHQUFHO2tCQUFDSixPQUFPLEVBQUMsT0FBTztrQkFBQUcsUUFBQSxFQUMzQjtnQkFBZ0MsQ0FDN0I7Y0FBQyxDQUNILENBQUM7WUFBQSxDQUNILENBQUMsZUFDUFQsc0RBQUEsQ0FBQ0csU0FBUztjQUFDNEIsRUFBRSxFQUFFO2dCQUFFc0IsRUFBRSxFQUFFO2NBQUU7WUFBRSxDQUFFLENBQUM7VUFBQSxDQUN6QixDQUFDO1FBQUEsQ0FDSDtNQUFDLENBQ0YsQ0FBQztJQUFBLENBQ0o7RUFBQyxDQUNPLENBQUM7QUFFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoZnJvbnQvLi9zcmMvcGFnZS9hdXRoL0Z1bGxzY3JlZW5BdXRoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2hlY2tib3gnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9ja091dGxpbmVkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuZnVuY3Rpb24gQ29weXJpZ2h0KHByb3BzOiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiIHsuLi5wcm9wc30+XG4gICAgICAgIHsnQ29weXJpZ2h0IMKpICd9XG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL211aS5jb20vXCI+XG4gICAgICAgICAgWW91ciBXZWJzaXRlXG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICB7Jy4nfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuXG4vLyBUT0RPIHJlbW92ZSwgdGhpcyBkZW1vIHNob3VsZG4ndCBuZWVkIHRvIHJlc2V0IHRoZSB0aGVtZS5cbmNvbnN0IGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ1bGxzY3JlZW5BdXRoKCkge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIGVtYWlsOiBkYXRhLmdldCgnZW1haWwnKSxcbiAgICAgIHBhc3N3b3JkOiBkYXRhLmdldCgncGFzc3dvcmQnKSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2RlZmF1bHRUaGVtZX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICB4cz17ZmFsc2V9XG4gICAgICAgICAgICAgIHNtPXs0fVxuICAgICAgICAgICAgICBtZD17N31cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbT93YWxscGFwZXJzKScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodCkgPT5cbiAgICAgICAgICAgICAgICAgICAgdC5wYWxldHRlLm1vZGUgPT09ICdsaWdodCcgPyB0LnBhbGV0dGUuZ3JleVs1MF0gOiB0LnBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IG1kPXs1fSAgZWxldmF0aW9uPXs2fSBzcXVhcmU+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIG15OiA4LFxuICAgICAgICAgICAgICAgICAgbXg6IDQsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBdmF0YXIgc3g9e3sgbTogMSwgYmdjb2xvcjogJ3NlY29uZGFyeS5tYWluJyB9fT5cbiAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17KCk9PmhhbmRsZVN1Ym1pdH0gc3g9e3sgbXQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IHZhbHVlPVwicmVtZW1iZXJcIiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZW1lbWJlciBtZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IG10OiAzLCBtYjogMiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8Q29weXJpZ2h0IHN4PXt7IG10OiA1IH19IC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkJ1dHRvbiIsIkNzc0Jhc2VsaW5lIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiTGluayIsIkJveCIsIkdyaWQiLCJMb2NrT3V0bGluZWRJY29uIiwiVHlwb2dyYXBoeSIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJDb3B5cmlnaHQiLCJwcm9wcyIsIl9vYmplY3RTcHJlYWQiLCJ2YXJpYW50IiwiY29sb3IiLCJhbGlnbiIsImNoaWxkcmVuIiwiaHJlZiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRlZmF1bHRUaGVtZSIsIkZ1bGxzY3JlZW5BdXRoIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsInRoZW1lIiwiaXRlbSIsInhzIiwic20iLCJtZCIsInN4IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRDb2xvciIsInQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImVsZXZhdGlvbiIsInNxdWFyZSIsIm15IiwibXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtIiwiYmdjb2xvciIsImNvbXBvbmVudCIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsIm10IiwibWFyZ2luIiwicmVxdWlyZWQiLCJmdWxsV2lkdGgiLCJpZCIsImxhYmVsIiwibmFtZSIsImF1dG9Db21wbGV0ZSIsImF1dG9Gb2N1cyIsInR5cGUiLCJjb250cm9sIiwidmFsdWUiLCJtYiIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=