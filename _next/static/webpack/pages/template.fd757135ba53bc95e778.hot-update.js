webpackHotUpdate_N_E("pages/template",{

/***/ "./src/app/template/heading/heading.component.tsx":
/*!********************************************************!*\
  !*** ./src/app/template/heading/heading.component.tsx ***!
  \********************************************************/
/*! exports provided: TemplateHeading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TemplateHeading\", function() { return TemplateHeading; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../about/numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\n/* harmony import */ var _ui_link_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/link/link.component */ \"./src/ui/link/link.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/heading/heading.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n`;\n_c = StyledHeader;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  width: 60%;\n\n  .number-text__number {\n    font-size: 100px;\n    left: 0;\n    top: 0;\n  }\n`;\n_c2 = TextContainer;\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2`\n  font-size: 41px;\n  font-weight: 700;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n`;\n_c3 = Header;\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p`\n  font-size: 27px;\n`;\n_c4 = Description;\nconst HeaderImg = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  flex: 1;\n`;\n_c5 = HeaderImg;\nconst TemplateHeading = () => {\n  return __jsx(StyledHeader, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(TextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(_about_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n    number: \"The template\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(Header, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"Contribution Template\"), __jsx(Description, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \"To achieve consistency, we try to stick to the same template as possible.\")), __jsx(_ui_link_link_component__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    href: \"\",\n    type: \"primaryButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"Check out example\")), __jsx(HeaderImg, {\n    alt: \"Template header\",\n    src: `${\"\"}/icons/template/heading.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }));\n};\n_c6 = TemplateHeading;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"StyledHeader\");\n$RefreshReg$(_c2, \"TextContainer\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"Description\");\n$RefreshReg$(_c5, \"HeaderImg\");\n$RefreshReg$(_c6, \"TemplateHeading\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS9oZWFkaW5nL2hlYWRpbmcuY29tcG9uZW50LnRzeD8zMzViIl0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsIlRleHRDb250YWluZXIiLCJzZWN0aW9uIiwiSGVhZGVyIiwiaDIiLCJ0aGVtZSIsImNvbG9yIiwiZm9udFByaW1hcnkiLCJEZXNjcmlwdGlvbiIsInAiLCJIZWFkZXJJbWciLCJpbWciLCJUZW1wbGF0ZUhlYWRpbmciLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBTzs7OztDQUFuQztLQUFNRixZO0FBTU4sTUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDRyxPQUFROzs7Ozs7OztDQUFyQztNQUFNRCxhO0FBVU4sTUFBTUUsTUFBTSxHQUFHSix5REFBTSxDQUFDSyxFQUFHOzs7V0FHZCxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWTtDQUhsRDtNQUFNSixNO0FBTU4sTUFBTUssV0FBVyxHQUFHVCx5REFBTSxDQUFDVSxDQUFFOztDQUE3QjtNQUFNRCxXO0FBSU4sTUFBTUUsU0FBUyxHQUFHWCx5REFBTSxDQUFDWSxHQUFJOztDQUE3QjtNQUFNRCxTO0FBSUMsTUFBTUUsZUFBZSxHQUFHLE1BQU07QUFDbkMsU0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RkFBRDtBQUFjLFVBQU0sRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRkFGRixDQURGLEVBT0UsTUFBQyw0REFBRDtBQUFNLFFBQUksRUFBQyxFQUFYO0FBQWMsUUFBSSxFQUFDLGVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEYsQ0FERixFQVlFLE1BQUMsU0FBRDtBQUNFLE9BQUcsRUFBQyxpQkFETjtBQUVFLE9BQUcsRUFBRyxHQUFFQyxFQUF5Qiw2QkFGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREY7QUFtQkQsQ0FwQk07TUFBTUQsZSIsImZpbGUiOiIuL3NyYy9hcHAvdGVtcGxhdGUvaGVhZGluZy9oZWFkaW5nLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOdW1iZXJlZFRleHQgfSBmcm9tICcuLi8uLi9hYm91dC9udW1iZXJlZC10ZXh0L251bWJlcmVkLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi91aS9saW5rL2xpbmsuY29tcG9uZW50JztcblxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogNjAlO1xuXG4gIC5udW1iZXItdGV4dF9fbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogNDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuYDtcblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAyN3B4O1xuYDtcblxuY29uc3QgSGVhZGVySW1nID0gc3R5bGVkLmltZ2BcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZW1wbGF0ZUhlYWRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEhlYWRlcj5cbiAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICA8TnVtYmVyZWRUZXh0IG51bWJlcj1cIlRoZSB0ZW1wbGF0ZVwiPlxuICAgICAgICAgIDxIZWFkZXI+Q29udHJpYnV0aW9uIFRlbXBsYXRlPC9IZWFkZXI+XG4gICAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgVG8gYWNoaWV2ZSBjb25zaXN0ZW5jeSwgd2UgdHJ5IHRvIHN0aWNrIHRvIHRoZSBzYW1lIHRlbXBsYXRlIGFzIHBvc3NpYmxlLlxuICAgICAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICAgIDwvTnVtYmVyZWRUZXh0PlxuICAgICAgICA8TGluayBocmVmPVwiXCIgdHlwZT1cInByaW1hcnlCdXR0b25cIj5cbiAgICAgICAgICBDaGVjayBvdXQgZXhhbXBsZVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICA8SGVhZGVySW1nXG4gICAgICAgIGFsdD1cIlRlbXBsYXRlIGhlYWRlclwiXG4gICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy90ZW1wbGF0ZS9oZWFkaW5nLnN2Z2B9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkSGVhZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/template/heading/heading.component.tsx\n");

/***/ })

})