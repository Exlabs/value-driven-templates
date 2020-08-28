webpackHotUpdate_N_E("pages/templates/[id]",{

/***/ "./src/app/template/template.component.tsx":
/*!*************************************************!*\
  !*** ./src/app/template/template.component.tsx ***!
  \*************************************************/
/*! exports provided: Template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Template\", function() { return Template; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/layout.provider */ \"./src/providers/layout.provider.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ui_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/tag/tag.component */ \"./src/ui/tag/tag.component.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mikolajwargowski/Documents/projects/value-driven-templates/src/app/template/template.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst TemplateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].article``;\n_c = TemplateContainer;\nconst TemplateHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header`\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    flex-direction: column;\n  }\n`;\n_c2 = TemplateHeader;\nconst TemplateIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img`\n  width: 25%;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    width: 100%;\n  }\n`;\n_c3 = TemplateIcon;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section`\n  flex: 1;\n`;\n_c4 = TextContainer;\nconst TemplateTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2`\n  font-size: 49px;\n  color: ${({\n  theme\n}) => theme.color.fontPrimary};\n  font-weight: 700;\n\n  & > span {\n    background-color: ${({\n  theme\n}) => theme.color.primary};\n    color: ${({\n  theme\n}) => theme.color.white};\n    padding: 0 10px;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 27px;\n    text-align: center;\n  }\n`;\n_c5 = TemplateTitle;\nconst TemplateDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p`\n  margin: 15px 0;\n  font-size: 23px;\n  max-width: 70%;\n  color: ${({\n  theme\n}) => theme.color.fontSecondary};\n  font-weight: 500;\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    font-size: 18px;\n    max-width: 100%;\n    text-align: center;\n  }\n`;\n_c6 = TemplateDescription;\nconst TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  display: flex;\n  flex-wrap: wrap;\n\n  & > .tag {\n    margin: 0.5%;\n  }\n\n  @media screen and (max-width: ${({\n  theme\n}) => theme.deviceBreakpoint.mobile}) {\n    & .tag {\n      margin: 1%;\n      font-size: 14px;\n    }\n  }\n`;\n_c7 = TagsContainer;\nconst TemplateContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section`\n  margin-top: 40px;\n  color: ${({\n  theme\n}) => theme.color.fontSecondary};\n  font-size: 21px;\n  line-height: 27px;\n\n  & h1,\n  & h2,\n  & h3,\n  & h4,\n  & h5,\n  & h6 {\n    color: ${({\n  theme\n}) => theme.color.fontSecondary};\n    font-weight: 700;\n    margin: 20px 0;\n  }\n\n  & h1 {\n    font-size: 35px;\n  }\n\n  & h2 {\n    font-size: 31px;\n  }\n\n  & h3 {\n    font-size: 27px;\n  }\n\n  & h4 {\n    font-size: 23px;\n  }\n\n  & h5 {\n    font-size: 21px;\n  }\n\n  & h6 {\n    font-size: 19px;\n  }\n\n  &::first-letter {\n    font-size: 60px;\n    font-weight: 700;\n    color: ${({\n  theme\n}) => theme.color.secondary};\n    letter-spacing: -3px;\n  }\n\n  & > p {\n    margin-bottom: 20px;\n  }\n\n  & > p:last-child {\n    margin-bottom: 0;\n  }\n`;\n_c8 = TemplateContent;\nconst Template = ({\n  template: {\n    icon,\n    title,\n    description,\n    content,\n    tags\n  }\n}) => {\n  _s();\n\n  const [firstTitleSection, lastTitleSection] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {\n    const wordsInTitle = title.split(' ');\n    const lastElement = wordsInTitle.pop();\n    return [wordsInTitle.join(' '), lastElement];\n  }, [title]);\n  return __jsx(_providers_layout_provider__WEBPACK_IMPORTED_MODULE_1__[\"AppContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 5\n    }\n  }, __jsx(TemplateContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }\n  }, __jsx(TemplateHeader, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  }, __jsx(TemplateIcon, {\n    alt: \"Article icon\",\n    src: `${\"\"}/icons/templates/${icon}.svg`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 11\n    }\n  }), __jsx(TextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 11\n    }\n  }, __jsx(TemplateTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 13\n    }\n  }, firstTitleSection, \" \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 35\n    }\n  }, lastTitleSection)), __jsx(TemplateDescription, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 13\n    }\n  }, description), __jsx(TagsContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }\n  }, tags.map((tag, index) => __jsx(_ui_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    active: true,\n    key: `template-tag-${index}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 17\n    }\n  }, tag))))), __jsx(TemplateContent, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 9\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    source: content,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Template, \"4wNeRkdHXiZSd4lf9zHGRFHzcaI=\");\n\n_c9 = Template;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"TemplateContainer\");\n$RefreshReg$(_c2, \"TemplateHeader\");\n$RefreshReg$(_c3, \"TemplateIcon\");\n$RefreshReg$(_c4, \"TextContainer\");\n$RefreshReg$(_c5, \"TemplateTitle\");\n$RefreshReg$(_c6, \"TemplateDescription\");\n$RefreshReg$(_c7, \"TagsContainer\");\n$RefreshReg$(_c8, \"TemplateContent\");\n$RefreshReg$(_c9, \"Template\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQudHN4PzBmZTciXSwibmFtZXMiOlsiVGVtcGxhdGVDb250YWluZXIiLCJzdHlsZWQiLCJhcnRpY2xlIiwiVGVtcGxhdGVIZWFkZXIiLCJoZWFkZXIiLCJ0aGVtZSIsImRldmljZUJyZWFrcG9pbnQiLCJtb2JpbGUiLCJUZW1wbGF0ZUljb24iLCJpbWciLCJUZXh0Q29udGFpbmVyIiwic2VjdGlvbiIsIlRlbXBsYXRlVGl0bGUiLCJoMiIsImNvbG9yIiwiZm9udFByaW1hcnkiLCJwcmltYXJ5Iiwid2hpdGUiLCJUZW1wbGF0ZURlc2NyaXB0aW9uIiwicCIsImZvbnRTZWNvbmRhcnkiLCJUYWdzQ29udGFpbmVyIiwiZGl2IiwiVGVtcGxhdGVDb250ZW50Iiwic2Vjb25kYXJ5IiwiVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInRhZ3MiLCJmaXJzdFRpdGxlU2VjdGlvbiIsImxhc3RUaXRsZVNlY3Rpb24iLCJSZWFjdCIsInVzZU1lbW8iLCJ3b3Jkc0luVGl0bGUiLCJzcGxpdCIsImxhc3RFbGVtZW50IiwicG9wIiwiam9pbiIsInByb2Nlc3MiLCJtYXAiLCJ0YWciLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBUSxFQUF6QztLQUFNRixpQjtBQUVOLE1BQU1HLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0csTUFBTzs7OztrQ0FJSCxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxNQUFPOzs7Q0FKL0U7TUFBTUosYztBQVNOLE1BQU1LLFlBQVksR0FBR1AseURBQU0sQ0FBQ1EsR0FBSTs7O2tDQUdFLENBQUM7QUFBRUo7QUFBRixDQUFE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S0FDR0ssaUJBREgsT0FDc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyxnQkFBUCxDQUR0QixDQURGLEVBSUUsTUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCSixXQUF0QixDQUpGLEVBS0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsSUFBSSxDQUFDVyxHQUFMLENBQVMsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEtBQ1IsTUFBQyw2REFBRDtBQUFLLFVBQU0sTUFBWDtBQUFZLE9BQUcsRUFBRyxnQkFBZUEsS0FBTSxFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELEdBREgsQ0FERCxDQURILENBTEYsQ0FMRixDQURGLEVBb0JFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFlLFVBQU0sRUFBRWIsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBcEJGLENBREYsQ0FERjtBQTRCRCxDQXRDTTs7R0FBTUwsUTs7TUFBQUEsUSIsImZpbGUiOiIuL3NyYy9hcHAvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZW1wbGF0ZURhdGEgfSBmcm9tICcuLi8uLi9wYWdlcy90ZW1wbGF0ZXMvW2lkXSc7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvbGF5b3V0LnByb3ZpZGVyJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFRhZyBmcm9tICcuLi8uLi91aS90YWcvdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cbmNvbnN0IFRlbXBsYXRlQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgYDtcblxuY29uc3QgVGVtcGxhdGVIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGV2aWNlQnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgVGVtcGxhdGVJY29uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDI1JTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGZsZXg6IDE7XG5gO1xuXG5jb25zdCBUZW1wbGF0ZVRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDQ5cHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRQcmltYXJ5fTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAmID4gc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci53aGl0ZX07XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZXZpY2VCcmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBUZW1wbGF0ZURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG4gIG1hcmdpbjogMTVweCAwO1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1heC13aWR0aDogNzAlO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5mb250U2Vjb25kYXJ5fTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBUYWdzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICYgPiAudGFnIHtcbiAgICBtYXJnaW46IDAuNSU7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRldmljZUJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgICYgLnRhZyB7XG4gICAgICBtYXJnaW46IDElO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVGVtcGxhdGVDb250ZW50ID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRTZWNvbmRhcnl9O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuXG4gICYgaDEsXG4gICYgaDIsXG4gICYgaDMsXG4gICYgaDQsXG4gICYgaDUsXG4gICYgaDYge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmZvbnRTZWNvbmRhcnl9O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cblxuICAmIGgxIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cblxuICAmIGgyIHtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gIH1cblxuICAmIGgzIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gIH1cblxuICAmIGg0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cblxuICAmIGg1IHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cblxuICAmIGg2IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cblxuICAmOjpmaXJzdC1sZXR0ZXIge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnNlY29uZGFyeX07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XG4gIH1cblxuICAmID4gcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICYgPiBwOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBUZW1wbGF0ZVByb3BzIHtcbiAgdGVtcGxhdGU6IFRlbXBsYXRlRGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlID0gKHtcbiAgdGVtcGxhdGU6IHsgaWNvbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb250ZW50LCB0YWdzIH0sXG59OiBUZW1wbGF0ZVByb3BzKSA9PiB7XG4gIGNvbnN0IFtmaXJzdFRpdGxlU2VjdGlvbiwgbGFzdFRpdGxlU2VjdGlvbl0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB3b3Jkc0luVGl0bGUgPSB0aXRsZS5zcGxpdCgnICcpO1xuICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gd29yZHNJblRpdGxlLnBvcCgpO1xuXG4gICAgcmV0dXJuIFt3b3Jkc0luVGl0bGUuam9pbignICcpLCBsYXN0RWxlbWVudF07XG4gIH0sIFt0aXRsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRhaW5lcj5cbiAgICAgIDxUZW1wbGF0ZUNvbnRhaW5lcj5cbiAgICAgICAgPFRlbXBsYXRlSGVhZGVyPlxuICAgICAgICAgIDxUZW1wbGF0ZUljb25cbiAgICAgICAgICAgIGFsdD1cIkFydGljbGUgaWNvblwiXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vaWNvbnMvdGVtcGxhdGVzLyR7aWNvbn0uc3ZnYH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgPFRlbXBsYXRlVGl0bGU+XG4gICAgICAgICAgICAgIHtmaXJzdFRpdGxlU2VjdGlvbn0gPHNwYW4+e2xhc3RUaXRsZVNlY3Rpb259PC9zcGFuPlxuICAgICAgICAgICAgPC9UZW1wbGF0ZVRpdGxlPlxuICAgICAgICAgICAgPFRlbXBsYXRlRGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvVGVtcGxhdGVEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDxUYWdzQ29udGFpbmVyPlxuICAgICAgICAgICAgICB7dGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8VGFnIGFjdGl2ZSBrZXk9e2B0ZW1wbGF0ZS10YWctJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9UYWdzQ29udGFpbmVyPlxuICAgICAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICAgICAgPC9UZW1wbGF0ZUhlYWRlcj5cbiAgICAgICAgPFRlbXBsYXRlQ29udGVudD5cbiAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2NvbnRlbnR9IC8+XG4gICAgICAgIDwvVGVtcGxhdGVDb250ZW50PlxuICAgICAgPC9UZW1wbGF0ZUNvbnRhaW5lcj5cbiAgICA8L0FwcENvbnRhaW5lcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/template/template.component.tsx\n");

/***/ })

})