webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/description/description.component.tsx":
/*!*************************************************************!*\
  !*** ./src/app/about/description/description.component.tsx ***!
  \*************************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbered-text/numbered-text.component */ \"./src/app/about/numbered-text/numbered-text.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/about/description/description.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article``;\n_c = DescriptionContainer;\nconst ExpertsHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3`\n  font-size: 27px;\n  margin-top: 80px;\n  font-weight: 700;\n  text-align: center;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n\n  & > span {\n    background-color: ${({\n  theme\n}) => theme.color.primary};\n    color: ${({\n  theme\n}) => theme.color.white};\n    padding: 0 10px;\n  }\n`;\n_c2 = ExpertsHeading;\nconst FirstSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid red;\n`;\n_c3 = FirstSection;\nconst StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  flex: 1;\n`;\n_c4 = StyledImage;\nconst Description = () => {\n  return __jsx(DescriptionContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(ExpertsHeading, {\n    id: \"experts\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Built by experts for \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 30\n    }\n  }, \"experts\")), __jsx(FirstSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(StyledImage, {\n    alt: \"Introduction\",\n    src: `${\"\"}/icons/rocket.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(_numbered_text_numbered_text_component__WEBPACK_IMPORTED_MODULE_2__[\"NumberedText\"], {\n    number: \"01\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"In digital-first world, effectiveness in delivering software initiatives is what makes or brakes organisations. Yet many IT teams suffer from lack of true alignment with business goals, which results in software becoming a cost generator instead of an assets. There\\u2019s now a handful number of resources and tools helping engineers improve software delivery performance, though most of them don\\u2019t fill the gap when it comes to match IT strategy with delivery.\")));\n};\n_c5 = Description;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"DescriptionContainer\");\n$RefreshReg$(_c2, \"ExpertsHeading\");\n$RefreshReg$(_c3, \"FirstSection\");\n$RefreshReg$(_c4, \"StyledImage\");\n$RefreshReg$(_c5, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHN4P2Y0MTMiXSwibmFtZXMiOlsiRGVzY3JpcHRpb25Db250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiRXhwZXJ0c0hlYWRpbmciLCJoMyIsInRoZW1lIiwiY29sb3IiLCJmb250UHJpbWFyeSIsInByaW1hcnkiLCJ3aGl0ZSIsIkZpcnN0U2VjdGlvbiIsInNlY3Rpb24iLCJTdHlsZWRJbWFnZSIsImltZyIsIkRlc2NyaXB0aW9uIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxvQkFBb0IsR0FBR0MseURBQU0sQ0FBQ0MsT0FBUSxFQUE1QztLQUFNRixvQjtBQUVOLE1BQU1HLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0csRUFBRzs7Ozs7V0FLdEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVk7Ozt3QkFHMUIsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLE9BQVE7YUFDOUMsQ0FBQztBQUFFSDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLEtBQU07OztDQVQ5QztNQUFNTixjO0FBY04sTUFBTU8sWUFBWSxHQUFHVCx5REFBTSxDQUFDVSxPQUFROzs7OztDQUFwQztNQUFNRCxZO0FBT04sTUFBTUUsV0FBVyxHQUFHWCx5REFBTSxDQUFDWSxHQUFJOztDQUEvQjtNQUFNRCxXO0FBSUMsTUFBTUUsV0FBVyxHQUFHLE1BQU07QUFDL0IsU0FDRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGNBQUQ7QUFBZ0IsTUFBRSxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ3VCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEdkIsQ0FERixFQUlFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQ0UsT0FBRyxFQUFDLGNBRE47QUFFRSxPQUFHLEVBQUcsR0FBRUMsRUFBeUIsbUJBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFLE1BQUMsbUZBQUQ7QUFBYyxVQUFNLEVBQUMsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyZEFMRixDQUpGLENBREY7QUFxQkQsQ0F0Qk07TUFBTUQsVyIsImZpbGUiOiIuL3NyYy9hcHAvYWJvdXQvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IE51bWJlcmVkVGV4dCB9IGZyb20gJy4uL251bWJlcmVkLXRleHQvbnVtYmVyZWQtdGV4dC5jb21wb25lbnQnO1xuXG5jb25zdCBEZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5hcnRpY2xlYGA7XG5cbmNvbnN0IEV4cGVydHNIZWFkaW5nID0gc3R5bGVkLmgzYFxuICBmb250LXNpemU6IDI3cHg7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuXG4gICYgPiBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLndoaXRlfTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZpcnN0U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmltZ2BcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICA8RXhwZXJ0c0hlYWRpbmcgaWQ9XCJleHBlcnRzXCI+XG4gICAgICAgIEJ1aWx0IGJ5IGV4cGVydHMgZm9yIDxzcGFuPmV4cGVydHM8L3NwYW4+XG4gICAgICA8L0V4cGVydHNIZWFkaW5nPlxuICAgICAgPEZpcnN0U2VjdGlvbj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgYWx0PVwiSW50cm9kdWN0aW9uXCJcbiAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvcm9ja2V0LnN2Z2B9XG4gICAgICAgIC8+XG4gICAgICAgIDxOdW1iZXJlZFRleHQgbnVtYmVyPVwiMDFcIj5cbiAgICAgICAgICBJbiBkaWdpdGFsLWZpcnN0IHdvcmxkLCBlZmZlY3RpdmVuZXNzIGluIGRlbGl2ZXJpbmcgc29mdHdhcmUgaW5pdGlhdGl2ZXMgaXMgd2hhdFxuICAgICAgICAgIG1ha2VzIG9yIGJyYWtlcyBvcmdhbmlzYXRpb25zLiBZZXQgbWFueSBJVCB0ZWFtcyBzdWZmZXIgZnJvbSBsYWNrIG9mIHRydWVcbiAgICAgICAgICBhbGlnbm1lbnQgd2l0aCBidXNpbmVzcyBnb2Fscywgd2hpY2ggcmVzdWx0cyBpbiBzb2Z0d2FyZSBiZWNvbWluZyBhIGNvc3RcbiAgICAgICAgICBnZW5lcmF0b3IgaW5zdGVhZCBvZiBhbiBhc3NldHMuIFRoZXJl4oCZcyBub3cgYSBoYW5kZnVsIG51bWJlciBvZiByZXNvdXJjZXMgYW5kXG4gICAgICAgICAgdG9vbHMgaGVscGluZyBlbmdpbmVlcnMgaW1wcm92ZSBzb2Z0d2FyZSBkZWxpdmVyeSBwZXJmb3JtYW5jZSwgdGhvdWdoIG1vc3Qgb2ZcbiAgICAgICAgICB0aGVtIGRvbuKAmXQgZmlsbCB0aGUgZ2FwIHdoZW4gaXQgY29tZXMgdG8gbWF0Y2ggSVQgc3RyYXRlZ3kgd2l0aCBkZWxpdmVyeS5cbiAgICAgICAgPC9OdW1iZXJlZFRleHQ+XG4gICAgICA8L0ZpcnN0U2VjdGlvbj5cbiAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/about/description/description.component.tsx\n");

/***/ })

})