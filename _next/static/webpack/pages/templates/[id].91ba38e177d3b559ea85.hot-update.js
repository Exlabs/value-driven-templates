webpackHotUpdate_N_E("pages/templates/[id]",{

/***/ "./src/app/template/template.component.tsx":
/*!*************************************************!*\
  !*** ./src/app/template/template.component.tsx ***!
  \*************************************************/
/*! exports provided: Template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Template\", function() { return Template; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ui_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/tag/tag.component */ \"./src/ui/tag/tag.component.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/template.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst TemplateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].article``;\n_c = TemplateContainer;\nconst TemplateHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header`\n  display: flex;\n  align-items: center;\n`;\n_c2 = TemplateHeader;\nconst TemplateIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img`\n  width: 25%;\n`;\n_c3 = TemplateIcon;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section`\n  flex: 1;\n`;\n_c4 = TextContainer;\nconst TemplateTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2`\n  font-size: 49px;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n  font-weight: 700;\n\n  & > span {\n    background-color: ${({\n  theme\n}) => theme.color.primary};\n    color: ${({\n  theme\n}) => theme.color.white};\n    padding: 0 10px;\n  }\n`;\n_c5 = TemplateTitle;\nconst TemplateDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p`\n  margin: 10px 0;\n  font-size: 25px;\n  max-width: 70%;\n`;\n_c6 = TemplateDescription;\nconst TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  display: flex;\n  flex-wrap: wrap;\n\n  & > .tag {\n    margin: 1%;\n  }\n`;\n_c7 = TagsContainer;\nconst TemplateContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section`\n  margin-top: 40px;\n  color: ${({\n  theme\n}) => theme.color.fontSecondary};\n  font-size: 21px;\n  line-height: 27px;\n\n  & h1,\n  & h2,\n  & h3,\n  & h4,\n  & h5,\n  & h6 {\n    color: ${({\n  theme\n}) => theme.color.fontSecondary};\n    font-weight: 700;\n  }\n\n  & h1 {\n    font-size: 31px;\n  }\n\n  & h2 {\n    font-size: 27px;\n  }\n\n  & h3 {\n    font-size: 23px;\n  }\n\n  & h4 {\n    font-size: 21px;\n  }\n\n  & h5 {\n    font-size: 19px;\n  }\n\n  & h6 {\n    font-size: 17px;\n  }\n\n  &::first-letter {\n    font-size: 60px;\n    font-weight: 700;\n    color: ${({\n  theme\n}) => theme.color.secondary};\n    letter-spacing: -3px;\n  }\n\n  & > p {\n    margin-bottom: 20px;\n  }\n\n  & > p:last-child {\n    margin-bottom: 0;\n  }\n`;\n_c8 = TemplateContent;\nconst Template = ({\n  template: {\n    icon,\n    title,\n    description,\n    content,\n    tags\n  }\n}) => {\n  _s();\n\n  const [firstTitleSection, lastTitleSection] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {\n    const wordsInTitle = title.split(' ');\n    const lastElement = wordsInTitle.pop();\n    return [wordsInTitle.join(' '), lastElement];\n  }, [title]);\n  return __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__[\"AppContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, __jsx(TemplateContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, __jsx(TemplateHeader, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(TemplateIcon, {\n    alt: \"Article icon\",\n    src: `${\"\"}/icons/templates/${icon}.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }), __jsx(TextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 11\n    }\n  }, __jsx(TemplateTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }\n  }, firstTitleSection, \" \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 35\n    }\n  }, lastTitleSection)), __jsx(TemplateDescription, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }\n  }, description), __jsx(TagsContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }, tags.map((tag, index) => __jsx(_ui_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    active: true,\n    key: `template-tag-${index}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 17\n    }\n  }, tag))))), __jsx(TemplateContent, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    source: content,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Template, \"4wNeRkdHXiZSd4lf9zHGRFHzcaI=\");\n\n_c9 = Template;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"TemplateContainer\");\n$RefreshReg$(_c2, \"TemplateHeader\");\n$RefreshReg$(_c3, \"TemplateIcon\");\n$RefreshReg$(_c4, \"TextContainer\");\n$RefreshReg$(_c5, \"TemplateTitle\");\n$RefreshReg$(_c6, \"TemplateDescription\");\n$RefreshReg$(_c7, \"TagsContainer\");\n$RefreshReg$(_c8, \"TemplateContent\");\n$RefreshReg$(_c9, \"Template\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQudHN4PzBmZTciXSwibmFtZXMiOlsiVGVtcGxhdGVDb250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiVGVtcGxhdGVIZWFkZXIiLCJoZWFkZXIiLCJUZW1wbGF0ZUljb24iLCJpbWciLCJUZXh0Q29udGFpbmVyIiwic2VjdGlvbiIsIlRlbXBsYXRlVGl0bGUiLCJoMiIsInRoZW1lIiwiY29sb3IiLCJmb250UHJpbWFyeSIsInByaW1hcnkiLCJ3aGl0ZSIsIlRlbXBsYXRlRGVzY3JpcHRpb24iLCJwIiwiVGFnc0NvbnRhaW5lciIsImRpdiIsIlRlbXBsYXRlQ29udGVudCIsImZvbnRTZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJUZW1wbGF0ZSIsInRlbXBsYXRlIiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwidGFncyIsImZpcnN0VGl0bGVTZWN0aW9uIiwibGFzdFRpdGxlU2VjdGlvbiIsIlJlYWN0IiwidXNlTWVtbyIsIndvcmRzSW5UaXRsZSIsInNwbGl0IiwibGFzdEVsZW1lbnQiLCJwb3AiLCJqb2luIiwicHJvY2VzcyIsIm1hcCIsInRhZyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGlCQUFpQixHQUFHQyx5REFBTSxDQUFDQyxPQUFRLEVBQXpDO0tBQU1GLGlCO0FBRU4sTUFBTUcsY0FBYyxHQUFHRix5REFBTSxDQUFDRyxNQUFPOzs7Q0FBckM7TUFBTUQsYztBQUtOLE1BQU1FLFlBQVksR0FBR0oseURBQU0sQ0FBQ0ssR0FBSTs7Q0FBaEM7TUFBTUQsWTtBQUlOLE1BQU1FLGFBQWEsR0FBR04seURBQU0sQ0FBQ08sT0FBUTs7Q0FBckM7TUFBTUQsYTtBQUlOLE1BQU1FLGFBQWEsR0FBR1IseURBQU0sQ0FBQ1MsRUFBRzs7V0FFckIsQ0FBQztB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QUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFlLFVBQU0sRUFBRWIsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBcEJGLENBREYsQ0FERjtBQTRCRCxDQXRDTTs7R0FBTUwsUTs7TUFBQUEsUSIsImZpbGUiOiIuL3NyYy9hcHAvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZW1wbGF0ZURhdGEgfSBmcm9tICcuLi8uLi9wYWdlcy90ZW1wbGF0ZXMvW2lkXSc7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFRhZyBmcm9tICcuLi8uLi91aS90YWcvdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cbmNvbnN0IFRlbXBsYXRlQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgYDtcblxuY29uc3QgVGVtcGxhdGVIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgVGVtcGxhdGVJY29uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDI1JTtcbmA7XG5cbmNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZmxleDogMTtcbmA7XG5cbmNvbnN0IFRlbXBsYXRlVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogNDlweDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFByaW1hcnl9O1xuICBmb250LXdlaWdodDogNzAwO1xuXG4gICYgPiBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLndoaXRlfTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRlbXBsYXRlRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG5gO1xuXG5jb25zdCBUYWdzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICYgPiAudGFnIHtcbiAgICBtYXJnaW46IDElO1xuICB9XG5gO1xuXG5jb25zdCBUZW1wbGF0ZUNvbnRlbnQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFNlY29uZGFyeX07XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG5cbiAgJiBoMSxcbiAgJiBoMixcbiAgJiBoMyxcbiAgJiBoNCxcbiAgJiBoNSxcbiAgJiBoNiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuZm9udFNlY29uZGFyeX07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gICYgaDEge1xuICAgIGZvbnQtc2l6ZTogMzFweDtcbiAgfVxuXG4gICYgaDIge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgfVxuXG4gICYgaDMge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuXG4gICYgaDQge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxuXG4gICYgaDUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuXG4gICYgaDYge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gICY6OmZpcnN0LWxldHRlciB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iuc2Vjb25kYXJ5fTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcbiAgfVxuXG4gICYgPiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJiA+IHA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFRlbXBsYXRlUHJvcHMge1xuICB0ZW1wbGF0ZTogVGVtcGxhdGVEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgVGVtcGxhdGUgPSAoe1xuICB0ZW1wbGF0ZTogeyBpY29uLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNvbnRlbnQsIHRhZ3MgfSxcbn06IFRlbXBsYXRlUHJvcHMpID0+IHtcbiAgY29uc3QgW2ZpcnN0VGl0bGVTZWN0aW9uLCBsYXN0VGl0bGVTZWN0aW9uXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHdvcmRzSW5UaXRsZSA9IHRpdGxlLnNwbGl0KCcgJyk7XG4gICAgY29uc3QgbGFzdEVsZW1lbnQgPSB3b3Jkc0luVGl0bGUucG9wKCk7XG5cbiAgICByZXR1cm4gW3dvcmRzSW5UaXRsZS5qb2luKCcgJyksIGxhc3RFbGVtZW50XTtcbiAgfSwgW3RpdGxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgPFRlbXBsYXRlQ29udGFpbmVyPlxuICAgICAgICA8VGVtcGxhdGVIZWFkZXI+XG4gICAgICAgICAgPFRlbXBsYXRlSWNvblxuICAgICAgICAgICAgYWx0PVwiQXJ0aWNsZSBpY29uXCJcbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pY29ucy90ZW1wbGF0ZXMvJHtpY29ufS5zdmdgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgICA8VGVtcGxhdGVUaXRsZT5cbiAgICAgICAgICAgICAge2ZpcnN0VGl0bGVTZWN0aW9ufSA8c3Bhbj57bGFzdFRpdGxlU2VjdGlvbn08L3NwYW4+XG4gICAgICAgICAgICA8L1RlbXBsYXRlVGl0bGU+XG4gICAgICAgICAgICA8VGVtcGxhdGVEZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9UZW1wbGF0ZURlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPFRhZ3NDb250YWluZXI+XG4gICAgICAgICAgICAgIHt0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUYWcgYWN0aXZlIGtleT17YHRlbXBsYXRlLXRhZy0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhZ3NDb250YWluZXI+XG4gICAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgICA8L1RlbXBsYXRlSGVhZGVyPlxuICAgICAgICA8VGVtcGxhdGVDb250ZW50PlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17Y29udGVudH0gLz5cbiAgICAgICAgPC9UZW1wbGF0ZUNvbnRlbnQ+XG4gICAgICA8L1RlbXBsYXRlQ29udGFpbmVyPlxuICAgIDwvQXBwQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/template/template.component.tsx\n");

/***/ })

})