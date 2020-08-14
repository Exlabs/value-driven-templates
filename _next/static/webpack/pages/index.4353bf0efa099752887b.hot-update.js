webpackHotUpdate_N_E("pages/index",{

/***/ "./src/app/home/header/header.styles.ts":
/*!**********************************************!*\
  !*** ./src/app/home/header/header.styles.ts ***!
  \**********************************************/
/*! exports provided: HeaderContainer, PoweredByText, GreenHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderContainer\", function() { return HeaderContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PoweredByText\", function() { return PoweredByText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GreenHighlight\", function() { return GreenHighlight; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nconst HeaderContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].header)`\n  font-size: 60px;\n  text-align: center;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 35px);\n  position: relative;\n  opacity: 0;\n  animation: showHeader 1s forwards;\n\n  p {\n    color: ${({\n  theme\n}) => theme.color.fontSecondary};\n    font-size: 23px;\n    margin-bottom: 25px;\n    animation: moveDown 1s forwards;\n    opacity: 0;\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      font-size: 13px;\n      margin-bottom: 10px;\n    }\n  }\n\n  h2 {\n    max-width: 80%;\n    font-size: 60px;\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.tablet}) {\n      font-size: 31px;\n    }\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      max-width: 100%;\n      font-size: 27px;\n    }\n  }\n\n  a {\n    font-size: 23px;\n    margin-top: 35px;\n    animation: moveUp 0.5s forwards;\n    animation-delay: 1s;\n    opacity: 0;\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      font-size: 14px;\n    }\n  }\n`;\nconst PoweredByText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h3`\n  font-size: 40px;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 16px;\n    position: initial;\n    margin-top: 60px;\n    opacity: 0;\n\n    animation: showText 1s forwards;\n    animation-delay: 1.5s;\n  }\n`;\nconst GreenHighlight = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span`\n  color: ${({\n  theme\n}) => theme.color.secondary};\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob21lL2hlYWRlci9oZWFkZXIuc3R5bGVzLnRzP2JlMTEiXSwibmFtZXMiOlsiSGVhZGVyQ29udGFpbmVyIiwic3R5bGVkIiwibW90aW9uIiwiaGVhZGVyIiwidGhlbWUiLCJjb2xvciIsImZvbnRTZWNvbmRhcnkiLCJkZXZpY2VCcmVha3BvaW50IiwibW9iaWxlIiwidGFibGV0IiwiUG93ZXJlZEJ5VGV4dCIsImgzIiwicHJpbWFyeSIsIkdyZWVuSGlnaGxpZ2h0Iiwic3BhbiIsInNlY29uZGFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLGVBQWUsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsTUFBUixDQUFnQjs7Ozs7Ozs7Ozs7Ozs7O2FBZXhDLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQUFjOzs7Ozs7b0NBTWxCLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Ozs7Ozs7b0NBVTdDLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUJFLE1BQU87Ozs7b0NBSTdDLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Ozs7Ozs7Ozs7b0NBYTdDLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Q0FoRDFFO0FBc0RBLE1BQU1FLGFBQWEsR0FBR1QseURBQU0sQ0FBQ1UsRUFBRzs7Ozs7Ozs7YUFRMUIsQ0FBQztBQUFFUDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLE9BQVE7OztrQ0FHZCxDQUFDO0FBQUVSO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLGdCQUFOLENBQXVCQyxNQUFPOzs7Ozs7Ozs7Q0FYeEU7QUFzQkEsTUFBTUssY0FBYyxHQUFHWix5REFBTSxDQUFDYSxJQUFLO1dBQy9CLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVSxTQUFVO0NBRHpDIiwiZmlsZSI6Ii4vc3JjL2FwcC9ob21lL2hlYWRlci9oZWFkZXIuc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uaGVhZGVyKWBcbiAgZm9udC1zaXplOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzVweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzaG93SGVhZGVyIDFzIGZvcndhcmRzO1xuXG4gIHAge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRTZWNvbmRhcnl9O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMXMgZm9yd2FyZHM7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDYwcHg7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQudGFibGV0fSkge1xuICAgICAgZm9udC1zaXplOiAzMXB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgfVxuICB9XG5cbiAgYSB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgYW5pbWF0aW9uOiBtb3ZlVXAgMC41cyBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFBvd2VyZWRCeVRleHQgPSBzdHlsZWQuaDNgXG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgb3BhY2l0eTogMC41O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG5cbiAgJiA+IHNwYW4ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgYW5pbWF0aW9uOiBzaG93VGV4dCAxcyBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBHcmVlbkhpZ2hsaWdodCA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5zZWNvbmRhcnl9O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/home/header/header.styles.ts\n");

/***/ })

})