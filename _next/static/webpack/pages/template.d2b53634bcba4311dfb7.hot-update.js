webpackHotUpdate_N_E("pages/template",{

/***/ "./src/app/template/heading/heading.styles.ts":
/*!****************************************************!*\
  !*** ./src/app/template/heading/heading.styles.ts ***!
  \****************************************************/
/*! exports provided: StyledHeader, TextContainer, Header, Description, HeaderImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledHeader\", function() { return StyledHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextContainer\", function() { return TextContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderImg\", function() { return HeaderImg; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n`;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section`\n  width: 60%;\n\n  .number-text__number {\n    font-size: 100px;\n    left: 0;\n    top: -40px;\n  }\n\n  & > a {\n    display: inline-block;\n    margin-top: 20px;\n    font-size: 17px;\n    padding: 15px 30px;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    width: 100%;\n\n    .number-text__number {\n      font-size: 43px;\n      top: -10px;\n    }\n  }\n`;\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2`\n  font-size: 41px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 24px;\n  }\n`;\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p`\n  font-size: 27px;\n  margin: 10px 0;\n`;\nconst HeaderImg = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img`\n  flex: 1;\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS9oZWFkaW5nL2hlYWRpbmcuc3R5bGVzLnRzPzUwMjUiXSwibmFtZXMiOlsiU3R5bGVkSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwiVGV4dENvbnRhaW5lciIsInNlY3Rpb24iLCJ0aGVtZSIsImRldmljZUJyZWFrcG9pbnQiLCJtb2JpbGUiLCJIZWFkZXIiLCJoMiIsImNvbG9yIiwiZm9udFByaW1hcnkiLCJEZXNjcmlwdGlvbiIsInAiLCJIZWFkZXJJbWciLCJpbWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLE1BQU87Ozs7Q0FBbkM7QUFNQSxNQUFNQyxhQUFhLEdBQUdGLHlEQUFNLENBQUNHLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBZ0JWLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Ozs7O0NBaEJ4RTtBQTBCQSxNQUFNQyxNQUFNLEdBQUdQLHlEQUFNLENBQUNRLEVBQUc7OztXQUdyQixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWTs7a0NBRWhCLENBQUM7QUFBRU47QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87OztDQUx4RTtBQVVBLE1BQU1LLFdBQVcsR0FBR1gseURBQU0sQ0FBQ1ksQ0FBRTs7O0NBQTdCO0FBS0EsTUFBTUMsU0FBUyxHQUFHYix5REFBTSxDQUFDYyxHQUFJOztDQUE3QiIsImZpbGUiOiIuL3NyYy9hcHAvdGVtcGxhdGUvaGVhZGluZy9oZWFkaW5nLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDYwJTtcblxuICAubnVtYmVyLXRleHRfX251bWJlciB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogLTQwcHg7XG4gIH1cblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubnVtYmVyLXRleHRfX251bWJlciB7XG4gICAgICBmb250LXNpemU6IDQzcHg7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiA0MXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDI3cHg7XG4gIG1hcmdpbjogMTBweCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckltZyA9IHN0eWxlZC5pbWdgXG4gIGZsZXg6IDE7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/template/heading/heading.styles.ts\n");

/***/ })

})