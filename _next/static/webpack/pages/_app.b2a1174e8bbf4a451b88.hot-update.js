webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/providers/layout.provider.tsx":
/*!*******************************************!*\
  !*** ./src/providers/layout.provider.tsx ***!
  \*******************************************/
/*! exports provided: LayoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutProvider\", function() { return LayoutProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ \"./src/ui/navigation/navigation.component.tsx\");\n/* harmony import */ var _hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-sticky-nav/use-sticky-nav.hook */ \"./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/layout.provider.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  max-width: 1620px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  min-height: 100vh;\n  background-color: ${({\n  theme\n}) => theme.color.background};\n`;\n_c = AppContainer;\nconst LayoutProvider = ({\n  children\n}) => {\n  _s();\n\n  const stickyRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);\n  const isStickyNavigation = Object(_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_5__[\"useStickyNav\"])({\n    stickyRef\n  });\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__[\"useDeviceDetect\"])();\n  const {\n    state: {\n      isVisible: isMobileMenuVisible\n    }\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_3__[\"useMobileMenu\"])();\n  return __jsx(AppContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, isStickyNavigation && __jsx(\"div\", {\n    style: {\n      height: '35px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    ref: stickyRef,\n    style: {\n      position: isStickyNavigation ? 'sticky' : 'initial',\n      top: '0',\n      zIndex: 9999,\n      padding: '10px 0'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__[\"Navigation\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  })), children);\n};\n\n_s(LayoutProvider, \"Qiifh8hwcAlHkmnGgvKze/MYbsM=\", false, function () {\n  return [_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_5__[\"useStickyNav\"], _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__[\"useDeviceDetect\"], _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_3__[\"useMobileMenu\"]];\n});\n\n_c2 = LayoutProvider;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AppContainer\");\n$RefreshReg$(_c2, \"LayoutProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXIudHN4P2Q5NTMiXSwibmFtZXMiOlsiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJMYXlvdXRQcm92aWRlciIsImNoaWxkcmVuIiwic3RpY2t5UmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJpc1N0aWNreU5hdmlnYXRpb24iLCJ1c2VTdGlja3lOYXYiLCJpc01vYmlsZSIsInVzZURldmljZURldGVjdCIsInN0YXRlIiwiaXNWaXNpYmxlIiwiaXNNb2JpbGVNZW51VmlzaWJsZSIsInVzZU1vYmlsZU1lbnUiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQSxNQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7Ozs7O3NCQUtWLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFXO0NBTDVEO0tBQU1MLFk7QUFRQyxNQUFNTSxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUQ7QUFBQTs7QUFDN0UsUUFBTUMsU0FBUyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUFsQjtBQUVBLFFBQU1DLGtCQUFrQixHQUFHQyw4RkFBWSxDQUFDO0FBQUVKO0FBQUYsR0FBRCxDQUF2QztBQUNBLFFBQU07QUFBRUs7QUFBRixNQUFlQyx1R0FBZSxFQUFwQztBQUVBLFFBQU07QUFDSkMsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRUM7QUFBYjtBQURILE1BRUZDLGlHQUFhLEVBRmpCO0FBSUEsU0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxrQkFBa0IsSUFDakI7QUFDRSxTQUFLLEVBQUU7QUFDTFEsWUFBTSxFQUFFO0FBREgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFRRTtBQUNFLE9BQUcsRUFBRVgsU0FEUDtBQUVFLFNBQUssRUFBRTtBQUNMWSxjQUFRLEVBQUVULGtCQUFrQixHQUFHLFFBQUgsR0FBYyxTQURyQztBQUVMVSxTQUFHLEVBQUUsR0FGQTtBQUdMQyxZQUFNLEVBQUUsSUFISDtBQUlMQyxhQUFPLEVBQUU7QUFKSixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQVJGLEVBbUJHaEIsUUFuQkgsQ0FERjtBQXVCRCxDQWpDTTs7R0FBTUQsYztVQUdnQk0sc0YsRUFDTkUsK0YsRUFJakJJLHlGOzs7TUFST1osYyIsImZpbGUiOiIuL3NyYy9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURldmljZURldGVjdCB9IGZyb20gJy4uL2hvb2tzL3VzZS1kZXZpY2UtZGV0ZWN0L3VzZS1kZXZpY2UtZGV0ZWN0Lmhvb2snO1xuaW1wb3J0IHsgdXNlTW9iaWxlTWVudSB9IGZyb20gJy4uL2hvb2tzL3VzZS1tb2JpbGUtbWVudS91c2UtbW9iaWxlLW1lbnUuaG9vayc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi4vdWkvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VTdGlja3lOYXYgfSBmcm9tICcuLi9ob29rcy91c2Utc3RpY2t5LW5hdi91c2Utc3RpY2t5LW5hdi5ob29rJztcbmltcG9ydCB7IE1vYmlsZU1lbnUgfSBmcm9tICcuLi91aS9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQnO1xuXG5jb25zdCBBcHBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDE2MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG5gO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBzdGlja3lSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaXNTdGlja3lOYXZpZ2F0aW9uID0gdXNlU3RpY2t5TmF2KHsgc3RpY2t5UmVmIH0pO1xuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2VEZXRlY3QoKTtcblxuICBjb25zdCB7XG4gICAgc3RhdGU6IHsgaXNWaXNpYmxlOiBpc01vYmlsZU1lbnVWaXNpYmxlIH0sXG4gIH0gPSB1c2VNb2JpbGVNZW51KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGFpbmVyPlxuICAgICAge2lzU3RpY2t5TmF2aWdhdGlvbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtzdGlja3lSZWZ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IGlzU3RpY2t5TmF2aWdhdGlvbiA/ICdzdGlja3knIDogJ2luaXRpYWwnLFxuICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICBwYWRkaW5nOiAnMTBweCAwJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/providers/layout.provider.tsx\n");

/***/ })

})