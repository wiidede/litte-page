/* empty css                     *//* empty css                 *//* empty css                  */import{u as B,g as V,e as h,B as j,C as F,D as I,o,h as l,i as e,p as u,q as f,F as m,l as g,j as i,G as b,n as D,H as E,I as k,J as y,A as z,t as R,s as L,x as G}from"./vendor.77f6f7a5.js";import{_ as x,n as T}from"./index.cffd295a.js";const C=t=>(k("data-v-62b10336"),t=t(),y(),t),U={class:"setting-item optional-item"},N=C(()=>e("span",null,"Theme",-1)),P={class:"setting-item optional-item"},q=C(()=>e("span",null,"Color",-1)),H={class:"color-list"},J={class:"color-container"},O=["onClick"],K={setup(t){const n=B(),c=V(["#FF9A76","#FF9292","#42B983","#7579E7","#19D3DA","#056676","#835858"]),_=p=>n.commit("settings/setColor",p),a=h({get:()=>n.state.settings.color,set:_}),r=["Light","Dark","Follow System"],v=h({get:()=>n.state.settings.theme,set:p=>n.commit("settings/setTheme",p)});return(p,d)=>{const S=j,$=F,A=I;return o(),l(m,null,[e("div",U,[N,u($,{modelValue:i(v),"onUpdate:modelValue":d[0]||(d[0]=s=>b(v)?v.value=s:null),size:"mini"},{default:f(()=>[(o(),l(m,null,g(r,s=>u(S,{key:`theme-${s}`,label:s},null,8,["label"])),64))]),_:1},8,["modelValue"])]),e("div",P,[q,e("div",H,[e("div",J,[u(A,{modelValue:i(a),"onUpdate:modelValue":d[1]||(d[1]=s=>b(a)?a.value=s:null),"popper-class":"setting-color-picker-popper",size:i(c).includes(i(a))?"mini":"small"},null,8,["modelValue","size"])]),(o(!0),l(m,null,g(i(c),(s,w)=>(o(),l("div",{key:`color-${String(w)}`,class:"color-container"},[e("div",{class:D(["color",{active:s===i(a)}]),style:E({background:s}),onClick:ne=>_(s)},null,14,O)]))),128))])])],64)}}};var M=x(K,[["__scopeId","data-v-62b10336"]]);const Q=e("span",null,"About",-1),W=e("div",{class:"setting-item-placeholder iconfont icon-arrow-right-s-line"},null,-1),X=[Q,W],Y={setup(t){return(n,c)=>(o(),l("div",{class:"setting-item setting-go",onClick:c[0]||(c[0]=_=>i(T)("/settings/about"))},X))}};const Z=t=>(k("data-v-4ce0ec86"),t=t(),y(),t),ee={id:"view-settings"},te=Z(()=>e("h1",null,"Settings",-1)),se={name:"UserSettings"},oe=Object.assign(se,{setup(t){const n=[{name:"Appearance",component:M},{name:"Application",component:Y}];return(c,_)=>{const a=z;return o(),l("div",ee,[u(a,{"view-class":"view-settings-view"},{default:f(()=>[te,(o(),l(m,null,g(n,r=>e("div",{key:r.name,class:"setting-part card-block"},[e("h4",null,R(r.name),1),(o(),L(G(r.component)))])),64))]),_:1})])}}});var _e=x(oe,[["__scopeId","data-v-4ce0ec86"]]);export{_e as default};
//# sourceMappingURL=index.071d1c8c.js.map
