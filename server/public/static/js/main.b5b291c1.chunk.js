(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(32),c=t.n(r),s=(t(67),t(9)),i=t(8),o=t(11),m=t(12),u=t(13),E=(t(68),t(22)),d=t(7),p=(t(25),t(23));t(69);var h=function(e){var a=e.userInSession;return a?l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("div",{className:"menu"},l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{src:"./images/logo.png",alt:"FYT",className:"logo"})),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/trainers"}))),l.a.createElement("div",{className:"options"},l.a.createElement("li",null,l.a.createElement(p.a,null,l.a.createElement(p.a.Toggle,{variant:"none"},a.name?a.name:a.username,l.a.createElement("img",{src:a.imgPath,alt:a.username,className:"img-user"})),l.a.createElement(p.a.Menu,null,l.a.createElement(p.a.Item,{href:"#/action-1"},"Mi perfil"),l.a.createElement(p.a.Item,{href:"#/action-2"},"Favoritos"),l.a.createElement(p.a.Divider,null),l.a.createElement(p.a.Item,{href:"#/action-3"},l.a.createElement(d.b,{to:"",onClick:function(a){e.logout()}},"Cerrar sesi\xf3n")))))))):l.a.createElement("div",null,l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("div",{className:"menu"},l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{src:"./images/logo.png",alt:"FYT",className:"logo"}))),l.a.createElement("div",{className:"login"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/login",className:"login-link"},"Login"))))))},v=t(16),g=t(21),f=t.n(g),b=function e(){var a=this;Object(s.a)(this,e),this.signup=function(e,t){return a.service.post("/signup",{username:e,password:t}).then((function(e){return e.data}))},this.login=function(e,t){return a.service.post("/login",{username:e,password:t}).then((function(e){return e.data}))},this.loggedin=function(){return a.service.get("/currentUser").then((function(e){return e.data}))},this.logout=function(){return a.service.get("/logout").then((function(e){return e.data}))},this.service=f.a.create({baseURL:"".concat("https://ironfyt.herokuapp.com/api","/auth"),withCredentials:!0})},N=t(4),j=(t(52),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleGoogleSubmit=function(e){console.log("entra en el handle de google"),console.log(e),t.setState({username:e.profileObj.givenName},(function(){t.handleFormSubmit()}))},t.handleFormSubmit=function(e){e&&e.preventDefault();var a=t.state.username,n=t.state.password?t.state.password:"1234";t.service.signup(a,n).then((function(e){t.setState({username:a,password:n}),t.props.getUser(e.user)})).catch((function(e){t.setState({username:"",password:"",error:!0})}))},t.handleChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(v.a)({},n,l))},t.state={username:"",password:null},t.service=new b,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-login"},l.a.createElement("div",{className:"container-form"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("fieldset",null,l.a.createElement("label",null,"Nombre completo:"),l.a.createElement("input",{className:"input-login",type:"text",name:"username",value:this.state.username,onChange:function(a){return e.handleChange(a)}})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Usuario:"),l.a.createElement("input",{className:"input-login",type:"text",name:"username",value:this.state.username,onChange:function(a){return e.handleChange(a)}})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Contrase\xf1a:"),l.a.createElement("input",{className:"input-login",type:"password",name:"password",value:this.state.password,onChange:function(a){return e.handleChange(a)}})),l.a.createElement("input",{type:"submit",value:"Crear usuario",className:"button-login signup"})),l.a.createElement("h1",null,this.state.error?"Error":"")),l.a.createElement("div",{className:"container-volver"},l.a.createElement(d.b,{to:"/login",className:"volver"},l.a.createElement("p",null,l.a.createElement(N.a,null)," Volver al login"))))}}]),a}(n.Component)),O=t(57),k=t(58),S=t.n(k),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleFormSubmit=function(e){e&&e.preventDefault();var a=t.state.username,n=t.state.password;t.service.login(a,n).then((function(e){t.setState({username:a,password:n,error:!1}),t.props.getUser(e)})).catch((function(e){console.log("entra en error")}))},t.handleChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(v.a)({},n,l))},t.state={username:"",password:""},t.service=new b,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-login"},l.a.createElement("div",{className:"container-form"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("fieldset",null,l.a.createElement("label",null,"Usuario:"),l.a.createElement("input",{className:"input-login",type:"text",name:"username",value:this.state.username,placeholder:"Ingrese su usuario",onChange:function(a){return e.handleChange(a)}})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Contrase\xf1a:"),l.a.createElement("input",{className:"input-login",type:"password",name:"password",value:this.state.password,placeholder:"Ingrese su contrase\xf1a",onChange:function(a){return e.handleChange(a)}})),l.a.createElement("input",{type:"submit",value:"Login",className:"button-login"}),l.a.createElement("div",{className:"login-social"},l.a.createElement("div",{className:"buttons-login"},l.a.createElement(O.GoogleLogin,{clientId:"387479561912-a1mrcl42f3p2acgjh6qjn4f7qe638mk4.apps.googleusercontent.com",buttonText:"Login con Google",onSuccess:function(a){return e.handleGoogleSubmit(a)},onFailure:function(a){return e.handleGoogleSubmit(a)},cookiePolicy:"single_host_origin",className:"google-login"})),l.a.createElement("div",{className:"buttons-login"},l.a.createElement(S.a,{appId:"915713102217693",fields:"name,email,picture",onClick:function(a){return e.handleFacebookSubmit(a)},callback:function(){return e.handleFormSubmit()},icon:"fa-facebook",cssClass:"fb-login"})))),l.a.createElement("h1",null,this.state.error?"Error":"")),l.a.createElement("div",{className:"crear-cuenta"},l.a.createElement(d.b,{to:"/signup",className:"link-crear-cuenta"},l.a.createElement("p",null,"Crear nueva cuenta ",l.a.createElement(N.g,null))),l.a.createElement(d.b,{to:"/signup",className:"link-crear-cuenta"},l.a.createElement("p",null,"Eres profe? ",l.a.createElement(N.f,null)))))}}]),a}(n.Component),y=t(34),C=t(27),I=(t(92),t(18)),U=t(40),x=t(26),F=(t(93),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(v.a)({},n,l))},t.state={username:"",password:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-search"},l.a.createElement("div",{className:"container-header"},l.a.createElement("div",null,l.a.createElement(U.a,null,l.a.createElement(x.a,null,l.a.createElement("h1",{className:"titulo"},"Encontr\xe1 tu mejor versi\xf3n"))),l.a.createElement(U.a,null,l.a.createElement(x.a,null,l.a.createElement(d.b,{to:"/online"},l.a.createElement(I.a,{variant:"none",className:"button-online"},"Online"))),l.a.createElement(x.a,null,l.a.createElement(d.b,{to:"/presencial"},l.a.createElement(I.a,{variant:"none",className:"button-online"},"Presencial")))))))}}]),a}(n.Component)),P=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={trainers:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:4000/api/trainers").then((function(a){e.setState(Object(y.a)({},e.state,{trainers:a.data}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"all"},l.a.createElement("div",{className:"image-full"},l.a.createElement(F,null)),l.a.createElement("div",{className:"container width"},this.state.trainers&&this.state.trainers.map((function(a){return l.a.createElement(l.a.Fragment,{key:a._id},l.a.createElement(C.a,{className:"card"},l.a.createElement(d.b,{to:e.props.loggedInUser?"/online/trainer/".concat(a._id):"/login",className:"link"},l.a.createElement(C.a.Img,{variant:"top",src:a.imgPath,alt:a.name})),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,l.a.createElement(d.b,{to:e.props.loggedInUser?"/online/trainer/".concat(a._id):"/login",className:"link"},a.name)),l.a.createElement(C.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement("div",{className:"footer-card"},l.a.createElement("div",{className:"stars"},l.a.createElement(N.i,null),l.a.createElement(N.i,null),l.a.createElement(N.i,null),l.a.createElement(N.j,null),l.a.createElement(N.h,null)),l.a.createElement("div",{className:"comments"},"19",l.a.createElement("div",{className:"chat-icon"},l.a.createElement(N.b,null)))))))}))))}}]),a}(n.Component),G=t(59),_=t.n(G),M=t(60),T=(t(94),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={trainers:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:4000/api/trainers").then((function(a){e.setState(Object(y.a)({},e.state,{trainers:a.data}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"online"},l.a.createElement("div",{className:"navigation"},l.a.createElement("h2",null,"Profesores online"),l.a.createElement(M.a.Control,{type:"text",className:"buscar border-0",placeholder:"Buscar"}),l.a.createElement("p",{className:"title-filter"},"Objetivos"),l.a.createElement("ul",null,l.a.createElement("li",null,"Perder peso ",l.a.createElement("span",{className:"cantidad"},"(4)")),l.a.createElement("li",null,"Ganar masa muscular ",l.a.createElement("span",{className:"cantidad"},"(12)")),l.a.createElement("li",null,"Marat\xf3n ",l.a.createElement("span",{className:"cantidad"},"(7)"))),l.a.createElement("p",{className:"title-filter"},"Tipo"),l.a.createElement("ul",null,l.a.createElement("li",null,"Gimnasio ",l.a.createElement("span",{className:"cantidad"},"(10)")),l.a.createElement("li",null,"En tu casa ",l.a.createElement("span",{className:"cantidad"},"(8)")))),l.a.createElement("div",{className:"container-trainers"},l.a.createElement("ul",null,this.state.trainers&&this.state.trainers.map((function(a){return l.a.createElement(l.a.Fragment,{key:a._id},l.a.createElement("li",{className:"list-trainers"},l.a.createElement("div",{className:"img-profe"},l.a.createElement(d.b,{to:e.props.loggedInUser?"/online/trainer/".concat(a._id):"/login",className:"link"},l.a.createElement("img",{src:a.imgPath,alt:a.name}))),l.a.createElement("div",{className:"descripcion-profe"},l.a.createElement(d.b,{to:e.props.loggedInUser?"/online/trainer/".concat(a._id):"/login",className:"link"},a.name),l.a.createElement("div",{className:"planes"},"Perder peso, Ganar masa muscular, Perder peso, Ganar masa muscular, Perder peso, Ganar masa muscular, Perder peso, Ganar masa muscular"),l.a.createElement("div",{className:"footer-card"},l.a.createElement("div",{className:"stars"},l.a.createElement(N.i,null),l.a.createElement(N.i,null),l.a.createElement(N.i,null),l.a.createElement(N.j,null),l.a.createElement(N.h,null)),l.a.createElement("div",{className:"comments"},"19",l.a.createElement("div",{className:"chat-icon"},l.a.createElement(N.b,null))))),l.a.createElement("div",{className:"precio-profe"},l.a.createElement("div",{className:"social"},l.a.createElement(_.a,{fontSize:"small"})," ",l.a.createElement(N.e,null)),l.a.createElement("span",null,"Desde: "),l.a.createElement(d.b,{to:e.props.loggedInUser?"/online/trainer/".concat(a._id):"/login",className:"link"},l.a.createElement(I.a,{variant:"none",className:"button"},"\u20ac 10")))))}))))))}}]),a}(n.Component)),D=t(36),L=t.n(D),z=(t(98),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={trainer:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"_findTrainer",value:function(){var e=this;f.a.get("http://localhost:4000/api/trainer/".concat(this.props.trainerId)).then((function(a){e.setState({trainer:a.data})}))}},{key:"componentDidMount",value:function(){this._findTrainer()}},{key:"render",value:function(){var e=this.state.trainer;return l.a.createElement("div",{className:"container-trainer"},l.a.createElement("div",{className:"trainer"},l.a.createElement("div",{className:"nombre"},l.a.createElement("img",{src:e.imgPath,alt:e.name}),l.a.createElement("span",{className:"name"},e.name,l.a.createElement("div",{className:"stars"},l.a.createElement(N.i,null),l.a.createElement(N.i,null),l.a.createElement(N.i,null),l.a.createElement(N.j,null),l.a.createElement(N.h,null)," - 19 comentarios"),l.a.createElement("span",{className:"sobreMi"},"Sobre mi: "))),l.a.createElement("div",{className:"contacto"},l.a.createElement(I.a,{variant:"none",className:"mensaje"},l.a.createElement(N.d,null)," Mensaje"))),l.a.createElement("div",{className:"detalle"},l.a.createElement("div",{className:"especialidad"},l.a.createElement("span",null,"Perder peso"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," uno"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," dos"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," tres"),l.a.createElement("div",{className:"comprar-plan"},l.a.createElement(I.a,{variant:"success",className:"boton-comprar"},l.a.createElement(L.a,{fontSize:"small"})," 19"))),l.a.createElement("div",{className:"especialidad"},l.a.createElement("span",null,"Ganar masa muscular"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," uno"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," dos"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," tres"),l.a.createElement("div",{className:"comprar-plan"},l.a.createElement(I.a,{variant:"success",className:"boton-comprar"},l.a.createElement(L.a,{fontSize:"small"})," 10"))),l.a.createElement("div",{className:"especialidad"},l.a.createElement("span",null,"Marat\xf3n"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," uno"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," dos"),l.a.createElement("div",{className:"caracteristica"},l.a.createElement(N.c,null)," tres"),l.a.createElement("div",{className:"comprar-plan"},l.a.createElement(I.a,{variant:"success",className:"boton-comprar"},l.a.createElement(L.a,{fontSize:"small"})," 15")))))}}]),a}(n.Component)),B=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).getUser=function(e){t.setState({loggedInUser:e})},t.logout=function(){t.service.logout().then((function(){t.setState({loggedInUser:null})}))},t.state={loggedInUser:null},t.service=new b,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then((function(a){e.setState({loggedInUser:a})})).catch((function(a){e.setState({loggedInUser:!1})}))}},{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){var e=this,a=this.state.loggedInUser;return l.a.createElement("div",{className:"App"},a?l.a.createElement("div",null,l.a.createElement(h,{userInSession:a,logout:this.logout}),l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",render:function(){return l.a.createElement(P,e.state)}}),l.a.createElement(E.a,{exact:!0,path:"/online",render:function(){return l.a.createElement(T,e.state)}}),l.a.createElement(E.a,{exact:!0,path:"/online/trainer/:id",render:function(e){return l.a.createElement(z,{trainerId:e.match.params.id})}}))):l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",render:function(){return l.a.createElement(P,e.state)}}),l.a.createElement(E.a,{exact:!0,path:"/login",render:function(){return l.a.createElement(w,{getUser:function(a){return e.getUser(a)}})}}),l.a.createElement(E.a,{exact:!0,path:"/signup",render:function(){return l.a.createElement(j,{getUser:function(a){return e.getUser(a)}})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d.a,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){},62:function(e,a,t){e.exports=t(100)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},98:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.b5b291c1.chunk.js.map