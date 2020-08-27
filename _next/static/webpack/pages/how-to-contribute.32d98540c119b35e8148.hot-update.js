webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/header/header.styles.ts":
/*!***********************************************************!*\
  !*** ./src/app/how-to-contribute/header/header.styles.ts ***!
  \***********************************************************/
/*! exports provided: StyledHeader, StyledImage, TextContainer, StyledTitle, StyledDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledHeader\", function() { return StyledHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledImage\", function() { return StyledImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextContainer\", function() { return TextContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledTitle\", function() { return StyledTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledDescription\", function() { return StyledDescription; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: calc(100vh - 85px);\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    flex-direction: column;\n    height: auto;\n  }\n`;\nconst StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img`\n  width: 50%;\n  animation: floating 6s ease-in-out infinite;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    width: 100%;\n    margin: 20px 0;\n  }\n`;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section`\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n\n  & > a {\n    display: block;\n    margin-top: 30px;\n    width: fit-content;\n    padding: 20px 25px;\n  }\n\n  & a {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    padding-left: 0;\n    align-items: center;\n\n    & > a {\n      text-align: center;\n      padding: 10px 20px;\n    }\n  }\n`;\nconst StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2`\n  font-size: 70px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 31px;\n    text-align: center;\n  }\n`;\nconst StyledDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p`\n  margin-top: 20px;\n  max-width: 70%;\n  font-size: 30px;\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.secondary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin-top: 0;\n    font-size: 21px;\n    max-width: 100%;\n    text-align: center;\n  }\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cz85MGY3Il0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsInRoZW1lIiwiZGV2aWNlQnJlYWtwb2ludCIsIm1vYmlsZSIsIlN0eWxlZEltYWdlIiwiaW1nIiwiVGV4dENvbnRhaW5lciIsInNlY3Rpb24iLCJjb2xvciIsInByaW1hcnkiLCJTdHlsZWRUaXRsZSIsImgyIiwiZm9udFByaW1hcnkiLCJTdHlsZWREZXNjcmlwdGlvbiIsInAiLCJzZWNvbmRhcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLE1BQU87Ozs7OztrQ0FNUixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7O0NBTnhFO0FBWUEsTUFBTUMsV0FBVyxHQUFHTCx5REFBTSxDQUFDTSxHQUFJOzs7O2tDQUlKLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Q0FKeEU7QUFVQSxNQUFNRyxhQUFhLEdBQUdQLHlEQUFNLENBQUNRLE9BQVE7Ozs7Ozs7Ozs7Ozs7YUFhL0IsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTyxLQUFOLENBQVlDLE9BQVE7OztrQ0FHZCxDQUFDO0FBQUVSO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7Ozs7Ozs7Q0FoQnhFO0FBMkJBLE1BQU1PLFdBQVcsR0FBR1gseURBQU0sQ0FBQ1ksRUFBRzs7O1dBRzFCLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ08sS0FBTixDQUFZSSxXQUFZOztrQ0FFaEIsQ0FBQztBQUFFWDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsTUFBTzs7OztDQUx4RTtBQVdBLE1BQU1VLGlCQUFpQixHQUFHZCx5REFBTSxDQUFDZSxDQUFFOzs7Ozs7YUFNN0IsQ0FBQztBQUFFYjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTyxLQUFOLENBQVlPLFNBQVU7OztrQ0FHaEIsQ0FBQztBQUFFZDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7O0NBVHhFIiwiZmlsZSI6Ii4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4NXB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNTAlO1xuICBhbmltYXRpb246IGZsb2F0aW5nIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICB9XG5cbiAgJiBhIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmID4gYSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1heC13aWR0aDogNzAlO1xuICBmb250LXNpemU6IDMwcHg7XG5cbiAgJiA+IHNwYW4ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnNlY29uZGFyeX07XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/header/header.styles.ts\n");

/***/ })

})