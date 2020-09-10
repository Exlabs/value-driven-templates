webpackHotUpdate_N_E("pages/template",{

/***/ "./src/app/template/template-step/template-step.component.tsx":
/*!********************************************************************!*\
  !*** ./src/app/template/template-step/template-step.component.tsx ***!
  \********************************************************************/
/*! exports provided: TemplateStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TemplateStep\", function() { return TemplateStep; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/template-step/template-step.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section`\n  display: flex;\n  flex-direction: column;\n  border: 2px solid ${({\n  theme\n}) => theme.color.primary400};\n  align-items: center;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);\n  background-color: ${({\n  theme\n}) => theme.color.white};\n  cursor: pointer;\n  position: relative;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    padding: 10px;\n  }\n`;\n_c = StyledContainer;\nconst StepIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img`\n  width: 80%;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    width: 60%;\n  }\n`;\n_c2 = StepIcon;\nconst StepTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3`\n  font-size: 21px;\n  font-weight: 700;\n  margin: 10px 0;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 17px;\n  }\n`;\n_c3 = StepTitle;\nconst DescriptionContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].section)`\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: calc(100% + 4px);\n  overflow: hidden;\n  background-color: ${({\n  theme\n}) => theme.color.white};\n  border: 2px solid ${({\n  theme\n}) => theme.color.primary400};\n  align-items: center;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);\n  background-color: ${({\n  theme\n}) => theme.color.white};\n  z-index: 10;\n`;\n_c4 = DescriptionContainer;\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p`\n  font-size: 17px;\n  margin-top: 20px;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 15px;\n  }\n`;\n_c5 = Description;\nconst TemplateStep = ({\n  icon,\n  title,\n  description\n}) => {\n  _s();\n\n  const [showDescription, setShowDescription] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n\n  const handleMouseEnter = () => {\n    setShowDescription(true);\n  };\n\n  const handleMouseLeave = () => {\n    setShowDescription(false);\n  };\n\n  const handleClick = () => {\n    setShowDescription(!showDescription);\n  };\n\n  return __jsx(StyledContainer, {\n    onMouseEnter: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    onClick: handleClick,\n    className: \"template-step\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(StepIcon, {\n    alt: \"Template step\",\n    src: `${\"\"}/icons/template/${icon}.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }), __jsx(StepTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, title), showDescription && __jsx(DescriptionContainer, {\n    initial: {\n      height: 0,\n      opacity: 0\n    },\n    animate: {\n      height: 'fit-content',\n      minHeight: '100%',\n      opacity: 1\n    },\n    transition: {\n      duration: 0.5,\n      easings: true\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(StepTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, title), __jsx(Description, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, description)));\n};\n\n_s(TemplateStep, \"DFzql2HwpOP7ymR7ubqygTxctnU=\");\n\n_c6 = TemplateStep;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"StyledContainer\");\n$RefreshReg$(_c2, \"StepIcon\");\n$RefreshReg$(_c3, \"StepTitle\");\n$RefreshReg$(_c4, \"DescriptionContainer\");\n$RefreshReg$(_c5, \"Description\");\n$RefreshReg$(_c6, \"TemplateStep\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS1zdGVwL3RlbXBsYXRlLXN0ZXAuY29tcG9uZW50LnRzeD8xNTkxIl0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJ0aGVtZSIsImNvbG9yIiwicHJpbWFyeTQwMCIsIndoaXRlIiwiZGV2aWNlQnJlYWtwb2ludCIsIm1vYmlsZSIsIlN0ZXBJY29uIiwiaW1nIiwiU3RlcFRpdGxlIiwiaDMiLCJEZXNjcmlwdGlvbkNvbnRhaW5lciIsIm1vdGlvbiIsIkRlc2NyaXB0aW9uIiwicCIsIlRlbXBsYXRlU3RlcCIsImljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2hvd0Rlc2NyaXB0aW9uIiwic2V0U2hvd0Rlc2NyaXB0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGFuZGxlQ2xpY2siLCJwcm9jZXNzIiwiaGVpZ2h0Iiwib3BhY2l0eSIsIm1pbkhlaWdodCIsImR1cmF0aW9uIiwiZWFzaW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsT0FBUTs7O3NCQUdqQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBVzs7Ozs7c0JBS3RDLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxLQUFNOzs7O2tDQUlyQixDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLGdCQUFOLENBQXVCQyxNQUFPOzs7Q0FaL0U7S0FBTVIsZTtBQWlCTixNQUFNUyxRQUFRLEdBQUdSLHlEQUFNLENBQUNTLEdBQUk7OztrQ0FHTSxDQUFDO0FBQUVQO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLGdCQUFOLENBQXVCQyxNQUFPOzs7Q0FIL0U7TUFBTUMsUTtBQVFOLE1BQU1FLFNBQVMsR0FBR1YseURBQU0sQ0FBQ1csRUFBRzs7Ozs7a0NBS00sQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxnQkFBTixDQUF1QkMsTUFBTzs7O0NBTC9FO01BQU1HLFM7QUFVTixNQUFNRSxvQkFBb0IsR0FBR1osaUVBQU0sQ0FBQ2Esb0RBQU0sQ0FBQ1osT0FBUixDQUFpQjs7Ozs7O3NCQU05QixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBTTtzQkFDakMsQ0FBQztBQUFFSDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVc7Ozs7O3NCQUt0QyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBTTs7Q0FadkQ7TUFBTU8sb0I7QUFnQk4sTUFBTUUsV0FBVyxHQUFHZCx5REFBTSxDQUFDZSxDQUFFOzs7O2tDQUlLLENBQUM7QUFBRWI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUJDLE1BQU87OztDQUovRTtNQUFNTyxXO0FBZUMsTUFBTUUsWUFBWSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDO0FBQWYsQ0FBRCxLQUFxRDtBQUFBOztBQUMvRSxRQUFNLENBQUNDLGVBQUQsRUFBa0JDLGtCQUFsQixJQUF3Q0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBOUM7O0FBRUEsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3Qkgsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNELEdBRkQ7O0FBSUEsUUFBTUksZ0JBQWdCLEdBQUcsTUFBTTtBQUM3Qkosc0JBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUNELEdBRkQ7O0FBSUEsUUFBTUssV0FBVyxHQUFHLE1BQU07QUFDeEJMLHNCQUFrQixDQUFDLENBQUNELGVBQUYsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyxlQUFEO0FBQ0UsZ0JBQVksRUFBRUksZ0JBRGhCO0FBRUUsZ0JBQVksRUFBRUMsZ0JBRmhCO0FBR0UsV0FBTyxFQUFFQyxXQUhYO0FBSUUsYUFBUyxFQUFDLGVBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsUUFBRDtBQUNFLE9BQUcsRUFBQyxlQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVDLEVBQXlCLG1CQUFrQlYsSUFBSyxNQUYxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFVRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFZQyxLQUFaLENBVkYsRUFXR0UsZUFBZSxJQUNkLE1BQUMsb0JBQUQ7QUFDRSxXQUFPLEVBQUU7QUFDUFEsWUFBTSxFQUFFLENBREQ7QUFFUEMsYUFBTyxFQUFFO0FBRkYsS0FEWDtBQUtFLFdBQU8sRUFBRTtBQUNQRCxZQUFNLEVBQUUsYUFERDtBQUVQRSxlQUFTLEVBQUUsTUFGSjtBQUdQRCxhQUFPLEVBQUU7QUFIRixLQUxYO0FBVUUsY0FBVSxFQUFFO0FBQ1ZFLGNBQVEsRUFBRSxHQURBO0FBRVZDLGFBQU8sRUFBRTtBQUZDLEtBVmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlkLEtBQVosQ0FmRixFQWdCRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQyxXQUFkLENBaEJGLENBWkosQ0FERjtBQWtDRCxDQWpETTs7R0FBTUgsWTs7TUFBQUEsWSIsImZpbGUiOiIuL3NyYy9hcHAvdGVtcGxhdGUvdGVtcGxhdGUtc3RlcC90ZW1wbGF0ZS1zdGVwLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMnB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeTQwMH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iud2hpdGV9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0ZXBJY29uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDgwJTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0ZXBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDEwcHggMDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuYDtcblxuY29uc3QgRGVzY3JpcHRpb25Db250YWluZXIgPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogLTJweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iud2hpdGV9O1xuICBib3JkZXI6IDJweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnk0MDB9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLndoaXRlfTtcbiAgei1pbmRleDogMTA7XG5gO1xuXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBUZW1wbGF0ZVN0ZXBQcm9wcyB7XG4gIGljb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlU3RlcCA9ICh7IGljb24sIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBUZW1wbGF0ZVN0ZXBQcm9wcykgPT4ge1xuICBjb25zdCBbc2hvd0Rlc2NyaXB0aW9uLCBzZXRTaG93RGVzY3JpcHRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0Rlc2NyaXB0aW9uKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0Rlc2NyaXB0aW9uKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRTaG93RGVzY3JpcHRpb24oIXNob3dEZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyXG4gICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIGNsYXNzTmFtZT1cInRlbXBsYXRlLXN0ZXBcIlxuICAgID5cbiAgICAgIDxTdGVwSWNvblxuICAgICAgICBhbHQ9XCJUZW1wbGF0ZSBzdGVwXCJcbiAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL3RlbXBsYXRlLyR7aWNvbn0uc3ZnYH1cbiAgICAgIC8+XG4gICAgICA8U3RlcFRpdGxlPnt0aXRsZX08L1N0ZXBUaXRsZT5cbiAgICAgIHtzaG93RGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8RGVzY3JpcHRpb25Db250YWluZXJcbiAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAnZml0LWNvbnRlbnQnLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICAgIGVhc2luZ3M6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGVwVGl0bGU+e3RpdGxlfTwvU3RlcFRpdGxlPlxuICAgICAgICAgIDxEZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9EZXNjcmlwdGlvbj5cbiAgICAgICAgPC9EZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9TdHlsZWRDb250YWluZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/template/template-step/template-step.component.tsx\n");

/***/ })

})