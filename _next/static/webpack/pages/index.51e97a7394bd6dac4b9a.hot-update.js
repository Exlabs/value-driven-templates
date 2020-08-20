webpackHotUpdate_N_E("pages/index",{

/***/ "./src/providers/layout.provider.tsx":
/*!*******************************************!*\
  !*** ./src/providers/layout.provider.tsx ***!
  \*******************************************/
/*! exports provided: AppContainer, LayoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppContainer\", function() { return AppContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutProvider\", function() { return LayoutProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/theme-config */ \"./src/theme/theme-config.ts\");\n/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ \"./src/ui/navigation/navigation.component.tsx\");\n/* harmony import */ var _hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-sticky-nav/use-sticky-nav.hook */ \"./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts\");\n/* harmony import */ var _ui_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/mobile-menu/mobile-menu.component */ \"./src/ui/mobile-menu/mobile-menu.component.tsx\");\n/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/footer/footer.component */ \"./src/ui/footer/footer.component.tsx\");\n\n\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/layout.provider.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nconst AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  max-width: 1620px;\n  margin: 0 auto;\n  padding: 10px 20px;\n\n  & .footer {\n    margin-top: 30px;\n  }\n`;\n_c = AppContainer;\nconst LayoutProvider = ({\n  children\n}) => {\n  _s();\n\n  const stickyRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n  const isStickyNavigation = Object(_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__[\"useStickyNav\"])({\n    stickyRef\n  });\n  const {\n    state: {\n      isVisible: isMobileMenuVisible\n    }\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__[\"useMobileMenu\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"282383119\",\n    __self: undefined\n  }, \"html,body{-webkit-overflow-scrolling:touch;margin:0;padding:0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZS1kcml2ZW4tdGVtcGxhdGVzL3NyYy9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQlMsQUFJOEMsaUNBQ3hCLFNBQ0MsVUFDWiIsImZpbGUiOiIvVXNlcnMvbWlrb2xhandhcmdvd3NraS9Eb2N1bWVudHMvcHJvamVjdHMvdmFsdWUtZHJpdmVuLXRlbXBsYXRlcy9zcmMvcHJvdmlkZXJzL2xheW91dC5wcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VNb2JpbGVNZW51IH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuLi91aS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IHVzZVN0aWNreU5hdiB9IGZyb20gJy4uL2hvb2tzL3VzZS1zdGlja3ktbmF2L3VzZS1zdGlja3ktbmF2Lmhvb2snO1xuaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gJy4uL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBBcHBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDE2MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcblxuICAmIC5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IHN0aWNreVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBjb25zdCBpc1N0aWNreU5hdmlnYXRpb24gPSB1c2VTdGlja3lOYXYoeyBzdGlja3lSZWYgfSk7XG5cbiAgY29uc3Qge1xuICAgIHN0YXRlOiB7IGlzVmlzaWJsZTogaXNNb2JpbGVNZW51VmlzaWJsZSB9LFxuICB9ID0gdXNlTW9iaWxlTWVudSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICB7aXNTdGlja3lOYXZpZ2F0aW9uICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6ICc1NHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3N0aWNreVJlZn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uKGlzU3RpY2t5TmF2aWdhdGlvbiAmJiB7IHBvc2l0aW9uOiAnZml4ZWQnIH0pLFxuICAgICAgICAgICAgLi4uKGlzU3RpY2t5TmF2aWdhdGlvbiAmJiB7IHdpZHRoOiAnY2FsYygxMDAlIC0gNDBweCknIH0pLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxNjIwcHgnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgLi4uKGlzU3RpY2t5TmF2aWdhdGlvbiAmJiB7IHBhZGRpbmc6ICcxMHB4IDAnIH0pLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3IuYmFja2dyb3VuZCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtpc01vYmlsZU1lbnVWaXNpYmxlICYmIDxNb2JpbGVNZW51IC8+fVxuICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/providers/layout.provider.tsx */\"), isStickyNavigation && __jsx(\"div\", {\n    style: {\n      height: '54px'\n    },\n    className: \"jsx-282383119\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(AppContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: stickyRef,\n    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, isStickyNavigation && {\n      position: 'fixed'\n    }), isStickyNavigation && {\n      width: 'calc(100% - 40px)'\n    }), {}, {\n      maxWidth: '1620px',\n      top: 0,\n      zIndex: 9999\n    }, isStickyNavigation && {\n      padding: '10px 0'\n    }), {}, {\n      background: _theme_theme_config__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].color.background\n    }),\n    className: \"jsx-282383119\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__[\"Navigation\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }))), children, isMobileMenuVisible && __jsx(_ui_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__[\"MobileMenu\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 31\n    }\n  }), __jsx(AppContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__[\"Footer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(LayoutProvider, \"svXSvaVPkg/GflKvguvJYi884eU=\", false, function () {\n  return [_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_7__[\"useStickyNav\"], _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__[\"useMobileMenu\"]];\n});\n\n_c2 = LayoutProvider;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AppContainer\");\n$RefreshReg$(_c2, \"LayoutProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXIudHN4P2Q5NTMiXSwibmFtZXMiOlsiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTGF5b3V0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0aWNreVJlZiIsIlJlYWN0IiwidXNlUmVmIiwiaXNTdGlja3lOYXZpZ2F0aW9uIiwidXNlU3RpY2t5TmF2Iiwic3RhdGUiLCJpc1Zpc2libGUiLCJpc01vYmlsZU1lbnVWaXNpYmxlIiwidXNlTW9iaWxlTWVudSIsImhlaWdodCIsInBvc2l0aW9uIiwid2lkdGgiLCJtYXhXaWR0aCIsInRvcCIsInpJbmRleCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwidGhlbWUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7Q0FBaEM7S0FBTUYsWTtBQVVOLE1BQU1HLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpRDtBQUFBOztBQUM3RSxRQUFNQyxTQUFTLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiLENBQWxCO0FBRUEsUUFBTUMsa0JBQWtCLEdBQUdDLDhGQUFZLENBQUM7QUFBRUo7QUFBRixHQUFELENBQXZDO0FBRUEsUUFBTTtBQUNKSyxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFQztBQUFiO0FBREgsTUFFRkMsaUdBQWEsRUFGakI7QUFJQSxTQUNFO0FBQUE7QUFBQTtBQUFBLHdwR0FXR0wsa0JBQWtCLElBQ2pCO0FBQ0UsU0FBSyxFQUFFO0FBQ0xNLFlBQU0sRUFBRTtBQURILEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUFrQkUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRVQsU0FEUDtBQUVFLFNBQUssOERBQ0NHLGtCQUFrQixJQUFJO0FBQUVPLGNBQVEsRUFBRTtBQUFaLEtBRHZCLEdBRUNQLGtCQUFrQixJQUFJO0FBQUVRLFdBQUssRUFBRTtBQUFULEtBRnZCO0FBR0hDLGNBQVEsRUFBRSxRQUhQO0FBSUhDLFNBQUcsRUFBRSxDQUpGO0FBS0hDLFlBQU0sRUFBRTtBQUxMLE9BTUNYLGtCQUFrQixJQUFJO0FBQUVZLGFBQU8sRUFBRTtBQUFYLEtBTnZCO0FBT0hDLGdCQUFVLEVBQUVDLHlEQUFLLENBQUNDLEtBQU4sQ0FBWUY7QUFQckIsTUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLENBbEJGLEVBa0NHakIsUUFsQ0gsRUFtQ0dRLG1CQUFtQixJQUFJLE1BQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5DMUIsRUFvQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXBDRixDQURGO0FBMENELENBbkRNOztHQUFNVCxjO1VBR2dCTSxzRixFQUl2QkkseUY7OztNQVBPVixjIiwiZmlsZSI6Ii4vc3JjL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlTW9iaWxlTWVudSB9IGZyb20gJy4uL2hvb2tzL3VzZS1tb2JpbGUtbWVudS91c2UtbW9iaWxlLW1lbnUuaG9vayc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi4vdWkvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VTdGlja3lOYXYgfSBmcm9tICcuLi9ob29rcy91c2Utc3RpY2t5LW5hdi91c2Utc3RpY2t5LW5hdi5ob29rJztcbmltcG9ydCB7IE1vYmlsZU1lbnUgfSBmcm9tICcuLi91aS9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxNjIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cbiAgJiAuZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBzdGlja3lSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaXNTdGlja3lOYXZpZ2F0aW9uID0gdXNlU3RpY2t5TmF2KHsgc3RpY2t5UmVmIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBzdGF0ZTogeyBpc1Zpc2libGU6IGlzTW9iaWxlTWVudVZpc2libGUgfSxcbiAgfSA9IHVzZU1vYmlsZU1lbnUoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAge2lzU3RpY2t5TmF2aWdhdGlvbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAnNTRweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtzdGlja3lSZWZ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLihpc1N0aWNreU5hdmlnYXRpb24gJiYgeyBwb3NpdGlvbjogJ2ZpeGVkJyB9KSxcbiAgICAgICAgICAgIC4uLihpc1N0aWNreU5hdmlnYXRpb24gJiYgeyB3aWR0aDogJ2NhbGMoMTAwJSAtIDQwcHgpJyB9KSxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTYyMHB4JyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICAgIC4uLihpc1N0aWNreU5hdmlnYXRpb24gJiYgeyBwYWRkaW5nOiAnMTBweCAwJyB9KSxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9yLmJhY2tncm91bmQsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7aXNNb2JpbGVNZW51VmlzaWJsZSAmJiA8TW9iaWxlTWVudSAvPn1cbiAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/providers/layout.provider.tsx\n");

/***/ })

})