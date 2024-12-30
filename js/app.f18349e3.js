(function(){"use strict";var t={453:function(t,a,e){var n=e(471),i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("barra-vue"),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("ProfileVue")],1),a("div",{staticClass:"col-md-4"},[a("LenguagesVue")],1),a("div",{staticClass:"col-md-4"},[a("TecnologiesVue")],1)])])],1)},r=[],o=function(){var t=this,a=t._self._c;return a("b-navbar",{staticClass:"navbar-horizontal shadow-lg",attrs:{toggleable:"lg"}},[a("b-navbar-brand",[a("b-icon",{attrs:{icon:"person-badge-fill",variant:"dark"}}),a("span",{staticClass:"font-weight-bold mt-auto ml-3",attrs:{title:"name"}},[t._v(" Doug Enas")])],1),a("b-navbar-nav",[a("b-nav-item",{staticClass:"mt-auto ml-auto",attrs:{href:"#"}},[a("b-badge",{attrs:{variant:"white"}},[a("span",{staticClass:"text-secondary",attrs:{title:"ocupation"}},[t._v("Web Developer ")]),a("b-icon",{attrs:{variant:"secondary",icon:"code-slash"}})],1)],1),a("b-nav-item",{staticClass:"mt-auto ml-auto",attrs:{href:"https://www.google.com/maps/place/Indianapolis,+IN/@39.7799637,-86.2731791,11z/data=!3m1!4b1!4m6!3m5!1s0x886b50ffa7796a03:0xd68e9df640b9ea7c!8m2!3d39.768403!4d-86.158068!16zL20vMGZ0eHc"}},[a("b-badge",{attrs:{variant:"white"}},[a("span",{staticClass:"text-secondary",attrs:{title:"location"}},[t._v("Indianapolis, Indiana ")]),a("b-icon",{attrs:{variant:"secondary",scale:"0.9",icon:"geo-alt-fill"}})],1)],1)],1),a("b-navbar-nav",{staticClass:"ml-auto display-inline"},[a("b-nav-item",{attrs:{title:"github",href:t.github}},[a("b-icon",{attrs:{icon:"github",variant:"dark"}})],1),a("b-nav-item",{attrs:{href:t.mail}},[a("b-icon",{attrs:{icon:"envelope-fill",variant:"dark"}})],1),a("b-nav-item",{attrs:{href:t.linkedin}},[a("b-icon",{attrs:{icon:"linkedin",variant:"dark"}})],1)],1)],1)},s=[],l={name:"barraVue",data(){return{github:"https://github.com/0u714w",mail:"mailto:douglassenas@gmail.com",linkedin:"https://www.linkedin.com/in/doug-enas-a863b8191/"}}},c=l,u=e(656),d=(0,u.A)(c,o,s,!1,null,null,null),v=d.exports,p=function(){var t=this,a=t._self._c;return a("b-container",[a("b-card",{staticClass:"mt-5 rounded shadow-lg"},[a("span",{staticClass:"text-dark font-weight-bold"},[t._v("outlaw")]),t._v(" "),a("br"),a("hr"),a("div",[a("img",{staticStyle:{"max-width":"100%",height:"auto"},attrs:{src:e(593),alt:"doug"}})])]),a("b-card",{staticClass:"mt-1 rounded shadow-sm"},[a("span",{staticClass:"text-dark font-weight-bold"},[t._v("Personal")]),t._v(" "),a("br"),a("hr"),a("b-badge",{attrs:{variant:"dark"}},[t._v(" Doug Enas ")]),a("br"),a("b-badge",[t._v(" https://github.com/0u714w ")]),a("br"),a("b-badge",{attrs:{variant:"dark"}},[t._v(" Indianapolis, Indiana ")]),a("br")],1)],1)},b=[],f={name:"profileVue"},m=f,g=(0,u.A)(m,p,b,!1,null,null,null),h=g.exports,w=function(){var t=this,a=t._self._c;return a("b-container",[a("b-card",{staticClass:"shadow-lg rounded mt-5",attrs:{variant:"dark"}},[a("span",{staticClass:"text-dark font-weight-bold"},[t._v("programming")]),a("br"),a("hr"),a("br"),t._l(t.bars,(function(e){return a("div",{key:e.value,staticClass:"row mb-2"},[a("div",{staticClass:"col-12"},[a("b-badge",{staticClass:"text-white col-ms-1",attrs:{variant:"dark"}},[t._v(t._s(e.title))]),a("b-progress",{attrs:{value:e.value,variant:"secondary",striped:"",animated:"animated"}})],1)])})),a("br")],2)],1)},_=[],k={name:"lenguagesVue",data(){return{bars:[{title:"php",value:50,variant:"primary"},{title:"typescript",value:39,variant:"warning"},{title:"python",value:66,variant:"primary"},{title:"javascript",value:70,variant:"warning"},{title:"html",value:80,variant:"primary"},{title:"css",value:80,variant:"warning"},{title:"sql",value:60,variant:"primary"},{title:"bash",value:40,variant:"warning"}]}}},y=k,x=(0,u.A)(y,w,_,!1,null,null,null),C=x.exports,I=function(){var t=this,a=t._self._c;return a("b-container",[a("b-card",{staticClass:"container shadow-lg rounded mt-5",attrs:{variant:"dark"}},[a("span",{staticClass:"text-dark font-weight-bold"},[t._v("technologies of use")]),t._v(" "),a("br"),a("hr"),a("div",{staticClass:"img-content"},t._l(t.items,(function(e,n){return a("i",{key:n,staticClass:"_icons m-2",class:e.data,attrs:{id:"icon:"+n},on:{mouseover:function(a){return t.colorful("icon:"+n)},mouseleave:function(a){return t.colorless("icon:"+n)}}})})),0)])],1)},j=[],V={name:"tecnologiesVue",data(){return{items:[{data:"devicon-javascript-plain"},{data:"devicon-vuejs-plain"},{data:"devicon-nodejs-plain"},{data:"devicon-python-plain"},{data:"devicon-laravel-plain"},{data:"devicon-docker-plain"},{data:"devicon-mysql-plain"},{data:"devicon-mongodb-plain"},{data:"devicon-git-plain"},{data:"devicon-bash-plain"},{data:"devicon-html5-plain"},{data:"devicon-css3-plain"},{data:"devicon-sqlite-plain"},{data:"devicon-php-plain"},{data:"devicon-linux-plain"},{data:"devicon-typescript-plain"}]}},methods:{colorful(t){document.getElementById(t).classList.add("colored")},colorless(t){document.getElementById(t).classList.remove("colored")}}},O=V,A=(0,u.A)(O,I,j,!1,null,"55229533",null),S=A.exports,P=function(){var t=this,a=t._self._c;return a("b-container",{staticClass:"mt-5 contenedor col-md-6"},[a("b-badge",{staticClass:"w-100 text-white font-weight-bolder mx-auto p-1",attrs:{variant:"dark"}},[t._v("Projects")]),a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 5px black"},attrs:{id:"carousel",interval:0,controls:"",indicators:""},model:{value:t.open_slide,callback:function(a){t.open_slide=a},expression:"open_slide"}},[a("a",{attrs:{href:t.slides[t.open_slide].link}},t._l(t.slides,(function(t,e){return a("b-carousel-slide",{key:e,staticClass:"vtam",attrs:{caption:t.caption,"img-src":t.src,id:t.link,text:"click to open GitHub"}})})),1)])],1)},T=[],E={name:"projectsVue",data(){return{slides:[{caption:"Ebay Scraper",src:e(828),link:"https://github.com/0u714w/ebay_scraper"},{caption:"Simple Neural Net",src:e(630),link:"https://github.com/0u714w/neural_net"},{caption:"Bird Nerd",src:e(327),link:"https://mhoelzer.github.io/birdNerd/"}],open_slide:0}}},D=E,z=(0,u.A)(D,P,T,!1,null,null,null),L=z.exports,N=function(){var t=this,a=t._self._c;return a("b-container",{staticClass:"mt-4"},[a("span",{staticClass:"text-dark font-weight-bold",attrs:{title:"about me"}},[t._v("About Me")]),a("br"),a("hr"),a("b-card",{staticClass:"my-2 shadow-lg"},[a("span",{staticClass:"text-secondary",attrs:{title:"kevin"}},[t._v("Douglass")]),a("hr"),a("p",[t._v(" Hi. I'm Doug 🙂 I've spent most of my life writing music for a living, now I write code. ")]),a("br"),a("p",[t._v(" How I bring value: "),a("br"),t._v(" 1. I humanize coding "),a("br"),t._v(" 2. I’m an avid problem solver "),a("br"),t._v(" 3. Team work! I collaborate with those around me to drive better and faster results. ")]),a("br"),a("p",[t._v(" I have four years of experience writing and maintaining backend and full stack applications built in php, javascript, and python. I thrive on great teamwork and innovative thinking. I am a problem solver both at home and in the workplace, and I strive to make other's lives better with the gifts I've been given. ")])])],1)},B=[],H={name:"aboutVue"},M=H,q=(0,u.A)(M,N,B,!1,null,null,null),G=q.exports,F=function(){var t=this,a=t._self._c;return a("b-card",{staticClass:"w-100 footer-vw",attrs:{type:"dark"}},[a("hr",{staticClass:"bg-dark"}),a("ul",{staticClass:"float-left mt-3 footer-list"},[a("li",[a("b-icon",{attrs:{icon:"code"}}),t._v(" Douglass Enas")],1),a("br"),a("li",[a("b-icon",{attrs:{icon:"github"}}),t._v(" 0u714w")],1)]),a("hr",{staticClass:"bg-dark"})])},W=[],Y={name:"footerVue"},Z=Y,$=(0,u.A)(Z,F,W,!1,null,"2adae648",null),J=$.exports,K={name:"App",components:{BarraVue:v,ProfileVue:h,LenguagesVue:C,TecnologiesVue:S,ProjectsVue:L,AboutVue:G,FooterVue:J}},Q=K,R=(0,u.A)(Q,i,r,!1,null,"370c19c1",null),U=R.exports,X=e(413),tt=e(625);e(313);n["default"].use(X.vGs),n["default"].use(tt.YS),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(U)}}).$mount("#app")},327:function(t,a,e){t.exports=e.p+"img/birdnerd.0e7b0409.png"},593:function(t,a,e){t.exports=e.p+"img/doug.fa83c094.jpeg"},828:function(t,a,e){t.exports=e.p+"img/ebay.a0ff0e5a.png"},630:function(t,a,e){t.exports=e.p+"img/net.9eee50b4.png"}},a={};function e(n){var i=a[n];if(void 0!==i)return i.exports;var r=a[n]={exports:{}};return t[n](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(a,n,i,r){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],r=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(s=!1,r<o&&(o=r));if(s){t.splice(u--,1);var c=i();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,i,r]}}(),function(){e.d=function(t,a){for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/new-portfolio/"}(),function(){var t={524:0};e.O.j=function(a){return 0===t[a]};var a=function(a,n){var i,r,o=n[0],s=n[1],l=n[2],c=0;if(o.some((function(a){return 0!==t[a]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var u=l(e)}for(a&&a(n);c<o.length;c++)r=o[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(u)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(453)}));n=e.O(n)})();
//# sourceMappingURL=app.f18349e3.js.map