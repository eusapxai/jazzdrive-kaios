(this.webpackJsonpjazzdrive=this.webpackJsonpjazzdrive||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(17),i=n.n(a),o=n(4),j=n(9),s=n(31),b=n(32),u=n.n(b),O=n(21),l=n(33),d=n.n(l),h=n(5),f="SIGN_IN",g="USER_INFO",p="SIGN_OUT",x={user:{isLoading:!0,hasError:!1,isLoggedIn:!1,data:[]},signin:{isLoading:!1,hasError:!1,data:[]}},v=Object(j.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(h.a)(Object(h.a)({},e),{},{signin:t.payload});case g:case p:return Object(h.a)(Object(h.a)({},e),{},{user:t.payload});default:return e}}}),m={key:"root",storage:d.a},y=Object(O.a)(m,v),k=[s.a,u.a],I=Object(j.e)(y,Object(j.d)(j.a.apply(void 0,k))),L=Object(O.b)(I),S=n(34),C=(n(46),n(11)),E=n(12),F=n(14),z=n(13),N=n(19),w=n(3),_=n(27),D=n(22),T=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,50))})),U=function(e){Object(F.a)(n,e);var t=Object(z.a)(n);function n(e){var c;return Object(C.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(E.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("p",{children:"loading...."}),children:Object(c.jsx)(T,{})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),W=Object(o.b)((function(e){return{auth:e.auth.user}}))(U),A=n(20),B=n.n(A),G=Object(o.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(D.a)(e,["component"]),r=B.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"Loading...."}):Object(c.jsx)(w.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(w.a,{to:{pathname:"/",state:{from:e.location}}}):Object(c.jsx)(W,{children:Object(c.jsx)(t,Object(h.a)({},e))})}}))})),J=Object(o.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(D.a)(e,["component"]),r=B.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"loading...."}):Object(c.jsx)(w.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(W,{children:Object(c.jsx)(t,Object(h.a)({},e))}):Object(c.jsx)(w.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))})),P=function(e){Object(F.a)(n,e);var t=Object(z.a)(n);function n(e){var c;return Object(C.a)(this,n),(c=t.call(this,e)).state={showImage:!1,imageSource:""},c}return Object(E.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"Sign In Screen"}),Object(c.jsx)("button",{className:"btn-red",id:"pick-image",children:"wifi"}),Object(c.jsx)("div",{id:"image-presenter"})]})}}]),n}(r.Component),H=Object(o.b)((function(e){return{}}))(P),R=function(e){Object(F.a)(n,e);var t=Object(z.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Home page"})}}]),n}(r.Component),q=Object(o.b)((function(e){return{}}))(R),K=function(e){Object(F.a)(n,e);var t=Object(z.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Default"})}}]),n}(r.Component),M=Object(o.b)((function(e){return{}}))(K),Q=(n(48),function(e){Object(F.a)(n,e);var t=Object(z.a)(n);function n(e){var c;return Object(C.a)(this,n),(c=t.call(this,e)).state={},console.log(c.props),c}return Object(E.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_.Online,{children:Object(c.jsx)(N.a,{basename:"/jazzdrive-kaios",children:Object(c.jsxs)(w.d,{children:[Object(c.jsx)(G,{path:"/signin",exact:!0,component:H}),Object(c.jsx)(J,{path:"/",exact:!0,component:q}),Object(c.jsx)(w.b,{component:M})]})})}),Object(c.jsx)(_.Offline,{children:Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"No Internet Connection"}),Object(c.jsx)("p",{children:"Use Wi-Fi or mobile data to access the internet."}),Object(c.jsx)("button",{className:"btn-red",children:"Settings"})]})})]})}}]),n}(r.Component)),V=Object(o.b)((function(e){return{}}))(Q),X=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(c.jsx)(o.a,{store:I,children:Object(c.jsx)(S.a,{loading:null,persistor:L,children:Object(c.jsx)(V,{})})}),document.getElementById("root")),X()}},[[49,1,2]]]);
//# sourceMappingURL=main.3dff327e.chunk.js.map