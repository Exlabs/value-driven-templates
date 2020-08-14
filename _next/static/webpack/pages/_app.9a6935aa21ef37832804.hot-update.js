webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/providers/layout.provider.tsx":
/*!*******************************************!*\
  !*** ./src/providers/layout.provider.tsx ***!
  \*******************************************/
/*! exports provided: LayoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutProvider\", function() { return LayoutProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-device-detect/use-device-detect.hook */ \"./src/hooks/use-device-detect/use-device-detect.hook.ts\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/theme-config */ \"./src/theme/theme-config.ts\");\n/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ \"./src/ui/navigation/navigation.component.tsx\");\n/* harmony import */ var _hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-sticky-nav/use-sticky-nav.hook */ \"./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts\");\n\n\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/layout.provider.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nconst AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  max-width: 1620px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  min-height: 100vh;\n  background-color: ${({\n  theme\n}) => theme.color.background};\n`;\n_c = AppContainer;\nconst LayoutProvider = ({\n  children\n}) => {\n  _s();\n\n  const stickyRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);\n  const isStickyNavigation = Object(_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__[\"useStickyNav\"])({\n    stickyRef\n  });\n  const {\n    isMobile\n  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__[\"useDeviceDetect\"])();\n  const {\n    state: {\n      isVisible: isMobileMenuVisible\n    }\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__[\"useMobileMenu\"])();\n  return __jsx(AppContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, isStickyNavigation && __jsx(\"div\", {\n    style: {\n      height: '35px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    ref: stickyRef,\n    style: _objectSpread(_objectSpread({\n      position: isStickyNavigation ? 'sticky' : 'initial',\n      top: '0',\n      zIndex: 9999\n    }, isStickyNavigation && {\n      padding: '10px 0'\n    }), {}, {\n      background: _theme_theme_config__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].color.background\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__[\"Navigation\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })), children);\n};\n\n_s(LayoutProvider, \"Qiifh8hwcAlHkmnGgvKze/MYbsM=\", false, function () {\n  return [_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__[\"useStickyNav\"], _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__[\"useDeviceDetect\"], _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__[\"useMobileMenu\"]];\n});\n\n_c2 = LayoutProvider;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AppContainer\");\n$RefreshReg$(_c2, \"LayoutProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXIudHN4P2Q5NTMiXSwibmFtZXMiOlsiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJMYXlvdXRQcm92aWRlciIsImNoaWxkcmVuIiwic3RpY2t5UmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJpc1N0aWNreU5hdmlnYXRpb24iLCJ1c2VTdGlja3lOYXYiLCJpc01vYmlsZSIsInVzZURldmljZURldGVjdCIsInN0YXRlIiwiaXNWaXNpYmxlIiwiaXNNb2JpbGVNZW51VmlzaWJsZSIsInVzZU1vYmlsZU1lbnUiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBSTs7Ozs7c0JBS1YsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVc7Q0FMNUQ7S0FBTUwsWTtBQVFDLE1BQU1NLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpRDtBQUFBOztBQUM3RSxRQUFNQyxTQUFTLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiLENBQWxCO0FBRUEsUUFBTUMsa0JBQWtCLEdBQUdDLDhGQUFZLENBQUM7QUFBRUo7QUFBRixHQUFELENBQXZDO0FBQ0EsUUFBTTtBQUFFSztBQUFGLE1BQWVDLHVHQUFlLEVBQXBDO0FBRUEsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFQztBQUFiO0FBREgsTUFFRkMsaUdBQWEsRUFGakI7QUFJQSxTQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLGtCQUFrQixJQUNqQjtBQUNFLFNBQUssRUFBRTtBQUNMUSxZQUFNLEVBQUU7QUFESCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVFFO0FBQ0UsT0FBRyxFQUFFWCxTQURQO0FBRUUsU0FBSztBQUNIWSxjQUFRLEVBQUVULGtCQUFrQixHQUFHLFFBQUgsR0FBYyxTQUR2QztBQUVIVSxTQUFHLEVBQUUsR0FGRjtBQUdIQyxZQUFNLEVBQUU7QUFITCxPQUlDWCxrQkFBa0IsSUFBSTtBQUFFWSxhQUFPLEVBQUU7QUFBWCxLQUp2QjtBQUtIbEIsZ0JBQVUsRUFBRUYseURBQUssQ0FBQ0MsS0FBTixDQUFZQztBQUxyQixNQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQVJGLEVBb0JHRSxRQXBCSCxDQURGO0FBd0JELENBbENNOztHQUFNRCxjO1VBR2dCTSxzRixFQUNORSwrRixFQUlqQkkseUY7OztNQVJPWixjIiwiZmlsZSI6Ii4vc3JjL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlRGV2aWNlRGV0ZWN0IH0gZnJvbSAnLi4vaG9va3MvdXNlLWRldmljZS1kZXRlY3QvdXNlLWRldmljZS1kZXRlY3QuaG9vayc7XG5pbXBvcnQgeyB1c2VNb2JpbGVNZW51IH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuLi91aS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IHVzZVN0aWNreU5hdiB9IGZyb20gJy4uL2hvb2tzL3VzZS1zdGlja3ktbmF2L3VzZS1zdGlja3ktbmF2Lmhvb2snO1xuaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gJy4uL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudCc7XG5cbmNvbnN0IEFwcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTYyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IHN0aWNreVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBjb25zdCBpc1N0aWNreU5hdmlnYXRpb24gPSB1c2VTdGlja3lOYXYoeyBzdGlja3lSZWYgfSk7XG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZURldGVjdCgpO1xuXG4gIGNvbnN0IHtcbiAgICBzdGF0ZTogeyBpc1Zpc2libGU6IGlzTW9iaWxlTWVudVZpc2libGUgfSxcbiAgfSA9IHVzZU1vYmlsZU1lbnUoKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICB7aXNTdGlja3lOYXZpZ2F0aW9uICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6ICczNXB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3N0aWNreVJlZn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogaXNTdGlja3lOYXZpZ2F0aW9uID8gJ3N0aWNreScgOiAnaW5pdGlhbCcsXG4gICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgIC4uLihpc1N0aWNreU5hdmlnYXRpb24gJiYgeyBwYWRkaW5nOiAnMTBweCAwJyB9KSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BcHBDb250YWluZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/providers/layout.provider.tsx\n");

/***/ })

})