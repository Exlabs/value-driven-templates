webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/description/description.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/app/how-to-contribute/description/description.component.tsx ***!
  \*************************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../step/step.component */ \"./src/app/how-to-contribute/step/step.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/how-to-contribute/description/description.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article`\n  margin-top: 50px;\n`;\n_c = DescriptionContainer;\nconst DescriptionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2`\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.secondary};\n  }\n`;\n_c2 = DescriptionTitle;\nconst FirstSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  padding: 20px 0 20px 80px;\n  position: relative;\n\n  & > .contribute-step {\n    max-width: 80%;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 50%;\n    bottom: 0;\n    left: 0;\n    background-color: ${({\n  theme\n}) => theme.color.primary400};\n  }\n\n  border-bottom: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n  border-radius: 10px;\n`;\n_c3 = FirstSection;\nconst Description = () => {\n  return __jsx(DescriptionContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(DescriptionTitle, {\n    id: \"share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, \"How to share your \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 27\n    }\n  }, \"knowledge\")), __jsx(FirstSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Create the content\",\n    imageUrl: `${\"\"}/icons/contribute/content.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.\")));\n};\n_c4 = Description;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DescriptionContainer\");\n$RefreshReg$(_c2, \"DescriptionTitle\");\n$RefreshReg$(_c3, \"FirstSection\");\n$RefreshReg$(_c4, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4PzAwMDUiXSwibmFtZXMiOlsiRGVzY3JpcHRpb25Db250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiRGVzY3JpcHRpb25UaXRsZSIsImgyIiwidGhlbWUiLCJjb2xvciIsImZvbnRQcmltYXJ5Iiwic2Vjb25kYXJ5IiwiRmlyc3RTZWN0aW9uIiwic2VjdGlvbiIsInByaW1hcnk0MDAiLCJEZXNjcmlwdGlvbiIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLHlEQUFNLENBQUNDLE9BQVE7O0NBQTVDO0tBQU1GLG9CO0FBSU4sTUFBTUcsZ0JBQWdCLEdBQUdGLHlEQUFNLENBQUNHLEVBQUc7Ozs7V0FJeEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVk7OzthQUdyQyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBVTs7Q0FQbEQ7TUFBTUwsZ0I7QUFXTixNQUFNTSxZQUFZLEdBQUdSLHlEQUFNLENBQUNTLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBZ0JaLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxVQUFXOzs7NkJBR2pDLENBQUM7QUFBRU47QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxVQUFXOztDQW5CbkU7TUFBTUYsWTtBQXVCQyxNQUFNRyxXQUFXLEdBQUcsTUFBTTtBQUMvQixTQUNFLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0JBQUQ7QUFBa0IsTUFBRSxFQUFDLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQ29CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHBCLENBREYsRUFJRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxTQUFLLEVBQUMsb0JBRFI7QUFFRSxZQUFRLEVBQUcsR0FBRUMsRUFBeUIsK0JBRnhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscVBBREYsQ0FKRixDQURGO0FBa0JELENBbkJNO01BQU1ELFciLCJmaWxlIjoiLi9zcmMvYXBwL2hvdy10by1jb250cmlidXRlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSAnLi4vc3RlcC9zdGVwLmNvbXBvbmVudCc7XG5cbmNvbnN0IERlc2NyaXB0aW9uQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgXG4gIG1hcmdpbi10b3A6IDUwcHg7XG5gO1xuXG5jb25zdCBEZXNjcmlwdGlvblRpdGxlID0gc3R5bGVkLmgyYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gICYgPiBzcGFuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5zZWNvbmRhcnl9O1xuICB9XG5gO1xuXG5jb25zdCBGaXJzdFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYgPiAuY29udHJpYnV0ZS1zdGVwIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDNweDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnk0MDB9O1xuICB9XG5cbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeTQwMH07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgPERlc2NyaXB0aW9uVGl0bGUgaWQ9XCJzaGFyZVwiPlxuICAgICAgICBIb3cgdG8gc2hhcmUgeW91ciA8c3Bhbj5rbm93bGVkZ2U8L3NwYW4+XG4gICAgICA8L0Rlc2NyaXB0aW9uVGl0bGU+XG4gICAgICA8Rmlyc3RTZWN0aW9uPlxuICAgICAgICA8U3RlcFxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIHRoZSBjb250ZW50XCJcbiAgICAgICAgICBpbWFnZVVybD17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9jb250cmlidXRlL2NvbnRlbnQuc3ZnYH1cbiAgICAgICAgPlxuICAgICAgICAgIEluc2lkZSBzcmMvY29udGVudC9hcnRpY2xlcyBkaXJlY3RvcnkgY3JlYXRlIGEgbmV3IG1hcmtkb3duIGZpbGUgd2l0aCB0aGVcbiAgICAgICAgICBzZWxlY3RlZCBmaWxlbmFtZS4gSW5zaWRlIG1hcmtkb3duIGZpbGUsIFlvdSBjYW4gd3JpdGUgdGhlIGNvbnRlbnQgb2YgWW91clxuICAgICAgICAgIGFydGljbGUsIHJlbWVtYmVyIGFydGljbGUgdGl0bGUsIGRlc2NyaXB0aW9uLCBhbmQgaW1hZ2UsIHdpbGwgYmUgYWRkZWQgaW4gdGhlXG4gICAgICAgICAgbmV4dCBzdGVwLlxuICAgICAgICA8L1N0ZXA+XG4gICAgICA8L0ZpcnN0U2VjdGlvbj5cbiAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/description/description.component.tsx\n");

/***/ })

})