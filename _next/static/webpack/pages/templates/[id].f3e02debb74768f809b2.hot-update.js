webpackHotUpdate_N_E("pages/templates/[id]",{

/***/ "./src/app/template/template.component.tsx":
/*!*************************************************!*\
  !*** ./src/app/template/template.component.tsx ***!
  \*************************************************/
/*! exports provided: Template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Template\", function() { return Template; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ui_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/tag/tag.component */ \"./src/ui/tag/tag.component.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/template.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst TemplateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].article``;\n_c = TemplateContainer;\nconst TemplateHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header``;\n_c2 = TemplateHeader;\nconst TemplateIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img``;\n_c3 = TemplateIcon;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section``;\n_c4 = TextContainer;\nconst TemplateTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2``;\n_c5 = TemplateTitle;\nconst TemplateDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p``;\n_c6 = TemplateDescription;\nconst TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div``;\n_c7 = TagsContainer;\nconst TemplateContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section`\n  color: ${({\n  theme\n}) => theme.color.fontSecondary};\n  font-size: 21px;\n\n  & h1,\n  & h2,\n  & h3,\n  & h4,\n  & h5,\n  & h6 {\n    color: ${({\n  theme\n}) => theme.color.fontSecondary};\n    font-weight: 700;\n  }\n\n  & h1 {\n    font-size: 31px;\n  }\n\n  & h2 {\n    font-size: 27px;\n  }\n\n  & h3 {\n    font-size: 25px;\n  }\n\n  &::first-letter {\n    font-size: 60px;\n    font-weight: 700;\n    color: ${({\n  theme\n}) => theme.color.secondary};\n    letter-spacing: -3px;\n  }\n\n  & > p {\n    margin-bottom: 20px;\n  }\n\n  & > p:last-child {\n    margin-bottom: 0;\n  }\n`;\n_c8 = TemplateContent;\nconst Template = ({\n  template: {\n    icon,\n    title,\n    description,\n    content,\n    tags\n  }\n}) => {\n  _s();\n\n  const [firstTitleSection, lastTitleSection] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {\n    const wordsInTitle = title.split(' ');\n    const lastElement = wordsInTitle.pop();\n    return [wordsInTitle.join(' '), lastElement];\n  }, [title]);\n  return __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__[\"AppContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, __jsx(TemplateContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(TemplateHeader, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(TemplateIcon, {\n    alt: \"Article icon\",\n    src: `${\"\"}/icons/templates/${icon}.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }), __jsx(TextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(TemplateTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, firstTitleSection, \" \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 35\n    }\n  }, lastTitleSection)), __jsx(TemplateDescription, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, description), __jsx(TagsContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, tags.map((tag, index) => __jsx(_ui_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    active: true,\n    key: `template-tag-${index}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }, tag))))), __jsx(TemplateContent, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    source: content,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Template, \"4wNeRkdHXiZSd4lf9zHGRFHzcaI=\");\n\n_c9 = Template;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"TemplateContainer\");\n$RefreshReg$(_c2, \"TemplateHeader\");\n$RefreshReg$(_c3, \"TemplateIcon\");\n$RefreshReg$(_c4, \"TextContainer\");\n$RefreshReg$(_c5, \"TemplateTitle\");\n$RefreshReg$(_c6, \"TemplateDescription\");\n$RefreshReg$(_c7, \"TagsContainer\");\n$RefreshReg$(_c8, \"TemplateContent\");\n$RefreshReg$(_c9, \"Template\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQudHN4PzBmZTciXSwibmFtZXMiOlsiVGVtcGxhdGVDb250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiVGVtcGxhdGVIZWFkZXIiLCJoZWFkZXIiLCJUZW1wbGF0ZUljb24iLCJpbWciLCJUZXh0Q29udGFpbmVyIiwic2VjdGlvbiIsIlRlbXBsYXRlVGl0bGUiLCJoMiIsIlRlbXBsYXRlRGVzY3JpcHRpb24iLCJwIiwiVGFnc0NvbnRhaW5lciIsImRpdiIsIlRlbXBsYXRlQ29udGVudCIsInRoZW1lIiwiY29sb3IiLCJmb250U2Vjb25kYXJ5Iiwic2Vjb25kYXJ5IiwiVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInRhZ3MiLCJmaXJzdFRpdGxlU2VjdGlvbiIsImxhc3RUaXRsZVNlY3Rpb24iLCJSZWFjdCIsInVzZU1lbW8iLCJ3b3Jkc0luVGl0bGUiLCJzcGxpdCIsImxhc3RFbGVtZW50IiwicG9wIiwiam9pbiIsInByb2Nlc3MiLCJtYXAiLCJ0YWciLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBUSxFQUF6QztLQUFNRixpQjtBQUVOLE1BQU1HLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0csTUFBTyxFQUFyQztNQUFNRCxjO0FBRU4sTUFBTUUsWUFBWSxHQUFHSix5REFBTSxDQUFDSyxHQUFJLEVBQWhDO01BQU1ELFk7QUFFTixNQUFNRSxhQUFhLEdBQUdOLHlEQUFNLENBQUNPLE9BQVEsRUFBckM7TUFBTUQsYTtBQUVOLE1BQU1FLGFBQWEsR0FBR1IseURBQU0sQ0FBQ1MsRUFBRyxFQUFoQztNQUFNRCxhO0FBRU4sTUFBTUUsbUJBQW1CLEdBQUdWLHlEQUFNLENBQUNXLENBQUUsRUFBckM7TUFBTUQsbUI7QUFFTixNQUFNRSxhQUFhLEdBQUdaLHlEQUFNLENBQUNhLEdBQUksRUFBakM7TUFBTUQsYTtBQUVOLE1BQU1FLGVBQWUsR0FBR2QseURBQU0sQ0FBQ08sT0FBUTtXQUM1QixDQUFDO0FBQUVRO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFBYzs7Ozs7Ozs7O2FBU3ZDLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBbUJ6QyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBVTs7Ozs7Ozs7Ozs7Q0E3QmxEO01BQU1KLGU7QUE4Q0MsTUFBTUssUUFBUSxHQUFHLENBQUM7QUFDdkJDLFVBQVEsRUFBRTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUMsZUFBZjtBQUE0QkMsV0FBNUI7QUFBcUNDO0FBQXJDO0FBRGEsQ0FBRCxLQUVIO0FBQUE7O0FBQ25CLFFBQU0sQ0FBQ0MsaUJBQUQsRUFBb0JDLGdCQUFwQixJQUF3Q0MsNENBQUssQ0FBQ0MsT0FBTixDQUFjLE1BQU07QUFDaEUsVUFBTUMsWUFBWSxHQUFHUixLQUFLLENBQUNTLEtBQU4sQ0FBWSxHQUFaLENBQXJCO0FBQ0EsVUFBTUMsV0FBVyxHQUFHRixZQUFZLENBQUNHLEdBQWIsRUFBcEI7QUFFQSxXQUFPLENBQUNILFlBQVksQ0FBQ0ksSUFBYixDQUFrQixHQUFsQixDQUFELEVBQXlCRixXQUF6QixDQUFQO0FBQ0QsR0FMNkMsRUFLM0MsQ0FBQ1YsS0FBRCxDQUwyQyxDQUE5QztBQU9BLFNBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFDRSxPQUFHLEVBQUMsY0FETjtBQUVFLE9BQUcsRUFBRyxHQUFFYSxFQUF5QixvQkFBbUJkLElBQUssTUFGM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSyxpQkFESCxPQUNzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9DLGdCQUFQLENBRHRCLENBREYsRUFJRSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JKLFdBQXRCLENBSkYsRUFLRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxJQUFJLENBQUNXLEdBQUwsQ0FBUyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FDUixNQUFDLDZEQUFEO0FBQUssVUFBTSxNQUFYO0FBQVksT0FBRyxFQUFHLGdCQUFlQSxLQUFNLEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsR0FESCxDQURELENBREgsQ0FMRixDQUxGLENBREYsRUFvQkUsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFYixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FwQkYsQ0FERixDQURGO0FBNEJELENBdENNOztHQUFNTCxROztNQUFBQSxRIiwiZmlsZSI6Ii4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRlbXBsYXRlRGF0YSB9IGZyb20gJy4uLy4uL3BhZ2VzL3RlbXBsYXRlcy9baWRdJztcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9sYXlvdXQucHJvdmlkZXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgVGFnIGZyb20gJy4uLy4uL3VpL3RhZy90YWcuY29tcG9uZW50JztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcblxuY29uc3QgVGVtcGxhdGVDb250YWluZXIgPSBzdHlsZWQuYXJ0aWNsZWBgO1xuXG5jb25zdCBUZW1wbGF0ZUhlYWRlciA9IHN0eWxlZC5oZWFkZXJgYDtcblxuY29uc3QgVGVtcGxhdGVJY29uID0gc3R5bGVkLmltZ2BgO1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gYDtcblxuY29uc3QgVGVtcGxhdGVUaXRsZSA9IHN0eWxlZC5oMmBgO1xuXG5jb25zdCBUZW1wbGF0ZURlc2NyaXB0aW9uID0gc3R5bGVkLnBgYDtcblxuY29uc3QgVGFnc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcblxuY29uc3QgVGVtcGxhdGVDb250ZW50ID0gc3R5bGVkLnNlY3Rpb25gXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRTZWNvbmRhcnl9O1xuICBmb250LXNpemU6IDIxcHg7XG5cbiAgJiBoMSxcbiAgJiBoMixcbiAgJiBoMyxcbiAgJiBoNCxcbiAgJiBoNSxcbiAgJiBoNiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFNlY29uZGFyeX07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gICYgaDEge1xuICAgIGZvbnQtc2l6ZTogMzFweDtcbiAgfVxuXG4gICYgaDIge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgfVxuXG4gICYgaDMge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gICY6OmZpcnN0LWxldHRlciB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iuc2Vjb25kYXJ5fTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcbiAgfVxuXG4gICYgPiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJiA+IHA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFRlbXBsYXRlUHJvcHMge1xuICB0ZW1wbGF0ZTogVGVtcGxhdGVEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgVGVtcGxhdGUgPSAoe1xuICB0ZW1wbGF0ZTogeyBpY29uLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNvbnRlbnQsIHRhZ3MgfSxcbn06IFRlbXBsYXRlUHJvcHMpID0+IHtcbiAgY29uc3QgW2ZpcnN0VGl0bGVTZWN0aW9uLCBsYXN0VGl0bGVTZWN0aW9uXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHdvcmRzSW5UaXRsZSA9IHRpdGxlLnNwbGl0KCcgJyk7XG4gICAgY29uc3QgbGFzdEVsZW1lbnQgPSB3b3Jkc0luVGl0bGUucG9wKCk7XG5cbiAgICByZXR1cm4gW3dvcmRzSW5UaXRsZS5qb2luKCcgJyksIGxhc3RFbGVtZW50XTtcbiAgfSwgW3RpdGxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgPFRlbXBsYXRlQ29udGFpbmVyPlxuICAgICAgICA8VGVtcGxhdGVIZWFkZXI+XG4gICAgICAgICAgPFRlbXBsYXRlSWNvblxuICAgICAgICAgICAgYWx0PVwiQXJ0aWNsZSBpY29uXCJcbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy90ZW1wbGF0ZXMvJHtpY29ufS5zdmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgICA8VGVtcGxhdGVUaXRsZT5cbiAgICAgICAgICAgICAge2ZpcnN0VGl0bGVTZWN0aW9ufSA8c3Bhbj57bGFzdFRpdGxlU2VjdGlvbn08L3NwYW4+XG4gICAgICAgICAgICA8L1RlbXBsYXRlVGl0bGU+XG4gICAgICAgICAgICA8VGVtcGxhdGVEZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9UZW1wbGF0ZURlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPFRhZ3NDb250YWluZXI+XG4gICAgICAgICAgICAgIHt0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUYWcgYWN0aXZlIGtleT17YHRlbXBsYXRlLXRhZy0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhZ3NDb250YWluZXI+XG4gICAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgICA8L1RlbXBsYXRlSGVhZGVyPlxuICAgICAgICA8VGVtcGxhdGVDb250ZW50PlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17Y29udGVudH0gLz5cbiAgICAgICAgPC9UZW1wbGF0ZUNvbnRlbnQ+XG4gICAgICA8L1RlbXBsYXRlQ29udGFpbmVyPlxuICAgIDwvQXBwQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/template/template.component.tsx\n");

/***/ })

})