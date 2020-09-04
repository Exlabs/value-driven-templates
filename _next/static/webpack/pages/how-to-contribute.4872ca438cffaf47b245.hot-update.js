webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/description/description.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/app/how-to-contribute/description/description.component.tsx ***!
  \*************************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\n/* harmony import */ var _description_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description.styles */ \"./src/app/how-to-contribute/description/description.styles.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../about/numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/how-to-contribute/description/description.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section`\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 60px;\n`;\n_c = Section;\nconst SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3`\n  font-size: 33px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n`;\n_c2 = SectionTitle;\nconst SectionText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p`\n  font-size: 21px;\n`;\n_c3 = SectionText;\nconst SectionTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  width: 55%;\n`;\n_c4 = SectionTextContainer;\nconst SectionImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs(({\n  backgroundImage\n}) => ({\n  backgroundImage\n}))`\n  width: 40%;\n  position: relative;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::before {\n    content: '';\n    z-index: 0;\n    background: ${({\n  backgroundImage\n}) => `url('${\"\"}/icons/hero-pattern/${backgroundImage}.svg')`};\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.1;\n  }\n`;\n_c5 = SectionImageContainer;\nconst SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img`\n  width: 80%;\n  z-index: 1;\n`;\n_c6 = SectionImage;\nconst Description = () => {\n  _s();\n\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__[\"useDeviceDetect\"])();\n  return __jsx(_description_styles__WEBPACK_IMPORTED_MODULE_2__[\"DescriptionContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(_description_styles__WEBPACK_IMPORTED_MODULE_2__[\"DescriptionTitle\"], {\n    id: \"share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"How to share your \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 27\n    }\n  }, \"knowledge\")), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"01\",\n    rightPosition: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Create the content\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.\"))), __jsx(SectionImageContainer, {\n    backgroundImage: \"floating-cogs\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/content.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }))), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(SectionImageContainer, {\n    backgroundImage: \"circuit-board\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/metadata.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  })), __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"02\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, \"Add template metadata\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, \"Go to src/content/templates.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.\")))), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }, __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"03\",\n    rightPosition: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"Pull Request\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, \"That\\u2019s it! Well done, now You can create a new Pull Request and wait for approval!\"))), __jsx(SectionImageContainer, {\n    backgroundImage: \"glamorous\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/pr.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Description, \"zgkINSqbfc5el6iJHobgJqkLvZM=\", false, function () {\n  return [_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__[\"useDeviceDetect\"]];\n});\n\n_c7 = Description;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c2, \"SectionTitle\");\n$RefreshReg$(_c3, \"SectionText\");\n$RefreshReg$(_c4, \"SectionTextContainer\");\n$RefreshReg$(_c5, \"SectionImageContainer\");\n$RefreshReg$(_c6, \"SectionImage\");\n$RefreshReg$(_c7, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4PzAwMDUiXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJTZWN0aW9uVGl0bGUiLCJoMyIsInRoZW1lIiwiY29sb3IiLCJmb250UHJpbWFyeSIsIlNlY3Rpb25UZXh0IiwicCIsIlNlY3Rpb25UZXh0Q29udGFpbmVyIiwiZGl2IiwiU2VjdGlvbkltYWdlQ29udGFpbmVyIiwiYXR0cnMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9jZXNzIiwiU2VjdGlvbkltYWdlIiwiaW1nIiwiRGVzY3JpcHRpb24iLCJpc01vYmlsZSIsInVzZURldmljZURldGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsT0FBUTs7Ozs7Q0FBL0I7S0FBTUYsTztBQU9OLE1BQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0csRUFBRzs7O1dBR3BCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFZO0NBSGxEO01BQU1KLFk7QUFNTixNQUFNSyxXQUFXLEdBQUdQLHlEQUFNLENBQUNRLENBQUU7O0NBQTdCO01BQU1ELFc7QUFJTixNQUFNRSxvQkFBb0IsR0FBR1QseURBQU0sQ0FBQ1UsR0FBSTs7Q0FBeEM7TUFBTUQsb0I7QUFJTixNQUFNRSxxQkFBcUIsR0FBR1gseURBQU0sQ0FBQ1UsR0FBUCxDQUFXRSxLQUFYLENBQzVCLENBQUM7QUFBRUM7QUFBRixDQUFELE1BQXVEO0FBQUVBO0FBQUYsQ0FBdkQsQ0FENEIsQ0FFNUI7Ozs7Ozs7Ozs7O2tCQVdnQixDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUNYLFFBQU9DLEVBQXlCLHVCQUFzQkQsZUFBZ0IsUUFBUTs7Ozs7Ozs7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLENBM0NGLENBREY7QUErREQsQ0FsRU07O0dBQU1HLFc7VUFDVUUsK0Y7OztNQURWRixXIiwiZmlsZSI6Ii4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlRGV2aWNlRGV0ZWN0IH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLWRldmljZS1kZXRlY3QvdXNlLWRldmljZS1kZXRlY3QuaG9vayc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbkNvbnRhaW5lciwgRGVzY3JpcHRpb25UaXRsZSB9IGZyb20gJy4vZGVzY3JpcHRpb24uc3R5bGVzJztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOdW1iZXJlZFRleHQgfSBmcm9tICcuLi8uLi9hYm91dC9udW1iZXJlZC10ZXh0L251bWJlcmVkLXRleHQuY29tcG9uZW50JztcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogNjBweDtcbmA7XG5cbmNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oM2BcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5gO1xuXG5jb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDIxcHg7XG5gO1xuXG5jb25zdCBTZWN0aW9uVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1NSU7XG5gO1xuXG5jb25zdCBTZWN0aW9uSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKFxuICAoeyBiYWNrZ3JvdW5kSW1hZ2UgfTogeyBiYWNrZ3JvdW5kSW1hZ2U6IHN0cmluZyB9KSA9PiAoeyBiYWNrZ3JvdW5kSW1hZ2UgfSlcbilgXG4gIHdpZHRoOiA0MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IGJhY2tncm91bmRJbWFnZSB9KSA9PlxuICAgICAgYHVybCgnJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2hlcm8tcGF0dGVybi8ke2JhY2tncm91bmRJbWFnZX0uc3ZnJylgfTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgfVxuYDtcblxuY29uc3QgU2VjdGlvbkltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDgwJTtcbiAgei1pbmRleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICA8RGVzY3JpcHRpb25UaXRsZSBpZD1cInNoYXJlXCI+XG4gICAgICAgIEhvdyB0byBzaGFyZSB5b3VyIDxzcGFuPmtub3dsZWRnZTwvc3Bhbj5cbiAgICAgIDwvRGVzY3JpcHRpb25UaXRsZT5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8U2VjdGlvblRleHRDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcmVkVGV4dCBudW1iZXI9XCIwMVwiIHJpZ2h0UG9zaXRpb249e2ZhbHNlfT5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGU+Q3JlYXRlIHRoZSBjb250ZW50PC9TZWN0aW9uVGl0bGU+XG4gICAgICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgICAgIEluc2lkZSBzcmMvY29udGVudC9hcnRpY2xlcyBkaXJlY3RvcnkgY3JlYXRlIGEgbmV3IG1hcmtkb3duIGZpbGUgd2l0aCB0aGVcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgZmlsZW5hbWUuIEluc2lkZSBtYXJrZG93biBmaWxlLCBZb3UgY2FuIHdyaXRlIHRoZSBjb250ZW50IG9mIFlvdXJcbiAgICAgICAgICAgICAgYXJ0aWNsZSwgcmVtZW1iZXIgYXJ0aWNsZSB0aXRsZSwgZGVzY3JpcHRpb24sIGFuZCBpbWFnZSwgd2lsbCBiZSBhZGRlZCBpblxuICAgICAgICAgICAgICB0aGUgbmV4dCBzdGVwLlxuICAgICAgICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgICAgICA8L051bWJlcmVkVGV4dD5cbiAgICAgICAgPC9TZWN0aW9uVGV4dENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25JbWFnZUNvbnRhaW5lciBiYWNrZ3JvdW5kSW1hZ2U9XCJmbG9hdGluZy1jb2dzXCI+XG4gICAgICAgICAgPFNlY3Rpb25JbWFnZVxuICAgICAgICAgICAgYWx0PVwiY29udGVudCBzZWN0aW9uXCJcbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9jb250cmlidXRlL2NvbnRlbnQuc3ZnYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NlY3Rpb25JbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8U2VjdGlvbkltYWdlQ29udGFpbmVyIGJhY2tncm91bmRJbWFnZT1cImNpcmN1aXQtYm9hcmRcIj5cbiAgICAgICAgICA8U2VjdGlvbkltYWdlXG4gICAgICAgICAgICBhbHQ9XCJjb250ZW50IHNlY3Rpb25cIlxuICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvbWV0YWRhdGEuc3ZnYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NlY3Rpb25JbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25UZXh0Q29udGFpbmVyPlxuICAgICAgICAgIDxOdW1iZXJlZFRleHQgbnVtYmVyPVwiMDJcIj5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGU+QWRkIHRlbXBsYXRlIG1ldGFkYXRhPC9TZWN0aW9uVGl0bGU+XG4gICAgICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgICAgIEdvIHRvIHNyYy9jb250ZW50L3RlbXBsYXRlcy5qc29uIGFuZCBhZGQgYSBuZXcgb2JqZWN0IHdpdGggcHJvcGVyIG1ldGFkYXRhXG4gICAgICAgICAgICAgIGZvciBZb3VyIGFydGljbGUsIHdoZXJlIGZpbGVOYW1lIGlzIGp1c3QgYSBwbGFpbiBuYW1lIHdpdGhvdXQgZXh0ZW5zaW9uIG9mXG4gICAgICAgICAgICAgIFlvdXIgYXJ0aWNsZSBjb250ZW50IG1hcmtkb3duIGZpbGUsIGltYWdlVXJsIGlzIGEgc3RhdGljIGZpbGUgdGFrZW4gZnJvbSB0aGVcbiAgICAgICAgICAgICAgcHVibGljIGRpcmVjdG9yeSBvciBkeW5hbWljIFVSTC4gTGFzdGx5LCBhZGQgWW91ciBuaWNrbmFtZSBpbiB0aGUgYXV0aG9yXG4gICAgICAgICAgICAgIGZpZWxkLlxuICAgICAgICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgICAgICA8L051bWJlcmVkVGV4dD5cbiAgICAgICAgPC9TZWN0aW9uVGV4dENvbnRhaW5lcj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8U2VjdGlvblRleHRDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcmVkVGV4dCBudW1iZXI9XCIwM1wiIHJpZ2h0UG9zaXRpb249e2ZhbHNlfT5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGU+UHVsbCBSZXF1ZXN0PC9TZWN0aW9uVGl0bGU+XG4gICAgICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgICAgIFRoYXTigJlzIGl0ISBXZWxsIGRvbmUsIG5vdyBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBQdWxsIFJlcXVlc3QgYW5kIHdhaXQgZm9yXG4gICAgICAgICAgICAgIGFwcHJvdmFsIVxuICAgICAgICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgICAgICA8L051bWJlcmVkVGV4dD5cbiAgICAgICAgPC9TZWN0aW9uVGV4dENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25JbWFnZUNvbnRhaW5lciBiYWNrZ3JvdW5kSW1hZ2U9XCJnbGFtb3JvdXNcIj5cbiAgICAgICAgICA8U2VjdGlvbkltYWdlXG4gICAgICAgICAgICBhbHQ9XCJjb250ZW50IHNlY3Rpb25cIlxuICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvcHIuc3ZnYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NlY3Rpb25JbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/description/description.component.tsx\n");

/***/ })

})