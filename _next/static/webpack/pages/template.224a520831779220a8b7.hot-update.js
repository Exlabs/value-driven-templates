webpackHotUpdate_N_E("pages/template",{

/***/ "./src/app/template/template-step/template-step.component.tsx":
/*!********************************************************************!*\
  !*** ./src/app/template/template-step/template-step.component.tsx ***!
  \********************************************************************/
/*! exports provided: TemplateStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TemplateStep\", function() { return TemplateStep; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _template_step_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-step.styles */ \"./src/app/template/template-step/template-step.styles.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/template-step/template-step.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst TemplateStep = ({\n  icon,\n  title,\n  description\n}) => {\n  _s();\n\n  const [showDescription, setShowDescription] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n\n  const handleMouseEnter = () => {\n    setShowDescription(true);\n  };\n\n  const handleMouseLeave = () => {\n    setShowDescription(false);\n  };\n\n  const handleClick = () => {\n    setShowDescription(!showDescription);\n  };\n\n  return __jsx(_template_step_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledContainer\"], {\n    onMouseEnter: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    onClick: handleClick,\n    className: \"template-step\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(_template_step_styles__WEBPACK_IMPORTED_MODULE_1__[\"StepIcon\"], {\n    alt: \"Template step\",\n    src: `${\"\"}/icons/template/${icon}.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(_template_step_styles__WEBPACK_IMPORTED_MODULE_1__[\"StepTitle\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, title), showDescription && __jsx(_template_step_styles__WEBPACK_IMPORTED_MODULE_1__[\"DescriptionContainer\"], {\n    initial: {\n      height: 0,\n      opacity: 0\n    },\n    animate: {\n      height: 'calc(100% + 2px)',\n      minHeight: 'calc(100% + 2px)',\n      opacity: 1\n    },\n    transition: {\n      duration: 0.5,\n      easings: true\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(_template_step_styles__WEBPACK_IMPORTED_MODULE_1__[\"StepTitle\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, title), __jsx(_template_step_styles__WEBPACK_IMPORTED_MODULE_1__[\"Description\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, description)));\n};\n\n_s(TemplateStep, \"DFzql2HwpOP7ymR7ubqygTxctnU=\");\n\n_c = TemplateStep;\n\nvar _c;\n\n$RefreshReg$(_c, \"TemplateStep\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS1zdGVwL3RlbXBsYXRlLXN0ZXAuY29tcG9uZW50LnRzeD8xNTkxIl0sIm5hbWVzIjpbIlRlbXBsYXRlU3RlcCIsImljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2hvd0Rlc2NyaXB0aW9uIiwic2V0U2hvd0Rlc2NyaXB0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGFuZGxlQ2xpY2siLCJwcm9jZXNzIiwiaGVpZ2h0Iiwib3BhY2l0eSIsIm1pbkhlaWdodCIsImR1cmF0aW9uIiwiZWFzaW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWNPLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsT0FBUjtBQUFlQztBQUFmLENBQUQsS0FBcUQ7QUFBQTs7QUFDL0UsUUFBTSxDQUFDQyxlQUFELEVBQWtCQyxrQkFBbEIsSUFBd0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTlDOztBQUVBLFFBQU1DLGdCQUFnQixHQUFHLE1BQU07QUFDN0JILHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLFFBQU1JLGdCQUFnQixHQUFHLE1BQU07QUFDN0JKLHNCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLFFBQU1LLFdBQVcsR0FBRyxNQUFNO0FBQ3hCTCxzQkFBa0IsQ0FBQyxDQUFDRCxlQUFGLENBQWxCO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMscUVBQUQ7QUFDRSxnQkFBWSxFQUFFSSxnQkFEaEI7QUFFRSxnQkFBWSxFQUFFQyxnQkFGaEI7QUFHRSxXQUFPLEVBQUVDLFdBSFg7QUFJRSxhQUFTLEVBQUMsZUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyw4REFBRDtBQUNFLE9BQUcsRUFBQyxlQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVDLEVBQXlCLG1CQUFrQlYsSUFBSyxNQUYxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFVRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWUMsS0FBWixDQVZGLEVBV0dFLGVBQWUsSUFDZCxNQUFDLDBFQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQ1BRLFlBQU0sRUFBRSxDQUREO0FBRVBDLGFBQU8sRUFBRTtBQUZGLEtBRFg7QUFLRSxXQUFPLEVBQUU7QUFDUEQsWUFBTSxFQUFFLGtCQUREO0FBRVBFLGVBQVMsRUFBRSxrQkFGSjtBQUdQRCxhQUFPLEVBQUU7QUFIRixLQUxYO0FBVUUsY0FBVSxFQUFFO0FBQ1ZFLGNBQVEsRUFBRSxHQURBO0FBRVZDLGFBQU8sRUFBRTtBQUZDLEtBVmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFZZCxLQUFaLENBZkYsRUFnQkUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWNDLFdBQWQsQ0FoQkYsQ0FaSixDQURGO0FBa0NELENBakRNOztHQUFNSCxZOztLQUFBQSxZIiwiZmlsZSI6Ii4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS1zdGVwL3RlbXBsYXRlLXN0ZXAuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBTdHlsZWRDb250YWluZXIsXG4gIERlc2NyaXB0aW9uLFxuICBEZXNjcmlwdGlvbkNvbnRhaW5lcixcbiAgU3RlcEljb24sXG4gIFN0ZXBUaXRsZSxcbn0gZnJvbSAnLi90ZW1wbGF0ZS1zdGVwLnN0eWxlcyc7XG5cbmludGVyZmFjZSBUZW1wbGF0ZVN0ZXBQcm9wcyB7XG4gIGljb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlU3RlcCA9ICh7IGljb24sIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBUZW1wbGF0ZVN0ZXBQcm9wcykgPT4ge1xuICBjb25zdCBbc2hvd0Rlc2NyaXB0aW9uLCBzZXRTaG93RGVzY3JpcHRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0Rlc2NyaXB0aW9uKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0Rlc2NyaXB0aW9uKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRTaG93RGVzY3JpcHRpb24oIXNob3dEZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyXG4gICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIGNsYXNzTmFtZT1cInRlbXBsYXRlLXN0ZXBcIlxuICAgID5cbiAgICAgIDxTdGVwSWNvblxuICAgICAgICBhbHQ9XCJUZW1wbGF0ZSBzdGVwXCJcbiAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL3RlbXBsYXRlLyR7aWNvbn0uc3ZnYH1cbiAgICAgIC8+XG4gICAgICA8U3RlcFRpdGxlPnt0aXRsZX08L1N0ZXBUaXRsZT5cbiAgICAgIHtzaG93RGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8RGVzY3JpcHRpb25Db250YWluZXJcbiAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAnY2FsYygxMDAlICsgMnB4KScsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMCUgKyAycHgpJyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgICAgZWFzaW5nczogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0ZXBUaXRsZT57dGl0bGV9PC9TdGVwVGl0bGU+XG4gICAgICAgICAgPERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPlxuICAgICAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgKX1cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/template/template-step/template-step.component.tsx\n");

/***/ })

})