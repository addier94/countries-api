(this["webpackJsonpflags-project"]=this["webpackJsonpflags-project"]||[]).push([[0],{34:function(n,e,t){},35:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var r,i,a=t(0),c=t.n(a),o=t(16),s=t.n(o),d=(t(34),t(12)),l=(t(35),t(3)),j=t(4),b=t(5),p=t(23),u=t.n(p),g=t(1),x=j.a.div(r||(r=Object(l.a)(["\n  span {\n    font-size: 0.8em;\n    margin-left: 0.6em;\n    display: flex;\n  }\n  i {\n    color: green;\n  }\n"]))),h=function(n){var e=n.callingCodes;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(x,{children:e.map((function(n){return n&&Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:"fas fa-phone-volume"}),n]},n)}))})})},m=t(27),O=j.a.div(i||(i=Object(l.a)(["\n  cursor: pointer;\n  text-align: left;\n  border-radius: 5px;\n  /* overflow: hidden; */\n  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);\n  &:hover .details {\n    border-radius: 0 0 5px 5px;\n    border: 1px solid var(--black);\n    border-top: none;\n  }\n  img {\n    width: 100%;\n    height: 160px;\n    object-fit: cover;\n    vertical-align: top;\n    border-radius: 5px 5px 0 0;\n  }\n  .details {\n    padding: 1em 1.2em;\n    border: 1px solid transparent;\n    border-top: none;\n    transition: 0.3s border;\n    background: var(--white);\n  }\n  h2 {\n    margin: 0;\n    font-size: 18px;\n    font-weight: 700;\n    display: flex;\n    justify-content: space-between;\n    line-height: 1.1;\n  }\n  p {\n    font-size: 0.9em;\n    margin-bottom: 0;\n    margin-top: 0.2em;\n  }\n"])));var f,v=function(n){var e=n.flag,t=n.name,r=n.population,i=n.region,a=n.capital,c=(n.nativeName,n.cioc,n.alpha2Code),o=n.callingCodes,s=Object(b.f)();return Object(g.jsxs)(O,{onClick:function(){s.push("/country/".concat(u()(c)))},children:[Object(g.jsx)("img",{loading:"lazy",src:e,alt:""}),Object(g.jsxs)("div",{className:"details",children:[Object(g.jsxs)("h2",{children:[t,Object(g.jsx)(h,{callingCodes:o})]}),Object(g.jsx)("p",{children:Object(g.jsxs)("strong",{children:["Poblaci\xf3n:"," ",Object(g.jsx)(m.a,{value:r,displayType:"text",thousandSeparator:!0})]})}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Region:"})," ",i]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Capital:"})," ",a]})]})]})},y=t(7),w=j.a.div(f||(f=Object(l.a)(["\n  max-width: 1312px;\n  margin: auto;\n  padding: 0 1rem;\n"])));var k,N=function(n){var e=n.children;return Object(g.jsx)(w,{children:e})},C=j.a.div(k||(k=Object(l.a)(["\n  display: grid;\n  grid-row-gap: 2.3em;\n  grid-auto-flow: columns;\n  grid-column-gap: 66px;\n  grid-template-columns: repeat(auto-fill, 270px);\n  background: var(--background);\n  justify-content: center;\n  padding: 3em 0;\n"])));var R,B=function(){var n=Object(y.b)(),e=Object(y.c)((function(n){return n.countryListByName})),t=Object(y.c)((function(n){return""!==n.filterByRegion&&0===e.length?n.coutryFilteredByRegion:e.length>0?e:n.countryList}));return console.log("el estado total de mi app es",t),Object(a.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(n){return n.json()})).then((function(e){n({type:"SET_COUNTRY_LIST",payload:e})})).catch((function(){console.log("hubo un error, que dolor que dolo que pena")}))}),[n]),Object(g.jsx)(N,{children:Object(g.jsx)(C,{children:t.map((function(n){var e=n.name,t=n.flag,r=n.population,i=n.capital,a=n.region,c=n.nativeName,o=n.cioc,s=n.alpha2Code,d=n.callingCodes;return Object(g.jsx)(v,{flag:t,name:e,population:r,region:a,capital:i,nativeName:c,cioc:o,alpha2Code:s,callingCodes:d},e)}))})})},L=t(29),S=t(10);var E=j.a.label(R||(R=Object(l.a)(["\n  display: inline-flex;\n  background: var(--white);\n  align-items: center;\n  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);\n  padding: 0 2rem;\n  border-radius: 5px;\n  flex: 1;\n  i {\n    margin-right: 1em;\n    color: #C4C4C4;\n  }\n  input {\n    /* width: 100%; */\n    flex: 1;\n    border: none;\n    height: 48px;\n    line-height: 48px;\n    font-size: .7em;\n    outline: 0;\n    color: var(--black);\n    background: var(--white);\n    &::-webkit-input-placeholder {\n      color: #C4C4C4;\n    }\n  }\n"])));var _,T=function(n){var e=Object.assign({},n);return Object(g.jsxs)(E,{children:[Object(g.jsx)("i",{className:"fas fa-search"}),Object(g.jsx)("input",Object(S.a)({type:"text"},e))]})},z=j.a.div(_||(_=Object(l.a)(["\n  display: flex;\n  position: relative;\n  .close {\n    position: absolute;\n    right: 1em;\n    top: 1em;\n    border-radius: 50%;\n    border: none;\n    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);\n  }\n"])));var F,M,Y=function(){var n=Object(a.useState)(""),e=Object(d.a)(n,2),t=e[0],r=e[1],i=Object(y.b)();return Object(g.jsxs)(z,{children:[t&&Object(g.jsx)("i",{className:"fas fa-times close",onClick:function(){i({type:"SET_COUNTRY_BY_NAME",payload:""}),r("")}}),Object(g.jsx)(T,{placeholder:"Search for a country...",value:t,onChange:function(n){r(n.target.value),i({type:"SET_COUNTRY_BY_NAME",payload:n.target.value})}})]})},A=j.a.div(F||(F=Object(l.a)(["\n@import url('https://fonts.google.com/specimen/Nunito+Sans');\n* {\n    box-sizing: border-box;\n}\n.dropdown {\n  border-radius: 5px;\n  background-color: var(--white);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  text-align: center;\n  font-size: 12px;\n  padding: 20px;\n  position: relative;\n  background: var(--white);\n}\n.btn-toggle .fas {\n  display: none;\n}\n\nbody.dark .btn-toggle .fas {\n  display: inline-block;\n}\n\n\n.dropdown .fa-chevron-down {\n  margin-left: 10px;\n}\n\n.dropdown ul {\nborder-radius: 4px;\n  background-color: var(--background-el);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);\n  display: none;\n  padding: 10px;\n  text-align: center;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  list-style-type: none;\n  background: var(--white);\n  width: 100%;\n  z-index: 99;\n}\n\n.dropdown.open ul {\n  display: block;\n}\n\n.dropdown ul li {\n  margin: 10px 0;\n}\n\n"]))),I=function(){var n=Object(y.b)(),e=Object(a.useState)(!1),t=Object(d.a)(e,2),r=t[0],i=t[1],c=(Object(y.c)((function(n){return n.filterByRegion})),function(e){n({type:"FILTER_BY_REGION",payload:{regionSelected:e}})});return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(A,{children:Object(g.jsxs)("div",{className:"".concat(r?"dropdown open":"dropdown"),onClick:function(){return i(!r)},id:"filter",children:["Filter by Region",Object(g.jsx)("i",{className:"fas fa-chevron-down"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{onClick:function(){return c("Africa")},children:"Africa"}),Object(g.jsx)("li",{onClick:function(){return c("Americas")},children:"Americas"}),Object(g.jsx)("li",{onClick:function(){return c("Asia")},children:"Asia"}),Object(g.jsx)("li",{onClick:function(){return c("Europe")},children:"Europe"}),Object(g.jsx)("li",{onClick:function(){return c("Oceania")},children:"Oceania"})]})]})})})},D=j.a.div(M||(M=Object(l.a)(["\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row-gap: 20px;\n  }\n  @media screen and (min-width: 768px) {\n    .grid {\n      grid-template-columns: 480px 1fr 164px;\n    }\n  }\n"])));var U,q=function(){return Object(g.jsx)(D,{children:Object(g.jsx)(N,{children:Object(g.jsxs)("div",{className:"grid",children:[Object(g.jsx)(Y,{}),Object(g.jsx)("span",{}),Object(g.jsx)(I,{})]})})})},J=t(15),W=j.a.div(U||(U=Object(l.a)(["\n  background: var(--white);\n  margin-bottom: 1em;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  .content {\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  h1 {\n    font-size: 14px;\n  }\n  a {\n    text-decoration: none;\n    color: var(--dark);\n  }\n  .dark-mode {\n    cursor: pointer;\n    .moon {\n      transform: rotate(-25deg);\n      display: inline-flex;\n      margin-right: 10px;\n    }\n    p {\n      font-size: 12px;\n      font-weight: 600;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 3em;\n    h1 {\n      font-size: 24px;\n    }\n    p {\n      font-size: 1rem;\n    }\n  }\n"])));var G,P=function(n){var e=n.setDarkMode,t=n.darkMode;return Object(g.jsx)(W,{children:Object(g.jsx)(N,{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)(J.b,{to:"/",children:Object(g.jsx)("h1",{children:"Worlds"})}),Object(g.jsx)("div",{className:"dark-mode",children:Object(g.jsxs)("p",{onClick:function(){e(!t)},children:[Object(g.jsx)("span",{className:"moon",children:t?Object(g.jsx)("i",{className:"fas fa-moon"}):Object(g.jsx)("i",{className:"far fa-moon"})}),"Dark Mode"]})})]})})})},$=j.a.div(G||(G=Object(l.a)(['\n  margin-top: 3em;\n  padding-bottom: 3em;\n  img {\n    width: 100%;\n    margin-bottom: 2em;\n  }\n  .grid {\n    display: grid;\n    grid-row-gap: 1em;\n  }\n  .border-item {\n    padding: 0.5em 2em;\n    border-radius: 5px;\n    margin-right: 15px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n    display: inline-flex;\n    margin-bottom: 15px;\n    background: var(--white);\n  }\n  .languages {\n    span {\n      margin-right: 5px;\n      &:after {\n        content: ",";\n      }\n      &:last-child {\n        &:after {\n          display: none;\n        }\n      }\n    }\n  }\n  @media screen and (min-width: 1024px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 120px;\n    margin-top: 5em;\n    .grid {\n      grid-template-columns: 1fr 1fr;\n    }\n    .borders {\n      display: inline-flex;\n      margin-right: 1em;\n      margin-top: 3.5em;\n    }\n  }\n'])));var H,K=function(n){var e=n.flag,t=n.name,r=n.nativeName,i=n.population,a=n.region,c=n.subregion,o=n.capital,s=n.topLevelDomain,d=n.currencies,l=void 0===d?[]:d,j=n.languages,b=void 0===j?[]:j,p=n.borders,u=void 0===p?[]:p;return n.alpha2Code,Object(g.jsxs)($,{children:[Object(g.jsx)("img",{src:e,alt:""}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:t}),Object(g.jsxs)("div",{className:"grid",children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Native Name:"})," ",r]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Population:"})," ",i]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Region:"})," ",a]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Sub Region:"})," ",c]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Capital:"})," ",o]})]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Top Level Domain:"})," ",s]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Currencies:"})," ",l.map((function(n){return Object(g.jsx)("span",{children:n.name},n.name)}))]}),Object(g.jsxs)("p",{className:"languages",children:[Object(g.jsx)("strong",{children:"Languages:"})," ",b.map((function(n){return Object(g.jsx)("span",{children:n.name},n.name)}))]})]})]}),Object(g.jsx)("p",{className:"borders",children:Object(g.jsx)("strong",{children:"Junto a paises:"})}),u.map((function(n){return Object(g.jsx)("span",{className:"border-item",children:n},n.toString())}))]})]})},Q=j.a.div(H||(H=Object(l.a)(["\n  .back {\n    background: var(--white);\n    box-shadow: 0 0 5px rgba(0,0,0,.3);\n    padding: .7em 2.2em;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n    margin-top: 1em;\n    color: var(--black);\n    i {\n      margin-right: 5px;\n    }\n  }\n  @media screen and (min-width: 1024px) {\n    .back {\n      margin-top: 3em;\n    }\n  }\n"])));var V=function(n){var e=n.match,t=n.history,r=Object(y.c)((function(n){return n.countryList.find((function(n){return n.alpha2Code===e.params.id}))})),i=Object(a.useState)(r),c=Object(d.a)(i,2),o=c[0],s=c[1];return Object(a.useEffect)((function(){o||fetch("https://restcountries.eu/rest/v2/alpha/".concat(e.params.id.toLowerCase())).then((function(n){return n.json()})).then((function(n){s(n)}))}),[o,e.params.id]),Object(g.jsx)(Q,{children:Object(g.jsxs)(N,{children:[Object(g.jsxs)("button",{className:"back",onClick:function(){t.goBack()},children:[Object(g.jsx)("i",{className:"fas fa-long-arrow-alt-left"})," Back"]}),Object(g.jsx)(K,Object(S.a)({},o))]})})},X=Object(L.a)((function(n,e){switch(e.type){case"SET_COUNTRY_LIST":return Object(S.a)(Object(S.a)({},n),{},{countryList:e.payload});case"SET_COUNTRY_BY_NAME":var t=(""!==n.filterByRegion?n.coutryFilteredByRegion:n.countryList).filter((function(n){return n.name.toLowerCase().includes(e.payload.toLowerCase())}));return Object(S.a)(Object(S.a)({},n),{},{countryListByName:t});case"FILTER_BY_REGION":var r=e.payload.regionSelected;if(""===r)return Object(S.a)(Object(S.a)({},n),{},{coutryFilteredByRegion:[],filterByRegion:""});var i=n.countryList.filter((function(n){return n.region===r}));return Object(S.a)(Object(S.a)({},n),{},{coutryFilteredByRegion:i,filterByRegion:r});default:return n}}),{countryList:[],countryListByName:[],coutryFilteredByRegion:[],filterByRegion:""});var Z=function(){var n=Object(a.useState)(!1),e=Object(d.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(!1),c=Object(d.a)(i,2),o=(c[0],c[1]),s=t?"is-dark-mode":"is-light-mode";function l(n){r(n.matches),o(n.matches)}return Object(a.useEffect)((function(){var n=window.matchMedia("(prefers-color-scheme: dark)");return n.addListener(l),r(n.matches),o(n.matches),function(){n.removeListener(l)}}),[]),Object(g.jsx)("main",{className:s,children:Object(g.jsx)(y.a,{store:X,children:Object(g.jsxs)(J.a,{children:[Object(g.jsx)(P,{setDarkMode:r,darkMode:t}),Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/country/:id",component:V}),Object(g.jsxs)(b.a,{path:"/",children:[Object(g.jsx)(q,{}),Object(g.jsx)(B,{})]})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.f3b525a1.chunk.js.map