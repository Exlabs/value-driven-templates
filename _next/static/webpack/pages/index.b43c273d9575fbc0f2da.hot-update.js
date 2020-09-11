webpackHotUpdate_N_E("pages/index",{

/***/ "./src/ui/mobile-menu/mobile-menu.component.tsx":
/*!******************************************************!*\
  !*** ./src/ui/mobile-menu/mobile-menu.component.tsx ***!
  \******************************************************/
/*! exports provided: MobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileMenu\", function() { return MobileMenu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/app-routes */ \"./src/router/app-routes.ts\");\n/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation.component */ \"./src/ui/navigation/navigation.component.tsx\");\n/* harmony import */ var _mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu.styles */ \"./src/ui/mobile-menu/mobile-menu.styles.ts\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ \"./src/context/mobile-menu/mobile-menu.action-creators.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/ui/mobile-menu/mobile-menu.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst MobileMenu = () => {\n  _s();\n\n  const {\n    dispatch\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__[\"useMobileMenu\"])();\n\n  const handleOnClick = () => {\n    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_6__[\"toggleMobileMenu\"])());\n  };\n\n  return __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledNav\"], {\n    initial: {\n      height: 0\n    },\n    animate: {\n      height: '100vh',\n      transition: {\n        duration: 0.4,\n        easings: true\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__[\"Navigation\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledList\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].HOME),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"HOME\"))), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].ABOUT),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"ABOUT\"))), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].TEMPLATE),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"TEMPLATE\"))), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].HOW_TO_CONTRIBUTE),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"HOW TO CONTRIBUTE\")))));\n};\n\n_s(MobileMenu, \"dtQ9h+N28KU9y95G3TLo8muPlCQ=\", false, function () {\n  return [_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__[\"useMobileMenu\"]];\n});\n\n_c = MobileMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"MobileMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC50c3g/OTUzNSJdLCJuYW1lcyI6WyJNb2JpbGVNZW51IiwiZGlzcGF0Y2giLCJ1c2VNb2JpbGVNZW51IiwiaGFuZGxlT25DbGljayIsInRvZ2dsZU1vYmlsZU1lbnUiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNpbmdzIiwiZ2V0SW50ZXJuYWxMaW5rIiwiQXBwUm91dGUiLCJIT01FIiwiQUJPVVQiLCJURU1QTEFURSIsIkhPV19UT19DT05UUklCVVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFVBQVUsR0FBRyxNQUFNO0FBQUE7O0FBQzlCLFFBQU07QUFBRUM7QUFBRixNQUFlQyxpR0FBYSxFQUFsQzs7QUFFQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUMxQkYsWUFBUSxDQUFDRyx5R0FBZ0IsRUFBakIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLDZEQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQURELEtBRFg7QUFJRSxXQUFPLEVBQUU7QUFDUEEsWUFBTSxFQUFFLE9BREQ7QUFFUEMsZ0JBQVUsRUFBRTtBQUNWQyxnQkFBUSxFQUFFLEdBREE7QUFFVkMsZUFBTyxFQUFFO0FBRkM7QUFGTCxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBZ0IsV0FBTyxFQUFFTCxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRU0sMEVBQWUsQ0FBQ0MsMkRBQVEsQ0FBQ0MsSUFBVixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixDQURGLEVBTUUsTUFBQyxrRUFBRDtBQUFnQixXQUFPLEVBQUVSLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFTSwwRUFBZSxDQUFDQywyREFBUSxDQUFDRSxLQUFWLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQURGLENBTkYsRUFXRSxNQUFDLGtFQUFEO0FBQWdCLFdBQU8sRUFBRVQsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVNLDBFQUFlLENBQUNDLDJEQUFRLENBQUNHLFFBQVYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBWEYsRUFnQkUsTUFBQyxrRUFBRDtBQUFnQixXQUFPLEVBQUVWLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFTSwwRUFBZSxDQUFDQywyREFBUSxDQUFDSSxpQkFBVixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBREYsQ0FoQkYsQ0FiRixDQURGO0FBc0NELENBN0NNOztHQUFNZCxVO1VBQ1VFLHlGOzs7S0FEVkYsVSIsImZpbGUiOiIuL3NyYy91aS9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBBcHBSb3V0ZSwgZ2V0SW50ZXJuYWxMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVyL2FwcC1yb3V0ZXMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVkTmF2LCBTdHlsZWRMaXN0LCBTdHlsZWRMaXN0SXRlbSwgU3R5bGVkTGluayB9IGZyb20gJy4vbW9iaWxlLW1lbnUuc3R5bGVzJztcbmltcG9ydCB7IHVzZU1vYmlsZU1lbnUgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtbW9iaWxlLW1lbnUvdXNlLW1vYmlsZS1tZW51Lmhvb2snO1xuaW1wb3J0IHsgdG9nZ2xlTW9iaWxlTWVudSB9IGZyb20gJy4uLy4uL2NvbnRleHQvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuYWN0aW9uLWNyZWF0b3JzJztcblxuZXhwb3J0IGNvbnN0IE1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZU1vYmlsZU1lbnUoKTtcblxuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHRvZ2dsZU1vYmlsZU1lbnUoKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTmF2XG4gICAgICBpbml0aWFsPXt7XG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgIH19XG4gICAgICBhbmltYXRlPXt7XG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgZWFzaW5nczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxTdHlsZWRMaXN0PlxuICAgICAgICA8U3R5bGVkTGlzdEl0ZW0gb25DbGljaz17aGFuZGxlT25DbGlja30+XG4gICAgICAgICAgPExpbmsgaHJlZj17Z2V0SW50ZXJuYWxMaW5rKEFwcFJvdXRlLkhPTUUpfT5cbiAgICAgICAgICAgIDxTdHlsZWRMaW5rPkhPTUU8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1N0eWxlZExpc3RJdGVtPlxuICAgICAgICA8U3R5bGVkTGlzdEl0ZW0gb25DbGljaz17aGFuZGxlT25DbGlja30+XG4gICAgICAgICAgPExpbmsgaHJlZj17Z2V0SW50ZXJuYWxMaW5rKEFwcFJvdXRlLkFCT1VUKX0+XG4gICAgICAgICAgICA8U3R5bGVkTGluaz5BQk9VVDwvU3R5bGVkTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvU3R5bGVkTGlzdEl0ZW0+XG4gICAgICAgIDxTdHlsZWRMaXN0SXRlbSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfT5cbiAgICAgICAgICA8TGluayBocmVmPXtnZXRJbnRlcm5hbExpbmsoQXBwUm91dGUuVEVNUExBVEUpfT5cbiAgICAgICAgICAgIDxTdHlsZWRMaW5rPlRFTVBMQVRFPC9TdHlsZWRMaW5rPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9TdHlsZWRMaXN0SXRlbT5cbiAgICAgICAgPFN0eWxlZExpc3RJdGVtIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2dldEludGVybmFsTGluayhBcHBSb3V0ZS5IT1dfVE9fQ09OVFJJQlVURSl9PlxuICAgICAgICAgICAgPFN0eWxlZExpbms+SE9XIFRPIENPTlRSSUJVVEU8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1N0eWxlZExpc3RJdGVtPlxuICAgICAgPC9TdHlsZWRMaXN0PlxuICAgIDwvU3R5bGVkTmF2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/mobile-menu/mobile-menu.component.tsx\n");

/***/ })

})