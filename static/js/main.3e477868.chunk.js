(this.webpackJsonpjazzdrive=this.webpackJsonpjazzdrive||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(14),o=n.n(a),i=n(3),s=n(5),j=n(28),u=n(29),b=n.n(u),l=n(17),O=n(30),d=n.n(O),h=n(4),g="SIGN_IN",f="USER_INFO",p="SIGN_OUT",m={user:{isLoading:!0,hasError:!1,isLoggedIn:!1,data:[]},signin:{isLoading:!1,hasError:!1,data:[]}},v=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(h.a)(Object(h.a)({},e),{},{signin:t.payload});case f:case p:return Object(h.a)(Object(h.a)({},e),{},{user:t.payload});default:return e}}}),x={key:"root",storage:d.a},y=Object(l.a)(x,v),k=[j.a,b.a],I=Object(s.e)(y,Object(s.d)(s.a.apply(void 0,k))),L=Object(l.b)(I),C=n(31),S=(n(43),n(6)),E=n(7),F=n(9),N=n(8),w=n(22),z=n(18),U=n(47),_=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,48))})),A=function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(E.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("p",{children:"loading...."}),children:Object(c.jsx)(_,{})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),W=Object(i.b)((function(e){return{auth:e.auth.user}}))(A),D=n(16),R=n.n(D),T=(Object(i.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(z.a)(e,["component"]),r=R.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"Loading...."}):Object(c.jsx)(U.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(U.a,{to:{pathname:"/",state:{from:e.location}}}):Object(c.jsx)(W,{children:Object(c.jsx)(t,Object(h.a)({},e))})}}))})),Object(i.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(z.a)(e,["component"]),r=R.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"loading...."}):Object(c.jsx)(U.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(W,{children:Object(c.jsx)(t,Object(h.a)({},e))}):Object(c.jsx)(U.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))})),function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).state={showImage:!1,imageSource:""},c}return Object(E.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"Sign In Screen"}),Object(c.jsx)("button",{className:"btn-red",children:"Login"})]})}}]),n}(r.Component)),B=(Object(i.b)((function(e){return{}}))(T),function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Home page"})}}]),n}(r.Component)),G=(Object(i.b)((function(e){return{}}))(B),function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Default"})}}]),n}(r.Component)),H=(Object(i.b)((function(e){return{}}))(G),n(45),function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).openImage=function(){console.log("clicked");var e=navigator.MozActivity({name:"pick",data:{type:["image/png","image/jpg","image/jpeg"],nocrop:!0}});console.log(e),e.onsuccess=function(){var e=document.createElement("img");e.src=window.URL.createObjectURL(this.result.blob);var t=document.querySelector("#image-presenter");t.appendChild(e),t.style.display="block"},e.onerror=function(){console.log("Can't view the image")}},c.state={},console.log(c.props),c}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w.Online,{children:Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"Home Screen"}),Object(c.jsx)("button",{className:"btn-red",onClick:function(){return e.openImage()},children:"Open"})]})}),Object(c.jsx)(w.Offline,{children:Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"No Internet Connection"}),Object(c.jsx)("p",{children:"Use Wi-Fi or mobile data to access the internet."}),Object(c.jsx)("button",{className:"btn-red",children:"Settings"})]})})]})}}]),n}(r.Component)),J=Object(i.b)((function(e){return{}}))(H),P=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(c.jsx)(i.a,{store:I,children:Object(c.jsx)(C.a,{loading:null,persistor:L,children:Object(c.jsx)(J,{})})}),document.getElementById("root")),P()}},[[46,1,2]]]);
//# sourceMappingURL=main.3e477868.chunk.js.map