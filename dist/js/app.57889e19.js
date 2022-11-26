(function(){"use strict";var t={2720:function(t,e,o){var n=o(9242),r=o(3396);function a(t,e,o,n,a,s){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(l)])}var s={name:"App",components:{}},l=o(89);const i=(0,l.Z)(s,[["render",a]]);var u=i,c=o(2483);const d=t=>((0,r.dD)("data-v-29d6183e"),t=t(),(0,r.Cn)(),t),p={id:"home"},h=d((()=>(0,r._)("h4",{id:"brand-login"},"People Contacts",-1))),m=d((()=>(0,r._)("p",{id:"words-login"},"All your contacts by domain",-1))),f=d((()=>(0,r._)("p",null,"Please, come and share your contacts!",-1))),v=d((()=>(0,r._)("p",{id:"footer"},"© 2022 M Coelho People. All rights reserved.",-1)));function g(t,e,o,n,a,s){return(0,r.wg)(),(0,r.iD)("div",p,[h,m,f,(0,r._)("button",{class:"btn btn-outline-primary",type:"button",onClick:e[0]||(e[0]=(...t)=>s.enterWithGoogle&&s.enterWithGoogle(...t))},"Login with Google"),v])}o(7658);var y=o(65),b=o(8541);const w=(0,b.fP)().cookies;var _={data(){return{user:{}}},methods:{...(0,y.nv)(["auth/getPersonInfo","auth/validateToken"]),async enterWithGoogle(){await this["auth/getPersonInfo"]().then((()=>this.$router.push("people/contacts")))}},computed:{},mounted(){let t=w.get("token");null!==t&&t.status&&this["auth/validateToken"](t.token).then((()=>{let t=w.get("token");t.status&&this.$router.push("/people/contacts")}))}};const k=(0,l.Z)(_,[["render",g],["__scopeId","data-v-29d6183e"]]);var O=k;const P={class:"navbar-div"};function D(t,e,o,n,a,s){const l=(0,r.up)("proj-nav"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",P,[(0,r.Wm)(l),(0,r.Wm)(i)])}const j=t=>((0,r.dD)("data-v-39986e06"),t=t(),(0,r.Cn)(),t),I={class:"container-fluid"},S={class:"navbar navbar-expand-lg bg-primary"},x={class:"container-fluid"},C=j((()=>(0,r._)("span",{id:"brand"},"People Contacts",-1)));function T(t,e,o,n,a,s){return(0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("nav",S,[(0,r._)("div",x,[C,(0,r._)("button",{class:"btn btn-outlined btn-primary",type:"button",onClick:e[0]||(e[0]=(...t)=>s.logout&&s.logout(...t))},"Logout")])])])}var Z=o(70);const W=(0,b.fP)().cookies;var M={data(){return{}},methods:{async logout(){await Z.ZP.get("http://localhost:5000/people/logout").then((()=>{let t=W.get("token");null!==t&&(W.remove("token"),localStorage.removeItem("people"),this.$router.push("/"))}))}},computed:{}};const $=(0,l.Z)(M,[["render",T],["__scopeId","data-v-39986e06"]]);var z=$,E={components:{"proj-nav":z},data(){return{}},methods:{},computed:{}};const A=(0,l.Z)(E,[["render",D],["__scopeId","data-v-03329462"]]);var G=A;const L=(0,r._)("h1",null,"Report",-1),H=[L];function J(t,e,o,n,a,s){return(0,r.wg)(),(0,r.iD)("div",null,H)}var K={data(){return{}},methods:{},computed:{}};const N=(0,l.Z)(K,[["render",J]]);var Y=N;const q=(0,r._)("h1",null,"Home",-1),F=[q];function R(t,e,o,n,a,s){return(0,r.wg)(),(0,r.iD)("div",null,F)}var U={components:{},data(){return{}},methods:{},computed:{}};const B=(0,l.Z)(U,[["render",R]]);var Q=B,V=o(7139);const X=t=>((0,r.dD)("data-v-3351476c"),t=t(),(0,r.Cn)(),t),tt={class:"container-fluid"},et={id:"top-msg"},ot={id:"welcome"},nt={id:"words"},rt={id:"email"},at={key:0,id:"sorry-msg"},st={key:1,id:"todo-msg"},lt={key:2,class:"table align-middle"},it=X((()=>(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"#"),(0,r._)("th",{class:"text-start lg",scope:"col"},"Domain"),(0,r._)("th",{class:"text-start lg",scope:"col"},"Emails")])],-1))),ut={scope:"row"},ct={class:"text-start"},dt={class:"text-start"};function pt(t,e,o,n,a,s){return(0,r.wg)(),(0,r.iD)("div",tt,[(0,r._)("div",et,[(0,r._)("h5",ot,(0,V.zw)(s.welcomeMsg),1),(0,r._)("p",nt,(0,V.zw)(s.someOtherWords),1),(0,r._)("p",rt,(0,V.zw)(s.emailAddress),1)]),s.isEmpty?((0,r.wg)(),(0,r.iD)("h4",at,"Sorry, you don't have any contacts to share...")):(0,r.kq)("",!0),s.isEmpty?((0,r.wg)(),(0,r.iD)("h5",st,"Please, go to your e-mail box and add some e-mails to your contacts.")):((0,r.wg)(),(0,r.iD)("table",lt,[it,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.peopleObj.contacts,((t,e,o)=>((0,r.wg)(),(0,r.iD)("tr",{key:o},[(0,r._)("th",ut,(0,V.zw)(o+1),1),(0,r._)("td",ct,(0,V.zw)(e),1),(0,r._)("td",dt,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{key:e},(0,V.zw)(t),1)))),128))])])])))),128))])]))])}const ht=(0,b.fP)().cookies;var mt={data(){return{peopleObj:{profile:{},contacts:[]},name:"User",email:"useremail@email.com"}},methods:{async populate(){let t=this.$loading.show();setTimeout((()=>t.hide()),500);let e=ht.get("token");if(null!==e&&e.status){let t=localStorage.getItem("people"),e=JSON.parse(t);if(this.name=e["profile"]["name"],this.email=e["profile"]["email"],null!=t){let e=JSON.parse(t);this.peopleObj=e}}}},computed:{isEmpty(){let t=Object.keys(this.peopleObj.contacts);return 0==t.length},welcomeMsg(){return`Welcome, ${this.name}!`},someOtherWords(){return"These are the email addresses from all your contacts"},emailAddress(){return`${this.email}`}},mounted(){return this.populate()}};const ft=(0,l.Z)(mt,[["render",pt],["__scopeId","data-v-3351476c"]]);var vt=ft;const gt=(0,b.fP)().cookies,yt=[{path:"/",name:"Login",component:O},{path:"/people/",component:G,beforeEnter:t=>{let e=gt.get("token");return(null===e||e.status)&&null!=e||(t.path="/")},children:[{path:"home",component:Q},{path:"contacts",component:vt},{path:"report",component:Y}]}];var bt=yt;const wt=(0,c.p7)({routes:bt,history:(0,c.r5)()});var _t=wt;const kt=(0,b.fP)().cookies;var Ot={namespaced:!0,state(){return{personInfo:{}}},getters:{sendPersonInfo(t){return t.personInfo},sendPersonInfoKeys(t){let e=Object.keys(t.personInfo);return e}},mutations:{},actions:{async getPersonInfo(t){await Z.ZP.get("http://localhost:5000/people").then((e=>{let o=kt.get("token");null==o&&kt.set("token",{token:e.data.profile.token,status:!0}),t.state.personInfo=e.data,localStorage.setItem("people",JSON.stringify(e.data))}))},async validateToken(t,e){await Z.ZP.get(`http://localhost:5000/people/verify/?token=${e}`).then((t=>{if("false"==t.data.status){let t=kt.get("token");t.status=!1,kt.set("token",t)}}))}},modules:{}};const Pt=(0,y.MT)({modules:{auth:Ot}});var Dt=Pt,jt=o(5513);const It=(0,n.ri)(u);It.use(Dt),It.use(_t),It.use(jt.LoadingPlugin),It.mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,a){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],a=t[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&a||s>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[i])}))?n.splice(i--,1):(l=!1,a<s&&(s=a));if(l){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,s=n[0],l=n[1],i=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(i)var c=i(o)}for(e&&e(n);u<s.length;u++)a=s[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},n=self["webpackChunkdesafio_conecta_nuvem"]=self["webpackChunkdesafio_conecta_nuvem"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2720)}));n=o.O(n)})();
//# sourceMappingURL=app.57889e19.js.map