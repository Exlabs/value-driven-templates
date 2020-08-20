webpackHotUpdate_N_E("pages/about",{

/***/ "./src/app/about/header/header.component.tsx":
/*!***************************************************!*\
  !*** ./src/app/about/header/header.component.tsx ***!
  \***************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _ui_link_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/link/link.component */ \"./src/ui/link/link.component.tsx\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/about/header/header.component.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header`\n  border: 1px solid red;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n`;\n_c = StyledHeader;\nconst TextSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  max-width: 50%;\n  display: flex;\n  flex-direction: column;\n\n  & > a {\n    margin-top: 20px;\n    padding: 20px 40px;\n    width: fit-content;\n    display: inline-block;\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n`;\n_c2 = TextSection;\nconst HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2`\n  font-size: 60px;\n  font-weight: 700;\n\n  & > span {\n    color: ${({\n  theme\n}) => theme.color.primary};\n  }\n`;\n_c3 = HeaderTitle;\nconst HeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p``;\n_c4 = HeaderDescription;\nconst HeaderImage = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].img)`\n  flex: 1;\n`;\n_c5 = HeaderImage;\nconst Header = () => {\n  return __jsx(StyledHeader, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(TextSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(HeaderTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"We are \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 18\n    }\n  }, \"Exlabs\")), __jsx(HeaderDescription, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"We deliver high-level consultancy & flexible, complex data-driven\", ' ', __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, \"software solutions\"), \" for the companies of the future.\"), __jsx(_ui_link_link_component__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    href: \"\",\n    type: \"button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, \"Read about VDT\")), __jsx(HeaderImage, {\n    alt: \"About page\",\n    src: `${\"\"}/icons/about-header.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }));\n};\n_c6 = Header;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"StyledHeader\");\n$RefreshReg$(_c2, \"TextSection\");\n$RefreshReg$(_c3, \"HeaderTitle\");\n$RefreshReg$(_c4, \"HeaderDescription\");\n$RefreshReg$(_c5, \"HeaderImage\");\n$RefreshReg$(_c6, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hYm91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c3g/OTIzNSJdLCJuYW1lcyI6WyJTdHlsZWRIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJUZXh0U2VjdGlvbiIsInNlY3Rpb24iLCJ0aGVtZSIsImNvbG9yIiwicHJpbWFyeSIsIkhlYWRlclRpdGxlIiwiaDIiLCJIZWFkZXJEZXNjcmlwdGlvbiIsInAiLCJIZWFkZXJJbWFnZSIsIm1vdGlvbiIsImltZyIsIkhlYWRlciIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxNQUFPOzs7Ozs7OztDQUFuQztLQUFNRixZO0FBVU4sTUFBTUcsV0FBVyxHQUFHRix5REFBTSxDQUFDRyxPQUFROzs7Ozs7Ozs7O2FBVXRCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFROztDQVZoRDtNQUFNSixXO0FBY04sTUFBTUssV0FBVyxHQUFHUCx5REFBTSxDQUFDUSxFQUFHOzs7OzthQUtqQixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBUTs7Q0FMaEQ7TUFBTUMsVztBQVNOLE1BQU1FLGlCQUFpQixHQUFHVCx5REFBTSxDQUFDVSxDQUFFLEVBQW5DO01BQU1ELGlCO0FBRU4sTUFBTUUsV0FBVyxHQUFHWCxpRUFBTSxDQUFDWSxvREFBTSxDQUFDQyxHQUFSLENBQWE7O0NBQXZDO01BQU1GLFc7QUFJQyxNQUFNRyxNQUFNLEdBQUcsTUFBTTtBQUMxQixTQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFQsQ0FERixFQUlFLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFDb0UsR0FEcEUsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLHNDQUpGLEVBUUUsTUFBQyw0REFBRDtBQUFNLFFBQUksRUFBQyxFQUFYO0FBQWMsUUFBSSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkYsQ0FERixFQWFFLE1BQUMsV0FBRDtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVDLEVBQXlCLHlCQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsQ0FERjtBQW9CRCxDQXJCTTtNQUFNRCxNIiwiZmlsZSI6Ii4vc3JjL2FwcC9hYm91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi91aS9saW5rL2xpbmsuY29tcG9uZW50JztcblxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgVGV4dFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgJiA+IGEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeX07XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlclRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgJiA+IHNwYW4ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXJEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYGA7XG5cbmNvbnN0IEhlYWRlckltYWdlID0gc3R5bGVkKG1vdGlvbi5pbWcpYFxuICBmbGV4OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkSGVhZGVyPlxuICAgICAgPFRleHRTZWN0aW9uPlxuICAgICAgICA8SGVhZGVyVGl0bGU+XG4gICAgICAgICAgV2UgYXJlIDxzcGFuPkV4bGFiczwvc3Bhbj5cbiAgICAgICAgPC9IZWFkZXJUaXRsZT5cbiAgICAgICAgPEhlYWRlckRlc2NyaXB0aW9uPlxuICAgICAgICAgIFdlIGRlbGl2ZXIgaGlnaC1sZXZlbCBjb25zdWx0YW5jeSAmIGZsZXhpYmxlLCBjb21wbGV4IGRhdGEtZHJpdmVueycgJ31cbiAgICAgICAgICA8c3Bhbj5zb2Z0d2FyZSBzb2x1dGlvbnM8L3NwYW4+IGZvciB0aGUgY29tcGFuaWVzIG9mIHRoZSBmdXR1cmUuXG4gICAgICAgIDwvSGVhZGVyRGVzY3JpcHRpb24+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgUmVhZCBhYm91dCBWRFRcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9UZXh0U2VjdGlvbj5cbiAgICAgIDxIZWFkZXJJbWFnZVxuICAgICAgICBhbHQ9XCJBYm91dCBwYWdlXCJcbiAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL2Fib3V0LWhlYWRlci5zdmdgfVxuICAgICAgLz5cbiAgICA8L1N0eWxlZEhlYWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/about/header/header.component.tsx\n");

/***/ })

})