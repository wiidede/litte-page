import{ab as Me,G as Q,ac as Pe,y as He,E as Z,r as u,D as ee,b as L,O as te,X as re,o as M,p as ae,m as oe,j as Ce,v as Ee,i as A,S as R,n as W,V as Ne,a0 as se,M as Be,T as Ae,k as Re,f as ne,H as We,q as xe,F as De,l as ie,Q as Ie}from"./vendor.fc3c0487.js";var P=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Fe=typeof window=="undefined",Ge=typeof P=="object"&&P&&P.Object===Object&&P,le=Ge,Ve=le,Ue=typeof self=="object"&&self&&self.Object===Object&&self,Xe=Ve||Ue||Function("return this")(),m=Xe,Ye=m,qe=Ye.Symbol,x=qe,ce=x,ue=Object.prototype,Je=ue.hasOwnProperty,Ke=ue.toString,k=ce?ce.toStringTag:void 0;function Qe(e){var t=Je.call(e,k),r=e[k];try{e[k]=void 0;var o=!0}catch{}var s=Ke.call(e);return o&&(t?e[k]=r:delete e[k]),s}var Ze=Qe,et=Object.prototype,tt=et.toString;function rt(e){return tt.call(e)}var at=rt,ve=x,ot=Ze,st=at,nt="[object Null]",it="[object Undefined]",fe=ve?ve.toStringTag:void 0;function lt(e){return e==null?e===void 0?it:nt:fe&&fe in Object(e)?ot(e):st(e)}var D=lt;function ct(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var de=ct,ut=D,vt=de,ft="[object AsyncFunction]",dt="[object Function]",bt="[object GeneratorFunction]",gt="[object Proxy]";function pt(e){if(!vt(e))return!1;var t=ut(e);return t==dt||t==bt||t==ft||t==gt}var mt=pt,yt=m,ht=yt["__core-js_shared__"],St=ht,I=St,be=function(){var e=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $t(e){return!!be&&be in e}var wt=$t,_t=Function.prototype,Tt=_t.toString;function jt(e){if(e!=null){try{return Tt.call(e)}catch{}try{return e+""}catch{}}return""}var ge=jt,zt=mt,kt=wt,Ot=de,Lt=ge,Mt=/[\\^$.*+?()[\]{}|]/g,Pt=/^\[object .+?Constructor\]$/,Ht=Function.prototype,Ct=Object.prototype,Et=Ht.toString,Nt=Ct.hasOwnProperty,Bt=RegExp("^"+Et.call(Nt).replace(Mt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function At(e){if(!Ot(e)||kt(e))return!1;var t=zt(e)?Bt:Pt;return t.test(Lt(e))}var Rt=At;function Wt(e,t){return e==null?void 0:e[t]}var xt=Wt,Dt=Rt,It=xt;function Ft(e,t){var r=It(e,t);return Dt(r)?r:void 0}var $=Ft,Gt=$,Vt=m,Ut=Gt(Vt,"Map"),Xt=Ut,Yt=$;Yt(Object,"create");var qt=m;qt.Uint8Array;var pe=x,me=pe?pe.prototype:void 0;me&&me.valueOf;function Jt(e){return e!=null&&typeof e=="object"}var ye=Jt,Kt=D,Qt=ye,Zt="[object Arguments]";function er(e){return Qt(e)&&Kt(e)==Zt}var tr=er,he=tr,rr=ye,Se=Object.prototype,ar=Se.hasOwnProperty,or=Se.propertyIsEnumerable;he(function(){return arguments}());var $e={exports:{}};function sr(){return!1}var nr=sr;(function(e,t){var r=m,o=nr,s=t&&!t.nodeType&&t,a=s&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===s,n=l?r.Buffer:void 0,v=n?n.isBuffer:void 0,f=v||o;e.exports=f})($e,$e.exports);var F={exports:{}};(function(e,t){var r=le,o=t&&!t.nodeType&&t,s=o&&!0&&e&&!e.nodeType&&e,a=s&&s.exports===o,l=a&&r.process,n=function(){try{var v=s&&s.require&&s.require("util").types;return v||l&&l.binding&&l.binding("util")}catch{}}();e.exports=n})(F,F.exports);var we=F.exports;we&&we.isTypedArray;var ir=$,lr=m,cr=ir(lr,"DataView"),ur=cr,vr=$,fr=m,dr=vr(fr,"Promise"),br=dr,gr=$,pr=m,mr=gr(pr,"Set"),yr=mr,hr=$,Sr=m,$r=hr(Sr,"WeakMap"),wr=$r,G=ur,V=Xt,U=br,X=yr,Y=wr,_e=D,w=ge,Te="[object Map]",_r="[object Object]",je="[object Promise]",ze="[object Set]",ke="[object WeakMap]",Oe="[object DataView]",Tr=w(G),jr=w(V),zr=w(U),kr=w(X),Or=w(Y),_=_e;(G&&_(new G(new ArrayBuffer(1)))!=Oe||V&&_(new V)!=Te||U&&_(U.resolve())!=je||X&&_(new X)!=ze||Y&&_(new Y)!=ke)&&(_=function(e){var t=_e(e),r=t==_r?e.constructor:void 0,o=r?w(r):"";if(o)switch(o){case Tr:return Oe;case jr:return Te;case zr:return je;case kr:return ze;case Or:return ke}return t});function Lr(e){const t={};for(let r=0;r<e.length;r++)e[r]&&Me(t,e[r]);return t}const xr=()=>Math.floor(Math.random()*1e4),Dr=e=>typeof e=="boolean",q=e=>typeof e=="number",Ir=e=>Pe(e).startsWith("HTML");function Fr(){const e=He();return"$ELEMENT"in e.proxy?e.proxy.$ELEMENT:{}}function T(e){return Q(e)?e:q(e)?`${e}px`:""}const J=function(e){return(e||"").split(" ").filter(t=>!!t.trim())},H=function(e,t,r,o=!1){e&&t&&r&&(e==null||e.addEventListener(t,r,o))},O=function(e,t,r,o=!1){e&&t&&r&&(e==null||e.removeEventListener(t,r,o))};function Gr(e,t){if(!e)return;let r=e.getAttribute("class")||"";const o=J(r),s=(t||"").split(" ").filter(a=>!o.includes(a)&&!!a.trim());e.classList?e.classList.add(...s):(r+=` ${s.join(" ")}`,e.setAttribute("class",r))}function Vr(e,t){if(!e||!t)return;const r=J(t);let o=e.getAttribute("class")||"";if(e.classList){e.classList.remove(...r);return}r.forEach(a=>{o=o.replace(` ${a} `," ")});const s=J(o).join(" ");e.setAttribute("class",s)}const Ur=e=>e.stopPropagation(),Mr=function(e){for(const t of e){const r=t.target.__resizeListeners__||[];r.length&&r.forEach(o=>{o()})}},Pr=function(e,t){Fe||!e||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new ResizeObserver(Mr),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},Hr=function(e,t){var r;!e||!e.__resizeListeners__||(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(r=e.__ro__)==null||r.disconnect())},Cr={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function Er({move:e,size:t,bar:r}){const o={},s=`translate${r.axis}(${e}%)`;return o[r.size]=t,o.transform=s,o.msTransform=s,o.webkitTransform=s,o}var K=Z({name:"Bar",props:{vertical:Boolean,size:String,move:Number,ratio:Number,always:Boolean},setup(e){const t=u(null),r=u(null),o=ee("scrollbar",{}),s=ee("scrollbar-wrap",{}),a=L(()=>Cr[e.vertical?"vertical":"horizontal"]),l=u({}),n=u(null),v=u(null),f=u(!1);let h=null;const d=L(()=>t.value[a.value.offset]**2/s.value[a.value.scrollSize]/e.ratio/r.value[a.value.offset]),C=c=>{c.stopPropagation(),!(c.ctrlKey||[1,2].includes(c.button))&&(window.getSelection().removeAllRanges(),N(c),l.value[a.value.axis]=c.currentTarget[a.value.offset]-(c[a.value.client]-c.currentTarget.getBoundingClientRect()[a.value.direction]))},E=c=>{const p=Math.abs(c.target.getBoundingClientRect()[a.value.direction]-c[a.value.client]),y=r.value[a.value.offset]/2,B=(p-y)*100*d.value/t.value[a.value.offset];s.value[a.value.scroll]=B*s.value[a.value.scrollSize]/100},N=c=>{c.stopImmediatePropagation(),n.value=!0,H(document,"mousemove",b),H(document,"mouseup",z),h=document.onselectstart,document.onselectstart=()=>!1},b=c=>{if(n.value===!1)return;const p=l.value[a.value.axis];if(!p)return;const y=(t.value.getBoundingClientRect()[a.value.direction]-c[a.value.client])*-1,B=r.value[a.value.offset]-p,Le=(y-B)*100*d.value/t.value[a.value.offset];s.value[a.value.scroll]=Le*s.value[a.value.scrollSize]/100},z=()=>{n.value=!1,l.value[a.value.axis]=0,O(document,"mousemove",b),O(document,"mouseup",z),document.onselectstart=h,v.value&&(f.value=!1)},i=L(()=>Er({size:e.size,move:e.move,bar:a.value})),g=()=>{v.value=!1,f.value=!!e.size},S=()=>{v.value=!0,f.value=n.value};return te(()=>{H(o.value,"mousemove",g),H(o.value,"mouseleave",S)}),re(()=>{O(document,"mouseup",z),O(o.value,"mousemove",g),O(o.value,"mouseleave",S)}),{instance:t,thumb:r,bar:a,clickTrackHandler:E,clickThumbHandler:C,thumbStyle:i,visible:f}}});function Nr(e,t,r,o,s,a){return M(),ae(Ne,{name:"el-scrollbar-fade"},{default:oe(()=>[Ce(A("div",{ref:"instance",class:W(["el-scrollbar__bar","is-"+e.bar.key]),onMousedown:t[1]||(t[1]=(...l)=>e.clickTrackHandler&&e.clickTrackHandler(...l))},[A("div",{ref:"thumb",class:"el-scrollbar__thumb",style:R(e.thumbStyle),onMousedown:t[0]||(t[0]=(...l)=>e.clickThumbHandler&&e.clickThumbHandler(...l))},null,36)],34),[[Ee,e.always||e.visible]])]),_:1})}K.render=Nr;K.__file="packages/components/scrollbar/src/bar.vue";var j=Z({name:"ElScrollbar",components:{Bar:K},props:{height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:{type:Boolean,default:!1},minSize:{type:Number,default:20}},emits:["scroll"],setup(e,{emit:t}){const r=u("0"),o=u("0"),s=u(0),a=u(0),l=u(null),n=u(null),v=u(null),f=u(1),h=u(1),d=4;se("scrollbar",l),se("scrollbar-wrap",n);const C=()=>{if(n.value){const i=n.value.offsetHeight-d,g=n.value.offsetWidth-d;a.value=n.value.scrollTop*100/i*f.value,s.value=n.value.scrollLeft*100/g*h.value,t("scroll",{scrollTop:n.value.scrollTop,scrollLeft:n.value.scrollLeft})}},E=i=>{!q(i)||(n.value.scrollTop=i)},N=i=>{!q(i)||(n.value.scrollLeft=i)},b=()=>{if(!n.value)return;const i=n.value.offsetHeight-d,g=n.value.offsetWidth-d,S=i**2/n.value.scrollHeight,c=g**2/n.value.scrollWidth,p=Math.max(S,e.minSize),y=Math.max(c,e.minSize);f.value=S/(i-S)/(p/(i-p)),h.value=c/(g-c)/(y/(g-y)),o.value=p+d<i?`${p}px`:"",r.value=y+d<g?`${y}px`:""},z=L(()=>{let i=e.wrapStyle;return Ae(i)?(i=Lr(i),i.height=T(e.height),i.maxHeight=T(e.maxHeight)):Q(i)&&(i+=T(e.height)?`height: ${T(e.height)};`:"",i+=T(e.maxHeight)?`max-height: ${T(e.maxHeight)};`:""),i});return te(()=>{e.native||Be(b),e.noresize||(Pr(v.value,b),addEventListener("resize",b))}),re(()=>{e.noresize||(Hr(v.value,b),removeEventListener("resize",b))}),{moveX:s,moveY:a,ratioX:h,ratioY:f,sizeWidth:r,sizeHeight:o,style:z,scrollbar:l,wrap:n,resize:v,update:b,handleScroll:C,setScrollTop:E,setScrollLeft:N}}});const Br={ref:"scrollbar",class:"el-scrollbar"};function Ar(e,t,r,o,s,a){const l=Re("bar");return M(),ne("div",Br,[A("div",{ref:"wrap",class:W([e.wrapClass,"el-scrollbar__wrap",e.native?"":"el-scrollbar__wrap--hidden-default"]),style:R(e.style),onScroll:t[0]||(t[0]=(...n)=>e.handleScroll&&e.handleScroll(...n))},[(M(),ae(xe(e.tag),{ref:"resize",class:W(["el-scrollbar__view",e.viewClass]),style:R(e.viewStyle)},{default:oe(()=>[We(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?Ie("v-if",!0):(M(),ne(De,{key:0},[ie(l,{move:e.moveX,ratio:e.ratioX,size:e.sizeWidth,always:e.always},null,8,["move","ratio","size","always"]),ie(l,{move:e.moveY,ratio:e.ratioY,size:e.sizeHeight,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))],512)}j.render=Ar;j.__file="packages/components/scrollbar/src/index.vue";j.install=e=>{e.component(j.name,j)};const Rr=j,Xr=Rr;export{Xr as E,m as _,Gr as a,q as b,D as c,ye as d,de as e,Dr as f,xr as g,Ir as h,Fe as i,O as j,H as o,Vr as r,Ur as s,Fr as u};
