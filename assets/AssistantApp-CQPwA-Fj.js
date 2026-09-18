const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/reduxStore-JATUUP7w.js","assets/index-DM9VdmsH.js","assets/index-CIkfqCBi.css","assets/llm-CjyoqlFY.js","assets/boot-Bw5N8yip.js","assets/collectionsThunks-dS-jvtsN.js","assets/slackSocketMode-BJ0M6Wpf.js","assets/durability-CH7E7o_U.js","assets/publicImagesSlice-D32DQwGI.js","assets/api-B5G3AH7H.js","assets/userImagesSlice-JoMh2qmg.js","assets/ingestDocument-IbX6dVMh.js","assets/reduxStore-CWB6GqsP.css","assets/faultExport-7voNbqxb.js","assets/Assistant-D9Lna9Ej.js","assets/ReduxAppDataRoot-CJNruTTL.js","assets/cronStream-CPd8ExPs.js","assets/canonicalProjectPatchSet-C0C-9XZ7.js","assets/openrouter-BqRGj8Tk.js","assets/pkce-CpKKDV7R.js","assets/oauth-CKngOZSX.js","assets/App-CuaavVHn.js","assets/oauthCallbackContract-B3NnAqVX.js","assets/isObject-CGZ9pm3u.js","assets/toNumber-DbsqjrQD.js","assets/Assistant-CDuVSB-J.css"])))=>i.map(i=>d[i]);
import{r as ee,j as G,c as Nt,w as at,R as xl,s as Vu,_ as ia,d as Qi,g as Gu,e as Wu,f as Xu}from"./index-DM9VdmsH.js";import{ck as Sl,cl as ju,cm as yl,cn as $u,co as qu,cp as Yu,cq as Ku,cr as Zu,cs as Ei,ct as Ju,cu as Qu,cv as Ml,cw as ed,cx as Fa,cy as td,cz as Un,cA as or,cB as ar,u as cr,cC as ra,cD as nd,cE as id,cF as rd,k as sd,cG as od,cH as ad,cI as ka,cJ as cd,cK as ld,cL as ud,cM as dd,cN as bl,cO as hd,cP as fd,cQ as pd,cR as md,cS as El,cT as Tl,cU as wl,cV as Al,cW as gd,cX as Rl,cY as vd,cZ as _d,c_ as xd,c$ as Cl,d0 as Ba,d1 as $n,d2 as za,d3 as Sd,d4 as yd,d5 as Md,d6 as bd,d7 as Pl,d8 as sa,d9 as Ed,c5 as Td,da as wd,db as Ad,dc as Rd,dd as Cd,de as Ye,df as Pd,bn as Id,aC as Ld,aE as Il,aF as Dd,dg as Ud,dh as oa,di as Ll,dj as Dl,dk as Nd,dl as aa,dm as Od,dn as Fd,dp as kd,dq as Bd,dr as zd,ds as Hd,dt as Vd,du as ds,dv as Gd,dw as Wd,dx as Xd,dy as jd,dz as $d,dA as qd,dB as Yd,dC as Kd,dD as Zd,dE as Jd,dF as Qd,dG as eh,dH as th,dI as nh,dJ as ih,dK as rh,dL as sh,dM as Ha,dN as oh,dO as es,dP as ah,dQ as ch,aJ as lh,dR as uh,dS as dh,dT as hh,dU as fh,dV as Ul,dW as ph,dX as mh,dY as gh,dZ as vh,d_ as Va,d$ as _h,e0 as Ga,e1 as xh,e2 as Sh,e3 as yh,T as xr,e4 as Wa,e5 as Mh,B as Xa}from"./reduxStore-JATUUP7w.js";import{d as jt,a as Nl,b as ca,r as bh,c as Eh,R as Th}from"./ReduxAppDataRoot-CJNruTTL.js";import{e as wh,f as ja,g as Ah,i as Rh,u as Ch}from"./durability-CH7E7o_U.js";import{l as Ph,d as Ih,S as Ol}from"./boot-Bw5N8yip.js";import{h as Lh,l as Dh,s as ti}from"./collectionsThunks-dS-jvtsN.js";import{g as Fl,f as Uh,i as Nh,o as ro,p as Oh}from"./llm-CjyoqlFY.js";import{t as kl}from"./App-CuaavVHn.js";const Bl=ee.createContext(null);function la(){return ee.useContext(Bl)}const Fh=typeof Symbol=="function"&&Symbol.for,kh=Fh?Symbol.for("mui.nested"):"__THEME_NESTED__";function Bh(n,e){return typeof e=="function"?e(n):{...n,...e}}function zh(n){const{children:e,theme:t}=n,i=la(),r=ee.useMemo(()=>{const s=i===null?{...t}:Bh(i,t);return s!=null&&(s[kh]=i!==null),s},[t,i]);return G.jsx(Bl.Provider,{value:r,children:e})}function Hh(n){const e=Sl(),t=ju()||"",{modularCssLayers:i}=n;let r="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return!i||e!==null?r="":typeof i=="string"?r=i.replace(/mui(?!\.)/g,r):r=`@layer ${r};`,yl(()=>{const s=document.querySelector("head");if(!s)return;const o=s.firstChild;if(r){if(o&&o.hasAttribute?.("data-mui-layer-order")&&o.getAttribute("data-mui-layer-order")===t)return;const a=document.createElement("style");a.setAttribute("data-mui-layer-order",t),a.textContent=r,s.prepend(a)}else s.querySelector(`style[data-mui-layer-order="${t}"]`)?.remove()},[r,t]),r?G.jsx($u,{styles:r}):null}const $a={};function qa(n,e,t,i=!1){return ee.useMemo(()=>{const r=n&&e[n]||e;if(typeof t=="function"){const s=t(r),o=n?{...e,[n]:s}:s;return i?()=>o:o}return n?{...e,[n]:t}:{...e,...t}},[n,e,t,i])}function zl(n){const{children:e,theme:t,themeId:i}=n,r=Sl($a),s=la()||$a,o=qa(i,r,t),a=qa(i,s,t,!0),c=(i?o[i]:o).direction==="rtl",l=Hh(o);return G.jsx(zh,{theme:a,children:G.jsx(qu.Provider,{value:o,children:G.jsx(Yu,{value:c,children:G.jsxs(Ku,{value:i?o[i].components:o.components,children:[l,e]})})})})}const ua="mode",da="color-scheme",Vh="data-color-scheme";function Gh(n){const{defaultMode:e="system",defaultLightColorScheme:t="light",defaultDarkColorScheme:i="dark",modeStorageKey:r=ua,colorSchemeStorageKey:s=da,attribute:o=Vh,colorSchemeNode:a="document.documentElement",nonce:c}=n||{};let l="",u=o;if(o==="class"&&(u=".%s"),o==="data"&&(u="[data-%s]"),u.startsWith(".")){const p=u.substring(1);l+=`${a}.classList.remove('${p}'.replace('%s', light), '${p}'.replace('%s', dark));
      ${a}.classList.add('${p}'.replace('%s', colorScheme));`}const d=u.match(/\[([^[\]]+)\]/);if(d){const[p,f]=d[1].split("=");f||(l+=`${a}.removeAttribute('${p}'.replace('%s', light));
      ${a}.removeAttribute('${p}'.replace('%s', dark));`),l+=`
      ${a}.setAttribute('${p}'.replace('%s', colorScheme), ${f?`${f}.replace('%s', colorScheme)`:'""'});`}else u!==".%s"&&(l+=`${a}.setAttribute('${u}', colorScheme);`);return G.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?c:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${r}') || '${e}';
  const dark = localStorage.getItem('${s}-dark') || '${i}';
  const light = localStorage.getItem('${s}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function Wh(){}const Xh=({key:n,storageWindow:e})=>(!e&&typeof window<"u"&&(e=window),{get(t){if(typeof window>"u")return;if(!e)return t;let i;try{i=e.localStorage.getItem(n)}catch{}return i||t},set:t=>{if(e)try{e.localStorage.setItem(n,t)}catch{}},subscribe:t=>{if(!e)return Wh;const i=r=>{const s=r.newValue;r.key===n&&t(s)};return e.addEventListener("storage",i),()=>{e.removeEventListener("storage",i)}}});function hs(){}function Ya(n){if(typeof window<"u"&&typeof window.matchMedia=="function"&&n==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Hl(n,e){if(n.mode==="light"||n.mode==="system"&&n.systemMode==="light")return e("light");if(n.mode==="dark"||n.mode==="system"&&n.systemMode==="dark")return e("dark")}function jh(n){return Hl(n,e=>{if(e==="light")return n.lightColorScheme;if(e==="dark")return n.darkColorScheme})}function $h(n){const{defaultMode:e="light",defaultLightColorScheme:t,defaultDarkColorScheme:i,supportedColorSchemes:r=[],modeStorageKey:s=ua,colorSchemeStorageKey:o=da,storageWindow:a=typeof window>"u"?void 0:window,storageManager:c=Xh,noSsr:l=!1}=n,u=r.join(","),d=r.length>1,p=ee.useMemo(()=>c?.({key:s,storageWindow:a}),[c,s,a]),f=ee.useMemo(()=>c?.({key:`${o}-light`,storageWindow:a}),[c,o,a]),g=ee.useMemo(()=>c?.({key:`${o}-dark`,storageWindow:a}),[c,o,a]),[_,m]=ee.useState(()=>{const C=p?.get(e)||e,x=f?.get(t)||t,v=g?.get(i)||i;return{mode:C,systemMode:Ya(C),lightColorScheme:x,darkColorScheme:v}}),[h,E]=ee.useState(l||!d);ee.useEffect(()=>{E(!0)},[]);const T=jh(_),M=ee.useCallback(C=>{m(x=>{if(C===x.mode)return x;const v=C??e;return p?.set(v),{...x,mode:v,systemMode:Ya(v)}})},[p,e]),U=ee.useCallback(C=>{C?typeof C=="string"?C&&!u.includes(C)?console.error(`\`${C}\` does not exist in \`theme.colorSchemes\`.`):m(x=>{const v={...x};return Hl(x,S=>{S==="light"&&(f?.set(C),v.lightColorScheme=C),S==="dark"&&(g?.set(C),v.darkColorScheme=C)}),v}):m(x=>{const v={...x},S=C.light===null?t:C.light,w=C.dark===null?i:C.dark;return S&&(u.includes(S)?(v.lightColorScheme=S,f?.set(S)):console.error(`\`${S}\` does not exist in \`theme.colorSchemes\`.`)),w&&(u.includes(w)?(v.darkColorScheme=w,g?.set(w)):console.error(`\`${w}\` does not exist in \`theme.colorSchemes\`.`)),v}):m(x=>(f?.set(t),g?.set(i),{...x,lightColorScheme:t,darkColorScheme:i}))},[u,f,g,t,i]),L=ee.useCallback(C=>{_.mode==="system"&&m(x=>{const v=C?.matches?"dark":"light";return x.systemMode===v?x:{...x,systemMode:v}})},[_.mode]),A=ee.useRef(L);return A.current=L,ee.useEffect(()=>{if(typeof window.matchMedia!="function"||!d)return;const C=(...v)=>A.current(...v),x=window.matchMedia("(prefers-color-scheme: dark)");return x.addListener(C),C(x),()=>{x.removeListener(C)}},[d]),ee.useEffect(()=>{if(d){const C=p?.subscribe(S=>{(!S||["light","dark","system"].includes(S))&&M(S||e)})||hs,x=f?.subscribe(S=>{(!S||u.match(S))&&U({light:S})})||hs,v=g?.subscribe(S=>{(!S||u.match(S))&&U({dark:S})})||hs;return()=>{C(),x(),v()}}},[U,M,u,e,a,d,p,f,g]),{..._,mode:h?_.mode:void 0,systemMode:h?_.systemMode:void 0,colorScheme:h?T:void 0,setMode:M,setColorScheme:U}}const qh="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Yh(n){const{themeId:e,theme:t={},modeStorageKey:i=ua,colorSchemeStorageKey:r=da,disableTransitionOnChange:s=!1,defaultColorScheme:o,resolveTheme:a}=n,c={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},l=ee.createContext(void 0),u=()=>ee.useContext(l)||c,d={},p={};function f(h){const{children:E,theme:T,modeStorageKey:M=i,colorSchemeStorageKey:U=r,disableTransitionOnChange:L=s,storageManager:A,storageWindow:C=typeof window>"u"?void 0:window,documentNode:x=typeof document>"u"?void 0:document,colorSchemeNode:v=typeof document>"u"?void 0:document.documentElement,disableNestedContext:S=!1,disableStyleSheetGeneration:w=!1,defaultMode:I="system",forceThemeRerender:D=!1,noSsr:F}=h,N=ee.useRef(!1),Y=la(),z=ee.useContext(l),Z=!!z&&!S,re=ee.useMemo(()=>T||(typeof t=="function"?t():t),[T]),me=re[e],ve=me||re,{colorSchemes:W=d,components:k=p,cssVarPrefix:B}=ve,ie=Object.keys(W).filter(J=>!!W[J]).join(","),te=ee.useMemo(()=>ie.split(","),[ie]),de=typeof o=="string"?o:o.light,Pe=typeof o=="string"?o:o.dark,Ae=W[de]&&W[Pe]?I:W[ve.defaultColorScheme]?.palette?.mode||ve.palette?.mode,{mode:ue,setMode:pe,systemMode:he,lightColorScheme:P,darkColorScheme:ke,colorScheme:ye,setColorScheme:Le}=$h({supportedColorSchemes:te,defaultLightColorScheme:de,defaultDarkColorScheme:Pe,modeStorageKey:M,colorSchemeStorageKey:U,defaultMode:Ae,storageManager:A,storageWindow:C,noSsr:F});let _e=ue,De=ye;Z&&(_e=z.mode,De=z.colorScheme);let Re=De||ve.defaultColorScheme;ve.vars&&!D&&(Re=ve.defaultColorScheme);const He=ee.useMemo(()=>{const J=ve.generateThemeVars?.()||ve.vars,Q={...ve,components:k,colorSchemes:W,cssVarPrefix:B,vars:J};if(typeof Q.generateSpacing=="function"&&(Q.spacing=Q.generateSpacing()),Re){const j=W[Re];j&&typeof j=="object"&&Object.keys(j).forEach(le=>{j[le]&&typeof j[le]=="object"?Q[le]={...Q[le],...j[le]}:Q[le]=j[le]})}return a?a(Q):Q},[ve,Re,k,W,B]),qe=ve.colorSchemeSelector;yl(()=>{if(De&&v&&qe&&qe!=="media"){const J=qe;let Q=qe;if(J==="class"&&(Q=".%s"),J==="data"&&(Q="[data-%s]"),J?.startsWith("data-")&&!J.includes("%s")&&(Q=`[${J}="%s"]`),Q.startsWith("."))v.classList.remove(...te.map(j=>Q.substring(1).replace("%s",j))),v.classList.add(Q.substring(1).replace("%s",De));else{const j=Q.replace("%s",De).match(/\[([^\]]+)\]/);if(j){const[le,ce]=j[1].split("=");ce||te.forEach(Ee=>{v.removeAttribute(le.replace(De,Ee))}),v.setAttribute(le,ce?ce.replace(/"|'/g,""):"")}else v.setAttribute(Q,De)}}},[De,qe,v,te]),ee.useEffect(()=>{let J;if(L&&N.current&&x){const Q=x.createElement("style");Q.appendChild(x.createTextNode(qh)),x.head.appendChild(Q),window.getComputedStyle(x.body),J=setTimeout(()=>{x.head.removeChild(Q)},1)}return()=>{clearTimeout(J)}},[De,L,x]),ee.useEffect(()=>(N.current=!0,()=>{N.current=!1}),[]);const R=ee.useMemo(()=>({allColorSchemes:te,colorScheme:De,darkColorScheme:ke,lightColorScheme:P,mode:_e,setColorScheme:Le,setMode:pe,systemMode:he}),[te,De,ke,P,_e,Le,pe,he,He.colorSchemeSelector]);let y=!0;(w||ve.cssVariables===!1||Z&&Y?.cssVarPrefix===B)&&(y=!1);const X=G.jsxs(ee.Fragment,{children:[G.jsx(zl,{themeId:me?e:void 0,theme:He,children:E}),y&&G.jsx(Zu,{styles:He.generateStyleSheets?.()||[]})]});return Z?X:G.jsx(l.Provider,{value:R,children:X})}const g=typeof o=="string"?o:o.light,_=typeof o=="string"?o:o.dark;return{CssVarsProvider:f,useColorScheme:u,getInitColorSchemeScript:h=>Gh({colorSchemeStorageKey:r,defaultLightColorScheme:g,defaultDarkColorScheme:_,modeStorageKey:i,...h})}}function Kh({theme:n,...e}){const t=Ei in n?n[Ei]:void 0;return G.jsx(zl,{...e,themeId:t?Ei:void 0,theme:t||n})}const Sr={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Zh}=Yh({themeId:Ei,theme:()=>Ml({cssVariables:!0}),colorSchemeStorageKey:Sr.colorSchemeStorageKey,modeStorageKey:Sr.modeStorageKey,defaultColorScheme:{light:Sr.defaultLightColorScheme,dark:Sr.defaultDarkColorScheme},resolveTheme:n=>{const e={...n,typography:Ju(n.palette,n.typography)};return e.unstable_sx=function(i){return Qu({sx:i,theme:this})},e}}),Jh=Zh;function Qh({theme:n,...e}){const t=ee.useMemo(()=>{if(typeof n=="function")return n;const i=Ei in n?n[Ei]:n;return"colorSchemes"in i?null:"vars"in i?n:{...n,vars:null}},[n]);return t?G.jsx(Kh,{theme:t,...e}):G.jsx(Jh,{theme:n,...e})}const ef=n=>{const e=Nt.c(4),{children:t}=n,i=ee.useSyncExternalStore(ed,Fa,Fa);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],e[0]=r):r=e[0],ee.useEffect(of,r);let s;return e[1]!==t||e[2]!==i?(s=G.jsx(td.Provider,{value:i,children:t}),e[1]=t,e[2]=i,e[3]=s):s=e[3],s};function tf(n){or(n)&&ar("keyboard")}function nf(n){or(n)&&ar("pointer")}function rf(n){or(n)&&ar("touch")}function sf(n){or(n)&&ar("wheel")}function of(){if(typeof window>"u"||typeof document>"u")return;let n=0;const e=tf,t=nf,i=o=>{if(!or(o))return;const a=Date.now();a-n<1e3||(n=a,ar("pointer",a))},r=rf,s=sf;return document.addEventListener("keydown",e,{passive:!0,capture:!0}),document.addEventListener("pointerdown",t,{passive:!0,capture:!0}),document.addEventListener("pointermove",i,{passive:!0,capture:!0}),document.addEventListener("touchstart",r,{passive:!0,capture:!0}),document.addEventListener("wheel",s,{passive:!0,capture:!0}),document.addEventListener("visibilitychange",Un),window.addEventListener("focus",Un),window.addEventListener("blur",Un),Un(),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",i,{capture:!0}),document.removeEventListener("touchstart",r,{capture:!0}),document.removeEventListener("wheel",s,{capture:!0}),document.removeEventListener("visibilitychange",Un),window.removeEventListener("focus",Un),window.removeEventListener("blur",Un)}}const af=760,Ka=240,cf={warning:"Storage warning",critical:"Storage problem"},lf=`
[data-storage-alert-action] {
    transition: background-color 120ms ease, border-color 120ms ease;
}
[data-storage-alert-action]:hover {
    background-color: var(--storage-alert-hover) !important;
}
[data-storage-alert-action]:focus-visible {
    outline: 2px solid var(--storage-alert-accent);
    outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
    [data-storage-alert-action] { transition: none; }
}
`,uf=n=>{const e=Nt.c(12),{severity:t}=n;let i;e[0]!==t?(i=t==="critical"?G.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}):G.jsx("path",{d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),e[0]=t,e[1]=i):i=e[1];const r=t==="critical"?8:9,s=t==="critical"?12.5:13.5;let o;e[2]!==r||e[3]!==s?(o=G.jsx("line",{x1:"12",y1:r,x2:"12",y2:s}),e[2]=r,e[3]=s,e[4]=o):o=e[4];const a=t==="critical"?16:17,c=t==="critical"?16:17;let l;e[5]!==a||e[6]!==c?(l=G.jsx("line",{x1:"12",y1:a,x2:"12.01",y2:c}),e[5]=a,e[6]=c,e[7]=l):l=e[7];let u;return e[8]!==i||e[9]!==o||e[10]!==l?(u=G.jsxs("svg",{viewBox:"0 0 24 24",width:20,height:20,fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[i,o,l]}),e[8]=i,e[9]=o,e[10]=l,e[11]=u):u=e[11],u},df=()=>{const n=Nt.c(1);let e;return n[0]===Symbol.for("react.memo_cache_sentinel")?(e=G.jsxs("svg",{viewBox:"0 0 24 24",width:16,height:16,fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round","aria-hidden":"true",focusable:"false",children:[G.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),G.jsx("line",{x1:"6",y1:"18",x2:"18",y2:"6"})]}),n[0]=e):e=n[0],e};function hf(n){let e;if(typeof n=="string")e=n;else try{e=JSON.stringify(n)??String(n)}catch{e=String(n)}return e.length>Ka?`${e.slice(0,Ka)}…`:e}function ff(n){const e=new Date(n);return Number.isNaN(e.getTime())?"Unknown":e.toLocaleString()}const pf=n=>{const e=Nt.c(109),{alert:t}=n,[i,r]=ee.useState(!1),s=cr(),o=ee.useId(),a=t.severity==="critical"?s["status.error"]:s["status.warning"],c=s["text.primary"],l=s["text.secondary"];let u,d,p,f,g,_,m,h,E,T;if(e[0]!==t.context||e[1]!==t.createdAt||e[2]!==t.kind||e[3]!==t.message||e[4]!==t.severity||e[5]!==t.title||e[6]!==o||e[7]!==i||e[8]!==s.divider||e[9]!==s.paper||e[10]!==a||e[11]!==c||e[12]!==l){const k=Object.entries(t.context??{});let B;e[23]!==c?(B={pointerEvents:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,borderRadius:6,cursor:"pointer",fontFamily:"inherit",fontSize:"0.8125rem",fontWeight:600,lineHeight:1.2,color:c},e[23]=c,e[24]=B):B=e[24],u=B,m="alert",h=t.severity;let ie;e[25]!==c?(ie=at(c,.12),e[25]=c,e[26]=ie):ie=e[26];const te=`color-mix(in srgb, ${a} 9%, ${s.paper})`,de=`1px solid ${at(a,.55)}`,Pe=`5px solid ${a}`;let Ae;e[27]!==a||e[28]!==ie||e[29]!==te||e[30]!==de||e[31]!==Pe||e[32]!==c?(Ae={"--storage-alert-accent":a,"--storage-alert-hover":ie,pointerEvents:"auto",width:`min(${af}px, 100%)`,margin:"0 auto",boxSizing:"border-box",background:te,color:c,border:de,borderLeft:Pe,borderRadius:10,padding:"12px 12px 12px 14px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45), 0 2px 6px rgba(0, 0, 0, 0.3)",display:"flex",alignItems:"flex-start",gap:12,fontSize:"0.9rem",lineHeight:1.45},e[27]=a,e[28]=ie,e[29]=te,e[30]=de,e[31]=Pe,e[32]=c,e[33]=Ae):Ae=e[33],E=Ae;let ue;e[34]!==a?(ue=at(a,.18),e[34]=a,e[35]=ue):ue=e[35];let pe;e[36]!==a||e[37]!==ue?(pe={flex:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",width:34,height:34,borderRadius:8,background:ue,color:a,marginTop:1},e[36]=a,e[37]=ue,e[38]=pe):pe=e[38];let he;e[39]!==t.severity?(he=G.jsx(uf,{severity:t.severity}),e[39]=t.severity,e[40]=he):he=e[40],e[41]!==pe||e[42]!==he?(T=G.jsx("span",{"aria-hidden":"true",style:pe,children:he}),e[41]=pe,e[42]=he,e[43]=T):T=e[43],e[44]===Symbol.for("react.memo_cache_sentinel")?(d={flex:1,minWidth:0},e[44]=d):d=e[44];let P;e[45]!==a?(P={color:a,fontSize:"0.6875rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",lineHeight:1.2,marginBottom:3},e[45]=a,e[46]=P):P=e[46];const ke=cf[t.severity];e[47]!==P||e[48]!==ke?(p=G.jsx("div",{style:P,children:ke}),e[47]=P,e[48]=ke,e[49]=p):p=e[49];let ye;e[50]===Symbol.for("react.memo_cache_sentinel")?(ye={display:"block",fontSize:"0.95rem",fontWeight:600,lineHeight:1.35,marginBottom:4,overflowWrap:"anywhere"},e[50]=ye):ye=e[50],e[51]!==t.title?(f=G.jsx("strong",{style:ye,children:t.title}),e[51]=t.title,e[52]=f):f=e[52];let Le;e[53]!==l?(Le={margin:0,color:l,fontSize:"0.875rem",lineHeight:1.5,overflowWrap:"anywhere"},e[53]=l,e[54]=Le):Le=e[54],e[55]!==t.message||e[56]!==Le?(g=G.jsx("p",{style:Le,children:t.message}),e[55]=t.message,e[56]=Le,e[57]=g):g=e[57],_=i&&G.jsxs("dl",{id:o,style:{margin:"10px 0 0",padding:"8px 10px",display:"grid",gridTemplateColumns:"max-content minmax(0, 1fr)",columnGap:14,rowGap:3,borderRadius:6,border:`1px solid ${s.divider}`,background:at(c,.05),fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:"0.75rem",lineHeight:1.5},children:[G.jsx("dt",{style:{color:l},children:"Recorded"}),G.jsx("dd",{style:{margin:0,overflowWrap:"anywhere"},children:ff(t.createdAt)}),G.jsx("dt",{style:{color:l},children:"Kind"}),G.jsx("dd",{style:{margin:0,overflowWrap:"anywhere"},children:t.kind}),k.map(_e=>{const[De,Re]=_e;return G.jsxs(xl.Fragment,{children:[G.jsx("dt",{style:{color:l},children:De}),G.jsx("dd",{style:{margin:0,overflowWrap:"anywhere"},children:hf(Re)})]},De)})]}),e[0]=t.context,e[1]=t.createdAt,e[2]=t.kind,e[3]=t.message,e[4]=t.severity,e[5]=t.title,e[6]=o,e[7]=i,e[8]=s.divider,e[9]=s.paper,e[10]=a,e[11]=c,e[12]=l,e[13]=u,e[14]=d,e[15]=p,e[16]=f,e[17]=g,e[18]=_,e[19]=m,e[20]=h,e[21]=E,e[22]=T}else u=e[13],d=e[14],p=e[15],f=e[16],g=e[17],_=e[18],m=e[19],h=e[20],E=e[21],T=e[22];let M;e[58]===Symbol.for("react.memo_cache_sentinel")?(M={display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,marginTop:10},e[58]=M):M=e[58];let U;e[59]!==t.id?(U=()=>ja(t.id),e[59]=t.id,e[60]=U):U=e[60];const L=`1px solid ${at(c,.32)}`;let A;e[61]!==c?(A=at(c,.06),e[61]=c,e[62]=A):A=e[62];let C;e[63]!==u||e[64]!==L||e[65]!==A?(C={...u,padding:"6px 12px",border:L,background:A},e[63]=u,e[64]=L,e[65]=A,e[66]=C):C=e[66];let x;e[67]!==U||e[68]!==C?(x=G.jsx("button",{type:"button","data-storage-alert-action":"",onClick:U,style:C,children:"Dismiss"}),e[67]=U,e[68]=C,e[69]=x):x=e[69];let v;e[70]===Symbol.for("react.memo_cache_sentinel")?(v=()=>r(gf),e[70]=v):v=e[70];let S;e[71]!==u||e[72]!==l?(S={...u,padding:"6px 10px",border:"1px solid transparent",background:"transparent",color:l},e[71]=u,e[72]=l,e[73]=S):S=e[73];const w=i?"Hide details":"Show details";let I;e[74]!==o||e[75]!==i||e[76]!==S||e[77]!==w?(I=G.jsx("button",{type:"button","data-storage-alert-action":"","aria-expanded":i,"aria-controls":o,onClick:v,style:S,children:w}),e[74]=o,e[75]=i,e[76]=S,e[77]=w,e[78]=I):I=e[78];let D;e[79]!==x||e[80]!==I?(D=G.jsxs("div",{style:M,children:[x,I]}),e[79]=x,e[80]=I,e[81]=D):D=e[81];let F;e[82]!==d||e[83]!==p||e[84]!==D||e[85]!==f||e[86]!==g||e[87]!==_?(F=G.jsxs("div",{style:d,children:[p,f,g,_,D]}),e[82]=d,e[83]=p,e[84]=D,e[85]=f,e[86]=g,e[87]=_,e[88]=F):F=e[88];const N=`Dismiss: ${t.title}`;let Y;e[89]!==t.id?(Y=()=>ja(t.id),e[89]=t.id,e[90]=Y):Y=e[90];const z=`1px solid ${at(c,.22)}`;let Z;e[91]!==c?(Z=at(c,.06),e[91]=c,e[92]=Z):Z=e[92];let re;e[93]!==u||e[94]!==z||e[95]!==Z?(re={...u,flex:"none",width:32,height:32,padding:0,marginTop:-2,marginRight:-2,border:z,background:Z},e[93]=u,e[94]=z,e[95]=Z,e[96]=re):re=e[96];let me;e[97]===Symbol.for("react.memo_cache_sentinel")?(me=G.jsx(df,{}),e[97]=me):me=e[97];let ve;e[98]!==N||e[99]!==Y||e[100]!==re?(ve=G.jsx("button",{type:"button","data-storage-alert-action":"","aria-label":N,title:"Dismiss",onClick:Y,style:re,children:me}),e[98]=N,e[99]=Y,e[100]=re,e[101]=ve):ve=e[101];let W;return e[102]!==F||e[103]!==ve||e[104]!==m||e[105]!==h||e[106]!==E||e[107]!==T?(W=G.jsxs("div",{role:m,"data-severity":h,style:E,children:[T,F,ve]}),e[102]=F,e[103]=ve,e[104]=m,e[105]=h,e[106]=E,e[107]=T,e[108]=W):W=e[108],W},mf=()=>{const n=Nt.c(6),e=wh();if(e.length===0)return null;let t,i;n[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"fixed",top:0,left:0,right:0,zIndex:1e4,display:"flex",flexDirection:"column",gap:8,padding:"10px 12px",pointerEvents:"none",fontFamily:"Inter, system-ui, sans-serif"},i=G.jsx("style",{children:lf}),n[0]=t,n[1]=i):(t=n[0],i=n[1]);let r;n[2]!==e?(r=e.map(vf),n[2]=e,n[3]=r):r=n[3];let s;return n[4]!==r?(s=G.jsxs("div",{style:t,children:[i,r]}),n[4]=r,n[5]=s):s=n[5],s};function gf(n){return!n}function vf(n){return G.jsx(pf,{alert:n},n.id)}function _f(){const n=Nt.c(4),e=cr(),t=ra();let i,r;return n[0]!==e||n[1]!==t?(i=()=>{Vu(t,e)},r=[e,t],n[0]=e,n[1]=t,n[2]=i,n[3]=r):(i=n[2],r=n[3]),ee.useEffect(i,r),null}const xf="perfHarness",Sf="[data-editor-role]",yf=20;let wt=!1,so="",oo={},ao,co,ha=0,Vl=0,Wn=null,Ki=0,Zi,lo=[];const gn=[],Ci=[],ts=[],fa=[],pa=[],Zn={eventTiming:!1,longTasks:!1,longAnimationFrames:!1};function Lt(){return typeof performance<"u"?performance.now():Date.now()}function ma(){return typeof window>"u"?!1:new URL(window.location.href).searchParams.get(xf)==="1"}function ga(n){const e=n.target;return e instanceof Element&&!!e.closest(Sf)}function Mf(n){return n.ctrlKey||n.metaKey||n.altKey?!1:n.key.length===1||n.key==="Backspace"||n.key==="Delete"||n.key==="Enter"}function Gl(n){!wt||!ga(n)||!Mf(n)||(Wn={at:Lt(),target:n.target})}function Wl(n){if(!wt||!ga(n))return;const e=Lt(),t=Wn&&Wn.target===n.target&&e-Wn.at<250?Wn.at:e;Wn=null,gn.push({sequence:++ha,inputType:n.inputType||"unknown",startedAt:t,serializationMs:0,reduxUpdateMs:0})}function Xl(){for(let n=gn.length-1;n>=0;n-=1)if(gn[n].paintAt===void 0)return gn[n]}function jl(n){if(!wt||!ga(n))return;let e=Xl();e||(e={sequence:++ha,inputType:n instanceof InputEvent&&n.inputType||"unknown",startedAt:Lt(),serializationMs:0,reduxUpdateMs:0},gn.push(e)),e.inputEventAt=Lt();const t=e.sequence;window.requestAnimationFrame(()=>{const i=gn.find(s=>s.sequence===t);if(!i||i.paintAt!==void 0)return;const r=Lt();i.paintAt=r,i.inputToPaintMs=r-i.startedAt})}function fs(n,e){if(typeof PerformanceObserver>"u")return!1;try{if(!(PerformanceObserver.supportedEntryTypes?.includes(n)??!1))return!1;const i=new PerformanceObserver(r=>{if(wt)for(const s of r.getEntries())e(s)});return i.observe({type:n,buffered:!1}),lo.push(i),!0}catch{return!1}}function bf(){Zn.eventTiming=fs("event",n=>{const e=String(n.name||"");if(e!=="keydown"&&e!=="beforeinput"&&e!=="input")return;const t=Number(n.startTime);let i,r=Number.POSITIVE_INFINITY;for(const s of gn){const o=Math.abs(s.startedAt-t);o<r&&o<250&&(i=s,r=o)}i&&(i.eventTimingDurationMs=Math.max(i.eventTimingDurationMs||0,Number(n.duration)||0))}),Zn.longTasks=fs("longtask",n=>{ts.push({kind:"long-task",startedAt:Number(n.startTime),durationMs:Number(n.duration)})}),Zn.longAnimationFrames=fs("long-animation-frame",n=>{ts.push({kind:"long-animation-frame",startedAt:Number(n.startTime),durationMs:Number(n.duration),blockingDurationMs:typeof n.blockingDuration=="number"?n.blockingDuration:void 0})})}function $l(n){if(wt){if(Zi!==void 0){const e=n-Zi;e>=yf&&fa.push(e)}Zi=n,Ki=window.requestAnimationFrame($l)}}function Ef(){document.addEventListener("keydown",Gl,!0),document.addEventListener("beforeinput",Wl,!0),document.addEventListener("input",jl,!0),bf(),Zi=void 0,Ki=window.requestAnimationFrame($l)}function Za(){document.removeEventListener("keydown",Gl,!0),document.removeEventListener("beforeinput",Wl,!0),document.removeEventListener("input",jl,!0),Ki&&window.cancelAnimationFrame(Ki),Ki=0;for(const n of lo)n.disconnect();lo=[]}function Tf(){gn.length=0,Ci.length=0,ts.length=0,fa.length=0,pa.length=0,ha=0,Vl=0,Wn=null,Zi=void 0,Zn.eventTiming=!1,Zn.longTasks=!1,Zn.longAnimationFrames=!1}function Ja(){return{schemaVersion:1,name:so,metadata:{...oo},startedAt:ao,stoppedAt:co,recording:wt,support:{...Zn},inputs:gn.map(n=>({...n})),tabs:Ci.map(n=>({...n})),blockingEntries:ts.map(n=>({...n})),frameGapsMs:[...fa],marks:pa.map(n=>({...n,detail:n.detail?{...n.detail}:void 0}))}}const wf={reset(){Za(),wt=!1,so="",oo={},ao=void 0,co=void 0,Tf()},start(n,e={}){this.reset(),so=n,oo={...e},ao=Lt(),wt=!0,Ef()},mark(n,e){wt&&pa.push({label:n,at:Lt(),detail:e})},stop(){return wt&&(co=Lt()),wt=!1,Za(),Ja()},snapshot:Ja};function Af(){if(ma())return window.__assistantPerformanceHarness||(window.__assistantPerformanceHarness=wf),window.__assistantPerformanceHarness}function ky(n,e){if(!wt)return e();const t=Lt();try{return e()}finally{const i=Lt()-t,r=Xl();r&&(n==="editor-serialization"?r.serializationMs+=i:r.reduxUpdateMs+=i)}}function Rf(n,e){wt&&Ci.push({sequence:++Vl,fromTabId:n,toTabId:e,startedAt:Lt()})}function By(n){if(!wt)return;const e=[...Ci].reverse().find(i=>i.toTabId===n&&i.contentCommittedAt===void 0);if(!e)return;e.contentCommittedAt=Lt(),e.focusToCommitMs=e.contentCommittedAt-e.startedAt;const t=e.sequence;window.requestAnimationFrame(()=>{const i=Ci.find(s=>s.sequence===t);if(!i||i.paintAt!==void 0)return;const r=Lt();i.paintAt=r,i.focusToPaintMs=r-i.startedAt})}function Cf(n){if(!wt)return;const e=[...Ci].reverse().find(t=>t.toTabId===n&&t.settledAt===void 0);e&&(e.settledAt=Lt(),e.focusToSettledMs=e.settledAt-e.startedAt)}const ql=jt,Xr="assistant.migrationStress.fixture.v1",Hi="assistant.migrationStress.run.v1",va=128*1024,_a=32*1024,xa=256*1024,Pf=256,If=64,Qa=200,ps=25,ec="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_=+[]{}()<>/\\|;:,.!?~";function et(n,e){if(!n)throw new Error(e)}function Vi(n,e){const t=Number(n);return Number.isFinite(t)&&t>=0?t:e}function tc(n,e){const t=Number(n);return Number.isFinite(t)&&t>0?t:e}function Lf(n){const e=Vi(n?.reduxMiB,0);return et(e>0,"Migration stress reduxMiB must be greater than zero."),et(e<=4096,"Migration stress reduxMiB must not exceed 4096 MiB."),{reduxMiB:e,depotRatio:Math.min(64,Vi(n?.depotRatio,.1)),testRunsRatio:Math.min(64,Vi(n?.testRunsRatio,.01)),depotMiB:n.depotMiB===void 0?null:Math.min(4096,Vi(n.depotMiB,0)),testRunsMiB:n.testRunsMiB===void 0?null:Math.min(4096,Vi(n.testRunsMiB,0)),depotRecordKiB:Math.min(256*1024,tc(n.depotRecordKiB,Pf)),testRunCollectionKiB:Math.min(256*1024,tc(n.testRunCollectionKiB,If))}}function Gi(n,e){return n<=0?0:Math.ceil(n/e)}function nn(n,e,t){return Math.max(0,Math.min(e,n-t*e))}function Df(n){const e=Lf(n),t=Math.round(e.reduxMiB*1024*1024),i=Math.round(t*.7),r=Math.round(t*.26),s=Math.max(0,t-i-r),o=Math.round((e.depotMiB??e.reduxMiB*e.depotRatio)*1024*1024),a=Math.round((e.testRunsMiB??e.reduxMiB*e.testRunsRatio)*1024*1024),c=Math.round(e.depotRecordKiB*1024),l=Math.round(e.testRunCollectionKiB*1024);return{schemaVersion:1,requested:e,budgets:{reduxPayloadBytes:t,messagePayloadBytes:i,artifactPayloadBytes:r,fileSavePayloadBytes:s,depotPayloadBytes:o,testRunPayloadBytes:a},counts:{messages:Gi(i,va),artifactVersions:Gi(r,_a),fileSaves:Gi(s,xa),depotObjects:Gi(o,c),testRunCollections:Gi(a,l)},seededAt:new Date().toISOString()}}function lr(n,e){if(n<=0)return"";const t=`${e}|`;if(t.length>=n)return t.slice(0,n);const i=n-t.length;return t+ec.repeat(Math.ceil(i/ec.length)).slice(0,i)}function er(n){return`migration-stress-message-${n}`}function Yl(n){return`migration-stress-artifact-${n}`}function Kl(n){return`migration-stress-save-${n}`}function Ji(n){return`migration-stress-depot-${n}`}function Zl(n){return`migration-stress-agent-${n}`}function Uf(n,e,t){const i=er(n),r="2026-07-24T00:00:00.000Z",s=lr(t,i),o=n%3,a=o===0?{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"getFiles",arguments:"{}"}},result:{files:{[`/synthetic/${n}.txt`]:s},entryMetadata:{}},error:""}],model:"migration-stress",done:!0}:o===1?{text:s,toolUses:[],model:"migration-stress",done:!0}:{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"search",arguments:"{}"}},result:{results:[{title:`Synthetic ${n}`,content:s}]},error:""}],model:"migration-stress",done:!0};return{_timestamp:17848512e5+n,id:i,type:"response",conversationId:e,chain:[{iteration:0,response:a,stepAugments:[],errors:[],origin:"assistant",metadata:{startTime:r,endTime:r,stage:"closed"}}],origin:{provider:"test",model:"migration-stress"},state:{type:"success"},processing:{},markers:{analysis:"none",definitions:"none",facts:"none",summary:"none"},ui:{annotationMode:"none",definitionState:"none",factCheckState:"none"},permittedToolClasses:[],attachments:[],metadata:{category:"migration-stress",index:n,creationTime:r,updateTime:r},sidecars:o===2?{synthetic:{payloadBytes:t}}:{},augments:[]}}function Nf(n,e){const t=n?.chain?.[0]?.response;return e%3===0?t?.toolUses?.[0]?.result?.files?.[`/synthetic/${e}.txt`]:e%3===1?t?.text:t?.toolUses?.[0]?.result?.results?.[0]?.content}function Of(n,e){const t=Yl(n);return{id:t,name:`/artifacts/migration-stress/${n}.md`,language:"markdown",type:"file",content:lr(e,t),originMsg:er(n%Math.max(1,n+1)),createdAt:17848512e5+n,_timestamp:17848512e5+n,source:"response",versionLabel:"v1",isComplete:!0,description:"Synthetic migration stress artifact"}}function Ff(n,e){const t=Kl(n);return{id:t,label:`Synthetic save ${n}`,timestamp:17848512e5+n,status:"committed",files:[{path:`/synthetic/save-${n}.txt`,prevContentHash:`before-${n}`,prevContent:"",newContentHash:`after-${n}`,newContent:lr(e,t)}],metadata:{kind:"artifact",actor:"assistant"}}}async function kf(){const{getAssistantDataStore:n,persistor:e}=await ia(async()=>{const{getAssistantDataStore:i,persistor:r}=await import("./reduxStore-JATUUP7w.js").then(s=>s.Aq);return{getAssistantDataStore:i,persistor:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));e.pause(),await e.flush();const t=await n();return{dataStore:t,snapshot:await t.loadSnapshot()}}async function ms(n,e,t,i,r){if(i===0)return;const s=od(e,t),o=[...s.ids];for(let a=0;a<i;a+=Qa){const c=Math.min(i,a+Qa);await n.transaction(async l=>{for(let u=a;u<c;u+=1){const d=r(u);o.push(d.id),await l.putEntity(e,d.id,d)}await l.putEntityStructure(e,{ids:o,meta:s.meta})})}}async function Bf(n,e,t){const i=sd(t),r=String(i.conversations?.ids?.[0]||"migration-stress-unattached");await ms(e,"messages",i.messages,n.counts.messages,o=>Uf(o,r,nn(n.budgets.messagePayloadBytes,va,o))),await ms(e,"artifactVersions",i.artifactVersions,n.counts.artifactVersions,o=>Of(o,nn(n.budgets.artifactPayloadBytes,_a,o)));const s=i.fileSaves&&typeof i.fileSaves=="object"?i.fileSaves:{};await ms(e,"fileSaves",{ids:Array.isArray(s.ids)?s.ids:[],entities:s.entities||{},checkpoints:s.checkpoints||{},checkpointOrder:s.checkpointOrder||[]},n.counts.fileSaves,o=>Ff(o,nn(n.budgets.fileSavePayloadBytes,xa,o)))}function zf(n,e){const t=new Uint8Array(n);return t.fill(e*31+17&255),t}async function Hf(n){await ti.clearAll();const e=Math.round(n.requested.depotRecordKiB*1024);for(let t=0;t<n.counts.depotObjects;t+=ps){const i=Math.min(n.counts.depotObjects,t+ps),r=[];for(let s=t;s<i;s+=1){const o=nn(n.budgets.depotPayloadBytes,e,s);r.push({id:Ji(s),type:s%2===0?"migration-stress-text":"migration-stress-binary",obj:s%2===0?{kind:"text",payload:lr(o,Ji(s))}:{kind:"binary",payload:zf(o,s)},timestamp:17848512e5+s,owners:[`message:${er(s%Math.max(1,n.counts.messages))}`]})}await ti.storeMany(r,{chunkSize:ps})}}async function Vf(n){const e=Ph.createInstance({name:"assistant-agent-evals",storeName:"suite-runs-v2"});await e.clear();const t=Math.round(n.requested.testRunCollectionKiB*1024);for(let i=0;i<n.counts.testRunCollections;i+=1){const r=Zl(i),s=nn(n.budgets.testRunPayloadBytes,t,i);await e.setItem(`agent:${r}`,[{id:`migration-stress-run-${i}`,agentId:r,status:"completed",startedAt:17848512e5+i,completedAt:1784851201e3+i,syntheticPayload:lr(s,r)}])}}function jr(n){const e=window.localStorage.getItem(n);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function yr(n,e){window.localStorage.setItem(n,JSON.stringify(e))}function gs(){const n=ql.getState();return{engine:n.persistence.engine==="sqlite"?"sqlite":"legacy",persistencePhase:String(n.persistence.phase),messageCount:Object.values(n.conversationCatalog.entities).reduce((t,i)=>t+(i?.messageCount??0),0),artifactVersionCount:n.artifactVersions.ids.length}}async function Gf(){const n=jr(Xr);et(n?.schemaVersion===1,"Migration stress fixture metadata is missing.");const e=ql.getState();let t=0;const i=id().iterateConversations;et(i,"Complete scope iterator is required to verify cold migration fixtures.");const r=new Set;for await(const f of i())for(const g of f.messages){const _=/^migration-stress-message-(\d+)$/.exec(g.id);if(!_)continue;const m=Number(_[1]);if(m>=n.counts.messages)continue;et(!r.has(m),`Duplicate synthetic message ${m}.`);const h=Nf(g,m),E=nn(n.budgets.messagePayloadBytes,va,m);et(typeof h=="string",`Synthetic message ${m} is missing its payload.`),et(h.length===E,`Synthetic message ${m} payload length differs.`),et(h.startsWith(`${er(m)}|`)||h===er(m).slice(0,E),`Synthetic message ${m} payload marker differs.`),t+=h.length,r.add(m)}et(r.size===n.counts.messages,"Synthetic message inventory is incomplete.");let s=0;for(let f=0;f<n.counts.artifactVersions;f+=1){const g=Lh(e.artifactVersions,Yl(f)),_=nn(n.budgets.artifactPayloadBytes,_a,f);et(g,`Synthetic artifact ${f} is missing.`);const m=await Dh(g);et(m.content.length===_,`Synthetic artifact ${f} payload length differs.`),s+=m.content.length}let o=0;for(let f=0;f<n.counts.fileSaves;f+=1){const _=e.fileSaves?.entities?.[Kl(f)]?.files?.[0]?.newContent,m=nn(n.budgets.fileSavePayloadBytes,xa,f);et(typeof _=="string",`Synthetic file save ${f} is missing.`),et(_.length===m,`Synthetic file save ${f} payload length differs.`),o+=_.length}let a=0;const c=Math.round(n.requested.depotRecordKiB*1024);for(let f=0;f<n.counts.depotObjects;f+=1){const g=await ti.retrieve(Ji(f)),_=nn(n.budgets.depotPayloadBytes,c,f);if(et(g,`Synthetic depot object ${f} is missing.`),f%2===0)et(g.kind==="text"&&typeof g.payload=="string",`Synthetic depot text object ${f} is malformed.`),et(g.payload.length===_,`Synthetic depot text object ${f} payload length differs.`),et(g.payload.startsWith(`${Ji(f)}|`)||g.payload===Ji(f).slice(0,_),`Synthetic depot text object ${f} marker differs.`),a+=g.payload.length;else{et(g.kind==="binary"&&ArrayBuffer.isView(g.payload),`Synthetic depot binary object ${f} is malformed.`),et(g.payload.byteLength===_,`Synthetic depot binary object ${f} payload length differs.`);const m=new Uint8Array(g.payload.buffer,g.payload.byteOffset,g.payload.byteLength);if(m.length>0){const h=f*31+17&255;et(m[0]===h&&m[m.length-1]===h,`Synthetic depot binary object ${f} marker differs.`)}a+=g.payload.byteLength}}let l=0;const u=Math.round(n.requested.testRunCollectionKiB*1024);for(let f=0;f<n.counts.testRunCollections;f+=1){const _=(await rd(Zl(f)))[0]?.syntheticPayload,m=nn(n.budgets.testRunPayloadBytes,u,f);et(typeof _=="string",`Synthetic test-run collection ${f} is missing.`),et(_.length===m,`Synthetic test-run collection ${f} payload length differs.`),l+=_.length}const d={messages:n.counts.messages,messagePayloadBytes:t,artifactVersions:n.counts.artifactVersions,artifactPayloadBytes:s,fileSaves:n.counts.fileSaves,fileSavePayloadBytes:o,depotObjects:n.counts.depotObjects,depotPayloadBytes:a,testRunCollections:n.counts.testRunCollections,testRunPayloadBytes:l},p=e.persistence.engine==="sqlite"?"sqlite":"legacy";return et(t===n.budgets.messagePayloadBytes,"Synthetic message payload total differs."),et(s===n.budgets.artifactPayloadBytes,"Synthetic artifact payload total differs."),et(o===n.budgets.fileSavePayloadBytes,"Synthetic file-save payload total differs."),et(a===n.budgets.depotPayloadBytes,"Synthetic depot payload total differs."),et(l===n.budgets.testRunPayloadBytes,"Synthetic test-run payload total differs."),{plan:n,engine:p,verified:d}}const nc={async seedFixture(n){et(gs().engine==="legacy","Migration stress fixtures can only be seeded in legacy mode.");const e=Df(n);window.localStorage.removeItem(Hi);const{dataStore:t,snapshot:i}=await kf();return await Bf(e,t,i),await Hf(e),await Vf(e),yr(Xr,e),e},getFixturePlan:()=>jr(Xr),getRunState:()=>jr(Hi),getStateSummary:gs,startMigration(){et(gs().engine==="legacy","Migration stress cutover must start in legacy mode.");const n=jr(Xr);et(n?.schemaVersion===1,"Seed the migration stress fixture before starting cutover.");const e={schemaVersion:1,status:"running",startedAt:new Date().toISOString(),phases:[]};return yr(Hi,e),nd.startMigration(t=>{e.phases.push({phase:t.phase,at:new Date().toISOString(),...t.detail===void 0?{}:{detail:t.detail},...t.stats===void 0?{}:{stats:t.stats}}),t.phase==="reloading"&&(e.status="reload-requested"),yr(Hi,e)}).catch(t=>{e.status="failed",e.error=t instanceof Error?t.message:String(t),yr(Hi,e)}),e},verifyFixture:Gf};function Wf(){if(ma()&&new URL(window.location.href).searchParams.get("migrationStress")==="1")return window.__assistantMigrationStress=nc,()=>{window.__assistantMigrationStress===nc&&delete window.__assistantMigrationStress}}function Xf(n,e,t){const i=e.getMessageAncestry(n,t,"resource");return{ancestryMessages:i.length,chainEntries:i.reduce((r,s)=>r+(s.type==="response"?s.chain.length:0),0),sidecarKeys:i.reduce((r,s)=>r+Object.keys(s.sidecars??{}).length,0),attachments:i.reduce((r,s)=>r+(s.type==="user"?s.attachments.length:0),0)}}function ic(n,e,t,i){if(!t)throw new Error(`Performance scenario tab is missing: ${i.tabId}`);if(t.conversationId!==i.conversationId)throw new Error(`Performance scenario tab ${i.tabId} points to the wrong conversation`);if(t.messageId!==i.routeMessageId)throw new Error(`Performance scenario tab ${i.tabId} points to the wrong route message`);n.getConversationById(i.conversationId),n.requireAncestryMessage(i.routeMessageId);const r=Xf(n,e,i.routeMessageId);for(const s of Object.keys(i.fingerprint))if(r[s]!==i.fingerprint[s])throw new Error(`Performance scenario fingerprint mismatch for ${i.tabId}.${s}: expected ${i.fingerprint[s]}, got ${r[s]}`);return r}const qn=()=>ca;let uo=0,An=null,Ti,tr,ns;function Jn(){return jt.getState()}function jf(){const n=Jn();return n.ui.tabs.find(e=>e.id===n.ui.activeTabId)??null}function ho(){Ti&&qn().scopes.release(Ti),Ti=void 0,An=null,tr=void 0}function $r(){if(!Ti||!An)return;const n=Ti.requireMessage(An);return n.type==="user"?n:void 0}function $f(){ns?.(),ns=jt.subscribe(()=>{const n=$r()?.text;n!==tr&&(tr=n,uo+=1)})}function rc(){const n=Jn(),e=jf();return{activeTabId:n.ui.activeTabId,activeConversationId:e?.conversationId??null,activeRouteMessageId:e?.messageId??null,draftMessageId:n.ui.draftMessageId,messageCount:Object.values(n.conversationCatalog.entities).reduce((t,i)=>t+(i?.messageCount??0),0),conversationCount:n.conversationCatalog.ids.length,artifactVersionCount:n.artifactVersions.ids.length,persistence:{engine:n.persistence.engine,phase:n.persistence.phase,pendingWrites:n.persistence.pendingWrites},diagnostics:{memoryDiagnostics:!!n.settings.features.memoryDiagnostics,memoryTimelineDiagnostics:!!n.settings.features.memoryTimelineDiagnostics}}}async function qf(n){const t=Jn().ui.tabs.find(i=>i.id===n);return t?qn().scopes.withMessage(t.messageId,{reason:"performance-quiescence"},i=>qn().reads.getMessageAncestry(i,t.messageId,"resource").some(r=>r.type==="response"&&(r.state.type==="created"||r.state.type==="in-progress"))):!1}function Yf(n){return`[data-performance-conversation-surface="true"][data-active-tab-id="${CSS.escape(n)}"][data-conversation-ready="true"]`}function sc(n){return!!document.querySelector(`[data-editor-role="message"][data-message-id="${CSS.escape(n)}"] [contenteditable="true"]`)}async function vs(n){for(let e=0;e<n;e+=1)await new Promise(t=>window.requestAnimationFrame(()=>t()))}async function Jl(n){const e=Jn();return{persistenceReady:e.persistence.phase==="ready",pendingWrites:e.persistence.pendingWrites,activeTabMatches:e.ui.activeTabId===n,surfaceReady:!!document.querySelector(Yf(n)),activeResponse:await qf(n)}}async function oc(n){const e=await Jl(n);return e.persistenceReady&&e.pendingWrites===0&&e.activeTabMatches&&e.surfaceReady&&!e.activeResponse}const ac={async prepareDeterministicMode(){jt.dispatch(ka({path:"features.memoryDiagnostics",value:!1})),jt.dispatch(ka({path:"features.memoryTimelineDiagnostics",value:!1})),cd(!1),ld(!1),localStorage.setItem("assistant.performanceDiagnostics.enabled","false"),localStorage.setItem("assistant.memoryTimeline.desired","false"),await vs(2)},getStateSummary:rc,async assertScenario(n){const e=qn(),t=await e.scopes.acquireConversations([n.slow.conversationId,n.fast.conversationId],{reason:"performance-scenario-validation"});try{const i=Jn(),r=Nl.services.sources.messageRendering.getDraftUserMessage(n.draft.messageId);if(i.ui.draftMessageId!==n.draft.messageId)throw new Error(`Performance scenario draft mismatch: expected ${n.draft.messageId}, got ${i.ui.draftMessageId??"<none>"}`);if(r.text.length!==n.draft.expectedTextLength)throw new Error(`Performance scenario draft length mismatch: expected ${n.draft.expectedTextLength}, got ${r.text.length}`);return{slow:ic(t,e.reads,i.ui.tabs.find(s=>s.id===n.slow.tabId),n.slow),fast:ic(t,e.reads,i.ui.tabs.find(s=>s.id===n.fast.tabId),n.fast)}}finally{e.scopes.release(t)}},focusTab(n){const e=Jn();if(!e.ui.tabs.some(t=>t.id===n))throw new Error(`Cannot focus missing performance scenario tab ${n}`);ho(),Rf(e.ui.activeTabId,n),jt.dispatch(ad(n))},async awaitQuiescence({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(await document.fonts?.ready;performance.now()<t;){if(await oc(n)&&(await vs(2),await oc(n))){Cf(n);return}await new Promise(i=>window.setTimeout(i,25))}throw new Error(`Performance scenario did not become quiescent for ${n}: ${JSON.stringify({summary:rc(),readiness:await Jl(n)})}`)},async awaitEditableUserMessage({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(;performance.now()<t;){const i=Jn(),r=i.ui.tabs.find(s=>s.id===n);if(i.ui.activeTabId===n&&r&&sc(r.messageId)){const s=await qn().scopes.acquireConversation(r.conversationId,{requiredMessageId:r.messageId,reason:"performance-editor-observation"}),o=s.requireMessage(r.messageId);if(o.type!=="user")throw qn().scopes.release(s),new Error(`Editable performance target ${r.messageId} is not a user message`);if(await vs(2),sc(o.id))return ho(),Ti=s,An=o.id,tr=o.text,{messageId:o.id};qn().scopes.release(s)}await new Promise(s=>window.setTimeout(s,25))}throw new Error(`Editable user message did not mount for tab ${n}`)},getEditorTargetDescriptor(){const n=$r();if(!An||!n)throw new Error("Performance scenario editor target is unavailable");return{messageId:An,textLength:n.text.length,attachmentCount:n.attachments.length,updateCount:uo}},assertEditorText(n){const e=$r();if(!e)throw new Error("Performance scenario editor target is unavailable");if(e.text!==n)throw new Error(`Performance scenario final editor text mismatch: expected length ${n.length}, got ${e.text.length}`);return!0},resetEditorUpdateCount(n){if(n&&n!==An)throw new Error("Acquire the editable performance target before resetting its counter");const e=$r();if(!An||!e)throw new Error("Cannot reset performance counter without an acquired user message");tr=e.text,uo=0}};function Kf(){if(ma())return Af(),$f(),window.__assistantPerformanceDriver=ac,()=>{ns?.(),ns=void 0,ho(),window.__assistantPerformanceDriver===ac&&delete window.__assistantPerformanceDriver}}const Zf="assistant.remote-control-instance.v1",is="instance",Jf="identity",Ql=4e3,Qf=128;function ep(){return new Promise((n,e)=>{const t=indexedDB.open(Zf,1);let i=!1;const r=setTimeout(()=>{i=!0,e(new Error("Remote-control instance storage is blocked."))},Ql);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(is)||t.result.createObjectStore(is)},t.onsuccess=()=>{if(clearTimeout(r),i){t.result.close();return}i=!0,t.result.onversionchange=()=>t.result.close(),n(t.result)},t.onerror=()=>{clearTimeout(r),i=!0,e(t.error||new Error("Remote-control instance storage failed."))}})}function tp(){const n=async(e,t)=>{const i=await ep();try{return await new Promise((r,s)=>{const o=i.transaction(is,e);let a;const c=setTimeout(()=>{try{o.abort()}catch{}s(new Error("Remote-control instance storage timed out."))},Ql);o.oncomplete=()=>{clearTimeout(c),r(a)},o.onabort=o.onerror=()=>{clearTimeout(c),s(o.error||new Error("Remote-control instance storage failed."))};const l=u=>{clearTimeout(c);try{o.abort()}catch{}s(u)};try{t(o.objectStore(is),u=>{a=u},l)}catch(u){l(u)}})}finally{i.close()}};return{read:e=>n("readonly",(t,i)=>{const r=t.get(e);r.onsuccess=()=>i(r.result)}),update:(e,t)=>n("readwrite",(i,r,s)=>{const o=i.get(e);o.onsuccess=()=>{try{const a=t(o.result??void 0);i.put(a,e),r(a)}catch(a){s(a)}}})}}function np(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}function ip(n){return typeof n=="string"&&n.length>0&&n.length<=Qf&&!/[\s/\\]/.test(n)}function rp(n){return!np(n)||!ip(n.instanceId)||typeof n.createdAt!="string"?null:{instanceId:n.instanceId,createdAt:n.createdAt}}function sp(n="",e=""){const t=`${n} ${e}`.toLowerCase(),i=/iphone|ipad|ipod/.test(t)?"iOS":/android/.test(t)?"Android":/darwin|mac/.test(t)?"macOS":/win/.test(t)?"Windows":/cros/.test(t)?"ChromeOS":/linux|x11/.test(t)?"Linux":"this device",r=/Edg\//.test(e)?"Edge":/OPR\//.test(e)?"Opera":/Firefox\//.test(e)?"Firefox":/Chrome\//.test(e)?"Chrome":/Safari\//.test(e)?"Safari":"Browser";return{os:i,browser:r}}function op(n,e,t){const i=typeof navigator<"u"?navigator:void 0,{os:r,browser:s}=sp(e??i?.platform??"",i?.userAgent??"");return n==="desktop"?`Desktop app on ${r}`:`${s} on ${r}`}function ap(n,e={}){const t=e.randomUUID??(()=>globalThis.crypto.randomUUID()),i=e.now??(()=>new Date);let r=null;return{getInstanceIdentity(){if(r)return r;const s=n.update(Jf,o=>rp(o)??{instanceId:t(),createdAt:i().toISOString()});return r=s.catch(o=>{throw r===s&&(r=null),o}),r}}}let _s=null;function cp(){return _s||(_s=ap(tp())),_s}const eu=()=>cp().getInstanceIdentity();function lp(n){if(!n||typeof n!="object")return!1;const e=n;return dd(e.peerId)&&(e.kind==="instance"||e.kind==="pod")&&typeof e.peerOnline=="boolean"&&typeof e.lastSeenAt=="string"&&typeof e.clients=="number"}function up(n){return[...n].sort((e,t)=>{if(e.peerOnline!==t.peerOnline)return e.peerOnline?-1:1;const i=(e.status?.name??"").localeCompare(t.status?.name??"");return i!==0?i:t.lastSeenAt.localeCompare(e.lastSeenAt)})}async function dp(n={}){const{baseURL:e,fetchArguments:t}=await Fl(ud.replace(/^\/+/,"")),i={Accept:"application/json"},r=Uh().settings.apiKeys.proxy||"";r&&(i["x-proxy-key"]=r);const o=await(n.fetchImpl??Nh)(e,{method:"GET",credentials:t.credentials,headers:i,signal:n.signal});if(!o.ok){const l=await o.text().catch(()=>"");throw new Error(`Failed to list peers (${o.status}): ${l||o.statusText}`)}const a=await o.json(),c=a&&typeof a=="object"?a.peers:void 0;if(!Array.isArray(c))throw new Error("Malformed peer list");return up(c.filter(lp))}const cc=Object.freeze({});function fo(n){if(n.status?.instanceId)return n.status.instanceId;const e=bl(n.peerId);return e?.kind==="instance"?e.id:null}function hp(n,e){const t=n.status;return{instanceId:e,peerId:n.peerId,...t?.name?{name:t.name}:{},...t?.hostKind?{hostKind:t.hostKind}:{},...t?.platform?{platform:t.platform}:{},online:n.peerOnline,lastSeenAt:n.lastSeenAt,acceptsCreate:t?.acceptsCreate!==!1,...Array.isArray(t?.workspaces)?{workspaces:t.workspaces}:{}}}function lc(n,e){return!!n&&n.peerId===e.peerId&&n.name===e.name&&n.hostKind===e.hostKind&&n.platform===e.platform&&n.online===e.online&&n.lastSeenAt===e.lastSeenAt&&n.acceptsCreate===e.acceptsCreate&&n.statusRevision===e.statusRevision&&n.workspaces===e.workspaces}function fp(){let n=cc;const e=new Set,t=new Map,i=r=>{n=Object.freeze(r);for(const s of Array.from(e))try{s()}catch(o){console.error("[remote-control] presence listener failed:",o)}};return{getSnapshot:()=>n,subscribe(r){return e.add(r),()=>{e.delete(r)}},get:r=>n[r],setPeers(r,s){const o={};for(const u of r){if(u.kind!=="instance")continue;const d=fo(u);if(!d||d===s)continue;const p=hp(u,d),f=n[d];f?.statusRevision!==void 0&&(p.statusRevision=f.statusRevision,!p.workspaces&&f.workspaces&&(p.workspaces=f.workspaces)),o[d]=f&&lc(f,p)?f:p}const a=Object.keys(n),c=Object.keys(o);(a.length!==c.length||c.some(u=>n[u]!==o[u]))&&i(o)},updateFromClientState(r,s,o=()=>new Date){const a=bl(r),c=s.status?.instanceId??(a?.kind==="instance"?a.id:null);if(!c)return;const l=n[c],u=s.status,d=!!u&&u!==t.get(c);u&&t.set(c,u);const p={instanceId:c,peerId:r,...u?.name?{name:u.name}:l?.name?{name:l.name}:{},...u?.hostKind?{hostKind:u.hostKind}:l?.hostKind?{hostKind:l.hostKind}:{},...u?.platform?{platform:u.platform}:l?.platform?{platform:l.platform}:{},online:s.peerOnline,lastSeenAt:s.peerOnline?o().toISOString():s.peerSince??l?.lastSeenAt??o().toISOString(),acceptsCreate:u?u.acceptsCreate!==!1:l?.acceptsCreate??!0,...Array.isArray(u?.workspaces)?{workspaces:u.workspaces}:l?.workspaces?{workspaces:l.workspaces}:{}},f=l?.statusRevision;d?p.statusRevision=(f??0)+1:f!==void 0&&(p.statusRevision=f),!(l&&lc(l,{...p,lastSeenAt:l.lastSeenAt}))&&i({...n,[c]:p})},clear(){t.clear(),n!==cc&&i({})}}}const tu=fp();function zy(n){const e=tu;return ee.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}const pp=3e4,mp=500,gp=200,vp=5,_p=1440*60*1e3;function xs(n){return n instanceof Error?n.message:String(n)}function xp(){return typeof document>"u"||document.visibilityState!=="hidden"}function Sp(n){if(typeof document>"u")return()=>{};const e=()=>{document.visibilityState==="visible"&&n()};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}function Ss(n){const e=[];for(const t of n.ids){const i=n.entities[t];i?.remote&&e.push(i)}return e}function yp(n){return!!n&&typeof n=="object"&&Array.isArray(n.conversations)}function Mp(n){const e=n.store,t=n.fetchPeers??dp,i=n.registry??pd,r=n.presence??tu,s=n.syncCatalog??md,o=n.now??(()=>new Date),a=n.refreshIntervalMs??pp,c=n.statusDebounceMs??mp,l=n.listPageLimit??gp,u=n.maxListPages??vp,d=n.absentRetentionMs??_p,p=n.isDocumentVisible??xp,f=n.subscribeVisibility??Sp;let g=!1,_=null,m=[],h=null,E=null,T,M,U=0;const L=new Map;let A=null,C=null,x=null,v=0,S=null;const w=()=>e.getState().workspaces,I=(ue,pe,he)=>{try{e.dispatch(s({instanceId:ue,workspaceId:pe,conversations:he}))}catch(P){M=xs(P),console.warn("[remote-control] could not sync the remote conversation catalog:",P)}},D=ue=>{if(ue.length!==0){for(const pe of ue)I(pe.remote.instanceId,pe.id,[]);e.dispatch(fd({ids:ue.map(pe=>pe.id)}))}},F=(ue,pe,he,P)=>{!he||!Array.isArray(he.workspaces)||e.dispatch(hd({instanceId:ue,peerId:pe,...he.name?{instanceName:he.name}:{},...P?{lastSeenAt:P}:{},workspaces:he.workspaces}))},N=(ue,pe,he)=>{if(!he||!pe||!Array.isArray(pe.workspaces))return;const P=new Set(pe.workspaces.map(ye=>ye.id)),ke=Ss(w()).filter(ye=>ye.remote.instanceId===ue&&!P.has(ye.remote.remoteWorkspaceId));D(ke)},Y=ue=>{const pe=new Map;for(const ke of ue){if(ke.kind!=="instance")continue;const ye=fo(ke);!ye||ye===_||pe.set(ye,ke)}for(const[ke,ye]of pe)F(ke,ye.peerId,ye.status,ye.lastSeenAt),N(ke,ye.status,ye.peerOnline);const he=new Map;for(const ke of Ss(w())){const ye=he.get(ke.remote.instanceId)??[];ye.push(ke),he.set(ke.remote.instanceId,ye)}const P=o().getTime()-d;for(const[ke,ye]of he){if(ke===_){D(ye);continue}if(pe.has(ke))continue;const Le=ye.filter(_e=>{const De=_e.remote.lastSeenAt?Date.parse(_e.remote.lastSeenAt):NaN;return!Number.isFinite(De)||De<P});D(Le)}},z=()=>E||(E=(async()=>{try{const ue=await t();if(!g)return;r.setPeers(ue,_),Y(ue),T=o().toISOString(),M=void 0}catch(ue){M=xs(ue)}finally{E=null}g&&ve()})(),E),Z=()=>{p()&&z()},re=()=>{S&&clearTimeout(S),S=setTimeout(()=>{S=null,k()},c)},me=(ue,pe,he,P=!1)=>{r.updateFromClientState(ue,he,o);const ke=fo({peerId:ue,status:he.status}),ye=!!he.status&&he.status!==pe.lastStatus;ye&&(pe.lastStatus=he.status,ke&&ke!==_&&(F(ke,ue,he.status,o().toISOString()),N(ke,he.status,he.peerOnline)));const Le=he.connection==="open"&&he.peerOnline,_e=Le&&!pe.wasReady;pe.wasReady=Le,!P&&C&&ue===C.peerId&&(_e?k():ye&&Le&&re())},ve=()=>{const ue=new Set;for(const pe of Ss(w()))ue.add(pe.remote.peerId);C&&ue.add(C.peerId);for(const[pe,he]of[...L]){const P=i.get(pe);(!ue.has(pe)||P!==he.client)&&(he.unsubscribe(),L.delete(pe))}for(const pe of ue){if(L.has(pe))continue;const he=i.get(pe);if(!he)continue;const P={client:he,unsubscribe:()=>{},wasReady:!1};P.unsubscribe=he.subscribe(ke=>me(pe,P,ke)),L.set(pe,P),me(pe,P,he.getState(),!0)}},W=()=>{for(const ue of L.values())ue.unsubscribe();L.clear()},k=async()=>{const ue=C,pe=A,he=x?.client;if(!ue||!pe||!he)return;const P=he.getState();if(P.connection!=="open"||!P.peerOnline)return;const ke=++v,ye=[];try{let Le;for(let _e=0;_e<u;_e+=1){const De=await he.submit({type:"instance.listConversations",workspaceId:ue.remoteWorkspaceId,limit:l,...Le?{cursor:Le}:{}});if(!yp(De.result)||(ye.push(...De.result.conversations),!De.result.nextCursor))break;Le=De.result.nextCursor}}catch(Le){M=xs(Le);return}!g||ke!==v||A!==pe||(U=ye.length,I(ue.instanceId,pe,ye))},B=()=>{S&&(clearTimeout(S),S=null),v+=1;const ue=x;x=null,C=null,A=null,ue?.release()},ie=()=>{const ue=w(),pe=ue.activeWorkspaceId?ue.entities[ue.activeWorkspaceId]:void 0,he=pe?.remote;if(!pe||!he){x&&(B(),ve());return}if(x&&A===pe.id&&C?.peerId===he.peerId)return;const P=x;x=i.acquire(he.peerId,n.getExecutor()),A=pe.id,C=he,v+=1,P?.release(),ve(),k(),z()};let te;const de=()=>{if(!g)return;const ue=w().activeWorkspaceId,pe=ue?w().entities[ue]:void 0,he=pe?.remote?`${ue}:${pe.remote.peerId}`:ue;he!==te&&(te=he,ie())},Pe=()=>{if(g){g=!1,h&&(clearInterval(h),h=null);for(const ue of m.splice(0))ue();W(),B(),te=void 0}};return{start:()=>(g||(g=!0,m=[e.subscribe(de),f(Z)],h=setInterval(Z,a),n.getOwnInstanceId().then(ue=>{_=ue}).catch(ue=>{console.warn("[remote-control] instance identity unavailable; remote workspaces will include every instance:",ue)}).then(()=>{g&&(de(),z())})),Pe),stop:Pe,refresh:z,relistActive:k,getDiagnostics:()=>({started:g,ownInstanceId:_,activeWorkspaceId:A,activePeerId:C?.peerId??null,lastRefreshAt:T,lastError:M,listedConversations:U})}}let ys=null,Ms=null;function bp(){return Ms||(Ms=Tl(jt,ca,wl())),Ms}function Ep(){return ys||(ys=Mp({store:jt,getExecutor:bp,getOwnInstanceId:()=>eu().then(n=>n.instanceId)})),ys}function Tp(){const n=Nt.c(3),t=!!El().canUseRemoteControl;let i,r;n[0]!==t?(i=()=>{if(t)return Ep().start()},r=[t],n[0]=t,n[1]=i,n[2]=r):(i=n[1],r=n[2]),ee.useEffect(i,r)}const uc=gd,wp=vd;function nu(n){return Number.isFinite(n)?new Date(n).toISOString():new Date(0).toISOString()}function iu(n){return!n.hidden&&!n.remoteMirror}function dc(n,e){return(e.updatedAt||0)-(n.updatedAt||0)||n.id.localeCompare(e.id)}function Ap(n){return`${n.updatedAt||0}:${n.id}`}function Rp(n){if(typeof n!="string"||!n)return null;const e=n.indexOf(":");if(e<=0)return null;const t=Number(n.slice(0,e)),i=n.slice(e+1);return Number.isFinite(t)&&i?{updatedAt:t,id:i}:null}function Cp(n){return{id:n.id,title:n.name||n.id,updatedAt:nu(n.updatedAt),...n.workspaceId?{workspaceId:n.workspaceId}:{},rootMessageId:n.rootMessageId,...typeof n.messageCount=="number"?{messageCount:n.messageCount}:{},...typeof n.responseCount=="number"?{responseCount:n.responseCount}:{}}}function Pp(n,e={}){const t=typeof e.query=="string"?e.query.trim().toLowerCase():"",i=typeof e.workspaceId=="string"&&e.workspaceId?e.workspaceId:void 0,r=typeof e.limit=="number"&&Number.isFinite(e.limit)?Math.floor(e.limit):uc,s=Math.max(1,Math.min(uc,r)),o=n.filter(p=>iu(p)&&(!i||p.workspaceId===i)&&(!t||(p.name||p.id).toLowerCase().includes(t))).sort(dc),a=Rp(e.cursor),c=a?o.findIndex(p=>dc(p,{updatedAt:a.updatedAt,id:a.id})>0):0,l=c<0?o.length:c,u=o.slice(l,l+s),d=u[u.length-1];return{conversations:u.map(Cp),...d&&l+s<o.length?{nextCursor:Ap(d)}:{},total:o.length}}function Ip(n){const e=new Map;for(const t of n.descriptors){if(!iu(t)||!t.workspaceId)continue;const i=e.get(t.workspaceId)??{count:0,updatedAt:0};i.count+=1,i.updatedAt=Math.max(i.updatedAt,t.updatedAt||0),e.set(t.workspaceId,i)}return n.workspaces.filter(t=>!!t&&typeof t.id=="string"&&t.id&&!t.remote&&!Rl(t.id)).map(t=>{const i=e.get(t.id),r=Math.max(i?.updatedAt??0,t.updatedAt||0);return{id:t.id,name:(t.name||"Workspace").slice(0,Al),...typeof t.hue=="number"&&Number.isFinite(t.hue)?{hue:t.hue}:{},...typeof t.icon=="string"&&t.icon?{icon:t.icon}:{},conversationCount:i?.count??0,updatedAt:nu(r),...n.colleagueWorkspaceIds?.has(t.id)?{colleague:!0}:{}}}).sort((t,i)=>i.updatedAt.localeCompare(t.updatedAt)||t.name.localeCompare(i.name)).slice(0,wp)}function Lp(n){return{instanceId:n.instanceId,name:n.name.trim().slice(0,Al),...n.platform?{platform:n.platform}:{},acceptsCreate:n.settings?.acceptRemoteHostRequests!==!1,workspaces:Ip({workspaces:n.workspaces,descriptors:n.descriptors,colleagueWorkspaceIds:n.colleagueWorkspaceIds})}}const Dp=new Set(["no explicit intent provided.","unspecified","n/a","none"]);function si(n){return n.trim().toLowerCase().replace(/[.\s]+$/g,"")}function Up(n){const e=[],t=n.commandFacts?.executionContext,i=t?.workspaceProjection;n.runnerKind==="environment"?e.push("Runs inside an isolated, throwaway execution environment — not on your machine or workspace."):n.runnerKind==="local-helper"?e.push("Runs directly on your local machine."):i?.enabled===!0?e.push(i.writesDiscardedOnExit===!0||i.writePolicy==="discard"?"Sandboxed run: any file writes are discarded when the command finishes.":"Runs against a projected overlay of the workspace."):t?.writesPersistToWorkspace===!0&&e.push("Runs against the live workspace — any file writes persist.");const r=t?.vfsLoad?.requestedPathCount;return typeof r=="number"&&r>0&&e.push(`Afterwards, ${r} file path${r===1?"":"s"} will be captured back into the conversation.`),e}function Np(n){const e=n.intentSummary?.trim()||"Terminal command",t=n.statedIntent?.description?.trim(),i=t&&!Dp.has(t.toLowerCase())&&si(t)!==si(e)?t:void 0,r=n.justification?.trim(),s=r&&si(r)!==si(e)&&(!i||si(r)!==si(i))?r:void 0;return{headline:e,what:i,why:s,contextNotes:Up(n)}}const Op={none:0,safe:1,dangerous:2},Fp={none:0,"non-sensitive":1,sensitive:2},kp={none:0,"anti-pattern":1,misalignment:2};function bs(n,e){let t;for(const i of e)i===void 0||n[i]===void 0||(t===void 0||n[i]>n[t])&&(t=i);return t}function Bp(n){return n==="dangerous"?{tone:"concern",text:"Makes changes that are hard to undo (source edits, deletions, remote or system state)."}:n==="safe"?{tone:"ok",text:"Only makes recoverable changes (caches, build artifacts, temporary files)."}:n==="none"?{tone:"ok",text:"Does not modify any state."}:null}function zp(n){return n==="sensitive"?{tone:"concern",text:"Touches or could reveal secrets — credentials, keys, or environment contents."}:null}function Hp(n){return n==="misalignment"?{tone:"concern",text:"Shows signs of actively misaligned behaviour — treat this request with real suspicion."}:n==="anti-pattern"?{tone:"concern",text:"Sidesteps the integrated tooling this system prefers for this kind of task (a flagged anti-pattern)."}:null}const Es=6;function Vp(n){const e=Object.values(n.review?.witnesses||{}).filter(f=>!!f),t=e.flatMap(f=>f.effects||[]),i=[],r=[],s=[],o=Bp(bs(Op,e.map(f=>f.mutation)));o&&(o.tone==="concern"?i:s).push(o);const a=zp(bs(Fp,e.map(f=>f.disclosure)));a&&i.push(a);const c=Hp(bs(kp,e.map(f=>f.alignment)));c&&i.push(c),e.some(f=>f.status==="failed")&&i.push({tone:"concern",text:"An independent reviewer did not finish, so part of this assessment is unknown."});for(const f of["deny","concern","maybe"])for(const g of t)g.kind===f&&i.push({tone:"concern",text:g.headline,detail:g.detail});for(const f of t)f.kind==="will"?r.push({tone:"info",text:f.headline,detail:f.detail}):f.kind==="tip"&&r.push({tone:"info",text:`Tip: ${f.headline}`,detail:f.detail});for(const f of t)f.kind==="wont"&&s.push({tone:"ok",text:f.headline,detail:f.detail});const l=new Set,u=[],d=(f,g)=>{const _=f.text.trim().toLowerCase();!_||l.has(_)||u.length>=g||(l.add(_),u.push(f))};for(const f of i)d(f,Es);const p=s.length>0?1:0;for(const f of r)d(f,Es-p);for(const f of s)d(f,Es);return u}const Gp={"near-certain":"near-certain",strong:"strong confidence",plausible:"a tentative read",uncertain:"low confidence"};function hc(n){return n==="approve-once"?{text:"Assistant thinks you would approve this",tone:"approve"}:n==="deny"?{text:"Assistant thinks you would want this denied",tone:"deny"}:n==="override-block"?{text:"Assistant thinks you would override the block and run this anyway",tone:"caution"}:n==="ask-user"?{text:"Assistant thinks this one needs your own judgement",tone:"neutral"}:{text:`Assistant predicts ${n}`,tone:"neutral"}}function Hy(n){return n==="approve-once"?"approve this once":n==="deny"?"deny this":n==="override-block"?"override the block and run this":n==="ask-user"?"leave this to you":n}function Wp(n){return n==="approve-once"?"approving this":n==="deny"?"denying this":n==="override-block"?"overriding the block":n==="ask-user"?"asking you":n}function Vy(n){const{prediction:e,draft:t,pending:i}=n;if(e){if(e.confidenceTier==="insufficient-data")return{settled:!0,tone:"neutral",headline:"Assistant does not have enough evidence about your preferences to predict this one.",commandExplanation:e.commandExplanation,rationale:e.rationale,caveat:e.insufficientDataReason?`Missing evidence: ${e.insufficientDataReason}`:void 0};const r=hc(e.predictedAction),s=Gp[e.confidenceTier]||e.confidenceTier;return{settled:!0,tone:r.tone,headline:`${r.text} (${s}).`,commandExplanation:e.commandExplanation,rationale:e.rationale,caveat:e.insufficientDataReason?`Why not automated: ${e.insufficientDataReason}`:void 0}}return t?.predictedAction?{settled:!1,tone:hc(t.predictedAction).tone,headline:`Assistant is leaning towards ${Wp(t.predictedAction)}…`,commandExplanation:t.commandExplanation,rationale:t.rationale}:t||i?{settled:!1,tone:"neutral",headline:"Assistant is checking your calibrated preferences…",commandExplanation:t?.commandExplanation}:null}const Gy=Object.freeze({right:"approve",left:"deny",up:"details",down:"defer"});function Wy(n,e){if(e.length===0)return n;const t=new Set(e),i=[],r=[];for(const s of n)(t.has(s.id)?r:i).push(s);return[...i,...r]}function Xy(n,e,t){const i=Math.abs(n),r=Math.abs(e);return i<t&&r<t?null:i>=r?n>0?"right":"left":e>0?"down":"up"}const Ni="Only terminal commands have a prediction to defer to. Choose approve or deny.",Xp="Terminal preference prediction is off for this target, so there is nothing to defer to. Turn it on in Settings → Workspace Files → VS Code Bridge.";function jp(n,e){const t=n.payload?.result,i=t?.review?.decision,r=i?.decision==="block",s=i?.canOverride===!0,o=i?.severity,a=o==="block"?"block":o==="danger"?"danger":o==="caution"||o==="unknown"?"caution":o==="safe"?"safe":"info",c=r?{id:"override-block",label:"Override and run",shortLabel:"Override",tooltip:s?"Run this command anyway, knowingly proceeding past the reviewers’ hard concern.":"This block cannot be overridden, so the command cannot be run from here.",tone:"danger",enabled:s,disabledReason:s?void 0:"The reviewers raised a hard concern that cannot be overridden. Deny, or ask for a narrower command.",plan:{kind:"terminal",decision:"override-block"}}:{id:"approve-once",label:"Approve once",shortLabel:"Approve",tooltip:"Run this exact command one time only. Similar future commands will ask again.",tone:"approve",enabled:!0,plan:{kind:"terminal",decision:"approve-once"}},l=e.terminalPredictionEnabled!==!1,u=[t?.connectionName,t?_d(t):void 0].filter(Boolean),d=t?Np(t):void 0,p=t?Vp(t):[];return{approvalId:n.id,kind:n.kind,eyebrow:u.join(" · ")||n.detail||"Terminal command",headline:t?.intentSummary||n.title||"Terminal command",bodyLabel:d?.what?"What Assistant wants to do":void 0,body:d?.what||i?.summary||n.detail,assistantReason:d?.why,contextNotes:d?.contextNotes,tone:a,badge:r?"blocked":o,monospace:t?.command,highlightsLabel:p.length>0?"What the reviewers found":void 0,highlights:p.map(f=>({tone:f.tone,text:f.text})),approve:c,deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Reject this command. Nothing runs, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"terminal",decision:"deny"}},defer:l?{available:!0}:{available:!1,unavailableReason:Xp},hasDetails:!0}}function $p(n){const e=n.payload,t=e?.activatable||[],i=[];return t.length>0&&i.push({tone:"info",text:`Activates: ${t.join(", ")}`}),e?.alreadyActive?.length&&i.push({tone:"ok",text:`Already active: ${e.alreadyActive.join(", ")}`}),e?.denied?.length&&i.push({tone:"concern",text:`Unavailable: ${e.denied.join(", ")}`}),{approvalId:n.id,kind:n.kind,eyebrow:"Capability activation",headline:n.title||"Activate capabilities",body:e?.reason||n.detail,tone:"info",highlights:i,approve:{id:"allow",label:"Allow",shortLabel:"Allow",tooltip:"Activate these capabilities for this conversation thread.",tone:"approve",enabled:t.length>0,disabledReason:t.length>0?void 0:"There is nothing left to activate for this request.",plan:{kind:"capability",decision:"allow"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Leave these capabilities switched off.",tone:"deny",enabled:!0,plan:{kind:"capability",decision:"deny"}},secondary:{id:"always-allow",label:"Always allow",shortLabel:"Always",tooltip:"Activate now and stop asking for these capabilities.",tone:"neutral",enabled:t.length>0,plan:{kind:"capability",decision:"always-allow"}},defer:{available:!1,unavailableReason:Ni},hasDetails:!0}}function qp(n){const e=n.payload,t=e?.escalations||[],i=t.slice(0,3).map(r=>({tone:"concern",text:`${r.taskId}: ${r.routedModel} costs ${r.ratio.toFixed(1)}× ${r.comparableModel}`}));return{approvalId:n.id,kind:n.kind,eyebrow:"Subagent cost gate",headline:n.title||"Routed subagent models cost more than expected",body:e?`${t.length} route${t.length===1?"":"s"} exceed the ${e.thresholdMultiplier}× threshold. The eligible parent profile is ${e.parentModel}.`:n.detail,tone:"caution",badge:"cost",highlights:i,approve:{id:"use_routed",label:"Use routed models",shortLabel:"Routed",tooltip:"Spend the extra and run the subagents on the models the router chose.",tone:"approve",enabled:!0,plan:{kind:"cost-escalation",choice:"use_routed"}},deny:{id:"use_comparable",label:"Use parent profile",shortLabel:"Cheaper",tooltip:"Downgrade the escalated routes to the eligible parent profile instead.",tone:"neutral",enabled:!0,plan:{kind:"cost-escalation",choice:"use_comparable"}},defer:{available:!1,unavailableReason:Ni},hasDetails:!0}}function Yp(n){const e=n.payload,t=[];if(e){t.push({tone:"info",text:`Image: ${e.image}${e.profileId?` (profile ${e.profileId})`:""}`}),t.push({tone:e.network==="none"?"ok":"info",text:e.network==="none"?"Network: fully isolated (no network access)":"Network: outbound only (no inbound access; host networking is never used)"}),t.push(e.workspaceMount?{tone:"concern",text:`Mounts workspace root '${e.workspaceMount.rootName}' read-only at /workspace-src`}:{tone:"ok",text:"No workspace folders are mounted into the container"}),e.gpu&&t.push({tone:"concern",text:"Requests GPU access (--gpus all)"});const i=[e.resources?.cpuCores?`${e.resources.cpuCores} CPU cores`:null,e.resources?.memoryMb?`${e.resources.memoryMb} MiB memory`:null].filter(Boolean);t.push({tone:"ok",text:`Hardened sandbox: all capabilities dropped, no privilege escalation, resource-capped${i.length?` (${i.join(", ")})`:""}`})}return{approvalId:n.id,kind:n.kind,eyebrow:e?.connectionName?`Local Docker · ${e.connectionName}`:"Local Docker environment",headline:n.title||"Run a local Docker environment?",body:"Assistant wants to start a sandboxed Docker container on your machine. After you approve, commands inside this container run without further per-command prompts until it is destroyed.",tone:"caution",badge:"local",monospace:e?.image,highlightsLabel:"What this container gets",highlights:t,approve:{id:"approve-once",label:"Run container",shortLabel:"Run",tooltip:"Start this container on your machine with the listed sandbox settings.",tone:"approve",enabled:!0,plan:{kind:"local-environment-create",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Do not start the container. Nothing runs, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"local-environment-create",decision:"deny"}},defer:{available:!1,unavailableReason:Ni},hasDetails:!0}}function fc(n,e){return`${!n||n==="NONE"?"CPU-only":`${n} accelerator`}${e?", high-RAM":", standard RAM"}`}function Kp(n){const e=n.payload,t=[];e&&(t.push({tone:"info",text:`Account: ${e.accountEmail||"the connected Google Workspace account"}`}),e.planLabel&&t.push({tone:"info",text:`Plan: ${e.planLabel}`}),typeof e.currentBalance=="number"&&Number.isFinite(e.currentBalance)&&t.push({tone:"info",text:`Observed compute units: ${e.currentBalance}${e.checkedAt?` at ${new Date(e.checkedAt).toLocaleString()}`:""} (rechecked after approval)`}),t.push({tone:e.accelerator&&e.accelerator!=="NONE"?"concern":"info",text:`Machine: ${fc(e.accelerator,e.highMemory)}`}),t.push({tone:"concern",text:"Spends your Colab compute units until the environment is destroyed or the runtime idles out"}),t.push({tone:"concern",text:"Consumer Google service under Google's terms (outside the university's Workspace agreement) — keep sensitive, confidential, or identifiable data off this runtime"}),t.push({tone:"ok",text:"Google credentials are transient server-request credentials, never persisted on the gateway"}),t.push({tone:"concern",text:"Paid benefits and positive units must remain verified. Managed work stops on depletion or verification expiry (at most 180 seconds); closing this tab stops renewal. Allocation release is separate and may remain pending. Storage is non-durable; this is not a spending cap."}));const i=fc(e?.accelerator,e?.highMemory);return{approvalId:n.id,kind:n.kind,eyebrow:e?.accountEmail?`Google Colab · ${e.accountEmail}`:"Google Colab runtime",headline:n.title||"Assign a Google Colab runtime?",body:`Assistant wants to assign a Google Colab runtime on ${e?.accountEmail?`${e.accountEmail}'s`:"your"} account (${i}${e?.planLabel?`, ${e.planLabel}`:""}). This spends your Colab compute units until the environment is destroyed or the runtime idles out. Colab is a consumer Google service governed by Google's terms rather than the university's Workspace agreement, so keep sensitive, confidential, or personally identifiable data off this runtime. After you approve, commands inside the runtime run without further per-command prompts.`,tone:"caution",badge:"colab",monospace:e?.sessionName,highlightsLabel:"What this assigns",highlights:t,approve:{id:"approve-once",label:"Assign runtime",shortLabel:"Assign",tooltip:"Assign this Colab runtime on your Google account now.",tone:"approve",enabled:!0,plan:{kind:"colab-environment-create",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Do not assign a runtime. Nothing is created, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"colab-environment-create",decision:"deny"}},defer:{available:!1,unavailableReason:Ni},hasDetails:!0}}function Zp(n){const t=n.payload?.plan;return{approvalId:n.id,kind:n.kind,eyebrow:"External Linux · NON-PROTECTED",headline:n.title,body:xd,tone:"danger",badge:"unrestricted host access",highlights:[{tone:"concern",text:`Intended machine/account: ${t?.targetDescription||"unspecified"} (not independently verified)`},{tone:"info",text:`Environment: ${t?.name||"unspecified"}; workspace: ${t?.workspacePath||"host default"} (not an isolation boundary)`},{tone:"concern",text:t?.launchMethod==="assistant"?"Assistant may launch on this target through an existing authorized connection, under its execution controls.":"Manual launch only: you run the one-liner; Assistant is not authorized to install it."},{tone:"info",text:`Lifetime: ${t?.timeoutMinutes?`${t.timeoutMinutes} minutes`:"gateway default"}. No root package installation, persistent service or VM deletion is authorized.`},{tone:"concern",text:"Approval issues a single-use bearer command, not proof of host identity. Keep it secret and run it only on this machine/account. This grants ongoing execution and transfers, not merely a download."}],approve:{id:"approve-once",label:"Allow non-protected connection",shortLabel:"Allow",tooltip:"Issue the connection command for this exact machine/account and launch method.",tone:"danger",enabled:!!t,plan:{kind:"external-environment-connect",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Issue no bootstrap command.",tone:"deny",enabled:!0,plan:{kind:"external-environment-connect",decision:"deny"}},defer:{available:!1,unavailableReason:"Explicit human approval is required. Prediction cannot approve this connection."},hasDetails:!0}}const Jp="the other instance";function Qp(n){const e=n.payload,t=e?.approval,i=e?.peerName?.trim()||Jp,r=t?.remoteResolvable===!0,s=r?t.options:[],o=s.find(d=>!d.destructive),a=s.find(d=>d.destructive),c=s.find(d=>d!==o&&d!==a),l=(d,p)=>({id:d.id,label:d.label,shortLabel:d.label,tooltip:`Send "${d.label}" to ${i}. The decision takes effect there; nothing runs on this device.`,tone:p,enabled:!0,plan:{kind:"remote-proxy",optionId:d.id}}),u=[];return t&&u.push({tone:"info",text:`Raised on ${i} as a ${t.kind} request; your decision is sent there`}),t&&!r&&u.push({tone:"concern",text:`Must be answered on ${i}`}),e?.lastError&&u.push({tone:"concern",text:`Last attempt failed: ${e.lastError}`}),{approvalId:n.id,kind:n.kind,eyebrow:`Remote · ${i}`,headline:t?.title||n.title||"Approval on another instance",body:t&&!r?`Answer this on ${i}`:t?.summary||n.detail,tone:"info",badge:"remote",highlights:u,approve:o?l(o,"approve"):void 0,deny:a?l(a,"deny"):void 0,secondary:c?l(c,c.destructive?"danger":"neutral"):void 0,defer:{available:!1,unavailableReason:Ni},hasDetails:!0}}function em(n){return{approvalId:n.id,kind:n.kind,eyebrow:"Request",headline:n.title||"Approval request",body:n.detail||"This request must be answered where it was raised.",tone:"info",highlights:[],defer:{available:!1,unavailableReason:Ni},hasDetails:!0}}function tm(n,e={}){return n.kind==="terminal-command"?jp(n,e):n.kind==="capability-activation"?$p(n):n.kind==="subagent-cost-escalation"?qp(n):n.kind==="local-environment-create"?Yp(n):n.kind==="colab-environment-create"?Kp(n):n.kind==="external-environment-connect"?Zp(n):n.kind==="remote-proxy"?Qp(n):em(n)}function jy(n,e){if(e==="details")return{details:!0};if(e==="defer")return n.defer.available?{defer:!0}:{blockedReason:n.defer.unavailableReason||"This request cannot be deferred."};const t=e==="approve"?n.approve:n.deny;return t?t.enabled?{action:t}:{blockedReason:t.disabledReason||"That action is not available for this request."}:{blockedReason:"This request must be answered where it was raised. Open the details to jump to it."}}const Ts=new Set;function nm(n,e){const t=Cl(n);if(!t||t.kind!=="external-environment-connect"||Ts.has(n))return!1;const i=t.payload;return Date.now()>=Math.min(t.expiresAt??0,i.expiresAt)?(Ba(n,"External connection approval expired. No command was requested."),!1):e==="deny"?$n(n,{decision:"deny"}):(Ts.add(n),za(`/${encodeURIComponent(i.requestId)}/approve`,{}).then(r=>{if(!r.sessionId||r.provider!=="external"||r.external?.executionMode!=="non-protected"||!r.bootstrapCommand)throw new Error("External approval returned an invalid connection receipt. Reconcile the request before retrying.");if(!(Sd(n)&&$n(n,{decision:"approve-once",result:r})))return za(`/${encodeURIComponent(i.requestId)}/cancel`,{}).then(()=>{})}).catch(r=>Ba(n,r instanceof Error?r.message:"External approval failed; reconcile the request before retrying.")).finally(()=>Ts.delete(n)),!0)}function im(n,e){switch(e.kind){case"terminal":return $n(n.id,{decision:e.decision});case"capability":return bd(n.id,e.decision),!0;case"cost-escalation":return Md(n.id,{choice:e.choice,remember:!1}),!0;case"local-environment-create":return $n(n.id,{decision:e.decision});case"colab-environment-create":return $n(n.id,{decision:e.decision});case"external-environment-connect":return nm(n.id,e.decision);case"remote-proxy":return $n(n.id,{optionId:e.optionId});case"defer":return yd(n.id),!0;default:return!1}}const rm=new Set(["mcp-local-start","mcp-elicitation","local-environment-create"]),sm={"mcp-local-start":"Starts a local process on the hosting computer; approve it there.","mcp-elicitation":"Needs a form answer; open it on the hosting computer.","local-environment-create":"Grants command execution on the hosting computer; approve it there."},om=new Set(["remote-proxy"]);function am(n){return!n||!n.enabled?null:{option:{id:n.id,label:n.label,destructive:n.tone==="danger"||n.tone==="deny"?!0:void 0},plan:{kind:"deck",plan:n.plan}}}function cm(n){return Number.isFinite(n)?new Date(n).toISOString():new Date(0).toISOString()}function ru(n){const e=new Map,t={id:n.id,kind:n.kind,title:n.title||"Approval request",summary:n.detail||"",createdAt:cm(n.createdAt),...typeof n.messageId=="string"?{messageId:n.messageId}:{}};if(rm.has(n.kind))return{approval:{...t,summary:sm[n.kind]||t.summary,remoteResolvable:!1,options:[]},plans:e};if(n.kind==="mcp-tool-call")return e.set("approve-once",{kind:"mcp-decision",decision:"approve-once"}),e.set("deny",{kind:"mcp-decision",decision:"deny"}),{approval:{...t,remoteResolvable:!0,options:[{id:"approve-once",label:"Approve once"},{id:"deny",label:"Deny",destructive:!0}]},plans:e};const i=tm(n),r=[];for(const o of[i.approve,i.secondary,i.deny]){const a=am(o);!a||e.has(a.option.id)||(e.set(a.option.id,a.plan),r.push(a.option))}const s=[i.headline!==t.title?i.headline:void 0,i.body].filter(o=>!!(o&&o.trim())).join(" — ")||t.summary;return{approval:{...t,summary:s,remoteResolvable:r.length>0,options:r},plans:e}}function lm(n,e,t=sa()){const i=t.filter(r=>r.conversationId===e&&!om.has(r.kind)).map(r=>ru(r).approval);return{type:"conversation.approvals",peerId:n,conversationId:e,approvals:i}}function um(n,e){const t=Cl(n);if(!t)return{ok:!1,code:"not-found",message:"That approval is no longer pending."};const i=ru(t);if(!i.approval.remoteResolvable)return{ok:!1,code:"not-remote-resolvable",message:i.approval.summary||"This approval must be answered on the hosting computer."};const r=i.plans.get(e);return r?(r.kind==="deck"?im(t,r.plan):$n(n,{decision:r.decision}))?{ok:!0}:{ok:!1,code:"not-found",message:"That approval was already answered."}:{ok:!1,code:"unsupported",message:`Unknown option '${e}' for approval ${t.kind}.`}}function dm(n){const e=n.subscribe??Pl,t=n.getSnapshot??sa;let i=null,r=null,s=Promise.resolve();const o=a=>{const c=lm(n.peerId,n.conversationId,t()),l=JSON.stringify(c.approvals);return!a&&l===r||(r=l,s=s.then(()=>n.sink(c)).catch(u=>{r=null,n.onError?.(u)})),s};return{start(){i||(i=e(()=>{o(!1)}),o(!0))},publish:()=>o(!0),stop(){i?.(),i=null,r=null}}}function mt(n){return typeof n=="string"&&n.trim().length>0}function po(n){return n instanceof Error?n.message:String(n)}function hm(n=Ed){const e=new Map;return{get(t){return t?e.get(t):void 0},remember(t,i){if(t)for(e.delete(t),e.set(t,i);e.size>n;){const r=e.keys().next().value;if(r===void 0)break;e.delete(r)}}}}const fm=new Set(["subscribe","reconnect","resync","manual","overflow"]);function pc(n){return!!n&&typeof n=="object"&&typeof n.id=="string"&&typeof n.model=="string"}function pm(n){if(!n||typeof n!="object")return;const e=n;if(!pc(e.primary))return;const t=Array.isArray(e.secondary)?e.secondary.filter(pc):[];return{primary:{id:e.primary.id,model:e.primary.model},secondary:t}}function mm(n){return Array.isArray(n)?n.filter(e=>mt(e)):[]}function Mr(n){return mt(n)?n:void 0}function mc(n){if(!n||typeof n!="object")return!1;const e=n;return mt(e.id)&&mt(e.type)&&"obj"in e&&Array.isArray(e.owners)&&e.owners.length>0&&e.owners.every(t=>mt(t))}const gm=new Set(["auto","suggest"]),vm=new Set(["model","feature-tag","system"]);function _m(n){if(!n||typeof n!="object"||Array.isArray(n))return;const e=n;if(!e.features||typeof e.features!="object"||Array.isArray(e.features))return;const t={};for(const[r,s]of Object.entries(e.features))typeof s=="boolean"&&r&&(t[r]=s);if(typeof e.tier!="string"||!gm.has(e.tier)||typeof e.source!="string"||!vm.has(e.source))return;const i=Array.isArray(e.dependencies)?e.dependencies.filter(r=>typeof r=="string"):[];return{features:t,tier:e.tier,source:e.source,dependencies:i,...typeof e.approved=="boolean"?{approved:e.approved}:{},...typeof e.reason=="string"?{reason:e.reason}:{}}}const xm=new Set(["serverInstancedExecution","remoteControl"]),Sm=new Set(Td.map(n=>n.key));function ym(n){if(!n||typeof n!="object"||Array.isArray(n))return;const e={};for(const[t,i]of Object.entries(n))typeof i!="boolean"||!Sm.has(t)||xm.has(t)||Ud(t)&&(e[t]=i);return Object.keys(e).length?e:void 0}function Mm(n){const{executor:e,store:t,peerId:i}=n,r=n.cancelMessage??((v,S)=>Id.getInstance().cancelMessage(v,S)),s=n.resolveApproval??um,o=n.respondToInteraction??((v,S,w)=>e.residency.scopes.withMessage(v,{reason:"peer-resolve-interaction"},I=>bh(I,v,S,w))),a=n.storeDepotObject??(async v=>{const S=[v.owners[0],...v.owners.slice(1)];await ti.store(v.id,v.type,v.obj,{owners:S,timestamp:v.timestamp})}),c=n.hasDepotObjects??(v=>ti.hasMany(v)),l={chunkBytes:n.depotTransfer?.chunkBytes??Cd,maxObjectBytes:n.depotTransfer?.maxObjectBytes??Rd,maxPendingBytes:n.depotTransfer?.maxPendingBytes??Ad,ttlMs:n.depotTransfer?.ttlMs??wd},u=n.now??(()=>Date.now()),d=new Map,p=hm(n.idempotencyLruSize),f=(v,S,w)=>({type:"command.ack",peerId:i,commandId:v.commandId,ok:!0,...S?{conversationId:S,revision:{revision:n.getRevision(S)}}:{},...w===void 0?{}:{result:w}}),g=(v,S,w,I,D)=>({type:"command.ack",peerId:i,commandId:v.commandId,ok:!1,...S?{conversationId:S}:{},error:{code:w,message:I,...D===void 0?{}:{details:D}}}),_=v=>e.residency.scopes.withLocalConversation(v,{reason:"peer-send-message"},S=>{const w=Eh(S.getConversation(),I=>S.getMessage(I));return w.leafMessageId||w.rootMessageId}),m=async(v,S)=>{let w=!1;try{w=await e.residency.scopes.withMessage(S,{reason:"peer-command"},I=>{const D=I.getMessage(S);return!!D&&D.conversationId===v})}catch{w=!1}if(!w)throw new Ye("not-found",`Message ${S} is not part of this conversation.`)},h=async(v,S)=>{if(mt(S))return await m(v,S),S;const w=await _(v);if(!w)throw new Ye("not-found","The conversation has no message to reply to.");return w},E=(v,S)=>{const w=v.expectedRevision?.revision,I=n.getRevision(S);if(typeof w=="number"&&w<I)throw new Ye("stale-revision",`Expected revision ${w} but the conversation is at ${I}.`)},T=async v=>{const S=(await c([v.id])).has(v.id);return await a(v),S?{objectId:v.id,existed:!0}:{objectId:v.id}},M=()=>{const v=u()-l.ttlMs;for(const[S,w]of d)w.updatedAt<v&&d.delete(S)},U=()=>{let v=0;for(const S of d.values())v+=S.bytes;return v},L=async v=>{M();const S=v.transferId,w=v.index,I=v.count,D=v.data,F=v.totalBytes;if(!mt(S)||typeof D!="string"||!Number.isInteger(w)||!Number.isInteger(I)||!Number.isInteger(F)||I<1||w<0||w>=I||F<0)throw new Ye("unsupported","upsertDepotObjectChunk requires transferId, index < count and totalBytes.");if(F>l.maxObjectBytes)throw d.delete(S),new Ye("unsupported",`Depot objects over ${l.maxObjectBytes} bytes are not accepted by this peer.`,{details:{maxObjectBytes:l.maxObjectBytes}});if(D.length>l.chunkBytes)throw d.delete(S),new Ye("unsupported",`Depot chunks over ${l.chunkBytes} bytes are not accepted by this peer.`,{details:{chunkBytes:l.chunkBytes}});let N=d.get(S);if(N){if(N.count!==I||N.totalBytes!==F)throw d.delete(S),new Ye("unsupported",`Depot transfer ${S} changed shape between chunks.`)}else{if(U()+F>l.maxPendingBytes)throw new Ye("unsupported","This peer has too many unfinished depot transfers; retry later.",{retryable:!0});N={chunks:new Array(I),received:0,count:I,totalBytes:F,bytes:0,updatedAt:u()},d.set(S,N)}if(N.chunks[w]!==void 0)throw new Ye("unsupported",`Depot transfer ${S} already received chunk ${w}.`);if(N.chunks[w]=D,N.received+=1,N.bytes+=D.length,N.updatedAt=u(),N.bytes>N.totalBytes)throw d.delete(S),new Ye("unsupported",`Depot transfer ${S} exceeded its declared ${N.totalBytes} bytes.`);if(N.received<N.count)return null;d.delete(S);const Y=N.chunks.join("");if(Y.length!==N.totalBytes)throw new Ye("unsupported",`Depot transfer ${S} reassembled to ${Y.length} bytes, expected ${N.totalBytes}.`);let z;try{z=JSON.parse(Y)}catch{throw new Ye("unsupported",`Depot transfer ${S} is not valid JSON.`)}if(!mc(z))throw new Ye("unsupported",`Depot transfer ${S} is not a complete depot item.`);return T(z)},A=async(v,S,w)=>{const I=typeof w.text=="string"?w.text:"",D=mm(w.attachmentIds);if(!I.trim()&&D.length===0)throw new Ye("unsupported",`${String(w.type)} requires text or attachments.`);if(E(v,S),D.length){const z=await c(D),Z=D.filter(re=>!z.has(re));if(Z.length)throw new Ye("not-found",`This peer does not hold ${Z.length} of the message's attachments; ship them with upsertDepotObject first.`,{details:{missing:Z}})}const F=await h(S,w.parentId),N=_m(w.capabilityOverlay),Y=Il({id:Mr(w.messageId),conversationId:S,text:I,attachments:D,...N?{capabilityOverlay:N}:{}});return await t.dispatch(Dd({parentId:F,message:Y})).unwrap(),Y.id},C=async(v,S)=>{const w=S.overrides&&typeof S.overrides=="object"?S.overrides:void 0,I=ym(w?.features),D=await t.dispatch(Ld({messageId:v,responseId:Mr(S.responseId),overrideCart:pm(S.overrideCart),...I?{settingsOverride:{features:I}}:{}})).unwrap();return{messageId:v,responseId:D.responseId}},x=async v=>{const S=v.command,w=String(S.type);let I;if(Pd(w)){if(!mt(v.conversationId))throw new Ye("unsupported",`${w} requires a conversationId.`);if(!n.canServeConversation(v.conversationId))throw new Ye("not-found",`Conversation ${v.conversationId} is not available on this peer.`);I=v.conversationId}const D=F=>({conversationId:I,result:F});switch(S.type){case"ping":return D();case"requestHydrate":{const F=fm.has(String(S.reason))?S.reason:"manual";return await n.requestHydrate(I,F),D()}case"sendMessage":{const F=await A(v,I,S);return D(await C(F,S))}case"upsertUserMessage":{const N={messageId:await A(v,I,S)};return D(N)}case"requestResponse":{if(!mt(S.messageId))throw new Ye("unsupported","requestResponse requires a messageId.");return await m(I,S.messageId),D(await C(S.messageId,S))}case"upsertDepotObject":{if(!mc(S.item))throw new Ye("unsupported","upsertDepotObject requires a complete depot item.");return D(await T(S.item))}case"upsertDepotObjectChunk":{const F=await L(S);return D(F??void 0)}case"cancelResponse":{if(!mt(S.messageId))throw new Ye("unsupported","cancelResponse requires a messageId.");if(!r(S.messageId,mt(S.reason)?S.reason:"Cancelled by a remote client"))throw new Ye("no-live-run",`Message ${S.messageId} has no cancellable run.`);return D()}case"resolveInteraction":{if(!mt(S.messageId)||!mt(S.requestId))throw new Ye("unsupported","resolveInteraction requires messageId and requestId.");await m(I,S.messageId);const F=S.response,N=F&&typeof F=="object"&&!Array.isArray(F)?{requestId:S.requestId,...F}:{requestId:S.requestId,payload:F};if(!await o(S.messageId,S.requestId,N))throw new Ye("no-live-run",`Message ${S.messageId} has no live run to answer.`);return D()}case"resolveApproval":{if(!mt(S.approvalId)||!mt(S.optionId))throw new Ye("unsupported","resolveApproval requires approvalId and optionId.");const F=s(S.approvalId,S.optionId);if(!F.ok)throw new Ye(F.code,F.message);return D()}case"setRuntimeSettings":throw new Ye("unsupported","setRuntimeSettings is not supported by this peer.");case"shutdown":{if(!n.onShutdown)throw new Ye("unsupported","This peer cannot be shut down remotely.");return await n.onShutdown({type:"shutdown",...mt(S.reason)?{reason:S.reason}:{},...typeof S.uploadFinalBundle=="boolean"?{uploadFinalBundle:S.uploadFinalBundle}:{}}),D()}case"instance.listConversations":{if(!n.listConversations)throw new Ye("unsupported","This peer does not list conversations.");const F=n.listConversations({query:typeof S.query=="string"?S.query:void 0,limit:typeof S.limit=="number"?S.limit:void 0,workspaceId:Mr(S.workspaceId),cursor:typeof S.cursor=="string"&&S.cursor?S.cursor:void 0});return D(F)}case"instance.createConversation":{if(!n.createConversation)throw new Ye("not-allowed","This peer does not accept conversation creation requests.");const F=await n.createConversation({title:mt(S.title)?S.title.trim().slice(0,200):void 0,firstMessage:mt(S.firstMessage)?S.firstMessage:void 0,workspaceId:Mr(S.workspaceId)});return D(F)}default:throw new Ye("unsupported",`Unsupported command type '${w}'.`)}};return{async handle(v){const S=p.get(v.idempotencyKey);if(S)return{...S,commandId:v.commandId};let w;try{const I=await x(v);w=f(v,I.conversationId,I.result)}catch(I){const D=mt(v.conversationId)?v.conversationId:void 0;w=I instanceof Ye?g(v,D,I.code,I.message,I.details):g(v,D,"internal",po(I))}return p.remember(v.idempotencyKey,w),w}}}const bm=new Set(["created","in-progress"]);function Em(n){const e=n.sidecars?.agentRuntime;return e?.pendingInteractions?Object.values(e.pendingInteractions).some(t=>t?.status==="pending"):!1}function Tm(n,e,t=[]){const i=n.conversations.entities[e],r=i?.tree?.relationships??{},s=new Set(Object.keys(r));i?.tree?.root&&s.add(i.tree.root);let o=null,a=null;for(const c of s){const l=n.messages.entities[c];if(!(!l||l.conversationId!==e)){if(l.userInteraction?.required||Em(l)){o||(o={status:"blocked",messageId:c,responseId:l.type==="response"?c:void 0});continue}l.type==="response"&&bm.has(l.state?.type)&&(!a||l._timestamp>a.message._timestamp)&&(a={message:l})}}if(!o){const c=t.find(l=>l.conversationId===e||l.messageId!==void 0&&s.has(l.messageId));c&&(o={status:"blocked",messageId:c.messageId})}return o||(a?{status:"running",messageId:a.message.id,responseId:a.message.id}:{status:"idle"})}async function wm(n){const e=n.reason==="final"?[]:Ll(),t=await Dl(n.executor,n.conversationId,{reason:"peer-publish-snapshot"},o=>Nd(n.executor,o,n.conversationId)),i=aa(t),r=n.captureArtifactWorkingSet?n.captureArtifactWorkingSet(i,e):Od(i,e);return{frame:{type:"conversation.hydrate",protocolVersion:oa,peerId:n.peerId,sessionId:n.sessionId,conversationId:n.conversationId,revision:{revision:n.revision},snapshot:t,reason:n.reason,artifactWorkingSet:r},snapshot:t}}function Am(n){return{type:"conversation.hydratePatch",protocolVersion:oa,peerId:n.peerId,sessionId:n.sessionId,conversationId:n.conversationId,baseRevision:{revision:n.baseRevision},revision:{revision:n.revision},delta:n.delta,encoding:"jsondiffpatch",artifactWorkingSet:n.artifactWorkingSet}}function Rm(n){return{type:"run.status",protocolVersion:oa,peerId:n.peerId,...n.sessionId?{sessionId:n.sessionId}:{},conversationId:n.conversationId,status:n.status,...n.messageId?{messageId:n.messageId}:{},...n.responseId?{responseId:n.responseId}:{},revision:n.revision===void 0?void 0:{revision:n.revision},error:n.error,timingSteps:n.timingSteps,updatedAt:new Date().toISOString()}}async function gc(n){if(n.type==="conversation.hydrate"){if(!Fd(n.snapshot))throw new Error("Conversation hydrate requires a self-contained bundle");kd(n.artifactWorkingSet,aa(n.snapshot)),await Bd(Object.values(n.snapshot.rootState.artifactVersions.entities),n.snapshot.depot.items)}n.type==="conversation.hydratePatch"&&zd(n.artifactWorkingSet)}const Cm=16;function Pm(n){if(n instanceof Error)return n.message;if(typeof n=="string")return n;if(n&&typeof n=="object"){const e=n;if(typeof e.message=="string"&&e.message.trim())return e.message;if(typeof e.error=="string"&&e.error.trim())return e.error}try{return JSON.stringify(n)}catch{return String(n)}}function Im(n,e,t,i){const{executor:r,store:s}=n,{sink:o,peerId:a}=i,c=i.patchDebounceMs??Cm;let l=0,u=null,d=null,p=!1,f=!1,g=null,_=null,m=!1,h=0,E=-1,T={signature:""};const M=Vd(),U=D=>{const F=Xd(jd(D.rootState),{}),N=[...$d(F),...qd(F),...Yd(F,r.getState().settings)].sort(),Y=Object.values(D.rootState.weaves?.entities??{}).flatMap(z=>Object.values(z.edges).map(Z=>Z.handoffAttachmentId)).sort();return{signature:JSON.stringify([Kd(D),N,Y]),referencesDepot:N.length>0||Y.some(z=>typeof z=="string"&&z.length>0)||D.rootState.artifactVersions.ids.length>0}},L=async D=>{l+=1;const F=ti.getMutationRevision(),N=await wm({executor:r,peerId:a,sessionId:e,conversationId:t,revision:l,reason:D,captureArtifactWorkingSet:M.captureFull});await gc(N.frame),await o(N.frame),g=ds(aa(N.snapshot)),E=F,T=U(g)},A=async()=>{if(!g){await L("resync");return}const D=Ll(),F=await Dl(r,t,{reason:"peer-publish-patch"},ve=>Gd(r,ve,t)),N=M.capturePatch(F,D),Y=U(F),z=ti.getMutationRevision()!==E;if(Y.signature!==T.signature||z&&Y.referencesDepot){await L("resync");return}const Z=Wd(g,F);if(Z==null&&N.entries.length===0){g=ds(F);return}const re=l;l+=1;const me=Am({peerId:a,sessionId:e,conversationId:t,baseRevision:re,revision:l,delta:Z??null,artifactWorkingSet:N});await gc(me),await o(me),g=ds(F)},C=async(D="resync")=>{if(!(p&&D!=="final")){if(D==="initial"||D==="reconnect"||D==="final"){await L(D);return}await A()}},x=()=>{if(p||!f||d||_||!m)return;const D=Math.max(0,c-(performance.now()-h));d=setTimeout(()=>{d=null,v().catch(F=>console.error("[peer] failed to publish snapshot patch:",F))},D)},v=async()=>{if(_)return _;if(!(!m||p))return m=!1,_=(async()=>{try{if(u){const D=u;u=null,await L(D)}else await C("resync")}catch(D){throw g=null,D}})().finally(()=>{_=null,x()}),_},S=()=>{p||(m||(h=performance.now()),m=!0,x())},w=s.subscribe(S),I=Hd(S);return{isStarted:()=>f,async start(){p||f||(await C("initial"),f=!0,m&&S())},async requestFullSnapshot(D="reconnect"){p||!f||(u=D,S(),d&&clearTimeout(d),d=null,_&&await _.catch(()=>{}),!(p||!u)&&(d&&clearTimeout(d),d=null,await v()))},async stop(D="completed",F,N={}){if(!p){p=!0,d&&clearTimeout(d),d=null,w(),I();try{if(_&&await _.catch(()=>{}),N.final===!1)return;await C("final"),await o(Rm({peerId:a,sessionId:e,conversationId:t,status:D,revision:l,error:F?{code:"headless-runtime-error",message:Pm(F)}:void 0,timingSteps:i.getTimingSteps?.()}))}finally{g=null,T={signature:"",referencesDepot:!1},u=null,m=!1,f=!1,M.clear()}}}}}function Lm(n){const{executor:e,store:t,peerId:i,transport:r}=n,s=n.now??(()=>new Date),o=n.runStatusDebounceMs??100,a=n.statusDebounceMs??500,c=crypto.randomUUID(),l=s().toISOString(),u=new Set,d=new Map,p=new Map;let f=0,g=0,_=null,m,h=!1,E=0,T=null,M=null,U=Promise.resolve();const L=()=>({peerId:i,peerSessionId:c,publishedConversationIds:[...d.keys()],subscribers:Object.fromEntries(p),clients:f,runStatus:Object.fromEntries([...d.values()].map(W=>[W.conversationId,W.runStatus])),revisions:Object.fromEntries([...d.values()].map(W=>[W.conversationId,W.revision])),statusRevision:g,lastError:m}),A=()=>{const W=L();for(const k of Array.from(u))try{k(W)}catch(B){console.error("[peer] host listener failed:",B)}},C=W=>{m=po(W),A()},x=W=>r.isOpen()?r.trySend(W):!1,v=W=>{E+=1;const k={conversationId:W,starting:null,started:!1,awaitingFullHydrate:!1,revision:0,runStatus:"idle"},B=async ie=>{(ie.type==="conversation.hydrate"||ie.type==="conversation.hydratePatch")&&(k.revision=ie.revision.revision),!(k.awaitingFullHydrate&&ie.type==="conversation.hydratePatch")&&(ie.type==="conversation.hydrate"&&(k.awaitingFullHydrate=!1),r.isOpen()&&r.send(ie))};return k.publisher=Im({executor:e,store:t},`${c}:${W}:${E}`,W,{sink:B,peerId:i,getTimingSteps:n.getTimingSteps}),k.approvals=dm({peerId:i,conversationId:W,sink:async ie=>{r.isOpen()&&r.send(ie)},onError:C}),k},S=W=>{const k=d.get(W);if(k)return k;const B=v(W);return d.set(W,B),B.starting=B.publisher.start().then(()=>{B.started=!0,d.get(W)===B&&(B.approvals.start(),D(!0,W))}).catch(ie=>{B.startError=ie??new Error("Publisher failed to start."),C(ie),d.get(W)===B&&d.delete(W),B.approvals.stop(),B.publisher.stop("completed",void 0,{final:!1}).catch(te=>console.warn("[peer] failed publisher cleanup failed:",te)),A()}).finally(()=>{B.starting=null}),A(),B},w=async W=>{d.get(W.conversationId)===W&&d.delete(W.conversationId),W.approvals.stop(),W.starting&&await W.starting.catch(()=>{}),await W.publisher.stop("completed",void 0,{final:!1}).catch(C),A()},I=(W,k)=>{if(k>0)p.set(W,k),n.canServeConversation(W)&&S(W);else{p.delete(W);const B=d.get(W);B&&w(B)}A()},D=(W,k)=>{if(h)return;const B=sa(),ie=t.getState();for(const te of d.values()){if(k&&te.conversationId!==k||!te.started)continue;const de=Tm(ie,te.conversationId,B);!(de.status!==te.runStatus||de.messageId!==te.runMessageId)&&!W||(te.runStatus=de.status,te.runMessageId=de.messageId,x({type:"run.status",peerId:i,conversationId:te.conversationId,status:de.status,...de.messageId?{messageId:de.messageId}:{},...de.responseId?{responseId:de.responseId}:{},revision:{revision:te.revision},updatedAt:s().toISOString()}))}A()},F=()=>{h||M||(M=setTimeout(()=>{M=null,D(!1)},o))},N=W=>{if(h)return;let k;try{k={...n.buildStatus(),peerId:i,kind:n.kind,hostKind:n.hostKind,startedAt:l}}catch(ie){C(ie);return}const B=JSON.stringify(k);if(!(!W&&B===_)){if(!r.isOpen()){_=null;return}g+=1,_=B,x({type:"peer.status",peerId:i,revision:g,status:k})||(_=null),A()}},Y=()=>{h||T||(T=setTimeout(()=>{T=null,N(!1)},a))},z=t.subscribe(()=>{F(),Y()}),Z=Pl(F),re=Mm({executor:e,store:t,peerId:i,canServeConversation:n.canServeConversation,requestHydrate:async(W,k)=>{const B=S(W),ie=B.starting;if(ie&&await ie,B.startError!==void 0)throw new Ye("hydrate-failed",`Could not publish conversation ${W}: ${po(B.startError)}`,{retryable:!0});ie||!B.started||await B.publisher.requestFullSnapshot(k==="reconnect"?"reconnect":"resync")},getRevision:W=>d.get(W)?.revision??0,createConversation:n.createConversation,listConversations:n.listConversations,onShutdown:n.onShutdown,idempotencyLruSize:n.idempotencyLruSize}),me=W=>{U=U.then(async()=>{const k=await re.handle(W);h||x(k)}).catch(C)};return{handleFrame:W=>{if(!(h||!Jd(W)||W.peerId!==i)){if(Qd(W)){x(W);return}if(eh(W)){if(W.role!=="peer")return;f=W.clients;const k=new Set;for(const B of W.subscriptions)k.add(B.conversationId),I(B.conversationId,B.count);for(const B of[...p.keys()])k.has(B)||I(B,0);return}if(th(W)){f=W.clients,I(W.conversationId,W.count);return}if(nh(W)){C(new Error(`${W.error.code}: ${W.error.message}`));return}if(ih(W)){me(W);return}}},async onTransportOpen(){if(!h){N(!0);for(const W of[...d.values()])try{if(W.starting&&await W.starting,!W.started||d.get(W.conversationId)!==W||(W.awaitingFullHydrate=!0,await W.publisher.requestFullSnapshot("reconnect"),d.get(W.conversationId)!==W))continue;await W.approvals.publish()}catch(k){C(k)}D(!0)}},onTransportClose(){for(const W of d.values())W.awaitingFullHydrate=!0;_=null,A()},publishStatus(W=!1){W?(T&&clearTimeout(T),T=null,N(!0)):Y()},async publishFinal(W,k,B){const ie=Zd(k)?k:"completed";let te=d.get(W);te?(d.delete(W),te.approvals.stop(),te.starting&&await te.starting.catch(()=>{})):te=v(W),te.awaitingFullHydrate=!1;try{await te.publisher.stop(ie,B,{final:!0})}finally{A()}},getState:L,subscribe(W){return u.add(W),()=>{u.delete(W)}},async stop(){if(h)return;h=!0,T&&clearTimeout(T),M&&clearTimeout(M),T=null,M=null,z(),Z();const W=[...d.values()];d.clear();for(const k of W)k.approvals.stop(),k.starting&&await k.starting.catch(()=>{}),await k.publisher.stop("completed",void 0,{final:!1}).catch(B=>console.warn("[peer] publisher stop failed:",B));await U.catch(()=>{}),A(),u.clear()}}}const Dm=ah*(ch+1),Um=Object.freeze([es.policy,es.replaced]),vc=Object.freeze({enabled:!1,online:!1,instanceName:"",clients:0,publishedConversationIds:Object.freeze([]),publishedConversationCount:0,blockedCount:0,runStatus:Object.freeze({}),attempts:0});function Nm(n){return!!n&&!n.remote&&!Rl(n.id)}function Om(){const n=new Set;let e=vc,t=null,i=null,r=[],s=null,o=null;const a=()=>{for(const w of Array.from(n))try{w(e)}catch(I){console.error("[remote-control] manager listener failed:",I)}},c=()=>(t?.getDesktopBridge??ro)(),l=()=>t?.getSettings()?.remoteControl,u=()=>t?.hostKind??"browser",d=()=>t?l()?.instanceName?.trim()||op(u(),t.platform):"",p=()=>t?t.executor.residency.catalog.getDescriptors({includeHidden:!1}):[],f=w=>t?.executor.residency.catalog.getDescriptor(w),g=()=>t?t.executor.getState():{},_=()=>Object.values(g().workspaces?.entities??{}).filter(w=>!!w),m=w=>g().workspaces?.entities?.[w],h=()=>g().workspaces?.activeWorkspaceId||void 0,E=()=>{const w=new Set;for(const I of Object.values(g().colleagues?.entities??{}))I?.workspaceId&&w.add(I.workspaceId);return w},T=w=>{const I=f(w);return!!I&&!I.hidden&&!I.remoteMirror},M=()=>{const w=i,I=w?.hostState,D=I?.publishedConversationIds??[];let F=0;for(const Z of D)I?.runStatus[Z]==="blocked"&&(F+=1);const N=w?.socketState.status==="online";e={enabled:!!w,online:N,peerId:w?.peerId,instanceId:t?.instanceId,instanceName:d(),clients:I?.clients??0,publishedConversationIds:Object.freeze([...D]),publishedConversationCount:D.length,blockedCount:F,runStatus:Object.freeze({...I?.runStatus??{}}),attempts:w?.socketState.attempts??0,lastError:w?.socketState.lastError??I?.lastError};const Y={hosting:N&&D.length>0,conversationCount:D.length,viewerCount:e.clients},z=t?JSON.stringify(Y):"stopped";if(z!==o){o=z;const Z=c();Z&&Z.setHostingState(t?Y:{hosting:!1,conversationCount:0,viewerCount:0}).catch(re=>console.warn("[remote-control] desktop hosting state rejected:",re))}a()},U=(w,I)=>{w.hostState=I;const D=new Set(I.publishedConversationIds);for(const F of Array.from(w.lastRunStatus.keys()))D.has(F)||w.lastRunStatus.delete(F);for(const F of I.publishedConversationIds){const N=I.runStatus[F]??"idle";if(w.lastRunStatus.get(F)!=="blocked"&&N==="blocked"){const z=c();if(z){const Z=f(F)?.name||F;z.notify({title:"Assistant needs your input",body:Z,conversationId:F}).catch(re=>console.warn("[remote-control] desktop notification rejected:",re))}}w.lastRunStatus.set(F,N)}M()},L=async w=>{if(!t)throw new Ye("internal","Remote control is not running.");if(l()?.acceptRemoteHostRequests===!1)throw new Ye("not-allowed","This instance does not accept conversations created by other instances.");const I=typeof w.workspaceId=="string"&&w.workspaceId?w.workspaceId:void 0;if(I&&!Nm(m(I)))throw new Ye("not-found",`Workspace ${I} does not exist on this instance.`);const{store:D,executor:F}=t,N=t.createConversation??(async W=>D.dispatch(lh(W?{workspaceId:W}:void 0)).unwrap()),Y=t.setConversationTitle??(async(W,k)=>{await F.residency.scopes.withLocalConversation(W,{reason:"remote-control-create"},()=>{D.dispatch(uh({id:W,name:k,autoName:!1}))})}),z=t.sendFirstMessage??(async(W,k,B)=>{await D.dispatch(dh({parentId:k,message:Il({conversationId:W,text:B})})).unwrap()}),Z=await N(I),re=typeof w.title=="string"?w.title.trim().slice(0,200):"";re&&await Y(Z.conversationId,re);const me=typeof w.firstMessage=="string"?w.firstMessage:"";me.trim()&&await z(Z.conversationId,Z.rootMessageId,me),i?.host?.publishStatus(!0);const ve=f(Z.conversationId)?.workspaceId??I??h();return{conversationId:Z.conversationId,rootMessageId:Z.rootMessageId,...ve?{workspaceId:ve}:{}}},A=()=>{if(!t||i)return;const w=t,I=rh(w.instanceId),D=w.createSocket??sh,F=w.createHost??Lm,N={peerId:I,socket:null,host:null,unsubscribeHost:()=>{},socketState:{status:"connecting",attempts:0},hostState:{peerId:I,peerSessionId:"",publishedConversationIds:[],subscribers:{},clients:0,runStatus:{},revisions:{},statusRevision:0},lastRunStatus:new Map};try{const Y=D({resolveUrl:async()=>{if(w.endpoint)return Ha(w.endpoint);const Z=oh(I,"peer").replace(/^\//,""),{baseURL:re}=await Fl(Z);return Ha(re)},resolveProtocols:()=>{const Z=w.executor.getState().settings?.apiKeys?.proxy||"";return Z?[`proxy-key.${Z}`]:void 0},socketFactory:w.socketFactory,random:w.random,now:w.now,minBackoffMs:w.minBackoffMs,maxBackoffMs:w.maxBackoffMs,heartbeatTimeoutMs:Dm,finalCloseCodes:Um,onOpen:()=>i===N?N.host?.onTransportOpen():void 0,onMessage:Z=>{if(i!==N||!N.host)return;let re;try{re=JSON.parse(Z)}catch{return}N.host.handleFrame(re)},onState:Z=>{if(i!==N)return;const re=N.socketState.status==="online";N.socketState=Z,re&&Z.status!=="online"&&N.host?.onTransportClose(),M()}});N.socket=Y;const z={isOpen:()=>Y.isOpen(),send:Z=>Y.send(Z),trySend:Z=>Y.trySend(Z)};N.host=F({executor:w.executor,store:w.store,peerId:I,kind:"instance",hostKind:u(),transport:z,buildStatus:()=>Lp({instanceId:w.instanceId,name:d(),platform:w.platform,settings:l(),descriptors:p(),workspaces:_(),colleagueWorkspaceIds:E()}),canServeConversation:T,createConversation:L,listConversations:Z=>Pp(p(),Z),now:w.now})}catch(Y){console.error("[remote-control] failed to start instance peer:",Y);try{N.socket?.stop(es.normal,"start-failed")}catch{}return}i=N,N.unsubscribeHost=N.host.subscribe(Y=>{i===N&&U(N,Y)}),N.hostState=N.host.getState()},C=()=>{const w=i;w&&(i=null,w.unsubscribeHost(),w.socket?.stop(es.normal,"host-stopped"),w.host?.stop().catch(I=>console.warn("[remote-control] peer host stop failed:",I)))},x=()=>{if(!t)return;!!l()?.enabled&&t.isPrimaryTab()?A():C(),i?.host?.publishStatus(),M()},v=()=>{!t||s||(s=setTimeout(()=>{s=null,x()},t.debounceMs??300))},S=()=>{s&&clearTimeout(s),s=null;for(const I of r.splice(0))I();C(),t=null,o=null;const w=ro();w&&w.setHostingState({hosting:!1,conversationCount:0,viewerCount:0}).catch(()=>{}),e=vc,a()};return{start(w){return t&&S(),t=w,r=[w.store.subscribe(v)],w.subscribePrimaryTab&&r.push(w.subscribePrimaryTab(v)),x(),S},stop:S,reevaluate:()=>{s&&clearTimeout(s),s=null,x()},getSnapshot:()=>e,subscribe(w){return n.add(w),()=>{n.delete(w)}}}}const Fm=Om();function km(){const n=Nt.c(8),e=El(),t=hh(),i=!!(e.canUseRemoteControl&&t.remoteControl?.enabled),r=t.remoteControl?.desktop?.keepRunningInBackground,s=t.remoteControl?.desktop?.launchAtLogin;let o,a;n[0]!==i?(o=()=>{if(!i)return;let u=!1,d=null;return eu().then(p=>{const{instanceId:f}=p;if(u)return;const g=Tl(jt,ca,wl());d=Fm.start({store:jt,executor:g,instanceId:f,getSettings:Gm,isPrimaryTab:Vm,subscribePrimaryTab:Hm,hostKind:Oh()?"desktop":"browser",platform:typeof navigator<"u"?navigator.platform:void 0})}).catch(zm),()=>{u=!0,d?.()}},a=[i],n[0]=i,n[1]=o,n[2]=a):(o=n[1],a=n[2]),ee.useEffect(o,a);let c,l;n[3]!==i||n[4]!==r||n[5]!==s?(c=()=>{const u=ro();u&&u.setPreferences({keepRunningInBackground:i?r??!0:!1,launchAtLogin:i?s??!1:!1}).catch(Bm)},l=[i,r,s],n[3]=i,n[4]=r,n[5]=s,n[6]=c,n[7]=l):(c=n[6],l=n[7]),ee.useEffect(c,l)}function Bm(n){return console.warn("[remote-control] desktop preferences rejected:",n)}function zm(n){return console.error("[remote-control] instance identity unavailable; instance peer not started:",n)}function Hm(n){return kl.onStatusChange(()=>n())}function Vm(){return kl.isPrimary()}function Gm(){return jt.getState().settings}function Wm(){return km(),Tp(),null}function Xm(){const n=fh(u=>u.persistence??{}),e=cr(),t=Ul(),[i,r]=ee.useState(!1),[s,o]=ee.useState();if(n.phase!=="fault")return null;const a=e["status.error"],c=Qi(e.button,"#ffffff","#000000",t),l=async()=>{r(!0),o(void 0);try{const{createFaultModeExport:u,downloadFaultModeExport:d}=await ia(async()=>{const{createFaultModeExport:p,downloadFaultModeExport:f}=await import("./faultExport-7voNbqxb.js");return{createFaultModeExport:p,downloadFaultModeExport:f}},__vite__mapDeps([13,4,1,2,5,3,7,0,6,8,9,10,11,12]));d(u(n.fault))}catch(u){o(u instanceof Error?u.message:String(u))}finally{r(!1)}};return G.jsx("div",{role:"alertdialog","aria-modal":"true",style:{position:"fixed",inset:0,zIndex:2147483647,display:"grid",placeItems:"center",padding:24,boxSizing:"border-box",background:at(e.background,.97),color:e["text.primary"],fontFamily:"Inter, system-ui, sans-serif"},children:G.jsxs("section",{style:{width:"min(680px, 100%)",padding:28,border:`1px solid ${at(a,.48)}`,borderRadius:12,background:e.paper,boxShadow:"0 24px 80px rgba(0, 0, 0, 0.45)"},children:[G.jsx("p",{style:{margin:"0 0 8px",color:a,fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Persistence fault"}),G.jsx("h1",{style:{margin:"0 0 14px",fontSize:"clamp(1.5rem, 4vw, 2.1rem)"},children:"Assistant stopped saving to protect your data"}),G.jsx("p",{style:{margin:"0 0 12px",color:e["text.secondary"],lineHeight:1.55},children:"Assistant will not accept more changes after an ambiguous or failed database write. Reload to open the last complete SQLite state."}),G.jsx("pre",{style:{margin:"16px 0",padding:12,maxHeight:180,overflow:"auto",whiteSpace:"pre-wrap",overflowWrap:"anywhere",border:`1px solid ${at(a,.4)}`,borderRadius:8,background:at(a,.1),color:a,fontSize:12},children:n.fault||"SQLite persistence entered a fatal state."}),s?G.jsx("p",{style:{color:a,lineHeight:1.5},children:s}):null,G.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:20},children:[G.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.button}`,background:e.button,color:c,cursor:"pointer",fontSize:"0.95rem",fontWeight:600},children:"Reload"}),G.jsx("button",{type:"button",disabled:i,onClick:()=>{l()},style:{padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.divider}`,background:e.paper,color:i?e["status.disabled"]:e["text.primary"],cursor:i?"wait":"pointer",fontSize:"0.95rem",fontWeight:600},children:i?"Preparing snapshot…":"Download in-memory snapshot"})]}),G.jsx("p",{style:{margin:"16px 0 0",color:e["text.secondary"],fontSize:13,lineHeight:1.5},children:"The snapshot contains the current in-memory application state only — attachments and other binary payloads are not included, and recent changes may not have been committed. The SQLite database still holds the last fully committed state. Do not clear browser site data."})]})})}const jm={"selector-invalid":"Assistant cannot determine which storage engine owns your data because the boot selector is malformed or unreadable.","opfs-unsupported":"This browser does not provide the OPFS support required to open SQLite persistence.","opfs-open-failed":"Assistant could not acquire or open its private OPFS database area.","database-missing":"The exact SQLite database selected for this profile is missing.","database-exists":"Assistant refused to replace an existing SQLite database while creating a new one.","identity-mismatch":"The database identity does not match the exact database selected for this profile.","not-sealed":"The selected database was never completely prepared and sealed for normal use.","already-sealed":"Assistant detected an invalid attempt to seal an already completed database.","integrity-failed":"SQLite reported that the database failed structural integrity checks.","storage-full":"The browser reported that durable storage is full.","io-error":"SQLite or OPFS reported an input/output failure while accessing the database.","fatal-latched":"An earlier persistence failure stopped this database session; reload is required.","invalid-request":"Assistant detected malformed or unsupported persisted data or a programming error in a database request.","replica-failed":"A full-database replica operation failed; the primary database has not been replaced.","restore-invalid":"The selected replica file did not pass complete restore validation.","worker-terminated":"The SQLite worker stopped unexpectedly, so the outcome of its last operation may be unknown.",internal:"Assistant encountered an unexpected persistence implementation error."};function _c(n){const e=new Date(n);return Number.isNaN(e.getTime())?n:e.toLocaleString()}function $m({error:n}){const e=ee.useMemo(()=>Gu(),[]),t={padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.divider}`,background:e.paper,color:e.textPrimary,cursor:"pointer",fontSize:"0.95rem",fontWeight:600},i=ee.useRef(null),[r,s]=ee.useState(),[o,a]=ee.useState(),[c,l]=ee.useState(),[u,d]=ee.useState();let p,f;try{const A=Ih();A.engine==="sqlite"&&(p=A.selector.databaseName)}catch(A){f=A instanceof Error?A.message:String(A)}ee.useEffect(()=>{let A=!1;return Ah().then(C=>{A||l(C)}),Rh().then(C=>{A||d(C)}),()=>{A=!0}},[]);const g=n instanceof Ol?n.code:void 0,_=g?jm[g]:"Assistant could not safely open the selected SQLite database and will not guess or fall back to another data source.";let m,h;u?u.supported?u.present?(m=`OPFS marker: present${u.createdAt?` (created ${_c(u.createdAt)})`:""}.`,h="A marker file outside the database pool survived, so OPFS was NOT cleared origin-wide: the loss is specific to the SQLite pool (for example the SAH pool's silent bad-digest reap, or targeted deletion)."):u.expectedCreatedAt?(m=`OPFS marker: missing (it was created ${_c(u.expectedCreatedAt)}).`,h='A marker file outside the database pool is gone too, which points to origin-wide OPFS clearing: browser eviction on an unpersisted origin, "Clear site data", or an external cleanup tool.'):m="OPFS marker: was never created on this profile, so an origin-wide wipe cannot be distinguished from pool-specific loss for this incident.":m="OPFS marker: could not be checked in this browser.":m="OPFS marker: checking…";const E=c===void 0?"Persistent storage: unknown (the browser did not report a grant state).":c?"Persistent storage: granted — this origin is protected from ordinary pressure-driven eviction.":"Persistent storage: NOT granted — quota-managed storage (including OPFS) on this origin is evictable by the browser.",T=async(A,C)=>{s(A),a(void 0);try{await C()}catch(x){a(x instanceof Error?x.message:String(x))}finally{s(void 0)}},M=async A=>{await T("Restoring replica…",async()=>{await ph(A)})},U=async()=>{p&&await T("Exporting forensic bytes…",async()=>{const A=await mh(p);gh(`${p}.raw.db`,A)})},L=async()=>{window.prompt("Type RESET to permanently delete all Assistant SQLite storage.")==="RESET"&&await T("Resetting SQLite storage…",async()=>{await vh(),window.location.reload()})};return G.jsx("main",{role:"alert",style:{minHeight:"100vh",boxSizing:"border-box",display:"grid",placeItems:"center",padding:24,background:e.background,color:e.textPrimary,fontFamily:"Inter, system-ui, sans-serif"},children:G.jsxs("section",{style:{width:"min(760px, 100%)",padding:28,border:`1px solid ${e.divider}`,borderRadius:12,background:e.paper},children:[G.jsx("p",{style:{margin:"0 0 8px",color:e.textSecondary,fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"SQLite recovery"}),G.jsx("h1",{style:{margin:"0 0 14px",color:e.statusError,fontSize:"clamp(1.5rem, 4vw, 2.1rem)"},children:"Assistant stopped to protect your data"}),g?G.jsxs("p",{style:{margin:"0 0 12px",fontFamily:"ui-monospace, monospace",fontWeight:700},children:["Error code: ",g]}):null,G.jsx("p",{style:{margin:"0 0 12px",color:e.textSecondary,lineHeight:1.55},children:_}),p?G.jsxs("p",{style:{margin:"0 0 12px",color:e.textSecondary},children:["Selected database: ",G.jsx("code",{style:{color:e.textPrimary},children:p})]}):null,f?G.jsxs("p",{style:{margin:"0 0 12px",color:e.statusError,lineHeight:1.5},children:["The persistence selector itself could not be read: ",f]}):null,G.jsx("pre",{style:{margin:"16px 0",padding:12,maxHeight:180,overflow:"auto",whiteSpace:"pre-wrap",overflowWrap:"anywhere",border:`1px solid ${at(e.statusError,.4)}`,borderRadius:8,background:at(e.statusError,.1),color:e.statusError,fontSize:12},children:n.message}),G.jsxs("div",{style:{margin:"0 0 12px",padding:12,borderRadius:8,border:`1px solid ${e.divider}`,fontSize:13,lineHeight:1.55,color:e.textSecondary},children:[G.jsx("p",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Storage forensics"}),G.jsx("p",{style:{margin:"0 0 4px"},children:E}),G.jsx("p",{style:{margin:0},children:m}),g==="database-missing"&&h?G.jsx("p",{style:{margin:"6px 0 0",color:e.textPrimary},children:h}):null]}),o?G.jsx("p",{style:{color:e.statusError,lineHeight:1.5},children:o}):null,r?G.jsx("p",{style:{color:e.textSecondary},children:r}):null,G.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:20},children:[G.jsx("button",{type:"button",disabled:!!r,onClick:()=>window.location.reload(),style:{...t,background:e.button,borderColor:e.button,color:e.buttonForeground},children:"Reload"}),G.jsx("button",{type:"button",disabled:!!r,onClick:()=>i.current?.click(),style:t,children:"Restore from replica file"}),G.jsx("input",{ref:i,"data-performance-replica-input":"true",hidden:!0,type:"file",accept:".db,application/vnd.sqlite3",onChange:A=>{const C=A.currentTarget.files?.[0];A.currentTarget.value="",C&&M(C)}}),p?G.jsx("button",{type:"button",disabled:!!r,onClick:()=>{U()},style:t,children:"Export raw database bytes (forensic)"}):null]}),G.jsx("p",{style:{margin:"14px 0 0",color:e.textSecondary,fontSize:13,lineHeight:1.5},children:"The forensic export is an unvalidated byte-for-byte rescue copy for support. It may be corrupt and is not a verified backup."}),G.jsxs("div",{style:{marginTop:26,paddingTop:20,borderTop:`1px solid ${e.divider}`},children:[G.jsx("h2",{style:{margin:"0 0 8px",color:e.statusError,fontSize:"1rem"},children:"Danger zone"}),G.jsx("p",{style:{margin:"0 0 12px",color:e.textSecondary,fontSize:13,lineHeight:1.5},children:"Reset permanently deletes every Assistant SQLite database and removes the engine selector. Legacy pre-migration data, if it still exists, becomes authoritative again after reload."}),G.jsx("button",{type:"button",disabled:!!r,onClick:()=>{L()},style:{...t,borderColor:e.statusError,color:e.statusError},children:"Reset SQLite storage…"})]})]})})}const $y={transient:.12,messageState:.35},hn={speed:.45,attenuation:1.2,fadeLifetime:2,packetLength:.25,coreWidth:2.2,bladeWidth:9,glowIntensity:1.35,haloStrength:.6,seamMergePx:22},xc=(n,e)=>{const t=[...n].sort((r,s)=>r-s),i=[];for(const r of t){const s=i[i.length-1];!s||r-s[s.length-1]>e?i.push([r]):s.push(r)}return i.map(r=>r.reduce((s,o)=>s+o,0)/r.length)},qm=(n,e,t,i,r=hn.seamMergePx)=>{if(e===0)return{xs:[],ys:[]};const s=new Set,o=new Set;for(let u=0;u<e;u+=1){const d=u*4,p=n[d],f=n[d+1],g=n[d+2],_=n[d+3];s.add(p),s.add(p+g),o.add(f),o.add(f+_)}const a=xc(s,2/Math.max(1,i.width)),c=xc(o,r/Math.max(1,i.height));return{xs:t==="ladder"&&a.length>1?[a[0],a[a.length-1]]:a,ys:c}},Ym=(n,e)=>{if(!n.length)return e;let t=n[0];for(const i of n)Math.abs(i-e)<Math.abs(t-e)&&(t=i);return t},Km=(n,e,t)=>{const i=Math.max(t.width,t.height,1),r=(e.u-n.u)*t.width/i,s=(e.v-n.v)*t.height/i;return Math.hypot(r,s)},Sc=(n,e,t,i,r)=>({from:n,to:e,startDistance:t,gain:i,length:Km(n,e,r)}),yc=(n,e,t,i)=>{const{xs:r,ys:s}=n;if(r.length<2||!s.length)return[];const o=s.reduce((h,E,T)=>Math.abs(E-e.v)<Math.abs(s[h]-e.v)?T:h,0);let a;if(t<0){a=0;for(let h=0;h<r.length;h+=1)r[h]<=e.u&&(a=h)}else{a=r.length-1;for(let h=0;h<r.length;h+=1)if(r[h]>=e.u){a=h;break}}const c={u:e.u,v:s[o]},l={u:r[a],v:s[o]},u=Sc(c,l,0,1,i),d=[];u.length>1e-6&&d.push(u);const p=t<0?Math.min(r.length-1,a+1):Math.max(0,a-1),f=[{ix:a,iy:o,fromIx:p,fromIy:o,distance:u.length,gain:1}],g=new Set,_=2.2,m=280;for(;f.length&&d.length<m;){f.sort((A,C)=>A.distance-C.distance);const h=f.shift();if(h.distance>_)continue;const E=`${h.ix},${h.iy}|${h.fromIx},${h.fromIy}`;if(g.has(E))continue;g.add(E);const T=[];h.ix>0&&T.push({ix:h.ix-1,iy:h.iy}),h.ix<r.length-1&&T.push({ix:h.ix+1,iy:h.iy}),h.iy>0&&T.push({ix:h.ix,iy:h.iy-1}),h.iy<s.length-1&&T.push({ix:h.ix,iy:h.iy+1});const M=T.filter(A=>A.ix!==h.fromIx||A.iy!==h.fromIy),U=h.gain/Math.sqrt(Math.max(1,M.length)),L={u:r[h.ix],v:s[h.iy]};for(const A of M){const C={u:r[A.ix],v:s[A.iy]},x=Sc(L,C,h.distance,U,i);x.length<=1e-6||(d.push(x),f.push({ix:A.ix,iy:A.iy,fromIx:h.ix,fromIy:h.iy,distance:h.distance+x.length,gain:U}))}}return d},Qn=n=>Math.min(1,Math.max(0,n)),Mc=(n,e,t)=>{const i=n-e;if(i<0||i>t)return 0;const r=Math.pow(Qn(1-i/t),.62),s=Qn(i/Math.max(.008,t*.13));return r*Math.pow(s,.45)},bc=(n,e)=>{const t=e-n.startDistance,i=n.length>0?t/n.length:0;return{u:n.from.u+(n.to.u-n.from.u)*i,v:n.from.v+(n.to.v-n.from.v)*i}},Zm=(n,e,t)=>{const i=Math.max(0,e-t-n.startDistance),r=Math.min(n.length,e-n.startDistance);if(r<=i||r<=0||i>=n.length)return[];const s=n.startDistance+i,o=n.startDistance+r,a=e-Math.max(.008,t*.13),c=[s];a>s&&a<o&&c.push(a),c.push(o);const l=[];for(let u=0;u<c.length-1;u+=1){const d=c[u],p=c[u+1];l.push({from:bc(n,d),to:bc(n,p),startDistance:d,endDistance:p})}return l};function qy(n){let e,t,i;if(n.startsWith("#")){const r=n.slice(1);r.length===3?(e=parseInt(r[0]+r[0],16)/255,t=parseInt(r[1]+r[1],16)/255,i=parseInt(r[2]+r[2],16)/255):(e=parseInt(r.slice(0,2),16)/255,t=parseInt(r.slice(2,4),16)/255,i=parseInt(r.slice(4,6),16)/255)}else if(n.startsWith("rgb")){const r=n.match(/rgba?\(([^)]+)\)/);if(r){const s=r[1].split(",").map(o=>parseFloat(o.trim()));e=s[0]/255,t=s[1]/255,i=s[2]/255}else return 0}else return 0;return Sa([e,t,i])}function Sa([n,e,t]){const i=Math.max(n,e,t),r=Math.min(n,e,t);if(i===r)return 0;const s=i-r;return(i===n?(e-t)/s+(e<t?6:0):i===e?(t-n)/s+2:(n-e)/s+4)/6%1}const In=128,ws=1024,yi=1024,en={speed:.9,attenuation:1.2,energyConservation:1,injectionRadius:.1},su=xl.createContext(null),Jm=n=>n.hue!==void 0?n.hue:n.rgb?Sa(n.rgb):0,Nn=(n,e,t,i)=>`hsla(${Math.round((n%1+1)%1*360)}, ${e}%, ${t}%, ${Qn(i)})`,Sn=(n,e,t,i,r,s,o)=>{const a=e.u*window.innerWidth,c=(1-e.v)*window.innerHeight,l=t.u*window.innerWidth,u=(1-t.v)*window.innerHeight;if(Math.hypot(l-a,u-c)<.25)return;const d=n.createLinearGradient(a,c,l,u);d.addColorStop(0,i(s)),d.addColorStop(1,i(o)),n.strokeStyle=d,n.lineWidth=r,n.beginPath(),n.moveTo(a,c),n.lineTo(l,u),n.stroke()},Qm=(n,e,t,i,r,s,o)=>{const a=Math.min(1.35,Math.max(.25,i.energy/3)),c=Qn(r*a),l=Qn(s*a);if(Math.max(c,l)<=.002)return;const u=Math.min(2.2,o.glowIntensity),d=o.bladeWidth*(1.25+o.haloStrength*.85),p=Math.max(o.coreWidth+2,o.bladeWidth*.64),f=Math.max(o.coreWidth+.7,p*.42),g=Math.max(.7,Math.min(f-.45,o.coreWidth));n.lineCap="butt",n.lineJoin="bevel",o.lightMode?(n.globalCompositeOperation="source-over",Sn(n,e,t,_=>Nn(i.hue,100,86,_*.22*u),d,c,l),Sn(n,e,t,_=>Nn(i.hue,100,76,_*.42*u),p,c,l),Sn(n,e,t,_=>Nn(i.hue,94,53,_*.86*u),f,c,l),Sn(n,e,t,_=>Nn(i.hue,100,79,_*.92),g,c,l)):(n.globalCompositeOperation="lighter",Sn(n,e,t,_=>Nn(i.hue,100,52,_*.13*u),d,c,l),Sn(n,e,t,_=>Nn(i.hue,100,58,_*.48*u),p,c,l),Sn(n,e,t,_=>Nn(i.hue,100,64,_*.86),f,c,l),Sn(n,e,t,_=>`rgba(255, 255, 255, ${Qn(_*.94)})`,g,c,l))},eg=n=>{const e=Nt.c(38),{children:t,topology:i,speed:r,attenuation:s,zIndex:o,enableGlobalClicks:a,pixelRatio:c,maxFPS:l}=n,u=i===void 0?"ladder":i,d=r===void 0?hn.speed:r,p=s===void 0?hn.attenuation:s,f=o===void 0?5:o,g=a===void 0?!1:a,_=l===void 0?120:l,m=ee.useRef(null);let h;e[0]===Symbol.for("react.memo_cache_sentinel")?(h=new Map,e[0]=h):h=e[0];const E=ee.useRef(h),T=ee.useRef(null);let M;e[1]===Symbol.for("react.memo_cache_sentinel")?(M=new Float32Array(In*4),e[1]=M):M=e[1];const U=ee.useRef(M);let L;e[2]===Symbol.for("react.memo_cache_sentinel")?(L={xs:[],ys:[]},e[2]=L):L=e[2];const A=ee.useRef(L);let C;e[3]===Symbol.for("react.memo_cache_sentinel")?(C=[],e[3]=C):C=e[3];const x=ee.useRef(C),v=ee.useRef(!0),S=ee.useRef(null),w=ee.useRef(tg),I=ee.useRef(ng),D=ee.useRef(u),F=ee.useRef(d),N=ee.useRef(p),Y=ee.useRef(_),z=ra();let Z;e[4]!==z?(Z=z.toLowerCase().includes("light"),e[4]=z,e[5]=Z):Z=e[5];const re=Z,me=ee.useRef(re);let ve,W;e[6]!==u?(ve=()=>{D.current=u,v.current=!0},W=[u],e[6]=u,e[7]=ve,e[8]=W):(ve=e[7],W=e[8]),ee.useEffect(ve,W);let k,B;e[9]!==d?(k=()=>{F.current=d},B=[d],e[9]=d,e[10]=k,e[11]=B):(k=e[10],B=e[11]),ee.useEffect(k,B);let ie,te;e[12]!==p?(ie=()=>{N.current=p},te=[p],e[12]=p,e[13]=ie,e[14]=te):(ie=e[13],te=e[14]),ee.useEffect(ie,te);let de,Pe;e[15]!==_?(de=()=>{Y.current=_},Pe=[_],e[15]=_,e[16]=de,e[17]=Pe):(de=e[16],Pe=e[17]),ee.useEffect(de,Pe);let Ae,ue;e[18]!==re?(Ae=()=>{me.current=re,I.current()},ue=[re],e[18]=re,e[19]=Ae,e[20]=ue):(Ae=e[19],ue=e[20]),ee.useEffect(Ae,ue);let pe;e[21]===Symbol.for("react.memo_cache_sentinel")?(pe=le=>{const ce=E.current.get(le.id)?.ref.current;ce&&T.current?.unobserve(ce),E.current.set(le.id,le),le.ref.current&&T.current?.observe(le.ref.current),v.current=!0},e[21]=pe):pe=e[21];const he=pe;let P;e[22]===Symbol.for("react.memo_cache_sentinel")?(P=le=>{const ce=E.current.get(le)?.ref.current;ce&&T.current?.unobserve(ce),E.current.delete(le),v.current=!0},e[22]=P):P=e[22];const ke=P;let ye;e[23]===Symbol.for("react.memo_cache_sentinel")?(ye=(le,ce,Ee)=>{w.current(le,ce,Ee)},e[23]=ye):ye=e[23];const Le=ye;let _e;e[24]===Symbol.for("react.memo_cache_sentinel")?(_e=le=>{const ce=E.current.get(le)?.ref.current;if(!ce)return null;const Ee=ce.getBoundingClientRect();return{u:(Ee.left+Ee.width/2)/window.innerWidth,v:1-(Ee.top+Ee.height/2)/window.innerHeight}},e[24]=_e):_e=e[24];const De=_e;let Re;e[25]===Symbol.for("react.memo_cache_sentinel")?(Re={register:he,unregister:ke,pulseAt:Le,getNodeCenter:De},e[25]=Re):Re=e[25];const He=Re;let qe,R;e[26]!==c?(qe=()=>{const le=m.current,ce=le?.getContext("2d",{alpha:!0});if(!le||!ce)return;let Ee=!1,Ue=0;const oe=x.current,we=ig,Be=()=>{const O=window.innerWidth,ge=window.innerHeight,ae=[...E.current.values()].slice(0,In),Se=U.current;ae.forEach((se,ne)=>{const be=se.ref.current?.getBoundingClientRect();if(!be)return;const Oe=ne*4;Se[Oe]=be.left/O,Se[Oe+1]=(ge-be.bottom)/ge,Se[Oe+2]=be.width/O,Se[Oe+3]=be.height/ge}),A.current=qm(Se,ae.length,D.current,we());for(const se of oe)se.passes=yc(A.current,se.source,se.direction,we());v.current=!1},Ne=()=>{const O=typeof c=="number"?Math.max(.5,Math.min(c,2)):Math.min(window.devicePixelRatio||1,2);le.width=Math.round(window.innerWidth*O),le.height=Math.round(window.innerHeight*O),le.style.width=`${window.innerWidth}px`,le.style.height=`${window.innerHeight}px`,ce.setTransform(O,0,0,O,0,0),v.current=!0,I.current()},xe=O=>{if(S.current=null,Ee)return;const ge=Y.current;if(ge&&ge>0&&O-Ue<1e3/ge){S.current=requestAnimationFrame(xe);return}Ue=O,v.current&&Be(),ce.clearRect(0,0,window.innerWidth,window.innerHeight);const ae={lightMode:me.current,coreWidth:hn.coreWidth,bladeWidth:hn.bladeWidth,glowIntensity:hn.glowIntensity,haloStrength:hn.haloStrength},Se=oe;for(let se=Se.length-1;se>=0;se=se-1,se){const ne=Se[se],be=(O-ne.startedAt)/1e3,Oe=be*F.current,nt=Math.max(.055,ne.packetLength*(.65+ne.radius*2)),Ze=Qn(1-be/(hn.fadeLifetime+1.2));if(Ze<=0||Oe>3){Se.splice(se,1);continue}for(const bt of ne.passes)for(const xt of Zm(bt,Oe,nt)){const mr=Math.exp(-N.current*xt.startDistance*.45),gr=Math.exp(-N.current*xt.endDistance*.45),on=Mc(Oe,xt.startDistance,nt)*mr*Ze*bt.gain,Bi=Mc(Oe,xt.endDistance,nt)*gr*Ze*bt.gain;Qm(ce,xt.from,xt.to,ne,on,Bi,ae)}}ce.globalCompositeOperation="source-over",Se.length&&(S.current=requestAnimationFrame(xe))};I.current=()=>{!Ee&&S.current===null&&(S.current=requestAnimationFrame(xe))},w.current=(O,ge,ae)=>{const Se=ae===void 0?{}:ae;v.current&&Be();const se={u:O,v:Ym(A.current.ys,ge)},ne={source:se,hue:Jm(Se),energy:Se.energy??2.5,radius:Se.radius??.05,packetLength:Se.packetLength??hn.packetLength,startedAt:performance.now()};for(const be of[-1,1])oe.push({...ne,direction:be,passes:yc(A.current,se,be,we())});I.current()};const Ve=()=>{v.current=!0,oe.length&&I.current()};return T.current=new ResizeObserver(Ve),E.current.forEach(O=>{O.ref.current&&T.current?.observe(O.ref.current)}),window.addEventListener("resize",Ne),document.addEventListener("scroll",Ve,!0),Ne(),()=>{Ee=!0,window.removeEventListener("resize",Ne),document.removeEventListener("scroll",Ve,!0),T.current?.disconnect(),T.current=null,S.current!==null&&cancelAnimationFrame(S.current),S.current=null,oe.length=0,w.current=rg,I.current=sg,ce.clearRect(0,0,window.innerWidth,window.innerHeight)}},R=[c],e[26]=c,e[27]=qe,e[28]=R):(qe=e[27],R=e[28]),ee.useEffect(qe,R);let y,X;e[29]!==g?(y=()=>{if(!g)return;const le=ce=>{Le(ce.clientX/window.innerWidth,1-ce.clientY/window.innerHeight,{hue:.33})};return window.addEventListener("click",le),()=>window.removeEventListener("click",le)},X=[g,Le],e[29]=g,e[30]=y,e[31]=X):(y=e[30],X=e[31]),ee.useEffect(y,X);const J=re?"normal":"screen";let Q;e[32]!==J||e[33]!==f?(Q=G.jsx("canvas",{ref:m,"aria-hidden":"true",style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:f,mixBlendMode:J}}),e[32]=J,e[33]=f,e[34]=Q):Q=e[34];let j;return e[35]!==t||e[36]!==Q?(j=G.jsxs(su.Provider,{value:He,children:[t,Q]}),e[35]=t,e[36]=Q,e[37]=j):j=e[37],j};function tg(){}function ng(){}function ig(){return{width:window.innerWidth,height:window.innerHeight}}function rg(){}function sg(){}const ya="178",og=0,Ec=1,ag=2,ou=1,cg=2,fn=3,Ln=0,Dt=1,pn=2,Cn=0,wi=1,mo=2,Tc=3,wc=4,lg=5,Xn=100,ug=101,dg=102,hg=103,fg=104,pg=200,mg=201,gg=202,vg=203,go=204,vo=205,_g=206,xg=207,Sg=208,yg=209,Mg=210,bg=211,Eg=212,Tg=213,wg=214,_o=0,xo=1,So=2,Pi=3,yo=4,Mo=5,bo=6,Eo=7,au=0,Ag=1,Rg=2,Pn=0,Cg=1,Pg=2,Ig=3,Lg=4,Dg=5,Ug=6,Ng=7,cu=300,Ii=301,Li=302,To=303,wo=304,as=306,Ao=1e3,Yn=1001,Ro=1002,Qt=1003,Og=1004,br=1005,Mt=1006,As=1007,Kn=1008,_n=1009,lu=1010,uu=1011,nr=1012,Ma=1013,ni=1014,Xt=1015,ur=1016,ba=1017,Ea=1018,ir=1020,du=35902,hu=1021,fu=1022,It=1023,rr=1026,sr=1027,pu=1028,Ta=1029,mu=1030,wa=1031,Aa=1033,qr=33776,Yr=33777,Kr=33778,Zr=33779,Co=35840,Po=35841,Io=35842,Lo=35843,Do=36196,Uo=37492,No=37496,Oo=37808,Fo=37809,ko=37810,Bo=37811,zo=37812,Ho=37813,Vo=37814,Go=37815,Wo=37816,Xo=37817,jo=37818,$o=37819,qo=37820,Yo=37821,Jr=36492,Ko=36494,Zo=36495,gu=36283,Jo=36284,Qo=36285,ea=36286,Fg=3200,kg=3201,Bg=0,zg=1,Rn="",Wt="srgb",Di="srgb-linear",rs="linear",rt="srgb",oi=7680,Ac=519,Hg=512,Vg=513,Gg=514,vu=515,Wg=516,Xg=517,jg=518,$g=519,Rc=35044,Cc="300 es",mn=2e3,ss=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rs=Math.PI/180,ta=180/Math.PI;function dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function qg(n,e){return(n%e+e)%e}function Cs(n,e,t){return(1-t)*n+t*e}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==p||l!==f||u!==g){let m=1-a;const h=c*p+l*f+u*g+d*_,E=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const U=Math.sqrt(T),L=Math.atan2(U,h*E);m=Math.sin(m*L)/U,a=Math.sin(a*L)/U}const M=a*E;if(c=c*m+p*M,l=l*m+f*M,u=u*m+g*M,d=d*m+_*M,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=U,l*=U,u*=U,d*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*p,e[t+1]=c*g+u*p+l*d-a*f,e[t+2]=l*g+u*f+a*p-c*d,e[t+3]=u*g-a*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"YZX":this._x=p*u*d+l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d-p*f*g;break;case"XZY":this._x=p*u*d-l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ps.copy(this).projectOnVector(e),this.sub(Ps)}reflect(e){return this.sub(Ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new K,Pc=new hr;class Xe{constructor(e,t,i,r,s,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],f=i[5],g=i[8],_=r[0],m=r[3],h=r[6],E=r[1],T=r[4],M=r[7],U=r[2],L=r[5],A=r[8];return s[0]=o*_+a*E+c*U,s[3]=o*m+a*T+c*L,s[6]=o*h+a*M+c*A,s[1]=l*_+u*E+d*U,s[4]=l*m+u*T+d*L,s[7]=l*h+u*M+d*A,s[2]=p*_+f*E+g*U,s[5]=p*m+f*T+g*L,s[8]=p*h+f*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,p=a*c-u*s,f=l*s-o*c,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=p*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Is.makeScale(e,t)),this}rotate(e){return this.premultiply(Is.makeRotation(-e)),this}translate(e,t){return this.premultiply(Is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Xe;function _u(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yg(){const n=os("canvas");return n.style.display="block",n}const Ic={};function Ai(n){n in Ic||(Ic[n]=!0,console.warn(n))}function Kg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Zg(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qg(){const n={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rn?rs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ai("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ai("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Di]:{primaries:e,whitePoint:i,transfer:rs,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const Qe=Qg();function vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ri(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ai;class ev{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ai===void 0&&(ai=os("canvas")),ai.width=e.width,ai.height=e.height;const r=ai.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ai}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vn(t[i]/255)*255):t[i]=vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tv=0;class Ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ls(r[o].image)):s.push(Ls(r[o]))}else s=Ls(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ls(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ev.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nv=0;const Ds=new K;class Ut extends Oi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Yn,r=Yn,s=Mt,o=Kn,a=It,c=_n,l=Ut.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=dr(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ds).x}get height(){return this.source.getSize(Ds).y}get depth(){return this.source.getSize(Ds).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=cu;Ut.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],f=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,M=(f+1)/2,U=(h+1)/2,L=(u+p)/4,A=(d+_)/4,C=(g+m)/4;return T>M&&T>U?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=L/i,s=A/i):M>U?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=L/r,s=C/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=A/s,r=C/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(p-u)/E,this.w=Math.acos((l+f+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iv extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ut(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ra(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends iv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xu extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rv extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(s,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),Tr.subVectors(this.max,Xi),ci.subVectors(e.a,Xi),li.subVectors(e.b,Xi),ui.subVectors(e.c,Xi),yn.subVectors(li,ci),Mn.subVectors(ui,li),On.subVectors(ci,ui);let t=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-On.z,On.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,On.z,0,-On.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-On.y,On.x,0];return!Us(t,ci,li,ui,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Us(t,ci,li,ui,Tr))?!1:(wr.crossVectors(yn,Mn),t=[wr.x,wr.y,wr.z],Us(t,ci,li,ui,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const an=[new K,new K,new K,new K,new K,new K,new K,new K],$t=new K,Er=new fr,ci=new K,li=new K,ui=new K,yn=new K,Mn=new K,On=new K,Xi=new K,Tr=new K,wr=new K,Fn=new K;function Us(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fn.fromArray(n,s);const a=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),c=e.dot(Fn),l=t.dot(Fn),u=i.dot(Fn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const sv=new fr,ji=new K,Ns=new K;class Ca{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ji,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Ns)),this.expandByPoint(ji.copy(e.center).sub(Ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cn=new K,Os=new K,Ar=new K,bn=new K,Fs=new K,Rr=new K,ks=new K;class ov{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Os.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Os);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ar),a=bn.dot(this.direction),c=-bn.dot(Ar),l=bn.lengthSq(),u=Math.abs(1-o*o);let d,p,f,g;if(u>0)if(d=o*c-a,p=o*a-c,g=s*u,d>=0)if(p>=-g)if(p<=g){const _=1/u;d*=_,p*=_,f=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Os).addScaledVector(Ar,p),f}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const i=cn.dot(this.direction),r=cn.dot(cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,i,r,s){Fs.subVectors(t,e),Rr.subVectors(i,e),ks.crossVectors(Fs,Rr);let o=this.direction.dot(ks),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,e);const c=a*this.direction.dot(Rr.crossVectors(bn,Rr));if(c<0)return null;const l=a*this.direction.dot(Fs.cross(bn));if(l<0||c+l>o)return null;const u=-a*bn.dot(ks);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=p,h[3]=f,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),o=1/di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,f=c*d,g=l*u,_=l*d;t[0]=p+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,f=c*d,g=l*u,_=l*d;t[0]=p-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=p*l+_,t[1]=c*d,t[5]=_*l+p,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-p*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=p-_*d}else if(e.order==="XZY"){const p=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(av,e,cv)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),En.crossVectors(i,kt),En.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),En.crossVectors(i,kt)),En.normalize(),Cr.crossVectors(kt,En),r[0]=En.x,r[4]=Cr.x,r[8]=kt.x,r[1]=En.y,r[5]=Cr.y,r[9]=kt.y,r[2]=En.z,r[6]=Cr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],f=i[13],g=i[2],_=i[6],m=i[10],h=i[14],E=i[3],T=i[7],M=i[11],U=i[15],L=r[0],A=r[4],C=r[8],x=r[12],v=r[1],S=r[5],w=r[9],I=r[13],D=r[2],F=r[6],N=r[10],Y=r[14],z=r[3],Z=r[7],re=r[11],me=r[15];return s[0]=o*L+a*v+c*D+l*z,s[4]=o*A+a*S+c*F+l*Z,s[8]=o*C+a*w+c*N+l*re,s[12]=o*x+a*I+c*Y+l*me,s[1]=u*L+d*v+p*D+f*z,s[5]=u*A+d*S+p*F+f*Z,s[9]=u*C+d*w+p*N+f*re,s[13]=u*x+d*I+p*Y+f*me,s[2]=g*L+_*v+m*D+h*z,s[6]=g*A+_*S+m*F+h*Z,s[10]=g*C+_*w+m*N+h*re,s[14]=g*x+_*I+m*Y+h*me,s[3]=E*L+T*v+M*D+U*z,s[7]=E*A+T*S+M*F+U*Z,s[11]=E*C+T*w+M*N+U*re,s[15]=E*x+T*I+M*Y+U*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],f=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*p+i*l*p+r*a*f-i*c*f)+_*(+t*c*f-t*l*p+s*o*p-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*p+r*o*d-i*o*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],f=e[11],g=e[12],_=e[13],m=e[14],h=e[15],E=d*m*l-_*p*l+_*c*f-a*m*f-d*c*h+a*p*h,T=g*p*l-u*m*l-g*c*f+o*m*f+u*c*h-o*p*h,M=u*_*l-g*d*l+g*a*f-o*_*f-u*a*h+o*d*h,U=g*d*c-u*_*c-g*a*p+o*_*p+u*a*m-o*d*m,L=t*E+i*T+r*M+s*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=E*A,e[1]=(_*p*s-d*m*s-_*r*f+i*m*f+d*r*h-i*p*h)*A,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*h+i*c*h)*A,e[3]=(d*c*s-a*p*s-d*r*l+i*p*l+a*r*f-i*c*f)*A,e[4]=T*A,e[5]=(u*m*s-g*p*s+g*r*f-t*m*f-u*r*h+t*p*h)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*A,e[7]=(o*p*s-u*c*s+u*r*l-t*p*l-o*r*f+t*c*f)*A,e[8]=M*A,e[9]=(g*d*s-u*_*s-g*i*f+t*_*f+u*i*h-t*d*h)*A,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*h+t*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*A,e[12]=U*A,e[13]=(u*_*r-g*d*r+g*i*p-t*_*p-u*i*m+t*d*m)*A,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*p+t*a*p)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,p=s*l,f=s*u,g=s*d,_=o*u,m=o*d,h=a*d,E=c*l,T=c*u,M=c*d,U=i.x,L=i.y,A=i.z;return r[0]=(1-(_+h))*U,r[1]=(f+M)*U,r[2]=(g-T)*U,r[3]=0,r[4]=(f-M)*L,r[5]=(1-(p+h))*L,r[6]=(m+E)*L,r[7]=0,r[8]=(g+T)*A,r[9]=(m-E)*A,r[10]=(1-(p+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const o=di.set(r[4],r[5],r[6]).length(),a=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const l=1/s,u=1/o,d=1/a;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=d,qt.elements[9]*=d,qt.elements[10]*=d,t.setFromRotationMatrix(qt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=mn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let f,g;if(a===mn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ss)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=mn){const c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),p=(t+e)*l,f=(i+r)*u;let g,_;if(a===mn)g=(o+s)*d,_=-2*d;else if(a===ss)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const di=new K,qt=new pt,av=new K(0,0,0),cv=new K(1,1,1),En=new K,Cr=new K,kt=new K,Uc=new pt,Nc=new hr;class xn{constructor(e=0,t=0,i=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lv=0;const Oc=new K,hi=new hr,ln=new pt,Pr=new K,$i=new K,uv=new K,dv=new hr,Fc=new K(1,0,0),kc=new K(0,1,0),Bc=new K(0,0,1),zc={type:"added"},hv={type:"removed"},fi={type:"childadded",child:null},Bs={type:"childremoved",child:null};class zt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new K,t=new xn,i=new hr,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Xe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt($i,Pr,this.up):ln.lookAt(Pr,$i,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),hi.setFromRotationMatrix(ln),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hv),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new K(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new K,un=new K,zs=new K,dn=new K,pi=new K,mi=new K,Hc=new K,Hs=new K,Vs=new K,Gs=new K,Ws=new ht,Xs=new ht,js=new ht;class Zt{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),un.subVectors(i,t),zs.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(un),c=Yt.dot(zs),l=un.dot(un),u=un.dot(zs),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(l*c-a*u)*p,g=(o*u-a*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dn.x),c.addScaledVector(o,dn.y),c.addScaledVector(a,dn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ws.setScalar(0),Xs.setScalar(0),js.setScalar(0),Ws.fromBufferAttribute(e,t),Xs.fromBufferAttribute(e,i),js.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ws,s.x),o.addScaledVector(Xs,s.y),o.addScaledVector(js,s.z),o}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),un.subVectors(e,t),Yt.cross(un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Yt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;pi.subVectors(r,i),mi.subVectors(s,i),Hs.subVectors(e,i);const c=pi.dot(Hs),l=mi.dot(Hs);if(c<=0&&l<=0)return t.copy(i);Vs.subVectors(e,r);const u=pi.dot(Vs),d=mi.dot(Vs);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(pi,o);Gs.subVectors(e,s);const f=pi.dot(Gs),g=mi.dot(Gs);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(mi,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Hc.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Hc,a);const h=1/(m+_+p);return o=_*h,a=p*h,t.copy(i).addScaledVector(pi,o).addScaledVector(mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function $s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=qg(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$s(o,s,e+1/3),this.g=$s(o,s,e),this.b=$s(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=yu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Qe.workingToColorSpace(yt.copy(this),e),Math.round(Ke(yt.r*255,0,255))*65536+Math.round(Ke(yt.g*255,0,255))*256+Math.round(Ke(yt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Wt){Qe.workingToColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Ir);const i=Cs(Tn.h,Ir.h,t),r=Cs(Tn.s,Ir.s,t),s=Cs(Tn.l,Ir.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new st;st.NAMES=yu;let fv=0;class cs extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=wi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=vo,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(i.blending=this.blending),this.side!==Ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==go&&(i.blendSrc=this.blendSrc),this.blendDst!==vo&&(i.blendDst=this.blendDst),this.blendEquation!==Xn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mu extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new K,Lr=new tt;let pv=0;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=Xt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class bu extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Eu extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ei extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mv=0;const Gt=new pt,qs=new zt,gi=new K,Bt=new fr,qi=new fr,_t=new K;class ii extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?Eu:bu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ei(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Bt.min,qi.min),Bt.expandByPoint(_t),_t.addVectors(Bt.max,qi.max),Bt.expandByPoint(_t)):(Bt.expandByPoint(qi.min),Bt.expandByPoint(qi.max))}Bt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)_t.fromBufferAttribute(a,l),c&&(gi.fromBufferAttribute(e,l),_t.add(gi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new K,c[C]=new K;const l=new K,u=new K,d=new K,p=new tt,f=new tt,g=new tt,_=new K,m=new K;function h(C,x,v){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,x),d.fromBufferAttribute(i,v),p.fromBufferAttribute(s,C),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,v),u.sub(l),d.sub(l),f.sub(p),g.sub(p);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(S),a[C].add(_),a[x].add(_),a[v].add(_),c[C].add(m),c[x].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,x=E.length;C<x;++C){const v=E[C],S=v.start,w=v.count;for(let I=S,D=S+w;I<D;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const T=new K,M=new K,U=new K,L=new K;function A(C){U.fromBufferAttribute(r,C),L.copy(U);const x=a[C];T.copy(x),T.sub(U.multiplyScalar(U.dot(x))).normalize(),M.crossVectors(L,x);const S=M.dot(c[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,S)}for(let C=0,x=E.length;C<x;++C){const v=E[C],S=v.start,w=v.count;for(let I=S,D=S+w;I<D;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new K,s=new K,o=new K,a=new K,c=new K,l=new K,u=new K,d=new K;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let h=0;h<u;h++)p[g++]=l[f++]}return new sn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],f=e(p,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new pt,kn=new ov,Dr=new Ca,Gc=new K,Ur=new K,Nr=new K,Or=new K,Ys=new K,Fr=new K,Wc=new K,kr=new K;class Jt extends zt{constructor(e=new ii,t=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Ys.fromBufferAttribute(d,e),o?Fr.addScaledVector(Ys,u):Fr.addScaledVector(Ys.sub(t),u))}t.add(Fr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(Dr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Dr,Gc)===null||kn.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Vc.copy(s).invert(),kn.copy(e.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],h=o[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,U=T;M<U;M+=3){const L=a.getX(M),A=a.getX(M+1),C=a.getX(M+2);r=Br(this,h,e,i,l,u,d,L,A,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,h=_;m<h;m+=3){const E=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);r=Br(this,o,e,i,l,u,d,E,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],h=o[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,U=T;M<U;M+=3){const L=M,A=M+1,C=M+2;r=Br(this,h,e,i,l,u,d,L,A,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,h=_;m<h;m+=3){const E=m,T=m+1,M=m+2;r=Br(this,o,e,i,l,u,d,E,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function gv(n,e,t,i,r,s,o,a){let c;if(e.side===Dt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ln,a),c===null)return null;kr.copy(a),kr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(kr);return l<t.near||l>t.far?null:{distance:l,point:kr.clone(),object:n}}function Br(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ur),n.getVertexPosition(c,Nr),n.getVertexPosition(l,Or);const u=gv(n,e,t,i,Ur,Nr,Or,Wc);if(u){const d=new K;Zt.getBarycoord(Wc,Ur,Nr,Or,d),r&&(u.uv=Zt.getInterpolatedAttribute(r,a,c,l,d,new tt)),s&&(u.uv1=Zt.getInterpolatedAttribute(s,a,c,l,d,new tt)),o&&(u.normal=Zt.getInterpolatedAttribute(o,a,c,l,d,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new K,materialIndex:0};Zt.getNormal(Ur,Nr,Or,p.normal),u.face=p,u.barycoord=d}return u}class pr extends ii{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ei(l,3)),this.setAttribute("normal",new ei(u,3)),this.setAttribute("uv",new ei(d,2));function g(_,m,h,E,T,M,U,L,A,C,x){const v=M/A,S=U/C,w=M/2,I=U/2,D=L/2,F=A+1,N=C+1;let Y=0,z=0;const Z=new K;for(let re=0;re<N;re++){const me=re*S-I;for(let ve=0;ve<F;ve++){const W=ve*v-w;Z[_]=W*E,Z[m]=me*T,Z[h]=D,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[h]=L>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(ve/A),d.push(1-re/C),Y+=1}}for(let re=0;re<C;re++)for(let me=0;me<A;me++){const ve=p+me+F*re,W=p+me+F*(re+1),k=p+(me+1)+F*(re+1),B=p+(me+1)+F*re;c.push(ve,W,B),c.push(W,k,B),z+=6}a.addGroup(f,z,x),f+=z,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Ui(n[t]);for(const r in i)e[r]=i[r]}return e}function vv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const _v={clone:Ui,merge:Tt};var xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=Sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wu extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new K,Xc=new tt,jc=new tt;class Kt extends wu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,jc),t.subVectors(jc,Xc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,_i=1;class yv extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(vi,_i,e,t);r.layers=this.layers,this.add(r);const s=new Kt(vi,_i,e,t);s.layers=this.layers,this.add(s);const o=new Kt(vi,_i,e,t);o.layers=this.layers,this.add(o);const a=new Kt(vi,_i,e,t);a.layers=this.layers,this.add(a);const c=new Kt(vi,_i,e,t);c.layers=this.layers,this.add(c);const l=new Kt(vi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Au extends Ut{constructor(e=[],t=Ii,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mv extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Au(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pr(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:Ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Cn});s.uniforms.tEquirect.value=t;const o=new Jt(r,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Mt),new yv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class zr extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ru extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zs=new K,Ev=new K,Tv=new Xe;class Vn{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Zs.subVectors(i,t).cross(Ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tv.getNormalMatrix(e),r=this.coplanarPoint(Zs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Ca,wv=new tt(.5,.5),Hr=new K;class Cu{constructor(e=new Vn,t=new Vn,i=new Vn,r=new Vn,s=new Vn,o=new Vn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],p=r[7],f=r[8],g=r[9],_=r[10],m=r[11],h=r[12],E=r[13],T=r[14],M=r[15];if(i[0].setComponents(c-s,p-l,m-f,M-h).normalize(),i[1].setComponents(c+s,p+l,m+f,M+h).normalize(),i[2].setComponents(c+o,p+u,m+g,M+E).normalize(),i[3].setComponents(c-o,p-u,m-g,M-E).normalize(),i[4].setComponents(c-a,p-d,m-_,M-T).normalize(),t===mn)i[5].setComponents(c+a,p+d,m+_,M+T).normalize();else if(t===ss)i[5].setComponents(a,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){Bn.center.set(0,0,0);const t=wv.distanceTo(e.center);return Bn.radius=.7071067811865476+t,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hr.x=r.normal.x>0?e.max.x:e.min.x,Hr.y=r.normal.y>0?e.max.y:e.min.y,Hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pu extends Ut{constructor(e,t,i=ni,r,s,o,a=Qt,c=Qt,l,u=rr,d=1){if(u!==rr&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fi extends ii{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,f=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const E=h*p-o;for(let T=0;T<l;T++){const M=T*d-s;g.push(M,-E,0),_.push(0,0,1),m.push(T/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<a;E++){const T=E+l*h,M=E+l*(h+1),U=E+1+l*(h+1),L=E+1+l*h;f.push(T,M,L),f.push(M,U,L)}this.setIndex(f),this.setAttribute("position",new ei(g,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Av extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rv extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pa extends wu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cv extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $c(n,e,t,i){const r=Pv(i);switch(t){case hu:return n*e;case pu:return n*e/r.components*r.byteLength;case Ta:return n*e/r.components*r.byteLength;case mu:return n*e*2/r.components*r.byteLength;case wa:return n*e*2/r.components*r.byteLength;case fu:return n*e*3/r.components*r.byteLength;case It:return n*e*4/r.components*r.byteLength;case Aa:return n*e*4/r.components*r.byteLength;case qr:case Yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Po:case Lo:return Math.max(n,16)*Math.max(e,8)/4;case Co:case Io:return Math.max(n,8)*Math.max(e,8)/2;case Do:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jr:case Ko:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gu:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qo:case ea:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pv(n){switch(n){case _n:case lu:return{byteLength:1,components:1};case nr:case uu:case ur:return{byteLength:2,components:1};case ba:case Ea:return{byteLength:2,components:4};case ni:case Ma:case Xt:return{byteLength:4,components:1};case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);function Iu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Iv(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,t_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,n_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,m_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,T_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,P_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,m0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,g0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,P0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,J0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Lv,alphahash_pars_fragment:Dv,alphamap_fragment:Uv,alphamap_pars_fragment:Nv,alphatest_fragment:Ov,alphatest_pars_fragment:Fv,aomap_fragment:kv,aomap_pars_fragment:Bv,batching_pars_vertex:zv,batching_vertex:Hv,begin_vertex:Vv,beginnormal_vertex:Gv,bsdfs:Wv,iridescence_fragment:Xv,bumpmap_pars_fragment:jv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:qv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:Kv,color_fragment:Zv,color_pars_fragment:Jv,color_pars_vertex:Qv,color_vertex:e_,common:t_,cube_uv_reflection_fragment:n_,defaultnormal_vertex:i_,displacementmap_pars_vertex:r_,displacementmap_vertex:s_,emissivemap_fragment:o_,emissivemap_pars_fragment:a_,colorspace_fragment:c_,colorspace_pars_fragment:l_,envmap_fragment:u_,envmap_common_pars_fragment:d_,envmap_pars_fragment:h_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:E_,envmap_vertex:p_,fog_vertex:m_,fog_pars_vertex:g_,fog_fragment:v_,fog_pars_fragment:__,gradientmap_pars_fragment:x_,lightmap_pars_fragment:S_,lights_lambert_fragment:y_,lights_lambert_pars_fragment:M_,lights_pars_begin:b_,lights_toon_fragment:T_,lights_toon_pars_fragment:w_,lights_phong_fragment:A_,lights_phong_pars_fragment:R_,lights_physical_fragment:C_,lights_physical_pars_fragment:P_,lights_fragment_begin:I_,lights_fragment_maps:L_,lights_fragment_end:D_,logdepthbuf_fragment:U_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:O_,logdepthbuf_vertex:F_,map_fragment:k_,map_pars_fragment:B_,map_particle_fragment:z_,map_particle_pars_fragment:H_,metalnessmap_fragment:V_,metalnessmap_pars_fragment:G_,morphinstance_vertex:W_,morphcolor_vertex:X_,morphnormal_vertex:j_,morphtarget_pars_vertex:$_,morphtarget_vertex:q_,normal_fragment_begin:Y_,normal_fragment_maps:K_,normal_pars_fragment:Z_,normal_pars_vertex:J_,normal_vertex:Q_,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:n0,clearcoat_pars_fragment:i0,iridescence_pars_fragment:r0,opaque_fragment:s0,packing:o0,premultiplied_alpha_fragment:a0,project_vertex:c0,dithering_fragment:l0,dithering_pars_fragment:u0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:p0,shadowmap_vertex:m0,shadowmask_pars_fragment:g0,skinbase_vertex:v0,skinning_pars_vertex:_0,skinning_vertex:x0,skinnormal_vertex:S0,specularmap_fragment:y0,specularmap_pars_fragment:M0,tonemapping_fragment:b0,tonemapping_pars_fragment:E0,transmission_fragment:T0,transmission_pars_fragment:w0,uv_pars_fragment:A0,uv_pars_vertex:R0,uv_vertex:C0,worldpos_vertex:P0,background_vert:I0,background_frag:L0,backgroundCube_vert:D0,backgroundCube_frag:U0,cube_vert:N0,cube_frag:O0,depth_vert:F0,depth_frag:k0,distanceRGBA_vert:B0,distanceRGBA_frag:z0,equirect_vert:H0,equirect_frag:V0,linedashed_vert:G0,linedashed_frag:W0,meshbasic_vert:X0,meshbasic_frag:j0,meshlambert_vert:$0,meshlambert_frag:q0,meshmatcap_vert:Y0,meshmatcap_frag:K0,meshnormal_vert:Z0,meshnormal_frag:J0,meshphong_vert:Q0,meshphong_frag:ex,meshphysical_vert:tx,meshphysical_frag:nx,meshtoon_vert:ix,meshtoon_frag:rx,points_vert:sx,points_frag:ox,shadow_vert:ax,shadow_frag:cx,sprite_vert:lx,sprite_frag:ux},Me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},tn={basic:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Tt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Tt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new st(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Tt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Tt([Me.points,Me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Tt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Tt([Me.common,Me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Tt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Tt([Me.sprite,Me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Tt([Me.common,Me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Tt([Me.lights,Me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};tn.physical={uniforms:Tt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Vr={r:0,b:0,g:0},zn=new xn,dx=new pt;function hx(n,e,t,i,r,s,o){const a=new st(0);let c=s===!0?0:1,l,u,d=null,p=0,f=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function _(T){let M=!1;const U=g(T);U===null?h(a,c):U&&U.isColor&&(h(U,1),M=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const U=g(M);U&&(U.isCubeTexture||U.mapping===as)?(u===void 0&&(u=new Jt(new pr(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Ui(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zn.copy(M.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(zn)),u.material.toneMapped=Qe.getTransfer(U.colorSpace)!==rt,(d!==U||p!==U.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=U,p=U.version,f=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new Jt(new Fi(2,2),new Pt({name:"BackgroundMaterial",uniforms:Ui(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(U.colorSpace)!==rt,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||p!==U.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=U,p=U.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,M){T.getRGB(Vr,Tu(n)),i.buffers.color.setClear(Vr.r,Vr.g,Vr.b,M,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),c=M,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(a,c)},render:_,addToRenderList:m,dispose:E}}function fx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(v,S,w,I,D){let F=!1;const N=d(I,w,S);s!==N&&(s=N,l(s.object)),F=f(v,I,w,D),F&&g(v,I,w,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(v,S,w,I),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,S,w){const I=w.wireframe===!0;let D=i[v.id];D===void 0&&(D={},i[v.id]=D);let F=D[S.id];F===void 0&&(F={},D[S.id]=F);let N=F[I];return N===void 0&&(N=p(c()),F[I]=N),N}function p(v){const S=[],w=[],I=[];for(let D=0;D<t;D++)S[D]=0,w[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:w,attributeDivisors:I,object:v,attributes:{},index:null}}function f(v,S,w,I){const D=s.attributes,F=S.attributes;let N=0;const Y=w.getAttributes();for(const z in Y)if(Y[z].location>=0){const re=D[z];let me=F[z];if(me===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function g(v,S,w,I){const D={},F=S.attributes;let N=0;const Y=w.getAttributes();for(const z in Y)if(Y[z].location>=0){let re=F[z];re===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const me={};me.attribute=re,re&&re.data&&(me.data=re.data),D[z]=me,N++}s.attributes=D,s.attributesNum=N,s.index=I}function _(){const v=s.newAttributes;for(let S=0,w=v.length;S<w;S++)v[S]=0}function m(v){h(v,0)}function h(v,S){const w=s.newAttributes,I=s.enabledAttributes,D=s.attributeDivisors;w[v]=1,I[v]===0&&(n.enableVertexAttribArray(v),I[v]=1),D[v]!==S&&(n.vertexAttribDivisor(v,S),D[v]=S)}function E(){const v=s.newAttributes,S=s.enabledAttributes;for(let w=0,I=S.length;w<I;w++)S[w]!==v[w]&&(n.disableVertexAttribArray(w),S[w]=0)}function T(v,S,w,I,D,F,N){N===!0?n.vertexAttribIPointer(v,S,w,D,F):n.vertexAttribPointer(v,S,w,I,D,F)}function M(v,S,w,I){_();const D=I.attributes,F=w.getAttributes(),N=S.defaultAttributeValues;for(const Y in F){const z=F[Y];if(z.location>=0){let Z=D[Y];if(Z===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),Z!==void 0){const re=Z.normalized,me=Z.itemSize,ve=e.get(Z);if(ve===void 0)continue;const W=ve.buffer,k=ve.type,B=ve.bytesPerElement,ie=k===n.INT||k===n.UNSIGNED_INT||Z.gpuType===Ma;if(Z.isInterleavedBufferAttribute){const te=Z.data,de=te.stride,Pe=Z.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)h(z.location+Ae,te.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)m(z.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Ae=0;Ae<z.locationSize;Ae++)T(z.location+Ae,me/z.locationSize,k,re,de*B,(Pe+me/z.locationSize*Ae)*B,ie)}else{if(Z.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)h(z.location+te,Z.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let te=0;te<z.locationSize;te++)m(z.location+te);n.bindBuffer(n.ARRAY_BUFFER,W);for(let te=0;te<z.locationSize;te++)T(z.location+te,me/z.locationSize,k,re,me*B,me/z.locationSize*te*B,ie)}}else if(N!==void 0){const re=N[Y];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(z.location,re);break;case 3:n.vertexAttrib3fv(z.location,re);break;case 4:n.vertexAttrib4fv(z.location,re);break;default:n.vertexAttrib1fv(z.location,re)}}}}E()}function U(){C();for(const v in i){const S=i[v];for(const w in S){const I=S[w];for(const D in I)u(I[D].object),delete I[D];delete S[w]}delete i[v]}}function L(v){if(i[v.id]===void 0)return;const S=i[v.id];for(const w in S){const I=S[w];for(const D in I)u(I[D].object),delete I[D];delete S[w]}delete i[v.id]}function A(v){for(const S in i){const w=i[S];if(w[v.id]===void 0)continue;const I=w[v.id];for(const D in I)u(I[D].object),delete I[D];delete w[v.id]}}function C(){x(),o=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:x,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function px(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*p[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function mx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==It&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==_n&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xt&&!C)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:U,maxSamples:L}}function gx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Vn,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const E=s?0:i,T=E*4;let M=h.clippingState||null;c.value=M,M=u(g,p,T,f);for(let U=0;U!==T;++U)M[U]=t[U];h.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const h=f+_*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,M=f;T!==_;++T,M+=4)o.copy(d[T]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vx(n){let e=new WeakMap;function t(o,a){return a===To?o.mapping=Ii:a===wo&&(o.mapping=Li),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===wo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Mv(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const bi=4,qc=[.125,.215,.35,.446,.526,.582],jn=20,Js=new Pa,Yc=new st;let Qs=null,eo=0,to=0,no=!1;const Gn=(1+Math.sqrt(5))/2,xi=1/Gn,Kc=[new K(-Gn,xi,0),new K(Gn,xi,0),new K(-xi,0,Gn),new K(xi,0,Gn),new K(0,Gn,-xi),new K(0,Gn,xi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],_x=new K;class Zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=_x}=s;Qs=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qs,eo,to),this._renderer.xr.enabled=no,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qs=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:ur,format:It,colorSpace:Di,depthBuffer:!1},r=Jc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xx(s)),this._blurMaterial=Sx(s,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,i,r,s){const c=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Yc),d.toneMapping=Pn,d.autoClear=!1;const g=new Mu({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),_=new Jt(new pr,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(Yc),m=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):T===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));const M=this._cubeSize;Gr(r,T*M,E>2?M:0,M,M),d.setRenderTarget(r),m&&d.render(_,c),d.render(e,c)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ii||e.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Gr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Js)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kc[(r-s-1)%Kc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Jt(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*jn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):jn;m>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const h=[];let E=0;for(let A=0;A<jn;++A){const C=A/_,x=Math.exp(-C*C/2);h.push(x),A===0?E+=x:A<m&&(E+=2*x)}for(let A=0;A<h.length;A++)h[A]=h[A]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:T}=this;p.dTheta.value=g,p.mipInt.value=T-i;const M=this._sizeLods[r],U=3*M*(r>T-bi?r-T+bi:0),L=4*(this._cubeSize-M);Gr(t,U,L,3*M,2*M),c.setRenderTarget(t),c.render(d,Js)}}function xx(n){const e=[],t=[],i=[];let r=n;const s=n-bi+1+qc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-bi?c=qc[o-n+bi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,h=1,E=new Float32Array(_*g*f),T=new Float32Array(m*g*f),M=new Float32Array(h*g*f);for(let L=0;L<f;L++){const A=L%3*2/3-1,C=L>2?0:-1,x=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(x,_*g*L),T.set(p,m*g*L);const v=[L,L,L,L,L,L];M.set(v,h*g*L)}const U=new ii;U.setAttribute("position",new sn(E,_)),U.setAttribute("uv",new sn(T,m)),U.setAttribute("faceIndex",new sn(M,h)),e.push(U),r>bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jc(n,e,t){const i=new rn(n,e,t);return i.texture.mapping=as,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Sx(n,e,t){const i=new Float32Array(jn),r=new K(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Qc(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function el(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===To||c===wo,u=c===Ii||c===Li;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Zc(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Zc(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Mx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ai("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bx(n,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const f in p)e.update(p[f],n.ARRAY_BUFFER)}function l(d){const p=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let T=0,M=E.length;T<M;T+=3){const U=E[T+0],L=E[T+1],A=E[T+2];p.push(U,L,L,A,A,U)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,M=E.length/3-1;T<M;T+=3){const U=T+0,L=T+1,A=T+2;p.push(U,L,L,A,A,U)}}else return;const m=new(_u(p)?Eu:bu)(p,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Ex(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*o),t.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*o,g),t.update(f,i,g))}function u(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let m=0;for(let h=0;h<g;h++)m+=f[h];t.update(m,i,1)}function d(p,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)l(p[h]/o,f[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,_,0,g);let h=0;for(let E=0;E<g;E++)h+=f[E]*_[E];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Tx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wx(n,e,t){const i=new WeakMap,r=new ht;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let f=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",f)};p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let U=a.attributes.position.count*M,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const A=new Float32Array(U*L*4*d),C=new xu(A,U,L,d);C.type=Xt,C.needsUpdate=!0;const x=M*4;for(let v=0;v<d;v++){const S=h[v],w=E[v],I=T[v],D=U*L*4*v;for(let F=0;F<S.count;F++){const N=F*x;g===!0&&(r.fromBufferAttribute(S,F),A[D+N+0]=r.x,A[D+N+1]=r.y,A[D+N+2]=r.z,A[D+N+3]=0),_===!0&&(r.fromBufferAttribute(w,F),A[D+N+4]=r.x,A[D+N+5]=r.y,A[D+N+6]=r.z,A[D+N+7]=0),m===!0&&(r.fromBufferAttribute(I,F),A[D+N+8]=r.x,A[D+N+9]=r.y,A[D+N+10]=r.z,A[D+N+11]=I.itemSize===4?r.w:1)}}p={count:d,texture:C,size:new tt(U,L)},i.set(a,p),a.addEventListener("dispose",f)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Ax(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Lu=new Ut,tl=new Pu(1,1),Du=new xu,Uu=new rv,Nu=new Au,nl=[],il=[],rl=new Float32Array(16),sl=new Float32Array(9),ol=new Float32Array(4);function ki(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nl[r];if(s===void 0&&(s=new Float32Array(r),nl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ls(n,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;ol.set(i),n.uniformMatrix2fv(this.addr,!1,ol),vt(t,i)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;sl.set(i),n.uniformMatrix3fv(this.addr,!1,sl),vt(t,i)}}function Ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;rl.set(i),n.uniformMatrix4fv(this.addr,!1,rl),vt(t,i)}}function Nx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tl.compareFunction=vu,s=tl):s=Lu,t.setTexture2D(e||s,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uu,r)}function Xx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nu,r)}function jx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Du,r)}function $x(n){switch(n){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Ix;case 35674:return Lx;case 35675:return Dx;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Ox;case 35668:case 35672:return Fx;case 35669:case 35673:return kx;case 5125:return Bx;case 36294:return zx;case 36295:return Hx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return jx}}function qx(n,e){n.uniform1fv(this.addr,e)}function Yx(n,e){const t=ki(e,this.size,2);n.uniform2fv(this.addr,t)}function Kx(n,e){const t=ki(e,this.size,3);n.uniform3fv(this.addr,t)}function Zx(n,e){const t=ki(e,this.size,4);n.uniform4fv(this.addr,t)}function Jx(n,e){const t=ki(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qx(n,e){const t=ki(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eS(n,e){const t=ki(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tS(n,e){n.uniform1iv(this.addr,e)}function nS(n,e){n.uniform2iv(this.addr,e)}function iS(n,e){n.uniform3iv(this.addr,e)}function rS(n,e){n.uniform4iv(this.addr,e)}function sS(n,e){n.uniform1uiv(this.addr,e)}function oS(n,e){n.uniform2uiv(this.addr,e)}function aS(n,e){n.uniform3uiv(this.addr,e)}function cS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){const i=this.cache,r=e.length,s=ls(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lu,s[o])}function uS(n,e,t){const i=this.cache,r=e.length,s=ls(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Uu,s[o])}function dS(n,e,t){const i=this.cache,r=e.length,s=ls(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nu,s[o])}function hS(n,e,t){const i=this.cache,r=e.length,s=ls(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Du,s[o])}function fS(n){switch(n){case 5126:return qx;case 35664:return Yx;case 35665:return Kx;case 35666:return Zx;case 35674:return Jx;case 35675:return Qx;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return oS;case 36295:return aS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return hS}}class pS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$x(t.type)}}class mS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fS(t.type)}}class gS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const io=/(\w+)(\])?(\[|\.)?/g;function al(n,e){n.seq.push(e),n.map[e.id]=e}function vS(n,e,t){const i=n.name,r=i.length;for(io.lastIndex=0;;){const s=io.exec(i),o=io.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){al(t,l===void 0?new pS(a,n,e):new mS(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new gS(a),al(t,d)),t=d}}}class Qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function cl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _S=37297;let xS=0;function SS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ll=new Xe;function yS(n){Qe._getMatrix(ll,Qe.workingColorSpace,n);const e=`mat3( ${ll.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case rs:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ul(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+SS(n.getShaderSource(e),o)}else return r}function MS(n,e){const t=yS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bS(n,e){let t;switch(e){case Cg:t="Linear";break;case Pg:t="Reinhard";break;case Ig:t="Cineon";break;case Lg:t="ACESFilmic";break;case Ug:t="AgX";break;case Ng:t="Neutral";break;case Dg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new K;function ES(){Qe.getLuminanceCoefficients(Wr);const n=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function wS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yi(n){return n!==""}function dl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(n){return n.replace(RS,PS)}const CS=new Map;function PS(n,e){let t=je[e];if(t===void 0){const i=CS.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return na(t)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(n){return n.replace(IS,LS)}function LS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function US(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ii:case Li:e="ENVMAP_TYPE_CUBE";break;case as:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NS(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Li&&(e="ENVMAP_MODE_REFRACTION"),e}function OS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case au:e="ENVMAP_BLENDING_MULTIPLY";break;case Ag:e="ENVMAP_BLENDING_MIX";break;case Rg:e="ENVMAP_BLENDING_ADD";break}return e}function FS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function kS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=DS(t),l=US(t),u=NS(t),d=OS(t),p=FS(t),f=TS(t),g=wS(s),_=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),h.length>0&&(h+=`
`)):(m=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),h=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?je.tonemapping_pars_fragment:"",t.toneMapping!==Pn?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),ES(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),o=na(o),o=dl(o,t),o=hl(o,t),a=na(a),a=dl(a,t),a=hl(a,t),o=fl(o),a=fl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=E+m+o,M=E+h+a,U=cl(r,r.VERTEX_SHADER,T),L=cl(r,r.FRAGMENT_SHADER,M);r.attachShader(_,U),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(S){if(n.debug.checkShaderErrors){const w=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(U).trim(),D=r.getShaderInfoLog(L).trim();let F=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,U,L);else{const Y=ul(r,U,"vertex"),z=ul(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+w+`
`+Y+`
`+z)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(I===""||D==="")&&(N=!1);N&&(S.diagnostics={runnable:F,programLog:w,vertexShader:{log:I,prefix:m},fragmentShader:{log:D,prefix:h}})}r.deleteShader(U),r.deleteShader(L),C=new Qr(r,_),x=AS(r,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,_S)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=L,this}let BS=0;class zS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HS(e),t.set(e,i)),i}}class HS{constructor(e){this.id=BS++,this.code=e,this.usedTimes=0}}function VS(n,e,t,i,r,s,o){const a=new Su,c=new zS,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,v,S,w,I){const D=w.fog,F=I.geometry,N=x.isMeshStandardMaterial?w.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||N),z=Y&&Y.mapping===as?Y.image.height:null,Z=g[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,me=re!==void 0?re.length:0;let ve=0;F.morphAttributes.position!==void 0&&(ve=1),F.morphAttributes.normal!==void 0&&(ve=2),F.morphAttributes.color!==void 0&&(ve=3);let W,k,B,ie;if(Z){const Ze=tn[Z];W=Ze.vertexShader,k=Ze.fragmentShader}else W=x.vertexShader,k=x.fragmentShader,c.update(x),B=c.getVertexShaderID(x),ie=c.getFragmentShaderID(x);const te=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),Pe=I.isInstancedMesh===!0,Ae=I.isBatchedMesh===!0,ue=!!x.map,pe=!!x.matcap,he=!!Y,P=!!x.aoMap,ke=!!x.lightMap,ye=!!x.bumpMap,Le=!!x.normalMap,_e=!!x.displacementMap,De=!!x.emissiveMap,Re=!!x.metalnessMap,He=!!x.roughnessMap,qe=x.anisotropy>0,R=x.clearcoat>0,y=x.dispersion>0,X=x.iridescence>0,J=x.sheen>0,Q=x.transmission>0,j=qe&&!!x.anisotropyMap,le=R&&!!x.clearcoatMap,ce=R&&!!x.clearcoatNormalMap,Ee=R&&!!x.clearcoatRoughnessMap,Ue=X&&!!x.iridescenceMap,oe=X&&!!x.iridescenceThicknessMap,we=J&&!!x.sheenColorMap,Be=J&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,xe=!!x.specularColorMap,Ve=!!x.specularIntensityMap,O=Q&&!!x.transmissionMap,ge=Q&&!!x.thicknessMap,ae=!!x.gradientMap,Se=!!x.alphaMap,se=x.alphaTest>0,ne=!!x.alphaHash,be=!!x.extensions;let Oe=Pn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const nt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:k,defines:x.defines,customVertexShaderID:B,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&I._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,instancingMorph:Pe&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Di,alphaToCoverage:!!x.alphaToCoverage,map:ue,matcap:pe,envMap:he,envMapMode:he&&Y.mapping,envMapCubeUVHeight:z,aoMap:P,lightMap:ke,bumpMap:ye,normalMap:Le,displacementMap:p&&_e,emissiveMap:De,normalMapObjectSpace:Le&&x.normalMapType===zg,normalMapTangentSpace:Le&&x.normalMapType===Bg,metalnessMap:Re,roughnessMap:He,anisotropy:qe,anisotropyMap:j,clearcoat:R,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:X,iridescenceMap:Ue,iridescenceThicknessMap:oe,sheen:J,sheenColorMap:we,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:xe,specularIntensityMap:Ve,transmission:Q,transmissionMap:O,thicknessMap:ge,gradientMap:ae,opaque:x.transparent===!1&&x.blending===wi&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:se,alphaHash:ne,combine:x.combine,mapUv:ue&&_(x.map.channel),aoMapUv:P&&_(x.aoMap.channel),lightMapUv:ke&&_(x.lightMap.channel),bumpMapUv:ye&&_(x.bumpMap.channel),normalMapUv:Le&&_(x.normalMap.channel),displacementMapUv:_e&&_(x.displacementMap.channel),emissiveMapUv:De&&_(x.emissiveMap.channel),metalnessMapUv:Re&&_(x.metalnessMap.channel),roughnessMapUv:He&&_(x.roughnessMap.channel),anisotropyMapUv:j&&_(x.anisotropyMap.channel),clearcoatMapUv:le&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(x.sheenRoughnessMap.channel),specularMapUv:Ne&&_(x.specularMap.channel),specularColorMapUv:xe&&_(x.specularColorMap.channel),specularIntensityMapUv:Ve&&_(x.specularIntensityMap.channel),transmissionMapUv:O&&_(x.transmissionMap.channel),thicknessMapUv:ge&&_(x.thicknessMap.channel),alphaMapUv:Se&&_(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Le||qe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(ue||Se),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:de,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ve,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ue&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===Dt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function h(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const S in x.defines)v.push(S),v.push(x.defines[S]);return x.isRawShaderMaterial===!1&&(E(v,x),T(v,x),v.push(n.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function E(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function T(x,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const v=g[x.type];let S;if(v){const w=tn[v];S=_v.clone(w.uniforms)}else S=x.uniforms;return S}function U(x,v){let S;for(let w=0,I=u.length;w<I;w++){const D=u[w];if(D.cacheKey===v){S=D,++S.usedTimes;break}}return S===void 0&&(S=new kS(n,v,x,s),u.push(S)),S}function L(x){if(--x.usedTimes===0){const v=u.indexOf(x);u[v]=u[u.length-1],u.pop(),x.destroy()}}function A(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:U,releaseProgram:L,releaseShaderCache:A,programs:u,dispose:C}}function GS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function WS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ml(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,f,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=f,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,p,f,g,_,m){const h=o(d,p,f,g,_,m);f.transmission>0?i.push(h):f.transparent===!0?r.push(h):t.push(h)}function c(d,p,f,g,_,m){const h=o(d,p,f,g,_,m);f.transmission>0?i.unshift(h):f.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,p){t.length>1&&t.sort(d||WS),i.length>1&&i.sort(p||ml),r.length>1&&r.sort(p||ml)}function u(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function XS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new gl,n.set(i,[o])):r>=s.length?(o=new gl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new st};break;case"SpotLight":t={position:new K,direction:new K,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function $S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qS=0;function YS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KS(n){const e=new jS,t=$S(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new K);const r=new K,s=new pt,o=new pt;function a(l){let u=0,d=0,p=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,h=0,E=0,T=0,M=0,U=0,L=0,A=0;l.sort(YS);for(let x=0,v=l.length;x<v;x++){const S=l[x],w=S.color,I=S.intensity,D=S.distance,F=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=w.r*I,d+=w.g*I,p+=w.b*I;else if(S.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(S.sh.coefficients[N],I);A++}else if(S.isDirectionalLight){const N=e.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Y=S.shadow,z=t.get(S);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=S.shadow.matrix,E++}i.directional[f]=N,f++}else if(S.isSpotLight){const N=e.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(w).multiplyScalar(I),N.distance=D,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,i.spot[_]=N;const Y=S.shadow;if(S.map&&(i.spotLightMap[U]=S.map,U++,Y.updateMatrices(S),S.castShadow&&L++),i.spotLightMatrix[_]=Y.matrix,S.castShadow){const z=t.get(S);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=F,M++}_++}else if(S.isRectAreaLight){const N=e.get(S);N.color.copy(w).multiplyScalar(I),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=N,m++}else if(S.isPointLight){const N=e.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){const Y=S.shadow,z=t.get(S);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=S.shadow.matrix,T++}i.point[g]=N,g++}else if(S.isHemisphereLight){const N=e.get(S);N.skyColor.copy(S.color).multiplyScalar(I),N.groundColor.copy(S.groundColor).multiplyScalar(I),i.hemi[h]=N,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==M||C.numSpotMaps!==U||C.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+U-L,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=M,C.numSpotMaps=U,C.numLightProbes=A,i.version=qS++)}function c(l,u){let d=0,p=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){const T=l[h];if(T.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(T.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function vl(n){const e=new KS(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ZS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new vl(n),e.set(r,[a])):s>=o.length?(a=new vl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ey(n,e,t){let i=new Cu;const r=new tt,s=new tt,o=new ht,a=new Av({depthPacking:kg}),c=new Rv,l={},u=t.maxTextureSize,d={[Ln]:Dt,[Dt]:Ln,[pn]:pn},p=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:JS,fragmentShader:QS}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new ii;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let h=this.type;this.render=function(L,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const x=n.getRenderTarget(),v=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),w=n.state;w.setBlending(Cn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const I=h!==fn&&this.type===fn,D=h===fn&&this.type!==fn;for(let F=0,N=L.length;F<N;F++){const Y=L[F],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Z=z.getFrameExtents();if(r.multiply(Z),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,z.mapSize.y=s.y)),z.map===null||I===!0||D===!0){const me=this.type!==fn?{minFilter:Qt,magFilter:Qt}:{};z.map!==null&&z.map.dispose(),z.map=new rn(r.x,r.y,me),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const re=z.getViewportCount();for(let me=0;me<re;me++){const ve=z.getViewport(me);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),w.viewport(o),z.updateMatrices(Y,me),i=z.getFrustum(),M(A,C,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===fn&&E(z,C),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(x,v,S)};function E(L,A){const C=e.update(_);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new rn(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(A,null,C,p,_,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(A,null,C,f,_,null)}function T(L,A,C,x){let v=null;const S=C.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(S!==void 0)v=S;else if(v=C.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const w=v.uuid,I=A.uuid;let D=l[w];D===void 0&&(D={},l[w]=D);let F=D[I];F===void 0&&(F=v.clone(),D[I]=F,A.addEventListener("dispose",U)),v=F}if(v.visible=A.visible,v.wireframe=A.wireframe,x===fn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const w=n.properties.get(v);w.light=C}return v}function M(L,A,C,x,v){if(L.visible===!1)return;if(L.layers.test(A.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&v===fn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,L.matrixWorld);const I=e.update(L),D=L.material;if(Array.isArray(D)){const F=I.groups;for(let N=0,Y=F.length;N<Y;N++){const z=F[N],Z=D[z.materialIndex];if(Z&&Z.visible){const re=T(L,Z,x,v);L.onBeforeShadow(n,L,A,C,I,re,z),n.renderBufferDirect(C,null,I,re,L,z),L.onAfterShadow(n,L,A,C,I,re,z)}}}else if(D.visible){const F=T(L,D,x,v);L.onBeforeShadow(n,L,A,C,I,F,null),n.renderBufferDirect(C,null,I,F,L,null),L.onAfterShadow(n,L,A,C,I,F,null)}}const w=L.children;for(let I=0,D=w.length;I<D;I++)M(w[I],A,C,x,v)}function U(L){L.target.removeEventListener("dispose",U);for(const C in l){const x=l[C],v=L.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const ty={[_o]:xo,[So]:bo,[yo]:Eo,[Pi]:Mo,[xo]:_o,[bo]:So,[Eo]:yo,[Mo]:Pi};function ny(n,e){function t(){let O=!1;const ge=new ht;let ae=null;const Se=new ht(0,0,0,0);return{setMask:function(se){ae!==se&&!O&&(n.colorMask(se,se,se,se),ae=se)},setLocked:function(se){O=se},setClear:function(se,ne,be,Oe,nt){nt===!0&&(se*=Oe,ne*=Oe,be*=Oe),ge.set(se,ne,be,Oe),Se.equals(ge)===!1&&(n.clearColor(se,ne,be,Oe),Se.copy(ge))},reset:function(){O=!1,ae=null,Se.set(-1,0,0,0)}}}function i(){let O=!1,ge=!1,ae=null,Se=null,se=null;return{setReversed:function(ne){if(ge!==ne){const be=e.get("EXT_clip_control");ne?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ge=ne;const Oe=se;se=null,this.setClear(Oe)}},getReversed:function(){return ge},setTest:function(ne){ne?te(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(ne){ae!==ne&&!O&&(n.depthMask(ne),ae=ne)},setFunc:function(ne){if(ge&&(ne=ty[ne]),Se!==ne){switch(ne){case _o:n.depthFunc(n.NEVER);break;case xo:n.depthFunc(n.ALWAYS);break;case So:n.depthFunc(n.LESS);break;case Pi:n.depthFunc(n.LEQUAL);break;case yo:n.depthFunc(n.EQUAL);break;case Mo:n.depthFunc(n.GEQUAL);break;case bo:n.depthFunc(n.GREATER);break;case Eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ne}},setLocked:function(ne){O=ne},setClear:function(ne){se!==ne&&(ge&&(ne=1-ne),n.clearDepth(ne),se=ne)},reset:function(){O=!1,ae=null,Se=null,se=null,ge=!1}}}function r(){let O=!1,ge=null,ae=null,Se=null,se=null,ne=null,be=null,Oe=null,nt=null;return{setTest:function(Ze){O||(Ze?te(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Ze){ge!==Ze&&!O&&(n.stencilMask(Ze),ge=Ze)},setFunc:function(Ze,bt,xt){(ae!==Ze||Se!==bt||se!==xt)&&(n.stencilFunc(Ze,bt,xt),ae=Ze,Se=bt,se=xt)},setOp:function(Ze,bt,xt){(ne!==Ze||be!==bt||Oe!==xt)&&(n.stencilOp(Ze,bt,xt),ne=Ze,be=bt,Oe=xt)},setLocked:function(Ze){O=Ze},setClear:function(Ze){nt!==Ze&&(n.clearStencil(Ze),nt=Ze)},reset:function(){O=!1,ge=null,ae=null,Se=null,se=null,ne=null,be=null,Oe=null,nt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,f=[],g=null,_=!1,m=null,h=null,E=null,T=null,M=null,U=null,L=null,A=new st(0,0,0),C=0,x=!1,v=null,S=null,w=null,I=null,D=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Y=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=Y>=2);let Z=null,re={};const me=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),W=new ht().fromArray(me),k=new ht().fromArray(ve);function B(O,ge,ae,Se){const se=new Uint8Array(4),ne=n.createTexture();n.bindTexture(O,ne),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<ae;be++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ge+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return ne}const ie={};ie[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(Pi),ye(!1),Le(Ec),te(n.CULL_FACE),P(Cn);function te(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function de(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Pe(O,ge){return d[O]!==ge?(n.bindFramebuffer(O,ge),d[O]=ge,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ge),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ae(O,ge){let ae=f,Se=!1;if(O){ae=p.get(ge),ae===void 0&&(ae=[],p.set(ge,ae));const se=O.textures;if(ae.length!==se.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,be=se.length;ne<be;ne++)ae[ne]=n.COLOR_ATTACHMENT0+ne;ae.length=se.length,Se=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ae)}function ue(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const pe={[Xn]:n.FUNC_ADD,[ug]:n.FUNC_SUBTRACT,[dg]:n.FUNC_REVERSE_SUBTRACT};pe[hg]=n.MIN,pe[fg]=n.MAX;const he={[pg]:n.ZERO,[mg]:n.ONE,[gg]:n.SRC_COLOR,[go]:n.SRC_ALPHA,[Mg]:n.SRC_ALPHA_SATURATE,[Sg]:n.DST_COLOR,[_g]:n.DST_ALPHA,[vg]:n.ONE_MINUS_SRC_COLOR,[vo]:n.ONE_MINUS_SRC_ALPHA,[yg]:n.ONE_MINUS_DST_COLOR,[xg]:n.ONE_MINUS_DST_ALPHA,[bg]:n.CONSTANT_COLOR,[Eg]:n.ONE_MINUS_CONSTANT_COLOR,[Tg]:n.CONSTANT_ALPHA,[wg]:n.ONE_MINUS_CONSTANT_ALPHA};function P(O,ge,ae,Se,se,ne,be,Oe,nt,Ze){if(O===Cn){_===!0&&(de(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),O!==lg){if(O!==m||Ze!==x){if((h!==Xn||M!==Xn)&&(n.blendEquation(n.FUNC_ADD),h=Xn,M=Xn),Ze)switch(O){case wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.ONE,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,T=null,U=null,L=null,A.set(0,0,0),C=0,m=O,x=Ze}return}se=se||ge,ne=ne||ae,be=be||Se,(ge!==h||se!==M)&&(n.blendEquationSeparate(pe[ge],pe[se]),h=ge,M=se),(ae!==E||Se!==T||ne!==U||be!==L)&&(n.blendFuncSeparate(he[ae],he[Se],he[ne],he[be]),E=ae,T=Se,U=ne,L=be),(Oe.equals(A)===!1||nt!==C)&&(n.blendColor(Oe.r,Oe.g,Oe.b,nt),A.copy(Oe),C=nt),m=O,x=!1}function ke(O,ge){O.side===pn?de(n.CULL_FACE):te(n.CULL_FACE);let ae=O.side===Dt;ge&&(ae=!ae),ye(ae),O.blending===wi&&O.transparent===!1?P(Cn):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Se=O.stencilWrite;a.setTest(Se),Se&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function ye(O){v!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),v=O)}function Le(O){O!==og?(te(n.CULL_FACE),O!==S&&(O===Ec?n.cullFace(n.BACK):O===ag?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),S=O}function _e(O){O!==w&&(N&&n.lineWidth(O),w=O)}function De(O,ge,ae){O?(te(n.POLYGON_OFFSET_FILL),(I!==ge||D!==ae)&&(n.polygonOffset(ge,ae),I=ge,D=ae)):de(n.POLYGON_OFFSET_FILL)}function Re(O){O?te(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function He(O){O===void 0&&(O=n.TEXTURE0+F-1),Z!==O&&(n.activeTexture(O),Z=O)}function qe(O,ge,ae){ae===void 0&&(Z===null?ae=n.TEXTURE0+F-1:ae=Z);let Se=re[ae];Se===void 0&&(Se={type:void 0,texture:void 0},re[ae]=Se),(Se.type!==O||Se.texture!==ge)&&(Z!==ae&&(n.activeTexture(ae),Z=ae),n.bindTexture(O,ge||ie[O]),Se.type=O,Se.texture=ge)}function R(){const O=re[Z];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(O){W.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),W.copy(O))}function Be(O){k.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),k.copy(O))}function Ne(O,ge){let ae=l.get(ge);ae===void 0&&(ae=new WeakMap,l.set(ge,ae));let Se=ae.get(O);Se===void 0&&(Se=n.getUniformBlockIndex(ge,O.name),ae.set(O,Se))}function xe(O,ge){const Se=l.get(ge).get(O);c.get(ge)!==Se&&(n.uniformBlockBinding(ge,Se,O.__bindingPointIndex),c.set(ge,Se))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,re={},d={},p=new WeakMap,f=[],g=null,_=!1,m=null,h=null,E=null,T=null,M=null,U=null,L=null,A=new st(0,0,0),C=0,x=!1,v=null,S=null,w=null,I=null,D=null,W.set(0,0,n.canvas.width,n.canvas.height),k.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:de,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:ue,setBlending:P,setMaterial:ke,setFlipSided:ye,setCullFace:Le,setLineWidth:_e,setPolygonOffset:De,setScissorTest:Re,activeTexture:He,bindTexture:qe,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:X,texImage2D:Ue,texImage3D:oe,updateUBOMapping:Ne,uniformBlockBinding:xe,texStorage2D:ce,texStorage3D:Ee,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:le,scissor:we,viewport:Be,reset:Ve}}function iy(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return f?new OffscreenCanvas(R,y):os("canvas")}function _(R,y,X){let J=1;const Q=qe(R);if((Q.width>X||Q.height>X)&&(J=X/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(J*Q.width),le=Math.floor(J*Q.height);d===void 0&&(d=g(j,le));const ce=y?g(j,le):d;return ce.width=j,ce.height=le,ce.getContext("2d").drawImage(R,0,0,j,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+le+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,y,X,J,Q=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===n.RED&&(X===n.FLOAT&&(j=n.R32F),X===n.HALF_FLOAT&&(j=n.R16F),X===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(j=n.R8UI),X===n.UNSIGNED_SHORT&&(j=n.R16UI),X===n.UNSIGNED_INT&&(j=n.R32UI),X===n.BYTE&&(j=n.R8I),X===n.SHORT&&(j=n.R16I),X===n.INT&&(j=n.R32I)),y===n.RG&&(X===n.FLOAT&&(j=n.RG32F),X===n.HALF_FLOAT&&(j=n.RG16F),X===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(j=n.RG8UI),X===n.UNSIGNED_SHORT&&(j=n.RG16UI),X===n.UNSIGNED_INT&&(j=n.RG32UI),X===n.BYTE&&(j=n.RG8I),X===n.SHORT&&(j=n.RG16I),X===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(j=n.RGB8UI),X===n.UNSIGNED_SHORT&&(j=n.RGB16UI),X===n.UNSIGNED_INT&&(j=n.RGB32UI),X===n.BYTE&&(j=n.RGB8I),X===n.SHORT&&(j=n.RGB16I),X===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),X===n.UNSIGNED_INT&&(j=n.RGBA32UI),X===n.BYTE&&(j=n.RGBA8I),X===n.SHORT&&(j=n.RGBA16I),X===n.INT&&(j=n.RGBA32I)),y===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){const le=Q?rs:Qe.getTransfer(J);X===n.FLOAT&&(j=n.RGBA32F),X===n.HALF_FLOAT&&(j=n.RGBA16F),X===n.UNSIGNED_BYTE&&(j=le===rt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(R,y){let X;return R?y===null||y===ni||y===ir?X=n.DEPTH24_STENCIL8:y===Xt?X=n.DEPTH32F_STENCIL8:y===nr&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ni||y===ir?X=n.DEPTH_COMPONENT24:y===Xt?X=n.DEPTH_COMPONENT32F:y===nr&&(X=n.DEPTH_COMPONENT16),X}function U(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==Mt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function L(R){const y=R.target;y.removeEventListener("dispose",L),C(y),y.isVideoTexture&&u.delete(y)}function A(R){const y=R.target;y.removeEventListener("dispose",A),v(y)}function C(R){const y=i.get(R);if(y.__webglInit===void 0)return;const X=R.source,J=p.get(X);if(J){const Q=J[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(R),Object.keys(J).length===0&&p.delete(X)}i.remove(R)}function x(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const X=R.source,J=p.get(X);delete J[y.__cacheKey],o.memory.textures--}function v(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let Q=0;Q<y.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)n.deleteFramebuffer(y.__webglFramebuffer[J]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=R.textures;for(let J=0,Q=X.length;J<Q;J++){const j=i.get(X[J]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(X[J])}i.remove(R)}let S=0;function w(){S=0}function I(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function D(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function F(R,y){const X=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(X,R,y);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+y)}function N(R,y){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ie(X,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+y)}function Y(R,y){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ie(X,R,y);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+y)}function z(R,y){const X=i.get(R);if(R.version>0&&X.__version!==R.version){te(X,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+y)}const Z={[Ao]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[Ro]:n.MIRRORED_REPEAT},re={[Qt]:n.NEAREST,[Og]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[Mt]:n.LINEAR,[As]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},me={[Hg]:n.NEVER,[$g]:n.ALWAYS,[Vg]:n.LESS,[vu]:n.LEQUAL,[Gg]:n.EQUAL,[jg]:n.GEQUAL,[Wg]:n.GREATER,[Xg]:n.NOTEQUAL};function ve(R,y){if(y.type===Xt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Mt||y.magFilter===As||y.magFilter===br||y.magFilter===Kn||y.minFilter===Mt||y.minFilter===As||y.minFilter===br||y.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,re[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,re[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qt||y.minFilter!==br&&y.minFilter!==Kn||y.type===Xt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function W(R,y){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",L));const J=y.source;let Q=p.get(J);Q===void 0&&(Q={},p.set(J,Q));const j=D(y);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Q[j].usedTimes++;const le=Q[R.__cacheKey];le!==void 0&&(Q[R.__cacheKey].usedTimes--,le.usedTimes===0&&x(y)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return X}function k(R,y,X){return Math.floor(Math.floor(R/X)/y)}function B(R,y,X,J){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,X,J,y.data);else{j.sort((oe,we)=>oe.start-we.start);let le=0;for(let oe=1;oe<j.length;oe++){const we=j[le],Be=j[oe],Ne=we.start+we.count,xe=k(Be.start,y.width,4),Ve=k(we.start,y.width,4);Be.start<=Ne+1&&xe===Ve&&k(Be.start+Be.count-1,y.width,4)===xe?we.count=Math.max(we.count,Be.start+Be.count-we.start):(++le,j[le]=Be)}j.length=le+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let oe=0,we=j.length;oe<we;oe++){const Be=j[oe],Ne=Math.floor(Be.start/4),xe=Math.ceil(Be.count/4),Ve=Ne%y.width,O=Math.floor(Ne/y.width),ge=xe,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ve,O,ge,ae,X,J,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function ie(R,y,X){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);const Q=W(R,y),j=y.source;t.bindTexture(J,R.__webglTexture,n.TEXTURE0+X);const le=i.get(j);if(j.version!==le.__version||Q===!0){t.activeTexture(n.TEXTURE0+X);const ce=Qe.getPrimaries(Qe.workingColorSpace),Ee=y.colorSpace===Rn?null:Qe.getPrimaries(y.colorSpace),Ue=y.colorSpace===Rn||ce===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let oe=_(y.image,!1,r.maxTextureSize);oe=He(y,oe);const we=s.convert(y.format,y.colorSpace),Be=s.convert(y.type);let Ne=T(y.internalFormat,we,Be,y.colorSpace,y.isVideoTexture);ve(J,y);let xe;const Ve=y.mipmaps,O=y.isVideoTexture!==!0,ge=le.__version===void 0||Q===!0,ae=j.dataReady,Se=U(y,oe);if(y.isDepthTexture)Ne=M(y.format===sr,y.type),ge&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ne,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,oe.width,oe.height,0,we,Be,null));else if(y.isDataTexture)if(Ve.length>0){O&&ge&&t.texStorage2D(n.TEXTURE_2D,Se,Ne,Ve[0].width,Ve[0].height);for(let se=0,ne=Ve.length;se<ne;se++)xe=Ve[se],O?ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,we,Be,xe.data):t.texImage2D(n.TEXTURE_2D,se,Ne,xe.width,xe.height,0,we,Be,xe.data);y.generateMipmaps=!1}else O?(ge&&t.texStorage2D(n.TEXTURE_2D,Se,Ne,oe.width,oe.height),ae&&B(y,oe,we,Be)):t.texImage2D(n.TEXTURE_2D,0,Ne,oe.width,oe.height,0,we,Be,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ne,Ve[0].width,Ve[0].height,oe.depth);for(let se=0,ne=Ve.length;se<ne;se++)if(xe=Ve[se],y.format!==It)if(we!==null)if(O){if(ae)if(y.layerUpdates.size>0){const be=$c(xe.width,xe.height,y.format,y.type);for(const Oe of y.layerUpdates){const nt=xe.data.subarray(Oe*be/xe.data.BYTES_PER_ELEMENT,(Oe+1)*be/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Oe,xe.width,xe.height,1,we,nt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,oe.depth,we,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ne,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,oe.depth,we,Be,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ne,xe.width,xe.height,oe.depth,0,we,Be,xe.data)}else{O&&ge&&t.texStorage2D(n.TEXTURE_2D,Se,Ne,Ve[0].width,Ve[0].height);for(let se=0,ne=Ve.length;se<ne;se++)xe=Ve[se],y.format!==It?we!==null?O?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,we,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,we,Be,xe.data):t.texImage2D(n.TEXTURE_2D,se,Ne,xe.width,xe.height,0,we,Be,xe.data)}else if(y.isDataArrayTexture)if(O){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ne,oe.width,oe.height,oe.depth),ae)if(y.layerUpdates.size>0){const se=$c(oe.width,oe.height,y.format,y.type);for(const ne of y.layerUpdates){const be=oe.data.subarray(ne*se/oe.data.BYTES_PER_ELEMENT,(ne+1)*se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,we,Be,be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,we,Be,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,we,Be,oe.data);else if(y.isData3DTexture)O?(ge&&t.texStorage3D(n.TEXTURE_3D,Se,Ne,oe.width,oe.height,oe.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,we,Be,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,we,Be,oe.data);else if(y.isFramebufferTexture){if(ge)if(O)t.texStorage2D(n.TEXTURE_2D,Se,Ne,oe.width,oe.height);else{let se=oe.width,ne=oe.height;for(let be=0;be<Se;be++)t.texImage2D(n.TEXTURE_2D,be,Ne,se,ne,0,we,Be,null),se>>=1,ne>>=1}}else if(Ve.length>0){if(O&&ge){const se=qe(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ne,se.width,se.height)}for(let se=0,ne=Ve.length;se<ne;se++)xe=Ve[se],O?ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,we,Be,xe):t.texImage2D(n.TEXTURE_2D,se,Ne,we,Be,xe);y.generateMipmaps=!1}else if(O){if(ge){const se=qe(oe);t.texStorage2D(n.TEXTURE_2D,Se,Ne,se.width,se.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Be,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,we,Be,oe);m(y)&&h(J),le.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function te(R,y,X){if(y.image.length!==6)return;const J=W(R,y),Q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);const j=i.get(Q);if(Q.version!==j.__version||J===!0){t.activeTexture(n.TEXTURE0+X);const le=Qe.getPrimaries(Qe.workingColorSpace),ce=y.colorSpace===Rn?null:Qe.getPrimaries(y.colorSpace),Ee=y.colorSpace===Rn||le===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,we=[];for(let ne=0;ne<6;ne++)!Ue&&!oe?we[ne]=_(y.image[ne],!0,r.maxCubemapSize):we[ne]=oe?y.image[ne].image:y.image[ne],we[ne]=He(y,we[ne]);const Be=we[0],Ne=s.convert(y.format,y.colorSpace),xe=s.convert(y.type),Ve=T(y.internalFormat,Ne,xe,y.colorSpace),O=y.isVideoTexture!==!0,ge=j.__version===void 0||J===!0,ae=Q.dataReady;let Se=U(y,Be);ve(n.TEXTURE_CUBE_MAP,y);let se;if(Ue){O&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ve,Be.width,Be.height);for(let ne=0;ne<6;ne++){se=we[ne].mipmaps;for(let be=0;be<se.length;be++){const Oe=se[be];y.format!==It?Ne!==null?O?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,Oe.width,Oe.height,Ne,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,Ve,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,Oe.width,Oe.height,Ne,xe,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,Ve,Oe.width,Oe.height,0,Ne,xe,Oe.data)}}}else{if(se=y.mipmaps,O&&ge){se.length>0&&Se++;const ne=qe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,we[ne].width,we[ne].height,Ne,xe,we[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,we[ne].width,we[ne].height,0,Ne,xe,we[ne].data);for(let be=0;be<se.length;be++){const nt=se[be].image[ne].image;O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,nt.width,nt.height,Ne,xe,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,Ve,nt.width,nt.height,0,Ne,xe,nt.data)}}else{O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,xe,we[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Ne,xe,we[ne]);for(let be=0;be<se.length;be++){const Oe=se[be];O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Ne,xe,Oe.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,Ve,Ne,xe,Oe.image[ne])}}}m(y)&&h(n.TEXTURE_CUBE_MAP),j.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function de(R,y,X,J,Q,j){const le=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),Ee=T(X.internalFormat,le,ce,X.colorSpace),Ue=i.get(y),oe=i.get(X);if(oe.__renderTarget=y,!Ue.__hasExternalTextures){const we=Math.max(1,y.width>>j),Be=Math.max(1,y.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Ee,we,Be,y.depth,0,le,ce,null):t.texImage2D(Q,j,Ee,we,Be,0,le,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),De(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,oe.__webglTexture,0,_e(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,oe.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,y,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const J=y.depthTexture,Q=J&&J.isDepthTexture?J.type:null,j=M(y.stencilBuffer,Q),le=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=_e(y);De(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,j,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,R)}else{const J=y.textures;for(let Q=0;Q<J.length;Q++){const j=J[Q],le=s.convert(j.format,j.colorSpace),ce=s.convert(j.type),Ee=T(j.internalFormat,le,ce,j.colorSpace),Ue=_e(y);X&&De(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ee,y.width,y.height):De(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,Ee,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);const Q=J.__webglTexture,j=_e(y);if(y.depthTexture.format===rr)De(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(y.depthTexture.format===sr)De(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ue(R){const y=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=J}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const J=R.texture.mipmaps;J&&J.length>0?Ae(y.__webglFramebuffer[0],R):Ae(y.__webglFramebuffer,R)}else if(X){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=n.createRenderbuffer(),Pe(y.__webglDepthbuffer[J],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Pe(y.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(R,y,X){const J=i.get(R);y!==void 0&&de(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&ue(R)}function he(R){const y=R.texture,X=i.get(R),J=i.get(y);R.addEventListener("dispose",A);const Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++),j){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)X.__webglFramebuffer[ce][Ee]=n.createFramebuffer()}else X.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)X.__webglFramebuffer[ce]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(le)for(let ce=0,Ee=Q.length;ce<Ee;ce++){const Ue=i.get(Q[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&De(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const Ee=Q[ce];X.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ce]);const Ue=s.convert(Ee.format,Ee.colorSpace),oe=s.convert(Ee.type),we=T(Ee.internalFormat,Ue,oe,Ee.colorSpace,R.isXRRenderTarget===!0),Be=_e(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,we,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,X.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ve(n.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)de(X.__webglFramebuffer[ce][Ee],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else de(X.__webglFramebuffer[ce],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(y)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ce=0,Ee=Q.length;ce<Ee;ce++){const Ue=Q[ce],oe=i.get(Ue);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ve(n.TEXTURE_2D,Ue),de(X.__webglFramebuffer,R,Ue,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ue)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),ve(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)de(X.__webglFramebuffer[Ee],R,y,n.COLOR_ATTACHMENT0,ce,Ee);else de(X.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,ce,0);m(y)&&h(ce),t.unbindTexture()}R.depthBuffer&&ue(R)}function P(R){const y=R.textures;for(let X=0,J=y.length;X<J;X++){const Q=y[X];if(m(Q)){const j=E(R),le=i.get(Q).__webglTexture;t.bindTexture(j,le),h(j),t.unbindTexture()}}}const ke=[],ye=[];function Le(R){if(R.samples>0){if(De(R)===!1){const y=R.textures,X=R.width,J=R.height;let Q=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(R),ce=y.length>1;if(ce)for(let Ue=0;Ue<y.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ue=0;Ue<y.length;Ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ue]);const oe=i.get(y[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,X,J,0,0,X,J,Q,n.NEAREST),c===!0&&(ke.length=0,ye.length=0,ke.push(n.COLOR_ATTACHMENT0+Ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(j),ye.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ue=0;Ue<y.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ue]);const oe=i.get(y[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function _e(R){return Math.min(r.maxSamples,R.samples)}function De(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Re(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function He(R,y){const X=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Di&&X!==Rn&&(Qe.getTransfer(X)===rt?(J!==It||Q!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=w,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=pe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=de,this.useMultisampledRTT=De}function ry(n,e){function t(i,r=Rn){let s;const o=Qe.getTransfer(r);if(i===_n)return n.UNSIGNED_BYTE;if(i===ba)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ea)return n.UNSIGNED_SHORT_5_5_5_1;if(i===du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lu)return n.BYTE;if(i===uu)return n.SHORT;if(i===nr)return n.UNSIGNED_SHORT;if(i===Ma)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===Xt)return n.FLOAT;if(i===ur)return n.HALF_FLOAT;if(i===hu)return n.ALPHA;if(i===fu)return n.RGB;if(i===It)return n.RGBA;if(i===rr)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===pu)return n.RED;if(i===Ta)return n.RED_INTEGER;if(i===mu)return n.RG;if(i===wa)return n.RG_INTEGER;if(i===Aa)return n.RGBA_INTEGER;if(i===qr||i===Yr||i===Kr||i===Zr)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Co||i===Po||i===Io||i===Lo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Do||i===Uo||i===No)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Do||i===Uo)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===No)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oo||i===Fo||i===ko||i===Bo||i===zo||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===jo||i===$o||i===qo||i===Yo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Oo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ko)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ho)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Go)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$o)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jr||i===Ko||i===Zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jr)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gu||i===Jo||i===Qo||i===ea)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ay{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ut,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pt({vertexShader:sy,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cy extends Oi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,f=null,g=null;const _=new ay,m=t.getContextAttributes();let h=null,E=null;const T=[],M=[],U=new tt;let L=null;const A=new Kt;A.viewport=new ht;const C=new Kt;C.viewport=new ht;const x=[A,C],v=new Cv;let S=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let B=T[k];return B===void 0&&(B=new Ks,T[k]=B),B.getTargetRaySpace()},this.getControllerGrip=function(k){let B=T[k];return B===void 0&&(B=new Ks,T[k]=B),B.getGripSpace()},this.getHand=function(k){let B=T[k];return B===void 0&&(B=new Ks,T[k]=B),B.getHandSpace()};function I(k){const B=M.indexOf(k.inputSource);if(B===-1)return;const ie=T[B];ie!==void 0&&(ie.update(k.inputSource,k.frame,l||o),ie.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",F);for(let k=0;k<T.length;k++){const B=M[k];B!==null&&(M[k]=null,T[k].disconnect(B))}S=null,w=null,_.reset(),e.setRenderTarget(h),f=null,p=null,d=null,r=null,E=null,W.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",D),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,te=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?sr:rr,te=m.stencil?ir:ni);const Pe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(Pe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new rn(p.textureWidth,p.textureHeight,{format:It,type:_n,depthTexture:new Pu(p.textureWidth,p.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new rn(f.framebufferWidth,f.framebufferHeight,{format:It,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(k){for(let B=0;B<k.removed.length;B++){const ie=k.removed[B],te=M.indexOf(ie);te>=0&&(M[te]=null,T[te].disconnect(ie))}for(let B=0;B<k.added.length;B++){const ie=k.added[B];let te=M.indexOf(ie);if(te===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=M.length){M.push(ie),te=Pe;break}else if(M[Pe]===null){M[Pe]=ie,te=Pe;break}if(te===-1)break}const de=T[te];de&&de.connect(ie)}}const N=new K,Y=new K;function z(k,B,ie){N.setFromMatrixPosition(B.matrixWorld),Y.setFromMatrixPosition(ie.matrixWorld);const te=N.distanceTo(Y),de=B.projectionMatrix.elements,Pe=ie.projectionMatrix.elements,Ae=de[14]/(de[10]-1),ue=de[14]/(de[10]+1),pe=(de[9]+1)/de[5],he=(de[9]-1)/de[5],P=(de[8]-1)/de[0],ke=(Pe[8]+1)/Pe[0],ye=Ae*P,Le=Ae*ke,_e=te/(-P+ke),De=_e*-P;if(B.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(De),k.translateZ(_e),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),de[10]===-1)k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const Re=Ae+_e,He=ue+_e,qe=ye-De,R=Le+(te-De),y=pe*ue/He*Re,X=he*ue/He*Re;k.projectionMatrix.makePerspective(qe,R,y,X,Re,He),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Z(k,B){B===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(B.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let B=k.near,ie=k.far;_.texture!==null&&(_.depthNear>0&&(B=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),v.near=C.near=A.near=B,v.far=C.far=A.far=ie,(S!==v.near||w!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,w=v.far),A.layers.mask=k.layers.mask|2,C.layers.mask=k.layers.mask|4,v.layers.mask=A.layers.mask|C.layers.mask;const te=k.parent,de=v.cameras;Z(v,te);for(let Pe=0;Pe<de.length;Pe++)Z(de[Pe],te);de.length===2?z(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),re(k,v,te)};function re(k,B,ie){ie===null?k.matrix.copy(B.matrixWorld):(k.matrix.copy(ie.matrixWorld),k.matrix.invert(),k.matrix.multiply(B.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ta*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(k){c=k,p!==null&&(p.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let me=null;function ve(k,B){if(u=B.getViewerPose(l||o),g=B,u!==null){const ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let te=!1;ie.length!==v.cameras.length&&(v.cameras.length=0,te=!0);for(let Ae=0;Ae<ie.length;Ae++){const ue=ie[Ae];let pe=null;if(f!==null)pe=f.getViewport(ue);else{const P=d.getViewSubImage(p,ue);pe=P.viewport,Ae===0&&(e.setRenderTargetTextures(E,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(E))}let he=x[Ae];he===void 0&&(he=new Kt,he.layers.enable(Ae),he.viewport=new ht,x[Ae]=he),he.matrix.fromArray(ue.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ue.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(pe.x,pe.y,pe.width,pe.height),Ae===0&&(v.matrix.copy(he.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),te===!0&&v.cameras.push(he)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ae=d.getDepthInformation(ie[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let ie=0;ie<T.length;ie++){const te=M[ie],de=T[ie];te!==null&&de!==void 0&&de.update(te,B,l||o)}me&&me(k,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}const W=new Iu;W.setAnimationLoop(ve),this.setAnimationLoop=function(k){me=k},this.dispose=function(){}}}const Hn=new xn,ly=new pt;function uy(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Tu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,T,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,E,T):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Dt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Dt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),T=E.envMap,M=E.envMapRotation;T&&(m.envMap.value=T,Hn.copy(M),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(Hn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,E,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const M=T.program;i.uniformBlockBinding(E,M)}function l(E,T){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));const U=T.program;i.updateUBOMapping(E,U);const L=e.render.frame;s[E.id]!==L&&(p(E),s[E.id]=L)}function u(E){const T=d();E.__bindingPointIndex=T;const M=n.createBuffer(),U=E.__size,L=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,U,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const T=r[E.id],M=E.uniforms,U=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let L=0,A=M.length;L<A;L++){const C=Array.isArray(M[L])?M[L]:[M[L]];for(let x=0,v=C.length;x<v;x++){const S=C[x];if(f(S,L,x,U)===!0){const w=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let D=0;for(let F=0;F<I.length;F++){const N=I[F],Y=_(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,w+D,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,w,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,T,M,U){const L=E.value,A=T+"_"+M;if(U[A]===void 0)return typeof L=="number"||typeof L=="boolean"?U[A]=L:U[A]=L.clone(),!0;{const C=U[A];if(typeof L=="number"||typeof L=="boolean"){if(C!==L)return U[A]=L,!0}else if(C.equals(L)===!1)return C.copy(L),!0}return!1}function g(E){const T=E.uniforms;let M=0;const U=16;for(let A=0,C=T.length;A<C;A++){const x=Array.isArray(T[A])?T[A]:[T[A]];for(let v=0,S=x.length;v<S;v++){const w=x[v],I=Array.isArray(w.value)?w.value:[w.value];for(let D=0,F=I.length;D<F;D++){const N=I[D],Y=_(N),z=M%U,Z=z%Y.boundary,re=z+Z;M+=Z,re!==0&&U-re<Y.storage&&(M+=U-re),w.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,M+=Y.storage}}}const L=M%U;return L>0&&(M+=U-L),E.__size=M,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class hy{constructor(e={}){const{canvas:t=Yg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let U=!1;this._outputColorSpace=Wt;let L=0,A=0,C=null,x=-1,v=null;const S=new ht,w=new ht;let I=null;const D=new st(0);let F=0,N=t.width,Y=t.height,z=1,Z=null,re=null;const me=new ht(0,0,N,Y),ve=new ht(0,0,N,Y);let W=!1;const k=new Cu;let B=!1,ie=!1;const te=new pt,de=new pt,Pe=new K,Ae=new ht,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function he(){return C===null?z:1}let P=i;function ke(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",ne,!1),P===null){const H="webgl2";if(P=ke(H,b),P===null)throw ke(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ye,Le,_e,De,Re,He,qe,R,y,X,J,Q,j,le,ce,Ee,Ue,oe,we,Be,Ne,xe,Ve,O;function ge(){ye=new Mx(P),ye.init(),xe=new ry(P,ye),Le=new mx(P,ye,e,xe),_e=new ny(P,ye),Le.reverseDepthBuffer&&p&&_e.buffers.depth.setReversed(!0),De=new Tx(P),Re=new GS,He=new iy(P,ye,_e,Re,Le,xe,De),qe=new vx(M),R=new yx(M),y=new Iv(P),Ve=new fx(P,y),X=new bx(P,y,De,Ve),J=new Ax(P,X,y,De),we=new wx(P,Le,He),Ee=new gx(Re),Q=new VS(M,qe,R,ye,Le,Ve,Ee),j=new uy(M,Re),le=new XS,ce=new ZS(ye),oe=new hx(M,qe,R,_e,J,f,c),Ue=new ey(M,J,Le),O=new dy(P,De,Le,_e),Be=new px(P,ye,De),Ne=new Ex(P,ye,De),De.programs=Q.programs,M.capabilities=Le,M.extensions=ye,M.properties=Re,M.renderLists=le,M.shadowMap=Ue,M.state=_e,M.info=De}ge();const ae=new cy(M,P);this.xr=ae,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(N,Y,!1))},this.getSize=function(b){return b.set(N,Y)},this.setSize=function(b,H,$=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,Y=H,t.width=Math.floor(b*z),t.height=Math.floor(H*z),$===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(N*z,Y*z).floor()},this.setDrawingBufferSize=function(b,H,$){N=b,Y=H,z=$,t.width=Math.floor(b*$),t.height=Math.floor(H*$),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,H,$,q){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,H,$,q),_e.viewport(S.copy(me).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(ve)},this.setScissor=function(b,H,$,q){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,H,$,q),_e.scissor(w.copy(ve).multiplyScalar(z).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(b){_e.setScissorTest(W=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,$=!0){let q=0;if(b){let V=!1;if(C!==null){const fe=C.texture.format;V=fe===Aa||fe===wa||fe===Ta}if(V){const fe=C.texture.type,Te=fe===_n||fe===ni||fe===nr||fe===ir||fe===ba||fe===Ea,Ie=oe.getClearColor(),Ce=oe.getClearAlpha(),Ge=Ie.r,We=Ie.g,Fe=Ie.b;Te?(g[0]=Ge,g[1]=We,g[2]=Fe,g[3]=Ce,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ge,_[1]=We,_[2]=Fe,_[3]=Ce,P.clearBufferiv(P.COLOR,0,_))}else q|=P.COLOR_BUFFER_BIT}H&&(q|=P.DEPTH_BUFFER_BIT),$&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),oe.dispose(),le.dispose(),ce.dispose(),Re.dispose(),qe.dispose(),R.dispose(),J.dispose(),Ve.dispose(),O.dispose(),Q.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",mr),ae.removeEventListener("sessionend",gr),on.stop()};function Se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const b=De.autoReset,H=Ue.enabled,$=Ue.autoUpdate,q=Ue.needsUpdate,V=Ue.type;ge(),De.autoReset=b,Ue.enabled=H,Ue.autoUpdate=$,Ue.needsUpdate=q,Ue.type=V}function ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function be(b){const H=b.target;H.removeEventListener("dispose",be),Oe(H)}function Oe(b){nt(b),Re.remove(b)}function nt(b){const H=Re.get(b).programs;H!==void 0&&(H.forEach(function($){Q.releaseProgram($)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,$,q,V,fe){H===null&&(H=ue);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Ie=Ou(b,H,$,q,V);_e.setMaterial(q,Te);let Ce=$.index,Ge=1;if(q.wireframe===!0){if(Ce=X.getWireframeAttribute($),Ce===void 0)return;Ge=2}const We=$.drawRange,Fe=$.attributes.position;let $e=We.start*Ge,it=(We.start+We.count)*Ge;fe!==null&&($e=Math.max($e,fe.start*Ge),it=Math.min(it,(fe.start+fe.count)*Ge)),Ce!==null?($e=Math.max($e,0),it=Math.min(it,Ce.count)):Fe!=null&&($e=Math.max($e,0),it=Math.min(it,Fe.count));const dt=it-$e;if(dt<0||dt===1/0)return;Ve.setup(V,q,Ie,$,Ce);let ct,ot=Be;if(Ce!==null&&(ct=y.get(Ce),ot=Ne,ot.setIndex(ct)),V.isMesh)q.wireframe===!0?(_e.setLineWidth(q.wireframeLinewidth*he()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(V.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),_e.setLineWidth(ze*he()),V.isLineSegments?ot.setMode(P.LINES):V.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else V.isPoints?ot.setMode(P.POINTS):V.isSprite&&ot.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ai("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const ze=V._multiDrawStarts,ut=V._multiDrawCounts,Je=V._multiDrawCount,Ot=Ce?y.get(Ce).bytesPerElement:1,ri=Re.get(q).currentProgram.getUniforms();for(let Ft=0;Ft<Je;Ft++)ri.setValue(P,"_gl_DrawID",Ft),ot.render(ze[Ft]/Ot,ut[Ft])}else if(V.isInstancedMesh)ot.renderInstances($e,dt,V.count);else if($.isInstancedBufferGeometry){const ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ut=Math.min($.instanceCount,ze);ot.renderInstances($e,dt,ut)}else ot.render($e,dt)};function Ze(b,H,$){b.transparent===!0&&b.side===pn&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,_r(b,H,$),b.side=Ln,b.needsUpdate=!0,_r(b,H,$),b.side=pn):_r(b,H,$)}this.compile=function(b,H,$=null){$===null&&($=b),h=ce.get($),h.init(H),T.push(h),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),b!==$&&b.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights();const q=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){const Ie=fe[Te];Ze(Ie,$,V),q.add(Ie)}else Ze(fe,$,V),q.add(fe)}),h=T.pop(),q},this.compileAsync=function(b,H,$=null){const q=this.compile(b,H,$);return new Promise(V=>{function fe(){if(q.forEach(function(Te){Re.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){V(b);return}setTimeout(fe,10)}ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let bt=null;function xt(b){bt&&bt(b)}function mr(){on.stop()}function gr(){on.start()}const on=new Iu;on.setAnimationLoop(xt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(b){bt=b,ae.setAnimationLoop(b),b===null?on.stop():on.start()},ae.addEventListener("sessionstart",mr),ae.addEventListener("sessionend",gr),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(H),H=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,H,C),h=ce.get(b,T.length),h.init(H),T.push(h),de.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),k.setFromProjectionMatrix(de),ie=this.localClippingEnabled,B=Ee.init(this.clippingPlanes,ie),m=le.get(b,E.length),m.init(),E.push(m),ae.enabled===!0&&ae.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&Bi(fe,H,-1/0,M.sortObjects)}Bi(b,H,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(Z,re),pe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,pe&&oe.addToRenderList(m,b),this.info.render.frame++,B===!0&&Ee.beginShadows();const $=h.state.shadowsArray;Ue.render($,b,H),B===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,V=m.transmissive;if(h.setupLights(),H.isArrayCamera){const fe=H.cameras;if(V.length>0)for(let Te=0,Ie=fe.length;Te<Ie;Te++){const Ce=fe[Te];Da(q,V,b,Ce)}pe&&oe.render(b);for(let Te=0,Ie=fe.length;Te<Ie;Te++){const Ce=fe[Te];La(m,b,Ce,Ce.viewport)}}else V.length>0&&Da(q,V,b,H),pe&&oe.render(b),La(m,b,H);C!==null&&A===0&&(He.updateMultisampleRenderTarget(C),He.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(M,b,H),Ve.resetDefaultState(),x=-1,v=null,T.pop(),T.length>0?(h=T[T.length-1],B===!0&&Ee.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Bi(b,H,$,q){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||k.intersectsSprite(b)){q&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Te=J.update(b),Ie=b.material;Ie.visible&&m.push(b,Te,Ie,$,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||k.intersectsObject(b))){const Te=J.update(b),Ie=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ae.copy(Te.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Ie)){const Ce=Te.groups;for(let Ge=0,We=Ce.length;Ge<We;Ge++){const Fe=Ce[Ge],$e=Ie[Fe.materialIndex];$e&&$e.visible&&m.push(b,Te,$e,$,Ae.z,Fe)}}else Ie.visible&&m.push(b,Te,Ie,$,Ae.z,null)}}const fe=b.children;for(let Te=0,Ie=fe.length;Te<Ie;Te++)Bi(fe[Te],H,$,q)}function La(b,H,$,q){const V=b.opaque,fe=b.transmissive,Te=b.transparent;h.setupLightsView($),B===!0&&Ee.setGlobalState(M.clippingPlanes,$),q&&_e.viewport(S.copy(q)),V.length>0&&vr(V,H,$),fe.length>0&&vr(fe,H,$),Te.length>0&&vr(Te,H,$),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Da(b,H,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[q.id]===void 0&&(h.state.transmissionRenderTarget[q.id]=new rn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?ur:_n,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const fe=h.state.transmissionRenderTarget[q.id],Te=q.viewport||S;fe.setSize(Te.z*M.transmissionResolutionScale,Te.w*M.transmissionResolutionScale);const Ie=M.getRenderTarget(),Ce=M.getActiveCubeFace(),Ge=M.getActiveMipmapLevel();M.setRenderTarget(fe),M.getClearColor(D),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),pe&&oe.render($);const We=M.toneMapping;M.toneMapping=Pn;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),h.setupLightsView(q),B===!0&&Ee.setGlobalState(M.clippingPlanes,q),vr(b,$,q),He.updateMultisampleRenderTarget(fe),He.updateRenderTargetMipmap(fe),ye.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let it=0,dt=H.length;it<dt;it++){const ct=H[it],ot=ct.object,ze=ct.geometry,ut=ct.material,Je=ct.group;if(ut.side===pn&&ot.layers.test(q.layers)){const Ot=ut.side;ut.side=Dt,ut.needsUpdate=!0,Ua(ot,$,q,ze,ut,Je),ut.side=Ot,ut.needsUpdate=!0,$e=!0}}$e===!0&&(He.updateMultisampleRenderTarget(fe),He.updateRenderTargetMipmap(fe))}M.setRenderTarget(Ie,Ce,Ge),M.setClearColor(D,F),Fe!==void 0&&(q.viewport=Fe),M.toneMapping=We}function vr(b,H,$){const q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,fe=b.length;V<fe;V++){const Te=b[V],Ie=Te.object,Ce=Te.geometry,Ge=Te.group;let We=Te.material;We.allowOverride===!0&&q!==null&&(We=q),Ie.layers.test($.layers)&&Ua(Ie,H,$,Ce,We,Ge)}}function Ua(b,H,$,q,V,fe){b.onBeforeRender(M,H,$,q,V,fe),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(M,H,$,q,b,fe),V.transparent===!0&&V.side===pn&&V.forceSinglePass===!1?(V.side=Dt,V.needsUpdate=!0,M.renderBufferDirect($,H,q,V,b,fe),V.side=Ln,V.needsUpdate=!0,M.renderBufferDirect($,H,q,V,b,fe),V.side=pn):M.renderBufferDirect($,H,q,V,b,fe),b.onAfterRender(M,H,$,q,V,fe)}function _r(b,H,$){H.isScene!==!0&&(H=ue);const q=Re.get(b),V=h.state.lights,fe=h.state.shadowsArray,Te=V.state.version,Ie=Q.getParameters(b,V.state,fe,H,$),Ce=Q.getProgramCacheKey(Ie);let Ge=q.programs;q.environment=b.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(b.isMeshStandardMaterial?R:qe).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ge===void 0&&(b.addEventListener("dispose",be),Ge=new Map,q.programs=Ge);let We=Ge.get(Ce);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Te)return Oa(b,Ie),We}else Ie.uniforms=Q.getUniforms(b),b.onBeforeCompile(Ie,M),We=Q.acquireProgram(Ie,Ce),Ge.set(Ce,We),q.uniforms=Ie.uniforms;const Fe=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Ee.uniform),Oa(b,Ie),q.needsLights=ku(b),q.lightsStateVersion=Te,q.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function Na(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Qr.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Oa(b,H){const $=Re.get(b);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Ou(b,H,$,q,V){H.isScene!==!0&&(H=ue),He.resetTextureUnits();const fe=H.fog,Te=q.isMeshStandardMaterial?H.environment:null,Ie=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Di,Ce=(q.isMeshStandardMaterial?R:qe).get(q.envMap||Te),Ge=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!$.morphAttributes.position,$e=!!$.morphAttributes.normal,it=!!$.morphAttributes.color;let dt=Pn;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=M.toneMapping);const ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ot=ct!==void 0?ct.length:0,ze=Re.get(q),ut=h.state.lights;if(B===!0&&(ie===!0||b!==v)){const Et=b===v&&q.id===x;Ee.setState(q,b,Et)}let Je=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ut.state.version||ze.outputColorSpace!==Ie||V.isBatchedMesh&&ze.batching===!1||!V.isBatchedMesh&&ze.batching===!0||V.isBatchedMesh&&ze.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ze.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ze.instancing===!1||!V.isInstancedMesh&&ze.instancing===!0||V.isSkinnedMesh&&ze.skinning===!1||!V.isSkinnedMesh&&ze.skinning===!0||V.isInstancedMesh&&ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ze.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ze.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ze.instancingMorph===!1&&V.morphTexture!==null||ze.envMap!==Ce||q.fog===!0&&ze.fog!==fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ee.numPlanes||ze.numIntersection!==Ee.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==We||ze.morphTargets!==Fe||ze.morphNormals!==$e||ze.morphColors!==it||ze.toneMapping!==dt||ze.morphTargetsCount!==ot)&&(Je=!0):(Je=!0,ze.__version=q.version);let Ot=ze.currentProgram;Je===!0&&(Ot=_r(q,H,V));let ri=!1,Ft=!1,zi=!1;const lt=Ot.getUniforms(),Ht=ze.uniforms;if(_e.useProgram(Ot.program)&&(ri=!0,Ft=!0,zi=!0),q.id!==x&&(x=q.id,Ft=!0),ri||v!==b){_e.buffers.depth.getReversed()?(te.copy(b.projectionMatrix),Zg(te),Jg(te),lt.setValue(P,"projectionMatrix",te)):lt.setValue(P,"projectionMatrix",b.projectionMatrix),lt.setValue(P,"viewMatrix",b.matrixWorldInverse);const At=lt.map.cameraPosition;At!==void 0&&At.setValue(P,Pe.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&lt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Ft=!0,zi=!0)}if(V.isSkinnedMesh){lt.setOptional(P,V,"bindMatrix"),lt.setOptional(P,V,"bindMatrixInverse");const Et=V.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),lt.setValue(P,"boneTexture",Et.boneTexture,He))}V.isBatchedMesh&&(lt.setOptional(P,V,"batchingTexture"),lt.setValue(P,"batchingTexture",V._matricesTexture,He),lt.setOptional(P,V,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",V._indirectTexture,He),lt.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",V._colorsTexture,He));const Vt=$.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&we.update(V,$,Ot),(Ft||ze.receiveShadow!==V.receiveShadow)&&(ze.receiveShadow=V.receiveShadow,lt.setValue(P,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ht.envMap.value=Ce,Ht.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Ht.envMapIntensity.value=H.environmentIntensity),Ft&&(lt.setValue(P,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&Fu(Ht,zi),fe&&q.fog===!0&&j.refreshFogUniforms(Ht,fe),j.refreshMaterialUniforms(Ht,q,z,Y,h.state.transmissionRenderTarget[b.id]),Qr.upload(P,Na(ze),Ht,He)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Qr.upload(P,Na(ze),Ht,He),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&lt.setValue(P,"center",V.center),lt.setValue(P,"modelViewMatrix",V.modelViewMatrix),lt.setValue(P,"normalMatrix",V.normalMatrix),lt.setValue(P,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Et=q.uniformsGroups;for(let At=0,us=Et.length;At<us;At++){const Dn=Et[At];O.update(Dn,Ot),O.bind(Dn,Ot)}}return Ot}function Fu(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function ku(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,H,$){const q=Re.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Re.get(b.texture).__webglTexture=H,Re.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const $=Re.get(b);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};const Bu=P.createFramebuffer();this.setRenderTarget=function(b,H=0,$=0){C=b,L=H,A=$;let q=!0,V=null,fe=!1,Te=!1;if(b){const Ce=Re.get(b);if(Ce.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Ce.__webglFramebuffer===void 0)He.setupRenderTarget(b);else if(Ce.__hasExternalTextures)He.rebindTextures(b,Re.get(b.texture).__webglTexture,Re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&Re.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(b)}}const Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const We=Re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[H])?V=We[H][$]:V=We[H],fe=!0):b.samples>0&&He.useMultisampledRTT(b)===!1?V=Re.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[$]:V=We,S.copy(b.viewport),w.copy(b.scissor),I=b.scissorTest}else S.copy(me).multiplyScalar(z).floor(),w.copy(ve).multiplyScalar(z).floor(),I=W;if($!==0&&(V=Bu),_e.bindFramebuffer(P.FRAMEBUFFER,V)&&q&&_e.drawBuffers(b,V),_e.viewport(S),_e.scissor(w),_e.setScissorTest(I),fe){const Ce=Re.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,$)}else if(Te){const Ce=Re.get(b.texture),Ge=H;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,$,Ge)}else if(b!==null&&$!==0){const Ce=Re.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ce.__webglTexture,$)}x=-1},this.readRenderTargetPixels=function(b,H,$,q,V,fe,Te,Ie=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){_e.bindFramebuffer(P.FRAMEBUFFER,Ce);try{const Ge=b.textures[Ie],We=Ge.format,Fe=Ge.type;if(!Le.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-q&&$>=0&&$<=b.height-V&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),P.readPixels(H,$,q,V,xe.convert(We),xe.convert(Fe),fe))}finally{const Ge=C!==null?Re.get(C).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(b,H,$,q,V,fe,Te,Ie=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(H>=0&&H<=b.width-q&&$>=0&&$<=b.height-V){_e.bindFramebuffer(P.FRAMEBUFFER,Ce);const Ge=b.textures[Ie],We=Ge.format,Fe=Ge.type;if(!Le.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$e),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),P.readPixels(H,$,q,V,xe.convert(We),xe.convert(Fe),0);const it=C!==null?Re.get(C).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,it);const dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Kg(P,dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$e),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer($e),P.deleteSync(dt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,$=0){const q=Math.pow(2,-$),V=Math.floor(b.image.width*q),fe=Math.floor(b.image.height*q),Te=H!==null?H.x:0,Ie=H!==null?H.y:0;He.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,Te,Ie,V,fe),_e.unbindTexture()};const zu=P.createFramebuffer(),Hu=P.createFramebuffer();this.copyTextureToTexture=function(b,H,$=null,q=null,V=0,fe=null){fe===null&&(V!==0?(Ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=V,V=0):fe=0);let Te,Ie,Ce,Ge,We,Fe,$e,it,dt;const ct=b.isCompressedTexture?b.mipmaps[fe]:b.image;if($!==null)Te=$.max.x-$.min.x,Ie=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Ge=$.min.x,We=$.min.y,Fe=$.isBox3?$.min.z:0;else{const Vt=Math.pow(2,-V);Te=Math.floor(ct.width*Vt),Ie=Math.floor(ct.height*Vt),b.isDataArrayTexture?Ce=ct.depth:b.isData3DTexture?Ce=Math.floor(ct.depth*Vt):Ce=1,Ge=0,We=0,Fe=0}q!==null?($e=q.x,it=q.y,dt=q.z):($e=0,it=0,dt=0);const ot=xe.convert(H.format),ze=xe.convert(H.type);let ut;H.isData3DTexture?(He.setTexture3D(H,0),ut=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(He.setTexture2DArray(H,0),ut=P.TEXTURE_2D_ARRAY):(He.setTexture2D(H,0),ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);const Je=P.getParameter(P.UNPACK_ROW_LENGTH),Ot=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ri=P.getParameter(P.UNPACK_SKIP_PIXELS),Ft=P.getParameter(P.UNPACK_SKIP_ROWS),zi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);const lt=b.isDataArrayTexture||b.isData3DTexture,Ht=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Vt=Re.get(b),Et=Re.get(H),At=Re.get(Vt.__renderTarget),us=Re.get(Et.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,At.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,us.__webglFramebuffer);for(let Dn=0;Dn<Ce;Dn++)lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.get(b).__webglTexture,V,Fe+Dn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.get(H).__webglTexture,fe,dt+Dn)),P.blitFramebuffer(Ge,We,Te,Ie,$e,it,Te,Ie,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||Re.has(b)){const Vt=Re.get(b),Et=Re.get(H);_e.bindFramebuffer(P.READ_FRAMEBUFFER,zu),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hu);for(let At=0;At<Ce;At++)lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vt.__webglTexture,V,Fe+At):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Vt.__webglTexture,V),Ht?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.__webglTexture,fe,dt+At):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Et.__webglTexture,fe),V!==0?P.blitFramebuffer(Ge,We,Te,Ie,$e,it,Te,Ie,P.COLOR_BUFFER_BIT,P.NEAREST):Ht?P.copyTexSubImage3D(ut,fe,$e,it,dt+At,Ge,We,Te,Ie):P.copyTexSubImage2D(ut,fe,$e,it,Ge,We,Te,Ie);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ht?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(ut,fe,$e,it,dt,Te,Ie,Ce,ot,ze,ct.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(ut,fe,$e,it,dt,Te,Ie,Ce,ot,ct.data):P.texSubImage3D(ut,fe,$e,it,dt,Te,Ie,Ce,ot,ze,ct):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,$e,it,Te,Ie,ot,ze,ct.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,$e,it,ct.width,ct.height,ot,ct.data):P.texSubImage2D(P.TEXTURE_2D,fe,$e,it,Te,Ie,ot,ze,ct);P.pixelStorei(P.UNPACK_ROW_LENGTH,Je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ri),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ft),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zi),fe===0&&H.generateMipmaps&&P.generateMipmap(ut),_e.unbindTexture()},this.copyTextureToTexture3D=function(b,H,$=null,q=null,V=0){return Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,H,$,q,V)},this.initRenderTarget=function(b){Re.get(b).__webglFramebuffer===void 0&&He.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?He.setTextureCube(b,0):b.isData3DTexture?He.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?He.setTexture2DArray(b,0):He.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){L=0,A=0,C=null,_e.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function fy(n,e){if(e===0)return{edges:[]};const t=new Set,i=new Set;for(let f=0;f<e;f++){const g=f*4,_=n[g],m=n[g+1],h=n[g+2],E=n[g+3];t.add(_),t.add(_+h),i.add(m),i.add(m+E)}const r=Array.from(t).sort((f,g)=>f-g),s=Array.from(i).sort((f,g)=>f-g);if(r.length===0||s.length===0)return{edges:[]};const o=r[0],a=r[r.length-1],c=s[0],l=s[s.length-1],u=new Set,d=[],p=(f,g)=>{const _=f.x<g.x||f.x===g.x&&f.y<=g.y?`${f.x},${f.y}|${g.x},${g.y}`:`${g.x},${g.y}|${f.x},${f.y}`;u.has(_)||(u.add(_),d.push({start:[f.x,f.y],end:[g.x,g.y]}))};return r.forEach(f=>{p({x:f,y:c},{x:f,y:l})}),s.forEach(f=>{p({x:o,y:f},{x:a,y:f})}),{edges:d}}function py(n,e){if(e===0)return{edges:[]};let t=1,i=0;const r=[];for(let g=0;g<e;g++){const _=g*4,m=n[_],h=n[_+1],E=n[_+2],T=n[_+3];r.push({x:m,y:h,width:E,height:T}),t=Math.min(t,m),i=Math.max(i,m+E)}r.sort((g,_)=>g.y-_.y);const s=new Set,o=(g,_)=>s.add(`${g},${_}`);r.forEach(g=>{const _=g.y+g.height;o(t,_),o(i,_)});const a=r[0].y;o(t,a),o(i,a);const c=Array.from(s).map(g=>{const[_,m]=g.split(",").map(Number);return{x:_,y:m}}).sort((g,_)=>g.y!==_.y?g.y-_.y:g.x-_.x),l=[],u=(g,_)=>{l.push({start:[g.x,g.y],end:[_.x,_.y]})},d=c.filter(g=>Math.abs(g.x-t)<1e-6);for(let g=0;g<d.length-1;g++)u(d[g],d[g+1]);const p=c.filter(g=>Math.abs(g.x-i)<1e-6);for(let g=0;g<p.length-1;g++)u(p[g],p[g+1]);return[...new Set(c.map(g=>g.y))].sort((g,_)=>g-_).forEach(g=>{const _=d.find(h=>Math.abs(h.y-g)<1e-6),m=p.find(h=>Math.abs(h.y-g)<1e-6);_&&m&&u(_,m)}),{edges:l}}const Mi=`
  // Fullscreen quad vertex shader.
  // - Passes through the built-in attribute 'uv' into 'vUv'.
  // - Produces clip-space position from the built-in attribute 'position'.
  varying vec2 vUv;

  void main() {
    vUv = uv;                     // UV in [0,1]^2
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,my=`
  precision highp float;
  varying vec2 vUv;
  
  // Inputs describing the rail network as a set of line segments
  uniform int   uEdgeCount;                             // number of valid entries in uEdges
  uniform vec4  uEdges[${In*4+20}];          // (x1, y1, x2, y2) per segment
  uniform float uLineWidth;                              // visual/physical half-width of a rail

  // Distance from point p to segment [a,b]
  float distanceToSegment(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
  }

  // Unit tangent from a to b (falls back to +X if degenerate)
  vec2 getTangent(vec2 a, vec2 b) {
    vec2 dir = b - a;
    float len = length(dir);
    return len > 1e-6 ? dir / len : vec2(1.0, 0.0);
  }

  void main() {
    // We compute:
    // - minDist: smallest distance from vUv to any rail segment
    // - bestTan: tangent of the closest segment
    // - railCnt: number of overlapping segments within the line width
    float minDist = 1e6;
    vec2  bestTan = vec2(1.0, 0.0);
    int   railCnt = 0;

    for (int i = 0; i < ${In*4+20}; ++i) {
      if (i >= uEdgeCount) break;

      vec4 e = uEdges[i];
      float d = distanceToSegment(vUv, e.xy, e.zw);

      if (d < uLineWidth) {
        // Inside the thickness of this rail segment
        railCnt += 1;
      }

      if (d < minDist) {
        minDist = d;
        bestTan = getTangent(e.xy, e.zw);
      }
    }

    // Edge type encodes how many directions you can exit: 0..3 -> 1..4 exits.
    int edgeType = clamp(railCnt - 1, 0, 3);

    // Signed distance: negative inside the rail, positive outside.
    float signedDist = minDist - uLineWidth;

    // Output guide texture channels:
    // R = signed distance; G,B = tangent; A = edgeType
    gl_FragColor = vec4(signedDist, bestTan.x, bestTan.y, float(edgeType));
  }
`,gy=`
  precision highp float;
  varying vec2 vUv;
  
  uniform sampler2D uGuideTexture;        // guide (R: sd, G/B: tangent, A: edgeType)
  uniform sampler2D uPrevState;           // previous simulation state (R/G energy, B hue)
  uniform float     uDeltaTime;           // seconds per step
  uniform float     uSpeed;               // units per second along the rail
  uniform float     uAttenuation;         // exponential decay rate
  uniform float     uEnergyConservation;  // cap on total (forward+backward) energy per texel
  uniform float     uRailEpsilon;         // optional: rail epsilon; defaulted if <= 0
  uniform float     uTTLDecayRate;        // normalized TTL decay rate (1 / seconds)

  // Sample/return helper for simulation texels
  struct Sample {
    vec4  e;            // energy/hue at the sampled point (from uPrevState)
    bool  onRail;       // true if within any rail (guide.r <= epsilon)
  };

  // Reads guide/state at arbitrary UV, with bounds and rail checks
  Sample sampleEnergy(vec2 uv) {
    Sample s; 
    s.e = vec4(0.0);
    s.onRail = false;

    // Outside texture boundaries → treated as blocked
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      return s;
    }

    vec4 g = texture2D(uGuideTexture, uv);
    // Backwards-compatible default epsilon if uniform not provided or <= 0
    float railEps = (uRailEpsilon > 0.0) ? uRailEpsilon : 0.01;

    // Positive signed distance beyond epsilon → off-rail → block
    if (g.r > railEps) {
      return s;
    }

    // On rail → valid sample
    s.onRail = true;
    s.e = texture2D(uPrevState, uv);
    return s;
  }
  
  void main() {
    vec4 guide = texture2D(uGuideTexture, vUv);

    // If we're off-rail at the current fragment, write nothing
    if (guide.r > 0.01) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Rail-aligned basis: tangent and its perpendicular
    vec2 tan = normalize(guide.gb);        // along the rail
    vec2 prp = vec2(-tan.y, tan.x);        // perpendicular to the rail

    float stepLen = uSpeed * uDeltaTime;   // distance to sample along tangent/prp

    // Neighbor samples: forward/backward along tangent, and the two perpendicular sides
    Sample fS = sampleEnergy(vUv - tan * stepLen);
    Sample bS = sampleEnergy(vUv + tan * stepLen);
    Sample pS = sampleEnergy(vUv - prp * stepLen);
    Sample nS = sampleEnergy(vUv + prp * stepLen);

    // Local forward/backward contributions come from the max channel of each neighbor
    float fE = 0.0; if (fS.onRail) fE = max(fS.e.r, fS.e.g);
    float bE = 0.0; if (bS.onRail) bE = max(bS.e.r, bS.e.g);

    // At junctions, split lateral energy among the available exits.
    // edgeType 0..3 encodes 1..4 exits, so split = 1 + guide.a
    float split = 1.0 + guide.a;
    float invSplit = 1.0 / split;

    if (pS.onRail) {
      float e = max(pS.e.r, pS.e.g) * invSplit; 
      fE = max(fE, e);
      bE = max(bE, e);
    }

    if (nS.onRail) {
      float e = max(nS.e.r, nS.e.g) * invSplit; 
      fE = max(fE, e);
      bE = max(bE, e);
    }

    // Exponential attenuation
    float decay = exp(-uAttenuation * uDeltaTime);
    fE *= decay;
    bE *= decay;

    // Energy conservation: clamp the sum to a maximum budget
    float total = fE + bE;
    if (total > uEnergyConservation) {
      float c = uEnergyConservation / total;
      fE *= c;
      bE *= c;
    }

    // Hue selection: pick the hue of the strongest contributing neighbor
    float hue  = 0.0;
    float best = 0.0;

    if (fS.onRail && fS.e.r > best) { best = fS.e.r; hue = fS.e.b; }
    if (bS.onRail && bS.e.g > best) { best = bS.e.g; hue = bS.e.b; }

    float pMax = max(pS.e.r, pS.e.g);
    if (pS.onRail && pMax > best) { best = pMax; hue = pS.e.b; }

    float nMax = max(nS.e.r, nS.e.g);
    if (nS.onRail && nMax > best) { best = nMax; hue = nS.e.b; }

    // TTL advection: take the freshest (max) TTL from neighbors and decrease linearly with time
    float ttl = 0.0;
    if (fS.onRail) ttl = max(ttl, fS.e.a);
    if (bS.onRail) ttl = max(ttl, bS.e.a);
    if (pS.onRail) ttl = max(ttl, pS.e.a);
    if (nS.onRail) ttl = max(ttl, nS.e.a);
    ttl = max(0.0, ttl - uTTLDecayRate * uDeltaTime);

    // Output: forward/back energy and chosen hue; alpha carries TTL (0..1)
    gl_FragColor = vec4(fE, bE, hue, ttl);
  }
`,vy=`
  precision highp float;
  varying vec2 vUv;
  
  uniform sampler2D uGuideTexture;     // guide to ensure we only inject on-rail
  uniform sampler2D uCurrentState;     // current simulation texture to be updated

  uniform vec2  uInjectionPoint;       // UV coordinate of injection center
  uniform float uInjectionRadius;      // radius of influence (UV units)
  uniform float uInjectionEnergy;      // energy added to both directions
  uniform float uHue;                  // hue value to stamp in
  uniform float uInjectionEpsilon;     // optional: on-rail threshold; defaulted if == 0
  
  void main() {
    vec4 state = texture2D(uCurrentState, vUv);
    vec4 guide = texture2D(uGuideTexture, vUv);
    
    float d = distance(vUv, uInjectionPoint);

    // Only inject on the rail interior (guide.r <= epsilon), with a soft radial falloff.
    // Default epsilon is 0.0 if the uniform is not set.
    float injEps = (uInjectionEpsilon != 0.0) ? uInjectionEpsilon : 0.0;
    if (guide.r < injEps && d < uInjectionRadius) {
      // Gaussian-like profile; tweak 0.1 factor to adjust spread softness
      float r2   = uInjectionRadius * uInjectionRadius;
      float str  = exp(-d * d / (r2 * 0.1));

      state.r += uInjectionEnergy * str;  // forward energy
      state.g += uInjectionEnergy * str;  // backward energy
      state.b  = uHue;                    // set hue
      state.a  = max(state.a, 1.0);       // seed TTL to full
    }

    gl_FragColor = state;
  }
`,_y=`
  precision highp float;
  varying vec2 vUv;

  // Resolution and textures
  uniform vec2  uRes;                        // render resolution in pixels
  uniform sampler2D uGuideTexture;           // guide texture
  uniform sampler2D uSimulationTexture;      // simulation state
  uniform float uTime;                       // time (unused but kept for compatibility)

  // Minimal, physically interpretable controls
  uniform float uRailHalfWidthUV;            // rail half-width used in guide generation (UV units)
  uniform float uCoreWidthPx;                // half-width of bright core in pixels
  uniform float uBladeWidthPx;               // half-width of entire blade glow in pixels

  // Debug/overlay controls
  uniform int   uDebugView;                  // 0=normal, 1..7 = debug views
  uniform bool  uOverlayVectors;             // draw tangent arrows sampled on a grid
  uniform float uVectorSpacingPx;            // spacing of arrows (px)
  uniform float uVectorLengthPx;             // arrow half-length (px)
  uniform float uVectorThicknessPx;          // arrow half-thickness (px)
  uniform float uEnergyScale;                // scales energy when visualizing fields
  uniform float uGamma;                      // gamma correction (1.0 = none)
  uniform bool  uShowCenterline;             // optional centerline overlay
  uniform float uCenterlineWidthPx;          // centerline half-width (px)
  uniform float uIntensityCutoff;            // alpha cutoff to avoid lingering dark halos
  // Luminance controls
  uniform float uGlowIntensity;              // scales overall emissive brightness
  uniform float uCoreGain;                   // core contribution weight
  uniform float uHaloStrength;               // halo contribution weight
  uniform float uWhiteHotStrength;           // blend toward white near the core
  uniform float uExposure;                   // simple exponential tonemapping exposure

  /* ------------------------------ helpers ------------------------------ */
  // Convert hue in [0,1) to RGB (saturated)
  vec3 hue2rgb(float h) {
    h = fract(h);
    float r = abs(h * 6.0 - 3.0) - 1.0;
    float g = 2.0 - abs(h * 6.0 - 2.0);
    float b = 2.0 - abs(h * 6.0 - 4.0);
    return clamp(vec3(r, g, b), 0.0, 1.0);
  }

  // Sample tangent and signed distance at pixel-space anchor
  vec4 guideAtPx(vec2 px) {
    vec2 uv = px / uRes;
    return texture2D(uGuideTexture, uv);
  }

  // Draw a short line segment ("arrow body") centered on the nearest grid point, oriented along local tangent
  float arrowOverlay(vec2 fragPx) {
    if (!uOverlayVectors) return 0.0;
    float spacing = max(4.0, uVectorSpacingPx);
    vec2 cell = floor(fragPx / spacing) + 0.5;          // grid cell in arrow space
    vec2 gp   = cell * spacing;                         // nearest grid point (px)

    // Sample tangent at grid point
    vec4 g = guideAtPx(gp);
    vec2 t = normalize(g.gb);
    if (length(t) < 1e-6) t = vec2(1.0, 0.0);
    vec2 n = vec2(-t.y, t.x);

    // Local coordinates in (t, n) frame
    vec2 r = fragPx - gp;
    float halfL = max(2.0, uVectorLengthPx);
    float halfW = max(0.5, uVectorThicknessPx);
    float dTan = abs(dot(r, t));
    float dPrp = abs(dot(r, n));
    float onSeg = step(dTan, halfL) * smoothstep(halfW, 0.0, dPrp);
    // Dim off-rail arrows
    float onRail = step(g.r, 0.0);
    return onSeg * (0.6 + 0.4 * onRail);
  }

  void main() {
    // Sample guide info
    vec4 guide = texture2D(uGuideTexture, vUv);

    // Rail basis
    vec2 tan = normalize(guide.gb);
    if (length(tan) < 1e-6) tan = vec2(1.0, 0.0);
    vec2 prp = vec2(-tan.y, tan.x);

    // Distance from this pixel to the rail centreline in UV, then pixels
    float sd = guide.r; // signed distance to rail border (UV)
    float dCenterUV = abs(sd + uRailHalfWidthUV);
    float dPx = dCenterUV * uRes.x; // approximate px scale using X axis

    // For normal rendering we can early-out far from the blade for perf.
    // In debug views we keep drawing so visualizations cover the screen.
    if (uDebugView == 0) {
      if (dPx > uBladeWidthPx + 1.0) { discard; }
    }

    // Fetch local simulation sample for debug modes
    vec4 sUv = texture2D(uSimulationTexture, vUv);

    // Debug views (1..7)
    if (uDebugView == 1) {
      // 1) Signed distance visualization
      float m = clamp(0.5 - sd * 8.0, 0.0, 1.0);
      vec3 col = mix(vec3(0.06), vec3(1.0), m);
      col += arrowOverlay(vUv * uRes) * 0.75;
      if (uShowCenterline) {
        float c = smoothstep(uCenterlineWidthPx, 0.0, dPx);
        col = mix(col, vec3(1.0), c);
      }
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 2) {
      // 2) Tangent direction mapped to hue
      float ang = atan(tan.y, tan.x) / (6.28318530718) + 0.5; // 0..1
      vec3 col = hue2rgb(ang) * mix(0.25, 1.0, step(sd, 0.0));
      col += arrowOverlay(vUv * uRes) * 0.9;
      if (uShowCenterline) {
        float c = smoothstep(uCenterlineWidthPx, 0.0, dPx);
        col = mix(col, vec3(1.0), c);
      }
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 3) {
      // 3) Edge type (junction complexity)
      float et = clamp(guide.a, 0.0, 3.0);
      vec3 col = et < 0.5 ? vec3(0.2, 0.4, 1.0) :
                 et < 1.5 ? vec3(0.2, 1.0, 0.4) :
                 et < 2.5 ? vec3(1.0, 0.9, 0.2) : vec3(1.0, 0.3, 0.2);
      col *= mix(0.2, 1.0, step(sd, 0.0));
      col += arrowOverlay(vUv * uRes) * 0.9;
      if (uShowCenterline) {
        float c = smoothstep(uCenterlineWidthPx, 0.0, dPx);
        col = mix(col, vec3(1.0), c);
      }
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 4) {
      // 4) Forward energy (R)
      float e = sUv.r * uEnergyScale;
      vec3 col = vec3(e, 0.0, 0.0);
      col += arrowOverlay(vUv * uRes) * 0.5;
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 5) {
      // 5) Backward energy (G)
      float e = sUv.g * uEnergyScale;
      vec3 col = vec3(0.0, e, 0.0);
      col += arrowOverlay(vUv * uRes) * 0.5;
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 6) {
      // 6) Total energy with TTL gating: alpha = energy * TTL (travelling fade)
      float e = clamp((sUv.r + sUv.g) * uEnergyScale, 0.0, 1.0);
      float ttl = clamp(sUv.a, 0.0, 1.0);
      float a = e * ttl;
      if (a <= uIntensityCutoff) { gl_FragColor = vec4(0.0); return; }
      vec3 col = hue2rgb(sUv.b);
      col += arrowOverlay(vUv * uRes) * 0.5;
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, a);
      return;
    } else if (uDebugView == 7) {
      // 7) Hue only (ignore energy)
      vec3 col = hue2rgb(sUv.b);
      col += arrowOverlay(vUv * uRes) * 0.75;
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    }

    // Normal rendering path (mode 0): lightsaber-like profile with alpha-driven energy fade
    // Approximate closest-on-rail sample by peeking along the perpendicular
    vec4 sP = texture2D(uSimulationTexture, vUv + prp * dCenterUV);
    vec4 sM = texture2D(uSimulationTexture, vUv - prp * dCenterUV);
    float e0 = sUv.r + sUv.g;
    float eP = sP.r + sP.g;
    float eM = sM.r + sM.g;
    float e = e0; float hue = sUv.b;
    if (eP > e) { e = eP; hue = sP.b; }
    if (eM > e) { e = eM; hue = sM.b; }

    if (e <= 1e-4) { gl_FragColor = vec4(0.0); return; }

    // Radial profile
    float core = smoothstep(uCoreWidthPx, 0.0, dPx);
    float fall = 1.0 - smoothstep(uCoreWidthPx, uBladeWidthPx, dPx);
    // Use a softer alpha mask and a stronger emissive term to regain "glow"
    float shapeAlpha    = clamp(core + 0.5 * fall, 0.0, 1.0);
    float shapeEmission = max(1e-4, core * core * uCoreGain + fall * uHaloStrength);
    vec3  base = hue2rgb(hue);
    vec3  color = base * (uGlowIntensity * shapeEmission);
    // Energy + TTL-driven alpha (single fade with travelling front)
    float alphaE = clamp(e * uEnergyScale, 0.0, 1.0);
    float ttl    = clamp(sUv.a, 0.0, 1.0);
    float alpha  = clamp(alphaE * ttl * shapeAlpha, 0.0, 1.0);
    if (alpha <= uIntensityCutoff) { gl_FragColor = vec4(0.0); return; }
    // White-hot center for extra brilliance
    float whiteHot = smoothstep(0.8, 1.0, core) * alphaE;
    color = mix(color, vec3(1.0), clamp(uWhiteHotStrength * whiteHot, 0.0, 1.0));
    // Simple exposure tonemapping
    color = 1.0 - exp(-uExposure * color);

    // Optional overlays
    if (uShowCenterline) {
      float c = smoothstep(uCenterlineWidthPx, 0.0, dPx);
      color = mix(color, vec3(1.0), c);
    }
    color += arrowOverlay(vUv * uRes) * 0.9;

    // Gamma
    color = pow(max(color, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
    gl_FragColor = vec4(color, alpha);
  }
`;class xy{constructor(e){this.renderer=e,this.guideTexture=new rn(ws,ws,{format:It,type:Xt,minFilter:Mt,magFilter:Mt}),this.simulationTextures=[0,1].map(()=>new rn(yi,yi,{format:It,type:Xt,minFilter:Mt,magFilter:Mt})),this.tempTexture=new rn(yi,yi,{format:It,type:Xt,minFilter:Mt,magFilter:Mt}),this.guideMaterial=new Pt({vertexShader:Mi,fragmentShader:my,uniforms:{uEdgeCount:{value:0},uEdges:{value:new Float32Array((In*4+20)*4)},uLineWidth:{value:.008}}}),this.simulationMaterial=new Pt({vertexShader:Mi,fragmentShader:gy,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uPrevState:{value:null},uDeltaTime:{value:.016},uSpeed:{value:1},uAttenuation:{value:1},uEnergyConservation:{value:1},uRailEpsilon:{value:0},uTTLDecayRate:{value:.5}}}),this.injectionMaterial=new Pt({vertexShader:Mi,fragmentShader:vy,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uCurrentState:{value:null},uInjectionPoint:{value:new tt(.5,.5)},uInjectionRadius:{value:.1},uInjectionEnergy:{value:2},uHue:{value:0},uInjectionEpsilon:{value:0}}}),this.quad=new Jt(new Fi(2,2),this.guideMaterial),this.scene=new Ru,this.scene.add(this.quad),this.camera=new Pa(-1,1,1,-1,0,1),this.clearBuffers()}renderer;guideTexture;simulationTextures;tempTexture;guideMaterial;simulationMaterial;injectionMaterial;quad;scene;camera;current=0;isInitialized=!1;clearBuffers(){const e=new Pt({vertexShader:Mi,fragmentShader:"void main(){gl_FragColor=vec4(0.0);}"});this.quad.material=e,[...this.simulationTextures,this.tempTexture].forEach(t=>{this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}),this.renderer.setRenderTarget(null),e.dispose()}updateGuideTexture(e){const t=Math.min(e.length,In*4+20),i=this.guideMaterial.uniforms.uEdges.value;e.slice(0,t).forEach((r,s)=>i.set([...r.start,...r.end],s*4)),this.guideMaterial.uniforms.uEdgeCount.value=t,this.quad.material=this.guideMaterial,this.renderer.setRenderTarget(this.guideTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.isInitialized=!0}simulationStep(e){if(!this.isInitialized)return;const t=this.current,i=1-t;this.simulationMaterial.uniforms.uPrevState.value=this.simulationTextures[t].texture,this.simulationMaterial.uniforms.uDeltaTime.value=e,this.quad.material=this.simulationMaterial,this.renderer.setRenderTarget(this.simulationTextures[i]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.current=i}injectPulse(e,t,i,r=2){if(!this.isInitialized)return;this.injectionMaterial.uniforms.uCurrentState.value=this.simulationTextures[this.current].texture,this.injectionMaterial.uniforms.uInjectionPoint.value.set(e,t),this.injectionMaterial.uniforms.uInjectionEnergy.value=r,this.injectionMaterial.uniforms.uHue.value=i,this.quad.material=this.injectionMaterial,this.renderer.setRenderTarget(this.tempTexture),this.renderer.render(this.scene,this.camera);const s=new Pt({vertexShader:Mi,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){gl_FragColor=texture2D(t,vUv);} ",uniforms:{t:{value:this.tempTexture.texture}}});this.quad.material=s,this.renderer.setRenderTarget(this.simulationTextures[this.current]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),s.dispose()}getCurrentTexture(){return this.simulationTextures[this.current].texture}getPreviousSimulationTexture(){return this.simulationTextures[1-this.current].texture}getTempTexture(){return this.tempTexture.texture}getGuideTexture(){return this.guideTexture.texture}getTextureInfo(){return{guideResolution:ws,simResolution:yi,currentBuffer:this.current,isInitialized:this.isInitialized,edgeCount:this.guideMaterial.uniforms.uEdgeCount.value}}dispose(){this.guideTexture.dispose(),this.tempTexture.dispose(),this.simulationTextures.forEach(e=>e.dispose()),this.guideMaterial.dispose(),this.simulationMaterial.dispose(),this.injectionMaterial.dispose()}}const Ct=n=>{const e=Nt.c(52),{label:t,value:i,min:r,max:s,step:o,onChange:a}=n;let c;e[0]!==i?(c=i.toString(),e[0]=i,e[1]=c):c=e[1];const[l,u]=ee.useState(c),[d,p]=ee.useState(!1),f=ee.useRef(null);let g,_;e[2]!==d||e[3]!==i?(g=()=>{d||u(i.toString())},_=[i,d],e[2]=d,e[3]=i,e[4]=g,e[5]=_):(g=e[4],_=e[5]),ee.useEffect(g,_);let m;e[6]!==l||e[7]!==a||e[8]!==i?(m=()=>{const W=parseFloat(l);isNaN(W)?u(i.toString()):a(W)},e[6]=l,e[7]=a,e[8]=i,e[9]=m):m=e[9];const h=m;let E;e[10]!==i?(E=()=>{p(!0),u(i.toString())},e[10]=i,e[11]=E):E=e[11];const T=E;let M;e[12]!==h?(M=()=>{p(!1),h()},e[12]=h,e[13]=M):M=e[13];const U=M;let L;e[14]!==h||e[15]!==i?(L=W=>{W.key==="Enter"?(h(),f.current?.blur()):W.key==="Escape"&&(u(i.toString()),p(!1),f.current?.blur())},e[14]=h,e[15]=i,e[16]=L):L=e[16];const A=L;let C,x;e[17]===Symbol.for("react.memo_cache_sentinel")?(C={marginBottom:8},x={display:"flex",justifyContent:"space-between",fontSize:10,color:"#ccc",marginBottom:2},e[17]=C,e[18]=x):(C=e[17],x=e[18]);let v;e[19]!==t?(v=G.jsx("span",{children:t}),e[19]=t,e[20]=v):v=e[20];let S;e[21]!==o||e[22]!==i?(S=i.toFixed(o<.01?3:2),e[21]=o,e[22]=i,e[23]=S):S=e[23];let w;e[24]!==S?(w=G.jsx("span",{children:S}),e[24]=S,e[25]=w):w=e[25];let I;e[26]!==v||e[27]!==w?(I=G.jsxs("div",{style:x,children:[v,w]}),e[26]=v,e[27]=w,e[28]=I):I=e[28];let D;e[29]!==a?(D=W=>a(parseFloat(W.target.value)),e[29]=a,e[30]=D):D=e[30];let F;e[31]===Symbol.for("react.memo_cache_sentinel")?(F={width:"100%",marginBottom:4},e[31]=F):F=e[31];let N;e[32]!==s||e[33]!==r||e[34]!==o||e[35]!==D||e[36]!==i?(N=G.jsx("input",{type:"range",min:r,max:s,step:o,value:i,onChange:D,style:F}),e[32]=s,e[33]=r,e[34]=o,e[35]=D,e[36]=i,e[37]=N):N=e[37];let Y;e[38]===Symbol.for("react.memo_cache_sentinel")?(Y=W=>u(W.target.value),e[38]=Y):Y=e[38];const z=d?"#333":"#222",Z=`1px solid ${d?"#666":"#444"}`;let re;e[39]!==z||e[40]!==Z?(re={width:"100%",background:z,color:"#fff",border:Z,borderRadius:3,padding:"4px 6px",fontSize:11,boxSizing:"border-box"},e[39]=z,e[40]=Z,e[41]=re):re=e[41];let me;e[42]!==U||e[43]!==T||e[44]!==A||e[45]!==l||e[46]!==re?(me=G.jsx("input",{ref:f,type:"text",value:l,onFocus:T,onChange:Y,onBlur:U,onKeyDown:A,placeholder:"Enter value...",style:re}),e[42]=U,e[43]=T,e[44]=A,e[45]=l,e[46]=re,e[47]=me):me=e[47];let ve;return e[48]!==I||e[49]!==N||e[50]!==me?(ve=G.jsxs("div",{style:C,children:[I,N,me]}),e[48]=I,e[49]=N,e[50]=me,e[51]=ve):ve=e[51],ve},Sy=({scopeId:n="scope",gpuSimRef:e,vizUniformsRef:t,nodeCount:i,position:r="top-right",isPaused:s=!1,setPaused:o,onNudgeRender:a,onClose:c})=>{const[l,u]=ee.useState(()=>{switch(r){case"top-left":return{x:20,y:20};case"top-right":return{x:window.innerWidth-240,y:20};case"bottom-left":return{x:20,y:window.innerHeight-400};case"bottom-right":return{x:window.innerWidth-240,y:window.innerHeight-400};default:return{x:20,y:20}}}),d=ee.useRef(!1),p=ee.useRef({x:0,y:0}),f=x=>{d.current=!0,p.current={x:x.clientX-l.x,y:x.clientY-l.y}},g=ee.useCallback(x=>{d.current&&u({x:x.clientX-p.current.x,y:x.clientY-p.current.y})},[]),_=ee.useCallback(()=>{d.current=!1},[]);ee.useEffect(()=>{if(d.current)return document.addEventListener("mousemove",g),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",_)}},[g,_,d.current]);const[m,h]=ee.useState(!1),[E,T]=ee.useState({speed:en.speed,attenuation:en.attenuation,lineWidth:.008,injectionRadius:en.injectionRadius,ttlLifetime:2,coreWidthPx:2,bladeWidthPx:10,energyScale:1,gamma:1,debugView:0,overlayVectors:!1,vectorSpacingPx:16,vectorLengthPx:8,vectorThicknessPx:1.25,showCenterline:!1,centerlineWidthPx:1.25,intensityCutoff:.01}),M=(x,v)=>{T(I=>({...I,[x]:v}));const S=e.current,w=t.current;if(!(!S||!w)){switch(x){case"speed":S.simulationMaterial.uniforms.uSpeed.value=v;break;case"attenuation":S.simulationMaterial.uniforms.uAttenuation.value=v;break;case"lineWidth":S.guideMaterial.uniforms.uLineWidth.value=v;break;case"injectionRadius":S.injectionMaterial.uniforms.uInjectionRadius.value=v;break;case"ttlLifetime":{const D=1/Math.max(.1,v);S.simulationMaterial.uniforms.uTTLDecayRate&&(S.simulationMaterial.uniforms.uTTLDecayRate.value=D);break}case"coreWidthPx":w.uCoreWidthPx&&(w.uCoreWidthPx.value=v);break;case"bladeWidthPx":w.uBladeWidthPx&&(w.uBladeWidthPx.value=v);break;case"energyScale":w.uEnergyScale&&(w.uEnergyScale.value=v);break;case"gamma":w.uGamma&&(w.uGamma.value=v);break;case"intensityCutoff":w.uIntensityCutoff&&(w.uIntensityCutoff.value=v);break;case"debugView":w.uDebugView&&(w.uDebugView.value=v);break;case"overlayVectors":w.uOverlayVectors&&(w.uOverlayVectors.value=!!v);break;case"vectorSpacingPx":w.uVectorSpacingPx&&(w.uVectorSpacingPx.value=v);break;case"vectorLengthPx":w.uVectorLengthPx&&(w.uVectorLengthPx.value=v);break;case"vectorThicknessPx":w.uVectorThicknessPx&&(w.uVectorThicknessPx.value=v);break;case"showCenterline":w.uShowCenterline&&(w.uShowCenterline.value=!!v);break;case"centerlineWidthPx":w.uCenterlineWidthPx&&(w.uCenterlineWidthPx.value=v);break}a?.()}};ee.useEffect(()=>{const x=e.current,v=t.current;!x||!v||T(S=>({...S,speed:x.simulationMaterial.uniforms.uSpeed?.value??S.speed,attenuation:x.simulationMaterial.uniforms.uAttenuation?.value??S.attenuation,lineWidth:x.guideMaterial.uniforms.uLineWidth?.value??S.lineWidth,injectionRadius:x.injectionMaterial.uniforms.uInjectionRadius?.value??S.injectionRadius,ttlLifetime:(x.simulationMaterial.uniforms.uTTLDecayRate?.value??0)>0?1/(x.simulationMaterial.uniforms.uTTLDecayRate?.value??1):S.ttlLifetime,coreWidthPx:v.uCoreWidthPx?.value??S.coreWidthPx,bladeWidthPx:v.uBladeWidthPx?.value??S.bladeWidthPx,energyScale:v.uEnergyScale?.value??S.energyScale,gamma:v.uGamma?.value??S.gamma,debugView:v.uDebugView?.value??S.debugView,overlayVectors:!!(v.uOverlayVectors?.value??S.overlayVectors),vectorSpacingPx:v.uVectorSpacingPx?.value??S.vectorSpacingPx,vectorLengthPx:v.uVectorLengthPx?.value??S.vectorLengthPx,vectorThicknessPx:v.uVectorThicknessPx?.value??S.vectorThicknessPx,showCenterline:!!(v.uShowCenterline?.value??S.showCenterline),centerlineWidthPx:v.uCenterlineWidthPx?.value??S.centerlineWidthPx,intensityCutoff:v.uIntensityCutoff?.value??S.intensityCutoff}))},[]);const[U,L]=ee.useState({fps:0,frame:0});ee.useEffect(()=>{let x=0,v=0,S=performance.now();const w=()=>{const I=performance.now();if(x+=I-S,v+=1,v>=60){const D=x/v;L({fps:Math.round(1e3/D),frame:parseFloat(D.toFixed(2))}),x=0,v=0}S=I,requestAnimationFrame(w)};w()},[]);const A=x=>{switch(x){case"default":M("speed",en.speed),M("attenuation",en.attenuation),M("lineWidth",.008),M("injectionRadius",en.injectionRadius),M("ttlLifetime",2),M("coreWidthPx",2),M("bladeWidthPx",10),M("energyScale",1),M("gamma",1),M("debugView",0),M("overlayVectors",!1),M("showCenterline",!1);break;case"fast":M("speed",1.5),M("attenuation",.5),M("ttlLifetime",1);break;case"slow":M("speed",.3),M("attenuation",2.5),M("ttlLifetime",4);break;case"intense":M("coreWidthPx",Math.max(1,E.coreWidthPx*1.5)),M("bladeWidthPx",Math.max(E.coreWidthPx+2,E.bladeWidthPx*1.5)),M("energyScale",Math.max(1,E.energyScale*1.3));break;case"subtle":M("attenuation",2),M("coreWidthPx",Math.max(1,E.coreWidthPx*.7)),M("bladeWidthPx",Math.max(E.coreWidthPx+2,E.bladeWidthPx*.8)),M("ttlLifetime",3);break}},C=(x,v)=>G.jsx("button",{style:{padding:"2px 6px",fontSize:9,background:"#444",color:"#fff",border:"1px solid #666",borderRadius:3,marginRight:3,marginBottom:3},onClick:()=>A(v),onMouseEnter:S=>S.currentTarget.style.background="#555",onMouseLeave:S=>S.currentTarget.style.background="#444",children:x},v);return G.jsxs("div",{style:{position:"fixed",left:l.x,top:l.y,width:220,background:"rgba(20,20,20,0.95)",border:"1px solid #444",borderRadius:6,color:"#fff",fontFamily:"monospace",fontSize:11,zIndex:1e4,pointerEvents:"auto",maxHeight:"calc(100vh - 40px)",overflowY:"auto"},children:[G.jsxs("div",{onMouseDown:f,style:{padding:"6px 10px",background:"#333",cursor:"move",borderRadius:"6px 6px 0 0",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #444",userSelect:"none"},children:[G.jsxs("span",{style:{fontWeight:"bold",fontSize:10},children:[n," debug"]}),G.jsxs("div",{style:{display:"flex",gap:4},children:[G.jsx("button",{onClick:()=>o?.(!s),title:s?"Resume simulation":"Pause simulation",style:{background:"none",border:"1px solid #666",color:"#fff",fontSize:10,borderRadius:3,padding:"0 6px",cursor:"pointer"},children:s?"▶":"⏸"}),c&&G.jsx("button",{onClick:c,style:{background:"none",border:"none",color:"#f44",fontSize:12,cursor:"pointer"},children:"×"}),G.jsx("button",{onClick:()=>h(x=>!x),style:{background:"none",border:"none",color:"#fff",fontSize:12},children:m?"▼":"▲"})]})]}),!m&&G.jsxs("div",{style:{padding:10},children:[G.jsx("div",{style:{marginBottom:12},children:G.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,fontSize:9},children:[G.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[G.jsx("div",{children:"FPS"}),G.jsx("div",{style:{color:U.fps<30?"#f44":"#4f4"},children:U.fps})]}),G.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[G.jsx("div",{children:"Nodes"}),G.jsx("div",{children:i})]}),G.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[G.jsx("div",{children:"Res"}),G.jsx("div",{children:yi})]})]})}),G.jsxs("div",{style:{marginBottom:12},children:[G.jsx("div",{style:{color:"#aaa",fontSize:10,marginBottom:4},children:"Presets"}),C("Def","default"),C("Fast","fast"),C("Slow","slow"),C("Int","intense"),C("Sub","subtle")]}),G.jsxs("div",{style:{marginBottom:12},children:[G.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Simulation"}),G.jsx(Ct,{label:"Speed",value:E.speed,min:.1,max:2,step:.1,onChange:x=>M("speed",x)}),G.jsx(Ct,{label:"Attenuation",value:E.attenuation,min:.1,max:5,step:.1,onChange:x=>M("attenuation",x)}),G.jsx(Ct,{label:"Rail width",value:E.lineWidth,min:.002,max:.05,step:.001,onChange:x=>M("lineWidth",x)}),G.jsx(Ct,{label:"Fade lifetime (s)",value:E.ttlLifetime,min:.2,max:10,step:.1,onChange:x=>M("ttlLifetime",x)})]}),G.jsxs("div",{style:{marginBottom:12},children:[G.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Injection"}),G.jsx(Ct,{label:"Radius",value:E.injectionRadius,min:.01,max:.3,step:.01,onChange:x=>M("injectionRadius",x)})]}),G.jsxs("div",{style:{marginBottom:12},children:[G.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Visualization"}),G.jsx(Ct,{label:"Core width (px)",value:E.coreWidthPx,min:1,max:40,step:1,onChange:x=>M("coreWidthPx",x)}),G.jsx(Ct,{label:"Blade width (px)",value:E.bladeWidthPx,min:E.coreWidthPx+2,max:200,step:1,onChange:x=>M("bladeWidthPx",Math.max(x,E.coreWidthPx+2))}),G.jsx(Ct,{label:"Energy scale",value:E.energyScale,min:.1,max:5,step:.1,onChange:x=>M("energyScale",x)}),G.jsx(Ct,{label:"Gamma",value:E.gamma,min:.5,max:2.5,step:.1,onChange:x=>M("gamma",x)}),G.jsx(Ct,{label:"Min intensity cutoff",value:E.intensityCutoff,min:0,max:.05,step:.001,onChange:x=>M("intensityCutoff",x)})]}),G.jsxs("div",{style:{marginBottom:12},children:[G.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Debug view & overlays"}),G.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8},children:[["Norm",0],["SDF",1],["Tan",2],["Edge",3],["Fwd",4],["Back",5],["Total",6],["Hue",7]].map(([x,v])=>G.jsx("button",{onClick:()=>M("debugView",v),style:{padding:"2px 6px",fontSize:9,background:E.debugView===v?"#777":"#444",color:"#fff",border:"1px solid #666",borderRadius:3},children:x},x))}),G.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:6,marginBottom:6},children:[G.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Vector overlay"}),G.jsx("input",{type:"checkbox",checked:E.overlayVectors,onChange:x=>M("overlayVectors",x.target.checked)}),G.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Centerline"}),G.jsx("input",{type:"checkbox",checked:E.showCenterline,onChange:x=>M("showCenterline",x.target.checked)})]}),G.jsx(Ct,{label:"Vector spacing (px)",value:E.vectorSpacingPx,min:4,max:64,step:1,onChange:x=>M("vectorSpacingPx",x)}),G.jsx(Ct,{label:"Vector length (px)",value:E.vectorLengthPx,min:2,max:32,step:1,onChange:x=>M("vectorLengthPx",x)}),G.jsx(Ct,{label:"Vector thickness (px)",value:E.vectorThicknessPx,min:.5,max:6,step:.25,onChange:x=>M("vectorThicknessPx",x)}),G.jsx(Ct,{label:"Centerline width (px)",value:E.centerlineWidthPx,min:.5,max:8,step:.5,onChange:x=>M("centerlineWidthPx",x)})]})]})]})},yy=n=>n.hue!==void 0?n.hue:n.rgb?Sa(n.rgb):0,My=({children:n,topology:e="ladder",speed:t=en.speed,attenuation:i=en.attenuation,enableGlobalClicks:r=!1,showDebug:s=!1,scopeId:o="scope",debugPosition:a="top-right",cornerRadius:c=0,pixelRatio:l,powerPreference:u="default",maxFPS:d=120})=>{const p=ee.useRef(new Map),[,f]=ee.useState(0),g=ee.useRef(!1),_=ee.useCallback(()=>{g.current||(g.current=!0,Promise.resolve().then(()=>{g.current=!1,f(B=>B+1)}))},[]),h=ra().toLowerCase().indexOf("light")!==-1,E=ee.useCallback(B=>{p.current.set(B.id,B);const ie=B.ref.current;ie&&k.current&&k.current.observe(ie),W.current=!0,_()},[_]),T=ee.useCallback(B=>{const te=p.current.get(B)?.ref.current;te&&k.current&&k.current.unobserve(te),p.current.delete(B),W.current=!0,_()},[_]),M=ee.useRef(performance.now()),U=ee.useRef(null),L=ee.useRef(null),A=ee.useRef(performance.now()),C=ee.useRef(d),x=ee.useRef(()=>{}),v=ee.useCallback(()=>{L.current===null&&(F.current=performance.now(),U.current&&(L.current=requestAnimationFrame(U.current)))},[]),S=ee.useCallback((B,ie,te={})=>{const de=Y.current;if(!de)return;let Pe=yy(te);h&&(Pe=(Pe+.5)%1);const Ae=te.energy??2.5,ue=te.radius??en.injectionRadius;de.injectionMaterial.uniforms.uInjectionRadius.value=ue,de.injectPulse(B,ie,Pe,Ae),M.current=performance.now(),v()},[h,v]);ee.useEffect(()=>{x.current=S},[S]),ee.useEffect(()=>{C.current=d},[d]);const w=ee.useCallback(B=>{const te=p.current.get(B)?.ref.current;if(!te)return null;const de=te.getBoundingClientRect();return{u:(de.left+de.width/2)/window.innerWidth,v:1-(de.top+de.height/2)/window.innerHeight}},[]),I=ee.useMemo(()=>({register:E,unregister:T,pulseAt:S,getNodeCenter:w}),[E,T,S,w]),D=ee.useRef(null),F=ee.useRef(performance.now()),N=ee.useRef(new Float32Array(In*4)),Y=ee.useRef(null),z=ee.useRef(null),[Z,re]=ee.useState(s),me=ee.useRef(null),ve=ee.useRef(e),W=ee.useRef(!0);ee.useEffect(()=>{if(!D.current)return;M.current=performance.now();const B=new hy({alpha:!0,antialias:!0,powerPreference:u}),ie=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;B.setPixelRatio(ie),B.setSize(window.innerWidth,window.innerHeight),D.current.appendChild(B.domElement),me.current=B;const te=new Ru,de=new Pa(-1,1,1,-1,0,1),Pe=new xy(B);Y.current=Pe;const Ae=Pe.simulationMaterial.uniforms;Ae.uSpeed.value=t,Ae.uAttenuation.value=i,Ae.uEnergyConservation.value=en.energyConservation;const ue={uRes:{value:new tt(window.innerWidth,window.innerHeight)},uGuideTexture:{value:Pe.getGuideTexture()},uSimulationTexture:{value:Pe.getCurrentTexture()},uTime:{value:0},uRailHalfWidthUV:{value:Pe.guideMaterial.uniforms.uLineWidth.value},uCoreWidthPx:{value:2},uBladeWidthPx:{value:10},uCornerRadiusPx:{value:c},uDebugView:{value:0},uOverlayVectors:{value:!1},uVectorSpacingPx:{value:16},uVectorLengthPx:{value:8},uVectorThicknessPx:{value:1.25},uEnergyScale:{value:1},uGamma:{value:1},uShowCenterline:{value:!1},uCenterlineWidthPx:{value:1.25},uIntensityCutoff:{value:.01},uGlowIntensity:{value:1.35},uCoreGain:{value:1},uHaloStrength:{value:.6},uWhiteHotStrength:{value:.25},uExposure:{value:1}};z.current=ue;const pe=new Jt(new Fi(2,2),new Pt({vertexShader:Mi,fragmentShader:_y,uniforms:ue,transparent:!0,depthWrite:!1,blending:mo}));te.add(pe),W.current=!0;const he=1e4,P=()=>{const Le=performance.now();if(Le-M.current>he){L.current=null;return}const _e=C.current;if(_e&&_e>0){const R=1e3/_e;if(Le-A.current<R){L.current=requestAnimationFrame(P);return}}const De=Math.min((Le-F.current)/1e3,.033);F.current=Le;const Re=window.innerWidth,He=window.innerHeight,qe=Array.from(p.current.values()).slice(0,In);qe.forEach((R,y)=>{const X=R.ref.current;if(!X)return;const J=X.getBoundingClientRect(),Q=y*4,j=[J.left/Re,(He-(J.top+J.height))/He,J.width/Re,J.height/He];for(let le=0;le<4;le++)Math.abs(N.current[Q+le]-j[le])>.001&&(N.current[Q+le]=j[le],W.current=!0)});for(let R=qe.length*4;R<N.current.length;R++)N.current[R]!==0&&(N.current[R]=0,W.current=!0);if(W.current){const R=ve.current==="grid"?fy(N.current,qe.length).edges:py(N.current,qe.length).edges;Pe.updateGuideTexture(R),W.current=!1}Pe.simulationStep(De),ue.uSimulationTexture.value=Pe.getCurrentTexture(),ue.uTime.value=Le/1e3,ue.uRailHalfWidthUV.value=Pe.guideMaterial.uniforms.uLineWidth.value,B.setRenderTarget(null),B.render(te,de),A.current=Le,L.current=requestAnimationFrame(P)};U.current=P,L.current=requestAnimationFrame(P);const ke=()=>{ue.uRes.value.set(window.innerWidth,window.innerHeight),B.setSize(window.innerWidth,window.innerHeight),W.current=!0};window.addEventListener("resize",ke);const ye=D.current;return()=>{window.removeEventListener("resize",ke),L.current!==null&&cancelAnimationFrame(L.current),L.current=null,Pe.dispose(),B.dispose(),ye&&B.domElement.parentElement===ye&&ye.removeChild(B.domElement)}},[i,c,l,u,t]),ee.useEffect(()=>{ve.current=e,W.current=!0,v()},[e,v]),ee.useEffect(()=>{const B=Y.current;if(!B)return;const ie=B.simulationMaterial.uniforms;ie.uSpeed.value=t,ie.uAttenuation.value=i},[t,i]),ee.useEffect(()=>{if(!r)return;const B=ie=>{const te=ie.clientX/window.innerWidth,de=1-ie.clientY/window.innerHeight;x.current&&x.current(te,de,{hue:.33})};return window.addEventListener("click",B),()=>window.removeEventListener("click",B)},[r]),ee.useEffect(()=>{const B=me.current;if(!B)return;const ie=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;B.setPixelRatio(ie)},[l]);const k=ee.useRef(null);return ee.useEffect(()=>(k.current=new ResizeObserver(()=>{W.current=!0,_()}),p.current.forEach(B=>{const ie=B.ref.current;ie&&k.current&&k.current.observe(ie)}),()=>k.current?.disconnect()),[_]),ee.useEffect(()=>re(s),[s]),ee.useEffect(()=>{z.current&&(z.current.uCornerRadiusPx.value=c)},[c]),G.jsxs(su.Provider,{value:I,children:[n,G.jsx("div",{ref:D,style:{position:"fixed",inset:0,pointerEvents:"none",mixBlendMode:"difference"}}),Z&&G.jsx(Sy,{scopeId:o,gpuSimRef:Y,vizUniformsRef:z,nodeCount:p.current.size,position:a,onClose:()=>re(!1)})]})},by=n=>{const e=Nt.c(8),t=Va("networkScopeEffects"),i=Va("legacyGpuNetworkScope"),r=Ch(),s=_h();let o,a;if(e[0]!==t||e[1]!==r||e[2]!==s?(o=()=>{r&&t&&s.updateSettings({path:"features.networkScopeEffects",value:!1})},a=[t,r,s],e[0]=t,e[1]=r,e[2]=s,e[3]=o,e[4]=a):(o=e[3],a=e[4]),ee.useEffect(o,a),!t||r)return n.children;let c;return e[5]!==n||e[6]!==i?(c=i?G.jsx(My,{...n}):G.jsx(eg,{...n}),e[5]=n,e[6]=i,e[7]=c):c=e[7],c};function Si(n,e){return{main:n,light:n,dark:n,contrastText:Qi(n,"#ffffff","#000000",e)}}function Ey(n,e){const t=n.button,i=n["text.link"],r=n["text.primary"],s=n["text.secondary"],o={outline:`2px solid ${t}`,outlineOffset:2};return Ml({palette:{mode:e,primary:Si(t,e),secondary:Si(i,e),error:Si(n["status.error"],e),warning:Si(n["status.warning"],e),success:Si(n["status.success"],e),info:Si(n["status.info"],e),background:{default:n.background,paper:n.paper},text:{primary:r,secondary:s,disabled:n["status.disabled"]},divider:n.divider,action:{active:n["status.enabled"],hover:at(t,.08),disabled:n["status.disabled"],disabledBackground:at(n["status.disabled"],.16),focus:at(t,.18)}},components:{MuiPaper:{styleOverrides:{root:{backgroundImage:"none"}}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none","&.Mui-focusVisible":o},containedPrimary:{color:Qi(t,"#ffffff","#000000",e),"&:hover":{backgroundColor:at(t,.88)}},containedSecondary:{color:Qi(i,"#ffffff","#000000",e),"&:hover":{backgroundColor:at(i,.88)}},outlined:{borderColor:at(r,.38)}}},MuiIconButton:{styleOverrides:{root:{color:s,"&:hover":{color:r,backgroundColor:at(t,.1)},"&.Mui-focusVisible":o}}},MuiOutlinedInput:{styleOverrides:{root:{"& .MuiOutlinedInput-notchedOutline":{borderColor:n.divider},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:at(r,.55)},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:t}}}},MuiMenuItem:{styleOverrides:{root:{"&:hover":{backgroundColor:at(t,.08)},"&.Mui-selected, &.Mui-selected:hover":{backgroundColor:at(t,.14)},"&.Mui-focusVisible":{...o,outlineOffset:-2}}}},MuiListItemButton:{styleOverrides:{root:{"&:hover":{backgroundColor:at(t,.08)},"&.Mui-selected, &.Mui-selected:hover":{backgroundColor:at(t,.14)},"&.Mui-focusVisible":{...o,outlineOffset:-2}}}},MuiTooltip:{styleOverrides:{tooltip:{color:r,backgroundColor:n.paper,border:`1px solid ${n.divider}`},arrow:{color:n.paper}}}}})}function Ty(n){const e=Nt.c(10),{children:t}=n,i=cr(),r=Ul();let s;e[0]!==r||e[1]!==i?(s=Ey(i,r),e[0]=r,e[1]=i,e[2]=s):s=e[2];const o=s;let a,c;e[3]!==r||e[4]!==i?(a=()=>{Wu({background:i.background,paper:i.paper,textPrimary:i["text.primary"],textSecondary:i["text.secondary"],divider:i.divider,button:i.button,buttonForeground:Qi(i.button,"#ffffff","#000000",r),statusError:i["status.error"],statusWarning:i["status.warning"],statusSuccess:i["status.success"],statusInfo:i["status.info"],statusDisabled:i["status.disabled"]},r)},c=[r,i],e[3]=r,e[4]=i,e[5]=a,e[6]=c):(a=e[5],c=e[6]),ee.useEffect(a,c);let l;return e[7]!==t||e[8]!==o?(l=G.jsx(Qh,{theme:o,children:t}),e[7]=t,e[8]=o,e[9]=l):l=e[9],l}const wy=ee.lazy(()=>ia(()=>import("./Assistant-D9Lna9Ej.js").then(n=>n.A),__vite__mapDeps([14,1,2,0,3,4,5,6,7,8,9,10,11,12,15,16,17,18,19,20,21,22,23,24,25])));function Ay(n){const e=Nt.c(33),{error:t}=n,i=cr(),r=i["text.primary"];let s;e[0]!==i.background||e[1]!==r?(s={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",p:"2rem",boxSizing:"border-box",textAlign:"center",color:r,backgroundColor:i.background},e[0]=i.background,e[1]=r,e[2]=s):s=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o={maxWidth:760},e[3]=o):o=e[3];const a=i["status.error"];let c;e[4]!==a?(c=G.jsx(xr,{component:"h2",variant:"h5",sx:{mb:2,color:a},children:"Assistant stopped to protect your data"}),e[4]=a,e[5]=c):c=e[5];const l=i["status.error"];let u;e[6]!==l?(u={mb:2,lineHeight:1.5,color:l,overflowWrap:"anywhere"},e[6]=l,e[7]=u):u=e[7];let d;e[8]!==t.message||e[9]!==u?(d=G.jsx(xr,{sx:u,children:t.message}),e[8]=t.message,e[9]=u,e[10]=d):d=e[10];const p=i["text.secondary"];let f;e[11]!==p?(f=G.jsx(xr,{sx:{mb:3,lineHeight:1.5,color:p,fontSize:"0.95rem"},children:`Do not clear this browser's site data and do not delete or "reset" Assistant storage — your data may still be recoverable from this browser profile. Try reloading first; if this screen keeps appearing, contact support with a screenshot of this message.`}),e[11]=p,e[12]=f):f=e[12];let g;e[13]===Symbol.for("react.memo_cache_sentinel")?(g=G.jsx(Wa,{variant:"contained",onClick:Cy,children:"Reload Assistant"}),e[13]=g):g=e[13];const _=i.divider,m=i["text.primary"];let h;e[14]!==i.button?(h=at(i.button,.08),e[14]=i.button,e[15]=h):h=e[15];let E;e[16]!==h?(E={backgroundColor:h},e[16]=h,e[17]=E):E=e[17];let T;e[18]!==i.divider||e[19]!==m||e[20]!==E?(T=G.jsxs(Mh,{direction:"row",justifyContent:"center",flexWrap:"wrap",gap:1.5,children:[g,G.jsx(Wa,{variant:"outlined",onClick:Ry,title:"Preserves conversations and resets only tabs, panels, and layout state",sx:{borderColor:_,color:m,"&:hover":E},children:"Reset layout & tabs"})]}),e[18]=i.divider,e[19]=m,e[20]=E,e[21]=T):T=e[21];const M=i["text.secondary"];let U;e[22]!==M?(U=G.jsx(xr,{sx:{mt:2,lineHeight:1.5,color:M,fontSize:"0.85rem"},children:"The reset preserves conversations and stored Assistant data."}),e[22]=M,e[23]=U):U=e[23];let L;e[24]!==f||e[25]!==T||e[26]!==U||e[27]!==c||e[28]!==d?(L=G.jsxs(Xa,{sx:o,children:[c,d,f,T,U]}),e[24]=f,e[25]=T,e[26]=U,e[27]=c,e[28]=d,e[29]=L):L=e[29];let A;return e[30]!==L||e[31]!==s?(A=G.jsx(Xa,{sx:s,children:L}),e[30]=L,e[31]=s,e[32]=A):A=e[32],A}function Ry(){return window.location.assign(Xu())}function Cy(){return window.location.reload()}const _l=n=>{const e=Nt.c(25),{onReady:t}=n;let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=Ga(),e[0]=i):i=e[0];const[r,s]=ee.useState(i);let o;e[1]===Symbol.for("react.memo_cache_sentinel")?(o=xh(),e[1]=o):o=e[1];const[a,c]=ee.useState(o);let l,u;e[2]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let L=!1;return Ga()?(s(!0),()=>{L=!0}):(Sh().then(()=>{L||s(!0)}).catch(A=>{L||c(A instanceof Error?A:new Error(String(A)))}),()=>{L=!0})},u=[],e[2]=l,e[3]=u):(l=e[2],u=e[3]),ee.useEffect(l,u);let d,p;e[4]!==r?(d=()=>{if(!r)return;const L=Kf(),A=Wf();return()=>{A?.(),L?.()}},p=[r],e[4]=r,e[5]=d,e[6]=p):(d=e[5],p=e[6]),ee.useEffect(d,p);let f,g;e[7]!==a||e[8]!==r?(f=()=>{if(!(!r||a))return yh.startAutoConnect()},g=[r,a],e[7]=a,e[8]=r,e[9]=f,e[10]=g):(f=e[9],g=e[10]),ee.useEffect(f,g);let _;e[11]===Symbol.for("react.memo_cache_sentinel")?(_={width:"100%",height:"100%",overflow:"hidden"},e[11]=_):_=e[11];let m;e[12]===Symbol.for("react.memo_cache_sentinel")?(m=G.jsx(_f,{}),e[12]=m):m=e[12];let h;e[13]!==a||e[14]!==r?(h=r&&!a?G.jsx(Wm,{}):null,e[13]=a,e[14]=r,e[15]=h):h=e[15];let E,T;e[16]===Symbol.for("react.memo_cache_sentinel")?(E=G.jsx(mf,{}),T=G.jsx(Xm,{}),e[16]=E,e[17]=T):(E=e[16],T=e[17]);let M;e[18]!==a||e[19]!==t||e[20]!==r?(M=a instanceof Ol?G.jsx($m,{error:a}):a?G.jsx(Ay,{error:a}):r?G.jsx(wy,{onReady:t}):null,e[18]=a,e[19]=t,e[20]=r,e[21]=M):M=e[21];let U;return e[22]!==h||e[23]!==M?(U=G.jsx("div",{style:_,children:G.jsx(Th,{runtime:Nl,store:jt,children:G.jsx(Ty,{children:G.jsx(ef,{children:G.jsxs(by,{topology:"grid",cornerRadius:18,children:[m,h,E,T,M]})})})})}),e[22]=h,e[23]=M,e[24]=U):U=e[24],U},Yy=Object.freeze(Object.defineProperty({__proto__:null,AssistantApp:_l,default:_l},Symbol.toStringTag,{value:"Module"}));export{Yy as A,$y as N,Gy as S,Jp as U,Xy as a,fc as b,nm as c,tm as d,Vy as e,By as f,Fm as g,op as h,eu as i,qy as j,su as k,ky as m,Wy as o,Hy as p,jy as r,im as s,zy as u};
