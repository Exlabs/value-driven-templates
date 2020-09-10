webpackHotUpdate_N_E("pages/template",{

/***/ "./src/app/template/template-step/template-step.component.tsx":
/*!********************************************************************!*\
  !*** ./src/app/template/template-step/template-step.component.tsx ***!
  \********************************************************************/
/*! exports provided: TemplateStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TemplateStep\", function() { return TemplateStep; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/template-step/template-step.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  flex-direction: column;\n  border: 2px solid ${({\n  theme\n}) => theme.color.primary400};\n  align-items: center;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);\n  background-color: ${({\n  theme\n}) => theme.color.white};\n  cursor: pointer;\n  position: relative;\n`;\n_c = StyledContainer;\nconst StepIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  flex: 1;\n`;\n_c2 = StepIcon;\nconst StepTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3`\n  font-size: 21px;\n  font-weight: 700;\n`;\n_c3 = StepTitle;\nconst DescriptionContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].section)`\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: calc(100% + 4px);\n  overflow: hidden;\n  background-color: ${({\n  theme\n}) => theme.color.white};\n  border: 2px solid ${({\n  theme\n}) => theme.color.primary400};\n  align-items: center;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);\n  background-color: ${({\n  theme\n}) => theme.color.white};\n  z-index: 10;\n`;\n_c4 = DescriptionContainer;\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p`\n  font-size: 17px;\n  margin-top: 20px;\n`;\n_c5 = Description;\nconst TemplateStep = ({\n  icon,\n  title,\n  description\n}) => {\n  _s();\n\n  const [showDescription, setShowDescription] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n\n  const handleMouseEnter = () => {\n    setShowDescription(true);\n  };\n\n  const handleMouseLeave = () => {\n    setShowDescription(false);\n  };\n\n  return __jsx(StyledContainer, {\n    onMouseEnter: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    className: \"template-step\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, __jsx(StepIcon, {\n    alt: \"Template step\",\n    src: `${\"\"}/icons/template/${icon}.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }), __jsx(StepTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, \"1. Short introduction\"), showDescription && __jsx(DescriptionContainer, {\n    initial: {\n      height: 0,\n      opacity: 0\n    },\n    animate: {\n      height: 'fit-content',\n      minHeight: '100%',\n      opacity: 1\n    },\n    transition: {\n      duration: 0.4,\n      easings: true\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(StepTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, title), __jsx(Description, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, description)));\n};\n\n_s(TemplateStep, \"DFzql2HwpOP7ymR7ubqygTxctnU=\");\n\n_c6 = TemplateStep;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"StyledContainer\");\n$RefreshReg$(_c2, \"StepIcon\");\n$RefreshReg$(_c3, \"StepTitle\");\n$RefreshReg$(_c4, \"DescriptionContainer\");\n$RefreshReg$(_c5, \"Description\");\n$RefreshReg$(_c6, \"TemplateStep\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS1zdGVwL3RlbXBsYXRlLXN0ZXAuY29tcG9uZW50LnRzeD8xNTkxIl0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJ0aGVtZSIsImNvbG9yIiwicHJpbWFyeTQwMCIsIndoaXRlIiwiU3RlcEljb24iLCJpbWciLCJTdGVwVGl0bGUiLCJoMyIsIkRlc2NyaXB0aW9uQ29udGFpbmVyIiwibW90aW9uIiwiRGVzY3JpcHRpb24iLCJwIiwiVGVtcGxhdGVTdGVwIiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzaG93RGVzY3JpcHRpb24iLCJzZXRTaG93RGVzY3JpcHRpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJwcm9jZXNzIiwiaGVpZ2h0Iiwib3BhY2l0eSIsIm1pbkhlaWdodCIsImR1cmF0aW9uIiwiZWFzaW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsT0FBUTs7O3NCQUdqQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBVzs7Ozs7c0JBS3RDLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxLQUFNOzs7Q0FSdkQ7S0FBTU4sZTtBQWFOLE1BQU1PLFFBQVEsR0FBR04seURBQU0sQ0FBQ08sR0FBSTs7Q0FBNUI7TUFBTUQsUTtBQUlOLE1BQU1FLFNBQVMsR0FBR1IseURBQU0sQ0FBQ1MsRUFBRzs7O0NBQTVCO01BQU1ELFM7QUFLTixNQUFNRSxvQkFBb0IsR0FBR1YsaUVBQU0sQ0FBQ1csb0RBQU0sQ0FBQ1YsT0FBUixDQUFpQjs7Ozs7O3NCQU05QixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBTTtzQkFDakMsQ0FBQztBQUFFSDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVc7Ozs7O3NCQUt0QyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBTTs7Q0FadkQ7TUFBTUssb0I7QUFnQk4sTUFBTUUsV0FBVyxHQUFHWix5REFBTSxDQUFDYSxDQUFFOzs7Q0FBN0I7TUFBTUQsVztBQVdDLE1BQU1FLFlBQVksR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsT0FBUjtBQUFlQztBQUFmLENBQUQsS0FBcUQ7QUFBQTs7QUFDL0UsUUFBTSxDQUFDQyxlQUFELEVBQWtCQyxrQkFBbEIsSUFBd0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTlDOztBQUVBLFFBQU1DLGdCQUFnQixHQUFHLE1BQU07QUFDN0JILHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLFFBQU1JLGdCQUFnQixHQUFHLE1BQU07QUFDN0JKLHNCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyxlQUFEO0FBQ0UsZ0JBQVksRUFBRUcsZ0JBRGhCO0FBRUUsZ0JBQVksRUFBRUMsZ0JBRmhCO0FBR0UsYUFBUyxFQUFDLGVBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsUUFBRDtBQUNFLE9BQUcsRUFBQyxlQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVDLEVBQXlCLG1CQUFrQlQsSUFBSyxNQUYxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFTRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFURixFQVVHRyxlQUFlLElBQ2QsTUFBQyxvQkFBRDtBQUNFLFdBQU8sRUFBRTtBQUNQTyxZQUFNLEVBQUUsQ0FERDtBQUVQQyxhQUFPLEVBQUU7QUFGRixLQURYO0FBS0UsV0FBTyxFQUFFO0FBQ1BELFlBQU0sRUFBRSxhQUREO0FBRVBFLGVBQVMsRUFBRSxNQUZKO0FBR1BELGFBQU8sRUFBRTtBQUhGLEtBTFg7QUFVRSxjQUFVLEVBQUU7QUFDVkUsY0FBUSxFQUFFLEdBREE7QUFFVkMsYUFBTyxFQUFFO0FBRkMsS0FWZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWWIsS0FBWixDQWZGLEVBZ0JFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWNDLFdBQWQsQ0FoQkYsQ0FYSixDQURGO0FBaUNELENBNUNNOztHQUFNSCxZOztNQUFBQSxZIiwiZmlsZSI6Ii4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS1zdGVwL3RlbXBsYXRlLXN0ZXAuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5NDAwfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci53aGl0ZX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3RlcEljb24gPSBzdHlsZWQuaW1nYFxuICBmbGV4OiAxO1xuYDtcblxuY29uc3QgU3RlcFRpdGxlID0gc3R5bGVkLmgzYFxuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG5gO1xuXG5jb25zdCBEZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAtMnB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci53aGl0ZX07XG4gIGJvcmRlcjogMnB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeTQwMH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iud2hpdGV9O1xuICB6LWluZGV4OiAxMDtcbmA7XG5cbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbmA7XG5cbmludGVyZmFjZSBUZW1wbGF0ZVN0ZXBQcm9wcyB7XG4gIGljb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlU3RlcCA9ICh7IGljb24sIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBUZW1wbGF0ZVN0ZXBQcm9wcykgPT4ge1xuICBjb25zdCBbc2hvd0Rlc2NyaXB0aW9uLCBzZXRTaG93RGVzY3JpcHRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0Rlc2NyaXB0aW9uKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0Rlc2NyaXB0aW9uKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXJcbiAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgIGNsYXNzTmFtZT1cInRlbXBsYXRlLXN0ZXBcIlxuICAgID5cbiAgICAgIDxTdGVwSWNvblxuICAgICAgICBhbHQ9XCJUZW1wbGF0ZSBzdGVwXCJcbiAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL3RlbXBsYXRlLyR7aWNvbn0uc3ZnYH1cbiAgICAgIC8+XG4gICAgICA8U3RlcFRpdGxlPjEuIFNob3J0IGludHJvZHVjdGlvbjwvU3RlcFRpdGxlPlxuICAgICAge3Nob3dEZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDxEZXNjcmlwdGlvbkNvbnRhaW5lclxuICAgICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6ICdmaXQtY29udGVudCcsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC40LFxuICAgICAgICAgICAgZWFzaW5nczogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0ZXBUaXRsZT57dGl0bGV9PC9TdGVwVGl0bGU+XG4gICAgICAgICAgPERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPlxuICAgICAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgKX1cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/template/template-step/template-step.component.tsx\n");

/***/ })

})