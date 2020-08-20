webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/special-section/special-section.component.tsx":
/*!*********************************************************************!*\
  !*** ./src/app/about/special-section/special-section.component.tsx ***!
  \*********************************************************************/
/*! exports provided: SpecialSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialSection\", function() { return SpecialSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/about/special-section/special-section.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst HalfCircle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  background-color: ${({\n  theme\n}) => theme.color.primary};\n  width: 100vw;\n  height: 20vw;\n  border-radius: 50% 50% 0 0 / 100% 100% 0 0;\n  margin: 0 auto;\n`;\n_c = HalfCircle;\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  background-color: ${({\n  theme\n}) => theme.color.primary};\n  /* padding: 200px 0 60px 50px; */\n  /* border-top-left-radius: 70% 100%;\n  border-top-right-radius: 70% 100%; */\n\n  & > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    & .numbered-text {\n      flex: 1;\n      font-size: 21px;\n      color: ${({\n  theme\n}) => theme.color.white};\n\n      & > span {\n        color: ${({\n  theme\n}) => theme.color.white100};\n      }\n    }\n  }\n`;\n_c2 = SectionContainer;\nconst SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 45%;\n`;\n_c3 = SectionImage;\nconst SpecialSection = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(HalfCircle, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }\n}), __jsx(SectionContainer, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }\n}, __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_3__[\"AppContainer\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 7\n  }\n}, __jsx(_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n  number: \"02\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 9\n  }\n}, __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 11\n  }\n}, \"At Exlabs, we believe that the true alignment between management and engineers can only be achieved by helping both sides speak the same language.\"), __jsx(\"p\", {\n  style: {\n    marginTop: '10px'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 11\n  }\n}, \"That\\u2019s why we\\u2019ve came up with a concept of Value Driven Engineering which manifests a need to focus on results rather than actions. In days of ubiquitous dependency on software, results are more multi-dimensional than ever before. It\\u2019s not longer possible to measure business benefit simply by direct ROI from implemented change.\")), __jsx(SectionImage, {\n  alt: \"Exlabs goal\",\n  src: `${\"\"}/icons/data.svg`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 9\n  }\n}))));\n_c4 = SpecialSection;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HalfCircle\");\n$RefreshReg$(_c2, \"SectionContainer\");\n$RefreshReg$(_c3, \"SectionImage\");\n$RefreshReg$(_c4, \"SpecialSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9zcGVjaWFsLXNlY3Rpb24vc3BlY2lhbC1zZWN0aW9uLmNvbXBvbmVudC50c3g/NGJjMSJdLCJuYW1lcyI6WyJIYWxmQ2lyY2xlIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb2xvciIsInByaW1hcnkiLCJTZWN0aW9uQ29udGFpbmVyIiwic2VjdGlvbiIsIndoaXRlIiwid2hpdGUxMDAiLCJTZWN0aW9uSW1hZ2UiLCJpbWciLCJTcGVjaWFsU2VjdGlvbiIsIm1hcmdpblRvcCIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFJO3NCQUNSLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFROzs7OztDQUR6RDtLQUFNTCxVO0FBUU4sTUFBTU0sZ0JBQWdCLEdBQUdMLHlEQUFNLENBQUNNLE9BQVE7c0JBQ2xCLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFROzs7Ozs7Ozs7Ozs7O2VBYTFDLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxLQUFNOzs7aUJBRy9CLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxRQUFTOzs7O0NBakJyRDtNQUFNSCxnQjtBQXVCTixNQUFNSSxZQUFZLEdBQUdULHlEQUFNLENBQUNVLEdBQUk7O0NBQWhDO01BQU1ELFk7QUFJQyxNQUFNRSxjQUFjLEdBQUcsTUFDNUIsbUVBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsbUZBQUQ7QUFBYyxRQUFNLEVBQUMsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0pBREYsRUFLRTtBQUFHLE9BQUssRUFBRTtBQUFFQyxhQUFTLEVBQUU7QUFBYixHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOFZBTEYsQ0FERixFQWNFLE1BQUMsWUFBRDtBQUNFLEtBQUcsRUFBQyxhQUROO0FBRUUsS0FBRyxFQUFHLEdBQUVDLEVBQXlCLGlCQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZEYsQ0FERixDQUZGLENBREs7TUFBTUYsYyIsImZpbGUiOiIuL3NyYy9hcHAvYWJvdXQvc3BlY2lhbC1zZWN0aW9uL3NwZWNpYWwtc2VjdGlvbi5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTnVtYmVyZWRUZXh0IH0gZnJvbSAnLi4vbnVtYmVyZWQtdGV4dC9udW1iZXJlZC10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyJztcblxuY29uc3QgSGFsZkNpcmNsZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeX07XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAyMHZ3O1xuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMCAvIDEwMCUgMTAwJSAwIDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuY29uc3QgU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICAvKiBwYWRkaW5nOiAyMDBweCAwIDYwcHggNTBweDsgKi9cbiAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNzAlIDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3MCUgMTAwJTsgKi9cblxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJiAubnVtYmVyZWQtdGV4dCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iud2hpdGV9O1xuXG4gICAgICAmID4gc3BhbiB7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLndoaXRlMTAwfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFNlY3Rpb25JbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA0NSU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3BlY2lhbFNlY3Rpb24gPSAoKSA9PiAoXG4gIDw+XG4gICAgPEhhbGZDaXJjbGUgLz5cbiAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgIDxOdW1iZXJlZFRleHQgbnVtYmVyPVwiMDJcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEF0IEV4bGFicywgd2UgYmVsaWV2ZSB0aGF0IHRoZSB0cnVlIGFsaWdubWVudCBiZXR3ZWVuIG1hbmFnZW1lbnQgYW5kIGVuZ2luZWVyc1xuICAgICAgICAgICAgY2FuIG9ubHkgYmUgYWNoaWV2ZWQgYnkgaGVscGluZyBib3RoIHNpZGVzIHNwZWFrIHRoZSBzYW1lIGxhbmd1YWdlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIFRoYXTigJlzIHdoeSB3ZeKAmXZlIGNhbWUgdXAgd2l0aCBhIGNvbmNlcHQgb2YgVmFsdWUgRHJpdmVuIEVuZ2luZWVyaW5nIHdoaWNoXG4gICAgICAgICAgICBtYW5pZmVzdHMgYSBuZWVkIHRvIGZvY3VzIG9uIHJlc3VsdHMgcmF0aGVyIHRoYW4gYWN0aW9ucy4gSW4gZGF5cyBvZlxuICAgICAgICAgICAgdWJpcXVpdG91cyBkZXBlbmRlbmN5IG9uIHNvZnR3YXJlLCByZXN1bHRzIGFyZSBtb3JlIG11bHRpLWRpbWVuc2lvbmFsIHRoYW5cbiAgICAgICAgICAgIGV2ZXIgYmVmb3JlLiBJdOKAmXMgbm90IGxvbmdlciBwb3NzaWJsZSB0byBtZWFzdXJlIGJ1c2luZXNzIGJlbmVmaXQgc2ltcGx5IGJ5XG4gICAgICAgICAgICBkaXJlY3QgUk9JIGZyb20gaW1wbGVtZW50ZWQgY2hhbmdlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9OdW1iZXJlZFRleHQ+XG4gICAgICAgIDxTZWN0aW9uSW1hZ2VcbiAgICAgICAgICBhbHQ9XCJFeGxhYnMgZ29hbFwiXG4gICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2RhdGEuc3ZnYH1cbiAgICAgICAgLz5cbiAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgPC8+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/about/special-section/special-section.component.tsx\n");

/***/ })

})