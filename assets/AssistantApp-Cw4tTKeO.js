const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/reduxStore-D-SJDTpQ.js","assets/index-DsdBnBFD.js","assets/index--c1wzNd1.css","assets/llm-BTzg411R.js","assets/oauth-yImE6aai.js","assets/durability-bhnJuMvv.js","assets/slackSocketMode-_fwzdIDV.js","assets/api-CqL7sijx.js","assets/reduxStore-B9xD6_Om.css","assets/faultExport-D0sZpLaU.js","assets/Assistant-Bh9SP7Ed.js","assets/ReduxAppDataRoot-fCxKpu2e.js","assets/cronStream-DsQD2UfL.js","assets/canonicalProjectPatchSet-D1dulRzh.js","assets/openrouter-ESMuVy0D.js","assets/pkce-CpKKDV7R.js","assets/oauth-DfakV9nM.js","assets/App-BMwyn1ob.js","assets/isObject-CGZ9pm3u.js","assets/toNumber-DbsqjrQD.js","assets/Assistant-Dae88zj3.css"])))=>i.map(i=>d[i]);
import{r as K,j as B,c as tn,w as ut,s as Oc,_ as Io,d as Xi,g as Fc,R as Bc,e as zc,f as kc}from"./index-DsdBnBFD.js";import{cb as Dl,cc as Vc,cd as Il,ce as Hc,cf as Gc,cg as Wc,ch as Xc,ci as qc,cj as vi,ck as jc,cl as $c,cm as Ul,cn as Yc,co as da,cp as Kc,cq as Ln,cr as Ki,cs as Zi,ct as Zc,aB as Jc,x as Ns,cu as Qc,j as eu,cv as tu,cw as Nl,cx as nu,bW as ha,cy as iu,cz as ru,cA as su,cB as ou,cC as au,cD as lu,cE as cu,cF as fa,cG as uu,cH as du,T as cr,cI as pa,cJ as hu,E as ma}from"./reduxStore-D-SJDTpQ.js";import{d as qn,R as fu,a as pu}from"./ReduxAppDataRoot-fCxKpu2e.js";import{i as Ji,m as Uo,o as mu,p as Ol}from"./llm-BTzg411R.js";import{m as gu,n as vu,o as _u,c as xu,q as Su,t as Mu,S as Fl}from"./durability-bhnJuMvv.js";const Bl=K.createContext(null);function No(){return K.useContext(Bl)}const yu=typeof Symbol=="function"&&Symbol.for,Eu=yu?Symbol.for("mui.nested"):"__THEME_NESTED__";function Tu(n,e){return typeof e=="function"?e(n):{...n,...e}}function bu(n){const{children:e,theme:t}=n,i=No(),r=K.useMemo(()=>{const s=i===null?{...t}:Tu(i,t);return s!=null&&(s[Eu]=i!==null),s},[t,i]);return B.jsx(Bl.Provider,{value:r,children:e})}function wu(n){const e=Dl(),t=Vc()||"",{modularCssLayers:i}=n;let r="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return!i||e!==null?r="":typeof i=="string"?r=i.replace(/mui(?!\.)/g,r):r=`@layer ${r};`,Il(()=>{const s=document.querySelector("head");if(!s)return;const o=s.firstChild;if(r){if(o&&o.hasAttribute?.("data-mui-layer-order")&&o.getAttribute("data-mui-layer-order")===t)return;const a=document.createElement("style");a.setAttribute("data-mui-layer-order",t),a.textContent=r,s.prepend(a)}else s.querySelector(`style[data-mui-layer-order="${t}"]`)?.remove()},[r,t]),r?B.jsx(Hc,{styles:r}):null}const ga={};function va(n,e,t,i=!1){return K.useMemo(()=>{const r=n&&e[n]||e;if(typeof t=="function"){const s=t(r),o=n?{...e,[n]:s}:s;return i?()=>o:o}return n?{...e,[n]:t}:{...e,...t}},[n,e,t,i])}function zl(n){const{children:e,theme:t,themeId:i}=n,r=Dl(ga),s=No()||ga,o=va(i,r,t),a=va(i,s,t,!0),c=(i?o[i]:o).direction==="rtl",l=wu(o);return B.jsx(bu,{theme:a,children:B.jsx(Gc.Provider,{value:o,children:B.jsx(Wc,{value:c,children:B.jsxs(Xc,{value:i?o[i].components:o.components,children:[l,e]})})})})}const Oo="mode",Fo="color-scheme",Au="data-color-scheme";function Ru(n){const{defaultMode:e="system",defaultLightColorScheme:t="light",defaultDarkColorScheme:i="dark",modeStorageKey:r=Oo,colorSchemeStorageKey:s=Fo,attribute:o=Au,colorSchemeNode:a="document.documentElement",nonce:c}=n||{};let l="",d=o;if(o==="class"&&(d=".%s"),o==="data"&&(d="[data-%s]"),d.startsWith(".")){const f=d.substring(1);l+=`${a}.classList.remove('${f}'.replace('%s', light), '${f}'.replace('%s', dark));
      ${a}.classList.add('${f}'.replace('%s', colorScheme));`}const h=d.match(/\[([^[\]]+)\]/);if(h){const[f,p]=h[1].split("=");p||(l+=`${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`),l+=`
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${p?`${p}.replace('%s', colorScheme)`:'""'});`}else d!==".%s"&&(l+=`${a}.setAttribute('${d}', colorScheme);`);return B.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?c:"",dangerouslySetInnerHTML:{__html:`(function() {
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
} catch(e){}})();`}},"mui-color-scheme-init")}function Cu(){}const Pu=({key:n,storageWindow:e})=>(!e&&typeof window<"u"&&(e=window),{get(t){if(typeof window>"u")return;if(!e)return t;let i;try{i=e.localStorage.getItem(n)}catch{}return i||t},set:t=>{if(e)try{e.localStorage.setItem(n,t)}catch{}},subscribe:t=>{if(!e)return Cu;const i=r=>{const s=r.newValue;r.key===n&&t(s)};return e.addEventListener("storage",i),()=>{e.removeEventListener("storage",i)}}});function Zr(){}function _a(n){if(typeof window<"u"&&typeof window.matchMedia=="function"&&n==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function kl(n,e){if(n.mode==="light"||n.mode==="system"&&n.systemMode==="light")return e("light");if(n.mode==="dark"||n.mode==="system"&&n.systemMode==="dark")return e("dark")}function Lu(n){return kl(n,e=>{if(e==="light")return n.lightColorScheme;if(e==="dark")return n.darkColorScheme})}function Du(n){const{defaultMode:e="light",defaultLightColorScheme:t,defaultDarkColorScheme:i,supportedColorSchemes:r=[],modeStorageKey:s=Oo,colorSchemeStorageKey:o=Fo,storageWindow:a=typeof window>"u"?void 0:window,storageManager:c=Pu,noSsr:l=!1}=n,d=r.join(","),h=r.length>1,f=K.useMemo(()=>c?.({key:s,storageWindow:a}),[c,s,a]),p=K.useMemo(()=>c?.({key:`${o}-light`,storageWindow:a}),[c,o,a]),g=K.useMemo(()=>c?.({key:`${o}-dark`,storageWindow:a}),[c,o,a]),[x,m]=K.useState(()=>{const C=f?.get(e)||e,_=p?.get(t)||t,v=g?.get(i)||i;return{mode:C,systemMode:_a(C),lightColorScheme:_,darkColorScheme:v}}),[u,E]=K.useState(l||!h);K.useEffect(()=>{E(!0)},[]);const T=Lu(x),M=K.useCallback(C=>{m(_=>{if(C===_.mode)return _;const v=C??e;return f?.set(v),{..._,mode:v,systemMode:_a(v)}})},[f,e]),D=K.useCallback(C=>{C?typeof C=="string"?C&&!d.includes(C)?console.error(`\`${C}\` does not exist in \`theme.colorSchemes\`.`):m(_=>{const v={..._};return kl(_,b=>{b==="light"&&(p?.set(C),v.lightColorScheme=C),b==="dark"&&(g?.set(C),v.darkColorScheme=C)}),v}):m(_=>{const v={..._},b=C.light===null?t:C.light,N=C.dark===null?i:C.dark;return b&&(d.includes(b)?(v.lightColorScheme=b,p?.set(b)):console.error(`\`${b}\` does not exist in \`theme.colorSchemes\`.`)),N&&(d.includes(N)?(v.darkColorScheme=N,g?.set(N)):console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`)),v}):m(_=>(p?.set(t),g?.set(i),{..._,lightColorScheme:t,darkColorScheme:i}))},[d,p,g,t,i]),R=K.useCallback(C=>{x.mode==="system"&&m(_=>{const v=C?.matches?"dark":"light";return _.systemMode===v?_:{..._,systemMode:v}})},[x.mode]),A=K.useRef(R);return A.current=R,K.useEffect(()=>{if(typeof window.matchMedia!="function"||!h)return;const C=(...v)=>A.current(...v),_=window.matchMedia("(prefers-color-scheme: dark)");return _.addListener(C),C(_),()=>{_.removeListener(C)}},[h]),K.useEffect(()=>{if(h){const C=f?.subscribe(b=>{(!b||["light","dark","system"].includes(b))&&M(b||e)})||Zr,_=p?.subscribe(b=>{(!b||d.match(b))&&D({light:b})})||Zr,v=g?.subscribe(b=>{(!b||d.match(b))&&D({dark:b})})||Zr;return()=>{C(),_(),v()}}},[D,M,d,e,a,h,f,p,g]),{...x,mode:u?x.mode:void 0,systemMode:u?x.systemMode:void 0,colorScheme:u?T:void 0,setMode:M,setColorScheme:D}}const Iu="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Uu(n){const{themeId:e,theme:t={},modeStorageKey:i=Oo,colorSchemeStorageKey:r=Fo,disableTransitionOnChange:s=!1,defaultColorScheme:o,resolveTheme:a}=n,c={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},l=K.createContext(void 0),d=()=>K.useContext(l)||c,h={},f={};function p(u){const{children:E,theme:T,modeStorageKey:M=i,colorSchemeStorageKey:D=r,disableTransitionOnChange:R=s,storageManager:A,storageWindow:C=typeof window>"u"?void 0:window,documentNode:_=typeof document>"u"?void 0:document,colorSchemeNode:v=typeof document>"u"?void 0:document.documentElement,disableNestedContext:b=!1,disableStyleSheetGeneration:N=!1,defaultMode:F="system",forceThemeRerender:j=!1,noSsr:J}=u,W=K.useRef(!1),ie=No(),V=K.useContext(l),ae=!!V&&!b,le=K.useMemo(()=>T||(typeof t=="function"?t():t),[T]),xe=le[e],Ee=xe||le,{colorSchemes:Te=h,components:$=f,cssVarPrefix:Y}=Ee,ce=Object.keys(Te).filter(X=>!!Te[X]).join(","),se=K.useMemo(()=>ce.split(","),[ce]),fe=typeof o=="string"?o:o.light,Re=typeof o=="string"?o:o.dark,we=Te[fe]&&Te[Re]?F:Te[Ee.defaultColorScheme]?.palette?.mode||Ee.palette?.mode,{mode:Ge,setMode:$e,systemMode:We,lightColorScheme:P,darkColorScheme:at,colorScheme:ze,setColorScheme:Ve}=Du({supportedColorSchemes:se,defaultLightColorScheme:fe,defaultDarkColorScheme:Re,modeStorageKey:M,colorSchemeStorageKey:D,defaultMode:we,storageManager:A,storageWindow:C,noSsr:J});let _e=Ge,Ne=ze;ae&&(_e=V.mode,Ne=V.colorScheme);let ye=Ne||Ee.defaultColorScheme;Ee.vars&&!j&&(ye=Ee.defaultColorScheme);const Ue=K.useMemo(()=>{const X=Ee.generateThemeVars?.()||Ee.vars,q={...Ee,components:$,colorSchemes:Te,cssVarPrefix:Y,vars:X};if(typeof q.generateSpacing=="function"&&(q.spacing=q.generateSpacing()),ye){const z=Te[ye];z&&typeof z=="object"&&Object.keys(z).forEach(re=>{z[re]&&typeof z[re]=="object"?q[re]={...q[re],...z[re]}:q[re]=z[re]})}return a?a(q):q},[Ee,ye,$,Te,Y]),qe=Ee.colorSchemeSelector;Il(()=>{if(Ne&&v&&qe&&qe!=="media"){const X=qe;let q=qe;if(X==="class"&&(q=".%s"),X==="data"&&(q="[data-%s]"),X?.startsWith("data-")&&!X.includes("%s")&&(q=`[${X}="%s"]`),q.startsWith("."))v.classList.remove(...se.map(z=>q.substring(1).replace("%s",z))),v.classList.add(q.substring(1).replace("%s",Ne));else{const z=q.replace("%s",Ne).match(/\[([^\]]+)\]/);if(z){const[re,ne]=z[1].split("=");ne||se.forEach(ge=>{v.removeAttribute(re.replace(Ne,ge))}),v.setAttribute(re,ne?ne.replace(/"|'/g,""):"")}else v.setAttribute(q,Ne)}}},[Ne,qe,v,se]),K.useEffect(()=>{let X;if(R&&W.current&&_){const q=_.createElement("style");q.appendChild(_.createTextNode(Iu)),_.head.appendChild(q),window.getComputedStyle(_.body),X=setTimeout(()=>{_.head.removeChild(q)},1)}return()=>{clearTimeout(X)}},[Ne,R,_]),K.useEffect(()=>(W.current=!0,()=>{W.current=!1}),[]);const w=K.useMemo(()=>({allColorSchemes:se,colorScheme:Ne,darkColorScheme:at,lightColorScheme:P,mode:_e,setColorScheme:Ve,setMode:$e,systemMode:We}),[se,Ne,at,P,_e,Ve,$e,We,Ue.colorSchemeSelector]);let S=!0;(N||Ee.cssVariables===!1||ae&&ie?.cssVarPrefix===Y)&&(S=!1);const O=B.jsxs(K.Fragment,{children:[B.jsx(zl,{themeId:xe?e:void 0,theme:Ue,children:E}),S&&B.jsx(qc,{styles:Ue.generateStyleSheets?.()||[]})]});return ae?O:B.jsx(l.Provider,{value:w,children:O})}const g=typeof o=="string"?o:o.light,x=typeof o=="string"?o:o.dark;return{CssVarsProvider:p,useColorScheme:d,getInitColorSchemeScript:u=>Ru({colorSchemeStorageKey:r,defaultLightColorScheme:g,defaultDarkColorScheme:x,modeStorageKey:i,...u})}}function Nu({theme:n,...e}){const t=vi in n?n[vi]:void 0;return B.jsx(zl,{...e,themeId:t?vi:void 0,theme:t||n})}const ur={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Ou}=Uu({themeId:vi,theme:()=>Ul({cssVariables:!0}),colorSchemeStorageKey:ur.colorSchemeStorageKey,modeStorageKey:ur.modeStorageKey,defaultColorScheme:{light:ur.defaultLightColorScheme,dark:ur.defaultDarkColorScheme},resolveTheme:n=>{const e={...n,typography:jc(n.palette,n.typography)};return e.unstable_sx=function(i){return $c({sx:i,theme:this})},e}}),Fu=Ou;function Bu({theme:n,...e}){const t=K.useMemo(()=>{if(typeof n=="function")return n;const i=vi in n?n[vi]:n;return"colorSchemes"in i?null:"vars"in i?n:{...n,vars:null}},[n]);return t?B.jsx(Nu,{theme:t,...e}):B.jsx(Fu,{theme:n,...e})}const zu=n=>{const e=tn.c(4),{children:t}=n,i=K.useSyncExternalStore(Yc,da,da);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],e[0]=r):r=e[0],K.useEffect(Wu,r);let s;return e[1]!==t||e[2]!==i?(s=B.jsx(Kc.Provider,{value:i,children:t}),e[1]=t,e[2]=i,e[3]=s):s=e[3],s};function ku(n){Ki(n)&&Zi("keyboard")}function Vu(n){Ki(n)&&Zi("pointer")}function Hu(n){Ki(n)&&Zi("touch")}function Gu(n){Ki(n)&&Zi("wheel")}function Wu(){if(typeof window>"u"||typeof document>"u")return;let n=0;const e=ku,t=Vu,i=o=>{if(!Ki(o))return;const a=Date.now();a-n<1e3||(n=a,Zi("pointer",a))},r=Hu,s=Gu;return document.addEventListener("keydown",e,{passive:!0,capture:!0}),document.addEventListener("pointerdown",t,{passive:!0,capture:!0}),document.addEventListener("pointermove",i,{passive:!0,capture:!0}),document.addEventListener("touchstart",r,{passive:!0,capture:!0}),document.addEventListener("wheel",s,{passive:!0,capture:!0}),document.addEventListener("visibilitychange",Ln),window.addEventListener("focus",Ln),window.addEventListener("blur",Ln),Ln(),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",i,{capture:!0}),document.removeEventListener("touchstart",r,{capture:!0}),document.removeEventListener("wheel",s,{capture:!0}),document.removeEventListener("visibilitychange",Ln),window.removeEventListener("focus",Ln),window.removeEventListener("blur",Ln)}}const xa=180,Xu=n=>{const e=tn.c(38),{alert:t}=n,[i,r]=K.useState(!1),s=Ji(),o=t.severity==="critical"?s["status.error"]:s["status.warning"],a=t.message.length>xa,c=i||!a?t.message:`${t.message.slice(0,xa)}…`;let l;e[0]!==o?(l=ut(o,.14),e[0]=o,e[1]=l):l=e[1];const d=`1px solid ${ut(o,.72)}`,h=s["text.primary"];let f;e[2]!==l||e[3]!==d||e[4]!==h?(f={pointerEvents:"auto",backgroundColor:l,border:d,color:h,borderRadius:8,padding:"10px 14px",display:"flex",alignItems:"flex-start",gap:12,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.32)",fontSize:"0.9rem",lineHeight:1.45},e[2]=l,e[3]=d,e[4]=h,e[5]=f):f=e[5];let p;e[6]!==o?(p={color:o,fontSize:"1.05rem",lineHeight:1.3},e[6]=o,e[7]=p):p=e[7];const g=t.severity==="critical"?"🛑":"⚠️";let x;e[8]!==p||e[9]!==g?(x=B.jsx("span",{"aria-hidden":"true",style:p,children:g}),e[8]=p,e[9]=g,e[10]=x):x=e[10];let m,u;e[11]===Symbol.for("react.memo_cache_sentinel")?(m={flex:1,minWidth:0},u={display:"block",marginBottom:2},e[11]=m,e[12]=u):(m=e[11],u=e[12]);let E;e[13]!==t.title?(E=B.jsx("strong",{style:u,children:t.title}),e[13]=t.title,e[14]=E):E=e[14];let T;e[15]===Symbol.for("react.memo_cache_sentinel")?(T={overflowWrap:"anywhere"},e[15]=T):T=e[15];let M;e[16]!==c?(M=B.jsx("span",{style:T,children:c}),e[16]=c,e[17]=M):M=e[17];let D;e[18]!==i||e[19]!==a||e[20]!==o?(D=a&&B.jsx("button",{type:"button",onClick:()=>r(ju),style:{marginLeft:8,background:"none",border:"none",color:o,cursor:"pointer",padding:0,fontSize:"0.85rem",textDecoration:"underline"},children:i?"Show less":"Show details"}),e[18]=i,e[19]=a,e[20]=o,e[21]=D):D=e[21];let R;e[22]!==E||e[23]!==M||e[24]!==D?(R=B.jsxs("div",{style:m,children:[E,M,D]}),e[22]=E,e[23]=M,e[24]=D,e[25]=R):R=e[25];let A;e[26]!==t.id?(A=()=>vu(t.id),e[26]=t.id,e[27]=A):A=e[27];const C=s["text.primary"];let _;e[28]!==C?(_={background:"none",border:"none",color:C,cursor:"pointer",fontSize:"1rem",lineHeight:1,padding:"2px 4px",opacity:.8},e[28]=C,e[29]=_):_=e[29];let v;e[30]!==A||e[31]!==_?(v=B.jsx("button",{type:"button","aria-label":"Dismiss storage alert",onClick:A,style:_,children:"×"}),e[30]=A,e[31]=_,e[32]=v):v=e[32];let b;return e[33]!==R||e[34]!==v||e[35]!==f||e[36]!==x?(b=B.jsxs("div",{role:"alert",style:f,children:[x,R,v]}),e[33]=R,e[34]=v,e[35]=f,e[36]=x,e[37]=b):b=e[37],b},qu=()=>{const n=tn.c(5),e=gu();if(e.length===0)return null;let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"fixed",top:0,left:0,right:0,zIndex:1e4,display:"flex",flexDirection:"column",gap:6,padding:"8px 10px",pointerEvents:"none"},n[0]=t):t=n[0];let i;n[1]!==e?(i=e.map($u),n[1]=e,n[2]=i):i=n[2];let r;return n[3]!==i?(r=B.jsx("div",{style:t,children:i}),n[3]=i,n[4]=r):r=n[4],r};function ju(n){return!n}function $u(n){return B.jsx(Xu,{alert:n},n.id)}function Yu(){const n=tn.c(4),e=Ji(),t=Uo();let i,r;return n[0]!==e||n[1]!==t?(i=()=>{Oc(t,e)},r=[e,t],n[0]=e,n[1]=t,n[2]=i,n[3]=r):(i=n[2],r=n[3]),K.useEffect(i,r),null}const Ku="perfHarness",Zu="[data-editor-role]",Ju=20;let Tt=!1,Os="",Fs={},Bs,zs,Bo=0,Vl=0,Vn=null,Vi=0,Hi,ks=[];const pn=[],yi=[],Hr=[],zo=[],ko=[],jn={eventTiming:!1,longTasks:!1,longAnimationFrames:!1};function Pt(){return typeof performance<"u"?performance.now():Date.now()}function Vo(){return typeof window>"u"?!1:new URL(window.location.href).searchParams.get(Ku)==="1"}function Ho(n){const e=n.target;return e instanceof Element&&!!e.closest(Zu)}function Qu(n){return n.ctrlKey||n.metaKey||n.altKey?!1:n.key.length===1||n.key==="Backspace"||n.key==="Delete"||n.key==="Enter"}function Hl(n){!Tt||!Ho(n)||!Qu(n)||(Vn={at:Pt(),target:n.target})}function Gl(n){if(!Tt||!Ho(n))return;const e=Pt(),t=Vn&&Vn.target===n.target&&e-Vn.at<250?Vn.at:e;Vn=null,pn.push({sequence:++Bo,inputType:n.inputType||"unknown",startedAt:t,serializationMs:0,reduxUpdateMs:0})}function Wl(){for(let n=pn.length-1;n>=0;n-=1)if(pn[n].paintAt===void 0)return pn[n]}function Xl(n){if(!Tt||!Ho(n))return;let e=Wl();e||(e={sequence:++Bo,inputType:n instanceof InputEvent&&n.inputType||"unknown",startedAt:Pt(),serializationMs:0,reduxUpdateMs:0},pn.push(e)),e.inputEventAt=Pt();const t=e.sequence;window.requestAnimationFrame(()=>{const i=pn.find(s=>s.sequence===t);if(!i||i.paintAt!==void 0)return;const r=Pt();i.paintAt=r,i.inputToPaintMs=r-i.startedAt})}function Jr(n,e){if(typeof PerformanceObserver>"u")return!1;try{if(!(PerformanceObserver.supportedEntryTypes?.includes(n)??!1))return!1;const i=new PerformanceObserver(r=>{if(Tt)for(const s of r.getEntries())e(s)});return i.observe({type:n,buffered:!1}),ks.push(i),!0}catch{return!1}}function ed(){jn.eventTiming=Jr("event",n=>{const e=String(n.name||"");if(e!=="keydown"&&e!=="beforeinput"&&e!=="input")return;const t=Number(n.startTime);let i,r=Number.POSITIVE_INFINITY;for(const s of pn){const o=Math.abs(s.startedAt-t);o<r&&o<250&&(i=s,r=o)}i&&(i.eventTimingDurationMs=Math.max(i.eventTimingDurationMs||0,Number(n.duration)||0))}),jn.longTasks=Jr("longtask",n=>{Hr.push({kind:"long-task",startedAt:Number(n.startTime),durationMs:Number(n.duration)})}),jn.longAnimationFrames=Jr("long-animation-frame",n=>{Hr.push({kind:"long-animation-frame",startedAt:Number(n.startTime),durationMs:Number(n.duration),blockingDurationMs:typeof n.blockingDuration=="number"?n.blockingDuration:void 0})})}function ql(n){if(Tt){if(Hi!==void 0){const e=n-Hi;e>=Ju&&zo.push(e)}Hi=n,Vi=window.requestAnimationFrame(ql)}}function td(){document.addEventListener("keydown",Hl,!0),document.addEventListener("beforeinput",Gl,!0),document.addEventListener("input",Xl,!0),ed(),Hi=void 0,Vi=window.requestAnimationFrame(ql)}function Sa(){document.removeEventListener("keydown",Hl,!0),document.removeEventListener("beforeinput",Gl,!0),document.removeEventListener("input",Xl,!0),Vi&&window.cancelAnimationFrame(Vi),Vi=0;for(const n of ks)n.disconnect();ks=[]}function nd(){pn.length=0,yi.length=0,Hr.length=0,zo.length=0,ko.length=0,Bo=0,Vl=0,Vn=null,Hi=void 0,jn.eventTiming=!1,jn.longTasks=!1,jn.longAnimationFrames=!1}function Ma(){return{schemaVersion:1,name:Os,metadata:{...Fs},startedAt:Bs,stoppedAt:zs,recording:Tt,support:{...jn},inputs:pn.map(n=>({...n})),tabs:yi.map(n=>({...n})),blockingEntries:Hr.map(n=>({...n})),frameGapsMs:[...zo],marks:ko.map(n=>({...n,detail:n.detail?{...n.detail}:void 0}))}}const id={reset(){Sa(),Tt=!1,Os="",Fs={},Bs=void 0,zs=void 0,nd()},start(n,e={}){this.reset(),Os=n,Fs={...e},Bs=Pt(),Tt=!0,td()},mark(n,e){Tt&&ko.push({label:n,at:Pt(),detail:e})},stop(){return Tt&&(zs=Pt()),Tt=!1,Sa(),Ma()},snapshot:Ma};function rd(){if(Vo())return window.__assistantPerformanceHarness||(window.__assistantPerformanceHarness=id),window.__assistantPerformanceHarness}function g_(n,e){if(!Tt)return e();const t=Pt();try{return e()}finally{const i=Pt()-t,r=Wl();r&&(n==="editor-serialization"?r.serializationMs+=i:r.reduxUpdateMs+=i)}}function sd(n,e){Tt&&yi.push({sequence:++Vl,fromTabId:n,toTabId:e,startedAt:Pt()})}function v_(n){if(!Tt)return;const e=[...yi].reverse().find(i=>i.toTabId===n&&i.contentCommittedAt===void 0);if(!e)return;e.contentCommittedAt=Pt(),e.focusToCommitMs=e.contentCommittedAt-e.startedAt;const t=e.sequence;window.requestAnimationFrame(()=>{const i=yi.find(s=>s.sequence===t);if(!i||i.paintAt!==void 0)return;const r=Pt();i.paintAt=r,i.focusToPaintMs=r-i.startedAt})}function od(n){if(!Tt)return;const e=[...yi].reverse().find(t=>t.toTabId===n&&t.settledAt===void 0);e&&(e.settledAt=Pt(),e.focusToSettledMs=e.settledAt-e.startedAt)}const jl=qn,Ur="assistant.migrationStress.fixture.v1",Ii="assistant.migrationStress.run.v1",Go=128*1024,Wo=32*1024,Xo=256*1024,qo=256*1024,jo=64*1024,ya=200,Qr=25,Ea="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_=+[]{}()<>/\\|;:,.!?~";function rt(n,e){if(!n)throw new Error(e)}function es(n,e){const t=Number(n);return Number.isFinite(t)&&t>=0?t:e}function ad(n){const e=es(n?.reduxMiB,0);return rt(e>0,"Migration stress reduxMiB must be greater than zero."),rt(e<=4096,"Migration stress reduxMiB must not exceed 4096 MiB."),{reduxMiB:e,depotRatio:Math.min(2,es(n?.depotRatio,.1)),testRunsRatio:Math.min(1,es(n?.testRunsRatio,.01))}}function Ui(n,e){return n<=0?0:Math.ceil(n/e)}function Jt(n,e,t){return Math.max(0,Math.min(e,n-t*e))}function ld(n){const e=ad(n),t=Math.round(e.reduxMiB*1024*1024),i=Math.round(t*.7),r=Math.round(t*.26),s=Math.max(0,t-i-r),o=Math.round(t*e.depotRatio),a=Math.round(t*e.testRunsRatio);return{schemaVersion:1,requested:e,budgets:{reduxPayloadBytes:t,messagePayloadBytes:i,artifactPayloadBytes:r,fileSavePayloadBytes:s,depotPayloadBytes:o,testRunPayloadBytes:a},counts:{messages:Ui(i,Go),artifactVersions:Ui(r,Wo),fileSaves:Ui(s,Xo),depotObjects:Ui(o,qo),testRunCollections:Ui(a,jo)},seededAt:new Date().toISOString()}}function Qi(n,e){if(n<=0)return"";const t=`${e}|`;if(t.length>=n)return t.slice(0,n);const i=n-t.length;return t+Ea.repeat(Math.ceil(i/Ea.length)).slice(0,i)}function _i(n){return`migration-stress-message-${n}`}function $l(n){return`migration-stress-artifact-${n}`}function Yl(n){return`migration-stress-save-${n}`}function Gi(n){return`migration-stress-depot-${n}`}function Kl(n){return`migration-stress-agent-${n}`}function cd(n,e,t){const i=_i(n),r="2026-07-24T00:00:00.000Z",s=Qi(t,i),o=n%3,a=o===0?{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"getFiles",arguments:"{}"}},result:{files:{[`/synthetic/${n}.txt`]:s},entryMetadata:{}},error:""}],model:"migration-stress",done:!0}:o===1?{text:s,toolUses:[],model:"migration-stress",done:!0}:{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"search",arguments:"{}"}},result:{results:[{title:`Synthetic ${n}`,content:s}]},error:""}],model:"migration-stress",done:!0};return{_timestamp:17848512e5+n,id:i,type:"response",conversationId:e,chain:[{iteration:0,response:a,stepAugments:[],errors:[],origin:"assistant",metadata:{startTime:r,endTime:r,stage:"closed"}}],origin:{provider:"test",model:"migration-stress"},state:{type:"success"},processing:{},markers:{analysis:"none",definitions:"none",facts:"none",summary:"none"},ui:{annotationMode:"none",definitionState:"none",factCheckState:"none"},permittedToolClasses:[],attachments:[],metadata:{category:"migration-stress",index:n,creationTime:r,updateTime:r},sidecars:o===2?{synthetic:{payloadBytes:t}}:{},augments:[]}}function ud(n,e){const t=n?.chain?.[0]?.response;return e%3===0?t?.toolUses?.[0]?.result?.files?.[`/synthetic/${e}.txt`]:e%3===1?t?.text:t?.toolUses?.[0]?.result?.results?.[0]?.content}function dd(n,e){const t=$l(n);return{id:t,name:`/artifacts/migration-stress/${n}.md`,language:"markdown",type:"file",content:Qi(e,t),originMsg:_i(n%Math.max(1,n+1)),createdAt:17848512e5+n,_timestamp:17848512e5+n,source:"response",versionLabel:"v1",isComplete:!0,description:"Synthetic migration stress artifact"}}function hd(n,e){const t=Yl(n);return{id:t,label:`Synthetic save ${n}`,timestamp:17848512e5+n,status:"committed",files:[{path:`/synthetic/save-${n}.txt`,prevContentHash:`before-${n}`,prevContent:"",newContentHash:`after-${n}`,newContent:Qi(e,t)}],metadata:{kind:"artifact",actor:"assistant"}}}async function fd(){const{getAssistantDataStore:n,persistor:e}=await Io(async()=>{const{getAssistantDataStore:i,persistor:r}=await import("./reduxStore-D-SJDTpQ.js").then(s=>s.yP);return{getAssistantDataStore:i,persistor:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]));e.pause(),await e.flush();const t=await n();return{dataStore:t,snapshot:await t.loadSnapshot()}}async function Ta(n,e,t,i,r){if(i===0)return;const s=tu(e,t),o=[...s.ids];for(let a=0;a<i;a+=ya){const c=Math.min(i,a+ya);await n.transaction(async l=>{for(let d=a;d<c;d+=1){const h=r(d);o.push(h.id),await l.putEntity(e,h.id,h)}await l.putEntityStructure(e,{ids:o,meta:s.meta})})}}async function pd(n,e,t){const i=eu(t),r=String(i.conversations?.ids?.[0]||"migration-stress-unattached");if(await Ta(e,"messages",i.messages,n.counts.messages,s=>cd(s,r,Jt(n.budgets.messagePayloadBytes,Go,s))),await Ta(e,"artifactVersions",i.artifactVersions,n.counts.artifactVersions,s=>dd(s,Jt(n.budgets.artifactPayloadBytes,Wo,s))),n.counts.fileSaves>0){const s=i.fileSaves||{},o={...s.operations||{}},a=[...s.operationOrder||[]];for(let c=0;c<n.counts.fileSaves;c+=1){const l=hd(c,Jt(n.budgets.fileSavePayloadBytes,Xo,c));o[l.id]=l,a.push(l.id)}await e.transaction(async c=>{await c.putDocument("fileSaves",{...s,operations:o,operationOrder:a,checkpoints:{...s.checkpoints||{}},checkpointOrder:[...s.checkpointOrder||[]]})})}}function md(n,e){const t=new Uint8Array(n);return t.fill(e*31+17&255),t}async function gd(n){await Ns.clearAll();for(let e=0;e<n.counts.depotObjects;e+=Qr){const t=Math.min(n.counts.depotObjects,e+Qr),i=[];for(let r=e;r<t;r+=1){const s=Jt(n.budgets.depotPayloadBytes,qo,r);i.push({id:Gi(r),type:r%2===0?"migration-stress-text":"migration-stress-binary",obj:r%2===0?{kind:"text",payload:Qi(s,Gi(r))}:{kind:"binary",payload:md(s,r)},timestamp:17848512e5+r,owners:[`message:${_i(r%Math.max(1,n.counts.messages))}`]})}await Ns.storeMany(i,{chunkSize:Qr})}}async function vd(n){const e=_u.createInstance({name:"assistant-agent-evals",storeName:"suite-runs-v2"});await e.clear();for(let t=0;t<n.counts.testRunCollections;t+=1){const i=Kl(t),r=Jt(n.budgets.testRunPayloadBytes,jo,t);await e.setItem(`agent:${i}`,[{id:`migration-stress-run-${t}`,agentId:i,status:"completed",startedAt:17848512e5+t,completedAt:1784851201e3+t,syntheticPayload:Qi(r,i)}])}}function Nr(n){const e=window.localStorage.getItem(n);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function dr(n,e){window.localStorage.setItem(n,JSON.stringify(e))}function ts(){const n=jl.getState();return{engine:n.persistence.engine==="sqlite"?"sqlite":"legacy",persistencePhase:String(n.persistence.phase),messageCount:n.messages.ids.length,artifactVersionCount:n.artifactVersions.ids.length}}async function _d(){const n=Nr(Ur);rt(n?.schemaVersion===1,"Migration stress fixture metadata is missing.");const e=jl.getState();let t=0;for(let l=0;l<n.counts.messages;l+=1){const d=e.messages.entities[_i(l)],h=ud(d,l),f=Jt(n.budgets.messagePayloadBytes,Go,l);rt(typeof h=="string",`Synthetic message ${l} is missing its payload.`),rt(h.length===f,`Synthetic message ${l} payload length differs.`),rt(h.startsWith(`${_i(l)}|`)||h===_i(l).slice(0,f),`Synthetic message ${l} payload marker differs.`),t+=h.length}let i=0;for(let l=0;l<n.counts.artifactVersions;l+=1){const d=Jc(e.artifactVersions,$l(l)),h=Jt(n.budgets.artifactPayloadBytes,Wo,l);rt(d,`Synthetic artifact ${l} is missing.`),rt(d.content.length===h,`Synthetic artifact ${l} payload length differs.`),i+=d.content.length}let r=0;for(let l=0;l<n.counts.fileSaves;l+=1){const h=e.fileSaves?.operations?.[Yl(l)]?.files?.[0]?.newContent,f=Jt(n.budgets.fileSavePayloadBytes,Xo,l);rt(typeof h=="string",`Synthetic file save ${l} is missing.`),rt(h.length===f,`Synthetic file save ${l} payload length differs.`),r+=h.length}let s=0;for(let l=0;l<n.counts.depotObjects;l+=1){const d=await Ns.retrieve(Gi(l)),h=Jt(n.budgets.depotPayloadBytes,qo,l);if(rt(d,`Synthetic depot object ${l} is missing.`),l%2===0)rt(d.kind==="text"&&typeof d.payload=="string",`Synthetic depot text object ${l} is malformed.`),rt(d.payload.length===h,`Synthetic depot text object ${l} payload length differs.`),rt(d.payload.startsWith(`${Gi(l)}|`)||d.payload===Gi(l).slice(0,h),`Synthetic depot text object ${l} marker differs.`),s+=d.payload.length;else{rt(d.kind==="binary"&&ArrayBuffer.isView(d.payload),`Synthetic depot binary object ${l} is malformed.`),rt(d.payload.byteLength===h,`Synthetic depot binary object ${l} payload length differs.`);const f=new Uint8Array(d.payload.buffer,d.payload.byteOffset,d.payload.byteLength);if(f.length>0){const p=l*31+17&255;rt(f[0]===p&&f[f.length-1]===p,`Synthetic depot binary object ${l} marker differs.`)}s+=d.payload.byteLength}}let o=0;for(let l=0;l<n.counts.testRunCollections;l+=1){const h=(await Qc(Kl(l)))[0]?.syntheticPayload,f=Jt(n.budgets.testRunPayloadBytes,jo,l);rt(typeof h=="string",`Synthetic test-run collection ${l} is missing.`),rt(h.length===f,`Synthetic test-run collection ${l} payload length differs.`),o+=h.length}const a={messages:n.counts.messages,messagePayloadBytes:t,artifactVersions:n.counts.artifactVersions,artifactPayloadBytes:i,fileSaves:n.counts.fileSaves,fileSavePayloadBytes:r,depotObjects:n.counts.depotObjects,depotPayloadBytes:s,testRunCollections:n.counts.testRunCollections,testRunPayloadBytes:o},c=e.persistence.engine==="sqlite"?"sqlite":"legacy";return rt(t===n.budgets.messagePayloadBytes,"Synthetic message payload total differs."),rt(i===n.budgets.artifactPayloadBytes,"Synthetic artifact payload total differs."),rt(r===n.budgets.fileSavePayloadBytes,"Synthetic file-save payload total differs."),rt(s===n.budgets.depotPayloadBytes,"Synthetic depot payload total differs."),rt(o===n.budgets.testRunPayloadBytes,"Synthetic test-run payload total differs."),{plan:n,engine:c,verified:a}}const ba={async seedFixture(n){rt(ts().engine==="legacy","Migration stress fixtures can only be seeded in legacy mode.");const e=ld(n);window.localStorage.removeItem(Ii);const{dataStore:t,snapshot:i}=await fd();return await pd(e,t,i),await gd(e),await vd(e),dr(Ur,e),e},getFixturePlan:()=>Nr(Ur),getRunState:()=>Nr(Ii),getStateSummary:ts,startMigration(){rt(ts().engine==="legacy","Migration stress cutover must start in legacy mode.");const n=Nr(Ur);rt(n?.schemaVersion===1,"Seed the migration stress fixture before starting cutover.");const e={schemaVersion:1,status:"running",startedAt:new Date().toISOString(),phases:[]};return dr(Ii,e),Zc.startMigration(t=>{e.phases.push({phase:t.phase,at:new Date().toISOString(),...t.detail===void 0?{}:{detail:t.detail}}),t.phase==="reloading"&&(e.status="reload-requested"),dr(Ii,e)}).catch(t=>{e.status="failed",e.error=t instanceof Error?t.message:String(t),dr(Ii,e)}),e},verifyFixture:_d};function xd(){if(Vo()&&new URL(window.location.href).searchParams.get("migrationStress")==="1")return window.__assistantMigrationStress=ba,()=>{window.__assistantMigrationStress===ba&&delete window.__assistantMigrationStress}}function Sd(n,e){const i=Nl(n,e).map(r=>n.messages.entities[r]).filter(Boolean);return{ancestryMessages:i.length,chainEntries:i.reduce((r,s)=>r+(s?.type==="response"?s.chain.length:0),0),sidecarKeys:i.reduce((r,s)=>r+Object.keys(s?.sidecars||{}).length,0),attachments:i.reduce((r,s)=>r+("attachments"in(s||{})&&Array.isArray(s.attachments)?s.attachments.length:0),0)}}function wa(n,e){const t=n.ui.tabs.find(r=>r.id===e.tabId);if(!t)throw new Error(`Performance scenario tab is missing: ${e.tabId}`);if(t.conversationId!==e.conversationId)throw new Error(`Performance scenario tab ${e.tabId} points to the wrong conversation`);if(t.messageId!==e.routeMessageId)throw new Error(`Performance scenario tab ${e.tabId} points to the wrong route message`);if(!n.conversations.entities[e.conversationId])throw new Error(`Performance scenario conversation is missing: ${e.conversationId}`);if(!n.messages.entities[e.routeMessageId])throw new Error(`Performance scenario route message is missing: ${e.routeMessageId}`);const i=Sd(n,e.routeMessageId);for(const r of Object.keys(e.fingerprint))if(i[r]!==e.fingerprint[r])throw new Error(`Performance scenario fingerprint mismatch for ${e.tabId}.${r}: expected ${e.fingerprint[r]}, got ${i[r]}`);return i}let Vs=0,Wi=null,Hs,Gr;function hn(){return qn.getState()}function Zl(){const n=hn();return n.ui.tabs.find(e=>e.id===n.ui.activeTabId)||null}function Gs(){const n=Wi?hn().messages.entities[Wi]:void 0;return n?.type==="user"?n:void 0}function Md(){Gr?.(),Gr=qn.subscribe(()=>{const n=Gs()?.text;n!==Hs&&(Hs=n,Vs+=1)})}function Aa(){const n=hn(),e=Zl();return{activeTabId:n.ui.activeTabId,activeConversationId:e?.conversationId||null,activeRouteMessageId:e?.messageId||null,draftMessageId:n.ui.draftMessageId,messageCount:n.messages.ids.length,conversationCount:n.conversations.ids.length,artifactVersionCount:n.artifactVersions.ids.length,persistence:{engine:n.persistence.engine,phase:n.persistence.phase,pendingWrites:n.persistence.pendingWrites},diagnostics:{memoryDiagnostics:!!n.settings.features.memoryDiagnostics,memoryTimelineDiagnostics:!!n.settings.features.memoryTimelineDiagnostics}}}function yd(n){const e=hn(),t=e.ui.tabs.find(i=>i.id===n);return t?Nl(e,t.messageId).some(i=>{const r=e.messages.entities[i];return r?.type==="response"&&(r.state.type==="created"||r.state.type==="in-progress")}):!1}function Ed(n){return`[data-performance-conversation-surface="true"][data-active-tab-id="${CSS.escape(n)}"][data-conversation-ready="true"]`}function Ra(n){return!!document.querySelector(`[data-editor-role="message"][data-message-id="${CSS.escape(n)}"] [contenteditable="true"]`)}async function ns(n){for(let e=0;e<n;e+=1)await new Promise(t=>window.requestAnimationFrame(()=>t()))}function Jl(n){const e=hn();return{persistenceReady:e.persistence.phase==="ready",pendingWrites:e.persistence.pendingWrites,activeTabMatches:e.ui.activeTabId===n,surfaceReady:!!document.querySelector(Ed(n)),activeResponse:yd(n)}}function Ca(n){const e=Jl(n);return e.persistenceReady&&e.pendingWrites===0&&e.activeTabMatches&&e.surfaceReady&&!e.activeResponse}const Pa={async prepareDeterministicMode(){qn.dispatch(ha({path:"features.memoryDiagnostics",value:!1})),qn.dispatch(ha({path:"features.memoryTimelineDiagnostics",value:!1})),iu(!1),ru(!1),localStorage.setItem("assistant.performanceDiagnostics.enabled","false"),localStorage.setItem("assistant.memoryTimeline.desired","false"),await ns(2)},getStateSummary:Aa,assertScenario(n){const e=hn(),t=e.messages.entities[n.draft.messageId];if(e.ui.draftMessageId!==n.draft.messageId)throw new Error(`Performance scenario draft mismatch: expected ${n.draft.messageId}, got ${e.ui.draftMessageId||"<none>"}`);if(!t||t.type!=="user")throw new Error(`Performance scenario draft is missing or not a user message: ${n.draft.messageId}`);if(t.text.length!==n.draft.expectedTextLength)throw new Error(`Performance scenario draft length mismatch: expected ${n.draft.expectedTextLength}, got ${t.text.length}`);return{slow:wa(e,n.slow),fast:wa(e,n.fast)}},focusTab(n){const e=hn();if(!e.ui.tabs.some(t=>t.id===n))throw new Error(`Cannot focus missing performance scenario tab ${n}`);sd(e.ui.activeTabId,n),qn.dispatch(nu(n))},async awaitQuiescence({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(await document.fonts?.ready;performance.now()<t;){if(Ca(n)&&(await ns(2),Ca(n))){od(n);return}await new Promise(r=>window.setTimeout(r,25))}const i=Aa();throw new Error(`Performance scenario did not become quiescent for ${n}: ${JSON.stringify({summary:i,readiness:Jl(n)})}`)},async awaitEditableUserMessage({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(;performance.now()<t;){const i=hn(),r=i.ui.tabs.find(o=>o.id===n),s=r?i.messages.entities[r.messageId]:void 0;if(i.ui.activeTabId===n&&s?.type==="user"&&Ra(s.id)&&(await ns(2),Ra(s.id)))return{messageId:s.id};await new Promise(o=>window.setTimeout(o,25))}throw new Error(`Editable user message did not mount for tab ${n}`)},getEditorTargetDescriptor(){const n=Gs();if(!Wi||!n)throw new Error("Performance scenario editor target is unavailable");return{messageId:Wi,textLength:n.text.length,attachmentCount:n.attachments.length,updateCount:Vs}},assertEditorText(n){const e=Gs();if(!e)throw new Error("Performance scenario editor target is unavailable");if(e.text!==n)throw new Error(`Performance scenario final editor text mismatch: expected length ${n.length}, got ${e.text.length}`);return!0},resetEditorUpdateCount(n){const e=hn(),t=n||Zl()?.messageId,i=t?e.messages.entities[t]:void 0;if(!t||i?.type!=="user")throw new Error("Cannot reset performance counter without an active user message");Wi=t,Hs=i.text,Vs=0}};function Td(){if(Vo())return rd(),Md(),window.__assistantPerformanceDriver=Pa,()=>{Gr?.(),Gr=void 0,window.__assistantPerformanceDriver===Pa&&delete window.__assistantPerformanceDriver}}function bd(){const n=mu(d=>d.persistence??{}),e=Ji(),t=Ol(),[i,r]=K.useState(!1),[s,o]=K.useState();if(n.phase!=="fault")return null;const a=e["status.error"],c=Xi(e.button,"#ffffff","#000000",t),l=async()=>{r(!0),o(void 0);try{const{createFaultModeExport:d,downloadFaultModeExport:h}=await Io(async()=>{const{createFaultModeExport:f,downloadFaultModeExport:p}=await import("./faultExport-D0sZpLaU.js");return{createFaultModeExport:f,downloadFaultModeExport:p}},__vite__mapDeps([9,5,1,2,0,3,4,6,7,8]));h(d(n.fault))}catch(d){o(d instanceof Error?d.message:String(d))}finally{r(!1)}};return B.jsx("div",{role:"alertdialog","aria-modal":"true",style:{position:"fixed",inset:0,zIndex:2147483647,display:"grid",placeItems:"center",padding:24,boxSizing:"border-box",background:ut(e.background,.97),color:e["text.primary"],fontFamily:"Inter, system-ui, sans-serif"},children:B.jsxs("section",{style:{width:"min(680px, 100%)",padding:28,border:`1px solid ${ut(a,.48)}`,borderRadius:12,background:e.paper,boxShadow:"0 24px 80px rgba(0, 0, 0, 0.45)"},children:[B.jsx("p",{style:{margin:"0 0 8px",color:a,fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Persistence fault"}),B.jsx("h1",{style:{margin:"0 0 14px",fontSize:"clamp(1.5rem, 4vw, 2.1rem)"},children:"Assistant stopped saving to protect your data"}),B.jsx("p",{style:{margin:"0 0 12px",color:e["text.secondary"],lineHeight:1.55},children:"Assistant will not accept more changes after an ambiguous or failed database write. Reload to open the last complete SQLite state."}),B.jsx("pre",{style:{margin:"16px 0",padding:12,maxHeight:180,overflow:"auto",whiteSpace:"pre-wrap",overflowWrap:"anywhere",border:`1px solid ${ut(a,.4)}`,borderRadius:8,background:ut(a,.1),color:a,fontSize:12},children:n.fault||"SQLite persistence entered a fatal state."}),s?B.jsx("p",{style:{color:a,lineHeight:1.5},children:s}):null,B.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:20},children:[B.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.button}`,background:e.button,color:c,cursor:"pointer",fontSize:"0.95rem",fontWeight:600},children:"Reload"}),B.jsx("button",{type:"button",disabled:i,onClick:()=>{l()},style:{padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.divider}`,background:e.paper,color:i?e["status.disabled"]:e["text.primary"],cursor:i?"wait":"pointer",fontSize:"0.95rem",fontWeight:600},children:i?"Preparing snapshot…":"Download in-memory snapshot"})]}),B.jsx("p",{style:{margin:"16px 0 0",color:e["text.secondary"],fontSize:13,lineHeight:1.5},children:"The snapshot contains the current in-memory application state only — attachments and other binary payloads are not included, and recent changes may not have been committed. The SQLite database still holds the last fully committed state. Do not clear browser site data."})]})})}const wd={"selector-invalid":"Assistant cannot determine which storage engine owns your data because the boot selector is malformed or unreadable.","opfs-unsupported":"This browser does not provide the OPFS support required to open SQLite persistence.","opfs-open-failed":"Assistant could not acquire or open its private OPFS database area.","database-missing":"The exact SQLite database selected for this profile is missing.","database-exists":"Assistant refused to replace an existing SQLite database while creating a new one.","identity-mismatch":"The database identity does not match the exact database selected for this profile.","not-sealed":"The selected database was never completely prepared and sealed for normal use.","already-sealed":"Assistant detected an invalid attempt to seal an already completed database.","integrity-failed":"SQLite reported that the database failed structural integrity checks.","storage-full":"The browser reported that durable storage is full.","io-error":"SQLite or OPFS reported an input/output failure while accessing the database.","fatal-latched":"An earlier persistence failure stopped this database session; reload is required.","invalid-request":"Assistant detected malformed or unsupported persisted data or a programming error in a database request.","replica-failed":"A full-database replica operation failed; the primary database has not been replaced.","restore-invalid":"The selected replica file did not pass complete restore validation.","worker-terminated":"The SQLite worker stopped unexpectedly, so the outcome of its last operation may be unknown.",internal:"Assistant encountered an unexpected persistence implementation error."};function La(n){const e=new Date(n);return Number.isNaN(e.getTime())?n:e.toLocaleString()}function Ad({error:n}){const e=K.useMemo(()=>Fc(),[]),t={padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.divider}`,background:e.paper,color:e.textPrimary,cursor:"pointer",fontSize:"0.95rem",fontWeight:600},i=K.useRef(null),[r,s]=K.useState(),[o,a]=K.useState(),[c,l]=K.useState(),[d,h]=K.useState();let f,p;try{const A=xu();A.engine==="sqlite"&&(f=A.selector.databaseName)}catch(A){p=A instanceof Error?A.message:String(A)}K.useEffect(()=>{let A=!1;return Su().then(C=>{A||l(C)}),Mu().then(C=>{A||h(C)}),()=>{A=!0}},[]);const g=n instanceof Fl?n.code:void 0,x=g?wd[g]:"Assistant could not safely open the selected SQLite database and will not guess or fall back to another data source.";let m,u;d?d.supported?d.present?(m=`OPFS marker: present${d.createdAt?` (created ${La(d.createdAt)})`:""}.`,u="A marker file outside the database pool survived, so OPFS was NOT cleared origin-wide: the loss is specific to the SQLite pool (for example the SAH pool's silent bad-digest reap, or targeted deletion)."):d.expectedCreatedAt?(m=`OPFS marker: missing (it was created ${La(d.expectedCreatedAt)}).`,u='A marker file outside the database pool is gone too, which points to origin-wide OPFS clearing: browser eviction on an unpersisted origin, "Clear site data", or an external cleanup tool.'):m="OPFS marker: was never created on this profile, so an origin-wide wipe cannot be distinguished from pool-specific loss for this incident.":m="OPFS marker: could not be checked in this browser.":m="OPFS marker: checking…";const E=c===void 0?"Persistent storage: unknown (the browser did not report a grant state).":c?"Persistent storage: granted — this origin is protected from ordinary pressure-driven eviction.":"Persistent storage: NOT granted — quota-managed storage (including OPFS) on this origin is evictable by the browser.",T=async(A,C)=>{s(A),a(void 0);try{await C()}catch(_){a(_ instanceof Error?_.message:String(_))}finally{s(void 0)}},M=async A=>{await T("Restoring replica…",async()=>{await su(A)})},D=async()=>{f&&await T("Exporting forensic bytes…",async()=>{const A=await ou(f);au(`${f}.raw.db`,A)})},R=async()=>{window.prompt("Type RESET to permanently delete all Assistant SQLite storage.")==="RESET"&&await T("Resetting SQLite storage…",async()=>{await lu(),window.location.reload()})};return B.jsx("main",{role:"alert",style:{minHeight:"100vh",boxSizing:"border-box",display:"grid",placeItems:"center",padding:24,background:e.background,color:e.textPrimary,fontFamily:"Inter, system-ui, sans-serif"},children:B.jsxs("section",{style:{width:"min(760px, 100%)",padding:28,border:`1px solid ${e.divider}`,borderRadius:12,background:e.paper},children:[B.jsx("p",{style:{margin:"0 0 8px",color:e.textSecondary,fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"SQLite recovery"}),B.jsx("h1",{style:{margin:"0 0 14px",color:e.statusError,fontSize:"clamp(1.5rem, 4vw, 2.1rem)"},children:"Assistant stopped to protect your data"}),g?B.jsxs("p",{style:{margin:"0 0 12px",fontFamily:"ui-monospace, monospace",fontWeight:700},children:["Error code: ",g]}):null,B.jsx("p",{style:{margin:"0 0 12px",color:e.textSecondary,lineHeight:1.55},children:x}),f?B.jsxs("p",{style:{margin:"0 0 12px",color:e.textSecondary},children:["Selected database: ",B.jsx("code",{style:{color:e.textPrimary},children:f})]}):null,p?B.jsxs("p",{style:{margin:"0 0 12px",color:e.statusError,lineHeight:1.5},children:["The persistence selector itself could not be read: ",p]}):null,B.jsx("pre",{style:{margin:"16px 0",padding:12,maxHeight:180,overflow:"auto",whiteSpace:"pre-wrap",overflowWrap:"anywhere",border:`1px solid ${ut(e.statusError,.4)}`,borderRadius:8,background:ut(e.statusError,.1),color:e.statusError,fontSize:12},children:n.message}),B.jsxs("div",{style:{margin:"0 0 12px",padding:12,borderRadius:8,border:`1px solid ${e.divider}`,fontSize:13,lineHeight:1.55,color:e.textSecondary},children:[B.jsx("p",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Storage forensics"}),B.jsx("p",{style:{margin:"0 0 4px"},children:E}),B.jsx("p",{style:{margin:0},children:m}),g==="database-missing"&&u?B.jsx("p",{style:{margin:"6px 0 0",color:e.textPrimary},children:u}):null]}),o?B.jsx("p",{style:{color:e.statusError,lineHeight:1.5},children:o}):null,r?B.jsx("p",{style:{color:e.textSecondary},children:r}):null,B.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:20},children:[B.jsx("button",{type:"button",disabled:!!r,onClick:()=>window.location.reload(),style:{...t,background:e.button,borderColor:e.button,color:e.buttonForeground},children:"Reload"}),B.jsx("button",{type:"button",disabled:!!r,onClick:()=>i.current?.click(),style:t,children:"Restore from replica file"}),B.jsx("input",{ref:i,"data-performance-replica-input":"true",hidden:!0,type:"file",accept:".db,application/vnd.sqlite3",onChange:A=>{const C=A.currentTarget.files?.[0];A.currentTarget.value="",C&&M(C)}}),f?B.jsx("button",{type:"button",disabled:!!r,onClick:()=>{D()},style:t,children:"Export raw database bytes (forensic)"}):null]}),B.jsx("p",{style:{margin:"14px 0 0",color:e.textSecondary,fontSize:13,lineHeight:1.5},children:"The forensic export is an unvalidated byte-for-byte rescue copy for support. It may be corrupt and is not a verified backup."}),B.jsxs("div",{style:{marginTop:26,paddingTop:20,borderTop:`1px solid ${e.divider}`},children:[B.jsx("h2",{style:{margin:"0 0 8px",color:e.statusError,fontSize:"1rem"},children:"Danger zone"}),B.jsx("p",{style:{margin:"0 0 12px",color:e.textSecondary,fontSize:13,lineHeight:1.5},children:"Reset permanently deletes every Assistant SQLite database and removes the engine selector. Legacy pre-migration data, if it still exists, becomes authoritative again after reload."}),B.jsx("button",{type:"button",disabled:!!r,onClick:()=>{R()},style:{...t,borderColor:e.statusError,color:e.statusError},children:"Reset SQLite storage…"})]})]})})}const __={transient:.12,messageState:.35},cn={speed:.45,attenuation:1.2,fadeLifetime:2,packetLength:.25,coreWidth:2.2,bladeWidth:9,glowIntensity:1.35,haloStrength:.6,seamMergePx:22},Da=(n,e)=>{const t=[...n].sort((r,s)=>r-s),i=[];for(const r of t){const s=i[i.length-1];!s||r-s[s.length-1]>e?i.push([r]):s.push(r)}return i.map(r=>r.reduce((s,o)=>s+o,0)/r.length)},Rd=(n,e,t,i,r=cn.seamMergePx)=>{if(e===0)return{xs:[],ys:[]};const s=new Set,o=new Set;for(let d=0;d<e;d+=1){const h=d*4,f=n[h],p=n[h+1],g=n[h+2],x=n[h+3];s.add(f),s.add(f+g),o.add(p),o.add(p+x)}const a=Da(s,2/Math.max(1,i.width)),c=Da(o,r/Math.max(1,i.height));return{xs:t==="ladder"&&a.length>1?[a[0],a[a.length-1]]:a,ys:c}},Cd=(n,e)=>{if(!n.length)return e;let t=n[0];for(const i of n)Math.abs(i-e)<Math.abs(t-e)&&(t=i);return t},Pd=(n,e,t)=>{const i=Math.max(t.width,t.height,1),r=(e.u-n.u)*t.width/i,s=(e.v-n.v)*t.height/i;return Math.hypot(r,s)},Ia=(n,e,t,i,r)=>({from:n,to:e,startDistance:t,gain:i,length:Pd(n,e,r)}),Ua=(n,e,t,i)=>{const{xs:r,ys:s}=n;if(r.length<2||!s.length)return[];const o=s.reduce((u,E,T)=>Math.abs(E-e.v)<Math.abs(s[u]-e.v)?T:u,0);let a;if(t<0){a=0;for(let u=0;u<r.length;u+=1)r[u]<=e.u&&(a=u)}else{a=r.length-1;for(let u=0;u<r.length;u+=1)if(r[u]>=e.u){a=u;break}}const c={u:e.u,v:s[o]},l={u:r[a],v:s[o]},d=Ia(c,l,0,1,i),h=[];d.length>1e-6&&h.push(d);const f=t<0?Math.min(r.length-1,a+1):Math.max(0,a-1),p=[{ix:a,iy:o,fromIx:f,fromIy:o,distance:d.length,gain:1}],g=new Set,x=2.2,m=280;for(;p.length&&h.length<m;){p.sort((A,C)=>A.distance-C.distance);const u=p.shift();if(u.distance>x)continue;const E=`${u.ix},${u.iy}|${u.fromIx},${u.fromIy}`;if(g.has(E))continue;g.add(E);const T=[];u.ix>0&&T.push({ix:u.ix-1,iy:u.iy}),u.ix<r.length-1&&T.push({ix:u.ix+1,iy:u.iy}),u.iy>0&&T.push({ix:u.ix,iy:u.iy-1}),u.iy<s.length-1&&T.push({ix:u.ix,iy:u.iy+1});const M=T.filter(A=>A.ix!==u.fromIx||A.iy!==u.fromIy),D=u.gain/Math.sqrt(Math.max(1,M.length)),R={u:r[u.ix],v:s[u.iy]};for(const A of M){const C={u:r[A.ix],v:s[A.iy]},_=Ia(R,C,u.distance,D,i);_.length<=1e-6||(h.push(_),p.push({ix:A.ix,iy:A.iy,fromIx:u.ix,fromIy:u.iy,distance:u.distance+_.length,gain:D}))}}return h},$n=n=>Math.min(1,Math.max(0,n)),Na=(n,e,t)=>{const i=n-e;if(i<0||i>t)return 0;const r=Math.pow($n(1-i/t),.62),s=$n(i/Math.max(.008,t*.13));return r*Math.pow(s,.45)},Oa=(n,e)=>{const t=e-n.startDistance,i=n.length>0?t/n.length:0;return{u:n.from.u+(n.to.u-n.from.u)*i,v:n.from.v+(n.to.v-n.from.v)*i}},Ld=(n,e,t)=>{const i=Math.max(0,e-t-n.startDistance),r=Math.min(n.length,e-n.startDistance);if(r<=i||r<=0||i>=n.length)return[];const s=n.startDistance+i,o=n.startDistance+r,a=e-Math.max(.008,t*.13),c=[s];a>s&&a<o&&c.push(a),c.push(o);const l=[];for(let d=0;d<c.length-1;d+=1){const h=c[d],f=c[d+1];l.push({from:Oa(n,h),to:Oa(n,f),startDistance:h,endDistance:f})}return l};function x_(n){let e,t,i;if(n.startsWith("#")){const r=n.slice(1);r.length===3?(e=parseInt(r[0]+r[0],16)/255,t=parseInt(r[1]+r[1],16)/255,i=parseInt(r[2]+r[2],16)/255):(e=parseInt(r.slice(0,2),16)/255,t=parseInt(r.slice(2,4),16)/255,i=parseInt(r.slice(4,6),16)/255)}else if(n.startsWith("rgb")){const r=n.match(/rgba?\(([^)]+)\)/);if(r){const s=r[1].split(",").map(o=>parseFloat(o.trim()));e=s[0]/255,t=s[1]/255,i=s[2]/255}else return 0}else return 0;return $o([e,t,i])}function $o([n,e,t]){const i=Math.max(n,e,t),r=Math.min(n,e,t);if(i===r)return 0;const s=i-r;return(i===n?(e-t)/s+(e<t?6:0):i===e?(t-n)/s+2:(n-e)/s+4)/6%1}const Rn=128,is=1024,pi=1024,Kt={speed:.9,attenuation:1.2,energyConservation:1,injectionRadius:.1},Ql=Bc.createContext(null),Dd=n=>n.hue!==void 0?n.hue:n.rgb?$o(n.rgb):0,Dn=(n,e,t,i)=>`hsla(${Math.round((n%1+1)%1*360)}, ${e}%, ${t}%, ${$n(i)})`,_n=(n,e,t,i,r,s,o)=>{const a=e.u*window.innerWidth,c=(1-e.v)*window.innerHeight,l=t.u*window.innerWidth,d=(1-t.v)*window.innerHeight;if(Math.hypot(l-a,d-c)<.25)return;const h=n.createLinearGradient(a,c,l,d);h.addColorStop(0,i(s)),h.addColorStop(1,i(o)),n.strokeStyle=h,n.lineWidth=r,n.beginPath(),n.moveTo(a,c),n.lineTo(l,d),n.stroke()},Id=(n,e,t,i,r,s,o)=>{const a=Math.min(1.35,Math.max(.25,i.energy/3)),c=$n(r*a),l=$n(s*a);if(Math.max(c,l)<=.002)return;const d=Math.min(2.2,o.glowIntensity),h=o.bladeWidth*(1.25+o.haloStrength*.85),f=Math.max(o.coreWidth+2,o.bladeWidth*.64),p=Math.max(o.coreWidth+.7,f*.42),g=Math.max(.7,Math.min(p-.45,o.coreWidth));n.lineCap="butt",n.lineJoin="bevel",o.lightMode?(n.globalCompositeOperation="source-over",_n(n,e,t,x=>Dn(i.hue,100,86,x*.22*d),h,c,l),_n(n,e,t,x=>Dn(i.hue,100,76,x*.42*d),f,c,l),_n(n,e,t,x=>Dn(i.hue,94,53,x*.86*d),p,c,l),_n(n,e,t,x=>Dn(i.hue,100,79,x*.92),g,c,l)):(n.globalCompositeOperation="lighter",_n(n,e,t,x=>Dn(i.hue,100,52,x*.13*d),h,c,l),_n(n,e,t,x=>Dn(i.hue,100,58,x*.48*d),f,c,l),_n(n,e,t,x=>Dn(i.hue,100,64,x*.86),p,c,l),_n(n,e,t,x=>`rgba(255, 255, 255, ${$n(x*.94)})`,g,c,l))},Ud=n=>{const e=tn.c(38),{children:t,topology:i,speed:r,attenuation:s,zIndex:o,enableGlobalClicks:a,pixelRatio:c,maxFPS:l}=n,d=i===void 0?"ladder":i,h=r===void 0?cn.speed:r,f=s===void 0?cn.attenuation:s,p=o===void 0?5:o,g=a===void 0?!1:a,x=l===void 0?120:l,m=K.useRef(null);let u;e[0]===Symbol.for("react.memo_cache_sentinel")?(u=new Map,e[0]=u):u=e[0];const E=K.useRef(u),T=K.useRef(null);let M;e[1]===Symbol.for("react.memo_cache_sentinel")?(M=new Float32Array(Rn*4),e[1]=M):M=e[1];const D=K.useRef(M);let R;e[2]===Symbol.for("react.memo_cache_sentinel")?(R={xs:[],ys:[]},e[2]=R):R=e[2];const A=K.useRef(R);let C;e[3]===Symbol.for("react.memo_cache_sentinel")?(C=[],e[3]=C):C=e[3];const _=K.useRef(C),v=K.useRef(!0),b=K.useRef(null),N=K.useRef(Nd),F=K.useRef(Od),j=K.useRef(d),J=K.useRef(h),W=K.useRef(f),ie=K.useRef(x),V=Uo();let ae;e[4]!==V?(ae=V.toLowerCase().includes("light"),e[4]=V,e[5]=ae):ae=e[5];const le=ae,xe=K.useRef(le);let Ee,Te;e[6]!==d?(Ee=()=>{j.current=d,v.current=!0},Te=[d],e[6]=d,e[7]=Ee,e[8]=Te):(Ee=e[7],Te=e[8]),K.useEffect(Ee,Te);let $,Y;e[9]!==h?($=()=>{J.current=h},Y=[h],e[9]=h,e[10]=$,e[11]=Y):($=e[10],Y=e[11]),K.useEffect($,Y);let ce,se;e[12]!==f?(ce=()=>{W.current=f},se=[f],e[12]=f,e[13]=ce,e[14]=se):(ce=e[13],se=e[14]),K.useEffect(ce,se);let fe,Re;e[15]!==x?(fe=()=>{ie.current=x},Re=[x],e[15]=x,e[16]=fe,e[17]=Re):(fe=e[16],Re=e[17]),K.useEffect(fe,Re);let we,Ge;e[18]!==le?(we=()=>{xe.current=le,F.current()},Ge=[le],e[18]=le,e[19]=we,e[20]=Ge):(we=e[19],Ge=e[20]),K.useEffect(we,Ge);let $e;e[21]===Symbol.for("react.memo_cache_sentinel")?($e=re=>{const ne=E.current.get(re.id)?.ref.current;ne&&T.current?.unobserve(ne),E.current.set(re.id,re),re.ref.current&&T.current?.observe(re.ref.current),v.current=!0},e[21]=$e):$e=e[21];const We=$e;let P;e[22]===Symbol.for("react.memo_cache_sentinel")?(P=re=>{const ne=E.current.get(re)?.ref.current;ne&&T.current?.unobserve(ne),E.current.delete(re),v.current=!0},e[22]=P):P=e[22];const at=P;let ze;e[23]===Symbol.for("react.memo_cache_sentinel")?(ze=(re,ne,ge)=>{N.current(re,ne,ge)},e[23]=ze):ze=e[23];const Ve=ze;let _e;e[24]===Symbol.for("react.memo_cache_sentinel")?(_e=re=>{const ne=E.current.get(re)?.ref.current;if(!ne)return null;const ge=ne.getBoundingClientRect();return{u:(ge.left+ge.width/2)/window.innerWidth,v:1-(ge.top+ge.height/2)/window.innerHeight}},e[24]=_e):_e=e[24];const Ne=_e;let ye;e[25]===Symbol.for("react.memo_cache_sentinel")?(ye={register:We,unregister:at,pulseAt:Ve,getNodeCenter:Ne},e[25]=ye):ye=e[25];const Ue=ye;let qe,w;e[26]!==c?(qe=()=>{const re=m.current,ne=re?.getContext("2d",{alpha:!0});if(!re||!ne)return;let ge=!1,Ae=0;const ee=_.current,Se=Fd,De=()=>{const L=window.innerWidth,ue=window.innerHeight,te=[...E.current.values()].slice(0,Rn),he=D.current;te.forEach((Q,Z)=>{const me=Q.ref.current?.getBoundingClientRect();if(!me)return;const Pe=Z*4;he[Pe]=me.left/L,he[Pe+1]=(ue-me.bottom)/ue,he[Pe+2]=me.width/L,he[Pe+3]=me.height/ue}),A.current=Rd(he,te.length,j.current,Se());for(const Q of ee)Q.passes=Ua(A.current,Q.source,Q.direction,Se());v.current=!1},Ce=()=>{const L=typeof c=="number"?Math.max(.5,Math.min(c,2)):Math.min(window.devicePixelRatio||1,2);re.width=Math.round(window.innerWidth*L),re.height=Math.round(window.innerHeight*L),re.style.width=`${window.innerWidth}px`,re.style.height=`${window.innerHeight}px`,ne.setTransform(L,0,0,L,0,0),v.current=!0,F.current()},de=L=>{if(b.current=null,ge)return;const ue=ie.current;if(ue&&ue>0&&L-Ae<1e3/ue){b.current=requestAnimationFrame(de);return}Ae=L,v.current&&De(),ne.clearRect(0,0,window.innerWidth,window.innerHeight);const te={lightMode:xe.current,coreWidth:cn.coreWidth,bladeWidth:cn.bladeWidth,glowIntensity:cn.glowIntensity,haloStrength:cn.haloStrength},he=ee;for(let Q=he.length-1;Q>=0;Q=Q-1,Q){const Z=he[Q],me=(L-Z.startedAt)/1e3,Pe=me*J.current,Qe=Math.max(.055,Z.packetLength*(.65+Z.radius*2)),Ye=$n(1-me/(cn.fadeLifetime+1.2));if(Ye<=0||Pe>3){he.splice(Q,1);continue}for(const Mt of Z.passes)for(const vt of Ld(Mt,Pe,Qe)){const sr=Math.exp(-W.current*vt.startDistance*.45),or=Math.exp(-W.current*vt.endDistance*.45),nn=Na(Pe,vt.startDistance,Qe)*sr*Ye*Mt.gain,Li=Na(Pe,vt.endDistance,Qe)*or*Ye*Mt.gain;Id(ne,vt.from,vt.to,Z,nn,Li,te)}}ne.globalCompositeOperation="source-over",he.length&&(b.current=requestAnimationFrame(de))};F.current=()=>{!ge&&b.current===null&&(b.current=requestAnimationFrame(de))},N.current=(L,ue,te)=>{const he=te===void 0?{}:te;v.current&&De();const Q={u:L,v:Cd(A.current.ys,ue)},Z={source:Q,hue:Dd(he),energy:he.energy??2.5,radius:he.radius??.05,packetLength:he.packetLength??cn.packetLength,startedAt:performance.now()};for(const me of[-1,1])ee.push({...Z,direction:me,passes:Ua(A.current,Q,me,Se())});F.current()};const Oe=()=>{v.current=!0,ee.length&&F.current()};return T.current=new ResizeObserver(Oe),E.current.forEach(L=>{L.ref.current&&T.current?.observe(L.ref.current)}),window.addEventListener("resize",Ce),document.addEventListener("scroll",Oe,!0),Ce(),()=>{ge=!0,window.removeEventListener("resize",Ce),document.removeEventListener("scroll",Oe,!0),T.current?.disconnect(),T.current=null,b.current!==null&&cancelAnimationFrame(b.current),b.current=null,ee.length=0,N.current=Bd,F.current=zd,ne.clearRect(0,0,window.innerWidth,window.innerHeight)}},w=[c],e[26]=c,e[27]=qe,e[28]=w):(qe=e[27],w=e[28]),K.useEffect(qe,w);let S,O;e[29]!==g?(S=()=>{if(!g)return;const re=ne=>{Ve(ne.clientX/window.innerWidth,1-ne.clientY/window.innerHeight,{hue:.33})};return window.addEventListener("click",re),()=>window.removeEventListener("click",re)},O=[g,Ve],e[29]=g,e[30]=S,e[31]=O):(S=e[30],O=e[31]),K.useEffect(S,O);const X=le?"normal":"screen";let q;e[32]!==X||e[33]!==p?(q=B.jsx("canvas",{ref:m,"aria-hidden":"true",style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:p,mixBlendMode:X}}),e[32]=X,e[33]=p,e[34]=q):q=e[34];let z;return e[35]!==t||e[36]!==q?(z=B.jsxs(Ql.Provider,{value:Ue,children:[t,q]}),e[35]=t,e[36]=q,e[37]=z):z=e[37],z};function Nd(){}function Od(){}function Fd(){return{width:window.innerWidth,height:window.innerHeight}}function Bd(){}function zd(){}const Yo="178",kd=0,Fa=1,Vd=2,ec=1,Hd=2,un=3,Cn=0,Lt=1,dn=2,wn=0,xi=1,Ws=2,Ba=3,za=4,Gd=5,Hn=100,Wd=101,Xd=102,qd=103,jd=104,$d=200,Yd=201,Kd=202,Zd=203,Xs=204,qs=205,Jd=206,Qd=207,eh=208,th=209,nh=210,ih=211,rh=212,sh=213,oh=214,js=0,$s=1,Ys=2,Ei=3,Ks=4,Zs=5,Js=6,Qs=7,tc=0,ah=1,lh=2,An=0,ch=1,uh=2,dh=3,hh=4,fh=5,ph=6,mh=7,nc=300,Ti=301,bi=302,eo=303,to=304,jr=306,no=1e3,Wn=1001,io=1002,Yt=1003,gh=1004,hr=1005,St=1006,rs=1007,Xn=1008,gn=1009,ic=1010,rc=1011,qi=1012,Ko=1013,Kn=1014,Ht=1015,er=1016,Zo=1017,Jo=1018,ji=1020,sc=35902,oc=1021,ac=1022,Ct=1023,$i=1026,Yi=1027,lc=1028,Qo=1029,cc=1030,ea=1031,ta=1033,Or=33776,Fr=33777,Br=33778,zr=33779,ro=35840,so=35841,oo=35842,ao=35843,lo=36196,co=37492,uo=37496,ho=37808,fo=37809,po=37810,mo=37811,go=37812,vo=37813,_o=37814,xo=37815,So=37816,Mo=37817,yo=37818,Eo=37819,To=37820,bo=37821,kr=36492,wo=36494,Ao=36495,uc=36283,Ro=36284,Co=36285,Po=36286,vh=3200,_h=3201,xh=0,Sh=1,bn="",Vt="srgb",wi="srgb-linear",Wr="linear",tt="srgb",Qn=7680,ka=519,Mh=512,yh=513,Eh=514,dc=515,Th=516,bh=517,wh=518,Ah=519,Va=35044,Ha="300 es",fn=2e3,Xr=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,Lo=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Rh(n,e){return(n%e+e)%e}function os(n,e,t){return(1-t)*n+t*e}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==p||d!==g){let m=1-a;const u=c*f+l*p+d*g+h*x,E=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const D=Math.sqrt(T),R=Math.atan2(D,u*E);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}const M=a*E;if(c=c*m+f*M,l=l*m+p*M,d=d*m+g*M,h=h*m+x*M,m===1-a){const D=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=D,l*=D,d*=D,h*=D}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+d*h+c*p-l*f,e[t+1]=c*g+d*f+l*h-a*p,e[t+2]=l*g+d*p+a*f-c*h,e[t+3]=d*g-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),h=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*d*h+l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h-f*p*g;break;case"YXZ":this._x=f*d*h+l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h+f*p*g;break;case"ZXY":this._x=f*d*h-l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h-f*p*g;break;case"ZYX":this._x=f*d*h-l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h+f*p*g;break;case"YZX":this._x=f*d*h+l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h-f*p*g;break;case"XZY":this._x=f*d*h-l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*d,this.y=i+c*d+a*l-s*h,this.z=r+c*h+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return as.copy(this).projectOnVector(e),this.sub(as)}reflect(e){return this.sub(as.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const as=new G,Ga=new nr;class ke{constructor(e,t,i,r,s,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=r[0],m=r[3],u=r[6],E=r[1],T=r[4],M=r[7],D=r[2],R=r[5],A=r[8];return s[0]=o*x+a*E+c*D,s[3]=o*m+a*T+c*R,s[6]=o*u+a*M+c*A,s[1]=l*x+d*E+h*D,s[4]=l*m+d*T+h*R,s[7]=l*u+d*M+h*A,s[2]=f*x+p*E+g*D,s[5]=f*m+p*T+g*R,s[8]=f*u+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],h=d*o-a*l,f=a*c-d*s,p=l*s-o*c,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*l-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ls.makeScale(e,t)),this}rotate(e){return this.premultiply(ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ls=new ke;function hc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ch(){const n=qr("canvas");return n.style.display="block",n}const Wa={};function Si(n){n in Wa||(Wa[n]=!0,console.warn(n))}function Ph(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Lh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xa=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qa=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ih(){const n={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?Wr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Si("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Si("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wi]:{primaries:e,whitePoint:i,transfer:Wr,toXYZ:Xa,fromXYZ:qa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Xa,fromXYZ:qa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}const Ze=Ih();function mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ei;class Uh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ei===void 0&&(ei=qr("canvas")),ei.width=e.width,ei.height=e.height;const r=ei.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ei}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mn(t[i]/255)*255):t[i]=mn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nh=0;class na{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cs(r[o].image)):s.push(cs(r[o]))}else s=cs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;const us=new G;class Dt extends Ri{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Wn,r=Wn,s=St,o=Xn,a=Ct,c=gn,l=Dt.DEFAULT_ANISOTROPY,d=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=tr(),this.name="",this.source=new na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(us).x}get height(){return this.source.getSize(us).y}get depth(){return this.source.getSize(us).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=nc;Dt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,M=(p+1)/2,D=(u+1)/2,R=(d+f)/4,A=(h+x)/4,C=(g+m)/4;return T>M&&T>D?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=A/i):M>D?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=C/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=A/s,r=C/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-x)/E,this.z=(f-d)/E,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Dt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new na(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends Fh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fc extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bh extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),pr.subVectors(this.max,Oi),ti.subVectors(e.a,Oi),ni.subVectors(e.b,Oi),ii.subVectors(e.c,Oi),xn.subVectors(ni,ti),Sn.subVectors(ii,ni),In.subVectors(ti,ii);let t=[0,-xn.z,xn.y,0,-Sn.z,Sn.y,0,-In.z,In.y,xn.z,0,-xn.x,Sn.z,0,-Sn.x,In.z,0,-In.x,-xn.y,xn.x,0,-Sn.y,Sn.x,0,-In.y,In.x,0];return!ds(t,ti,ni,ii,pr)||(t=[1,0,0,0,1,0,0,0,1],!ds(t,ti,ni,ii,pr))?!1:(mr.crossVectors(xn,Sn),t=[mr.x,mr.y,mr.z],ds(t,ti,ni,ii,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rn=[new G,new G,new G,new G,new G,new G,new G,new G],Gt=new G,fr=new ir,ti=new G,ni=new G,ii=new G,xn=new G,Sn=new G,In=new G,Oi=new G,pr=new G,mr=new G,Un=new G;function ds(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Un.fromArray(n,s);const a=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),d=i.dot(Un);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const zh=new ir,Fi=new G,hs=new G;class ia{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(hs)),this.expandByPoint(Fi.copy(e.center).sub(hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sn=new G,fs=new G,gr=new G,Mn=new G,ps=new G,vr=new G,ms=new G;class kh{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fs.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(fs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gr),a=Mn.dot(this.direction),c=-Mn.dot(gr),l=Mn.lengthSq(),d=Math.abs(1-o*o);let h,f,p,g;if(d>0)if(h=o*c-a,f=o*a-c,g=s*d,h>=0)if(f>=-g)if(f<=g){const x=1/d;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fs).addScaledVector(gr,f),p}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const i=sn.dot(this.direction),r=sn.dot(sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,i,r,s){ps.subVectors(t,e),vr.subVectors(i,e),ms.crossVectors(ps,vr);let o=this.direction.dot(ms),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const c=a*this.direction.dot(vr.crossVectors(Mn,vr));if(c<0)return null;const l=a*this.direction.dot(ps.cross(Mn));if(l<0||c+l>o)return null;const d=-a*Mn.dot(ms);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,c,l,d,h,f,p,g,x,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,d,h,f,p,g,x,m)}set(e,t,i,r,s,o,a,c,l,d,h,f,p,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),o=1/ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,g=a*d,x=a*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,p=c*h,g=l*d,x=l*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,p=c*h,g=l*d,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,p=o*h,g=a*d,x=a*h;t[0]=c*d,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*d,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+x,t[5]=o*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*d,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vh,e,Hh)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),yn.crossVectors(i,Nt),yn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),yn.crossVectors(i,Nt)),yn.normalize(),_r.crossVectors(Nt,yn),r[0]=yn.x,r[4]=_r.x,r[8]=Nt.x,r[1]=yn.y,r[5]=_r.y,r[9]=Nt.y,r[2]=yn.z,r[6]=_r.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],E=i[3],T=i[7],M=i[11],D=i[15],R=r[0],A=r[4],C=r[8],_=r[12],v=r[1],b=r[5],N=r[9],F=r[13],j=r[2],J=r[6],W=r[10],ie=r[14],V=r[3],ae=r[7],le=r[11],xe=r[15];return s[0]=o*R+a*v+c*j+l*V,s[4]=o*A+a*b+c*J+l*ae,s[8]=o*C+a*N+c*W+l*le,s[12]=o*_+a*F+c*ie+l*xe,s[1]=d*R+h*v+f*j+p*V,s[5]=d*A+h*b+f*J+p*ae,s[9]=d*C+h*N+f*W+p*le,s[13]=d*_+h*F+f*ie+p*xe,s[2]=g*R+x*v+m*j+u*V,s[6]=g*A+x*b+m*J+u*ae,s[10]=g*C+x*N+m*W+u*le,s[14]=g*_+x*F+m*ie+u*xe,s[3]=E*R+T*v+M*j+D*V,s[7]=E*A+T*b+M*J+D*ae,s[11]=E*C+T*N+M*W+D*le,s[15]=E*_+T*F+M*ie+D*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*p-i*c*p)+x*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*d-s*c*d)+m*(+t*l*h-t*a*p-s*o*h+i*o*p+s*a*d-i*l*d)+u*(-r*a*d-t*c*h+t*a*f+r*o*h-i*o*f+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],E=h*m*l-x*f*l+x*c*p-a*m*p-h*c*u+a*f*u,T=g*f*l-d*m*l-g*c*p+o*m*p+d*c*u-o*f*u,M=d*x*l-g*h*l+g*a*p-o*x*p-d*a*u+o*h*u,D=g*h*c-d*x*c-g*a*f+o*x*f+d*a*m-o*h*m,R=t*E+i*T+r*M+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(x*f*s-h*m*s-x*r*p+i*m*p+h*r*u-i*f*u)*A,e[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*u+i*c*u)*A,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*p-i*c*p)*A,e[4]=T*A,e[5]=(d*m*s-g*f*s+g*r*p-t*m*p-d*r*u+t*f*u)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*u-t*c*u)*A,e[7]=(o*f*s-d*c*s+d*r*l-t*f*l-o*r*p+t*c*p)*A,e[8]=M*A,e[9]=(g*h*s-d*x*s-g*i*p+t*x*p+d*i*u-t*h*u)*A,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*u+t*a*u)*A,e[11]=(d*a*s-o*h*s-d*i*l+t*h*l+o*i*p-t*a*p)*A,e[12]=D*A,e[13]=(d*x*r-g*h*r+g*i*f-t*x*f-d*i*m+t*h*m)*A,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*m-t*a*m)*A,e[15]=(o*h*r-d*a*r+d*i*c-t*h*c-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,h=a+a,f=s*l,p=s*d,g=s*h,x=o*d,m=o*h,u=a*h,E=c*l,T=c*d,M=c*h,D=i.x,R=i.y,A=i.z;return r[0]=(1-(x+u))*D,r[1]=(p+M)*D,r[2]=(g-T)*D,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(f+u))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(g+T)*A,r[9]=(m-E)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ri.set(r[0],r[1],r[2]).length();const o=ri.set(r[4],r[5],r[6]).length(),a=ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);const l=1/s,d=1/o,h=1/a;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=d,Wt.elements[5]*=d,Wt.elements[6]*=d,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=fn){const c=this.elements,l=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===fn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fn){const c=this.elements,l=1/(t-e),d=1/(i-r),h=1/(o-s),f=(t+e)*l,p=(i+r)*d;let g,x;if(a===fn)g=(o+s)*h,x=-2*h;else if(a===Xr)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ri=new G,Wt=new ft,Vh=new G(0,0,0),Hh=new G(1,1,1),yn=new G,_r=new G,Nt=new G,ja=new ft,$a=new nr;class vn{constructor(e=0,t=0,i=0,r=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ja,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $a.setFromEuler(this),this.setFromQuaternion($a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gh=0;const Ya=new G,si=new nr,on=new ft,xr=new G,Bi=new G,Wh=new G,Xh=new nr,Ka=new G(1,0,0),Za=new G(0,1,0),Ja=new G(0,0,1),Qa={type:"added"},qh={type:"removed"},oi={type:"childadded",child:null},gs={type:"childremoved",child:null};class Ft extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new G,t=new vn,i=new nr,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new ke}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(Ka,e)}rotateY(e){return this.rotateOnAxis(Za,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return Ya.copy(e).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ka,e)}translateY(e){return this.translateOnAxis(Za,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xr.copy(e):xr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Bi,xr,this.up):on.lookAt(xr,Bi,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),si.setFromRotationMatrix(on),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qa),oi.child=e,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qh),gs.child=e,this.dispatchEvent(gs),gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qa),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new G(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new G,an=new G,vs=new G,ln=new G,ai=new G,li=new G,el=new G,_s=new G,xs=new G,Ss=new G,Ms=new dt,ys=new dt,Es=new dt;class jt{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xt.subVectors(r,t),an.subVectors(i,t),vs.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(an),c=Xt.dot(vs),l=an.dot(an),d=an.dot(vs),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-a*d)*f,g=(o*d-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ln.x),c.addScaledVector(o,ln.y),c.addScaledVector(a,ln.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ms.setScalar(0),ys.setScalar(0),Es.setScalar(0),Ms.fromBufferAttribute(e,t),ys.fromBufferAttribute(e,i),Es.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ms,s.x),o.addScaledVector(ys,s.y),o.addScaledVector(Es,s.z),o}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),an.subVectors(e,t),Xt.cross(an).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Xt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ai.subVectors(r,i),li.subVectors(s,i),_s.subVectors(e,i);const c=ai.dot(_s),l=li.dot(_s);if(c<=0&&l<=0)return t.copy(i);xs.subVectors(e,r);const d=ai.dot(xs),h=li.dot(xs);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(ai,o);Ss.subVectors(e,s);const p=ai.dot(Ss),g=li.dot(Ss);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(li,a);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return el.subVectors(s,r),a=(h-d)/(h-d+(p-g)),t.copy(r).addScaledVector(el,a);const u=1/(m+x+f);return o=x*u,a=f*u,t.copy(i).addScaledVector(ai,o).addScaledVector(li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ts(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Rh(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ts(o,s,e+1/3),this.g=Ts(o,s,e),this.b=Ts(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=mc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ze.workingToColorSpace(xt.copy(this),e),Math.round(je(xt.r*255,0,255))*65536+Math.round(je(xt.g*255,0,255))*256+Math.round(je(xt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,s=xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Vt){Ze.workingToColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(Sr);const i=os(En.h,Sr.h,t),r=os(En.s,Sr.s,t),s=os(En.l,Sr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new nt;nt.NAMES=mc;let jh=0;class $r extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=xi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=qs,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==Cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xs&&(i.blendSrc=this.blendSrc),this.blendDst!==qs&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gc extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new G,Mr=new Je;let $h=0;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Va,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}}class vc extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _c extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yn extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Yh=0;const kt=new ft,bs=new Ft,ci=new G,Ot=new ir,zi=new ir,gt=new G;class Zn extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hc(e)?_c:vc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zi.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ot.min,zi.min),Ot.expandByPoint(gt),gt.addVectors(Ot.max,zi.max),Ot.expandByPoint(gt)):(Ot.expandByPoint(zi.min),Ot.expandByPoint(zi.max))}Ot.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)gt.fromBufferAttribute(a,l),c&&(ci.fromBufferAttribute(e,l),gt.add(ci)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new G,c[C]=new G;const l=new G,d=new G,h=new G,f=new Je,p=new Je,g=new Je,x=new G,m=new G;function u(C,_,v){l.fromBufferAttribute(i,C),d.fromBufferAttribute(i,_),h.fromBufferAttribute(i,v),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,_),g.fromBufferAttribute(s,v),d.sub(l),h.sub(l),p.sub(f),g.sub(f);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(b),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(b),a[C].add(x),a[_].add(x),a[v].add(x),c[C].add(m),c[_].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,_=E.length;C<_;++C){const v=E[C],b=v.start,N=v.count;for(let F=b,j=b+N;F<j;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new G,M=new G,D=new G,R=new G;function A(C){D.fromBufferAttribute(r,C),R.copy(D);const _=a[C];T.copy(_),T.sub(D.multiplyScalar(D.dot(_))).normalize(),M.crossVectors(R,_);const b=M.dot(c[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,b)}for(let C=0,_=E.length;C<_;++C){const v=E[C],b=v.start,N=v.count;for(let F=b,j=b+N;F<j;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,o=new G,a=new G,c=new G,l=new G,d=new G,h=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(d),c.add(d),l.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,h=a.normalized,f=new l.constructor(c.length*d);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*d;for(let u=0;u<d;u++)f[g++]=l[p++]}return new en(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,h=l.length;d<h;d++){const f=l[d],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tl=new ft,Nn=new kh,yr=new ia,nl=new G,Er=new G,Tr=new G,br=new G,ws=new G,wr=new G,il=new G,Ar=new G;class $t extends Ft{constructor(e=new Zn,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],h=s[c];d!==0&&(ws.fromBufferAttribute(h,e),o?wr.addScaledVector(ws,d):wr.addScaledVector(ws.sub(t),d))}t.add(wr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(yr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(yr,nl)===null||Nn.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(tl),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=o[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,D=T;M<D;M+=3){const R=a.getX(M),A=a.getX(M+1),C=a.getX(M+2);r=Rr(this,u,e,i,l,d,h,R,A,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const E=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);r=Rr(this,o,e,i,l,d,h,E,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=o[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,D=T;M<D;M+=3){const R=M,A=M+1,C=M+2;r=Rr(this,u,e,i,l,d,h,R,A,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const E=m,T=m+1,M=m+2;r=Rr(this,o,e,i,l,d,h,E,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Kh(n,e,t,i,r,s,o,a){let c;if(e.side===Lt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Cn,a),c===null)return null;Ar.copy(a),Ar.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ar);return l<t.near||l>t.far?null:{distance:l,point:Ar.clone(),object:n}}function Rr(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Er),n.getVertexPosition(c,Tr),n.getVertexPosition(l,br);const d=Kh(n,e,t,i,Er,Tr,br,il);if(d){const h=new G;jt.getBarycoord(il,Er,Tr,br,h),r&&(d.uv=jt.getInterpolatedAttribute(r,a,c,l,h,new Je)),s&&(d.uv1=jt.getInterpolatedAttribute(s,a,c,l,h,new Je)),o&&(d.normal=jt.getInterpolatedAttribute(o,a,c,l,h,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new G,materialIndex:0};jt.getNormal(Er,Tr,br,f.normal),d.face=f,d.barycoord=h}return d}class rr extends Zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yn(l,3)),this.setAttribute("normal",new Yn(d,3)),this.setAttribute("uv",new Yn(h,2));function g(x,m,u,E,T,M,D,R,A,C,_){const v=M/A,b=D/C,N=M/2,F=D/2,j=R/2,J=A+1,W=C+1;let ie=0,V=0;const ae=new G;for(let le=0;le<W;le++){const xe=le*b-F;for(let Ee=0;Ee<J;Ee++){const Te=Ee*v-N;ae[x]=Te*E,ae[m]=xe*T,ae[u]=j,l.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[u]=R>0?1:-1,d.push(ae.x,ae.y,ae.z),h.push(Ee/A),h.push(1-le/C),ie+=1}}for(let le=0;le<C;le++)for(let xe=0;xe<A;xe++){const Ee=f+xe+J*le,Te=f+xe+J*(le+1),$=f+(xe+1)+J*(le+1),Y=f+(xe+1)+J*le;c.push(Ee,Te,Y),c.push(Te,$,Y),V+=6}a.addGroup(p,V,_),p+=V,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=Ai(n[t]);for(const r in i)e[r]=i[r]}return e}function Zh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Jh={clone:Ai,merge:Et};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sc extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new G,rl=new Je,sl=new Je;class qt extends Sc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,rl,sl),t.subVectors(sl,rl)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,di=1;class tf extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(ui,di,e,t);r.layers=this.layers,this.add(r);const s=new qt(ui,di,e,t);s.layers=this.layers,this.add(s);const o=new qt(ui,di,e,t);o.layers=this.layers,this.add(o);const a=new qt(ui,di,e,t);a.layers=this.layers,this.add(a);const c=new qt(ui,di,e,t);c.layers=this.layers,this.add(c);const l=new qt(ui,di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mc extends Dt{constructor(e=[],t=Ti,i,r,s,o,a,c,l,d){super(e,t,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nf extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rr(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:Ai(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:wn});s.uniforms.tEquirect.value=t;const o=new $t(r,s),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=St),new tf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Cr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rf={type:"move"};class As{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class yc extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rs=new G,sf=new G,of=new ke;class zn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Rs.subVectors(i,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||of.getNormalMatrix(e),r=this.coplanarPoint(Rs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new ia,af=new Je(.5,.5),Pr=new G;class Ec{constructor(e=new zn,t=new zn,i=new zn,r=new zn,s=new zn,o=new zn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],d=r[5],h=r[6],f=r[7],p=r[8],g=r[9],x=r[10],m=r[11],u=r[12],E=r[13],T=r[14],M=r[15];if(i[0].setComponents(c-s,f-l,m-p,M-u).normalize(),i[1].setComponents(c+s,f+l,m+p,M+u).normalize(),i[2].setComponents(c+o,f+d,m+g,M+E).normalize(),i[3].setComponents(c-o,f-d,m-g,M-E).normalize(),i[4].setComponents(c-a,f-h,m-x,M-T).normalize(),t===fn)i[5].setComponents(c+a,f+h,m+x,M+T).normalize();else if(t===Xr)i[5].setComponents(a,h,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){On.center.set(0,0,0);const t=af.distanceTo(e.center);return On.radius=.7071067811865476+t,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Pr.x=r.normal.x>0?e.max.x:e.min.x,Pr.y=r.normal.y>0?e.max.y:e.min.y,Pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tc extends Dt{constructor(e,t,i=Kn,r,s,o,a=Yt,c=Yt,l,d=$i,h=1){if(d!==$i&&d!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ci extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,h=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let u=0;u<d;u++){const E=u*f-o;for(let T=0;T<l;T++){const M=T*h-s;g.push(M,-E,0),x.push(0,0,1),m.push(T/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){const T=E+l*u,M=E+l*(u+1),D=E+1+l*(u+1),R=E+1+l*u;p.push(T,M,R),p.push(M,D,R)}this.setIndex(p),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(x,3)),this.setAttribute("uv",new Yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.widthSegments,e.heightSegments)}}class lf extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cf extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ra extends Sc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uf extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ol(n,e,t,i){const r=df(i);switch(t){case oc:return n*e;case lc:return n*e/r.components*r.byteLength;case Qo:return n*e/r.components*r.byteLength;case cc:return n*e*2/r.components*r.byteLength;case ea:return n*e*2/r.components*r.byteLength;case ac:return n*e*3/r.components*r.byteLength;case Ct:return n*e*4/r.components*r.byteLength;case ta:return n*e*4/r.components*r.byteLength;case Or:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:case ao:return Math.max(n,16)*Math.max(e,8)/4;case ro:case oo:return Math.max(n,8)*Math.max(e,8)/2;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kr:case wo:case Ao:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uc:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Co:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function df(n){switch(n){case gn:case ic:return{byteLength:1,components:1};case qi:case rc:case er:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case Kn:case Ko:case Ht:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);function bc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hf(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const d=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,d);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,dp=`struct PhysicalMaterial {
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
}`,hp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,zm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:vf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:Sf,batching_pars_vertex:Mf,batching_vertex:yf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:bf,iridescence_fragment:wf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Lf,color_fragment:Df,color_pars_fragment:If,color_pars_vertex:Uf,color_vertex:Nf,common:Of,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Bf,displacementmap_pars_vertex:zf,displacementmap_vertex:kf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Hf,colorspace_fragment:Gf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:sp,envmap_vertex:Yf,fog_vertex:Kf,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:ep,lightmap_pars_fragment:tp,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:rp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:hp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:_p,map_fragment:xp,map_pars_fragment:Sp,map_particle_fragment:Mp,map_particle_pars_fragment:yp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:Tp,morphinstance_vertex:bp,morphcolor_vertex:wp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:Ip,normal_vertex:Up,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:kp,packing:Vp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Yp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Zp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:rm,tonemapping_pars_fragment:sm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:um,worldpos_vertex:dm,background_vert:hm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:vm,depth_vert:_m,depth_frag:xm,distanceRGBA_vert:Sm,distanceRGBA_frag:Mm,equirect_vert:ym,equirect_frag:Em,linedashed_vert:Tm,linedashed_frag:bm,meshbasic_vert:wm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:Im,meshphong_vert:Um,meshphong_frag:Nm,meshphysical_vert:Om,meshphysical_frag:Fm,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:km,points_frag:Vm,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Wm,sprite_frag:Xm},pe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Zt={basic:{uniforms:Et([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Et([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Et([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Et([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Et([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Et([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Et([pe.points,pe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Et([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Et([pe.common,pe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Et([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Et([pe.sprite,pe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Et([pe.common,pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Et([pe.lights,pe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Zt.physical={uniforms:Et([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Lr={r:0,b:0,g:0},Fn=new vn,qm=new ft;function jm(n,e,t,i,r,s,o){const a=new nt(0);let c=s===!0?0:1,l,d,h=null,f=0,p=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function x(T){let M=!1;const D=g(T);D===null?u(a,c):D&&D.isColor&&(u(D,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const D=g(M);D&&(D.isCubeTexture||D.mapping===jr)?(d===void 0&&(d=new $t(new rr(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ai(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Fn.copy(M.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(Fn)),d.material.toneMapped=Ze.getTransfer(D.colorSpace)!==tt,(h!==D||f!==D.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=D,f=D.version,p=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new $t(new Ci(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ai(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(D.colorSpace)!==tt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||f!==D.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=D,f=D.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,M){T.getRGB(Lr,xc(n)),i.buffers.color.setClear(Lr.r,Lr.g,Lr.b,M,o)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),c=M,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(a,c)},render:x,addToRenderList:m,dispose:E}}function $m(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(v,b,N,F,j){let J=!1;const W=h(F,N,b);s!==W&&(s=W,l(s.object)),J=p(v,F,N,j),J&&g(v,F,N,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(v,b,N,F),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function d(v){return n.deleteVertexArray(v)}function h(v,b,N){const F=N.wireframe===!0;let j=i[v.id];j===void 0&&(j={},i[v.id]=j);let J=j[b.id];J===void 0&&(J={},j[b.id]=J);let W=J[F];return W===void 0&&(W=f(c()),J[F]=W),W}function f(v){const b=[],N=[],F=[];for(let j=0;j<t;j++)b[j]=0,N[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:F,object:v,attributes:{},index:null}}function p(v,b,N,F){const j=s.attributes,J=b.attributes;let W=0;const ie=N.getAttributes();for(const V in ie)if(ie[V].location>=0){const le=j[V];let xe=J[V];if(xe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor)),le===void 0||le.attribute!==xe||xe&&le.data!==xe.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function g(v,b,N,F){const j={},J=b.attributes;let W=0;const ie=N.getAttributes();for(const V in ie)if(ie[V].location>=0){let le=J[V];le===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));const xe={};xe.attribute=le,le&&le.data&&(xe.data=le.data),j[V]=xe,W++}s.attributes=j,s.attributesNum=W,s.index=F}function x(){const v=s.newAttributes;for(let b=0,N=v.length;b<N;b++)v[b]=0}function m(v){u(v,0)}function u(v,b){const N=s.newAttributes,F=s.enabledAttributes,j=s.attributeDivisors;N[v]=1,F[v]===0&&(n.enableVertexAttribArray(v),F[v]=1),j[v]!==b&&(n.vertexAttribDivisor(v,b),j[v]=b)}function E(){const v=s.newAttributes,b=s.enabledAttributes;for(let N=0,F=b.length;N<F;N++)b[N]!==v[N]&&(n.disableVertexAttribArray(N),b[N]=0)}function T(v,b,N,F,j,J,W){W===!0?n.vertexAttribIPointer(v,b,N,j,J):n.vertexAttribPointer(v,b,N,F,j,J)}function M(v,b,N,F){x();const j=F.attributes,J=N.getAttributes(),W=b.defaultAttributeValues;for(const ie in J){const V=J[ie];if(V.location>=0){let ae=j[ie];if(ae===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),ae!==void 0){const le=ae.normalized,xe=ae.itemSize,Ee=e.get(ae);if(Ee===void 0)continue;const Te=Ee.buffer,$=Ee.type,Y=Ee.bytesPerElement,ce=$===n.INT||$===n.UNSIGNED_INT||ae.gpuType===Ko;if(ae.isInterleavedBufferAttribute){const se=ae.data,fe=se.stride,Re=ae.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<V.locationSize;we++)u(V.location+we,se.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<V.locationSize;we++)m(V.location+we);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let we=0;we<V.locationSize;we++)T(V.location+we,xe/V.locationSize,$,le,fe*Y,(Re+xe/V.locationSize*we)*Y,ce)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)u(V.location+se,ae.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let se=0;se<V.locationSize;se++)T(V.location+se,xe/V.locationSize,$,le,xe*Y,xe/V.locationSize*se*Y,ce)}}else if(W!==void 0){const le=W[ie];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(V.location,le);break;case 3:n.vertexAttrib3fv(V.location,le);break;case 4:n.vertexAttrib4fv(V.location,le);break;default:n.vertexAttrib1fv(V.location,le)}}}}E()}function D(){C();for(const v in i){const b=i[v];for(const N in b){const F=b[N];for(const j in F)d(F[j].object),delete F[j];delete b[N]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const b=i[v.id];for(const N in b){const F=b[N];for(const j in F)d(F[j].object),delete F[j];delete b[N]}delete i[v.id]}function A(v){for(const b in i){const N=i[b];if(N[v.id]===void 0)continue;const F=N[v.id];for(const j in F)d(F[j].object),delete F[j];delete N[v.id]}}function C(){_(),o=!0,s!==r&&(s=r,l(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Ym(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function o(l,d,h){h!==0&&(n.drawArraysInstanced(i,l,d,h),t.update(d,i,h))}function a(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,i,1)}function c(l,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,d,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Km(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Ct&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ht&&!C)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:D,maxSamples:R}}function Zm(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):l();else{const E=s?0:i,T=E*4;let M=u.clippingState||null;c.value=M,M=d(g,f,T,p);for(let D=0;D!==T;++D)M[D]=t[D];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const u=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,M=p;T!==x;++T,M+=4)o.copy(h[T]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Jm(n){let e=new WeakMap;function t(o,a){return a===eo?o.mapping=Ti:a===to&&(o.mapping=bi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eo||a===to)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new nf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const gi=4,al=[.125,.215,.35,.446,.526,.582],Gn=20,Cs=new ra,ll=new nt;let Ps=null,Ls=0,Ds=0,Is=!1;const kn=(1+Math.sqrt(5))/2,hi=1/kn,cl=[new G(-kn,hi,0),new G(kn,hi,0),new G(-hi,0,kn),new G(hi,0,kn),new G(0,kn,-hi),new G(0,kn,hi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Qm=new G;class ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Qm}=s;Ps=this._renderer.getRenderTarget(),Ls=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ps,Ls,Ds),this._renderer.xr.enabled=Is,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ps=this._renderer.getRenderTarget(),Ls=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:er,format:Ct,colorSpace:wi,depthBuffer:!1},r=dl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(s)),this._blurMaterial=tg(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Cs)}_sceneToCubeUV(e,t,i,r,s){const c=new qt(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ll),h.toneMapping=An,h.autoClear=!1;const g=new gc({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),x=new $t(new rr,g);let m=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,m=!0):(g.color.copy(ll),m=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[E],s.y,s.z)):T===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[E]));const M=this._cubeSize;Dr(r,T*M,E>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(x,c),h.render(e,c)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ti||e.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Dr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Cs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cl[(r-s-1)%cl.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new $t(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):Gn;m>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const u=[];let E=0;for(let A=0;A<Gn;++A){const C=A/x,_=Math.exp(-C*C/2);u.push(_),A===0?E+=_:A<m&&(E+=2*_)}for(let A=0;A<u.length;A++)u[A]=u[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const M=this._sizeLods[r],D=3*M*(r>T-gi?r-T+gi:0),R=4*(this._cubeSize-M);Dr(t,D,R,3*M,2*M),c.setRenderTarget(t),c.render(h,Cs)}}function eg(n){const e=[],t=[],i=[];let r=n;const s=n-gi+1+al.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-gi?c=al[o-n+gi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,x=3,m=2,u=1,E=new Float32Array(x*g*p),T=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,C=R>2?0:-1,_=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(_,x*g*R),T.set(f,m*g*R);const v=[R,R,R,R,R,R];M.set(v,u*g*R)}const D=new Zn;D.setAttribute("position",new en(E,x)),D.setAttribute("uv",new en(T,m)),D.setAttribute("faceIndex",new en(M,u)),e.push(D),r>gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dl(n,e,t){const i=new Qt(n,e,t);return i.texture.mapping=jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tg(n,e,t){const i=new Float32Array(Gn),r=new G(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function hl(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function fl(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function sa(){return`

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
	`}function ng(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===eo||c===to,d=c===Ti||c===bi;if(l||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ul(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new ul(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ig(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Si("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rg(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let T=0,M=E.length;T<M;T+=3){const D=E[T+0],R=E[T+1],A=E[T+2];f.push(D,R,R,A,A,D)}}else if(g!==void 0){const E=g.array;x=g.version;for(let T=0,M=E.length/3-1;T<M;T+=3){const D=T+0,R=T+1,A=T+2;f.push(D,R,R,A,A,D)}}else return;const m=new(hc(f)?_c:vc)(f,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function sg(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function h(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let u=0;for(let E=0;E<g;E++)u+=p[E]*x[E];t.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function og(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ag(n,e,t){const i=new WeakMap,r=new dt;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let p=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",p)};f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*R*4*h),C=new fc(A,D,R,h);C.type=Ht,C.needsUpdate=!0;const _=M*4;for(let v=0;v<h;v++){const b=u[v],N=E[v],F=T[v],j=D*R*4*v;for(let J=0;J<b.count;J++){const W=J*_;g===!0&&(r.fromBufferAttribute(b,J),A[j+W+0]=r.x,A[j+W+1]=r.y,A[j+W+2]=r.z,A[j+W+3]=0),x===!0&&(r.fromBufferAttribute(N,J),A[j+W+4]=r.x,A[j+W+5]=r.y,A[j+W+6]=r.z,A[j+W+7]=0),m===!0&&(r.fromBufferAttribute(F,J),A[j+W+8]=r.x,A[j+W+9]=r.y,A[j+W+10]=r.z,A[j+W+11]=F.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Je(D,R)},i.set(a,f),a.addEventListener("dispose",p)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function lg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const wc=new Dt,pl=new Tc(1,1),Ac=new fc,Rc=new Bh,Cc=new Mc,ml=[],gl=[],vl=new Float32Array(16),_l=new Float32Array(9),xl=new Float32Array(4);function Pi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ml[r];if(s===void 0&&(s=new Float32Array(r),ml[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yr(n,e){let t=gl[e];t===void 0&&(t=new Int32Array(e),gl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;xl.set(i),n.uniformMatrix2fv(this.addr,!1,xl),mt(t,i)}}function pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;_l.set(i),n.uniformMatrix3fv(this.addr,!1,_l),mt(t,i)}}function mg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;vl.set(i),n.uniformMatrix4fv(this.addr,!1,vl),mt(t,i)}}function gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Sg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function Tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pl.compareFunction=dc,s=pl):s=wc,t.setTexture2D(e||s,r)}function bg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rc,r)}function wg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cc,r)}function Ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ac,r)}function Rg(n){switch(n){case 5126:return cg;case 35664:return ug;case 35665:return dg;case 35666:return hg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return vg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return Sg;case 36294:return Mg;case 36295:return yg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(n,e){n.uniform1fv(this.addr,e)}function Pg(n,e){const t=Pi(e,this.size,2);n.uniform2fv(this.addr,t)}function Lg(n,e){const t=Pi(e,this.size,3);n.uniform3fv(this.addr,t)}function Dg(n,e){const t=Pi(e,this.size,4);n.uniform4fv(this.addr,t)}function Ig(n,e){const t=Pi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ug(n,e){const t=Pi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ng(n,e){const t=Pi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Og(n,e){n.uniform1iv(this.addr,e)}function Fg(n,e){n.uniform2iv(this.addr,e)}function Bg(n,e){n.uniform3iv(this.addr,e)}function zg(n,e){n.uniform4iv(this.addr,e)}function kg(n,e){n.uniform1uiv(this.addr,e)}function Vg(n,e){n.uniform2uiv(this.addr,e)}function Hg(n,e){n.uniform3uiv(this.addr,e)}function Gg(n,e){n.uniform4uiv(this.addr,e)}function Wg(n,e,t){const i=this.cache,r=e.length,s=Yr(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||wc,s[o])}function Xg(n,e,t){const i=this.cache,r=e.length,s=Yr(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Rc,s[o])}function qg(n,e,t){const i=this.cache,r=e.length,s=Yr(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Cc,s[o])}function jg(n,e,t){const i=this.cache,r=e.length,s=Yr(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ac,s[o])}function $g(n){switch(n){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ig;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Og;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Vg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return jg}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}}class Kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$g(t.type)}}class Zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Us=/(\w+)(\])?(\[|\.)?/g;function Sl(n,e){n.seq.push(e),n.map[e.id]=e}function Jg(n,e,t){const i=n.name,r=i.length;for(Us.lastIndex=0;;){const s=Us.exec(i),o=Us.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Sl(t,l===void 0?new Yg(a,n,e):new Kg(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Zg(a),Sl(t,h)),t=h}}}class Vr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Jg(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ml(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qg=37297;let ev=0;function tv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yl=new ke;function nv(n){Ze._getMatrix(yl,Ze.workingColorSpace,n);const e=`mat3( ${yl.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Wr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function El(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(e),o)}else return r}function iv(n,e){const t=nv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rv(n,e){let t;switch(e){case ch:t="Linear";break;case uh:t="Reinhard";break;case dh:t="Cineon";break;case hh:t="ACESFilmic";break;case ph:t="AgX";break;case mh:t="Neutral";break;case fh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ir=new G;function sv(){Ze.getLuminanceCoefficients(Ir);const n=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function av(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ki(n){return n!==""}function Tl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(n){return n.replace(cv,dv)}const uv=new Map;function dv(n,e){let t=He[e];if(t===void 0){const i=uv.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(n){return n.replace(hv,fv)}function fv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Al(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function mv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ti:case bi:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===bi&&(e="ENVMAP_MODE_REFRACTION"),e}function vv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case ah:e="ENVMAP_BLENDING_MIX";break;case lh:e="ENVMAP_BLENDING_ADD";break}return e}function _v(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xv(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=pv(t),l=mv(t),d=gv(t),h=vv(t),f=_v(t),p=ov(t),g=av(s),x=r.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ki).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ki).join(`
`),u.length>0&&(u+=`
`)):(m=[Al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),u=[Al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?He.tonemapping_pars_fragment:"",t.toneMapping!==An?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),o=Do(o),o=Tl(o,t),o=bl(o,t),a=Do(a),a=Tl(a,t),a=bl(a,t),o=wl(o),a=wl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=E+m+o,M=E+u+a,D=Ml(r,r.VERTEX_SHADER,T),R=Ml(r,r.FRAGMENT_SHADER,M);r.attachShader(x,D),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(b){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(D).trim(),j=r.getShaderInfoLog(R).trim();let J=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,D,R);else{const ie=El(r,D,"vertex"),V=El(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+ie+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||j==="")&&(W=!1);W&&(b.diagnostics={runnable:J,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:j,prefix:u}})}r.deleteShader(D),r.deleteShader(R),C=new Vr(r,x),_=lv(r,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,Qg)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}let Sv=0;class Mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yv(e),t.set(e,i)),i}}class yv{constructor(e){this.id=Sv++,this.code=e,this.usedTimes=0}}function Ev(n,e,t,i,r,s,o){const a=new pc,c=new Mv,l=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,v,b,N,F){const j=N.fog,J=F.geometry,W=_.isMeshStandardMaterial?N.environment:null,ie=(_.isMeshStandardMaterial?t:e).get(_.envMap||W),V=ie&&ie.mapping===jr?ie.image.height:null,ae=g[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const le=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xe=le!==void 0?le.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let Te,$,Y,ce;if(ae){const Ye=Zt[ae];Te=Ye.vertexShader,$=Ye.fragmentShader}else Te=_.vertexShader,$=_.fragmentShader,c.update(_),Y=c.getVertexShaderID(_),ce=c.getFragmentShaderID(_);const se=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,Ge=!!_.map,$e=!!_.matcap,We=!!ie,P=!!_.aoMap,at=!!_.lightMap,ze=!!_.bumpMap,Ve=!!_.normalMap,_e=!!_.displacementMap,Ne=!!_.emissiveMap,ye=!!_.metalnessMap,Ue=!!_.roughnessMap,qe=_.anisotropy>0,w=_.clearcoat>0,S=_.dispersion>0,O=_.iridescence>0,X=_.sheen>0,q=_.transmission>0,z=qe&&!!_.anisotropyMap,re=w&&!!_.clearcoatMap,ne=w&&!!_.clearcoatNormalMap,ge=w&&!!_.clearcoatRoughnessMap,Ae=O&&!!_.iridescenceMap,ee=O&&!!_.iridescenceThicknessMap,Se=X&&!!_.sheenColorMap,De=X&&!!_.sheenRoughnessMap,Ce=!!_.specularMap,de=!!_.specularColorMap,Oe=!!_.specularIntensityMap,L=q&&!!_.transmissionMap,ue=q&&!!_.thicknessMap,te=!!_.gradientMap,he=!!_.alphaMap,Q=_.alphaTest>0,Z=!!_.alphaHash,me=!!_.extensions;let Pe=An;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const Qe={shaderID:ae,shaderType:_.type,shaderName:_.name,vertexShader:Te,fragmentShader:$,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:wi,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:$e,envMap:We,envMapMode:We&&ie.mapping,envMapCubeUVHeight:V,aoMap:P,lightMap:at,bumpMap:ze,normalMap:Ve,displacementMap:f&&_e,emissiveMap:Ne,normalMapObjectSpace:Ve&&_.normalMapType===Sh,normalMapTangentSpace:Ve&&_.normalMapType===xh,metalnessMap:ye,roughnessMap:Ue,anisotropy:qe,anisotropyMap:z,clearcoat:w,clearcoatMap:re,clearcoatNormalMap:ne,clearcoatRoughnessMap:ge,dispersion:S,iridescence:O,iridescenceMap:Ae,iridescenceThicknessMap:ee,sheen:X,sheenColorMap:Se,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:de,specularIntensityMap:Oe,transmission:q,transmissionMap:L,thicknessMap:ue,gradientMap:te,opaque:_.transparent===!1&&_.blending===xi&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:Q,alphaHash:Z,combine:_.combine,mapUv:Ge&&x(_.map.channel),aoMapUv:P&&x(_.aoMap.channel),lightMapUv:at&&x(_.lightMap.channel),bumpMapUv:ze&&x(_.bumpMap.channel),normalMapUv:Ve&&x(_.normalMap.channel),displacementMapUv:_e&&x(_.displacementMap.channel),emissiveMapUv:Ne&&x(_.emissiveMap.channel),metalnessMapUv:ye&&x(_.metalnessMap.channel),roughnessMapUv:Ue&&x(_.roughnessMap.channel),anisotropyMapUv:z&&x(_.anisotropyMap.channel),clearcoatMapUv:re&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(_.sheenRoughnessMap.channel),specularMapUv:Ce&&x(_.specularMap.channel),specularColorMapUv:de&&x(_.specularColorMap.channel),specularIntensityMapUv:Oe&&x(_.specularIntensityMap.channel),transmissionMapUv:L&&x(_.transmissionMap.channel),thicknessMapUv:ue&&x(_.thicknessMap.channel),alphaMapUv:he&&x(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ve||qe),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(Ge||he),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ee,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===tt,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===Lt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function u(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const b in _.defines)v.push(b),v.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(E(v,_),T(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function E(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function T(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){const v=g[_.type];let b;if(v){const N=Zt[v];b=Jh.clone(N.uniforms)}else b=_.uniforms;return b}function D(_,v){let b;for(let N=0,F=d.length;N<F;N++){const j=d[N];if(j.cacheKey===v){b=j,++b.usedTimes;break}}return b===void 0&&(b=new xv(n,v,_,s),d.push(b)),b}function R(_){if(--_.usedTimes===0){const v=d.indexOf(_);d[v]=d[d.length-1],d.pop(),_.destroy()}}function A(_){c.remove(_)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:D,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:C}}function Tv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,g,x,m){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,f,p,g,x,m){const u=o(h,f,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(h,f,p,g,x,m){const u=o(h,f,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,f){t.length>1&&t.sort(h||bv),i.length>1&&i.sort(f||Rl),r.length>1&&r.sort(f||Rl)}function d(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function wv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cl,n.set(i,[o])):r>=s.length?(o=new Cl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new nt};break;case"SpotLight":t={position:new G,direction:new G,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function Rv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cv=0;function Pv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lv(n){const e=new Av,t=Rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const r=new G,s=new ft,o=new ft;function a(l){let d=0,h=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,E=0,T=0,M=0,D=0,R=0,A=0;l.sort(Pv);for(let _=0,v=l.length;_<v;_++){const b=l[_],N=b.color,F=b.intensity,j=b.distance,J=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=N.r*F,h+=N.g*F,f+=N.b*F;else if(b.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(b.sh.coefficients[W],F);A++}else if(b.isDirectionalLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const ie=b.shadow,V=t.get(b);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=b.shadow.matrix,E++}i.directional[p]=W,p++}else if(b.isSpotLight){const W=e.get(b);W.position.setFromMatrixPosition(b.matrixWorld),W.color.copy(N).multiplyScalar(F),W.distance=j,W.coneCos=Math.cos(b.angle),W.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),W.decay=b.decay,i.spot[x]=W;const ie=b.shadow;if(b.map&&(i.spotLightMap[D]=b.map,D++,ie.updateMatrices(b),b.castShadow&&R++),i.spotLightMatrix[x]=ie.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=J,M++}x++}else if(b.isRectAreaLight){const W=e.get(b);W.color.copy(N).multiplyScalar(F),W.halfWidth.set(b.width*.5,0,0),W.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=W,m++}else if(b.isPointLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),W.distance=b.distance,W.decay=b.decay,b.castShadow){const ie=b.shadow,V=t.get(b);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=b.shadow.matrix,T++}i.point[g]=W,g++}else if(b.isHemisphereLight){const W=e.get(b);W.skyColor.copy(b.color).multiplyScalar(F),W.groundColor.copy(b.groundColor).multiplyScalar(F),i.hemi[u]=W,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==M||C.numSpotMaps!==D||C.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=M,C.numSpotMaps=D,C.numLightProbes=A,i.version=Cv++)}function c(l,d){let h=0,f=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const T=l[u];if(T.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(T.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Pl(n){const e=new Lv(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Dv(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Pl(n),e.set(r,[a])):s>=o.length?(a=new Pl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uv=`uniform sampler2D shadow_pass;
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
}`;function Nv(n,e,t){let i=new Ec;const r=new Je,s=new Je,o=new dt,a=new lf({depthPacking:_h}),c=new cf,l={},d=t.maxTextureSize,h={[Cn]:Lt,[Lt]:Cn,[dn]:dn},f=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Iv,fragmentShader:Uv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let u=this.type;this.render=function(R,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const _=n.getRenderTarget(),v=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),N=n.state;N.setBlending(wn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=u!==un&&this.type===un,j=u===un&&this.type!==un;for(let J=0,W=R.length;J<W;J++){const ie=R[J],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ae=V.getFrameExtents();if(r.multiply(ae),s.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ae.x),r.x=s.x*ae.x,V.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ae.y),r.y=s.y*ae.y,V.mapSize.y=s.y)),V.map===null||F===!0||j===!0){const xe=this.type!==un?{minFilter:Yt,magFilter:Yt}:{};V.map!==null&&V.map.dispose(),V.map=new Qt(r.x,r.y,xe),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const le=V.getViewportCount();for(let xe=0;xe<le;xe++){const Ee=V.getViewport(xe);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),N.viewport(o),V.updateMatrices(ie,xe),i=V.getFrustum(),M(A,C,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===un&&E(V,C),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(_,v,b)};function E(R,A){const C=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qt(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,C,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,C,p,x,null)}function T(R,A,C,_){let v=null;const b=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)v=b;else if(v=C.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=v.uuid,F=A.uuid;let j=l[N];j===void 0&&(j={},l[N]=j);let J=j[F];J===void 0&&(J=v.clone(),j[F]=J,A.addEventListener("dispose",D)),v=J}if(v.visible=A.visible,v.wireframe=A.wireframe,_===un?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=n.properties.get(v);N.light=C}return v}function M(R,A,C,_,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===un)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const F=e.update(R),j=R.material;if(Array.isArray(j)){const J=F.groups;for(let W=0,ie=J.length;W<ie;W++){const V=J[W],ae=j[V.materialIndex];if(ae&&ae.visible){const le=T(R,ae,_,v);R.onBeforeShadow(n,R,A,C,F,le,V),n.renderBufferDirect(C,null,F,le,R,V),R.onAfterShadow(n,R,A,C,F,le,V)}}}else if(j.visible){const J=T(R,j,_,v);R.onBeforeShadow(n,R,A,C,F,J,null),n.renderBufferDirect(C,null,F,J,R,null),R.onAfterShadow(n,R,A,C,F,J,null)}}const N=R.children;for(let F=0,j=N.length;F<j;F++)M(N[F],A,C,_,v)}function D(R){R.target.removeEventListener("dispose",D);for(const C in l){const _=l[C],v=R.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}const Ov={[js]:$s,[Ys]:Js,[Ks]:Qs,[Ei]:Zs,[$s]:js,[Js]:Ys,[Qs]:Ks,[Zs]:Ei};function Fv(n,e){function t(){let L=!1;const ue=new dt;let te=null;const he=new dt(0,0,0,0);return{setMask:function(Q){te!==Q&&!L&&(n.colorMask(Q,Q,Q,Q),te=Q)},setLocked:function(Q){L=Q},setClear:function(Q,Z,me,Pe,Qe){Qe===!0&&(Q*=Pe,Z*=Pe,me*=Pe),ue.set(Q,Z,me,Pe),he.equals(ue)===!1&&(n.clearColor(Q,Z,me,Pe),he.copy(ue))},reset:function(){L=!1,te=null,he.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,te=null,he=null,Q=null;return{setReversed:function(Z){if(ue!==Z){const me=e.get("EXT_clip_control");Z?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ue=Z;const Pe=Q;Q=null,this.setClear(Pe)}},getReversed:function(){return ue},setTest:function(Z){Z?se(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Z){te!==Z&&!L&&(n.depthMask(Z),te=Z)},setFunc:function(Z){if(ue&&(Z=Ov[Z]),he!==Z){switch(Z){case js:n.depthFunc(n.NEVER);break;case $s:n.depthFunc(n.ALWAYS);break;case Ys:n.depthFunc(n.LESS);break;case Ei:n.depthFunc(n.LEQUAL);break;case Ks:n.depthFunc(n.EQUAL);break;case Zs:n.depthFunc(n.GEQUAL);break;case Js:n.depthFunc(n.GREATER);break;case Qs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Z}},setLocked:function(Z){L=Z},setClear:function(Z){Q!==Z&&(ue&&(Z=1-Z),n.clearDepth(Z),Q=Z)},reset:function(){L=!1,te=null,he=null,Q=null,ue=!1}}}function r(){let L=!1,ue=null,te=null,he=null,Q=null,Z=null,me=null,Pe=null,Qe=null;return{setTest:function(Ye){L||(Ye?se(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ye){ue!==Ye&&!L&&(n.stencilMask(Ye),ue=Ye)},setFunc:function(Ye,Mt,vt){(te!==Ye||he!==Mt||Q!==vt)&&(n.stencilFunc(Ye,Mt,vt),te=Ye,he=Mt,Q=vt)},setOp:function(Ye,Mt,vt){(Z!==Ye||me!==Mt||Pe!==vt)&&(n.stencilOp(Ye,Mt,vt),Z=Ye,me=Mt,Pe=vt)},setLocked:function(Ye){L=Ye},setClear:function(Ye){Qe!==Ye&&(n.clearStencil(Ye),Qe=Ye)},reset:function(){L=!1,ue=null,te=null,he=null,Q=null,Z=null,me=null,Pe=null,Qe=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,E=null,T=null,M=null,D=null,R=null,A=new nt(0,0,0),C=0,_=!1,v=null,b=null,N=null,F=null,j=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ie>=2);let ae=null,le={};const xe=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Te=new dt().fromArray(xe),$=new dt().fromArray(Ee);function Y(L,ue,te,he){const Q=new Uint8Array(4),Z=n.createTexture();n.bindTexture(L,Z),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<te;me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ue+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return Z}const ce={};ce[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(Ei),ze(!1),Ve(Fa),se(n.CULL_FACE),P(wn);function se(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function fe(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Re(L,ue){return h[L]!==ue?(n.bindFramebuffer(L,ue),h[L]=ue,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function we(L,ue){let te=p,he=!1;if(L){te=f.get(ue),te===void 0&&(te=[],f.set(ue,te));const Q=L.textures;if(te.length!==Q.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,me=Q.length;Z<me;Z++)te[Z]=n.COLOR_ATTACHMENT0+Z;te.length=Q.length,he=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,he=!0);he&&n.drawBuffers(te)}function Ge(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const $e={[Hn]:n.FUNC_ADD,[Wd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};$e[qd]=n.MIN,$e[jd]=n.MAX;const We={[$d]:n.ZERO,[Yd]:n.ONE,[Kd]:n.SRC_COLOR,[Xs]:n.SRC_ALPHA,[nh]:n.SRC_ALPHA_SATURATE,[eh]:n.DST_COLOR,[Jd]:n.DST_ALPHA,[Zd]:n.ONE_MINUS_SRC_COLOR,[qs]:n.ONE_MINUS_SRC_ALPHA,[th]:n.ONE_MINUS_DST_COLOR,[Qd]:n.ONE_MINUS_DST_ALPHA,[ih]:n.CONSTANT_COLOR,[rh]:n.ONE_MINUS_CONSTANT_COLOR,[sh]:n.CONSTANT_ALPHA,[oh]:n.ONE_MINUS_CONSTANT_ALPHA};function P(L,ue,te,he,Q,Z,me,Pe,Qe,Ye){if(L===wn){x===!0&&(fe(n.BLEND),x=!1);return}if(x===!1&&(se(n.BLEND),x=!0),L!==Gd){if(L!==m||Ye!==_){if((u!==Hn||M!==Hn)&&(n.blendEquation(n.FUNC_ADD),u=Hn,M=Hn),Ye)switch(L){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ws:n.blendFunc(n.ONE,n.ONE);break;case Ba:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case za:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ba:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case za:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,T=null,D=null,R=null,A.set(0,0,0),C=0,m=L,_=Ye}return}Q=Q||ue,Z=Z||te,me=me||he,(ue!==u||Q!==M)&&(n.blendEquationSeparate($e[ue],$e[Q]),u=ue,M=Q),(te!==E||he!==T||Z!==D||me!==R)&&(n.blendFuncSeparate(We[te],We[he],We[Z],We[me]),E=te,T=he,D=Z,R=me),(Pe.equals(A)===!1||Qe!==C)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Qe),A.copy(Pe),C=Qe),m=L,_=!1}function at(L,ue){L.side===dn?fe(n.CULL_FACE):se(n.CULL_FACE);let te=L.side===Lt;ue&&(te=!te),ze(te),L.blending===xi&&L.transparent===!1?P(wn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const he=L.stencilWrite;a.setTest(he),he&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){v!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),v=L)}function Ve(L){L!==kd?(se(n.CULL_FACE),L!==b&&(L===Fa?n.cullFace(n.BACK):L===Vd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),b=L}function _e(L){L!==N&&(W&&n.lineWidth(L),N=L)}function Ne(L,ue,te){L?(se(n.POLYGON_OFFSET_FILL),(F!==ue||j!==te)&&(n.polygonOffset(ue,te),F=ue,j=te)):fe(n.POLYGON_OFFSET_FILL)}function ye(L){L?se(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function Ue(L){L===void 0&&(L=n.TEXTURE0+J-1),ae!==L&&(n.activeTexture(L),ae=L)}function qe(L,ue,te){te===void 0&&(ae===null?te=n.TEXTURE0+J-1:te=ae);let he=le[te];he===void 0&&(he={type:void 0,texture:void 0},le[te]=he),(he.type!==L||he.texture!==ue)&&(ae!==te&&(n.activeTexture(te),ae=te),n.bindTexture(L,ue||ce[L]),he.type=L,he.texture=ue)}function w(){const L=le[ae];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(L){Te.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Te.copy(L))}function De(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function Ce(L,ue){let te=l.get(ue);te===void 0&&(te=new WeakMap,l.set(ue,te));let he=te.get(L);he===void 0&&(he=n.getUniformBlockIndex(ue,L.name),te.set(L,he))}function de(L,ue){const he=l.get(ue).get(L);c.get(ue)!==he&&(n.uniformBlockBinding(ue,he,L.__bindingPointIndex),c.set(ue,he))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ae=null,le={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,E=null,T=null,M=null,D=null,R=null,A=new nt(0,0,0),C=0,_=!1,v=null,b=null,N=null,F=null,j=null,Te.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:fe,bindFramebuffer:Re,drawBuffers:we,useProgram:Ge,setBlending:P,setMaterial:at,setFlipSided:ze,setCullFace:Ve,setLineWidth:_e,setPolygonOffset:Ne,setScissorTest:ye,activeTexture:Ue,bindTexture:qe,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Ae,texImage3D:ee,updateUBOMapping:Ce,uniformBlockBinding:de,texStorage2D:ne,texStorage3D:ge,texSubImage2D:X,texSubImage3D:q,compressedTexSubImage2D:z,compressedTexSubImage3D:re,scissor:Se,viewport:De,reset:Oe}}function Bv(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):qr("canvas")}function x(w,S,O){let X=1;const q=qe(w);if((q.width>O||q.height>O)&&(X=O/Math.max(q.width,q.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const z=Math.floor(X*q.width),re=Math.floor(X*q.height);h===void 0&&(h=g(z,re));const ne=S?g(z,re):h;return ne.width=z,ne.height=re,ne.getContext("2d").drawImage(w,0,0,z,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+z+"x"+re+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,S,O,X,q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let z=S;if(S===n.RED&&(O===n.FLOAT&&(z=n.R32F),O===n.HALF_FLOAT&&(z=n.R16F),O===n.UNSIGNED_BYTE&&(z=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(z=n.R8UI),O===n.UNSIGNED_SHORT&&(z=n.R16UI),O===n.UNSIGNED_INT&&(z=n.R32UI),O===n.BYTE&&(z=n.R8I),O===n.SHORT&&(z=n.R16I),O===n.INT&&(z=n.R32I)),S===n.RG&&(O===n.FLOAT&&(z=n.RG32F),O===n.HALF_FLOAT&&(z=n.RG16F),O===n.UNSIGNED_BYTE&&(z=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(z=n.RG8UI),O===n.UNSIGNED_SHORT&&(z=n.RG16UI),O===n.UNSIGNED_INT&&(z=n.RG32UI),O===n.BYTE&&(z=n.RG8I),O===n.SHORT&&(z=n.RG16I),O===n.INT&&(z=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(z=n.RGB16UI),O===n.UNSIGNED_INT&&(z=n.RGB32UI),O===n.BYTE&&(z=n.RGB8I),O===n.SHORT&&(z=n.RGB16I),O===n.INT&&(z=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),O===n.UNSIGNED_INT&&(z=n.RGBA32UI),O===n.BYTE&&(z=n.RGBA8I),O===n.SHORT&&(z=n.RGBA16I),O===n.INT&&(z=n.RGBA32I)),S===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),S===n.RGBA){const re=q?Wr:Ze.getTransfer(X);O===n.FLOAT&&(z=n.RGBA32F),O===n.HALF_FLOAT&&(z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(z=re===tt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function M(w,S){let O;return w?S===null||S===Kn||S===ji?O=n.DEPTH24_STENCIL8:S===Ht?O=n.DEPTH32F_STENCIL8:S===qi&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kn||S===ji?O=n.DEPTH_COMPONENT24:S===Ht?O=n.DEPTH_COMPONENT32F:S===qi&&(O=n.DEPTH_COMPONENT16),O}function D(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Yt&&w.minFilter!==St?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),C(S),S.isVideoTexture&&d.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),v(S)}function C(w){const S=i.get(w);if(S.__webglInit===void 0)return;const O=w.source,X=f.get(O);if(X){const q=X[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&_(w),Object.keys(X).length===0&&f.delete(O)}i.remove(w)}function _(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const O=w.source,X=f.get(O);delete X[S.__cacheKey],o.memory.textures--}function v(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let q=0;q<S.__webglFramebuffer[X].length;q++)n.deleteFramebuffer(S.__webglFramebuffer[X][q]);else n.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)n.deleteFramebuffer(S.__webglFramebuffer[X]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=w.textures;for(let X=0,q=O.length;X<q;X++){const z=i.get(O[X]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(O[X])}i.remove(w)}let b=0;function N(){b=0}function F(){const w=b;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),b+=1,w}function j(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function J(w,S){const O=i.get(w);if(w.isVideoTexture&&ye(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(O,w,S);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function W(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ce(O,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function ie(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ce(O,w,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function V(w,S){const O=i.get(w);if(w.version>0&&O.__version!==w.version){se(O,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}const ae={[no]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},le={[Yt]:n.NEAREST,[gh]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[St]:n.LINEAR,[rs]:n.LINEAR_MIPMAP_NEAREST,[Xn]:n.LINEAR_MIPMAP_LINEAR},xe={[Mh]:n.NEVER,[Ah]:n.ALWAYS,[yh]:n.LESS,[dc]:n.LEQUAL,[Eh]:n.EQUAL,[wh]:n.GEQUAL,[Th]:n.GREATER,[bh]:n.NOTEQUAL};function Ee(w,S){if(S.type===Ht&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===St||S.magFilter===rs||S.magFilter===hr||S.magFilter===Xn||S.minFilter===St||S.minFilter===rs||S.minFilter===hr||S.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ae[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ae[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ae[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,le[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==hr&&S.minFilter!==Xn||S.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Te(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const X=S.source;let q=f.get(X);q===void 0&&(q={},f.set(X,q));const z=j(S);if(z!==w.__cacheKey){q[z]===void 0&&(q[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),q[z].usedTimes++;const re=q[w.__cacheKey];re!==void 0&&(q[w.__cacheKey].usedTimes--,re.usedTimes===0&&_(S)),w.__cacheKey=z,w.__webglTexture=q[z].texture}return O}function $(w,S,O){return Math.floor(Math.floor(w/O)/S)}function Y(w,S,O,X){const z=w.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,O,X,S.data);else{z.sort((ee,Se)=>ee.start-Se.start);let re=0;for(let ee=1;ee<z.length;ee++){const Se=z[re],De=z[ee],Ce=Se.start+Se.count,de=$(De.start,S.width,4),Oe=$(Se.start,S.width,4);De.start<=Ce+1&&de===Oe&&$(De.start+De.count-1,S.width,4)===de?Se.count=Math.max(Se.count,De.start+De.count-Se.start):(++re,z[re]=De)}z.length=re+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),ge=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ee=0,Se=z.length;ee<Se;ee++){const De=z[ee],Ce=Math.floor(De.start/4),de=Math.ceil(De.count/4),Oe=Ce%S.width,L=Math.floor(Ce/S.width),ue=de,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Oe,L,ue,te,O,X,S.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function ce(w,S,O){let X=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=n.TEXTURE_3D);const q=Te(w,S),z=S.source;t.bindTexture(X,w.__webglTexture,n.TEXTURE0+O);const re=i.get(z);if(z.version!==re.__version||q===!0){t.activeTexture(n.TEXTURE0+O);const ne=Ze.getPrimaries(Ze.workingColorSpace),ge=S.colorSpace===bn?null:Ze.getPrimaries(S.colorSpace),Ae=S.colorSpace===bn||ne===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ee=x(S.image,!1,r.maxTextureSize);ee=Ue(S,ee);const Se=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Ce=T(S.internalFormat,Se,De,S.colorSpace,S.isVideoTexture);Ee(X,S);let de;const Oe=S.mipmaps,L=S.isVideoTexture!==!0,ue=re.__version===void 0||q===!0,te=z.dataReady,he=D(S,ee);if(S.isDepthTexture)Ce=M(S.format===Yi,S.type),ue&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,Se,De,null));else if(S.isDataTexture)if(Oe.length>0){L&&ue&&t.texStorage2D(n.TEXTURE_2D,he,Ce,Oe[0].width,Oe[0].height);for(let Q=0,Z=Oe.length;Q<Z;Q++)de=Oe[Q],L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,Se,De,de.data):t.texImage2D(n.TEXTURE_2D,Q,Ce,de.width,de.height,0,Se,De,de.data);S.generateMipmaps=!1}else L?(ue&&t.texStorage2D(n.TEXTURE_2D,he,Ce,ee.width,ee.height),te&&Y(S,ee,Se,De)):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,Se,De,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ce,Oe[0].width,Oe[0].height,ee.depth);for(let Q=0,Z=Oe.length;Q<Z;Q++)if(de=Oe[Q],S.format!==Ct)if(Se!==null)if(L){if(te)if(S.layerUpdates.size>0){const me=ol(de.width,de.height,S.format,S.type);for(const Pe of S.layerUpdates){const Qe=de.data.subarray(Pe*me/de.data.BYTES_PER_ELEMENT,(Pe+1)*me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Pe,de.width,de.height,1,Se,Qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,ee.depth,Se,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ce,de.width,de.height,ee.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,ee.depth,Se,De,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ce,de.width,de.height,ee.depth,0,Se,De,de.data)}else{L&&ue&&t.texStorage2D(n.TEXTURE_2D,he,Ce,Oe[0].width,Oe[0].height);for(let Q=0,Z=Oe.length;Q<Z;Q++)de=Oe[Q],S.format!==Ct?Se!==null?L?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,Se,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,Se,De,de.data):t.texImage2D(n.TEXTURE_2D,Q,Ce,de.width,de.height,0,Se,De,de.data)}else if(S.isDataArrayTexture)if(L){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ce,ee.width,ee.height,ee.depth),te)if(S.layerUpdates.size>0){const Q=ol(ee.width,ee.height,S.format,S.type);for(const Z of S.layerUpdates){const me=ee.data.subarray(Z*Q/ee.data.BYTES_PER_ELEMENT,(Z+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,Se,De,me)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Se,De,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,Se,De,ee.data);else if(S.isData3DTexture)L?(ue&&t.texStorage3D(n.TEXTURE_3D,he,Ce,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Se,De,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,Se,De,ee.data);else if(S.isFramebufferTexture){if(ue)if(L)t.texStorage2D(n.TEXTURE_2D,he,Ce,ee.width,ee.height);else{let Q=ee.width,Z=ee.height;for(let me=0;me<he;me++)t.texImage2D(n.TEXTURE_2D,me,Ce,Q,Z,0,Se,De,null),Q>>=1,Z>>=1}}else if(Oe.length>0){if(L&&ue){const Q=qe(Oe[0]);t.texStorage2D(n.TEXTURE_2D,he,Ce,Q.width,Q.height)}for(let Q=0,Z=Oe.length;Q<Z;Q++)de=Oe[Q],L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Se,De,de):t.texImage2D(n.TEXTURE_2D,Q,Ce,Se,De,de);S.generateMipmaps=!1}else if(L){if(ue){const Q=qe(ee);t.texStorage2D(n.TEXTURE_2D,he,Ce,Q.width,Q.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,De,ee)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Se,De,ee);m(S)&&u(X),re.__version=z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function se(w,S,O){if(S.image.length!==6)return;const X=Te(w,S),q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const z=i.get(q);if(q.version!==z.__version||X===!0){t.activeTexture(n.TEXTURE0+O);const re=Ze.getPrimaries(Ze.workingColorSpace),ne=S.colorSpace===bn?null:Ze.getPrimaries(S.colorSpace),ge=S.colorSpace===bn||re===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let Z=0;Z<6;Z++)!Ae&&!ee?Se[Z]=x(S.image[Z],!0,r.maxCubemapSize):Se[Z]=ee?S.image[Z].image:S.image[Z],Se[Z]=Ue(S,Se[Z]);const De=Se[0],Ce=s.convert(S.format,S.colorSpace),de=s.convert(S.type),Oe=T(S.internalFormat,Ce,de,S.colorSpace),L=S.isVideoTexture!==!0,ue=z.__version===void 0||X===!0,te=q.dataReady;let he=D(S,De);Ee(n.TEXTURE_CUBE_MAP,S);let Q;if(Ae){L&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Oe,De.width,De.height);for(let Z=0;Z<6;Z++){Q=Se[Z].mipmaps;for(let me=0;me<Q.length;me++){const Pe=Q[me];S.format!==Ct?Ce!==null?L?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Oe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Pe.width,Pe.height,Ce,de,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Oe,Pe.width,Pe.height,0,Ce,de,Pe.data)}}}else{if(Q=S.mipmaps,L&&ue){Q.length>0&&he++;const Z=qe(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se[Z].width,Se[Z].height,Ce,de,Se[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Se[Z].width,Se[Z].height,0,Ce,de,Se[Z].data);for(let me=0;me<Q.length;me++){const Qe=Q[me].image[Z].image;L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Qe.width,Qe.height,Ce,de,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Oe,Qe.width,Qe.height,0,Ce,de,Qe.data)}}else{L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,de,Se[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Ce,de,Se[Z]);for(let me=0;me<Q.length;me++){const Pe=Q[me];L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Ce,de,Pe.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Oe,Ce,de,Pe.image[Z])}}}m(S)&&u(n.TEXTURE_CUBE_MAP),z.__version=q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function fe(w,S,O,X,q,z){const re=s.convert(O.format,O.colorSpace),ne=s.convert(O.type),ge=T(O.internalFormat,re,ne,O.colorSpace),Ae=i.get(S),ee=i.get(O);if(ee.__renderTarget=S,!Ae.__hasExternalTextures){const Se=Math.max(1,S.width>>z),De=Math.max(1,S.height>>z);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,z,ge,Se,De,S.depth,0,re,ne,null):t.texImage2D(q,z,ge,Se,De,0,re,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ne(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,q,ee.__webglTexture,0,_e(S)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,q,ee.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(w,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const X=S.depthTexture,q=X&&X.isDepthTexture?X.type:null,z=M(S.stencilBuffer,q),re=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=_e(S);Ne(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,z,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,z,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,w)}else{const X=S.textures;for(let q=0;q<X.length;q++){const z=X[q],re=s.convert(z.format,z.colorSpace),ne=s.convert(z.type),ge=T(z.internalFormat,re,ne,z.colorSpace),Ae=_e(S);O&&Ne(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ge,S.width,S.height):Ne(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const q=X.__webglTexture,z=_e(S);if(S.depthTexture.format===$i)Ne(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(S.depthTexture.format===Yi)Ne(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ge(w){const S=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",q)};X.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=X}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=w.texture.mipmaps;X&&X.length>0?we(S.__webglFramebuffer[0],w):we(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=n.createRenderbuffer(),Re(S.__webglDepthbuffer[X],w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=S.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,z)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Re(S.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(w,S,O){const X=i.get(w);S!==void 0&&fe(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ge(w)}function We(w){const S=w.texture,O=i.get(w),X=i.get(S);w.addEventListener("dispose",A);const q=w.textures,z=w.isWebGLCubeRenderTarget===!0,re=q.length>1;if(re||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=S.version,o.memory.textures++),z){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let ge=0;ge<S.mipmaps.length;ge++)O.__webglFramebuffer[ne][ge]=n.createFramebuffer()}else O.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)O.__webglFramebuffer[ne]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(re)for(let ne=0,ge=q.length;ne<ge;ne++){const Ae=i.get(q[ne]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Ne(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<q.length;ne++){const ge=q[ne];O.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);const Ae=s.convert(ge.format,ge.colorSpace),ee=s.convert(ge.type),Se=T(ge.internalFormat,Ae,ee,ge.colorSpace,w.isXRRenderTarget===!0),De=_e(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)fe(O.__webglFramebuffer[ne][ge],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge);else fe(O.__webglFramebuffer[ne],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(S)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let ne=0,ge=q.length;ne<ge;ne++){const Ae=q[ne],ee=i.get(Ae);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),Ee(n.TEXTURE_2D,Ae),fe(O.__webglFramebuffer,w,Ae,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),m(Ae)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),Ee(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)fe(O.__webglFramebuffer[ge],w,S,n.COLOR_ATTACHMENT0,ne,ge);else fe(O.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,ne,0);m(S)&&u(ne),t.unbindTexture()}w.depthBuffer&&Ge(w)}function P(w){const S=w.textures;for(let O=0,X=S.length;O<X;O++){const q=S[O];if(m(q)){const z=E(w),re=i.get(q).__webglTexture;t.bindTexture(z,re),u(z),t.unbindTexture()}}}const at=[],ze=[];function Ve(w){if(w.samples>0){if(Ne(w)===!1){const S=w.textures,O=w.width,X=w.height;let q=n.COLOR_BUFFER_BIT;const z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(w),ne=S.length>1;if(ne)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const ge=w.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[Ae]);const ee=i.get(S[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,O,X,0,0,O,X,q,n.NEAREST),c===!0&&(at.length=0,ze.length=0,at.push(n.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(at.push(z),ze.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,re.__webglColorRenderbuffer[Ae]);const ee=i.get(S[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function _e(w){return Math.min(r.maxSamples,w.samples)}function Ne(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(w){const S=o.render.frame;d.get(w)!==S&&(d.set(w,S),w.update())}function Ue(w,S){const O=w.colorSpace,X=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==wi&&O!==bn&&(Ze.getTransfer(O)===tt?(X!==Ct||q!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function qe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=$e,this.setupRenderTarget=We,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ne}function zv(n,e){function t(i,r=bn){let s;const o=Ze.getTransfer(r);if(i===gn)return n.UNSIGNED_BYTE;if(i===Zo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ic)return n.BYTE;if(i===rc)return n.SHORT;if(i===qi)return n.UNSIGNED_SHORT;if(i===Ko)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===Ht)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===oc)return n.ALPHA;if(i===ac)return n.RGB;if(i===Ct)return n.RGBA;if(i===$i)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===lc)return n.RED;if(i===Qo)return n.RED_INTEGER;if(i===cc)return n.RG;if(i===ea)return n.RG_INTEGER;if(i===ta)return n.RGBA_INTEGER;if(i===Or||i===Fr||i===Br||i===zr)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ro||i===so||i===oo||i===ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===so)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lo||i===co||i===uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lo||i===co)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ho||i===fo||i===po||i===mo||i===go||i===vo||i===_o||i===xo||i===So||i===Mo||i===yo||i===Eo||i===To||i===bo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ho)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===po)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===go)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_o)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===So)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===To)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kr||i===wo||i===Ao)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kr)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===Ro||i===Co||i===Po)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ro)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Co)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vv=`
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

}`;class Hv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rt({vertexShader:kv,fragmentShader:Vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gv extends Ri{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,h=null,f=null,p=null,g=null;const x=new Hv,m=t.getContextAttributes();let u=null,E=null;const T=[],M=[],D=new Je;let R=null;const A=new qt;A.viewport=new dt;const C=new qt;C.viewport=new dt;const _=[A,C],v=new uf;let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Y=T[$];return Y===void 0&&(Y=new As,T[$]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function($){let Y=T[$];return Y===void 0&&(Y=new As,T[$]=Y),Y.getGripSpace()},this.getHand=function($){let Y=T[$];return Y===void 0&&(Y=new As,T[$]=Y),Y.getHandSpace()};function F($){const Y=M.indexOf($.inputSource);if(Y===-1)return;const ce=T[Y];ce!==void 0&&(ce.update($.inputSource,$.frame,l||o),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",J);for(let $=0;$<T.length;$++){const Y=M[$];Y!==null&&(M[$]=null,T[$].disconnect(Y))}b=null,N=null,x.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,E=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,se=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Yi:$i,se=m.stencil?ji:Kn);const Re={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Qt(f.textureWidth,f.textureHeight,{format:Ct,type:gn,depthTexture:new Tc(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Ct,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J($){for(let Y=0;Y<$.removed.length;Y++){const ce=$.removed[Y],se=M.indexOf(ce);se>=0&&(M[se]=null,T[se].disconnect(ce))}for(let Y=0;Y<$.added.length;Y++){const ce=$.added[Y];let se=M.indexOf(ce);if(se===-1){for(let Re=0;Re<T.length;Re++)if(Re>=M.length){M.push(ce),se=Re;break}else if(M[Re]===null){M[Re]=ce,se=Re;break}if(se===-1)break}const fe=T[se];fe&&fe.connect(ce)}}const W=new G,ie=new G;function V($,Y,ce){W.setFromMatrixPosition(Y.matrixWorld),ie.setFromMatrixPosition(ce.matrixWorld);const se=W.distanceTo(ie),fe=Y.projectionMatrix.elements,Re=ce.projectionMatrix.elements,we=fe[14]/(fe[10]-1),Ge=fe[14]/(fe[10]+1),$e=(fe[9]+1)/fe[5],We=(fe[9]-1)/fe[5],P=(fe[8]-1)/fe[0],at=(Re[8]+1)/Re[0],ze=we*P,Ve=we*at,_e=se/(-P+at),Ne=_e*-P;if(Y.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(_e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),fe[10]===-1)$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const ye=we+_e,Ue=Ge+_e,qe=ze-Ne,w=Ve+(se-Ne),S=$e*Ge/Ue*ye,O=We*Ge/Ue*ye;$.projectionMatrix.makePerspective(qe,w,S,O,ye,Ue),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,Y){Y===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Y.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Y=$.near,ce=$.far;x.texture!==null&&(x.depthNear>0&&(Y=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),v.near=C.near=A.near=Y,v.far=C.far=A.far=ce,(b!==v.near||N!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,N=v.far),A.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,v.layers.mask=A.layers.mask|C.layers.mask;const se=$.parent,fe=v.cameras;ae(v,se);for(let Re=0;Re<fe.length;Re++)ae(fe[Re],se);fe.length===2?V(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),le($,v,se)};function le($,Y,ce){ce===null?$.matrix.copy(Y.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(Y.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Lo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let xe=null;function Ee($,Y){if(d=Y.getViewerPose(l||o),g=Y,d!==null){const ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let se=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let we=0;we<ce.length;we++){const Ge=ce[we];let $e=null;if(p!==null)$e=p.getViewport(Ge);else{const P=h.getViewSubImage(f,Ge);$e=P.viewport,we===0&&(e.setRenderTargetTextures(E,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(E))}let We=_[we];We===void 0&&(We=new qt,We.layers.enable(we),We.viewport=new dt,_[we]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set($e.x,$e.y,$e.width,$e.height),we===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(We)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const we=h.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&x.init(e,we,r.renderState)}}for(let ce=0;ce<T.length;ce++){const se=M[ce],fe=T[ce];se!==null&&fe!==void 0&&fe.update(se,Y,l||o)}xe&&xe($,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Te=new bc;Te.setAnimationLoop(Ee),this.setAnimationLoop=function($){xe=$},this.dispose=function(){}}}const Bn=new vn,Wv=new ft;function Xv(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,xc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,E,T,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,E,T):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Lt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Lt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),T=E.envMap,M=E.envMapRotation;T&&(m.envMap.value=T,Bn.copy(M),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(Bn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=T*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Lt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qv(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const M=T.program;i.uniformBlockBinding(E,M)}function l(E,T){let M=r[E.id];M===void 0&&(g(E),M=d(E),r[E.id]=M,E.addEventListener("dispose",m));const D=T.program;i.updateUBOMapping(E,D);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function d(E){const T=h();E.__bindingPointIndex=T;const M=n.createBuffer(),D=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=r[E.id],M=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,A=M.length;R<A;R++){const C=Array.isArray(M[R])?M[R]:[M[R]];for(let _=0,v=C.length;_<v;_++){const b=C[_];if(p(b,R,_,D)===!0){const N=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let j=0;for(let J=0;J<F.length;J++){const W=F[J],ie=x(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+j,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):(W.toArray(b.__data,j),j+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,T,M,D){const R=E.value,A=T+"_"+M;if(D[A]===void 0)return typeof R=="number"||typeof R=="boolean"?D[A]=R:D[A]=R.clone(),!0;{const C=D[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return D[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(E){const T=E.uniforms;let M=0;const D=16;for(let A=0,C=T.length;A<C;A++){const _=Array.isArray(T[A])?T[A]:[T[A]];for(let v=0,b=_.length;v<b;v++){const N=_[v],F=Array.isArray(N.value)?N.value:[N.value];for(let j=0,J=F.length;j<J;j++){const W=F[j],ie=x(W),V=M%D,ae=V%ie.boundary,le=V+ae;M+=ae,le!==0&&D-le<ie.storage&&(M+=D-le),N.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=ie.storage}}}const R=M%D;return R>0&&(M+=D-R),E.__size=M,E.__cache={},this}function x(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class jv{constructor(e={}){const{canvas:t=Ch(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=Vt;let R=0,A=0,C=null,_=-1,v=null;const b=new dt,N=new dt;let F=null;const j=new nt(0);let J=0,W=t.width,ie=t.height,V=1,ae=null,le=null;const xe=new dt(0,0,W,ie),Ee=new dt(0,0,W,ie);let Te=!1;const $=new Ec;let Y=!1,ce=!1;const se=new ft,fe=new ft,Re=new G,we=new dt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function We(){return C===null?V:1}let P=i;function at(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Z,!1),P===null){const I="webgl2";if(P=at(I,y),P===null)throw at(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ze,Ve,_e,Ne,ye,Ue,qe,w,S,O,X,q,z,re,ne,ge,Ae,ee,Se,De,Ce,de,Oe,L;function ue(){ze=new ig(P),ze.init(),de=new zv(P,ze),Ve=new Km(P,ze,e,de),_e=new Fv(P,ze),Ve.reverseDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Ne=new og(P),ye=new Tv,Ue=new Bv(P,ze,_e,ye,Ve,de,Ne),qe=new Jm(M),w=new ng(M),S=new hf(P),Oe=new $m(P,S),O=new rg(P,S,Ne,Oe),X=new lg(P,O,S,Ne),Se=new ag(P,Ve,Ue),ge=new Zm(ye),q=new Ev(M,qe,w,ze,Ve,Oe,ge),z=new Xv(M,ye),re=new wv,ne=new Dv(ze),ee=new jm(M,qe,w,_e,X,p,c),Ae=new Nv(M,X,Ve),L=new qv(P,Ne,Ve,_e),De=new Ym(P,ze,Ne),Ce=new sg(P,ze,Ne),Ne.programs=q.programs,M.capabilities=Ve,M.extensions=ze,M.properties=ye,M.renderLists=re,M.shadowMap=Ae,M.state=_e,M.info=Ne}ue();const te=new Gv(M,P);this.xr=te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,ie,!1))},this.getSize=function(y){return y.set(W,ie)},this.setSize=function(y,I,k=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,ie=I,t.width=Math.floor(y*V),t.height=Math.floor(I*V),k===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(W*V,ie*V).floor()},this.setDrawingBufferSize=function(y,I,k){W=y,ie=I,V=k,t.width=Math.floor(y*k),t.height=Math.floor(I*k),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,I,k,H){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,I,k,H),_e.viewport(b.copy(xe).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ee)},this.setScissor=function(y,I,k,H){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,I,k,H),_e.scissor(N.copy(Ee).multiplyScalar(V).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(y){_e.setScissorTest(Te=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,k=!0){let H=0;if(y){let U=!1;if(C!==null){const oe=C.texture.format;U=oe===ta||oe===ea||oe===Qo}if(U){const oe=C.texture.type,ve=oe===gn||oe===Kn||oe===qi||oe===ji||oe===Zo||oe===Jo,be=ee.getClearColor(),Me=ee.getClearAlpha(),Fe=be.r,Be=be.g,Le=be.b;ve?(g[0]=Fe,g[1]=Be,g[2]=Le,g[3]=Me,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Fe,x[1]=Be,x[2]=Le,x[3]=Me,P.clearBufferiv(P.COLOR,0,x))}else H|=P.COLOR_BUFFER_BIT}I&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ee.dispose(),re.dispose(),ne.dispose(),ye.dispose(),qe.dispose(),w.dispose(),X.dispose(),Oe.dispose(),L.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",sr),te.removeEventListener("sessionend",or),nn.stop()};function he(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=Ne.autoReset,I=Ae.enabled,k=Ae.autoUpdate,H=Ae.needsUpdate,U=Ae.type;ue(),Ne.autoReset=y,Ae.enabled=I,Ae.autoUpdate=k,Ae.needsUpdate=H,Ae.type=U}function Z(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function me(y){const I=y.target;I.removeEventListener("dispose",me),Pe(I)}function Pe(y){Qe(y),ye.remove(y)}function Qe(y){const I=ye.get(y).programs;I!==void 0&&(I.forEach(function(k){q.releaseProgram(k)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,k,H,U,oe){I===null&&(I=Ge);const ve=U.isMesh&&U.matrixWorld.determinant()<0,be=Pc(y,I,k,H,U);_e.setMaterial(H,ve);let Me=k.index,Fe=1;if(H.wireframe===!0){if(Me=O.getWireframeAttribute(k),Me===void 0)return;Fe=2}const Be=k.drawRange,Le=k.attributes.position;let Xe=Be.start*Fe,et=(Be.start+Be.count)*Fe;oe!==null&&(Xe=Math.max(Xe,oe.start*Fe),et=Math.min(et,(oe.start+oe.count)*Fe)),Me!==null?(Xe=Math.max(Xe,0),et=Math.min(et,Me.count)):Le!=null&&(Xe=Math.max(Xe,0),et=Math.min(et,Le.count));const ct=et-Xe;if(ct<0||ct===1/0)return;Oe.setup(U,H,be,k,Me);let st,it=De;if(Me!==null&&(st=S.get(Me),it=Ce,it.setIndex(st)),U.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*We()),it.setMode(P.LINES)):it.setMode(P.TRIANGLES);else if(U.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),_e.setLineWidth(Ie*We()),U.isLineSegments?it.setMode(P.LINES):U.isLineLoop?it.setMode(P.LINE_LOOP):it.setMode(P.LINE_STRIP)}else U.isPoints?it.setMode(P.POINTS):U.isSprite&&it.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Si("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ie=U._multiDrawStarts,lt=U._multiDrawCounts,Ke=U._multiDrawCount,It=Me?S.get(Me).bytesPerElement:1,Jn=ye.get(H).currentProgram.getUniforms();for(let Ut=0;Ut<Ke;Ut++)Jn.setValue(P,"_gl_DrawID",Ut),it.render(Ie[Ut]/It,lt[Ut])}else if(U.isInstancedMesh)it.renderInstances(Xe,ct,U.count);else if(k.isInstancedBufferGeometry){const Ie=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,lt=Math.min(k.instanceCount,Ie);it.renderInstances(Xe,ct,lt)}else it.render(Xe,ct)};function Ye(y,I,k){y.transparent===!0&&y.side===dn&&y.forceSinglePass===!1?(y.side=Lt,y.needsUpdate=!0,lr(y,I,k),y.side=Cn,y.needsUpdate=!0,lr(y,I,k),y.side=dn):lr(y,I,k)}this.compile=function(y,I,k=null){k===null&&(k=y),u=ne.get(k),u.init(I),T.push(u),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==k&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const H=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const be=oe[ve];Ye(be,k,U),H.add(be)}else Ye(oe,k,U),H.add(oe)}),u=T.pop(),H},this.compileAsync=function(y,I,k=null){const H=this.compile(y,I,k);return new Promise(U=>{function oe(){if(H.forEach(function(ve){ye.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){U(y);return}setTimeout(oe,10)}ze.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Mt=null;function vt(y){Mt&&Mt(y)}function sr(){nn.stop()}function or(){nn.start()}const nn=new bc;nn.setAnimationLoop(vt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(y){Mt=y,te.setAnimationLoop(y),y===null?nn.stop():nn.start()},te.addEventListener("sessionstart",sr),te.addEventListener("sessionend",or),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(I),I=te.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,C),u=ne.get(y,T.length),u.init(I),T.push(u),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(fe),ce=this.localClippingEnabled,Y=ge.init(this.clippingPlanes,ce),m=re.get(y,E.length),m.init(),E.push(m),te.enabled===!0&&te.isPresenting===!0){const oe=M.xr.getDepthSensingMesh();oe!==null&&Li(oe,I,-1/0,M.sortObjects)}Li(y,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ae,le),$e=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,$e&&ee.addToRenderList(m,y),this.info.render.frame++,Y===!0&&ge.beginShadows();const k=u.state.shadowsArray;Ae.render(k,y,I),Y===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(u.setupLights(),I.isArrayCamera){const oe=I.cameras;if(U.length>0)for(let ve=0,be=oe.length;ve<be;ve++){const Me=oe[ve];aa(H,U,y,Me)}$e&&ee.render(y);for(let ve=0,be=oe.length;ve<be;ve++){const Me=oe[ve];oa(m,y,Me,Me.viewport)}}else U.length>0&&aa(H,U,y,I),$e&&ee.render(y),oa(m,y,I);C!==null&&A===0&&(Ue.updateMultisampleRenderTarget(C),Ue.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(M,y,I),Oe.resetDefaultState(),_=-1,v=null,T.pop(),T.length>0?(u=T[T.length-1],Y===!0&&ge.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Li(y,I,k,H){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){H&&we.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);const ve=X.update(y),be=y.material;be.visible&&m.push(y,ve,be,k,we.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const ve=X.update(y),be=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),we.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),we.copy(ve.boundingSphere.center)),we.applyMatrix4(y.matrixWorld).applyMatrix4(fe)),Array.isArray(be)){const Me=ve.groups;for(let Fe=0,Be=Me.length;Fe<Be;Fe++){const Le=Me[Fe],Xe=be[Le.materialIndex];Xe&&Xe.visible&&m.push(y,ve,Xe,k,we.z,Le)}}else be.visible&&m.push(y,ve,be,k,we.z,null)}}const oe=y.children;for(let ve=0,be=oe.length;ve<be;ve++)Li(oe[ve],I,k,H)}function oa(y,I,k,H){const U=y.opaque,oe=y.transmissive,ve=y.transparent;u.setupLightsView(k),Y===!0&&ge.setGlobalState(M.clippingPlanes,k),H&&_e.viewport(b.copy(H)),U.length>0&&ar(U,I,k),oe.length>0&&ar(oe,I,k),ve.length>0&&ar(ve,I,k),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function aa(y,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Qt(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?er:gn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const oe=u.state.transmissionRenderTarget[H.id],ve=H.viewport||b;oe.setSize(ve.z*M.transmissionResolutionScale,ve.w*M.transmissionResolutionScale);const be=M.getRenderTarget(),Me=M.getActiveCubeFace(),Fe=M.getActiveMipmapLevel();M.setRenderTarget(oe),M.getClearColor(j),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),$e&&ee.render(k);const Be=M.toneMapping;M.toneMapping=An;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),Y===!0&&ge.setGlobalState(M.clippingPlanes,H),ar(y,k,H),Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let et=0,ct=I.length;et<ct;et++){const st=I[et],it=st.object,Ie=st.geometry,lt=st.material,Ke=st.group;if(lt.side===dn&&it.layers.test(H.layers)){const It=lt.side;lt.side=Lt,lt.needsUpdate=!0,la(it,k,H,Ie,lt,Ke),lt.side=It,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe))}M.setRenderTarget(be,Me,Fe),M.setClearColor(j,J),Le!==void 0&&(H.viewport=Le),M.toneMapping=Be}function ar(y,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,oe=y.length;U<oe;U++){const ve=y[U],be=ve.object,Me=ve.geometry,Fe=ve.group;let Be=ve.material;Be.allowOverride===!0&&H!==null&&(Be=H),be.layers.test(k.layers)&&la(be,I,k,Me,Be,Fe)}}function la(y,I,k,H,U,oe){y.onBeforeRender(M,I,k,H,U,oe),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,I,k,H,y,oe),U.transparent===!0&&U.side===dn&&U.forceSinglePass===!1?(U.side=Lt,U.needsUpdate=!0,M.renderBufferDirect(k,I,H,U,y,oe),U.side=Cn,U.needsUpdate=!0,M.renderBufferDirect(k,I,H,U,y,oe),U.side=dn):M.renderBufferDirect(k,I,H,U,y,oe),y.onAfterRender(M,I,k,H,U,oe)}function lr(y,I,k){I.isScene!==!0&&(I=Ge);const H=ye.get(y),U=u.state.lights,oe=u.state.shadowsArray,ve=U.state.version,be=q.getParameters(y,U.state,oe,I,k),Me=q.getProgramCacheKey(be);let Fe=H.programs;H.environment=y.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(y.isMeshStandardMaterial?w:qe).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",me),Fe=new Map,H.programs=Fe);let Be=Fe.get(Me);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===ve)return ua(y,be),Be}else be.uniforms=q.getUniforms(y),y.onBeforeCompile(be,M),Be=q.acquireProgram(be,Me),Fe.set(Me,Be),H.uniforms=be.uniforms;const Le=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=ge.uniform),ua(y,be),H.needsLights=Dc(y),H.lightsStateVersion=ve,H.needsLights&&(Le.ambientLightColor.value=U.state.ambient,Le.lightProbe.value=U.state.probe,Le.directionalLights.value=U.state.directional,Le.directionalLightShadows.value=U.state.directionalShadow,Le.spotLights.value=U.state.spot,Le.spotLightShadows.value=U.state.spotShadow,Le.rectAreaLights.value=U.state.rectArea,Le.ltc_1.value=U.state.rectAreaLTC1,Le.ltc_2.value=U.state.rectAreaLTC2,Le.pointLights.value=U.state.point,Le.pointLightShadows.value=U.state.pointShadow,Le.hemisphereLights.value=U.state.hemi,Le.directionalShadowMap.value=U.state.directionalShadowMap,Le.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Le.spotShadowMap.value=U.state.spotShadowMap,Le.spotLightMatrix.value=U.state.spotLightMatrix,Le.spotLightMap.value=U.state.spotLightMap,Le.pointShadowMap.value=U.state.pointShadowMap,Le.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function ca(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Vr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function ua(y,I){const k=ye.get(y);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Pc(y,I,k,H,U){I.isScene!==!0&&(I=Ge),Ue.resetTextureUnits();const oe=I.fog,ve=H.isMeshStandardMaterial?I.environment:null,be=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wi,Me=(H.isMeshStandardMaterial?w:qe).get(H.envMap||ve),Fe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!k.morphAttributes.position,Xe=!!k.morphAttributes.normal,et=!!k.morphAttributes.color;let ct=An;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ct=M.toneMapping);const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=st!==void 0?st.length:0,Ie=ye.get(H),lt=u.state.lights;if(Y===!0&&(ce===!0||y!==v)){const yt=y===v&&H.id===_;ge.setState(H,y,yt)}let Ke=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==lt.state.version||Ie.outputColorSpace!==be||U.isBatchedMesh&&Ie.batching===!1||!U.isBatchedMesh&&Ie.batching===!0||U.isBatchedMesh&&Ie.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ie.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ie.instancing===!1||!U.isInstancedMesh&&Ie.instancing===!0||U.isSkinnedMesh&&Ie.skinning===!1||!U.isSkinnedMesh&&Ie.skinning===!0||U.isInstancedMesh&&Ie.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ie.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ie.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ie.instancingMorph===!1&&U.morphTexture!==null||Ie.envMap!==Me||H.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ge.numPlanes||Ie.numIntersection!==ge.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==Be||Ie.morphTargets!==Le||Ie.morphNormals!==Xe||Ie.morphColors!==et||Ie.toneMapping!==ct||Ie.morphTargetsCount!==it)&&(Ke=!0):(Ke=!0,Ie.__version=H.version);let It=Ie.currentProgram;Ke===!0&&(It=lr(H,I,U));let Jn=!1,Ut=!1,Di=!1;const ot=It.getUniforms(),Bt=Ie.uniforms;if(_e.useProgram(It.program)&&(Jn=!0,Ut=!0,Di=!0),H.id!==_&&(_=H.id,Ut=!0),Jn||v!==y){_e.buffers.depth.getReversed()?(se.copy(y.projectionMatrix),Lh(se),Dh(se),ot.setValue(P,"projectionMatrix",se)):ot.setValue(P,"projectionMatrix",y.projectionMatrix),ot.setValue(P,"viewMatrix",y.matrixWorldInverse);const bt=ot.map.cameraPosition;bt!==void 0&&bt.setValue(P,Re.setFromMatrixPosition(y.matrixWorld)),Ve.logarithmicDepthBuffer&&ot.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Ut=!0,Di=!0)}if(U.isSkinnedMesh){ot.setOptional(P,U,"bindMatrix"),ot.setOptional(P,U,"bindMatrixInverse");const yt=U.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),ot.setValue(P,"boneTexture",yt.boneTexture,Ue))}U.isBatchedMesh&&(ot.setOptional(P,U,"batchingTexture"),ot.setValue(P,"batchingTexture",U._matricesTexture,Ue),ot.setOptional(P,U,"batchingIdTexture"),ot.setValue(P,"batchingIdTexture",U._indirectTexture,Ue),ot.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ot.setValue(P,"batchingColorTexture",U._colorsTexture,Ue));const zt=k.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&Se.update(U,k,It),(Ut||Ie.receiveShadow!==U.receiveShadow)&&(Ie.receiveShadow=U.receiveShadow,ot.setValue(P,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Bt.envMap.value=Me,Bt.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Bt.envMapIntensity.value=I.environmentIntensity),Ut&&(ot.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&Lc(Bt,Di),oe&&H.fog===!0&&z.refreshFogUniforms(Bt,oe),z.refreshMaterialUniforms(Bt,H,V,ie,u.state.transmissionRenderTarget[y.id]),Vr.upload(P,ca(Ie),Bt,Ue)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Vr.upload(P,ca(Ie),Bt,Ue),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(P,"center",U.center),ot.setValue(P,"modelViewMatrix",U.modelViewMatrix),ot.setValue(P,"normalMatrix",U.normalMatrix),ot.setValue(P,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const yt=H.uniformsGroups;for(let bt=0,Kr=yt.length;bt<Kr;bt++){const Pn=yt[bt];L.update(Pn,It),L.bind(Pn,It)}}return It}function Lc(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Dc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,I,k){const H=ye.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ye.get(y.texture).__webglTexture=I,ye.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const k=ye.get(y);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const Ic=P.createFramebuffer();this.setRenderTarget=function(y,I=0,k=0){C=y,R=I,A=k;let H=!0,U=null,oe=!1,ve=!1;if(y){const Me=ye.get(y);if(Me.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)Ue.setupRenderTarget(y);else if(Me.__hasExternalTextures)Ue.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Le=y.depthTexture;if(Me.__boundDepthTexture!==Le){if(Le!==null&&ye.has(Le)&&(y.width!==Le.image.width||y.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(y)}}const Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const Be=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Be[I])?U=Be[I][k]:U=Be[I],oe=!0):y.samples>0&&Ue.useMultisampledRTT(y)===!1?U=ye.get(y).__webglMultisampledFramebuffer:Array.isArray(Be)?U=Be[k]:U=Be,b.copy(y.viewport),N.copy(y.scissor),F=y.scissorTest}else b.copy(xe).multiplyScalar(V).floor(),N.copy(Ee).multiplyScalar(V).floor(),F=Te;if(k!==0&&(U=Ic),_e.bindFramebuffer(P.FRAMEBUFFER,U)&&H&&_e.drawBuffers(y,U),_e.viewport(b),_e.scissor(N),_e.setScissorTest(F),oe){const Me=ye.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,k)}else if(ve){const Me=ye.get(y.texture),Fe=I;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.__webglTexture,k,Fe)}else if(y!==null&&k!==0){const Me=ye.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Me.__webglTexture,k)}_=-1},this.readRenderTargetPixels=function(y,I,k,H,U,oe,ve,be=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){_e.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Fe=y.textures[be],Be=Fe.format,Le=Fe.type;if(!Ve.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-H&&k>=0&&k<=y.height-U&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),P.readPixels(I,k,H,U,de.convert(Be),de.convert(Le),oe))}finally{const Fe=C!==null?ye.get(C).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(y,I,k,H,U,oe,ve,be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(I>=0&&I<=y.width-H&&k>=0&&k<=y.height-U){_e.bindFramebuffer(P.FRAMEBUFFER,Me);const Fe=y.textures[be],Be=Fe.format,Le=Fe.type;if(!Ve.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),P.readPixels(I,k,H,U,de.convert(Be),de.convert(Le),0);const et=C!==null?ye.get(C).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,et);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ph(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(Xe),P.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,k=0){const H=Math.pow(2,-k),U=Math.floor(y.image.width*H),oe=Math.floor(y.image.height*H),ve=I!==null?I.x:0,be=I!==null?I.y:0;Ue.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,ve,be,U,oe),_e.unbindTexture()};const Uc=P.createFramebuffer(),Nc=P.createFramebuffer();this.copyTextureToTexture=function(y,I,k=null,H=null,U=0,oe=null){oe===null&&(U!==0?(Si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=U,U=0):oe=0);let ve,be,Me,Fe,Be,Le,Xe,et,ct;const st=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(k!==null)ve=k.max.x-k.min.x,be=k.max.y-k.min.y,Me=k.isBox3?k.max.z-k.min.z:1,Fe=k.min.x,Be=k.min.y,Le=k.isBox3?k.min.z:0;else{const zt=Math.pow(2,-U);ve=Math.floor(st.width*zt),be=Math.floor(st.height*zt),y.isDataArrayTexture?Me=st.depth:y.isData3DTexture?Me=Math.floor(st.depth*zt):Me=1,Fe=0,Be=0,Le=0}H!==null?(Xe=H.x,et=H.y,ct=H.z):(Xe=0,et=0,ct=0);const it=de.convert(I.format),Ie=de.convert(I.type);let lt;I.isData3DTexture?(Ue.setTexture3D(I,0),lt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ue.setTexture2DArray(I,0),lt=P.TEXTURE_2D_ARRAY):(Ue.setTexture2D(I,0),lt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Ke=P.getParameter(P.UNPACK_ROW_LENGTH),It=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Jn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ut=P.getParameter(P.UNPACK_SKIP_ROWS),Di=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,st.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le);const ot=y.isDataArrayTexture||y.isData3DTexture,Bt=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const zt=ye.get(y),yt=ye.get(I),bt=ye.get(zt.__renderTarget),Kr=ye.get(yt.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,bt.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let Pn=0;Pn<Me;Pn++)ot&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(y).__webglTexture,U,Le+Pn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(I).__webglTexture,oe,ct+Pn)),P.blitFramebuffer(Fe,Be,ve,be,Xe,et,ve,be,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||ye.has(y)){const zt=ye.get(y),yt=ye.get(I);_e.bindFramebuffer(P.READ_FRAMEBUFFER,Uc),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,Nc);for(let bt=0;bt<Me;bt++)ot?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,zt.__webglTexture,U,Le+bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,zt.__webglTexture,U),Bt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.__webglTexture,oe,ct+bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,oe),U!==0?P.blitFramebuffer(Fe,Be,ve,be,Xe,et,ve,be,P.COLOR_BUFFER_BIT,P.NEAREST):Bt?P.copyTexSubImage3D(lt,oe,Xe,et,ct+bt,Fe,Be,ve,be):P.copyTexSubImage2D(lt,oe,Xe,et,Fe,Be,ve,be);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Bt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(lt,oe,Xe,et,ct,ve,be,Me,it,Ie,st.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(lt,oe,Xe,et,ct,ve,be,Me,it,st.data):P.texSubImage3D(lt,oe,Xe,et,ct,ve,be,Me,it,Ie,st):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,Xe,et,ve,be,it,Ie,st.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,Xe,et,st.width,st.height,it,st.data):P.texSubImage2D(P.TEXTURE_2D,oe,Xe,et,ve,be,it,Ie,st);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,It),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Jn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Di),oe===0&&I.generateMipmaps&&P.generateMipmap(lt),_e.unbindTexture()},this.copyTextureToTexture3D=function(y,I,k=null,H=null,U=0){return Si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,k,H,U)},this.initRenderTarget=function(y){ye.get(y).__webglFramebuffer===void 0&&Ue.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),_e.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,_e.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function $v(n,e){if(e===0)return{edges:[]};const t=new Set,i=new Set;for(let p=0;p<e;p++){const g=p*4,x=n[g],m=n[g+1],u=n[g+2],E=n[g+3];t.add(x),t.add(x+u),i.add(m),i.add(m+E)}const r=Array.from(t).sort((p,g)=>p-g),s=Array.from(i).sort((p,g)=>p-g);if(r.length===0||s.length===0)return{edges:[]};const o=r[0],a=r[r.length-1],c=s[0],l=s[s.length-1],d=new Set,h=[],f=(p,g)=>{const x=p.x<g.x||p.x===g.x&&p.y<=g.y?`${p.x},${p.y}|${g.x},${g.y}`:`${g.x},${g.y}|${p.x},${p.y}`;d.has(x)||(d.add(x),h.push({start:[p.x,p.y],end:[g.x,g.y]}))};return r.forEach(p=>{f({x:p,y:c},{x:p,y:l})}),s.forEach(p=>{f({x:o,y:p},{x:a,y:p})}),{edges:h}}function Yv(n,e){if(e===0)return{edges:[]};let t=1,i=0;const r=[];for(let g=0;g<e;g++){const x=g*4,m=n[x],u=n[x+1],E=n[x+2],T=n[x+3];r.push({x:m,y:u,width:E,height:T}),t=Math.min(t,m),i=Math.max(i,m+E)}r.sort((g,x)=>g.y-x.y);const s=new Set,o=(g,x)=>s.add(`${g},${x}`);r.forEach(g=>{const x=g.y+g.height;o(t,x),o(i,x)});const a=r[0].y;o(t,a),o(i,a);const c=Array.from(s).map(g=>{const[x,m]=g.split(",").map(Number);return{x,y:m}}).sort((g,x)=>g.y!==x.y?g.y-x.y:g.x-x.x),l=[],d=(g,x)=>{l.push({start:[g.x,g.y],end:[x.x,x.y]})},h=c.filter(g=>Math.abs(g.x-t)<1e-6);for(let g=0;g<h.length-1;g++)d(h[g],h[g+1]);const f=c.filter(g=>Math.abs(g.x-i)<1e-6);for(let g=0;g<f.length-1;g++)d(f[g],f[g+1]);return[...new Set(c.map(g=>g.y))].sort((g,x)=>g-x).forEach(g=>{const x=h.find(u=>Math.abs(u.y-g)<1e-6),m=f.find(u=>Math.abs(u.y-g)<1e-6);x&&m&&d(x,m)}),{edges:l}}const mi=`
  // Fullscreen quad vertex shader.
  // - Passes through the built-in attribute 'uv' into 'vUv'.
  // - Produces clip-space position from the built-in attribute 'position'.
  varying vec2 vUv;

  void main() {
    vUv = uv;                     // UV in [0,1]^2
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Kv=`
  precision highp float;
  varying vec2 vUv;
  
  // Inputs describing the rail network as a set of line segments
  uniform int   uEdgeCount;                             // number of valid entries in uEdges
  uniform vec4  uEdges[${Rn*4+20}];          // (x1, y1, x2, y2) per segment
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

    for (int i = 0; i < ${Rn*4+20}; ++i) {
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
`,Zv=`
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
`,Jv=`
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
`,Qv=`
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
`;class e_{constructor(e){this.renderer=e,this.guideTexture=new Qt(is,is,{format:Ct,type:Ht,minFilter:St,magFilter:St}),this.simulationTextures=[0,1].map(()=>new Qt(pi,pi,{format:Ct,type:Ht,minFilter:St,magFilter:St})),this.tempTexture=new Qt(pi,pi,{format:Ct,type:Ht,minFilter:St,magFilter:St}),this.guideMaterial=new Rt({vertexShader:mi,fragmentShader:Kv,uniforms:{uEdgeCount:{value:0},uEdges:{value:new Float32Array((Rn*4+20)*4)},uLineWidth:{value:.008}}}),this.simulationMaterial=new Rt({vertexShader:mi,fragmentShader:Zv,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uPrevState:{value:null},uDeltaTime:{value:.016},uSpeed:{value:1},uAttenuation:{value:1},uEnergyConservation:{value:1},uRailEpsilon:{value:0},uTTLDecayRate:{value:.5}}}),this.injectionMaterial=new Rt({vertexShader:mi,fragmentShader:Jv,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uCurrentState:{value:null},uInjectionPoint:{value:new Je(.5,.5)},uInjectionRadius:{value:.1},uInjectionEnergy:{value:2},uHue:{value:0},uInjectionEpsilon:{value:0}}}),this.quad=new $t(new Ci(2,2),this.guideMaterial),this.scene=new yc,this.scene.add(this.quad),this.camera=new ra(-1,1,1,-1,0,1),this.clearBuffers()}renderer;guideTexture;simulationTextures;tempTexture;guideMaterial;simulationMaterial;injectionMaterial;quad;scene;camera;current=0;isInitialized=!1;clearBuffers(){const e=new Rt({vertexShader:mi,fragmentShader:"void main(){gl_FragColor=vec4(0.0);}"});this.quad.material=e,[...this.simulationTextures,this.tempTexture].forEach(t=>{this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}),this.renderer.setRenderTarget(null),e.dispose()}updateGuideTexture(e){const t=Math.min(e.length,Rn*4+20),i=this.guideMaterial.uniforms.uEdges.value;e.slice(0,t).forEach((r,s)=>i.set([...r.start,...r.end],s*4)),this.guideMaterial.uniforms.uEdgeCount.value=t,this.quad.material=this.guideMaterial,this.renderer.setRenderTarget(this.guideTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.isInitialized=!0}simulationStep(e){if(!this.isInitialized)return;const t=this.current,i=1-t;this.simulationMaterial.uniforms.uPrevState.value=this.simulationTextures[t].texture,this.simulationMaterial.uniforms.uDeltaTime.value=e,this.quad.material=this.simulationMaterial,this.renderer.setRenderTarget(this.simulationTextures[i]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.current=i}injectPulse(e,t,i,r=2){if(!this.isInitialized)return;this.injectionMaterial.uniforms.uCurrentState.value=this.simulationTextures[this.current].texture,this.injectionMaterial.uniforms.uInjectionPoint.value.set(e,t),this.injectionMaterial.uniforms.uInjectionEnergy.value=r,this.injectionMaterial.uniforms.uHue.value=i,this.quad.material=this.injectionMaterial,this.renderer.setRenderTarget(this.tempTexture),this.renderer.render(this.scene,this.camera);const s=new Rt({vertexShader:mi,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){gl_FragColor=texture2D(t,vUv);} ",uniforms:{t:{value:this.tempTexture.texture}}});this.quad.material=s,this.renderer.setRenderTarget(this.simulationTextures[this.current]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),s.dispose()}getCurrentTexture(){return this.simulationTextures[this.current].texture}getPreviousSimulationTexture(){return this.simulationTextures[1-this.current].texture}getTempTexture(){return this.tempTexture.texture}getGuideTexture(){return this.guideTexture.texture}getTextureInfo(){return{guideResolution:is,simResolution:pi,currentBuffer:this.current,isInitialized:this.isInitialized,edgeCount:this.guideMaterial.uniforms.uEdgeCount.value}}dispose(){this.guideTexture.dispose(),this.tempTexture.dispose(),this.simulationTextures.forEach(e=>e.dispose()),this.guideMaterial.dispose(),this.simulationMaterial.dispose(),this.injectionMaterial.dispose()}}const At=n=>{const e=tn.c(52),{label:t,value:i,min:r,max:s,step:o,onChange:a}=n;let c;e[0]!==i?(c=i.toString(),e[0]=i,e[1]=c):c=e[1];const[l,d]=K.useState(c),[h,f]=K.useState(!1),p=K.useRef(null);let g,x;e[2]!==h||e[3]!==i?(g=()=>{h||d(i.toString())},x=[i,h],e[2]=h,e[3]=i,e[4]=g,e[5]=x):(g=e[4],x=e[5]),K.useEffect(g,x);let m;e[6]!==l||e[7]!==a||e[8]!==i?(m=()=>{const Te=parseFloat(l);isNaN(Te)?d(i.toString()):a(Te)},e[6]=l,e[7]=a,e[8]=i,e[9]=m):m=e[9];const u=m;let E;e[10]!==i?(E=()=>{f(!0),d(i.toString())},e[10]=i,e[11]=E):E=e[11];const T=E;let M;e[12]!==u?(M=()=>{f(!1),u()},e[12]=u,e[13]=M):M=e[13];const D=M;let R;e[14]!==u||e[15]!==i?(R=Te=>{Te.key==="Enter"?(u(),p.current?.blur()):Te.key==="Escape"&&(d(i.toString()),f(!1),p.current?.blur())},e[14]=u,e[15]=i,e[16]=R):R=e[16];const A=R;let C,_;e[17]===Symbol.for("react.memo_cache_sentinel")?(C={marginBottom:8},_={display:"flex",justifyContent:"space-between",fontSize:10,color:"#ccc",marginBottom:2},e[17]=C,e[18]=_):(C=e[17],_=e[18]);let v;e[19]!==t?(v=B.jsx("span",{children:t}),e[19]=t,e[20]=v):v=e[20];let b;e[21]!==o||e[22]!==i?(b=i.toFixed(o<.01?3:2),e[21]=o,e[22]=i,e[23]=b):b=e[23];let N;e[24]!==b?(N=B.jsx("span",{children:b}),e[24]=b,e[25]=N):N=e[25];let F;e[26]!==v||e[27]!==N?(F=B.jsxs("div",{style:_,children:[v,N]}),e[26]=v,e[27]=N,e[28]=F):F=e[28];let j;e[29]!==a?(j=Te=>a(parseFloat(Te.target.value)),e[29]=a,e[30]=j):j=e[30];let J;e[31]===Symbol.for("react.memo_cache_sentinel")?(J={width:"100%",marginBottom:4},e[31]=J):J=e[31];let W;e[32]!==s||e[33]!==r||e[34]!==o||e[35]!==j||e[36]!==i?(W=B.jsx("input",{type:"range",min:r,max:s,step:o,value:i,onChange:j,style:J}),e[32]=s,e[33]=r,e[34]=o,e[35]=j,e[36]=i,e[37]=W):W=e[37];let ie;e[38]===Symbol.for("react.memo_cache_sentinel")?(ie=Te=>d(Te.target.value),e[38]=ie):ie=e[38];const V=h?"#333":"#222",ae=`1px solid ${h?"#666":"#444"}`;let le;e[39]!==V||e[40]!==ae?(le={width:"100%",background:V,color:"#fff",border:ae,borderRadius:3,padding:"4px 6px",fontSize:11,boxSizing:"border-box"},e[39]=V,e[40]=ae,e[41]=le):le=e[41];let xe;e[42]!==D||e[43]!==T||e[44]!==A||e[45]!==l||e[46]!==le?(xe=B.jsx("input",{ref:p,type:"text",value:l,onFocus:T,onChange:ie,onBlur:D,onKeyDown:A,placeholder:"Enter value...",style:le}),e[42]=D,e[43]=T,e[44]=A,e[45]=l,e[46]=le,e[47]=xe):xe=e[47];let Ee;return e[48]!==F||e[49]!==W||e[50]!==xe?(Ee=B.jsxs("div",{style:C,children:[F,W,xe]}),e[48]=F,e[49]=W,e[50]=xe,e[51]=Ee):Ee=e[51],Ee},t_=({scopeId:n="scope",gpuSimRef:e,vizUniformsRef:t,nodeCount:i,position:r="top-right",isPaused:s=!1,setPaused:o,onNudgeRender:a,onClose:c})=>{const[l,d]=K.useState(()=>{switch(r){case"top-left":return{x:20,y:20};case"top-right":return{x:window.innerWidth-240,y:20};case"bottom-left":return{x:20,y:window.innerHeight-400};case"bottom-right":return{x:window.innerWidth-240,y:window.innerHeight-400};default:return{x:20,y:20}}}),h=K.useRef(!1),f=K.useRef({x:0,y:0}),p=_=>{h.current=!0,f.current={x:_.clientX-l.x,y:_.clientY-l.y}},g=K.useCallback(_=>{h.current&&d({x:_.clientX-f.current.x,y:_.clientY-f.current.y})},[]),x=K.useCallback(()=>{h.current=!1},[]);K.useEffect(()=>{if(h.current)return document.addEventListener("mousemove",g),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",x)}},[g,x,h.current]);const[m,u]=K.useState(!1),[E,T]=K.useState({speed:Kt.speed,attenuation:Kt.attenuation,lineWidth:.008,injectionRadius:Kt.injectionRadius,ttlLifetime:2,coreWidthPx:2,bladeWidthPx:10,energyScale:1,gamma:1,debugView:0,overlayVectors:!1,vectorSpacingPx:16,vectorLengthPx:8,vectorThicknessPx:1.25,showCenterline:!1,centerlineWidthPx:1.25,intensityCutoff:.01}),M=(_,v)=>{T(F=>({...F,[_]:v}));const b=e.current,N=t.current;if(!(!b||!N)){switch(_){case"speed":b.simulationMaterial.uniforms.uSpeed.value=v;break;case"attenuation":b.simulationMaterial.uniforms.uAttenuation.value=v;break;case"lineWidth":b.guideMaterial.uniforms.uLineWidth.value=v;break;case"injectionRadius":b.injectionMaterial.uniforms.uInjectionRadius.value=v;break;case"ttlLifetime":{const j=1/Math.max(.1,v);b.simulationMaterial.uniforms.uTTLDecayRate&&(b.simulationMaterial.uniforms.uTTLDecayRate.value=j);break}case"coreWidthPx":N.uCoreWidthPx&&(N.uCoreWidthPx.value=v);break;case"bladeWidthPx":N.uBladeWidthPx&&(N.uBladeWidthPx.value=v);break;case"energyScale":N.uEnergyScale&&(N.uEnergyScale.value=v);break;case"gamma":N.uGamma&&(N.uGamma.value=v);break;case"intensityCutoff":N.uIntensityCutoff&&(N.uIntensityCutoff.value=v);break;case"debugView":N.uDebugView&&(N.uDebugView.value=v);break;case"overlayVectors":N.uOverlayVectors&&(N.uOverlayVectors.value=!!v);break;case"vectorSpacingPx":N.uVectorSpacingPx&&(N.uVectorSpacingPx.value=v);break;case"vectorLengthPx":N.uVectorLengthPx&&(N.uVectorLengthPx.value=v);break;case"vectorThicknessPx":N.uVectorThicknessPx&&(N.uVectorThicknessPx.value=v);break;case"showCenterline":N.uShowCenterline&&(N.uShowCenterline.value=!!v);break;case"centerlineWidthPx":N.uCenterlineWidthPx&&(N.uCenterlineWidthPx.value=v);break}a?.()}};K.useEffect(()=>{const _=e.current,v=t.current;!_||!v||T(b=>({...b,speed:_.simulationMaterial.uniforms.uSpeed?.value??b.speed,attenuation:_.simulationMaterial.uniforms.uAttenuation?.value??b.attenuation,lineWidth:_.guideMaterial.uniforms.uLineWidth?.value??b.lineWidth,injectionRadius:_.injectionMaterial.uniforms.uInjectionRadius?.value??b.injectionRadius,ttlLifetime:(_.simulationMaterial.uniforms.uTTLDecayRate?.value??0)>0?1/(_.simulationMaterial.uniforms.uTTLDecayRate?.value??1):b.ttlLifetime,coreWidthPx:v.uCoreWidthPx?.value??b.coreWidthPx,bladeWidthPx:v.uBladeWidthPx?.value??b.bladeWidthPx,energyScale:v.uEnergyScale?.value??b.energyScale,gamma:v.uGamma?.value??b.gamma,debugView:v.uDebugView?.value??b.debugView,overlayVectors:!!(v.uOverlayVectors?.value??b.overlayVectors),vectorSpacingPx:v.uVectorSpacingPx?.value??b.vectorSpacingPx,vectorLengthPx:v.uVectorLengthPx?.value??b.vectorLengthPx,vectorThicknessPx:v.uVectorThicknessPx?.value??b.vectorThicknessPx,showCenterline:!!(v.uShowCenterline?.value??b.showCenterline),centerlineWidthPx:v.uCenterlineWidthPx?.value??b.centerlineWidthPx,intensityCutoff:v.uIntensityCutoff?.value??b.intensityCutoff}))},[]);const[D,R]=K.useState({fps:0,frame:0});K.useEffect(()=>{let _=0,v=0,b=performance.now();const N=()=>{const F=performance.now();if(_+=F-b,v+=1,v>=60){const j=_/v;R({fps:Math.round(1e3/j),frame:parseFloat(j.toFixed(2))}),_=0,v=0}b=F,requestAnimationFrame(N)};N()},[]);const A=_=>{switch(_){case"default":M("speed",Kt.speed),M("attenuation",Kt.attenuation),M("lineWidth",.008),M("injectionRadius",Kt.injectionRadius),M("ttlLifetime",2),M("coreWidthPx",2),M("bladeWidthPx",10),M("energyScale",1),M("gamma",1),M("debugView",0),M("overlayVectors",!1),M("showCenterline",!1);break;case"fast":M("speed",1.5),M("attenuation",.5),M("ttlLifetime",1);break;case"slow":M("speed",.3),M("attenuation",2.5),M("ttlLifetime",4);break;case"intense":M("coreWidthPx",Math.max(1,E.coreWidthPx*1.5)),M("bladeWidthPx",Math.max(E.coreWidthPx+2,E.bladeWidthPx*1.5)),M("energyScale",Math.max(1,E.energyScale*1.3));break;case"subtle":M("attenuation",2),M("coreWidthPx",Math.max(1,E.coreWidthPx*.7)),M("bladeWidthPx",Math.max(E.coreWidthPx+2,E.bladeWidthPx*.8)),M("ttlLifetime",3);break}},C=(_,v)=>B.jsx("button",{style:{padding:"2px 6px",fontSize:9,background:"#444",color:"#fff",border:"1px solid #666",borderRadius:3,marginRight:3,marginBottom:3},onClick:()=>A(v),onMouseEnter:b=>b.currentTarget.style.background="#555",onMouseLeave:b=>b.currentTarget.style.background="#444",children:_},v);return B.jsxs("div",{style:{position:"fixed",left:l.x,top:l.y,width:220,background:"rgba(20,20,20,0.95)",border:"1px solid #444",borderRadius:6,color:"#fff",fontFamily:"monospace",fontSize:11,zIndex:1e4,pointerEvents:"auto",maxHeight:"calc(100vh - 40px)",overflowY:"auto"},children:[B.jsxs("div",{onMouseDown:p,style:{padding:"6px 10px",background:"#333",cursor:"move",borderRadius:"6px 6px 0 0",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #444",userSelect:"none"},children:[B.jsxs("span",{style:{fontWeight:"bold",fontSize:10},children:[n," debug"]}),B.jsxs("div",{style:{display:"flex",gap:4},children:[B.jsx("button",{onClick:()=>o?.(!s),title:s?"Resume simulation":"Pause simulation",style:{background:"none",border:"1px solid #666",color:"#fff",fontSize:10,borderRadius:3,padding:"0 6px",cursor:"pointer"},children:s?"▶":"⏸"}),c&&B.jsx("button",{onClick:c,style:{background:"none",border:"none",color:"#f44",fontSize:12,cursor:"pointer"},children:"×"}),B.jsx("button",{onClick:()=>u(_=>!_),style:{background:"none",border:"none",color:"#fff",fontSize:12},children:m?"▼":"▲"})]})]}),!m&&B.jsxs("div",{style:{padding:10},children:[B.jsx("div",{style:{marginBottom:12},children:B.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,fontSize:9},children:[B.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[B.jsx("div",{children:"FPS"}),B.jsx("div",{style:{color:D.fps<30?"#f44":"#4f4"},children:D.fps})]}),B.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[B.jsx("div",{children:"Nodes"}),B.jsx("div",{children:i})]}),B.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[B.jsx("div",{children:"Res"}),B.jsx("div",{children:pi})]})]})}),B.jsxs("div",{style:{marginBottom:12},children:[B.jsx("div",{style:{color:"#aaa",fontSize:10,marginBottom:4},children:"Presets"}),C("Def","default"),C("Fast","fast"),C("Slow","slow"),C("Int","intense"),C("Sub","subtle")]}),B.jsxs("div",{style:{marginBottom:12},children:[B.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Simulation"}),B.jsx(At,{label:"Speed",value:E.speed,min:.1,max:2,step:.1,onChange:_=>M("speed",_)}),B.jsx(At,{label:"Attenuation",value:E.attenuation,min:.1,max:5,step:.1,onChange:_=>M("attenuation",_)}),B.jsx(At,{label:"Rail width",value:E.lineWidth,min:.002,max:.05,step:.001,onChange:_=>M("lineWidth",_)}),B.jsx(At,{label:"Fade lifetime (s)",value:E.ttlLifetime,min:.2,max:10,step:.1,onChange:_=>M("ttlLifetime",_)})]}),B.jsxs("div",{style:{marginBottom:12},children:[B.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Injection"}),B.jsx(At,{label:"Radius",value:E.injectionRadius,min:.01,max:.3,step:.01,onChange:_=>M("injectionRadius",_)})]}),B.jsxs("div",{style:{marginBottom:12},children:[B.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Visualization"}),B.jsx(At,{label:"Core width (px)",value:E.coreWidthPx,min:1,max:40,step:1,onChange:_=>M("coreWidthPx",_)}),B.jsx(At,{label:"Blade width (px)",value:E.bladeWidthPx,min:E.coreWidthPx+2,max:200,step:1,onChange:_=>M("bladeWidthPx",Math.max(_,E.coreWidthPx+2))}),B.jsx(At,{label:"Energy scale",value:E.energyScale,min:.1,max:5,step:.1,onChange:_=>M("energyScale",_)}),B.jsx(At,{label:"Gamma",value:E.gamma,min:.5,max:2.5,step:.1,onChange:_=>M("gamma",_)}),B.jsx(At,{label:"Min intensity cutoff",value:E.intensityCutoff,min:0,max:.05,step:.001,onChange:_=>M("intensityCutoff",_)})]}),B.jsxs("div",{style:{marginBottom:12},children:[B.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Debug view & overlays"}),B.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8},children:[["Norm",0],["SDF",1],["Tan",2],["Edge",3],["Fwd",4],["Back",5],["Total",6],["Hue",7]].map(([_,v])=>B.jsx("button",{onClick:()=>M("debugView",v),style:{padding:"2px 6px",fontSize:9,background:E.debugView===v?"#777":"#444",color:"#fff",border:"1px solid #666",borderRadius:3},children:_},_))}),B.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:6,marginBottom:6},children:[B.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Vector overlay"}),B.jsx("input",{type:"checkbox",checked:E.overlayVectors,onChange:_=>M("overlayVectors",_.target.checked)}),B.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Centerline"}),B.jsx("input",{type:"checkbox",checked:E.showCenterline,onChange:_=>M("showCenterline",_.target.checked)})]}),B.jsx(At,{label:"Vector spacing (px)",value:E.vectorSpacingPx,min:4,max:64,step:1,onChange:_=>M("vectorSpacingPx",_)}),B.jsx(At,{label:"Vector length (px)",value:E.vectorLengthPx,min:2,max:32,step:1,onChange:_=>M("vectorLengthPx",_)}),B.jsx(At,{label:"Vector thickness (px)",value:E.vectorThicknessPx,min:.5,max:6,step:.25,onChange:_=>M("vectorThicknessPx",_)}),B.jsx(At,{label:"Centerline width (px)",value:E.centerlineWidthPx,min:.5,max:8,step:.5,onChange:_=>M("centerlineWidthPx",_)})]})]})]})},n_=n=>n.hue!==void 0?n.hue:n.rgb?$o(n.rgb):0,i_=({children:n,topology:e="ladder",speed:t=Kt.speed,attenuation:i=Kt.attenuation,enableGlobalClicks:r=!1,showDebug:s=!1,scopeId:o="scope",debugPosition:a="top-right",cornerRadius:c=0,pixelRatio:l,powerPreference:d="default",maxFPS:h=120})=>{const f=K.useRef(new Map),[,p]=K.useState(0),g=K.useRef(!1),x=K.useCallback(()=>{g.current||(g.current=!0,Promise.resolve().then(()=>{g.current=!1,p(Y=>Y+1)}))},[]),u=Uo().toLowerCase().indexOf("light")!==-1,E=K.useCallback(Y=>{f.current.set(Y.id,Y);const ce=Y.ref.current;ce&&$.current&&$.current.observe(ce),Te.current=!0,x()},[x]),T=K.useCallback(Y=>{const se=f.current.get(Y)?.ref.current;se&&$.current&&$.current.unobserve(se),f.current.delete(Y),Te.current=!0,x()},[x]),M=K.useRef(performance.now()),D=K.useRef(null),R=K.useRef(null),A=K.useRef(performance.now()),C=K.useRef(h),_=K.useRef(()=>{}),v=K.useCallback(()=>{R.current===null&&(J.current=performance.now(),D.current&&(R.current=requestAnimationFrame(D.current)))},[]),b=K.useCallback((Y,ce,se={})=>{const fe=ie.current;if(!fe)return;let Re=n_(se);u&&(Re=(Re+.5)%1);const we=se.energy??2.5,Ge=se.radius??Kt.injectionRadius;fe.injectionMaterial.uniforms.uInjectionRadius.value=Ge,fe.injectPulse(Y,ce,Re,we),M.current=performance.now(),v()},[u,v]);K.useEffect(()=>{_.current=b},[b]),K.useEffect(()=>{C.current=h},[h]);const N=K.useCallback(Y=>{const se=f.current.get(Y)?.ref.current;if(!se)return null;const fe=se.getBoundingClientRect();return{u:(fe.left+fe.width/2)/window.innerWidth,v:1-(fe.top+fe.height/2)/window.innerHeight}},[]),F=K.useMemo(()=>({register:E,unregister:T,pulseAt:b,getNodeCenter:N}),[E,T,b,N]),j=K.useRef(null),J=K.useRef(performance.now()),W=K.useRef(new Float32Array(Rn*4)),ie=K.useRef(null),V=K.useRef(null),[ae,le]=K.useState(s),xe=K.useRef(null),Ee=K.useRef(e),Te=K.useRef(!0);K.useEffect(()=>{if(!j.current)return;M.current=performance.now();const Y=new jv({alpha:!0,antialias:!0,powerPreference:d}),ce=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;Y.setPixelRatio(ce),Y.setSize(window.innerWidth,window.innerHeight),j.current.appendChild(Y.domElement),xe.current=Y;const se=new yc,fe=new ra(-1,1,1,-1,0,1),Re=new e_(Y);ie.current=Re;const we=Re.simulationMaterial.uniforms;we.uSpeed.value=t,we.uAttenuation.value=i,we.uEnergyConservation.value=Kt.energyConservation;const Ge={uRes:{value:new Je(window.innerWidth,window.innerHeight)},uGuideTexture:{value:Re.getGuideTexture()},uSimulationTexture:{value:Re.getCurrentTexture()},uTime:{value:0},uRailHalfWidthUV:{value:Re.guideMaterial.uniforms.uLineWidth.value},uCoreWidthPx:{value:2},uBladeWidthPx:{value:10},uCornerRadiusPx:{value:c},uDebugView:{value:0},uOverlayVectors:{value:!1},uVectorSpacingPx:{value:16},uVectorLengthPx:{value:8},uVectorThicknessPx:{value:1.25},uEnergyScale:{value:1},uGamma:{value:1},uShowCenterline:{value:!1},uCenterlineWidthPx:{value:1.25},uIntensityCutoff:{value:.01},uGlowIntensity:{value:1.35},uCoreGain:{value:1},uHaloStrength:{value:.6},uWhiteHotStrength:{value:.25},uExposure:{value:1}};V.current=Ge;const $e=new $t(new Ci(2,2),new Rt({vertexShader:mi,fragmentShader:Qv,uniforms:Ge,transparent:!0,depthWrite:!1,blending:Ws}));se.add($e),Te.current=!0;const We=1e4,P=()=>{const Ve=performance.now();if(Ve-M.current>We){R.current=null;return}const _e=C.current;if(_e&&_e>0){const w=1e3/_e;if(Ve-A.current<w){R.current=requestAnimationFrame(P);return}}const Ne=Math.min((Ve-J.current)/1e3,.033);J.current=Ve;const ye=window.innerWidth,Ue=window.innerHeight,qe=Array.from(f.current.values()).slice(0,Rn);qe.forEach((w,S)=>{const O=w.ref.current;if(!O)return;const X=O.getBoundingClientRect(),q=S*4,z=[X.left/ye,(Ue-(X.top+X.height))/Ue,X.width/ye,X.height/Ue];for(let re=0;re<4;re++)Math.abs(W.current[q+re]-z[re])>.001&&(W.current[q+re]=z[re],Te.current=!0)});for(let w=qe.length*4;w<W.current.length;w++)W.current[w]!==0&&(W.current[w]=0,Te.current=!0);if(Te.current){const w=Ee.current==="grid"?$v(W.current,qe.length).edges:Yv(W.current,qe.length).edges;Re.updateGuideTexture(w),Te.current=!1}Re.simulationStep(Ne),Ge.uSimulationTexture.value=Re.getCurrentTexture(),Ge.uTime.value=Ve/1e3,Ge.uRailHalfWidthUV.value=Re.guideMaterial.uniforms.uLineWidth.value,Y.setRenderTarget(null),Y.render(se,fe),A.current=Ve,R.current=requestAnimationFrame(P)};D.current=P,R.current=requestAnimationFrame(P);const at=()=>{Ge.uRes.value.set(window.innerWidth,window.innerHeight),Y.setSize(window.innerWidth,window.innerHeight),Te.current=!0};window.addEventListener("resize",at);const ze=j.current;return()=>{window.removeEventListener("resize",at),R.current!==null&&cancelAnimationFrame(R.current),R.current=null,Re.dispose(),Y.dispose(),ze&&Y.domElement.parentElement===ze&&ze.removeChild(Y.domElement)}},[i,c,l,d,t]),K.useEffect(()=>{Ee.current=e,Te.current=!0,v()},[e,v]),K.useEffect(()=>{const Y=ie.current;if(!Y)return;const ce=Y.simulationMaterial.uniforms;ce.uSpeed.value=t,ce.uAttenuation.value=i},[t,i]),K.useEffect(()=>{if(!r)return;const Y=ce=>{const se=ce.clientX/window.innerWidth,fe=1-ce.clientY/window.innerHeight;_.current&&_.current(se,fe,{hue:.33})};return window.addEventListener("click",Y),()=>window.removeEventListener("click",Y)},[r]),K.useEffect(()=>{const Y=xe.current;if(!Y)return;const ce=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;Y.setPixelRatio(ce)},[l]);const $=K.useRef(null);return K.useEffect(()=>($.current=new ResizeObserver(()=>{Te.current=!0,x()}),f.current.forEach(Y=>{const ce=Y.ref.current;ce&&$.current&&$.current.observe(ce)}),()=>$.current?.disconnect()),[x]),K.useEffect(()=>le(s),[s]),K.useEffect(()=>{V.current&&(V.current.uCornerRadiusPx.value=c)},[c]),B.jsxs(Ql.Provider,{value:F,children:[n,B.jsx("div",{ref:j,style:{position:"fixed",inset:0,pointerEvents:"none",mixBlendMode:"difference"}}),ae&&B.jsx(t_,{scopeId:o,gpuSimRef:ie,vizUniformsRef:V,nodeCount:f.current.size,position:a,onClose:()=>le(!1)})]})},r_=n=>{const e=tn.c(3),t=cu("legacyGpuNetworkScope");let i;return e[0]!==n||e[1]!==t?(i=t?B.jsx(i_,{...n}):B.jsx(Ud,{...n}),e[0]=n,e[1]=t,e[2]=i):i=e[2],i};function fi(n,e){return{main:n,light:n,dark:n,contrastText:Xi(n,"#ffffff","#000000",e)}}function s_(n,e){const t=n.button,i=n["text.link"],r=n["text.primary"],s=n["text.secondary"],o={outline:`2px solid ${t}`,outlineOffset:2};return Ul({palette:{mode:e,primary:fi(t,e),secondary:fi(i,e),error:fi(n["status.error"],e),warning:fi(n["status.warning"],e),success:fi(n["status.success"],e),info:fi(n["status.info"],e),background:{default:n.background,paper:n.paper},text:{primary:r,secondary:s,disabled:n["status.disabled"]},divider:n.divider,action:{active:n["status.enabled"],hover:ut(t,.08),disabled:n["status.disabled"],disabledBackground:ut(n["status.disabled"],.16),focus:ut(t,.18)}},components:{MuiPaper:{styleOverrides:{root:{backgroundImage:"none"}}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none","&.Mui-focusVisible":o},containedPrimary:{color:Xi(t,"#ffffff","#000000",e),"&:hover":{backgroundColor:ut(t,.88)}},containedSecondary:{color:Xi(i,"#ffffff","#000000",e),"&:hover":{backgroundColor:ut(i,.88)}},outlined:{borderColor:ut(r,.38)}}},MuiIconButton:{styleOverrides:{root:{color:s,"&:hover":{color:r,backgroundColor:ut(t,.1)},"&.Mui-focusVisible":o}}},MuiOutlinedInput:{styleOverrides:{root:{"& .MuiOutlinedInput-notchedOutline":{borderColor:n.divider},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:ut(r,.55)},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:t}}}},MuiMenuItem:{styleOverrides:{root:{"&:hover":{backgroundColor:ut(t,.08)},"&.Mui-selected, &.Mui-selected:hover":{backgroundColor:ut(t,.14)},"&.Mui-focusVisible":{...o,outlineOffset:-2}}}},MuiListItemButton:{styleOverrides:{root:{"&:hover":{backgroundColor:ut(t,.08)},"&.Mui-selected, &.Mui-selected:hover":{backgroundColor:ut(t,.14)},"&.Mui-focusVisible":{...o,outlineOffset:-2}}}},MuiTooltip:{styleOverrides:{tooltip:{color:r,backgroundColor:n.paper,border:`1px solid ${n.divider}`},arrow:{color:n.paper}}}}})}function o_(n){const e=tn.c(10),{children:t}=n,i=Ji(),r=Ol();let s;e[0]!==r||e[1]!==i?(s=s_(i,r),e[0]=r,e[1]=i,e[2]=s):s=e[2];const o=s;let a,c;e[3]!==r||e[4]!==i?(a=()=>{zc({background:i.background,paper:i.paper,textPrimary:i["text.primary"],textSecondary:i["text.secondary"],divider:i.divider,button:i.button,buttonForeground:Xi(i.button,"#ffffff","#000000",r),statusError:i["status.error"],statusWarning:i["status.warning"],statusSuccess:i["status.success"],statusInfo:i["status.info"],statusDisabled:i["status.disabled"]},r)},c=[r,i],e[3]=r,e[4]=i,e[5]=a,e[6]=c):(a=e[5],c=e[6]),K.useEffect(a,c);let l;return e[7]!==t||e[8]!==o?(l=B.jsx(Bu,{theme:o,children:t}),e[7]=t,e[8]=o,e[9]=l):l=e[9],l}const a_=K.lazy(()=>Io(()=>import("./Assistant-Bh9SP7Ed.js").then(n=>n.A),__vite__mapDeps([10,1,2,3,4,0,5,6,7,8,11,12,13,14,15,16,17,18,19,20])));function l_(n){const e=tn.c(33),{error:t}=n,i=Ji(),r=i["text.primary"];let s;e[0]!==i.background||e[1]!==r?(s={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",p:"2rem",boxSizing:"border-box",textAlign:"center",color:r,backgroundColor:i.background},e[0]=i.background,e[1]=r,e[2]=s):s=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o={maxWidth:760},e[3]=o):o=e[3];const a=i["status.error"];let c;e[4]!==a?(c=B.jsx(cr,{component:"h2",variant:"h5",sx:{mb:2,color:a},children:"Assistant stopped to protect your data"}),e[4]=a,e[5]=c):c=e[5];const l=i["status.error"];let d;e[6]!==l?(d={mb:2,lineHeight:1.5,color:l,overflowWrap:"anywhere"},e[6]=l,e[7]=d):d=e[7];let h;e[8]!==t.message||e[9]!==d?(h=B.jsx(cr,{sx:d,children:t.message}),e[8]=t.message,e[9]=d,e[10]=h):h=e[10];const f=i["text.secondary"];let p;e[11]!==f?(p=B.jsx(cr,{sx:{mb:3,lineHeight:1.5,color:f,fontSize:"0.95rem"},children:`Do not clear this browser's site data and do not delete or "reset" Assistant storage — your data may still be recoverable from this browser profile. Try reloading first; if this screen keeps appearing, contact support with a screenshot of this message.`}),e[11]=f,e[12]=p):p=e[12];let g;e[13]===Symbol.for("react.memo_cache_sentinel")?(g=B.jsx(pa,{variant:"contained",onClick:u_,children:"Reload Assistant"}),e[13]=g):g=e[13];const x=i.divider,m=i["text.primary"];let u;e[14]!==i.button?(u=ut(i.button,.08),e[14]=i.button,e[15]=u):u=e[15];let E;e[16]!==u?(E={backgroundColor:u},e[16]=u,e[17]=E):E=e[17];let T;e[18]!==i.divider||e[19]!==m||e[20]!==E?(T=B.jsxs(hu,{direction:"row",justifyContent:"center",flexWrap:"wrap",gap:1.5,children:[g,B.jsx(pa,{variant:"outlined",onClick:c_,title:"Preserves conversations and resets only tabs, panels, and layout state",sx:{borderColor:x,color:m,"&:hover":E},children:"Reset layout & tabs"})]}),e[18]=i.divider,e[19]=m,e[20]=E,e[21]=T):T=e[21];const M=i["text.secondary"];let D;e[22]!==M?(D=B.jsx(cr,{sx:{mt:2,lineHeight:1.5,color:M,fontSize:"0.85rem"},children:"The reset preserves conversations and stored Assistant data."}),e[22]=M,e[23]=D):D=e[23];let R;e[24]!==p||e[25]!==T||e[26]!==D||e[27]!==c||e[28]!==h?(R=B.jsxs(ma,{sx:o,children:[c,h,p,T,D]}),e[24]=p,e[25]=T,e[26]=D,e[27]=c,e[28]=h,e[29]=R):R=e[29];let A;return e[30]!==R||e[31]!==s?(A=B.jsx(ma,{sx:s,children:R}),e[30]=R,e[31]=s,e[32]=A):A=e[32],A}function c_(){return window.location.assign(kc())}function u_(){return window.location.reload()}const Ll=n=>{const e=tn.c(17),{onReady:t}=n;let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=fa(),e[0]=i):i=e[0];const[r,s]=K.useState(i);let o;e[1]===Symbol.for("react.memo_cache_sentinel")?(o=uu(),e[1]=o):o=e[1];const[a,c]=K.useState(o);let l,d;e[2]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let T=!1;return fa()?(s(!0),()=>{T=!0}):(du().then(()=>{T||s(!0)}).catch(M=>{T||c(M instanceof Error?M:new Error(String(M)))}),()=>{T=!0})},d=[],e[2]=l,e[3]=d):(l=e[2],d=e[3]),K.useEffect(l,d);let h,f;e[4]!==r?(h=()=>{if(!r)return;const T=Td(),M=xd();return()=>{M?.(),T?.()}},f=[r],e[4]=r,e[5]=h,e[6]=f):(h=e[5],f=e[6]),K.useEffect(h,f);let p;e[7]===Symbol.for("react.memo_cache_sentinel")?(p={width:"100%",height:"100%",overflow:"hidden"},e[7]=p):p=e[7];let g,x,m;e[8]===Symbol.for("react.memo_cache_sentinel")?(x=B.jsx(Yu,{}),m=B.jsx(qu,{}),g=B.jsx(bd,{}),e[8]=g,e[9]=x,e[10]=m):(g=e[8],x=e[9],m=e[10]);let u;e[11]!==a||e[12]!==t||e[13]!==r?(u=a instanceof Fl?B.jsx(Ad,{error:a}):a?B.jsx(l_,{error:a}):r?B.jsx(a_,{onReady:t}):null,e[11]=a,e[12]=t,e[13]=r,e[14]=u):u=e[14];let E;return e[15]!==u?(E=B.jsx("div",{style:p,children:B.jsx(fu,{runtime:pu,store:qn,children:B.jsx(o_,{children:B.jsx(zu,{children:B.jsxs(r_,{topology:"grid",cornerRadius:18,children:[x,m,g,u]})})})})}),e[15]=u,e[16]=E):E=e[16],E},S_=Object.freeze(Object.defineProperty({__proto__:null,AssistantApp:Ll,default:Ll},Symbol.toStringTag,{value:"Module"}));export{S_ as A,__ as N,Ql as a,x_ as h,g_ as m,v_ as r};
