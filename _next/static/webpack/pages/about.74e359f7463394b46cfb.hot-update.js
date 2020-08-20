webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/special-section/special-section.component.tsx":
/*!*********************************************************************!*\
  !*** ./src/app/about/special-section/special-section.component.tsx ***!
  \*********************************************************************/
/*! exports provided: SpecialSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialSection\", function() { return SpecialSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/about/special-section/special-section.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  background-color: ${({\n  theme\n}) => theme.color.primary};\n  padding: 200px 0 60px 50px;\n  border-top-left-radius: 10% 100%;\n  border-top-right-radius: 10% 100%;\n\n  & > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    & .numbered-text {\n      flex: 1;\n      font-size: 21px;\n      color: ${({\n  theme\n}) => theme.color.white};\n\n      & > span {\n        color: ${({\n  theme\n}) => theme.color.white100};\n      }\n    }\n  }\n`;\n_c = SectionContainer;\nconst SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 45%;\n`;\n_c2 = SectionImage;\nconst SpecialSection = () => __jsx(\"div\", {\n  style: {\n    position: 'relative'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }\n}, __jsx(SectionContainer, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }\n}, __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_3__[\"AppContainer\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 7\n  }\n}, __jsx(_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n  number: \"02\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }\n}, __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 11\n  }\n}, \"At Exlabs, we believe that the true alignment between management and engineers can only be achieved by helping both sides speak the same language.\"), __jsx(\"p\", {\n  style: {\n    marginTop: '10px'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 11\n  }\n}, \"That\\u2019s why we\\u2019ve came up with a concept of Value Driven Engineering which manifests a need to focus on results rather than actions. In days of ubiquitous dependency on software, results are more multi-dimensional than ever before. It\\u2019s not longer possible to measure business benefit simply by direct ROI from implemented change.\")), __jsx(SectionImage, {\n  alt: \"Exlabs goal\",\n  src: `${\"\"}/icons/data.svg`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }\n}))));\n_c3 = SpecialSection;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"SectionContainer\");\n$RefreshReg$(_c2, \"SectionImage\");\n$RefreshReg$(_c3, \"SpecialSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9zcGVjaWFsLXNlY3Rpb24vc3BlY2lhbC1zZWN0aW9uLmNvbXBvbmVudC50c3g/NGJjMSJdLCJuYW1lcyI6WyJTZWN0aW9uQ29udGFpbmVyIiwic3R5bGVkIiwic2VjdGlvbiIsInRoZW1lIiwiY29sb3IiLCJwcmltYXJ5Iiwid2hpdGUiLCJ3aGl0ZTEwMCIsIlNlY3Rpb25JbWFnZSIsImltZyIsIlNwZWNpYWxTZWN0aW9uIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxPQUFRO3NCQUNsQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBUTs7Ozs7Ozs7Ozs7OztlQWExQyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBTTs7O2lCQUcvQixDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsUUFBUzs7OztDQWpCckQ7S0FBTVAsZ0I7QUF1Qk4sTUFBTVEsWUFBWSxHQUFHUCx5REFBTSxDQUFDUSxHQUFJOztDQUFoQztNQUFNRCxZO0FBSUMsTUFBTUUsY0FBYyxHQUFHLE1BQzVCO0FBQUssT0FBSyxFQUFFO0FBQUVDLFlBQVEsRUFBRTtBQUFaLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsbUZBQUQ7QUFBYyxRQUFNLEVBQUMsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0pBREYsRUFLRTtBQUFHLE9BQUssRUFBRTtBQUFFQyxhQUFTLEVBQUU7QUFBYixHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOFZBTEYsQ0FERixFQWNFLE1BQUMsWUFBRDtBQUNFLEtBQUcsRUFBQyxhQUROO0FBRUUsS0FBRyxFQUFHLEdBQUVDLEVBQXlCLGlCQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZEYsQ0FERixDQURGLENBREs7TUFBTUgsYyIsImZpbGUiOiIuL3NyYy9hcHAvYWJvdXQvc3BlY2lhbC1zZWN0aW9uL3NwZWNpYWwtc2VjdGlvbi5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTnVtYmVyZWRUZXh0IH0gZnJvbSAnLi4vbnVtYmVyZWQtdGV4dC9udW1iZXJlZC10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyJztcblxuY29uc3QgU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICBwYWRkaW5nOiAyMDBweCAwIDYwcHggNTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMCUgMTAwJTtcblxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJiAubnVtYmVyZWQtdGV4dCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iud2hpdGV9O1xuXG4gICAgICAmID4gc3BhbiB7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLndoaXRlMTAwfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFNlY3Rpb25JbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA0NSU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3BlY2lhbFNlY3Rpb24gPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8TnVtYmVyZWRUZXh0IG51bWJlcj1cIjAyXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBdCBFeGxhYnMsIHdlIGJlbGlldmUgdGhhdCB0aGUgdHJ1ZSBhbGlnbm1lbnQgYmV0d2VlbiBtYW5hZ2VtZW50IGFuZCBlbmdpbmVlcnNcbiAgICAgICAgICAgIGNhbiBvbmx5IGJlIGFjaGlldmVkIGJ5IGhlbHBpbmcgYm90aCBzaWRlcyBzcGVhayB0aGUgc2FtZSBsYW5ndWFnZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgICAgICBUaGF04oCZcyB3aHkgd2XigJl2ZSBjYW1lIHVwIHdpdGggYSBjb25jZXB0IG9mIFZhbHVlIERyaXZlbiBFbmdpbmVlcmluZyB3aGljaFxuICAgICAgICAgICAgbWFuaWZlc3RzIGEgbmVlZCB0byBmb2N1cyBvbiByZXN1bHRzIHJhdGhlciB0aGFuIGFjdGlvbnMuIEluIGRheXMgb2ZcbiAgICAgICAgICAgIHViaXF1aXRvdXMgZGVwZW5kZW5jeSBvbiBzb2Z0d2FyZSwgcmVzdWx0cyBhcmUgbW9yZSBtdWx0aS1kaW1lbnNpb25hbCB0aGFuXG4gICAgICAgICAgICBldmVyIGJlZm9yZS4gSXTigJlzIG5vdCBsb25nZXIgcG9zc2libGUgdG8gbWVhc3VyZSBidXNpbmVzcyBiZW5lZml0IHNpbXBseSBieVxuICAgICAgICAgICAgZGlyZWN0IFJPSSBmcm9tIGltcGxlbWVudGVkIGNoYW5nZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8U2VjdGlvbkltYWdlXG4gICAgICAgICAgYWx0PVwiRXhsYWJzIGdvYWxcIlxuICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9kYXRhLnN2Z2B9XG4gICAgICAgIC8+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gIDwvZGl2PlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/about/special-section/special-section.component.tsx\n");

/***/ })

})