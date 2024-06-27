"use strict";
(self["webpackChunktechfront"] = self["webpackChunktechfront"] || []).push([["src_client_page_auth_FullscreenAuth_tsx"],{

/***/ "./src/client/page/auth/FullscreenAuth.tsx":
/*!*************************************************!*\
  !*** ./src/client/page/auth/FullscreenAuth.tsx ***!
  \*************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9wYWdlX2F1dGhfRnVsbHNjcmVlbkF1dGhfdHN4LmYzZjNhNjYxMmY4ZDY4MDc1YmI0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1c7QUFDQTtBQUNVO0FBQ0o7QUFDYztBQUNoQjtBQUNSO0FBRUY7QUFDRTtBQUMwQjtBQUNkO0FBQ2dCO0FBQUE7QUFFbEUsU0FBU2tCLFNBQVNBLENBQUNDLEtBQVUsRUFBRTtFQUM3QixvQkFDSUYsdURBQUEsQ0FBQ04sZ0VBQVUsRUFBQVMsYUFBQSxDQUFBQSxhQUFBO0lBQUNDLE9BQU8sRUFBQyxPQUFPO0lBQUNDLEtBQUssRUFBQyxnQkFBZ0I7SUFBQ0MsS0FBSyxFQUFDO0VBQVEsR0FBS0osS0FBSztJQUFBSyxRQUFBLEdBQ3hFLGNBQWMsZUFDZlQsc0RBQUEsQ0FBQ1IsMERBQUk7TUFBQ2UsS0FBSyxFQUFDLFNBQVM7TUFBQ0csSUFBSSxFQUFDLGtCQUFrQjtNQUFBRCxRQUFBLEVBQUM7SUFFOUMsQ0FBTSxDQUFDLEVBQUMsR0FBRyxFQUNWLElBQUlFLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEVBQ3hCLEdBQUc7RUFBQSxFQUNNLENBQUM7QUFFbkI7QUFFQSxJQUFNQyxZQUFZLEdBQUdoQixnRUFBVyxDQUFDLENBQUM7QUFFbkIsU0FBU2lCLGNBQWNBLENBQUEsRUFBRztFQUN2QyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsS0FBdUMsRUFBSztJQUNoRUEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QixJQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBUSxDQUFDSCxLQUFLLENBQUNJLGFBQWEsQ0FBQztJQUM5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUM7TUFDVkMsS0FBSyxFQUFFTCxJQUFJLENBQUNNLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDeEJDLFFBQVEsRUFBRVAsSUFBSSxDQUFD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SSxFQUFDLEdBQUc7a0JBQUNKLE9BQU8sRUFBQyxPQUFPO2tCQUFBRyxRQUFBLEVBQzNCO2dCQUFnQyxDQUM3QjtjQUFDLENBQ0gsQ0FBQztZQUFBLENBQ0gsQ0FBQyxlQUNQVCxzREFBQSxDQUFDRyxTQUFTO2NBQUN3QixFQUFFLEVBQUU7Z0JBQUVXLEVBQUUsRUFBRTtjQUFFO1lBQUUsQ0FBRSxDQUFDO1VBQUEsQ0FDekIsQ0FBQztRQUFBLENBQ0g7TUFBQyxDQUNILENBQUM7SUFBQSxDQUNIO0VBQUMsQ0FDTyxDQUFDO0FBRXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaGZyb250Ly4vc3JjL2NsaWVudC9wYWdlL2F1dGgvRnVsbHNjcmVlbkF1dGgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG11aS9tYXRlcmlhbC9DaGVja2JveCc7XG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NrT3V0bGluZWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuXG5mdW5jdGlvbiBDb3B5cmlnaHQocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCIgey4uLnByb3BzfT5cbiAgICAgICAgeydDb3B5cmlnaHQgwqkgJ31cbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbXVpLmNvbS9cIj5cbiAgICAgICAgICBZb3VyIFdlYnNpdGVcbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIHsnLid9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG5cbmNvbnN0IGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ1bGxzY3JlZW5BdXRoKCkge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIGVtYWlsOiBkYXRhLmdldCgnZW1haWwnKSxcbiAgICAgIHBhc3N3b3JkOiBkYXRhLmdldCgncGFzc3dvcmQnKSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2RlZmF1bHRUaGVtZX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgPGRpdi8+XG4gICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIG15OiA4LFxuICAgICAgICAgICAgICAgICAgbXg6IDQsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBdmF0YXIgc3g9e3sgbTogMSwgYmdjb2xvcjogJ3NlY29uZGFyeS5tYWluJyB9fT5cbiAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17KCk9PmhhbmRsZVN1Ym1pdH0gc3g9e3sgbXQ6IDEgfX0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IHZhbHVlPVwicmVtZW1iZXJcIiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZW1lbWJlciBtZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IG10OiAzLCBtYjogMiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8Q29weXJpZ2h0IHN4PXt7IG10OiA1IH19IC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiQnV0dG9uIiwiQ3NzQmFzZWxpbmUiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbExhYmVsIiwiQ2hlY2tib3giLCJMaW5rIiwiQm94IiwiR3JpZCIsIkxvY2tPdXRsaW5lZEljb24iLCJUeXBvZ3JhcGh5IiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkNvcHlyaWdodCIsInByb3BzIiwiX29iamVjdFNwcmVhZCIsInZhcmlhbnQiLCJjb2xvciIsImFsaWduIiwiY2hpbGRyZW4iLCJocmVmIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZGVmYXVsdFRoZW1lIiwiRnVsbHNjcmVlbkF1dGgiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsImdldCIsInBhc3N3b3JkIiwidGhlbWUiLCJzeCIsIm15IiwibXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtIiwiYmdjb2xvciIsImNvbXBvbmVudCIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsIm10IiwibWFyZ2luIiwicmVxdWlyZWQiLCJmdWxsV2lkdGgiLCJpZCIsImxhYmVsIiwibmFtZSIsImF1dG9Db21wbGV0ZSIsImF1dG9Gb2N1cyIsInR5cGUiLCJjb250cm9sIiwidmFsdWUiLCJtYiIsImNvbnRhaW5lciIsIml0ZW0iLCJ4cyJdLCJzb3VyY2VSb290IjoiIn0=