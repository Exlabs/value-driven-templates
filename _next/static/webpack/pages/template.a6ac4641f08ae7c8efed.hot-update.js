webpackHotUpdate_N_E("pages/template",{

/***/ "./src/ui/mobile-menu/mobile-menu.component.tsx":
/*!******************************************************!*\
  !*** ./src/ui/mobile-menu/mobile-menu.component.tsx ***!
  \******************************************************/
/*! exports provided: MobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileMenu\", function() { return MobileMenu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/app-routes */ \"./src/router/app-routes.ts\");\n/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation.component */ \"./src/ui/navigation/navigation.component.tsx\");\n/* harmony import */ var _mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu.styles */ \"./src/ui/mobile-menu/mobile-menu.styles.ts\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ \"./src/context/mobile-menu/mobile-menu.action-creators.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/ui/mobile-menu/mobile-menu.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst MobileMenu = () => {\n  _s();\n\n  const {\n    dispatch\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__[\"useMobileMenu\"])();\n\n  const handleOnClick = () => {\n    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_6__[\"toggleMobileMenu\"])());\n  };\n\n  return __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledNav\"], {\n    initial: {\n      height: 0\n    },\n    animate: {\n      height: '100vh',\n      transition: {\n        duration: 0.5,\n        easings: true\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__[\"Navigation\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledList\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1,\n      transition: {\n        duration: 0.5,\n        easings: true,\n        delay: 0.5\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].HOME),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"HOME\"))), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].ABOUT),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"ABOUT\"))), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].TEMPLATE),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"TEMPLATE\"))), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].HOW_TO_CONTRIBUTE),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"HOW TO CONTRIBUTE\")))));\n};\n\n_s(MobileMenu, \"dtQ9h+N28KU9y95G3TLo8muPlCQ=\", false, function () {\n  return [_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__[\"useMobileMenu\"]];\n});\n\n_c = MobileMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"MobileMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC50c3g/OTUzNSJdLCJuYW1lcyI6WyJNb2JpbGVNZW51IiwiZGlzcGF0Y2giLCJ1c2VNb2JpbGVNZW51IiwiaGFuZGxlT25DbGljayIsInRvZ2dsZU1vYmlsZU1lbnUiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNpbmdzIiwib3BhY2l0eSIsImRlbGF5IiwiZ2V0SW50ZXJuYWxMaW5rIiwiQXBwUm91dGUiLCJIT01FIiwiQUJPVVQiLCJURU1QTEFURSIsIkhPV19UT19DT05UUklCVVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFVBQVUsR0FBRyxNQUFNO0FBQUE7O0FBQzlCLFFBQU07QUFBRUM7QUFBRixNQUFlQyxpR0FBYSxFQUFsQzs7QUFFQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUMxQkYsWUFBUSxDQUFDRyx5R0FBZ0IsRUFBakIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLDZEQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQURELEtBRFg7QUFJRSxXQUFPLEVBQUU7QUFDUEEsWUFBTSxFQUFFLE9BREQ7QUFFUEMsZ0JBQVUsRUFBRTtBQUNWQyxnQkFBUSxFQUFFLEdBREE7QUFFVkMsZUFBTyxFQUFFO0FBRkM7QUFGTCxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxXQUFPLEVBQUVMLGFBRFg7QUFFRSxXQUFPLEVBQUU7QUFBRU0sYUFBTyxFQUFFO0FBQVgsS0FGWDtBQUdFLFdBQU8sRUFBRTtBQUNQQSxhQUFPLEVBQUUsQ0FERjtBQUVQSCxnQkFBVSxFQUFFO0FBQUVDLGdCQUFRLEVBQUUsR0FBWjtBQUFpQkMsZUFBTyxFQUFFLElBQTFCO0FBQWdDRSxhQUFLLEVBQUU7QUFBdkM7QUFGTCxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQywwRUFBZSxDQUFDQywyREFBUSxDQUFDQyxJQUFWLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQVJGLENBREYsRUFhRSxNQUFDLGtFQUFEO0FBQWdCLFdBQU8sRUFBRVYsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVRLDBFQUFlLENBQUNDLDJEQUFRLENBQUNFLEtBQVYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FiRixFQWtCRSxNQUFDLGtFQUFEO0FBQWdCLFdBQU8sRUFBRVgsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVRLDBFQUFlLENBQUNDLDJEQUFRLENBQUNHLFFBQVYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBbEJGLEVBdUJFLE1BQUMsa0VBQUQ7QUFBZ0IsV0FBTyxFQUFFWixhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRVEsMEVBQWUsQ0FBQ0MsMkRBQVEsQ0FBQ0ksaUJBQVYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQURGLENBdkJGLENBYkYsQ0FERjtBQTZDRCxDQXBETTs7R0FBTWhCLFU7VUFDVUUseUY7OztLQURWRixVIiwiZmlsZSI6Ii4vc3JjL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEFwcFJvdXRlLCBnZXRJbnRlcm5hbExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXIvYXBwLXJvdXRlcyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHlsZWROYXYsIFN0eWxlZExpc3QsIFN0eWxlZExpc3RJdGVtLCBTdHlsZWRMaW5rIH0gZnJvbSAnLi9tb2JpbGUtbWVudS5zdHlsZXMnO1xuaW1wb3J0IHsgdXNlTW9iaWxlTWVudSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1tb2JpbGUtbWVudS91c2UtbW9iaWxlLW1lbnUuaG9vayc7XG5pbXBvcnQgeyB0b2dnbGVNb2JpbGVNZW51IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5hY3Rpb24tY3JlYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlTW9iaWxlTWVudSgpO1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2godG9nZ2xlTW9iaWxlTWVudSgpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWROYXZcbiAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgfX1cbiAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICBlYXNpbmdzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPFN0eWxlZExpc3Q+XG4gICAgICAgIDxTdHlsZWRMaXN0SXRlbVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNSwgZWFzaW5nczogdHJ1ZSwgZGVsYXk6IDAuNSB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPXtnZXRJbnRlcm5hbExpbmsoQXBwUm91dGUuSE9NRSl9PlxuICAgICAgICAgICAgPFN0eWxlZExpbms+SE9NRTwvU3R5bGVkTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvU3R5bGVkTGlzdEl0ZW0+XG4gICAgICAgIDxTdHlsZWRMaXN0SXRlbSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfT5cbiAgICAgICAgICA8TGluayBocmVmPXtnZXRJbnRlcm5hbExpbmsoQXBwUm91dGUuQUJPVVQpfT5cbiAgICAgICAgICAgIDxTdHlsZWRMaW5rPkFCT1VUPC9TdHlsZWRMaW5rPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9TdHlsZWRMaXN0SXRlbT5cbiAgICAgICAgPFN0eWxlZExpc3RJdGVtIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2dldEludGVybmFsTGluayhBcHBSb3V0ZS5URU1QTEFURSl9PlxuICAgICAgICAgICAgPFN0eWxlZExpbms+VEVNUExBVEU8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1N0eWxlZExpc3RJdGVtPlxuICAgICAgICA8U3R5bGVkTGlzdEl0ZW0gb25DbGljaz17aGFuZGxlT25DbGlja30+XG4gICAgICAgICAgPExpbmsgaHJlZj17Z2V0SW50ZXJuYWxMaW5rKEFwcFJvdXRlLkhPV19UT19DT05UUklCVVRFKX0+XG4gICAgICAgICAgICA8U3R5bGVkTGluaz5IT1cgVE8gQ09OVFJJQlVURTwvU3R5bGVkTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvU3R5bGVkTGlzdEl0ZW0+XG4gICAgICA8L1N0eWxlZExpc3Q+XG4gICAgPC9TdHlsZWROYXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/mobile-menu/mobile-menu.component.tsx\n");

/***/ })

})