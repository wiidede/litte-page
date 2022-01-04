import{c as T,a as R,N as A,d as w,b as F,u as P,r as H,e as _,w as v,f as V,g as M,o as p,h as y,i as m,n as S,j as c,k as C,v as L,F as $,l as K,t as k,m as B,p as x,q as W,s as D,x as Y,K as q,y as z,z as J}from"./vendor.965fbf44.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};Q();const G="modulepreload",O={},U="/little-page/",f=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${U}${s}`,s in O)return;O[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":G,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((u,r)=>{i.addEventListener("load",u),i.addEventListener("error",r)})})).then(()=>t())};const X=[{path:"/",name:"Home",component:()=>f(()=>import("./index.7e63dd16.js"),["assets/index.7e63dd16.js","assets/index.68b94cb7.css","assets/el-scrollbar.4a0f6de0.js","assets/el-scrollbar.89f2752f.css","assets/vendor.965fbf44.js"])},{path:"/settings",name:"Settings",component:()=>f(()=>import("./index.d15fe76f.js"),["assets/index.d15fe76f.js","assets/index.4dae2868.css","assets/el-scrollbar.4a0f6de0.js","assets/el-scrollbar.89f2752f.css","assets/vendor.965fbf44.js","assets/el-input.dba09324.js","assets/el-input.971d86df.css","assets/el-button.803265c3.js","assets/el-button.2dd8a6b6.css","assets/index.4a380f82.js"])},{path:"/settings/about",name:"SettingsAbout",component:()=>f(()=>import("./About.4b61924c.js"),["assets/About.4b61924c.js","assets/About.16c1b9e0.css","assets/el-scrollbar.4a0f6de0.js","assets/el-scrollbar.89f2752f.css","assets/vendor.965fbf44.js"])},{path:"/invest-distribution",name:"InvestDistribution",component:()=>f(()=>import("./Distribution.804588e3.js"),["assets/Distribution.804588e3.js","assets/Distribution.85ef8ebf.css","assets/el-scrollbar.4a0f6de0.js","assets/el-scrollbar.89f2752f.css","assets/vendor.965fbf44.js","assets/el-input.dba09324.js","assets/el-input.971d86df.css","assets/el-popper.15f8107a.js","assets/el-popper.82965bb7.css","assets/index.4a380f82.js"])},{path:"/my-day",name:"MyDay",component:()=>f(()=>import("./index.f47a1e02.js"),["assets/index.f47a1e02.js","assets/index.c6247b8f.css","assets/el-scrollbar.4a0f6de0.js","assets/el-scrollbar.89f2752f.css","assets/vendor.965fbf44.js","assets/el-button.803265c3.js","assets/el-button.2dd8a6b6.css","assets/el-input.dba09324.js","assets/el-input.971d86df.css","assets/el-popper.15f8107a.js","assets/el-popper.82965bb7.css"])}],g=T({routes:X,history:R()});g.beforeEach((e,t,n)=>{A.start(),n()});g.afterEach(()=>{A.done()});w.extend(F);const Z=e=>Object.prototype.toString.call(e)==="[object Object]",h=(e,t)=>{document.documentElement.style.setProperty(e,t)},ee=e=>{g.push(e).then(void 0)},be=()=>{g.back()},b=e=>{document.documentElement.setAttribute("data-theme",e)},Ee=e=>{const t=60;return e<0&&(e=24*t+e%(24*t)),e=e%(24*t),e},Ae=(e,t)=>w.duration(e+t,"minutes").format("HH:mm"),Pe=()=>w().format("YYYY-MM-DD HH:mm:ss"),te=[{name:"Home",path:"/",active:!1,icon:"icon-home-line",iconActive:"icon-home-fill"},{name:"Invest",path:"/invest-distribution",active:!1,icon:"icon-coins-line",iconActive:"icon-coins-fill"},{name:"My Day",path:"/my-day",active:!1,icon:"icon-calendar-event-line",iconActive:"icon-calendar-event-fill"},{name:"Settings",path:"/settings",active:!1,icon:"icon-settings-line",iconActive:"icon-settings-fill"}];var ne=(e,t)=>{for(const[n,s]of t)e[n]=s;return e};const oe=["onClick"],se={class:"copyright-info"},ae={setup(e){const t=P();let n=H(!1);const s=_(()=>t.state.application.navigationShow),o=_(()=>t.state.application.isPhone),a=()=>{n.value=!n.value};v(()=>{n.value=o.value});const i=V(),u=M(te);v(()=>{u.forEach(d=>{d.active=d.path==="/"?i.currentRoute.value.path===d.path:i.currentRoute.value.path.startsWith(d.path)})});const r=new Date().getFullYear();return(d,E)=>(p(),y("nav",{class:S({collapse:c(n),"nav-hidden":!c(s)})},[m("div",{class:"collapse-button",onClick:a},[m("span",{class:S(["iconfont",c(n)?"icon-arrow-right-s-line":"icon-arrow-left-s-line"])},null,2),C(m("span",null,"collapse",512),[[L,!c(n)]])]),(p(!0),y($,null,K(c(u),(l,j)=>(p(),y("div",{key:`nav${j}`,class:S(["nav-item",{active:l.active}]),onClick:Se=>c(ee)(l.path)},[m("span",{class:S(["iconfont",l.active?l.iconActive:l.icon])},null,2),C(m("span",null,k(l.name),513),[[L,!c(n)]])],10,oe))),128)),m("div",se,k(c(n)?"":`Copyright \xA9 2021 - ${c(r)} Wiidede`),1)],2))}};var ie=ne(ae,[["__scopeId","data-v-14c66ed9"]]);const I="user-preference-settings",Ce="user-invest",Le="user-my-day";const re={setup(e){const t=P(),n=_(()=>t.state.settings.color);v(()=>{h("--main",n.value),h("--main-light",`${n.value}C0`),h("--main-lighter",`${n.value}A0`),h("--main-extra-light",`${n.value}80`),h("--select",`${n.value}60`),h("--hover",`${n.value}20`)});const s=_(()=>t.state.settings.theme),o=window.matchMedia("(prefers-color-scheme: dark)"),a=r=>{r.matches?b("dark"):b("light")};v(()=>{s.value==="Follow System"?(a(o),o.addEventListener("change",a)):s.value&&(b(s.value.toLowerCase()),o.removeEventListener("change",a))});const i=window.matchMedia("(max-width: 768px)"),u=r=>{t.commit("application/setIsPhone",!!r.matches)};return u(i),i.addEventListener("change",u),v(()=>{const r={color:n.value,theme:s.value};localStorage.setItem(I,JSON.stringify(r))}),(r,d)=>{const E=B("router-view");return p(),y($,null,[x(ie),m("main",null,[x(E,null,{default:W(({Component:l})=>[(p(),D(q,null,[(p(),D(Y(l)))],1024))]),_:1})])],64)}}},N=JSON.parse(localStorage.getItem(I)),ce=()=>Z(N)?N:{color:"#FF9A76",theme:"Follow System"},le={},ue={},me={setColor(e,t){e.color=t},setTheme(e,t){e.theme=t}};var de={namespaced:!0,state:ce,getters:le,actions:ue,mutations:me};const pe=()=>({isPhone:!1,navigationShow:!0}),he={},ve={},fe={setIsPhone(e,t){e.isPhone=t},setNavigationShow(e,t){e.navigationShow=t},toggleNavigationShow(e){e.navigationShow=!e.navigationShow}};var ge={namespaced:!0,state:pe,getters:he,actions:ve,mutations:fe};const _e=z({state:{version:"0.0.1"},modules:{settings:de,application:ge}});const ye=J(re);ye.use(g).use(_e).mount("#app");export{ne as _,Ee as a,Le as b,Pe as c,Ae as f,be as g,Z as i,ee as n,Ce as u};
//# sourceMappingURL=index.316712e0.js.map
