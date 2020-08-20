webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/description/description.component.tsx":
/*!*************************************************************!*\
  !*** ./src/app/about/description/description.component.tsx ***!
  \*************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\n/* harmony import */ var _special_section_special_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../special-section/special-section.component */ \"./src/app/about/special-section/special-section.component.tsx\");\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/about/description/description.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article``;\n_c = DescriptionContainer;\nconst ExpertsHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3`\n  font-size: 27px;\n  margin-top: 80px;\n  font-weight: 700;\n  text-align: center;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    background-color: ${({\n  theme\n}) => theme.color.primary};\n    color: ${({\n  theme\n}) => theme.color.white};\n    padding: 0 10px;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 21px;\n  }\n`;\n_c2 = ExpertsHeading;\nconst FirstSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  & > .numbered-text {\n    flex: 1;\n    font-size: 21px;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 21px;\n    max-width: 100%;\n    text-align: center;\n    flex-direction: column;\n\n    & > .numbered-text {\n      font-size: 17px;\n    }\n  }\n`;\n_c3 = FirstSection;\nconst StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 45%;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    width: 100%;\n  }\n`;\n_c4 = StyledImage;\nconst ThirdSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  margin-top: 50px;\n  position: relative;\n  justify-content: flex-end;\n  min-height: 300px;\n\n  & > .numbered-text {\n    width: 60%;\n    font-size: 21px;\n  }\n\n  & > img {\n    position: absolute;\n    top: -160px;\n    left: -40px;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    flex-direction: column;\n    align-items: center;\n    margin-top: -70px;\n\n    & > .numbered-text {\n      width: 100%;\n      font-size: 17px;\n    }\n\n    & > img {\n      position: initial;\n    }\n  }\n`;\n_c5 = ThirdSection;\nconst FourthSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  margin-top: 40px;\n  display: flex;\n  align-items: flex-end;\n\n  & > .numbered-text {\n    width: 60%;\n    margin-bottom: 40px;\n    font-size: 21px;\n    font-weight: 700;\n\n    & > .exlabs-team {\n      display: block;\n      font-weight: 400;\n      margin-top: 10px;\n    }\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    flex-direction: column;\n  }\n`;\n_c6 = FourthSection;\nconst Description = () => {\n  return __jsx(DescriptionContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }\n  }, __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_4__[\"AppContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(ExpertsHeading, {\n    id: \"experts\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, \"Built by experts for \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 32\n    }\n  }, \"experts\")), __jsx(FirstSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }\n  }, __jsx(StyledImage, {\n    alt: \"Introduction\",\n    src: `${\"\"}/icons/rocket.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }), __jsx(_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n    number: \"01\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }, \"In digital-first world, effectiveness in delivering software initiatives is what makes or brakes organisations. Yet many IT teams suffer from lack of true alignment with business goals, which results in software becoming a cost generator instead of an assets. There\\u2019s now a handful number of resources and tools helping engineers improve software delivery performance, though most of them don\\u2019t fill the gap when it comes to match IT strategy with delivery.\"))), __jsx(_special_section_special_section_component__WEBPACK_IMPORTED_MODULE_3__[\"SpecialSection\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }\n  }), __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_4__[\"AppContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }\n  }, __jsx(ThirdSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, __jsx(StyledImage, {\n    alt: \"navigation\",\n    src: `${\"\"}/icons/navigation.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }), __jsx(_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n    number: \"03\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 11\n    }\n  }, \"Your enterprise\\u2019s software ecosystem is most likely very complex and you need a great roadmap to navigate it. In order to help organisations reduce waste and guess work, we\\u2019ve created a curated list of resources and frameworks we use in our day-to-day practice.\")), __jsx(FourthSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 9\n    }\n  }, __jsx(_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n    number: \"04\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 11\n    }\n  }, \"\\u201CWe believe the knowledge we share here will help IT groups improve their planning, delivery and maintenance processes, which would result in delivering software assets better suited for unique business needs.\\u201D\", __jsx(\"span\", {\n    className: \"exlabs-team\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }, \"- Exlabs Team\")), __jsx(StyledImage, {\n    alt: \"sharing\",\n    src: `${\"\"}/icons/sharing.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 11\n    }\n  }))));\n};\n_c7 = Description;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"DescriptionContainer\");\n$RefreshReg$(_c2, \"ExpertsHeading\");\n$RefreshReg$(_c3, \"FirstSection\");\n$RefreshReg$(_c4, \"StyledImage\");\n$RefreshReg$(_c5, \"ThirdSection\");\n$RefreshReg$(_c6, \"FourthSection\");\n$RefreshReg$(_c7, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4P2Y0MTMiXSwibmFtZXMiOlsiRGVzY3JpcHRpb25Db250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiRXhwZXJ0c0hlYWRpbmciLCJoMyIsInRoZW1lIiwiY29sb3IiLCJmb250UHJpbWFyeSIsInByaW1hcnkiLCJ3aGl0ZSIsImRldmljZUJyZWFrcG9pbnQiLCJtb2JpbGUiLCJGaXJzdFNlY3Rpb24iLCJzZWN0aW9uIiwiU3R5bGVkSW1hZ2UiLCJpbWciLCJUaGlyZFNlY3Rpb24iLCJGb3VydGhTZWN0aW9uIiwiRGVzY3JpcHRpb24iLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLG9CQUFvQixHQUFHQyx5REFBTSxDQUFDQyxPQUFRLEVBQTVDO0tBQU1GLG9CO0FBRU4sTUFBTUcsY0FBYyxHQUFHRix5REFBTSxDQUFDRyxFQUFHOzs7OztXQUt0QixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWTs7O3dCQUcxQixDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsT0FBUTthQUM5QyxDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsS0FBTTs7OztrQ0FJWixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLGdCQUFOLENBQXVCQyxNQUFPOzs7Q0FiL0U7TUFBTVIsYztBQWtCTixNQUFNUyxZQUFZLEdBQUdYLHlEQUFNLENBQUNZLE9BQVE7Ozs7Ozs7Ozs7a0NBVUYsQ0FBQztBQUFFUjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSyxnQkFBTixDQUF1QkMsTUFBTzs7Ozs7Ozs7OztDQVYvRTtNQUFNQyxZO0FBc0JOLE1BQU1FLFdBQVcsR0FBR2IseURBQU0sQ0FBQ2MsR0FBSTs7O2tDQUdHLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUJDLE1BQU87OztDQUgvRTtNQUFNRyxXO0FBUU4sTUFBTUUsWUFBWSxHQUFHZix5REFBTSxDQUFDWSxPQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBa0JGLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUJDLE1BQU87Ozs7Ozs7Ozs7Ozs7O0NBbEIvRTtNQUFNSyxZO0FBa0NOLE1BQU1DLGFBQWEsR0FBR2hCLHlEQUFNLENBQUNZLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FrQkgsQ0FBQztBQUFFUjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSyxnQkFBTixDQUF1QkMsTUFBTzs7O0NBbEIvRTtNQUFNTSxhO0FBdUJDLE1BQU1DLFdBQVcsR0FBRyxNQUFNO0FBQy9CLFNBQ0UsTUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxjQUFEO0FBQWdCLE1BQUUsRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHZCLENBREYsRUFJRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUNFLE9BQUcsRUFBQyxjQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVDLEVBQXlCLG1CQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxNQUFDLG1GQUFEO0FBQWMsVUFBTSxFQUFDLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMmRBTEYsQ0FKRixDQURGLEVBb0JFLE1BQUMseUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixFQXFCRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVBLEVBQXlCLHVCQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxNQUFDLG1GQUFEO0FBQWMsVUFBTSxFQUFDLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdVJBTEYsQ0FERixFQWFFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRkFBRDtBQUFjLFVBQU0sRUFBQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFPQUlFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsQ0FERixFQU9FLE1BQUMsV0FBRDtBQUNFLE9BQUcsRUFBQyxTQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVBLEVBQXlCLG9CQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FiRixDQXJCRixDQURGO0FBa0RELENBbkRNO01BQU1ELFciLCJmaWxlIjoiLi9zcmMvYXBwL2Fib3V0L2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOdW1iZXJlZFRleHQgfSBmcm9tICcuLi9udW1iZXJlZC10ZXh0L251bWJlcmVkLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFNwZWNpYWxTZWN0aW9uIH0gZnJvbSAnLi4vc3BlY2lhbC1zZWN0aW9uL3NwZWNpYWwtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2xheW91dC5wcm92aWRlcic7XG5cbmNvbnN0IERlc2NyaXB0aW9uQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgYDtcblxuY29uc3QgRXhwZXJ0c0hlYWRpbmcgPSBzdHlsZWQuaDNgXG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5cbiAgJiA+IHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeX07XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iud2hpdGV9O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG5gO1xuXG5jb25zdCBGaXJzdFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgPiAubnVtYmVyZWQtdGV4dCB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmID4gLm51bWJlcmVkLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNDUlO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFRoaXJkU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuXG4gICYgPiAubnVtYmVyZWQtdGV4dCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cblxuICAmID4gaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTYwcHg7XG4gICAgbGVmdDogLTQwcHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcblxuICAgICYgPiAubnVtYmVyZWQtdGV4dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG5cbiAgICAmID4gaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRm91cnRoU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgJiA+IC5udW1iZXJlZC10ZXh0IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICAmID4gLmV4bGFicy10ZWFtIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgPEV4cGVydHNIZWFkaW5nIGlkPVwiZXhwZXJ0c1wiPlxuICAgICAgICAgIEJ1aWx0IGJ5IGV4cGVydHMgZm9yIDxzcGFuPmV4cGVydHM8L3NwYW4+XG4gICAgICAgIDwvRXhwZXJ0c0hlYWRpbmc+XG4gICAgICAgIDxGaXJzdFNlY3Rpb24+XG4gICAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgICBhbHQ9XCJJbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL3JvY2tldC5zdmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE51bWJlcmVkVGV4dCBudW1iZXI9XCIwMVwiPlxuICAgICAgICAgICAgSW4gZGlnaXRhbC1maXJzdCB3b3JsZCwgZWZmZWN0aXZlbmVzcyBpbiBkZWxpdmVyaW5nIHNvZnR3YXJlIGluaXRpYXRpdmVzIGlzXG4gICAgICAgICAgICB3aGF0IG1ha2VzIG9yIGJyYWtlcyBvcmdhbmlzYXRpb25zLiBZZXQgbWFueSBJVCB0ZWFtcyBzdWZmZXIgZnJvbSBsYWNrIG9mIHRydWVcbiAgICAgICAgICAgIGFsaWdubWVudCB3aXRoIGJ1c2luZXNzIGdvYWxzLCB3aGljaCByZXN1bHRzIGluIHNvZnR3YXJlIGJlY29taW5nIGEgY29zdFxuICAgICAgICAgICAgZ2VuZXJhdG9yIGluc3RlYWQgb2YgYW4gYXNzZXRzLiBUaGVyZeKAmXMgbm93IGEgaGFuZGZ1bCBudW1iZXIgb2YgcmVzb3VyY2VzIGFuZFxuICAgICAgICAgICAgdG9vbHMgaGVscGluZyBlbmdpbmVlcnMgaW1wcm92ZSBzb2Z0d2FyZSBkZWxpdmVyeSBwZXJmb3JtYW5jZSwgdGhvdWdoIG1vc3Qgb2ZcbiAgICAgICAgICAgIHRoZW0gZG9u4oCZdCBmaWxsIHRoZSBnYXAgd2hlbiBpdCBjb21lcyB0byBtYXRjaCBJVCBzdHJhdGVneSB3aXRoIGRlbGl2ZXJ5LlxuICAgICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8L0ZpcnN0U2VjdGlvbj5cbiAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgPFNwZWNpYWxTZWN0aW9uIC8+XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8VGhpcmRTZWN0aW9uPlxuICAgICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgICAgYWx0PVwibmF2aWdhdGlvblwiXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvbmF2aWdhdGlvbi5zdmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE51bWJlcmVkVGV4dCBudW1iZXI9XCIwM1wiPlxuICAgICAgICAgICAgWW91ciBlbnRlcnByaXNl4oCZcyBzb2Z0d2FyZSBlY29zeXN0ZW0gaXMgbW9zdCBsaWtlbHkgdmVyeSBjb21wbGV4IGFuZCB5b3UgbmVlZFxuICAgICAgICAgICAgYSBncmVhdCByb2FkbWFwIHRvIG5hdmlnYXRlIGl0LiBJbiBvcmRlciB0byBoZWxwIG9yZ2FuaXNhdGlvbnMgcmVkdWNlIHdhc3RlXG4gICAgICAgICAgICBhbmQgZ3Vlc3Mgd29yaywgd2XigJl2ZSBjcmVhdGVkIGEgY3VyYXRlZCBsaXN0IG9mIHJlc291cmNlcyBhbmQgZnJhbWV3b3JrcyB3ZVxuICAgICAgICAgICAgdXNlIGluIG91ciBkYXktdG8tZGF5IHByYWN0aWNlLlxuICAgICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8L1RoaXJkU2VjdGlvbj5cbiAgICAgICAgPEZvdXJ0aFNlY3Rpb24+XG4gICAgICAgICAgPE51bWJlcmVkVGV4dCBudW1iZXI9XCIwNFwiPlxuICAgICAgICAgICAg4oCcV2UgYmVsaWV2ZSB0aGUga25vd2xlZGdlIHdlIHNoYXJlIGhlcmUgd2lsbCBoZWxwIElUIGdyb3VwcyBpbXByb3ZlIHRoZWlyXG4gICAgICAgICAgICBwbGFubmluZywgZGVsaXZlcnkgYW5kIG1haW50ZW5hbmNlIHByb2Nlc3Nlcywgd2hpY2ggd291bGQgcmVzdWx0IGluIGRlbGl2ZXJpbmdcbiAgICAgICAgICAgIHNvZnR3YXJlIGFzc2V0cyBiZXR0ZXIgc3VpdGVkIGZvciB1bmlxdWUgYnVzaW5lc3MgbmVlZHMu4oCdXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJleGxhYnMtdGVhbVwiPi0gRXhsYWJzIFRlYW08L3NwYW4+XG4gICAgICAgICAgPC9OdW1iZXJlZFRleHQ+XG4gICAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgICBhbHQ9XCJzaGFyaW5nXCJcbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9zaGFyaW5nLnN2Z2B9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3VydGhTZWN0aW9uPlxuICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgPC9EZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/about/description/description.component.tsx\n");

/***/ })

})