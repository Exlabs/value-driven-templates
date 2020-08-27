webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/description/description.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/app/how-to-contribute/description/description.component.tsx ***!
  \*************************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../step/step.component */ \"./src/app/how-to-contribute/step/step.component.tsx\");\n/* harmony import */ var _numbered_point_numbered_point_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbered-point/numbered-point.component */ \"./src/app/how-to-contribute/numbered-point/numbered-point.component.tsx\");\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/how-to-contribute/description/description.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article`\n  margin-top: 50px;\n  max-width: 90%;\n  margin: 0 auto;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    max-width: 100%;\n  }\n`;\n_c = DescriptionContainer;\nconst DescriptionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2`\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.secondary};\n  }\n`;\n_c2 = DescriptionTitle;\nconst FirstSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  position: relative;\n  margin-top: 30px;\n\n  @media screen and (min-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    border-bottom: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n    padding: 40px 0 40px 80px;\n    & > .contribute-step {\n      width: 80%;\n    }\n\n    & > .numbered-point {\n      position: absolute;\n      left: -50px;\n      top: calc(50% - 50px);\n      z-index: 10;\n    }\n\n    &::after {\n      content: '';\n      position: absolute;\n      width: 3px;\n      height: 50%;\n      bottom: 0;\n      left: 0;\n      background-color: ${({\n  theme\n}) => theme.color.primary400};\n    }\n  }\n`;\n_c3 = FirstSection;\nconst SecondSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n\n  @media screen and (min-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    padding: 40px 80px 40px 0;\n    border-right: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n\n    & > .contribute-step {\n      width: 80%;\n    }\n\n    & > .numbered-point {\n      position: absolute;\n      right: -50px;\n      top: calc(50% - 50px);\n      z-index: 10;\n    }\n  }\n`;\n_c4 = SecondSection;\nconst ThirdSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  padding: 40px 0 40px 80px;\n  position: relative;\n  border-top: 3px solid ${({\n  theme\n}) => theme.color.primary400};\n  position: relative;\n\n  & > .numbered-point {\n    position: absolute;\n    left: -50px;\n    top: calc(50% - 50px);\n    z-index: 10;\n  }\n\n  & > .contribute-step {\n    width: 80%;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 50%;\n    top: 0;\n    left: 0;\n    background-color: ${({\n  theme\n}) => theme.color.primary400};\n  }\n`;\n_c5 = ThirdSection;\nconst Description = () => {\n  _s();\n\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__[\"useDeviceDetect\"])();\n  return __jsx(DescriptionContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }\n  }, __jsx(DescriptionTitle, {\n    id: \"share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, \"How to share your \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 27\n    }\n  }, \"knowledge\")), __jsx(FirstSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Create the content\",\n    imageUrl: `${\"\"}/icons/contribute/content.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.\"), !isMobile && __jsx(_numbered_point_numbered_point_component__WEBPACK_IMPORTED_MODULE_3__[\"NumberedPoint\"], {\n    value: 1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 23\n    }\n  })), __jsx(SecondSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Add template metadata\",\n    imageUrl: `${\"\"}/icons/contribute/metadata.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }\n  }, \"Go to src/content/templates.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.\"), __jsx(_numbered_point_numbered_point_component__WEBPACK_IMPORTED_MODULE_3__[\"NumberedPoint\"], {\n    value: 2,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  })), __jsx(ThirdSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, __jsx(_step_step_component__WEBPACK_IMPORTED_MODULE_2__[\"Step\"], {\n    title: \"Pull Request\",\n    imageUrl: `${\"\"}/icons/contribute/pr.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  }, \"That\\u2019s it! Well done, now You can create a new Pull Request and wait for approval!\"), __jsx(_numbered_point_numbered_point_component__WEBPACK_IMPORTED_MODULE_3__[\"NumberedPoint\"], {\n    value: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Description, \"zgkINSqbfc5el6iJHobgJqkLvZM=\", false, function () {\n  return [_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__[\"useDeviceDetect\"]];\n});\n\n_c6 = Description;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"DescriptionContainer\");\n$RefreshReg$(_c2, \"DescriptionTitle\");\n$RefreshReg$(_c3, \"FirstSection\");\n$RefreshReg$(_c4, \"SecondSection\");\n$RefreshReg$(_c5, \"ThirdSection\");\n$RefreshReg$(_c6, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4PzAwMDUiXSwibmFtZXMiOlsiRGVzY3JpcHRpb25Db250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwidGhlbWUiLCJkZXZpY2VCcmVha3BvaW50IiwibW9iaWxlIiwiRGVzY3JpcHRpb25UaXRsZSIsImgyIiwiY29sb3IiLCJmb250UHJpbWFyeSIsInNlY29uZGFyeSIsIkZpcnN0U2VjdGlvbiIsInNlY3Rpb24iLCJwcmltYXJ5NDAwIiwiU2Vjb25kU2VjdGlvbiIsIlRoaXJkU2VjdGlvbiIsIkRlc2NyaXB0aW9uIiwiaXNNb2JpbGUiLCJ1c2VEZXZpY2VEZXRlY3QiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLHlEQUFNLENBQUNDLE9BQVE7Ozs7O2tDQUtWLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE1BQU87OztDQUwvRTtLQUFNTCxvQjtBQVVOLE1BQU1NLGdCQUFnQixHQUFHTCx5REFBTSxDQUFDTSxFQUFHOzs7O1dBSXhCLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFZOzs7YUFHckMsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSyxLQUFOLENBQVlFLFNBQVU7O0NBUGxEO01BQU1KLGdCO0FBV04sTUFBTUssWUFBWSxHQUFHVix5REFBTSxDQUFDVyxPQUFROzs7OztrQ0FLRixDQUFDO0FBQUVUO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOytCQUNoRCxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUssVUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBb0IzQyxDQUFDO0FBQUVWO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUssVUFBVzs7O0NBMUJoRTtNQUFNRixZO0FBK0JOLE1BQU1HLGFBQWEsR0FBR2IseURBQU0sQ0FBQ1csT0FBUTs7Ozs7a0NBS0gsQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsTUFBTzs7OEJBRWpELENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZSyxVQUFXOzs7Ozs7Ozs7Ozs7O0NBUHBFO01BQU1DLGE7QUFzQk4sTUFBTUMsWUFBWSxHQUFHZCx5REFBTSxDQUFDVyxPQUFROzs7OzBCQUlWLENBQUM7QUFBRVQ7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZSyxVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBcUJ4QyxDQUFDO0FBQUVWO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUssVUFBVzs7Q0F6QjlEO01BQU1FLFk7QUE2QkMsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFDL0IsUUFBTTtBQUFFQztBQUFGLE1BQWVDLHVHQUFlLEVBQXBDO0FBRUEsU0FDRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURwQixDQURGLEVBSUUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFDLG9CQURSO0FBRUUsWUFBUSxFQUFHLEdBQUVDLEVBQXlCLCtCQUZ4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFQQURGLEVBVUcsQ0FBQ0YsUUFBRCxJQUFhLE1BQUMsc0ZBQUQ7QUFBZSxTQUFLLEVBQUUsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZoQixDQUpGLEVBZ0JFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBQyx1QkFEUjtBQUVFLFlBQVEsRUFBRyxHQUFFRSxFQUF5QixnQ0FGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwVEFERixFQVVFLE1BQUMsc0ZBQUQ7QUFBZSxTQUFLLEVBQUUsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBaEJGLEVBNEJFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsWUFBUSxFQUFHLEdBQUVBLEVBQXlCLDBCQUZ4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtGQURGLEVBUUUsTUFBQyxzRkFBRDtBQUFlLFNBQUssRUFBRSxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0E1QkYsQ0FERjtBQXlDRCxDQTVDTTs7R0FBTUgsVztVQUNVRSwrRjs7O01BRFZGLFciLCJmaWxlIjoiLi9zcmMvYXBwL2hvdy10by1jb250cmlidXRlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSAnLi4vc3RlcC9zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJlZFBvaW50IH0gZnJvbSAnLi4vbnVtYmVyZWQtcG9pbnQvbnVtYmVyZWQtcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7IHVzZURldmljZURldGVjdCB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1kZXZpY2UtZGV0ZWN0L3VzZS1kZXZpY2UtZGV0ZWN0Lmhvb2snO1xuXG5jb25zdCBEZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5hcnRpY2xlYFxuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IERlc2NyaXB0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5cbiAgJiA+IHNwYW4ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnNlY29uZGFyeX07XG4gIH1cbmA7XG5cbmNvbnN0IEZpcnN0U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5NDAwfTtcbiAgICBwYWRkaW5nOiA0MHB4IDAgNDBweCA4MHB4O1xuICAgICYgPiAuY29udHJpYnV0ZS1zdGVwIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgJiA+IC5udW1iZXJlZC1wb2ludCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAtNTBweDtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDNweDtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeTQwMH07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTZWNvbmRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIHBhZGRpbmc6IDQwcHggODBweCA0MHB4IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5NDAwfTtcblxuICAgICYgPiAuY29udHJpYnV0ZS1zdGVwIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgJiA+IC5udW1iZXJlZC1wb2ludCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTUwcHg7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFRoaXJkU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA0MHB4IDAgNDBweCA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnk0MDB9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJiA+IC5udW1iZXJlZC1wb2ludCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuXG4gICYgPiAuY29udHJpYnV0ZS1zdGVwIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogM3B4O1xuICAgIGhlaWdodDogNTAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeTQwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICA8RGVzY3JpcHRpb25UaXRsZSBpZD1cInNoYXJlXCI+XG4gICAgICAgIEhvdyB0byBzaGFyZSB5b3VyIDxzcGFuPmtub3dsZWRnZTwvc3Bhbj5cbiAgICAgIDwvRGVzY3JpcHRpb25UaXRsZT5cbiAgICAgIDxGaXJzdFNlY3Rpb24+XG4gICAgICAgIDxTdGVwXG4gICAgICAgICAgdGl0bGU9XCJDcmVhdGUgdGhlIGNvbnRlbnRcIlxuICAgICAgICAgIGltYWdlVXJsPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvY29udGVudC5zdmdgfVxuICAgICAgICA+XG4gICAgICAgICAgSW5zaWRlIHNyYy9jb250ZW50L2FydGljbGVzIGRpcmVjdG9yeSBjcmVhdGUgYSBuZXcgbWFya2Rvd24gZmlsZSB3aXRoIHRoZVxuICAgICAgICAgIHNlbGVjdGVkIGZpbGVuYW1lLiBJbnNpZGUgbWFya2Rvd24gZmlsZSwgWW91IGNhbiB3cml0ZSB0aGUgY29udGVudCBvZiBZb3VyXG4gICAgICAgICAgYXJ0aWNsZSwgcmVtZW1iZXIgYXJ0aWNsZSB0aXRsZSwgZGVzY3JpcHRpb24sIGFuZCBpbWFnZSwgd2lsbCBiZSBhZGRlZCBpbiB0aGVcbiAgICAgICAgICBuZXh0IHN0ZXAuXG4gICAgICAgIDwvU3RlcD5cbiAgICAgICAgeyFpc01vYmlsZSAmJiA8TnVtYmVyZWRQb2ludCB2YWx1ZT17MX0gLz59XG4gICAgICA8L0ZpcnN0U2VjdGlvbj5cbiAgICAgIDxTZWNvbmRTZWN0aW9uPlxuICAgICAgICA8U3RlcFxuICAgICAgICAgIHRpdGxlPVwiQWRkIHRlbXBsYXRlIG1ldGFkYXRhXCJcbiAgICAgICAgICBpbWFnZVVybD17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9jb250cmlidXRlL21ldGFkYXRhLnN2Z2B9XG4gICAgICAgID5cbiAgICAgICAgICBHbyB0byBzcmMvY29udGVudC90ZW1wbGF0ZXMuanNvbiBhbmQgYWRkIGEgbmV3IG9iamVjdCB3aXRoIHByb3BlciBtZXRhZGF0YSBmb3JcbiAgICAgICAgICBZb3VyIGFydGljbGUsIHdoZXJlIGZpbGVOYW1lIGlzIGp1c3QgYSBwbGFpbiBuYW1lIHdpdGhvdXQgZXh0ZW5zaW9uIG9mIFlvdXJcbiAgICAgICAgICBhcnRpY2xlIGNvbnRlbnQgbWFya2Rvd24gZmlsZSwgaW1hZ2VVcmwgaXMgYSBzdGF0aWMgZmlsZSB0YWtlbiBmcm9tIHRoZSBwdWJsaWNcbiAgICAgICAgICBkaXJlY3Rvcnkgb3IgZHluYW1pYyBVUkwuIExhc3RseSwgYWRkIFlvdXIgbmlja25hbWUgaW4gdGhlIGF1dGhvciBmaWVsZC5cbiAgICAgICAgPC9TdGVwPlxuICAgICAgICA8TnVtYmVyZWRQb2ludCB2YWx1ZT17Mn0gLz5cbiAgICAgIDwvU2Vjb25kU2VjdGlvbj5cbiAgICAgIDxUaGlyZFNlY3Rpb24+XG4gICAgICAgIDxTdGVwXG4gICAgICAgICAgdGl0bGU9XCJQdWxsIFJlcXVlc3RcIlxuICAgICAgICAgIGltYWdlVXJsPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvcHIuc3ZnYH1cbiAgICAgICAgPlxuICAgICAgICAgIFRoYXTigJlzIGl0ISBXZWxsIGRvbmUsIG5vdyBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBQdWxsIFJlcXVlc3QgYW5kIHdhaXQgZm9yXG4gICAgICAgICAgYXBwcm92YWwhXG4gICAgICAgIDwvU3RlcD5cbiAgICAgICAgPE51bWJlcmVkUG9pbnQgdmFsdWU9ezN9IC8+XG4gICAgICA8L1RoaXJkU2VjdGlvbj5cbiAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/description/description.component.tsx\n");

/***/ })

})