import{a7 as J,B as q,a1 as K,a8 as z}from"./vendor.b87794c8.js";var p=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Vr=typeof window=="undefined",Q=typeof p=="object"&&p&&p.Object===Object&&p,_=Q,X=_,Y=typeof self=="object"&&self&&self.Object===Object&&self,Z=X||Y||Function("return this")(),n=Z,ee=n,re=ee.Symbol,l=re,M=l,h=Object.prototype,te=h.hasOwnProperty,ae=h.toString,v=M?M.toStringTag:void 0;function oe(e){var r=te.call(e,v),t=e[v];try{e[v]=void 0;var o=!0}catch{}var a=ae.call(e);return o&&(r?e[v]=t:delete e[v]),a}var ne=oe,ie=Object.prototype,se=ie.toString;function ce(e){return se.call(e)}var ue=ce,P=l,fe=ne,ve=ue,be="[object Null]",ge="[object Undefined]",x=P?P.toStringTag:void 0;function pe(e){return e==null?e===void 0?ge:be:x&&x in Object(e)?fe(e):ve(e)}var d=pe;function le(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var k=le,de=d,$e=k,ye="[object AsyncFunction]",je="[object Function]",Te="[object GeneratorFunction]",Se="[object Proxy]";function we(e){if(!$e(e))return!1;var r=de(e);return r==je||r==Te||r==ye||r==Se}var Oe=we,me=n,_e=me["__core-js_shared__"],Me=_e,$=Me,E=function(){var e=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function he(e){return!!E&&E in e}var Pe=he,xe=Function.prototype,ke=xe.toString;function Ee(e){if(e!=null){try{return ke.call(e)}catch{}try{return e+""}catch{}}return""}var N=Ee,Ne=Oe,Ie=Pe,Fe=k,Ge=N,Ce=/[\\^$.*+?()[\]{}|]/g,Ve=/^\[object .+?Constructor\]$/,Be=Function.prototype,Ae=Object.prototype,De=Be.toString,Le=Ae.hasOwnProperty,Re=RegExp("^"+De.call(Le).replace(Ce,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ue(e){if(!Fe(e)||Ie(e))return!1;var r=Ne(e)?Re:Ve;return r.test(Ge(e))}var We=Ue;function He(e,r){return e==null?void 0:e[r]}var Je=He,qe=We,Ke=Je;function ze(e,r){var t=Ke(e,r);return qe(t)?t:void 0}var i=ze,Qe=i,Xe=n,Ye=Qe(Xe,"Map"),Ze=Ye,er=i;er(Object,"create");var rr=n;rr.Uint8Array;var I=l,F=I?I.prototype:void 0;F&&F.valueOf;function tr(e){return e!=null&&typeof e=="object"}var G=tr,ar=d,or=G,nr="[object Arguments]";function ir(e){return or(e)&&ar(e)==nr}var sr=ir,C=sr,cr=G,V=Object.prototype,ur=V.hasOwnProperty,fr=V.propertyIsEnumerable;C(function(){return arguments}());var B={exports:{}};function vr(){return!1}var br=vr;(function(e,r){var t=n,o=br,a=r&&!r.nodeType&&r,u=a&&!0&&e&&!e.nodeType&&e,f=u&&u.exports===a,b=f?t.Buffer:void 0,g=b?b.isBuffer:void 0,m=g||o;e.exports=m})(B,B.exports);var y={exports:{}};(function(e,r){var t=_,o=r&&!r.nodeType&&r,a=o&&!0&&e&&!e.nodeType&&e,u=a&&a.exports===o,f=u&&t.process,b=function(){try{var g=a&&a.require&&a.require("util").types;return g||f&&f.binding&&f.binding("util")}catch{}}();e.exports=b})(y,y.exports);var A=y.exports;A&&A.isTypedArray;var gr=i,pr=n,lr=gr(pr,"DataView"),dr=lr,$r=i,yr=n,jr=$r(yr,"Promise"),Tr=jr,Sr=i,wr=n,Or=Sr(wr,"Set"),mr=Or,_r=i,Mr=n,hr=_r(Mr,"WeakMap"),Pr=hr,j=dr,T=Ze,S=Tr,w=mr,O=Pr,D=d,s=N,L="[object Map]",xr="[object Object]",R="[object Promise]",U="[object Set]",W="[object WeakMap]",H="[object DataView]",kr=s(j),Er=s(T),Nr=s(S),Ir=s(w),Fr=s(O),c=D;(j&&c(new j(new ArrayBuffer(1)))!=H||T&&c(new T)!=L||S&&c(S.resolve())!=R||w&&c(new w)!=U||O&&c(new O)!=W)&&(c=function(e){var r=D(e),t=r==xr?e.constructor:void 0,o=t?s(t):"";if(o)switch(o){case kr:return H;case Er:return L;case Nr:return R;case Ir:return U;case Fr:return W}return r});function Br(e){const r={};for(let t=0;t<e.length;t++)e[t]&&J(r,e[t]);return r}const Ar=()=>Math.floor(Math.random()*1e4),Dr=e=>typeof e=="boolean",Gr=e=>typeof e=="number",Lr=e=>z(e).startsWith("HTML");function Rr(){const e=K();return"$ELEMENT"in e.proxy?e.proxy.$ELEMENT:{}}function Ur(e){return q(e)?e:Gr(e)?`${e}px`:""}export{n as _,d as a,G as b,k as c,Dr as d,Lr as e,Gr as f,Ar as g,Ur as h,Vr as i,Br as t,Rr as u};
