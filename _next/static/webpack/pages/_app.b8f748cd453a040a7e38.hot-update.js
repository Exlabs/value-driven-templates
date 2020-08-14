webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/global/window.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

/***/ "./src/context/mobile-menu/mobile-menu.action-creators.ts":
false,

/***/ "./src/hooks/use-device-detect/use-device-detect.hook.ts":
false,

/***/ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts":
false,

/***/ "./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts":
false,

/***/ "./src/providers/layout.provider.tsx":
false,

/***/ "./src/providers/theme.provider.tsx":
/*!******************************************!*\
  !*** ./src/providers/theme.provider.tsx ***!
  \******************************************/
/*! exports provided: ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeProvider\", function() { return ThemeProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/theme-config */ \"./src/theme/theme-config.ts\");\n/* harmony import */ var _theme_reset_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/reset-styles */ \"./src/theme/reset-styles.ts\");\n/* harmony import */ var _theme_global_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/global-styles */ \"./src/theme/global-styles.ts\");\n/* harmony import */ var _mobile_menu_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-menu.provider */ \"./src/providers/mobile-menu.provider.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/theme.provider.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst ThemeProvider = ({\n  children\n}) => __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"AnimatePresence\"], {\n  exitBeforeEnter: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }\n}, __jsx(_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_6__[\"MobileMenuProvider\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }\n}, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n  theme: _theme_theme_config__WEBPACK_IMPORTED_MODULE_3__[\"theme\"],\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 7\n  }\n}, __jsx(_theme_reset_styles__WEBPACK_IMPORTED_MODULE_4__[\"ResetStyles\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }\n}), __jsx(_theme_global_styles__WEBPACK_IMPORTED_MODULE_5__[\"GlobalStyles\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }\n}), children)));\n_c = ThemeProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ThemeProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb3ZpZGVycy90aGVtZS5wcm92aWRlci50c3g/NGU0NiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFTyxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDM0IsTUFBQyw2REFBRDtBQUFpQixpQkFBZSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUFxQixPQUFLLEVBQUVDLHlEQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdHRCxRQUhILENBREYsQ0FERixDQURLO0tBQU1ELGEiLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL3RoZW1lLnByb3ZpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIGFzIFN0eWxlZFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IFJlc2V0U3R5bGVzIH0gZnJvbSAnLi4vdGhlbWUvcmVzZXQtc3R5bGVzJztcbmltcG9ydCB7IEdsb2JhbFN0eWxlcyB9IGZyb20gJy4uL3RoZW1lL2dsb2JhbC1zdHlsZXMnO1xuaW1wb3J0IHsgTGF5b3V0UHJvdmlkZXIgfSBmcm9tICcuL2xheW91dC5wcm92aWRlcic7XG5pbXBvcnQgeyBNb2JpbGVNZW51UHJvdmlkZXIgfSBmcm9tICcuL21vYmlsZS1tZW51LnByb3ZpZGVyJztcblxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4gKFxuICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cbiAgICA8TW9iaWxlTWVudVByb3ZpZGVyPlxuICAgICAgPFN0eWxlZFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFJlc2V0U3R5bGVzIC8+XG4gICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9TdHlsZWRUaGVtZVByb3ZpZGVyPlxuICAgIDwvTW9iaWxlTWVudVByb3ZpZGVyPlxuICA8L0FuaW1hdGVQcmVzZW5jZT5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/providers/theme.provider.tsx\n");

/***/ }),

/***/ "./src/router/app-routes.ts":
false,

/***/ "./src/ui/hamburger/hamburger.component.tsx":
false,

/***/ "./src/ui/hamburger/hamburger.styles.ts":
false,

/***/ "./src/ui/mobile-menu/mobile-menu.component.tsx":
false,

/***/ "./src/ui/navigation/navigation.component.tsx":
false,

/***/ "./src/ui/navigation/navigation.styles.ts":
false

})