import{b as V,u as ne,t as ie,_ as K,d as ue,i as R,a as U,w as ce}from"./base.7ba5d459.js";import{l as fe,m as de,r as f,u as T,n as C,j as P,q as F,g as ve,s as me,v as q,o as E,x as j,w as le,y as pe,z as he,b as X,A as O,B as Y,T as be,C as ae,c as se,a as J,F as we,p as ye,D as ge,E as Se,G as ze,H as $e,I as Pe,J as Ee}from"./index.86c49744.js";const re=Symbol("scrollbarContextKey");function G(e){return fe()?(de(e),!0):!1}const y=typeof window!="undefined",Oe=e=>typeof e=="string",M=()=>{};function xe(e,t,o={}){const{immediate:l=!0}=o,s=f(!1);let a=null;function n(){a&&(clearTimeout(a),a=null)}function u(){s.value=!1,n()}function d(...c){n(),s.value=!0,a=setTimeout(()=>{s.value=!1,a=null,e(...c)},T(t))}return l&&(s.value=!0,y&&d()),G(u),{isPending:s,start:d,stop:u}}function H(e){var t;const o=T(e);return(t=o==null?void 0:o.$el)!=null?t:o}const N=y?window:void 0;y&&window.document;y&&window.navigator;y&&window.location;function _(...e){let t,o,l,s;if(Oe(e[0])?([o,l,s]=e,t=N):[t,o,l,s]=e,!t)return M;let a=M;const n=C(()=>T(t),d=>{a(),d&&(d.addEventListener(o,l,s),a=()=>{d.removeEventListener(o,l,s),a=M})},{immediate:!0,flush:"post"}),u=()=>{n(),a()};return G(u),u}function et(e,t,o={}){const{window:l=N,ignore:s}=o;if(!l)return;const a=f(!0),u=[_(l,"click",c=>{const r=H(e),p=c.composedPath();!r||r===c.target||p.includes(r)||!a.value||s&&s.length>0&&s.some(g=>{const h=H(g);return h&&(c.target===h||p.includes(h))})||t(c)},{passive:!0,capture:!0}),_(l,"pointerdown",c=>{const r=H(e);a.value=!!r&&!c.composedPath().includes(r)},{passive:!0})];return()=>u.forEach(c=>c())}const D=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},I="__vueuse_ssr_handlers__";D[I]=D[I]||{};D[I];function tt(e,t,{window:o=N}={}){const l=f(""),s=P(()=>{var a;return H(t)||((a=o==null?void 0:o.document)==null?void 0:a.documentElement)});return C([s,()=>T(e)],([a,n])=>{a&&o&&(l.value=o.getComputedStyle(a).getPropertyValue(n))},{immediate:!0}),C(l,a=>{var n;(n=s.value)!=null&&n.style&&s.value.style.setProperty(T(e),a)}),l}var Q=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,Ce=(e,t)=>{var o={};for(var l in e)He.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&Q)for(var l of Q(e))t.indexOf(l)<0&&Te.call(e,l)&&(o[l]=e[l]);return o};function _e(e,t,o={}){const l=o,{window:s=N}=l,a=Ce(l,["window"]);let n;const u=s&&"ResizeObserver"in s,d=()=>{n&&(n.disconnect(),n=void 0)},c=C(()=>H(e),p=>{d(),u&&s&&p&&(n=new s.ResizeObserver(t),n.observe(p,a))},{immediate:!0,flush:"post"}),r=()=>{d(),c()};return G(r),{isSupported:u,stop:r}}var Z,x;y&&(window==null?void 0:window.navigator)&&((Z=window==null?void 0:window.navigator)==null?void 0:Z.platform)&&/iP(ad|hone|od)/.test((x=window==null?void 0:window.navigator)==null?void 0:x.platform);var ke=Object.defineProperty,ee=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,te=(e,t,o)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Re=(e,t)=>{for(var o in t||(t={}))Le.call(t,o)&&te(e,o,t[o]);if(ee)for(var o of ee(t))Be.call(t,o)&&te(e,o,t[o]);return e};const Ne={top:0,left:0,bottom:0,right:0,height:0,width:0};Re({text:""},Ne);const We={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Ae=({move:e,size:t,bar:o})=>({[o.size]:t,transform:`translate${o.axis}(${e}%)`}),Me=V({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),oe="Thumb",je=F({name:oe,props:Me,setup(e){const t=ve(re),o=ne("scrollbar");t||ie(oe,"can not inject scrollbar context");const l=f(),s=f(),a=f({}),n=f(!1);let u=!1,d=!1,c=y?document.onselectstart:null;const r=P(()=>We[e.vertical?"vertical":"horizontal"]),p=P(()=>Ae({size:e.size,move:e.move,bar:r.value})),g=P(()=>l.value[r.value.offset]**2/t.wrapElement[r.value.scrollSize]/e.ratio/s.value[r.value.offset]),h=i=>{var v;if(i.stopPropagation(),i.ctrlKey||[1,2].includes(i.button))return;(v=window.getSelection())==null||v.removeAllRanges(),S(i);const m=i.currentTarget;!m||(a.value[r.value.axis]=m[r.value.offset]-(i[r.value.client]-m.getBoundingClientRect()[r.value.direction]))},k=i=>{if(!s.value||!l.value||!t.wrapElement)return;const v=Math.abs(i.target.getBoundingClientRect()[r.value.direction]-i[r.value.client]),m=s.value[r.value.offset]/2,w=(v-m)*100*g.value/l.value[r.value.offset];t.wrapElement[r.value.scroll]=w*t.wrapElement[r.value.scrollSize]/100},S=i=>{i.stopImmediatePropagation(),u=!0,document.addEventListener("mousemove",L),document.addEventListener("mouseup",$),c=document.onselectstart,document.onselectstart=()=>!1},L=i=>{if(!l.value||!s.value||u===!1)return;const v=a.value[r.value.axis];if(!v)return;const m=(l.value.getBoundingClientRect()[r.value.direction]-i[r.value.client])*-1,w=s.value[r.value.offset]-v,z=(m-w)*100*g.value/l.value[r.value.offset];t.wrapElement[r.value.scroll]=z*t.wrapElement[r.value.scrollSize]/100},$=()=>{u=!1,a.value[r.value.axis]=0,document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",$),b(),d&&(n.value=!1)},W=()=>{d=!1,n.value=!!e.size},A=()=>{d=!0,n.value=u};me(()=>{b(),document.removeEventListener("mouseup",$)});const b=()=>{document.onselectstart!==c&&(document.onselectstart=c)};return _(q(t,"scrollbarElement"),"mousemove",W),_(q(t,"scrollbarElement"),"mouseleave",A),{ns:o,instance:l,thumb:s,bar:r,thumbStyle:p,visible:n,clickTrackHandler:k,clickThumbHandler:h}}});function Xe(e,t,o,l,s,a){return E(),j(be,{name:e.ns.b("fade")},{default:le(()=>[pe(X("div",{ref:"instance",class:O([e.ns.e("bar"),e.ns.is(e.bar.key)]),onMousedown:t[1]||(t[1]=(...n)=>e.clickTrackHandler&&e.clickTrackHandler(...n))},[X("div",{ref:"thumb",class:O(e.ns.e("thumb")),style:Y(e.thumbStyle),onMousedown:t[0]||(t[0]=(...n)=>e.clickThumbHandler&&e.clickThumbHandler(...n))},null,38)],34),[[he,e.always||e.visible]])]),_:1},8,["name"])}var Ye=K(je,[["render",Xe]]);const De=V({always:{type:Boolean,default:!0},width:{type:String,default:""},height:{type:String,default:""},ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ie=F({components:{Thumb:Ye},props:De,setup(e){const t=f(0),o=f(0),l=4;return{handleScroll:a=>{if(a){const n=a.offsetHeight-l,u=a.offsetWidth-l;o.value=a.scrollTop*100/n*e.ratioY,t.value=a.scrollLeft*100/u*e.ratioX}},moveX:t,moveY:o}}});function Ve(e,t,o,l,s,a){const n=ae("thumb");return E(),se(we,null,[J(n,{move:e.moveX,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),J(n,{move:e.moveY,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64)}var Ke=K(Ie,[["render",Ve]]);const Fe=V({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ue([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:{type:Boolean,default:!1},minSize:{type:Number,default:20}}),Ge={scroll:({scrollTop:e,scrollLeft:t})=>R(e)&&R(t)},Ue=F({name:"ElScrollbar",components:{Bar:Ke},props:Fe,emits:Ge,setup(e,{emit:t}){const o=ne("scrollbar");let l,s;const a=f(),n=f(),u=f(),d=f("0"),c=f("0"),r=f(),p=f(0),g=f(0),h=f(1),k=f(1),S=4,L=P(()=>{const i={};return e.height&&(i.height=U(e.height)),e.maxHeight&&(i.maxHeight=U(e.maxHeight)),[e.wrapStyle,i]}),$=()=>{var i;n.value&&((i=r.value)==null||i.handleScroll(n.value),t("scroll",{scrollTop:n.value.scrollTop,scrollLeft:n.value.scrollLeft}))},W=i=>{!R(i)||(n.value.scrollTop=i)},A=i=>{!R(i)||(n.value.scrollLeft=i)},b=()=>{if(!n.value)return;const i=n.value.offsetHeight-S,v=n.value.offsetWidth-S,m=i**2/n.value.scrollHeight,w=v**2/n.value.scrollWidth,z=Math.max(m,e.minSize),B=Math.max(w,e.minSize);h.value=m/(i-m)/(z/(i-z)),k.value=w/(v-w)/(B/(v-B)),c.value=z+S<i?`${z}px`:"",d.value=B+S<v?`${B}px`:""};return C(()=>e.noresize,i=>{i?(l==null||l(),s==null||s()):({stop:l}=_e(u,b),s=_("resize",b))},{immediate:!0}),ye(re,ge({scrollbarElement:a,wrapElement:n})),Se(()=>{e.native||ze(()=>b())}),{ns:o,scrollbar$:a,wrap$:n,resize$:u,barRef:r,moveX:p,moveY:g,ratioX:k,ratioY:h,sizeWidth:d,sizeHeight:c,style:L,update:b,handleScroll:$,setScrollTop:W,setScrollLeft:A}}});function qe(e,t,o,l,s,a){const n=ae("bar");return E(),se("div",{ref:"scrollbar$",class:O(e.ns.b())},[X("div",{ref:"wrap$",class:O([e.wrapClass,e.ns.e("wrap"),{[e.ns.em("wrap","hidden-default")]:!e.native}]),style:Y(e.style),onScroll:t[0]||(t[0]=(...u)=>e.handleScroll&&e.handleScroll(...u))},[(E(),j(Pe(e.tag),{ref:"resize$",class:O([e.ns.e("view"),e.viewClass]),style:Y(e.viewStyle)},{default:le(()=>[$e(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?Ee("v-if",!0):(E(),j(n,{key:0,ref:"barRef",height:e.sizeHeight,width:e.sizeWidth,always:e.always,"ratio-x":e.ratioX,"ratio-y":e.ratioY},null,8,["height","width","always","ratio-x","ratio-y"]))],2)}var Je=K(Ue,[["render",qe]]);const ot=ce(Je);export{ot as E,_ as a,_e as b,xe as c,y as i,et as o,G as t,tt as u};
//# sourceMappingURL=el-scrollbar.86df220f.js.map
