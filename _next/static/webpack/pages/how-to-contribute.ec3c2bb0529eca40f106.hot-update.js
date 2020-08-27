webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/description/description.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/app/how-to-contribute/description/description.component.tsx ***!
  \*************************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../step/step.component */ \"./src/app/how-to-contribute/step/step.component.tsx\");\n/* harmony import */ var _numbered_point_numbered_point_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbered-point/numbered-point.component */ \"./src/app/how-to-contribute/numbered-point/numbered-point.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/how-to-contribute/description/description.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article`\n  margin-top: 50px;\n`;\n_c = DescriptionContainer;\nconst DescriptionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2`\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.secondary};\n  }\n`;\n_c2 = DescriptionTitle;\nconst FirstSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  padding: 40px 0 40px 80px;\n  position: relative;\n  border-bottom: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n\n  & > .contribute-step {\n    width: 80%;\n  }\n\n  & > .numbered-point {\n    position: absolute;\n    left: 0;\n    top: calc(50% - 30px);\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 50%;\n    bottom: 0;\n    left: 0;\n    background-color: ${({\n  theme\n}) => theme.color.primary400};\n  }\n`;\n_c3 = FirstSection;\nconst SecondSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  padding: 40px 80px 40px 0;\n  justify-content: flex-end;\n  border-right: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n\n  & > .contribute-step {\n    width: 80%;\n  }\n`;\n_c4 = SecondSection;\nconst ThirdSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  padding: 40px 0 40px 80px;\n  position: relative;\n  border-top: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n\n  & > .contribute-step {\n    width: 80%;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 50%;\n    top: 0;\n    left: 0;\n    background-color: ${({\n  theme\n}) => theme.color.primary400};\n  }\n`;\n_c5 = ThirdSection;\nconst Description = () => {\n  return __jsx(DescriptionContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(DescriptionTitle, {\n    id: \"share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, \"How to share your \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 27\n    }\n  }, \"knowledge\")), __jsx(FirstSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Create the content\",\n    imageUrl: `${\"\"}/icons/contribute/content.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, \"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.\"), __jsx(_numbered_point_numbered_point_component__WEBPACK_IMPORTED_MODULE_3__[\"NumberedPoint\"], {\n    value: 1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  })), __jsx(SecondSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Add template metadata\",\n    imageUrl: `${\"\"}/icons/contribute/metadata.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, \"Go to src/content/templates.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.\")), __jsx(ThirdSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Pull Request\",\n    imageUrl: `${\"\"}/icons/contribute/pr.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, \"That\\u2019s it! Well done, now You can create a new Pull Request and wait for approval!\")));\n};\n_c6 = Description;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"DescriptionContainer\");\n$RefreshReg$(_c2, \"DescriptionTitle\");\n$RefreshReg$(_c3, \"FirstSection\");\n$RefreshReg$(_c4, \"SecondSection\");\n$RefreshReg$(_c5, \"ThirdSection\");\n$RefreshReg$(_c6, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4PzAwMDUiXSwibmFtZXMiOlsiRGVzY3JpcHRpb25Db250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiRGVzY3JpcHRpb25UaXRsZSIsImgyIiwidGhlbWUiLCJjb2xvciIsImZvbnRQcmltYXJ5Iiwic2Vjb25kYXJ5IiwiRmlyc3RTZWN0aW9uIiwic2VjdGlvbiIsInByaW1hcnk0MDAiLCJTZWNvbmRTZWN0aW9uIiwiVGhpcmRTZWN0aW9uIiwiRGVzY3JpcHRpb24iLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLG9CQUFvQixHQUFHQyx5REFBTSxDQUFDQyxPQUFROztDQUE1QztLQUFNRixvQjtBQUlOLE1BQU1HLGdCQUFnQixHQUFHRix5REFBTSxDQUFDRyxFQUFHOzs7O1dBSXhCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFZOzs7YUFHckMsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQVU7O0NBUGxEO01BQU1MLGdCO0FBV04sTUFBTU0sWUFBWSxHQUFHUix5REFBTSxDQUFDUyxPQUFROzs7OzZCQUlQLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQW1CM0MsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFVBQVc7O0NBdkI5RDtNQUFNRixZO0FBMkJOLE1BQU1HLGFBQWEsR0FBR1gseURBQU0sQ0FBQ1MsT0FBUTs7Ozs0QkFJVCxDQUFDO0FBQUVMO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssVUFBVzs7Ozs7Q0FKbEU7TUFBTUMsYTtBQVdOLE1BQU1DLFlBQVksR0FBR1oseURBQU0sQ0FBQ1MsT0FBUTs7OzswQkFJVixDQUFDO0FBQUVMO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssVUFBVzs7Ozs7Ozs7Ozs7Ozt3QkFheEMsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFVBQVc7O0NBakI5RDtNQUFNRSxZO0FBcUJDLE1BQU1DLFdBQVcsR0FBRyxNQUFNO0FBQy9CLFNBQ0UsTUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnQkFBRDtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEcEIsQ0FERixFQUlFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBQyxvQkFEUjtBQUVFLFlBQVEsRUFBRyxHQUFFQyxFQUF5QiwrQkFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxUEFERixFQVVFLE1BQUMsc0ZBQUQ7QUFBZSxTQUFLLEVBQUUsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBSkYsRUFnQkUsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFDLHVCQURSO0FBRUUsWUFBUSxFQUFHLEdBQUVBLEVBQXlCLGdDQUZ4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBUQURGLENBaEJGLEVBMkJFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsWUFBUSxFQUFHLEdBQUVBLEVBQXlCLDBCQUZ4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtGQURGLENBM0JGLENBREY7QUF1Q0QsQ0F4Q007TUFBTUQsVyIsImZpbGUiOiIuL3NyYy9hcHAvaG93LXRvLWNvbnRyaWJ1dGUvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFN0ZXAgfSBmcm9tICcuLi9zdGVwL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlcmVkUG9pbnQgfSBmcm9tICcuLi9udW1iZXJlZC1wb2ludC9udW1iZXJlZC1wb2ludC5jb21wb25lbnQnO1xuXG5jb25zdCBEZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5hcnRpY2xlYFxuICBtYXJnaW4tdG9wOiA1MHB4O1xuYDtcblxuY29uc3QgRGVzY3JpcHRpb25UaXRsZSA9IHN0eWxlZC5oMmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRQcmltYXJ5fTtcblxuICAmID4gc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iuc2Vjb25kYXJ5fTtcbiAgfVxuYDtcblxuY29uc3QgRmlyc3RTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDQwcHggMCA0MHB4IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeTQwMH07XG5cbiAgJiA+IC5jb250cmlidXRlLXN0ZXAge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAmID4gLm51bWJlcmVkLXBvaW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzBweCk7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5NDAwfTtcbiAgfVxuYDtcblxuY29uc3QgU2Vjb25kU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA0MHB4IDgwcHggNDBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnk0MDB9O1xuXG4gICYgPiAuY29udHJpYnV0ZS1zdGVwIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5gO1xuXG5jb25zdCBUaGlyZFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNDBweCAwIDQwcHggODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5NDAwfTtcblxuICAmID4gLmNvbnRyaWJ1dGUtc3RlcCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDNweDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnk0MDB9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgPERlc2NyaXB0aW9uVGl0bGUgaWQ9XCJzaGFyZVwiPlxuICAgICAgICBIb3cgdG8gc2hhcmUgeW91ciA8c3Bhbj5rbm93bGVkZ2U8L3NwYW4+XG4gICAgICA8L0Rlc2NyaXB0aW9uVGl0bGU+XG4gICAgICA8Rmlyc3RTZWN0aW9uPlxuICAgICAgICA8U3RlcFxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIHRoZSBjb250ZW50XCJcbiAgICAgICAgICBpbWFnZVVybD17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9jb250cmlidXRlL2NvbnRlbnQuc3ZnYH1cbiAgICAgICAgPlxuICAgICAgICAgIEluc2lkZSBzcmMvY29udGVudC9hcnRpY2xlcyBkaXJlY3RvcnkgY3JlYXRlIGEgbmV3IG1hcmtkb3duIGZpbGUgd2l0aCB0aGVcbiAgICAgICAgICBzZWxlY3RlZCBmaWxlbmFtZS4gSW5zaWRlIG1hcmtkb3duIGZpbGUsIFlvdSBjYW4gd3JpdGUgdGhlIGNvbnRlbnQgb2YgWW91clxuICAgICAgICAgIGFydGljbGUsIHJlbWVtYmVyIGFydGljbGUgdGl0bGUsIGRlc2NyaXB0aW9uLCBhbmQgaW1hZ2UsIHdpbGwgYmUgYWRkZWQgaW4gdGhlXG4gICAgICAgICAgbmV4dCBzdGVwLlxuICAgICAgICA8L1N0ZXA+XG4gICAgICAgIDxOdW1iZXJlZFBvaW50IHZhbHVlPXsxfSAvPlxuICAgICAgPC9GaXJzdFNlY3Rpb24+XG4gICAgICA8U2Vjb25kU2VjdGlvbj5cbiAgICAgICAgPFN0ZXBcbiAgICAgICAgICB0aXRsZT1cIkFkZCB0ZW1wbGF0ZSBtZXRhZGF0YVwiXG4gICAgICAgICAgaW1hZ2VVcmw9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvY29udHJpYnV0ZS9tZXRhZGF0YS5zdmdgfVxuICAgICAgICA+XG4gICAgICAgICAgR28gdG8gc3JjL2NvbnRlbnQvdGVtcGxhdGVzLmpzb24gYW5kIGFkZCBhIG5ldyBvYmplY3Qgd2l0aCBwcm9wZXIgbWV0YWRhdGEgZm9yXG4gICAgICAgICAgWW91ciBhcnRpY2xlLCB3aGVyZSBmaWxlTmFtZSBpcyBqdXN0IGEgcGxhaW4gbmFtZSB3aXRob3V0IGV4dGVuc2lvbiBvZiBZb3VyXG4gICAgICAgICAgYXJ0aWNsZSBjb250ZW50IG1hcmtkb3duIGZpbGUsIGltYWdlVXJsIGlzIGEgc3RhdGljIGZpbGUgdGFrZW4gZnJvbSB0aGUgcHVibGljXG4gICAgICAgICAgZGlyZWN0b3J5IG9yIGR5bmFtaWMgVVJMLiBMYXN0bHksIGFkZCBZb3VyIG5pY2tuYW1lIGluIHRoZSBhdXRob3IgZmllbGQuXG4gICAgICAgIDwvU3RlcD5cbiAgICAgIDwvU2Vjb25kU2VjdGlvbj5cbiAgICAgIDxUaGlyZFNlY3Rpb24+XG4gICAgICAgIDxTdGVwXG4gICAgICAgICAgdGl0bGU9XCJQdWxsIFJlcXVlc3RcIlxuICAgICAgICAgIGltYWdlVXJsPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvcHIuc3ZnYH1cbiAgICAgICAgPlxuICAgICAgICAgIFRoYXTigJlzIGl0ISBXZWxsIGRvbmUsIG5vdyBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBQdWxsIFJlcXVlc3QgYW5kIHdhaXQgZm9yXG4gICAgICAgICAgYXBwcm92YWwhXG4gICAgICAgIDwvU3RlcD5cbiAgICAgIDwvVGhpcmRTZWN0aW9uPlxuICAgIDwvRGVzY3JpcHRpb25Db250YWluZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/description/description.component.tsx\n");

/***/ })

})