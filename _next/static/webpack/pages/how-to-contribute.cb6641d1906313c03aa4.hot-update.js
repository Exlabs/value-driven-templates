webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/header/header.styles.ts":
/*!***********************************************************!*\
  !*** ./src/app/how-to-contribute/header/header.styles.ts ***!
  \***********************************************************/
/*! exports provided: StyledHeader, StyledImage, TextContainer, StyledTitle, StyledDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledHeader\", function() { return StyledHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledImage\", function() { return StyledImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextContainer\", function() { return TextContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledTitle\", function() { return StyledTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledDescription\", function() { return StyledDescription; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* height: calc(100vh - 85px); */\n  margin: 60px 0;\n  border: 1px solid red;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    flex-direction: column;\n    height: auto;\n    margin-bottom: 60px;\n  }\n`;\nconst StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img`\n  width: 50%;\n  animation: floating 6s ease-in-out infinite;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    width: 100%;\n    margin: 20px 0;\n  }\n`;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section`\n  text-align: right;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n\n  & > a {\n    display: block;\n    margin-top: 30px;\n    width: fit-content;\n  }\n\n  & a {\n    color: ${({\n  theme\n}) => theme.color.primary};\n    font-size: 17px;\n    padding: 15px 20px;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    padding-left: 0;\n    align-items: center;\n\n    & > a {\n      text-align: center;\n      padding: 15px;\n      font-size: 14px;\n    }\n  }\n`;\nconst StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2`\n  font-size: 70px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 31px;\n    text-align: center;\n  }\n`;\nconst StyledDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p`\n  margin-top: 20px;\n  max-width: 70%;\n  font-size: 30px;\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.secondary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin-top: 0;\n    font-size: 21px;\n    max-width: 100%;\n    text-align: center;\n  }\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cz85MGY3Il0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsInRoZW1lIiwiZGV2aWNlQnJlYWtwb2ludCIsIm1vYmlsZSIsIlN0eWxlZEltYWdlIiwiaW1nIiwiVGV4dENvbnRhaW5lciIsInNlY3Rpb24iLCJjb2xvciIsInByaW1hcnkiLCJTdHlsZWRUaXRsZSIsImgyIiwiZm9udFByaW1hcnkiLCJTdHlsZWREZXNjcmlwdGlvbiIsInAiLCJzZWNvbmRhcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLE1BQU87Ozs7Ozs7O2tDQVFSLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7O0NBUnhFO0FBZUEsTUFBTUMsV0FBVyxHQUFHTCx5REFBTSxDQUFDTSxHQUFJOzs7O2tDQUlKLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Q0FKeEU7QUFVQSxNQUFNRyxhQUFhLEdBQUdQLHlEQUFNLENBQUNRLE9BQVE7Ozs7Ozs7Ozs7Ozs7YUFhL0IsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTyxLQUFOLENBQVlDLE9BQVE7Ozs7O2tDQUtkLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Ozs7Ozs7Q0FsQnhFO0FBOEJBLE1BQU1PLFdBQVcsR0FBR1gseURBQU0sQ0FBQ1ksRUFBRzs7O1dBRzFCLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ08sS0FBTixDQUFZSSxXQUFZOztrQ0FFaEIsQ0FBQztBQUFFWDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsTUFBTzs7OztDQUx4RTtBQVdBLE1BQU1VLGlCQUFpQixHQUFHZCx5REFBTSxDQUFDZSxDQUFFOzs7Ozs7YUFNN0IsQ0FBQztBQUFFYjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTyxLQUFOLENBQVlPLFNBQVU7OztrQ0FHaEIsQ0FBQztBQUFFZDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7O0NBVHhFIiwiZmlsZSI6Ii4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4NXB4KTsgKi9cbiAgbWFyZ2luOiA2MHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA1MCU7XG4gIGFuaW1hdGlvbjogZmxvYXRpbmcgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAmIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJiA+IGEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiA3MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGZvbnQtc2l6ZTogMzBweDtcblxuICAmID4gc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iuc2Vjb25kYXJ5fTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/header/header.styles.ts\n");

/***/ })

})