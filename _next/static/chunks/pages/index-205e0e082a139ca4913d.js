_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/EDR":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("QeBL")}])},Bi3C:function(n,t,e){var o;"undefined"!==typeof self&&self,o=function(n){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=e(1),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},i=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),c=e(2),a=(o=c)&&o.__esModule?o:{default:o},l=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.smoothScroll=e.smoothScroll.bind(e),e}return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,n),i(t,[{key:"componentDidMount",value:function(){e(3).polyfill()}},{key:"smoothScroll",value:function(n){var t=this;n.preventDefault();var e=function(){return 0};"undefined"!==typeof this.props.offset&&(e=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var o=n.currentTarget.getAttribute("href").slice(1),r=document.getElementById(o).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:r-e(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(n)}},{key:"render",value:function(){var n=this.props,t=(n.offset,function(n,t){var e={};for(var o in n)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}(n,["offset"]));return a.default.createElement("a",r({},t,{onClick:this.smoothScroll}))}}]),t}(c.Component);t.default=l},function(t,e){t.exports=n},function(n,t,e){!function(){"use strict";n.exports={polyfill:function(){var n=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==n.__forceSmoothScrollPolyfill__)){var e,o=n.HTMLElement||n.Element,r=468,i={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},c=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now,a=(e=n.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);n.scroll=n.scrollTo=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?m.call(n,t.body,void 0!==arguments[0].left?~~arguments[0].left:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:n.scrollY||n.pageYOffset):i.scroll.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:n.scrollY||n.pageYOffset))},n.scrollBy=function(){void 0!==arguments[0]&&(u(arguments[0])?i.scrollBy.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(n,t.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==u(arguments[0])){var n=arguments[0].left,t=arguments[0].top;m.call(this,this,"undefined"===typeof n?this.scrollLeft:~~n,"undefined"===typeof t?this.scrollTop:~~t)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==u(arguments[0])){var e=d(this),o=e.getBoundingClientRect(),r=this.getBoundingClientRect();e!==t.body?(m.call(this,e,e.scrollLeft+r.left-o.left,e.scrollTop+r.top-o.top),"fixed"!==n.getComputedStyle(e).position&&n.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):n.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(n,t){this.scrollLeft=n,this.scrollTop=t}function u(n){if(null===n||"object"!==typeof n||void 0===n.behavior||"auto"===n.behavior||"instant"===n.behavior)return!0;if("object"===typeof n&&"smooth"===n.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+n.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(n,t){return"Y"===t?n.clientHeight+a<n.scrollHeight:"X"===t?n.clientWidth+a<n.scrollWidth:void 0}function f(t,e){var o=n.getComputedStyle(t,null)["overflow"+e];return"auto"===o||"scroll"===o}function p(n){var t=s(n,"Y")&&f(n,"Y"),e=s(n,"X")&&f(n,"X");return t||e}function d(n){var e;do{e=(n=n.parentNode)===t.body}while(!1===e&&!1===p(n));return e=null,n}function h(t){var e,o,i,a,l=(c()-t.startTime)/r;a=l=l>1?1:l,e=.5*(1-Math.cos(Math.PI*a)),o=t.startX+(t.x-t.startX)*e,i=t.startY+(t.y-t.startY)*e,t.method.call(t.scrollable,o,i),o===t.x&&i===t.y||n.requestAnimationFrame(h.bind(n,t))}function m(e,o,r){var a,u,s,f,p=c();e===t.body?(a=n,u=n.scrollX||n.pageXOffset,s=n.scrollY||n.pageYOffset,f=i.scroll):(a=e,u=e.scrollLeft,s=e.scrollTop,f=l),h({scrollable:a,method:f,startTime:p,startX:u,startY:s,x:o,y:r})}}}}()}])},n.exports=o(e("q1tI"))},Nzjq:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var o=e("q1tI"),r=e.n(o),i=e("h4VS"),c=e("vOnD"),a=e("ZMKu");function l(){var n=Object(i.a)(["\n  position: relative;\n  color: ",";\n  z-index: 1;\n  display: inline-block;\n\n  &::before {\n    content: '';\n    background-color: ",";\n    top: -2px;\n    height: calc(100% + 4px);\n    position: absolute;\n    z-index: -99;\n    animation: shrink 0.9s forwards;\n  }\n\n  @keyframes shrink {\n    0% {\n      width: 0;\n      left: 100%;\n    }\n\n    100% {\n      left: -6px;\n      width: calc(100% + 12px);\n    }\n  }\n"]);return l=function(){return n},n}var u=Object(c.c)(a.b.span)(l(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.primary})),s=r.a.createElement,f=function(n){var t=n.children;return s(u,null,t)}},QeBL:function(n,t,e){"use strict";e.r(t);var o=e("rePB"),r=e("h4VS"),i=e("q1tI"),c=e.n(i),a=e("shfE"),l=e("Bi3C"),u=e.n(l),s=e("Nzjq"),f=e("vOnD"),p=e("ZMKu");function d(){var n=Object(r.a)(["\n  color: ",";\n"]);return d=function(){return n},n}function h(){var n=Object(r.a)(["\n  font-size: 40px;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  color: ",";\n\n  & > span {\n    color: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    font-size: 18px;\n    position: initial;\n    margin-top: 60px;\n    opacity: 0;\n\n    animation: showText 1s forwards;\n    animation-delay: 1.3s;\n  }\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n  font-size: 60px;\n  text-align: center;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 84px);\n  position: relative;\n\n  @media screen and (max-width: ",") {\n    margin: 70px 0;\n    height: auto;\n  }\n\n  h2 {\n    max-width: 80%;\n    font-size: 60px;\n    color: ",";\n\n    @media screen and (max-width: ",") {\n      max-width: 100%;\n      font-size: 27px;\n    }\n  }\n\n  a {\n    font-size: 23px;\n    margin-top: 50px;\n    color: ",";\n    font-weight: 500;\n    padding: 10px 30px;\n    text-decoration: none;\n\n    &:hover {\n      color: #00000d;\n    }\n\n    @media screen and (max-width: ",") {\n      font-size: 14px;\n      font-weight: 700;\n      padding: 15px;\n    }\n  }\n"]);return m=function(){return n},n}function v(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 23px;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: ",") {\n    font-size: 13px;\n    margin-bottom: 10px;\n  }\n"]);return v=function(){return n},n}var b=Object(f.c)(p.b.p)(v(),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile})),y=Object(f.c)(p.b.header)(m(),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.color.fontPrimary}),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.color.white}),(function(n){return n.theme.deviceBreakpoint.mobile})),x=f.c.h3(h(),(function(n){return n.theme.color.fontPrimary}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.deviceBreakpoint.mobile})),g=f.c.span(d(),(function(n){return n.theme.color.secondary})),w=e("wO/q"),O=c.a.createElement,j=function(){return O(y,{initial:{opacity:0},animate:{opacity:1}},O(b,{initial:{y:-50},animate:{y:0},transition:{duration:.7,easings:!0}},"We provide collection of quality frameworks and templates."),O("h2",null,"Decision making ",O(s.a,null,"templates")," with",O(g,null," quality")," results."),O(w.a,{href:"#resources",type:"primaryButton"},O(u.a,{href:"#resources"},"Explore resources")),O(x,null,"Proudly powered by ",O("span",null,"Exlabs Ltd.")))},k=e("YFqc"),E=e.n(k),_=e("WFYS");function B(){var n=Object(r.a)(["\n  font-size: 16px;\n  color: ",";\n  line-height: 23px;\n\n  @media screen and (max-width: ",") {\n    font-size: 14px;\n  }\n"]);return B=function(){return n},n}function P(){var n=Object(r.a)(["\n  margin: 5px 0;\n  width: 100%;\n  & > .tag {\n    font-size: 14px;\n    padding: 6px 15px;\n    margin: 1%;\n  }\n\n  @media screen and (max-width: ",") {\n    display: flex;\n    flex-wrap: wrap;\n\n    & > .tag {\n      font-size: 11px;\n    }\n  }\n"]);return P=function(){return n},n}function S(){var n=Object(r.a)(["\n  font-size: 25px;\n  font-weight: 700;\n\n  @media screen and (max-width: ",") {\n    font-size: 19px;\n    text-align: center;\n  }\n"]);return S=function(){return n},n}function T(){var n=Object(r.a)(["\n  height: 200px;\n"]);return T=function(){return n},n}function z(){var n=Object(r.a)([""]);return z=function(){return n},n}function Y(){var n=Object(r.a)(["\n  border: 1px solid ",";\n  padding: 10px 20px 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n\n  @media screen and (max-width: ",") {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return Y=function(){return n},n}function X(){var n=Object(r.a)(["\n  display: block;\n  text-decoration: none;\n  color: ",";\n  user-select: none;\n  cursor: pointer;\n"]);return X=function(){return n},n}var C=f.c.a(X(),(function(n){return n.theme.color.fontPrimary})),D=Object(f.c)(p.b.article)(Y(),(function(n){return n.theme.color.lightGray}),(function(n){return n.theme.deviceBreakpoint.mobile})),N=f.c.header(z()),L=f.c.img(T()),I=f.c.h3(S(),(function(n){return n.theme.deviceBreakpoint.mobile})),M=f.c.div(P(),(function(n){return n.theme.deviceBreakpoint.mobile})),q=f.c.p(B(),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile})),R=e("3KEO"),V=c.a.createElement,F=function(n){var t=n.title,e=n.description,o=n.icon,r=n.templateUrl,i=n.tags;return V(E.a,{href:Object(R.b)("templates/".concat(r))},V(C,{className:"template-thumbnail"},V(D,{whileHover:{scale:1.03,transition:{duration:.4}},whileTap:{scale:.96}},V(N,null,V(L,{src:"".concat("/value-driven-templates","/icons/templates/").concat(o,".svg")}),V(I,null,t)),i.length&&V(M,null,i.map((function(n,e){return V(_.a,{active:!0,key:"".concat(t,"-tag-").concat(e)},n)}))),V(q,null,e))))};function W(){var n=Object(r.a)(["\n  font-size: 21px;\n  font-weight: 500;\n  color: ",";\n\n  @media screen and (max-width: ",") {\n    font-size: 16px;\n  }\n"]);return W=function(){return n},n}function A(){var n=Object(r.a)(["\n  width: 31%;\n  margin: 1%;\n\n  @media screen and (max-width: ",") {\n    width: 48%;\n  }\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"]);return A=function(){return n},n}function H(){var n=Object(r.a)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n"]);return H=function(){return n},n}var J=f.c.ul(H()),K=f.c.li(A(),(function(n){return n.theme.deviceBreakpoint.tablet}),(function(n){return n.theme.deviceBreakpoint.mobile})),Q=f.c.h3(W(),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile})),U=c.a.createElement,Z=function(n){var t=n.thumbnails;return U(J,null,t.length?t.map((function(n,t){return U(K,{key:"template-thumbnail-".concat(t)},U(F,n))})):U(Q,null,"There is no templates yet"))};function G(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n  font-size: 50px;\n  margin: 70px 0 30px;\n\n  @media screen and (max-width: ",") {\n    font-size: 23px;\n  }\n\n  & > span {\n    background-color: ",";\n    color: ",";\n    padding: 0 10px;\n  }\n"]);return G=function(){return n},n}var $=f.c.h2(G(),(function(n){return n.theme.color.fontPrimary}),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.white})),nn=c.a.createElement,tn=function(n){var t=n.thumbnails;return nn(c.a.Fragment,null,nn(j,null),nn($,{id:"resources"},"The ",nn("span",null,"latest")),nn(Z,{thumbnails:t}))},en=e("2VN+"),on=c.a.createElement;function rn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function cn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?rn(Object(e),!0).forEach((function(t){Object(o.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):rn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function an(){var n=Object(r.a)(["\n  position: absolute;\n  left: -10%;\n  top: -10%;\n  opacity: 0.05;\n  height: 60%;\n"]);return an=function(){return n},n}function ln(){var n=Object(r.a)(["\n  position: relative;\n  overflow: hidden;\n"]);return ln=function(){return n},n}var un=f.c.div(ln()),sn=f.c.img(an());t.default=function(){var n=a.map((function(n){return cn(cn({},n),{},{templateUrl:n.id})}));return on(un,null,on(sn,{alt:"background",src:"".concat("/value-driven-templates","/icons/bg.svg")}),on(en.a,null,on(tn,{thumbnails:n})))}},WFYS:function(n,t,e){"use strict";var o=e("wx14"),r=e("Ff2n"),i=e("q1tI"),c=e.n(i),a=e("h4VS"),l=e("vOnD");function u(){var n=Object(a.a)(["\n  cursor: pointer;\n"]);return u=function(){return n},n}function s(){var n=Object(a.a)(["\n  display: inline-block;\n  background-color: ",";\n  color: ",";\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-size: 16px;\n  font-weight: 700;\n  transition: background-color 0.3s ease;\n"]);return s=function(){return n},n}var f=l.c.span.attrs((function(n){return n.active||!1}))(s(),(function(n){var t=n.theme;return n.active?t.color.primary400:t.color.gray400}),(function(n){var t=n.theme;return n.active?t.color.primary:t.color.gray})),p=Object(l.c)(f)(u()),d=e("ODXe"),h=c.a.createElement,m=c.a.createElement,v=c.a.forwardRef((function(n,t){var e=n.active,i=void 0!==e&&e,c=n.children,a=n.className,l=Object(r.a)(n,["active","children","className"]);return m(f,Object(o.a)({active:i,className:"tag ".concat(a),ref:t},l),c)}));v.displayName="Tag",v.Checkable=function(n){var t=n.active,e=void 0!==t&&t,o=n.onClick,r=n.children,i=c.a.useState(e),a=Object(d.a)(i,2),l=a[0],u=a[1];return h(p,{active:l,onClick:function(n){var t=!l;u(t),o(t,n)}},r)};t.a=v},shfE:function(n){n.exports=JSON.parse('[{"id":"adr","title":"Architecture Decision Record","description":"Learn how to document important architectural decisions in your development team.","icon":"adr","tags":["#Architecture","#Team Work"]}]')}},[["/EDR",1,2,4,0,3,5]]]);