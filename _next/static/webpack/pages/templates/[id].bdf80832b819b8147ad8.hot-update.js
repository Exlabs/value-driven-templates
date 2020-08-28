webpackHotUpdate_N_E("pages/templates/[id]",{

/***/ "./src/app/template/template.component.tsx":
/*!*************************************************!*\
  !*** ./src/app/template/template.component.tsx ***!
  \*************************************************/
/*! exports provided: Template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Template\", function() { return Template; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/template.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ArticleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].article``;\nconst ArticleHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header``;\n_c = ArticleHeader;\nconst ArticleIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img``;\n_c2 = ArticleIcon;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section``;\n_c3 = TextContainer;\nconst ArticleTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2``;\n_c4 = ArticleTitle;\nconst ArticleDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p``;\nconst TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div``;\nconst Template = ({\n  template: {\n    icon,\n    title\n  }\n}) => {\n  _s();\n\n  const [firstTitleSection, lastTitleSection] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {\n    const wordsInTitle = title.split(' ');\n    const lastElement = wordsInTitle.pop();\n    return [wordsInTitle.join(' '), lastElement];\n  }, [title]);\n  return __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__[\"AppContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(ArticleHeader, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(ArticleIcon, {\n    alt: \"Article icon\",\n    src: `${\"\"}/icons/templates/${icon}.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(TextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(ArticleTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, firstTitleSection, \" \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 33\n    }\n  }, lastTitleSection)))));\n};\n\n_s(Template, \"4wNeRkdHXiZSd4lf9zHGRFHzcaI=\");\n\n_c5 = Template;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"ArticleHeader\");\n$RefreshReg$(_c2, \"ArticleIcon\");\n$RefreshReg$(_c3, \"TextContainer\");\n$RefreshReg$(_c4, \"ArticleTitle\");\n$RefreshReg$(_c5, \"Template\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQudHN4PzBmZTciXSwibmFtZXMiOlsiQXJ0aWNsZUNvbnRhaW5lciIsInN0eWxlZCIsImFydGljbGUiLCJBcnRpY2xlSGVhZGVyIiwiaGVhZGVyIiwiQXJ0aWNsZUljb24iLCJpbWciLCJUZXh0Q29udGFpbmVyIiwic2VjdGlvbiIsIkFydGljbGVUaXRsZSIsImgyIiwiQXJ0aWNsZURlc2NyaXB0aW9uIiwicCIsIlRhZ3NDb250YWluZXIiLCJkaXYiLCJUZW1wbGF0ZSIsInRlbXBsYXRlIiwiaWNvbiIsInRpdGxlIiwiZmlyc3RUaXRsZVNlY3Rpb24iLCJsYXN0VGl0bGVTZWN0aW9uIiwiUmVhY3QiLCJ1c2VNZW1vIiwid29yZHNJblRpdGxlIiwic3BsaXQiLCJsYXN0RWxlbWVudCIsInBvcCIsImpvaW4iLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVEsRUFBeEM7QUFFQSxNQUFNQyxhQUFhLEdBQUdGLHlEQUFNLENBQUNHLE1BQU8sRUFBcEM7S0FBTUQsYTtBQUVOLE1BQU1FLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0ssR0FBSSxFQUEvQjtNQUFNRCxXO0FBRU4sTUFBTUUsYUFBYSxHQUFHTix5REFBTSxDQUFDTyxPQUFRLEVBQXJDO01BQU1ELGE7QUFFTixNQUFNRSxZQUFZLEdBQUdSLHlEQUFNLENBQUNTLEVBQUcsRUFBL0I7TUFBTUQsWTtBQUVOLE1BQU1FLGtCQUFrQixHQUFHVix5REFBTSxDQUFDVyxDQUFFLEVBQXBDO0FBRUEsTUFBTUMsYUFBYSxHQUFHWix5REFBTSxDQUFDYSxHQUFJLEVBQWpDO0FBTU8sTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBRUMsVUFBUSxFQUFFO0FBQUVDLFFBQUY7QUFBUUM7QUFBUjtBQUFaLENBQUQsS0FBa0Q7QUFBQTs7QUFDeEUsUUFBTSxDQUFDQyxpQkFBRCxFQUFvQkMsZ0JBQXBCLElBQXdDQyw0Q0FBSyxDQUFDQyxPQUFOLENBQWMsTUFBTTtBQUNoRSxVQUFNQyxZQUFZLEdBQUdMLEtBQUssQ0FBQ00sS0FBTixDQUFZLEdBQVosQ0FBckI7QUFDQSxVQUFNQyxXQUFXLEdBQUdGLFlBQVksQ0FBQ0csR0FBYixFQUFwQjtBQUVBLFdBQU8sQ0FBQ0gsWUFBWSxDQUFDSSxJQUFiLENBQWtCLEdBQWxCLENBQUQsRUFBeUJGLFdBQXpCLENBQVA7QUFDRCxHQUw2QyxFQUszQyxDQUFDUCxLQUFELENBTDJDLENBQTlDO0FBT0EsU0FDRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUNFLE9BQUcsRUFBQyxjQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVVLEVBQXlCLG9CQUFtQlgsSUFBSyxNQUYzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLGlCQURILE9BQ3NCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0MsZ0JBQVAsQ0FEdEIsQ0FERixDQUxGLENBREYsQ0FERjtBQWVELENBdkJNOztHQUFNTCxROztNQUFBQSxRIiwiZmlsZSI6Ii4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRlbXBsYXRlRGF0YSB9IGZyb20gJy4uLy4uL3BhZ2VzL3RlbXBsYXRlcy9baWRdJztcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEFydGljbGVDb250YWluZXIgPSBzdHlsZWQuYXJ0aWNsZWBgO1xuXG5jb25zdCBBcnRpY2xlSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBgO1xuXG5jb25zdCBBcnRpY2xlSWNvbiA9IHN0eWxlZC5pbWdgYDtcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYGA7XG5cbmNvbnN0IEFydGljbGVUaXRsZSA9IHN0eWxlZC5oMmBgO1xuXG5jb25zdCBBcnRpY2xlRGVzY3JpcHRpb24gPSBzdHlsZWQucGBgO1xuXG5jb25zdCBUYWdzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xuXG5pbnRlcmZhY2UgVGVtcGxhdGVQcm9wcyB7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZURhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBUZW1wbGF0ZSA9ICh7IHRlbXBsYXRlOiB7IGljb24sIHRpdGxlIH0gfTogVGVtcGxhdGVQcm9wcykgPT4ge1xuICBjb25zdCBbZmlyc3RUaXRsZVNlY3Rpb24sIGxhc3RUaXRsZVNlY3Rpb25dID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgd29yZHNJblRpdGxlID0gdGl0bGUuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBsYXN0RWxlbWVudCA9IHdvcmRzSW5UaXRsZS5wb3AoKTtcblxuICAgIHJldHVybiBbd29yZHNJblRpdGxlLmpvaW4oJyAnKSwgbGFzdEVsZW1lbnRdO1xuICB9LCBbdGl0bGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8QXJ0aWNsZUhlYWRlcj5cbiAgICAgICAgPEFydGljbGVJY29uXG4gICAgICAgICAgYWx0PVwiQXJ0aWNsZSBpY29uXCJcbiAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvdGVtcGxhdGVzLyR7aWNvbn0uc3ZnYH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgPEFydGljbGVUaXRsZT5cbiAgICAgICAgICAgIHtmaXJzdFRpdGxlU2VjdGlvbn0gPHNwYW4+e2xhc3RUaXRsZVNlY3Rpb259PC9zcGFuPlxuICAgICAgICAgIDwvQXJ0aWNsZVRpdGxlPlxuICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICA8L0FydGljbGVIZWFkZXI+XG4gICAgPC9BcHBDb250YWluZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/template/template.component.tsx\n");

/***/ })

})