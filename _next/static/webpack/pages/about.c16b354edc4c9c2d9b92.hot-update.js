webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/special-section/special-section.component.tsx":
/*!*********************************************************************!*\
  !*** ./src/app/about/special-section/special-section.component.tsx ***!
  \*********************************************************************/
/*! exports provided: SpecialSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialSection\", function() { return SpecialSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/about/special-section/special-section.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst HalfCircle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  background-color: ${({\n  theme\n}) => theme.color.primary};\n  width: 100vw;\n  height: 50vw;\n  border-radius: 50% 50% 0 0 / 100% 100% 0 0;\n  margin: 0 auto;\n  position: absolute;\n  bottom: 0;\n  z-index: 99;\n`;\n_c = HalfCircle;\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  background-color: ${({\n  theme\n}) => theme.color.primary};\n  /* padding: 200px 0 60px 50px; */\n  /* border-top-left-radius: 70% 100%;\n  border-top-right-radius: 70% 100%; */\n\n  & > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    & .numbered-text {\n      flex: 1;\n      font-size: 21px;\n      color: ${({\n  theme\n}) => theme.color.white};\n\n      & > span {\n        color: ${({\n  theme\n}) => theme.color.white100};\n      }\n    }\n  }\n`;\n_c2 = SectionContainer;\nconst SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 45%;\n`;\n_c3 = SectionImage;\nconst SpecialSection = () => __jsx(\"div\", {\n  style: {\n    position: 'relative'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 3\n  }\n}, __jsx(HalfCircle, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }\n}), __jsx(SectionContainer, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }\n}, __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_3__[\"AppContainer\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 7\n  }\n}, __jsx(_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n  number: \"02\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 9\n  }\n}, __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 11\n  }\n}, \"At Exlabs, we believe that the true alignment between management and engineers can only be achieved by helping both sides speak the same language.\"), __jsx(\"p\", {\n  style: {\n    marginTop: '10px'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 11\n  }\n}, \"That\\u2019s why we\\u2019ve came up with a concept of Value Driven Engineering which manifests a need to focus on results rather than actions. In days of ubiquitous dependency on software, results are more multi-dimensional than ever before. It\\u2019s not longer possible to measure business benefit simply by direct ROI from implemented change.\")), __jsx(SectionImage, {\n  alt: \"Exlabs goal\",\n  src: `${\"\"}/icons/data.svg`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 9\n  }\n}))));\n_c4 = SpecialSection;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HalfCircle\");\n$RefreshReg$(_c2, \"SectionContainer\");\n$RefreshReg$(_c3, \"SectionImage\");\n$RefreshReg$(_c4, \"SpecialSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9zcGVjaWFsLXNlY3Rpb24vc3BlY2lhbC1zZWN0aW9uLmNvbXBvbmVudC50c3g/NGJjMSJdLCJuYW1lcyI6WyJIYWxmQ2lyY2xlIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb2xvciIsInByaW1hcnkiLCJTZWN0aW9uQ29udGFpbmVyIiwic2VjdGlvbiIsIndoaXRlIiwid2hpdGUxMDAiLCJTZWN0aW9uSW1hZ2UiLCJpbWciLCJTcGVjaWFsU2VjdGlvbiIsInBvc2l0aW9uIiwibWFyZ2luVG9wIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7c0JBQ1IsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVE7Ozs7Ozs7O0NBRHpEO0tBQU1MLFU7QUFXTixNQUFNTSxnQkFBZ0IsR0FBR0wseURBQU0sQ0FBQ00sT0FBUTtzQkFDbEIsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVE7Ozs7Ozs7Ozs7Ozs7ZUFhMUMsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLEtBQU07OztpQkFHL0IsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFFBQVM7Ozs7Q0FqQnJEO01BQU1ILGdCO0FBdUJOLE1BQU1JLFlBQVksR0FBR1QseURBQU0sQ0FBQ1UsR0FBSTs7Q0FBaEM7TUFBTUQsWTtBQUlDLE1BQU1FLGNBQWMsR0FBRyxNQUM1QjtBQUFLLE9BQUssRUFBRTtBQUFFQyxZQUFRLEVBQUU7QUFBWixHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUUsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxtRkFBRDtBQUFjLFFBQU0sRUFBQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3SkFERixFQUtFO0FBQUcsT0FBSyxFQUFFO0FBQUVDLGFBQVMsRUFBRTtBQUFiLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4VkFMRixDQURGLEVBY0UsTUFBQyxZQUFEO0FBQ0UsS0FBRyxFQUFDLGFBRE47QUFFRSxLQUFHLEVBQUcsR0FBRUMsRUFBeUIsaUJBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFkRixDQURGLENBRkYsQ0FESztNQUFNSCxjIiwiZmlsZSI6Ii4vc3JjL2FwcC9hYm91dC9zcGVjaWFsLXNlY3Rpb24vc3BlY2lhbC1zZWN0aW9uLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOdW1iZXJlZFRleHQgfSBmcm9tICcuLi9udW1iZXJlZC10ZXh0L251bWJlcmVkLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXInO1xuXG5jb25zdCBIYWxmQ2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwIC8gMTAwJSAxMDAlIDAgMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTtcbmA7XG5cbmNvbnN0IFNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcbiAgLyogcGFkZGluZzogMjAwcHggMCA2MHB4IDUwcHg7ICovXG4gIC8qIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDcwJSAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzAlIDEwMCU7ICovXG5cbiAgJiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYgLm51bWJlcmVkLXRleHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLndoaXRlfTtcblxuICAgICAgJiA+IHNwYW4ge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci53aGl0ZTEwMH07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTZWN0aW9uSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNDUlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNwZWNpYWxTZWN0aW9uID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgIDxIYWxmQ2lyY2xlIC8+XG4gICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8TnVtYmVyZWRUZXh0IG51bWJlcj1cIjAyXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBdCBFeGxhYnMsIHdlIGJlbGlldmUgdGhhdCB0aGUgdHJ1ZSBhbGlnbm1lbnQgYmV0d2VlbiBtYW5hZ2VtZW50IGFuZCBlbmdpbmVlcnNcbiAgICAgICAgICAgIGNhbiBvbmx5IGJlIGFjaGlldmVkIGJ5IGhlbHBpbmcgYm90aCBzaWRlcyBzcGVhayB0aGUgc2FtZSBsYW5ndWFnZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgICAgICBUaGF04oCZcyB3aHkgd2XigJl2ZSBjYW1lIHVwIHdpdGggYSBjb25jZXB0IG9mIFZhbHVlIERyaXZlbiBFbmdpbmVlcmluZyB3aGljaFxuICAgICAgICAgICAgbWFuaWZlc3RzIGEgbmVlZCB0byBmb2N1cyBvbiByZXN1bHRzIHJhdGhlciB0aGFuIGFjdGlvbnMuIEluIGRheXMgb2ZcbiAgICAgICAgICAgIHViaXF1aXRvdXMgZGVwZW5kZW5jeSBvbiBzb2Z0d2FyZSwgcmVzdWx0cyBhcmUgbW9yZSBtdWx0aS1kaW1lbnNpb25hbCB0aGFuXG4gICAgICAgICAgICBldmVyIGJlZm9yZS4gSXTigJlzIG5vdCBsb25nZXIgcG9zc2libGUgdG8gbWVhc3VyZSBidXNpbmVzcyBiZW5lZml0IHNpbXBseSBieVxuICAgICAgICAgICAgZGlyZWN0IFJPSSBmcm9tIGltcGxlbWVudGVkIGNoYW5nZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8U2VjdGlvbkltYWdlXG4gICAgICAgICAgYWx0PVwiRXhsYWJzIGdvYWxcIlxuICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9kYXRhLnN2Z2B9XG4gICAgICAgIC8+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gIDwvZGl2PlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/about/special-section/special-section.component.tsx\n");

/***/ })

})