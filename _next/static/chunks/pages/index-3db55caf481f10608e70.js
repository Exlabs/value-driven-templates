_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},QeBL:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),o=t.n(r),i=t("h4VS"),a=t("vOnD"),c=t("ZMKu");function u(){var n=Object(i.a)(["\n  position: relative;\n  color: ",";\n  z-index: 1;\n  display: inline-block;\n\n  &::before {\n    content: '';\n    background-color: ",";\n    top: -2px;\n    height: calc(100% + 4px);\n    position: absolute;\n    z-index: -99;\n    animation: shrink 0.9s forwards;\n  }\n\n  @keyframes shrink {\n    0% {\n      width: 0;\n      left: 100%;\n    }\n\n    100% {\n      left: -6px;\n      width: calc(100% + 12px);\n    }\n  }\n"]);return u=function(){return n},n}var l=Object(a.c)(c.b.span)(u(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.primary})),f=o.a.createElement,p=function(n){var e=n.children;return f(l,null,e)};function d(){var n=Object(i.a)(["\n  color: ",";\n"]);return d=function(){return n},n}function s(){var n=Object(i.a)(["\n  font-size: 40px;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n\n  & > span {\n    color: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    font-size: 16px;\n    position: initial;\n    margin-top: 60px;\n    opacity: 0;\n\n    animation: showText 1s forwards;\n    animation-delay: 1.5s;\n  }\n"]);return s=function(){return n},n}function m(){var n=Object(i.a)(["\n  font-size: 60px;\n  text-align: center;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 35px);\n  position: relative;\n  opacity: 0;\n  animation: showHeader 1s forwards;\n\n  p {\n    color: ",";\n    font-size: 23px;\n    margin-bottom: 25px;\n    animation: moveDown 1s forwards;\n    opacity: 0;\n\n    @media screen and (max-width: ",") {\n      font-size: 13px;\n      margin-bottom: 10px;\n    }\n  }\n\n  h2 {\n    max-width: 80%;\n    font-size: 60px;\n\n    @media screen and (max-width: ",") {\n      max-width: 100%;\n      font-size: 27px;\n    }\n  }\n\n  a {\n    font-size: 23px;\n    margin-top: 35px;\n    animation: moveUp 0.5s forwards;\n    animation-delay: 1s;\n    opacity: 0;\n\n    @media screen and (max-width: ",") {\n      font-size: 14px;\n    }\n  }\n"]);return m=function(){return n},n}var h=Object(a.c)(c.b.header)(m(),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.deviceBreakpoint.mobile})),x=a.c.h3(s(),(function(n){return n.theme.color.primary}),(function(n){return n.theme.deviceBreakpoint.mobile})),b=a.c.span(d(),(function(n){return n.theme.color.secondary})),v=t("wx14");function w(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var g=t("YFqc"),y=t.n(g),O=o.a.createElement;function k(){var n=Object(i.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n  padding: 10px 30px;\n  border-radius: 6px;\n  font-weight: 700;\n  color: ",";\n  cursor: pointer;\n"]);return k=function(){return n},n}function j(){var n=Object(i.a)(["\n  background-color: inherit;\n  border: 2px solid ",";\n  padding: 10px 30px;\n  border-radius: 6px;\n  font-weight: 700;\n  color: ",";\n  cursor: pointer;\n"]);return j=function(){return n},n}function z(){var n=Object(i.a)(["\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n"]);return z=function(){return n},n}var E=a.c.a(z(),(function(n){return n.theme.color.primary})),B=a.c.a(j(),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.fontPrimary})),_=a.c.a(k(),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.white})),N=function(n){var e=n.children,t=n.href,r=n.type,i=void 0===r?"default":r,a=n.external,c=void 0!==a&&a,u=w(n,["children","href","type","external"]),l=function(n){switch(i){default:case"default":return O(E,null,n);case"button":return O(B,null,n);case"primaryButton":return O(_,null,n)}};return O(o.a.Fragment,null,c?O(E,Object(v.a)({href:t},u),l(e)):O(y.a,{href:t},O(E,null,l(e))))},P=o.a.createElement,S=function(){return P(h,null,P("p",null,"We provide collection of quality frameworks and templates."),P("h2",null,"Decision making ",P(p,null,"templates")," with",P(b,null," quality")," results."),P(N,{href:"/",type:"primaryButton"},"Explore resources"),P(x,null,"Proudly powered by ",P("span",null,"Exlabs Ltd.")))};function T(){var n=Object(i.a)(["\n  cursor: pointer;\n"]);return T=function(){return n},n}function D(){var n=Object(i.a)(["\n  display: inline-block;\n  background-color: ",";\n  color: ",";\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-size: 16px;\n  font-weight: 700;\n  transition: background-color 0.3s ease;\n"]);return D=function(){return n},n}var q=a.c.span.attrs((function(n){return n.active||!1}))(D(),(function(n){var e=n.theme;return n.active?e.color.primary400:e.color.gray400}),(function(n){var e=n.theme;return n.active?e.color.primary:e.color.gray})),C=Object(a.c)(q)(T()),F=t("ODXe"),L=o.a.createElement,R=o.a.createElement,X=o.a.forwardRef((function(n,e){var t=n.active,r=void 0!==t&&t,o=n.children,i=n.className,a=w(n,["active","children","className"]);return R(q,Object(v.a)({active:r,className:"tag ".concat(i),ref:e},a),o)}));X.displayName="Tag",X.Checkable=function(n){var e=n.active,t=void 0!==e&&e,r=n.onClick,i=n.children,a=o.a.useState(t),c=Object(F.a)(a,2),u=c[0],l=c[1];return L(C,{active:u,onClick:function(n){var e=!u;l(e),r(e,n)}},i)};var H=X;function I(){var n=Object(i.a)(["\n  font-size: 16px;\n  color: ",";\n  line-height: 23px;\n\n  @media screen and (max-width: ",") {\n    font-size: 14px;\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(i.a)(["\n  margin: 5px 0;\n  width: 100%;\n  & > .tag {\n    font-size: 14px;\n    padding: 6px 15px;\n    margin: 1%;\n  }\n\n  @media screen and (max-width: ",") {\n    display: flex;\n    flex-wrap: wrap;\n\n    & > .tag {\n      font-size: 11px;\n    }\n  }\n"]);return J=function(){return n},n}function Q(){var n=Object(i.a)(["\n  font-size: 25px;\n  font-weight: 700;\n\n  @media screen and (max-width: ",") {\n    font-size: 19px;\n    text-align: center;\n  }\n"]);return Q=function(){return n},n}function U(){var n=Object(i.a)(["\n  height: 200px;\n"]);return U=function(){return n},n}function G(){var n=Object(i.a)([""]);return G=function(){return n},n}function K(){var n=Object(i.a)(["\n  border: 1px solid ",";\n  padding: 10px 20px 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n\n  @media screen and (max-width: ",") {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return K=function(){return n},n}function M(){var n=Object(i.a)(["\n  display: block;\n  text-decoration: none;\n  color: ",";\n  user-select: none;\n  cursor: pointer;\n"]);return M=function(){return n},n}var V=a.c.a(M(),(function(n){return n.theme.color.fontPrimary})),W=Object(a.c)(c.b.article)(K(),(function(n){return n.theme.color.lightGray}),(function(n){return n.theme.deviceBreakpoint.mobile})),Y=a.c.header(G()),Z=a.c.img(U()),A=a.c.h3(Q(),(function(n){return n.theme.deviceBreakpoint.mobile})),$=a.c.div(J(),(function(n){return n.theme.deviceBreakpoint.mobile})),nn=a.c.p(I(),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile})),en=o.a.createElement,tn=function(n){var e=n.title,t=n.description,r=n.icon,o=n.templateUrl,i=n.tags;return en(y.a,{href:o},en(V,{className:"template-thumbnail"},en(W,{whileHover:{scale:1.03,transition:{duration:.4}},whileTap:{scale:.96}},en(Y,null,en(Z,{src:"".concat("/value-driven-templates","/icons/").concat(r,".svg")}),en(A,null,e)),i.length&&en($,null,i.map((function(n,t){return en(H,{active:!0,key:"".concat(e,"-tag-").concat(t)},n)}))),en(nn,null,t))))};function rn(){var n=Object(i.a)(["\n  font-size: 21px;\n  font-weight: 500;\n  color: ",";\n\n  @media screen and (max-width: ",") {\n    font-size: 16px;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(i.a)(["\n  width: 31%;\n  margin: 1%;\n\n  @media screen and (max-width: ",") {\n    width: 48%;\n  }\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(i.a)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n"]);return an=function(){return n},n}var cn=a.c.ul(an()),un=a.c.li(on(),(function(n){return n.theme.deviceBreakpoint.tablet}),(function(n){return n.theme.deviceBreakpoint.mobile})),ln=a.c.h3(rn(),(function(n){return n.theme.color.fontSecondary}),(function(n){return n.theme.deviceBreakpoint.mobile})),fn=o.a.createElement,pn=function(n){var e=n.thumbnails;return fn(cn,null,e.length?e.map((function(n,e){return fn(un,{key:"template-thumbnail-".concat(e)},fn(tn,n))})):fn(ln,null,"There is no templates yet"))};function dn(){var n=Object(i.a)(["\n  font-weight: 700;\n  font-size: 50px;\n  margin: 70px 0 30px;\n\n  @media screen and (max-width: ",") {\n    font-size: 23px;\n  }\n\n  & > span {\n    background-color: ",";\n    color: ",";\n    padding: 0 10px;\n  }\n"]);return dn=function(){return n},n}var sn=a.c.h2(dn(),(function(n){return n.theme.deviceBreakpoint.mobile}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.white})),mn=o.a.createElement,hn=function(n){var e=n.thumbnails;return mn(o.a.Fragment,null,mn(S,null),mn(sn,null,"The ",mn("span",null,"latest")),mn(pn,{thumbnails:e}))},xn=o.a.createElement;e.default=function(){return xn(hn,{thumbnails:[]})}}},[["/EDR",0,2,3,1,4]]]);