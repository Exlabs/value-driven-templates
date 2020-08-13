webpackHotUpdate_N_E("pages/index",{

/***/ "./src/ui/hamburger/hamburger.styles.ts":
/*!**********************************************!*\
  !*** ./src/ui/hamburger/hamburger.styles.ts ***!
  \**********************************************/
/*! exports provided: StyledButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.attrs(({\n  open = false\n}) => ({\n  open\n}))`\n  background-color: inherit;\n  border: none;\n  outline: none;\n  padding: 0;\n\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  transform-origin: 1px;\n  cursor: pointer;\n\n  & > div {\n    width: 32px;\n    height: 4px;\n    background-color: ${({\n  theme\n}) => theme.color.fontPrimary};\n    border-radius: 10px;\n    transition: transform 0.3s ease, opacity 0.3s ease;\n    position: relative;\n    transform-origin: 1px;\n\n    &:first-child {\n      transform: ${({\n  open\n}) => open ? 'rotate(45deg)' : 'rotate(0)'};\n    }\n\n    &:nth-child(2) {\n      opacity: ${({\n  open\n}) => open ? '0' : '1'};\n      transform: ${({\n  open\n}) => open ? 'translateX(20px)' : 'translateX(0)'};\n    }\n    &:nth-child(3) {\n      transform: ${({\n  open\n}) => open ? 'rotate(-45deg)' : 'rotate(0)'};\n    }\n  }\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2hhbWJ1cmdlci9oYW1idXJnZXIuc3R5bGVzLnRzPzcyMzUiXSwibmFtZXMiOlsiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwiYXR0cnMiLCJvcGVuIiwidGhlbWUiLCJjb2xvciIsImZvbnRQcmltYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQzFCLENBQUM7QUFBRUMsTUFBSSxHQUFHO0FBQVQsQ0FBRCxNQUEyQztBQUN6Q0E7QUFEeUMsQ0FBM0MsQ0FEMEIsQ0FJMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQWlCc0IsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVk7Ozs7Ozs7bUJBTzVDLENBQUM7QUFBRUg7QUFBRixDQUFELEtBQWVBLElBQUksR0FBRyxlQUFILEdBQXFCLFdBQWE7Ozs7aUJBSXZELENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWVBLElBQUksR0FBRyxHQUFILEdBQVMsR0FBSzttQkFDL0IsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBZUEsSUFBSSxHQUFHLGtCQUFILEdBQXdCLGVBQWlCOzs7bUJBRzVELENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWVBLElBQUksR0FBRyxnQkFBSCxHQUFzQixXQUFhOzs7Q0FwQ2xFIiwiZmlsZSI6Ii4vc3JjL3VpL2hhbWJ1cmdlci9oYW1idXJnZXIuc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uLmF0dHJzKFxuICAoeyBvcGVuID0gZmFsc2UgfTogeyBvcGVuPzogYm9vbGVhbiB9KSA9PiAoe1xuICAgIG9wZW4sXG4gIH0pXG4pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG5cbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYgPiBkaXYge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyAncm90YXRlKDQ1ZGVnKScgOiAncm90YXRlKDApJyl9O1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIG9wYWNpdHk6ICR7KHsgb3BlbiB9KSA9PiAob3BlbiA/ICcwJyA6ICcxJyl9O1xuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyAndHJhbnNsYXRlWCgyMHB4KScgOiAndHJhbnNsYXRlWCgwKScpfTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyAncm90YXRlKC00NWRlZyknIDogJ3JvdGF0ZSgwKScpfTtcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/hamburger/hamburger.styles.ts\n");

/***/ })

})