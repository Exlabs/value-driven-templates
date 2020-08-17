webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/providers/layout.provider.tsx":
/*!*******************************************!*\
  !*** ./src/providers/layout.provider.tsx ***!
  \*******************************************/
/*! exports provided: LayoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutProvider\", function() { return LayoutProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/theme-config */ \"./src/theme/theme-config.ts\");\n/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ \"./src/ui/navigation/navigation.component.tsx\");\n/* harmony import */ var _hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-sticky-nav/use-sticky-nav.hook */ \"./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts\");\n/* harmony import */ var _ui_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/mobile-menu/mobile-menu.component */ \"./src/ui/mobile-menu/mobile-menu.component.tsx\");\n/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/footer/footer.component */ \"./src/ui/footer/footer.component.tsx\");\n\n\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/layout.provider.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nconst AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  max-width: 1620px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  min-height: 100vh;\n  background-color: ${({\n  theme\n}) => theme.color.background};\n  -webkit-overflow-scrolling: touch;\n\n  & .footer {\n    margin-top: 30px;\n  }\n`;\n_c = AppContainer;\nconst LayoutProvider = ({\n  children\n}) => {\n  _s();\n\n  const stickyRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n  const isStickyNavigation = Object(_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__[\"useStickyNav\"])({\n    stickyRef\n  });\n  const {\n    state: {\n      isVisible: isMobileMenuVisible\n    }\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__[\"useMobileMenu\"])();\n  return __jsx(AppContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"282383119\",\n    __self: undefined\n  }, \"html,body{-webkit-overflow-scrolling:touch;margin:0;padding:0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZS1kcml2ZW4tdGVtcGxhdGVzL3NyYy9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ1MsQUFJOEMsaUNBQ3hCLFNBQ0MsVUFDWiIsImZpbGUiOiIvVXNlcnMvbWlrb2xhandhcmdvd3NraS9Eb2N1bWVudHMvcHJvamVjdHMvdmFsdWUtZHJpdmVuLXRlbXBsYXRlcy9zcmMvcHJvdmlkZXJzL2xheW91dC5wcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VNb2JpbGVNZW51IH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuLi91aS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IHVzZVN0aWNreU5hdiB9IGZyb20gJy4uL2hvb2tzL3VzZS1zdGlja3ktbmF2L3VzZS1zdGlja3ktbmF2Lmhvb2snO1xuaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gJy4uL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IEFwcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTYyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICYgLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3Qgc3RpY2t5UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGlzU3RpY2t5TmF2aWdhdGlvbiA9IHVzZVN0aWNreU5hdih7IHN0aWNreVJlZiB9KTtcblxuICBjb25zdCB7XG4gICAgc3RhdGU6IHsgaXNWaXNpYmxlOiBpc01vYmlsZU1lbnVWaXNpYmxlIH0sXG4gIH0gPSB1c2VNb2JpbGVNZW51KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIHtpc1N0aWNreU5hdmlnYXRpb24gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogJzU0cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3N0aWNreVJlZn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi4oaXNTdGlja3lOYXZpZ2F0aW9uICYmIHsgcG9zaXRpb246ICdmaXhlZCcgfSksXG4gICAgICAgICAgLi4uKGlzU3RpY2t5TmF2aWdhdGlvbiAmJiB7IHdpZHRoOiAnY2FsYygxMDAlIC0gNDBweCknIH0pLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTU4MHB4JyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgIC4uLihpc1N0aWNreU5hdmlnYXRpb24gJiYgeyBwYWRkaW5nOiAnMTBweCAwJyB9KSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7aXNNb2JpbGVNZW51VmlzaWJsZSAmJiA8TW9iaWxlTWVudSAvPn1cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L0FwcENvbnRhaW5lcj5cbiAgKTtcbn07XG4iXX0= */\\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/layout.provider.tsx */\"), isStickyNavigation && __jsx(\"div\", {\n    style: {\n      height: '54px'\n    },\n    className: \"jsx-282383119\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    ref: stickyRef,\n    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, isStickyNavigation && {\n      position: 'fixed'\n    }), isStickyNavigation && {\n      width: 'calc(100% - 40px)'\n    }), {}, {\n      maxWidth: '1580px',\n      top: 0,\n      zIndex: 9999\n    }, isStickyNavigation && {\n      padding: '10px 0'\n    }), {}, {\n      background: _theme_theme_config__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].color.background\n    }),\n    className: \"jsx-282383119\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__[\"Navigation\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  })), children, isMobileMenuVisible && __jsx(_ui_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__[\"MobileMenu\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 31\n    }\n  }), __jsx(_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__[\"Footer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(LayoutProvider, \"svXSvaVPkg/GflKvguvJYi884eU=\", false, function () {\n  return [_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__[\"useStickyNav\"], _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__[\"useMobileMenu\"]];\n});\n\n_c2 = LayoutProvider;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AppContainer\");\n$RefreshReg$(_c2, \"LayoutProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXIudHN4P2Q5NTMiXSwibmFtZXMiOlsiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJMYXlvdXRQcm92aWRlciIsImNoaWxkcmVuIiwic3RpY2t5UmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJpc1N0aWNreU5hdmlnYXRpb24iLCJ1c2VTdGlja3lOYXYiLCJzdGF0ZSIsImlzVmlzaWJsZSIsImlzTW9iaWxlTWVudVZpc2libGUiLCJ1c2VNb2JpbGVNZW51IiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ3aWR0aCIsIm1heFdpZHRoIiwidG9wIiwiekluZGV4IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFJOzs7OztzQkFLVixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBVzs7Ozs7O0NBTDVEO0tBQU1MLFk7QUFhQyxNQUFNTSxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUQ7QUFBQTs7QUFDN0UsUUFBTUMsU0FBUyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUFsQjtBQUVBLFFBQU1DLGtCQUFrQixHQUFHQyw4RkFBWSxDQUFDO0FBQUVKO0FBQUYsR0FBRCxDQUF2QztBQUVBLFFBQU07QUFDSkssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRUM7QUFBYjtBQURILE1BRUZDLGlHQUFhLEVBRmpCO0FBSUEsU0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvckdBV0dMLGtCQUFrQixJQUNqQjtBQUNFLFNBQUssRUFBRTtBQUNMTSxZQUFNLEVBQUU7QUFESCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLEVBa0JFO0FBQ0UsT0FBRyxFQUFFVCxTQURQO0FBRUUsU0FBSyw4REFDQ0csa0JBQWtCLElBQUk7QUFBRU8sY0FBUSxFQUFFO0FBQVosS0FEdkIsR0FFQ1Asa0JBQWtCLElBQUk7QUFBRVEsV0FBSyxFQUFFO0FBQVQsS0FGdkI7QUFHSEMsY0FBUSxFQUFFLFFBSFA7QUFJSEMsU0FBRyxFQUFFLENBSkY7QUFLSEMsWUFBTSxFQUFFO0FBTEwsT0FNQ1gsa0JBQWtCLElBQUk7QUFBRVksYUFBTyxFQUFFO0FBQVgsS0FOdkI7QUFPSGxCLGdCQUFVLEVBQUVGLHlEQUFLLENBQUNDLEtBQU4sQ0FBWUM7QUFQckIsTUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQWxCRixFQWdDR0UsUUFoQ0gsRUFpQ0dRLG1CQUFtQixJQUFJLE1BQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDMUIsRUFrQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLENBREY7QUFzQ0QsQ0EvQ007O0dBQU1ULGM7VUFHZ0JNLHNGLEVBSXZCSSx5Rjs7O01BUE9WLGMiLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL2xheW91dC5wcm92aWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VNb2JpbGVNZW51IH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuLi91aS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IHVzZVN0aWNreU5hdiB9IGZyb20gJy4uL2hvb2tzL3VzZS1zdGlja3ktbmF2L3VzZS1zdGlja3ktbmF2Lmhvb2snO1xuaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gJy4uL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IEFwcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTYyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICYgLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3Qgc3RpY2t5UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGlzU3RpY2t5TmF2aWdhdGlvbiA9IHVzZVN0aWNreU5hdih7IHN0aWNreVJlZiB9KTtcblxuICBjb25zdCB7XG4gICAgc3RhdGU6IHsgaXNWaXNpYmxlOiBpc01vYmlsZU1lbnVWaXNpYmxlIH0sXG4gIH0gPSB1c2VNb2JpbGVNZW51KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIHtpc1N0aWNreU5hdmlnYXRpb24gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogJzU0cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3N0aWNreVJlZn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi4oaXNTdGlja3lOYXZpZ2F0aW9uICYmIHsgcG9zaXRpb246ICdmaXhlZCcgfSksXG4gICAgICAgICAgLi4uKGlzU3RpY2t5TmF2aWdhdGlvbiAmJiB7IHdpZHRoOiAnY2FsYygxMDAlIC0gNDBweCknIH0pLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTU4MHB4JyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgIC4uLihpc1N0aWNreU5hdmlnYXRpb24gJiYgeyBwYWRkaW5nOiAnMTBweCAwJyB9KSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7aXNNb2JpbGVNZW51VmlzaWJsZSAmJiA8TW9iaWxlTWVudSAvPn1cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L0FwcENvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/providers/layout.provider.tsx\n");

/***/ })

})