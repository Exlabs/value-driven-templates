webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/footer/footer.component.tsx":
/*!********************************************!*\
  !*** ./src/ui/footer/footer.component.tsx ***!
  \********************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _link_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/link.component */ \"./src/ui/link/link.component.tsx\");\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/ui/footer/footer.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer`\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  border-top: 2px dashed ${({\n  theme\n}) => theme.color.gray300};\n  padding-top: 20px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n`;\n_c = StyledFooter;\nconst PoweredByContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  flex: 1;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n`;\n_c2 = PoweredByContainer;\nconst PoweredByTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h4`\n  font-weight: 700;\n  font-size: 31px;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 21px;\n    text-align: center;\n  }\n`;\n_c3 = PoweredByTitle;\nconst PoweredByDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p`\n  color: ${({\n  theme\n}) => theme.color.fontSecondary};\n  font-size: 23px;\n  max-width: 70%;\n  margin-top: 5px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 17px;\n    text-align: center;\n  }\n`;\n_c4 = PoweredByDescription;\nconst SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  margin-top: 30px;\n\n  & a {\n    margin: 0 8px;\n\n    @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n      font-size: 12px;\n    }\n  }\n\n  & a:first-child {\n    margin-left: 0;\n  }\n`;\n_c5 = SocialContainer;\nconst SocialLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_link_link_component__WEBPACK_IMPORTED_MODULE_2__[\"Link\"])``;\n_c6 = SocialLink;\nconst SocialIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 40px;\n`;\n_c7 = SocialIcon;\nconst ActionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin-top: 20px;\n    align-items: center;\n    justify-content: center;\n  }\n`;\n_c8 = ActionsContainer;\nconst ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  width: 100%;\n  display: flex;\n  & a {\n    display: block;\n    a {\n      padding: 15px 40px;\n    }\n  }\n\n  & > a:first-child {\n    margin-right: 10px;\n  }\n`;\n_c9 = ButtonsContainer;\nconst Copyright = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p`\n  font-weight: 500;\n  font-size: 17px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin-top: 10px;\n  }\n`;\n_c10 = Copyright;\nconst Footer = () => {\n  _s();\n\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__[\"useDeviceDetect\"])();\n\n  const socials = __jsx(SocialContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 5\n    }\n  }, __jsx(SocialLink, {\n    external: true,\n    href: \"https://www.facebook.com/exlabs/\",\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }, __jsx(SocialIcon, {\n    src: `${\"\"}/icons/social/facebook.svg`,\n    alt: \"Facebook\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  })), __jsx(SocialLink, {\n    external: true,\n    href: \"https://www.instagram.com/exlabs/\",\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }, __jsx(SocialIcon, {\n    src: `${\"\"}/icons/social/instagram.svg`,\n    alt: \"Instagram\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  })), __jsx(SocialLink, {\n    external: true,\n    href: \"https://www.linkedin.com/company/exlabs\",\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }\n  }, __jsx(SocialIcon, {\n    src: `${\"\"}/icons/social/linkedin.svg`,\n    alt: \"LinkedIn\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  })));\n\n  return __jsx(StyledFooter, {\n    className: \"footer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 5\n    }\n  }, __jsx(PoweredByContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }\n  }, __jsx(PoweredByTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }\n  }, \"Powered By \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 22\n    }\n  }, \"Exlabs Ltd.\")), __jsx(PoweredByDescription, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }, \"Custom Data and Software for the Intelligent Connected World.\"), !isMobile && socials), __jsx(ActionsContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }\n  }, __jsx(ButtonsContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 9\n    }\n  }, __jsx(_link_link_component__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    href: \"http://exlabs.com/\",\n    external: true,\n    target: \"_blank\",\n    type: \"primaryButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 11\n    }\n  }, \"Visit our page!\"), __jsx(_link_link_component__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    href: \"https://exlabs.com/contact-us\",\n    external: true,\n    target: \"_blank\",\n    type: \"button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 11\n    }\n  }, \"Contact us\")), isMobile && socials, __jsx(Copyright, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 9\n    }\n  }, \"Copyright \\xA9 2020 Exlabs Ltd.\")));\n};\n\n_s(Footer, \"zgkINSqbfc5el6iJHobgJqkLvZM=\", false, function () {\n  return [_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__[\"useDeviceDetect\"]];\n});\n\n_c11 = Footer;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"StyledFooter\");\n$RefreshReg$(_c2, \"PoweredByContainer\");\n$RefreshReg$(_c3, \"PoweredByTitle\");\n$RefreshReg$(_c4, \"PoweredByDescription\");\n$RefreshReg$(_c5, \"SocialContainer\");\n$RefreshReg$(_c6, \"SocialLink\");\n$RefreshReg$(_c7, \"SocialIcon\");\n$RefreshReg$(_c8, \"ActionsContainer\");\n$RefreshReg$(_c9, \"ButtonsContainer\");\n$RefreshReg$(_c10, \"Copyright\");\n$RefreshReg$(_c11, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzeD8yZDRjIl0sIm5hbWVzIjpbIlN0eWxlZEZvb3RlciIsInN0eWxlZCIsImZvb3RlciIsInRoZW1lIiwiY29sb3IiLCJncmF5MzAwIiwiZGV2aWNlQnJlYWtwb2ludCIsIm1vYmlsZSIsIlBvd2VyZWRCeUNvbnRhaW5lciIsInNlY3Rpb24iLCJQb3dlcmVkQnlUaXRsZSIsImg0IiwiZm9udFByaW1hcnkiLCJwcmltYXJ5IiwiUG93ZXJlZEJ5RGVzY3JpcHRpb24iLCJwIiwiZm9udFNlY29uZGFyeSIsIlNvY2lhbENvbnRhaW5lciIsImRpdiIsIlNvY2lhbExpbmsiLCJMaW5rIiwiU29jaWFsSWNvbiIsImltZyIsIkFjdGlvbnNDb250YWluZXIiLCJCdXR0b25zQ29udGFpbmVyIiwiQ29weXJpZ2h0IiwiRm9vdGVyIiwiaXNNb2JpbGUiLCJ1c2VEZXZpY2VEZXRlY3QiLCJzb2NpYWxzIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBTzs7OzsyQkFJUixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBUTs7O2tDQUc1QixDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLGdCQUFOLENBQXVCQyxNQUFPOzs7OztDQVAvRTtLQUFNUCxZO0FBY04sTUFBTVEsa0JBQWtCLEdBQUdQLHlEQUFNLENBQUNRLE9BQVE7OztrQ0FHUixDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLGdCQUFOLENBQXVCQyxNQUFPOzs7OztDQUgvRTtNQUFNQyxrQjtBQVVOLE1BQU1FLGNBQWMsR0FBR1QseURBQU0sQ0FBQ1UsRUFBRzs7O1dBR3RCLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQWVBLEtB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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYixDQURGLEVBSUUsTUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFFQUpGLEVBT0csQ0FBQ0gsUUFBRCxJQUFhRSxPQVBoQixDQURGLEVBVUUsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFNLFFBQUksRUFBQyxvQkFBWDtBQUFnQyxZQUFRLE1BQXhDO0FBQXlDLFVBQU0sRUFBQyxRQUFoRDtBQUF5RCxRQUFJLEVBQUMsZUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUlFLE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUMsK0JBRFA7QUFFRSxZQUFRLE1BRlY7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUlFLFFBQUksRUFBQyxRQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsQ0FERixFQWNHRixRQUFRLElBQUlFLE9BZGYsRUFlRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FmRixDQVZGLENBREY7QUE4QkQsQ0F4RE07O0dBQU1ILE07VUFDVUUsK0Y7OztPQURWRixNIiwiZmlsZSI6Ii4vc3JjL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9saW5rL2xpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IHVzZURldmljZURldGVjdCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1kZXZpY2UtZGV0ZWN0L3VzZS1kZXZpY2UtZGV0ZWN0Lmhvb2snO1xuXG5jb25zdCBTdHlsZWRGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItdG9wOiAycHggZGFzaGVkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZ3JheTMwMH07XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBQb3dlcmVkQnlDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZmxleDogMTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBQb3dlcmVkQnlUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250UHJpbWFyeX07XG5cbiAgJiA+IHNwYW4ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBQb3dlcmVkQnlEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250U2Vjb25kYXJ5fTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgU29jaWFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMzBweDtcblxuICAmIGEge1xuICAgIG1hcmdpbjogMCA4cHg7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gICYgYTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFNvY2lhbExpbmsgPSBzdHlsZWQoTGluaylgYDtcblxuY29uc3QgU29jaWFsSWNvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA0MHB4O1xuYDtcblxuY29uc3QgQWN0aW9uc0NvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAmIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGEge1xuICAgICAgcGFkZGluZzogMTVweCA0MHB4O1xuICAgIH1cbiAgfVxuXG4gICYgPiBhOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IENvcHlyaWdodCA9IHN0eWxlZC5wYFxuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE3cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2VEZXRlY3QoKTtcblxuICBjb25zdCBzb2NpYWxzID0gKFxuICAgIDxTb2NpYWxDb250YWluZXI+XG4gICAgICA8U29jaWFsTGluayBleHRlcm5hbCBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2V4bGFicy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvc29jaWFsL2ZhY2Vib29rLnN2Z2B9XG4gICAgICAgICAgYWx0PVwiRmFjZWJvb2tcIlxuICAgICAgICAvPlxuICAgICAgPC9Tb2NpYWxMaW5rPlxuICAgICAgPFNvY2lhbExpbmsgZXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXhsYWJzL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8U29jaWFsSWNvblxuICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy9zb2NpYWwvaW5zdGFncmFtLnN2Z2B9XG4gICAgICAgICAgYWx0PVwiSW5zdGFncmFtXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU29jaWFsTGluaz5cbiAgICAgIDxTb2NpYWxMaW5rIGV4dGVybmFsIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9leGxhYnNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvc29jaWFsL2xpbmtlZGluLnN2Z2B9XG4gICAgICAgICAgYWx0PVwiTGlua2VkSW5cIlxuICAgICAgICAvPlxuICAgICAgPC9Tb2NpYWxMaW5rPlxuICAgIDwvU29jaWFsQ29udGFpbmVyPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxQb3dlcmVkQnlDb250YWluZXI+XG4gICAgICAgIDxQb3dlcmVkQnlUaXRsZT5cbiAgICAgICAgICBQb3dlcmVkIEJ5IDxzcGFuPkV4bGFicyBMdGQuPC9zcGFuPlxuICAgICAgICA8L1Bvd2VyZWRCeVRpdGxlPlxuICAgICAgICA8UG93ZXJlZEJ5RGVzY3JpcHRpb24+XG4gICAgICAgICAgQ3VzdG9tIERhdGEgYW5kIFNvZnR3YXJlIGZvciB0aGUgSW50ZWxsaWdlbnQgQ29ubmVjdGVkIFdvcmxkLlxuICAgICAgICA8L1Bvd2VyZWRCeURlc2NyaXB0aW9uPlxuICAgICAgICB7IWlzTW9iaWxlICYmIHNvY2lhbHN9XG4gICAgICA8L1Bvd2VyZWRCeUNvbnRhaW5lcj5cbiAgICAgIDxBY3Rpb25zQ29udGFpbmVyPlxuICAgICAgICA8QnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cDovL2V4bGFicy5jb20vXCIgZXh0ZXJuYWwgdGFyZ2V0PVwiX2JsYW5rXCIgdHlwZT1cInByaW1hcnlCdXR0b25cIj5cbiAgICAgICAgICAgIFZpc2l0IG91ciBwYWdlIVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZXhsYWJzLmNvbS9jb250YWN0LXVzXCJcbiAgICAgICAgICAgIGV4dGVybmFsXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29udGFjdCB1c1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b25zQ29udGFpbmVyPlxuICAgICAgICB7aXNNb2JpbGUgJiYgc29jaWFsc31cbiAgICAgICAgPENvcHlyaWdodD5Db3B5cmlnaHQgJmNvcHk7IDIwMjAgRXhsYWJzIEx0ZC48L0NvcHlyaWdodD5cbiAgICAgIDwvQWN0aW9uc0NvbnRhaW5lcj5cbiAgICA8L1N0eWxlZEZvb3Rlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/footer/footer.component.tsx\n");

/***/ })

})