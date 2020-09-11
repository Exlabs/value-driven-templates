webpackHotUpdate_N_E("pages/template",{

/***/ "./src/ui/mobile-menu/mobile-menu.styles.ts":
/*!**************************************************!*\
  !*** ./src/ui/mobile-menu/mobile-menu.styles.ts ***!
  \**************************************************/
/*! exports provided: StyledNav, StyledList, StyledListItem, StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledNav\", function() { return StyledNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledList\", function() { return StyledList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledListItem\", function() { return StyledListItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledLink\", function() { return StyledLink; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nconst StyledNav = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].nav)`\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  padding: 10px 20px;\n  z-index: 9999;\n  overflow: hidden;\n\n  & > .navigation {\n    padding-top: 10px;\n  }\n`;\nconst StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul`\n  list-style: none;\n\n  & > li:first-child {\n    border-top: 1px solid ${({\n  theme\n}) => theme.color.gray400};\n\n    margin-top: 30px;\n  }\n`;\nconst StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li`\n  border-bottom: 1px solid ${({\n  theme\n}) => theme.color.gray400};\n  padding: 20px 0;\n`;\nconst StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a`\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 21px;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LnN0eWxlcy50cz8yNWQ5Il0sIm5hbWVzIjpbIlN0eWxlZE5hdiIsInN0eWxlZCIsIm1vdGlvbiIsIm5hdiIsIlN0eWxlZExpc3QiLCJ1bCIsInRoZW1lIiwiY29sb3IiLCJncmF5NDAwIiwiU3R5bGVkTGlzdEl0ZW0iLCJsaSIsIlN0eWxlZExpbmsiLCJhIiwiZm9udFByaW1hcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsR0FBUixDQUFhOzs7Ozs7Ozs7Ozs7OztDQUFyQztBQWdCQSxNQUFNQyxVQUFVLEdBQUdILHlEQUFNLENBQUNJLEVBQUc7Ozs7NEJBSVIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVE7Ozs7Q0FKeEQ7QUFVQSxNQUFNQyxjQUFjLEdBQUdSLHlEQUFNLENBQUNTLEVBQUc7NkJBQ1gsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVE7O0NBRHpEO0FBS0EsTUFBTUcsVUFBVSxHQUFHVix5REFBTSxDQUFDVyxDQUFFOzs7O1dBSXhCLENBQUM7QUFBRU47QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxXQUFZO0NBSjNDIiwiZmlsZSI6Ii4vc3JjL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWROYXYgPSBzdHlsZWQobW90aW9uLm5hdilgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgei1pbmRleDogOTk5OTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmID4gLm5hdmlnYXRpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAmID4gbGk6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmdyYXk0MDB9O1xuXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5ncmF5NDAwfTtcbiAgcGFkZGluZzogMjBweCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRQcmltYXJ5fTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/mobile-menu/mobile-menu.styles.ts\n");

/***/ })

})