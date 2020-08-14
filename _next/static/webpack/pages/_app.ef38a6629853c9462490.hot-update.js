webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/providers/theme.provider.tsx":
/*!******************************************!*\
  !*** ./src/providers/theme.provider.tsx ***!
  \******************************************/
/*! exports provided: ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeProvider\", function() { return ThemeProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/theme-config */ \"./src/theme/theme-config.ts\");\n/* harmony import */ var _theme_reset_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/reset-styles */ \"./src/theme/reset-styles.ts\");\n/* harmony import */ var _theme_global_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/global-styles */ \"./src/theme/global-styles.ts\");\n/* harmony import */ var _layout_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.provider */ \"./src/providers/layout.provider.tsx\");\n/* harmony import */ var _mobile_menu_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-menu.provider */ \"./src/providers/mobile-menu.provider.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/theme.provider.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst ThemeProvider = ({\n  children\n}) => __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"AnimatePresence\"], {\n  exitBeforeEnter: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }\n}, __jsx(_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_7__[\"MobileMenuProvider\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }\n}, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n  theme: _theme_theme_config__WEBPACK_IMPORTED_MODULE_3__[\"theme\"],\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 7\n  }\n}, __jsx(_theme_reset_styles__WEBPACK_IMPORTED_MODULE_4__[\"ResetStyles\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }\n}), __jsx(_theme_global_styles__WEBPACK_IMPORTED_MODULE_5__[\"GlobalStyles\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }\n}), __jsx(_layout_provider__WEBPACK_IMPORTED_MODULE_6__[\"LayoutProvider\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }\n}, children))));\n_c = ThemeProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ThemeProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb3ZpZGVycy90aGVtZS5wcm92aWRlci50c3g/NGU0NiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDM0IsTUFBQyw2REFBRDtBQUFpQixpQkFBZSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUFxQixPQUFLLEVBQUVDLHlEQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFpQkQsUUFBakIsQ0FIRixDQURGLENBREYsQ0FESztLQUFNRCxhIiwiZmlsZSI6Ii4vc3JjL3Byb3ZpZGVycy90aGVtZS5wcm92aWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBTdHlsZWRUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBSZXNldFN0eWxlcyB9IGZyb20gJy4uL3RoZW1lL3Jlc2V0LXN0eWxlcyc7XG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tICcuLi90aGVtZS9nbG9iYWwtc3R5bGVzJztcbmltcG9ydCB7IExheW91dFByb3ZpZGVyIH0gZnJvbSAnLi9sYXlvdXQucHJvdmlkZXInO1xuaW1wb3J0IHsgTW9iaWxlTWVudVByb3ZpZGVyIH0gZnJvbSAnLi9tb2JpbGUtbWVudS5wcm92aWRlcic7XG5cbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IChcbiAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG4gICAgPE1vYmlsZU1lbnVQcm92aWRlcj5cbiAgICAgIDxTdHlsZWRUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxSZXNldFN0eWxlcyAvPlxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICAgIDxMYXlvdXRQcm92aWRlcj57Y2hpbGRyZW59PC9MYXlvdXRQcm92aWRlcj5cbiAgICAgIDwvU3R5bGVkVGhlbWVQcm92aWRlcj5cbiAgICA8L01vYmlsZU1lbnVQcm92aWRlcj5cbiAgPC9BbmltYXRlUHJlc2VuY2U+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/providers/theme.provider.tsx\n");

/***/ })

})