(this.webpackJsonpjazzdrive=this.webpackJsonpjazzdrive||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(17),i=n.n(a),o=n(4),s=n(9),j=n(31),u=n(32),b=n.n(u),O=n(21),l=n(33),h=n.n(l),d=n(5),g="SIGN_IN",f="USER_INFO",p="SIGN_OUT",x={user:{isLoading:!0,hasError:!1,isLoggedIn:!1,data:[]},signin:{isLoading:!1,hasError:!1,data:[]}},m=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{signin:t.payload});case f:case p:return Object(d.a)(Object(d.a)({},e),{},{user:t.payload});default:return e}}}),v={key:"root",storage:h.a},y=Object(O.a)(v,m),I=[j.a,b.a],k=Object(s.e)(y,Object(s.d)(s.a.apply(void 0,I))),S=Object(O.b)(k),C=n(34),L=(n(46),n(11)),w=n(12),z=n(14),E=n(13),F=n(19),N=n(3),_=n(27),W=n(22),D=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,50))})),T=function(e){Object(z.a)(n,e);var t=Object(E.a)(n);function n(e){var c;return Object(L.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(w.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("p",{children:"loading...."}),children:Object(c.jsx)(D,{})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),U=Object(o.b)((function(e){return{auth:e.auth.user}}))(T),A=n(20),B=n.n(A),G=Object(o.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(W.a)(e,["component"]),r=B.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"Loading...."}):Object(c.jsx)(N.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(N.a,{to:{pathname:"/",state:{from:e.location}}}):Object(c.jsx)(U,{children:Object(c.jsx)(t,Object(d.a)({},e))})}}))})),J=Object(o.b)((function(e){return{auth:e.auth.user}}))((function(e){var t=e.component,n=Object(W.a)(e,["component"]),r=B.a.get("jd_token");return console.log(n),r&&n.auth.isLoading?Object(c.jsx)("p",{children:"loading...."}):Object(c.jsx)(N.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return n.auth.isLoggedIn?Object(c.jsx)(U,{children:Object(c.jsx)(t,Object(d.a)({},e))}):Object(c.jsx)(N.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))})),P=function(e){Object(z.a)(n,e);var t=Object(E.a)(n);function n(e){var c;return Object(L.a)(this,n),(c=t.call(this,e)).openImage=function(){var e=navigator.mozWifiManager.getNetworks();c.setState({showImage:!0,imageSource:e})},c.state={showImage:!1,imageSource:""},c}return Object(w.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"Sign In Screen"}),Object(c.jsx)("button",{className:"btn-red",onClick:function(){return e.openImage()},children:"wifi"}),this.state.showImage?Object(c.jsx)("div",{children:this.state.imageSource}):""]})}}]),n}(r.Component),H=Object(o.b)((function(e){return{}}))(P),M=function(e){Object(z.a)(n,e);var t=Object(E.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Home page"})}}]),n}(r.Component),R=Object(o.b)((function(e){return{}}))(M),q=function(e){Object(z.a)(n,e);var t=Object(E.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"Default"})}}]),n}(r.Component),K=Object(o.b)((function(e){return{}}))(q),Q=(n(48),function(e){Object(z.a)(n,e);var t=Object(E.a)(n);function n(e){var c;return Object(L.a)(this,n),(c=t.call(this,e)).state={},console.log(c.props),c}return Object(w.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_.Online,{children:Object(c.jsx)(F.a,{basename:"/jazzdrive-kaios",children:Object(c.jsxs)(N.d,{children:[Object(c.jsx)(G,{path:"/signin",exact:!0,component:H}),Object(c.jsx)(J,{path:"/",exact:!0,component:R}),Object(c.jsx)(N.b,{component:K})]})})}),Object(c.jsx)(_.Offline,{children:Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h4",{style:{fontWeight:"bold"},children:"No Internet Connection"}),Object(c.jsx)("p",{children:"Use Wi-Fi or mobile data to access the internet."}),Object(c.jsx)("button",{className:"btn-red",children:"Settings"})]})})]})}}]),n}(r.Component)),V=Object(o.b)((function(e){return{}}))(Q),X=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(c.jsx)(o.a,{store:k,children:Object(c.jsx)(C.a,{loading:null,persistor:S,children:Object(c.jsx)(V,{})})}),document.getElementById("root")),X()}},[[49,1,2]]]);
//# sourceMappingURL=main.e5495327.chunk.js.map