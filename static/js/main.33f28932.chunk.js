(this.webpackJsonpjazzdrive=this.webpackJsonpjazzdrive||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(17),i=n.n(a),o=n(4),s=n(9),j=n(31),u=n(32),b=n.n(u),l=n(21),O=n(33),d=n.n(O),h=n(5),g="SIGN_IN",p="USER_INFO",f="SIGN_OUT",m={user:{isLoading:!0,hasError:!1,isLoggedIn:!1,data:[]},signin:{isLoading:!1,hasError:!1,data:[]}},x=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(h.a)(Object(h.a)({},e),{},{signin:t.payload});case p:case f:return Object(h.a)(Object(h.a)({},e),{},{user:t.payload});default:return e}}}),v={key:"root",storage:d.a},y=Object(l.a)(v,x),k=[j.a,b.a],I=Object(s.e)(y,Object(s.d)(s.a.apply(void 0,k))),L=Object(l.b)(I),C=n(34),S=(n(46),n(11)),w=n(12),E=n(14),z=n(13),F=n(19),N=n(3),U=n(27),_=n(22),A=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,50))})),D=function(e){Object(E.a)(n,e);var t=Object(z.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(w.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("p",{children:"loading...."}),children:Object(c.jsx)(A,{})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),R=Object(o.b)((function(e){return{auth:e.auth.user}}))(D),T=n(20),W=n.n(T),B=Object(o.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(_.a)(e,["component"]),r=W.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"Loading...."}):Object(c.jsx)(N.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(N.a,{to:{pathname:"/",state:{from:e.location}}}):Object(c.jsx)(R,{children:Object(c.jsx)(t,Object(h.a)({},e))})}}))})),G=Object(o.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(_.a)(e,["component"]),r=W.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"loading...."}):Object(c.jsx)(N.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(R,{children:Object(c.jsx)(t,Object(h.a)({},e))}):Object(c.jsx)(N.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))})),J=function(e){Object(E.a)(n,e);var t=Object(z.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).openImage=function(){var e=new navigator.MozActivity({name:"pick",data:{type:["image/png","image/jpg","image/jpeg"],nocrop:!0}});e.onsuccess=function(){var e=document.createElement("img");e.src=window.URL.createObjectURL(this.result.blob);var t=document.querySelector("#image-presenter");t.appendChild(e),t.style.display="block"},e.onerror=function(){console.log("Can't view the image")}},c.state={showImage:!1,imageSource:""},c}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"Sign In Screen"}),Object(c.jsx)("button",{className:"btn-red",id:"pick-image",children:"wifi"}),Object(c.jsx)("div",{id:"image-presenter"})]})}}]),n}(r.Component),P=Object(o.b)((function(e){return{}}))(J),q=function(e){Object(E.a)(n,e);var t=Object(z.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Home page"})}}]),n}(r.Component),H=Object(o.b)((function(e){return{}}))(q),M=function(e){Object(E.a)(n,e);var t=Object(z.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Default"})}}]),n}(r.Component),K=Object(o.b)((function(e){return{}}))(M),Q=(n(48),function(e){Object(E.a)(n,e);var t=Object(z.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).state={},console.log(c.props),c}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.Online,{children:Object(c.jsx)(F.a,{basename:"/jazzdrive-kaios",children:Object(c.jsxs)(N.d,{children:[Object(c.jsx)(B,{path:"/signin",exact:!0,component:P}),Object(c.jsx)(G,{path:"/",exact:!0,component:H}),Object(c.jsx)(N.b,{component:K})]})})}),Object(c.jsx)(U.Offline,{children:Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"No Internet Connection"}),Object(c.jsx)("p",{children:"Use Wi-Fi or mobile data to access the internet."}),Object(c.jsx)("button",{className:"btn-red",children:"Settings"})]})})]})}}]),n}(r.Component)),V=Object(o.b)((function(e){return{}}))(Q),X=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(c.jsx)(o.a,{store:I,children:Object(c.jsx)(C.a,{loading:null,persistor:L,children:Object(c.jsx)(V,{})})}),document.getElementById("root")),X()}},[[49,1,2]]]);
//# sourceMappingURL=main.33f28932.chunk.js.map