webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/providers/layout.provider.tsx":
/*!*******************************************!*\
  !*** ./src/providers/layout.provider.tsx ***!
  \*******************************************/
/*! exports provided: AppContainer, LayoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppContainer\", function() { return AppContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutProvider\", function() { return LayoutProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/theme-config */ \"./src/theme/theme-config.ts\");\n/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ \"./src/ui/navigation/navigation.component.tsx\");\n/* harmony import */ var _hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-sticky-nav/use-sticky-nav.hook */ \"./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts\");\n/* harmony import */ var _ui_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/mobile-menu/mobile-menu.component */ \"./src/ui/mobile-menu/mobile-menu.component.tsx\");\n/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/footer/footer.component */ \"./src/ui/footer/footer.component.tsx\");\n\n\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/layout.provider.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nconst AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  max-width: 1620px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  background-color: ${({\n  theme\n}) => theme.color.background};\n\n  & .footer {\n    margin-top: 30px;\n  }\n`;\n_c = AppContainer;\nconst LayoutProvider = ({\n  children\n}) => {\n  _s();\n\n  const stickyRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n  const isStickyNavigation = Object(_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__[\"useStickyNav\"])({\n    stickyRef\n  });\n  const {\n    state: {\n      isVisible: isMobileMenuVisible\n    }\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__[\"useMobileMenu\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"282383119\",\n    __self: undefined\n  }, \"html,body{-webkit-overflow-scrolling:touch;margin:0;padding:0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZS1kcml2ZW4tdGVtcGxhdGVzL3NyYy9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1MsQUFJOEMsaUNBQ3hCLFNBQ0MsVUFDWiIsImZpbGUiOiIvVXNlcnMvbWlrb2xhandhcmdvd3NraS9Eb2N1bWVudHMvcHJvamVjdHMvdmFsdWUtZHJpdmVuLXRlbXBsYXRlcy9zcmMvcHJvdmlkZXJzL2xheW91dC5wcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VNb2JpbGVNZW51IH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuLi91aS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IHVzZVN0aWNreU5hdiB9IGZyb20gJy4uL2hvb2tzL3VzZS1zdGlja3ktbmF2L3VzZS1zdGlja3ktbmF2Lmhvb2snO1xuaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gJy4uL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBBcHBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDE2MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcblxuICAmIC5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IHN0aWNreVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBjb25zdCBpc1N0aWNreU5hdmlnYXRpb24gPSB1c2VTdGlja3lOYXYoeyBzdGlja3lSZWYgfSk7XG5cbiAgY29uc3Qge1xuICAgIHN0YXRlOiB7IGlzVmlzaWJsZTogaXNNb2JpbGVNZW51VmlzaWJsZSB9LFxuICB9ID0gdXNlTW9iaWxlTWVudSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICB7aXNTdGlja3lOYXZpZ2F0aW9uICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6ICc1NHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3N0aWNreVJlZn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uKGlzU3RpY2t5TmF2aWdhdGlvbiAmJiB7IHBvc2l0aW9uOiAnZml4ZWQnIH0pLFxuICAgICAgICAgICAgLi4uKGlzU3RpY2t5TmF2aWdhdGlvbiAmJiB7IHdpZHRoOiAnY2FsYygxMDAlIC0gNDBweCknIH0pLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxNjIwcHgnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgLi4uKGlzU3RpY2t5TmF2aWdhdGlvbiAmJiB7IHBhZGRpbmc6ICcxMHB4IDAnIH0pLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3IuYmFja2dyb3VuZCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtpc01vYmlsZU1lbnVWaXNpYmxlICYmIDxNb2JpbGVNZW51IC8+fVxuICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/layout.provider.tsx */\"), isStickyNavigation && __jsx(\"div\", {\n    style: {\n      height: '54px'\n    },\n    className: \"jsx-282383119\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }), __jsx(AppContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: stickyRef,\n    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, isStickyNavigation && {\n      position: 'fixed'\n    }), isStickyNavigation && {\n      width: 'calc(100% - 40px)'\n    }), {}, {\n      maxWidth: '1620px',\n      top: 0,\n      zIndex: 9999\n    }, isStickyNavigation && {\n      padding: '10px 0'\n    }), {}, {\n      background: _theme_theme_config__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].color.background\n    }),\n    className: \"jsx-282383119\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__[\"Navigation\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }))), children, isMobileMenuVisible && __jsx(_ui_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__[\"MobileMenu\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 31\n    }\n  }), __jsx(AppContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__[\"Footer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(LayoutProvider, \"svXSvaVPkg/GflKvguvJYi884eU=\", false, function () {\n  return [_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__[\"useStickyNav\"], _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__[\"useMobileMenu\"]];\n});\n\n_c2 = LayoutProvider;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AppContainer\");\n$RefreshReg$(_c2, \"LayoutProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXIudHN4P2Q5NTMiXSwibmFtZXMiOlsiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJMYXlvdXRQcm92aWRlciIsImNoaWxkcmVuIiwic3RpY2t5UmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJpc1N0aWNreU5hdmlnYXRpb24iLCJ1c2VTdGlja3lOYXYiLCJzdGF0ZSIsImlzVmlzaWJsZSIsImlzTW9iaWxlTWVudVZpc2libGUiLCJ1c2VNb2JpbGVNZW51IiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ3aWR0aCIsIm1heFdpZHRoIiwidG9wIiwiekluZGV4IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBSTs7OztzQkFJakIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVc7Ozs7O0NBSnJEO0tBQU1MLFk7QUFXTixNQUFNTSxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUQ7QUFBQTs7QUFDN0UsUUFBTUMsU0FBUyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUFsQjtBQUVBLFFBQU1DLGtCQUFrQixHQUFHQyw4RkFBWSxDQUFDO0FBQUVKO0FBQUYsR0FBRCxDQUF2QztBQUVBLFFBQU07QUFDSkssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRUM7QUFBYjtBQURILE1BRUZDLGlHQUFhLEVBRmpCO0FBSUEsU0FDRTtBQUFBO0FBQUE7QUFBQSw0dUdBV0dMLGtCQUFrQixJQUNqQjtBQUNFLFNBQUssRUFBRTtBQUNMTSxZQUFNLEVBQUU7QUFESCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLEVBa0JFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVULFNBRFA7QUFFRSxTQUFLLDhEQUNDRyxrQkFBa0IsSUFBSTtBQUFFTyxjQUFRLEVBQUU7QUFBWixLQUR2QixHQUVDUCxrQkFBa0IsSUFBSTtBQUFFUSxXQUFLLEVBQUU7QUFBVCxLQUZ2QjtBQUdIQyxjQUFRLEVBQUUsUUFIUDtBQUlIQyxTQUFHLEVBQUUsQ0FKRjtBQUtIQyxZQUFNLEVBQUU7QUFMTCxPQU1DWCxrQkFBa0IsSUFBSTtBQUFFWSxhQUFPLEVBQUU7QUFBWCxLQU52QjtBQU9IbEIsZ0JBQVUsRUFBRUYseURBQUssQ0FBQ0MsS0FBTixDQUFZQztBQVByQixNQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREYsQ0FsQkYsRUFrQ0dFLFFBbENILEVBbUNHUSxtQkFBbUIsSUFBSSxNQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQzFCLEVBb0NFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FwQ0YsQ0FERjtBQTBDRCxDQW5ETTs7R0FBTVQsYztVQUdnQk0sc0YsRUFJdkJJLHlGOzs7TUFQT1YsYyIsImZpbGUiOiIuL3NyYy9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZU1vYmlsZU1lbnUgfSBmcm9tICcuLi9ob29rcy91c2UtbW9iaWxlLW1lbnUvdXNlLW1vYmlsZS1tZW51Lmhvb2snO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4uL3VpL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgdXNlU3RpY2t5TmF2IH0gZnJvbSAnLi4vaG9va3MvdXNlLXN0aWNreS1uYXYvdXNlLXN0aWNreS1uYXYuaG9vayc7XG5pbXBvcnQgeyBNb2JpbGVNZW51IH0gZnJvbSAnLi4vdWkvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTYyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuXG4gICYgLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3Qgc3RpY2t5UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGlzU3RpY2t5TmF2aWdhdGlvbiA9IHVzZVN0aWNreU5hdih7IHN0aWNreVJlZiB9KTtcblxuICBjb25zdCB7XG4gICAgc3RhdGU6IHsgaXNWaXNpYmxlOiBpc01vYmlsZU1lbnVWaXNpYmxlIH0sXG4gIH0gPSB1c2VNb2JpbGVNZW51KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIHtpc1N0aWNreU5hdmlnYXRpb24gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogJzU0cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17c3RpY2t5UmVmfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi4oaXNTdGlja3lOYXZpZ2F0aW9uICYmIHsgcG9zaXRpb246ICdmaXhlZCcgfSksXG4gICAgICAgICAgICAuLi4oaXNTdGlja3lOYXZpZ2F0aW9uICYmIHsgd2lkdGg6ICdjYWxjKDEwMCUgLSA0MHB4KScgfSksXG4gICAgICAgICAgICBtYXhXaWR0aDogJzE2MjBweCcsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTksXG4gICAgICAgICAgICAuLi4oaXNTdGlja3lOYXZpZ2F0aW9uICYmIHsgcGFkZGluZzogJzEwcHggMCcgfSksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAge2NoaWxkcmVufVxuICAgICAge2lzTW9iaWxlTWVudVZpc2libGUgJiYgPE1vYmlsZU1lbnUgLz59XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/providers/layout.provider.tsx\n");

/***/ })

})