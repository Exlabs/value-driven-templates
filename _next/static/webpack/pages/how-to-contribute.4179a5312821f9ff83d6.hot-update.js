webpackHotUpdate_N_E("pages/how-to-contribute",{

/***/ "./src/app/how-to-contribute/description/description.component.tsx":
/*!*************************************************************************!*\
  !*** ./src/app/how-to-contribute/description/description.component.tsx ***!
  \*************************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\n/* harmony import */ var _description_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description.styles */ \"./src/app/how-to-contribute/description/description.styles.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../about/numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/how-to-contribute/description/description.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section`\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 30px;\n`;\n_c = Section;\nconst SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3`\n  font-size: 33px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n`;\n_c2 = SectionTitle;\nconst SectionText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p`\n  font-size: 21px;\n`;\n_c3 = SectionText;\nconst SectionTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  width: 55%;\n  margin-right: 10px;\n`;\n_c4 = SectionTextContainer;\nconst SectionImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs(({\n  backgroundImage\n}) => ({\n  backgroundImage\n}))`\n  flex: 1;\n  position: relative;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::before {\n    content: '';\n    z-index: 0;\n    background: ${({\n  backgroundImage\n}) => url('${process.env.ASSET_PREFIX}/icons/hero-pattern/${backgroundImage}.svg')};\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.1;\n  }\n`;\n_c5 = SectionImageContainer;\nconst SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img`\n  width: 80%;\n  z-index: 1;\n`;\n_c6 = SectionImage;\nconst Description = () => {\n  _s();\n\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__[\"useDeviceDetect\"])();\n  return __jsx(_description_styles__WEBPACK_IMPORTED_MODULE_2__[\"DescriptionContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, __jsx(_description_styles__WEBPACK_IMPORTED_MODULE_2__[\"DescriptionTitle\"], {\n    id: \"share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, \"How to share your \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 27\n    }\n  }, \"knowledge\")), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"01\",\n    rightPosition: false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"Create the content\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.\"))), __jsx(SectionImageContainer, {\n    backgroundImage: \"floating-cogs\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/content.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }))), __jsx(Section, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(SectionImageContainer, {\n    backgroundImage: \"floating-cogs\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(SectionImage, {\n    alt: \"content section\",\n    src: `${\"\"}/icons/contribute/metadata.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  })), __jsx(SectionTextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_4__[\"NumberedText\"], {\n    number: \"02\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, __jsx(SectionTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, \"Add template metadata\"), __jsx(SectionText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, \"Go to src/content/templates.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.\")))));\n};\n\n_s(Description, \"zgkINSqbfc5el6iJHobgJqkLvZM=\", false, function () {\n  return [_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__[\"useDeviceDetect\"]];\n});\n\n_c7 = Description;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c2, \"SectionTitle\");\n$RefreshReg$(_c3, \"SectionText\");\n$RefreshReg$(_c4, \"SectionTextContainer\");\n$RefreshReg$(_c5, \"SectionImageContainer\");\n$RefreshReg$(_c6, \"SectionImage\");\n$RefreshReg$(_c7, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob3ctdG8tY29udHJpYnV0ZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4PzAwMDUiXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJTZWN0aW9uVGl0bGUiLCJoMyIsInRoZW1lIiwiY29sb3IiLCJmb250UHJpbWFyeSIsIlNlY3Rpb25UZXh0IiwicCIsIlNlY3Rpb25UZXh0Q29udGFpbmVyIiwiZGl2IiwiU2VjdGlvbkltYWdlQ29udGFpbmVyIiwiYXR0cnMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmwiLCJTZWN0aW9uSW1hZ2UiLCJpbWciLCJEZXNjcmlwdGlvbiIsImlzTW9iaWxlIiwidXNlRGV2aWNlRGV0ZWN0IiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsT0FBUTs7Ozs7Q0FBL0I7S0FBTUYsTztBQU9OLE1BQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0csRUFBRzs7O1dBR3BCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFZO0NBSGxEO01BQU1KLFk7QUFNTixNQUFNSyxXQUFXLEdBQUdQLHlEQUFNLENBQUNRLENBQUU7O0NBQTdCO01BQU1ELFc7QUFJTixNQUFNRSxvQkFBb0IsR0FBR1QseURBQU0sQ0FBQ1UsR0FBSTs7O0NBQXhDO01BQU1ELG9CO0FBS04sTUFBTUUscUJBQXFCLEdBQUdYLHlEQUFNLENBQUNVLEdBQVAsQ0FBV0UsS0FBWCxDQUM1QixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxNQUF1RDtBQUFFQTtBQUFGLENBQXZELENBRDRCLENBRTVCOzs7Ozs7Ozs7OztrQkFXZ0IsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FDWkMsR0FBRyxDQUFDLHVFQUFELENBQTBFOzs7Ozs7Ozs7O0NBZG5GO01BQU1ILHFCO0FBMEJOLE1BQU1JLFlBQVksR0FBR2YseURBQU0sQ0FBQ2dCLEdBQUk7OztDQUFoQztNQUFNRCxZO0FBS0MsTUFBTUUsV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFDL0IsUUFBTTtBQUFFQztBQUFGLE1BQWVDLHVHQUFlLEVBQXBDO0FBRUEsU0FDRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQWtCLE1BQUUsRUFBQyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURwQixDQURGLEVBSUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlGQUFEO0FBQWMsVUFBTSxFQUFDLElBQXJCO0FBQTBCLGlCQUFhLEVBQUUsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUUsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscVBBRkYsQ0FERixDQURGLEVBWUUsTUFBQyxxQkFBRDtBQUF1QixtQkFBZSxFQUFDLGVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFDRSxPQUFHLEVBQUMsaUJBRE47QUFFRSxPQUFHLEVBQUcsR0FBRUMsRUFBeUIsK0JBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVpGLENBSkYsRUF1QkUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFCQUFEO0FBQXVCLG1CQUFlLEVBQUMsZUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUNFLE9BQUcsRUFBQyxpQkFETjtBQUVFLE9BQUcsRUFBRyxHQUFFQSxFQUF5QixnQ0FGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFPRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlGQUFEO0FBQWMsVUFBTSxFQUFDLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBUQUZGLENBREYsQ0FQRixDQXZCRixDQURGO0FBOENELENBakRNOztHQUFNSCxXO1VBQ1VFLCtGOzs7TUFEVkYsVyIsImZpbGUiOiIuL3NyYy9hcHAvaG93LXRvLWNvbnRyaWJ1dGUvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZURldmljZURldGVjdCB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1kZXZpY2UtZGV0ZWN0L3VzZS1kZXZpY2UtZGV0ZWN0Lmhvb2snO1xuaW1wb3J0IHsgRGVzY3JpcHRpb25Db250YWluZXIsIERlc2NyaXB0aW9uVGl0bGUgfSBmcm9tICcuL2Rlc2NyaXB0aW9uLnN0eWxlcyc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTnVtYmVyZWRUZXh0IH0gZnJvbSAnLi4vLi4vYWJvdXQvbnVtYmVyZWQtdGV4dC9udW1iZXJlZC10ZXh0LmNvbXBvbmVudCc7XG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDMwcHg7XG5gO1xuXG5jb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDNgXG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuYDtcblxuY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAyMXB4O1xuYDtcblxuY29uc3QgU2VjdGlvblRleHRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTUlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5gO1xuXG5jb25zdCBTZWN0aW9uSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKFxuICAoeyBiYWNrZ3JvdW5kSW1hZ2UgfTogeyBiYWNrZ3JvdW5kSW1hZ2U6IHN0cmluZyB9KSA9PiAoeyBiYWNrZ3JvdW5kSW1hZ2UgfSlcbilgXG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IGJhY2tncm91bmRJbWFnZSB9KSA9PlxuICAgICAgdXJsKCcke3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvaGVyby1wYXR0ZXJuLyR7YmFja2dyb3VuZEltYWdlfS5zdmcnKX07XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbmA7XG5cbmNvbnN0IFNlY3Rpb25JbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA4MCU7XG4gIHotaW5kZXg6IDE7XG5gO1xuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZURldGVjdCgpO1xuXG4gIHJldHVybiAoXG4gICAgPERlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgPERlc2NyaXB0aW9uVGl0bGUgaWQ9XCJzaGFyZVwiPlxuICAgICAgICBIb3cgdG8gc2hhcmUgeW91ciA8c3Bhbj5rbm93bGVkZ2U8L3NwYW4+XG4gICAgICA8L0Rlc2NyaXB0aW9uVGl0bGU+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UZXh0Q29udGFpbmVyPlxuICAgICAgICAgIDxOdW1iZXJlZFRleHQgbnVtYmVyPVwiMDFcIiByaWdodFBvc2l0aW9uPXtmYWxzZX0+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlPkNyZWF0ZSB0aGUgY29udGVudDwvU2VjdGlvblRpdGxlPlxuICAgICAgICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICAgICAgICBJbnNpZGUgc3JjL2NvbnRlbnQvYXJ0aWNsZXMgZGlyZWN0b3J5IGNyZWF0ZSBhIG5ldyBtYXJrZG93biBmaWxlIHdpdGggdGhlXG4gICAgICAgICAgICAgIHNlbGVjdGVkIGZpbGVuYW1lLiBJbnNpZGUgbWFya2Rvd24gZmlsZSwgWW91IGNhbiB3cml0ZSB0aGUgY29udGVudCBvZiBZb3VyXG4gICAgICAgICAgICAgIGFydGljbGUsIHJlbWVtYmVyIGFydGljbGUgdGl0bGUsIGRlc2NyaXB0aW9uLCBhbmQgaW1hZ2UsIHdpbGwgYmUgYWRkZWQgaW5cbiAgICAgICAgICAgICAgdGhlIG5leHQgc3RlcC5cbiAgICAgICAgICAgIDwvU2VjdGlvblRleHQ+XG4gICAgICAgICAgPC9OdW1iZXJlZFRleHQ+XG4gICAgICAgIDwvU2VjdGlvblRleHRDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSW1hZ2VDb250YWluZXIgYmFja2dyb3VuZEltYWdlPVwiZmxvYXRpbmctY29nc1wiPlxuICAgICAgICAgIDxTZWN0aW9uSW1hZ2VcbiAgICAgICAgICAgIGFsdD1cImNvbnRlbnQgc2VjdGlvblwiXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvY29udHJpYnV0ZS9jb250ZW50LnN2Z2B9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWN0aW9uSW1hZ2VDb250YWluZXI+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25JbWFnZUNvbnRhaW5lciBiYWNrZ3JvdW5kSW1hZ2U9XCJmbG9hdGluZy1jb2dzXCI+XG4gICAgICAgICAgPFNlY3Rpb25JbWFnZVxuICAgICAgICAgICAgYWx0PVwiY29udGVudCBzZWN0aW9uXCJcbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9jb250cmlidXRlL21ldGFkYXRhLnN2Z2B9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWN0aW9uSW1hZ2VDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8TnVtYmVyZWRUZXh0IG51bWJlcj1cIjAyXCI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlPkFkZCB0ZW1wbGF0ZSBtZXRhZGF0YTwvU2VjdGlvblRpdGxlPlxuICAgICAgICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICAgICAgICBHbyB0byBzcmMvY29udGVudC90ZW1wbGF0ZXMuanNvbiBhbmQgYWRkIGEgbmV3IG9iamVjdCB3aXRoIHByb3BlciBtZXRhZGF0YVxuICAgICAgICAgICAgICBmb3IgWW91ciBhcnRpY2xlLCB3aGVyZSBmaWxlTmFtZSBpcyBqdXN0IGEgcGxhaW4gbmFtZSB3aXRob3V0IGV4dGVuc2lvbiBvZlxuICAgICAgICAgICAgICBZb3VyIGFydGljbGUgY29udGVudCBtYXJrZG93biBmaWxlLCBpbWFnZVVybCBpcyBhIHN0YXRpYyBmaWxlIHRha2VuIGZyb20gdGhlXG4gICAgICAgICAgICAgIHB1YmxpYyBkaXJlY3Rvcnkgb3IgZHluYW1pYyBVUkwuIExhc3RseSwgYWRkIFlvdXIgbmlja25hbWUgaW4gdGhlIGF1dGhvclxuICAgICAgICAgICAgICBmaWVsZC5cbiAgICAgICAgICAgIDwvU2VjdGlvblRleHQ+XG4gICAgICAgICAgPC9OdW1iZXJlZFRleHQ+XG4gICAgICAgIDwvU2VjdGlvblRleHRDb250YWluZXI+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9EZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/how-to-contribute/description/description.component.tsx\n");

/***/ })

})