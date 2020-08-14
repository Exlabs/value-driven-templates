webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/navigation/navigation.styles.ts":
/*!************************************************!*\
  !*** ./src/ui/navigation/navigation.styles.ts ***!
  \************************************************/
/*! exports provided: StyledNavigation, Logo, ItemList, NavigationItem, NavigationLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledNavigation\", function() { return StyledNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemList\", function() { return ItemList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationItem\", function() { return NavigationItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationLink\", function() { return NavigationLink; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background-color: ${({\n  theme\n}) => theme.color.background};\n`;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1`\n  font-weight: 700;\n  font-size: 21px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 18px;\n  }\n`;\nconst ItemList = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul`\n  list-style: none;\n  display: flex;\n\n  & > li:last-child {\n    margin-right: 0;\n  }\n`;\nconst NavigationItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li`\n  margin-right: 15px;\n`;\nconst NavigationLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a`\n  font-size: 17px;\n  font-weight: 500;\n  cursor: pointer;\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdHlsZXMudHM/YmY5MSJdLCJuYW1lcyI6WyJTdHlsZWROYXZpZ2F0aW9uIiwic3R5bGVkIiwibmF2IiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJMb2dvIiwiaDEiLCJkZXZpY2VCcmVha3BvaW50IiwibW9iaWxlIiwiSXRlbUxpc3QiLCJ1bCIsIk5hdmlnYXRpb25JdGVtIiwibGkiLCJOYXZpZ2F0aW9uTGluayIsImEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBSTs7Ozs7c0JBS3JCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFXO0NBTHJEO0FBUUEsTUFBTUMsSUFBSSxHQUFHTCx5REFBTSxDQUFDTSxFQUFHOzs7O2tDQUlJLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUJDLE1BQU87OztDQUp4RTtBQVNBLE1BQU1DLFFBQVEsR0FBR1QseURBQU0sQ0FBQ1UsRUFBRzs7Ozs7OztDQUEzQjtBQVNBLE1BQU1DLGNBQWMsR0FBR1gseURBQU0sQ0FBQ1ksRUFBRzs7Q0FBakM7QUFJQSxNQUFNQyxjQUFjLEdBQUdiLHlEQUFNLENBQUNjLENBQUU7Ozs7Q0FBaEMiLCJmaWxlIjoiLi9zcmMvdWkvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG5gO1xuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgJiA+IGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25JdGVtID0gc3R5bGVkLmxpYFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkxpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/navigation/navigation.styles.ts\n");

/***/ })

})