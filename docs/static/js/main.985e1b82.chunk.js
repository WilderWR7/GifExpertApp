(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0);var o=function(t){var e=t.setcategory,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[c].concat(Object(s.a)(t))}))},children:Object(u.jsx)("input",{onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),f=n.n(d),b=n(8),l=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,a,r,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=L6hWh544TTT8bdJTeCW1WjkHFKgAC9tT&q=".concat(e,"&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){l(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r};function m(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsxs)("p",{children:[" ",e," "]})]})}function O(t){var e=t.category,n=p(e),a=n.data,r=n.loading;return console.log(r),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h2",{className:"animate__animated animate__fadeIn",children:[" ",e," "]}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(m,Object(j.a)({},t),t.id)}))})]})}var h=function(){var t=Object(a.useState)(["wwe"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:" GifExpertApp "}),Object(u.jsx)(o,{setcategory:r}),Object(u.jsx)("hr",{}),n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))]})};n(17);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.985e1b82.chunk.js.map