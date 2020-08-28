webpackHotUpdate_N_E("pages/templates/[id]",{

/***/ "./src/ui/navigation/navigation.component.tsx":
/*!****************************************************!*\
  !*** ./src/ui/navigation/navigation.component.tsx ***!
  \****************************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\n/* harmony import */ var _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hamburger/hamburger.component */ \"./src/ui/hamburger/hamburger.component.tsx\");\n/* harmony import */ var _navigation_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.styles */ \"./src/ui/navigation/navigation.styles.ts\");\n/* harmony import */ var _router_app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../router/app-routes */ \"./src/router/app-routes.ts\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ \"./src/context/mobile-menu/mobile-menu.action-creators.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/ui/navigation/navigation.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Navigation = () => {\n  _s();\n\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__[\"useDeviceDetect\"])();\n  const {\n    state: {\n      isVisible: isMobileMenuVisible\n    },\n    dispatch\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_6__[\"useMobileMenu\"])();\n\n  const handleHamburgerClick = () => {\n    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_7__[\"toggleMobileMenu\"])());\n  };\n\n  return __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledNavigation\"], {\n    className: \"navigation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_5__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_5__[\"AppRoute\"].HOME),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_4__[\"LogoImage\"], {\n    src: `${\"\"}/icons/logo.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }), __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_4__[\"Logo\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"value driven templates\"))), isMobile ? __jsx(_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_3__[\"Hamburger\"], {\n    active: isMobileMenuVisible,\n    onClick: handleHamburgerClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }) : __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_4__[\"ItemList\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_4__[\"NavigationItem\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_5__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_5__[\"AppRoute\"].ABOUT),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_4__[\"NavigationLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, \"About\"))), __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_4__[\"NavigationItem\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_5__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_5__[\"AppRoute\"].HOW_TO_CONTRIBUTE),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_4__[\"NavigationLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, \"How to contribute\")))));\n};\n\n_s(Navigation, \"IXRn6NwM9HZulJ+HCTIIPXBf+1Q=\", false, function () {\n  return [_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__[\"useDeviceDetect\"], _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_6__[\"useMobileMenu\"]];\n});\n\n_c = Navigation;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHN4P2IxY2EiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsImlzTW9iaWxlIiwidXNlRGV2aWNlRGV0ZWN0Iiwic3RhdGUiLCJpc1Zpc2libGUiLCJpc01vYmlsZU1lbnVWaXNpYmxlIiwiZGlzcGF0Y2giLCJ1c2VNb2JpbGVNZW51IiwiaGFuZGxlSGFtYnVyZ2VyQ2xpY2siLCJ0b2dnbGVNb2JpbGVNZW51IiwiZ2V0SW50ZXJuYWxMaW5rIiwiQXBwUm91dGUiLCJIT01FIiwicHJvY2VzcyIsIkFCT1VUIiwiSE9XX1RPX0NPTlRSSUJVVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFBQTs7QUFDOUIsUUFBTTtBQUFFQztBQUFGLE1BQWVDLHVHQUFlLEVBQXBDO0FBQ0EsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFQztBQUFiLEtBREg7QUFFSkM7QUFGSSxNQUdGQyxpR0FBYSxFQUhqQjs7QUFLQSxRQUFNQyxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDRixZQUFRLENBQUNHLHlHQUFnQixFQUFqQixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMsbUVBQUQ7QUFBa0IsYUFBUyxFQUFDLFlBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQywwRUFBZSxDQUFDQywyREFBUSxDQUFDQyxJQUFWLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFXLE9BQUcsRUFBRyxHQUFFQyxFQUF5QixpQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGLENBREYsQ0FERixFQU9HWixRQUFRLEdBQ1AsTUFBQyx3RUFBRDtBQUFXLFVBQU0sRUFBRUksbUJBQW5CO0FBQXdDLFdBQU8sRUFBRUcsb0JBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETyxHQUdQLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVFLDBFQUFlLENBQUNDLDJEQUFRLENBQUNHLEtBQVYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FERixFQU1FLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVKLDBFQUFlLENBQUNDLDJEQUFRLENBQUNJLGlCQUFWLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsQ0FERixDQU5GLENBVkosQ0FERjtBQTBCRCxDQXJDTTs7R0FBTWYsVTtVQUNVRSwrRixFQUlqQksseUY7OztLQUxPUCxVIiwiZmlsZSI6Ii4vc3JjL3VpL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VEZXZpY2VEZXRlY3QgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtZGV2aWNlLWRldGVjdC91c2UtZGV2aWNlLWRldGVjdC5ob29rJztcbmltcG9ydCB7IEhhbWJ1cmdlciB9IGZyb20gJy4uL2hhbWJ1cmdlci9oYW1idXJnZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFN0eWxlZE5hdmlnYXRpb24sXG4gIExvZ28sXG4gIEl0ZW1MaXN0LFxuICBOYXZpZ2F0aW9uSXRlbSxcbiAgTmF2aWdhdGlvbkxpbmssXG4gIExvZ29JbWFnZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uLnN0eWxlcyc7XG5pbXBvcnQgeyBBcHBSb3V0ZSwgZ2V0SW50ZXJuYWxMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVyL2FwcC1yb3V0ZXMnO1xuaW1wb3J0IHsgdXNlTW9iaWxlTWVudSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1tb2JpbGUtbWVudS91c2UtbW9iaWxlLW1lbnUuaG9vayc7XG5pbXBvcnQgeyB0b2dnbGVNb2JpbGVNZW51IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5hY3Rpb24tY3JlYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG4gIGNvbnN0IHtcbiAgICBzdGF0ZTogeyBpc1Zpc2libGU6IGlzTW9iaWxlTWVudVZpc2libGUgfSxcbiAgICBkaXNwYXRjaCxcbiAgfSA9IHVzZU1vYmlsZU1lbnUoKTtcblxuICBjb25zdCBoYW5kbGVIYW1idXJnZXJDbGljayA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh0b2dnbGVNb2JpbGVNZW51KCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZE5hdmlnYXRpb24gY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgPExpbmsgaHJlZj17Z2V0SW50ZXJuYWxMaW5rKEFwcFJvdXRlLkhPTUUpfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPExvZ29JbWFnZSBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvbG9nby5zdmdgfSAvPlxuICAgICAgICAgIDxMb2dvPnZhbHVlIGRyaXZlbiB0ZW1wbGF0ZXM8L0xvZ28+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIHtpc01vYmlsZSA/IChcbiAgICAgICAgPEhhbWJ1cmdlciBhY3RpdmU9e2lzTW9iaWxlTWVudVZpc2libGV9IG9uQ2xpY2s9e2hhbmRsZUhhbWJ1cmdlckNsaWNrfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEl0ZW1MaXN0PlxuICAgICAgICAgIDxOYXZpZ2F0aW9uSXRlbT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2dldEludGVybmFsTGluayhBcHBSb3V0ZS5BQk9VVCl9PlxuICAgICAgICAgICAgICA8TmF2aWdhdGlvbkxpbms+QWJvdXQ8L05hdmlnYXRpb25MaW5rPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmF2aWdhdGlvbkl0ZW0+XG4gICAgICAgICAgPE5hdmlnYXRpb25JdGVtPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17Z2V0SW50ZXJuYWxMaW5rKEFwcFJvdXRlLkhPV19UT19DT05UUklCVVRFKX0+XG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTGluaz5Ib3cgdG8gY29udHJpYnV0ZTwvTmF2aWdhdGlvbkxpbms+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZpZ2F0aW9uSXRlbT5cbiAgICAgICAgPC9JdGVtTGlzdD5cbiAgICAgICl9XG4gICAgPC9TdHlsZWROYXZpZ2F0aW9uPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/navigation/navigation.component.tsx\n");

/***/ })

})