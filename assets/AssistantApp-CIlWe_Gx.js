const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/reduxStore-DigCBjPi.js","assets/index-I_iB2Z6J.js","assets/index-BmF_PyhY.css","assets/llm-D4ON1aOW.js","assets/schema-DDBIr7SE.js","assets/csrf-BHQQmLsK.js","assets/durability-DKCIqcJL.js","assets/boot-DkjrKi2B.js","assets/collectionsThunks-BfMRwoVy.js","assets/createSvgIcon-CU0toa0g.js","assets/slackSocketMode-ysG-MsXX.js","assets/publicImagesSlice-Dg6LdhjQ.js","assets/api-MSlgmweL.js","assets/userImagesSlice-Bl9l9cYl.js","assets/ingestDocument-BjjRFgBo.js","assets/TextField-rbePmyJC.js","assets/reduxStore-D-ZJ1log.css","assets/Assistant-BtvRMRTj.js","assets/ReduxAppDataRoot-BI8P5GD8.js","assets/AudioProvider-rzgkkFSo.js","assets/PaletteThemeProvider-DJ_bTdMZ.js","assets/ThemeProvider-CIm62KIC.js","assets/isObject-CGZ9pm3u.js","assets/toNumber-DbsqjrQD.js","assets/AudioProvider-GTsJifJ7.css","assets/cronStream-Cv_qr86e.js","assets/canonicalProjectPatchSet-BRbCJUNt.js","assets/openrouter-BsIyaW6r.js","assets/pkce-CpKKDV7R.js","assets/oauth-CKngOZSX.js","assets/App-DJpwoC3O.js","assets/oauthCallbackContract-B3NnAqVX.js","assets/Assistant-Gf3kyABh.css"])))=>i.map(i=>d[i]);
import{_ as Rc,r as he,c as Yn,j as ue,w as Vl,f as Gl}from"./index-I_iB2Z6J.js";import{i as Cc,d as Wl,e as Xl,r as ql,D as mn,N as Pc,n as $l,f as ra,g as jl,p as sa,h as Yl,j as Ic,k as zi,B as Kl,S as Zl,a as Jl,P as Ql,c as eu,b as tu,U as nu}from"./PaletteThemeProvider-DJ_bTdMZ.js";import{d as Vt,a as Dc,b as Uo,r as iu,c as ru,R as su}from"./ReduxAppDataRoot-BI8P5GD8.js";import{bQ as ou,cS as au,cT as cu,k as lu,cU as uu,cV as du,cW as oa,cX as hu,cY as fu,cZ as pu,c_ as mu,c$ as Lc,d0 as gu,d1 as vu,d2 as _u,d3 as xu,d4 as Uc,d5 as Nc,d6 as Oc,d7 as Fc,d8 as Su,d9 as Bc,da as yu,db as Mu,dc as Eu,dd as No,de as gi,df as qt,dg as bu,dh as aa,di as kc,dj as Tu,dk as ca,dl as wu,dm as Au,dn as Ru,dp as zc,dq as Cu,dr as Oo,ds as Pu,dt as Iu,du as Du,dv as Lu,dw as Uu,dx as je,dy as Nu,c3 as Ou,ay as Fu,aA as Hc,aB as Bu,dz as Fo,dA as Vc,dB as Gc,dC as ku,dD as Bo,dE as zu,dF as Hu,dG as Vu,dH as Gu,dI as Wu,dJ as Xu,dK as qu,dL as jr,dM as $u,dN as ju,dO as Yu,dP as Ku,dQ as Zu,dR as Ju,dS as Qu,dT as ed,dU as td,dV as nd,dW as id,dX as rd,dY as sd,dZ as od,d_ as ad,d$ as cd,e0 as ld,e1 as la,e2 as ud,e3 as Br,e4 as dd,e5 as hd,aF as fd,e6 as pd,e7 as md,e8 as gd,bJ as Wc,e9 as ua,ea as vd,by as da,bz as _d,bA as xd,eb as Sd,u as yd,bU as Md}from"./reduxStore-DigCBjPi.js";import{l as Ed,S as bd}from"./boot-DkjrKi2B.js";import{h as Td,l as wd,s as $n,P as Ad,W as Rd}from"./collectionsThunks-BfMRwoVy.js";import{u as Cd}from"./durability-DKCIqcJL.js";import{d as Pd,l as zs,m as Id}from"./llm-D4ON1aOW.js";import"./schema-DDBIr7SE.js";import{g as Xc,a as Dd}from"./csrf-BHQQmLsK.js";import{t as qc}from"./App-DJpwoC3O.js";import{T as rr,a as ha,B as fa}from"./TextField-rbePmyJC.js";const $c=Vt,Cr="assistant.migrationStress.fixture.v1",Ii="assistant.migrationStress.run.v1",ko=128*1024,zo=32*1024,Ho=256*1024,Ld=256,Ud=64,pa=200,Yr=25,ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_=+[]{}()<>/\\|;:,.!?~";function Qe(n,e){if(!n)throw new Error(e)}function Di(n,e){const t=Number(n);return Number.isFinite(t)&&t>=0?t:e}function ga(n,e){const t=Number(n);return Number.isFinite(t)&&t>0?t:e}function Nd(n){const e=Di(n?.reduxMiB,0);return Qe(e>0,"Migration stress reduxMiB must be greater than zero."),Qe(e<=4096,"Migration stress reduxMiB must not exceed 4096 MiB."),{reduxMiB:e,depotRatio:Math.min(64,Di(n?.depotRatio,.1)),testRunsRatio:Math.min(64,Di(n?.testRunsRatio,.01)),depotMiB:n.depotMiB===void 0?null:Math.min(4096,Di(n.depotMiB,0)),testRunsMiB:n.testRunsMiB===void 0?null:Math.min(4096,Di(n.testRunsMiB,0)),depotRecordKiB:Math.min(256*1024,ga(n.depotRecordKiB,Ld)),testRunCollectionKiB:Math.min(256*1024,ga(n.testRunCollectionKiB,Ud))}}function Li(n,e){return n<=0?0:Math.ceil(n/e)}function Qt(n,e,t){return Math.max(0,Math.min(e,n-t*e))}function Od(n){const e=Nd(n),t=Math.round(e.reduxMiB*1024*1024),i=Math.round(t*.7),r=Math.round(t*.26),s=Math.max(0,t-i-r),o=Math.round((e.depotMiB??e.reduxMiB*e.depotRatio)*1024*1024),a=Math.round((e.testRunsMiB??e.reduxMiB*e.testRunsRatio)*1024*1024),c=Math.round(e.depotRecordKiB*1024),l=Math.round(e.testRunCollectionKiB*1024);return{schemaVersion:1,requested:e,budgets:{reduxPayloadBytes:t,messagePayloadBytes:i,artifactPayloadBytes:r,fileSavePayloadBytes:s,depotPayloadBytes:o,testRunPayloadBytes:a},counts:{messages:Li(i,ko),artifactVersions:Li(r,zo),fileSaves:Li(s,Ho),depotObjects:Li(o,c),testRunCollections:Li(a,l)},seededAt:new Date().toISOString()}}function ji(n,e){if(n<=0)return"";const t=`${e}|`;if(t.length>=n)return t.slice(0,n);const i=n-t.length;return t+ma.repeat(Math.ceil(i/ma.length)).slice(0,i)}function Vi(n){return`migration-stress-message-${n}`}function jc(n){return`migration-stress-artifact-${n}`}function Yc(n){return`migration-stress-save-${n}`}function Hi(n){return`migration-stress-depot-${n}`}function Kc(n){return`migration-stress-agent-${n}`}function Fd(n,e,t){const i=Vi(n),r="2026-07-24T00:00:00.000Z",s=ji(t,i),o=n%3,a=o===0?{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"getFiles",arguments:"{}"}},result:{files:{[`/synthetic/${n}.txt`]:s},entryMetadata:{}},error:""}],model:"migration-stress",done:!0}:o===1?{text:s,toolUses:[],model:"migration-stress",done:!0}:{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"search",arguments:"{}"}},result:{results:[{title:`Synthetic ${n}`,content:s}]},error:""}],model:"migration-stress",done:!0};return{_timestamp:17848512e5+n,id:i,type:"response",conversationId:e,chain:[{iteration:0,response:a,stepAugments:[],errors:[],origin:"assistant",metadata:{startTime:r,endTime:r,stage:"closed"}}],origin:{provider:"test",model:"migration-stress"},state:{type:"success"},processing:{},markers:{analysis:"none",definitions:"none",facts:"none",summary:"none"},ui:{annotationMode:"none",definitionState:"none",factCheckState:"none"},permittedToolClasses:[],attachments:[],metadata:{category:"migration-stress",index:n,creationTime:r,updateTime:r},sidecars:o===2?{synthetic:{payloadBytes:t}}:{},augments:[]}}function Bd(n,e){const t=n?.chain?.[0]?.response;return e%3===0?t?.toolUses?.[0]?.result?.files?.[`/synthetic/${e}.txt`]:e%3===1?t?.text:t?.toolUses?.[0]?.result?.results?.[0]?.content}function kd(n,e){const t=jc(n);return{id:t,name:`/artifacts/migration-stress/${n}.md`,language:"markdown",type:"file",content:ji(e,t),originMsg:Vi(n%Math.max(1,n+1)),createdAt:17848512e5+n,_timestamp:17848512e5+n,source:"response",versionLabel:"v1",isComplete:!0,description:"Synthetic migration stress artifact"}}function zd(n,e){const t=Yc(n);return{id:t,label:`Synthetic save ${n}`,timestamp:17848512e5+n,status:"committed",files:[{path:`/synthetic/save-${n}.txt`,prevContentHash:`before-${n}`,prevContent:"",newContentHash:`after-${n}`,newContent:ji(e,t)}],metadata:{kind:"artifact",actor:"assistant"}}}async function Hd(){const{getAssistantDataStore:n,persistor:e}=await Rc(async()=>{const{getAssistantDataStore:i,persistor:r}=await import("./reduxStore-DigCBjPi.js").then(s=>s.zc);return{getAssistantDataStore:i,persistor:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));e.pause(),await e.flush();const t=await n();return{dataStore:t,snapshot:await t.loadSnapshot()}}async function Kr(n,e,t,i,r){if(i===0)return;const s=uu(e,t),o=[...s.ids];for(let a=0;a<i;a+=pa){const c=Math.min(i,a+pa);await n.transaction(async l=>{for(let h=a;h<c;h+=1){const d=r(h);o.push(d.id),await l.putEntity(e,d.id,d)}await l.putEntityStructure(e,{ids:o,meta:s.meta})})}}async function Vd(n,e,t){const i=lu(t),r=String(i.conversations?.ids?.[0]||"migration-stress-unattached");await Kr(e,"messages",i.messages,n.counts.messages,o=>Fd(o,r,Qt(n.budgets.messagePayloadBytes,ko,o))),await Kr(e,"artifactVersions",i.artifactVersions,n.counts.artifactVersions,o=>kd(o,Qt(n.budgets.artifactPayloadBytes,zo,o)));const s=i.fileSaves&&typeof i.fileSaves=="object"?i.fileSaves:{};await Kr(e,"fileSaves",{ids:Array.isArray(s.ids)?s.ids:[],entities:s.entities||{},checkpoints:s.checkpoints||{},checkpointOrder:s.checkpointOrder||[]},n.counts.fileSaves,o=>zd(o,Qt(n.budgets.fileSavePayloadBytes,Ho,o)))}function Gd(n,e){const t=new Uint8Array(n);return t.fill(e*31+17&255),t}async function Wd(n){await $n.clearAll();const e=Math.round(n.requested.depotRecordKiB*1024);for(let t=0;t<n.counts.depotObjects;t+=Yr){const i=Math.min(n.counts.depotObjects,t+Yr),r=[];for(let s=t;s<i;s+=1){const o=Qt(n.budgets.depotPayloadBytes,e,s);r.push({id:Hi(s),type:s%2===0?"migration-stress-text":"migration-stress-binary",obj:s%2===0?{kind:"text",payload:ji(o,Hi(s))}:{kind:"binary",payload:Gd(o,s)},timestamp:17848512e5+s,owners:[`message:${Vi(s%Math.max(1,n.counts.messages))}`]})}await $n.storeMany(r,{chunkSize:Yr})}}async function Xd(n){const e=Ed.createInstance({name:"assistant-agent-evals",storeName:"suite-runs-v2"});await e.clear();const t=Math.round(n.requested.testRunCollectionKiB*1024);for(let i=0;i<n.counts.testRunCollections;i+=1){const r=Kc(i),s=Qt(n.budgets.testRunPayloadBytes,t,i);await e.setItem(`agent:${r}`,[{id:`migration-stress-run-${i}`,agentId:r,status:"completed",startedAt:17848512e5+i,completedAt:1784851201e3+i,syntheticPayload:ji(s,r)}])}}function Pr(n){const e=window.localStorage.getItem(n);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function sr(n,e){window.localStorage.setItem(n,JSON.stringify(e))}function Zr(){const n=$c.getState();return{engine:n.persistence.engine==="sqlite"?"sqlite":"legacy",persistencePhase:String(n.persistence.phase),messageCount:Object.values(n.conversationCatalog.entities).reduce((t,i)=>t+(i?.messageCount??0),0),artifactVersionCount:n.artifactVersions.ids.length}}async function qd(){const n=Pr(Cr);Qe(n?.schemaVersion===1,"Migration stress fixture metadata is missing.");const e=$c.getState();let t=0;const i=au().iterateConversations;Qe(i,"Complete scope iterator is required to verify cold migration fixtures.");const r=new Set;for await(const u of i())for(const g of u.messages){const _=/^migration-stress-message-(\d+)$/.exec(g.id);if(!_)continue;const m=Number(_[1]);if(m>=n.counts.messages)continue;Qe(!r.has(m),`Duplicate synthetic message ${m}.`);const f=Bd(g,m),T=Qt(n.budgets.messagePayloadBytes,ko,m);Qe(typeof f=="string",`Synthetic message ${m} is missing its payload.`),Qe(f.length===T,`Synthetic message ${m} payload length differs.`),Qe(f.startsWith(`${Vi(m)}|`)||f===Vi(m).slice(0,T),`Synthetic message ${m} payload marker differs.`),t+=f.length,r.add(m)}Qe(r.size===n.counts.messages,"Synthetic message inventory is incomplete.");let s=0;for(let u=0;u<n.counts.artifactVersions;u+=1){const g=Td(e.artifactVersions,jc(u)),_=Qt(n.budgets.artifactPayloadBytes,zo,u);Qe(g,`Synthetic artifact ${u} is missing.`);const m=await wd(g);Qe(m.content.length===_,`Synthetic artifact ${u} payload length differs.`),s+=m.content.length}let o=0;for(let u=0;u<n.counts.fileSaves;u+=1){const _=e.fileSaves?.entities?.[Yc(u)]?.files?.[0]?.newContent,m=Qt(n.budgets.fileSavePayloadBytes,Ho,u);Qe(typeof _=="string",`Synthetic file save ${u} is missing.`),Qe(_.length===m,`Synthetic file save ${u} payload length differs.`),o+=_.length}let a=0;const c=Math.round(n.requested.depotRecordKiB*1024);for(let u=0;u<n.counts.depotObjects;u+=1){const g=await $n.retrieve(Hi(u)),_=Qt(n.budgets.depotPayloadBytes,c,u);if(Qe(g,`Synthetic depot object ${u} is missing.`),u%2===0)Qe(g.kind==="text"&&typeof g.payload=="string",`Synthetic depot text object ${u} is malformed.`),Qe(g.payload.length===_,`Synthetic depot text object ${u} payload length differs.`),Qe(g.payload.startsWith(`${Hi(u)}|`)||g.payload===Hi(u).slice(0,_),`Synthetic depot text object ${u} marker differs.`),a+=g.payload.length;else{Qe(g.kind==="binary"&&ArrayBuffer.isView(g.payload),`Synthetic depot binary object ${u} is malformed.`),Qe(g.payload.byteLength===_,`Synthetic depot binary object ${u} payload length differs.`);const m=new Uint8Array(g.payload.buffer,g.payload.byteOffset,g.payload.byteLength);if(m.length>0){const f=u*31+17&255;Qe(m[0]===f&&m[m.length-1]===f,`Synthetic depot binary object ${u} marker differs.`)}a+=g.payload.byteLength}}let l=0;const h=Math.round(n.requested.testRunCollectionKiB*1024);for(let u=0;u<n.counts.testRunCollections;u+=1){const _=(await cu(Kc(u)))[0]?.syntheticPayload,m=Qt(n.budgets.testRunPayloadBytes,h,u);Qe(typeof _=="string",`Synthetic test-run collection ${u} is missing.`),Qe(_.length===m,`Synthetic test-run collection ${u} payload length differs.`),l+=_.length}const d={messages:n.counts.messages,messagePayloadBytes:t,artifactVersions:n.counts.artifactVersions,artifactPayloadBytes:s,fileSaves:n.counts.fileSaves,fileSavePayloadBytes:o,depotObjects:n.counts.depotObjects,depotPayloadBytes:a,testRunCollections:n.counts.testRunCollections,testRunPayloadBytes:l},p=e.persistence.engine==="sqlite"?"sqlite":"legacy";return Qe(t===n.budgets.messagePayloadBytes,"Synthetic message payload total differs."),Qe(s===n.budgets.artifactPayloadBytes,"Synthetic artifact payload total differs."),Qe(o===n.budgets.fileSavePayloadBytes,"Synthetic file-save payload total differs."),Qe(a===n.budgets.depotPayloadBytes,"Synthetic depot payload total differs."),Qe(l===n.budgets.testRunPayloadBytes,"Synthetic test-run payload total differs."),{plan:n,engine:p,verified:d}}const va={async seedFixture(n){Qe(Zr().engine==="legacy","Migration stress fixtures can only be seeded in legacy mode.");const e=Od(n);window.localStorage.removeItem(Ii);const{dataStore:t,snapshot:i}=await Hd();return await Vd(e,t,i),await Wd(e),await Xd(e),sr(Cr,e),e},getFixturePlan:()=>Pr(Cr),getRunState:()=>Pr(Ii),getStateSummary:Zr,startMigration(){Qe(Zr().engine==="legacy","Migration stress cutover must start in legacy mode.");const n=Pr(Cr);Qe(n?.schemaVersion===1,"Seed the migration stress fixture before starting cutover.");const e={schemaVersion:1,status:"running",startedAt:new Date().toISOString(),phases:[]};return sr(Ii,e),ou.startMigration(t=>{e.phases.push({phase:t.phase,at:new Date().toISOString(),...t.detail===void 0?{}:{detail:t.detail},...t.stats===void 0?{}:{stats:t.stats}}),t.phase==="reloading"&&(e.status="reload-requested"),sr(Ii,e)}).catch(t=>{e.status="failed",e.error=t instanceof Error?t.message:String(t),sr(Ii,e)}),e},verifyFixture:qd};function $d(){if(Cc()&&new URL(window.location.href).searchParams.get("migrationStress")==="1")return window.__assistantMigrationStress=va,()=>{window.__assistantMigrationStress===va&&delete window.__assistantMigrationStress}}function jd(n,e,t){const i=e.getMessageAncestry(n,t,"resource");return{ancestryMessages:i.length,chainEntries:i.reduce((r,s)=>r+(s.type==="response"?s.chain.length:0),0),sidecarKeys:i.reduce((r,s)=>r+Object.keys(s.sidecars??{}).length,0),attachments:i.reduce((r,s)=>r+(s.type==="user"?s.attachments.length:0),0)}}function _a(n,e,t,i){if(!t)throw new Error(`Performance scenario tab is missing: ${i.tabId}`);if(t.conversationId!==i.conversationId)throw new Error(`Performance scenario tab ${i.tabId} points to the wrong conversation`);if(t.messageId!==i.routeMessageId)throw new Error(`Performance scenario tab ${i.tabId} points to the wrong route message`);n.getConversationById(i.conversationId),n.requireAncestryMessage(i.routeMessageId);const r=jd(n,e,i.routeMessageId);for(const s of Object.keys(i.fingerprint))if(r[s]!==i.fingerprint[s])throw new Error(`Performance scenario fingerprint mismatch for ${i.tabId}.${s}: expected ${i.fingerprint[s]}, got ${r[s]}`);return r}const Vn=()=>Uo;let Hs=0,En=null,vi,Gi,kr;function Xn(){return Vt.getState()}function Yd(){const n=Xn();return n.ui.tabs.find(e=>e.id===n.ui.activeTabId)??null}function Vs(){vi&&Vn().scopes.release(vi),vi=void 0,En=null,Gi=void 0}function Ir(){if(!vi||!En)return;const n=vi.requireMessage(En);return n.type==="user"?n:void 0}function Kd(){kr?.(),kr=Vt.subscribe(()=>{const n=Ir()?.text;n!==Gi&&(Gi=n,Hs+=1)})}function xa(){const n=Xn(),e=Yd();return{activeTabId:n.ui.activeTabId,activeConversationId:e?.conversationId??null,activeRouteMessageId:e?.messageId??null,draftMessageId:n.ui.draftMessageId,messageCount:Object.values(n.conversationCatalog.entities).reduce((t,i)=>t+(i?.messageCount??0),0),conversationCount:n.conversationCatalog.ids.length,artifactVersionCount:n.artifactVersions.ids.length,persistence:{engine:n.persistence.engine,phase:n.persistence.phase,pendingWrites:n.persistence.pendingWrites},diagnostics:{memoryDiagnostics:!!n.settings.features.memoryDiagnostics,memoryTimelineDiagnostics:!!n.settings.features.memoryTimelineDiagnostics}}}async function Zd(n){const t=Xn().ui.tabs.find(i=>i.id===n);return t?Vn().scopes.withMessage(t.messageId,{reason:"performance-quiescence"},i=>Vn().reads.getMessageAncestry(i,t.messageId,"resource").some(r=>r.type==="response"&&(r.state.type==="created"||r.state.type==="in-progress"))):!1}function Jd(n){return`[data-performance-conversation-surface="true"][data-active-tab-id="${CSS.escape(n)}"][data-conversation-ready="true"]`}function Sa(n){return!!document.querySelector(`[data-editor-role="message"][data-message-id="${CSS.escape(n)}"] [contenteditable="true"]`)}async function Jr(n){for(let e=0;e<n;e+=1)await new Promise(t=>window.requestAnimationFrame(()=>t()))}async function Zc(n){const e=Xn();return{persistenceReady:e.persistence.phase==="ready",pendingWrites:e.persistence.pendingWrites,activeTabMatches:e.ui.activeTabId===n,surfaceReady:!!document.querySelector(Jd(n)),activeResponse:await Zd(n)}}async function ya(n){const e=await Zc(n);return e.persistenceReady&&e.pendingWrites===0&&e.activeTabMatches&&e.surfaceReady&&!e.activeResponse}const Ma={async prepareDeterministicMode(){Vt.dispatch(oa({path:"features.memoryDiagnostics",value:!1})),Vt.dispatch(oa({path:"features.memoryTimelineDiagnostics",value:!1})),hu(!1),fu(!1),localStorage.setItem("assistant.performanceDiagnostics.enabled","false"),localStorage.setItem("assistant.memoryTimeline.desired","false"),await Jr(2)},getStateSummary:xa,async assertScenario(n){const e=Vn(),t=await e.scopes.acquireConversations([n.slow.conversationId,n.fast.conversationId],{reason:"performance-scenario-validation"});try{const i=Xn(),r=Dc.services.sources.messageRendering.getDraftUserMessage(n.draft.messageId);if(i.ui.draftMessageId!==n.draft.messageId)throw new Error(`Performance scenario draft mismatch: expected ${n.draft.messageId}, got ${i.ui.draftMessageId??"<none>"}`);if(r.text.length!==n.draft.expectedTextLength)throw new Error(`Performance scenario draft length mismatch: expected ${n.draft.expectedTextLength}, got ${r.text.length}`);return{slow:_a(t,e.reads,i.ui.tabs.find(s=>s.id===n.slow.tabId),n.slow),fast:_a(t,e.reads,i.ui.tabs.find(s=>s.id===n.fast.tabId),n.fast)}}finally{e.scopes.release(t)}},focusTab(n){const e=Xn();if(!e.ui.tabs.some(t=>t.id===n))throw new Error(`Cannot focus missing performance scenario tab ${n}`);Vs(),Xl(e.ui.activeTabId,n),Vt.dispatch(du(n))},async awaitQuiescence({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(await document.fonts?.ready;performance.now()<t;){if(await ya(n)&&(await Jr(2),await ya(n))){ql(n);return}await new Promise(i=>window.setTimeout(i,25))}throw new Error(`Performance scenario did not become quiescent for ${n}: ${JSON.stringify({summary:xa(),readiness:await Zc(n)})}`)},async awaitEditableUserMessage({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(;performance.now()<t;){const i=Xn(),r=i.ui.tabs.find(s=>s.id===n);if(i.ui.activeTabId===n&&r&&Sa(r.messageId)){const s=await Vn().scopes.acquireConversation(r.conversationId,{requiredMessageId:r.messageId,reason:"performance-editor-observation"}),o=s.requireMessage(r.messageId);if(o.type!=="user")throw Vn().scopes.release(s),new Error(`Editable performance target ${r.messageId} is not a user message`);if(await Jr(2),Sa(o.id))return Vs(),vi=s,En=o.id,Gi=o.text,{messageId:o.id};Vn().scopes.release(s)}await new Promise(s=>window.setTimeout(s,25))}throw new Error(`Editable user message did not mount for tab ${n}`)},getEditorTargetDescriptor(){const n=Ir();if(!En||!n)throw new Error("Performance scenario editor target is unavailable");return{messageId:En,textLength:n.text.length,attachmentCount:n.attachments.length,updateCount:Hs}},assertEditorText(n){const e=Ir();if(!e)throw new Error("Performance scenario editor target is unavailable");if(e.text!==n)throw new Error(`Performance scenario final editor text mismatch: expected length ${n.length}, got ${e.text.length}`);return!0},resetEditorUpdateCount(n){if(n&&n!==En)throw new Error("Acquire the editable performance target before resetting its counter");const e=Ir();if(!En||!e)throw new Error("Cannot reset performance counter without an acquired user message");Gi=e.text,Hs=0}};function Qd(){if(Cc())return Wl(),Kd(),window.__assistantPerformanceDriver=Ma,()=>{kr?.(),kr=void 0,Vs(),window.__assistantPerformanceDriver===Ma&&delete window.__assistantPerformanceDriver}}const eh="assistant.remote-control-instance.v1",zr="instance",th="identity",Jc=4e3,nh=128;function ih(){return new Promise((n,e)=>{const t=indexedDB.open(eh,1);let i=!1;const r=setTimeout(()=>{i=!0,e(new Error("Remote-control instance storage is blocked."))},Jc);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(zr)||t.result.createObjectStore(zr)},t.onsuccess=()=>{if(clearTimeout(r),i){t.result.close();return}i=!0,t.result.onversionchange=()=>t.result.close(),n(t.result)},t.onerror=()=>{clearTimeout(r),i=!0,e(t.error||new Error("Remote-control instance storage failed."))}})}function rh(){const n=async(e,t)=>{const i=await ih();try{return await new Promise((r,s)=>{const o=i.transaction(zr,e);let a;const c=setTimeout(()=>{try{o.abort()}catch{}s(new Error("Remote-control instance storage timed out."))},Jc);o.oncomplete=()=>{clearTimeout(c),r(a)},o.onabort=o.onerror=()=>{clearTimeout(c),s(o.error||new Error("Remote-control instance storage failed."))};const l=h=>{clearTimeout(c);try{o.abort()}catch{}s(h)};try{t(o.objectStore(zr),h=>{a=h},l)}catch(h){l(h)}})}finally{i.close()}};return{read:e=>n("readonly",(t,i)=>{const r=t.get(e);r.onsuccess=()=>i(r.result)}),update:(e,t)=>n("readwrite",(i,r,s)=>{const o=i.get(e);o.onsuccess=()=>{try{const a=t(o.result??void 0);i.put(a,e),r(a)}catch(a){s(a)}}})}}function sh(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}function oh(n){return typeof n=="string"&&n.length>0&&n.length<=nh&&!/[\s/\\]/.test(n)}function ah(n){return!sh(n)||!oh(n.instanceId)||typeof n.createdAt!="string"?null:{instanceId:n.instanceId,createdAt:n.createdAt}}function ch(n="",e=""){const t=`${n} ${e}`.toLowerCase(),i=/iphone|ipad|ipod/.test(t)?"iOS":/android/.test(t)?"Android":/darwin|mac/.test(t)?"macOS":/win/.test(t)?"Windows":/cros/.test(t)?"ChromeOS":/linux|x11/.test(t)?"Linux":"this device",r=/Edg\//.test(e)?"Edge":/OPR\//.test(e)?"Opera":/Firefox\//.test(e)?"Firefox":/Chrome\//.test(e)?"Chrome":/Safari\//.test(e)?"Safari":"Browser";return{os:i,browser:r}}function lh(n,e,t){const i=typeof navigator<"u"?navigator:void 0,{os:r,browser:s}=ch(e??i?.platform??"",i?.userAgent??"");return n==="desktop"?`Desktop app on ${r}`:`${s} on ${r}`}function uh(n,e={}){const t=e.randomUUID??(()=>globalThis.crypto.randomUUID()),i=e.now??(()=>new Date);let r=null;return{getInstanceIdentity(){if(r)return r;const s=n.update(th,o=>ah(o)??{instanceId:t(),createdAt:i().toISOString()});return r=s.catch(o=>{throw r===s&&(r=null),o}),r}}}let Qr=null;function dh(){return Qr||(Qr=uh(rh())),Qr}const Qc=()=>dh().getInstanceIdentity();function hh(n){if(!n||typeof n!="object")return!1;const e=n;return mu(e.peerId)&&(e.kind==="instance"||e.kind==="pod")&&typeof e.peerOnline=="boolean"&&typeof e.lastSeenAt=="string"&&typeof e.clients=="number"}function fh(n){return[...n].sort((e,t)=>{if(e.peerOnline!==t.peerOnline)return e.peerOnline?-1:1;const i=(e.status?.name??"").localeCompare(t.status?.name??"");return i!==0?i:t.lastSeenAt.localeCompare(e.lastSeenAt)})}async function ph(n={}){const{baseURL:e,fetchArguments:t}=await Xc(pu.replace(/^\/+/,"")),i={Accept:"application/json"},r=Dd().settings.apiKeys.proxy||"";r&&(i["x-proxy-key"]=r);const o=await(n.fetchImpl??Pd)(e,{method:"GET",credentials:t.credentials,headers:i,signal:n.signal});if(!o.ok){const l=await o.text().catch(()=>"");throw new Error(`Failed to list peers (${o.status}): ${l||o.statusText}`)}const a=await o.json(),c=a&&typeof a=="object"?a.peers:void 0;if(!Array.isArray(c))throw new Error("Malformed peer list");return fh(c.filter(hh))}const Ea=Object.freeze({});function Gs(n){if(n.status?.instanceId)return n.status.instanceId;const e=Lc(n.peerId);return e?.kind==="instance"?e.id:null}function mh(n,e){const t=n.status;return{instanceId:e,peerId:n.peerId,...t?.name?{name:t.name}:{},...t?.hostKind?{hostKind:t.hostKind}:{},...t?.platform?{platform:t.platform}:{},online:n.peerOnline,lastSeenAt:n.lastSeenAt,acceptsCreate:t?.acceptsCreate!==!1,...Array.isArray(t?.workspaces)?{workspaces:t.workspaces}:{}}}function ba(n,e){return!!n&&n.peerId===e.peerId&&n.name===e.name&&n.hostKind===e.hostKind&&n.platform===e.platform&&n.online===e.online&&n.lastSeenAt===e.lastSeenAt&&n.acceptsCreate===e.acceptsCreate&&n.statusRevision===e.statusRevision&&n.workspaces===e.workspaces}function gh(){let n=Ea;const e=new Set,t=new Map,i=r=>{n=Object.freeze(r);for(const s of Array.from(e))try{s()}catch(o){console.error("[remote-control] presence listener failed:",o)}};return{getSnapshot:()=>n,subscribe(r){return e.add(r),()=>{e.delete(r)}},get:r=>n[r],setPeers(r,s){const o={};for(const h of r){if(h.kind!=="instance")continue;const d=Gs(h);if(!d||d===s)continue;const p=mh(h,d),u=n[d];u?.statusRevision!==void 0&&(p.statusRevision=u.statusRevision,!p.workspaces&&u.workspaces&&(p.workspaces=u.workspaces)),o[d]=u&&ba(u,p)?u:p}const a=Object.keys(n),c=Object.keys(o);(a.length!==c.length||c.some(h=>n[h]!==o[h]))&&i(o)},updateFromClientState(r,s,o=()=>new Date){const a=Lc(r),c=s.status?.instanceId??(a?.kind==="instance"?a.id:null);if(!c)return;const l=n[c],h=s.status,d=!!h&&h!==t.get(c);h&&t.set(c,h);const p={instanceId:c,peerId:r,...h?.name?{name:h.name}:l?.name?{name:l.name}:{},...h?.hostKind?{hostKind:h.hostKind}:l?.hostKind?{hostKind:l.hostKind}:{},...h?.platform?{platform:h.platform}:l?.platform?{platform:l.platform}:{},online:s.peerOnline,lastSeenAt:s.peerOnline?o().toISOString():s.peerSince??l?.lastSeenAt??o().toISOString(),acceptsCreate:h?h.acceptsCreate!==!1:l?.acceptsCreate??!0,...Array.isArray(h?.workspaces)?{workspaces:h.workspaces}:l?.workspaces?{workspaces:l.workspaces}:{}},u=l?.statusRevision;d?p.statusRevision=(u??0)+1:u!==void 0&&(p.statusRevision=u),!(l&&ba(l,{...p,lastSeenAt:l.lastSeenAt}))&&i({...n,[c]:p})},clear(){t.clear(),n!==Ea&&i({})}}}const el=gh();function Bx(n){const e=el;return he.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}const vh=3e4,_h=500,xh=200,Sh=5,yh=1440*60*1e3;function es(n){return n instanceof Error?n.message:String(n)}function Mh(){return typeof document>"u"||document.visibilityState!=="hidden"}function Eh(n){if(typeof document>"u")return()=>{};const e=()=>{document.visibilityState==="visible"&&n()};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}function ts(n){const e=[];for(const t of n.ids){const i=n.entities[t];i?.remote&&e.push(i)}return e}function bh(n){return!!n&&typeof n=="object"&&Array.isArray(n.conversations)}function Th(n){const e=n.store,t=n.fetchPeers??ph,i=n.registry??_u,r=n.presence??el,s=n.syncCatalog??xu,o=n.now??(()=>new Date),a=n.refreshIntervalMs??vh,c=n.statusDebounceMs??_h,l=n.listPageLimit??xh,h=n.maxListPages??Sh,d=n.absentRetentionMs??yh,p=n.isDocumentVisible??Mh,u=n.subscribeVisibility??Eh;let g=!1,_=null,m=[],f=null,T=null,w,M,O=0;const I=new Map;let R=null,U=null,y=null,v=0,x=null;const b=()=>e.getState().workspaces,P=(ce,_e,pe)=>{try{e.dispatch(s({instanceId:ce,workspaceId:_e,conversations:pe}))}catch(C){M=es(C),console.warn("[remote-control] could not sync the remote conversation catalog:",C)}},D=ce=>{if(ce.length!==0){for(const _e of ce)P(_e.remote.instanceId,_e.id,[]);e.dispatch(vu({ids:ce.map(_e=>_e.id)}))}},F=(ce,_e,pe,C)=>{!pe||!Array.isArray(pe.workspaces)||e.dispatch(gu({instanceId:ce,peerId:_e,...pe.name?{instanceName:pe.name}:{},...C?{lastSeenAt:C}:{},workspaces:pe.workspaces}))},N=(ce,_e,pe)=>{if(!pe||!_e||!Array.isArray(_e.workspaces))return;const C=new Set(_e.workspaces.map(Te=>Te.id)),Ve=ts(b()).filter(Te=>Te.remote.instanceId===ce&&!C.has(Te.remote.remoteWorkspaceId));D(Ve)},j=ce=>{const _e=new Map;for(const Ve of ce){if(Ve.kind!=="instance")continue;const Te=Gs(Ve);!Te||Te===_||_e.set(Te,Ve)}for(const[Ve,Te]of _e)F(Ve,Te.peerId,Te.status,Te.lastSeenAt),N(Ve,Te.status,Te.peerOnline);const pe=new Map;for(const Ve of ts(b())){const Te=pe.get(Ve.remote.instanceId)??[];Te.push(Ve),pe.set(Ve.remote.instanceId,Te)}const C=o().getTime()-d;for(const[Ve,Te]of pe){if(Ve===_){D(Te);continue}if(_e.has(Ve))continue;const Be=Te.filter(Se=>{const We=Se.remote.lastSeenAt?Date.parse(Se.remote.lastSeenAt):NaN;return!Number.isFinite(We)||We<C});D(Be)}},H=()=>T||(T=(async()=>{try{const ce=await t();if(!g)return;r.setPeers(ce,_),j(ce),w=o().toISOString(),M=void 0}catch(ce){M=es(ce)}finally{T=null}g&&Re()})(),T),K=()=>{p()&&H()},re=()=>{x&&clearTimeout(x),x=setTimeout(()=>{x=null,k()},c)},ve=(ce,_e,pe,C=!1)=>{r.updateFromClientState(ce,pe,o);const Ve=Gs({peerId:ce,status:pe.status}),Te=!!pe.status&&pe.status!==_e.lastStatus;Te&&(_e.lastStatus=pe.status,Ve&&Ve!==_&&(F(Ve,ce,pe.status,o().toISOString()),N(Ve,pe.status,pe.peerOnline)));const Be=pe.connection==="open"&&pe.peerOnline,Se=Be&&!_e.wasReady;_e.wasReady=Be,!C&&U&&ce===U.peerId&&(Se?k():Te&&Be&&re())},Re=()=>{const ce=new Set;for(const _e of ts(b()))ce.add(_e.remote.peerId);U&&ce.add(U.peerId);for(const[_e,pe]of[...I]){const C=i.get(_e);(!ce.has(_e)||C!==pe.client)&&(pe.unsubscribe(),I.delete(_e))}for(const _e of ce){if(I.has(_e))continue;const pe=i.get(_e);if(!pe)continue;const C={client:pe,unsubscribe:()=>{},wasReady:!1};C.unsubscribe=pe.subscribe(Ve=>ve(_e,C,Ve)),I.set(_e,C),ve(_e,C,pe.getState(),!0)}},W=()=>{for(const ce of I.values())ce.unsubscribe();I.clear()},k=async()=>{const ce=U,_e=R,pe=y?.client;if(!ce||!_e||!pe)return;const C=pe.getState();if(C.connection!=="open"||!C.peerOnline)return;const Ve=++v,Te=[];try{let Be;for(let Se=0;Se<h;Se+=1){const We=await pe.submit({type:"instance.listConversations",workspaceId:ce.remoteWorkspaceId,limit:l,...Be?{cursor:Be}:{}});if(!bh(We.result)||(Te.push(...We.result.conversations),!We.result.nextCursor))break;Be=We.result.nextCursor}}catch(Be){M=es(Be);return}!g||Ve!==v||R!==_e||(O=Te.length,P(ce.instanceId,_e,Te))},V=()=>{x&&(clearTimeout(x),x=null),v+=1;const ce=y;y=null,U=null,R=null,ce?.release()},ne=()=>{const ce=b(),_e=ce.activeWorkspaceId?ce.entities[ce.activeWorkspaceId]:void 0,pe=_e?.remote;if(!_e||!pe){y&&(V(),Re());return}if(y&&R===_e.id&&U?.peerId===pe.peerId)return;const C=y;y=i.acquire(pe.peerId,n.getExecutor()),R=_e.id,U=pe,v+=1,C?.release(),Re(),k(),H()};let Q;const de=()=>{if(!g)return;const ce=b().activeWorkspaceId,_e=ce?b().entities[ce]:void 0,pe=_e?.remote?`${ce}:${_e.remote.peerId}`:ce;pe!==Q&&(Q=pe,ne())},De=()=>{if(g){g=!1,f&&(clearInterval(f),f=null);for(const ce of m.splice(0))ce();W(),V(),Q=void 0}};return{start:()=>(g||(g=!0,m=[e.subscribe(de),u(K)],f=setInterval(K,a),n.getOwnInstanceId().then(ce=>{_=ce}).catch(ce=>{console.warn("[remote-control] instance identity unavailable; remote workspaces will include every instance:",ce)}).then(()=>{g&&(de(),H())})),De),stop:De,refresh:H,relistActive:k,getDiagnostics:()=>({started:g,ownInstanceId:_,activeWorkspaceId:R,activePeerId:U?.peerId??null,lastRefreshAt:w,lastError:M,listedConversations:O})}}let ns=null,is=null;function wh(){return is||(is=Nc(Vt,Uo,Oc())),is}function Ah(){return ns||(ns=Th({store:Vt,getExecutor:wh,getOwnInstanceId:()=>Qc().then(n=>n.instanceId)})),ns}function Rh(){const n=Yn.c(3),t=!!Uc().canUseRemoteControl;let i,r;n[0]!==t?(i=()=>{if(t)return Ah().start()},r=[t],n[0]=t,n[1]=i,n[2]=r):(i=n[1],r=n[2]),he.useEffect(i,r)}const Ta=Su,Ch=yu;function tl(n){return Number.isFinite(n)?new Date(n).toISOString():new Date(0).toISOString()}function nl(n){return!n.hidden&&!n.remoteMirror}function wa(n,e){return(e.updatedAt||0)-(n.updatedAt||0)||n.id.localeCompare(e.id)}function Ph(n){return`${n.updatedAt||0}:${n.id}`}function Ih(n){if(typeof n!="string"||!n)return null;const e=n.indexOf(":");if(e<=0)return null;const t=Number(n.slice(0,e)),i=n.slice(e+1);return Number.isFinite(t)&&i?{updatedAt:t,id:i}:null}function Dh(n){return{id:n.id,title:n.name||n.id,updatedAt:tl(n.updatedAt),...n.workspaceId?{workspaceId:n.workspaceId}:{},rootMessageId:n.rootMessageId,...typeof n.messageCount=="number"?{messageCount:n.messageCount}:{},...typeof n.responseCount=="number"?{responseCount:n.responseCount}:{}}}function Lh(n,e={}){const t=typeof e.query=="string"?e.query.trim().toLowerCase():"",i=typeof e.workspaceId=="string"&&e.workspaceId?e.workspaceId:void 0,r=typeof e.limit=="number"&&Number.isFinite(e.limit)?Math.floor(e.limit):Ta,s=Math.max(1,Math.min(Ta,r)),o=n.filter(p=>nl(p)&&(!i||p.workspaceId===i)&&(!t||(p.name||p.id).toLowerCase().includes(t))).sort(wa),a=Ih(e.cursor),c=a?o.findIndex(p=>wa(p,{updatedAt:a.updatedAt,id:a.id})>0):0,l=c<0?o.length:c,h=o.slice(l,l+s),d=h[h.length-1];return{conversations:h.map(Dh),...d&&l+s<o.length?{nextCursor:Ph(d)}:{},total:o.length}}function Uh(n){const e=new Map;for(const t of n.descriptors){if(!nl(t)||!t.workspaceId)continue;const i=e.get(t.workspaceId)??{count:0,updatedAt:0};i.count+=1,i.updatedAt=Math.max(i.updatedAt,t.updatedAt||0),e.set(t.workspaceId,i)}return n.workspaces.filter(t=>!!t&&typeof t.id=="string"&&t.id&&!t.remote&&!Bc(t.id)).map(t=>{const i=e.get(t.id),r=Math.max(i?.updatedAt??0,t.updatedAt||0);return{id:t.id,name:(t.name||"Workspace").slice(0,Fc),...typeof t.hue=="number"&&Number.isFinite(t.hue)?{hue:t.hue}:{},...typeof t.icon=="string"&&t.icon?{icon:t.icon}:{},conversationCount:i?.count??0,updatedAt:tl(r),...n.colleagueWorkspaceIds?.has(t.id)?{colleague:!0}:{}}}).sort((t,i)=>i.updatedAt.localeCompare(t.updatedAt)||t.name.localeCompare(i.name)).slice(0,Ch)}function Nh(n){return{instanceId:n.instanceId,name:n.name.trim().slice(0,Fc),...n.platform?{platform:n.platform}:{},acceptsCreate:n.settings?.acceptRemoteHostRequests!==!1,workspaces:Uh({workspaces:n.workspaces,descriptors:n.descriptors,colleagueWorkspaceIds:n.colleagueWorkspaceIds})}}const Oh=new Set(["no explicit intent provided.","unspecified","n/a","none"]);function Jn(n){return n.trim().toLowerCase().replace(/[.\s]+$/g,"")}function Fh(n){const e=[],t=n.commandFacts?.executionContext,i=t?.workspaceProjection;n.runnerKind==="environment"?e.push("Runs inside an isolated, throwaway execution environment — not on your machine or workspace."):n.runnerKind==="local-helper"?e.push("Runs directly on your local machine."):i?.enabled===!0?e.push(i.writesDiscardedOnExit===!0||i.writePolicy==="discard"?"Sandboxed run: any file writes are discarded when the command finishes.":"Runs against a projected overlay of the workspace."):t?.writesPersistToWorkspace===!0&&e.push("Runs against the live workspace — any file writes persist.");const r=t?.vfsLoad?.requestedPathCount;return typeof r=="number"&&r>0&&e.push(`Afterwards, ${r} file path${r===1?"":"s"} will be captured back into the conversation.`),e}function Bh(n){const e=n.intentSummary?.trim()||"Terminal command",t=n.statedIntent?.description?.trim(),i=t&&!Oh.has(t.toLowerCase())&&Jn(t)!==Jn(e)?t:void 0,r=n.justification?.trim(),s=r&&Jn(r)!==Jn(e)&&(!i||Jn(r)!==Jn(i))?r:void 0;return{headline:e,what:i,why:s,contextNotes:Fh(n)}}const kh={none:0,safe:1,dangerous:2},zh={none:0,"non-sensitive":1,sensitive:2},Hh={none:0,"anti-pattern":1,misalignment:2};function rs(n,e){let t;for(const i of e)i===void 0||n[i]===void 0||(t===void 0||n[i]>n[t])&&(t=i);return t}function Vh(n){return n==="dangerous"?{tone:"concern",text:"Makes changes that are hard to undo (source edits, deletions, remote or system state)."}:n==="safe"?{tone:"ok",text:"Only makes recoverable changes (caches, build artifacts, temporary files)."}:n==="none"?{tone:"ok",text:"Does not modify any state."}:null}function Gh(n){return n==="sensitive"?{tone:"concern",text:"Touches or could reveal secrets — credentials, keys, or environment contents."}:null}function Wh(n){return n==="misalignment"?{tone:"concern",text:"Shows signs of actively misaligned behaviour — treat this request with real suspicion."}:n==="anti-pattern"?{tone:"concern",text:"Sidesteps the integrated tooling this system prefers for this kind of task (a flagged anti-pattern)."}:null}const ss=6;function Xh(n){const e=Object.values(n.review?.witnesses||{}).filter(u=>!!u),t=e.flatMap(u=>u.effects||[]),i=[],r=[],s=[],o=Vh(rs(kh,e.map(u=>u.mutation)));o&&(o.tone==="concern"?i:s).push(o);const a=Gh(rs(zh,e.map(u=>u.disclosure)));a&&i.push(a);const c=Wh(rs(Hh,e.map(u=>u.alignment)));c&&i.push(c),e.some(u=>u.status==="failed")&&i.push({tone:"concern",text:"An independent reviewer did not finish, so part of this assessment is unknown."});for(const u of["deny","concern","maybe"])for(const g of t)g.kind===u&&i.push({tone:"concern",text:g.headline,detail:g.detail});for(const u of t)u.kind==="will"?r.push({tone:"info",text:u.headline,detail:u.detail}):u.kind==="tip"&&r.push({tone:"info",text:`Tip: ${u.headline}`,detail:u.detail});for(const u of t)u.kind==="wont"&&s.push({tone:"ok",text:u.headline,detail:u.detail});const l=new Set,h=[],d=(u,g)=>{const _=u.text.trim().toLowerCase();!_||l.has(_)||h.length>=g||(l.add(_),h.push(u))};for(const u of i)d(u,ss);const p=s.length>0?1:0;for(const u of r)d(u,ss-p);for(const u of s)d(u,ss);return h}const qh={"near-certain":"near-certain",strong:"strong confidence",plausible:"a tentative read",uncertain:"low confidence"};function Aa(n){return n==="approve-once"?{text:"Assistant thinks you would approve this",tone:"approve"}:n==="deny"?{text:"Assistant thinks you would want this denied",tone:"deny"}:n==="override-block"?{text:"Assistant thinks you would override the block and run this anyway",tone:"caution"}:n==="ask-user"?{text:"Assistant thinks this one needs your own judgement",tone:"neutral"}:{text:`Assistant predicts ${n}`,tone:"neutral"}}function kx(n){return n==="approve-once"?"approve this once":n==="deny"?"deny this":n==="override-block"?"override the block and run this":n==="ask-user"?"leave this to you":n}function $h(n){return n==="approve-once"?"approving this":n==="deny"?"denying this":n==="override-block"?"overriding the block":n==="ask-user"?"asking you":n}function zx(n){const{prediction:e,draft:t,pending:i}=n;if(e){if(e.confidenceTier==="insufficient-data")return{settled:!0,tone:"neutral",headline:"Assistant does not have enough evidence about your preferences to predict this one.",commandExplanation:e.commandExplanation,rationale:e.rationale,caveat:e.insufficientDataReason?`Missing evidence: ${e.insufficientDataReason}`:void 0};const r=Aa(e.predictedAction),s=qh[e.confidenceTier]||e.confidenceTier;return{settled:!0,tone:r.tone,headline:`${r.text} (${s}).`,commandExplanation:e.commandExplanation,rationale:e.rationale,caveat:e.insufficientDataReason?`Why not automated: ${e.insufficientDataReason}`:void 0}}return t?.predictedAction?{settled:!1,tone:Aa(t.predictedAction).tone,headline:`Assistant is leaning towards ${$h(t.predictedAction)}…`,commandExplanation:t.commandExplanation,rationale:t.rationale}:t||i?{settled:!1,tone:"neutral",headline:"Assistant is checking your calibrated preferences…",commandExplanation:t?.commandExplanation}:null}const Hx=Object.freeze({right:"approve",left:"deny",up:"details",down:"defer"});function Vx(n,e){if(e.length===0)return n;const t=new Set(e),i=[],r=[];for(const s of n)(t.has(s.id)?r:i).push(s);return[...i,...r]}function Gx(n,e,t){const i=Math.abs(n),r=Math.abs(e);return i<t&&r<t?null:i>=r?n>0?"right":"left":e>0?"down":"up"}const Cn="Only terminal commands have a prediction to defer to. Choose approve or deny.",jh="Terminal preference prediction is off for this target, so there is nothing to defer to. Turn it on in Settings → Workspace Files → VS Code Bridge.";function Yh(n,e){const t=n.payload?.result,i=t?.review?.decision,r=i?.decision==="block",s=i?.canOverride===!0,o=i?.severity,a=o==="block"?"block":o==="danger"?"danger":o==="caution"||o==="unknown"?"caution":o==="safe"?"safe":"info",c=r?{id:"override-block",label:"Override and run",shortLabel:"Override",tooltip:s?"Run this command anyway, knowingly proceeding past the reviewers’ hard concern.":"This block cannot be overridden, so the command cannot be run from here.",tone:"danger",enabled:s,disabledReason:s?void 0:"The reviewers raised a hard concern that cannot be overridden. Deny, or ask for a narrower command.",plan:{kind:"terminal",decision:"override-block"}}:{id:"approve-once",label:"Approve once",shortLabel:"Approve",tooltip:"Run this exact command one time only. Similar future commands will ask again.",tone:"approve",enabled:!0,plan:{kind:"terminal",decision:"approve-once"}},l=e.terminalPredictionEnabled!==!1,h=[t?.connectionName,t?Mu(t):void 0].filter(Boolean),d=t?Bh(t):void 0,p=t?Xh(t):[];return{approvalId:n.id,kind:n.kind,eyebrow:h.join(" · ")||n.detail||"Terminal command",headline:t?.intentSummary||n.title||"Terminal command",bodyLabel:d?.what?"What Assistant wants to do":void 0,body:d?.what||i?.summary||n.detail,assistantReason:d?.why,contextNotes:d?.contextNotes,tone:a,badge:r?"blocked":o,monospace:t?.command,highlightsLabel:p.length>0?"What the reviewers found":void 0,highlights:p.map(u=>({tone:u.tone,text:u.text})),approve:c,deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Reject this command. Nothing runs, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"terminal",decision:"deny"}},defer:l?{available:!0}:{available:!1,unavailableReason:jh},hasDetails:!0}}function Kh(n){const e=n.payload,t=e?.activatable||[],i=[];return t.length>0&&i.push({tone:"info",text:`Activates: ${t.join(", ")}`}),e?.alreadyActive?.length&&i.push({tone:"ok",text:`Already active: ${e.alreadyActive.join(", ")}`}),e?.denied?.length&&i.push({tone:"concern",text:`Unavailable: ${e.denied.join(", ")}`}),{approvalId:n.id,kind:n.kind,eyebrow:"Capability activation",headline:n.title||"Activate capabilities",body:e?.reason||n.detail,tone:"info",highlights:i,approve:{id:"allow",label:"Allow",shortLabel:"Allow",tooltip:"Activate these capabilities for this conversation thread.",tone:"approve",enabled:t.length>0,disabledReason:t.length>0?void 0:"There is nothing left to activate for this request.",plan:{kind:"capability",decision:"allow"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Leave these capabilities switched off.",tone:"deny",enabled:!0,plan:{kind:"capability",decision:"deny"}},secondary:{id:"always-allow",label:"Always allow",shortLabel:"Always",tooltip:"Activate now and stop asking for these capabilities.",tone:"neutral",enabled:t.length>0,plan:{kind:"capability",decision:"always-allow"}},defer:{available:!1,unavailableReason:Cn},hasDetails:!0}}function Zh(n){const e=n.payload,t=e?.escalations||[],i=t.slice(0,3).map(r=>({tone:"concern",text:`${r.taskId}: ${r.routedModel} costs ${r.ratio.toFixed(1)}× ${r.comparableModel}`}));return{approvalId:n.id,kind:n.kind,eyebrow:"Subagent cost gate",headline:n.title||"Routed subagent models cost more than expected",body:e?`${t.length} route${t.length===1?"":"s"} exceed the ${e.thresholdMultiplier}× threshold. The eligible parent profile is ${e.parentModel}.`:n.detail,tone:"caution",badge:"cost",highlights:i,approve:{id:"use_routed",label:"Use routed models",shortLabel:"Routed",tooltip:"Spend the extra and run the subagents on the models the router chose.",tone:"approve",enabled:!0,plan:{kind:"cost-escalation",choice:"use_routed"}},deny:{id:"use_comparable",label:"Use parent profile",shortLabel:"Cheaper",tooltip:"Downgrade the escalated routes to the eligible parent profile instead.",tone:"neutral",enabled:!0,plan:{kind:"cost-escalation",choice:"use_comparable"}},defer:{available:!1,unavailableReason:Cn},hasDetails:!0}}function Jh(n){const e=n.payload,t=[];if(e){t.push({tone:"info",text:`Image: ${e.image}${e.profileId?` (profile ${e.profileId})`:""}`}),t.push({tone:e.network==="none"?"ok":"info",text:e.network==="none"?"Network: fully isolated (no network access)":"Network: outbound only (no inbound access; host networking is never used)"}),t.push(e.workspaceMount?{tone:"concern",text:`Mounts workspace root '${e.workspaceMount.rootName}' read-only at /workspace-src`}:{tone:"ok",text:"No workspace folders are mounted into the container"}),e.gpu&&t.push({tone:"concern",text:"Requests GPU access (--gpus all)"});const i=[e.resources?.cpuCores?`${e.resources.cpuCores} CPU cores`:null,e.resources?.memoryMb?`${e.resources.memoryMb} MiB memory`:null].filter(Boolean);t.push({tone:"ok",text:`Hardened sandbox: all capabilities dropped, no privilege escalation, resource-capped${i.length?` (${i.join(", ")})`:""}`})}return{approvalId:n.id,kind:n.kind,eyebrow:e?.connectionName?`Local Docker · ${e.connectionName}`:"Local Docker environment",headline:n.title||"Run a local Docker environment?",body:"Assistant wants to start a sandboxed Docker container on your machine. After you approve, commands inside this container run without further per-command prompts until it is destroyed.",tone:"caution",badge:"local",monospace:e?.image,highlightsLabel:"What this container gets",highlights:t,approve:{id:"approve-once",label:"Run container",shortLabel:"Run",tooltip:"Start this container on your machine with the listed sandbox settings.",tone:"approve",enabled:!0,plan:{kind:"local-environment-create",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Do not start the container. Nothing runs, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"local-environment-create",decision:"deny"}},defer:{available:!1,unavailableReason:Cn},hasDetails:!0}}function Ra(n,e){return`${!n||n==="NONE"?"CPU-only":`${n} accelerator`}${e?", high-RAM":", standard RAM"}`}function Qh(n){const e=n.payload,t=[];e&&(t.push({tone:"info",text:`Account: ${e.accountEmail||"the connected Google Workspace account"}`}),e.planLabel&&t.push({tone:"info",text:`Plan: ${e.planLabel}`}),typeof e.currentBalance=="number"&&Number.isFinite(e.currentBalance)&&t.push({tone:"info",text:`Observed compute units: ${e.currentBalance}${e.checkedAt?` at ${new Date(e.checkedAt).toLocaleString()}`:""} (rechecked after approval)`}),t.push({tone:e.accelerator&&e.accelerator!=="NONE"?"concern":"info",text:`Machine: ${Ra(e.accelerator,e.highMemory)}`}),t.push({tone:"concern",text:"Spends your Colab compute units until the environment is destroyed or the runtime idles out"}),t.push({tone:"concern",text:"Consumer Google service under Google's terms (outside the university's Workspace agreement) — keep sensitive, confidential, or identifiable data off this runtime"}),t.push({tone:"ok",text:"Google credentials are transient server-request credentials, never persisted on the gateway"}),t.push({tone:"concern",text:"Paid benefits and positive units must remain verified. Managed work stops on depletion or verification expiry (at most 180 seconds); closing this tab stops renewal. Allocation release is separate and may remain pending. Storage is non-durable; this is not a spending cap."}));const i=Ra(e?.accelerator,e?.highMemory);return{approvalId:n.id,kind:n.kind,eyebrow:e?.accountEmail?`Google Colab · ${e.accountEmail}`:"Google Colab runtime",headline:n.title||"Assign a Google Colab runtime?",body:`Assistant wants to assign a Google Colab runtime on ${e?.accountEmail?`${e.accountEmail}'s`:"your"} account (${i}${e?.planLabel?`, ${e.planLabel}`:""}). This spends your Colab compute units until the environment is destroyed or the runtime idles out. Colab is a consumer Google service governed by Google's terms rather than the university's Workspace agreement, so keep sensitive, confidential, or personally identifiable data off this runtime. After you approve, commands inside the runtime run without further per-command prompts.`,tone:"caution",badge:"colab",monospace:e?.sessionName,highlightsLabel:"What this assigns",highlights:t,approve:{id:"approve-once",label:"Assign runtime",shortLabel:"Assign",tooltip:"Assign this Colab runtime on your Google account now.",tone:"approve",enabled:!0,plan:{kind:"colab-environment-create",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Do not assign a runtime. Nothing is created, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"colab-environment-create",decision:"deny"}},defer:{available:!1,unavailableReason:Cn},hasDetails:!0}}function ef(n){const e=n.payload,t=e?Math.min(n.expiresAt??e.quoteExpiresAt,e.quoteExpiresAt)+e.maxDurationMinutes*6e4:void 0;return{approvalId:n.id,kind:n.kind,eyebrow:"Cloud GPU",headline:`${e?.gpuLabel??"GPU"} on RunPod`,body:`Launch one container with ${e?.gpuCount??"?"} GPU(s). Storage is non-durable. Closing this tab does not stop billing; destroy the session when finished.`,tone:"caution",badge:"USD",highlights:e?[{tone:"info",text:`${e.gpuCount} × ${e.gpuLabel} · ${e.cloudType} · ${e.containerDiskGb} GB disk (${e.effectiveEphemeralStorageGiB.toFixed(2)} GiB)${e.requestedEphemeralStorageGiB===void 0?"":`; requested ${e.requestedEphemeralStorageGiB} GiB`}`},{tone:"info",text:`$${e.quote.usdPerHour}/h total compute + estimated $${e.quote.storageUsdPerHour}/h storage = $${e.quote.totalUsdPerHour}/h total estimate`},{tone:"info",text:`Storage pricing: ${e.quote.storagePricing}`},{tone:"concern",text:`Quote expires ${new Date(e.quoteExpiresAt).toLocaleString()}; changed or expired quotes need new approval`},{tone:"concern",text:`Max spend $${e.spendCapUsd}`},{tone:"info",text:`Stops by ${new Date(t).toLocaleString()} at the latest`},{tone:"concern",text:`Billed to ${e.billingMode==="own-account"?"your RunPod account":`Assistant: ${e.billingCodes?Object.values(e.billingCodes).join(" / "):"billing codes required"}`}`},{tone:"info",text:`Image: ${e.image}`}]:[],approve:{id:"approve-once",label:"Launch GPU",shortLabel:"Launch",tooltip:"Approve this quoted rate and maximum spend.",tone:"approve",enabled:!!e,plan:{kind:"cloud-environment-create",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Do not launch or spend money.",tone:"deny",enabled:!0,plan:{kind:"cloud-environment-create",decision:"deny"}},defer:{available:!1,unavailableReason:"A human must approve this rate and budget."},hasDetails:!0}}function tf(n){const t=n.payload?.plan;return{approvalId:n.id,kind:n.kind,eyebrow:"External Linux · NON-PROTECTED",headline:n.title,body:Eu,tone:"danger",badge:"unrestricted host access",highlights:[{tone:"concern",text:`Intended machine/account: ${t?.targetDescription||"unspecified"} (not independently verified)`},{tone:"info",text:`Environment: ${t?.name||"unspecified"}; workspace: ${t?.workspacePath||"host default"} (not an isolation boundary)`},{tone:"concern",text:t?.launchMethod==="assistant"?"Assistant may launch on this target through an existing authorized connection, under its execution controls.":"Manual launch only: you run the one-liner; Assistant is not authorized to install it."},{tone:"info",text:`Lifetime: ${t?.timeoutMinutes?`${t.timeoutMinutes} minutes`:"gateway default"}. No root package installation, persistent service or VM deletion is authorized.`},{tone:"concern",text:"Approval issues a single-use bearer command, not proof of host identity. Keep it secret and run it only on this machine/account. This grants ongoing execution and transfers, not merely a download."}],approve:{id:"approve-once",label:"Allow non-protected connection",shortLabel:"Allow",tooltip:"Issue the connection command for this exact machine/account and launch method.",tone:"danger",enabled:!!t,plan:{kind:"external-environment-connect",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Issue no bootstrap command.",tone:"deny",enabled:!0,plan:{kind:"external-environment-connect",decision:"deny"}},defer:{available:!1,unavailableReason:"Explicit human approval is required. Prediction cannot approve this connection."},hasDetails:!0}}const nf="the other instance";function il(n=!1){return{id:"cancel",label:n?"Stop waiting":"Cancel request",shortLabel:"Cancel",tooltip:n?"Close this local wait without authorising anything. The remote request may remain pending.":"End this unsupported request without authorising anything.",tone:"deny",enabled:!0,plan:{kind:"cancel"}}}function rf(n){const e=n.kind==="mcp-local-start",t=e?void 0:n.payload,i=e?n.payload:void 0,r=e?!!i?.command:!!t?.toolName,s=[];return i&&(s.push({tone:"concern",text:"Starts a process on the connected local helper. This is not a sandbox."}),i.cwd&&s.push({tone:"info",text:`Working directory: ${i.cwd}`}),i.envNames.length&&s.push({tone:"info",text:`Environment variable names: ${i.envNames.join(", ")}`}),i.secretEnvNames.length&&s.push({tone:"concern",text:`Secret variable names: ${i.secretEnvNames.join(", ")} (values hidden)`})),t&&(s.push({tone:"info",text:`Connection: ${t.binding}; approval policy: ${t.policySource}`}),s.push({tone:"info",text:"Approves this call once; it does not change the connector policy."})),{approvalId:n.id,kind:n.kind,eyebrow:`${e?"Local MCP server":"MCP tool call"} · ${i?.connectorName||t?.connectorName||"Connected service"}`,headline:n.title,body:e?"Assistant wants to start this local MCP server.":t?.description||"Assistant wants to call this connected-service tool with the arguments shown below.",monospace:i?JSON.stringify({command:i.command,args:i.args},null,2):t?.argumentsPreview,tone:e?"caution":"info",highlights:s,approve:{id:"approve-once",label:e?"Start server":"Approve once",shortLabel:e?"Start":"Approve",tooltip:e?"Start this exact local MCP server once.":"Allow this exact MCP tool call once.",tone:"approve",enabled:r,disabledReason:"The request is missing its operation details. Deny it and retry.",plan:{kind:"mcp-decision",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Reject this request without running it.",tone:"deny",enabled:!0,plan:{kind:"mcp-decision",decision:"deny"}},defer:{available:!1,unavailableReason:Cn},hasDetails:!0}}function sf(n){const e=n.payload;return{approvalId:n.id,kind:n.kind,eyebrow:`MCP input · ${e?.connectorName||"Connected service"}`,headline:n.title,body:e?.message||"This tool needs input. Fill in the form in this panel, or decline the request.",tone:"info",highlights:e?.toolName?[{tone:"info",text:`Tool: ${e.toolName}`}]:[],approve:{id:"details",label:"Fill in form",shortLabel:"Form",tooltip:"Open the input form here. Nothing is sent until you submit.",tone:"approve",enabled:!0,plan:{kind:"details"}},deny:{id:"decline",label:"Decline",shortLabel:"Decline",tooltip:"Send no input to the tool.",tone:"deny",enabled:!0,plan:{kind:"mcp-decline"}},defer:{available:!1,unavailableReason:Cn},hasDetails:!0}}function of(n){const e=n.payload,t=e?.approval,i=e?.peerName?.trim()||nf,r=t?.remoteResolvable===!0,s=r?t.options:[],o=t?.kind==="mcp-elicitation",a=o&&!!t?.elicitation&&s.some(u=>u.id==="submit"),c=o?void 0:s.find(u=>u.intent==="approve")??s.find(u=>u.intent===void 0&&(!u.destructive||u.id==="override-block")),l=s.find(u=>u.intent==="deny")??s.find(u=>u.intent===void 0&&["deny","decline","cancel","use_comparable"].includes(u.id)),h=o?void 0:s.find(u=>u!==c&&u!==l),d=(u,g)=>({id:u.id,label:u.label,shortLabel:u.label,tooltip:`Send "${u.label}" to ${i}. The decision takes effect there; nothing runs on this device.`,tone:g,enabled:!0,plan:{kind:"remote-proxy",optionId:u.id}}),p=[];return t&&p.push({tone:"info",text:`Raised on ${i} as a ${t.kind} request; your decision is sent there`}),t&&!r&&p.push({tone:"concern",text:"The peer did not provide a supported decision route. Stopping this wait does not cancel the remote request."}),e?.lastError&&p.push({tone:"concern",text:`Last attempt failed: ${e.lastError}`}),{approvalId:n.id,kind:n.kind,eyebrow:`Remote · ${i}`,headline:t?.title||n.title||"Approval on another instance",body:t?.summary||n.detail,tone:"info",badge:"remote",highlights:p,approve:a?{id:"details",label:"Fill in form",shortLabel:"Form",tooltip:"Open the input form here. Nothing is sent until you submit.",tone:"approve",enabled:!0,plan:{kind:"details"}}:c?d(c,c.destructive?"danger":"approve"):void 0,deny:l?d(l,"deny"):il(!0),secondary:h?d(h,h.destructive?"danger":"neutral"):void 0,defer:{available:!1,unavailableReason:Cn},hasDetails:!0}}function af(n){return{approvalId:n.id,kind:n.kind,eyebrow:"Request",headline:n.title||"Approval request",body:"This request type is not supported by this version. Cancel it without authorising anything, then update and retry.",tone:"info",highlights:n.detail?[{tone:"info",text:n.detail}]:[],deny:il(),defer:{available:!1,unavailableReason:Cn},hasDetails:!0}}function cf(n,e={}){return n.kind==="terminal-command"?Yh(n,e):n.kind==="capability-activation"?Kh(n):n.kind==="subagent-cost-escalation"?Zh(n):n.kind==="mcp-tool-call"||n.kind==="mcp-local-start"?rf(n):n.kind==="mcp-elicitation"?sf(n):n.kind==="local-environment-create"?Jh(n):n.kind==="colab-environment-create"?Qh(n):n.kind==="external-environment-connect"?tf(n):n.kind==="cloud-environment-create"?ef(n):n.kind==="remote-proxy"?of(n):af(n)}function Wx(n,e){if(e==="details")return{details:!0};if(e==="defer")return n.defer.available?{defer:!0}:{blockedReason:n.defer.unavailableReason||"This request cannot be deferred."};const t=e==="approve"?n.approve:n.deny;return t?t.enabled?t.plan.kind==="details"?{details:!0}:{action:t}:{blockedReason:t.disabledReason||"That action is not available for this request."}:{blockedReason:"No supported approval action is available. You can cancel this request without authorising it."}}const os=new Set;function lf(n,e){const t=No(n);if(!t||t.kind!=="cloud-environment-create"||os.has(n))return!1;if(Date.now()>=(t.expiresAt??0))return gi(n,"Cloud approval expired. Request a fresh quote."),!1;if(e==="deny")return qt(n,{decision:"deny"});const i=t.payload;return!i?.body||i.body.requestId!==i.requestId||i.body.provider!=="runpod"||i.body.gpu!==i.gpu||i.body.billing!==i.billingMode||i.body.profileId!==i.profileId||i.body.maxSpendUsd!==i.spendCapUsd||i.body.quotedUsdPerHour!==i.quote?.usdPerHour||!i.quoteToken||i.body.quoteToken!==i.quoteToken||!Number.isFinite(i.quoteExpiresAt)||Date.now()>=i.quoteExpiresAt||(i.body.gpuCount??1)!==i.gpuCount||(i.body.cloudType??"SECURE")!==i.cloudType||i.body.timeoutMinutes!==void 0&&i.body.timeoutMinutes!==i.maxDurationMinutes||i.body.containerDiskGb!==void 0&&i.body.ephemeralStorageGiB!==void 0||i.body.containerDiskGb!==void 0&&i.body.containerDiskGb!==i.containerDiskGb||i.body.ephemeralStorageGiB!==void 0&&Math.ceil(i.body.ephemeralStorageGiB*1024**3/1e9)!==i.containerDiskGb?(gi(n,"Cloud quote is invalid. Request a fresh quote."),!1):(os.add(n),bu(i.body).then(async r=>{if(!r.sessionId||r.provider!=="runpod"||r.cloud.billingMode!==i.billingMode||r.cloud.spendCapUsd!==i.spendCapUsd||r.image!==i.image||r.cloud.gpuCount!==i.gpuCount||r.cloud.cloudType!==i.cloudType||r.cloud.containerDiskGb!==i.containerDiskGb||r.cloud.gpuTypeId!==i.gpu)throw r.sessionId&&await aa(r.sessionId),new Error("Cloud approval returned an invalid receipt. Reconcile release before retrying.");kc(n)&&qt(n,{decision:"approve-once",result:r})||await aa(r.sessionId)}).catch(r=>{gi(n,r instanceof Tu&&["cloud_quote_changed","cloud_quote_expired","cloud_quote_required"].includes(r.code)?"Cloud quote changed. This approval is expired; request a fresh quote and approve its new rate.":r instanceof Error?r.message:"Cloud launch failed. Reconcile any existing session before retrying.")}).finally(()=>os.delete(n)),!0)}const as=new Set;function uf(n,e){const t=No(n);if(!t||t.kind!=="external-environment-connect"||as.has(n))return!1;const i=t.payload;return Date.now()>=Math.min(t.expiresAt??0,i.expiresAt)?(gi(n,"External connection approval expired. No command was requested."),!1):e==="deny"?qt(n,{decision:"deny"}):(as.add(n),ca(`/${encodeURIComponent(i.requestId)}/approve`,{}).then(r=>{if(!r.sessionId||r.provider!=="external"||r.external?.executionMode!=="non-protected"||!r.bootstrapCommand)throw new Error("External approval returned an invalid connection receipt. Reconcile the request before retrying.");if(!(kc(n)&&qt(n,{decision:"approve-once",result:r})))return ca(`/${encodeURIComponent(i.requestId)}/cancel`,{}).then(()=>{})}).catch(r=>gi(n,r instanceof Error?r.message:"External approval failed; reconcile the request before retrying.")).finally(()=>as.delete(n)),!0)}function df(n,e){switch(e.kind){case"mcp-decision":return n.kind!=="mcp-tool-call"&&n.kind!=="mcp-local-start"?!1:qt(n.id,{decision:e.decision});case"mcp-decline":return n.kind!=="mcp-elicitation"?!1:qt(n.id,{decision:"decline"});case"cancel":return gi(n.id,"Cancelled without approval: no supported decision route.");case"details":return!1;case"terminal":return qt(n.id,{decision:e.decision});case"capability":return Ru(n.id,e.decision),!0;case"cost-escalation":return Au(n.id,{choice:e.choice,remember:!1}),!0;case"local-environment-create":return qt(n.id,{decision:e.decision});case"colab-environment-create":return qt(n.id,{decision:e.decision});case"external-environment-connect":return uf(n.id,e.decision);case"cloud-environment-create":return lf(n.id,e.decision);case"remote-proxy":return qt(n.id,{optionId:e.optionId});case"defer":return wu(n.id),!0;default:return!1}}const rl=new Set(["remote-proxy"]);function hf(n,e){return!n||!n.enabled||n.plan.kind==="details"?null:{option:{id:n.id,label:n.label,intent:e,destructive:n.tone==="danger"||n.tone==="deny"?!0:void 0},plan:{kind:"deck",plan:n.plan}}}function ff(n){return Number.isFinite(n)?new Date(n).toISOString():new Date(0).toISOString()}function sl(n){const e=new Map,t={id:n.id,kind:n.kind,title:n.title||"Approval request",summary:n.detail||"",createdAt:ff(n.createdAt),...typeof n.messageId=="string"?{messageId:n.messageId}:{}},i=cf(n),r=[];let s;if(n.kind==="mcp-elicitation"){const a=n.payload;a&&(s={connectorId:a.connectorId,connectorName:a.connectorName,...a.toolName?{toolName:a.toolName}:{},...a.message?{message:a.message}:{},requestedSchema:a.requestedSchema},r.push({id:"submit",label:"Submit input",intent:"approve"}),e.set("submit",{kind:"elicitation-submit"}))}for(const[a,c]of[["approve",i.approve],["secondary",i.secondary],["deny",i.deny]]){const l=hf(c,a);!l||e.has(l.option.id)||(e.set(l.option.id,l.plan),r.push(l.option))}const o=[i.headline!==t.title?i.headline:void 0,i.body,i.assistantReason?`Assistant's stated reason: ${i.assistantReason}`:void 0,i.monospace,...i.contextNotes||[],...i.highlights.map(a=>a.text)].filter(a=>!!(a&&a.trim())).join(`

`)||t.summary;return{approval:{...t,summary:o,remoteResolvable:r.length>0,options:r,...s?{elicitation:s}:{}},plans:e}}function pf(n,e,t=Oo()){const i=t.filter(r=>r.conversationId===e&&!rl.has(r.kind)).map(r=>sl(r).approval);return{type:"conversation.approvals",peerId:n,conversationId:e,approvals:i}}function mf(n,e,t,i){const r=No(n);if(!r||!t||r.conversationId!==t||rl.has(r.kind))return{ok:!1,code:"not-found",message:"That approval is not pending in this conversation."};const s=sl(r);if(!s.approval.remoteResolvable)return{ok:!1,code:"not-remote-resolvable",message:"This peer does not provide a supported decision route for the request."};const o=s.plans.get(e);if(!o)return{ok:!1,code:"unsupported",message:`Unknown option '${e}' for approval ${r.kind}.`};let a;if(o.kind==="elicitation-submit"){const c=r.payload,l=Cu(c.requestedSchema,i);if(l)return{ok:!1,code:"unsupported",message:l};a=qt(n,{decision:"submit",content:i})}else{if(i!==void 0)return{ok:!1,code:"unsupported",message:"This decision does not accept form input."};a=df(r,o.plan)}return a?{ok:!0}:{ok:!1,code:"not-found",message:"That approval was already answered."}}function gf(n){const e=n.subscribe??zc,t=n.getSnapshot??Oo;let i=null,r=null,s=Promise.resolve();const o=a=>{const c=pf(n.peerId,n.conversationId,t()),l=JSON.stringify(c.approvals);return!a&&l===r||(r=l,s=s.then(()=>n.sink(c)).catch(h=>{r=null,n.onError?.(h)})),s};return{start(){i||(i=e(()=>{o(!1)}),o(!0))},publish:()=>o(!0),stop(){i?.(),i=null,r=null}}}function pt(n){return typeof n=="string"&&n.trim().length>0}function Ws(n){return n instanceof Error?n.message:String(n)}function vf(n=Pu){const e=new Map;return{get(t){return t?e.get(t):void 0},remember(t,i){if(t)for(e.delete(t),e.set(t,i);e.size>n;){const r=e.keys().next().value;if(r===void 0)break;e.delete(r)}}}}const _f=new Set(["subscribe","reconnect","resync","manual","overflow"]);function Ca(n){return!!n&&typeof n=="object"&&typeof n.id=="string"&&typeof n.model=="string"}function xf(n){if(!n||typeof n!="object")return;const e=n;if(!Ca(e.primary))return;const t=Array.isArray(e.secondary)?e.secondary.filter(Ca):[];return{primary:{id:e.primary.id,model:e.primary.model},secondary:t}}function Sf(n){return Array.isArray(n)?n.filter(e=>pt(e)):[]}function or(n){return pt(n)?n:void 0}function Pa(n){if(!n||typeof n!="object")return!1;const e=n;return pt(e.id)&&pt(e.type)&&"obj"in e&&Array.isArray(e.owners)&&e.owners.length>0&&e.owners.every(t=>pt(t))}const yf=new Set(["auto","suggest"]),Mf=new Set(["model","feature-tag","system"]);function Ef(n){if(!n||typeof n!="object"||Array.isArray(n))return;const e=n;if(!e.features||typeof e.features!="object"||Array.isArray(e.features))return;const t={};for(const[r,s]of Object.entries(e.features))typeof s=="boolean"&&r&&(t[r]=s);if(typeof e.tier!="string"||!yf.has(e.tier)||typeof e.source!="string"||!Mf.has(e.source))return;const i=Array.isArray(e.dependencies)?e.dependencies.filter(r=>typeof r=="string"):[];return{features:t,tier:e.tier,source:e.source,dependencies:i,...typeof e.approved=="boolean"?{approved:e.approved}:{},...typeof e.reason=="string"?{reason:e.reason}:{}}}const bf=new Set(["serverInstancedExecution","remoteControl"]),Tf=new Set(Ad.map(n=>n.key));function wf(n){if(!n||typeof n!="object"||Array.isArray(n))return;const e={};for(const[t,i]of Object.entries(n))typeof i!="boolean"||!Tf.has(t)||bf.has(t)||Rd(t)&&(e[t]=i);return Object.keys(e).length?e:void 0}function Af(n){const{executor:e,store:t,peerId:i}=n,r=n.cancelMessage??((v,x)=>Ou.getInstance().cancelMessage(v,x)),s=n.resolveApproval??mf,o=n.respondToInteraction??((v,x,b)=>e.residency.scopes.withMessage(v,{reason:"peer-resolve-interaction"},P=>iu(P,v,x,b))),a=n.storeDepotObject??(async v=>{const x=[v.owners[0],...v.owners.slice(1)];await $n.store(v.id,v.type,v.obj,{owners:x,timestamp:v.timestamp})}),c=n.hasDepotObjects??(v=>$n.hasMany(v)),l={chunkBytes:n.depotTransfer?.chunkBytes??Uu,maxObjectBytes:n.depotTransfer?.maxObjectBytes??Lu,maxPendingBytes:n.depotTransfer?.maxPendingBytes??Du,ttlMs:n.depotTransfer?.ttlMs??Iu},h=n.now??(()=>Date.now()),d=new Map,p=vf(n.idempotencyLruSize),u=(v,x,b)=>({type:"command.ack",peerId:i,commandId:v.commandId,ok:!0,...x?{conversationId:x,revision:{revision:n.getRevision(x)}}:{},...b===void 0?{}:{result:b}}),g=(v,x,b,P,D)=>({type:"command.ack",peerId:i,commandId:v.commandId,ok:!1,...x?{conversationId:x}:{},error:{code:b,message:P,...D===void 0?{}:{details:D}}}),_=v=>e.residency.scopes.withLocalConversation(v,{reason:"peer-send-message"},x=>{const b=ru(x.getConversation(),P=>x.getMessage(P));return b.leafMessageId||b.rootMessageId}),m=async(v,x)=>{let b=!1;try{b=await e.residency.scopes.withMessage(x,{reason:"peer-command"},P=>{const D=P.getMessage(x);return!!D&&D.conversationId===v})}catch{b=!1}if(!b)throw new je("not-found",`Message ${x} is not part of this conversation.`)},f=async(v,x)=>{if(pt(x))return await m(v,x),x;const b=await _(v);if(!b)throw new je("not-found","The conversation has no message to reply to.");return b},T=(v,x)=>{const b=v.expectedRevision?.revision,P=n.getRevision(x);if(typeof b=="number"&&b<P)throw new je("stale-revision",`Expected revision ${b} but the conversation is at ${P}.`)},w=async v=>{const x=(await c([v.id])).has(v.id);return await a(v),x?{objectId:v.id,existed:!0}:{objectId:v.id}},M=()=>{const v=h()-l.ttlMs;for(const[x,b]of d)b.updatedAt<v&&d.delete(x)},O=()=>{let v=0;for(const x of d.values())v+=x.bytes;return v},I=async v=>{M();const x=v.transferId,b=v.index,P=v.count,D=v.data,F=v.totalBytes;if(!pt(x)||typeof D!="string"||!Number.isInteger(b)||!Number.isInteger(P)||!Number.isInteger(F)||P<1||b<0||b>=P||F<0)throw new je("unsupported","upsertDepotObjectChunk requires transferId, index < count and totalBytes.");if(F>l.maxObjectBytes)throw d.delete(x),new je("unsupported",`Depot objects over ${l.maxObjectBytes} bytes are not accepted by this peer.`,{details:{maxObjectBytes:l.maxObjectBytes}});if(D.length>l.chunkBytes)throw d.delete(x),new je("unsupported",`Depot chunks over ${l.chunkBytes} bytes are not accepted by this peer.`,{details:{chunkBytes:l.chunkBytes}});let N=d.get(x);if(N){if(N.count!==P||N.totalBytes!==F)throw d.delete(x),new je("unsupported",`Depot transfer ${x} changed shape between chunks.`)}else{if(O()+F>l.maxPendingBytes)throw new je("unsupported","This peer has too many unfinished depot transfers; retry later.",{retryable:!0});N={chunks:new Array(P),received:0,count:P,totalBytes:F,bytes:0,updatedAt:h()},d.set(x,N)}if(N.chunks[b]!==void 0)throw new je("unsupported",`Depot transfer ${x} already received chunk ${b}.`);if(N.chunks[b]=D,N.received+=1,N.bytes+=D.length,N.updatedAt=h(),N.bytes>N.totalBytes)throw d.delete(x),new je("unsupported",`Depot transfer ${x} exceeded its declared ${N.totalBytes} bytes.`);if(N.received<N.count)return null;d.delete(x);const j=N.chunks.join("");if(j.length!==N.totalBytes)throw new je("unsupported",`Depot transfer ${x} reassembled to ${j.length} bytes, expected ${N.totalBytes}.`);let H;try{H=JSON.parse(j)}catch{throw new je("unsupported",`Depot transfer ${x} is not valid JSON.`)}if(!Pa(H))throw new je("unsupported",`Depot transfer ${x} is not a complete depot item.`);return w(H)},R=async(v,x,b)=>{const P=typeof b.text=="string"?b.text:"",D=Sf(b.attachmentIds);if(!P.trim()&&D.length===0)throw new je("unsupported",`${String(b.type)} requires text or attachments.`);if(T(v,x),D.length){const H=await c(D),K=D.filter(re=>!H.has(re));if(K.length)throw new je("not-found",`This peer does not hold ${K.length} of the message's attachments; ship them with upsertDepotObject first.`,{details:{missing:K}})}const F=await f(x,b.parentId),N=Ef(b.capabilityOverlay),j=Hc({id:or(b.messageId),conversationId:x,text:P,attachments:D,...N?{capabilityOverlay:N}:{}});return await t.dispatch(Bu({parentId:F,message:j})).unwrap(),j.id},U=async(v,x)=>{const b=x.overrides&&typeof x.overrides=="object"?x.overrides:void 0,P=wf(b?.features),D=await t.dispatch(Fu({messageId:v,responseId:or(x.responseId),overrideCart:xf(x.overrideCart),...P?{settingsOverride:{features:P}}:{}})).unwrap();return{messageId:D.messageId??v,responseId:D.responseId,...D.replySnapshot?{replySnapshot:D.replySnapshot}:{}}},y=async v=>{const x=v.command,b=String(x.type);let P;if(Nu(b)){if(!pt(v.conversationId))throw new je("unsupported",`${b} requires a conversationId.`);if(!n.canServeConversation(v.conversationId))throw new je("not-found",`Conversation ${v.conversationId} is not available on this peer.`);P=v.conversationId}const D=F=>({conversationId:P,result:F});switch(x.type){case"ping":return D();case"requestHydrate":{const F=_f.has(String(x.reason))?x.reason:"manual";return await n.requestHydrate(P,F),D()}case"sendMessage":{const F=await R(v,P,x);return D(await U(F,x))}case"upsertUserMessage":{const N={messageId:await R(v,P,x)};return D(N)}case"requestResponse":{if(!pt(x.messageId))throw new je("unsupported","requestResponse requires a messageId.");return await m(P,x.messageId),D(await U(x.messageId,x))}case"upsertDepotObject":{if(!Pa(x.item))throw new je("unsupported","upsertDepotObject requires a complete depot item.");return D(await w(x.item))}case"upsertDepotObjectChunk":{const F=await I(x);return D(F??void 0)}case"cancelResponse":{if(!pt(x.messageId))throw new je("unsupported","cancelResponse requires a messageId.");if(!r(x.messageId,pt(x.reason)?x.reason:"Cancelled by a remote client"))throw new je("no-live-run",`Message ${x.messageId} has no cancellable run.`);return D()}case"resolveInteraction":{if(!pt(x.messageId)||!pt(x.requestId))throw new je("unsupported","resolveInteraction requires messageId and requestId.");await m(P,x.messageId);const F=x.response,N=F&&typeof F=="object"&&!Array.isArray(F)?{requestId:x.requestId,...F}:{requestId:x.requestId,payload:F};if(!await o(x.messageId,x.requestId,N))throw new je("no-live-run",`Message ${x.messageId} has no live run to answer.`);return D()}case"resolveApproval":{if(!pt(x.approvalId)||!pt(x.optionId))throw new je("unsupported","resolveApproval requires approvalId and optionId.");const F=s(x.approvalId,x.optionId,P,x.content);if(!F.ok)throw new je(F.code,F.message);return D()}case"setRuntimeSettings":throw new je("unsupported","setRuntimeSettings is not supported by this peer.");case"shutdown":{if(!n.onShutdown)throw new je("unsupported","This peer cannot be shut down remotely.");return await n.onShutdown({type:"shutdown",...pt(x.reason)?{reason:x.reason}:{},...typeof x.uploadFinalBundle=="boolean"?{uploadFinalBundle:x.uploadFinalBundle}:{}}),D()}case"instance.listConversations":{if(!n.listConversations)throw new je("unsupported","This peer does not list conversations.");const F=n.listConversations({query:typeof x.query=="string"?x.query:void 0,limit:typeof x.limit=="number"?x.limit:void 0,workspaceId:or(x.workspaceId),cursor:typeof x.cursor=="string"&&x.cursor?x.cursor:void 0});return D(F)}case"instance.createConversation":{if(!n.createConversation)throw new je("not-allowed","This peer does not accept conversation creation requests.");const F=await n.createConversation({title:pt(x.title)?x.title.trim().slice(0,200):void 0,firstMessage:pt(x.firstMessage)?x.firstMessage:void 0,workspaceId:or(x.workspaceId)});return D(F)}default:throw new je("unsupported",`Unsupported command type '${b}'.`)}};return{async handle(v){const x=p.get(v.idempotencyKey);if(x)return{...x,commandId:v.commandId};let b;try{const P=await y(v);b=u(v,P.conversationId,P.result)}catch(P){const D=pt(v.conversationId)?v.conversationId:void 0;b=P instanceof je?g(v,D,P.code,P.message,P.details):g(v,D,"internal",Ws(P))}return p.remember(v.idempotencyKey,b),b}}}const Rf=new Set(["created","in-progress"]);function Cf(n){const e=n.sidecars?.agentRuntime;return e?.pendingInteractions?Object.values(e.pendingInteractions).some(t=>t?.status==="pending"):!1}function Pf(n,e,t=[]){const i=n.conversations.entities[e],r=i?.tree?.relationships??{},s=new Set(Object.keys(r));i?.tree?.root&&s.add(i.tree.root);let o=null,a=null;for(const c of s){const l=n.messages.entities[c];if(!(!l||l.conversationId!==e)){if(l.userInteraction?.required||Cf(l)){o||(o={status:"blocked",messageId:c,responseId:l.type==="response"?c:void 0});continue}l.type==="response"&&Rf.has(l.state?.type)&&(!a||l._timestamp>a.message._timestamp)&&(a={message:l})}}if(!o){const c=t.find(l=>l.conversationId===e||l.messageId!==void 0&&s.has(l.messageId));c&&(o={status:"blocked",messageId:c.messageId})}return o||(a?{status:"running",messageId:a.message.id,responseId:a.message.id}:{status:"idle"})}async function If(n){const e=n.reason==="final"?[]:Vc(),t=await Gc(n.executor,n.conversationId,{reason:"peer-publish-snapshot"},o=>ku(n.executor,o,n.conversationId)),i=Bo(t),r=n.captureArtifactWorkingSet?n.captureArtifactWorkingSet(i,e):zu(i,e);return{frame:{type:"conversation.hydrate",protocolVersion:Fo,peerId:n.peerId,sessionId:n.sessionId,conversationId:n.conversationId,revision:{revision:n.revision},snapshot:t,reason:n.reason,artifactWorkingSet:r},snapshot:t}}function Df(n){return{type:"conversation.hydratePatch",protocolVersion:Fo,peerId:n.peerId,sessionId:n.sessionId,conversationId:n.conversationId,baseRevision:{revision:n.baseRevision},revision:{revision:n.revision},delta:n.delta,encoding:"jsondiffpatch",artifactWorkingSet:n.artifactWorkingSet}}function Lf(n){return{type:"run.status",protocolVersion:Fo,peerId:n.peerId,...n.sessionId?{sessionId:n.sessionId}:{},conversationId:n.conversationId,status:n.status,...n.messageId?{messageId:n.messageId}:{},...n.responseId?{responseId:n.responseId}:{},revision:n.revision===void 0?void 0:{revision:n.revision},error:n.error,timingSteps:n.timingSteps,updatedAt:new Date().toISOString()}}async function Ia(n){if(n.type==="conversation.hydrate"){if(!Hu(n.snapshot))throw new Error("Conversation hydrate requires a self-contained bundle");Vu(n.artifactWorkingSet,Bo(n.snapshot)),await Gu(Object.values(n.snapshot.rootState.artifactVersions.entities),n.snapshot.depot.items)}n.type==="conversation.hydratePatch"&&Wu(n.artifactWorkingSet)}const Uf=16;function Nf(n){if(n instanceof Error)return n.message;if(typeof n=="string")return n;if(n&&typeof n=="object"){const e=n;if(typeof e.message=="string"&&e.message.trim())return e.message;if(typeof e.error=="string"&&e.error.trim())return e.error}try{return JSON.stringify(n)}catch{return String(n)}}function Of(n,e,t,i){const{executor:r,store:s}=n,{sink:o,peerId:a}=i,c=i.patchDebounceMs??Uf;let l=0,h=null,d=null,p=!1,u=!1,g=null,_=null,m=!1,f=0,T=-1,w={signature:""};const M=qu(),O=D=>{const F=Yu(Ku(D.rootState),{}),N=[...Zu(F),...Ju(F),...Qu(F,r.getState().settings)].sort(),j=Object.values(D.rootState.weaves?.entities??{}).flatMap(H=>Object.values(H.edges).map(K=>K.handoffAttachmentId)).sort();return{signature:JSON.stringify([ed(D),N,j]),referencesDepot:N.length>0||j.some(H=>typeof H=="string"&&H.length>0)||D.rootState.artifactVersions.ids.length>0}},I=async D=>{l+=1;const F=$n.getMutationRevision(),N=await If({executor:r,peerId:a,sessionId:e,conversationId:t,revision:l,reason:D,captureArtifactWorkingSet:M.captureFull});await Ia(N.frame),await o(N.frame),g=jr(Bo(N.snapshot)),T=F,w=O(g)},R=async()=>{if(!g){await I("resync");return}const D=Vc(),F=await Gc(r,t,{reason:"peer-publish-patch"},Re=>$u(r,Re,t)),N=M.capturePatch(F,D),j=O(F),H=$n.getMutationRevision()!==T;if(j.signature!==w.signature||H&&j.referencesDepot){await I("resync");return}const K=ju(g,F);if(K==null&&N.entries.length===0){g=jr(F);return}const re=l;l+=1;const ve=Df({peerId:a,sessionId:e,conversationId:t,baseRevision:re,revision:l,delta:K??null,artifactWorkingSet:N});await Ia(ve),await o(ve),g=jr(F)},U=async(D="resync")=>{if(!(p&&D!=="final")){if(D==="initial"||D==="reconnect"||D==="final"){await I(D);return}await R()}},y=()=>{if(p||!u||d||_||!m)return;const D=Math.max(0,c-(performance.now()-f));d=setTimeout(()=>{d=null,v().catch(F=>console.error("[peer] failed to publish snapshot patch:",F))},D)},v=async()=>{if(_)return _;if(!(!m||p))return m=!1,_=(async()=>{try{if(h){const D=h;h=null,await I(D)}else await U("resync")}catch(D){throw g=null,D}})().finally(()=>{_=null,y()}),_},x=()=>{p||(m||(f=performance.now()),m=!0,y())},b=s.subscribe(x),P=Xu(x);return{isStarted:()=>u,async start(){p||u||(await U("initial"),u=!0,m&&x())},async requestFullSnapshot(D="reconnect"){p||!u||(h=D,x(),d&&clearTimeout(d),d=null,_&&await _.catch(()=>{}),!(p||!h)&&(d&&clearTimeout(d),d=null,await v()))},async stop(D="completed",F,N={}){if(!p){p=!0,d&&clearTimeout(d),d=null,b(),P();try{if(_&&await _.catch(()=>{}),N.final===!1)return;await U("final"),await o(Lf({peerId:a,sessionId:e,conversationId:t,status:D,revision:l,error:F?{code:"headless-runtime-error",message:Nf(F)}:void 0,timingSteps:i.getTimingSteps?.()}))}finally{g=null,w={signature:"",referencesDepot:!1},h=null,m=!1,u=!1,M.clear()}}}}}function Ff(n){const{executor:e,store:t,peerId:i,transport:r}=n,s=n.now??(()=>new Date),o=n.runStatusDebounceMs??100,a=n.statusDebounceMs??500,c=crypto.randomUUID(),l=s().toISOString(),h=new Set,d=new Map,p=new Map;let u=0,g=0,_=null,m,f=!1,T=0,w=null,M=null,O=Promise.resolve();const I=()=>({peerId:i,peerSessionId:c,publishedConversationIds:[...d.keys()],subscribers:Object.fromEntries(p),clients:u,runStatus:Object.fromEntries([...d.values()].map(W=>[W.conversationId,W.runStatus])),revisions:Object.fromEntries([...d.values()].map(W=>[W.conversationId,W.revision])),statusRevision:g,lastError:m}),R=()=>{const W=I();for(const k of Array.from(h))try{k(W)}catch(V){console.error("[peer] host listener failed:",V)}},U=W=>{m=Ws(W),R()},y=W=>r.isOpen()?r.trySend(W):!1,v=W=>{T+=1;const k={conversationId:W,starting:null,started:!1,awaitingFullHydrate:!1,revision:0,runStatus:"idle"},V=async ne=>{(ne.type==="conversation.hydrate"||ne.type==="conversation.hydratePatch")&&(k.revision=ne.revision.revision),!(k.awaitingFullHydrate&&ne.type==="conversation.hydratePatch")&&(ne.type==="conversation.hydrate"&&(k.awaitingFullHydrate=!1),r.isOpen()&&r.send(ne))};return k.publisher=Of({executor:e,store:t},`${c}:${W}:${T}`,W,{sink:V,peerId:i,getTimingSteps:n.getTimingSteps}),k.approvals=gf({peerId:i,conversationId:W,sink:async ne=>{r.isOpen()&&r.send(ne)},onError:U}),k},x=W=>{const k=d.get(W);if(k)return k;const V=v(W);return d.set(W,V),V.starting=V.publisher.start().then(()=>{V.started=!0,d.get(W)===V&&(V.approvals.start(),D(!0,W))}).catch(ne=>{V.startError=ne??new Error("Publisher failed to start."),U(ne),d.get(W)===V&&d.delete(W),V.approvals.stop(),V.publisher.stop("completed",void 0,{final:!1}).catch(Q=>console.warn("[peer] failed publisher cleanup failed:",Q)),R()}).finally(()=>{V.starting=null}),R(),V},b=async W=>{d.get(W.conversationId)===W&&d.delete(W.conversationId),W.approvals.stop(),W.starting&&await W.starting.catch(()=>{}),await W.publisher.stop("completed",void 0,{final:!1}).catch(U),R()},P=(W,k)=>{if(k>0)p.set(W,k),n.canServeConversation(W)&&x(W);else{p.delete(W);const V=d.get(W);V&&b(V)}R()},D=(W,k)=>{if(f)return;const V=Oo(),ne=t.getState();for(const Q of d.values()){if(k&&Q.conversationId!==k||!Q.started)continue;const de=Pf(ne,Q.conversationId,V);!(de.status!==Q.runStatus||de.messageId!==Q.runMessageId)&&!W||(Q.runStatus=de.status,Q.runMessageId=de.messageId,y({type:"run.status",peerId:i,conversationId:Q.conversationId,status:de.status,...de.messageId?{messageId:de.messageId}:{},...de.responseId?{responseId:de.responseId}:{},revision:{revision:Q.revision},updatedAt:s().toISOString()}))}R()},F=()=>{f||M||(M=setTimeout(()=>{M=null,D(!1)},o))},N=W=>{if(f)return;let k;try{k={...n.buildStatus(),peerId:i,kind:n.kind,hostKind:n.hostKind,startedAt:l}}catch(ne){U(ne);return}const V=JSON.stringify(k);if(!(!W&&V===_)){if(!r.isOpen()){_=null;return}g+=1,_=V,y({type:"peer.status",peerId:i,revision:g,status:k})||(_=null),R()}},j=()=>{f||w||(w=setTimeout(()=>{w=null,N(!1)},a))},H=t.subscribe(()=>{F(),j()}),K=zc(F),re=Af({executor:e,store:t,peerId:i,canServeConversation:n.canServeConversation,requestHydrate:async(W,k)=>{const V=x(W),ne=V.starting;if(ne&&await ne,V.startError!==void 0)throw new je("hydrate-failed",`Could not publish conversation ${W}: ${Ws(V.startError)}`,{retryable:!0});ne||!V.started||await V.publisher.requestFullSnapshot(k==="reconnect"?"reconnect":"resync")},getRevision:W=>d.get(W)?.revision??0,createConversation:n.createConversation,listConversations:n.listConversations,onShutdown:n.onShutdown,idempotencyLruSize:n.idempotencyLruSize}),ve=W=>{O=O.then(async()=>{const k=await re.handle(W);f||y(k)}).catch(U)};return{handleFrame:W=>{if(!(f||!nd(W)||W.peerId!==i)){if(id(W)){y(W);return}if(rd(W)){if(W.role!=="peer")return;u=W.clients;const k=new Set;for(const V of W.subscriptions)k.add(V.conversationId),P(V.conversationId,V.count);for(const V of[...p.keys()])k.has(V)||P(V,0);return}if(sd(W)){u=W.clients,P(W.conversationId,W.count);return}if(od(W)){U(new Error(`${W.error.code}: ${W.error.message}`));return}if(ad(W)){ve(W);return}}},async onTransportOpen(){if(!f){N(!0);for(const W of[...d.values()])try{if(W.starting&&await W.starting,!W.started||d.get(W.conversationId)!==W||(W.awaitingFullHydrate=!0,await W.publisher.requestFullSnapshot("reconnect"),d.get(W.conversationId)!==W))continue;await W.approvals.publish()}catch(k){U(k)}D(!0)}},onTransportClose(){for(const W of d.values())W.awaitingFullHydrate=!0;_=null,R()},publishStatus(W=!1){W?(w&&clearTimeout(w),w=null,N(!0)):j()},async publishFinal(W,k,V){const ne=td(k)?k:"completed";let Q=d.get(W);Q?(d.delete(W),Q.approvals.stop(),Q.starting&&await Q.starting.catch(()=>{})):Q=v(W),Q.awaitingFullHydrate=!1;try{await Q.publisher.stop(ne,V,{final:!0})}finally{R()}},getState:I,subscribe(W){return h.add(W),()=>{h.delete(W)}},async stop(){if(f)return;f=!0,w&&clearTimeout(w),M&&clearTimeout(M),w=null,M=null,H(),K();const W=[...d.values()];d.clear();for(const k of W)k.approvals.stop(),k.starting&&await k.starting.catch(()=>{}),await k.publisher.stop("completed",void 0,{final:!1}).catch(V=>console.warn("[peer] publisher stop failed:",V));await O.catch(()=>{}),R(),h.clear()}}}const Bf=dd*(hd+1),kf=Object.freeze([Br.policy,Br.replaced]),Da=Object.freeze({enabled:!1,online:!1,instanceName:"",clients:0,publishedConversationIds:Object.freeze([]),publishedConversationCount:0,blockedCount:0,runStatus:Object.freeze({}),attempts:0});function zf(n){return!!n&&!n.remote&&!Bc(n.id)}function Hf(){const n=new Set;let e=Da,t=null,i=null,r=[],s=null,o=null;const a=()=>{for(const b of Array.from(n))try{b(e)}catch(P){console.error("[remote-control] manager listener failed:",P)}},c=()=>(t?.getDesktopBridge??zs)(),l=()=>t?.getSettings()?.remoteControl,h=()=>t?.hostKind??"browser",d=()=>t?l()?.instanceName?.trim()||lh(h(),t.platform):"",p=()=>t?t.executor.residency.catalog.getDescriptors({includeHidden:!1}):[],u=b=>t?.executor.residency.catalog.getDescriptor(b),g=()=>t?t.executor.getState():{},_=()=>Object.values(g().workspaces?.entities??{}).filter(b=>!!b),m=b=>g().workspaces?.entities?.[b],f=()=>g().workspaces?.activeWorkspaceId||void 0,T=()=>{const b=new Set;for(const P of Object.values(g().colleagues?.entities??{}))P?.workspaceId&&b.add(P.workspaceId);return b},w=b=>{const P=u(b);return!!P&&!P.hidden&&!P.remoteMirror},M=()=>{const b=i,P=b?.hostState,D=P?.publishedConversationIds??[];let F=0;for(const K of D)P?.runStatus[K]==="blocked"&&(F+=1);const N=b?.socketState.status==="online";e={enabled:!!b,online:N,peerId:b?.peerId,instanceId:t?.instanceId,instanceName:d(),clients:P?.clients??0,publishedConversationIds:Object.freeze([...D]),publishedConversationCount:D.length,blockedCount:F,runStatus:Object.freeze({...P?.runStatus??{}}),attempts:b?.socketState.attempts??0,lastError:b?.socketState.lastError??P?.lastError};const j={hosting:N&&D.length>0,conversationCount:D.length,viewerCount:e.clients},H=t?JSON.stringify(j):"stopped";if(H!==o){o=H;const K=c();K&&K.setHostingState(t?j:{hosting:!1,conversationCount:0,viewerCount:0}).catch(re=>console.warn("[remote-control] desktop hosting state rejected:",re))}a()},O=(b,P)=>{b.hostState=P;const D=new Set(P.publishedConversationIds);for(const F of Array.from(b.lastRunStatus.keys()))D.has(F)||b.lastRunStatus.delete(F);for(const F of P.publishedConversationIds){const N=P.runStatus[F]??"idle";if(b.lastRunStatus.get(F)!=="blocked"&&N==="blocked"){const H=c();if(H){const K=u(F)?.name||F;H.notify({title:"Assistant needs your input",body:K,conversationId:F}).catch(re=>console.warn("[remote-control] desktop notification rejected:",re))}}b.lastRunStatus.set(F,N)}M()},I=async b=>{if(!t)throw new je("internal","Remote control is not running.");if(l()?.acceptRemoteHostRequests===!1)throw new je("not-allowed","This instance does not accept conversations created by other instances.");const P=typeof b.workspaceId=="string"&&b.workspaceId?b.workspaceId:void 0;if(P&&!zf(m(P)))throw new je("not-found",`Workspace ${P} does not exist on this instance.`);const{store:D,executor:F}=t,N=t.createConversation??(async W=>D.dispatch(fd(W?{workspaceId:W}:void 0)).unwrap()),j=t.setConversationTitle??(async(W,k)=>{await F.residency.scopes.withLocalConversation(W,{reason:"remote-control-create"},()=>{D.dispatch(pd({id:W,name:k,autoName:!1}))})}),H=t.sendFirstMessage??(async(W,k,V)=>{await D.dispatch(md({parentId:k,message:Hc({conversationId:W,text:V})})).unwrap()}),K=await N(P),re=typeof b.title=="string"?b.title.trim().slice(0,200):"";re&&await j(K.conversationId,re);const ve=typeof b.firstMessage=="string"?b.firstMessage:"";ve.trim()&&await H(K.conversationId,K.rootMessageId,ve),i?.host?.publishStatus(!0);const Re=u(K.conversationId)?.workspaceId??P??f();return{conversationId:K.conversationId,rootMessageId:K.rootMessageId,...Re?{workspaceId:Re}:{}}},R=()=>{if(!t||i)return;const b=t,P=cd(b.instanceId),D=b.createSocket??ld,F=b.createHost??Ff,N={peerId:P,socket:null,host:null,unsubscribeHost:()=>{},socketState:{status:"connecting",attempts:0},hostState:{peerId:P,peerSessionId:"",publishedConversationIds:[],subscribers:{},clients:0,runStatus:{},revisions:{},statusRevision:0},lastRunStatus:new Map};try{const j=D({resolveUrl:async()=>{if(b.endpoint)return la(b.endpoint);const K=ud(P,"peer").replace(/^\//,""),{baseURL:re}=await Xc(K);return la(re)},resolveProtocols:()=>{const K=b.executor.getState().settings?.apiKeys?.proxy||"";return K?[`proxy-key.${K}`]:void 0},socketFactory:b.socketFactory,random:b.random,now:b.now,minBackoffMs:b.minBackoffMs,maxBackoffMs:b.maxBackoffMs,heartbeatTimeoutMs:Bf,finalCloseCodes:kf,onOpen:()=>i===N?N.host?.onTransportOpen():void 0,onMessage:K=>{if(i!==N||!N.host)return;let re;try{re=JSON.parse(K)}catch{return}N.host.handleFrame(re)},onState:K=>{if(i!==N)return;const re=N.socketState.status==="online";N.socketState=K,re&&K.status!=="online"&&N.host?.onTransportClose(),M()}});N.socket=j;const H={isOpen:()=>j.isOpen(),send:K=>j.send(K),trySend:K=>j.trySend(K)};N.host=F({executor:b.executor,store:b.store,peerId:P,kind:"instance",hostKind:h(),transport:H,buildStatus:()=>Nh({instanceId:b.instanceId,name:d(),platform:b.platform,settings:l(),descriptors:p(),workspaces:_(),colleagueWorkspaceIds:T()}),canServeConversation:w,createConversation:I,listConversations:K=>Lh(p(),K),now:b.now})}catch(j){console.error("[remote-control] failed to start instance peer:",j);try{N.socket?.stop(Br.normal,"start-failed")}catch{}return}i=N,N.unsubscribeHost=N.host.subscribe(j=>{i===N&&O(N,j)}),N.hostState=N.host.getState()},U=()=>{const b=i;b&&(i=null,b.unsubscribeHost(),b.socket?.stop(Br.normal,"host-stopped"),b.host?.stop().catch(P=>console.warn("[remote-control] peer host stop failed:",P)))},y=()=>{if(!t)return;!!l()?.enabled&&t.isPrimaryTab()?R():U(),i?.host?.publishStatus(),M()},v=()=>{!t||s||(s=setTimeout(()=>{s=null,y()},t.debounceMs??300))},x=()=>{s&&clearTimeout(s),s=null;for(const P of r.splice(0))P();U(),t=null,o=null;const b=zs();b&&b.setHostingState({hosting:!1,conversationCount:0,viewerCount:0}).catch(()=>{}),e=Da,a()};return{start(b){return t&&x(),t=b,r=[b.store.subscribe(v)],b.subscribePrimaryTab&&r.push(b.subscribePrimaryTab(v)),y(),x},stop:x,reevaluate:()=>{s&&clearTimeout(s),s=null,y()},getSnapshot:()=>e,subscribe(b){return n.add(b),()=>{n.delete(b)}}}}const Vf=Hf();function Gf(){const n=Yn.c(8),e=Uc(),t=gd(),i=!!(e.canUseRemoteControl&&t.remoteControl?.enabled),r=t.remoteControl?.desktop?.keepRunningInBackground,s=t.remoteControl?.desktop?.launchAtLogin;let o,a;n[0]!==i?(o=()=>{if(!i)return;let h=!1,d=null;return Qc().then(p=>{const{instanceId:u}=p;if(h)return;const g=Nc(Vt,Uo,Oc());d=Vf.start({store:Vt,executor:g,instanceId:u,getSettings:jf,isPrimaryTab:$f,subscribePrimaryTab:qf,hostKind:Id()?"desktop":"browser",platform:typeof navigator<"u"?navigator.platform:void 0})}).catch(Xf),()=>{h=!0,d?.()}},a=[i],n[0]=i,n[1]=o,n[2]=a):(o=n[1],a=n[2]),he.useEffect(o,a);let c,l;n[3]!==i||n[4]!==r||n[5]!==s?(c=()=>{const h=zs();h&&h.setPreferences({keepRunningInBackground:i?r??!0:!1,launchAtLogin:i?s??!1:!1}).catch(Wf)},l=[i,r,s],n[3]=i,n[4]=r,n[5]=s,n[6]=c,n[7]=l):(c=n[6],l=n[7]),he.useEffect(c,l)}function Wf(n){return console.warn("[remote-control] desktop preferences rejected:",n)}function Xf(n){return console.error("[remote-control] instance identity unavailable; instance peer not started:",n)}function qf(n){return qc.onStatusChange(()=>n())}function $f(){return qc.isPrimary()}function jf(){return Vt.getState().settings}function Yf(){return Gf(),Rh(),null}const An=128,cs=1024,fi=1024,Zt={speed:.9,attenuation:1.2,energyConservation:1,injectionRadius:.1},Kf=n=>n.hue!==void 0?n.hue:n.rgb?Ic(n.rgb):0,In=(n,e,t,i)=>`hsla(${Math.round((n%1+1)%1*360)}, ${e}%, ${t}%, ${zi(i)})`,gn=(n,e,t,i,r,s,o)=>{const a=e.u*window.innerWidth,c=(1-e.v)*window.innerHeight,l=t.u*window.innerWidth,h=(1-t.v)*window.innerHeight;if(Math.hypot(l-a,h-c)<.25)return;const d=n.createLinearGradient(a,c,l,h);d.addColorStop(0,i(s)),d.addColorStop(1,i(o)),n.strokeStyle=d,n.lineWidth=r,n.beginPath(),n.moveTo(a,c),n.lineTo(l,h),n.stroke()},Zf=(n,e,t,i,r,s,o)=>{const a=Math.min(1.35,Math.max(.25,i.energy/3)),c=zi(r*a),l=zi(s*a);if(Math.max(c,l)<=.002)return;const h=Math.min(2.2,o.glowIntensity),d=o.bladeWidth*(1.25+o.haloStrength*.85),p=Math.max(o.coreWidth+2,o.bladeWidth*.64),u=Math.max(o.coreWidth+.7,p*.42),g=Math.max(.7,Math.min(u-.45,o.coreWidth));n.lineCap="butt",n.lineJoin="bevel",o.lightMode?(n.globalCompositeOperation="source-over",gn(n,e,t,_=>In(i.hue,100,86,_*.22*h),d,c,l),gn(n,e,t,_=>In(i.hue,100,76,_*.42*h),p,c,l),gn(n,e,t,_=>In(i.hue,94,53,_*.86*h),u,c,l),gn(n,e,t,_=>In(i.hue,100,79,_*.92),g,c,l)):(n.globalCompositeOperation="lighter",gn(n,e,t,_=>In(i.hue,100,52,_*.13*h),d,c,l),gn(n,e,t,_=>In(i.hue,100,58,_*.48*h),p,c,l),gn(n,e,t,_=>In(i.hue,100,64,_*.86),u,c,l),gn(n,e,t,_=>`rgba(255, 255, 255, ${zi(_*.94)})`,g,c,l))},Jf=n=>{const e=Yn.c(38),{children:t,topology:i,speed:r,attenuation:s,zIndex:o,enableGlobalClicks:a,pixelRatio:c,maxFPS:l}=n,h=i===void 0?"ladder":i,d=r===void 0?mn.speed:r,p=s===void 0?mn.attenuation:s,u=o===void 0?5:o,g=a===void 0?!1:a,_=l===void 0?120:l,m=he.useRef(null);let f;e[0]===Symbol.for("react.memo_cache_sentinel")?(f=new Map,e[0]=f):f=e[0];const T=he.useRef(f),w=he.useRef(null);let M;e[1]===Symbol.for("react.memo_cache_sentinel")?(M=new Float32Array(An*4),e[1]=M):M=e[1];const O=he.useRef(M);let I;e[2]===Symbol.for("react.memo_cache_sentinel")?(I={xs:[],ys:[]},e[2]=I):I=e[2];const R=he.useRef(I);let U;e[3]===Symbol.for("react.memo_cache_sentinel")?(U=[],e[3]=U):U=e[3];const y=he.useRef(U),v=he.useRef(!0),x=he.useRef(null),b=he.useRef(Qf),P=he.useRef(ep),D=he.useRef(h),F=he.useRef(d),N=he.useRef(p),j=he.useRef(_),H=Wc();let K;e[4]!==H?(K=H.toLowerCase().includes("light"),e[4]=H,e[5]=K):K=e[5];const re=K,ve=he.useRef(re);let Re,W;e[6]!==h?(Re=()=>{D.current=h,v.current=!0},W=[h],e[6]=h,e[7]=Re,e[8]=W):(Re=e[7],W=e[8]),he.useEffect(Re,W);let k,V;e[9]!==d?(k=()=>{F.current=d},V=[d],e[9]=d,e[10]=k,e[11]=V):(k=e[10],V=e[11]),he.useEffect(k,V);let ne,Q;e[12]!==p?(ne=()=>{N.current=p},Q=[p],e[12]=p,e[13]=ne,e[14]=Q):(ne=e[13],Q=e[14]),he.useEffect(ne,Q);let de,De;e[15]!==_?(de=()=>{j.current=_},De=[_],e[15]=_,e[16]=de,e[17]=De):(de=e[16],De=e[17]),he.useEffect(de,De);let Ce,ce;e[18]!==re?(Ce=()=>{ve.current=re,P.current()},ce=[re],e[18]=re,e[19]=Ce,e[20]=ce):(Ce=e[19],ce=e[20]),he.useEffect(Ce,ce);let _e;e[21]===Symbol.for("react.memo_cache_sentinel")?(_e=le=>{const oe=T.current.get(le.id)?.ref.current;oe&&w.current?.unobserve(oe),T.current.set(le.id,le),le.ref.current&&w.current?.observe(le.ref.current),v.current=!0},e[21]=_e):_e=e[21];const pe=_e;let C;e[22]===Symbol.for("react.memo_cache_sentinel")?(C=le=>{const oe=T.current.get(le)?.ref.current;oe&&w.current?.unobserve(oe),T.current.delete(le),v.current=!0},e[22]=C):C=e[22];const Ve=C;let Te;e[23]===Symbol.for("react.memo_cache_sentinel")?(Te=(le,oe,Ee)=>{b.current(le,oe,Ee)},e[23]=Te):Te=e[23];const Be=Te;let Se;e[24]===Symbol.for("react.memo_cache_sentinel")?(Se=le=>{const oe=T.current.get(le)?.ref.current;if(!oe)return null;const Ee=oe.getBoundingClientRect();return{u:(Ee.left+Ee.width/2)/window.innerWidth,v:1-(Ee.top+Ee.height/2)/window.innerHeight}},e[24]=Se):Se=e[24];const We=Se;let Pe;e[25]===Symbol.for("react.memo_cache_sentinel")?(Pe={register:pe,unregister:Ve,pulseAt:Be,getNodeCenter:We},e[25]=Pe):Pe=e[25];const ze=Pe;let tt,A;e[26]!==c?(tt=()=>{const le=m.current,oe=le?.getContext("2d",{alpha:!0});if(!le||!oe)return;let Ee=!1,Ie=0;const ie=y.current,be=tp,Oe=()=>{const L=window.innerWidth,fe=window.innerHeight,se=[...T.current.values()].slice(0,An),ge=O.current;se.forEach((te,J)=>{const ye=te.ref.current?.getBoundingClientRect();if(!ye)return;const Ue=J*4;ge[Ue]=ye.left/L,ge[Ue+1]=(fe-ye.bottom)/fe,ge[Ue+2]=ye.width/L,ge[Ue+3]=ye.height/fe}),R.current=Yl(ge,se.length,D.current,be());for(const te of ie)te.passes=ra(R.current,te.source,te.direction,be());v.current=!1},Le=()=>{const L=typeof c=="number"?Math.max(.5,Math.min(c,2)):Math.min(window.devicePixelRatio||1,2);le.width=Math.round(window.innerWidth*L),le.height=Math.round(window.innerHeight*L),le.style.width=`${window.innerWidth}px`,le.style.height=`${window.innerHeight}px`,oe.setTransform(L,0,0,L,0,0),v.current=!0,P.current()},me=L=>{if(x.current=null,Ee)return;const fe=j.current;if(fe&&fe>0&&L-Ie<1e3/fe){x.current=requestAnimationFrame(me);return}Ie=L,v.current&&Oe(),oe.clearRect(0,0,window.innerWidth,window.innerHeight);const se={lightMode:ve.current,coreWidth:mn.coreWidth,bladeWidth:mn.bladeWidth,glowIntensity:mn.glowIntensity,haloStrength:mn.haloStrength},ge=ie;for(let te=ge.length-1;te>=0;te=te-1,te){const J=ge[te],ye=(L-J.startedAt)/1e3,Ue=ye*F.current,nt=Math.max(.055,J.packetLength*(.65+J.radius*2)),Ke=zi(1-ye/(mn.fadeLifetime+1.2));if(Ke<=0||Ue>3){ge.splice(te,1);continue}for(const Mt of J.passes)for(const _t of jl(Mt,Ue,nt)){const er=Math.exp(-N.current*_t.startDistance*.45),tr=Math.exp(-N.current*_t.endDistance*.45),nn=sa(Ue,_t.startDistance,nt)*er*Ke*Mt.gain,Ci=sa(Ue,_t.endDistance,nt)*tr*Ke*Mt.gain;Zf(oe,_t.from,_t.to,J,nn,Ci,se)}}oe.globalCompositeOperation="source-over",ge.length&&(x.current=requestAnimationFrame(me))};P.current=()=>{!Ee&&x.current===null&&(x.current=requestAnimationFrame(me))},b.current=(L,fe,se)=>{const ge=se===void 0?{}:se;v.current&&Oe();const te={u:L,v:$l(R.current.ys,fe)},J={source:te,hue:Kf(ge),energy:ge.energy??2.5,radius:ge.radius??.05,packetLength:ge.packetLength??mn.packetLength,startedAt:performance.now()};for(const ye of[-1,1])ie.push({...J,direction:ye,passes:ra(R.current,te,ye,be())});P.current()};const ke=()=>{v.current=!0,ie.length&&P.current()};return w.current=new ResizeObserver(ke),T.current.forEach(L=>{L.ref.current&&w.current?.observe(L.ref.current)}),window.addEventListener("resize",Le),document.addEventListener("scroll",ke,!0),Le(),()=>{Ee=!0,window.removeEventListener("resize",Le),document.removeEventListener("scroll",ke,!0),w.current?.disconnect(),w.current=null,x.current!==null&&cancelAnimationFrame(x.current),x.current=null,ie.length=0,b.current=np,P.current=ip,oe.clearRect(0,0,window.innerWidth,window.innerHeight)}},A=[c],e[26]=c,e[27]=tt,e[28]=A):(tt=e[27],A=e[28]),he.useEffect(tt,A);let S,G;e[29]!==g?(S=()=>{if(!g)return;const le=oe=>{Be(oe.clientX/window.innerWidth,1-oe.clientY/window.innerHeight,{hue:.33})};return window.addEventListener("click",le),()=>window.removeEventListener("click",le)},G=[g,Be],e[29]=g,e[30]=S,e[31]=G):(S=e[30],G=e[31]),he.useEffect(S,G);const Z=re?"normal":"screen";let ee;e[32]!==Z||e[33]!==u?(ee=ue.jsx("canvas",{ref:m,"aria-hidden":"true",style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:u,mixBlendMode:Z}}),e[32]=Z,e[33]=u,e[34]=ee):ee=e[34];let Y;return e[35]!==t||e[36]!==ee?(Y=ue.jsxs(Pc.Provider,{value:ze,children:[t,ee]}),e[35]=t,e[36]=ee,e[37]=Y):Y=e[37],Y};function Qf(){}function ep(){}function tp(){return{width:window.innerWidth,height:window.innerHeight}}function np(){}function ip(){}const Vo="178",rp=0,La=1,sp=2,ol=1,op=2,ln=3,Rn=0,Pt=1,un=2,Tn=0,_i=1,Xs=2,Ua=3,Na=4,ap=5,zn=100,cp=101,lp=102,up=103,dp=104,hp=200,fp=201,pp=202,mp=203,qs=204,$s=205,gp=206,vp=207,_p=208,xp=209,Sp=210,yp=211,Mp=212,Ep=213,bp=214,js=0,Ys=1,Ks=2,yi=3,Zs=4,Js=5,Qs=6,eo=7,al=0,Tp=1,wp=2,wn=0,Ap=1,Rp=2,Cp=3,Pp=4,Ip=5,Dp=6,Lp=7,cl=300,Mi=301,Ei=302,to=303,no=304,Wr=306,io=1e3,Gn=1001,ro=1002,Kt=1003,Up=1004,ar=1005,yt=1006,ls=1007,Wn=1008,fn=1009,ll=1010,ul=1011,Wi=1012,Go=1013,jn=1014,Ht=1015,Yi=1016,Wo=1017,Xo=1018,Xi=1020,dl=35902,hl=1021,fl=1022,Ct=1023,qi=1026,$i=1027,pl=1028,qo=1029,ml=1030,$o=1031,jo=1033,Dr=33776,Lr=33777,Ur=33778,Nr=33779,so=35840,oo=35841,ao=35842,co=35843,lo=36196,uo=37492,ho=37496,fo=37808,po=37809,mo=37810,go=37811,vo=37812,_o=37813,xo=37814,So=37815,yo=37816,Mo=37817,Eo=37818,bo=37819,To=37820,wo=37821,Or=36492,Ao=36494,Ro=36495,gl=36283,Co=36284,Po=36285,Io=36286,Np=3200,Op=3201,Fp=0,Bp=1,bn="",zt="srgb",bi="srgb-linear",Hr="linear",rt="srgb",Qn=7680,Oa=519,kp=512,zp=513,Hp=514,vl=515,Vp=516,Gp=517,Wp=518,Xp=519,Fa=35044,Ba="300 es",dn=2e3,Vr=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],us=Math.PI/180,Do=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function qp(n,e){return(n%e+e)%e}function ds(n,e,t){return(1-t)*n+t*e}function Ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const p=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==p||l!==u||h!==g){let m=1-a;const f=c*p+l*u+h*g+d*_,T=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const O=Math.sqrt(w),I=Math.atan2(O,f*T);m=Math.sin(m*I)/O,a=Math.sin(a*I)/O}const M=a*T;if(c=c*m+p*M,l=l*m+u*M,h=h*m+g*M,d=d*m+_*M,m===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=O,l*=O,h*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[o],p=s[o+1],u=s[o+2],g=s[o+3];return e[t]=a*g+h*d+c*u-l*p,e[t+1]=c*g+h*p+l*d-a*u,e[t+2]=l*g+h*u+a*p-c*d,e[t+3]=h*g-a*d-c*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),d=a(s/2),p=c(i/2),u=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*h*d+l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d-p*u*g;break;case"YXZ":this._x=p*h*d+l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d+p*u*g;break;case"ZXY":this._x=p*h*d-l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d-p*u*g;break;case"ZYX":this._x=p*h*d-l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d+p*u*g;break;case"YZX":this._x=p*h*d+l*u*g,this._y=l*u*d+p*h*g,this._z=l*h*g-p*u*d,this._w=l*h*d-p*u*g;break;case"XZY":this._x=p*h*d-l*u*g,this._y=l*u*d-p*h*g,this._z=l*h*g+p*u*d,this._w=l*h*d+p*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=i+a+d;if(p>0){const u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(i>a&&i>d){const u=2*Math.sqrt(1+i-a-d);this._w=(h-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>d){const u=2*Math.sqrt(1+a-i-d);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-i-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*i+t*this._x,this._y=u*r+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ka.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*h,this.y=i+c*h+a*l-s*d,this.z=r+c*d+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hs=new $,ka=new Zi;class Xe{constructor(e,t,i,r,s,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],p=i[2],u=i[5],g=i[8],_=r[0],m=r[3],f=r[6],T=r[1],w=r[4],M=r[7],O=r[2],I=r[5],R=r[8];return s[0]=o*_+a*T+c*O,s[3]=o*m+a*w+c*I,s[6]=o*f+a*M+c*R,s[1]=l*_+h*T+d*O,s[4]=l*m+h*w+d*I,s[7]=l*f+h*M+d*R,s[2]=p*_+u*T+g*O,s[5]=p*m+u*w+g*I,s[8]=p*f+u*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,p=a*c-h*s,u=l*s-o*c,g=t*d+i*p+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=p*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=u*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fs.makeScale(e,t)),this}rotate(e){return this.premultiply(fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fs=new Xe;function _l(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $p(){const n=Gr("canvas");return n.style.display="block",n}const za={};function xi(n){n in za||(za[n]=!0,console.warn(n))}function jp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Yp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ha=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zp(){const n={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=hn(r.r),r.g=hn(r.g),r.b=hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?Hr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bi]:{primaries:e,whitePoint:i,transfer:Hr,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}const Je=Zp();function hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Si(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ei;class Jp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ei===void 0&&(ei=Gr("canvas")),ei.width=e.width,ei.height=e.height;const r=ei.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ei}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hn(t[i]/255)*255):t[i]=hn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qp=0;class Yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ps(r[o].image)):s.push(ps(r[o]))}else s=ps(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let em=0;const ms=new $;class It extends wi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Gn,r=Gn,s=yt,o=Wn,a=Ct,c=fn,l=It.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ki(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ms).x}get height(){return this.source.getSize(ms).y}get depth(){return this.source.getSize(ms).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=cl;It.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],u=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,M=(u+1)/2,O=(f+1)/2,I=(h+p)/4,R=(d+_)/4,U=(g+m)/4;return w>M&&w>O?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=I/i,s=R/i):M>O?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=I/r,s=U/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=R/s,r=U/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(p-h)*(p-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(p-h)/T,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tm extends wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new It(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends tm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xl extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nm extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cr.copy(i.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),lr.subVectors(this.max,Ni),ti.subVectors(e.a,Ni),ni.subVectors(e.b,Ni),ii.subVectors(e.c,Ni),vn.subVectors(ni,ti),_n.subVectors(ii,ni),Dn.subVectors(ti,ii);let t=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-Dn.z,Dn.y,vn.z,0,-vn.x,_n.z,0,-_n.x,Dn.z,0,-Dn.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-Dn.y,Dn.x,0];return!gs(t,ti,ni,ii,lr)||(t=[1,0,0,0,1,0,0,0,1],!gs(t,ti,ni,ii,lr))?!1:(ur.crossVectors(vn,_n),t=[ur.x,ur.y,ur.z],gs(t,ti,ni,ii,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rn=[new $,new $,new $,new $,new $,new $,new $,new $],Gt=new $,cr=new Ji,ti=new $,ni=new $,ii=new $,vn=new $,_n=new $,Dn=new $,Ni=new $,lr=new $,ur=new $,Ln=new $;function gs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ln.fromArray(n,s);const a=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),c=e.dot(Ln),l=t.dot(Ln),h=i.dot(Ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const im=new Ji,Oi=new $,vs=new $;class Ko{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):im.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Oi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(vs)),this.expandByPoint(Oi.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sn=new $,_s=new $,dr=new $,xn=new $,xs=new $,hr=new $,Ss=new $;class rm{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_s.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(_s);const s=e.distanceTo(t)*.5,o=-this.direction.dot(dr),a=xn.dot(this.direction),c=-xn.dot(dr),l=xn.lengthSq(),h=Math.abs(1-o*o);let d,p,u,g;if(h>0)if(d=o*c-a,p=o*a-c,g=s*h,d>=0)if(p>=-g)if(p<=g){const _=1/h;d*=_,p*=_,u=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=s,d=Math.max(0,-(o*p+a)),u=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(o*p+a)),u=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),u=p*(p+2*c)+l):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+p*(p+2*c)+l);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),u=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_s).addScaledVector(dr,p),u}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const i=sn.dot(this.direction),r=sn.dot(sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,i,r,s){xs.subVectors(t,e),hr.subVectors(i,e),Ss.crossVectors(xs,hr);let o=this.direction.dot(Ss),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const c=a*this.direction.dot(hr.crossVectors(xn,hr));if(c<0)return null;const l=a*this.direction.dot(xs.cross(xn));if(l<0||c+l>o)return null;const h=-a*xn.dot(Ss);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,c,l,h,d,p,u,g,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,d,p,u,g,_,m)}set(e,t,i,r,s,o,a,c,l,h,d,p,u,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=p,f[3]=u,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),o=1/ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*h,u=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+u*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,u=c*d,g=l*h,_=l*d;t[0]=p+_*a,t[4]=g*a-u,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,u=c*d,g=l*h,_=l*d;t[0]=p-_*a,t[4]=-o*d,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,u=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-u,t[8]=p*l+_,t[1]=c*d,t[5]=_*l+p,t[9]=u*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,u=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-p*d,t[8]=g*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=u*d+g,t[10]=p-_*d}else if(e.order==="XZY"){const p=o*c,u=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+_,t[5]=o*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=a*h,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,om)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Sn.crossVectors(i,Ut),Sn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Sn.crossVectors(i,Ut)),Sn.normalize(),fr.crossVectors(Ut,Sn),r[0]=Sn.x,r[4]=fr.x,r[8]=Ut.x,r[1]=Sn.y,r[5]=fr.y,r[9]=Ut.y,r[2]=Sn.z,r[6]=fr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],p=i[9],u=i[13],g=i[2],_=i[6],m=i[10],f=i[14],T=i[3],w=i[7],M=i[11],O=i[15],I=r[0],R=r[4],U=r[8],y=r[12],v=r[1],x=r[5],b=r[9],P=r[13],D=r[2],F=r[6],N=r[10],j=r[14],H=r[3],K=r[7],re=r[11],ve=r[15];return s[0]=o*I+a*v+c*D+l*H,s[4]=o*R+a*x+c*F+l*K,s[8]=o*U+a*b+c*N+l*re,s[12]=o*y+a*P+c*j+l*ve,s[1]=h*I+d*v+p*D+u*H,s[5]=h*R+d*x+p*F+u*K,s[9]=h*U+d*b+p*N+u*re,s[13]=h*y+d*P+p*j+u*ve,s[2]=g*I+_*v+m*D+f*H,s[6]=g*R+_*x+m*F+f*K,s[10]=g*U+_*b+m*N+f*re,s[14]=g*y+_*P+m*j+f*ve,s[3]=T*I+w*v+M*D+O*H,s[7]=T*R+w*x+M*F+O*K,s[11]=T*U+w*b+M*N+O*re,s[15]=T*y+w*P+M*j+O*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],u=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*p+i*l*p+r*a*u-i*c*u)+_*(+t*c*u-t*l*p+s*o*p-r*o*u+r*l*h-s*c*h)+m*(+t*l*d-t*a*u-s*o*d+i*o*u+s*a*h-i*l*h)+f*(-r*a*h-t*c*d+t*a*p+r*o*d-i*o*p+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],u=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=d*m*l-_*p*l+_*c*u-a*m*u-d*c*f+a*p*f,w=g*p*l-h*m*l-g*c*u+o*m*u+h*c*f-o*p*f,M=h*_*l-g*d*l+g*a*u-o*_*u-h*a*f+o*d*f,O=g*d*c-h*_*c-g*a*p+o*_*p+h*a*m-o*d*m,I=t*T+i*w+r*M+s*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=T*R,e[1]=(_*p*s-d*m*s-_*r*u+i*m*u+d*r*f-i*p*f)*R,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*f+i*c*f)*R,e[3]=(d*c*s-a*p*s-d*r*l+i*p*l+a*r*u-i*c*u)*R,e[4]=w*R,e[5]=(h*m*s-g*p*s+g*r*u-t*m*u-h*r*f+t*p*f)*R,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*f-t*c*f)*R,e[7]=(o*p*s-h*c*s+h*r*l-t*p*l-o*r*u+t*c*u)*R,e[8]=M*R,e[9]=(g*d*s-h*_*s-g*i*u+t*_*u+h*i*f-t*d*f)*R,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*f+t*a*f)*R,e[11]=(h*a*s-o*d*s-h*i*l+t*d*l+o*i*u-t*a*u)*R,e[12]=O*R,e[13]=(h*_*r-g*d*r+g*i*p-t*_*p-h*i*m+t*d*m)*R,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*R,e[15]=(o*d*r-h*a*r+h*i*c-t*d*c-o*i*p+t*a*p)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,p=s*l,u=s*h,g=s*d,_=o*h,m=o*d,f=a*d,T=c*l,w=c*h,M=c*d,O=i.x,I=i.y,R=i.z;return r[0]=(1-(_+f))*O,r[1]=(u+M)*O,r[2]=(g-w)*O,r[3]=0,r[4]=(u-M)*I,r[5]=(1-(p+f))*I,r[6]=(m+T)*I,r[7]=0,r[8]=(g+w)*R,r[9]=(m-T)*R,r[10]=(1-(p+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ri.set(r[0],r[1],r[2]).length();const o=ri.set(r[4],r[5],r[6]).length(),a=ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);const l=1/s,h=1/o,d=1/a;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=h,Wt.elements[5]*=h,Wt.elements[6]*=h,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=dn){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let u,g;if(a===dn)u=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Vr)u=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=dn){const c=this.elements,l=1/(t-e),h=1/(i-r),d=1/(o-s),p=(t+e)*l,u=(i+r)*h;let g,_;if(a===dn)g=(o+s)*d,_=-2*d;else if(a===Vr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ri=new $,Wt=new ft,sm=new $(0,0,0),om=new $(1,1,1),Sn=new $,fr=new $,Ut=new $,Ga=new ft,Wa=new Zi;class pn{constructor(e=0,t=0,i=0,r=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let am=0;const Xa=new $,si=new Zi,on=new ft,pr=new $,Fi=new $,cm=new $,lm=new Zi,qa=new $(1,0,0),$a=new $(0,1,0),ja=new $(0,0,1),Ya={type:"added"},um={type:"removed"},oi={type:"childadded",child:null},ys={type:"childremoved",child:null};class Ot extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new $,t=new pn,i=new Zi,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Xe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(qa,e)}rotateY(e){return this.rotateOnAxis($a,e)}rotateZ(e){return this.rotateOnAxis(ja,e)}translateOnAxis(e,t){return Xa.copy(e).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qa,e)}translateY(e){return this.translateOnAxis($a,e)}translateZ(e){return this.translateOnAxis(ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pr.copy(e):pr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Fi,pr,this.up):on.lookAt(pr,Fi,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),si.setFromRotationMatrix(on),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ya),oi.child=e,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(um),ys.child=e,this.dispatchEvent(ys),ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ya),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new $(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new $,an=new $,Ms=new $,cn=new $,ai=new $,ci=new $,Ka=new $,Es=new $,bs=new $,Ts=new $,ws=new dt,As=new dt,Rs=new dt;class jt{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xt.subVectors(r,t),an.subVectors(i,t),Ms.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(an),c=Xt.dot(Ms),l=an.dot(an),h=an.dot(Ms),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,u=(l*c-a*h)*p,g=(o*h-a*c)*p;return s.set(1-u-g,g,u)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,cn.x),c.addScaledVector(o,cn.y),c.addScaledVector(a,cn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return ws.setScalar(0),As.setScalar(0),Rs.setScalar(0),ws.fromBufferAttribute(e,t),As.fromBufferAttribute(e,i),Rs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ws,s.x),o.addScaledVector(As,s.y),o.addScaledVector(Rs,s.z),o}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),an.subVectors(e,t),Xt.cross(an).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Xt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ai.subVectors(r,i),ci.subVectors(s,i),Es.subVectors(e,i);const c=ai.dot(Es),l=ci.dot(Es);if(c<=0&&l<=0)return t.copy(i);bs.subVectors(e,r);const h=ai.dot(bs),d=ci.dot(bs);if(h>=0&&d<=h)return t.copy(r);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ai,o);Ts.subVectors(e,s);const u=ai.dot(Ts),g=ci.dot(Ts);if(g>=0&&u<=g)return t.copy(s);const _=u*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ci,a);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return Ka.subVectors(s,r),a=(d-h)/(d-h+(u-g)),t.copy(r).addScaledVector(Ka,a);const f=1/(m+_+p);return o=_*f,a=p*f,t.copy(i).addScaledVector(ai,o).addScaledVector(ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Cs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=qp(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Cs(o,s,e+1/3),this.g=Cs(o,s,e),this.b=Cs(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=yl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hn(e.r),this.g=hn(e.g),this.b=hn(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Je.workingToColorSpace(St.copy(this),e),Math.round(Ye(St.r*255,0,255))*65536+Math.round(Ye(St.g*255,0,255))*256+Math.round(Ye(St.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=zt){Je.workingToColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(mr);const i=ds(yn.h,mr.h,t),r=ds(yn.s,mr.s,t),s=ds(yn.l,mr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new st;st.NAMES=yl;let dm=0;class Xr extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=_i,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qs,this.blendDst=$s,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qs&&(i.blendSrc=this.blendSrc),this.blendDst!==$s&&(i.blendDst=this.blendDst),this.blendEquation!==zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ml extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new $,gr=new et;let hm=0;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fa,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class El extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bl extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qn extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fm=0;const kt=new ft,Ps=new Ot,li=new $,Nt=new Ji,Bi=new Ji,vt=new $;class Kn extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_l(e)?bl:El)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return Ps.lookAt(e),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Nt.min,Bi.min),Nt.expandByPoint(vt),vt.addVectors(Nt.max,Bi.max),Nt.expandByPoint(vt)):(Nt.expandByPoint(Bi.min),Nt.expandByPoint(Bi.max))}Nt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)vt.fromBufferAttribute(a,l),c&&(li.fromBufferAttribute(e,l),vt.add(li)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new $,c[U]=new $;const l=new $,h=new $,d=new $,p=new et,u=new et,g=new et,_=new $,m=new $;function f(U,y,v){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,v),p.fromBufferAttribute(s,U),u.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),h.sub(l),d.sub(l),u.sub(p),g.sub(p);const x=1/(u.x*g.y-g.x*u.y);isFinite(x)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(x),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(x),a[U].add(_),a[y].add(_),a[v].add(_),c[U].add(m),c[y].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,y=T.length;U<y;++U){const v=T[U],x=v.start,b=v.count;for(let P=x,D=x+b;P<D;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const w=new $,M=new $,O=new $,I=new $;function R(U){O.fromBufferAttribute(r,U),I.copy(O);const y=a[U];w.copy(y),w.sub(O.multiplyScalar(O.dot(y))).normalize(),M.crossVectors(I,y);const x=M.dot(c[U])<0?-1:1;o.setXYZW(U,w.x,w.y,w.z,x)}for(let U=0,y=T.length;U<y;++U){const v=T[U],x=v.start,b=v.count;for(let P=x,D=x+b;P<D;P+=3)R(e.getX(P+0)),R(e.getX(P+1)),R(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,u=i.count;p<u;p++)i.setXYZ(p,0,0,0);const r=new $,s=new $,o=new $,a=new $,c=new $,l=new $,h=new $,d=new $;if(e)for(let p=0,u=e.count;p<u;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,u=t.count;p<u;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h);let u=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?u=c[_]*a.data.stride+a.offset:u=c[_]*h;for(let f=0;f<h;f++)p[g++]=l[u++]}return new tn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const p=l[h],u=e(p,i);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new ft,Un=new rm,vr=new Ko,Ja=new $,_r=new $,xr=new $,Sr=new $,Is=new $,yr=new $,Qa=new $,Mr=new $;class Yt extends Ot{constructor(e=new Kn,t=new Ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(Is.fromBufferAttribute(d,e),o?yr.addScaledVector(Is,h):yr.addScaledVector(Is.sub(t),h))}t.add(yr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(vr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(vr,Ja)===null||Un.origin.distanceToSquared(Ja)>(e.far-e.near)**2))&&(Za.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Za),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],T=Math.max(m.start,u.start),w=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=T,O=w;M<O;M+=3){const I=a.getX(M),R=a.getX(M+1),U=a.getX(M+2);r=Er(this,f,e,i,l,h,d,I,R,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){const T=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);r=Er(this,o,e,i,l,h,d,T,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],T=Math.max(m.start,u.start),w=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let M=T,O=w;M<O;M+=3){const I=M,R=M+1,U=M+2;r=Er(this,f,e,i,l,h,d,I,R,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){const T=m,w=m+1,M=m+2;r=Er(this,o,e,i,l,h,d,T,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pm(n,e,t,i,r,s,o,a){let c;if(e.side===Pt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Rn,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Mr);return l<t.near||l>t.far?null:{distance:l,point:Mr.clone(),object:n}}function Er(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,_r),n.getVertexPosition(c,xr),n.getVertexPosition(l,Sr);const h=pm(n,e,t,i,_r,xr,Sr,Qa);if(h){const d=new $;jt.getBarycoord(Qa,_r,xr,Sr,d),r&&(h.uv=jt.getInterpolatedAttribute(r,a,c,l,d,new et)),s&&(h.uv1=jt.getInterpolatedAttribute(s,a,c,l,d,new et)),o&&(h.normal=jt.getInterpolatedAttribute(o,a,c,l,d,new $),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new $,materialIndex:0};jt.getNormal(_r,xr,Sr,p.normal),h.face=p,h.barycoord=d}return h}class Qi extends Kn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let p=0,u=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qn(l,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(d,2));function g(_,m,f,T,w,M,O,I,R,U,y){const v=M/R,x=O/U,b=M/2,P=O/2,D=I/2,F=R+1,N=U+1;let j=0,H=0;const K=new $;for(let re=0;re<N;re++){const ve=re*x-P;for(let Re=0;Re<F;Re++){const W=Re*v-b;K[_]=W*T,K[m]=ve*w,K[f]=D,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=I>0?1:-1,h.push(K.x,K.y,K.z),d.push(Re/R),d.push(1-re/U),j+=1}}for(let re=0;re<U;re++)for(let ve=0;ve<R;ve++){const Re=p+ve+F*re,W=p+ve+F*(re+1),k=p+(ve+1)+F*(re+1),V=p+(ve+1)+F*re;c.push(Re,W,V),c.push(W,k,V),H+=6}a.addGroup(u,H,y),u+=H,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=Ti(n[t]);for(const r in i)e[r]=i[r]}return e}function mm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const gm={clone:Ti,merge:bt};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wl extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new $,ec=new et,tc=new et;class $t extends wl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,di=1;class xm extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(ui,di,e,t);r.layers=this.layers,this.add(r);const s=new $t(ui,di,e,t);s.layers=this.layers,this.add(s);const o=new $t(ui,di,e,t);o.layers=this.layers,this.add(o);const a=new $t(ui,di,e,t);a.layers=this.layers,this.add(a);const c=new $t(ui,di,e,t);c.layers=this.layers,this.add(c);const l=new $t(ui,di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,p,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Al extends It{constructor(e=[],t=Mi,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sm extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Al(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qi(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Tn});s.uniforms.tEquirect.value=t;const o=new Yt(r,s),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=yt),new xm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class br extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,g=.005;l.inputState.pinching&&p>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Rl extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ls=new $,Mm=new $,Em=new Xe;class Bn{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ls.subVectors(i,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ls),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Em.getNormalMatrix(e),r=this.coplanarPoint(Ls).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ko,bm=new et(.5,.5),Tr=new $;class Cl{constructor(e=new Bn,t=new Bn,i=new Bn,r=new Bn,s=new Bn,o=new Bn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=dn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],d=r[6],p=r[7],u=r[8],g=r[9],_=r[10],m=r[11],f=r[12],T=r[13],w=r[14],M=r[15];if(i[0].setComponents(c-s,p-l,m-u,M-f).normalize(),i[1].setComponents(c+s,p+l,m+u,M+f).normalize(),i[2].setComponents(c+o,p+h,m+g,M+T).normalize(),i[3].setComponents(c-o,p-h,m-g,M-T).normalize(),i[4].setComponents(c-a,p-d,m-_,M-w).normalize(),t===dn)i[5].setComponents(c+a,p+d,m+_,M+w).normalize();else if(t===Vr)i[5].setComponents(a,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);const t=bm.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pl extends It{constructor(e,t,i=jn,r,s,o,a=Kt,c=Kt,l,h=qi,d=1){if(h!==qi&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ai extends Kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,d=e/a,p=t/c,u=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const T=f*p-o;for(let w=0;w<l;w++){const M=w*d-s;g.push(M,-T,0),_.push(0,0,1),m.push(w/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const w=T+l*f,M=T+l*(f+1),O=T+1+l*(f+1),I=T+1+l*f;u.push(w,M,I),u.push(M,O,I)}this.setIndex(u),this.setAttribute("position",new qn(g,3)),this.setAttribute("normal",new qn(_,3)),this.setAttribute("uv",new qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tm extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wm extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zo extends wl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Am extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function nc(n,e,t,i){const r=Rm(i);switch(t){case hl:return n*e;case pl:return n*e/r.components*r.byteLength;case qo:return n*e/r.components*r.byteLength;case ml:return n*e*2/r.components*r.byteLength;case $o:return n*e*2/r.components*r.byteLength;case fl:return n*e*3/r.components*r.byteLength;case Ct:return n*e*4/r.components*r.byteLength;case jo:return n*e*4/r.components*r.byteLength;case Dr:case Lr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(n,16)*Math.max(e,8)/4;case so:case ao:return Math.max(n,8)*Math.max(e,8)/2;case lo:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Or:case Ao:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gl:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Po:case Io:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rm(n){switch(n){case fn:case ll:return{byteLength:1,components:1};case Wi:case ul:case Yi:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case jn:case Go:case Ht:return{byteLength:4,components:1};case dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function Il(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cm(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((u,g)=>u.start-g.start);let p=0;for(let u=1;u<d.length;u++){const g=d[p],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
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
#endif`,km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
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
#endif`,Wm=`#ifdef USE_BUMPMAP
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qm=`#define PI 3.141592653589793
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
} // validated`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tg=`vec3 transformedNormal = objectNormal;
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
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
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
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
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
#endif`,Rg=`struct PhysicalMaterial {
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
}`,Cg=`
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
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
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_v=`#ifdef USE_SKINNING
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
#endif`,xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`#include <common>
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
}`,Ov=`#if DEPTH_PACKING == 3200
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
}`,Fv=`#define DISTANCE
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
}`,Bv=`#define DISTANCE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,$v=`#define MATCAP
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
}`,jv=`#define MATCAP
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
}`,Yv=`#define NORMAL
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
}`,Kv=`#define NORMAL
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
}`,Zv=`#define PHONG
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
}`,Jv=`#define PHONG
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
}`,Qv=`#define STANDARD
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
}`,e_=`#define STANDARD
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
}`,t_=`#define TOON
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,r_=`uniform vec3 diffuse;
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
}`,s_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
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
}`,c_=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Pm,alphahash_pars_fragment:Im,alphamap_fragment:Dm,alphamap_pars_fragment:Lm,alphatest_fragment:Um,alphatest_pars_fragment:Nm,aomap_fragment:Om,aomap_pars_fragment:Fm,batching_pars_vertex:Bm,batching_vertex:km,begin_vertex:zm,beginnormal_vertex:Hm,bsdfs:Vm,iridescence_fragment:Gm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:jm,color_fragment:Ym,color_pars_fragment:Km,color_pars_vertex:Zm,color_vertex:Jm,common:Qm,cube_uv_reflection_fragment:eg,defaultnormal_vertex:tg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:rg,emissivemap_pars_fragment:sg,colorspace_fragment:og,colorspace_pars_fragment:ag,envmap_fragment:cg,envmap_common_pars_fragment:lg,envmap_pars_fragment:ug,envmap_pars_vertex:dg,envmap_physical_pars_fragment:Mg,envmap_vertex:hg,fog_vertex:fg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:_g,lights_lambert_fragment:xg,lights_lambert_pars_fragment:Sg,lights_pars_begin:yg,lights_toon_fragment:Eg,lights_toon_pars_fragment:bg,lights_phong_fragment:Tg,lights_phong_pars_fragment:wg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Pg,lights_fragment_end:Ig,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Lg,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Ng,map_fragment:Og,map_pars_fragment:Fg,map_particle_fragment:Bg,map_particle_pars_fragment:kg,metalnessmap_fragment:zg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Vg,morphcolor_vertex:Gg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:$g,normal_fragment_maps:jg,normal_pars_fragment:Yg,normal_pars_vertex:Kg,normal_vertex:Zg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:rv,premultiplied_alpha_fragment:sv,project_vertex:ov,dithering_fragment:av,dithering_pars_fragment:cv,roughnessmap_fragment:lv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:hv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:vv,skinnormal_vertex:_v,specularmap_fragment:xv,specularmap_pars_fragment:Sv,tonemapping_fragment:yv,tonemapping_pars_fragment:Mv,transmission_fragment:Ev,transmission_pars_fragment:bv,uv_pars_fragment:Tv,uv_pars_vertex:wv,uv_vertex:Av,worldpos_vertex:Rv,background_vert:Cv,background_frag:Pv,backgroundCube_vert:Iv,backgroundCube_frag:Dv,cube_vert:Lv,cube_frag:Uv,depth_vert:Nv,depth_frag:Ov,distanceRGBA_vert:Fv,distanceRGBA_frag:Bv,equirect_vert:kv,equirect_frag:zv,linedashed_vert:Hv,linedashed_frag:Vv,meshbasic_vert:Gv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:$v,meshmatcap_frag:jv,meshnormal_vert:Yv,meshnormal_frag:Kv,meshphong_vert:Zv,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:r_,shadow_vert:s_,shadow_frag:o_,sprite_vert:a_,sprite_frag:c_},xe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Jt={basic:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new st(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:bt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:bt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new st(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:bt([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:bt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:bt([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:bt([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:bt([xe.common,xe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:bt([xe.lights,xe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Jt.physical={uniforms:bt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const wr={r:0,b:0,g:0},On=new pn,l_=new ft;function u_(n,e,t,i,r,s,o){const a=new st(0);let c=s===!0?0:1,l,h,d=null,p=0,u=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function _(w){let M=!1;const O=g(w);O===null?f(a,c):O&&O.isColor&&(f(O,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,M){const O=g(M);O&&(O.isCubeTexture||O.mapping===Wr)?(h===void 0&&(h=new Yt(new Qi(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ti(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),On.copy(M.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),h.material.uniforms.envMap.value=O,h.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(On)),h.material.toneMapped=Je.getTransfer(O.colorSpace)!==rt,(d!==O||p!==O.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,d=O,p=O.version,u=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):O&&O.isTexture&&(l===void 0&&(l=new Yt(new Ai(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ti(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=O,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(O.colorSpace)!==rt,O.matrixAutoUpdate===!0&&O.updateMatrix(),l.material.uniforms.uvTransform.value.copy(O.matrix),(d!==O||p!==O.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=O,p=O.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,M){w.getRGB(wr,Tl(n)),i.buffers.color.setClear(wr.r,wr.g,wr.b,M,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:_,addToRenderList:m,dispose:T}}function d_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(v,x,b,P,D){let F=!1;const N=d(P,b,x);s!==N&&(s=N,l(s.object)),F=u(v,P,b,D),F&&g(v,P,b,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(v,x,b,P),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,x,b){const P=b.wireframe===!0;let D=i[v.id];D===void 0&&(D={},i[v.id]=D);let F=D[x.id];F===void 0&&(F={},D[x.id]=F);let N=F[P];return N===void 0&&(N=p(c()),F[P]=N),N}function p(v){const x=[],b=[],P=[];for(let D=0;D<t;D++)x[D]=0,b[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:b,attributeDivisors:P,object:v,attributes:{},index:null}}function u(v,x,b,P){const D=s.attributes,F=x.attributes;let N=0;const j=b.getAttributes();for(const H in j)if(j[H].location>=0){const re=D[H];let ve=F[H];if(ve===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;N++}return s.attributesNum!==N||s.index!==P}function g(v,x,b,P){const D={},F=x.attributes;let N=0;const j=b.getAttributes();for(const H in j)if(j[H].location>=0){let re=F[H];re===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),D[H]=ve,N++}s.attributes=D,s.attributesNum=N,s.index=P}function _(){const v=s.newAttributes;for(let x=0,b=v.length;x<b;x++)v[x]=0}function m(v){f(v,0)}function f(v,x){const b=s.newAttributes,P=s.enabledAttributes,D=s.attributeDivisors;b[v]=1,P[v]===0&&(n.enableVertexAttribArray(v),P[v]=1),D[v]!==x&&(n.vertexAttribDivisor(v,x),D[v]=x)}function T(){const v=s.newAttributes,x=s.enabledAttributes;for(let b=0,P=x.length;b<P;b++)x[b]!==v[b]&&(n.disableVertexAttribArray(b),x[b]=0)}function w(v,x,b,P,D,F,N){N===!0?n.vertexAttribIPointer(v,x,b,D,F):n.vertexAttribPointer(v,x,b,P,D,F)}function M(v,x,b,P){_();const D=P.attributes,F=b.getAttributes(),N=x.defaultAttributeValues;for(const j in F){const H=F[j];if(H.location>=0){let K=D[j];if(K===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const re=K.normalized,ve=K.itemSize,Re=e.get(K);if(Re===void 0)continue;const W=Re.buffer,k=Re.type,V=Re.bytesPerElement,ne=k===n.INT||k===n.UNSIGNED_INT||K.gpuType===Go;if(K.isInterleavedBufferAttribute){const Q=K.data,de=Q.stride,De=K.offset;if(Q.isInstancedInterleavedBuffer){for(let Ce=0;Ce<H.locationSize;Ce++)f(H.location+Ce,Q.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ce=0;Ce<H.locationSize;Ce++)m(H.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Ce=0;Ce<H.locationSize;Ce++)w(H.location+Ce,ve/H.locationSize,k,re,de*V,(De+ve/H.locationSize*Ce)*V,ne)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)f(H.location+Q,K.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Q=0;Q<H.locationSize;Q++)w(H.location+Q,ve/H.locationSize,k,re,ve*V,ve/H.locationSize*Q*V,ne)}}else if(N!==void 0){const re=N[j];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(H.location,re);break;case 3:n.vertexAttrib3fv(H.location,re);break;case 4:n.vertexAttrib4fv(H.location,re);break;default:n.vertexAttrib1fv(H.location,re)}}}}T()}function O(){U();for(const v in i){const x=i[v];for(const b in x){const P=x[b];for(const D in P)h(P[D].object),delete P[D];delete x[b]}delete i[v]}}function I(v){if(i[v.id]===void 0)return;const x=i[v.id];for(const b in x){const P=x[b];for(const D in P)h(P[D].object),delete P[D];delete x[b]}delete i[v.id]}function R(v){for(const x in i){const b=i[x];if(b[v.id]===void 0)continue;const P=b[v.id];for(const D in P)h(P[D].object),delete P[D];delete b[v.id]}}function U(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function h_(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];t.update(u,i,1)}function c(l,h,d,p){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{u.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*p[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function f_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Ct&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ht&&!U)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:O,maxSamples:I}}function p_(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Bn,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const u=d.length!==0||p||i!==0||r;return r=p,i=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const T=s?0:i,w=T*4;let M=f.clippingState||null;c.value=M,M=h(g,p,w,u);for(let O=0;O!==w;++O)M[O]=t[O];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=u+_*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,M=u;w!==_;++w,M+=4)o.copy(d[w]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function m_(n){let e=new WeakMap;function t(o,a){return a===to?o.mapping=Mi:a===no&&(o.mapping=Ei),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const mi=4,ic=[.125,.215,.35,.446,.526,.582],Hn=20,Us=new Zo,rc=new st;let Ns=null,Os=0,Fs=0,Bs=!1;const kn=(1+Math.sqrt(5))/2,hi=1/kn,sc=[new $(-kn,hi,0),new $(kn,hi,0),new $(-hi,0,kn),new $(hi,0,kn),new $(0,kn,-hi),new $(0,kn,hi),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],g_=new $;class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=g_}=s;Ns=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Os,Fs),this._renderer.xr.enabled=Bs,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Yi,format:Ct,colorSpace:bi,depthBuffer:!1},r=ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(s)),this._blurMaterial=__(s,e,t)}return r}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,i,r,s){const c=new $t(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(rc),d.toneMapping=wn,d.autoClear=!1;const g=new Ml({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new Yt(new Qi,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(rc),m=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):w===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const M=this._cubeSize;Ar(r,w*M,T>2?M:0,M,M),d.setRenderTarget(r),m&&d.render(_,c),d.render(e,c)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=u,d.autoClear=p,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mi||e.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ar(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Us)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sc[(r-s-1)%sc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Yt(this._lodPlanes[r],l),p=l.uniforms,u=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Hn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Hn;m>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const f=[];let T=0;for(let R=0;R<Hn;++R){const U=R/_,y=Math.exp(-U*U/2);f.push(y),R===0?T+=y:R<m&&(T+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-i;const M=this._sizeLods[r],O=3*M*(r>w-mi?r-w+mi:0),I=4*(this._cubeSize-M);Ar(t,O,I,3*M,2*M),c.setRenderTarget(t),c.render(d,Us)}}function v_(n){const e=[],t=[],i=[];let r=n;const s=n-mi+1+ic.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-mi?c=ic[o-n+mi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*u),w=new Float32Array(m*g*u),M=new Float32Array(f*g*u);for(let I=0;I<u;I++){const R=I%3*2/3-1,U=I>2?0:-1,y=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];T.set(y,_*g*I),w.set(p,m*g*I);const v=[I,I,I,I,I,I];M.set(v,f*g*I)}const O=new Kn;O.setAttribute("position",new tn(T,_)),O.setAttribute("uv",new tn(w,m)),O.setAttribute("faceIndex",new tn(M,f)),e.push(O),r>mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ac(n,e,t){const i=new en(n,e,t);return i.texture.mapping=Wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function __(n,e,t){const i=new Float32Array(Hn),r=new $(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function cc(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function lc(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function x_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===to||c===no,h=c===Mi||c===Ei;if(l||h){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new oc(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return l&&u&&u.height>0||h&&u&&r(u)?(t===null&&(t=new oc(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function S_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&xi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y_(n,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const u=s.get(p);u&&(e.remove(u),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const u in p)e.update(p[u],n.ARRAY_BUFFER)}function l(d){const p=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const T=u.array;_=u.version;for(let w=0,M=T.length;w<M;w+=3){const O=T[w+0],I=T[w+1],R=T[w+2];p.push(O,I,I,R,R,O)}}else if(g!==void 0){const T=g.array;_=g.version;for(let w=0,M=T.length/3-1;w<M;w+=3){const O=w+0,I=w+1,R=w+2;p.push(O,I,I,R,R,O)}}else return;const m=new(_l(p)?bl:El)(p,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const p=s.get(d);if(p){const u=d.index;u!==null&&p.version<u.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function M_(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,u){n.drawElements(i,u,s,p*o),t.update(u,i,1)}function l(p,u,g){g!==0&&(n.drawElementsInstanced(i,u,s,p*o,g),t.update(u,i,g))}function h(p,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=u[f];t.update(m,i,1)}function d(p,u,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,u[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,s,p,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=u[T]*_[T];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function E_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function b_(n,e,t){const i=new WeakMap,r=new dt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let u=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",u)};p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let O=a.attributes.position.count*M,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const R=new Float32Array(O*I*4*d),U=new xl(R,O,I,d);U.type=Ht,U.needsUpdate=!0;const y=M*4;for(let v=0;v<d;v++){const x=f[v],b=T[v],P=w[v],D=O*I*4*v;for(let F=0;F<x.count;F++){const N=F*y;g===!0&&(r.fromBufferAttribute(x,F),R[D+N+0]=r.x,R[D+N+1]=r.y,R[D+N+2]=r.z,R[D+N+3]=0),_===!0&&(r.fromBufferAttribute(b,F),R[D+N+4]=r.x,R[D+N+5]=r.y,R[D+N+6]=r.z,R[D+N+7]=0),m===!0&&(r.fromBufferAttribute(P,F),R[D+N+8]=r.x,R[D+N+9]=r.y,R[D+N+10]=r.z,R[D+N+11]=P.itemSize===4?r.w:1)}}p={count:d,texture:U,size:new et(O,I)},i.set(a,p),a.addEventListener("dispose",u)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];const g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function T_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Dl=new It,uc=new Pl(1,1),Ll=new xl,Ul=new nm,Nl=new Al,dc=[],hc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function Ri(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=dc[r];if(s===void 0&&(s=new Float32Array(r),dc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qr(n,e){let t=hc[e];t===void 0&&(t=new Int32Array(e),hc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function w_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function P_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;mc.set(i),n.uniformMatrix2fv(this.addr,!1,mc),gt(t,i)}}function I_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;pc.set(i),n.uniformMatrix3fv(this.addr,!1,pc),gt(t,i)}}function D_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;fc.set(i),n.uniformMatrix4fv(this.addr,!1,fc),gt(t,i)}}function L_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function F_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function k_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function H_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(uc.compareFunction=vl,s=uc):s=Dl,t.setTexture2D(e||s,r)}function V_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ul,r)}function G_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nl,r)}function W_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ll,r)}function X_(n){switch(n){case 5126:return w_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return P_;case 35675:return I_;case 35676:return D_;case 5124:case 35670:return L_;case 35667:case 35671:return U_;case 35668:case 35672:return N_;case 35669:case 35673:return O_;case 5125:return F_;case 36294:return B_;case 36295:return k_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(n,e){n.uniform1fv(this.addr,e)}function $_(n,e){const t=Ri(e,this.size,2);n.uniform2fv(this.addr,t)}function j_(n,e){const t=Ri(e,this.size,3);n.uniform3fv(this.addr,t)}function Y_(n,e){const t=Ri(e,this.size,4);n.uniform4fv(this.addr,t)}function K_(n,e){const t=Ri(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Z_(n,e){const t=Ri(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J_(n,e){const t=Ri(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Q_(n,e){n.uniform1iv(this.addr,e)}function e0(n,e){n.uniform2iv(this.addr,e)}function t0(n,e){n.uniform3iv(this.addr,e)}function n0(n,e){n.uniform4iv(this.addr,e)}function i0(n,e){n.uniform1uiv(this.addr,e)}function r0(n,e){n.uniform2uiv(this.addr,e)}function s0(n,e){n.uniform3uiv(this.addr,e)}function o0(n,e){n.uniform4uiv(this.addr,e)}function a0(n,e,t){const i=this.cache,r=e.length,s=qr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dl,s[o])}function c0(n,e,t){const i=this.cache,r=e.length,s=qr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ul,s[o])}function l0(n,e,t){const i=this.cache,r=e.length,s=qr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nl,s[o])}function u0(n,e,t){const i=this.cache,r=e.length,s=qr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ll,s[o])}function d0(n){switch(n){case 5126:return q_;case 35664:return $_;case 35665:return j_;case 35666:return Y_;case 35674:return K_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return Q_;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return s0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return u0}}class h0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=X_(t.type)}}class f0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d0(t.type)}}class p0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ks=/(\w+)(\])?(\[|\.)?/g;function gc(n,e){n.seq.push(e),n.map[e.id]=e}function m0(n,e,t){const i=n.name,r=i.length;for(ks.lastIndex=0;;){const s=ks.exec(i),o=ks.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){gc(t,l===void 0?new h0(a,n,e):new f0(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new p0(a),gc(t,d)),t=d}}}class Fr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);m0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function vc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const g0=37297;let v0=0;function _0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const _c=new Xe;function x0(n){Je._getMatrix(_c,Je.workingColorSpace,n);const e=`mat3( ${_c.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Hr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_0(n.getShaderSource(e),o)}else return r}function S0(n,e){const t=x0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y0(n,e){let t;switch(e){case Ap:t="Linear";break;case Rp:t="Reinhard";break;case Cp:t="Cineon";break;case Pp:t="ACESFilmic";break;case Dp:t="AgX";break;case Lp:t="Neutral";break;case Ip:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new $;function M0(){Je.getLuminanceCoefficients(Rr);const n=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function b0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ki(n){return n!==""}function Sc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(n){return n.replace(w0,R0)}const A0=new Map;function R0(n,e){let t=qe[e];if(t===void 0){const i=A0.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(n){return n.replace(C0,P0)}function P0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ec(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function I0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===op?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function D0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mi:case Ei:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ei&&(e="ENVMAP_MODE_REFRACTION"),e}function U0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case Tp:e="ENVMAP_BLENDING_MIX";break;case wp:e="ENVMAP_BLENDING_ADD";break}return e}function N0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function O0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=I0(t),l=D0(t),h=L0(t),d=U0(t),p=N0(t),u=E0(t),g=b0(s),_=r.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ki).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ki).join(`
`),f.length>0&&(f+=`
`)):(m=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),f=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?qe.tonemapping_pars_fragment:"",t.toneMapping!==wn?y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),M0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),o=Lo(o),o=Sc(o,t),o=yc(o,t),a=Lo(a),a=Sc(a,t),a=yc(a,t),o=Mc(o),a=Mc(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=T+m+o,M=T+f+a,O=vc(r,r.VERTEX_SHADER,w),I=vc(r,r.FRAGMENT_SHADER,M);r.attachShader(_,O),r.attachShader(_,I),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(x){if(n.debug.checkShaderErrors){const b=r.getProgramInfoLog(_).trim(),P=r.getShaderInfoLog(O).trim(),D=r.getShaderInfoLog(I).trim();let F=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,O,I);else{const j=xc(r,O,"vertex"),H=xc(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+b+`
`+j+`
`+H)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(P===""||D==="")&&(N=!1);N&&(x.diagnostics={runnable:F,programLog:b,vertexShader:{log:P,prefix:m},fragmentShader:{log:D,prefix:f}})}r.deleteShader(O),r.deleteShader(I),U=new Fr(r,_),y=T0(r,_)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,g0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=I,this}let F0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new k0(e),t.set(e,i)),i}}class k0{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}}function z0(n,e,t,i,r,s,o){const a=new Sl,c=new B0,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let u=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,v,x,b,P){const D=b.fog,F=P.geometry,N=y.isMeshStandardMaterial?b.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),H=j&&j.mapping===Wr?j.image.height:null,K=g[y.type];y.precision!==null&&(u=r.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ve=re!==void 0?re.length:0;let Re=0;F.morphAttributes.position!==void 0&&(Re=1),F.morphAttributes.normal!==void 0&&(Re=2),F.morphAttributes.color!==void 0&&(Re=3);let W,k,V,ne;if(K){const Ke=Jt[K];W=Ke.vertexShader,k=Ke.fragmentShader}else W=y.vertexShader,k=y.fragmentShader,c.update(y),V=c.getVertexShaderID(y),ne=c.getFragmentShaderID(y);const Q=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),De=P.isInstancedMesh===!0,Ce=P.isBatchedMesh===!0,ce=!!y.map,_e=!!y.matcap,pe=!!j,C=!!y.aoMap,Ve=!!y.lightMap,Te=!!y.bumpMap,Be=!!y.normalMap,Se=!!y.displacementMap,We=!!y.emissiveMap,Pe=!!y.metalnessMap,ze=!!y.roughnessMap,tt=y.anisotropy>0,A=y.clearcoat>0,S=y.dispersion>0,G=y.iridescence>0,Z=y.sheen>0,ee=y.transmission>0,Y=tt&&!!y.anisotropyMap,le=A&&!!y.clearcoatMap,oe=A&&!!y.clearcoatNormalMap,Ee=A&&!!y.clearcoatRoughnessMap,Ie=G&&!!y.iridescenceMap,ie=G&&!!y.iridescenceThicknessMap,be=Z&&!!y.sheenColorMap,Oe=Z&&!!y.sheenRoughnessMap,Le=!!y.specularMap,me=!!y.specularColorMap,ke=!!y.specularIntensityMap,L=ee&&!!y.transmissionMap,fe=ee&&!!y.thicknessMap,se=!!y.gradientMap,ge=!!y.alphaMap,te=y.alphaTest>0,J=!!y.alphaHash,ye=!!y.extensions;let Ue=wn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const nt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:k,defines:y.defines,customVertexShaderID:V,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&P._colorsTexture!==null,instancing:De,instancingColor:De&&P.instanceColor!==null,instancingMorph:De&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:bi,alphaToCoverage:!!y.alphaToCoverage,map:ce,matcap:_e,envMap:pe,envMapMode:pe&&j.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Ve,bumpMap:Te,normalMap:Be,displacementMap:p&&Se,emissiveMap:We,normalMapObjectSpace:Be&&y.normalMapType===Bp,normalMapTangentSpace:Be&&y.normalMapType===Fp,metalnessMap:Pe,roughnessMap:ze,anisotropy:tt,anisotropyMap:Y,clearcoat:A,clearcoatMap:le,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:G,iridescenceMap:Ie,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:be,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:me,specularIntensityMap:ke,transmission:ee,transmissionMap:L,thicknessMap:fe,gradientMap:se,opaque:y.transparent===!1&&y.blending===_i&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:J,combine:y.combine,mapUv:ce&&_(y.map.channel),aoMapUv:C&&_(y.aoMap.channel),lightMapUv:Ve&&_(y.lightMap.channel),bumpMapUv:Te&&_(y.bumpMap.channel),normalMapUv:Be&&_(y.normalMap.channel),displacementMapUv:Se&&_(y.displacementMap.channel),emissiveMapUv:We&&_(y.emissiveMap.channel),metalnessMapUv:Pe&&_(y.metalnessMap.channel),roughnessMapUv:ze&&_(y.roughnessMap.channel),anisotropyMapUv:Y&&_(y.anisotropyMap.channel),clearcoatMapUv:le&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(y.sheenRoughnessMap.channel),specularMapUv:Le&&_(y.specularMap.channel),specularColorMapUv:me&&_(y.specularColorMap.channel),specularIntensityMapUv:ke&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:fe&&_(y.thicknessMap.channel),alphaMapUv:ge&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Be||tt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(ce||ge),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:de,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Re,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&x.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ce&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:We&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===un,flipSided:y.side===Pt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function f(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const x in y.defines)v.push(x),v.push(y.defines[x]);return y.isRawShaderMaterial===!1&&(T(v,y),w(v,y),v.push(n.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function T(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function w(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const v=g[y.type];let x;if(v){const b=Jt[v];x=gm.clone(b.uniforms)}else x=y.uniforms;return x}function O(y,v){let x;for(let b=0,P=h.length;b<P;b++){const D=h[b];if(D.cacheKey===v){x=D,++x.usedTimes;break}}return x===void 0&&(x=new O0(n,v,y,s),h.push(x)),x}function I(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:O,releaseProgram:I,releaseShaderCache:R,programs:h,dispose:U}}function H0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function V0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,u,g,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=u,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,p,u,g,_,m){const f=o(d,p,u,g,_,m);u.transmission>0?i.push(f):u.transparent===!0?r.push(f):t.push(f)}function c(d,p,u,g,_,m){const f=o(d,p,u,g,_,m);u.transmission>0?i.unshift(f):u.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,p){t.length>1&&t.sort(d||V0),i.length>1&&i.sort(p||bc),r.length>1&&r.sort(p||bc)}function h(){for(let d=e,p=n.length;d<p;d++){const u=n[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function G0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Tc,n.set(i,[o])):r>=s.length?(o=new Tc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function W0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new st};break;case"SpotLight":t={position:new $,direction:new $,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function X0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let q0=0;function $0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j0(n){const e=new W0,t=X0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const r=new $,s=new ft,o=new ft;function a(l){let h=0,d=0,p=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let u=0,g=0,_=0,m=0,f=0,T=0,w=0,M=0,O=0,I=0,R=0;l.sort($0);for(let y=0,v=l.length;y<v;y++){const x=l[y],b=x.color,P=x.intensity,D=x.distance,F=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)h+=b.r*P,d+=b.g*P,p+=b.b*P;else if(x.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(x.sh.coefficients[N],P);R++}else if(x.isDirectionalLight){const N=e.get(x);if(N.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const j=x.shadow,H=t.get(x);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[u]=H,i.directionalShadowMap[u]=F,i.directionalShadowMatrix[u]=x.shadow.matrix,T++}i.directional[u]=N,u++}else if(x.isSpotLight){const N=e.get(x);N.position.setFromMatrixPosition(x.matrixWorld),N.color.copy(b).multiplyScalar(P),N.distance=D,N.coneCos=Math.cos(x.angle),N.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),N.decay=x.decay,i.spot[_]=N;const j=x.shadow;if(x.map&&(i.spotLightMap[O]=x.map,O++,j.updateMatrices(x),x.castShadow&&I++),i.spotLightMatrix[_]=j.matrix,x.castShadow){const H=t.get(x);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=F,M++}_++}else if(x.isRectAreaLight){const N=e.get(x);N.color.copy(b).multiplyScalar(P),N.halfWidth.set(x.width*.5,0,0),N.halfHeight.set(0,x.height*.5,0),i.rectArea[m]=N,m++}else if(x.isPointLight){const N=e.get(x);if(N.color.copy(x.color).multiplyScalar(x.intensity),N.distance=x.distance,N.decay=x.decay,x.castShadow){const j=x.shadow,H=t.get(x);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=x.shadow.matrix,w++}i.point[g]=N,g++}else if(x.isHemisphereLight){const N=e.get(x);N.skyColor.copy(x.color).multiplyScalar(P),N.groundColor.copy(x.groundColor).multiplyScalar(P),i.hemi[f]=N,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==u||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==T||U.numPointShadows!==w||U.numSpotShadows!==M||U.numSpotMaps!==O||U.numLightProbes!==R)&&(i.directional.length=u,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,U.directionalLength=u,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=T,U.numPointShadows=w,U.numSpotShadows=M,U.numSpotMaps=O,U.numLightProbes=R,i.version=q0++)}function c(l,h){let d=0,p=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const w=l[f];if(w.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(w.isSpotLight){const M=i.spot[u];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function wc(n){const e=new j0(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Y0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wc(n),e.set(r,[a])):s>=o.length?(a=new wc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function J0(n,e,t){let i=new Cl;const r=new et,s=new et,o=new dt,a=new Tm({depthPacking:Op}),c=new wm,l={},h=t.maxTextureSize,d={[Rn]:Pt,[Pt]:Rn,[un]:un},p=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),u=p.clone();u.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let f=this.type;this.render=function(I,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const y=n.getRenderTarget(),v=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),b=n.state;b.setBlending(Tn),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const P=f!==ln&&this.type===ln,D=f===ln&&this.type!==ln;for(let F=0,N=I.length;F<N;F++){const j=I[F],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const K=H.getFrameExtents();if(r.multiply(K),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,H.mapSize.y=s.y)),H.map===null||P===!0||D===!0){const ve=this.type!==ln?{minFilter:Kt,magFilter:Kt}:{};H.map!==null&&H.map.dispose(),H.map=new en(r.x,r.y,ve),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const re=H.getViewportCount();for(let ve=0;ve<re;ve++){const Re=H.getViewport(ve);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),b.viewport(o),H.updateMatrices(j,ve),i=H.getFrustum(),M(R,U,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===ln&&T(H,U),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,v,x)};function T(I,R){const U=e.update(_);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new en(r.x,r.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,U,p,_,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,U,u,_,null)}function w(I,R,U,y){let v=null;const x=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(x!==void 0)v=x;else if(v=U.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const b=v.uuid,P=R.uuid;let D=l[b];D===void 0&&(D={},l[b]=D);let F=D[P];F===void 0&&(F=v.clone(),D[P]=F,R.addEventListener("dispose",O)),v=F}if(v.visible=R.visible,v.wireframe=R.wireframe,y===ln?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const b=n.properties.get(v);b.light=U}return v}function M(I,R,U,y,v){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===ln)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const P=e.update(I),D=I.material;if(Array.isArray(D)){const F=P.groups;for(let N=0,j=F.length;N<j;N++){const H=F[N],K=D[H.materialIndex];if(K&&K.visible){const re=w(I,K,y,v);I.onBeforeShadow(n,I,R,U,P,re,H),n.renderBufferDirect(U,null,P,re,I,H),I.onAfterShadow(n,I,R,U,P,re,H)}}}else if(D.visible){const F=w(I,D,y,v);I.onBeforeShadow(n,I,R,U,P,F,null),n.renderBufferDirect(U,null,P,F,I,null),I.onAfterShadow(n,I,R,U,P,F,null)}}const b=I.children;for(let P=0,D=b.length;P<D;P++)M(b[P],R,U,y,v)}function O(I){I.target.removeEventListener("dispose",O);for(const U in l){const y=l[U],v=I.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Q0={[js]:Ys,[Ks]:Qs,[Zs]:eo,[yi]:Js,[Ys]:js,[Qs]:Ks,[eo]:Zs,[Js]:yi};function ex(n,e){function t(){let L=!1;const fe=new dt;let se=null;const ge=new dt(0,0,0,0);return{setMask:function(te){se!==te&&!L&&(n.colorMask(te,te,te,te),se=te)},setLocked:function(te){L=te},setClear:function(te,J,ye,Ue,nt){nt===!0&&(te*=Ue,J*=Ue,ye*=Ue),fe.set(te,J,ye,Ue),ge.equals(fe)===!1&&(n.clearColor(te,J,ye,Ue),ge.copy(fe))},reset:function(){L=!1,se=null,ge.set(-1,0,0,0)}}}function i(){let L=!1,fe=!1,se=null,ge=null,te=null;return{setReversed:function(J){if(fe!==J){const ye=e.get("EXT_clip_control");J?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),fe=J;const Ue=te;te=null,this.setClear(Ue)}},getReversed:function(){return fe},setTest:function(J){J?Q(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(J){se!==J&&!L&&(n.depthMask(J),se=J)},setFunc:function(J){if(fe&&(J=Q0[J]),ge!==J){switch(J){case js:n.depthFunc(n.NEVER);break;case Ys:n.depthFunc(n.ALWAYS);break;case Ks:n.depthFunc(n.LESS);break;case yi:n.depthFunc(n.LEQUAL);break;case Zs:n.depthFunc(n.EQUAL);break;case Js:n.depthFunc(n.GEQUAL);break;case Qs:n.depthFunc(n.GREATER);break;case eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=J}},setLocked:function(J){L=J},setClear:function(J){te!==J&&(fe&&(J=1-J),n.clearDepth(J),te=J)},reset:function(){L=!1,se=null,ge=null,te=null,fe=!1}}}function r(){let L=!1,fe=null,se=null,ge=null,te=null,J=null,ye=null,Ue=null,nt=null;return{setTest:function(Ke){L||(Ke?Q(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Ke){fe!==Ke&&!L&&(n.stencilMask(Ke),fe=Ke)},setFunc:function(Ke,Mt,_t){(se!==Ke||ge!==Mt||te!==_t)&&(n.stencilFunc(Ke,Mt,_t),se=Ke,ge=Mt,te=_t)},setOp:function(Ke,Mt,_t){(J!==Ke||ye!==Mt||Ue!==_t)&&(n.stencilOp(Ke,Mt,_t),J=Ke,ye=Mt,Ue=_t)},setLocked:function(Ke){L=Ke},setClear:function(Ke){nt!==Ke&&(n.clearStencil(Ke),nt=Ke)},reset:function(){L=!1,fe=null,se=null,ge=null,te=null,J=null,ye=null,Ue=null,nt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,u=[],g=null,_=!1,m=null,f=null,T=null,w=null,M=null,O=null,I=null,R=new st(0,0,0),U=0,y=!1,v=null,x=null,b=null,P=null,D=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,j=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=j>=2);let K=null,re={};const ve=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),W=new dt().fromArray(ve),k=new dt().fromArray(Re);function V(L,fe,se,ge){const te=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<se;ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(fe+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return J}const ne={};ne[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(yi),Te(!1),Be(La),Q(n.CULL_FACE),C(Tn);function Q(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function de(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function De(L,fe){return d[L]!==fe?(n.bindFramebuffer(L,fe),d[L]=fe,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ce(L,fe){let se=u,ge=!1;if(L){se=p.get(fe),se===void 0&&(se=[],p.set(fe,se));const te=L.textures;if(se.length!==te.length||se[0]!==n.COLOR_ATTACHMENT0){for(let J=0,ye=te.length;J<ye;J++)se[J]=n.COLOR_ATTACHMENT0+J;se.length=te.length,ge=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ge=!0);ge&&n.drawBuffers(se)}function ce(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const _e={[zn]:n.FUNC_ADD,[cp]:n.FUNC_SUBTRACT,[lp]:n.FUNC_REVERSE_SUBTRACT};_e[up]=n.MIN,_e[dp]=n.MAX;const pe={[hp]:n.ZERO,[fp]:n.ONE,[pp]:n.SRC_COLOR,[qs]:n.SRC_ALPHA,[Sp]:n.SRC_ALPHA_SATURATE,[_p]:n.DST_COLOR,[gp]:n.DST_ALPHA,[mp]:n.ONE_MINUS_SRC_COLOR,[$s]:n.ONE_MINUS_SRC_ALPHA,[xp]:n.ONE_MINUS_DST_COLOR,[vp]:n.ONE_MINUS_DST_ALPHA,[yp]:n.CONSTANT_COLOR,[Mp]:n.ONE_MINUS_CONSTANT_COLOR,[Ep]:n.CONSTANT_ALPHA,[bp]:n.ONE_MINUS_CONSTANT_ALPHA};function C(L,fe,se,ge,te,J,ye,Ue,nt,Ke){if(L===Tn){_===!0&&(de(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),L!==ap){if(L!==m||Ke!==y){if((f!==zn||M!==zn)&&(n.blendEquation(n.FUNC_ADD),f=zn,M=zn),Ke)switch(L){case _i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xs:n.blendFunc(n.ONE,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Na:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ua:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Na:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,w=null,O=null,I=null,R.set(0,0,0),U=0,m=L,y=Ke}return}te=te||fe,J=J||se,ye=ye||ge,(fe!==f||te!==M)&&(n.blendEquationSeparate(_e[fe],_e[te]),f=fe,M=te),(se!==T||ge!==w||J!==O||ye!==I)&&(n.blendFuncSeparate(pe[se],pe[ge],pe[J],pe[ye]),T=se,w=ge,O=J,I=ye),(Ue.equals(R)===!1||nt!==U)&&(n.blendColor(Ue.r,Ue.g,Ue.b,nt),R.copy(Ue),U=nt),m=L,y=!1}function Ve(L,fe){L.side===un?de(n.CULL_FACE):Q(n.CULL_FACE);let se=L.side===Pt;fe&&(se=!se),Te(se),L.blending===_i&&L.transparent===!1?C(Tn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const ge=L.stencilWrite;a.setTest(ge),ge&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),We(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){v!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),v=L)}function Be(L){L!==rp?(Q(n.CULL_FACE),L!==x&&(L===La?n.cullFace(n.BACK):L===sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),x=L}function Se(L){L!==b&&(N&&n.lineWidth(L),b=L)}function We(L,fe,se){L?(Q(n.POLYGON_OFFSET_FILL),(P!==fe||D!==se)&&(n.polygonOffset(fe,se),P=fe,D=se)):de(n.POLYGON_OFFSET_FILL)}function Pe(L){L?Q(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function ze(L){L===void 0&&(L=n.TEXTURE0+F-1),K!==L&&(n.activeTexture(L),K=L)}function tt(L,fe,se){se===void 0&&(K===null?se=n.TEXTURE0+F-1:se=K);let ge=re[se];ge===void 0&&(ge={type:void 0,texture:void 0},re[se]=ge),(ge.type!==L||ge.texture!==fe)&&(K!==se&&(n.activeTexture(se),K=se),n.bindTexture(L,fe||ne[L]),ge.type=L,ge.texture=fe)}function A(){const L=re[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){W.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),W.copy(L))}function Oe(L){k.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),k.copy(L))}function Le(L,fe){let se=l.get(fe);se===void 0&&(se=new WeakMap,l.set(fe,se));let ge=se.get(L);ge===void 0&&(ge=n.getUniformBlockIndex(fe,L.name),se.set(L,ge))}function me(L,fe){const ge=l.get(fe).get(L);c.get(fe)!==ge&&(n.uniformBlockBinding(fe,ge,L.__bindingPointIndex),c.set(fe,ge))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,re={},d={},p=new WeakMap,u=[],g=null,_=!1,m=null,f=null,T=null,w=null,M=null,O=null,I=null,R=new st(0,0,0),U=0,y=!1,v=null,x=null,b=null,P=null,D=null,W.set(0,0,n.canvas.width,n.canvas.height),k.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:de,bindFramebuffer:De,drawBuffers:Ce,useProgram:ce,setBlending:C,setMaterial:Ve,setFlipSided:Te,setCullFace:Be,setLineWidth:Se,setPolygonOffset:We,setScissorTest:Pe,activeTexture:ze,bindTexture:tt,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Ie,texImage3D:ie,updateUBOMapping:Le,uniformBlockBinding:me,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:le,scissor:be,viewport:Oe,reset:ke}}function tx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,h=new WeakMap;let d;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return u?new OffscreenCanvas(A,S):Gr("canvas")}function _(A,S,G){let Z=1;const ee=tt(A);if((ee.width>G||ee.height>G)&&(Z=G/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(Z*ee.width),le=Math.floor(Z*ee.height);d===void 0&&(d=g(Y,le));const oe=S?g(Y,le):d;return oe.width=Y,oe.height=le,oe.getContext("2d").drawImage(A,0,0,Y,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+le+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,S,G,Z,ee=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===n.RED&&(G===n.FLOAT&&(Y=n.R32F),G===n.HALF_FLOAT&&(Y=n.R16F),G===n.UNSIGNED_BYTE&&(Y=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.R8UI),G===n.UNSIGNED_SHORT&&(Y=n.R16UI),G===n.UNSIGNED_INT&&(Y=n.R32UI),G===n.BYTE&&(Y=n.R8I),G===n.SHORT&&(Y=n.R16I),G===n.INT&&(Y=n.R32I)),S===n.RG&&(G===n.FLOAT&&(Y=n.RG32F),G===n.HALF_FLOAT&&(Y=n.RG16F),G===n.UNSIGNED_BYTE&&(Y=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RG8UI),G===n.UNSIGNED_SHORT&&(Y=n.RG16UI),G===n.UNSIGNED_INT&&(Y=n.RG32UI),G===n.BYTE&&(Y=n.RG8I),G===n.SHORT&&(Y=n.RG16I),G===n.INT&&(Y=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),G===n.UNSIGNED_INT&&(Y=n.RGB32UI),G===n.BYTE&&(Y=n.RGB8I),G===n.SHORT&&(Y=n.RGB16I),G===n.INT&&(Y=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),G===n.UNSIGNED_INT&&(Y=n.RGBA32UI),G===n.BYTE&&(Y=n.RGBA8I),G===n.SHORT&&(Y=n.RGBA16I),G===n.INT&&(Y=n.RGBA32I)),S===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),S===n.RGBA){const le=ee?Hr:Je.getTransfer(Z);G===n.FLOAT&&(Y=n.RGBA32F),G===n.HALF_FLOAT&&(Y=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Y=le===rt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(A,S){let G;return A?S===null||S===jn||S===Xi?G=n.DEPTH24_STENCIL8:S===Ht?G=n.DEPTH32F_STENCIL8:S===Wi&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===jn||S===Xi?G=n.DEPTH_COMPONENT24:S===Ht?G=n.DEPTH_COMPONENT32F:S===Wi&&(G=n.DEPTH_COMPONENT16),G}function O(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==yt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){const S=A.target;S.removeEventListener("dispose",I),U(S),S.isVideoTexture&&h.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),v(S)}function U(A){const S=i.get(A);if(S.__webglInit===void 0)return;const G=A.source,Z=p.get(G);if(Z){const ee=Z[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(A),Object.keys(Z).length===0&&p.delete(G)}i.remove(A)}function y(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const G=A.source,Z=p.get(G);delete Z[S.__cacheKey],o.memory.textures--}function v(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ee=0;ee<S.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=A.textures;for(let Z=0,ee=G.length;Z<ee;Z++){const Y=i.get(G[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(G[Z])}i.remove(A)}let x=0;function b(){x=0}function P(){const A=x;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),x+=1,A}function D(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function F(A,S){const G=i.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(G,A,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function N(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ne(G,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function j(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ne(G,A,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function H(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Q(G,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const K={[io]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[ro]:n.MIRRORED_REPEAT},re={[Kt]:n.NEAREST,[Up]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[yt]:n.LINEAR,[ls]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},ve={[kp]:n.NEVER,[Xp]:n.ALWAYS,[zp]:n.LESS,[vl]:n.LEQUAL,[Hp]:n.EQUAL,[Wp]:n.GEQUAL,[Vp]:n.GREATER,[Gp]:n.NOTEQUAL};function Re(A,S){if(S.type===Ht&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yt||S.magFilter===ls||S.magFilter===ar||S.magFilter===Wn||S.minFilter===yt||S.minFilter===ls||S.minFilter===ar||S.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,K[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,K[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,K[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,re[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kt||S.minFilter!==ar&&S.minFilter!==Wn||S.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function W(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I));const Z=S.source;let ee=p.get(Z);ee===void 0&&(ee={},p.set(Z,ee));const Y=D(S);if(Y!==A.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[Y].usedTimes++;const le=ee[A.__cacheKey];le!==void 0&&(ee[A.__cacheKey].usedTimes--,le.usedTimes===0&&y(S)),A.__cacheKey=Y,A.__webglTexture=ee[Y].texture}return G}function k(A,S,G){return Math.floor(Math.floor(A/G)/S)}function V(A,S,G,Z){const Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,Z,S.data);else{Y.sort((ie,be)=>ie.start-be.start);let le=0;for(let ie=1;ie<Y.length;ie++){const be=Y[le],Oe=Y[ie],Le=be.start+be.count,me=k(Oe.start,S.width,4),ke=k(be.start,S.width,4);Oe.start<=Le+1&&me===ke&&k(Oe.start+Oe.count-1,S.width,4)===me?be.count=Math.max(be.count,Oe.start+Oe.count-be.start):(++le,Y[le]=Oe)}Y.length=le+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ie=0,be=Y.length;ie<be;ie++){const Oe=Y[ie],Le=Math.floor(Oe.start/4),me=Math.ceil(Oe.count/4),ke=Le%S.width,L=Math.floor(Le/S.width),fe=me,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ke,L,fe,se,G,Z,S.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function ne(A,S,G){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const ee=W(A,S),Y=S.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+G);const le=i.get(Y);if(Y.version!==le.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const oe=Je.getPrimaries(Je.workingColorSpace),Ee=S.colorSpace===bn?null:Je.getPrimaries(S.colorSpace),Ie=S.colorSpace===bn||oe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ie=_(S.image,!1,r.maxTextureSize);ie=ze(S,ie);const be=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type);let Le=w(S.internalFormat,be,Oe,S.colorSpace,S.isVideoTexture);Re(Z,S);let me;const ke=S.mipmaps,L=S.isVideoTexture!==!0,fe=le.__version===void 0||ee===!0,se=Y.dataReady,ge=O(S,ie);if(S.isDepthTexture)Le=M(S.format===$i,S.type),fe&&(L?t.texStorage2D(n.TEXTURE_2D,1,Le,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Le,ie.width,ie.height,0,be,Oe,null));else if(S.isDataTexture)if(ke.length>0){L&&fe&&t.texStorage2D(n.TEXTURE_2D,ge,Le,ke[0].width,ke[0].height);for(let te=0,J=ke.length;te<J;te++)me=ke[te],L?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,be,Oe,me.data):t.texImage2D(n.TEXTURE_2D,te,Le,me.width,me.height,0,be,Oe,me.data);S.generateMipmaps=!1}else L?(fe&&t.texStorage2D(n.TEXTURE_2D,ge,Le,ie.width,ie.height),se&&V(S,ie,be,Oe)):t.texImage2D(n.TEXTURE_2D,0,Le,ie.width,ie.height,0,be,Oe,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Le,ke[0].width,ke[0].height,ie.depth);for(let te=0,J=ke.length;te<J;te++)if(me=ke[te],S.format!==Ct)if(be!==null)if(L){if(se)if(S.layerUpdates.size>0){const ye=nc(me.width,me.height,S.format,S.type);for(const Ue of S.layerUpdates){const nt=me.data.subarray(Ue*ye/me.data.BYTES_PER_ELEMENT,(Ue+1)*ye/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ue,me.width,me.height,1,be,nt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,ie.depth,be,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Le,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,ie.depth,be,Oe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Le,me.width,me.height,ie.depth,0,be,Oe,me.data)}else{L&&fe&&t.texStorage2D(n.TEXTURE_2D,ge,Le,ke[0].width,ke[0].height);for(let te=0,J=ke.length;te<J;te++)me=ke[te],S.format!==Ct?be!==null?L?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,be,me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Le,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,be,Oe,me.data):t.texImage2D(n.TEXTURE_2D,te,Le,me.width,me.height,0,be,Oe,me.data)}else if(S.isDataArrayTexture)if(L){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Le,ie.width,ie.height,ie.depth),se)if(S.layerUpdates.size>0){const te=nc(ie.width,ie.height,S.format,S.type);for(const J of S.layerUpdates){const ye=ie.data.subarray(J*te/ie.data.BYTES_PER_ELEMENT,(J+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,be,Oe,ye)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,be,Oe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,be,Oe,ie.data);else if(S.isData3DTexture)L?(fe&&t.texStorage3D(n.TEXTURE_3D,ge,Le,ie.width,ie.height,ie.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,be,Oe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,be,Oe,ie.data);else if(S.isFramebufferTexture){if(fe)if(L)t.texStorage2D(n.TEXTURE_2D,ge,Le,ie.width,ie.height);else{let te=ie.width,J=ie.height;for(let ye=0;ye<ge;ye++)t.texImage2D(n.TEXTURE_2D,ye,Le,te,J,0,be,Oe,null),te>>=1,J>>=1}}else if(ke.length>0){if(L&&fe){const te=tt(ke[0]);t.texStorage2D(n.TEXTURE_2D,ge,Le,te.width,te.height)}for(let te=0,J=ke.length;te<J;te++)me=ke[te],L?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,be,Oe,me):t.texImage2D(n.TEXTURE_2D,te,Le,be,Oe,me);S.generateMipmaps=!1}else if(L){if(fe){const te=tt(ie);t.texStorage2D(n.TEXTURE_2D,ge,Le,te.width,te.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Oe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Le,be,Oe,ie);m(S)&&f(Z),le.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,G){if(S.image.length!==6)return;const Z=W(A,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const Y=i.get(ee);if(ee.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+G);const le=Je.getPrimaries(Je.workingColorSpace),oe=S.colorSpace===bn?null:Je.getPrimaries(S.colorSpace),Ee=S.colorSpace===bn||le===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,be=[];for(let J=0;J<6;J++)!Ie&&!ie?be[J]=_(S.image[J],!0,r.maxCubemapSize):be[J]=ie?S.image[J].image:S.image[J],be[J]=ze(S,be[J]);const Oe=be[0],Le=s.convert(S.format,S.colorSpace),me=s.convert(S.type),ke=w(S.internalFormat,Le,me,S.colorSpace),L=S.isVideoTexture!==!0,fe=Y.__version===void 0||Z===!0,se=ee.dataReady;let ge=O(S,Oe);Re(n.TEXTURE_CUBE_MAP,S);let te;if(Ie){L&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ke,Oe.width,Oe.height);for(let J=0;J<6;J++){te=be[J].mipmaps;for(let ye=0;ye<te.length;ye++){const Ue=te[ye];S.format!==Ct?Le!==null?L?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Ue.width,Ue.height,Le,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Ue.width,Ue.height,Le,me,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,ke,Ue.width,Ue.height,0,Le,me,Ue.data)}}}else{if(te=S.mipmaps,L&&fe){te.length>0&&ge++;const J=tt(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ke,J.width,J.height)}for(let J=0;J<6;J++)if(ie){L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be[J].width,be[J].height,Le,me,be[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,be[J].width,be[J].height,0,Le,me,be[J].data);for(let ye=0;ye<te.length;ye++){const nt=te[ye].image[J].image;L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,nt.width,nt.height,Le,me,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,ke,nt.width,nt.height,0,Le,me,nt.data)}}else{L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,me,be[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,Le,me,be[J]);for(let ye=0;ye<te.length;ye++){const Ue=te[ye];L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Le,me,Ue.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,ke,Le,me,Ue.image[J])}}}m(S)&&f(n.TEXTURE_CUBE_MAP),Y.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,G,Z,ee,Y){const le=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),Ee=w(G.internalFormat,le,oe,G.colorSpace),Ie=i.get(S),ie=i.get(G);if(ie.__renderTarget=S,!Ie.__hasExternalTextures){const be=Math.max(1,S.width>>Y),Oe=Math.max(1,S.height>>Y);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,Ee,be,Oe,S.depth,0,le,oe,null):t.texImage2D(ee,Y,Ee,be,Oe,0,le,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),We(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,ie.__webglTexture,0,Se(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,ie.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(A,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const Z=S.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,Y=M(S.stencilBuffer,ee),le=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Se(S);We(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Y,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Y,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Y,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,A)}else{const Z=S.textures;for(let ee=0;ee<Z.length;ee++){const Y=Z[ee],le=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),Ee=w(Y.internalFormat,le,oe,Y.colorSpace),Ie=Se(S);G&&We(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Ee,S.width,S.height):We(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Ee,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const ee=Z.__webglTexture,Y=Se(S);if(S.depthTexture.format===qi)We(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(S.depthTexture.format===$i)We(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ce(A){const S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?Ce(S.__webglFramebuffer[0],A):Ce(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),De(S.__webglDepthbuffer[Z],A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),De(S.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(A,S,G){const Z=i.get(A);S!==void 0&&de(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ce(A)}function pe(A){const S=A.texture,G=i.get(A),Z=i.get(S);A.addEventListener("dispose",R);const ee=A.textures,Y=A.isWebGLCubeRenderTarget===!0,le=ee.length>1;if(le||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),Y){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)G.__webglFramebuffer[oe][Ee]=n.createFramebuffer()}else G.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)G.__webglFramebuffer[oe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(le)for(let oe=0,Ee=ee.length;oe<Ee;oe++){const Ie=i.get(ee[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&We(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const Ee=ee[oe];G.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const Ie=s.convert(Ee.format,Ee.colorSpace),ie=s.convert(Ee.type),be=w(Ee.internalFormat,Ie,ie,Ee.colorSpace,A.isXRRenderTarget===!0),Oe=Se(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,be,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),De(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(n.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)de(G.__webglFramebuffer[oe][Ee],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else de(G.__webglFramebuffer[oe],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let oe=0,Ee=ee.length;oe<Ee;oe++){const Ie=ee[oe],ie=i.get(Ie);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Re(n.TEXTURE_2D,Ie),de(G.__webglFramebuffer,A,Ie,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ie)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),Re(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)de(G.__webglFramebuffer[Ee],A,S,n.COLOR_ATTACHMENT0,oe,Ee);else de(G.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,oe,0);m(S)&&f(oe),t.unbindTexture()}A.depthBuffer&&ce(A)}function C(A){const S=A.textures;for(let G=0,Z=S.length;G<Z;G++){const ee=S[G];if(m(ee)){const Y=T(A),le=i.get(ee).__webglTexture;t.bindTexture(Y,le),f(Y),t.unbindTexture()}}}const Ve=[],Te=[];function Be(A){if(A.samples>0){if(We(A)===!1){const S=A.textures,G=A.width,Z=A.height;let ee=n.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(A),oe=S.length>1;if(oe)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const Ee=A.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ie]);const ie=i.get(S[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,G,Z,0,0,G,Z,ee,n.NEAREST),c===!0&&(Ve.length=0,Te.length=0,Ve.push(n.COLOR_ATTACHMENT0+Ie),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ve.push(Y),Te.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ie]);const ie=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Se(A){return Math.min(r.maxSamples,A.samples)}function We(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ze(A,S){const G=A.colorSpace,Z=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==bi&&G!==bn&&(Je.getTransfer(G)===rt?(Z!==Ct||ee!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=_e,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=de,this.useMultisampledRTT=We}function nx(n,e){function t(i,r=bn){let s;const o=Je.getTransfer(r);if(i===fn)return n.UNSIGNED_BYTE;if(i===Wo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ll)return n.BYTE;if(i===ul)return n.SHORT;if(i===Wi)return n.UNSIGNED_SHORT;if(i===Go)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===Ht)return n.FLOAT;if(i===Yi)return n.HALF_FLOAT;if(i===hl)return n.ALPHA;if(i===fl)return n.RGB;if(i===Ct)return n.RGBA;if(i===qi)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===pl)return n.RED;if(i===qo)return n.RED_INTEGER;if(i===ml)return n.RG;if(i===$o)return n.RG_INTEGER;if(i===jo)return n.RGBA_INTEGER;if(i===Dr||i===Lr||i===Ur||i===Nr)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===so||i===oo||i===ao||i===co)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===so)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lo||i===uo||i===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lo||i===uo)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ho)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fo||i===po||i===mo||i===go||i===vo||i===_o||i===xo||i===So||i===yo||i===Mo||i===Eo||i===bo||i===To||i===wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===po)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===go)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===So)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===To)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Or||i===Ao||i===Ro)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Or)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gl||i===Co||i===Po||i===Io)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Or)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Io)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`;class sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new It,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rt({vertexShader:ix,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends wi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,u=null,g=null;const _=new sx,m=t.getContextAttributes();let f=null,T=null;const w=[],M=[],O=new et;let I=null;const R=new $t;R.viewport=new dt;const U=new $t;U.viewport=new dt;const y=[R,U],v=new Am;let x=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=w[k];return V===void 0&&(V=new Ds,w[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=w[k];return V===void 0&&(V=new Ds,w[k]=V),V.getGripSpace()},this.getHand=function(k){let V=w[k];return V===void 0&&(V=new Ds,w[k]=V),V.getHandSpace()};function P(k){const V=M.indexOf(k.inputSource);if(V===-1)return;const ne=w[V];ne!==void 0&&(ne.update(k.inputSource,k.frame,l||o),ne.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",F);for(let k=0;k<w.length;k++){const V=M[k];V!==null&&(M[k]=null,w[k].disconnect(V))}x=null,b=null,_.reset(),e.setRenderTarget(f),u=null,p=null,d=null,r=null,T=null,W.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",D),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Q=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?$i:qi,Q=m.stencil?Xi:jn);const De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(De),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new en(p.textureWidth,p.textureHeight,{format:Ct,type:fn,depthTexture:new Pl(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new en(u.framebufferWidth,u.framebufferHeight,{format:Ct,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(k){for(let V=0;V<k.removed.length;V++){const ne=k.removed[V],Q=M.indexOf(ne);Q>=0&&(M[Q]=null,w[Q].disconnect(ne))}for(let V=0;V<k.added.length;V++){const ne=k.added[V];let Q=M.indexOf(ne);if(Q===-1){for(let De=0;De<w.length;De++)if(De>=M.length){M.push(ne),Q=De;break}else if(M[De]===null){M[De]=ne,Q=De;break}if(Q===-1)break}const de=w[Q];de&&de.connect(ne)}}const N=new $,j=new $;function H(k,V,ne){N.setFromMatrixPosition(V.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const Q=N.distanceTo(j),de=V.projectionMatrix.elements,De=ne.projectionMatrix.elements,Ce=de[14]/(de[10]-1),ce=de[14]/(de[10]+1),_e=(de[9]+1)/de[5],pe=(de[9]-1)/de[5],C=(de[8]-1)/de[0],Ve=(De[8]+1)/De[0],Te=Ce*C,Be=Ce*Ve,Se=Q/(-C+Ve),We=Se*-C;if(V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(We),k.translateZ(Se),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),de[10]===-1)k.projectionMatrix.copy(V.projectionMatrix),k.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Pe=Ce+Se,ze=ce+Se,tt=Te-We,A=Be+(Q-We),S=_e*ce/ze*Pe,G=pe*ce/ze*Pe;k.projectionMatrix.makePerspective(tt,A,S,G,Pe,ze),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function K(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let V=k.near,ne=k.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),v.near=U.near=R.near=V,v.far=U.far=R.far=ne,(x!==v.near||b!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,b=v.far),R.layers.mask=k.layers.mask|2,U.layers.mask=k.layers.mask|4,v.layers.mask=R.layers.mask|U.layers.mask;const Q=k.parent,de=v.cameras;K(v,Q);for(let De=0;De<de.length;De++)K(de[De],Q);de.length===2?H(v,R,U):v.projectionMatrix.copy(R.projectionMatrix),re(k,v,Q)};function re(k,V,ne){ne===null?k.matrix.copy(V.matrixWorld):(k.matrix.copy(ne.matrixWorld),k.matrix.invert(),k.matrix.multiply(V.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(V.projectionMatrix),k.projectionMatrixInverse.copy(V.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Do*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&u===null))return c},this.setFoveation=function(k){c=k,p!==null&&(p.fixedFoveation=k),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ve=null;function Re(k,V){if(h=V.getViewerPose(l||o),g=V,h!==null){const ne=h.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let Q=!1;ne.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let Ce=0;Ce<ne.length;Ce++){const ce=ne[Ce];let _e=null;if(u!==null)_e=u.getViewport(ce);else{const C=d.getViewSubImage(p,ce);_e=C.viewport,Ce===0&&(e.setRenderTargetTextures(T,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(T))}let pe=y[Ce];pe===void 0&&(pe=new $t,pe.layers.enable(Ce),pe.viewport=new dt,y[Ce]=pe),pe.matrix.fromArray(ce.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ce.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(_e.x,_e.y,_e.width,_e.height),Ce===0&&(v.matrix.copy(pe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Q===!0&&v.cameras.push(pe)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ce=d.getDepthInformation(ne[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let ne=0;ne<w.length;ne++){const Q=M[ne],de=w[ne];Q!==null&&de!==void 0&&de.update(Q,V,l||o)}ve&&ve(k,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const W=new Il;W.setAnimationLoop(Re),this.setAnimationLoop=function(k){ve=k},this.dispose=function(){}}}const Fn=new pn,ax=new ft;function cx(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Tl(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,w,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&u(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),w=T.envMap,M=T.envMapRotation;w&&(m.envMap.value=w,Fn.copy(M),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Fn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lx(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const M=w.program;i.uniformBlockBinding(T,M)}function l(T,w){let M=r[T.id];M===void 0&&(g(T),M=h(T),r[T.id]=M,T.addEventListener("dispose",m));const O=w.program;i.updateUBOMapping(T,O);const I=e.render.frame;s[T.id]!==I&&(p(T),s[T.id]=I)}function h(T){const w=d();T.__bindingPointIndex=w;const M=n.createBuffer(),O=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,O,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const w=r[T.id],M=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let I=0,R=M.length;I<R;I++){const U=Array.isArray(M[I])?M[I]:[M[I]];for(let y=0,v=U.length;y<v;y++){const x=U[y];if(u(x,I,y,O)===!0){const b=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let D=0;for(let F=0;F<P.length;F++){const N=P[F],j=_(N);typeof N=="number"||typeof N=="boolean"?(x.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,b+D,x.__data)):N.isMatrix3?(x.__data[0]=N.elements[0],x.__data[1]=N.elements[1],x.__data[2]=N.elements[2],x.__data[3]=0,x.__data[4]=N.elements[3],x.__data[5]=N.elements[4],x.__data[6]=N.elements[5],x.__data[7]=0,x.__data[8]=N.elements[6],x.__data[9]=N.elements[7],x.__data[10]=N.elements[8],x.__data[11]=0):(N.toArray(x.__data,D),D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(T,w,M,O){const I=T.value,R=w+"_"+M;if(O[R]===void 0)return typeof I=="number"||typeof I=="boolean"?O[R]=I:O[R]=I.clone(),!0;{const U=O[R];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return O[R]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(T){const w=T.uniforms;let M=0;const O=16;for(let R=0,U=w.length;R<U;R++){const y=Array.isArray(w[R])?w[R]:[w[R]];for(let v=0,x=y.length;v<x;v++){const b=y[v],P=Array.isArray(b.value)?b.value:[b.value];for(let D=0,F=P.length;D<F;D++){const N=P[D],j=_(N),H=M%O,K=H%j.boundary,re=H+K;M+=K,re!==0&&O-re<j.storage&&(M+=O-re),b.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,M+=j.storage}}}const I=M%O;return I>0&&(M+=O-I),T.__size=M,T.__cache={},this}function _(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class ux{constructor(e={}){const{canvas:t=$p(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let O=!1;this._outputColorSpace=zt;let I=0,R=0,U=null,y=-1,v=null;const x=new dt,b=new dt;let P=null;const D=new st(0);let F=0,N=t.width,j=t.height,H=1,K=null,re=null;const ve=new dt(0,0,N,j),Re=new dt(0,0,N,j);let W=!1;const k=new Cl;let V=!1,ne=!1;const Q=new ft,de=new ft,De=new $,Ce=new dt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function pe(){return U===null?H:1}let C=i;function Ve(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const B="webgl2";if(C=Ve(B,E),C===null)throw Ve(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Te,Be,Se,We,Pe,ze,tt,A,S,G,Z,ee,Y,le,oe,Ee,Ie,ie,be,Oe,Le,me,ke,L;function fe(){Te=new S_(C),Te.init(),me=new nx(C,Te),Be=new f_(C,Te,e,me),Se=new ex(C,Te),Be.reverseDepthBuffer&&p&&Se.buffers.depth.setReversed(!0),We=new E_(C),Pe=new H0,ze=new tx(C,Te,Se,Pe,Be,me,We),tt=new m_(M),A=new x_(M),S=new Cm(C),ke=new d_(C,S),G=new y_(C,S,We,ke),Z=new T_(C,G,S,We),be=new b_(C,Be,ze),Ee=new p_(Pe),ee=new z0(M,tt,A,Te,Be,ke,Ee),Y=new cx(M,Pe),le=new G0,oe=new Y0(Te),ie=new u_(M,tt,A,Se,Z,u,c),Ie=new J0(M,Z,Be),L=new lx(C,We,Be,Se),Oe=new h_(C,Te,We),Le=new M_(C,Te,We),We.programs=ee.programs,M.capabilities=Be,M.extensions=Te,M.properties=Pe,M.renderLists=le,M.shadowMap=Ie,M.state=Se,M.info=We}fe();const se=new ox(M,C);this.xr=se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(N,j,!1))},this.getSize=function(E){return E.set(N,j)},this.setSize=function(E,B,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,j=B,t.width=Math.floor(E*H),t.height=Math.floor(B*H),X===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(N*H,j*H).floor()},this.setDrawingBufferSize=function(E,B,X){N=E,j=B,H=X,t.width=Math.floor(E*X),t.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,B,X,q){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,B,X,q),Se.viewport(x.copy(ve).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,B,X,q){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,B,X,q),Se.scissor(b.copy(Re).multiplyScalar(H).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(E){Se.setScissorTest(W=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,X=!0){let q=0;if(E){let z=!1;if(U!==null){const ae=U.texture.format;z=ae===jo||ae===$o||ae===qo}if(z){const ae=U.texture.type,Me=ae===fn||ae===jn||ae===Wi||ae===Xi||ae===Wo||ae===Xo,Ae=ie.getClearColor(),we=ie.getClearAlpha(),He=Ae.r,Ge=Ae.g,Ne=Ae.b;Me?(g[0]=He,g[1]=Ge,g[2]=Ne,g[3]=we,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=He,_[1]=Ge,_[2]=Ne,_[3]=we,C.clearBufferiv(C.COLOR,0,_))}else q|=C.COLOR_BUFFER_BIT}B&&(q|=C.DEPTH_BUFFER_BIT),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ie.dispose(),le.dispose(),oe.dispose(),Pe.dispose(),tt.dispose(),A.dispose(),Z.dispose(),ke.dispose(),L.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",er),se.removeEventListener("sessionend",tr),nn.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=We.autoReset,B=Ie.enabled,X=Ie.autoUpdate,q=Ie.needsUpdate,z=Ie.type;fe(),We.autoReset=E,Ie.enabled=B,Ie.autoUpdate=X,Ie.needsUpdate=q,Ie.type=z}function J(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ye(E){const B=E.target;B.removeEventListener("dispose",ye),Ue(B)}function Ue(E){nt(E),Pe.remove(E)}function nt(E){const B=Pe.get(E).programs;B!==void 0&&(B.forEach(function(X){ee.releaseProgram(X)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,q,z,ae){B===null&&(B=ce);const Me=z.isMesh&&z.matrixWorld.determinant()<0,Ae=Ol(E,B,X,q,z);Se.setMaterial(q,Me);let we=X.index,He=1;if(q.wireframe===!0){if(we=G.getWireframeAttribute(X),we===void 0)return;He=2}const Ge=X.drawRange,Ne=X.attributes.position;let $e=Ge.start*He,it=(Ge.start+Ge.count)*He;ae!==null&&($e=Math.max($e,ae.start*He),it=Math.min(it,(ae.start+ae.count)*He)),we!==null?($e=Math.max($e,0),it=Math.min(it,we.count)):Ne!=null&&($e=Math.max($e,0),it=Math.min(it,Ne.count));const ut=it-$e;if(ut<0||ut===1/0)return;ke.setup(z,q,Ae,X,we);let at,ot=Oe;if(we!==null&&(at=S.get(we),ot=Le,ot.setIndex(at)),z.isMesh)q.wireframe===!0?(Se.setLineWidth(q.wireframeLinewidth*pe()),ot.setMode(C.LINES)):ot.setMode(C.TRIANGLES);else if(z.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),Se.setLineWidth(Fe*pe()),z.isLineSegments?ot.setMode(C.LINES):z.isLineLoop?ot.setMode(C.LINE_LOOP):ot.setMode(C.LINE_STRIP)}else z.isPoints?ot.setMode(C.POINTS):z.isSprite&&ot.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,lt=z._multiDrawCounts,Ze=z._multiDrawCount,Dt=we?S.get(we).bytesPerElement:1,Zn=Pe.get(q).currentProgram.getUniforms();for(let Lt=0;Lt<Ze;Lt++)Zn.setValue(C,"_gl_DrawID",Lt),ot.render(Fe[Lt]/Dt,lt[Lt])}else if(z.isInstancedMesh)ot.renderInstances($e,ut,z.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,lt=Math.min(X.instanceCount,Fe);ot.renderInstances($e,ut,lt)}else ot.render($e,ut)};function Ke(E,B,X){E.transparent===!0&&E.side===un&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,ir(E,B,X),E.side=Rn,E.needsUpdate=!0,ir(E,B,X),E.side=un):ir(E,B,X)}this.compile=function(E,B,X=null){X===null&&(X=E),f=oe.get(X),f.init(B),w.push(f),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const q=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ae=z.material;if(ae)if(Array.isArray(ae))for(let Me=0;Me<ae.length;Me++){const Ae=ae[Me];Ke(Ae,X,z),q.add(Ae)}else Ke(ae,X,z),q.add(ae)}),f=w.pop(),q},this.compileAsync=function(E,B,X=null){const q=this.compile(E,B,X);return new Promise(z=>{function ae(){if(q.forEach(function(Me){Pe.get(Me).currentProgram.isReady()&&q.delete(Me)}),q.size===0){z(E);return}setTimeout(ae,10)}Te.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Mt=null;function _t(E){Mt&&Mt(E)}function er(){nn.stop()}function tr(){nn.start()}const nn=new Il;nn.setAnimationLoop(_t),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(E){Mt=E,se.setAnimationLoop(E),E===null?nn.stop():nn.start()},se.addEventListener("sessionstart",er),se.addEventListener("sessionend",tr),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,B,U),f=oe.get(E,w.length),f.init(B),w.push(f),de.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),k.setFromProjectionMatrix(de),ne=this.localClippingEnabled,V=Ee.init(this.clippingPlanes,ne),m=le.get(E,T.length),m.init(),T.push(m),se.enabled===!0&&se.isPresenting===!0){const ae=M.xr.getDepthSensingMesh();ae!==null&&Ci(ae,B,-1/0,M.sortObjects)}Ci(E,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(K,re),_e=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,_e&&ie.addToRenderList(m,E),this.info.render.frame++,V===!0&&Ee.beginShadows();const X=f.state.shadowsArray;Ie.render(X,E,B),V===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(f.setupLights(),B.isArrayCamera){const ae=B.cameras;if(z.length>0)for(let Me=0,Ae=ae.length;Me<Ae;Me++){const we=ae[Me];ea(q,z,E,we)}_e&&ie.render(E);for(let Me=0,Ae=ae.length;Me<Ae;Me++){const we=ae[Me];Qo(m,E,we,we.viewport)}}else z.length>0&&ea(q,z,E,B),_e&&ie.render(E),Qo(m,E,B);U!==null&&R===0&&(ze.updateMultisampleRenderTarget(U),ze.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(M,E,B),ke.resetDefaultState(),y=-1,v=null,w.pop(),w.length>0?(f=w[w.length-1],V===!0&&Ee.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ci(E,B,X,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){q&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const Me=Z.update(E),Ae=E.material;Ae.visible&&m.push(E,Me,Ae,X,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const Me=Z.update(E),Ae=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ce.copy(Me.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(Ae)){const we=Me.groups;for(let He=0,Ge=we.length;He<Ge;He++){const Ne=we[He],$e=Ae[Ne.materialIndex];$e&&$e.visible&&m.push(E,Me,$e,X,Ce.z,Ne)}}else Ae.visible&&m.push(E,Me,Ae,X,Ce.z,null)}}const ae=E.children;for(let Me=0,Ae=ae.length;Me<Ae;Me++)Ci(ae[Me],B,X,q)}function Qo(E,B,X,q){const z=E.opaque,ae=E.transmissive,Me=E.transparent;f.setupLightsView(X),V===!0&&Ee.setGlobalState(M.clippingPlanes,X),q&&Se.viewport(x.copy(q)),z.length>0&&nr(z,B,X),ae.length>0&&nr(ae,B,X),Me.length>0&&nr(Me,B,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ea(E,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new en(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Yi:fn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=f.state.transmissionRenderTarget[q.id],Me=q.viewport||x;ae.setSize(Me.z*M.transmissionResolutionScale,Me.w*M.transmissionResolutionScale);const Ae=M.getRenderTarget(),we=M.getActiveCubeFace(),He=M.getActiveMipmapLevel();M.setRenderTarget(ae),M.getClearColor(D),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),_e&&ie.render(X);const Ge=M.toneMapping;M.toneMapping=wn;const Ne=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),V===!0&&Ee.setGlobalState(M.clippingPlanes,q),nr(E,X,q),ze.updateMultisampleRenderTarget(ae),ze.updateRenderTargetMipmap(ae),Te.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let it=0,ut=B.length;it<ut;it++){const at=B[it],ot=at.object,Fe=at.geometry,lt=at.material,Ze=at.group;if(lt.side===un&&ot.layers.test(q.layers)){const Dt=lt.side;lt.side=Pt,lt.needsUpdate=!0,ta(ot,X,q,Fe,lt,Ze),lt.side=Dt,lt.needsUpdate=!0,$e=!0}}$e===!0&&(ze.updateMultisampleRenderTarget(ae),ze.updateRenderTargetMipmap(ae))}M.setRenderTarget(Ae,we,He),M.setClearColor(D,F),Ne!==void 0&&(q.viewport=Ne),M.toneMapping=Ge}function nr(E,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ae=E.length;z<ae;z++){const Me=E[z],Ae=Me.object,we=Me.geometry,He=Me.group;let Ge=Me.material;Ge.allowOverride===!0&&q!==null&&(Ge=q),Ae.layers.test(X.layers)&&ta(Ae,B,X,we,Ge,He)}}function ta(E,B,X,q,z,ae){E.onBeforeRender(M,B,X,q,z,ae),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(M,B,X,q,E,ae),z.transparent===!0&&z.side===un&&z.forceSinglePass===!1?(z.side=Pt,z.needsUpdate=!0,M.renderBufferDirect(X,B,q,z,E,ae),z.side=Rn,z.needsUpdate=!0,M.renderBufferDirect(X,B,q,z,E,ae),z.side=un):M.renderBufferDirect(X,B,q,z,E,ae),E.onAfterRender(M,B,X,q,z,ae)}function ir(E,B,X){B.isScene!==!0&&(B=ce);const q=Pe.get(E),z=f.state.lights,ae=f.state.shadowsArray,Me=z.state.version,Ae=ee.getParameters(E,z.state,ae,B,X),we=ee.getProgramCacheKey(Ae);let He=q.programs;q.environment=E.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(E.isMeshStandardMaterial?A:tt).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",ye),He=new Map,q.programs=He);let Ge=He.get(we);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===Me)return ia(E,Ae),Ge}else Ae.uniforms=ee.getUniforms(E),E.onBeforeCompile(Ae,M),Ge=ee.acquireProgram(Ae,we),He.set(we,Ge),q.uniforms=Ae.uniforms;const Ne=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=Ee.uniform),ia(E,Ae),q.needsLights=Bl(E),q.lightsStateVersion=Me,q.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.directionalShadowMap.value=z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotShadowMap.value=z.state.spotShadowMap,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMap.value=z.state.pointShadowMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function na(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Fr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function ia(E,B){const X=Pe.get(E);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Ol(E,B,X,q,z){B.isScene!==!0&&(B=ce),ze.resetTextureUnits();const ae=B.fog,Me=q.isMeshStandardMaterial?B.environment:null,Ae=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:bi,we=(q.isMeshStandardMaterial?A:tt).get(q.envMap||Me),He=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,it=!!X.morphAttributes.color;let ut=wn;q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ut=M.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=at!==void 0?at.length:0,Fe=Pe.get(q),lt=f.state.lights;if(V===!0&&(ne===!0||E!==v)){const Et=E===v&&q.id===y;Ee.setState(q,E,Et)}let Ze=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==lt.state.version||Fe.outputColorSpace!==Ae||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==we||q.fog===!0&&Fe.fog!==ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ee.numPlanes||Fe.numIntersection!==Ee.numIntersection)||Fe.vertexAlphas!==He||Fe.vertexTangents!==Ge||Fe.morphTargets!==Ne||Fe.morphNormals!==$e||Fe.morphColors!==it||Fe.toneMapping!==ut||Fe.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Fe.__version=q.version);let Dt=Fe.currentProgram;Ze===!0&&(Dt=ir(q,B,z));let Zn=!1,Lt=!1,Pi=!1;const ct=Dt.getUniforms(),Ft=Fe.uniforms;if(Se.useProgram(Dt.program)&&(Zn=!0,Lt=!0,Pi=!0),q.id!==y&&(y=q.id,Lt=!0),Zn||v!==E){Se.buffers.depth.getReversed()?(Q.copy(E.projectionMatrix),Yp(Q),Kp(Q),ct.setValue(C,"projectionMatrix",Q)):ct.setValue(C,"projectionMatrix",E.projectionMatrix),ct.setValue(C,"viewMatrix",E.matrixWorldInverse);const Tt=ct.map.cameraPosition;Tt!==void 0&&Tt.setValue(C,De.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&ct.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ct.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Lt=!0,Pi=!0)}if(z.isSkinnedMesh){ct.setOptional(C,z,"bindMatrix"),ct.setOptional(C,z,"bindMatrixInverse");const Et=z.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ct.setValue(C,"boneTexture",Et.boneTexture,ze))}z.isBatchedMesh&&(ct.setOptional(C,z,"batchingTexture"),ct.setValue(C,"batchingTexture",z._matricesTexture,ze),ct.setOptional(C,z,"batchingIdTexture"),ct.setValue(C,"batchingIdTexture",z._indirectTexture,ze),ct.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(C,"batchingColorTexture",z._colorsTexture,ze));const Bt=X.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&be.update(z,X,Dt),(Lt||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,ct.setValue(C,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ft.envMap.value=we,Ft.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Ft.envMapIntensity.value=B.environmentIntensity),Lt&&(ct.setValue(C,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&Fl(Ft,Pi),ae&&q.fog===!0&&Y.refreshFogUniforms(Ft,ae),Y.refreshMaterialUniforms(Ft,q,H,j,f.state.transmissionRenderTarget[E.id]),Fr.upload(C,na(Fe),Ft,ze)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Fr.upload(C,na(Fe),Ft,ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ct.setValue(C,"center",z.center),ct.setValue(C,"modelViewMatrix",z.modelViewMatrix),ct.setValue(C,"normalMatrix",z.normalMatrix),ct.setValue(C,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Et=q.uniformsGroups;for(let Tt=0,$r=Et.length;Tt<$r;Tt++){const Pn=Et[Tt];L.update(Pn,Dt),L.bind(Pn,Dt)}}return Dt}function Fl(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Bl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,B,X){const q=Pe.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Pe.get(E.texture).__webglTexture=B,Pe.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const X=Pe.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const kl=C.createFramebuffer();this.setRenderTarget=function(E,B=0,X=0){U=E,I=B,R=X;let q=!0,z=null,ae=!1,Me=!1;if(E){const we=Pe.get(E);if(we.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(we.__webglFramebuffer===void 0)ze.setupRenderTarget(E);else if(we.__hasExternalTextures)ze.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(we.__boundDepthTexture!==Ne){if(Ne!==null&&Pe.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(E)}}const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Ge=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?z=Ge[B][X]:z=Ge[B],ae=!0):E.samples>0&&ze.useMultisampledRTT(E)===!1?z=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[X]:z=Ge,x.copy(E.viewport),b.copy(E.scissor),P=E.scissorTest}else x.copy(ve).multiplyScalar(H).floor(),b.copy(Re).multiplyScalar(H).floor(),P=W;if(X!==0&&(z=kl),Se.bindFramebuffer(C.FRAMEBUFFER,z)&&q&&Se.drawBuffers(E,z),Se.viewport(x),Se.scissor(b),Se.setScissorTest(P),ae){const we=Pe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,X)}else if(Me){const we=Pe.get(E.texture),He=B;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,we.__webglTexture,X,He)}else if(E!==null&&X!==0){const we=Pe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,we.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(E,B,X,q,z,ae,Me,Ae=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){Se.bindFramebuffer(C.FRAMEBUFFER,we);try{const He=E.textures[Ae],Ge=He.format,Ne=He.type;if(!Be.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&X>=0&&X<=E.height-z&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),C.readPixels(B,X,q,z,me.convert(Ge),me.convert(Ne),ae))}finally{const He=U!==null?Pe.get(U).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(E,B,X,q,z,ae,Me,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(B>=0&&B<=E.width-q&&X>=0&&X<=E.height-z){Se.bindFramebuffer(C.FRAMEBUFFER,we);const He=E.textures[Ae],Ge=He.format,Ne=He.type;if(!Be.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,ae.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),C.readPixels(B,X,q,z,me.convert(Ge),me.convert(Ne),0);const it=U!==null?Pe.get(U).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,it);const ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await jp(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ae),C.deleteBuffer($e),C.deleteSync(ut),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,X=0){const q=Math.pow(2,-X),z=Math.floor(E.image.width*q),ae=Math.floor(E.image.height*q),Me=B!==null?B.x:0,Ae=B!==null?B.y:0;ze.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Me,Ae,z,ae),Se.unbindTexture()};const zl=C.createFramebuffer(),Hl=C.createFramebuffer();this.copyTextureToTexture=function(E,B,X=null,q=null,z=0,ae=null){ae===null&&(z!==0?(xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=z,z=0):ae=0);let Me,Ae,we,He,Ge,Ne,$e,it,ut;const at=E.isCompressedTexture?E.mipmaps[ae]:E.image;if(X!==null)Me=X.max.x-X.min.x,Ae=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,He=X.min.x,Ge=X.min.y,Ne=X.isBox3?X.min.z:0;else{const Bt=Math.pow(2,-z);Me=Math.floor(at.width*Bt),Ae=Math.floor(at.height*Bt),E.isDataArrayTexture?we=at.depth:E.isData3DTexture?we=Math.floor(at.depth*Bt):we=1,He=0,Ge=0,Ne=0}q!==null?($e=q.x,it=q.y,ut=q.z):($e=0,it=0,ut=0);const ot=me.convert(B.format),Fe=me.convert(B.type);let lt;B.isData3DTexture?(ze.setTexture3D(B,0),lt=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ze.setTexture2DArray(B,0),lt=C.TEXTURE_2D_ARRAY):(ze.setTexture2D(B,0),lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);const Ze=C.getParameter(C.UNPACK_ROW_LENGTH),Dt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Zn=C.getParameter(C.UNPACK_SKIP_PIXELS),Lt=C.getParameter(C.UNPACK_SKIP_ROWS),Pi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,at.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,He),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ne);const ct=E.isDataArrayTexture||E.isData3DTexture,Ft=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Bt=Pe.get(E),Et=Pe.get(B),Tt=Pe.get(Bt.__renderTarget),$r=Pe.get(Et.__renderTarget);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Tt.__webglFramebuffer),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Pn=0;Pn<we;Pn++)ct&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.get(E).__webglTexture,z,Ne+Pn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.get(B).__webglTexture,ae,ut+Pn)),C.blitFramebuffer(He,Ge,Me,Ae,$e,it,Me,Ae,C.DEPTH_BUFFER_BIT,C.NEAREST);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Pe.has(E)){const Bt=Pe.get(E),Et=Pe.get(B);Se.bindFramebuffer(C.READ_FRAMEBUFFER,zl),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Hl);for(let Tt=0;Tt<we;Tt++)ct?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,z,Ne+Tt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,z),Ft?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,ae,ut+Tt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Et.__webglTexture,ae),z!==0?C.blitFramebuffer(He,Ge,Me,Ae,$e,it,Me,Ae,C.COLOR_BUFFER_BIT,C.NEAREST):Ft?C.copyTexSubImage3D(lt,ae,$e,it,ut+Tt,He,Ge,Me,Ae):C.copyTexSubImage2D(lt,ae,$e,it,He,Ge,Me,Ae);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ft?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(lt,ae,$e,it,ut,Me,Ae,we,ot,Fe,at.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(lt,ae,$e,it,ut,Me,Ae,we,ot,at.data):C.texSubImage3D(lt,ae,$e,it,ut,Me,Ae,we,ot,Fe,at):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ae,$e,it,Me,Ae,ot,Fe,at.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ae,$e,it,at.width,at.height,ot,at.data):C.texSubImage2D(C.TEXTURE_2D,ae,$e,it,Me,Ae,ot,Fe,at);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Dt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Zn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Lt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pi),ae===0&&B.generateMipmaps&&C.generateMipmap(lt),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,B,X=null,q=null,z=0){return xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,X,q,z)},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ze.setTextureCube(E,0):E.isData3DTexture?ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ze.setTexture2DArray(E,0):ze.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){I=0,R=0,U=null,Se.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function dx(n,e){if(e===0)return{edges:[]};const t=new Set,i=new Set;for(let u=0;u<e;u++){const g=u*4,_=n[g],m=n[g+1],f=n[g+2],T=n[g+3];t.add(_),t.add(_+f),i.add(m),i.add(m+T)}const r=Array.from(t).sort((u,g)=>u-g),s=Array.from(i).sort((u,g)=>u-g);if(r.length===0||s.length===0)return{edges:[]};const o=r[0],a=r[r.length-1],c=s[0],l=s[s.length-1],h=new Set,d=[],p=(u,g)=>{const _=u.x<g.x||u.x===g.x&&u.y<=g.y?`${u.x},${u.y}|${g.x},${g.y}`:`${g.x},${g.y}|${u.x},${u.y}`;h.has(_)||(h.add(_),d.push({start:[u.x,u.y],end:[g.x,g.y]}))};return r.forEach(u=>{p({x:u,y:c},{x:u,y:l})}),s.forEach(u=>{p({x:o,y:u},{x:a,y:u})}),{edges:d}}function hx(n,e){if(e===0)return{edges:[]};let t=1,i=0;const r=[];for(let g=0;g<e;g++){const _=g*4,m=n[_],f=n[_+1],T=n[_+2],w=n[_+3];r.push({x:m,y:f,width:T,height:w}),t=Math.min(t,m),i=Math.max(i,m+T)}r.sort((g,_)=>g.y-_.y);const s=new Set,o=(g,_)=>s.add(`${g},${_}`);r.forEach(g=>{const _=g.y+g.height;o(t,_),o(i,_)});const a=r[0].y;o(t,a),o(i,a);const c=Array.from(s).map(g=>{const[_,m]=g.split(",").map(Number);return{x:_,y:m}}).sort((g,_)=>g.y!==_.y?g.y-_.y:g.x-_.x),l=[],h=(g,_)=>{l.push({start:[g.x,g.y],end:[_.x,_.y]})},d=c.filter(g=>Math.abs(g.x-t)<1e-6);for(let g=0;g<d.length-1;g++)h(d[g],d[g+1]);const p=c.filter(g=>Math.abs(g.x-i)<1e-6);for(let g=0;g<p.length-1;g++)h(p[g],p[g+1]);return[...new Set(c.map(g=>g.y))].sort((g,_)=>g-_).forEach(g=>{const _=d.find(f=>Math.abs(f.y-g)<1e-6),m=p.find(f=>Math.abs(f.y-g)<1e-6);_&&m&&h(_,m)}),{edges:l}}const pi=`
  // Fullscreen quad vertex shader.
  // - Passes through the built-in attribute 'uv' into 'vUv'.
  // - Produces clip-space position from the built-in attribute 'position'.
  varying vec2 vUv;

  void main() {
    vUv = uv;                     // UV in [0,1]^2
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,fx=`
  precision highp float;
  varying vec2 vUv;
  
  // Inputs describing the rail network as a set of line segments
  uniform int   uEdgeCount;                             // number of valid entries in uEdges
  uniform vec4  uEdges[${An*4+20}];          // (x1, y1, x2, y2) per segment
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

    for (int i = 0; i < ${An*4+20}; ++i) {
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
`,px=`
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
`,mx=`
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
`,gx=`
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
`;class vx{constructor(e){this.renderer=e,this.guideTexture=new en(cs,cs,{format:Ct,type:Ht,minFilter:yt,magFilter:yt}),this.simulationTextures=[0,1].map(()=>new en(fi,fi,{format:Ct,type:Ht,minFilter:yt,magFilter:yt})),this.tempTexture=new en(fi,fi,{format:Ct,type:Ht,minFilter:yt,magFilter:yt}),this.guideMaterial=new Rt({vertexShader:pi,fragmentShader:fx,uniforms:{uEdgeCount:{value:0},uEdges:{value:new Float32Array((An*4+20)*4)},uLineWidth:{value:.008}}}),this.simulationMaterial=new Rt({vertexShader:pi,fragmentShader:px,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uPrevState:{value:null},uDeltaTime:{value:.016},uSpeed:{value:1},uAttenuation:{value:1},uEnergyConservation:{value:1},uRailEpsilon:{value:0},uTTLDecayRate:{value:.5}}}),this.injectionMaterial=new Rt({vertexShader:pi,fragmentShader:mx,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uCurrentState:{value:null},uInjectionPoint:{value:new et(.5,.5)},uInjectionRadius:{value:.1},uInjectionEnergy:{value:2},uHue:{value:0},uInjectionEpsilon:{value:0}}}),this.quad=new Yt(new Ai(2,2),this.guideMaterial),this.scene=new Rl,this.scene.add(this.quad),this.camera=new Zo(-1,1,1,-1,0,1),this.clearBuffers()}renderer;guideTexture;simulationTextures;tempTexture;guideMaterial;simulationMaterial;injectionMaterial;quad;scene;camera;current=0;isInitialized=!1;clearBuffers(){const e=new Rt({vertexShader:pi,fragmentShader:"void main(){gl_FragColor=vec4(0.0);}"});this.quad.material=e,[...this.simulationTextures,this.tempTexture].forEach(t=>{this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}),this.renderer.setRenderTarget(null),e.dispose()}updateGuideTexture(e){const t=Math.min(e.length,An*4+20),i=this.guideMaterial.uniforms.uEdges.value;e.slice(0,t).forEach((r,s)=>i.set([...r.start,...r.end],s*4)),this.guideMaterial.uniforms.uEdgeCount.value=t,this.quad.material=this.guideMaterial,this.renderer.setRenderTarget(this.guideTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.isInitialized=!0}simulationStep(e){if(!this.isInitialized)return;const t=this.current,i=1-t;this.simulationMaterial.uniforms.uPrevState.value=this.simulationTextures[t].texture,this.simulationMaterial.uniforms.uDeltaTime.value=e,this.quad.material=this.simulationMaterial,this.renderer.setRenderTarget(this.simulationTextures[i]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.current=i}injectPulse(e,t,i,r=2){if(!this.isInitialized)return;this.injectionMaterial.uniforms.uCurrentState.value=this.simulationTextures[this.current].texture,this.injectionMaterial.uniforms.uInjectionPoint.value.set(e,t),this.injectionMaterial.uniforms.uInjectionEnergy.value=r,this.injectionMaterial.uniforms.uHue.value=i,this.quad.material=this.injectionMaterial,this.renderer.setRenderTarget(this.tempTexture),this.renderer.render(this.scene,this.camera);const s=new Rt({vertexShader:pi,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){gl_FragColor=texture2D(t,vUv);} ",uniforms:{t:{value:this.tempTexture.texture}}});this.quad.material=s,this.renderer.setRenderTarget(this.simulationTextures[this.current]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),s.dispose()}getCurrentTexture(){return this.simulationTextures[this.current].texture}getPreviousSimulationTexture(){return this.simulationTextures[1-this.current].texture}getTempTexture(){return this.tempTexture.texture}getGuideTexture(){return this.guideTexture.texture}getTextureInfo(){return{guideResolution:cs,simResolution:fi,currentBuffer:this.current,isInitialized:this.isInitialized,edgeCount:this.guideMaterial.uniforms.uEdgeCount.value}}dispose(){this.guideTexture.dispose(),this.tempTexture.dispose(),this.simulationTextures.forEach(e=>e.dispose()),this.guideMaterial.dispose(),this.simulationMaterial.dispose(),this.injectionMaterial.dispose()}}const At=n=>{const e=Yn.c(52),{label:t,value:i,min:r,max:s,step:o,onChange:a}=n;let c;e[0]!==i?(c=i.toString(),e[0]=i,e[1]=c):c=e[1];const[l,h]=he.useState(c),[d,p]=he.useState(!1),u=he.useRef(null);let g,_;e[2]!==d||e[3]!==i?(g=()=>{d||h(i.toString())},_=[i,d],e[2]=d,e[3]=i,e[4]=g,e[5]=_):(g=e[4],_=e[5]),he.useEffect(g,_);let m;e[6]!==l||e[7]!==a||e[8]!==i?(m=()=>{const W=parseFloat(l);isNaN(W)?h(i.toString()):a(W)},e[6]=l,e[7]=a,e[8]=i,e[9]=m):m=e[9];const f=m;let T;e[10]!==i?(T=()=>{p(!0),h(i.toString())},e[10]=i,e[11]=T):T=e[11];const w=T;let M;e[12]!==f?(M=()=>{p(!1),f()},e[12]=f,e[13]=M):M=e[13];const O=M;let I;e[14]!==f||e[15]!==i?(I=W=>{W.key==="Enter"?(f(),u.current?.blur()):W.key==="Escape"&&(h(i.toString()),p(!1),u.current?.blur())},e[14]=f,e[15]=i,e[16]=I):I=e[16];const R=I;let U,y;e[17]===Symbol.for("react.memo_cache_sentinel")?(U={marginBottom:8},y={display:"flex",justifyContent:"space-between",fontSize:10,color:"#ccc",marginBottom:2},e[17]=U,e[18]=y):(U=e[17],y=e[18]);let v;e[19]!==t?(v=ue.jsx("span",{children:t}),e[19]=t,e[20]=v):v=e[20];let x;e[21]!==o||e[22]!==i?(x=i.toFixed(o<.01?3:2),e[21]=o,e[22]=i,e[23]=x):x=e[23];let b;e[24]!==x?(b=ue.jsx("span",{children:x}),e[24]=x,e[25]=b):b=e[25];let P;e[26]!==v||e[27]!==b?(P=ue.jsxs("div",{style:y,children:[v,b]}),e[26]=v,e[27]=b,e[28]=P):P=e[28];let D;e[29]!==a?(D=W=>a(parseFloat(W.target.value)),e[29]=a,e[30]=D):D=e[30];let F;e[31]===Symbol.for("react.memo_cache_sentinel")?(F={width:"100%",marginBottom:4},e[31]=F):F=e[31];let N;e[32]!==s||e[33]!==r||e[34]!==o||e[35]!==D||e[36]!==i?(N=ue.jsx("input",{type:"range",min:r,max:s,step:o,value:i,onChange:D,style:F}),e[32]=s,e[33]=r,e[34]=o,e[35]=D,e[36]=i,e[37]=N):N=e[37];let j;e[38]===Symbol.for("react.memo_cache_sentinel")?(j=W=>h(W.target.value),e[38]=j):j=e[38];const H=d?"#333":"#222",K=`1px solid ${d?"#666":"#444"}`;let re;e[39]!==H||e[40]!==K?(re={width:"100%",background:H,color:"#fff",border:K,borderRadius:3,padding:"4px 6px",fontSize:11,boxSizing:"border-box"},e[39]=H,e[40]=K,e[41]=re):re=e[41];let ve;e[42]!==O||e[43]!==w||e[44]!==R||e[45]!==l||e[46]!==re?(ve=ue.jsx("input",{ref:u,type:"text",value:l,onFocus:w,onChange:j,onBlur:O,onKeyDown:R,placeholder:"Enter value...",style:re}),e[42]=O,e[43]=w,e[44]=R,e[45]=l,e[46]=re,e[47]=ve):ve=e[47];let Re;return e[48]!==P||e[49]!==N||e[50]!==ve?(Re=ue.jsxs("div",{style:U,children:[P,N,ve]}),e[48]=P,e[49]=N,e[50]=ve,e[51]=Re):Re=e[51],Re},_x=({scopeId:n="scope",gpuSimRef:e,vizUniformsRef:t,nodeCount:i,position:r="top-right",isPaused:s=!1,setPaused:o,onNudgeRender:a,onClose:c})=>{const[l,h]=he.useState(()=>{switch(r){case"top-left":return{x:20,y:20};case"top-right":return{x:window.innerWidth-240,y:20};case"bottom-left":return{x:20,y:window.innerHeight-400};case"bottom-right":return{x:window.innerWidth-240,y:window.innerHeight-400};default:return{x:20,y:20}}}),d=he.useRef(!1),p=he.useRef({x:0,y:0}),u=y=>{d.current=!0,p.current={x:y.clientX-l.x,y:y.clientY-l.y}},g=he.useCallback(y=>{d.current&&h({x:y.clientX-p.current.x,y:y.clientY-p.current.y})},[]),_=he.useCallback(()=>{d.current=!1},[]);he.useEffect(()=>{if(d.current)return document.addEventListener("mousemove",g),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",_)}},[g,_,d.current]);const[m,f]=he.useState(!1),[T,w]=he.useState({speed:Zt.speed,attenuation:Zt.attenuation,lineWidth:.008,injectionRadius:Zt.injectionRadius,ttlLifetime:2,coreWidthPx:2,bladeWidthPx:10,energyScale:1,gamma:1,debugView:0,overlayVectors:!1,vectorSpacingPx:16,vectorLengthPx:8,vectorThicknessPx:1.25,showCenterline:!1,centerlineWidthPx:1.25,intensityCutoff:.01}),M=(y,v)=>{w(P=>({...P,[y]:v}));const x=e.current,b=t.current;if(!(!x||!b)){switch(y){case"speed":x.simulationMaterial.uniforms.uSpeed.value=v;break;case"attenuation":x.simulationMaterial.uniforms.uAttenuation.value=v;break;case"lineWidth":x.guideMaterial.uniforms.uLineWidth.value=v;break;case"injectionRadius":x.injectionMaterial.uniforms.uInjectionRadius.value=v;break;case"ttlLifetime":{const D=1/Math.max(.1,v);x.simulationMaterial.uniforms.uTTLDecayRate&&(x.simulationMaterial.uniforms.uTTLDecayRate.value=D);break}case"coreWidthPx":b.uCoreWidthPx&&(b.uCoreWidthPx.value=v);break;case"bladeWidthPx":b.uBladeWidthPx&&(b.uBladeWidthPx.value=v);break;case"energyScale":b.uEnergyScale&&(b.uEnergyScale.value=v);break;case"gamma":b.uGamma&&(b.uGamma.value=v);break;case"intensityCutoff":b.uIntensityCutoff&&(b.uIntensityCutoff.value=v);break;case"debugView":b.uDebugView&&(b.uDebugView.value=v);break;case"overlayVectors":b.uOverlayVectors&&(b.uOverlayVectors.value=!!v);break;case"vectorSpacingPx":b.uVectorSpacingPx&&(b.uVectorSpacingPx.value=v);break;case"vectorLengthPx":b.uVectorLengthPx&&(b.uVectorLengthPx.value=v);break;case"vectorThicknessPx":b.uVectorThicknessPx&&(b.uVectorThicknessPx.value=v);break;case"showCenterline":b.uShowCenterline&&(b.uShowCenterline.value=!!v);break;case"centerlineWidthPx":b.uCenterlineWidthPx&&(b.uCenterlineWidthPx.value=v);break}a?.()}};he.useEffect(()=>{const y=e.current,v=t.current;!y||!v||w(x=>({...x,speed:y.simulationMaterial.uniforms.uSpeed?.value??x.speed,attenuation:y.simulationMaterial.uniforms.uAttenuation?.value??x.attenuation,lineWidth:y.guideMaterial.uniforms.uLineWidth?.value??x.lineWidth,injectionRadius:y.injectionMaterial.uniforms.uInjectionRadius?.value??x.injectionRadius,ttlLifetime:(y.simulationMaterial.uniforms.uTTLDecayRate?.value??0)>0?1/(y.simulationMaterial.uniforms.uTTLDecayRate?.value??1):x.ttlLifetime,coreWidthPx:v.uCoreWidthPx?.value??x.coreWidthPx,bladeWidthPx:v.uBladeWidthPx?.value??x.bladeWidthPx,energyScale:v.uEnergyScale?.value??x.energyScale,gamma:v.uGamma?.value??x.gamma,debugView:v.uDebugView?.value??x.debugView,overlayVectors:!!(v.uOverlayVectors?.value??x.overlayVectors),vectorSpacingPx:v.uVectorSpacingPx?.value??x.vectorSpacingPx,vectorLengthPx:v.uVectorLengthPx?.value??x.vectorLengthPx,vectorThicknessPx:v.uVectorThicknessPx?.value??x.vectorThicknessPx,showCenterline:!!(v.uShowCenterline?.value??x.showCenterline),centerlineWidthPx:v.uCenterlineWidthPx?.value??x.centerlineWidthPx,intensityCutoff:v.uIntensityCutoff?.value??x.intensityCutoff}))},[]);const[O,I]=he.useState({fps:0,frame:0});he.useEffect(()=>{let y=0,v=0,x=performance.now();const b=()=>{const P=performance.now();if(y+=P-x,v+=1,v>=60){const D=y/v;I({fps:Math.round(1e3/D),frame:parseFloat(D.toFixed(2))}),y=0,v=0}x=P,requestAnimationFrame(b)};b()},[]);const R=y=>{switch(y){case"default":M("speed",Zt.speed),M("attenuation",Zt.attenuation),M("lineWidth",.008),M("injectionRadius",Zt.injectionRadius),M("ttlLifetime",2),M("coreWidthPx",2),M("bladeWidthPx",10),M("energyScale",1),M("gamma",1),M("debugView",0),M("overlayVectors",!1),M("showCenterline",!1);break;case"fast":M("speed",1.5),M("attenuation",.5),M("ttlLifetime",1);break;case"slow":M("speed",.3),M("attenuation",2.5),M("ttlLifetime",4);break;case"intense":M("coreWidthPx",Math.max(1,T.coreWidthPx*1.5)),M("bladeWidthPx",Math.max(T.coreWidthPx+2,T.bladeWidthPx*1.5)),M("energyScale",Math.max(1,T.energyScale*1.3));break;case"subtle":M("attenuation",2),M("coreWidthPx",Math.max(1,T.coreWidthPx*.7)),M("bladeWidthPx",Math.max(T.coreWidthPx+2,T.bladeWidthPx*.8)),M("ttlLifetime",3);break}},U=(y,v)=>ue.jsx("button",{style:{padding:"2px 6px",fontSize:9,background:"#444",color:"#fff",border:"1px solid #666",borderRadius:3,marginRight:3,marginBottom:3},onClick:()=>R(v),onMouseEnter:x=>x.currentTarget.style.background="#555",onMouseLeave:x=>x.currentTarget.style.background="#444",children:y},v);return ue.jsxs("div",{style:{position:"fixed",left:l.x,top:l.y,width:220,background:"rgba(20,20,20,0.95)",border:"1px solid #444",borderRadius:6,color:"#fff",fontFamily:"monospace",fontSize:11,zIndex:1e4,pointerEvents:"auto",maxHeight:"calc(100vh - 40px)",overflowY:"auto"},children:[ue.jsxs("div",{onMouseDown:u,style:{padding:"6px 10px",background:"#333",cursor:"move",borderRadius:"6px 6px 0 0",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #444",userSelect:"none"},children:[ue.jsxs("span",{style:{fontWeight:"bold",fontSize:10},children:[n," debug"]}),ue.jsxs("div",{style:{display:"flex",gap:4},children:[ue.jsx("button",{onClick:()=>o?.(!s),title:s?"Resume simulation":"Pause simulation",style:{background:"none",border:"1px solid #666",color:"#fff",fontSize:10,borderRadius:3,padding:"0 6px",cursor:"pointer"},children:s?"▶":"⏸"}),c&&ue.jsx("button",{onClick:c,style:{background:"none",border:"none",color:"#f44",fontSize:12,cursor:"pointer"},children:"×"}),ue.jsx("button",{onClick:()=>f(y=>!y),style:{background:"none",border:"none",color:"#fff",fontSize:12},children:m?"▼":"▲"})]})]}),!m&&ue.jsxs("div",{style:{padding:10},children:[ue.jsx("div",{style:{marginBottom:12},children:ue.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,fontSize:9},children:[ue.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[ue.jsx("div",{children:"FPS"}),ue.jsx("div",{style:{color:O.fps<30?"#f44":"#4f4"},children:O.fps})]}),ue.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[ue.jsx("div",{children:"Nodes"}),ue.jsx("div",{children:i})]}),ue.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[ue.jsx("div",{children:"Res"}),ue.jsx("div",{children:fi})]})]})}),ue.jsxs("div",{style:{marginBottom:12},children:[ue.jsx("div",{style:{color:"#aaa",fontSize:10,marginBottom:4},children:"Presets"}),U("Def","default"),U("Fast","fast"),U("Slow","slow"),U("Int","intense"),U("Sub","subtle")]}),ue.jsxs("div",{style:{marginBottom:12},children:[ue.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Simulation"}),ue.jsx(At,{label:"Speed",value:T.speed,min:.1,max:2,step:.1,onChange:y=>M("speed",y)}),ue.jsx(At,{label:"Attenuation",value:T.attenuation,min:.1,max:5,step:.1,onChange:y=>M("attenuation",y)}),ue.jsx(At,{label:"Rail width",value:T.lineWidth,min:.002,max:.05,step:.001,onChange:y=>M("lineWidth",y)}),ue.jsx(At,{label:"Fade lifetime (s)",value:T.ttlLifetime,min:.2,max:10,step:.1,onChange:y=>M("ttlLifetime",y)})]}),ue.jsxs("div",{style:{marginBottom:12},children:[ue.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Injection"}),ue.jsx(At,{label:"Radius",value:T.injectionRadius,min:.01,max:.3,step:.01,onChange:y=>M("injectionRadius",y)})]}),ue.jsxs("div",{style:{marginBottom:12},children:[ue.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Visualization"}),ue.jsx(At,{label:"Core width (px)",value:T.coreWidthPx,min:1,max:40,step:1,onChange:y=>M("coreWidthPx",y)}),ue.jsx(At,{label:"Blade width (px)",value:T.bladeWidthPx,min:T.coreWidthPx+2,max:200,step:1,onChange:y=>M("bladeWidthPx",Math.max(y,T.coreWidthPx+2))}),ue.jsx(At,{label:"Energy scale",value:T.energyScale,min:.1,max:5,step:.1,onChange:y=>M("energyScale",y)}),ue.jsx(At,{label:"Gamma",value:T.gamma,min:.5,max:2.5,step:.1,onChange:y=>M("gamma",y)}),ue.jsx(At,{label:"Min intensity cutoff",value:T.intensityCutoff,min:0,max:.05,step:.001,onChange:y=>M("intensityCutoff",y)})]}),ue.jsxs("div",{style:{marginBottom:12},children:[ue.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Debug view & overlays"}),ue.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8},children:[["Norm",0],["SDF",1],["Tan",2],["Edge",3],["Fwd",4],["Back",5],["Total",6],["Hue",7]].map(([y,v])=>ue.jsx("button",{onClick:()=>M("debugView",v),style:{padding:"2px 6px",fontSize:9,background:T.debugView===v?"#777":"#444",color:"#fff",border:"1px solid #666",borderRadius:3},children:y},y))}),ue.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:6,marginBottom:6},children:[ue.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Vector overlay"}),ue.jsx("input",{type:"checkbox",checked:T.overlayVectors,onChange:y=>M("overlayVectors",y.target.checked)}),ue.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Centerline"}),ue.jsx("input",{type:"checkbox",checked:T.showCenterline,onChange:y=>M("showCenterline",y.target.checked)})]}),ue.jsx(At,{label:"Vector spacing (px)",value:T.vectorSpacingPx,min:4,max:64,step:1,onChange:y=>M("vectorSpacingPx",y)}),ue.jsx(At,{label:"Vector length (px)",value:T.vectorLengthPx,min:2,max:32,step:1,onChange:y=>M("vectorLengthPx",y)}),ue.jsx(At,{label:"Vector thickness (px)",value:T.vectorThicknessPx,min:.5,max:6,step:.25,onChange:y=>M("vectorThicknessPx",y)}),ue.jsx(At,{label:"Centerline width (px)",value:T.centerlineWidthPx,min:.5,max:8,step:.5,onChange:y=>M("centerlineWidthPx",y)})]})]})]})},xx=n=>n.hue!==void 0?n.hue:n.rgb?Ic(n.rgb):0,Sx=({children:n,topology:e="ladder",speed:t=Zt.speed,attenuation:i=Zt.attenuation,enableGlobalClicks:r=!1,showDebug:s=!1,scopeId:o="scope",debugPosition:a="top-right",cornerRadius:c=0,pixelRatio:l,powerPreference:h="default",maxFPS:d=120})=>{const p=he.useRef(new Map),[,u]=he.useState(0),g=he.useRef(!1),_=he.useCallback(()=>{g.current||(g.current=!0,Promise.resolve().then(()=>{g.current=!1,u(V=>V+1)}))},[]),f=Wc().toLowerCase().indexOf("light")!==-1,T=he.useCallback(V=>{p.current.set(V.id,V);const ne=V.ref.current;ne&&k.current&&k.current.observe(ne),W.current=!0,_()},[_]),w=he.useCallback(V=>{const Q=p.current.get(V)?.ref.current;Q&&k.current&&k.current.unobserve(Q),p.current.delete(V),W.current=!0,_()},[_]),M=he.useRef(performance.now()),O=he.useRef(null),I=he.useRef(null),R=he.useRef(performance.now()),U=he.useRef(d),y=he.useRef(()=>{}),v=he.useCallback(()=>{I.current===null&&(F.current=performance.now(),O.current&&(I.current=requestAnimationFrame(O.current)))},[]),x=he.useCallback((V,ne,Q={})=>{const de=j.current;if(!de)return;let De=xx(Q);f&&(De=(De+.5)%1);const Ce=Q.energy??2.5,ce=Q.radius??Zt.injectionRadius;de.injectionMaterial.uniforms.uInjectionRadius.value=ce,de.injectPulse(V,ne,De,Ce),M.current=performance.now(),v()},[f,v]);he.useEffect(()=>{y.current=x},[x]),he.useEffect(()=>{U.current=d},[d]);const b=he.useCallback(V=>{const Q=p.current.get(V)?.ref.current;if(!Q)return null;const de=Q.getBoundingClientRect();return{u:(de.left+de.width/2)/window.innerWidth,v:1-(de.top+de.height/2)/window.innerHeight}},[]),P=he.useMemo(()=>({register:T,unregister:w,pulseAt:x,getNodeCenter:b}),[T,w,x,b]),D=he.useRef(null),F=he.useRef(performance.now()),N=he.useRef(new Float32Array(An*4)),j=he.useRef(null),H=he.useRef(null),[K,re]=he.useState(s),ve=he.useRef(null),Re=he.useRef(e),W=he.useRef(!0);he.useEffect(()=>{if(!D.current)return;M.current=performance.now();const V=new ux({alpha:!0,antialias:!0,powerPreference:h}),ne=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;V.setPixelRatio(ne),V.setSize(window.innerWidth,window.innerHeight),D.current.appendChild(V.domElement),ve.current=V;const Q=new Rl,de=new Zo(-1,1,1,-1,0,1),De=new vx(V);j.current=De;const Ce=De.simulationMaterial.uniforms;Ce.uSpeed.value=t,Ce.uAttenuation.value=i,Ce.uEnergyConservation.value=Zt.energyConservation;const ce={uRes:{value:new et(window.innerWidth,window.innerHeight)},uGuideTexture:{value:De.getGuideTexture()},uSimulationTexture:{value:De.getCurrentTexture()},uTime:{value:0},uRailHalfWidthUV:{value:De.guideMaterial.uniforms.uLineWidth.value},uCoreWidthPx:{value:2},uBladeWidthPx:{value:10},uCornerRadiusPx:{value:c},uDebugView:{value:0},uOverlayVectors:{value:!1},uVectorSpacingPx:{value:16},uVectorLengthPx:{value:8},uVectorThicknessPx:{value:1.25},uEnergyScale:{value:1},uGamma:{value:1},uShowCenterline:{value:!1},uCenterlineWidthPx:{value:1.25},uIntensityCutoff:{value:.01},uGlowIntensity:{value:1.35},uCoreGain:{value:1},uHaloStrength:{value:.6},uWhiteHotStrength:{value:.25},uExposure:{value:1}};H.current=ce;const _e=new Yt(new Ai(2,2),new Rt({vertexShader:pi,fragmentShader:gx,uniforms:ce,transparent:!0,depthWrite:!1,blending:Xs}));Q.add(_e),W.current=!0;const pe=1e4,C=()=>{const Be=performance.now();if(Be-M.current>pe){I.current=null;return}const Se=U.current;if(Se&&Se>0){const A=1e3/Se;if(Be-R.current<A){I.current=requestAnimationFrame(C);return}}const We=Math.min((Be-F.current)/1e3,.033);F.current=Be;const Pe=window.innerWidth,ze=window.innerHeight,tt=Array.from(p.current.values()).slice(0,An);tt.forEach((A,S)=>{const G=A.ref.current;if(!G)return;const Z=G.getBoundingClientRect(),ee=S*4,Y=[Z.left/Pe,(ze-(Z.top+Z.height))/ze,Z.width/Pe,Z.height/ze];for(let le=0;le<4;le++)Math.abs(N.current[ee+le]-Y[le])>.001&&(N.current[ee+le]=Y[le],W.current=!0)});for(let A=tt.length*4;A<N.current.length;A++)N.current[A]!==0&&(N.current[A]=0,W.current=!0);if(W.current){const A=Re.current==="grid"?dx(N.current,tt.length).edges:hx(N.current,tt.length).edges;De.updateGuideTexture(A),W.current=!1}De.simulationStep(We),ce.uSimulationTexture.value=De.getCurrentTexture(),ce.uTime.value=Be/1e3,ce.uRailHalfWidthUV.value=De.guideMaterial.uniforms.uLineWidth.value,V.setRenderTarget(null),V.render(Q,de),R.current=Be,I.current=requestAnimationFrame(C)};O.current=C,I.current=requestAnimationFrame(C);const Ve=()=>{ce.uRes.value.set(window.innerWidth,window.innerHeight),V.setSize(window.innerWidth,window.innerHeight),W.current=!0};window.addEventListener("resize",Ve);const Te=D.current;return()=>{window.removeEventListener("resize",Ve),I.current!==null&&cancelAnimationFrame(I.current),I.current=null,De.dispose(),V.dispose(),Te&&V.domElement.parentElement===Te&&Te.removeChild(V.domElement)}},[i,c,l,h,t]),he.useEffect(()=>{Re.current=e,W.current=!0,v()},[e,v]),he.useEffect(()=>{const V=j.current;if(!V)return;const ne=V.simulationMaterial.uniforms;ne.uSpeed.value=t,ne.uAttenuation.value=i},[t,i]),he.useEffect(()=>{if(!r)return;const V=ne=>{const Q=ne.clientX/window.innerWidth,de=1-ne.clientY/window.innerHeight;y.current&&y.current(Q,de,{hue:.33})};return window.addEventListener("click",V),()=>window.removeEventListener("click",V)},[r]),he.useEffect(()=>{const V=ve.current;if(!V)return;const ne=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;V.setPixelRatio(ne)},[l]);const k=he.useRef(null);return he.useEffect(()=>(k.current=new ResizeObserver(()=>{W.current=!0,_()}),p.current.forEach(V=>{const ne=V.ref.current;ne&&k.current&&k.current.observe(ne)}),()=>k.current?.disconnect()),[_]),he.useEffect(()=>re(s),[s]),he.useEffect(()=>{H.current&&(H.current.uCornerRadiusPx.value=c)},[c]),ue.jsxs(Pc.Provider,{value:P,children:[n,ue.jsx("div",{ref:D,style:{position:"fixed",inset:0,pointerEvents:"none",mixBlendMode:"difference"}}),K&&ue.jsx(_x,{scopeId:o,gpuSimRef:j,vizUniformsRef:H,nodeCount:p.current.size,position:a,onClose:()=>re(!1)})]})},yx=n=>{const e=Yn.c(8),t=ua("networkScopeEffects"),i=ua("legacyGpuNetworkScope"),r=Cd(),s=vd();let o,a;if(e[0]!==t||e[1]!==r||e[2]!==s?(o=()=>{r&&t&&s.updateSettings({path:"features.networkScopeEffects",value:!1})},a=[t,r,s],e[0]=t,e[1]=r,e[2]=s,e[3]=o,e[4]=a):(o=e[3],a=e[4]),he.useEffect(o,a),!t||r)return n.children;let c;return e[5]!==n||e[6]!==i?(c=i?ue.jsx(Sx,{...n}):ue.jsx(Jf,{...n}),e[5]=n,e[6]=i,e[7]=c):c=e[7],c},Mx=he.lazy(()=>Rc(()=>import("./Assistant-BtvRMRTj.js").then(n=>n.A),__vite__mapDeps([17,1,2,0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32])));function Ex(n){const e=Yn.c(33),{error:t}=n,i=yd(),r=i["text.primary"];let s;e[0]!==i.background||e[1]!==r?(s={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",p:"2rem",boxSizing:"border-box",textAlign:"center",color:r,backgroundColor:i.background},e[0]=i.background,e[1]=r,e[2]=s):s=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o={maxWidth:760},e[3]=o):o=e[3];const a=i["status.error"];let c;e[4]!==a?(c=ue.jsx(rr,{component:"h2",variant:"h5",sx:{mb:2,color:a},children:"Assistant stopped to protect your data"}),e[4]=a,e[5]=c):c=e[5];const l=i["status.error"];let h;e[6]!==l?(h={mb:2,lineHeight:1.5,color:l,overflowWrap:"anywhere"},e[6]=l,e[7]=h):h=e[7];let d;e[8]!==t.message||e[9]!==h?(d=ue.jsx(rr,{sx:h,children:t.message}),e[8]=t.message,e[9]=h,e[10]=d):d=e[10];const p=i["text.secondary"];let u;e[11]!==p?(u=ue.jsx(rr,{sx:{mb:3,lineHeight:1.5,color:p,fontSize:"0.95rem"},children:`Do not clear this browser's site data and do not delete or "reset" Assistant storage — your data may still be recoverable from this browser profile. Try reloading first; if this screen keeps appearing, contact support with a screenshot of this message.`}),e[11]=p,e[12]=u):u=e[12];let g;e[13]===Symbol.for("react.memo_cache_sentinel")?(g=ue.jsx(ha,{variant:"contained",onClick:Tx,children:"Reload Assistant"}),e[13]=g):g=e[13];const _=i.divider,m=i["text.primary"];let f;e[14]!==i.button?(f=Vl(i.button,.08),e[14]=i.button,e[15]=f):f=e[15];let T;e[16]!==f?(T={backgroundColor:f},e[16]=f,e[17]=T):T=e[17];let w;e[18]!==i.divider||e[19]!==m||e[20]!==T?(w=ue.jsxs(Md,{direction:"row",justifyContent:"center",flexWrap:"wrap",gap:1.5,children:[g,ue.jsx(ha,{variant:"outlined",onClick:bx,title:"Preserves conversations and resets only tabs, panels, and layout state",sx:{borderColor:_,color:m,"&:hover":T},children:"Reset layout & tabs"})]}),e[18]=i.divider,e[19]=m,e[20]=T,e[21]=w):w=e[21];const M=i["text.secondary"];let O;e[22]!==M?(O=ue.jsx(rr,{sx:{mt:2,lineHeight:1.5,color:M,fontSize:"0.85rem"},children:"The reset preserves conversations and stored Assistant data."}),e[22]=M,e[23]=O):O=e[23];let I;e[24]!==u||e[25]!==w||e[26]!==O||e[27]!==c||e[28]!==d?(I=ue.jsxs(fa,{sx:o,children:[c,d,u,w,O]}),e[24]=u,e[25]=w,e[26]=O,e[27]=c,e[28]=d,e[29]=I):I=e[29];let R;return e[30]!==I||e[31]!==s?(R=ue.jsx(fa,{sx:s,children:I}),e[30]=I,e[31]=s,e[32]=R):R=e[32],R}function bx(){return window.location.assign(Gl())}function Tx(){return window.location.reload()}const Ac=n=>{const e=Yn.c(26),{onReady:t}=n;let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=da(),e[0]=i):i=e[0];const[r,s]=he.useState(i);let o;e[1]===Symbol.for("react.memo_cache_sentinel")?(o=_d(),e[1]=o):o=e[1];const[a,c]=he.useState(o);let l,h;e[2]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let R=!1;return da()?(s(!0),()=>{R=!0}):(xd().then(()=>{R||s(!0)}).catch(U=>{R||c(U instanceof Error?U:new Error(String(U)))}),()=>{R=!0})},h=[],e[2]=l,e[3]=h):(l=e[2],h=e[3]),he.useEffect(l,h);let d,p;e[4]!==r?(d=()=>{if(!r)return;const R=Qd(),U=$d();return()=>{U?.(),R?.()}},p=[r],e[4]=r,e[5]=d,e[6]=p):(d=e[5],p=e[6]),he.useEffect(d,p);let u,g;e[7]!==a||e[8]!==r?(u=()=>{if(!(!r||a))return Sd.startAutoConnect()},g=[r,a],e[7]=a,e[8]=r,e[9]=u,e[10]=g):(u=e[9],g=e[10]),he.useEffect(u,g);let _;e[11]===Symbol.for("react.memo_cache_sentinel")?(_={width:"100%",height:"100%",overflow:"hidden"},e[11]=_):_=e[11];let m;e[12]===Symbol.for("react.memo_cache_sentinel")?(m=ue.jsx(Kl,{}),e[12]=m):m=e[12];let f;e[13]!==a||e[14]!==r?(f=r&&!a?ue.jsx(Yf,{}):null,e[13]=a,e[14]=r,e[15]=f):f=e[15];let T,w,M;e[16]===Symbol.for("react.memo_cache_sentinel")?(T=ue.jsx(Zl,{}),w=ue.jsx(Jl,{}),M=ue.jsx(Ql,{}),e[16]=T,e[17]=w,e[18]=M):(T=e[16],w=e[17],M=e[18]);let O;e[19]!==a||e[20]!==t||e[21]!==r?(O=a instanceof bd?ue.jsx(eu,{error:a}):a?ue.jsx(Ex,{error:a}):r?ue.jsx(Mx,{onReady:t}):null,e[19]=a,e[20]=t,e[21]=r,e[22]=O):O=e[22];let I;return e[23]!==f||e[24]!==O?(I=ue.jsx("div",{style:_,children:ue.jsx(su,{runtime:Dc,store:Vt,children:ue.jsx(tu,{children:ue.jsx(nu,{children:ue.jsxs(yx,{topology:"grid",cornerRadius:18,children:[m,f,T,w,M,O]})})})})}),e[23]=f,e[24]=O,e[25]=I):I=e[25],I},Xx=Object.freeze(Object.defineProperty({__proto__:null,AssistantApp:Ac,default:Ac},Symbol.toStringTag,{value:"Module"}));export{Xx as A,Hx as S,nf as U,Gx as a,Ra as b,uf as c,cf as d,zx as e,lf as f,Vf as g,lh as h,Qc as i,Vx as o,kx as p,Wx as r,df as s,Bx as u};
