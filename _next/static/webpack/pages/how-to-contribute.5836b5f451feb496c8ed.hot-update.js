webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/description/description.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/app/how-to-contribute/description/description.component.tsx ***!
  \*************************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../step/step.component */ \"./src/app/how-to-contribute/step/step.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/how-to-contribute/description/description.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article`\n  margin-top: 50px;\n`;\n_c = DescriptionContainer;\nconst DescriptionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2`\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.secondary};\n  }\n`;\n_c2 = DescriptionTitle;\nconst FirstSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  padding: 40px 0 40px 80px;\n  position: relative;\n  border-bottom: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n\n  & > .contribute-step {\n    max-width: 80%;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 50%;\n    bottom: 0;\n    left: 0;\n    background-color: ${({\n  theme\n}) => theme.color.primary400};\n  }\n`;\n_c3 = FirstSection;\nconst SecondSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  padding: 40px 80px 40px 0;\n  justify-content: flex-end;\n  border-right: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n\n  & > .contribute-step {\n    max-width: 80%;\n  }\n`;\n_c4 = SecondSection;\nconst ThirdSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  padding: 40px 0 40px 80px;\n  position: relative;\n  border-bottom: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n\n  & > .contribute-step {\n    width: 80%;\n  }\n`;\n_c5 = ThirdSection;\nconst Description = () => {\n  return __jsx(DescriptionContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(DescriptionTitle, {\n    id: \"share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"How to share your \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 27\n    }\n  }, \"knowledge\")), __jsx(FirstSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Create the content\",\n    imageUrl: `${\"\"}/icons/contribute/content.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, \"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.\")), __jsx(SecondSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Add template metadata\",\n    imageUrl: `${\"\"}/icons/contribute/metadata.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, \"Go to src/content/templates.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.\")), __jsx(ThirdSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Pull Request\",\n    imageUrl: `${\"\"}/icons/contribute/pr.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, \"That\\u2019s it! Well done, now You can create a new Pull Request and wait for approval!\")));\n};\n_c6 = Description;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"DescriptionContainer\");\n$RefreshReg$(_c2, \"DescriptionTitle\");\n$RefreshReg$(_c3, \"FirstSection\");\n$RefreshReg$(_c4, \"SecondSection\");\n$RefreshReg$(_c5, \"ThirdSection\");\n$RefreshReg$(_c6, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4PzAwMDUiXSwibmFtZXMiOlsiRGVzY3JpcHRpb25Db250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiRGVzY3JpcHRpb25UaXRsZSIsImgyIiwidGhlbWUiLCJjb2xvciIsImZvbnRQcmltYXJ5Iiwic2Vjb25kYXJ5IiwiRmlyc3RTZWN0aW9uIiwic2VjdGlvbiIsInByaW1hcnk0MDAiLCJTZWNvbmRTZWN0aW9uIiwiVGhpcmRTZWN0aW9uIiwiRGVzY3JpcHRpb24iLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLG9CQUFvQixHQUFHQyx5REFBTSxDQUFDQyxPQUFROztDQUE1QztLQUFNRixvQjtBQUlOLE1BQU1HLGdCQUFnQixHQUFHRix5REFBTSxDQUFDRyxFQUFHOzs7O1dBSXhCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFZOzs7YUFHckMsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQVU7O0NBUGxEO01BQU1MLGdCO0FBV04sTUFBTU0sWUFBWSxHQUFHUix5REFBTSxDQUFDUyxPQUFROzs7OzZCQUlQLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxVQUFXOzs7Ozs7Ozs7Ozs7O3dCQWEzQyxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssVUFBVzs7Q0FqQjlEO01BQU1GLFk7QUFxQk4sTUFBTUcsYUFBYSxHQUFHWCx5REFBTSxDQUFDUyxPQUFROzs7OzRCQUlULENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxVQUFXOzs7OztDQUpsRTtNQUFNQyxhO0FBV04sTUFBTUMsWUFBWSxHQUFHWix5REFBTSxDQUFDUyxPQUFROzs7OzZCQUlQLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxVQUFXOzs7OztDQUpuRTtNQUFNRSxZO0FBV0MsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDL0IsU0FDRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURwQixDQURGLEVBSUUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFDLG9CQURSO0FBRUUsWUFBUSxFQUFHLEdBQUVDLEVBQXlCLCtCQUZ4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFQQURGLENBSkYsRUFlRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxTQUFLLEVBQUMsdUJBRFI7QUFFRSxZQUFRLEVBQUcsR0FBRUEsRUFBeUIsZ0NBRnhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMFRBREYsQ0FmRixFQTBCRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLFlBQVEsRUFBRyxHQUFFQSxFQUF5QiwwQkFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRkFERixDQTFCRixDQURGO0FBc0NELENBdkNNO01BQU1ELFciLCJmaWxlIjoiLi9zcmMvYXBwL2hvdy10by1jb250cmlidXRlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSAnLi4vc3RlcC9zdGVwLmNvbXBvbmVudCc7XG5cbmNvbnN0IERlc2NyaXB0aW9uQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgXG4gIG1hcmdpbi10b3A6IDUwcHg7XG5gO1xuXG5jb25zdCBEZXNjcmlwdGlvblRpdGxlID0gc3R5bGVkLmgyYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gICYgPiBzcGFuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5zZWNvbmRhcnl9O1xuICB9XG5gO1xuXG5jb25zdCBGaXJzdFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNDBweCAwIDQwcHggODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5NDAwfTtcblxuICAmID4gLmNvbnRyaWJ1dGUtc3RlcCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5NDAwfTtcbiAgfVxuYDtcblxuY29uc3QgU2Vjb25kU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA0MHB4IDgwcHggNDBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnk0MDB9O1xuXG4gICYgPiAuY29udHJpYnV0ZS1zdGVwIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgfVxuYDtcblxuY29uc3QgVGhpcmRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDQwcHggMCA0MHB4IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeTQwMH07XG5cbiAgJiA+IC5jb250cmlidXRlLXN0ZXAge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICA8RGVzY3JpcHRpb25UaXRsZSBpZD1cInNoYXJlXCI+XG4gICAgICAgIEhvdyB0byBzaGFyZSB5b3VyIDxzcGFuPmtub3dsZWRnZTwvc3Bhbj5cbiAgICAgIDwvRGVzY3JpcHRpb25UaXRsZT5cbiAgICAgIDxGaXJzdFNlY3Rpb24+XG4gICAgICAgIDxTdGVwXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgdGhlIGNvbnRlbnRcIlxuICAgICAgICAgIGltYWdlVXJsPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvY29udGVudC5zdmdgfVxuICAgICAgICA+XG4gICAgICAgICAgSW5zaWRlIHNyYy9jb250ZW50L2FydGljbGVzIGRpcmVjdG9yeSBjcmVhdGUgYSBuZXcgbWFya2Rvd24gZmlsZSB3aXRoIHRoZVxuICAgICAgICAgIHNlbGVjdGVkIGZpbGVuYW1lLiBJbnNpZGUgbWFya2Rvd24gZmlsZSwgWW91IGNhbiB3cml0ZSB0aGUgY29udGVudCBvZiBZb3VyXG4gICAgICAgICAgYXJ0aWNsZSwgcmVtZW1iZXIgYXJ0aWNsZSB0aXRsZSwgZGVzY3JpcHRpb24sIGFuZCBpbWFnZSwgd2lsbCBiZSBhZGRlZCBpbiB0aGVcbiAgICAgICAgICBuZXh0IHN0ZXAuXG4gICAgICAgIDwvU3RlcD5cbiAgICAgIDwvRmlyc3RTZWN0aW9uPlxuICAgICAgPFNlY29uZFNlY3Rpb24+XG4gICAgICAgIDxTdGVwXG4gICAgICAgICAgdGl0bGU9XCJBZGQgdGVtcGxhdGUgbWV0YWRhdGFcIlxuICAgICAgICAgIGltYWdlVXJsPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvbWV0YWRhdGEuc3ZnYH1cbiAgICAgICAgPlxuICAgICAgICAgIEdvIHRvIHNyYy9jb250ZW50L3RlbXBsYXRlcy5qc29uIGFuZCBhZGQgYSBuZXcgb2JqZWN0IHdpdGggcHJvcGVyIG1ldGFkYXRhIGZvclxuICAgICAgICAgIFlvdXIgYXJ0aWNsZSwgd2hlcmUgZmlsZU5hbWUgaXMganVzdCBhIHBsYWluIG5hbWUgd2l0aG91dCBleHRlbnNpb24gb2YgWW91clxuICAgICAgICAgIGFydGljbGUgY29udGVudCBtYXJrZG93biBmaWxlLCBpbWFnZVVybCBpcyBhIHN0YXRpYyBmaWxlIHRha2VuIGZyb20gdGhlIHB1YmxpY1xuICAgICAgICAgIGRpcmVjdG9yeSBvciBkeW5hbWljIFVSTC4gTGFzdGx5LCBhZGQgWW91ciBuaWNrbmFtZSBpbiB0aGUgYXV0aG9yIGZpZWxkLlxuICAgICAgICA8L1N0ZXA+XG4gICAgICA8L1NlY29uZFNlY3Rpb24+XG4gICAgICA8VGhpcmRTZWN0aW9uPlxuICAgICAgICA8U3RlcFxuICAgICAgICAgIHRpdGxlPVwiUHVsbCBSZXF1ZXN0XCJcbiAgICAgICAgICBpbWFnZVVybD17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9jb250cmlidXRlL3ByLnN2Z2B9XG4gICAgICAgID5cbiAgICAgICAgICBUaGF04oCZcyBpdCEgV2VsbCBkb25lLCBub3cgWW91IGNhbiBjcmVhdGUgYSBuZXcgUHVsbCBSZXF1ZXN0IGFuZCB3YWl0IGZvclxuICAgICAgICAgIGFwcHJvdmFsIVxuICAgICAgICA8L1N0ZXA+XG4gICAgICA8L1RoaXJkU2VjdGlvbj5cbiAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/description/description.component.tsx\n");

/***/ })

})