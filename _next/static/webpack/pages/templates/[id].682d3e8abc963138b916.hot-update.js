webpackHotUpdate_N_E("pages/templates/[id]",{

/***/ "./src/app/template/template.component.tsx":
/*!*************************************************!*\
  !*** ./src/app/template/template.component.tsx ***!
  \*************************************************/
/*! exports provided: Template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Template\", function() { return Template; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ui_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/tag/tag.component */ \"./src/ui/tag/tag.component.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/template.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst TemplateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].article``;\n_c = TemplateContainer;\nconst TemplateHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header``;\n_c2 = TemplateHeader;\nconst TemplateIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img``;\n_c3 = TemplateIcon;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section``;\n_c4 = TextContainer;\nconst TemplateTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2``;\n_c5 = TemplateTitle;\nconst TemplateDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p``;\n_c6 = TemplateDescription;\nconst TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div``;\n_c7 = TagsContainer;\nconst TemplateContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section`\n  &::first-letter {\n    font-size: 60px;\n    line-break: 1px;\n  }\n`;\n_c8 = TemplateContent;\nconst Template = ({\n  template: {\n    icon,\n    title,\n    description,\n    content,\n    tags\n  }\n}) => {\n  _s();\n\n  const [firstTitleSection, lastTitleSection] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {\n    const wordsInTitle = title.split(' ');\n    const lastElement = wordsInTitle.pop();\n    return [wordsInTitle.join(' '), lastElement];\n  }, [title]);\n  return __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__[\"AppContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(TemplateContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(TemplateHeader, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(TemplateIcon, {\n    alt: \"Article icon\",\n    src: `${\"\"}/icons/templates/${icon}.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }), __jsx(TextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, __jsx(TemplateTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, firstTitleSection, \" \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 35\n    }\n  }, lastTitleSection)), __jsx(TemplateDescription, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, description), __jsx(TagsContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, tags.map((tag, index) => __jsx(_ui_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    active: true,\n    key: `template-tag-${index}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, tag))))), __jsx(TemplateContent, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    source: content,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Template, \"4wNeRkdHXiZSd4lf9zHGRFHzcaI=\");\n\n_c9 = Template;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"TemplateContainer\");\n$RefreshReg$(_c2, \"TemplateHeader\");\n$RefreshReg$(_c3, \"TemplateIcon\");\n$RefreshReg$(_c4, \"TextContainer\");\n$RefreshReg$(_c5, \"TemplateTitle\");\n$RefreshReg$(_c6, \"TemplateDescription\");\n$RefreshReg$(_c7, \"TagsContainer\");\n$RefreshReg$(_c8, \"TemplateContent\");\n$RefreshReg$(_c9, \"Template\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQudHN4PzBmZTciXSwibmFtZXMiOlsiVGVtcGxhdGVDb250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiVGVtcGxhdGVIZWFkZXIiLCJoZWFkZXIiLCJUZW1wbGF0ZUljb24iLCJpbWciLCJUZXh0Q29udGFpbmVyIiwic2VjdGlvbiIsIlRlbXBsYXRlVGl0bGUiLCJoMiIsIlRlbXBsYXRlRGVzY3JpcHRpb24iLCJwIiwiVGFnc0NvbnRhaW5lciIsImRpdiIsIlRlbXBsYXRlQ29udGVudCIsIlRlbXBsYXRlIiwidGVtcGxhdGUiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJ0YWdzIiwiZmlyc3RUaXRsZVNlY3Rpb24iLCJsYXN0VGl0bGVTZWN0aW9uIiwiUmVhY3QiLCJ1c2VNZW1vIiwid29yZHNJblRpdGxlIiwic3BsaXQiLCJsYXN0RWxlbWVudCIsInBvcCIsImpvaW4iLCJwcm9jZXNzIiwibWFwIiwidGFnIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVEsRUFBekM7S0FBTUYsaUI7QUFFTixNQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNHLE1BQU8sRUFBckM7TUFBTUQsYztBQUVOLE1BQU1FLFlBQVksR0FBR0oseURBQU0sQ0FBQ0ssR0FBSSxFQUFoQztNQUFNRCxZO0FBRU4sTUFBTUUsYUFBYSxHQUFHTix5REFBTSxDQUFDTyxPQUFRLEVBQXJDO01BQU1ELGE7QUFFTixNQUFNRSxhQUFhLEdBQUdSLHlEQUFNLENBQUNTLEVBQUcsRUFBaEM7TUFBTUQsYTtBQUVOLE1BQU1FLG1CQUFtQixHQUFHVix5REFBTSxDQUFDVyxDQUFFLEVBQXJDO01BQU1ELG1CO0FBRU4sTUFBTUUsYUFBYSxHQUFHWix5REFBTSxDQUFDYSxHQUFJLEVBQWpDO01BQU1ELGE7QUFFTixNQUFNRSxlQUFlLEdBQUdkLHlEQUFNLENBQUNPLE9BQVE7Ozs7O0NBQXZDO01BQU1PLGU7QUFXQyxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUN2QkMsVUFBUSxFQUFFO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQyxlQUFmO0FBQTRCQyxXQUE1QjtBQUFxQ0M7QUFBckM7QUFEYSxDQUFELEtBRUg7QUFBQTs7QUFDbkIsUUFBTSxDQUFDQyxpQkFBRCxFQUFvQkMsZ0JBQXBCLElBQXdDQyw0Q0FBSyxDQUFDQyxPQUFOLENBQWMsTUFBTTtBQUNoRSxVQUFNQyxZQUFZLEdBQUdSLEtBQUssQ0FBQ1MsS0FBTixDQUFZLEdBQVosQ0FBckI7QUFDQSxVQUFNQyxXQUFXLEdBQUdGLFlBQVksQ0FBQ0csR0FBYixFQUFwQjtBQUVBLFdBQU8sQ0FBQ0gsWUFBWSxDQUFDSSxJQUFiLENBQWtCLEdBQWxCLENBQUQsRUFBeUJGLFdBQXpCLENBQVA7QUFDRCxHQUw2QyxFQUszQyxDQUFDVixLQUFELENBTDJDLENBQTlDO0FBT0EsU0FDRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUNFLE9BQUcsRUFBQyxjQUROO0FBRUUsT0FBRyxFQUFHLEdBQUVhLEVBQXlCLG9CQUFtQmQsSUFBSyxNQUYzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLGlCQURILE9BQ3NCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0MsZ0JBQVAsQ0FEdEIsQ0FERixFQUlFLE1BQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkosV0FBdEIsQ0FKRixFQUtFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLElBQUksQ0FBQ1csR0FBTCxDQUFTLENBQUNDLEdBQUQsRUFBTUMsS0FBTixLQUNSLE1BQUMsNkRBQUQ7QUFBSyxVQUFNLE1BQVg7QUFBWSxPQUFHLEVBQUcsZ0JBQWVBLEtBQU0sRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxHQURILENBREQsQ0FESCxDQUxGLENBTEYsQ0FERixFQW9CRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBZSxVQUFNLEVBQUViLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXBCRixDQURGLENBREY7QUE0QkQsQ0F0Q007O0dBQU1MLFE7O01BQUFBLFEiLCJmaWxlIjoiLi9zcmMvYXBwL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGVtcGxhdGVEYXRhIH0gZnJvbSAnLi4vLi4vcGFnZXMvdGVtcGxhdGVzL1tpZF0nO1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2xheW91dC5wcm92aWRlcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBUYWcgZnJvbSAnLi4vLi4vdWkvdGFnL3RhZy5jb21wb25lbnQnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuXG5jb25zdCBUZW1wbGF0ZUNvbnRhaW5lciA9IHN0eWxlZC5hcnRpY2xlYGA7XG5cbmNvbnN0IFRlbXBsYXRlSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBgO1xuXG5jb25zdCBUZW1wbGF0ZUljb24gPSBzdHlsZWQuaW1nYGA7XG5cbmNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBgO1xuXG5jb25zdCBUZW1wbGF0ZVRpdGxlID0gc3R5bGVkLmgyYGA7XG5cbmNvbnN0IFRlbXBsYXRlRGVzY3JpcHRpb24gPSBzdHlsZWQucGBgO1xuXG5jb25zdCBUYWdzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xuXG5jb25zdCBUZW1wbGF0ZUNvbnRlbnQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJjo6Zmlyc3QtbGV0dGVyIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbGluZS1icmVhazogMXB4O1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgVGVtcGxhdGVQcm9wcyB7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZURhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBUZW1wbGF0ZSA9ICh7XG4gIHRlbXBsYXRlOiB7IGljb24sIHRpdGxlLCBkZXNjcmlwdGlvbiwgY29udGVudCwgdGFncyB9LFxufTogVGVtcGxhdGVQcm9wcykgPT4ge1xuICBjb25zdCBbZmlyc3RUaXRsZVNlY3Rpb24sIGxhc3RUaXRsZVNlY3Rpb25dID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgd29yZHNJblRpdGxlID0gdGl0bGUuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBsYXN0RWxlbWVudCA9IHdvcmRzSW5UaXRsZS5wb3AoKTtcblxuICAgIHJldHVybiBbd29yZHNJblRpdGxlLmpvaW4oJyAnKSwgbGFzdEVsZW1lbnRdO1xuICB9LCBbdGl0bGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8VGVtcGxhdGVDb250YWluZXI+XG4gICAgICAgIDxUZW1wbGF0ZUhlYWRlcj5cbiAgICAgICAgICA8VGVtcGxhdGVJY29uXG4gICAgICAgICAgICBhbHQ9XCJBcnRpY2xlIGljb25cIlxuICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2ljb25zL3RlbXBsYXRlcy8ke2ljb259LnN2Z2B9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxUZW1wbGF0ZVRpdGxlPlxuICAgICAgICAgICAgICB7Zmlyc3RUaXRsZVNlY3Rpb259IDxzcGFuPntsYXN0VGl0bGVTZWN0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgIDwvVGVtcGxhdGVUaXRsZT5cbiAgICAgICAgICAgIDxUZW1wbGF0ZURlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1RlbXBsYXRlRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8VGFnc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhZyBhY3RpdmUga2V5PXtgdGVtcGxhdGUtdGFnLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFnc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICAgIDwvVGVtcGxhdGVIZWFkZXI+XG4gICAgICAgIDxUZW1wbGF0ZUNvbnRlbnQ+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtjb250ZW50fSAvPlxuICAgICAgICA8L1RlbXBsYXRlQ29udGVudD5cbiAgICAgIDwvVGVtcGxhdGVDb250YWluZXI+XG4gICAgPC9BcHBDb250YWluZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/template/template.component.tsx\n");

/***/ })

})