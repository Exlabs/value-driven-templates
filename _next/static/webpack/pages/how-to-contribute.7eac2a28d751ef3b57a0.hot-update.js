webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/description/description.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/app/how-to-contribute/description/description.component.tsx ***!
  \*************************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\n/* harmony import */ var _description_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description.styles */ \"./src/app/how-to-contribute/description/description.styles.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../about/numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/how-to-contribute/description/description.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section`\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 80px 0;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    flex-direction: column-reverse;\n  }\n`;\n_c = Section;\nconst SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3`\n  font-size: 33px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n`;\n_c2 = SectionTitle;\nconst SectionText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p`\n  font-size: 21px;\n`;\n_c3 = SectionText;\nconst SectionTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  width: 55%;\n`;\n_c4 = SectionTextContainer;\nconst SectionImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs(({\n  backgroundImage\n}) => ({\n  backgroundImage\n}))`\n  width: 40%;\n  position: relative;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::before {\n    content: '';\n    z-index: 0;\n    background: ${({\n  backgroundImage\n}) => `url('${\"\"}/icons/hero-pattern/${backgroundImage}.svg')`};\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.1;\n  }\n`;\n_c5 = SectionImageContainer;\nconst SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img`\n  width: 80%;\n  z-index: 1;\n`;\n_c6 = SectionImage;\nconst Description = () => {\n  _s();\n\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__[\"useDeviceDetect\"])();\n  return __jsx(_description_styles__WEBPACK_IMPORTED_MODULE_2__[\"DescriptionContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(_description_styles__WEBPACK_IMPORTED_MODULE_2__[\"DescriptionTitle\"], {\n    id: \"share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, \"How to share your \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 27\n    }\n  }, \"knowledge\")), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"01\",\n    rightPosition: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, \"Create the content\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.\"))), __jsx(SectionImageContainer, {\n    backgroundImage: \"floating-cogs\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/content.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }))), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(SectionImageContainer, {\n    backgroundImage: \"circuit-board\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/metadata.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  })), __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"02\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, \"Add template metadata\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, \"Go to src/content/templates.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.\")))), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"03\",\n    rightPosition: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, \"Pull Request\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, \"That\\u2019s it! Well done, now You can create a new Pull Request and wait for approval!\"))), __jsx(SectionImageContainer, {\n    backgroundImage: \"glamorous\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/pr.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Description, \"zgkINSqbfc5el6iJHobgJqkLvZM=\", false, function () {\n  return [_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__[\"useDeviceDetect\"]];\n});\n\n_c7 = Description;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c2, \"SectionTitle\");\n$RefreshReg$(_c3, \"SectionText\");\n$RefreshReg$(_c4, \"SectionTextContainer\");\n$RefreshReg$(_c5, \"SectionImageContainer\");\n$RefreshReg$(_c6, \"SectionImage\");\n$RefreshReg$(_c7, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4PzAwMDUiXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJ0aGVtZSIsImRldmljZUJyZWFrcG9pbnQiLCJtb2JpbGUiLCJTZWN0aW9uVGl0bGUiLCJoMyIsImNvbG9yIiwiZm9udFByaW1hcnkiLCJTZWN0aW9uVGV4dCIsInAiLCJTZWN0aW9uVGV4dENvbnRhaW5lciIsImRpdiIsIlNlY3Rpb25JbWFnZUNvbnRhaW5lciIsImF0dHJzIiwiYmFja2dyb3VuZEltYWdlIiwicHJvY2VzcyIsIlNlY3Rpb25JbWFnZSIsImltZyIsIkRlc2NyaXB0aW9uIiwiaXNNb2JpbGUiLCJ1c2VEZXZpY2VEZXRlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLE9BQVE7Ozs7OztrQ0FNRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7Q0FOL0U7S0FBTUwsTztBQVdOLE1BQU1NLFlBQVksR0FBR0wseURBQU0sQ0FBQ00sRUFBRzs7O1dBR3BCLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFZO0NBSGxEO01BQU1ILFk7QUFNTixNQUFNSSxXQUFXLEdBQUdULHlEQUFNLENBQUNVLENBQUU7O0NBQTdCO01BQU1ELFc7QUFJTixNQUFNRSxvQkFBb0IsR0FBR1gseURBQU0sQ0FBQ1ksR0FBSTs7Q0FBeEM7TUFBTUQsb0I7QUFJTixNQUFNRSxxQkFBcUIsR0FBR2IseURBQU0sQ0FBQ1ksR0FBUCxDQUFXRSxLQUFYLENBQzVCLENBQUM7QUFBRUM7QUFBRixDQUFELE1BQXVEO0FBQUVBO0FBQUYsQ0FBdkQs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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxZQUFEO0FBQ0UsT0FBRyxFQUFDLGlCQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVBLEVBQXlCLDBCQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FWRixDQTNDRixDQURGO0FBK0RELENBbEVNOztHQUFNRyxXO1VBQ1VFLCtGOzs7TUFEVkYsVyIsImZpbGUiOiIuL3NyYy9hcHAvaG93LXRvLWNvbnRyaWJ1dGUvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZURldmljZURldGVjdCB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1kZXZpY2UtZGV0ZWN0L3VzZS1kZXZpY2UtZGV0ZWN0Lmhvb2snO1xuaW1wb3J0IHsgRGVzY3JpcHRpb25Db250YWluZXIsIERlc2NyaXB0aW9uVGl0bGUgfSBmcm9tICcuL2Rlc2NyaXB0aW9uLnN0eWxlcyc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTnVtYmVyZWRUZXh0IH0gZnJvbSAnLi4vLi4vYWJvdXQvbnVtYmVyZWQtdGV4dC9udW1iZXJlZC10ZXh0LmNvbXBvbmVudCc7XG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDgwcHggMDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuYDtcblxuY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgzYFxuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRQcmltYXJ5fTtcbmA7XG5cbmNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMjFweDtcbmA7XG5cbmNvbnN0IFNlY3Rpb25UZXh0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDU1JTtcbmA7XG5cbmNvbnN0IFNlY3Rpb25JbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoXG4gICh7IGJhY2tncm91bmRJbWFnZSB9OiB7IGJhY2tncm91bmRJbWFnZTogc3RyaW5nIH0pID0+ICh7IGJhY2tncm91bmRJbWFnZSB9KVxuKWBcbiAgd2lkdGg6IDQwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQ6ICR7KHsgYmFja2dyb3VuZEltYWdlIH0pID0+XG4gICAgICBgdXJsKCcke3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvaGVyby1wYXR0ZXJuLyR7YmFja2dyb3VuZEltYWdlfS5zdmcnKWB9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG5gO1xuXG5jb25zdCBTZWN0aW9uSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogODAlO1xuICB6LWluZGV4OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2VEZXRlY3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxEZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxEZXNjcmlwdGlvblRpdGxlIGlkPVwic2hhcmVcIj5cbiAgICAgICAgSG93IHRvIHNoYXJlIHlvdXIgPHNwYW4+a25vd2xlZGdlPC9zcGFuPlxuICAgICAgPC9EZXNjcmlwdGlvblRpdGxlPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8TnVtYmVyZWRUZXh0IG51bWJlcj1cIjAxXCIgcmlnaHRQb3NpdGlvbj17ZmFsc2V9PlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZT5DcmVhdGUgdGhlIGNvbnRlbnQ8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgSW5zaWRlIHNyYy9jb250ZW50L2FydGljbGVzIGRpcmVjdG9yeSBjcmVhdGUgYSBuZXcgbWFya2Rvd24gZmlsZSB3aXRoIHRoZVxuICAgICAgICAgICAgICBzZWxlY3RlZCBmaWxlbmFtZS4gSW5zaWRlIG1hcmtkb3duIGZpbGUsIFlvdSBjYW4gd3JpdGUgdGhlIGNvbnRlbnQgb2YgWW91clxuICAgICAgICAgICAgICBhcnRpY2xlLCByZW1lbWJlciBhcnRpY2xlIHRpdGxlLCBkZXNjcmlwdGlvbiwgYW5kIGltYWdlLCB3aWxsIGJlIGFkZGVkIGluXG4gICAgICAgICAgICAgIHRoZSBuZXh0IHN0ZXAuXG4gICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8L1NlY3Rpb25UZXh0Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkltYWdlQ29udGFpbmVyIGJhY2tncm91bmRJbWFnZT1cImZsb2F0aW5nLWNvZ3NcIj5cbiAgICAgICAgICA8U2VjdGlvbkltYWdlXG4gICAgICAgICAgICBhbHQ9XCJjb250ZW50IHNlY3Rpb25cIlxuICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2NvbnRyaWJ1dGUvY29udGVudC5zdmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2VjdGlvbkltYWdlQ29udGFpbmVyPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uSW1hZ2VDb250YWluZXIgYmFja2dyb3VuZEltYWdlPVwiY2lyY3VpdC1ib2FyZFwiPlxuICAgICAgICAgIDxTZWN0aW9uSW1hZ2VcbiAgICAgICAgICAgIGFsdD1cImNvbnRlbnQgc2VjdGlvblwiXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvY29udHJpYnV0ZS9tZXRhZGF0YS5zdmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2VjdGlvbkltYWdlQ29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvblRleHRDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcmVkVGV4dCBudW1iZXI9XCIwMlwiPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZT5BZGQgdGVtcGxhdGUgbWV0YWRhdGE8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgR28gdG8gc3JjL2NvbnRlbnQvdGVtcGxhdGVzLmpzb24gYW5kIGFkZCBhIG5ldyBvYmplY3Qgd2l0aCBwcm9wZXIgbWV0YWRhdGFcbiAgICAgICAgICAgICAgZm9yIFlvdXIgYXJ0aWNsZSwgd2hlcmUgZmlsZU5hbWUgaXMganVzdCBhIHBsYWluIG5hbWUgd2l0aG91dCBleHRlbnNpb24gb2ZcbiAgICAgICAgICAgICAgWW91ciBhcnRpY2xlIGNvbnRlbnQgbWFya2Rvd24gZmlsZSwgaW1hZ2VVcmwgaXMgYSBzdGF0aWMgZmlsZSB0YWtlbiBmcm9tIHRoZVxuICAgICAgICAgICAgICBwdWJsaWMgZGlyZWN0b3J5IG9yIGR5bmFtaWMgVVJMLiBMYXN0bHksIGFkZCBZb3VyIG5pY2tuYW1lIGluIHRoZSBhdXRob3JcbiAgICAgICAgICAgICAgZmllbGQuXG4gICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8L1NlY3Rpb25UZXh0Q29udGFpbmVyPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8TnVtYmVyZWRUZXh0IG51bWJlcj1cIjAzXCIgcmlnaHRQb3NpdGlvbj17ZmFsc2V9PlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZT5QdWxsIFJlcXVlc3Q8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgVGhhdOKAmXMgaXQhIFdlbGwgZG9uZSwgbm93IFlvdSBjYW4gY3JlYXRlIGEgbmV3IFB1bGwgUmVxdWVzdCBhbmQgd2FpdCBmb3JcbiAgICAgICAgICAgICAgYXBwcm92YWwhXG4gICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8L1NlY3Rpb25UZXh0Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkltYWdlQ29udGFpbmVyIGJhY2tncm91bmRJbWFnZT1cImdsYW1vcm91c1wiPlxuICAgICAgICAgIDxTZWN0aW9uSW1hZ2VcbiAgICAgICAgICAgIGFsdD1cImNvbnRlbnQgc2VjdGlvblwiXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvY29udHJpYnV0ZS9wci5zdmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2VjdGlvbkltYWdlQ29udGFpbmVyPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvRGVzY3JpcHRpb25Db250YWluZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/description/description.component.tsx\n");

/***/ })

})