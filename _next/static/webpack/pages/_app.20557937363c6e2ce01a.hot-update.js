webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/mobile-menu/mobile-menu.component.tsx":
/*!******************************************************!*\
  !*** ./src/ui/mobile-menu/mobile-menu.component.tsx ***!
  \******************************************************/
/*! exports provided: MobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileMenu\", function() { return MobileMenu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/app-routes */ \"./src/router/app-routes.ts\");\n/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation.component */ \"./src/ui/navigation/navigation.component.tsx\");\n/* harmony import */ var _mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu.styles */ \"./src/ui/mobile-menu/mobile-menu.styles.ts\");\n/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ \"./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts\");\n/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ \"./src/context/mobile-menu/mobile-menu.action-creators.ts\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/ui/mobile-menu/mobile-menu.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst MobileMenu = () => {\n  _s();\n\n  const {\n    dispatch\n  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__[\"useMobileMenu\"])();\n\n  const handleOnClick = () => {\n    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_6__[\"toggleMobileMenu\"])());\n  };\n\n  return __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledNav\"], {\n    initial: {\n      height: 0\n    },\n    animate: {\n      height: '100vh',\n      transition: {\n        duration: 0.3,\n        easings: true\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__[\"Navigation\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledList\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1,\n      transition: {\n        duration: 0.5,\n        easings: true,\n        delay: 0.2\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].HOME),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"HOME\"))), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1,\n      transition: {\n        duration: 0.5,\n        easings: true,\n        delay: 0.3\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].ABOUT),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"ABOUT\"))), __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledListItem\"], {\n    onClick: handleOnClick,\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1,\n      transition: {\n        duration: 0.5,\n        easings: true,\n        delay: 0.5\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: Object(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"getInternalLink\"])(_router_app_routes__WEBPACK_IMPORTED_MODULE_2__[\"AppRoute\"].HOW_TO_CONTRIBUTE),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(_mobile_menu_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledLink\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"HOW TO CONTRIBUTE\")))));\n};\n\n_s(MobileMenu, \"dtQ9h+N28KU9y95G3TLo8muPlCQ=\", false, function () {\n  return [_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_5__[\"useMobileMenu\"]];\n});\n\n_c = MobileMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"MobileMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC50c3g/OTUzNSJdLCJuYW1lcyI6WyJNb2JpbGVNZW51IiwiZGlzcGF0Y2giLCJ1c2VNb2JpbGVNZW51IiwiaGFuZGxlT25DbGljayIsInRvZ2dsZU1vYmlsZU1lbnUiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNpbmdzIiwib3BhY2l0eSIsImRlbGF5IiwiZ2V0SW50ZXJuYWxMaW5rIiwiQXBwUm91dGUiLCJIT01FIiwiQUJPVVQiLCJIT1dfVE9fQ09OVFJJQlVURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUFBOztBQUM5QixRQUFNO0FBQUVDO0FBQUYsTUFBZUMsaUdBQWEsRUFBbEM7O0FBRUEsUUFBTUMsYUFBYSxHQUFHLE1BQU07QUFDMUJGLFlBQVEsQ0FBQ0cseUdBQWdCLEVBQWpCLENBQVI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyw2REFBRDtBQUNFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUU7QUFERCxLQURYO0FBSUUsV0FBTyxFQUFFO0FBQ1BBLFlBQU0sRUFBRSxPQUREO0FBRVBDLGdCQUFVLEVBQUU7QUFDVkMsZ0JBQVEsRUFBRSxHQURBO0FBRVZDLGVBQU8sRUFBRTtBQUZDO0FBRkwsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUUsTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQ0UsV0FBTyxFQUFFTCxhQURYO0FBRUUsV0FBTyxFQUFFO0FBQUVNLGFBQU8sRUFBRTtBQUFYLEtBRlg7QUFHRSxXQUFPLEVBQUU7QUFDUEEsYUFBTyxFQUFFLENBREY7QUFFUEgsZ0JBQVUsRUFBRTtBQUFFQyxnQkFBUSxFQUFFLEdBQVo7QUFBaUJDLGVBQU8sRUFBRSxJQUExQjtBQUFnQ0UsYUFBSyxFQUFFO0FBQXZDO0FBRkwsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUMsMEVBQWUsQ0FBQ0MsMkRBQVEsQ0FBQ0MsSUFBVixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FSRixDQURGLEVBYUUsTUFBQyxrRUFBRDtBQUNFLFdBQU8sRUFBRVYsYUFEWDtBQUVFLFdBQU8sRUFBRTtBQUFFTSxhQUFPLEVBQUU7QUFBWCxLQUZYO0FBR0UsV0FBTyxFQUFFO0FBQ1BBLGFBQU8sRUFBRSxDQURGO0FBRVBILGdCQUFVLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxHQUFaO0FBQWlCQyxlQUFPLEVBQUUsSUFBMUI7QUFBZ0NFLGFBQUssRUFBRTtBQUF2QztBQUZMLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVDLDBFQUFlLENBQUNDLDJEQUFRLENBQUNFLEtBQVYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBUkYsQ0FiRixFQXlCRSxNQUFDLGtFQUFEO0FBQ0UsV0FBTyxFQUFFWCxhQURYO0FBRUUsV0FBTyxFQUFFO0FBQUVNLGFBQU8sRUFBRTtBQUFYLEtBRlg7QUFHRSxXQUFPLEVBQUU7QUFDUEEsYUFBTyxFQUFFLENBREY7QUFFUEgsZ0JBQVUsRUFBRTtBQUFFQyxnQkFBUSxFQUFFLEdBQVo7QUFBaUJDLGVBQU8sRUFBRSxJQUExQjtBQUFnQ0UsYUFBSyxFQUFFO0FBQXZDO0FBRkwsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUMsMEVBQWUsQ0FBQ0MsMkRBQVEsQ0FBQ0csaUJBQVYsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQVJGLENBekJGLENBYkYsQ0FERjtBQXNERCxDQTdETTs7R0FBTWYsVTtVQUNVRSx5Rjs7O0tBRFZGLFUiLCJmaWxlIjoiLi9zcmMvdWkvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQXBwUm91dGUsIGdldEludGVybmFsTGluayB9IGZyb20gJy4uLy4uL3JvdXRlci9hcHAtcm91dGVzJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlZE5hdiwgU3R5bGVkTGlzdCwgU3R5bGVkTGlzdEl0ZW0sIFN0eWxlZExpbmsgfSBmcm9tICcuL21vYmlsZS1tZW51LnN0eWxlcyc7XG5pbXBvcnQgeyB1c2VNb2JpbGVNZW51IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IHRvZ2dsZU1vYmlsZU1lbnUgfSBmcm9tICcuLi8uLi9jb250ZXh0L21vYmlsZS1tZW51L21vYmlsZS1tZW51LmFjdGlvbi1jcmVhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBNb2JpbGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VNb2JpbGVNZW51KCk7XG5cbiAgY29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh0b2dnbGVNb2JpbGVNZW51KCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZE5hdlxuICAgICAgaW5pdGlhbD17e1xuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICB9fVxuICAgICAgYW5pbWF0ZT17e1xuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgIGVhc2luZ3M6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICA8U3R5bGVkTGlzdD5cbiAgICAgICAgPFN0eWxlZExpc3RJdGVtXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41LCBlYXNpbmdzOiB0cnVlLCBkZWxheTogMC4yIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2dldEludGVybmFsTGluayhBcHBSb3V0ZS5IT01FKX0+XG4gICAgICAgICAgICA8U3R5bGVkTGluaz5IT01FPC9TdHlsZWRMaW5rPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9TdHlsZWRMaXN0SXRlbT5cbiAgICAgICAgPFN0eWxlZExpc3RJdGVtXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41LCBlYXNpbmdzOiB0cnVlLCBkZWxheTogMC4zIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2dldEludGVybmFsTGluayhBcHBSb3V0ZS5BQk9VVCl9PlxuICAgICAgICAgICAgPFN0eWxlZExpbms+QUJPVVQ8L1N0eWxlZExpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1N0eWxlZExpc3RJdGVtPlxuICAgICAgICA8U3R5bGVkTGlzdEl0ZW1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2luZ3M6IHRydWUsIGRlbGF5OiAwLjUgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj17Z2V0SW50ZXJuYWxMaW5rKEFwcFJvdXRlLkhPV19UT19DT05UUklCVVRFKX0+XG4gICAgICAgICAgICA8U3R5bGVkTGluaz5IT1cgVE8gQ09OVFJJQlVURTwvU3R5bGVkTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvU3R5bGVkTGlzdEl0ZW0+XG4gICAgICA8L1N0eWxlZExpc3Q+XG4gICAgPC9TdHlsZWROYXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/mobile-menu/mobile-menu.component.tsx\n");

/***/ })

})