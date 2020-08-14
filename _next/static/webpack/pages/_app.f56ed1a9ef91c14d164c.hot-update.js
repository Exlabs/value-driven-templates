webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/navigation/navigation.styles.ts":
/*!************************************************!*\
  !*** ./src/ui/navigation/navigation.styles.ts ***!
  \************************************************/
/*! exports provided: StyledNavigation, Logo, ItemList, NavigationItem, NavigationLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledNavigation\", function() { return StyledNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemList\", function() { return ItemList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationItem\", function() { return NavigationItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationLink\", function() { return NavigationLink; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background-color: ${({\n  theme\n}) => theme.color.background};\n\n  a {\n    text-decoration: none;\n    color: ${({\n  theme\n}) => theme.color.fontPrimary};\n  }\n`;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1`\n  font-weight: 700;\n  font-size: 21px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 18px;\n  }\n`;\nconst ItemList = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul`\n  list-style: none;\n  display: flex;\n\n  & > li:last-child {\n    margin-right: 0;\n  }\n`;\nconst NavigationItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li`\n  margin-right: 15px;\n`;\nconst NavigationLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a`\n  font-size: 17px;\n  font-weight: 500;\n  cursor: pointer;\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdHlsZXMudHM/YmY5MSJdLCJuYW1lcyI6WyJTdHlsZWROYXZpZ2F0aW9uIiwic3R5bGVkIiwibmF2IiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250UHJpbWFyeSIsIkxvZ28iLCJoMSIsImRldmljZUJyZWFrcG9pbnQiLCJtb2JpbGUiLCJJdGVtTGlzdCIsInVsIiwiTmF2aWdhdGlvbkl0ZW0iLCJsaSIsIk5hdmlnYXRpb25MaW5rIiwiYSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxHQUFJOzs7OztzQkFLckIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVc7Ozs7YUFJL0MsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFdBQVk7O0NBVDdDO0FBYUEsTUFBTUMsSUFBSSxHQUFHTix5REFBTSxDQUFDTyxFQUFHOzs7O2tDQUlJLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUJDLE1BQU87OztDQUp4RTtBQVNBLE1BQU1DLFFBQVEsR0FBR1YseURBQU0sQ0FBQ1csRUFBRzs7Ozs7OztDQUEzQjtBQVNBLE1BQU1DLGNBQWMsR0FBR1oseURBQU0sQ0FBQ2EsRUFBRzs7Q0FBakM7QUFJQSxNQUFNQyxjQUFjLEdBQUdkLHlEQUFNLENBQUNlLENBQUU7Ozs7Q0FBaEMiLCJmaWxlIjoiLi9zcmMvdWkvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRQcmltYXJ5fTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuaDFgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjFweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1MaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gICYgPiBsaTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uSXRlbSA9IHN0eWxlZC5saWBcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25MaW5rID0gc3R5bGVkLmFgXG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/navigation/navigation.styles.ts\n");

/***/ })

})