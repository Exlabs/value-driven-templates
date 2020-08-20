webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/special-section/special-section.component.tsx":
/*!*********************************************************************!*\
  !*** ./src/app/about/special-section/special-section.component.tsx ***!
  \*********************************************************************/
/*! exports provided: SpecialSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialSection\", function() { return SpecialSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/about/special-section/special-section.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  background-color: ${({\n  theme\n}) => theme.color.primary};\n  padding: 180px 0 60px 50px;\n  border-top-left-radius: 70% 200%;\n  border-top-right-radius: 70% 200%;\n\n  & > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    & .numbered-text {\n      flex: 1;\n      font-size: 21px;\n      color: ${({\n  theme\n}) => theme.color.white};\n\n      & > span {\n        color: ${({\n  theme\n}) => theme.color.white100};\n      }\n    }\n  }\n`;\n_c = SectionContainer;\nconst SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 45%;\n`;\n_c2 = SectionImage;\nconst SpecialSection = () => __jsx(SectionContainer, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }\n}, __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_3__[\"AppContainer\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }\n}, __jsx(_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n  number: \"02\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 7\n  }\n}, __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }\n}, \"At Exlabs, we believe that the true alignment between management and engineers can only be achieved by helping both sides speak the same language.\"), __jsx(\"p\", {\n  style: {\n    marginTop: '10px'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }\n}, \"That\\u2019s why we\\u2019ve came up with a concept of Value Driven Engineering which manifests a need to focus on results rather than actions. In days of ubiquitous dependency on software, results are more multi-dimensional than ever before. It\\u2019s not longer possible to measure business benefit simply by direct ROI from implemented change.\")), __jsx(SectionImage, {\n  alt: \"Exlabs goal\",\n  src: `${\"\"}/icons/data.svg`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 7\n  }\n})));\n_c3 = SpecialSection;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"SectionContainer\");\n$RefreshReg$(_c2, \"SectionImage\");\n$RefreshReg$(_c3, \"SpecialSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9zcGVjaWFsLXNlY3Rpb24vc3BlY2lhbC1zZWN0aW9uLmNvbXBvbmVudC50c3g/NGJjMSJdLCJuYW1lcyI6WyJTZWN0aW9uQ29udGFpbmVyIiwic3R5bGVkIiwic2VjdGlvbiIsInRoZW1lIiwiY29sb3IiLCJwcmltYXJ5Iiwid2hpdGUiLCJ3aGl0ZTEwMCIsIlNlY3Rpb25JbWFnZSIsImltZyIsIlNwZWNpYWxTZWN0aW9uIiwibWFyZ2luVG9wIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsT0FBUTtzQkFDbEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVE7Ozs7Ozs7Ozs7Ozs7ZUFhMUMsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLEtBQU07OztpQkFHL0IsQ0FBQztBQUFFSDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFFBQVM7Ozs7Q0FqQnJEO0tBQU1QLGdCO0FBdUJOLE1BQU1RLFlBQVksR0FBR1AseURBQU0sQ0FBQ1EsR0FBSTs7Q0FBaEM7TUFBTUQsWTtBQUlDLE1BQU1FLGNBQWMsR0FBRyxNQUM1QixNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLG1GQUFEO0FBQWMsUUFBTSxFQUFDLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdKQURGLEVBS0U7QUFBRyxPQUFLLEVBQUU7QUFBRUMsYUFBUyxFQUFFO0FBQWIsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhWQUxGLENBREYsRUFjRSxNQUFDLFlBQUQ7QUFDRSxLQUFHLEVBQUMsYUFETjtBQUVFLEtBQUcsRUFBRyxHQUFFQyxFQUF5QixpQkFGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWRGLENBREYsQ0FESztNQUFNRixjIiwiZmlsZSI6Ii4vc3JjL2FwcC9hYm91dC9zcGVjaWFsLXNlY3Rpb24vc3BlY2lhbC1zZWN0aW9uLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOdW1iZXJlZFRleHQgfSBmcm9tICcuLi9udW1iZXJlZC10ZXh0L251bWJlcmVkLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXInO1xuXG5jb25zdCBTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeX07XG4gIHBhZGRpbmc6IDE4MHB4IDAgNjBweCA1MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3MCUgMjAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDcwJSAyMDAlO1xuXG4gICYgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmIC5udW1iZXJlZC10ZXh0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci53aGl0ZX07XG5cbiAgICAgICYgPiBzcGFuIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iud2hpdGUxMDB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU2VjdGlvbkltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDQ1JTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTcGVjaWFsU2VjdGlvbiA9ICgpID0+IChcbiAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgPEFwcENvbnRhaW5lcj5cbiAgICAgIDxOdW1iZXJlZFRleHQgbnVtYmVyPVwiMDJcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQXQgRXhsYWJzLCB3ZSBiZWxpZXZlIHRoYXQgdGhlIHRydWUgYWxpZ25tZW50IGJldHdlZW4gbWFuYWdlbWVudCBhbmQgZW5naW5lZXJzXG4gICAgICAgICAgY2FuIG9ubHkgYmUgYWNoaWV2ZWQgYnkgaGVscGluZyBib3RoIHNpZGVzIHNwZWFrIHRoZSBzYW1lIGxhbmd1YWdlLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxuICAgICAgICAgIFRoYXTigJlzIHdoeSB3ZeKAmXZlIGNhbWUgdXAgd2l0aCBhIGNvbmNlcHQgb2YgVmFsdWUgRHJpdmVuIEVuZ2luZWVyaW5nIHdoaWNoXG4gICAgICAgICAgbWFuaWZlc3RzIGEgbmVlZCB0byBmb2N1cyBvbiByZXN1bHRzIHJhdGhlciB0aGFuIGFjdGlvbnMuIEluIGRheXMgb2YgdWJpcXVpdG91c1xuICAgICAgICAgIGRlcGVuZGVuY3kgb24gc29mdHdhcmUsIHJlc3VsdHMgYXJlIG1vcmUgbXVsdGktZGltZW5zaW9uYWwgdGhhbiBldmVyIGJlZm9yZS5cbiAgICAgICAgICBJdOKAmXMgbm90IGxvbmdlciBwb3NzaWJsZSB0byBtZWFzdXJlIGJ1c2luZXNzIGJlbmVmaXQgc2ltcGx5IGJ5IGRpcmVjdCBST0kgZnJvbVxuICAgICAgICAgIGltcGxlbWVudGVkIGNoYW5nZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9OdW1iZXJlZFRleHQ+XG4gICAgICA8U2VjdGlvbkltYWdlXG4gICAgICAgIGFsdD1cIkV4bGFicyBnb2FsXCJcbiAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2RhdGEuc3ZnYH1cbiAgICAgIC8+XG4gICAgPC9BcHBDb250YWluZXI+XG4gIDwvU2VjdGlvbkNvbnRhaW5lcj5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/about/special-section/special-section.component.tsx\n");

/***/ })

})