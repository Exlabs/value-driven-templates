webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/header/header.styles.ts":
/*!***********************************************!*\
  !*** ./src/app/about/header/header.styles.ts ***!
  \***********************************************/
/*! exports provided: StyledHeader, TextSection, HeaderTitle, HeaderDescription, HeaderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledHeader\", function() { return StyledHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextSection\", function() { return TextSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderTitle\", function() { return HeaderTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderDescription\", function() { return HeaderDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderImage\", function() { return HeaderImage; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header`\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 100px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    padding-top: 0;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n`;\nconst TextSection = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section`\n  max-width: 50%;\n  display: flex;\n  flex-direction: column;\n\n  & > a {\n    margin-top: 20px;\n    padding: 20px 40px;\n    width: fit-content;\n    display: inline-block;\n    color: ${({\n  theme\n}) => theme.color.primary};\n    font-size: 17px;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    max-width: 100%;\n    align-items: center;\n  }\n`;\nconst HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2`\n  font-size: 80px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 37px;\n  }\n`;\nconst HeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p`\n  max-width: 70%;\n  font-size: 27px;\n  padding-left: 5px;\n  color: ${({\n  theme\n}) => theme.color.fontSecondary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.secondary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 21px;\n    max-width: 100%;\n    text-align: center;\n  }\n`;\nconst HeaderImage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img`\n  width: 60%;\n  animation: floating 6s ease-in-out infinite;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    width: 70%;\n    margin: 20px 0;\n  }\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cz85OWNmIl0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsInRoZW1lIiwiZGV2aWNlQnJlYWtwb2ludCIsIm1vYmlsZSIsIlRleHRTZWN0aW9uIiwic2VjdGlvbiIsImNvbG9yIiwicHJpbWFyeSIsIkhlYWRlclRpdGxlIiwiaDIiLCJmb250UHJpbWFyeSIsIkhlYWRlckRlc2NyaXB0aW9uIiwicCIsImZvbnRTZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJIZWFkZXJJbWFnZSIsImltZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBTzs7Ozs7O2tDQU1SLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7OztDQU54RTtBQWNBLE1BQU1DLFdBQVcsR0FBR0wseURBQU0sQ0FBQ00sT0FBUTs7Ozs7Ozs7OzthQVU3QixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsT0FBUTs7OztrQ0FJZCxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7O0NBZHhFO0FBb0JBLE1BQU1LLFdBQVcsR0FBR1QseURBQU0sQ0FBQ1UsRUFBRzs7O1dBRzFCLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZSSxXQUFZOzs7YUFHckMsQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSyxLQUFOLENBQVlDLE9BQVE7OztrQ0FHZCxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7Q0FUeEU7QUFjQSxNQUFNUSxpQkFBaUIsR0FBR1oseURBQU0sQ0FBQ2EsQ0FBRTs7OztXQUkvQixDQUFDO0FBQUVYO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWU8sYUFBYzs7O2FBR3ZDLENBQUM7QUFBRVo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZUSxTQUFVOzs7a0NBR2hCLENBQUM7QUFBRWI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7O0NBVnhFO0FBaUJBLE1BQU1ZLFdBQVcsR0FBR2hCLHlEQUFNLENBQUNpQixHQUFJOzs7O2tDQUlKLENBQUM7QUFBRWY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Q0FKeEUiLCJmaWxlIjoiLi9zcmMvYXBwL2Fib3V0L2hlYWRlci9oZWFkZXIuc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXgtd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmID4gYSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gICYgPiBzcGFuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZm9udC1zaXplOiAzN3B4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRTZWNvbmRhcnl9O1xuXG4gICYgPiBzcGFuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5zZWNvbmRhcnl9O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDYwJTtcbiAgYW5pbWF0aW9uOiBmbG9hdGluZyA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/about/header/header.styles.ts\n");

/***/ })

})