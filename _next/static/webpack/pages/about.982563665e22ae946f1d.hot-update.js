webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/header/header.styles.ts":
/*!***********************************************!*\
  !*** ./src/app/about/header/header.styles.ts ***!
  \***********************************************/
/*! exports provided: StyledHeader, TextSection, HeaderTitle, HeaderDescription, HeaderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledHeader\", function() { return StyledHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextSection\", function() { return TextSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderTitle\", function() { return HeaderTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderDescription\", function() { return HeaderDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderImage\", function() { return HeaderImage; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header`\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 130px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    padding-top: 30px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n`;\nconst TextSection = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section`\n  max-width: 50%;\n  display: flex;\n  flex-direction: column;\n\n  & > a {\n    margin-top: 20px;\n    padding: 20px 40px;\n    width: fit-content;\n    display: inline-block;\n    color: ${({\n  theme\n}) => theme.color.primary};\n    font-size: 17px;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    max-width: 100%;\n    align-items: center;\n  }\n`;\nconst HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2`\n  font-size: 80px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 37px;\n  }\n`;\nconst HeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p`\n  max-width: 70%;\n  font-size: 27px;\n  padding-left: 5px;\n  color: ${({\n  theme\n}) => theme.color.fontSecondary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.secondary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 21px;\n    max-width: 100%;\n  }\n`;\nconst HeaderImage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img`\n  width: 60%;\n  animation: floating 6s ease-in-out infinite;\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cz85OWNmIl0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsInRoZW1lIiwiZGV2aWNlQnJlYWtwb2ludCIsIm1vYmlsZSIsIlRleHRTZWN0aW9uIiwic2VjdGlvbiIsImNvbG9yIiwicHJpbWFyeSIsIkhlYWRlclRpdGxlIiwiaDIiLCJmb250UHJpbWFyeSIsIkhlYWRlckRlc2NyaXB0aW9uIiwicCIsImZvbnRTZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJIZWFkZXJJbWFnZSIsImltZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBTzs7Ozs7O2tDQU1SLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7OztDQU54RTtBQWNBLE1BQU1DLFdBQVcsR0FBR0wseURBQU0sQ0FBQ00sT0FBUTs7Ozs7Ozs7OzthQVU3QixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsT0FBUTs7OztrQ0FJZCxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7O0NBZHhFO0FBb0JBLE1BQU1LLFdBQVcsR0FBR1QseURBQU0sQ0FBQ1UsRUFBRzs7O1dBRzFCLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZSSxXQUFZOzs7YUFHckMsQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSyxLQUFOLENBQVlDLE9BQVE7OztrQ0FHZCxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7Q0FUeEU7QUFjQSxNQUFNUSxpQkFBaUIsR0FBR1oseURBQU0sQ0FBQ2EsQ0FBRTs7OztXQUkvQixDQUFDO0FBQUVYO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWU8sYUFBYzs7O2FBR3ZDLENBQUM7QUFBRVo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZUSxTQUFVOzs7a0NBR2hCLENBQUM7QUFBRWI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Q0FWeEU7QUFnQkEsTUFBTVksV0FBVyxHQUFHaEIseURBQU0sQ0FBQ2lCLEdBQUk7OztDQUEvQiIsImZpbGUiOiIuL3NyYy9hcHAvYWJvdXQvaGVhZGVyL2hlYWRlci5zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAxMzBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1heC13aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICYgPiBhIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiA4MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5cbiAgJiA+IHNwYW4ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmb250LXNpemU6IDM3cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICBtYXgtd2lkdGg6IDcwJTtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFNlY29uZGFyeX07XG5cbiAgJiA+IHNwYW4ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnNlY29uZGFyeX07XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA2MCU7XG4gIGFuaW1hdGlvbjogZmxvYXRpbmcgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/about/header/header.styles.ts\n");

/***/ })

})