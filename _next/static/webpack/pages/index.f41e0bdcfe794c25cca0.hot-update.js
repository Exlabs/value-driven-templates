webpackHotUpdate_N_E("pages/index",{

/***/ "./src/app/home/header/header.styles.ts":
/*!**********************************************!*\
  !*** ./src/app/home/header/header.styles.ts ***!
  \**********************************************/
/*! exports provided: HeaderContainer, PoweredByText, GreenHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderContainer\", function() { return HeaderContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PoweredByText\", function() { return PoweredByText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GreenHighlight\", function() { return GreenHighlight; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nconst HeaderContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].header)`\n  font-size: 60px;\n  text-align: center;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 35px);\n  position: relative;\n  opacity: 0;\n  animation: showHeader 1s forwards;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin: 70px 0;\n    height: auto;\n  }\n\n  p {\n    color: ${({\n  theme\n}) => theme.color.fontSecondary};\n    font-size: 23px;\n    margin-bottom: 25px;\n    animation: moveDown 1s forwards;\n    opacity: 0;\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      font-size: 13px;\n      margin-bottom: 10px;\n    }\n  }\n\n  h2 {\n    max-width: 80%;\n    font-size: 60px;\n    color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      max-width: 100%;\n      font-size: 27px;\n    }\n  }\n\n  a {\n    font-size: 23px;\n    margin-top: 35px;\n    animation: moveUp 0.5s forwards;\n    animation-delay: 1s;\n    opacity: 0;\n    color: ${({\n  theme\n}) => theme.color.white};\n    font-weight: 500;\n\n    &:hover {\n      color: #00000d;\n    }\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      font-size: 13px;\n      /* font-weight: 700; */\n    }\n  }\n`;\nconst PoweredByText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3`\n  font-size: 40px;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 18px;\n    position: initial;\n    margin-top: 60px;\n    opacity: 0;\n\n    animation: showText 1s forwards;\n    animation-delay: 1.3s;\n  }\n`;\nconst GreenHighlight = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span`\n  color: ${({\n  theme\n}) => theme.color.secondary};\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob21lL2hlYWRlci9oZWFkZXIuc3R5bGVzLnRzP2JlMTEiXSwibmFtZXMiOlsiSGVhZGVyQ29udGFpbmVyIiwic3R5bGVkIiwibW90aW9uIiwiaGVhZGVyIiwidGhlbWUiLCJkZXZpY2VCcmVha3BvaW50IiwibW9iaWxlIiwiY29sb3IiLCJmb250U2Vjb25kYXJ5IiwiZm9udFByaW1hcnkiLCJ3aGl0ZSIsIlBvd2VyZWRCeVRleHQiLCJoMyIsInByaW1hcnkiLCJHcmVlbkhpZ2hsaWdodCIsInNwYW4iLCJzZWNvbmRhcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxlQUFlLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE1BQVIsQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7O2tDQWNuQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7Ozs7YUFNbEUsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxLQUFOLENBQVlDLGFBQWM7Ozs7OztvQ0FNbEIsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7Ozs7O2FBU3BFLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csS0FBTixDQUFZRSxXQUFZOztvQ0FFaEIsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7Ozs7Ozs7O2FBWXBFLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csS0FBTixDQUFZRyxLQUFNOzs7Ozs7O29DQU9WLENBQUM7QUFBRU47QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7O0NBeEQxRTtBQStEQSxNQUFNSyxhQUFhLEdBQUdWLHlEQUFNLENBQUNXLEVBQUc7Ozs7OztXQU01QixDQUFDO0FBQUVSO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUUsV0FBWTs7O2FBR3JDLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csS0FBTixDQUFZTSxPQUFROzs7a0NBR2QsQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7Ozs7O0NBWnhFO0FBdUJBLE1BQU1RLGNBQWMsR0FBR2IseURBQU0sQ0FBQ2MsSUFBSztXQUMvQixDQUFDO0FBQUVYO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLEtBQU4sQ0FBWVMsU0FBVTtDQUR6QyIsImZpbGUiOiIuL3NyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmhlYWRlcilgXG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM1cHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2hvd0hlYWRlciAxcyBmb3J3YXJkcztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIG1hcmdpbjogNzBweCAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRTZWNvbmRhcnl9O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZm9yd2FyZHM7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICB9XG4gIH1cblxuICBhIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBhbmltYXRpb246IG1vdmVVcCAwLjVzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci53aGl0ZX07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICMwMDAwMGQ7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIC8qIGZvbnQtd2VpZ2h0OiA3MDA7ICovXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUG93ZXJlZEJ5VGV4dCA9IHN0eWxlZC5oM2BcbiAgZm9udC1zaXplOiA0MHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gICYgPiBzcGFuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIGFuaW1hdGlvbjogc2hvd1RleHQgMXMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjNzO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR3JlZW5IaWdobGlnaHQgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iuc2Vjb25kYXJ5fTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/home/header/header.styles.ts\n");

/***/ })

})