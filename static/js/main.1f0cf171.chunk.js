(this.webpackJsonpjazzdrive=this.webpackJsonpjazzdrive||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(14),i=n.n(a),o=n(3),s=n(5),j=n(28),u=n(29),b=n.n(u),l=n(17),O=n(30),h=n.n(O),d=n(4),g="SIGN_IN",f="USER_INFO",p="SIGN_OUT",x={user:{isLoading:!0,hasError:!1,isLoggedIn:!1,data:[]},signin:{isLoading:!1,hasError:!1,data:[]}},v=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{signin:t.payload});case f:case p:return Object(d.a)(Object(d.a)({},e),{},{user:t.payload});default:return e}}}),m={key:"root",storage:h.a},y=Object(l.a)(m,v),k=[j.a,b.a],I=Object(s.e)(y,Object(s.d)(s.a.apply(void 0,k))),S=Object(l.b)(I),L=n(31),C=(n(43),n(6)),w=n(7),E=n(9),F=n(8),N=n(22),z=n(18),_=n(47),W=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,48))})),A=function(e){Object(E.a)(n,e);var t=Object(F.a)(n);function n(e){var c;return Object(C.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(w.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("p",{children:"loading...."}),children:Object(c.jsx)(W,{})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),D=Object(o.b)((function(e){return{auth:e.auth.user}}))(A),T=n(16),U=n.n(T),B=(Object(o.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(z.a)(e,["component"]),r=U.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"Loading...."}):Object(c.jsx)(_.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(_.a,{to:{pathname:"/",state:{from:e.location}}}):Object(c.jsx)(D,{children:Object(c.jsx)(t,Object(d.a)({},e))})}}))})),Object(o.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(z.a)(e,["component"]),r=U.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"loading...."}):Object(c.jsx)(_.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(D,{children:Object(c.jsx)(t,Object(d.a)({},e))}):Object(c.jsx)(_.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))})),function(e){Object(E.a)(n,e);var t=Object(F.a)(n);function n(e){var c;return Object(C.a)(this,n),(c=t.call(this,e)).state={showImage:!1,imageSource:""},c}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"Sign In Screen"}),Object(c.jsx)("button",{className:"btn-red",children:"Login"})]})}}]),n}(r.Component)),G=(Object(o.b)((function(e){return{}}))(B),function(e){Object(E.a)(n,e);var t=Object(F.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Home page"})}}]),n}(r.Component)),H=(Object(o.b)((function(e){return{}}))(G),function(e){Object(E.a)(n,e);var t=Object(F.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Default"})}}]),n}(r.Component)),J=(Object(o.b)((function(e){return{}}))(H),n(45),function(e){Object(E.a)(n,e);var t=Object(F.a)(n);function n(e){var c;return Object(C.a)(this,n),(c=t.call(this,e)).openImage=function(){console.log("clicked1");var e=window.navigator;console.log(e),c.setState({show:!0,msg:e})},c.state={show:!1,msg:""},c}return Object(w.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N.Online,{children:Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"Home Screen"}),Object(c.jsx)("button",{className:"btn-red",onClick:function(){return e.openImage()},children:"Open"}),this.state.show?Object(c.jsx)("div",{children:this.state.msg}):""]})}),Object(c.jsx)(N.Offline,{children:Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"No Internet Connection"}),Object(c.jsx)("p",{children:"Use Wi-Fi or mobile data to access the internet."}),Object(c.jsx)("button",{className:"btn-red",children:"Settings"})]})})]})}}]),n}(r.Component)),P=Object(o.b)((function(e){return{}}))(J),R=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(c.jsx)(o.a,{store:I,children:Object(c.jsx)(L.a,{loading:null,persistor:S,children:Object(c.jsx)(P,{})})}),document.getElementById("root")),R()}},[[46,1,2]]]);
//# sourceMappingURL=main.1f0cf171.chunk.js.map