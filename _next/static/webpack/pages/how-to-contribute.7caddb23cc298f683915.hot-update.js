webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/description/description.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/app/how-to-contribute/description/description.component.tsx ***!
  \*************************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\n/* harmony import */ var _description_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description.styles */ \"./src/app/how-to-contribute/description/description.styles.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../about/numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/how-to-contribute/description/description.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section`\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 30px;\n`;\n_c = Section;\nconst SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3`\n  font-size: 33px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n`;\n_c2 = SectionTitle;\nconst SectionText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p`\n  font-size: 21px;\n`;\n_c3 = SectionText;\nconst SectionTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  width: 55%;\n  margin-right: 10px;\n`;\n_c4 = SectionTextContainer;\nconst SectionImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  flex: 1;\n  position: relative;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n\n  &::before {\n    content: '';\n    z-index: 0;\n    background: url('${\"\"}/icons/hero-pattern/floating-cogs.svg');\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.1;\n  }\n`;\n_c5 = SectionImageContainer;\nconst SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img`\n  width: 80%;\n  z-index: 1;\n`;\n_c6 = SectionImage;\nconst Description = () => {\n  _s();\n\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__[\"useDeviceDetect\"])();\n  return __jsx(_description_styles__WEBPACK_IMPORTED_MODULE_2__[\"DescriptionContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(_description_styles__WEBPACK_IMPORTED_MODULE_2__[\"DescriptionTitle\"], {\n    id: \"share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"How to share your \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 27\n    }\n  }, \"knowledge\")), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"01\",\n    rightPosition: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Create the content\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.\"))), __jsx(SectionImageContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/content.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }))), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, __jsx(SectionImageContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/metadata.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  })), __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"02\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, \"Add template metadata\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, \"Go to src/content/templates.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.\")))));\n};\n\n_s(Description, \"zgkINSqbfc5el6iJHobgJqkLvZM=\", false, function () {\n  return [_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__[\"useDeviceDetect\"]];\n});\n\n_c7 = Description;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c2, \"SectionTitle\");\n$RefreshReg$(_c3, \"SectionText\");\n$RefreshReg$(_c4, \"SectionTextContainer\");\n$RefreshReg$(_c5, \"SectionImageContainer\");\n$RefreshReg$(_c6, \"SectionImage\");\n$RefreshReg$(_c7, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4PzAwMDUiXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJTZWN0aW9uVGl0bGUiLCJoMyIsInRoZW1lIiwiY29sb3IiLCJmb250UHJpbWFyeSIsIlNlY3Rpb25UZXh0IiwicCIsIlNlY3Rpb25UZXh0Q29udGFpbmVyIiwiZGl2IiwiU2VjdGlvbkltYWdlQ29udGFpbmVyIiwicHJvY2VzcyIsIlNlY3Rpb25JbWFnZSIsImltZyIsIkRlc2NyaXB0aW9uIiwiaXNNb2JpbGUiLCJ1c2VEZXZpY2VEZXRlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLE9BQVE7Ozs7O0NBQS9CO0tBQU1GLE87QUFPTixNQUFNRyxZQUFZLEdBQUdGLHlEQUFNLENBQUNHLEVBQUc7OztXQUdwQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWTtDQUhsRDtNQUFNSixZO0FBTU4sTUFBTUssV0FBVyxHQUFHUCx5REFBTSxDQUFDUSxDQUFFOztDQUE3QjtNQUFNRCxXO0FBSU4sTUFBTUUsb0JBQW9CLEdBQUdULHlEQUFNLENBQUNVLEdBQUk7OztDQUF4QztNQUFNRCxvQjtBQUtOLE1BQU1FLHFCQUFxQixHQUFHWCx5REFBTSxDQUFDVSxHQUFJOzs7Ozs7Ozs7Ozs7dUJBWWxCRSxFQUF5Qjs7Ozs7Ozs7OztDQVpoRDtNQUFNRCxxQjtBQXdCTixNQUFNRSxZQUFZLEdBQUdiLHlEQUFNLENBQUNjLEdBQUk7OztDQUFoQztNQUFNRCxZO0FBS0MsTUFBTUUsV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFDL0IsUUFBTTtBQUFFQztBQUFGLE1BQWVDLHVHQUFlLEVBQXBDO0FBRUEsU0FDRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURwQixDQURGLEVBSUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlGQUFEO0FBQWMsVUFBTSxFQUFDLElBQXJCO0FBQTBCLGlCQUFhLEVBQUUsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUUsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscVBBRkYsQ0FERixDQURGLEVBWUUsTUFBQyxxQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxZQUFEO0FBQ0UsT0FBRyxFQUFDLGlCQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVMLEVBQXlCLCtCQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixDQUpGLEVBdUJFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxZQUFEO0FBQ0UsT0FBRyxFQUFDLGlCQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVBLEVBQXlCLGdDQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQU9FLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUZBQUQ7QUFBYyxVQUFNLEVBQUMsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUUsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMFRBRkYsQ0FERixDQVBGLENBdkJGLENBREY7QUE4Q0QsQ0FqRE07O0dBQU1HLFc7VUFDVUUsK0Y7OztNQURWRixXIiwiZmlsZSI6Ii4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlRGV2aWNlRGV0ZWN0IH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLWRldmljZS1kZXRlY3QvdXNlLWRldmljZS1kZXRlY3QuaG9vayc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbkNvbnRhaW5lciwgRGVzY3JpcHRpb25UaXRsZSB9IGZyb20gJy4vZGVzY3JpcHRpb24uc3R5bGVzJztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOdW1iZXJlZFRleHQgfSBmcm9tICcuLi8uLi9hYm91dC9udW1iZXJlZC10ZXh0L251bWJlcmVkLXRleHQuY29tcG9uZW50JztcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMzBweDtcbmA7XG5cbmNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oM2BcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5gO1xuXG5jb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDIxcHg7XG5gO1xuXG5jb25zdCBTZWN0aW9uVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1NSU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbmA7XG5cbmNvbnN0IFNlY3Rpb25JbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgnJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2hlcm8tcGF0dGVybi9mbG9hdGluZy1jb2dzLnN2ZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG5gO1xuXG5jb25zdCBTZWN0aW9uSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogODAlO1xuICB6LWluZGV4OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2VEZXRlY3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxEZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxEZXNjcmlwdGlvblRpdGxlIGlkPVwic2hhcmVcIj5cbiAgICAgICAgSG93IHRvIHNoYXJlIHlvdXIgPHNwYW4+a25vd2xlZGdlPC9zcGFuPlxuICAgICAgPC9EZXNjcmlwdGlvblRpdGxlPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8TnVtYmVyZWRUZXh0IG51bWJlcj1cIjAxXCIgcmlnaHRQb3NpdGlvbj17ZmFsc2V9PlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZT5DcmVhdGUgdGhlIGNvbnRlbnQ8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgSW5zaWRlIHNyYy9jb250ZW50L2FydGljbGVzIGRpcmVjdG9yeSBjcmVhdGUgYSBuZXcgbWFya2Rvd24gZmlsZSB3aXRoIHRoZVxuICAgICAgICAgICAgICBzZWxlY3RlZCBmaWxlbmFtZS4gSW5zaWRlIG1hcmtkb3duIGZpbGUsIFlvdSBjYW4gd3JpdGUgdGhlIGNvbnRlbnQgb2YgWW91clxuICAgICAgICAgICAgICBhcnRpY2xlLCByZW1lbWJlciBhcnRpY2xlIHRpdGxlLCBkZXNjcmlwdGlvbiwgYW5kIGltYWdlLCB3aWxsIGJlIGFkZGVkIGluXG4gICAgICAgICAgICAgIHRoZSBuZXh0IHN0ZXAuXG4gICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8L1NlY3Rpb25UZXh0Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxTZWN0aW9uSW1hZ2VcbiAgICAgICAgICAgIGFsdD1cImNvbnRlbnQgc2VjdGlvblwiXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvY29udHJpYnV0ZS9jb250ZW50LnN2Z2B9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWN0aW9uSW1hZ2VDb250YWluZXI+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25JbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8U2VjdGlvbkltYWdlXG4gICAgICAgICAgICBhbHQ9XCJjb250ZW50IHNlY3Rpb25cIlxuICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvbWV0YWRhdGEuc3ZnYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NlY3Rpb25JbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25UZXh0Q29udGFpbmVyPlxuICAgICAgICAgIDxOdW1iZXJlZFRleHQgbnVtYmVyPVwiMDJcIj5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGU+QWRkIHRlbXBsYXRlIG1ldGFkYXRhPC9TZWN0aW9uVGl0bGU+XG4gICAgICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgICAgIEdvIHRvIHNyYy9jb250ZW50L3RlbXBsYXRlcy5qc29uIGFuZCBhZGQgYSBuZXcgb2JqZWN0IHdpdGggcHJvcGVyIG1ldGFkYXRhXG4gICAgICAgICAgICAgIGZvciBZb3VyIGFydGljbGUsIHdoZXJlIGZpbGVOYW1lIGlzIGp1c3QgYSBwbGFpbiBuYW1lIHdpdGhvdXQgZXh0ZW5zaW9uIG9mXG4gICAgICAgICAgICAgIFlvdXIgYXJ0aWNsZSBjb250ZW50IG1hcmtkb3duIGZpbGUsIGltYWdlVXJsIGlzIGEgc3RhdGljIGZpbGUgdGFrZW4gZnJvbSB0aGVcbiAgICAgICAgICAgICAgcHVibGljIGRpcmVjdG9yeSBvciBkeW5hbWljIFVSTC4gTGFzdGx5LCBhZGQgWW91ciBuaWNrbmFtZSBpbiB0aGUgYXV0aG9yXG4gICAgICAgICAgICAgIGZpZWxkLlxuICAgICAgICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgICAgICA8L051bWJlcmVkVGV4dD5cbiAgICAgICAgPC9TZWN0aW9uVGV4dENvbnRhaW5lcj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/description/description.component.tsx\n");

/***/ })

})