webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/footer/footer.component.tsx":
/*!********************************************!*\
  !*** ./src/ui/footer/footer.component.tsx ***!
  \********************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _link_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/link.component */ \"./src/ui/link/link.component.tsx\");\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/ui/footer/footer.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer`\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  border-top: 2px dashed ${({\n  theme\n}) => theme.color.gray300};\n  padding-top: 20px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n`;\n_c = StyledFooter;\nconst PoweredByContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  flex: 1;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n`;\n_c2 = PoweredByContainer;\nconst PoweredByTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h4`\n  font-weight: 700;\n  font-size: 31px;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 21px;\n    text-align: center;\n  }\n`;\n_c3 = PoweredByTitle;\nconst PoweredByDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p`\n  color: ${({\n  theme\n}) => theme.color.fontSecondary};\n  font-size: 23px;\n  max-width: 70%;\n  margin-top: 5px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 17px;\n    text-align: center;\n  }\n`;\n_c4 = PoweredByDescription;\nconst SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  margin-top: 30px;\n\n  & a {\n    margin: 0 8px;\n  }\n\n  & a:first-child {\n    margin-left: 0;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin-top: 20px;\n  }\n`;\n_c5 = SocialContainer;\nconst SocialLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_link_link_component__WEBPACK_IMPORTED_MODULE_2__[\"Link\"])``;\n_c6 = SocialLink;\nconst SocialIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 40px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    width: 30px;\n  }\n`;\n_c7 = SocialIcon;\nconst ActionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin-top: 20px;\n    align-items: center;\n    justify-content: center;\n  }\n`;\n_c8 = ActionsContainer;\nconst ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  display: flex;\n  & a {\n    a {\n      padding: 15px 40px;\n\n      @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n        font-size: 12px;\n        padding: 10px 10px;\n      }\n    }\n  }\n\n  & > a:first-child {\n    margin-right: 10px;\n  }\n`;\n_c9 = ButtonsContainer;\nconst Copyright = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p`\n  font-weight: 500;\n  font-size: 17px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    margin-top: 10px;\n    font-size: 13px;\n  }\n`;\n_c10 = Copyright;\nconst Footer = () => {\n  _s();\n\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__[\"useDeviceDetect\"])();\n\n  const socials = __jsx(SocialContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 5\n    }\n  }, __jsx(SocialLink, {\n    external: true,\n    href: \"https://www.facebook.com/exlabs/\",\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }\n  }, __jsx(SocialIcon, {\n    src: `${\"\"}/icons/social/facebook.svg`,\n    alt: \"Facebook\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  })), __jsx(SocialLink, {\n    external: true,\n    href: \"https://www.instagram.com/exlabs/\",\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }\n  }, __jsx(SocialIcon, {\n    src: `${\"\"}/icons/social/instagram.svg`,\n    alt: \"Instagram\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  })), __jsx(SocialLink, {\n    external: true,\n    href: \"https://www.linkedin.com/company/exlabs\",\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, __jsx(SocialIcon, {\n    src: `${\"\"}/icons/social/linkedin.svg`,\n    alt: \"LinkedIn\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  })));\n\n  return __jsx(StyledFooter, {\n    className: \"footer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 5\n    }\n  }, __jsx(PoweredByContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }\n  }, __jsx(PoweredByTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }, \"Powered By \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 22\n    }\n  }, \"Exlabs Ltd.\")), __jsx(PoweredByDescription, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 9\n    }\n  }, \"Custom Data and Software for the Intelligent Connected World.\"), !isMobile && socials), __jsx(ActionsContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }\n  }, __jsx(ButtonsContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 9\n    }\n  }, __jsx(_link_link_component__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    href: \"http://exlabs.com/\",\n    external: true,\n    target: \"_blank\",\n    type: \"primaryButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 11\n    }\n  }, \"Visit our page!\"), __jsx(_link_link_component__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    href: \"https://exlabs.com/contact-us\",\n    external: true,\n    target: \"_blank\",\n    type: \"button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 11\n    }\n  }, \"Contact us\")), isMobile && socials, __jsx(Copyright, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 9\n    }\n  }, \"Copyright \\xA9 2020 Exlabs Ltd.\")));\n};\n\n_s(Footer, \"zgkINSqbfc5el6iJHobgJqkLvZM=\", false, function () {\n  return [_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__[\"useDeviceDetect\"]];\n});\n\n_c11 = Footer;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"StyledFooter\");\n$RefreshReg$(_c2, \"PoweredByContainer\");\n$RefreshReg$(_c3, \"PoweredByTitle\");\n$RefreshReg$(_c4, \"PoweredByDescription\");\n$RefreshReg$(_c5, \"SocialContainer\");\n$RefreshReg$(_c6, \"SocialLink\");\n$RefreshReg$(_c7, \"SocialIcon\");\n$RefreshReg$(_c8, \"ActionsContainer\");\n$RefreshReg$(_c9, \"ButtonsContainer\");\n$RefreshReg$(_c10, \"Copyright\");\n$RefreshReg$(_c11, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzeD8yZDRjIl0sIm5hbWVzIjpbIlN0eWxlZEZvb3RlciIsInN0eWxlZCIsImZvb3RlciIsInRoZW1lIiwiY29sb3IiLCJncmF5MzAwIiwiZGV2aWNlQnJlYWtwb2ludCIsIm1vYmlsZSIsIlBvd2VyZWRCeUNvbnRhaW5lciIsInNlY3Rpb24iLCJQb3dlcmVkQnlUaXRsZSIsImg0IiwiZm9udFByaW1hcnkiLCJwcmltYXJ5IiwiUG93ZXJlZEJ5RGVzY3JpcHRpb24iLCJwIiwiZm9udFNlY29uZGFyeSIsIlNvY2lhbENvbnRhaW5lciIsImRpdiIsIlNvY2lhbExpbmsiLCJMaW5rIiwiU29jaWFsSWNvbiIsImltZyIsIkFjdGlvbnNDb250YWluZXIiLCJCdXR0b25zQ29udGFpbmVyIiwiQ29weXJpZ2h0IiwiRm9vdGVyIiwiaXNNb2JpbGUiLCJ1c2VEZXZpY2VEZXRlY3QiLCJzb2NpYWxzIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBTzs7OzsyQkFJUixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBUTs7O2tDQUc1QixDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLGdCQUFOLENBQXVCQyxNQUFPOzs7OztDQVAvRTtLQUFNUCxZO0FBY04sTUFBTVEsa0JBQWtCLEdBQUdQLHlEQUFNLENBQUNRLE9BQVE7OztrQ0FHUixDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLGdCQUFOLENBQXVCQyxNQUFPOzs7OztDQUgvRTtNQUFNQyxrQjtBQVVOLE1BQU1FLGNBQWMsR0FBR1QseURBQU0sQ0FBQ1UsRUFBRzs7O1dBR3RCLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQWVBLEtB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TSIsImZpbGUiOiIuL3NyYy91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vbGluay9saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VEZXZpY2VEZXRlY3QgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtZGV2aWNlLWRldGVjdC91c2UtZGV2aWNlLWRldGVjdC5ob29rJztcblxuY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmdyYXkzMDB9O1xuICBwYWRkaW5nLXRvcDogMjBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgUG93ZXJlZEJ5Q29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGZsZXg6IDE7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgUG93ZXJlZEJ5VGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gICYgPiBzcGFuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgUG93ZXJlZEJ5RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFNlY29uZGFyeX07XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFNvY2lhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgJiBhIHtcbiAgICBtYXJnaW46IDAgOHB4O1xuICB9XG5cbiAgJiBhOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuYDtcblxuY29uc3QgU29jaWFsTGluayA9IHN0eWxlZChMaW5rKWBgO1xuXG5jb25zdCBTb2NpYWxJY29uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDQwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuYDtcblxuY29uc3QgQWN0aW9uc0NvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gICYgYSB7XG4gICAgYSB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgPiBhOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IENvcHlyaWdodCA9IHN0eWxlZC5wYFxuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE3cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG5cbiAgY29uc3Qgc29jaWFscyA9IChcbiAgICA8U29jaWFsQ29udGFpbmVyPlxuICAgICAgPFNvY2lhbExpbmsgZXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9leGxhYnMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL3NvY2lhbC9mYWNlYm9vay5zdmdgfVxuICAgICAgICAgIGFsdD1cIkZhY2Vib29rXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU29jaWFsTGluaz5cbiAgICAgIDxTb2NpYWxMaW5rIGV4dGVybmFsIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2V4bGFicy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPFNvY2lhbEljb25cbiAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvc29jaWFsL2luc3RhZ3JhbS5zdmdgfVxuICAgICAgICAgIGFsdD1cIkluc3RhZ3JhbVwiXG4gICAgICAgIC8+XG4gICAgICA8L1NvY2lhbExpbms+XG4gICAgICA8U29jaWFsTGluayBleHRlcm5hbCBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvZXhsYWJzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxTb2NpYWxJY29uXG4gICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL3NvY2lhbC9saW5rZWRpbi5zdmdgfVxuICAgICAgICAgIGFsdD1cIkxpbmtlZEluXCJcbiAgICAgICAgLz5cbiAgICAgIDwvU29jaWFsTGluaz5cbiAgICA8L1NvY2lhbENvbnRhaW5lcj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8UG93ZXJlZEJ5Q29udGFpbmVyPlxuICAgICAgICA8UG93ZXJlZEJ5VGl0bGU+XG4gICAgICAgICAgUG93ZXJlZCBCeSA8c3Bhbj5FeGxhYnMgTHRkLjwvc3Bhbj5cbiAgICAgICAgPC9Qb3dlcmVkQnlUaXRsZT5cbiAgICAgICAgPFBvd2VyZWRCeURlc2NyaXB0aW9uPlxuICAgICAgICAgIEN1c3RvbSBEYXRhIGFuZCBTb2Z0d2FyZSBmb3IgdGhlIEludGVsbGlnZW50IENvbm5lY3RlZCBXb3JsZC5cbiAgICAgICAgPC9Qb3dlcmVkQnlEZXNjcmlwdGlvbj5cbiAgICAgICAgeyFpc01vYmlsZSAmJiBzb2NpYWxzfVxuICAgICAgPC9Qb3dlcmVkQnlDb250YWluZXI+XG4gICAgICA8QWN0aW9uc0NvbnRhaW5lcj5cbiAgICAgICAgPEJ1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9leGxhYnMuY29tL1wiIGV4dGVybmFsIHRhcmdldD1cIl9ibGFua1wiIHR5cGU9XCJwcmltYXJ5QnV0dG9uXCI+XG4gICAgICAgICAgICBWaXNpdCBvdXIgcGFnZSFcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2V4bGFicy5jb20vY29udGFjdC11c1wiXG4gICAgICAgICAgICBleHRlcm5hbFxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbnRhY3QgdXNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAge2lzTW9iaWxlICYmIHNvY2lhbHN9XG4gICAgICAgIDxDb3B5cmlnaHQ+Q29weXJpZ2h0ICZjb3B5OyAyMDIwIEV4bGFicyBMdGQuPC9Db3B5cmlnaHQ+XG4gICAgICA8L0FjdGlvbnNDb250YWluZXI+XG4gICAgPC9TdHlsZWRGb290ZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/footer/footer.component.tsx\n");

/***/ })

})