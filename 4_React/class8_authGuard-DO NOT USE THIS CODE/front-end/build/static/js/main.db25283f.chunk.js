(this["webpackJsonprouter-app"]=this["webpackJsonprouter-app"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(26),j=c.n(s),b=(c(33),c(2)),o=(c(34),c(9)),i=c(3),l="http://localhost:5000",a=c(28),u=c(11),O=c.n(u),d=c(0),x=r.a.createContext(),h=r.a.createContext(),p=function(){return Object(n.useContext)(x)},g=function(){return Object(n.useContext)(h)};function f(e){var t=e.children;Object(n.useEffect)((function(){return O()({method:"get",url:l+"/profile",withCredentials:!0}).then((function(e){console.log("response: ",e.status),200===e.status&&j((function(e){return Object(b.a)(Object(b.a)({},e),{},{loginStatus:!0})}))})).catch((function(e){console.log("error: ==== ",e),e&&e.response&&e.response.status&&(console.log("error ==============> ",e.response.status),j((function(e){return Object(b.a)(Object(b.a)({},e),{},{loginStatus:!1})})))})),function(){console.log("cleanup")}}),[]);var c=Object(n.useState)({user:null,darkTheme:!1,loginStatus:!1,token:null}),r=Object(a.a)(c,2),s=r[0],j=r[1];return Object(d.jsx)(x.Provider,{value:s,children:Object(d.jsx)(h.Provider,{value:j,children:t})})}var m=function(){var e=p(),t=g();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Login:"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O()({url:l+"/login",method:"POST",data:{email:document.getElementById("email").value,password:document.getElementById("password").value},withCredentials:!0}).then((function(e){console.log("response: ",e.data),t((function(e){return Object(b.a)(Object(b.a)({},e),{},{loginStatus:!0})}))})).catch((function(e){console.log("error: ==== ",e),e&&e.response&&e.response.status&&console.log("error ==============> ",e.response.status)}))},children:["Email: ",Object(d.jsx)("input",{type:"email",id:"email",placeholder:"john@gmail.com"}),Object(d.jsx)("br",{}),"Password: ",Object(d.jsx)("input",{type:"password",id:"password",placeholder:"123456"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:"Log in"})]}),Object(d.jsx)("br",{}),Object(d.jsx)(o.b,{to:"/forget_password",children:"forget password"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){t((function(e){return Object(b.a)(Object(b.a)({},e),{},{darkTheme:!e.darkTheme})}))},children:"toggle"}),JSON.stringify(e),"        "]})};var v=function(){var e=p(),t=g(),c=Object(i.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Signup"}),Object(d.jsx)("br",{})," name:  ",Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("br",{})," email:  ",Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("br",{})," password:  ",Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("br",{})," re-password:  ",Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("br",{})," ",Object(d.jsx)("button",{children:"Submit"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){c.push("/")},children:" I already have an account take me back to login page"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){t((function(e){return Object(b.a)(Object(b.a)({},e),{},{darkTheme:!e.darkTheme})}))},children:"toggle"}),JSON.stringify(e)]})};var k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Forget Password:"}),"Email: ",Object(d.jsx)("input",{type:"email"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:"Submit"})]})},S=function(){var e=p(),t=g();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Dashboard"}),Object(d.jsx)("p",{children:"this is a protected route"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){t((function(e){return Object(b.a)(Object(b.a)({},e),{},{darkTheme:!e.darkTheme})}))},children:"toggle"}),JSON.stringify(e)]})},y=function(){var e=p(),t=g();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Profile"}),Object(d.jsx)("p",{children:"this is a protected route"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){t((function(e){return Object(b.a)(Object(b.a)({},e),{},{darkTheme:!e.darkTheme})}))},children:"toggle"}),JSON.stringify(e)]})};var w=function(){var e=p(),t=g(),c={backgroundColor:e.darkTheme?"#333":"#ccc",color:e.darkTheme?"#ccc":"#333",padding:"2rem"},n={display:"inline",border:e.darkTheme?"1px solid white":"1px solid black",padding:"5px",marginLeft:"5px"};return Object(d.jsx)("div",{style:c,children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)("nav",{children:!0===e.loginStatus?Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{style:n,children:["  ",Object(d.jsx)(o.b,{to:"/",children:"Dashboard"}),"     "]}),Object(d.jsxs)("li",{style:n,children:["  ",Object(d.jsx)(o.b,{to:"/profile",children:"Profile"}),"     "]}),"\xa0",Object(d.jsx)("button",{onClick:function(){O()({url:l+"/logout",method:"POST",withCredentials:!0}).then((function(e){console.log("response: ",e.data),t((function(e){return Object(b.a)(Object(b.a)({},e),{},{loginStatus:!1})}))}))},children:"Logout"})]}):Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{style:n,children:["  ",Object(d.jsx)(o.b,{to:"/",children:"login"}),"     "]}),Object(d.jsxs)("li",{style:n,children:["  ",Object(d.jsx)(o.b,{to:"/signup",children:"Signup"}),"     "]})]})}),!1===e.loginStatus?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.b,{exact:!0,path:"/",children:Object(d.jsx)(m,{})}),Object(d.jsx)(i.b,{path:"/signup",children:Object(d.jsx)(v,{})}),Object(d.jsx)(i.b,{path:"/forget_password",children:Object(d.jsx)(k,{})}),Object(d.jsx)(i.b,{path:"*",children:Object(d.jsx)(i.a,{to:"/"})})]}):null,!0===e.loginStatus?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.b,{exact:!0,path:"/",children:Object(d.jsx)(S,{})}),Object(d.jsx)(i.b,{path:"/profile",children:Object(d.jsx)(y,{})}),Object(d.jsx)(i.b,{path:"*",children:Object(d.jsx)(i.a,{to:"/"})})]}):null]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),n(e),r(e),s(e),j(e)}))};j.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{children:Object(d.jsx)(w,{})})}),document.getElementById("root")),C()}},[[59,1,2]]]);
//# sourceMappingURL=main.db25283f.chunk.js.map