"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[373],{373:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,i,o,c,a,s,p,u,d=t(861),x=t(885),h=t(757),l=t.n(h),f=t(44),m=t(791),g=t(689),v=t(731),b=t(358),j=t(168),Z=t(444),w=Z.ZP.section(r||(r=(0,j.Z)(["\npadding-top:  ","px;;\npadding-left: ","px;\npadding-right: ","px;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]})),k=Z.ZP.div(i||(i=(0,j.Z)(["\ndisplay: flex;\nmargin-top: ","px;\n\n"])),(function(n){return n.theme.space[5]})),_=Z.ZP.div(o||(o=(0,j.Z)(["\npadding: ","px;\n\n\n"])),(function(n){return n.theme.space[5]})),y=Z.ZP.h2(c||(c=(0,j.Z)(["\npadding: ","px;\nmargin: ","px;\nmargin-bottom: ","px;\nmargin-top: ","px;\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]})),P=Z.ZP.p(a||(a=(0,j.Z)(["\n margin: ","px;\n margin-top: ","px;\n padding: ","px;\n text-decoration: none; \n font-family: 'Roboto';\nfont-style: normal;\nfont-weight: ",";\nfont-size: ","px;\nline-height: ",";\n \n padding: ","px;\n "])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.body}),(function(n){return n.theme.space[3]})),U=Z.ZP.div(s||(s=(0,j.Z)(["\n display: flex;\n\n "]))),S=Z.ZP.div(p||(p=(0,j.Z)(["\n display: flex;\n align-items: center;\n justify-content: space-around;\n  width: ","px; \n /* height: ","px; */ \n padding: ","px;\n border: ",";\n background-color: ",";\n border-radius: ",";\n box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), \n 0px 1px 1px rgba(0, 0, 0, 0.14),\n 0px 2px 1px rgba(0, 0, 0, 0.2);\n text-decoration: none;\n &:hover {\n      transform: scale(1.05);\n      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), \n 0px 1px 1px rgba(0, 0, 0, 0.14),\n 0px 1px 1px rgba(0, 0, 0, 0.2);\n    }\n "])),(function(n){return n.theme.space[8]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.radii.normal})),C=Z.ZP.div(u||(u=(0,j.Z)(["\n padding: ","px;\n margin-top: ","px;\n background-color: ",";\nbox-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), \n0px 1px 1px rgba(0, 0, 0, 0.14),\n0px 2px 1px rgba(0, 0, 0, 0.2);\n "])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.background})),H=t(184),z="https://api.themoviedb.org/3/movie",G="?api_key=c45f6d5d61e66845ac8342820cc294e1",O=function(){var n,e,t=(0,g.TH)(),r=(0,g.UO)().moviesId,i=(0,m.useState)({}),o=(0,x.Z)(i,2),c=o[0],a=o[1],s=null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";console.log("backLinkHref",s),(0,m.useEffect)((function(){function n(){return(n=(0,d.Z)(l().mark((function n(){var e,t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.ZP.get("".concat(z,"/").concat(r).concat(G,"&language=en-US"));case 3:e=n.sent,t=e.data,a(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r]);var p=c.title,u=c.overview,h=c.genres,j=c.poster_path,Z=c.release_date;return(0,H.jsxs)(w,{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(v.rU,{to:s,children:(0,H.jsxs)(S,{children:[(0,H.jsx)(b.BDM,{})," Go back"]})}),(0,H.jsxs)(k,{children:[(0,H.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(j),width:"280",alt:p}),(0,H.jsxs)(_,{children:[(0,H.jsxs)(y,{children:[p,"  ",(0,H.jsxs)("span",{children:["(",null===Z||void 0===Z?void 0:Z.slice(0,4),")"]})]}),(0,H.jsx)(y,{children:"Overview"}),(0,H.jsx)(P,{children:u}),(0,H.jsx)(y,{children:"Genre"}),(0,H.jsx)(U,{children:h&&h.map((function(n){var e=n.name,t=n.id;return(0,H.jsxs)(P,{children:[e," "]},t)}))})]})]}),(0,H.jsxs)(C,{children:[(0,H.jsx)(P,{children:"Additional information"}),(0,H.jsx)("div",{children:(0,H.jsxs)("ul",{children:[(0,H.jsx)("li",{children:(0,H.jsx)(v.rU,{to:"cast",state:{from:s},children:"Cast"})}),(0,H.jsx)("li",{children:(0,H.jsx)(v.rU,{to:"review",state:{from:s},children:"Review"})})]})})]})]}),(0,H.jsx)(m.Suspense,{children:(0,H.jsx)(g.j3,{})})]})}}}]);
//# sourceMappingURL=373.38789e19.chunk.js.map