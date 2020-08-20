webpackHotUpdate_N_E("pages/index",{

/***/ "./src/app/home/header/header.styles.ts":
/*!**********************************************!*\
  !*** ./src/app/home/header/header.styles.ts ***!
  \**********************************************/
/*! exports provided: HeaderContainer, PoweredByText, GreenHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderContainer\", function() { return HeaderContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PoweredByText\", function() { return PoweredByText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GreenHighlight\", function() { return GreenHighlight; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nconst HeaderContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].header)`\n  font-size: 60px;\n  text-align: center;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 35px);\n  position: relative;\n  opacity: 0;\n  animation: showHeader 1s forwards;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin: 70px 0;\n    height: auto;\n  }\n\n  p {\n    color: ${({\n  theme\n}) => theme.color.fontSecondary};\n    font-size: 23px;\n    margin-bottom: 25px;\n    animation: moveDown 1s forwards;\n    opacity: 0;\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      font-size: 13px;\n      margin-bottom: 10px;\n    }\n  }\n\n  h2 {\n    max-width: 80%;\n    font-size: 60px;\n    color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      max-width: 100%;\n      font-size: 27px;\n    }\n  }\n\n  a {\n    font-size: 23px;\n    margin-top: 50px;\n    animation: moveUp 0.5s forwards;\n    animation-delay: 1s;\n    opacity: 0;\n    color: ${({\n  theme\n}) => theme.color.white};\n    font-weight: 500;\n    padding: 10px 30px;\n    text-decoration: none;\n\n    &:hover {\n      color: #00000d;\n    }\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      font-size: 13px;\n      font-weight: 700;\n      padding: 10px 15px;\n    }\n  }\n`;\nconst PoweredByText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3`\n  font-size: 40px;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 18px;\n    position: initial;\n    margin-top: 60px;\n    opacity: 0;\n\n    animation: showText 1s forwards;\n    animation-delay: 1.3s;\n  }\n`;\nconst GreenHighlight = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span`\n  color: ${({\n  theme\n}) => theme.color.secondary};\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob21lL2hlYWRlci9oZWFkZXIuc3R5bGVzLnRzP2JlMTEiXSwibmFtZXMiOlsiSGVhZGVyQ29udGFpbmVyIiwic3R5bGVkIiwibW90aW9uIiwiaGVhZGVyIiwidGhlbWUiLCJjb2xvciIsImZvbnRQcmltYXJ5IiwiZGV2aWNlQnJlYWtwb2ludCIsIm1vYmlsZSIsImZvbnRTZWNvbmRhcnkiLCJ3aGl0ZSIsIlBvd2VyZWRCeVRleHQiLCJoMyIsInByaW1hcnkiLCJHcmVlbkhpZ2hsaWdodCIsInNwYW4iLCJzZWNvbmRhcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxlQUFlLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE1BQVIsQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7V0FhMUMsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVk7O2tDQUVoQixDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLGdCQUFOLENBQXVCQyxNQUFPOzs7Ozs7YUFNbEUsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLGFBQWM7Ozs7OztvQ0FNbEIsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7Ozs7O2FBU3BFLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFZOztvQ0FFaEIsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7Ozs7Ozs7O2FBWXBFLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxLQUFNOzs7Ozs7Ozs7b0NBU1YsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7O0NBM0QxRTtBQW1FQSxNQUFNRyxhQUFhLEdBQUdWLHlEQUFNLENBQUNXLEVBQUc7Ozs7OztXQU01QixDQUFDO0FBQUVSO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWTs7O2FBR3JDLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUSxPQUFROzs7a0NBR2QsQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7Ozs7O0NBWnhFO0FBdUJBLE1BQU1NLGNBQWMsR0FBR2IseURBQU0sQ0FBQ2MsSUFBSztXQUMvQixDQUFDO0FBQUVYO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVcsU0FBVTtDQUR6QyIsImZpbGUiOiIuL3NyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmhlYWRlcilgXG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM1cHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2hvd0hlYWRlciAxcyBmb3J3YXJkcztcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgbWFyZ2luOiA3MHB4IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFNlY29uZGFyeX07XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYW5pbWF0aW9uOiBtb3ZlRG93biAxcyBmb3J3YXJkcztcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgaDIge1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAyN3B4O1xuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGFuaW1hdGlvbjogbW92ZVVwIDAuNXMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLndoaXRlfTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDAwMDBkO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFBvd2VyZWRCeVRleHQgPSBzdHlsZWQuaDNgXG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgb3BhY2l0eTogMC41O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRQcmltYXJ5fTtcblxuICAmID4gc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeX07XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICBhbmltYXRpb246IHNob3dUZXh0IDFzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMS4zcztcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdyZWVuSGlnaGxpZ2h0ID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnNlY29uZGFyeX07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/home/header/header.styles.ts\n");

/***/ })

})