_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},Bi3C:function(n,e,t){var o;"undefined"!==typeof self&&self,o=function(n){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(1),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),c=t(2),a=(o=c)&&o.__esModule?o:{default:o},l=function(n){function e(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.smoothScroll=t.smoothScroll.bind(t),t}return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),i(e,[{key:"componentDidMount",value:function(){t(3).polyfill()}},{key:"smoothScroll",value:function(n){var e=this;n.preventDefault();var t=function(){return 0};"undefined"!==typeof this.props.offset&&(t=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var o=n.currentTarget.getAttribute("href").slice(1),r=document.getElementById(o).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:r-t(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(n)}},{key:"render",value:function(){var n=this.props,e=(n.offset,function(n,e){var t={};for(var o in n)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}(n,["offset"]));return a.default.createElement("a",r({},e,{onClick:this.smoothScroll}))}}]),e}(c.Component);e.default=l},function(e,t){e.exports=n},function(n,e,t){!function(){"use strict";n.exports={polyfill:function(){var n=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==n.__forceSmoothScrollPolyfill__)){var t,o=n.HTMLElement||n.Element,r=468,i={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},c=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now,a=(t=n.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)?1:0);n.scroll=n.scrollTo=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?m.call(n,e.body,void 0!==arguments[0].left?~~arguments[0].left:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:n.scrollY||n.pageYOffset):i.scroll.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:n.scrollY||n.pageYOffset))},n.scrollBy=function(){void 0!==arguments[0]&&(u(arguments[0])?i.scrollBy.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(n,e.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==u(arguments[0])){var n=arguments[0].left,e=arguments[0].top;m.call(this,this,"undefined"===typeof n?this.scrollLeft:~~n,"undefined"===typeof e?this.scrollTop:~~e)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==u(arguments[0])){var t=d(this),o=t.getBoundingClientRect(),r=this.getBoundingClientRect();t!==e.body?(m.call(this,t,t.scrollLeft+r.left-o.left,t.scrollTop+r.top-o.top),"fixed"!==n.getComputedStyle(t).position&&n.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):n.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(n,e){this.scrollLeft=n,this.scrollTop=e}function u(n){if(null===n||"object"!==typeof n||void 0===n.behavior||"auto"===n.behavior||"instant"===n.behavior)return!0;if("object"===typeof n&&"smooth"===n.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+n.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(n,e){return"Y"===e?n.clientHeight+a<n.scrollHeight:"X"===e?n.clientWidth+a<n.scrollWidth:void 0}function f(e,t){var o=n.getComputedStyle(e,null)["overflow"+t];return"auto"===o||"scroll"===o}function p(n){var e=s(n,"Y")&&f(n,"Y"),t=s(n,"X")&&f(n,"X");return e||t}function d(n){var t;do{t=(n=n.parentNode)===e.body}while(!1===t&&!1===p(n));return t=null,n}function h(e){var t,o,i,a,l=(c()-e.startTime)/r;a=l=l>1?1:l,t=.5*(1-Math.cos(Math.PI*a)),o=e.startX+(e.x-e.startX)*t,i=e.startY+(e.y-e.startY)*t,e.method.call(e.scrollable,o,i),o===e.x&&i===e.y||n.requestAnimationFrame(h.bind(n,e))}function m(t,o,r){var a,u,s,f,p=c();t===e.body?(a=n,u=n.scrollX||n.pageXOffset,s=n.scrollY||n.pageYOffset,f=i.scroll):(a=t,u=t.scrollLeft,s=t.scrollTop,f=l),h({scrollable:a,method:f,startTime:p,startX:u,startY:s,x:o,y:r})}}}}()}])},n.exports=o(t("q1tI"))},QeBL:function(n,e,t){"use strict";t.r(e);var o=t("rePB"),r=t("q1tI"),i=t.n(r),c=t("shfE"),a=t("Bi3C"),l=t.n(a),u=t("h4VS"),s=t("vOnD"),f=t("ZMKu");function p(){var n=Object(u.a)(["\n  position: relative;\n  color: ",";\n  z-index: 1;\n  display: inline-block;\n\n  &::before {\n    content: '';\n    background-color: ",";\n    top: -2px;\n    height: calc(100% + 4px);\n    position: absolute;\n    z-index: -99;\n    animation: shrink 0.9s forwards;\n  }\n\n  @keyframes shrink {\n    0% {\n      width: 0;\n      left: 100%;\n    }\n\n    100% {\n      left: -6px;\n      width: calc(100% + 12px);\n    }\n  }\n"]);return p=function(){return n},n}var d=Object(s.c)(f.b.span)(p(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.primary})),h=i.a.createElement,m=function(n){var e=n.children;return h(d,null,e)};function v(){var n=Object(u.a)(["\n  color: ",";\n"]);return v=function(){return n},n}function b(){var n=Object(u.a)(["\n  font-size: 40px;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  color: ",";\n\n  & > span {\n    color: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    font-size: 18px;\n    position: initial;\n    margin-top: 60px;\n    opacity: 0;\n\n    animation: showText 1s forwards;\n    animation-delay: 1.3s;\n  }\n"]);return b=function(){return n},n}function y(){var n=Object(u.a)(["\n  font-size: 60px;\n  text-align: center;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 35px);\n  position: relative;\n  opacity: 0;\n  animation: showHeader 1s forwards;\n\n  @media screen and (max-width: ",") {\n    margin: 70px 0;\n    height: auto;\n  }\n\n  p {\n    color: ",";\n    font-size: 23px;\n    margin-bottom: 25px;\n    animation: moveDown 1s forwards;\n    opacity: 0;\n\n    @media screen and (max-width: ",") {\n      font-size: 13px;\n      margin-bottom: 10px;\n    }\n  }\n\n  h2 {\n    max-width: 80%;\n    font-size: 60px;\n    color: ",";\n\n    @media screen and (max-width: ",") {\n      max-width: 100%;\n      font-size: 27px;\n    }\n  }\n\n  a {\n    font-size: 23px;\n    margin-top: 50px;\n    animation: moveUp 0.5s forwards;\n    animation-delay: 1s;\n    opacity: 0;\n    color: ",";\n    font-weight: 500;\n    padding: 10px 30px;\n    text-decoration: none;\n\n    &:hover {\n      color: #00000d;\n    }\n\n    @media screen and (max-width: ",") {\n      font-size: 13px;\n      font-weight: 700;\n      padding: 10px 15px;\n    }\n  }\n"]);return y=function(){return n},n}var x=Object(s.c)(f.b.header)(y(),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.color.fontPrimary}),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.color.white}),(function(n){return n.theme.deviceBreakpoint.mobile})),w=s.c.h3(b(),(function(n){return n.theme.color.fontPrimary}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.deviceBreakpoint.mobile})),g=s.c.span(v(),(function(n){return n.theme.color.secondary})),O=t("wO/q"),j=i.a.createElement,k=function(){return j(x,null,j("p",null,"We provide collection of quality frameworks and templates."),j("h2",null,"Decision making ",j(m,null,"templates")," with",j(g,null," quality")," results."),j(O.a,{href:"#resources",type:"primaryButton"},j(l.a,{href:"#resources"},"Explore resources")),j(w,null,"Proudly powered by ",j("span",null,"Exlabs Ltd.")))},E=t("YFqc"),_=t.n(E),B=t("wx14"),P=t("Ff2n");function T(){var n=Object(u.a)(["\n  cursor: pointer;\n"]);return T=function(){return n},n}function S(){var n=Object(u.a)(["\n  display: inline-block;\n  background-color: ",";\n  color: ",";\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-size: 16px;\n  font-weight: 700;\n  transition: background-color 0.3s ease;\n"]);return S=function(){return n},n}var z=s.c.span.attrs((function(n){return n.active||!1}))(S(),(function(n){var e=n.theme;return n.active?e.color.primary400:e.color.gray400}),(function(n){var e=n.theme;return n.active?e.color.primary:e.color.gray})),X=Object(s.c)(z)(T()),Y=t("ODXe"),C=i.a.createElement,D=i.a.createElement,L=i.a.forwardRef((function(n,e){var t=n.active,o=void 0!==t&&t,r=n.children,i=n.className,c=Object(P.a)(n,["active","children","className"]);return D(z,Object(B.a)({active:o,className:"tag ".concat(i),ref:e},c),r)}));L.displayName="Tag",L.Checkable=function(n){var e=n.active,t=void 0!==e&&e,o=n.onClick,r=n.children,c=i.a.useState(t),a=Object(Y.a)(c,2),l=a[0],u=a[1];return C(X,{active:l,onClick:function(n){var e=!l;u(e),o(e,n)}},r)};var N=L;function M(){var n=Object(u.a)(["\n  font-size: 16px;\n  color: ",";\n  line-height: 23px;\n\n  @media screen and (max-width: ",") {\n    font-size: 14px;\n  }\n"]);return M=function(){return n},n}function I(){var n=Object(u.a)(["\n  margin: 5px 0;\n  width: 100%;\n  & > .tag {\n    font-size: 14px;\n    padding: 6px 15px;\n    margin: 1%;\n  }\n\n  @media screen and (max-width: ",") {\n    display: flex;\n    flex-wrap: wrap;\n\n    & > .tag {\n      font-size: 11px;\n    }\n  }\n"]);return I=function(){return n},n}function R(){var n=Object(u.a)(["\n  font-size: 25px;\n  font-weight: 700;\n\n  @media screen and (max-width: ",") {\n    font-size: 19px;\n    text-align: center;\n  }\n"]);return R=function(){return n},n}function q(){var n=Object(u.a)(["\n  height: 200px;\n"]);return q=function(){return n},n}function V(){var n=Object(u.a)([""]);return V=function(){return n},n}function A(){var n=Object(u.a)(["\n  border: 1px solid ",";\n  padding: 10px 20px 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n\n  @media screen and (max-width: ",") {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return A=function(){return n},n}function H(){var n=Object(u.a)(["\n  display: block;\n  text-decoration: none;\n  color: ",";\n  user-select: none;\n  cursor: pointer;\n"]);return H=function(){return n},n}var F=s.c.a(H(),(function(n){return n.theme.color.fontPrimary})),W=Object(s.c)(f.b.article)(A(),(function(n){return n.theme.color.lightGray}),(function(n){return n.theme.deviceBreakpoint.mobile})),J=s.c.header(V()),U=s.c.img(q()),K=s.c.h3(R(),(function(n){return n.theme.deviceBreakpoint.mobile})),Q=s.c.div(I(),(function(n){return n.theme.deviceBreakpoint.mobile})),G=s.c.p(M(),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile})),Z=t("3KEO"),$=i.a.createElement,nn=function(n){var e=n.title,t=n.description,o=n.icon,r=n.templateUrl,i=n.tags;return $(_.a,{href:Object(Z.b)("templates/".concat(r))},$(F,{className:"template-thumbnail"},$(W,{whileHover:{scale:1.03,transition:{duration:.4}},whileTap:{scale:.96}},$(J,null,$(U,{src:"".concat("/value-driven-templates","/icons/").concat(o,".svg")}),$(K,null,e)),i.length&&$(Q,null,i.map((function(n,t){return $(N,{active:!0,key:"".concat(e,"-tag-").concat(t)},n)}))),$(G,null,t))))};function en(){var n=Object(u.a)(["\n  font-size: 21px;\n  font-weight: 500;\n  color: ",";\n\n  @media screen and (max-width: ",") {\n    font-size: 16px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n  width: 31%;\n  margin: 1%;\n\n  @media screen and (max-width: ",") {\n    width: 48%;\n  }\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"]);return tn=function(){return n},n}function on(){var n=Object(u.a)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n"]);return on=function(){return n},n}var rn=s.c.ul(on()),cn=s.c.li(tn(),(function(n){return n.theme.deviceBreakpoint.tablet}),(function(n){return n.theme.deviceBreakpoint.mobile})),an=s.c.h3(en(),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile})),ln=i.a.createElement,un=function(n){var e=n.thumbnails;return ln(rn,null,e.length?e.map((function(n,e){return ln(cn,{key:"template-thumbnail-".concat(e)},ln(nn,n))})):ln(an,null,"There is no templates yet"))};function sn(){var n=Object(u.a)(["\n  color: ",";\n  font-weight: 700;\n  font-size: 50px;\n  margin: 70px 0 30px;\n\n  @media screen and (max-width: ",") {\n    font-size: 23px;\n  }\n\n  & > span {\n    background-color: ",";\n    color: ",";\n    padding: 0 10px;\n  }\n"]);return sn=function(){return n},n}var fn=s.c.h2(sn(),(function(n){return n.theme.color.fontPrimary}),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.white})),pn=i.a.createElement,dn=function(n){var e=n.thumbnails;return pn(i.a.Fragment,null,pn(k,null),pn(fn,{id:"resources"},"The ",pn("span",null,"latest")),pn(un,{thumbnails:e}))},hn=t("2VN+"),mn=i.a.createElement;function vn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function bn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?vn(Object(t),!0).forEach((function(e){Object(o.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):vn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.default=function(){var n=c.map((function(n){return bn(bn({},n),{},{templateUrl:n.id})}));return mn(hn.a,null,mn(dn,{thumbnails:n}))}},shfE:function(n){n.exports=JSON.parse('[{"id":"adr","title":"Architecture Decision Record","description":"Learn how to document important architectural decisions in your development team.","icon":"adr","tags":["#Architecture","#Team Work"]}]')}},[["/EDR",1,2,4,0,3,5]]]);