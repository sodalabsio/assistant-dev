const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/reduxStore-B3RkXJRx.js","assets/index-CsvWSm3M.js","assets/index-BmF_PyhY.css","assets/llm-7zPTIhic.js","assets/frontmatter-CMwECjmq.js","assets/csrf-BXbr5JkA.js","assets/durability-D2vPj5Fl.js","assets/boot-cgAJT9OP.js","assets/collectionsThunks-DpwxHoYe.js","assets/createSvgIcon-CIEAJ0u0.js","assets/slackSocketMode-Cb7-xM0G.js","assets/publicImagesSlice-DCOt4rDw.js","assets/api-B-GUYV1L.js","assets/userImagesSlice-D5TD_tQx.js","assets/ingestDocument-DyAP4RbV.js","assets/TextField-BVFSHUYX.js","assets/reduxStore-D-ZJ1log.css","assets/Assistant-Cwh4gDsO.js","assets/ReduxAppDataRoot-BcWj5CGJ.js","assets/AudioProvider-DXIWxr1Y.js","assets/PaletteThemeProvider-GWQevEwy.js","assets/ThemeProvider-BHkRP9ZC.js","assets/isObject-CGZ9pm3u.js","assets/toNumber-DbsqjrQD.js","assets/AudioProvider-kK9nev7K.css","assets/ApprovalRenderer-0dnDMqaV.js","assets/submitApproval-DA1Vc8iw.js","assets/mcpOAuthApproval-DAl9aYQI.js","assets/oauthCallbackContract-B1VNACVg.js","assets/McpOAuthApprovalCard-DqkH4wov.js","assets/cronStream-DGrpqnnH.js","assets/canonicalProjectPatchSet-CJnEKbnm.js","assets/openrouter-CHL_9wY4.js","assets/pkce-CpKKDV7R.js","assets/oauth-CKngOZSX.js","assets/discoverCatalogConnectors-DLO9QeRm.js","assets/App-BCaJpWPE.js","assets/Assistant-Gf3kyABh.css"])))=>i.map(i=>d[i]);
import{_ as mc,c as pn,r as fe,j as ue,w as Al,f as Rl}from"./index-CsvWSm3M.js";import{i as gc,d as Cl,e as Pl,r as Il,D as mn,N as vc,n as Dl,f as Yo,g as Nl,p as Ko,h as Ll,j as _c,k as Oi,B as Ul,S as Ol,a as Fl,c as Bl,P as kl,b as Vl,U as zl}from"./PaletteThemeProvider-GWQevEwy.js";import{d as Ht,a as xc,b as wo,r as Hl,c as Gl,R as Wl}from"./ReduxAppDataRoot-BcWj5CGJ.js";import{e3 as Xl,eH as ql,eI as jl,y as $l,eJ as Yl,eK as Kl,eL as Zo,eM as Zl,eN as Jl,eO as Ql,eP as eu,eQ as Sc,eR as tu,eS as nu,eT as iu,eU as ru,eV as yc,eW as Mc,eX as Ec,eY as bc,eZ as su,e_ as Tc,e$ as ou,f0 as wc,a$ as au,bq as cu,br as lu,f1 as Ao,f2 as uu,f3 as du,f4 as fu,f5 as hu,f6 as pu,f7 as $e,f8 as mu,dz as gu,bM as vu,D as Ac,bO as _u,f9 as Ro,fa as Rc,fb as Cc,fc as xu,fd as Co,fe as Su,ff as yu,fg as Mu,fh as Eu,fi as bu,fj as Tu,fk as wu,fl as Wr,fm as Au,fn as Ru,a6 as Cu,fo as Pu,fp as Iu,fq as Du,fr as Nu,fs as Lu,ft as Uu,fu as Ou,fv as Fu,fw as Bu,fx as ku,fy as Vu,fz as zu,fA as Hu,fB as Gu,fC as Jo,fD as Wu,fE as Lr,fF as Xu,fG as qu,bQ as ju,fH as $u,fI as Yu,fJ as Ku,dY as Pc,fK as Qo,fL as Zu,d0 as ea,d1 as Ju,d2 as Qu,fM as ed,ah as td,e7 as nd}from"./reduxStore-B3RkXJRx.js";import{l as id,S as rd}from"./boot-cgAJT9OP.js";import{j as sd,l as od,X as ad,h as qn,Y as cd,Q as ld,Z as ud}from"./collectionsThunks-DpwxHoYe.js";import{u as dd}from"./durability-D2vPj5Fl.js";import{d as fd,m as Ds,o as hd}from"./llm-7zPTIhic.js";import"./slackSocketMode-Cb7-xM0G.js";import"./frontmatter-CMwECjmq.js";import{g as Ic,a as pd}from"./csrf-BXbr5JkA.js";import{t as Dc}from"./App-BCaJpWPE.js";import{s as md,d as gd}from"./submitApproval-DA1Vc8iw.js";import{T as er,B as ta,a as na}from"./TextField-BVFSHUYX.js";const Nc=Ht,Tr="assistant.migrationStress.fixture.v1",Ai="assistant.migrationStress.run.v1",Po=128*1024,Io=32*1024,Do=256*1024,vd=256,_d=64,ia=200,Xr=25,ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_=+[]{}()<>/\\|;:,.!?~";function Qe(n,e){if(!n)throw new Error(e)}function Ri(n,e){const t=Number(n);return Number.isFinite(t)&&t>=0?t:e}function sa(n,e){const t=Number(n);return Number.isFinite(t)&&t>0?t:e}function xd(n){const e=Ri(n?.reduxMiB,0);return Qe(e>0,"Migration stress reduxMiB must be greater than zero."),Qe(e<=4096,"Migration stress reduxMiB must not exceed 4096 MiB."),{reduxMiB:e,depotRatio:Math.min(64,Ri(n?.depotRatio,.1)),testRunsRatio:Math.min(64,Ri(n?.testRunsRatio,.01)),depotMiB:n.depotMiB===void 0?null:Math.min(4096,Ri(n.depotMiB,0)),testRunsMiB:n.testRunsMiB===void 0?null:Math.min(4096,Ri(n.testRunsMiB,0)),depotRecordKiB:Math.min(256*1024,sa(n.depotRecordKiB,vd)),testRunCollectionKiB:Math.min(256*1024,sa(n.testRunCollectionKiB,_d))}}function Ci(n,e){return n<=0?0:Math.ceil(n/e)}function Jt(n,e,t){return Math.max(0,Math.min(e,n-t*e))}function Sd(n){const e=xd(n),t=Math.round(e.reduxMiB*1024*1024),i=Math.round(t*.7),r=Math.round(t*.26),s=Math.max(0,t-i-r),o=Math.round((e.depotMiB??e.reduxMiB*e.depotRatio)*1024*1024),a=Math.round((e.testRunsMiB??e.reduxMiB*e.testRunsRatio)*1024*1024),c=Math.round(e.depotRecordKiB*1024),l=Math.round(e.testRunCollectionKiB*1024);return{schemaVersion:1,requested:e,budgets:{reduxPayloadBytes:t,messagePayloadBytes:i,artifactPayloadBytes:r,fileSavePayloadBytes:s,depotPayloadBytes:o,testRunPayloadBytes:a},counts:{messages:Ci(i,Po),artifactVersions:Ci(r,Io),fileSaves:Ci(s,Do),depotObjects:Ci(o,c),testRunCollections:Ci(a,l)},seededAt:new Date().toISOString()}}function Wi(n,e){if(n<=0)return"";const t=`${e}|`;if(t.length>=n)return t.slice(0,n);const i=n-t.length;return t+ra.repeat(Math.ceil(i/ra.length)).slice(0,i)}function Bi(n){return`migration-stress-message-${n}`}function Lc(n){return`migration-stress-artifact-${n}`}function Uc(n){return`migration-stress-save-${n}`}function Fi(n){return`migration-stress-depot-${n}`}function Oc(n){return`migration-stress-agent-${n}`}function yd(n,e,t){const i=Bi(n),r="2026-07-24T00:00:00.000Z",s=Wi(t,i),o=n%3,a=o===0?{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"getFiles",arguments:"{}"}},result:{files:{[`/synthetic/${n}.txt`]:s},entryMetadata:{}},error:""}],model:"migration-stress",done:!0}:o===1?{text:s,toolUses:[],model:"migration-stress",done:!0}:{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"search",arguments:"{}"}},result:{results:[{title:`Synthetic ${n}`,content:s}]},error:""}],model:"migration-stress",done:!0};return{_timestamp:17848512e5+n,id:i,type:"response",conversationId:e,chain:[{iteration:0,response:a,stepAugments:[],errors:[],origin:"assistant",metadata:{startTime:r,endTime:r,stage:"closed"}}],origin:{provider:"test",model:"migration-stress"},state:{type:"success"},processing:{},markers:{analysis:"none",definitions:"none",facts:"none",summary:"none"},ui:{annotationMode:"none",definitionState:"none",factCheckState:"none"},permittedToolClasses:[],attachments:[],metadata:{category:"migration-stress",index:n,creationTime:r,updateTime:r},sidecars:o===2?{synthetic:{payloadBytes:t}}:{},augments:[]}}function Md(n,e){const t=n?.chain?.[0]?.response;return e%3===0?t?.toolUses?.[0]?.result?.files?.[`/synthetic/${e}.txt`]:e%3===1?t?.text:t?.toolUses?.[0]?.result?.results?.[0]?.content}function Ed(n,e){const t=Lc(n);return{id:t,name:`/artifacts/migration-stress/${n}.md`,language:"markdown",type:"file",content:Wi(e,t),originMsg:Bi(n%Math.max(1,n+1)),createdAt:17848512e5+n,_timestamp:17848512e5+n,source:"response",versionLabel:"v1",isComplete:!0,description:"Synthetic migration stress artifact"}}async function bd(n,e){const t=Uc(n),[i]=await cd([{text:Wi(e,t),purpose:"file-save",owners:[t]}]);return{id:t,label:`Synthetic save ${n}`,timestamp:17848512e5+n,status:"committed",files:[{path:`/synthetic/save-${n}.txt`,prevContentHash:`before-${n}`,previousExists:!1,newContentHash:`after-${n}`,newTextContent:i}],metadata:{kind:"artifact",actor:"assistant"}}}async function Td(){const{getAssistantDataStore:n,persistor:e}=await mc(async()=>{const{getAssistantDataStore:i,persistor:r}=await import("./reduxStore-B3RkXJRx.js").then(s=>s.BC);return{getAssistantDataStore:i,persistor:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));e.pause(),await e.flush();const t=await n();return{dataStore:t,snapshot:await t.loadSnapshot()}}async function qr(n,e,t,i,r){if(i===0)return;const s=Yl(e,t),o=[...s.ids];for(let a=0;a<i;a+=ia){const c=Math.min(i,a+ia);await n.transaction(async l=>{for(let u=a;u<c;u+=1){const d=await r(u);o.push(d.id),await l.putEntity(e,d.id,d)}await l.putEntityStructure(e,{ids:o,meta:s.meta})})}}async function wd(n,e,t){const i=$l(t),r=String(i.conversations?.ids?.[0]||"migration-stress-unattached");await qr(e,"messages",i.messages,n.counts.messages,o=>yd(o,r,Jt(n.budgets.messagePayloadBytes,Po,o))),await qr(e,"artifactVersions",i.artifactVersions,n.counts.artifactVersions,o=>Ed(o,Jt(n.budgets.artifactPayloadBytes,Io,o)));const s=i.fileSaves&&typeof i.fileSaves=="object"?i.fileSaves:{};await qr(e,"fileSaves",{ids:Array.isArray(s.ids)?s.ids:[],entities:s.entities||{},checkpoints:s.checkpoints||{},checkpointOrder:s.checkpointOrder||[]},n.counts.fileSaves,o=>bd(o,Jt(n.budgets.fileSavePayloadBytes,Do,o)))}function Ad(n,e){const t=new Uint8Array(n);return t.fill(e*31+17&255),t}async function Rd(n){await qn.clearAll();const e=Math.round(n.requested.depotRecordKiB*1024);for(let t=0;t<n.counts.depotObjects;t+=Xr){const i=Math.min(n.counts.depotObjects,t+Xr),r=[];for(let s=t;s<i;s+=1){const o=Jt(n.budgets.depotPayloadBytes,e,s);r.push({id:Fi(s),type:s%2===0?"migration-stress-text":"migration-stress-binary",obj:s%2===0?{kind:"text",payload:Wi(o,Fi(s))}:{kind:"binary",payload:Ad(o,s)},timestamp:17848512e5+s,owners:[`message:${Bi(s%Math.max(1,n.counts.messages))}`]})}await qn.storeMany(r,{chunkSize:Xr})}}async function Cd(n){const e=id.createInstance({name:"assistant-agent-evals",storeName:"suite-runs-v2"});await e.clear();const t=Math.round(n.requested.testRunCollectionKiB*1024);for(let i=0;i<n.counts.testRunCollections;i+=1){const r=Oc(i),s=Jt(n.budgets.testRunPayloadBytes,t,i);await e.setItem(`agent:${r}`,[{id:`migration-stress-run-${i}`,agentId:r,status:"completed",startedAt:17848512e5+i,completedAt:1784851201e3+i,syntheticPayload:Wi(s,r)}])}}function wr(n){const e=window.localStorage.getItem(n);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function tr(n,e){window.localStorage.setItem(n,JSON.stringify(e))}function jr(){const n=Nc.getState();return{engine:n.persistence.engine==="sqlite"?"sqlite":"legacy",persistencePhase:String(n.persistence.phase),messageCount:Object.values(n.conversationCatalog.entities).reduce((t,i)=>t+(i?.messageCount??0),0),artifactVersionCount:n.artifactVersions.ids.length}}async function Pd(){const n=wr(Tr);Qe(n?.schemaVersion===1,"Migration stress fixture metadata is missing.");const e=Nc.getState();let t=0;const i=ql().iterateConversations;Qe(i,"Complete scope iterator is required to verify cold migration fixtures.");const r=new Set;for await(const p of i())for(const g of p.messages){const _=/^migration-stress-message-(\d+)$/.exec(g.id);if(!_)continue;const m=Number(_[1]);if(m>=n.counts.messages)continue;Qe(!r.has(m),`Duplicate synthetic message ${m}.`);const f=Md(g,m),T=Jt(n.budgets.messagePayloadBytes,Po,m);Qe(typeof f=="string",`Synthetic message ${m} is missing its payload.`),Qe(f.length===T,`Synthetic message ${m} payload length differs.`),Qe(f.startsWith(`${Bi(m)}|`)||f===Bi(m).slice(0,T),`Synthetic message ${m} payload marker differs.`),t+=f.length,r.add(m)}Qe(r.size===n.counts.messages,"Synthetic message inventory is incomplete.");let s=0;for(let p=0;p<n.counts.artifactVersions;p+=1){const g=sd(e.artifactVersions,Lc(p)),_=Jt(n.budgets.artifactPayloadBytes,Io,p);Qe(g,`Synthetic artifact ${p} is missing.`);const m=await od(g);Qe(m.content.length===_,`Synthetic artifact ${p} payload length differs.`),s+=m.content.length}let o=0;for(let p=0;p<n.counts.fileSaves;p+=1){const _=e.fileSaves?.entities?.[Uc(p)]?.files?.[0]?.newTextContent,m=Jt(n.budgets.fileSavePayloadBytes,Do,p);Qe(_,`Synthetic file save ${p} is missing.`);const f=(await ad(_)).text;Qe(f.length===m,`Synthetic file save ${p} payload length differs.`),o+=f.length}let a=0;const c=Math.round(n.requested.depotRecordKiB*1024);for(let p=0;p<n.counts.depotObjects;p+=1){const g=await qn.retrieve(Fi(p)),_=Jt(n.budgets.depotPayloadBytes,c,p);if(Qe(g,`Synthetic depot object ${p} is missing.`),p%2===0)Qe(g.kind==="text"&&typeof g.payload=="string",`Synthetic depot text object ${p} is malformed.`),Qe(g.payload.length===_,`Synthetic depot text object ${p} payload length differs.`),Qe(g.payload.startsWith(`${Fi(p)}|`)||g.payload===Fi(p).slice(0,_),`Synthetic depot text object ${p} marker differs.`),a+=g.payload.length;else{Qe(g.kind==="binary"&&ArrayBuffer.isView(g.payload),`Synthetic depot binary object ${p} is malformed.`),Qe(g.payload.byteLength===_,`Synthetic depot binary object ${p} payload length differs.`);const m=new Uint8Array(g.payload.buffer,g.payload.byteOffset,g.payload.byteLength);if(m.length>0){const f=p*31+17&255;Qe(m[0]===f&&m[m.length-1]===f,`Synthetic depot binary object ${p} marker differs.`)}a+=g.payload.byteLength}}let l=0;const u=Math.round(n.requested.testRunCollectionKiB*1024);for(let p=0;p<n.counts.testRunCollections;p+=1){const _=(await jl(Oc(p)))[0]?.syntheticPayload,m=Jt(n.budgets.testRunPayloadBytes,u,p);Qe(typeof _=="string",`Synthetic test-run collection ${p} is missing.`),Qe(_.length===m,`Synthetic test-run collection ${p} payload length differs.`),l+=_.length}const d={messages:n.counts.messages,messagePayloadBytes:t,artifactVersions:n.counts.artifactVersions,artifactPayloadBytes:s,fileSaves:n.counts.fileSaves,fileSavePayloadBytes:o,depotObjects:n.counts.depotObjects,depotPayloadBytes:a,testRunCollections:n.counts.testRunCollections,testRunPayloadBytes:l},h=e.persistence.engine==="sqlite"?"sqlite":"legacy";return Qe(t===n.budgets.messagePayloadBytes,"Synthetic message payload total differs."),Qe(s===n.budgets.artifactPayloadBytes,"Synthetic artifact payload total differs."),Qe(o===n.budgets.fileSavePayloadBytes,"Synthetic file-save payload total differs."),Qe(a===n.budgets.depotPayloadBytes,"Synthetic depot payload total differs."),Qe(l===n.budgets.testRunPayloadBytes,"Synthetic test-run payload total differs."),{plan:n,engine:h,verified:d}}const oa={async seedFixture(n){Qe(jr().engine==="legacy","Migration stress fixtures can only be seeded in legacy mode.");const e=Sd(n);window.localStorage.removeItem(Ai);const{dataStore:t,snapshot:i}=await Td();return await Rd(e),await wd(e,t,i),await Cd(e),tr(Tr,e),e},getFixturePlan:()=>wr(Tr),getRunState:()=>wr(Ai),getStateSummary:jr,startMigration(){Qe(jr().engine==="legacy","Migration stress cutover must start in legacy mode.");const n=wr(Tr);Qe(n?.schemaVersion===1,"Seed the migration stress fixture before starting cutover.");const e={schemaVersion:1,status:"running",startedAt:new Date().toISOString(),phases:[]};return tr(Ai,e),Xl.startMigration(t=>{e.phases.push({phase:t.phase,at:new Date().toISOString(),...t.detail===void 0?{}:{detail:t.detail},...t.stats===void 0?{}:{stats:t.stats}}),t.phase==="reloading"&&(e.status="reload-requested"),tr(Ai,e)}).catch(t=>{e.status="failed",e.error=t instanceof Error?t.message:String(t),tr(Ai,e)}),e},verifyFixture:Pd};function Id(){if(gc()&&new URL(window.location.href).searchParams.get("migrationStress")==="1")return window.__assistantMigrationStress=oa,()=>{window.__assistantMigrationStress===oa&&delete window.__assistantMigrationStress}}function Dd(n,e,t){const i=e.getMessageAncestry(n,t,"resource");return{ancestryMessages:i.length,chainEntries:i.reduce((r,s)=>r+(s.type==="response"?s.chain.length:0),0),sidecarKeys:i.reduce((r,s)=>r+Object.keys(s.sidecars??{}).length,0),attachments:i.reduce((r,s)=>r+(s.type==="user"?s.attachments.length:0),0)}}function aa(n,e,t,i){if(!t)throw new Error(`Performance scenario tab is missing: ${i.tabId}`);if(t.conversationId!==i.conversationId)throw new Error(`Performance scenario tab ${i.tabId} points to the wrong conversation`);if(t.messageId!==i.routeMessageId)throw new Error(`Performance scenario tab ${i.tabId} points to the wrong route message`);n.getConversationById(i.conversationId),n.requireAncestryMessage(i.routeMessageId);const r=Dd(n,e,i.routeMessageId);for(const s of Object.keys(i.fingerprint))if(r[s]!==i.fingerprint[s])throw new Error(`Performance scenario fingerprint mismatch for ${i.tabId}.${s}: expected ${i.fingerprint[s]}, got ${r[s]}`);return r}const zn=()=>wo;let Ns=0,En=null,hi,ki,Ur;function Wn(){return Ht.getState()}function Nd(){const n=Wn();return n.ui.tabs.find(e=>e.id===n.ui.activeTabId)??null}function Ls(){hi&&zn().scopes.release(hi),hi=void 0,En=null,ki=void 0}function Ar(){if(!hi||!En)return;const n=hi.requireMessage(En);return n.type==="user"?n:void 0}function Ld(){Ur?.(),Ur=Ht.subscribe(()=>{const n=Ar()?.text;n!==ki&&(ki=n,Ns+=1)})}function ca(){const n=Wn(),e=Nd();return{activeTabId:n.ui.activeTabId,activeConversationId:e?.conversationId??null,activeRouteMessageId:e?.messageId??null,draftMessageId:n.ui.draftMessageId,messageCount:Object.values(n.conversationCatalog.entities).reduce((t,i)=>t+(i?.messageCount??0),0),conversationCount:n.conversationCatalog.ids.length,artifactVersionCount:n.artifactVersions.ids.length,persistence:{engine:n.persistence.engine,phase:n.persistence.phase,pendingWrites:n.persistence.pendingWrites},diagnostics:{memoryDiagnostics:!!n.settings.features.memoryDiagnostics,memoryTimelineDiagnostics:!!n.settings.features.memoryTimelineDiagnostics}}}async function Ud(n){const t=Wn().ui.tabs.find(i=>i.id===n);return t?zn().scopes.withMessage(t.messageId,{reason:"performance-quiescence"},i=>zn().reads.getMessageAncestry(i,t.messageId,"resource").some(r=>r.type==="response"&&(r.state.type==="created"||r.state.type==="in-progress"))):!1}function Od(n){return`[data-performance-conversation-surface="true"][data-active-tab-id="${CSS.escape(n)}"][data-conversation-ready="true"]`}function la(n){return!!document.querySelector(`[data-editor-role="message"][data-message-id="${CSS.escape(n)}"] [contenteditable="true"]`)}async function $r(n){for(let e=0;e<n;e+=1)await new Promise(t=>window.requestAnimationFrame(()=>t()))}async function Fc(n){const e=Wn();return{persistenceReady:e.persistence.phase==="ready",pendingWrites:e.persistence.pendingWrites,activeTabMatches:e.ui.activeTabId===n,surfaceReady:!!document.querySelector(Od(n)),activeResponse:await Ud(n)}}async function ua(n){const e=await Fc(n);return e.persistenceReady&&e.pendingWrites===0&&e.activeTabMatches&&e.surfaceReady&&!e.activeResponse}const da={async prepareDeterministicMode(){Ht.dispatch(Zo({path:"features.memoryDiagnostics",value:!1})),Ht.dispatch(Zo({path:"features.memoryTimelineDiagnostics",value:!1})),Zl(!1),Jl(!1),localStorage.setItem("assistant.performanceDiagnostics.enabled","false"),localStorage.setItem("assistant.memoryTimeline.desired","false"),await $r(2)},getStateSummary:ca,async assertScenario(n){const e=zn(),t=await e.scopes.acquireConversations([n.slow.conversationId,n.fast.conversationId],{reason:"performance-scenario-validation"});try{const i=Wn(),r=xc.services.sources.messageRendering.getDraftUserMessage(n.draft.messageId);if(i.ui.draftMessageId!==n.draft.messageId)throw new Error(`Performance scenario draft mismatch: expected ${n.draft.messageId}, got ${i.ui.draftMessageId??"<none>"}`);if(r.text.length!==n.draft.expectedTextLength)throw new Error(`Performance scenario draft length mismatch: expected ${n.draft.expectedTextLength}, got ${r.text.length}`);return{slow:aa(t,e.reads,i.ui.tabs.find(s=>s.id===n.slow.tabId),n.slow),fast:aa(t,e.reads,i.ui.tabs.find(s=>s.id===n.fast.tabId),n.fast)}}finally{e.scopes.release(t)}},focusTab(n){const e=Wn();if(!e.ui.tabs.some(t=>t.id===n))throw new Error(`Cannot focus missing performance scenario tab ${n}`);Ls(),Pl(e.ui.activeTabId,n),Ht.dispatch(Kl(n))},async awaitQuiescence({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(await document.fonts?.ready;performance.now()<t;){if(await ua(n)&&(await $r(2),await ua(n))){Il(n);return}await new Promise(i=>window.setTimeout(i,25))}throw new Error(`Performance scenario did not become quiescent for ${n}: ${JSON.stringify({summary:ca(),readiness:await Fc(n)})}`)},async awaitEditableUserMessage({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(;performance.now()<t;){const i=Wn(),r=i.ui.tabs.find(s=>s.id===n);if(i.ui.activeTabId===n&&r&&la(r.messageId)){const s=await zn().scopes.acquireConversation(r.conversationId,{requiredMessageId:r.messageId,reason:"performance-editor-observation"}),o=s.requireMessage(r.messageId);if(o.type!=="user")throw zn().scopes.release(s),new Error(`Editable performance target ${r.messageId} is not a user message`);if(await $r(2),la(o.id))return Ls(),hi=s,En=o.id,ki=o.text,{messageId:o.id};zn().scopes.release(s)}await new Promise(s=>window.setTimeout(s,25))}throw new Error(`Editable user message did not mount for tab ${n}`)},getEditorTargetDescriptor(){const n=Ar();if(!En||!n)throw new Error("Performance scenario editor target is unavailable");return{messageId:En,textLength:n.text.length,attachmentCount:n.attachments.length,updateCount:Ns}},assertEditorText(n){const e=Ar();if(!e)throw new Error("Performance scenario editor target is unavailable");if(e.text!==n)throw new Error(`Performance scenario final editor text mismatch: expected length ${n.length}, got ${e.text.length}`);return!0},resetEditorUpdateCount(n){if(n&&n!==En)throw new Error("Acquire the editable performance target before resetting its counter");const e=Ar();if(!En||!e)throw new Error("Cannot reset performance counter without an acquired user message");ki=e.text,Ns=0}};function Fd(){if(gc())return Cl(),Ld(),window.__assistantPerformanceDriver=da,()=>{Ur?.(),Ur=void 0,Ls(),window.__assistantPerformanceDriver===da&&delete window.__assistantPerformanceDriver}}const Bd="assistant.remote-control-instance.v1",Or="instance",kd="identity",Bc=4e3,Vd=128;function zd(){return new Promise((n,e)=>{const t=indexedDB.open(Bd,1);let i=!1;const r=setTimeout(()=>{i=!0,e(new Error("Remote-control instance storage is blocked."))},Bc);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(Or)||t.result.createObjectStore(Or)},t.onsuccess=()=>{if(clearTimeout(r),i){t.result.close();return}i=!0,t.result.onversionchange=()=>t.result.close(),n(t.result)},t.onerror=()=>{clearTimeout(r),i=!0,e(t.error||new Error("Remote-control instance storage failed."))}})}function Hd(){const n=async(e,t)=>{const i=await zd();try{return await new Promise((r,s)=>{const o=i.transaction(Or,e);let a;const c=setTimeout(()=>{try{o.abort()}catch{}s(new Error("Remote-control instance storage timed out."))},Bc);o.oncomplete=()=>{clearTimeout(c),r(a)},o.onabort=o.onerror=()=>{clearTimeout(c),s(o.error||new Error("Remote-control instance storage failed."))};const l=u=>{clearTimeout(c);try{o.abort()}catch{}s(u)};try{t(o.objectStore(Or),u=>{a=u},l)}catch(u){l(u)}})}finally{i.close()}};return{read:e=>n("readonly",(t,i)=>{const r=t.get(e);r.onsuccess=()=>i(r.result)}),update:(e,t)=>n("readwrite",(i,r,s)=>{const o=i.get(e);o.onsuccess=()=>{try{const a=t(o.result??void 0);i.put(a,e),r(a)}catch(a){s(a)}}})}}function Gd(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}function Wd(n){return typeof n=="string"&&n.length>0&&n.length<=Vd&&!/[\s/\\]/.test(n)}function Xd(n){return!Gd(n)||!Wd(n.instanceId)||typeof n.createdAt!="string"?null:{instanceId:n.instanceId,createdAt:n.createdAt}}function qd(n="",e=""){const t=`${n} ${e}`.toLowerCase(),i=/iphone|ipad|ipod/.test(t)?"iOS":/android/.test(t)?"Android":/darwin|mac/.test(t)?"macOS":/win/.test(t)?"Windows":/cros/.test(t)?"ChromeOS":/linux|x11/.test(t)?"Linux":"this device",r=/Edg\//.test(e)?"Edge":/OPR\//.test(e)?"Opera":/Firefox\//.test(e)?"Firefox":/Chrome\//.test(e)?"Chrome":/Safari\//.test(e)?"Safari":"Browser";return{os:i,browser:r}}function jd(n,e,t){const i=typeof navigator<"u"?navigator:void 0,{os:r,browser:s}=qd(e??i?.platform??"",i?.userAgent??"");return n==="desktop"?`Desktop app on ${r}`:`${s} on ${r}`}function $d(n,e={}){const t=e.randomUUID??(()=>globalThis.crypto.randomUUID()),i=e.now??(()=>new Date);let r=null;return{getInstanceIdentity(){if(r)return r;const s=n.update(kd,o=>Xd(o)??{instanceId:t(),createdAt:i().toISOString()});return r=s.catch(o=>{throw r===s&&(r=null),o}),r}}}let Yr=null;function Yd(){return Yr||(Yr=$d(Hd())),Yr}const kc=()=>Yd().getInstanceIdentity();function Kd(n){if(!n||typeof n!="object")return!1;const e=n;return eu(e.peerId)&&(e.kind==="instance"||e.kind==="pod")&&typeof e.peerOnline=="boolean"&&typeof e.lastSeenAt=="string"&&typeof e.clients=="number"}function Zd(n){return[...n].sort((e,t)=>{if(e.peerOnline!==t.peerOnline)return e.peerOnline?-1:1;const i=(e.status?.name??"").localeCompare(t.status?.name??"");return i!==0?i:t.lastSeenAt.localeCompare(e.lastSeenAt)})}async function Jd(n={}){const{baseURL:e,fetchArguments:t}=await Ic(Ql.replace(/^\/+/,"")),i={Accept:"application/json"},r=pd().settings.apiKeys.proxy||"";r&&(i["x-proxy-key"]=r);const o=await(n.fetchImpl??fd)(e,{method:"GET",credentials:t.credentials,headers:i,signal:n.signal});if(!o.ok){const l=await o.text().catch(()=>"");throw new Error(`Failed to list peers (${o.status}): ${l||o.statusText}`)}const a=await o.json(),c=a&&typeof a=="object"?a.peers:void 0;if(!Array.isArray(c))throw new Error("Malformed peer list");return Zd(c.filter(Kd))}const fa=Object.freeze({});function Us(n){if(n.status?.instanceId)return n.status.instanceId;const e=Sc(n.peerId);return e?.kind==="instance"?e.id:null}function Qd(n,e){const t=n.status;return{instanceId:e,peerId:n.peerId,...t?.name?{name:t.name}:{},...t?.hostKind?{hostKind:t.hostKind}:{},...t?.platform?{platform:t.platform}:{},online:n.peerOnline,lastSeenAt:n.lastSeenAt,acceptsCreate:t?.acceptsCreate!==!1,...Array.isArray(t?.workspaces)?{workspaces:t.workspaces}:{}}}function ha(n,e){return!!n&&n.peerId===e.peerId&&n.name===e.name&&n.hostKind===e.hostKind&&n.platform===e.platform&&n.online===e.online&&n.lastSeenAt===e.lastSeenAt&&n.acceptsCreate===e.acceptsCreate&&n.statusRevision===e.statusRevision&&n.workspaces===e.workspaces}function ef(){let n=fa;const e=new Set,t=new Map,i=r=>{n=Object.freeze(r);for(const s of Array.from(e))try{s()}catch(o){console.error("[remote-control] presence listener failed:",o)}};return{getSnapshot:()=>n,subscribe(r){return e.add(r),()=>{e.delete(r)}},get:r=>n[r],setPeers(r,s){const o={};for(const u of r){if(u.kind!=="instance")continue;const d=Us(u);if(!d||d===s)continue;const h=Qd(u,d),p=n[d];p?.statusRevision!==void 0&&(h.statusRevision=p.statusRevision,!h.workspaces&&p.workspaces&&(h.workspaces=p.workspaces)),o[d]=p&&ha(p,h)?p:h}const a=Object.keys(n),c=Object.keys(o);(a.length!==c.length||c.some(u=>n[u]!==o[u]))&&i(o)},updateFromClientState(r,s,o=()=>new Date){const a=Sc(r),c=s.status?.instanceId??(a?.kind==="instance"?a.id:null);if(!c)return;const l=n[c],u=s.status,d=!!u&&u!==t.get(c);u&&t.set(c,u);const h={instanceId:c,peerId:r,...u?.name?{name:u.name}:l?.name?{name:l.name}:{},...u?.hostKind?{hostKind:u.hostKind}:l?.hostKind?{hostKind:l.hostKind}:{},...u?.platform?{platform:u.platform}:l?.platform?{platform:l.platform}:{},online:s.peerOnline,lastSeenAt:s.peerOnline?o().toISOString():s.peerSince??l?.lastSeenAt??o().toISOString(),acceptsCreate:u?u.acceptsCreate!==!1:l?.acceptsCreate??!0,...Array.isArray(u?.workspaces)?{workspaces:u.workspaces}:l?.workspaces?{workspaces:l.workspaces}:{}},p=l?.statusRevision;d?h.statusRevision=(p??0)+1:p!==void 0&&(h.statusRevision=p),!(l&&ha(l,{...h,lastSeenAt:l.lastSeenAt}))&&i({...n,[c]:h})},clear(){t.clear(),n!==fa&&i({})}}}const Vc=ef();function Y0(n){const e=pn.c(1);if(e[0]!=="4d7e028118c5976f072484389ee7559f6799336a0c4f3538bb29fd4a54a9ab50"){for(let i=0;i<1;i+=1)e[i]=Symbol.for("react.memo_cache_sentinel");e[0]="4d7e028118c5976f072484389ee7559f6799336a0c4f3538bb29fd4a54a9ab50"}const t=Vc;return fe.useSyncExternalStore(t.subscribe,t.getSnapshot,t.getSnapshot)}const tf=3e4,nf=500,rf=200,sf=5,of=1440*60*1e3;function Kr(n){return n instanceof Error?n.message:String(n)}function af(){return typeof document>"u"||document.visibilityState!=="hidden"}function cf(n){if(typeof document>"u")return()=>{};const e=()=>{document.visibilityState==="visible"&&n()};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}function Zr(n){const e=[];for(const t of n.ids){const i=n.entities[t];i?.remote&&e.push(i)}return e}function lf(n){return!!n&&typeof n=="object"&&Array.isArray(n.conversations)}function uf(n){const e=n.store,t=n.fetchPeers??Jd,i=n.registry??iu,r=n.presence??Vc,s=n.syncCatalog??ru,o=n.now??(()=>new Date),a=n.refreshIntervalMs??tf,c=n.statusDebounceMs??nf,l=n.listPageLimit??rf,u=n.maxListPages??sf,d=n.absentRetentionMs??of,h=n.isDocumentVisible??af,p=n.subscribeVisibility??cf;let g=!1,_=null,m=[],f=null,T=null,w,M,O=0;const I=new Map;let R=null,L=null,y=null,v=0,x=null;const b=()=>e.getState().workspaces,P=(le,_e,pe)=>{try{e.dispatch(s({instanceId:le,workspaceId:_e,conversations:pe}))}catch(C){M=Kr(C),console.warn("[remote-control] could not sync the remote conversation catalog:",C)}},D=le=>{if(le.length!==0){for(const _e of le)P(_e.remote.instanceId,_e.id,[]);e.dispatch(nu({ids:le.map(_e=>_e.id)}))}},F=(le,_e,pe,C)=>{!pe||!Array.isArray(pe.workspaces)||e.dispatch(tu({instanceId:le,peerId:_e,...pe.name?{instanceName:pe.name}:{},...C?{lastSeenAt:C}:{},workspaces:pe.workspaces}))},U=(le,_e,pe)=>{if(!pe||!_e||!Array.isArray(_e.workspaces))return;const C=new Set(_e.workspaces.map(Te=>Te.id)),He=Zr(b()).filter(Te=>Te.remote.instanceId===le&&!C.has(Te.remote.remoteWorkspaceId));D(He)},$=le=>{const _e=new Map;for(const He of le){if(He.kind!=="instance")continue;const Te=Us(He);!Te||Te===_||_e.set(Te,He)}for(const[He,Te]of _e)F(He,Te.peerId,Te.status,Te.lastSeenAt),U(He,Te.status,Te.peerOnline);const pe=new Map;for(const He of Zr(b())){const Te=pe.get(He.remote.instanceId)??[];Te.push(He),pe.set(He.remote.instanceId,Te)}const C=o().getTime()-d;for(const[He,Te]of pe){if(He===_){D(Te);continue}if(_e.has(He))continue;const Be=Te.filter(Se=>{const We=Se.remote.lastSeenAt?Date.parse(Se.remote.lastSeenAt):NaN;return!Number.isFinite(We)||We<C});D(Be)}},z=()=>T||(T=(async()=>{try{const le=await t();if(!g)return;r.setPeers(le,_),$(le),w=o().toISOString(),M=void 0}catch(le){M=Kr(le)}finally{T=null}g&&Re()})(),T),K=()=>{h()&&z()},re=()=>{x&&clearTimeout(x),x=setTimeout(()=>{x=null,k()},c)},ve=(le,_e,pe,C=!1)=>{r.updateFromClientState(le,pe,o);const He=Us({peerId:le,status:pe.status}),Te=!!pe.status&&pe.status!==_e.lastStatus;Te&&(_e.lastStatus=pe.status,He&&He!==_&&(F(He,le,pe.status,o().toISOString()),U(He,pe.status,pe.peerOnline)));const Be=pe.connection==="open"&&pe.peerOnline,Se=Be&&!_e.wasReady;_e.wasReady=Be,!C&&L&&le===L.peerId&&(Se?k():Te&&Be&&re())},Re=()=>{const le=new Set;for(const _e of Zr(b()))le.add(_e.remote.peerId);L&&le.add(L.peerId);for(const[_e,pe]of[...I]){const C=i.get(_e);(!le.has(_e)||C!==pe.client)&&(pe.unsubscribe(),I.delete(_e))}for(const _e of le){if(I.has(_e))continue;const pe=i.get(_e);if(!pe)continue;const C={client:pe,unsubscribe:()=>{},wasReady:!1};C.unsubscribe=pe.subscribe(He=>ve(_e,C,He)),I.set(_e,C),ve(_e,C,pe.getState(),!0)}},G=()=>{for(const le of I.values())le.unsubscribe();I.clear()},k=async()=>{const le=L,_e=R,pe=y?.client;if(!le||!_e||!pe)return;const C=pe.getState();if(C.connection!=="open"||!C.peerOnline)return;const He=++v,Te=[];try{let Be;for(let Se=0;Se<u;Se+=1){const We=await pe.submit({type:"instance.listConversations",workspaceId:le.remoteWorkspaceId,limit:l,...Be?{cursor:Be}:{}});if(!lf(We.result)||(Te.push(...We.result.conversations),!We.result.nextCursor))break;Be=We.result.nextCursor}}catch(Be){M=Kr(Be);return}!g||He!==v||R!==_e||(O=Te.length,P(le.instanceId,_e,Te))},H=()=>{x&&(clearTimeout(x),x=null),v+=1;const le=y;y=null,L=null,R=null,le?.release()},ne=()=>{const le=b(),_e=le.activeWorkspaceId?le.entities[le.activeWorkspaceId]:void 0,pe=_e?.remote;if(!_e||!pe){y&&(H(),Re());return}if(y&&R===_e.id&&L?.peerId===pe.peerId)return;const C=y;y=i.acquire(pe.peerId,n.getExecutor()),R=_e.id,L=pe,v+=1,C?.release(),Re(),k(),z()};let Q;const de=()=>{if(!g)return;const le=b().activeWorkspaceId,_e=le?b().entities[le]:void 0,pe=_e?.remote?`${le}:${_e.remote.peerId}`:le;pe!==Q&&(Q=pe,ne())},De=()=>{if(g){g=!1,f&&(clearInterval(f),f=null);for(const le of m.splice(0))le();G(),H(),Q=void 0}};return{start:()=>(g||(g=!0,m=[e.subscribe(de),p(K)],f=setInterval(K,a),n.getOwnInstanceId().then(le=>{_=le}).catch(le=>{console.warn("[remote-control] instance identity unavailable; remote workspaces will include every instance:",le)}).then(()=>{g&&(de(),z())})),De),stop:De,refresh:z,relistActive:k,getDiagnostics:()=>({started:g,ownInstanceId:_,activeWorkspaceId:R,activePeerId:L?.peerId??null,lastRefreshAt:w,lastError:M,listedConversations:O})}}let Jr=null,Qr=null;function df(){return Qr||(Qr=Mc(Ht,wo,Ec())),Qr}function ff(){return Jr||(Jr=uf({store:Ht,getExecutor:df,getOwnInstanceId:()=>kc().then(n=>n.instanceId)})),Jr}function hf(){const n=pn.c(4);if(n[0]!=="ff4006042e3b5ce84f718eb30ba17414abeaa537c4cc49a4cdcee85b5a15cfa8"){for(let s=0;s<4;s+=1)n[s]=Symbol.for("react.memo_cache_sentinel");n[0]="ff4006042e3b5ce84f718eb30ba17414abeaa537c4cc49a4cdcee85b5a15cfa8"}const t=!!yc().canUseRemoteControl;let i,r;n[1]!==t?(i=()=>{if(t)return ff().start()},r=[t],n[1]=t,n[2]=i,n[3]=r):(i=n[2],r=n[3]),fe.useEffect(i,r)}const pa=su,pf=ou;function zc(n){return Number.isFinite(n)?new Date(n).toISOString():new Date(0).toISOString()}function Hc(n){return!n.hidden&&!n.remoteMirror}function ma(n,e){return(e.updatedAt||0)-(n.updatedAt||0)||n.id.localeCompare(e.id)}function mf(n){return`${n.updatedAt||0}:${n.id}`}function gf(n){if(typeof n!="string"||!n)return null;const e=n.indexOf(":");if(e<=0)return null;const t=Number(n.slice(0,e)),i=n.slice(e+1);return Number.isFinite(t)&&i?{updatedAt:t,id:i}:null}function vf(n){return{id:n.id,title:n.name||n.id,updatedAt:zc(n.updatedAt),...n.workspaceId?{workspaceId:n.workspaceId}:{},rootMessageId:n.rootMessageId,...typeof n.messageCount=="number"?{messageCount:n.messageCount}:{},...typeof n.responseCount=="number"?{responseCount:n.responseCount}:{}}}function _f(n,e={}){const t=typeof e.query=="string"?e.query.trim().toLowerCase():"",i=typeof e.workspaceId=="string"&&e.workspaceId?e.workspaceId:void 0,r=typeof e.limit=="number"&&Number.isFinite(e.limit)?Math.floor(e.limit):pa,s=Math.max(1,Math.min(pa,r)),o=n.filter(h=>Hc(h)&&(!i||h.workspaceId===i)&&(!t||(h.name||h.id).toLowerCase().includes(t))).sort(ma),a=gf(e.cursor),c=a?o.findIndex(h=>ma(h,{updatedAt:a.updatedAt,id:a.id})>0):0,l=c<0?o.length:c,u=o.slice(l,l+s),d=u[u.length-1];return{conversations:u.map(vf),...d&&l+s<o.length?{nextCursor:mf(d)}:{},total:o.length}}function xf(n){const e=new Map;for(const t of n.descriptors){if(!Hc(t)||!t.workspaceId)continue;const i=e.get(t.workspaceId)??{count:0,updatedAt:0};i.count+=1,i.updatedAt=Math.max(i.updatedAt,t.updatedAt||0),e.set(t.workspaceId,i)}return n.workspaces.filter(t=>!!t&&typeof t.id=="string"&&t.id&&!t.remote&&!Tc(t.id)).map(t=>{const i=e.get(t.id),r=Math.max(i?.updatedAt??0,t.updatedAt||0);return{id:t.id,name:(t.name||"Workspace").slice(0,bc),...typeof t.hue=="number"&&Number.isFinite(t.hue)?{hue:t.hue}:{},...typeof t.icon=="string"&&t.icon?{icon:t.icon}:{},conversationCount:i?.count??0,updatedAt:zc(r),...n.colleagueWorkspaceIds?.has(t.id)?{colleague:!0}:{}}}).sort((t,i)=>i.updatedAt.localeCompare(t.updatedAt)||t.name.localeCompare(i.name)).slice(0,pf)}function Sf(n){return{instanceId:n.instanceId,name:n.name.trim().slice(0,bc),...n.platform?{platform:n.platform}:{},acceptsCreate:n.settings?.acceptRemoteHostRequests!==!1,workspaces:xf({workspaces:n.workspaces,descriptors:n.descriptors,colleagueWorkspaceIds:n.colleagueWorkspaceIds})}}const Gc=new Set(["remote-proxy"]);function yf(n,e){return!n||!n.enabled||n.plan.kind==="details"?null:{option:{id:n.id,label:n.label,intent:e,destructive:n.tone==="danger"||n.tone==="deny"?!0:void 0},plan:{kind:"deck",plan:n.plan}}}function Mf(n){return Number.isFinite(n)?new Date(n).toISOString():new Date(0).toISOString()}function Wc(n){const e=new Map,t={id:n.id,kind:n.kind,title:n.title||"Approval request",summary:n.detail||"",createdAt:Mf(n.createdAt),...typeof n.messageId=="string"?{messageId:n.messageId}:{}},i=gd(n),r=[];let s;if(n.kind==="mcp-elicitation"){const a=n.payload;a&&(s={connectorId:a.connectorId,connectorName:a.connectorName,...a.toolName?{toolName:a.toolName}:{},...a.message?{message:a.message}:{},requestedSchema:a.requestedSchema},r.push({id:"submit",label:"Submit input",intent:"approve"}),e.set("submit",{kind:"elicitation-submit"}))}for(const[a,c]of[["approve",i.approve],["secondary",i.secondary],["deny",i.deny]]){const l=yf(c,a);!l||e.has(l.option.id)||(e.set(l.option.id,l.plan),r.push(l.option))}const o=[i.headline!==t.title?i.headline:void 0,i.body,i.assistantReason?`Assistant's stated reason: ${i.assistantReason}`:void 0,i.monospace,...i.contextNotes||[],...i.highlights.map(a=>a.text)].filter(a=>!!(a&&a.trim())).join(`

`)||t.summary;return{approval:{...t,summary:o,remoteResolvable:r.length>0,options:r,...s?{elicitation:s}:{}},plans:e}}function Ef(n,e,t=Ao()){const i=t.filter(r=>r.conversationId===e&&!Gc.has(r.kind)).map(r=>Wc(r).approval);return{type:"conversation.approvals",peerId:n,conversationId:e,approvals:i}}function bf(n,e,t,i){const r=au(n);if(!r||!t||r.conversationId!==t||Gc.has(r.kind))return{ok:!1,code:"not-found",message:"That approval is not pending in this conversation."};const s=Wc(r);if(!s.approval.remoteResolvable)return{ok:!1,code:"not-remote-resolvable",message:"This peer does not provide a supported decision route for the request."};const o=s.plans.get(e);if(!o)return{ok:!1,code:"unsupported",message:`Unknown option '${e}' for approval ${r.kind}.`};let a;if(o.kind==="elicitation-submit"){const c=r.payload,l=cu(c.requestedSchema,i);if(l)return{ok:!1,code:"unsupported",message:l};a=lu(n,{decision:"submit",content:i})}else{if(i!==void 0)return{ok:!1,code:"unsupported",message:"This decision does not accept form input."};a=md(r,o.plan)}return a?{ok:!0}:{ok:!1,code:"not-found",message:"That approval was already answered."}}function Tf(n){const e=n.subscribe??wc,t=n.getSnapshot??Ao;let i=null,r=null,s=Promise.resolve();const o=a=>{const c=Ef(n.peerId,n.conversationId,t()),l=JSON.stringify(c.approvals);return!a&&l===r||(r=l,s=s.then(()=>n.sink(c)).catch(u=>{r=null,n.onError?.(u)})),s};return{start(){i||(i=e(()=>{o(!1)}),o(!0))},publish:()=>o(!0),stop(){i?.(),i=null,r=null}}}function pt(n){return typeof n=="string"&&n.trim().length>0}function Os(n){return n instanceof Error?n.message:String(n)}function wf(n=uu){const e=new Map;return{get(t){return t?e.get(t):void 0},remember(t,i){if(t)for(e.delete(t),e.set(t,i);e.size>n;){const r=e.keys().next().value;if(r===void 0)break;e.delete(r)}}}}const Af=new Set(["subscribe","reconnect","resync","manual","overflow"]);function ga(n){return!!n&&typeof n=="object"&&typeof n.id=="string"&&typeof n.model=="string"}function Rf(n){if(!n||typeof n!="object")return;const e=n;if(!ga(e.primary))return;const t=Array.isArray(e.secondary)?e.secondary.filter(ga):[];return{primary:{id:e.primary.id,model:e.primary.model},secondary:t}}function Cf(n){return Array.isArray(n)?n.filter(e=>pt(e)):[]}function nr(n){return pt(n)?n:void 0}function va(n){if(!n||typeof n!="object")return!1;const e=n;return pt(e.id)&&pt(e.type)&&"obj"in e&&Array.isArray(e.owners)&&e.owners.length>0&&e.owners.every(t=>pt(t))}const Pf=new Set(["auto","suggest"]),If=new Set(["model","feature-tag","system"]);function Df(n){if(!n||typeof n!="object"||Array.isArray(n))return;const e=n;if(!e.features||typeof e.features!="object"||Array.isArray(e.features))return;const t={};for(const[r,s]of Object.entries(e.features))typeof s=="boolean"&&r&&(t[r]=s);if(typeof e.tier!="string"||!Pf.has(e.tier)||typeof e.source!="string"||!If.has(e.source))return;const i=Array.isArray(e.dependencies)?e.dependencies.filter(r=>typeof r=="string"):[];return{features:t,tier:e.tier,source:e.source,dependencies:i,...typeof e.approved=="boolean"?{approved:e.approved}:{},...typeof e.reason=="string"?{reason:e.reason}:{}}}const Nf=new Set(["serverInstancedExecution","remoteControl"]),Lf=new Set(ld.map(n=>n.key));function Uf(n){if(!n||typeof n!="object"||Array.isArray(n))return;const e={};for(const[t,i]of Object.entries(n))typeof i!="boolean"||!Lf.has(t)||Nf.has(t)||ud(t)&&(e[t]=i);return Object.keys(e).length?e:void 0}function Of(n){const{executor:e,store:t,peerId:i}=n,r=n.cancelMessage??((v,x)=>gu.getInstance().cancelMessage(v,x)),s=n.resolveApproval??bf,o=n.respondToInteraction??((v,x,b)=>e.residency.scopes.withMessage(v,{reason:"peer-resolve-interaction"},P=>Hl(P,v,x,b))),a=n.storeDepotObject??(async v=>{const x=[v.owners[0],...v.owners.slice(1)];await qn.store(v.id,v.type,v.obj,{owners:x,timestamp:v.timestamp})}),c=n.hasDepotObjects??(v=>qn.hasMany(v)),l={chunkBytes:n.depotTransfer?.chunkBytes??pu,maxObjectBytes:n.depotTransfer?.maxObjectBytes??hu,maxPendingBytes:n.depotTransfer?.maxPendingBytes??fu,ttlMs:n.depotTransfer?.ttlMs??du},u=n.now??(()=>Date.now()),d=new Map,h=wf(n.idempotencyLruSize),p=(v,x,b)=>({type:"command.ack",peerId:i,commandId:v.commandId,ok:!0,...x?{conversationId:x,revision:{revision:n.getRevision(x)}}:{},...b===void 0?{}:{result:b}}),g=(v,x,b,P,D)=>({type:"command.ack",peerId:i,commandId:v.commandId,ok:!1,...x?{conversationId:x}:{},error:{code:b,message:P,...D===void 0?{}:{details:D}}}),_=v=>e.residency.scopes.withLocalConversation(v,{reason:"peer-send-message"},x=>{const b=Gl(x.getConversation(),P=>x.getMessage(P));return b.leafMessageId||b.rootMessageId}),m=async(v,x)=>{let b=!1;try{b=await e.residency.scopes.withMessage(x,{reason:"peer-command"},P=>{const D=P.getMessage(x);return!!D&&D.conversationId===v})}catch{b=!1}if(!b)throw new $e("not-found",`Message ${x} is not part of this conversation.`)},f=async(v,x)=>{if(pt(x))return await m(v,x),x;const b=await _(v);if(!b)throw new $e("not-found","The conversation has no message to reply to.");return b},T=(v,x)=>{const b=v.expectedRevision?.revision,P=n.getRevision(x);if(typeof b=="number"&&b<P)throw new $e("stale-revision",`Expected revision ${b} but the conversation is at ${P}.`)},w=async v=>{const x=(await c([v.id])).has(v.id);return await a(v),x?{objectId:v.id,existed:!0}:{objectId:v.id}},M=()=>{const v=u()-l.ttlMs;for(const[x,b]of d)b.updatedAt<v&&d.delete(x)},O=()=>{let v=0;for(const x of d.values())v+=x.bytes;return v},I=async v=>{M();const x=v.transferId,b=v.index,P=v.count,D=v.data,F=v.totalBytes;if(!pt(x)||typeof D!="string"||!Number.isInteger(b)||!Number.isInteger(P)||!Number.isInteger(F)||P<1||b<0||b>=P||F<0)throw new $e("unsupported","upsertDepotObjectChunk requires transferId, index < count and totalBytes.");if(F>l.maxObjectBytes)throw d.delete(x),new $e("unsupported",`Depot objects over ${l.maxObjectBytes} bytes are not accepted by this peer.`,{details:{maxObjectBytes:l.maxObjectBytes}});if(D.length>l.chunkBytes)throw d.delete(x),new $e("unsupported",`Depot chunks over ${l.chunkBytes} bytes are not accepted by this peer.`,{details:{chunkBytes:l.chunkBytes}});let U=d.get(x);if(U){if(U.count!==P||U.totalBytes!==F)throw d.delete(x),new $e("unsupported",`Depot transfer ${x} changed shape between chunks.`)}else{if(O()+F>l.maxPendingBytes)throw new $e("unsupported","This peer has too many unfinished depot transfers; retry later.",{retryable:!0});U={chunks:new Array(P),received:0,count:P,totalBytes:F,bytes:0,updatedAt:u()},d.set(x,U)}if(U.chunks[b]!==void 0)throw new $e("unsupported",`Depot transfer ${x} already received chunk ${b}.`);if(U.chunks[b]=D,U.received+=1,U.bytes+=D.length,U.updatedAt=u(),U.bytes>U.totalBytes)throw d.delete(x),new $e("unsupported",`Depot transfer ${x} exceeded its declared ${U.totalBytes} bytes.`);if(U.received<U.count)return null;d.delete(x);const $=U.chunks.join("");if($.length!==U.totalBytes)throw new $e("unsupported",`Depot transfer ${x} reassembled to ${$.length} bytes, expected ${U.totalBytes}.`);let z;try{z=JSON.parse($)}catch{throw new $e("unsupported",`Depot transfer ${x} is not valid JSON.`)}if(!va(z))throw new $e("unsupported",`Depot transfer ${x} is not a complete depot item.`);return w(z)},R=async(v,x,b)=>{const P=typeof b.text=="string"?b.text:"",D=Cf(b.attachmentIds);if(!P.trim()&&D.length===0)throw new $e("unsupported",`${String(b.type)} requires text or attachments.`);if(T(v,x),D.length){const z=await c(D),K=D.filter(re=>!z.has(re));if(K.length)throw new $e("not-found",`This peer does not hold ${K.length} of the message's attachments; ship them with upsertDepotObject first.`,{details:{missing:K}})}const F=await f(x,b.parentId),U=Df(b.capabilityOverlay),$=Ac({id:nr(b.messageId),conversationId:x,text:P,attachments:D,...U?{capabilityOverlay:U}:{}});return await t.dispatch(_u({parentId:F,message:$})).unwrap(),$.id},L=async(v,x)=>{const b=x.overrides&&typeof x.overrides=="object"?x.overrides:void 0,P=Uf(b?.features),D=await t.dispatch(vu({messageId:v,responseId:nr(x.responseId),overrideCart:Rf(x.overrideCart),...P?{settingsOverride:{features:P}}:{}})).unwrap();return{messageId:D.messageId??v,responseId:D.responseId,...D.replySnapshot?{replySnapshot:D.replySnapshot}:{}}},y=async v=>{const x=v.command,b=String(x.type);let P;if(mu(b)){if(!pt(v.conversationId))throw new $e("unsupported",`${b} requires a conversationId.`);if(!n.canServeConversation(v.conversationId))throw new $e("not-found",`Conversation ${v.conversationId} is not available on this peer.`);P=v.conversationId}const D=F=>({conversationId:P,result:F});switch(x.type){case"ping":return D();case"requestHydrate":{const F=Af.has(String(x.reason))?x.reason:"manual";return await n.requestHydrate(P,F),D()}case"sendMessage":{const F=await R(v,P,x);return D(await L(F,x))}case"upsertUserMessage":{const U={messageId:await R(v,P,x)};return D(U)}case"requestResponse":{if(!pt(x.messageId))throw new $e("unsupported","requestResponse requires a messageId.");return await m(P,x.messageId),D(await L(x.messageId,x))}case"upsertDepotObject":{if(!va(x.item))throw new $e("unsupported","upsertDepotObject requires a complete depot item.");return D(await w(x.item))}case"upsertDepotObjectChunk":{const F=await I(x);return D(F??void 0)}case"cancelResponse":{if(!pt(x.messageId))throw new $e("unsupported","cancelResponse requires a messageId.");if(!r(x.messageId,pt(x.reason)?x.reason:"Cancelled by a remote client"))throw new $e("no-live-run",`Message ${x.messageId} has no cancellable run.`);return D()}case"resolveInteraction":{if(!pt(x.messageId)||!pt(x.requestId))throw new $e("unsupported","resolveInteraction requires messageId and requestId.");await m(P,x.messageId);const F=x.response,U=F&&typeof F=="object"&&!Array.isArray(F)?{requestId:x.requestId,...F}:{requestId:x.requestId,payload:F};if(!await o(x.messageId,x.requestId,U))throw new $e("no-live-run",`Message ${x.messageId} has no live run to answer.`);return D()}case"resolveApproval":{if(!pt(x.approvalId)||!pt(x.optionId))throw new $e("unsupported","resolveApproval requires approvalId and optionId.");const F=s(x.approvalId,x.optionId,P,x.content);if(!F.ok)throw new $e(F.code,F.message);return D()}case"setRuntimeSettings":throw new $e("unsupported","setRuntimeSettings is not supported by this peer.");case"shutdown":{if(!n.onShutdown)throw new $e("unsupported","This peer cannot be shut down remotely.");return await n.onShutdown({type:"shutdown",...pt(x.reason)?{reason:x.reason}:{},...typeof x.uploadFinalBundle=="boolean"?{uploadFinalBundle:x.uploadFinalBundle}:{}}),D()}case"instance.listConversations":{if(!n.listConversations)throw new $e("unsupported","This peer does not list conversations.");const F=n.listConversations({query:typeof x.query=="string"?x.query:void 0,limit:typeof x.limit=="number"?x.limit:void 0,workspaceId:nr(x.workspaceId),cursor:typeof x.cursor=="string"&&x.cursor?x.cursor:void 0});return D(F)}case"instance.createConversation":{if(!n.createConversation)throw new $e("not-allowed","This peer does not accept conversation creation requests.");const F=await n.createConversation({title:pt(x.title)?x.title.trim().slice(0,200):void 0,firstMessage:pt(x.firstMessage)?x.firstMessage:void 0,workspaceId:nr(x.workspaceId)});return D(F)}default:throw new $e("unsupported",`Unsupported command type '${b}'.`)}};return{async handle(v){const x=h.get(v.idempotencyKey);if(x)return{...x,commandId:v.commandId};let b;try{const P=await y(v);b=p(v,P.conversationId,P.result)}catch(P){const D=pt(v.conversationId)?v.conversationId:void 0;b=P instanceof $e?g(v,D,P.code,P.message,P.details):g(v,D,"internal",Os(P))}return h.remember(v.idempotencyKey,b),b}}}const Ff=new Set(["created","in-progress"]);function Bf(n){const e=n.sidecars?.agentRuntime;return e?.pendingInteractions?Object.values(e.pendingInteractions).some(t=>t?.status==="pending"):!1}function kf(n,e,t=[]){const i=n.conversations.entities[e],r=i?.tree?.relationships??{},s=new Set(Object.keys(r));i?.tree?.root&&s.add(i.tree.root);let o=null,a=null;for(const c of s){const l=n.messages.entities[c];if(!(!l||l.conversationId!==e)){if(l.userInteraction?.required||Bf(l)){o||(o={status:"blocked",messageId:c,responseId:l.type==="response"?c:void 0});continue}l.type==="response"&&Ff.has(l.state?.type)&&(!a||l._timestamp>a.message._timestamp)&&(a={message:l})}}if(!o){const c=t.find(l=>l.conversationId===e||l.messageId!==void 0&&s.has(l.messageId));c&&(o={status:"blocked",messageId:c.messageId})}return o||(a?{status:"running",messageId:a.message.id,responseId:a.message.id}:{status:"idle"})}async function Vf(n){const e=n.reason==="final"?[]:Rc(),t=await Cc(n.executor,n.conversationId,{reason:"peer-publish-snapshot"},o=>xu(n.executor,o,n.conversationId)),i=Co(t),r=n.captureArtifactWorkingSet?n.captureArtifactWorkingSet(i,e):Su(i,e);return{frame:{type:"conversation.hydrate",protocolVersion:Ro,peerId:n.peerId,sessionId:n.sessionId,conversationId:n.conversationId,revision:{revision:n.revision},snapshot:t,reason:n.reason,artifactWorkingSet:r},snapshot:t}}function zf(n){return{type:"conversation.hydratePatch",protocolVersion:Ro,peerId:n.peerId,sessionId:n.sessionId,conversationId:n.conversationId,baseRevision:{revision:n.baseRevision},revision:{revision:n.revision},delta:n.delta,encoding:"jsondiffpatch",artifactWorkingSet:n.artifactWorkingSet}}function Hf(n){return{type:"run.status",protocolVersion:Ro,peerId:n.peerId,...n.sessionId?{sessionId:n.sessionId}:{},conversationId:n.conversationId,status:n.status,...n.messageId?{messageId:n.messageId}:{},...n.responseId?{responseId:n.responseId}:{},revision:n.revision===void 0?void 0:{revision:n.revision},error:n.error,timingSteps:n.timingSteps,updatedAt:new Date().toISOString()}}async function _a(n){if(n.type==="conversation.hydrate"){if(!yu(n.snapshot))throw new Error("Conversation hydrate requires a self-contained bundle");Mu(n.artifactWorkingSet,Co(n.snapshot)),await Eu(Object.values(n.snapshot.rootState.artifactVersions.entities),n.snapshot.depot.items)}n.type==="conversation.hydratePatch"&&bu(n.artifactWorkingSet)}const Gf=16;function Wf(n){if(n instanceof Error)return n.message;if(typeof n=="string")return n;if(n&&typeof n=="object"){const e=n;if(typeof e.message=="string"&&e.message.trim())return e.message;if(typeof e.error=="string"&&e.error.trim())return e.error}try{return JSON.stringify(n)}catch{return String(n)}}function Xf(n,e,t,i){const{executor:r,store:s}=n,{sink:o,peerId:a}=i,c=i.patchDebounceMs??Gf;let l=0,u=null,d=null,h=!1,p=!1,g=null,_=null,m=!1,f=0,T=-1,w={signature:""};const M=wu(),O=D=>{const F=Cu(Pu(D.rootState),{purpose:"debug"}),U=[...Iu(F),...Du(F),...Nu(F,r.getState().settings)].sort(),$=Object.values(D.rootState.weaves?.entities??{}).flatMap(z=>Object.values(z.edges).map(K=>K.handoffAttachmentId)).sort();return{signature:JSON.stringify([Lu(D),U,$]),referencesDepot:U.length>0||$.some(z=>typeof z=="string"&&z.length>0)||D.rootState.artifactVersions.ids.length>0}},I=async D=>{l+=1;const F=qn.getMutationRevision(),U=await Vf({executor:r,peerId:a,sessionId:e,conversationId:t,revision:l,reason:D,captureArtifactWorkingSet:M.captureFull});await _a(U.frame),await o(U.frame),g=Wr(Co(U.snapshot)),T=F,w=O(g)},R=async()=>{if(!g){await I("resync");return}const D=Rc(),F=await Cc(r,t,{reason:"peer-publish-patch"},Re=>Au(r,Re,t)),U=M.capturePatch(F,D),$=O(F),z=qn.getMutationRevision()!==T;if($.signature!==w.signature||z&&$.referencesDepot){await I("resync");return}const K=Ru(g,F);if(K==null&&U.entries.length===0){g=Wr(F);return}const re=l;l+=1;const ve=zf({peerId:a,sessionId:e,conversationId:t,baseRevision:re,revision:l,delta:K??null,artifactWorkingSet:U});await _a(ve),await o(ve),g=Wr(F)},L=async(D="resync")=>{if(!(h&&D!=="final")){if(D==="initial"||D==="reconnect"||D==="final"){await I(D);return}await R()}},y=()=>{if(h||!p||d||_||!m)return;const D=Math.max(0,c-(performance.now()-f));d=setTimeout(()=>{d=null,v().catch(F=>console.error("[peer] failed to publish snapshot patch:",F))},D)},v=async()=>{if(_)return _;if(!(!m||h))return m=!1,_=(async()=>{try{if(u){const D=u;u=null,await I(D)}else await L("resync")}catch(D){throw g=null,D}})().finally(()=>{_=null,y()}),_},x=()=>{h||(m||(f=performance.now()),m=!0,y())},b=s.subscribe(x),P=Tu(x);return{isStarted:()=>p,async start(){h||p||(await L("initial"),p=!0,m&&x())},async requestFullSnapshot(D="reconnect"){h||!p||(u=D,x(),d&&clearTimeout(d),d=null,_&&await _.catch(()=>{}),!(h||!u)&&(d&&clearTimeout(d),d=null,await v()))},async stop(D="completed",F,U={}){if(!h){h=!0,d&&clearTimeout(d),d=null,b(),P();try{if(_&&await _.catch(()=>{}),U.final===!1)return;await L("final"),await o(Hf({peerId:a,sessionId:e,conversationId:t,status:D,revision:l,error:F?{code:"headless-runtime-error",message:Wf(F)}:void 0,timingSteps:i.getTimingSteps?.()}))}finally{g=null,w={signature:"",referencesDepot:!1},u=null,m=!1,p=!1,M.clear()}}}}}function qf(n){const{executor:e,store:t,peerId:i,transport:r}=n,s=n.now??(()=>new Date),o=n.runStatusDebounceMs??100,a=n.statusDebounceMs??500,c=crypto.randomUUID(),l=s().toISOString(),u=new Set,d=new Map,h=new Map;let p=0,g=0,_=null,m,f=!1,T=0,w=null,M=null,O=Promise.resolve();const I=()=>({peerId:i,peerSessionId:c,publishedConversationIds:[...d.keys()],subscribers:Object.fromEntries(h),clients:p,runStatus:Object.fromEntries([...d.values()].map(G=>[G.conversationId,G.runStatus])),revisions:Object.fromEntries([...d.values()].map(G=>[G.conversationId,G.revision])),statusRevision:g,lastError:m}),R=()=>{const G=I();for(const k of Array.from(u))try{k(G)}catch(H){console.error("[peer] host listener failed:",H)}},L=G=>{m=Os(G),R()},y=G=>r.isOpen()?r.trySend(G):!1,v=G=>{T+=1;const k={conversationId:G,starting:null,started:!1,awaitingFullHydrate:!1,revision:0,runStatus:"idle"},H=async ne=>{(ne.type==="conversation.hydrate"||ne.type==="conversation.hydratePatch")&&(k.revision=ne.revision.revision),!(k.awaitingFullHydrate&&ne.type==="conversation.hydratePatch")&&(ne.type==="conversation.hydrate"&&(k.awaitingFullHydrate=!1),r.isOpen()&&r.send(ne))};return k.publisher=Xf({executor:e,store:t},`${c}:${G}:${T}`,G,{sink:H,peerId:i,getTimingSteps:n.getTimingSteps}),k.approvals=Tf({peerId:i,conversationId:G,sink:async ne=>{r.isOpen()&&r.send(ne)},onError:L}),k},x=G=>{const k=d.get(G);if(k)return k;const H=v(G);return d.set(G,H),H.starting=H.publisher.start().then(()=>{H.started=!0,d.get(G)===H&&(H.approvals.start(),D(!0,G))}).catch(ne=>{H.startError=ne??new Error("Publisher failed to start."),L(ne),d.get(G)===H&&d.delete(G),H.approvals.stop(),H.publisher.stop("completed",void 0,{final:!1}).catch(Q=>console.warn("[peer] failed publisher cleanup failed:",Q)),R()}).finally(()=>{H.starting=null}),R(),H},b=async G=>{d.get(G.conversationId)===G&&d.delete(G.conversationId),G.approvals.stop(),G.starting&&await G.starting.catch(()=>{}),await G.publisher.stop("completed",void 0,{final:!1}).catch(L),R()},P=(G,k)=>{if(k>0)h.set(G,k),n.canServeConversation(G)&&x(G);else{h.delete(G);const H=d.get(G);H&&b(H)}R()},D=(G,k)=>{if(f)return;const H=Ao(),ne=t.getState();for(const Q of d.values()){if(k&&Q.conversationId!==k||!Q.started)continue;const de=kf(ne,Q.conversationId,H);!(de.status!==Q.runStatus||de.messageId!==Q.runMessageId)&&!G||(Q.runStatus=de.status,Q.runMessageId=de.messageId,y({type:"run.status",peerId:i,conversationId:Q.conversationId,status:de.status,...de.messageId?{messageId:de.messageId}:{},...de.responseId?{responseId:de.responseId}:{},revision:{revision:Q.revision},updatedAt:s().toISOString()}))}R()},F=()=>{f||M||(M=setTimeout(()=>{M=null,D(!1)},o))},U=G=>{if(f)return;let k;try{k={...n.buildStatus(),peerId:i,kind:n.kind,hostKind:n.hostKind,startedAt:l}}catch(ne){L(ne);return}const H=JSON.stringify(k);if(!(!G&&H===_)){if(!r.isOpen()){_=null;return}g+=1,_=H,y({type:"peer.status",peerId:i,revision:g,status:k})||(_=null),R()}},$=()=>{f||w||(w=setTimeout(()=>{w=null,U(!1)},a))},z=t.subscribe(()=>{F(),$()}),K=wc(F),re=Of({executor:e,store:t,peerId:i,canServeConversation:n.canServeConversation,requestHydrate:async(G,k)=>{const H=x(G),ne=H.starting;if(ne&&await ne,H.startError!==void 0)throw new $e("hydrate-failed",`Could not publish conversation ${G}: ${Os(H.startError)}`,{retryable:!0});ne||!H.started||await H.publisher.requestFullSnapshot(k==="reconnect"?"reconnect":"resync")},getRevision:G=>d.get(G)?.revision??0,createConversation:n.createConversation,listConversations:n.listConversations,onShutdown:n.onShutdown,idempotencyLruSize:n.idempotencyLruSize}),ve=G=>{O=O.then(async()=>{const k=await re.handle(G);f||y(k)}).catch(L)};return{handleFrame:G=>{if(!(f||!Ou(G)||G.peerId!==i)){if(Fu(G)){y(G);return}if(Bu(G)){if(G.role!=="peer")return;p=G.clients;const k=new Set;for(const H of G.subscriptions)k.add(H.conversationId),P(H.conversationId,H.count);for(const H of[...h.keys()])k.has(H)||P(H,0);return}if(ku(G)){p=G.clients,P(G.conversationId,G.count);return}if(Vu(G)){L(new Error(`${G.error.code}: ${G.error.message}`));return}if(zu(G)){ve(G);return}}},async onTransportOpen(){if(!f){U(!0);for(const G of[...d.values()])try{if(G.starting&&await G.starting,!G.started||d.get(G.conversationId)!==G||(G.awaitingFullHydrate=!0,await G.publisher.requestFullSnapshot("reconnect"),d.get(G.conversationId)!==G))continue;await G.approvals.publish()}catch(k){L(k)}D(!0)}},onTransportClose(){for(const G of d.values())G.awaitingFullHydrate=!0;_=null,R()},publishStatus(G=!1){G?(w&&clearTimeout(w),w=null,U(!0)):$()},async publishFinal(G,k,H){const ne=Uu(k)?k:"completed";let Q=d.get(G);Q?(d.delete(G),Q.approvals.stop(),Q.starting&&await Q.starting.catch(()=>{})):Q=v(G),Q.awaitingFullHydrate=!1;try{await Q.publisher.stop(ne,H,{final:!0})}finally{R()}},getState:I,subscribe(G){return u.add(G),()=>{u.delete(G)}},async stop(){if(f)return;f=!0,w&&clearTimeout(w),M&&clearTimeout(M),w=null,M=null,z(),K();const G=[...d.values()];d.clear();for(const k of G)k.approvals.stop(),k.starting&&await k.starting.catch(()=>{}),await k.publisher.stop("completed",void 0,{final:!1}).catch(H=>console.warn("[peer] publisher stop failed:",H));await O.catch(()=>{}),R(),u.clear()}}}const jf=Xu*(qu+1),$f=Object.freeze([Lr.policy,Lr.replaced]),xa=Object.freeze({enabled:!1,online:!1,instanceName:"",clients:0,publishedConversationIds:Object.freeze([]),publishedConversationCount:0,blockedCount:0,runStatus:Object.freeze({}),attempts:0});function Yf(n){return!!n&&!n.remote&&!Tc(n.id)}function Kf(){const n=new Set;let e=xa,t=null,i=null,r=[],s=null,o=null;const a=()=>{for(const b of Array.from(n))try{b(e)}catch(P){console.error("[remote-control] manager listener failed:",P)}},c=()=>(t?.getDesktopBridge??Ds)(),l=()=>t?.getSettings()?.remoteControl,u=()=>t?.hostKind??"browser",d=()=>t?l()?.instanceName?.trim()||jd(u(),t.platform):"",h=()=>t?t.executor.residency.catalog.getDescriptors({includeHidden:!1}):[],p=b=>t?.executor.residency.catalog.getDescriptor(b),g=()=>t?t.executor.getState():{},_=()=>Object.values(g().workspaces?.entities??{}).filter(b=>!!b),m=b=>g().workspaces?.entities?.[b],f=()=>g().workspaces?.activeWorkspaceId||void 0,T=()=>{const b=new Set;for(const P of Object.values(g().colleagues?.entities??{}))P?.workspaceId&&b.add(P.workspaceId);return b},w=b=>{const P=p(b);return!!P&&!P.hidden&&!P.remoteMirror},M=()=>{const b=i,P=b?.hostState,D=P?.publishedConversationIds??[];let F=0;for(const K of D)P?.runStatus[K]==="blocked"&&(F+=1);const U=b?.socketState.status==="online";e={enabled:!!b,online:U,peerId:b?.peerId,instanceId:t?.instanceId,instanceName:d(),clients:P?.clients??0,publishedConversationIds:Object.freeze([...D]),publishedConversationCount:D.length,blockedCount:F,runStatus:Object.freeze({...P?.runStatus??{}}),attempts:b?.socketState.attempts??0,lastError:b?.socketState.lastError??P?.lastError};const $={hosting:U&&D.length>0,conversationCount:D.length,viewerCount:e.clients},z=t?JSON.stringify($):"stopped";if(z!==o){o=z;const K=c();K&&K.setHostingState(t?$:{hosting:!1,conversationCount:0,viewerCount:0}).catch(re=>console.warn("[remote-control] desktop hosting state rejected:",re))}a()},O=(b,P)=>{b.hostState=P;const D=new Set(P.publishedConversationIds);for(const F of Array.from(b.lastRunStatus.keys()))D.has(F)||b.lastRunStatus.delete(F);for(const F of P.publishedConversationIds){const U=P.runStatus[F]??"idle";if(b.lastRunStatus.get(F)!=="blocked"&&U==="blocked"){const z=c();if(z){const K=p(F)?.name||F;z.notify({title:"Assistant needs your input",body:K,conversationId:F}).catch(re=>console.warn("[remote-control] desktop notification rejected:",re))}}b.lastRunStatus.set(F,U)}M()},I=async b=>{if(!t)throw new $e("internal","Remote control is not running.");if(l()?.acceptRemoteHostRequests===!1)throw new $e("not-allowed","This instance does not accept conversations created by other instances.");const P=typeof b.workspaceId=="string"&&b.workspaceId?b.workspaceId:void 0;if(P&&!Yf(m(P)))throw new $e("not-found",`Workspace ${P} does not exist on this instance.`);const{store:D,executor:F}=t,U=t.createConversation??(async G=>D.dispatch(ju(G?{workspaceId:G}:void 0)).unwrap()),$=t.setConversationTitle??(async(G,k)=>{await F.residency.scopes.withLocalConversation(G,{reason:"remote-control-create"},()=>{D.dispatch($u({id:G,name:k,autoName:!1}))})}),z=t.sendFirstMessage??(async(G,k,H)=>{await D.dispatch(Yu({parentId:k,message:Ac({conversationId:G,text:H})})).unwrap()}),K=await U(P),re=typeof b.title=="string"?b.title.trim().slice(0,200):"";re&&await $(K.conversationId,re);const ve=typeof b.firstMessage=="string"?b.firstMessage:"";ve.trim()&&await z(K.conversationId,K.rootMessageId,ve),i?.host?.publishStatus(!0);const Re=p(K.conversationId)?.workspaceId??P??f();return{conversationId:K.conversationId,rootMessageId:K.rootMessageId,...Re?{workspaceId:Re}:{}}},R=()=>{if(!t||i)return;const b=t,P=Hu(b.instanceId),D=b.createSocket??Gu,F=b.createHost??qf,U={peerId:P,socket:null,host:null,unsubscribeHost:()=>{},socketState:{status:"connecting",attempts:0},hostState:{peerId:P,peerSessionId:"",publishedConversationIds:[],subscribers:{},clients:0,runStatus:{},revisions:{},statusRevision:0},lastRunStatus:new Map};try{const $=D({resolveUrl:async()=>{if(b.endpoint)return Jo(b.endpoint);const K=Wu(P,"peer").replace(/^\//,""),{baseURL:re}=await Ic(K);return Jo(re)},resolveProtocols:()=>{const K=b.executor.getState().settings?.apiKeys?.proxy||"";return K?[`proxy-key.${K}`]:void 0},socketFactory:b.socketFactory,random:b.random,now:b.now,minBackoffMs:b.minBackoffMs,maxBackoffMs:b.maxBackoffMs,heartbeatTimeoutMs:jf,finalCloseCodes:$f,onOpen:()=>i===U?U.host?.onTransportOpen():void 0,onMessage:K=>{if(i!==U||!U.host)return;let re;try{re=JSON.parse(K)}catch{return}U.host.handleFrame(re)},onState:K=>{if(i!==U)return;const re=U.socketState.status==="online";U.socketState=K,re&&K.status!=="online"&&U.host?.onTransportClose(),M()}});U.socket=$;const z={isOpen:()=>$.isOpen(),send:K=>$.send(K),trySend:K=>$.trySend(K)};U.host=F({executor:b.executor,store:b.store,peerId:P,kind:"instance",hostKind:u(),transport:z,buildStatus:()=>Sf({instanceId:b.instanceId,name:d(),platform:b.platform,settings:l(),descriptors:h(),workspaces:_(),colleagueWorkspaceIds:T()}),canServeConversation:w,createConversation:I,listConversations:K=>_f(h(),K),now:b.now})}catch($){console.error("[remote-control] failed to start instance peer:",$);try{U.socket?.stop(Lr.normal,"start-failed")}catch{}return}i=U,U.unsubscribeHost=U.host.subscribe($=>{i===U&&O(U,$)}),U.hostState=U.host.getState()},L=()=>{const b=i;b&&(i=null,b.unsubscribeHost(),b.socket?.stop(Lr.normal,"host-stopped"),b.host?.stop().catch(P=>console.warn("[remote-control] peer host stop failed:",P)))},y=()=>{if(!t)return;!!l()?.enabled&&t.isPrimaryTab()?R():L(),i?.host?.publishStatus(),M()},v=()=>{!t||s||(s=setTimeout(()=>{s=null,y()},t.debounceMs??300))},x=()=>{s&&clearTimeout(s),s=null;for(const P of r.splice(0))P();L(),t=null,o=null;const b=Ds();b&&b.setHostingState({hosting:!1,conversationCount:0,viewerCount:0}).catch(()=>{}),e=xa,a()};return{start(b){return t&&x(),t=b,r=[b.store.subscribe(v)],b.subscribePrimaryTab&&r.push(b.subscribePrimaryTab(v)),y(),x},stop:x,reevaluate:()=>{s&&clearTimeout(s),s=null,y()},getSnapshot:()=>e,subscribe(b){return n.add(b),()=>{n.delete(b)}}}}const Zf=Kf();function Jf(){const n=pn.c(9);if(n[0]!=="d5a7d4c5d19eb0217c2108c357e5555191be7c793bc783df28c80e70208d5260"){for(let u=0;u<9;u+=1)n[u]=Symbol.for("react.memo_cache_sentinel");n[0]="d5a7d4c5d19eb0217c2108c357e5555191be7c793bc783df28c80e70208d5260"}const e=yc(),t=Ku(),i=!!(e.canUseRemoteControl&&t.remoteControl?.enabled),r=t.remoteControl?.desktop?.keepRunningInBackground,s=t.remoteControl?.desktop?.launchAtLogin;let o,a;n[1]!==i?(o=()=>{if(!i)return;let u=!1,d=null;return kc().then(h=>{const{instanceId:p}=h;if(u)return;const g=Mc(Ht,wo,Ec());d=Zf.start({store:Ht,executor:g,instanceId:p,getSettings:ih,isPrimaryTab:nh,subscribePrimaryTab:th,hostKind:hd()?"desktop":"browser",platform:typeof navigator<"u"?navigator.platform:void 0})}).catch(eh),()=>{u=!0,d?.()}},a=[i],n[1]=i,n[2]=o,n[3]=a):(o=n[2],a=n[3]),fe.useEffect(o,a);let c,l;n[4]!==i||n[5]!==r||n[6]!==s?(c=()=>{const u=Ds();u&&u.setPreferences({keepRunningInBackground:i?r??!0:!1,launchAtLogin:i?s??!1:!1}).catch(Qf)},l=[i,r,s],n[4]=i,n[5]=r,n[6]=s,n[7]=c,n[8]=l):(c=n[7],l=n[8]),fe.useEffect(c,l)}function Qf(n){return console.warn("[remote-control] desktop preferences rejected:",n)}function eh(n){return console.error("[remote-control] instance identity unavailable; instance peer not started:",n)}function th(n){return Dc.onStatusChange(()=>n())}function nh(){return Dc.isPrimary()}function ih(){return Ht.getState().settings}function rh(){const n=pn.c(1);if(n[0]!=="84f8156e8cccccb4033062f98116a91b5c569e628aef143f8113f0a88c35eedc"){for(let e=0;e<1;e+=1)n[e]=Symbol.for("react.memo_cache_sentinel");n[0]="84f8156e8cccccb4033062f98116a91b5c569e628aef143f8113f0a88c35eedc"}return Jf(),hf(),null}const An=128,es=1024,ui=1024,Kt={speed:.9,attenuation:1.2,energyConservation:1,injectionRadius:.1},sh=n=>n.hue!==void 0?n.hue:n.rgb?_c(n.rgb):0,Pn=(n,e,t,i)=>`hsla(${Math.round((n%1+1)%1*360)}, ${e}%, ${t}%, ${Oi(i)})`,gn=(n,e,t,i,r,s,o)=>{const a=e.u*window.innerWidth,c=(1-e.v)*window.innerHeight,l=t.u*window.innerWidth,u=(1-t.v)*window.innerHeight;if(Math.hypot(l-a,u-c)<.25)return;const d=n.createLinearGradient(a,c,l,u);d.addColorStop(0,i(s)),d.addColorStop(1,i(o)),n.strokeStyle=d,n.lineWidth=r,n.beginPath(),n.moveTo(a,c),n.lineTo(l,u),n.stroke()},oh=(n,e,t,i,r,s,o)=>{const a=Math.min(1.35,Math.max(.25,i.energy/3)),c=Oi(r*a),l=Oi(s*a);if(Math.max(c,l)<=.002)return;const u=Math.min(2.2,o.glowIntensity),d=o.bladeWidth*(1.25+o.haloStrength*.85),h=Math.max(o.coreWidth+2,o.bladeWidth*.64),p=Math.max(o.coreWidth+.7,h*.42),g=Math.max(.7,Math.min(p-.45,o.coreWidth));n.lineCap="butt",n.lineJoin="bevel",o.lightMode?(n.globalCompositeOperation="source-over",gn(n,e,t,_=>Pn(i.hue,100,86,_*.22*u),d,c,l),gn(n,e,t,_=>Pn(i.hue,100,76,_*.42*u),h,c,l),gn(n,e,t,_=>Pn(i.hue,94,53,_*.86*u),p,c,l),gn(n,e,t,_=>Pn(i.hue,100,79,_*.92),g,c,l)):(n.globalCompositeOperation="lighter",gn(n,e,t,_=>Pn(i.hue,100,52,_*.13*u),d,c,l),gn(n,e,t,_=>Pn(i.hue,100,58,_*.48*u),h,c,l),gn(n,e,t,_=>Pn(i.hue,100,64,_*.86),p,c,l),gn(n,e,t,_=>`rgba(255, 255, 255, ${Oi(_*.94)})`,g,c,l))},ah=n=>{const e=pn.c(39);if(e[0]!=="754a3e72dcdae55ac776801ece48a3586f6106eb707380e12fcaa532db9f7922"){for(let ae=0;ae<39;ae+=1)e[ae]=Symbol.for("react.memo_cache_sentinel");e[0]="754a3e72dcdae55ac776801ece48a3586f6106eb707380e12fcaa532db9f7922"}const{children:t,topology:i,speed:r,attenuation:s,zIndex:o,enableGlobalClicks:a,pixelRatio:c,maxFPS:l}=n,u=i===void 0?"ladder":i,d=r===void 0?mn.speed:r,h=s===void 0?mn.attenuation:s,p=o===void 0?5:o,g=a===void 0?!1:a,_=l===void 0?120:l,m=fe.useRef(null);let f;e[1]===Symbol.for("react.memo_cache_sentinel")?(f=new Map,e[1]=f):f=e[1];const T=fe.useRef(f),w=fe.useRef(null);let M;e[2]===Symbol.for("react.memo_cache_sentinel")?(M=new Float32Array(An*4),e[2]=M):M=e[2];const O=fe.useRef(M);let I;e[3]===Symbol.for("react.memo_cache_sentinel")?(I={xs:[],ys:[]},e[3]=I):I=e[3];const R=fe.useRef(I);let L;e[4]===Symbol.for("react.memo_cache_sentinel")?(L=[],e[4]=L):L=e[4];const y=fe.useRef(L),v=fe.useRef(!0),x=fe.useRef(null),b=fe.useRef(ch),P=fe.useRef(lh),D=fe.useRef(u),F=fe.useRef(d),U=fe.useRef(h),$=fe.useRef(_),z=Pc();let K;e[5]!==z?(K=z.toLowerCase().includes("light"),e[5]=z,e[6]=K):K=e[6];const re=K,ve=fe.useRef(re);let Re,G;e[7]!==u?(Re=()=>{D.current=u,v.current=!0},G=[u],e[7]=u,e[8]=Re,e[9]=G):(Re=e[8],G=e[9]),fe.useEffect(Re,G);let k,H;e[10]!==d?(k=()=>{F.current=d},H=[d],e[10]=d,e[11]=k,e[12]=H):(k=e[11],H=e[12]),fe.useEffect(k,H);let ne,Q;e[13]!==h?(ne=()=>{U.current=h},Q=[h],e[13]=h,e[14]=ne,e[15]=Q):(ne=e[14],Q=e[15]),fe.useEffect(ne,Q);let de,De;e[16]!==_?(de=()=>{$.current=_},De=[_],e[16]=_,e[17]=de,e[18]=De):(de=e[17],De=e[18]),fe.useEffect(de,De);let Ce,le;e[19]!==re?(Ce=()=>{ve.current=re,P.current()},le=[re],e[19]=re,e[20]=Ce,e[21]=le):(Ce=e[20],le=e[21]),fe.useEffect(Ce,le);let _e;e[22]===Symbol.for("react.memo_cache_sentinel")?(_e=ae=>{const oe=T.current.get(ae.id)?.ref.current;oe&&w.current?.unobserve(oe),T.current.set(ae.id,ae),ae.ref.current&&w.current?.observe(ae.ref.current),v.current=!0},e[22]=_e):_e=e[22];const pe=_e;let C;e[23]===Symbol.for("react.memo_cache_sentinel")?(C=ae=>{const oe=T.current.get(ae)?.ref.current;oe&&w.current?.unobserve(oe),T.current.delete(ae),v.current=!0},e[23]=C):C=e[23];const He=C;let Te;e[24]===Symbol.for("react.memo_cache_sentinel")?(Te=(ae,oe,Ee)=>{b.current(ae,oe,Ee)},e[24]=Te):Te=e[24];const Be=Te;let Se;e[25]===Symbol.for("react.memo_cache_sentinel")?(Se=ae=>{const oe=T.current.get(ae)?.ref.current;if(!oe)return null;const Ee=oe.getBoundingClientRect();return{u:(Ee.left+Ee.width/2)/window.innerWidth,v:1-(Ee.top+Ee.height/2)/window.innerHeight}},e[25]=Se):Se=e[25];const We=Se;let Pe;e[26]===Symbol.for("react.memo_cache_sentinel")?(Pe={register:pe,unregister:He,pulseAt:Be,getNodeCenter:We},e[26]=Pe):Pe=e[26];const Ve=Pe;let tt,A;e[27]!==c?(tt=()=>{const ae=m.current,oe=ae?.getContext("2d",{alpha:!0});if(!ae||!oe)return;let Ee=!1,Ie=0;const ie=y.current,be=uh,Oe=()=>{const N=window.innerWidth,he=window.innerHeight,se=[...T.current.values()].slice(0,An),ge=O.current;se.forEach((te,J)=>{const ye=te.ref.current?.getBoundingClientRect();if(!ye)return;const Le=J*4;ge[Le]=ye.left/N,ge[Le+1]=(he-ye.bottom)/he,ge[Le+2]=ye.width/N,ge[Le+3]=ye.height/he}),R.current=Ll(ge,se.length,D.current,be());for(const te of ie)te.passes=Yo(R.current,te.source,te.direction,be());v.current=!1},Ne=()=>{const N=typeof c=="number"?Math.max(.5,Math.min(c,2)):Math.min(window.devicePixelRatio||1,2);ae.width=Math.round(window.innerWidth*N),ae.height=Math.round(window.innerHeight*N),ae.style.width=`${window.innerWidth}px`,ae.style.height=`${window.innerHeight}px`,oe.setTransform(N,0,0,N,0,0),v.current=!0,P.current()},me=N=>{if(x.current=null,Ee)return;const he=$.current;if(he&&he>0&&N-Ie<1e3/he){x.current=requestAnimationFrame(me);return}Ie=N,v.current&&Oe(),oe.clearRect(0,0,window.innerWidth,window.innerHeight);const se={lightMode:ve.current,coreWidth:mn.coreWidth,bladeWidth:mn.bladeWidth,glowIntensity:mn.glowIntensity,haloStrength:mn.haloStrength},ge=ie;for(let te=ge.length-1;te>=0;te=te-1,te){const J=ge[te],ye=(N-J.startedAt)/1e3,Le=ye*F.current,nt=Math.max(.055,J.packetLength*(.65+J.radius*2)),Ke=Oi(1-ye/(mn.fadeLifetime+1.2));if(Ke<=0||Le>3){ge.splice(te,1);continue}for(const Mt of J.passes)for(const _t of Nl(Mt,Le,nt)){const Ki=Math.exp(-U.current*_t.startDistance*.45),Zi=Math.exp(-U.current*_t.endDistance*.45),tn=Ko(Le,_t.startDistance,nt)*Ki*Ke*Mt.gain,Ti=Ko(Le,_t.endDistance,nt)*Zi*Ke*Mt.gain;oh(oe,_t.from,_t.to,J,tn,Ti,se)}}oe.globalCompositeOperation="source-over",ge.length&&(x.current=requestAnimationFrame(me))};P.current=()=>{!Ee&&x.current===null&&(x.current=requestAnimationFrame(me))},b.current=(N,he,se)=>{const ge=se===void 0?{}:se;v.current&&Oe();const te={u:N,v:Dl(R.current.ys,he)},J={source:te,hue:sh(ge),energy:ge.energy??2.5,radius:ge.radius??.05,packetLength:ge.packetLength??mn.packetLength,startedAt:performance.now()};for(const ye of[-1,1])ie.push({...J,direction:ye,passes:Yo(R.current,te,ye,be())});P.current()};const ke=()=>{v.current=!0,ie.length&&P.current()};return w.current=new ResizeObserver(ke),T.current.forEach(N=>{N.ref.current&&w.current?.observe(N.ref.current)}),window.addEventListener("resize",Ne),document.addEventListener("scroll",ke,!0),Ne(),()=>{Ee=!0,window.removeEventListener("resize",Ne),document.removeEventListener("scroll",ke,!0),w.current?.disconnect(),w.current=null,x.current!==null&&cancelAnimationFrame(x.current),x.current=null,ie.length=0,b.current=dh,P.current=fh,oe.clearRect(0,0,window.innerWidth,window.innerHeight)}},A=[c],e[27]=c,e[28]=tt,e[29]=A):(tt=e[28],A=e[29]),fe.useEffect(tt,A);let S,W;e[30]!==g?(S=()=>{if(!g)return;const ae=oe=>{Be(oe.clientX/window.innerWidth,1-oe.clientY/window.innerHeight,{hue:.33})};return window.addEventListener("click",ae),()=>window.removeEventListener("click",ae)},W=[g,Be],e[30]=g,e[31]=S,e[32]=W):(S=e[31],W=e[32]),fe.useEffect(S,W);const Z=re?"normal":"screen";let ee;e[33]!==Z||e[34]!==p?(ee=ue.jsxDEV("canvas",{ref:m,"aria-hidden":"true",style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:p,mixBlendMode:Z}},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/CanvasNetworkScope.tsx",lineNumber:501,columnNumber:11},void 0),e[33]=Z,e[34]=p,e[35]=ee):ee=e[35];let Y;return e[36]!==t||e[37]!==ee?(Y=ue.jsxDEV(vc.Provider,{value:Ve,children:[t,ee]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/CanvasNetworkScope.tsx",lineNumber:518,columnNumber:11},void 0),e[36]=t,e[37]=ee,e[38]=Y):Y=e[38],Y};function ch(){}function lh(){}function uh(){return{width:window.innerWidth,height:window.innerHeight}}function dh(){}function fh(){}const No="178",hh=0,Sa=1,ph=2,Xc=1,mh=2,cn=3,Rn=0,Pt=1,ln=2,Tn=0,pi=1,Fs=2,ya=3,Ma=4,gh=5,kn=100,vh=101,_h=102,xh=103,Sh=104,yh=200,Mh=201,Eh=202,bh=203,Bs=204,ks=205,Th=206,wh=207,Ah=208,Rh=209,Ch=210,Ph=211,Ih=212,Dh=213,Nh=214,Vs=0,zs=1,Hs=2,vi=3,Gs=4,Ws=5,Xs=6,qs=7,qc=0,Lh=1,Uh=2,wn=0,Oh=1,Fh=2,Bh=3,kh=4,Vh=5,zh=6,Hh=7,jc=300,_i=301,xi=302,js=303,$s=304,Vr=306,Ys=1e3,Hn=1001,Ks=1002,Yt=1003,Gh=1004,ir=1005,yt=1006,ts=1007,Gn=1008,fn=1009,$c=1010,Yc=1011,Vi=1012,Lo=1013,jn=1014,zt=1015,Xi=1016,Uo=1017,Oo=1018,zi=1020,Kc=35902,Zc=1021,Jc=1022,Ct=1023,Hi=1026,Gi=1027,Qc=1028,Fo=1029,el=1030,Bo=1031,ko=1033,Rr=33776,Cr=33777,Pr=33778,Ir=33779,Zs=35840,Js=35841,Qs=35842,eo=35843,to=36196,no=37492,io=37496,ro=37808,so=37809,oo=37810,ao=37811,co=37812,lo=37813,uo=37814,fo=37815,ho=37816,po=37817,mo=37818,go=37819,vo=37820,_o=37821,Dr=36492,xo=36494,So=36495,tl=36283,yo=36284,Mo=36285,Eo=36286,Wh=3200,Xh=3201,qh=0,jh=1,bn="",Vt="srgb",Si="srgb-linear",Fr="linear",rt="srgb",Kn=7680,Ea=519,$h=512,Yh=513,Kh=514,nl=515,Zh=516,Jh=517,Qh=518,ep=519,ba=35044,Ta="300 es",un=2e3,Br=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ns=Math.PI/180,bo=180/Math.PI;function qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function tp(n,e){return(n%e+e)%e}function is(n,e,t){return(1-t)*n+t*e}function Pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ji{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==p||u!==g){let m=1-a;const f=c*h+l*p+u*g+d*_,T=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const O=Math.sqrt(w),I=Math.atan2(O,f*T);m=Math.sin(m*I)/O,a=Math.sin(a*I)/O}const M=a*T;if(c=c*m+h*M,l=l*m+p*M,u=u*m+g*M,d=d*m+_*M,m===1-a){const O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-a*p,e[t+2]=l*g+u*p+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rs.copy(this).projectOnVector(e),this.sub(rs)}reflect(e){return this.sub(rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rs=new j,wa=new ji;class Xe{constructor(e,t,i,r,s,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],T=r[1],w=r[4],M=r[7],O=r[2],I=r[5],R=r[8];return s[0]=o*_+a*T+c*O,s[3]=o*m+a*w+c*I,s[6]=o*f+a*M+c*R,s[1]=l*_+u*T+d*O,s[4]=l*m+u*w+d*I,s[7]=l*f+u*M+d*R,s[2]=h*_+p*T+g*O,s[5]=h*m+p*w+g*I,s[8]=h*f+p*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ss.makeScale(e,t)),this}rotate(e){return this.premultiply(ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ss=new Xe;function il(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function np(){const n=kr("canvas");return n.style.display="block",n}const Aa={};function mi(n){n in Aa||(Aa[n]=!0,console.warn(n))}function ip(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function rp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ra=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ca=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){const n={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=dn(r.r),r.g=dn(r.g),r.b=dn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?Fr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Si]:{primaries:e,whitePoint:i,transfer:Fr,toXYZ:Ra,fromXYZ:Ca,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Ra,fromXYZ:Ca,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}const Je=op();function dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zn;class ap{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zn===void 0&&(Zn=kr("canvas")),Zn.width=e.width,Zn.height=e.height;const r=Zn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dn(t[i]/255)*255):t[i]=dn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cp=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(os(r[o].image)):s.push(os(r[o]))}else s=os(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function os(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ap.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;const as=new j;class It extends Mi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Hn,r=Hn,s=yt,o=Gn,a=Ct,c=fn,l=It.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=qi(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(as).x}get height(){return this.source.getSize(as).y}get depth(){return this.source.getSize(as).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=jc;It.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,M=(p+1)/2,O=(f+1)/2,I=(u+h)/4,R=(d+_)/4,L=(g+m)/4;return w>M&&w>O?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=I/i,s=R/i):M>O?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=I/r,s=L/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=R/s,r=L/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(h-u)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class up extends Mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new It(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends up{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rl extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dp extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rr.copy(i.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),sr.subVectors(this.max,Ii),Jn.subVectors(e.a,Ii),Qn.subVectors(e.b,Ii),ei.subVectors(e.c,Ii),vn.subVectors(Qn,Jn),_n.subVectors(ei,Qn),In.subVectors(Jn,ei);let t=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-In.z,In.y,vn.z,0,-vn.x,_n.z,0,-_n.x,In.z,0,-In.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-In.y,In.x,0];return!cs(t,Jn,Qn,ei,sr)||(t=[1,0,0,0,1,0,0,0,1],!cs(t,Jn,Qn,ei,sr))?!1:(or.crossVectors(vn,_n),t=[or.x,or.y,or.z],cs(t,Jn,Qn,ei,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nn=[new j,new j,new j,new j,new j,new j,new j,new j],Gt=new j,rr=new $i,Jn=new j,Qn=new j,ei=new j,vn=new j,_n=new j,In=new j,Ii=new j,sr=new j,or=new j,Dn=new j;function cs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Dn.fromArray(n,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),c=e.dot(Dn),l=t.dot(Dn),u=i.dot(Dn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const fp=new $i,Di=new j,ls=new j;class zo{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Di,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(ls)),this.expandByPoint(Di.copy(e.center).sub(ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const rn=new j,us=new j,ar=new j,xn=new j,ds=new j,cr=new j,fs=new j;class hp{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){us.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(us);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ar),a=xn.dot(this.direction),c=-xn.dot(ar),l=xn.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(us).addScaledVector(ar,h),p}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const i=rn.dot(this.direction),r=rn.dot(rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,i,r,s){ds.subVectors(t,e),cr.subVectors(i,e),fs.crossVectors(ds,cr);let o=this.direction.dot(fs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const c=a*this.direction.dot(cr.crossVectors(xn,cr));if(c<0)return null;const l=a*this.direction.dot(ds.cross(xn));if(l<0||c+l>o)return null;const u=-a*xn.dot(fs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,c,l,u,d,h,p,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,p,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),o=1/ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Sn.crossVectors(i,Lt),Sn.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Sn.crossVectors(i,Lt)),Sn.normalize(),lr.crossVectors(Lt,Sn),r[0]=Sn.x,r[4]=lr.x,r[8]=Lt.x,r[1]=Sn.y,r[5]=lr.y,r[9]=Lt.y,r[2]=Sn.z,r[6]=lr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],T=i[3],w=i[7],M=i[11],O=i[15],I=r[0],R=r[4],L=r[8],y=r[12],v=r[1],x=r[5],b=r[9],P=r[13],D=r[2],F=r[6],U=r[10],$=r[14],z=r[3],K=r[7],re=r[11],ve=r[15];return s[0]=o*I+a*v+c*D+l*z,s[4]=o*R+a*x+c*F+l*K,s[8]=o*L+a*b+c*U+l*re,s[12]=o*y+a*P+c*$+l*ve,s[1]=u*I+d*v+h*D+p*z,s[5]=u*R+d*x+h*F+p*K,s[9]=u*L+d*b+h*U+p*re,s[13]=u*y+d*P+h*$+p*ve,s[2]=g*I+_*v+m*D+f*z,s[6]=g*R+_*x+m*F+f*K,s[10]=g*L+_*b+m*U+f*re,s[14]=g*y+_*P+m*$+f*ve,s[3]=T*I+w*v+M*D+O*z,s[7]=T*R+w*x+M*F+O*K,s[11]=T*L+w*b+M*U+O*re,s[15]=T*y+w*P+M*$+O*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*p-i*c*p)+_*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=d*m*l-_*h*l+_*c*p-a*m*p-d*c*f+a*h*f,w=g*h*l-u*m*l-g*c*p+o*m*p+u*c*f-o*h*f,M=u*_*l-g*d*l+g*a*p-o*_*p-u*a*f+o*d*f,O=g*d*c-u*_*c-g*a*h+o*_*h+u*a*m-o*d*m,I=t*T+i*w+r*M+s*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=T*R,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*R,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*f+i*c*f)*R,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*p-i*c*p)*R,e[4]=w*R,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*f+t*h*f)*R,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*f-t*c*f)*R,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*R,e[8]=M*R,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*f-t*d*f)*R,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*f+t*a*f)*R,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*R,e[12]=O*R,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*m+t*d*m)*R,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*R,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,g=s*d,_=o*u,m=o*d,f=a*d,T=c*l,w=c*u,M=c*d,O=i.x,I=i.y,R=i.z;return r[0]=(1-(_+f))*O,r[1]=(p+M)*O,r[2]=(g-w)*O,r[3]=0,r[4]=(p-M)*I,r[5]=(1-(h+f))*I,r[6]=(m+T)*I,r[7]=0,r[8]=(g+w)*R,r[9]=(m-T)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ti.set(r[0],r[1],r[2]).length();const o=ti.set(r[4],r[5],r[6]).length(),a=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);const l=1/s,u=1/o,d=1/a;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=un){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===un)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Br)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=un){const c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,p=(i+r)*u;let g,_;if(a===un)g=(o+s)*d,_=-2*d;else if(a===Br)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ti=new j,Wt=new ht,pp=new j(0,0,0),mp=new j(1,1,1),Sn=new j,lr=new j,Lt=new j,Pa=new ht,Ia=new ji;class hn{constructor(e=0,t=0,i=0,r=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gp=0;const Da=new j,ni=new ji,sn=new ht,ur=new j,Ni=new j,vp=new j,_p=new ji,Na=new j(1,0,0),La=new j(0,1,0),Ua=new j(0,0,1),Oa={type:"added"},xp={type:"removed"},ii={type:"childadded",child:null},hs={type:"childremoved",child:null};class Ot extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new j,t=new hn,i=new ji,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Xe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(Na,e)}rotateY(e){return this.rotateOnAxis(La,e)}rotateZ(e){return this.rotateOnAxis(Ua,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Na,e)}translateY(e){return this.translateOnAxis(La,e)}translateZ(e){return this.translateOnAxis(Ua,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ur.copy(e):ur.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ni,ur,this.up):sn.lookAt(ur,Ni,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(sn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oa),ii.child=e,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp),hs.child=e,this.dispatchEvent(hs),hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oa),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new j(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new j,on=new j,ps=new j,an=new j,ri=new j,si=new j,Fa=new j,ms=new j,gs=new j,vs=new j,_s=new dt,xs=new dt,Ss=new dt;class jt{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xt.subVectors(r,t),on.subVectors(i,t),ps.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(on),c=Xt.dot(ps),l=on.dot(on),u=on.dot(ps),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,an.x),c.addScaledVector(o,an.y),c.addScaledVector(a,an.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return _s.setScalar(0),xs.setScalar(0),Ss.setScalar(0),_s.fromBufferAttribute(e,t),xs.fromBufferAttribute(e,i),Ss.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_s,s.x),o.addScaledVector(xs,s.y),o.addScaledVector(Ss,s.z),o}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),on.subVectors(e,t),Xt.cross(on).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Xt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ri.subVectors(r,i),si.subVectors(s,i),ms.subVectors(e,i);const c=ri.dot(ms),l=si.dot(ms);if(c<=0&&l<=0)return t.copy(i);gs.subVectors(e,r);const u=ri.dot(gs),d=si.dot(gs);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(ri,o);vs.subVectors(e,s);const p=ri.dot(vs),g=si.dot(vs);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(si,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Fa.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Fa,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(ri,o).addScaledVector(si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ys(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=tp(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ys(o,s,e+1/3),this.g=ys(o,s,e),this.b=ys(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=ol[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Je.workingToColorSpace(St.copy(this),e),Math.round(Ye(St.r*255,0,255))*65536+Math.round(Ye(St.g*255,0,255))*256+Math.round(Ye(St.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Vt){Je.workingToColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(dr);const i=is(yn.h,dr.h,t),r=is(yn.s,dr.s,t),s=is(yn.l,dr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new st;st.NAMES=ol;let Sp=0;class zr extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=pi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=ks,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bs&&(i.blendSrc=this.blendSrc),this.blendDst!==ks&&(i.blendDst=this.blendDst),this.blendEquation!==kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class al extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new j,fr=new et;let yp=0;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ba,this.updateRanges=[],this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ba&&(e.usage=this.usage),e}}class cl extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ll extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xn extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mp=0;const kt=new ht,Ms=new Ot,oi=new j,Ut=new $i,Li=new $i,vt=new j;class $n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(il(e)?ll:cl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Ut.min,Li.min),Ut.expandByPoint(vt),vt.addVectors(Ut.max,Li.max),Ut.expandByPoint(vt)):(Ut.expandByPoint(Li.min),Ut.expandByPoint(Li.max))}Ut.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)vt.fromBufferAttribute(a,l),c&&(oi.fromBufferAttribute(e,l),vt.add(oi)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new j,c[L]=new j;const l=new j,u=new j,d=new j,h=new et,p=new et,g=new et,_=new j,m=new j;function f(L,y,v){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,v),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const x=1/(p.x*g.y-g.x*p.y);isFinite(x)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(x),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(x),a[L].add(_),a[y].add(_),a[v].add(_),c[L].add(m),c[y].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,y=T.length;L<y;++L){const v=T[L],x=v.start,b=v.count;for(let P=x,D=x+b;P<D;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const w=new j,M=new j,O=new j,I=new j;function R(L){O.fromBufferAttribute(r,L),I.copy(O);const y=a[L];w.copy(y),w.sub(O.multiplyScalar(O.dot(y))).normalize(),M.crossVectors(I,y);const x=M.dot(c[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,x)}for(let L=0,y=T.length;L<y;++L){const v=T[L],x=v.start,b=v.count;for(let P=x,D=x+b;P<D;P+=3)R(e.getX(P+0)),R(e.getX(P+1)),R(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,a=new j,c=new j,l=new j,u=new j,d=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new en(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new ht,Nn=new hp,hr=new zo,ka=new j,pr=new j,mr=new j,gr=new j,Es=new j,vr=new j,Va=new j,_r=new j;class $t extends Ot{constructor(e=new $n,t=new al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){vr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Es.fromBufferAttribute(d,e),o?vr.addScaledVector(Es,u):vr.addScaledVector(Es.sub(t),u))}t.add(vr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere),hr.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(hr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(hr,ka)===null||Nn.origin.distanceToSquared(ka)>(e.far-e.near)**2))&&(Ba.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(Ba),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,O=w;M<O;M+=3){const I=a.getX(M),R=a.getX(M+1),L=a.getX(M+2);r=xr(this,f,e,i,l,u,d,I,R,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);r=xr(this,o,e,i,l,u,d,T,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,O=w;M<O;M+=3){const I=M,R=M+1,L=M+2;r=xr(this,f,e,i,l,u,d,I,R,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,w=m+1,M=m+2;r=xr(this,o,e,i,l,u,d,T,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ep(n,e,t,i,r,s,o,a){let c;if(e.side===Pt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Rn,a),c===null)return null;_r.copy(a),_r.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:n}}function xr(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,pr),n.getVertexPosition(c,mr),n.getVertexPosition(l,gr);const u=Ep(n,e,t,i,pr,mr,gr,Va);if(u){const d=new j;jt.getBarycoord(Va,pr,mr,gr,d),r&&(u.uv=jt.getInterpolatedAttribute(r,a,c,l,d,new et)),s&&(u.uv1=jt.getInterpolatedAttribute(s,a,c,l,d,new et)),o&&(u.normal=jt.getInterpolatedAttribute(o,a,c,l,d,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new j,materialIndex:0};jt.getNormal(pr,mr,gr,h.normal),u.face=h,u.barycoord=d}return u}class Yi extends $n{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Xn(l,3)),this.setAttribute("normal",new Xn(u,3)),this.setAttribute("uv",new Xn(d,2));function g(_,m,f,T,w,M,O,I,R,L,y){const v=M/R,x=O/L,b=M/2,P=O/2,D=I/2,F=R+1,U=L+1;let $=0,z=0;const K=new j;for(let re=0;re<U;re++){const ve=re*x-P;for(let Re=0;Re<F;Re++){const G=Re*v-b;K[_]=G*T,K[m]=ve*w,K[f]=D,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=I>0?1:-1,u.push(K.x,K.y,K.z),d.push(Re/R),d.push(1-re/L),$+=1}}for(let re=0;re<L;re++)for(let ve=0;ve<R;ve++){const Re=h+ve+F*re,G=h+ve+F*(re+1),k=h+(ve+1)+F*(re+1),H=h+(ve+1)+F*re;c.push(Re,G,H),c.push(G,k,H),z+=6}a.addGroup(p,z,y),p+=z,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=yi(n[t]);for(const r in i)e[r]=i[r]}return e}function bp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ul(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Tp={clone:yi,merge:bt};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dl extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new j,za=new et,Ha=new et;class qt extends dl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,za,Ha),t.subVectors(Ha,za)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ai=-90,ci=1;class Rp extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(ai,ci,e,t);r.layers=this.layers,this.add(r);const s=new qt(ai,ci,e,t);s.layers=this.layers,this.add(s);const o=new qt(ai,ci,e,t);o.layers=this.layers,this.add(o);const a=new qt(ai,ci,e,t);a.layers=this.layers,this.add(a);const c=new qt(ai,ci,e,t);c.layers=this.layers,this.add(c);const l=new qt(ai,ci,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fl extends It{constructor(e=[],t=_i,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cp extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Tn});s.uniforms.tEquirect.value=t;const o=new $t(r,s),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=yt),new Rp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Sr extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pp={type:"move"};class bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class hl extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ts=new j,Ip=new j,Dp=new Xe;class Fn{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ts.subVectors(i,t).cross(Ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ts),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dp.getNormalMatrix(e),r=this.coplanarPoint(Ts).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new zo,Np=new et(.5,.5),yr=new j;class pl{constructor(e=new Fn,t=new Fn,i=new Fn,r=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=un){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],T=r[13],w=r[14],M=r[15];if(i[0].setComponents(c-s,h-l,m-p,M-f).normalize(),i[1].setComponents(c+s,h+l,m+p,M+f).normalize(),i[2].setComponents(c+o,h+u,m+g,M+T).normalize(),i[3].setComponents(c-o,h-u,m-g,M-T).normalize(),i[4].setComponents(c-a,h-d,m-_,M-w).normalize(),t===un)i[5].setComponents(c+a,h+d,m+_,M+w).normalize();else if(t===Br)i[5].setComponents(a,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){Ln.center.set(0,0,0);const t=Np.distanceTo(e.center);return Ln.radius=.7071067811865476+t,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(yr.x=r.normal.x>0?e.max.x:e.min.x,yr.y=r.normal.y>0?e.max.y:e.min.y,yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ml extends It{constructor(e,t,i=jn,r,s,o,a=Yt,c=Yt,l,u=Hi,d=1){if(u!==Hi&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ei extends $n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const T=f*h-o;for(let w=0;w<l;w++){const M=w*d-s;g.push(M,-T,0),_.push(0,0,1),m.push(w/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const w=T+l*f,M=T+l*(f+1),O=T+1+l*(f+1),I=T+1+l*f;p.push(w,M,I),p.push(M,O,I)}this.setIndex(p),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lp extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Up extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ho extends dl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Op extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ga(n,e,t,i){const r=Fp(i);switch(t){case Zc:return n*e;case Qc:return n*e/r.components*r.byteLength;case Fo:return n*e/r.components*r.byteLength;case el:return n*e*2/r.components*r.byteLength;case Bo:return n*e*2/r.components*r.byteLength;case Jc:return n*e*3/r.components*r.byteLength;case Ct:return n*e*4/r.components*r.byteLength;case ko:return n*e*4/r.components*r.byteLength;case Rr:case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Js:case eo:return Math.max(n,16)*Math.max(e,8)/4;case Zs:case Qs:return Math.max(n,8)*Math.max(e,8)/2;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Dr:case xo:case So:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tl:case yo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mo:case Eo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fp(n){switch(n){case fn:case $c:return{byteLength:1,components:1};case Vi:case Yc:case Xi:return{byteLength:2,components:1};case Uo:case Oo:return{byteLength:2,components:4};case jn:case Lo:case zt:return{byteLength:4,components:1};case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);function gl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
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
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
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
#endif`,Fm=`struct PhysicalMaterial {
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
}`,Bm=`
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
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
#endif`,cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
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
}`,Xg=`#if DEPTH_PACKING == 3200
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
}`,qg=`#define DISTANCE
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
}`,jg=`#define DISTANCE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Qg=`uniform vec3 diffuse;
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
}`,ev=`#define LAMBERT
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
}`,tv=`#define LAMBERT
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
}`,nv=`#define MATCAP
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
}`,iv=`#define MATCAP
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
}`,rv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,ov=`#define PHONG
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
}`,av=`#define PHONG
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
}`,cv=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,uv=`#define TOON
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
}`,dv=`#define TOON
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
}`,fv=`uniform float size;
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
}`,hv=`uniform vec3 diffuse;
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
}`,pv=`#include <common>
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
}`,mv=`uniform vec3 color;
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
}`,gv=`uniform float rotation;
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
}`,vv=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:kp,alphahash_pars_fragment:Vp,alphamap_fragment:zp,alphamap_pars_fragment:Hp,alphatest_fragment:Gp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:jp,batching_vertex:$p,begin_vertex:Yp,beginnormal_vertex:Kp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:em,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:rm,color_pars_fragment:sm,color_pars_vertex:om,color_vertex:am,common:cm,cube_uv_reflection_fragment:lm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:hm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:vm,envmap_common_pars_fragment:_m,envmap_pars_fragment:xm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Im,envmap_vertex:ym,fog_vertex:Mm,fog_pars_vertex:Em,fog_fragment:bm,fog_pars_fragment:Tm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Am,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Cm,lights_pars_begin:Pm,lights_toon_fragment:Dm,lights_toon_pars_fragment:Nm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Um,lights_physical_fragment:Om,lights_physical_pars_fragment:Fm,lights_fragment_begin:Bm,lights_fragment_maps:km,lights_fragment_end:Vm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Gm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:jm,map_particle_pars_fragment:$m,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:Km,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:eg,morphtarget_vertex:tg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:rg,normal_pars_vertex:sg,normal_vertex:og,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:cg,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:dg,opaque_fragment:fg,packing:hg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:vg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:yg,shadowmap_vertex:Mg,shadowmask_pars_fragment:Eg,skinbase_vertex:bg,skinning_pars_vertex:Tg,skinning_vertex:wg,skinnormal_vertex:Ag,specularmap_fragment:Rg,specularmap_pars_fragment:Cg,tonemapping_fragment:Pg,tonemapping_pars_fragment:Ig,transmission_fragment:Dg,transmission_pars_fragment:Ng,uv_pars_fragment:Lg,uv_pars_vertex:Ug,uv_vertex:Og,worldpos_vertex:Fg,background_vert:Bg,background_frag:kg,backgroundCube_vert:Vg,backgroundCube_frag:zg,cube_vert:Hg,cube_frag:Gg,depth_vert:Wg,depth_frag:Xg,distanceRGBA_vert:qg,distanceRGBA_frag:jg,equirect_vert:$g,equirect_frag:Yg,linedashed_vert:Kg,linedashed_frag:Zg,meshbasic_vert:Jg,meshbasic_frag:Qg,meshlambert_vert:ev,meshlambert_frag:tv,meshmatcap_vert:nv,meshmatcap_frag:iv,meshnormal_vert:rv,meshnormal_frag:sv,meshphong_vert:ov,meshphong_frag:av,meshphysical_vert:cv,meshphysical_frag:lv,meshtoon_vert:uv,meshtoon_frag:dv,points_vert:fv,points_frag:hv,shadow_vert:pv,shadow_frag:mv,sprite_vert:gv,sprite_frag:vv},xe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Zt={basic:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new st(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:bt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:bt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new st(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:bt([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:bt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:bt([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:bt([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:bt([xe.common,xe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:bt([xe.lights,xe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Zt.physical={uniforms:bt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Mr={r:0,b:0,g:0},Un=new hn,_v=new ht;function xv(n,e,t,i,r,s,o){const a=new st(0);let c=s===!0?0:1,l,u,d=null,h=0,p=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function _(w){let M=!1;const O=g(w);O===null?f(a,c):O&&O.isColor&&(f(O,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,M){const O=g(M);O&&(O.isCubeTexture||O.mapping===Vr)?(u===void 0&&(u=new $t(new Yi(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:yi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Un.copy(M.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.material.uniforms.envMap.value=O,u.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_v.makeRotationFromEuler(Un)),u.material.toneMapped=Je.getTransfer(O.colorSpace)!==rt,(d!==O||h!==O.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=O,h=O.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):O&&O.isTexture&&(l===void 0&&(l=new $t(new Ei(2,2),new Rt({name:"BackgroundMaterial",uniforms:yi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=O,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(O.colorSpace)!==rt,O.matrixAutoUpdate===!0&&O.updateMatrix(),l.material.uniforms.uvTransform.value.copy(O.matrix),(d!==O||h!==O.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=O,h=O.version,p=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,M){w.getRGB(Mr,ul(n)),i.buffers.color.setClear(Mr.r,Mr.g,Mr.b,M,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:_,addToRenderList:m,dispose:T}}function Sv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(v,x,b,P,D){let F=!1;const U=d(P,b,x);s!==U&&(s=U,l(s.object)),F=p(v,P,b,D),F&&g(v,P,b,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(v,x,b,P),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,x,b){const P=b.wireframe===!0;let D=i[v.id];D===void 0&&(D={},i[v.id]=D);let F=D[x.id];F===void 0&&(F={},D[x.id]=F);let U=F[P];return U===void 0&&(U=h(c()),F[P]=U),U}function h(v){const x=[],b=[],P=[];for(let D=0;D<t;D++)x[D]=0,b[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:b,attributeDivisors:P,object:v,attributes:{},index:null}}function p(v,x,b,P){const D=s.attributes,F=x.attributes;let U=0;const $=b.getAttributes();for(const z in $)if($[z].location>=0){const re=D[z];let ve=F[z];if(ve===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;U++}return s.attributesNum!==U||s.index!==P}function g(v,x,b,P){const D={},F=x.attributes;let U=0;const $=b.getAttributes();for(const z in $)if($[z].location>=0){let re=F[z];re===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),D[z]=ve,U++}s.attributes=D,s.attributesNum=U,s.index=P}function _(){const v=s.newAttributes;for(let x=0,b=v.length;x<b;x++)v[x]=0}function m(v){f(v,0)}function f(v,x){const b=s.newAttributes,P=s.enabledAttributes,D=s.attributeDivisors;b[v]=1,P[v]===0&&(n.enableVertexAttribArray(v),P[v]=1),D[v]!==x&&(n.vertexAttribDivisor(v,x),D[v]=x)}function T(){const v=s.newAttributes,x=s.enabledAttributes;for(let b=0,P=x.length;b<P;b++)x[b]!==v[b]&&(n.disableVertexAttribArray(b),x[b]=0)}function w(v,x,b,P,D,F,U){U===!0?n.vertexAttribIPointer(v,x,b,D,F):n.vertexAttribPointer(v,x,b,P,D,F)}function M(v,x,b,P){_();const D=P.attributes,F=b.getAttributes(),U=x.defaultAttributeValues;for(const $ in F){const z=F[$];if(z.location>=0){let K=D[$];if(K===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const re=K.normalized,ve=K.itemSize,Re=e.get(K);if(Re===void 0)continue;const G=Re.buffer,k=Re.type,H=Re.bytesPerElement,ne=k===n.INT||k===n.UNSIGNED_INT||K.gpuType===Lo;if(K.isInterleavedBufferAttribute){const Q=K.data,de=Q.stride,De=K.offset;if(Q.isInstancedInterleavedBuffer){for(let Ce=0;Ce<z.locationSize;Ce++)f(z.location+Ce,Q.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ce=0;Ce<z.locationSize;Ce++)m(z.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,G);for(let Ce=0;Ce<z.locationSize;Ce++)w(z.location+Ce,ve/z.locationSize,k,re,de*H,(De+ve/z.locationSize*Ce)*H,ne)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<z.locationSize;Q++)f(z.location+Q,K.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<z.locationSize;Q++)m(z.location+Q);n.bindBuffer(n.ARRAY_BUFFER,G);for(let Q=0;Q<z.locationSize;Q++)w(z.location+Q,ve/z.locationSize,k,re,ve*H,ve/z.locationSize*Q*H,ne)}}else if(U!==void 0){const re=U[$];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(z.location,re);break;case 3:n.vertexAttrib3fv(z.location,re);break;case 4:n.vertexAttrib4fv(z.location,re);break;default:n.vertexAttrib1fv(z.location,re)}}}}T()}function O(){L();for(const v in i){const x=i[v];for(const b in x){const P=x[b];for(const D in P)u(P[D].object),delete P[D];delete x[b]}delete i[v]}}function I(v){if(i[v.id]===void 0)return;const x=i[v.id];for(const b in x){const P=x[b];for(const D in P)u(P[D].object),delete P[D];delete x[b]}delete i[v.id]}function R(v){for(const x in i){const b=i[x];if(b[v.id]===void 0)continue;const P=b[v.id];for(const D in P)u(P[D].object),delete P[D];delete b[v.id]}}function L(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function yv(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Ct&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zt&&!L)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:O,maxSamples:I}}function Ev(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Fn,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:i,w=T*4;let M=f.clippingState||null;c.value=M,M=u(g,h,w,p);for(let O=0;O!==w;++O)M[O]=t[O];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,M=p;w!==_;++w,M+=4)o.copy(d[w]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bv(n){let e=new WeakMap;function t(o,a){return a===js?o.mapping=_i:a===$s&&(o.mapping=xi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===js||a===$s)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Cp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const fi=4,Wa=[.125,.215,.35,.446,.526,.582],Vn=20,ws=new Ho,Xa=new st;let As=null,Rs=0,Cs=0,Ps=!1;const Bn=(1+Math.sqrt(5))/2,li=1/Bn,qa=[new j(-Bn,li,0),new j(Bn,li,0),new j(-li,0,Bn),new j(li,0,Bn),new j(0,Bn,-li),new j(0,Bn,li),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],Tv=new j;class ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Tv}=s;As=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(As,Rs,Cs),this._renderer.xr.enabled=Ps,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Xi,format:Ct,colorSpace:Si,depthBuffer:!1},r=$a(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$a(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wv(s)),this._blurMaterial=Av(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,i,r,s){const c=new qt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Xa),d.toneMapping=wn,d.autoClear=!1;const g=new al({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new $t(new Yi,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Xa),m=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):w===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const M=this._cubeSize;Er(r,w*M,T>2?M:0,M,M),d.setRenderTarget(r),m&&d.render(_,c),d.render(e,c)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_i||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Er(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ws)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qa[(r-s-1)%qa.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new $t(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Vn;m>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const f=[];let T=0;for(let R=0;R<Vn;++R){const L=R/_,y=Math.exp(-L*L/2);f.push(y),R===0?T+=y:R<m&&(T+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const M=this._sizeLods[r],O=3*M*(r>w-fi?r-w+fi:0),I=4*(this._cubeSize-M);Er(t,O,I,3*M,2*M),c.setRenderTarget(t),c.render(d,ws)}}function wv(n){const e=[],t=[],i=[];let r=n;const s=n-fi+1+Wa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-fi?c=Wa[o-n+fi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),w=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,L=I>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];T.set(y,_*g*I),w.set(h,m*g*I);const v=[I,I,I,I,I,I];M.set(v,f*g*I)}const O=new $n;O.setAttribute("position",new en(T,_)),O.setAttribute("uv",new en(w,m)),O.setAttribute("faceIndex",new en(M,f)),e.push(O),r>fi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $a(n,e,t){const i=new Qt(n,e,t);return i.texture.mapping=Vr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Er(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Av(n,e,t){const i=new Float32Array(Vn),r=new j(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ya(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ka(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function Rv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===js||c===$s,u=c===_i||c===xi;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ja(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new ja(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Cv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&mi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pv(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let w=0,M=T.length;w<M;w+=3){const O=T[w+0],I=T[w+1],R=T[w+2];h.push(O,I,I,R,R,O)}}else if(g!==void 0){const T=g.array;_=g.version;for(let w=0,M=T.length/3-1;w<M;w+=3){const O=w+0,I=w+1,R=w+2;h.push(O,I,I,R,R,O)}}else return;const m=new(il(h)?ll:cl)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Iv(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Dv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Nv(n,e,t){const i=new WeakMap,r=new dt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let p=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let O=a.attributes.position.count*M,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const R=new Float32Array(O*I*4*d),L=new rl(R,O,I,d);L.type=zt,L.needsUpdate=!0;const y=M*4;for(let v=0;v<d;v++){const x=f[v],b=T[v],P=w[v],D=O*I*4*v;for(let F=0;F<x.count;F++){const U=F*y;g===!0&&(r.fromBufferAttribute(x,F),R[D+U+0]=r.x,R[D+U+1]=r.y,R[D+U+2]=r.z,R[D+U+3]=0),_===!0&&(r.fromBufferAttribute(b,F),R[D+U+4]=r.x,R[D+U+5]=r.y,R[D+U+6]=r.z,R[D+U+7]=0),m===!0&&(r.fromBufferAttribute(P,F),R[D+U+8]=r.x,R[D+U+9]=r.y,R[D+U+10]=r.z,R[D+U+11]=P.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new et(O,I)},i.set(a,h),a.addEventListener("dispose",p)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Lv(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const vl=new It,Za=new ml(1,1),_l=new rl,xl=new dp,Sl=new fl,Ja=[],Qa=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ja[r];if(s===void 0&&(s=new Float32Array(r),Ja[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hr(n,e){let t=Qa[e];t===void 0&&(t=new Int32Array(e),Qa[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Uv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function Fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;nc.set(i),n.uniformMatrix2fv(this.addr,!1,nc),gt(t,i)}}function Vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;tc.set(i),n.uniformMatrix3fv(this.addr,!1,tc),gt(t,i)}}function zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;ec.set(i),n.uniformMatrix4fv(this.addr,!1,ec),gt(t,i)}}function Hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function Kv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Za.compareFunction=nl,s=Za):s=vl,t.setTexture2D(e||s,r)}function Zv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xl,r)}function Jv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sl,r)}function Qv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_l,r)}function e_(n){switch(n){case 5126:return Uv;case 35664:return Ov;case 35665:return Fv;case 35666:return Bv;case 35674:return kv;case 35675:return Vv;case 35676:return zv;case 5124:case 35670:return Hv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return jv;case 36295:return $v;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}function t_(n,e){n.uniform1fv(this.addr,e)}function n_(n,e){const t=bi(e,this.size,2);n.uniform2fv(this.addr,t)}function i_(n,e){const t=bi(e,this.size,3);n.uniform3fv(this.addr,t)}function r_(n,e){const t=bi(e,this.size,4);n.uniform4fv(this.addr,t)}function s_(n,e){const t=bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function o_(n,e){const t=bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function a_(n,e){const t=bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function c_(n,e){n.uniform1iv(this.addr,e)}function l_(n,e){n.uniform2iv(this.addr,e)}function u_(n,e){n.uniform3iv(this.addr,e)}function d_(n,e){n.uniform4iv(this.addr,e)}function f_(n,e){n.uniform1uiv(this.addr,e)}function h_(n,e){n.uniform2uiv(this.addr,e)}function p_(n,e){n.uniform3uiv(this.addr,e)}function m_(n,e){n.uniform4uiv(this.addr,e)}function g_(n,e,t){const i=this.cache,r=e.length,s=Hr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||vl,s[o])}function v_(n,e,t){const i=this.cache,r=e.length,s=Hr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xl,s[o])}function __(n,e,t){const i=this.cache,r=e.length,s=Hr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sl,s[o])}function x_(n,e,t){const i=this.cache,r=e.length,s=Hr(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_l,s[o])}function S_(n){switch(n){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return r_;case 35674:return s_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return c_;case 35667:case 35671:return l_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return h_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return x_}}class y_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=e_(t.type)}}class M_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}}class E_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function ic(n,e){n.seq.push(e),n.map[e.id]=e}function b_(n,e,t){const i=n.name,r=i.length;for(Is.lastIndex=0;;){const s=Is.exec(i),o=Is.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ic(t,l===void 0?new y_(a,n,e):new M_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new E_(a),ic(t,d)),t=d}}}class Nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);b_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function rc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const T_=37297;let w_=0;function A_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const sc=new Xe;function R_(n){Je._getMatrix(sc,Je.workingColorSpace,n);const e=`mat3( ${sc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Fr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function oc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+A_(n.getShaderSource(e),o)}else return r}function C_(n,e){const t=R_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function P_(n,e){let t;switch(e){case Oh:t="Linear";break;case Fh:t="Reinhard";break;case Bh:t="Cineon";break;case kh:t="ACESFilmic";break;case zh:t="AgX";break;case Hh:t="Neutral";break;case Vh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new j;function I_(){Je.getLuminanceCoefficients(br);const n=br.x.toFixed(4),e=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function N_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function L_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ui(n){return n!==""}function ac(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(n){return n.replace(U_,F_)}const O_=new Map;function F_(n,e){let t=qe[e];if(t===void 0){const i=O_.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return To(t)}const B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(n){return n.replace(B_,k_)}function k_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function V_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function z_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _i:case xi:e="ENVMAP_TYPE_CUBE";break;case Vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===xi&&(e="ENVMAP_MODE_REFRACTION"),e}function G_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qc:e="ENVMAP_BLENDING_MULTIPLY";break;case Lh:e="ENVMAP_BLENDING_MIX";break;case Uh:e="ENVMAP_BLENDING_ADD";break}return e}function W_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function X_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=V_(t),l=z_(t),u=H_(t),d=G_(t),h=W_(t),p=D_(t),g=N_(s),_=r.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ui).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ui).join(`
`),f.length>0&&(f+=`
`)):(m=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),f=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?qe.tonemapping_pars_fragment:"",t.toneMapping!==wn?P_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,C_("linearToOutputTexel",t.outputColorSpace),I_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),o=To(o),o=ac(o,t),o=cc(o,t),a=To(a),a=ac(a,t),a=cc(a,t),o=lc(o),a=lc(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=T+m+o,M=T+f+a,O=rc(r,r.VERTEX_SHADER,w),I=rc(r,r.FRAGMENT_SHADER,M);r.attachShader(_,O),r.attachShader(_,I),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(x){if(n.debug.checkShaderErrors){const b=r.getProgramInfoLog(_).trim(),P=r.getShaderInfoLog(O).trim(),D=r.getShaderInfoLog(I).trim();let F=!0,U=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,O,I);else{const $=oc(r,O,"vertex"),z=oc(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+b+`
`+$+`
`+z)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(P===""||D==="")&&(U=!1);U&&(x.diagnostics={runnable:F,programLog:b,vertexShader:{log:P,prefix:m},fragmentShader:{log:D,prefix:f}})}r.deleteShader(O),r.deleteShader(I),L=new Nr(r,_),y=L_(r,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,T_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=I,this}let q_=0;class j_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $_(e),t.set(e,i)),i}}class $_{constructor(e){this.id=q_++,this.code=e,this.usedTimes=0}}function Y_(n,e,t,i,r,s,o){const a=new sl,c=new j_,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,v,x,b,P){const D=b.fog,F=P.geometry,U=y.isMeshStandardMaterial?b.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),z=$&&$.mapping===Vr?$.image.height:null,K=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ve=re!==void 0?re.length:0;let Re=0;F.morphAttributes.position!==void 0&&(Re=1),F.morphAttributes.normal!==void 0&&(Re=2),F.morphAttributes.color!==void 0&&(Re=3);let G,k,H,ne;if(K){const Ke=Zt[K];G=Ke.vertexShader,k=Ke.fragmentShader}else G=y.vertexShader,k=y.fragmentShader,c.update(y),H=c.getVertexShaderID(y),ne=c.getFragmentShaderID(y);const Q=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),De=P.isInstancedMesh===!0,Ce=P.isBatchedMesh===!0,le=!!y.map,_e=!!y.matcap,pe=!!$,C=!!y.aoMap,He=!!y.lightMap,Te=!!y.bumpMap,Be=!!y.normalMap,Se=!!y.displacementMap,We=!!y.emissiveMap,Pe=!!y.metalnessMap,Ve=!!y.roughnessMap,tt=y.anisotropy>0,A=y.clearcoat>0,S=y.dispersion>0,W=y.iridescence>0,Z=y.sheen>0,ee=y.transmission>0,Y=tt&&!!y.anisotropyMap,ae=A&&!!y.clearcoatMap,oe=A&&!!y.clearcoatNormalMap,Ee=A&&!!y.clearcoatRoughnessMap,Ie=W&&!!y.iridescenceMap,ie=W&&!!y.iridescenceThicknessMap,be=Z&&!!y.sheenColorMap,Oe=Z&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,me=!!y.specularColorMap,ke=!!y.specularIntensityMap,N=ee&&!!y.transmissionMap,he=ee&&!!y.thicknessMap,se=!!y.gradientMap,ge=!!y.alphaMap,te=y.alphaTest>0,J=!!y.alphaHash,ye=!!y.extensions;let Le=wn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=n.toneMapping);const nt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:k,defines:y.defines,customVertexShaderID:H,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&P._colorsTexture!==null,instancing:De,instancingColor:De&&P.instanceColor!==null,instancingMorph:De&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Si,alphaToCoverage:!!y.alphaToCoverage,map:le,matcap:_e,envMap:pe,envMapMode:pe&&$.mapping,envMapCubeUVHeight:z,aoMap:C,lightMap:He,bumpMap:Te,normalMap:Be,displacementMap:h&&Se,emissiveMap:We,normalMapObjectSpace:Be&&y.normalMapType===jh,normalMapTangentSpace:Be&&y.normalMapType===qh,metalnessMap:Pe,roughnessMap:Ve,anisotropy:tt,anisotropyMap:Y,clearcoat:A,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:W,iridescenceMap:Ie,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:be,sheenRoughnessMap:Oe,specularMap:Ne,specularColorMap:me,specularIntensityMap:ke,transmission:ee,transmissionMap:N,thicknessMap:he,gradientMap:se,opaque:y.transparent===!1&&y.blending===pi&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:J,combine:y.combine,mapUv:le&&_(y.map.channel),aoMapUv:C&&_(y.aoMap.channel),lightMapUv:He&&_(y.lightMap.channel),bumpMapUv:Te&&_(y.bumpMap.channel),normalMapUv:Be&&_(y.normalMap.channel),displacementMapUv:Se&&_(y.displacementMap.channel),emissiveMapUv:We&&_(y.emissiveMap.channel),metalnessMapUv:Pe&&_(y.metalnessMap.channel),roughnessMapUv:Ve&&_(y.roughnessMap.channel),anisotropyMapUv:Y&&_(y.anisotropyMap.channel),clearcoatMapUv:ae&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(y.sheenRoughnessMap.channel),specularMapUv:Ne&&_(y.specularMap.channel),specularColorMapUv:me&&_(y.specularColorMap.channel),specularIntensityMapUv:ke&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:he&&_(y.thicknessMap.channel),alphaMapUv:ge&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Be||tt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(le||ge),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:de,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Re,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&x.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:le&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:We&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===Pt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function f(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const x in y.defines)v.push(x),v.push(y.defines[x]);return y.isRawShaderMaterial===!1&&(T(v,y),w(v,y),v.push(n.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function T(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function w(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const v=g[y.type];let x;if(v){const b=Zt[v];x=Tp.clone(b.uniforms)}else x=y.uniforms;return x}function O(y,v){let x;for(let b=0,P=u.length;b<P;b++){const D=u[b];if(D.cacheKey===v){x=D,++x.usedTimes;break}}return x===void 0&&(x=new X_(n,v,y,s),u.push(x)),x}function I(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function R(y){c.remove(y)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:O,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:L}}function K_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Z_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,g,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||Z_),i.length>1&&i.sort(h||dc),r.length>1&&r.sort(h||dc)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function J_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new fc,n.set(i,[o])):r>=s.length?(o=new fc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Q_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new st};break;case"SpotLight":t={position:new j,direction:new j,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function e0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let t0=0;function n0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function i0(n){const e=new Q_,t=e0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);const r=new j,s=new ht,o=new ht;function a(l){let u=0,d=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,w=0,M=0,O=0,I=0,R=0;l.sort(n0);for(let y=0,v=l.length;y<v;y++){const x=l[y],b=x.color,P=x.intensity,D=x.distance,F=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=b.r*P,d+=b.g*P,h+=b.b*P;else if(x.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(x.sh.coefficients[U],P);R++}else if(x.isDirectionalLight){const U=e.get(x);if(U.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const $=x.shadow,z=t.get(x);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=x.shadow.matrix,T++}i.directional[p]=U,p++}else if(x.isSpotLight){const U=e.get(x);U.position.setFromMatrixPosition(x.matrixWorld),U.color.copy(b).multiplyScalar(P),U.distance=D,U.coneCos=Math.cos(x.angle),U.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),U.decay=x.decay,i.spot[_]=U;const $=x.shadow;if(x.map&&(i.spotLightMap[O]=x.map,O++,$.updateMatrices(x),x.castShadow&&I++),i.spotLightMatrix[_]=$.matrix,x.castShadow){const z=t.get(x);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=F,M++}_++}else if(x.isRectAreaLight){const U=e.get(x);U.color.copy(b).multiplyScalar(P),U.halfWidth.set(x.width*.5,0,0),U.halfHeight.set(0,x.height*.5,0),i.rectArea[m]=U,m++}else if(x.isPointLight){const U=e.get(x);if(U.color.copy(x.color).multiplyScalar(x.intensity),U.distance=x.distance,U.decay=x.decay,x.castShadow){const $=x.shadow,z=t.get(x);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=x.shadow.matrix,w++}i.point[g]=U,g++}else if(x.isHemisphereLight){const U=e.get(x);U.skyColor.copy(x.color).multiplyScalar(P),U.groundColor.copy(x.groundColor).multiplyScalar(P),i.hemi[f]=U,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==T||L.numPointShadows!==w||L.numSpotShadows!==M||L.numSpotMaps!==O||L.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=T,L.numPointShadows=w,L.numSpotShadows=M,L.numSpotMaps=O,L.numLightProbes=R,i.version=t0++)}function c(l,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const w=l[f];if(w.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(w.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function hc(n){const e=new i0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function r0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hc(n),e.set(r,[a])):s>=o.length?(a=new hc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o0=`uniform sampler2D shadow_pass;
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
}`;function a0(n,e,t){let i=new pl;const r=new et,s=new et,o=new dt,a=new Lp({depthPacking:Xh}),c=new Up,l={},u=t.maxTextureSize,d={[Rn]:Pt,[Pt]:Rn,[ln]:ln},h=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:s0,fragmentShader:o0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new $n;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let f=this.type;this.render=function(I,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const y=n.getRenderTarget(),v=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),b=n.state;b.setBlending(Tn),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const P=f!==cn&&this.type===cn,D=f===cn&&this.type!==cn;for(let F=0,U=I.length;F<U;F++){const $=I[F],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const K=z.getFrameExtents();if(r.multiply(K),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,z.mapSize.y=s.y)),z.map===null||P===!0||D===!0){const ve=this.type!==cn?{minFilter:Yt,magFilter:Yt}:{};z.map!==null&&z.map.dispose(),z.map=new Qt(r.x,r.y,ve),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const re=z.getViewportCount();for(let ve=0;ve<re;ve++){const Re=z.getViewport(ve);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),b.viewport(o),z.updateMatrices($,ve),i=z.getFrustum(),M(R,L,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===cn&&T(z,L),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,v,x)};function T(I,R){const L=e.update(_);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qt(r.x,r.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,L,h,_,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,L,p,_,null)}function w(I,R,L,y){let v=null;const x=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(x!==void 0)v=x;else if(v=L.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const b=v.uuid,P=R.uuid;let D=l[b];D===void 0&&(D={},l[b]=D);let F=D[P];F===void 0&&(F=v.clone(),D[P]=F,R.addEventListener("dispose",O)),v=F}if(v.visible=R.visible,v.wireframe=R.wireframe,y===cn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const b=n.properties.get(v);b.light=L}return v}function M(I,R,L,y,v){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===cn)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const P=e.update(I),D=I.material;if(Array.isArray(D)){const F=P.groups;for(let U=0,$=F.length;U<$;U++){const z=F[U],K=D[z.materialIndex];if(K&&K.visible){const re=w(I,K,y,v);I.onBeforeShadow(n,I,R,L,P,re,z),n.renderBufferDirect(L,null,P,re,I,z),I.onAfterShadow(n,I,R,L,P,re,z)}}}else if(D.visible){const F=w(I,D,y,v);I.onBeforeShadow(n,I,R,L,P,F,null),n.renderBufferDirect(L,null,P,F,I,null),I.onAfterShadow(n,I,R,L,P,F,null)}}const b=I.children;for(let P=0,D=b.length;P<D;P++)M(b[P],R,L,y,v)}function O(I){I.target.removeEventListener("dispose",O);for(const L in l){const y=l[L],v=I.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const c0={[Vs]:zs,[Hs]:Xs,[Gs]:qs,[vi]:Ws,[zs]:Vs,[Xs]:Hs,[qs]:Gs,[Ws]:vi};function l0(n,e){function t(){let N=!1;const he=new dt;let se=null;const ge=new dt(0,0,0,0);return{setMask:function(te){se!==te&&!N&&(n.colorMask(te,te,te,te),se=te)},setLocked:function(te){N=te},setClear:function(te,J,ye,Le,nt){nt===!0&&(te*=Le,J*=Le,ye*=Le),he.set(te,J,ye,Le),ge.equals(he)===!1&&(n.clearColor(te,J,ye,Le),ge.copy(he))},reset:function(){N=!1,se=null,ge.set(-1,0,0,0)}}}function i(){let N=!1,he=!1,se=null,ge=null,te=null;return{setReversed:function(J){if(he!==J){const ye=e.get("EXT_clip_control");J?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),he=J;const Le=te;te=null,this.setClear(Le)}},getReversed:function(){return he},setTest:function(J){J?Q(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(J){se!==J&&!N&&(n.depthMask(J),se=J)},setFunc:function(J){if(he&&(J=c0[J]),ge!==J){switch(J){case Vs:n.depthFunc(n.NEVER);break;case zs:n.depthFunc(n.ALWAYS);break;case Hs:n.depthFunc(n.LESS);break;case vi:n.depthFunc(n.LEQUAL);break;case Gs:n.depthFunc(n.EQUAL);break;case Ws:n.depthFunc(n.GEQUAL);break;case Xs:n.depthFunc(n.GREATER);break;case qs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=J}},setLocked:function(J){N=J},setClear:function(J){te!==J&&(he&&(J=1-J),n.clearDepth(J),te=J)},reset:function(){N=!1,se=null,ge=null,te=null,he=!1}}}function r(){let N=!1,he=null,se=null,ge=null,te=null,J=null,ye=null,Le=null,nt=null;return{setTest:function(Ke){N||(Ke?Q(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Ke){he!==Ke&&!N&&(n.stencilMask(Ke),he=Ke)},setFunc:function(Ke,Mt,_t){(se!==Ke||ge!==Mt||te!==_t)&&(n.stencilFunc(Ke,Mt,_t),se=Ke,ge=Mt,te=_t)},setOp:function(Ke,Mt,_t){(J!==Ke||ye!==Mt||Le!==_t)&&(n.stencilOp(Ke,Mt,_t),J=Ke,ye=Mt,Le=_t)},setLocked:function(Ke){N=Ke},setClear:function(Ke){nt!==Ke&&(n.clearStencil(Ke),nt=Ke)},reset:function(){N=!1,he=null,se=null,ge=null,te=null,J=null,ye=null,Le=null,nt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,w=null,M=null,O=null,I=null,R=new st(0,0,0),L=0,y=!1,v=null,x=null,b=null,P=null,D=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,$=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=$>=2);let K=null,re={};const ve=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),G=new dt().fromArray(ve),k=new dt().fromArray(Re);function H(N,he,se,ge){const te=new Uint8Array(4),J=n.createTexture();n.bindTexture(N,J),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<se;ye++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(he+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return J}const ne={};ne[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(vi),Te(!1),Be(Sa),Q(n.CULL_FACE),C(Tn);function Q(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function de(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function De(N,he){return d[N]!==he?(n.bindFramebuffer(N,he),d[N]=he,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=he),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Ce(N,he){let se=p,ge=!1;if(N){se=h.get(he),se===void 0&&(se=[],h.set(he,se));const te=N.textures;if(se.length!==te.length||se[0]!==n.COLOR_ATTACHMENT0){for(let J=0,ye=te.length;J<ye;J++)se[J]=n.COLOR_ATTACHMENT0+J;se.length=te.length,ge=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ge=!0);ge&&n.drawBuffers(se)}function le(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const _e={[kn]:n.FUNC_ADD,[vh]:n.FUNC_SUBTRACT,[_h]:n.FUNC_REVERSE_SUBTRACT};_e[xh]=n.MIN,_e[Sh]=n.MAX;const pe={[yh]:n.ZERO,[Mh]:n.ONE,[Eh]:n.SRC_COLOR,[Bs]:n.SRC_ALPHA,[Ch]:n.SRC_ALPHA_SATURATE,[Ah]:n.DST_COLOR,[Th]:n.DST_ALPHA,[bh]:n.ONE_MINUS_SRC_COLOR,[ks]:n.ONE_MINUS_SRC_ALPHA,[Rh]:n.ONE_MINUS_DST_COLOR,[wh]:n.ONE_MINUS_DST_ALPHA,[Ph]:n.CONSTANT_COLOR,[Ih]:n.ONE_MINUS_CONSTANT_COLOR,[Dh]:n.CONSTANT_ALPHA,[Nh]:n.ONE_MINUS_CONSTANT_ALPHA};function C(N,he,se,ge,te,J,ye,Le,nt,Ke){if(N===Tn){_===!0&&(de(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),N!==gh){if(N!==m||Ke!==y){if((f!==kn||M!==kn)&&(n.blendEquation(n.FUNC_ADD),f=kn,M=kn),Ke)switch(N){case pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fs:n.blendFunc(n.ONE,n.ONE);break;case ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ma:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ya:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ma:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,w=null,O=null,I=null,R.set(0,0,0),L=0,m=N,y=Ke}return}te=te||he,J=J||se,ye=ye||ge,(he!==f||te!==M)&&(n.blendEquationSeparate(_e[he],_e[te]),f=he,M=te),(se!==T||ge!==w||J!==O||ye!==I)&&(n.blendFuncSeparate(pe[se],pe[ge],pe[J],pe[ye]),T=se,w=ge,O=J,I=ye),(Le.equals(R)===!1||nt!==L)&&(n.blendColor(Le.r,Le.g,Le.b,nt),R.copy(Le),L=nt),m=N,y=!1}function He(N,he){N.side===ln?de(n.CULL_FACE):Q(n.CULL_FACE);let se=N.side===Pt;he&&(se=!se),Te(se),N.blending===pi&&N.transparent===!1?C(Tn):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ge=N.stencilWrite;a.setTest(ge),ge&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),We(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(N){v!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),v=N)}function Be(N){N!==hh?(Q(n.CULL_FACE),N!==x&&(N===Sa?n.cullFace(n.BACK):N===ph?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),x=N}function Se(N){N!==b&&(U&&n.lineWidth(N),b=N)}function We(N,he,se){N?(Q(n.POLYGON_OFFSET_FILL),(P!==he||D!==se)&&(n.polygonOffset(he,se),P=he,D=se)):de(n.POLYGON_OFFSET_FILL)}function Pe(N){N?Q(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=n.TEXTURE0+F-1),K!==N&&(n.activeTexture(N),K=N)}function tt(N,he,se){se===void 0&&(K===null?se=n.TEXTURE0+F-1:se=K);let ge=re[se];ge===void 0&&(ge={type:void 0,texture:void 0},re[se]=ge),(ge.type!==N||ge.texture!==he)&&(K!==se&&(n.activeTexture(se),K=se),n.bindTexture(N,he||ne[N]),ge.type=N,ge.texture=he)}function A(){const N=re[K];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){G.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),G.copy(N))}function Oe(N){k.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),k.copy(N))}function Ne(N,he){let se=l.get(he);se===void 0&&(se=new WeakMap,l.set(he,se));let ge=se.get(N);ge===void 0&&(ge=n.getUniformBlockIndex(he,N.name),se.set(N,ge))}function me(N,he){const ge=l.get(he).get(N);c.get(he)!==ge&&(n.uniformBlockBinding(he,ge,N.__bindingPointIndex),c.set(he,ge))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,re={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,w=null,M=null,O=null,I=null,R=new st(0,0,0),L=0,y=!1,v=null,x=null,b=null,P=null,D=null,G.set(0,0,n.canvas.width,n.canvas.height),k.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:de,bindFramebuffer:De,drawBuffers:Ce,useProgram:le,setBlending:C,setMaterial:He,setFlipSided:Te,setCullFace:Be,setLineWidth:Se,setPolygonOffset:We,setScissorTest:Pe,activeTexture:Ve,bindTexture:tt,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:W,texImage2D:Ie,texImage3D:ie,updateUBOMapping:Ne,uniformBlockBinding:me,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:ae,scissor:be,viewport:Oe,reset:ke}}function u0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):kr("canvas")}function _(A,S,W){let Z=1;const ee=tt(A);if((ee.width>W||ee.height>W)&&(Z=W/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(Z*ee.width),ae=Math.floor(Z*ee.height);d===void 0&&(d=g(Y,ae));const oe=S?g(Y,ae):d;return oe.width=Y,oe.height=ae,oe.getContext("2d").drawImage(A,0,0,Y,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+ae+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,S,W,Z,ee=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===n.RED&&(W===n.FLOAT&&(Y=n.R32F),W===n.HALF_FLOAT&&(Y=n.R16F),W===n.UNSIGNED_BYTE&&(Y=n.R8)),S===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.R8UI),W===n.UNSIGNED_SHORT&&(Y=n.R16UI),W===n.UNSIGNED_INT&&(Y=n.R32UI),W===n.BYTE&&(Y=n.R8I),W===n.SHORT&&(Y=n.R16I),W===n.INT&&(Y=n.R32I)),S===n.RG&&(W===n.FLOAT&&(Y=n.RG32F),W===n.HALF_FLOAT&&(Y=n.RG16F),W===n.UNSIGNED_BYTE&&(Y=n.RG8)),S===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RG8UI),W===n.UNSIGNED_SHORT&&(Y=n.RG16UI),W===n.UNSIGNED_INT&&(Y=n.RG32UI),W===n.BYTE&&(Y=n.RG8I),W===n.SHORT&&(Y=n.RG16I),W===n.INT&&(Y=n.RG32I)),S===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),W===n.UNSIGNED_INT&&(Y=n.RGB32UI),W===n.BYTE&&(Y=n.RGB8I),W===n.SHORT&&(Y=n.RGB16I),W===n.INT&&(Y=n.RGB32I)),S===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),W===n.UNSIGNED_INT&&(Y=n.RGBA32UI),W===n.BYTE&&(Y=n.RGBA8I),W===n.SHORT&&(Y=n.RGBA16I),W===n.INT&&(Y=n.RGBA32I)),S===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),S===n.RGBA){const ae=ee?Fr:Je.getTransfer(Z);W===n.FLOAT&&(Y=n.RGBA32F),W===n.HALF_FLOAT&&(Y=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Y=ae===rt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(A,S){let W;return A?S===null||S===jn||S===zi?W=n.DEPTH24_STENCIL8:S===zt?W=n.DEPTH32F_STENCIL8:S===Vi&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===jn||S===zi?W=n.DEPTH_COMPONENT24:S===zt?W=n.DEPTH_COMPONENT32F:S===Vi&&(W=n.DEPTH_COMPONENT16),W}function O(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==yt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){const S=A.target;S.removeEventListener("dispose",I),L(S),S.isVideoTexture&&u.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),v(S)}function L(A){const S=i.get(A);if(S.__webglInit===void 0)return;const W=A.source,Z=h.get(W);if(Z){const ee=Z[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(A),Object.keys(Z).length===0&&h.delete(W)}i.remove(A)}function y(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const W=A.source,Z=h.get(W);delete Z[S.__cacheKey],o.memory.textures--}function v(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ee=0;ee<S.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=A.textures;for(let Z=0,ee=W.length;Z<ee;Z++){const Y=i.get(W[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(W[Z])}i.remove(A)}let x=0;function b(){x=0}function P(){const A=x;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),x+=1,A}function D(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function F(A,S){const W=i.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,A,S);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+S)}function U(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ne(W,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+S)}function $(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ne(W,A,S);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+S)}function z(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Q(W,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+S)}const K={[Ys]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[Ks]:n.MIRRORED_REPEAT},re={[Yt]:n.NEAREST,[Gh]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[yt]:n.LINEAR,[ts]:n.LINEAR_MIPMAP_NEAREST,[Gn]:n.LINEAR_MIPMAP_LINEAR},ve={[$h]:n.NEVER,[ep]:n.ALWAYS,[Yh]:n.LESS,[nl]:n.LEQUAL,[Kh]:n.EQUAL,[Qh]:n.GEQUAL,[Zh]:n.GREATER,[Jh]:n.NOTEQUAL};function Re(A,S){if(S.type===zt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yt||S.magFilter===ts||S.magFilter===ir||S.magFilter===Gn||S.minFilter===yt||S.minFilter===ts||S.minFilter===ir||S.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,K[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,K[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,K[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,re[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==ir&&S.minFilter!==Gn||S.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function G(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I));const Z=S.source;let ee=h.get(Z);ee===void 0&&(ee={},h.set(Z,ee));const Y=D(S);if(Y!==A.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[Y].usedTimes++;const ae=ee[A.__cacheKey];ae!==void 0&&(ee[A.__cacheKey].usedTimes--,ae.usedTimes===0&&y(S)),A.__cacheKey=Y,A.__webglTexture=ee[Y].texture}return W}function k(A,S,W){return Math.floor(Math.floor(A/W)/S)}function H(A,S,W,Z){const Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,W,Z,S.data);else{Y.sort((ie,be)=>ie.start-be.start);let ae=0;for(let ie=1;ie<Y.length;ie++){const be=Y[ae],Oe=Y[ie],Ne=be.start+be.count,me=k(Oe.start,S.width,4),ke=k(be.start,S.width,4);Oe.start<=Ne+1&&me===ke&&k(Oe.start+Oe.count-1,S.width,4)===me?be.count=Math.max(be.count,Oe.start+Oe.count-be.start):(++ae,Y[ae]=Oe)}Y.length=ae+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ie=0,be=Y.length;ie<be;ie++){const Oe=Y[ie],Ne=Math.floor(Oe.start/4),me=Math.ceil(Oe.count/4),ke=Ne%S.width,N=Math.floor(Ne/S.width),he=me,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,ke,N,he,se,W,Z,S.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function ne(A,S,W){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const ee=G(A,S),Y=S.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+W);const ae=i.get(Y);if(Y.version!==ae.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);const oe=Je.getPrimaries(Je.workingColorSpace),Ee=S.colorSpace===bn?null:Je.getPrimaries(S.colorSpace),Ie=S.colorSpace===bn||oe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ie=_(S.image,!1,r.maxTextureSize);ie=Ve(S,ie);const be=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type);let Ne=w(S.internalFormat,be,Oe,S.colorSpace,S.isVideoTexture);Re(Z,S);let me;const ke=S.mipmaps,N=S.isVideoTexture!==!0,he=ae.__version===void 0||ee===!0,se=Y.dataReady,ge=O(S,ie);if(S.isDepthTexture)Ne=M(S.format===Gi,S.type),he&&(N?t.texStorage2D(n.TEXTURE_2D,1,Ne,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,be,Oe,null));else if(S.isDataTexture)if(ke.length>0){N&&he&&t.texStorage2D(n.TEXTURE_2D,ge,Ne,ke[0].width,ke[0].height);for(let te=0,J=ke.length;te<J;te++)me=ke[te],N?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,be,Oe,me.data):t.texImage2D(n.TEXTURE_2D,te,Ne,me.width,me.height,0,be,Oe,me.data);S.generateMipmaps=!1}else N?(he&&t.texStorage2D(n.TEXTURE_2D,ge,Ne,ie.width,ie.height),se&&H(S,ie,be,Oe)):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,be,Oe,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ne,ke[0].width,ke[0].height,ie.depth);for(let te=0,J=ke.length;te<J;te++)if(me=ke[te],S.format!==Ct)if(be!==null)if(N){if(se)if(S.layerUpdates.size>0){const ye=Ga(me.width,me.height,S.format,S.type);for(const Le of S.layerUpdates){const nt=me.data.subarray(Le*ye/me.data.BYTES_PER_ELEMENT,(Le+1)*ye/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Le,me.width,me.height,1,be,nt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,ie.depth,be,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ne,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,ie.depth,be,Oe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ne,me.width,me.height,ie.depth,0,be,Oe,me.data)}else{N&&he&&t.texStorage2D(n.TEXTURE_2D,ge,Ne,ke[0].width,ke[0].height);for(let te=0,J=ke.length;te<J;te++)me=ke[te],S.format!==Ct?be!==null?N?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,be,me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ne,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,be,Oe,me.data):t.texImage2D(n.TEXTURE_2D,te,Ne,me.width,me.height,0,be,Oe,me.data)}else if(S.isDataArrayTexture)if(N){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ne,ie.width,ie.height,ie.depth),se)if(S.layerUpdates.size>0){const te=Ga(ie.width,ie.height,S.format,S.type);for(const J of S.layerUpdates){const ye=ie.data.subarray(J*te/ie.data.BYTES_PER_ELEMENT,(J+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,be,Oe,ye)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,be,Oe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,be,Oe,ie.data);else if(S.isData3DTexture)N?(he&&t.texStorage3D(n.TEXTURE_3D,ge,Ne,ie.width,ie.height,ie.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,be,Oe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,be,Oe,ie.data);else if(S.isFramebufferTexture){if(he)if(N)t.texStorage2D(n.TEXTURE_2D,ge,Ne,ie.width,ie.height);else{let te=ie.width,J=ie.height;for(let ye=0;ye<ge;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ne,te,J,0,be,Oe,null),te>>=1,J>>=1}}else if(ke.length>0){if(N&&he){const te=tt(ke[0]);t.texStorage2D(n.TEXTURE_2D,ge,Ne,te.width,te.height)}for(let te=0,J=ke.length;te<J;te++)me=ke[te],N?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,be,Oe,me):t.texImage2D(n.TEXTURE_2D,te,Ne,be,Oe,me);S.generateMipmaps=!1}else if(N){if(he){const te=tt(ie);t.texStorage2D(n.TEXTURE_2D,ge,Ne,te.width,te.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Oe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ne,be,Oe,ie);m(S)&&f(Z),ae.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,W){if(S.image.length!==6)return;const Z=G(A,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+W);const Y=i.get(ee);if(ee.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+W);const ae=Je.getPrimaries(Je.workingColorSpace),oe=S.colorSpace===bn?null:Je.getPrimaries(S.colorSpace),Ee=S.colorSpace===bn||ae===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,be=[];for(let J=0;J<6;J++)!Ie&&!ie?be[J]=_(S.image[J],!0,r.maxCubemapSize):be[J]=ie?S.image[J].image:S.image[J],be[J]=Ve(S,be[J]);const Oe=be[0],Ne=s.convert(S.format,S.colorSpace),me=s.convert(S.type),ke=w(S.internalFormat,Ne,me,S.colorSpace),N=S.isVideoTexture!==!0,he=Y.__version===void 0||Z===!0,se=ee.dataReady;let ge=O(S,Oe);Re(n.TEXTURE_CUBE_MAP,S);let te;if(Ie){N&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ke,Oe.width,Oe.height);for(let J=0;J<6;J++){te=be[J].mipmaps;for(let ye=0;ye<te.length;ye++){const Le=te[ye];S.format!==Ct?Ne!==null?N?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Le.width,Le.height,Ne,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,ke,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Le.width,Le.height,Ne,me,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,ke,Le.width,Le.height,0,Ne,me,Le.data)}}}else{if(te=S.mipmaps,N&&he){te.length>0&&ge++;const J=tt(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ke,J.width,J.height)}for(let J=0;J<6;J++)if(ie){N?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be[J].width,be[J].height,Ne,me,be[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,be[J].width,be[J].height,0,Ne,me,be[J].data);for(let ye=0;ye<te.length;ye++){const nt=te[ye].image[J].image;N?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,nt.width,nt.height,Ne,me,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,ke,nt.width,nt.height,0,Ne,me,nt.data)}}else{N?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,me,be[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,Ne,me,be[J]);for(let ye=0;ye<te.length;ye++){const Le=te[ye];N?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Ne,me,Le.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,ke,Ne,me,Le.image[J])}}}m(S)&&f(n.TEXTURE_CUBE_MAP),Y.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,W,Z,ee,Y){const ae=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),Ee=w(W.internalFormat,ae,oe,W.colorSpace),Ie=i.get(S),ie=i.get(W);if(ie.__renderTarget=S,!Ie.__hasExternalTextures){const be=Math.max(1,S.width>>Y),Oe=Math.max(1,S.height>>Y);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,Ee,be,Oe,S.depth,0,ae,oe,null):t.texImage2D(ee,Y,Ee,be,Oe,0,ae,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),We(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,ie.__webglTexture,0,Se(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,ie.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(A,S,W){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const Z=S.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,Y=M(S.stencilBuffer,ee),ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Se(S);We(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Y,S.width,S.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Y,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Y,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,A)}else{const Z=S.textures;for(let ee=0;ee<Z.length;ee++){const Y=Z[ee],ae=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),Ee=w(Y.internalFormat,ae,oe,Y.colorSpace),Ie=Se(S);W&&We(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Ee,S.width,S.height):We(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Ee,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const ee=Z.__webglTexture,Y=Se(S);if(S.depthTexture.format===Hi)We(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Gi)We(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function le(A){const S=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?Ce(S.__webglFramebuffer[0],A):Ce(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),De(S.__webglDepthbuffer[Z],A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),De(S.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(A,S,W){const Z=i.get(A);S!==void 0&&de(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&le(A)}function pe(A){const S=A.texture,W=i.get(A),Z=i.get(S);A.addEventListener("dispose",R);const ee=A.textures,Y=A.isWebGLCubeRenderTarget===!0,ae=ee.length>1;if(ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),Y){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)W.__webglFramebuffer[oe][Ee]=n.createFramebuffer()}else W.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)W.__webglFramebuffer[oe]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ae)for(let oe=0,Ee=ee.length;oe<Ee;oe++){const Ie=i.get(ee[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&We(A)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const Ee=ee[oe];W.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[oe]);const Ie=s.convert(Ee.format,Ee.colorSpace),ie=s.convert(Ee.type),be=w(Ee.internalFormat,Ie,ie,Ee.colorSpace,A.isXRRenderTarget===!0),Oe=Se(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,be,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,W.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),De(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(n.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)de(W.__webglFramebuffer[oe][Ee],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else de(W.__webglFramebuffer[oe],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let oe=0,Ee=ee.length;oe<Ee;oe++){const Ie=ee[oe],ie=i.get(Ie);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Re(n.TEXTURE_2D,Ie),de(W.__webglFramebuffer,A,Ie,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ie)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),Re(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)de(W.__webglFramebuffer[Ee],A,S,n.COLOR_ATTACHMENT0,oe,Ee);else de(W.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,oe,0);m(S)&&f(oe),t.unbindTexture()}A.depthBuffer&&le(A)}function C(A){const S=A.textures;for(let W=0,Z=S.length;W<Z;W++){const ee=S[W];if(m(ee)){const Y=T(A),ae=i.get(ee).__webglTexture;t.bindTexture(Y,ae),f(Y),t.unbindTexture()}}}const He=[],Te=[];function Be(A){if(A.samples>0){if(We(A)===!1){const S=A.textures,W=A.width,Z=A.height;let ee=n.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(A),oe=S.length>1;if(oe)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Ee=A.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);const ie=i.get(S[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,ee,n.NEAREST),c===!0&&(He.length=0,Te.length=0,He.push(n.COLOR_ATTACHMENT0+Ie),A.depthBuffer&&A.resolveDepthBuffer===!1&&(He.push(Y),Te.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);const ie=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Se(A){return Math.min(r.maxSamples,A.samples)}function We(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function Ve(A,S){const W=A.colorSpace,Z=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Si&&W!==bn&&(Je.getTransfer(W)===rt?(Z!==Ct||ee!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=_e,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=de,this.useMultisampledRTT=We}function d0(n,e){function t(i,r=bn){let s;const o=Je.getTransfer(r);if(i===fn)return n.UNSIGNED_BYTE;if(i===Uo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$c)return n.BYTE;if(i===Yc)return n.SHORT;if(i===Vi)return n.UNSIGNED_SHORT;if(i===Lo)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===zt)return n.FLOAT;if(i===Xi)return n.HALF_FLOAT;if(i===Zc)return n.ALPHA;if(i===Jc)return n.RGB;if(i===Ct)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===Gi)return n.DEPTH_STENCIL;if(i===Qc)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===el)return n.RG;if(i===Bo)return n.RG_INTEGER;if(i===ko)return n.RGBA_INTEGER;if(i===Rr||i===Cr||i===Pr||i===Ir)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zs||i===Js||i===Qs||i===eo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Js)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===to||i===no||i===io)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===to||i===no)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===io)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ro||i===so||i===oo||i===ao||i===co||i===lo||i===uo||i===fo||i===ho||i===po||i===mo||i===go||i===vo||i===_o)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ro)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===so)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ao)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===co)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ho)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_o)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dr||i===xo||i===So)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Dr)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===So)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tl||i===yo||i===Mo||i===Eo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h0=`
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

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new It,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rt({vertexShader:f0,fragmentShader:h0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m0 extends Mi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const _=new p0,m=t.getContextAttributes();let f=null,T=null;const w=[],M=[],O=new et;let I=null;const R=new qt;R.viewport=new dt;const L=new qt;L.viewport=new dt;const y=[R,L],v=new Op;let x=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let H=w[k];return H===void 0&&(H=new bs,w[k]=H),H.getTargetRaySpace()},this.getControllerGrip=function(k){let H=w[k];return H===void 0&&(H=new bs,w[k]=H),H.getGripSpace()},this.getHand=function(k){let H=w[k];return H===void 0&&(H=new bs,w[k]=H),H.getHandSpace()};function P(k){const H=M.indexOf(k.inputSource);if(H===-1)return;const ne=w[H];ne!==void 0&&(ne.update(k.inputSource,k.frame,l||o),ne.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",F);for(let k=0;k<w.length;k++){const H=M[k];H!==null&&(M[k]=null,w[k].disconnect(H))}x=null,b=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,T=null,G.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",D),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Q=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Gi:Hi,Q=m.stencil?zi:jn);const De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Qt(h.textureWidth,h.textureHeight,{format:Ct,type:fn,depthTexture:new ml(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Ct,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),G.setContext(r),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(k){for(let H=0;H<k.removed.length;H++){const ne=k.removed[H],Q=M.indexOf(ne);Q>=0&&(M[Q]=null,w[Q].disconnect(ne))}for(let H=0;H<k.added.length;H++){const ne=k.added[H];let Q=M.indexOf(ne);if(Q===-1){for(let De=0;De<w.length;De++)if(De>=M.length){M.push(ne),Q=De;break}else if(M[De]===null){M[De]=ne,Q=De;break}if(Q===-1)break}const de=w[Q];de&&de.connect(ne)}}const U=new j,$=new j;function z(k,H,ne){U.setFromMatrixPosition(H.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const Q=U.distanceTo($),de=H.projectionMatrix.elements,De=ne.projectionMatrix.elements,Ce=de[14]/(de[10]-1),le=de[14]/(de[10]+1),_e=(de[9]+1)/de[5],pe=(de[9]-1)/de[5],C=(de[8]-1)/de[0],He=(De[8]+1)/De[0],Te=Ce*C,Be=Ce*He,Se=Q/(-C+He),We=Se*-C;if(H.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(We),k.translateZ(Se),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),de[10]===-1)k.projectionMatrix.copy(H.projectionMatrix),k.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const Pe=Ce+Se,Ve=le+Se,tt=Te-We,A=Be+(Q-We),S=_e*le/Ve*Pe,W=pe*le/Ve*Pe;k.projectionMatrix.makePerspective(tt,A,S,W,Pe,Ve),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function K(k,H){H===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(H.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let H=k.near,ne=k.far;_.texture!==null&&(_.depthNear>0&&(H=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),v.near=L.near=R.near=H,v.far=L.far=R.far=ne,(x!==v.near||b!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,b=v.far),R.layers.mask=k.layers.mask|2,L.layers.mask=k.layers.mask|4,v.layers.mask=R.layers.mask|L.layers.mask;const Q=k.parent,de=v.cameras;K(v,Q);for(let De=0;De<de.length;De++)K(de[De],Q);de.length===2?z(v,R,L):v.projectionMatrix.copy(R.projectionMatrix),re(k,v,Q)};function re(k,H,ne){ne===null?k.matrix.copy(H.matrixWorld):(k.matrix.copy(ne.matrixWorld),k.matrix.invert(),k.matrix.multiply(H.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(H.projectionMatrix),k.projectionMatrixInverse.copy(H.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=bo*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(k){c=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ve=null;function Re(k,H){if(u=H.getViewerPose(l||o),g=H,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Q=!1;ne.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let Ce=0;Ce<ne.length;Ce++){const le=ne[Ce];let _e=null;if(p!==null)_e=p.getViewport(le);else{const C=d.getViewSubImage(h,le);_e=C.viewport,Ce===0&&(e.setRenderTargetTextures(T,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(T))}let pe=y[Ce];pe===void 0&&(pe=new qt,pe.layers.enable(Ce),pe.viewport=new dt,y[Ce]=pe),pe.matrix.fromArray(le.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(le.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(_e.x,_e.y,_e.width,_e.height),Ce===0&&(v.matrix.copy(pe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Q===!0&&v.cameras.push(pe)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ce=d.getDepthInformation(ne[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let ne=0;ne<w.length;ne++){const Q=M[ne],de=w[ne];Q!==null&&de!==void 0&&de.update(Q,H,l||o)}ve&&ve(k,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),g=null}const G=new gl;G.setAnimationLoop(Re),this.setAnimationLoop=function(k){ve=k},this.dispose=function(){}}}const On=new hn,g0=new ht;function v0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ul(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,w,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),w=T.envMap,M=T.envMapRotation;w&&(m.envMap.value=w,On.copy(M),On.x*=-1,On.y*=-1,On.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(On)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const M=w.program;i.uniformBlockBinding(T,M)}function l(T,w){let M=r[T.id];M===void 0&&(g(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",m));const O=w.program;i.updateUBOMapping(T,O);const I=e.render.frame;s[T.id]!==I&&(h(T),s[T.id]=I)}function u(T){const w=d();T.__bindingPointIndex=w;const M=n.createBuffer(),O=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,O,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const w=r[T.id],M=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let I=0,R=M.length;I<R;I++){const L=Array.isArray(M[I])?M[I]:[M[I]];for(let y=0,v=L.length;y<v;y++){const x=L[y];if(p(x,I,y,O)===!0){const b=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let D=0;for(let F=0;F<P.length;F++){const U=P[F],$=_(U);typeof U=="number"||typeof U=="boolean"?(x.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,b+D,x.__data)):U.isMatrix3?(x.__data[0]=U.elements[0],x.__data[1]=U.elements[1],x.__data[2]=U.elements[2],x.__data[3]=0,x.__data[4]=U.elements[3],x.__data[5]=U.elements[4],x.__data[6]=U.elements[5],x.__data[7]=0,x.__data[8]=U.elements[6],x.__data[9]=U.elements[7],x.__data[10]=U.elements[8],x.__data[11]=0):(U.toArray(x.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,w,M,O){const I=T.value,R=w+"_"+M;if(O[R]===void 0)return typeof I=="number"||typeof I=="boolean"?O[R]=I:O[R]=I.clone(),!0;{const L=O[R];if(typeof I=="number"||typeof I=="boolean"){if(L!==I)return O[R]=I,!0}else if(L.equals(I)===!1)return L.copy(I),!0}return!1}function g(T){const w=T.uniforms;let M=0;const O=16;for(let R=0,L=w.length;R<L;R++){const y=Array.isArray(w[R])?w[R]:[w[R]];for(let v=0,x=y.length;v<x;v++){const b=y[v],P=Array.isArray(b.value)?b.value:[b.value];for(let D=0,F=P.length;D<F;D++){const U=P[D],$=_(U),z=M%O,K=z%$.boundary,re=z+K;M+=K,re!==0&&O-re<$.storage&&(M+=O-re),b.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,M+=$.storage}}}const I=M%O;return I>0&&(M+=O-I),T.__size=M,T.__cache={},this}function _(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class x0{constructor(e={}){const{canvas:t=np(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let O=!1;this._outputColorSpace=Vt;let I=0,R=0,L=null,y=-1,v=null;const x=new dt,b=new dt;let P=null;const D=new st(0);let F=0,U=t.width,$=t.height,z=1,K=null,re=null;const ve=new dt(0,0,U,$),Re=new dt(0,0,U,$);let G=!1;const k=new pl;let H=!1,ne=!1;const Q=new ht,de=new ht,De=new j,Ce=new dt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function pe(){return L===null?z:1}let C=i;function He(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const B="webgl2";if(C=He(B,E),C===null)throw He(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Te,Be,Se,We,Pe,Ve,tt,A,S,W,Z,ee,Y,ae,oe,Ee,Ie,ie,be,Oe,Ne,me,ke,N;function he(){Te=new Cv(C),Te.init(),me=new d0(C,Te),Be=new Mv(C,Te,e,me),Se=new l0(C,Te),Be.reverseDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),We=new Dv(C),Pe=new K_,Ve=new u0(C,Te,Se,Pe,Be,me,We),tt=new bv(M),A=new Rv(M),S=new Bp(C),ke=new Sv(C,S),W=new Pv(C,S,We,ke),Z=new Lv(C,W,S,We),be=new Nv(C,Be,Ve),Ee=new Ev(Pe),ee=new Y_(M,tt,A,Te,Be,ke,Ee),Y=new v0(M,Pe),ae=new J_,oe=new r0(Te),ie=new xv(M,tt,A,Se,Z,p,c),Ie=new a0(M,Z,Be),N=new _0(C,We,Be,Se),Oe=new yv(C,Te,We),Ne=new Iv(C,Te,We),We.programs=ee.programs,M.capabilities=Be,M.extensions=Te,M.properties=Pe,M.renderLists=ae,M.shadowMap=Ie,M.state=Se,M.info=We}he();const se=new m0(M,C);this.xr=se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(U,$,!1))},this.getSize=function(E){return E.set(U,$)},this.setSize=function(E,B,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,$=B,t.width=Math.floor(E*z),t.height=Math.floor(B*z),X===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(U*z,$*z).floor()},this.setDrawingBufferSize=function(E,B,X){U=E,$=B,z=X,t.width=Math.floor(E*X),t.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,B,X,q){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,B,X,q),Se.viewport(x.copy(ve).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,B,X,q){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,B,X,q),Se.scissor(b.copy(Re).multiplyScalar(z).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(E){Se.setScissorTest(G=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,X=!0){let q=0;if(E){let V=!1;if(L!==null){const ce=L.texture.format;V=ce===ko||ce===Bo||ce===Fo}if(V){const ce=L.texture.type,Me=ce===fn||ce===jn||ce===Vi||ce===zi||ce===Uo||ce===Oo,Ae=ie.getClearColor(),we=ie.getClearAlpha(),ze=Ae.r,Ge=Ae.g,Ue=Ae.b;Me?(g[0]=ze,g[1]=Ge,g[2]=Ue,g[3]=we,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=ze,_[1]=Ge,_[2]=Ue,_[3]=we,C.clearBufferiv(C.COLOR,0,_))}else q|=C.COLOR_BUFFER_BIT}B&&(q|=C.DEPTH_BUFFER_BIT),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ie.dispose(),ae.dispose(),oe.dispose(),Pe.dispose(),tt.dispose(),A.dispose(),Z.dispose(),ke.dispose(),N.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ki),se.removeEventListener("sessionend",Zi),tn.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=We.autoReset,B=Ie.enabled,X=Ie.autoUpdate,q=Ie.needsUpdate,V=Ie.type;he(),We.autoReset=E,Ie.enabled=B,Ie.autoUpdate=X,Ie.needsUpdate=q,Ie.type=V}function J(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ye(E){const B=E.target;B.removeEventListener("dispose",ye),Le(B)}function Le(E){nt(E),Pe.remove(E)}function nt(E){const B=Pe.get(E).programs;B!==void 0&&(B.forEach(function(X){ee.releaseProgram(X)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,q,V,ce){B===null&&(B=le);const Me=V.isMesh&&V.matrixWorld.determinant()<0,Ae=yl(E,B,X,q,V);Se.setMaterial(q,Me);let we=X.index,ze=1;if(q.wireframe===!0){if(we=W.getWireframeAttribute(X),we===void 0)return;ze=2}const Ge=X.drawRange,Ue=X.attributes.position;let je=Ge.start*ze,it=(Ge.start+Ge.count)*ze;ce!==null&&(je=Math.max(je,ce.start*ze),it=Math.min(it,(ce.start+ce.count)*ze)),we!==null?(je=Math.max(je,0),it=Math.min(it,we.count)):Ue!=null&&(je=Math.max(je,0),it=Math.min(it,Ue.count));const ut=it-je;if(ut<0||ut===1/0)return;ke.setup(V,q,Ae,X,we);let at,ot=Oe;if(we!==null&&(at=S.get(we),ot=Ne,ot.setIndex(at)),V.isMesh)q.wireframe===!0?(Se.setLineWidth(q.wireframeLinewidth*pe()),ot.setMode(C.LINES)):ot.setMode(C.TRIANGLES);else if(V.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),Se.setLineWidth(Fe*pe()),V.isLineSegments?ot.setMode(C.LINES):V.isLineLoop?ot.setMode(C.LINE_LOOP):ot.setMode(C.LINE_STRIP)}else V.isPoints?ot.setMode(C.POINTS):V.isSprite&&ot.setMode(C.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)mi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Fe=V._multiDrawStarts,lt=V._multiDrawCounts,Ze=V._multiDrawCount,Dt=we?S.get(we).bytesPerElement:1,Yn=Pe.get(q).currentProgram.getUniforms();for(let Nt=0;Nt<Ze;Nt++)Yn.setValue(C,"_gl_DrawID",Nt),ot.render(Fe[Nt]/Dt,lt[Nt])}else if(V.isInstancedMesh)ot.renderInstances(je,ut,V.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,lt=Math.min(X.instanceCount,Fe);ot.renderInstances(je,ut,lt)}else ot.render(je,ut)};function Ke(E,B,X){E.transparent===!0&&E.side===ln&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,Qi(E,B,X),E.side=Rn,E.needsUpdate=!0,Qi(E,B,X),E.side=ln):Qi(E,B,X)}this.compile=function(E,B,X=null){X===null&&(X=E),f=oe.get(X),f.init(B),w.push(f),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const q=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ce=V.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){const Ae=ce[Me];Ke(Ae,X,V),q.add(Ae)}else Ke(ce,X,V),q.add(ce)}),f=w.pop(),q},this.compileAsync=function(E,B,X=null){const q=this.compile(E,B,X);return new Promise(V=>{function ce(){if(q.forEach(function(Me){Pe.get(Me).currentProgram.isReady()&&q.delete(Me)}),q.size===0){V(E);return}setTimeout(ce,10)}Te.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Mt=null;function _t(E){Mt&&Mt(E)}function Ki(){tn.stop()}function Zi(){tn.start()}const tn=new gl;tn.setAnimationLoop(_t),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(E){Mt=E,se.setAnimationLoop(E),E===null?tn.stop():tn.start()},se.addEventListener("sessionstart",Ki),se.addEventListener("sessionend",Zi),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,B,L),f=oe.get(E,w.length),f.init(B),w.push(f),de.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),k.setFromProjectionMatrix(de),ne=this.localClippingEnabled,H=Ee.init(this.clippingPlanes,ne),m=ae.get(E,T.length),m.init(),T.push(m),se.enabled===!0&&se.isPresenting===!0){const ce=M.xr.getDepthSensingMesh();ce!==null&&Ti(ce,B,-1/0,M.sortObjects)}Ti(E,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(K,re),_e=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,_e&&ie.addToRenderList(m,E),this.info.render.frame++,H===!0&&Ee.beginShadows();const X=f.state.shadowsArray;Ie.render(X,E,B),H===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,V=m.transmissive;if(f.setupLights(),B.isArrayCamera){const ce=B.cameras;if(V.length>0)for(let Me=0,Ae=ce.length;Me<Ae;Me++){const we=ce[Me];Xo(q,V,E,we)}_e&&ie.render(E);for(let Me=0,Ae=ce.length;Me<Ae;Me++){const we=ce[Me];Wo(m,E,we,we.viewport)}}else V.length>0&&Xo(q,V,E,B),_e&&ie.render(E),Wo(m,E,B);L!==null&&R===0&&(Ve.updateMultisampleRenderTarget(L),Ve.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(M,E,B),ke.resetDefaultState(),y=-1,v=null,w.pop(),w.length>0?(f=w[w.length-1],H===!0&&Ee.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ti(E,B,X,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){q&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const Me=Z.update(E),Ae=E.material;Ae.visible&&m.push(E,Me,Ae,X,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const Me=Z.update(E),Ae=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ce.copy(Me.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(Ae)){const we=Me.groups;for(let ze=0,Ge=we.length;ze<Ge;ze++){const Ue=we[ze],je=Ae[Ue.materialIndex];je&&je.visible&&m.push(E,Me,je,X,Ce.z,Ue)}}else Ae.visible&&m.push(E,Me,Ae,X,Ce.z,null)}}const ce=E.children;for(let Me=0,Ae=ce.length;Me<Ae;Me++)Ti(ce[Me],B,X,q)}function Wo(E,B,X,q){const V=E.opaque,ce=E.transmissive,Me=E.transparent;f.setupLightsView(X),H===!0&&Ee.setGlobalState(M.clippingPlanes,X),q&&Se.viewport(x.copy(q)),V.length>0&&Ji(V,B,X),ce.length>0&&Ji(ce,B,X),Me.length>0&&Ji(Me,B,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Xo(E,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Qt(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Xi:fn,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=f.state.transmissionRenderTarget[q.id],Me=q.viewport||x;ce.setSize(Me.z*M.transmissionResolutionScale,Me.w*M.transmissionResolutionScale);const Ae=M.getRenderTarget(),we=M.getActiveCubeFace(),ze=M.getActiveMipmapLevel();M.setRenderTarget(ce),M.getClearColor(D),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),_e&&ie.render(X);const Ge=M.toneMapping;M.toneMapping=wn;const Ue=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),H===!0&&Ee.setGlobalState(M.clippingPlanes,q),Ji(E,X,q),Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce),Te.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,ut=B.length;it<ut;it++){const at=B[it],ot=at.object,Fe=at.geometry,lt=at.material,Ze=at.group;if(lt.side===ln&&ot.layers.test(q.layers)){const Dt=lt.side;lt.side=Pt,lt.needsUpdate=!0,qo(ot,X,q,Fe,lt,Ze),lt.side=Dt,lt.needsUpdate=!0,je=!0}}je===!0&&(Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce))}M.setRenderTarget(Ae,we,ze),M.setClearColor(D,F),Ue!==void 0&&(q.viewport=Ue),M.toneMapping=Ge}function Ji(E,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ce=E.length;V<ce;V++){const Me=E[V],Ae=Me.object,we=Me.geometry,ze=Me.group;let Ge=Me.material;Ge.allowOverride===!0&&q!==null&&(Ge=q),Ae.layers.test(X.layers)&&qo(Ae,B,X,we,Ge,ze)}}function qo(E,B,X,q,V,ce){E.onBeforeRender(M,B,X,q,V,ce),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(M,B,X,q,E,ce),V.transparent===!0&&V.side===ln&&V.forceSinglePass===!1?(V.side=Pt,V.needsUpdate=!0,M.renderBufferDirect(X,B,q,V,E,ce),V.side=Rn,V.needsUpdate=!0,M.renderBufferDirect(X,B,q,V,E,ce),V.side=ln):M.renderBufferDirect(X,B,q,V,E,ce),E.onAfterRender(M,B,X,q,V,ce)}function Qi(E,B,X){B.isScene!==!0&&(B=le);const q=Pe.get(E),V=f.state.lights,ce=f.state.shadowsArray,Me=V.state.version,Ae=ee.getParameters(E,V.state,ce,B,X),we=ee.getProgramCacheKey(Ae);let ze=q.programs;q.environment=E.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(E.isMeshStandardMaterial?A:tt).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",ye),ze=new Map,q.programs=ze);let Ge=ze.get(we);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===Me)return $o(E,Ae),Ge}else Ae.uniforms=ee.getUniforms(E),E.onBeforeCompile(Ae,M),Ge=ee.acquireProgram(Ae,we),ze.set(we,Ge),q.uniforms=Ae.uniforms;const Ue=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=Ee.uniform),$o(E,Ae),q.needsLights=El(E),q.lightsStateVersion=Me,q.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMap.value=V.state.directionalShadowMap,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotShadowMap.value=V.state.spotShadowMap,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMap.value=V.state.pointShadowMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function jo(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Nr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function $o(E,B){const X=Pe.get(E);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function yl(E,B,X,q,V){B.isScene!==!0&&(B=le),Ve.resetTextureUnits();const ce=B.fog,Me=q.isMeshStandardMaterial?B.environment:null,Ae=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Si,we=(q.isMeshStandardMaterial?A:tt).get(q.envMap||Me),ze=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,it=!!X.morphAttributes.color;let ut=wn;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ut=M.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=at!==void 0?at.length:0,Fe=Pe.get(q),lt=f.state.lights;if(H===!0&&(ne===!0||E!==v)){const Et=E===v&&q.id===y;Ee.setState(q,E,Et)}let Ze=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==lt.state.version||Fe.outputColorSpace!==Ae||V.isBatchedMesh&&Fe.batching===!1||!V.isBatchedMesh&&Fe.batching===!0||V.isBatchedMesh&&Fe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Fe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Fe.instancing===!1||!V.isInstancedMesh&&Fe.instancing===!0||V.isSkinnedMesh&&Fe.skinning===!1||!V.isSkinnedMesh&&Fe.skinning===!0||V.isInstancedMesh&&Fe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Fe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Fe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Fe.instancingMorph===!1&&V.morphTexture!==null||Fe.envMap!==we||q.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ee.numPlanes||Fe.numIntersection!==Ee.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Ge||Fe.morphTargets!==Ue||Fe.morphNormals!==je||Fe.morphColors!==it||Fe.toneMapping!==ut||Fe.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Fe.__version=q.version);let Dt=Fe.currentProgram;Ze===!0&&(Dt=Qi(q,B,V));let Yn=!1,Nt=!1,wi=!1;const ct=Dt.getUniforms(),Ft=Fe.uniforms;if(Se.useProgram(Dt.program)&&(Yn=!0,Nt=!0,wi=!0),q.id!==y&&(y=q.id,Nt=!0),Yn||v!==E){Se.buffers.depth.getReversed()?(Q.copy(E.projectionMatrix),rp(Q),sp(Q),ct.setValue(C,"projectionMatrix",Q)):ct.setValue(C,"projectionMatrix",E.projectionMatrix),ct.setValue(C,"viewMatrix",E.matrixWorldInverse);const Tt=ct.map.cameraPosition;Tt!==void 0&&Tt.setValue(C,De.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&ct.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ct.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Nt=!0,wi=!0)}if(V.isSkinnedMesh){ct.setOptional(C,V,"bindMatrix"),ct.setOptional(C,V,"bindMatrixInverse");const Et=V.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ct.setValue(C,"boneTexture",Et.boneTexture,Ve))}V.isBatchedMesh&&(ct.setOptional(C,V,"batchingTexture"),ct.setValue(C,"batchingTexture",V._matricesTexture,Ve),ct.setOptional(C,V,"batchingIdTexture"),ct.setValue(C,"batchingIdTexture",V._indirectTexture,Ve),ct.setOptional(C,V,"batchingColorTexture"),V._colorsTexture!==null&&ct.setValue(C,"batchingColorTexture",V._colorsTexture,Ve));const Bt=X.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&be.update(V,X,Dt),(Nt||Fe.receiveShadow!==V.receiveShadow)&&(Fe.receiveShadow=V.receiveShadow,ct.setValue(C,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ft.envMap.value=we,Ft.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Ft.envMapIntensity.value=B.environmentIntensity),Nt&&(ct.setValue(C,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&Ml(Ft,wi),ce&&q.fog===!0&&Y.refreshFogUniforms(Ft,ce),Y.refreshMaterialUniforms(Ft,q,z,$,f.state.transmissionRenderTarget[E.id]),Nr.upload(C,jo(Fe),Ft,Ve)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nr.upload(C,jo(Fe),Ft,Ve),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ct.setValue(C,"center",V.center),ct.setValue(C,"modelViewMatrix",V.modelViewMatrix),ct.setValue(C,"normalMatrix",V.normalMatrix),ct.setValue(C,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Et=q.uniformsGroups;for(let Tt=0,Gr=Et.length;Tt<Gr;Tt++){const Cn=Et[Tt];N.update(Cn,Dt),N.bind(Cn,Dt)}}return Dt}function Ml(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function El(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,B,X){const q=Pe.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Pe.get(E.texture).__webglTexture=B,Pe.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const X=Pe.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const bl=C.createFramebuffer();this.setRenderTarget=function(E,B=0,X=0){L=E,I=B,R=X;let q=!0,V=null,ce=!1,Me=!1;if(E){const we=Pe.get(E);if(we.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(we.__webglFramebuffer===void 0)Ve.setupRenderTarget(E);else if(we.__hasExternalTextures)Ve.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(we.__boundDepthTexture!==Ue){if(Ue!==null&&Pe.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);const Ge=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?V=Ge[B][X]:V=Ge[B],ce=!0):E.samples>0&&Ve.useMultisampledRTT(E)===!1?V=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?V=Ge[X]:V=Ge,x.copy(E.viewport),b.copy(E.scissor),P=E.scissorTest}else x.copy(ve).multiplyScalar(z).floor(),b.copy(Re).multiplyScalar(z).floor(),P=G;if(X!==0&&(V=bl),Se.bindFramebuffer(C.FRAMEBUFFER,V)&&q&&Se.drawBuffers(E,V),Se.viewport(x),Se.scissor(b),Se.setScissorTest(P),ce){const we=Pe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,X)}else if(Me){const we=Pe.get(E.texture),ze=B;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,we.__webglTexture,X,ze)}else if(E!==null&&X!==0){const we=Pe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,we.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(E,B,X,q,V,ce,Me,Ae=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){Se.bindFramebuffer(C.FRAMEBUFFER,we);try{const ze=E.textures[Ae],Ge=ze.format,Ue=ze.type;if(!Be.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&X>=0&&X<=E.height-V&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),C.readPixels(B,X,q,V,me.convert(Ge),me.convert(Ue),ce))}finally{const ze=L!==null?Pe.get(L).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,B,X,q,V,ce,Me,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(B>=0&&B<=E.width-q&&X>=0&&X<=E.height-V){Se.bindFramebuffer(C.FRAMEBUFFER,we);const ze=E.textures[Ae],Ge=ze.format,Ue=ze.type;if(!Be.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,je),C.bufferData(C.PIXEL_PACK_BUFFER,ce.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),C.readPixels(B,X,q,V,me.convert(Ge),me.convert(Ue),0);const it=L!==null?Pe.get(L).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,it);const ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ip(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ce),C.deleteBuffer(je),C.deleteSync(ut),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,X=0){const q=Math.pow(2,-X),V=Math.floor(E.image.width*q),ce=Math.floor(E.image.height*q),Me=B!==null?B.x:0,Ae=B!==null?B.y:0;Ve.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Me,Ae,V,ce),Se.unbindTexture()};const Tl=C.createFramebuffer(),wl=C.createFramebuffer();this.copyTextureToTexture=function(E,B,X=null,q=null,V=0,ce=null){ce===null&&(V!==0?(mi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=V,V=0):ce=0);let Me,Ae,we,ze,Ge,Ue,je,it,ut;const at=E.isCompressedTexture?E.mipmaps[ce]:E.image;if(X!==null)Me=X.max.x-X.min.x,Ae=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,ze=X.min.x,Ge=X.min.y,Ue=X.isBox3?X.min.z:0;else{const Bt=Math.pow(2,-V);Me=Math.floor(at.width*Bt),Ae=Math.floor(at.height*Bt),E.isDataArrayTexture?we=at.depth:E.isData3DTexture?we=Math.floor(at.depth*Bt):we=1,ze=0,Ge=0,Ue=0}q!==null?(je=q.x,it=q.y,ut=q.z):(je=0,it=0,ut=0);const ot=me.convert(B.format),Fe=me.convert(B.type);let lt;B.isData3DTexture?(Ve.setTexture3D(B,0),lt=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ve.setTexture2DArray(B,0),lt=C.TEXTURE_2D_ARRAY):(Ve.setTexture2D(B,0),lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);const Ze=C.getParameter(C.UNPACK_ROW_LENGTH),Dt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Yn=C.getParameter(C.UNPACK_SKIP_PIXELS),Nt=C.getParameter(C.UNPACK_SKIP_ROWS),wi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,at.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ue);const ct=E.isDataArrayTexture||E.isData3DTexture,Ft=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Bt=Pe.get(E),Et=Pe.get(B),Tt=Pe.get(Bt.__renderTarget),Gr=Pe.get(Et.__renderTarget);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Tt.__webglFramebuffer),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let Cn=0;Cn<we;Cn++)ct&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.get(E).__webglTexture,V,Ue+Cn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.get(B).__webglTexture,ce,ut+Cn)),C.blitFramebuffer(ze,Ge,Me,Ae,je,it,Me,Ae,C.DEPTH_BUFFER_BIT,C.NEAREST);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||Pe.has(E)){const Bt=Pe.get(E),Et=Pe.get(B);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Tl),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,wl);for(let Tt=0;Tt<we;Tt++)ct?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,V,Ue+Tt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,V),Ft?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,ce,ut+Tt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Et.__webglTexture,ce),V!==0?C.blitFramebuffer(ze,Ge,Me,Ae,je,it,Me,Ae,C.COLOR_BUFFER_BIT,C.NEAREST):Ft?C.copyTexSubImage3D(lt,ce,je,it,ut+Tt,ze,Ge,Me,Ae):C.copyTexSubImage2D(lt,ce,je,it,ze,Ge,Me,Ae);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ft?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(lt,ce,je,it,ut,Me,Ae,we,ot,Fe,at.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(lt,ce,je,it,ut,Me,Ae,we,ot,at.data):C.texSubImage3D(lt,ce,je,it,ut,Me,Ae,we,ot,Fe,at):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ce,je,it,Me,Ae,ot,Fe,at.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ce,je,it,at.width,at.height,ot,at.data):C.texSubImage2D(C.TEXTURE_2D,ce,je,it,Me,Ae,ot,Fe,at);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Dt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Yn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wi),ce===0&&B.generateMipmaps&&C.generateMipmap(lt),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,B,X=null,q=null,V=0){return mi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,X,q,V)},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&Ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,Se.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function S0(n,e){if(e===0)return{edges:[]};const t=new Set,i=new Set;for(let p=0;p<e;p++){const g=p*4,_=n[g],m=n[g+1],f=n[g+2],T=n[g+3];t.add(_),t.add(_+f),i.add(m),i.add(m+T)}const r=Array.from(t).sort((p,g)=>p-g),s=Array.from(i).sort((p,g)=>p-g);if(r.length===0||s.length===0)return{edges:[]};const o=r[0],a=r[r.length-1],c=s[0],l=s[s.length-1],u=new Set,d=[],h=(p,g)=>{const _=p.x<g.x||p.x===g.x&&p.y<=g.y?`${p.x},${p.y}|${g.x},${g.y}`:`${g.x},${g.y}|${p.x},${p.y}`;u.has(_)||(u.add(_),d.push({start:[p.x,p.y],end:[g.x,g.y]}))};return r.forEach(p=>{h({x:p,y:c},{x:p,y:l})}),s.forEach(p=>{h({x:o,y:p},{x:a,y:p})}),{edges:d}}function y0(n,e){if(e===0)return{edges:[]};let t=1,i=0;const r=[];for(let g=0;g<e;g++){const _=g*4,m=n[_],f=n[_+1],T=n[_+2],w=n[_+3];r.push({x:m,y:f,width:T,height:w}),t=Math.min(t,m),i=Math.max(i,m+T)}r.sort((g,_)=>g.y-_.y);const s=new Set,o=(g,_)=>s.add(`${g},${_}`);r.forEach(g=>{const _=g.y+g.height;o(t,_),o(i,_)});const a=r[0].y;o(t,a),o(i,a);const c=Array.from(s).map(g=>{const[_,m]=g.split(",").map(Number);return{x:_,y:m}}).sort((g,_)=>g.y!==_.y?g.y-_.y:g.x-_.x),l=[],u=(g,_)=>{l.push({start:[g.x,g.y],end:[_.x,_.y]})},d=c.filter(g=>Math.abs(g.x-t)<1e-6);for(let g=0;g<d.length-1;g++)u(d[g],d[g+1]);const h=c.filter(g=>Math.abs(g.x-i)<1e-6);for(let g=0;g<h.length-1;g++)u(h[g],h[g+1]);return[...new Set(c.map(g=>g.y))].sort((g,_)=>g-_).forEach(g=>{const _=d.find(f=>Math.abs(f.y-g)<1e-6),m=h.find(f=>Math.abs(f.y-g)<1e-6);_&&m&&u(_,m)}),{edges:l}}const di=`
  // Fullscreen quad vertex shader.
  // - Passes through the built-in attribute 'uv' into 'vUv'.
  // - Produces clip-space position from the built-in attribute 'position'.
  varying vec2 vUv;

  void main() {
    vUv = uv;                     // UV in [0,1]^2
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,M0=`
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
`,E0=`
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
`,b0=`
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
`,T0=`
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
`;class w0{constructor(e){this.renderer=e,this.guideTexture=new Qt(es,es,{format:Ct,type:zt,minFilter:yt,magFilter:yt}),this.simulationTextures=[0,1].map(()=>new Qt(ui,ui,{format:Ct,type:zt,minFilter:yt,magFilter:yt})),this.tempTexture=new Qt(ui,ui,{format:Ct,type:zt,minFilter:yt,magFilter:yt}),this.guideMaterial=new Rt({vertexShader:di,fragmentShader:M0,uniforms:{uEdgeCount:{value:0},uEdges:{value:new Float32Array((An*4+20)*4)},uLineWidth:{value:.008}}}),this.simulationMaterial=new Rt({vertexShader:di,fragmentShader:E0,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uPrevState:{value:null},uDeltaTime:{value:.016},uSpeed:{value:1},uAttenuation:{value:1},uEnergyConservation:{value:1},uRailEpsilon:{value:0},uTTLDecayRate:{value:.5}}}),this.injectionMaterial=new Rt({vertexShader:di,fragmentShader:b0,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uCurrentState:{value:null},uInjectionPoint:{value:new et(.5,.5)},uInjectionRadius:{value:.1},uInjectionEnergy:{value:2},uHue:{value:0},uInjectionEpsilon:{value:0}}}),this.quad=new $t(new Ei(2,2),this.guideMaterial),this.scene=new hl,this.scene.add(this.quad),this.camera=new Ho(-1,1,1,-1,0,1),this.clearBuffers()}renderer;guideTexture;simulationTextures;tempTexture;guideMaterial;simulationMaterial;injectionMaterial;quad;scene;camera;current=0;isInitialized=!1;clearBuffers(){const e=new Rt({vertexShader:di,fragmentShader:"void main(){gl_FragColor=vec4(0.0);}"});this.quad.material=e,[...this.simulationTextures,this.tempTexture].forEach(t=>{this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}),this.renderer.setRenderTarget(null),e.dispose()}updateGuideTexture(e){const t=Math.min(e.length,An*4+20),i=this.guideMaterial.uniforms.uEdges.value;e.slice(0,t).forEach((r,s)=>i.set([...r.start,...r.end],s*4)),this.guideMaterial.uniforms.uEdgeCount.value=t,this.quad.material=this.guideMaterial,this.renderer.setRenderTarget(this.guideTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.isInitialized=!0}simulationStep(e){if(!this.isInitialized)return;const t=this.current,i=1-t;this.simulationMaterial.uniforms.uPrevState.value=this.simulationTextures[t].texture,this.simulationMaterial.uniforms.uDeltaTime.value=e,this.quad.material=this.simulationMaterial,this.renderer.setRenderTarget(this.simulationTextures[i]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.current=i}injectPulse(e,t,i,r=2){if(!this.isInitialized)return;this.injectionMaterial.uniforms.uCurrentState.value=this.simulationTextures[this.current].texture,this.injectionMaterial.uniforms.uInjectionPoint.value.set(e,t),this.injectionMaterial.uniforms.uInjectionEnergy.value=r,this.injectionMaterial.uniforms.uHue.value=i,this.quad.material=this.injectionMaterial,this.renderer.setRenderTarget(this.tempTexture),this.renderer.render(this.scene,this.camera);const s=new Rt({vertexShader:di,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){gl_FragColor=texture2D(t,vUv);} ",uniforms:{t:{value:this.tempTexture.texture}}});this.quad.material=s,this.renderer.setRenderTarget(this.simulationTextures[this.current]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),s.dispose()}getCurrentTexture(){return this.simulationTextures[this.current].texture}getPreviousSimulationTexture(){return this.simulationTextures[1-this.current].texture}getTempTexture(){return this.tempTexture.texture}getGuideTexture(){return this.guideTexture.texture}getTextureInfo(){return{guideResolution:es,simResolution:ui,currentBuffer:this.current,isInitialized:this.isInitialized,edgeCount:this.guideMaterial.uniforms.uEdgeCount.value}}dispose(){this.guideTexture.dispose(),this.tempTexture.dispose(),this.simulationTextures.forEach(e=>e.dispose()),this.guideMaterial.dispose(),this.simulationMaterial.dispose(),this.injectionMaterial.dispose()}}const At=n=>{const e=pn.c(53);if(e[0]!=="848f8570e46a6e13797257dc43f48184cf6b743b27296ae395e834c9f986360e"){for(let G=0;G<53;G+=1)e[G]=Symbol.for("react.memo_cache_sentinel");e[0]="848f8570e46a6e13797257dc43f48184cf6b743b27296ae395e834c9f986360e"}const{label:t,value:i,min:r,max:s,step:o,onChange:a}=n;let c;e[1]!==i?(c=i.toString(),e[1]=i,e[2]=c):c=e[2];const[l,u]=fe.useState(c),[d,h]=fe.useState(!1),p=fe.useRef(null);let g,_;e[3]!==d||e[4]!==i?(g=()=>{d||u(i.toString())},_=[i,d],e[3]=d,e[4]=i,e[5]=g,e[6]=_):(g=e[5],_=e[6]),fe.useEffect(g,_);let m;e[7]!==l||e[8]!==a||e[9]!==i?(m=()=>{const G=parseFloat(l);isNaN(G)?u(i.toString()):a(G)},e[7]=l,e[8]=a,e[9]=i,e[10]=m):m=e[10];const f=m;let T;e[11]!==i?(T=()=>{h(!0),u(i.toString())},e[11]=i,e[12]=T):T=e[12];const w=T;let M;e[13]!==f?(M=()=>{h(!1),f()},e[13]=f,e[14]=M):M=e[14];const O=M;let I;e[15]!==f||e[16]!==i?(I=G=>{G.key==="Enter"?(f(),p.current?.blur()):G.key==="Escape"&&(u(i.toString()),h(!1),p.current?.blur())},e[15]=f,e[16]=i,e[17]=I):I=e[17];const R=I;let L,y;e[18]===Symbol.for("react.memo_cache_sentinel")?(L={marginBottom:8},y={display:"flex",justifyContent:"space-between",fontSize:10,color:"#ccc",marginBottom:2},e[18]=L,e[19]=y):(L=e[18],y=e[19]);let v;e[20]!==t?(v=ue.jsxDEV("span",{children:t},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:153,columnNumber:11},void 0),e[20]=t,e[21]=v):v=e[21];let x;e[22]!==o||e[23]!==i?(x=i.toFixed(o<.01?3:2),e[22]=o,e[23]=i,e[24]=x):x=e[24];let b;e[25]!==x?(b=ue.jsxDEV("span",{children:x},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:170,columnNumber:11},void 0),e[25]=x,e[26]=b):b=e[26];let P;e[27]!==v||e[28]!==b?(P=ue.jsxDEV("div",{style:y,children:[v,b]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:178,columnNumber:11},void 0),e[27]=v,e[28]=b,e[29]=P):P=e[29];let D;e[30]!==a?(D=G=>a(parseFloat(G.target.value)),e[30]=a,e[31]=D):D=e[31];let F;e[32]===Symbol.for("react.memo_cache_sentinel")?(F={width:"100%",marginBottom:4},e[32]=F):F=e[32];let U;e[33]!==s||e[34]!==r||e[35]!==o||e[36]!==D||e[37]!==i?(U=ue.jsxDEV("input",{type:"range",min:r,max:s,step:o,value:i,onChange:D,style:F},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:205,columnNumber:11},void 0),e[33]=s,e[34]=r,e[35]=o,e[36]=D,e[37]=i,e[38]=U):U=e[38];let $;e[39]===Symbol.for("react.memo_cache_sentinel")?($=G=>u(G.target.value),e[39]=$):$=e[39];const z=d?"#333":"#222",K=`1px solid ${d?"#666":"#444"}`;let re;e[40]!==z||e[41]!==K?(re={width:"100%",background:z,color:"#fff",border:K,borderRadius:3,padding:"4px 6px",fontSize:11,boxSizing:"border-box"},e[40]=z,e[41]=K,e[42]=re):re=e[42];let ve;e[43]!==O||e[44]!==w||e[45]!==R||e[46]!==l||e[47]!==re?(ve=ue.jsxDEV("input",{ref:p,type:"text",value:l,onFocus:w,onChange:$,onBlur:O,onKeyDown:R,placeholder:"Enter value...",style:re},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:244,columnNumber:11},void 0),e[43]=O,e[44]=w,e[45]=R,e[46]=l,e[47]=re,e[48]=ve):ve=e[48];let Re;return e[49]!==P||e[50]!==U||e[51]!==ve?(Re=ue.jsxDEV("div",{style:L,children:[P,U,ve]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:256,columnNumber:11},void 0),e[49]=P,e[50]=U,e[51]=ve,e[52]=Re):Re=e[52],Re},A0=({scopeId:n="scope",gpuSimRef:e,vizUniformsRef:t,nodeCount:i,position:r="top-right",isPaused:s=!1,setPaused:o,onNudgeRender:a,onClose:c})=>{const[l,u]=fe.useState(()=>{switch(r){case"top-left":return{x:20,y:20};case"top-right":return{x:window.innerWidth-240,y:20};case"bottom-left":return{x:20,y:window.innerHeight-400};case"bottom-right":return{x:window.innerWidth-240,y:window.innerHeight-400};default:return{x:20,y:20}}}),d=fe.useRef(!1),h=fe.useRef({x:0,y:0}),p=y=>{d.current=!0,h.current={x:y.clientX-l.x,y:y.clientY-l.y}},g=fe.useCallback(y=>{d.current&&u({x:y.clientX-h.current.x,y:y.clientY-h.current.y})},[]),_=fe.useCallback(()=>{d.current=!1},[]);fe.useEffect(()=>{if(d.current)return document.addEventListener("mousemove",g),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",_)}},[g,_,d.current]);const[m,f]=fe.useState(!1),[T,w]=fe.useState({speed:Kt.speed,attenuation:Kt.attenuation,lineWidth:.008,injectionRadius:Kt.injectionRadius,ttlLifetime:2,coreWidthPx:2,bladeWidthPx:10,energyScale:1,gamma:1,debugView:0,overlayVectors:!1,vectorSpacingPx:16,vectorLengthPx:8,vectorThicknessPx:1.25,showCenterline:!1,centerlineWidthPx:1.25,intensityCutoff:.01}),M=(y,v)=>{w(P=>({...P,[y]:v}));const x=e.current,b=t.current;if(!(!x||!b)){switch(y){case"speed":x.simulationMaterial.uniforms.uSpeed.value=v;break;case"attenuation":x.simulationMaterial.uniforms.uAttenuation.value=v;break;case"lineWidth":x.guideMaterial.uniforms.uLineWidth.value=v;break;case"injectionRadius":x.injectionMaterial.uniforms.uInjectionRadius.value=v;break;case"ttlLifetime":{const D=1/Math.max(.1,v);x.simulationMaterial.uniforms.uTTLDecayRate&&(x.simulationMaterial.uniforms.uTTLDecayRate.value=D);break}case"coreWidthPx":b.uCoreWidthPx&&(b.uCoreWidthPx.value=v);break;case"bladeWidthPx":b.uBladeWidthPx&&(b.uBladeWidthPx.value=v);break;case"energyScale":b.uEnergyScale&&(b.uEnergyScale.value=v);break;case"gamma":b.uGamma&&(b.uGamma.value=v);break;case"intensityCutoff":b.uIntensityCutoff&&(b.uIntensityCutoff.value=v);break;case"debugView":b.uDebugView&&(b.uDebugView.value=v);break;case"overlayVectors":b.uOverlayVectors&&(b.uOverlayVectors.value=!!v);break;case"vectorSpacingPx":b.uVectorSpacingPx&&(b.uVectorSpacingPx.value=v);break;case"vectorLengthPx":b.uVectorLengthPx&&(b.uVectorLengthPx.value=v);break;case"vectorThicknessPx":b.uVectorThicknessPx&&(b.uVectorThicknessPx.value=v);break;case"showCenterline":b.uShowCenterline&&(b.uShowCenterline.value=!!v);break;case"centerlineWidthPx":b.uCenterlineWidthPx&&(b.uCenterlineWidthPx.value=v);break}a?.()}};fe.useEffect(()=>{const y=e.current,v=t.current;!y||!v||w(x=>({...x,speed:y.simulationMaterial.uniforms.uSpeed?.value??x.speed,attenuation:y.simulationMaterial.uniforms.uAttenuation?.value??x.attenuation,lineWidth:y.guideMaterial.uniforms.uLineWidth?.value??x.lineWidth,injectionRadius:y.injectionMaterial.uniforms.uInjectionRadius?.value??x.injectionRadius,ttlLifetime:(y.simulationMaterial.uniforms.uTTLDecayRate?.value??0)>0?1/(y.simulationMaterial.uniforms.uTTLDecayRate?.value??1):x.ttlLifetime,coreWidthPx:v.uCoreWidthPx?.value??x.coreWidthPx,bladeWidthPx:v.uBladeWidthPx?.value??x.bladeWidthPx,energyScale:v.uEnergyScale?.value??x.energyScale,gamma:v.uGamma?.value??x.gamma,debugView:v.uDebugView?.value??x.debugView,overlayVectors:!!(v.uOverlayVectors?.value??x.overlayVectors),vectorSpacingPx:v.uVectorSpacingPx?.value??x.vectorSpacingPx,vectorLengthPx:v.uVectorLengthPx?.value??x.vectorLengthPx,vectorThicknessPx:v.uVectorThicknessPx?.value??x.vectorThicknessPx,showCenterline:!!(v.uShowCenterline?.value??x.showCenterline),centerlineWidthPx:v.uCenterlineWidthPx?.value??x.centerlineWidthPx,intensityCutoff:v.uIntensityCutoff?.value??x.intensityCutoff}))},[]);const[O,I]=fe.useState({fps:0,frame:0});fe.useEffect(()=>{let y=0,v=0,x=performance.now();const b=()=>{const P=performance.now();if(y+=P-x,v+=1,v>=60){const D=y/v;I({fps:Math.round(1e3/D),frame:parseFloat(D.toFixed(2))}),y=0,v=0}x=P,requestAnimationFrame(b)};b()},[]);const R=y=>{switch(y){case"default":M("speed",Kt.speed),M("attenuation",Kt.attenuation),M("lineWidth",.008),M("injectionRadius",Kt.injectionRadius),M("ttlLifetime",2),M("coreWidthPx",2),M("bladeWidthPx",10),M("energyScale",1),M("gamma",1),M("debugView",0),M("overlayVectors",!1),M("showCenterline",!1);break;case"fast":M("speed",1.5),M("attenuation",.5),M("ttlLifetime",1);break;case"slow":M("speed",.3),M("attenuation",2.5),M("ttlLifetime",4);break;case"intense":M("coreWidthPx",Math.max(1,T.coreWidthPx*1.5)),M("bladeWidthPx",Math.max(T.coreWidthPx+2,T.bladeWidthPx*1.5)),M("energyScale",Math.max(1,T.energyScale*1.3));break;case"subtle":M("attenuation",2),M("coreWidthPx",Math.max(1,T.coreWidthPx*.7)),M("bladeWidthPx",Math.max(T.coreWidthPx+2,T.bladeWidthPx*.8)),M("ttlLifetime",3);break}},L=(y,v)=>ue.jsxDEV("button",{style:{padding:"2px 6px",fontSize:9,background:"#444",color:"#fff",border:"1px solid #666",borderRadius:3,marginRight:3,marginBottom:3},onClick:()=>R(v),onMouseEnter:x=>x.currentTarget.style.background="#555",onMouseLeave:x=>x.currentTarget.style.background="#444",children:y},v,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:557,columnNumber:51},void 0);return ue.jsxDEV("div",{style:{position:"fixed",left:l.x,top:l.y,width:220,background:"rgba(20,20,20,0.95)",border:"1px solid #444",borderRadius:6,color:"#fff",fontFamily:"monospace",fontSize:11,zIndex:1e4,pointerEvents:"auto",maxHeight:"calc(100vh - 40px)",overflowY:"auto"},children:[ue.jsxDEV("div",{onMouseDown:p,style:{padding:"6px 10px",background:"#333",cursor:"move",borderRadius:"6px 6px 0 0",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #444",userSelect:"none"},children:[ue.jsxDEV("span",{style:{fontWeight:"bold",fontSize:10},children:[n," debug"]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:599,columnNumber:17},void 0),ue.jsxDEV("div",{style:{display:"flex",gap:4},children:[ue.jsxDEV("button",{onClick:()=>o?.(!s),title:s?"Resume simulation":"Pause simulation",style:{background:"none",border:"1px solid #666",color:"#fff",fontSize:10,borderRadius:3,padding:"0 6px",cursor:"pointer"},children:s?"▶":"⏸"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:607,columnNumber:21},void 0),c&&ue.jsxDEV("button",{onClick:c,style:{background:"none",border:"none",color:"#f44",fontSize:12,cursor:"pointer"},children:"×"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:618,columnNumber:33},void 0),ue.jsxDEV("button",{onClick:()=>f(y=>!y),style:{background:"none",border:"none",color:"#fff",fontSize:12},children:m?"▼":"▲"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:627,columnNumber:21},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:603,columnNumber:17},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:588,columnNumber:13},void 0),!m&&ue.jsxDEV("div",{style:{padding:10},children:[ue.jsxDEV("div",{style:{marginBottom:12},children:ue.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,fontSize:9},children:[ue.jsxDEV("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[ue.jsxDEV("div",{children:"FPS"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:657,columnNumber:33},void 0),ue.jsxDEV("div",{style:{color:O.fps<30?"#f44":"#4f4"},children:O.fps},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:658,columnNumber:33},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:651,columnNumber:29},void 0),ue.jsxDEV("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[ue.jsxDEV("div",{children:"Nodes"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:668,columnNumber:33},void 0),ue.jsxDEV("div",{children:i},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:669,columnNumber:33},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:662,columnNumber:29},void 0),ue.jsxDEV("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[ue.jsxDEV("div",{children:"Res"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:677,columnNumber:33},void 0),ue.jsxDEV("div",{children:ui},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:678,columnNumber:33},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:671,columnNumber:29},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:645,columnNumber:25},void 0)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:642,columnNumber:21},void 0),ue.jsxDEV("div",{style:{marginBottom:12},children:[ue.jsxDEV("div",{style:{color:"#aaa",fontSize:10,marginBottom:4},children:"Presets"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:687,columnNumber:25},void 0),L("Def","default"),L("Fast","fast"),L("Slow","slow"),L("Int","intense"),L("Sub","subtle")]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:684,columnNumber:21},void 0),ue.jsxDEV("div",{style:{marginBottom:12},children:[ue.jsxDEV("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Simulation"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:703,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Speed",value:T.speed,min:.1,max:2,step:.1,onChange:y=>M("speed",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:711,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Attenuation",value:T.attenuation,min:.1,max:5,step:.1,onChange:y=>M("attenuation",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:712,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Rail width",value:T.lineWidth,min:.002,max:.05,step:.001,onChange:y=>M("lineWidth",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:713,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Fade lifetime (s)",value:T.ttlLifetime,min:.2,max:10,step:.1,onChange:y=>M("ttlLifetime",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:714,columnNumber:25},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:700,columnNumber:21},void 0),ue.jsxDEV("div",{style:{marginBottom:12},children:[ue.jsxDEV("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Injection"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:721,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Radius",value:T.injectionRadius,min:.01,max:.3,step:.01,onChange:y=>M("injectionRadius",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:729,columnNumber:25},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:718,columnNumber:21},void 0),ue.jsxDEV("div",{style:{marginBottom:12},children:[ue.jsxDEV("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Visualization"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:736,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Core width (px)",value:T.coreWidthPx,min:1,max:40,step:1,onChange:y=>M("coreWidthPx",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:744,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Blade width (px)",value:T.bladeWidthPx,min:T.coreWidthPx+2,max:200,step:1,onChange:y=>M("bladeWidthPx",Math.max(y,T.coreWidthPx+2))},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:745,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Energy scale",value:T.energyScale,min:.1,max:5,step:.1,onChange:y=>M("energyScale",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:746,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Gamma",value:T.gamma,min:.5,max:2.5,step:.1,onChange:y=>M("gamma",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:747,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Min intensity cutoff",value:T.intensityCutoff,min:0,max:.05,step:.001,onChange:y=>M("intensityCutoff",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:748,columnNumber:25},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:733,columnNumber:21},void 0),ue.jsxDEV("div",{style:{marginBottom:12},children:[ue.jsxDEV("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Debug view & overlays"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:755,columnNumber:25},void 0),ue.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8},children:[["Norm",0],["SDF",1],["Tan",2],["Edge",3],["Fwd",4],["Back",5],["Total",6],["Hue",7]].map(([y,v])=>ue.jsxDEV("button",{onClick:()=>M("debugView",v),style:{padding:"2px 6px",fontSize:9,background:T.debugView===v?"#777":"#444",color:"#fff",border:"1px solid #666",borderRadius:3},children:y},y,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:769,columnNumber:154},void 0))},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:763,columnNumber:25},void 0),ue.jsxDEV("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:6,marginBottom:6},children:[ue.jsxDEV("label",{style:{fontSize:10,color:"#ccc"},children:"Vector overlay"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:787,columnNumber:29},void 0),ue.jsxDEV("input",{type:"checkbox",checked:T.overlayVectors,onChange:y=>M("overlayVectors",y.target.checked)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:791,columnNumber:29},void 0),ue.jsxDEV("label",{style:{fontSize:10,color:"#ccc"},children:"Centerline"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:792,columnNumber:29},void 0),ue.jsxDEV("input",{type:"checkbox",checked:T.showCenterline,onChange:y=>M("showCenterline",y.target.checked)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:796,columnNumber:29},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:780,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Vector spacing (px)",value:T.vectorSpacingPx,min:4,max:64,step:1,onChange:y=>M("vectorSpacingPx",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:798,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Vector length (px)",value:T.vectorLengthPx,min:2,max:32,step:1,onChange:y=>M("vectorLengthPx",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:799,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Vector thickness (px)",value:T.vectorThicknessPx,min:.5,max:6,step:.25,onChange:y=>M("vectorThicknessPx",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:800,columnNumber:25},void 0),ue.jsxDEV(At,{label:"Centerline width (px)",value:T.centerlineWidthPx,min:.5,max:8,step:.5,onChange:y=>M("centerlineWidthPx",y)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:801,columnNumber:25},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:752,columnNumber:21},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:638,columnNumber:28},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/ScopeDebugPanel.tsx",lineNumber:571,columnNumber:10},void 0)},R0=n=>n.hue!==void 0?n.hue:n.rgb?_c(n.rgb):0,C0=({children:n,topology:e="ladder",speed:t=Kt.speed,attenuation:i=Kt.attenuation,enableGlobalClicks:r=!1,showDebug:s=!1,scopeId:o="scope",debugPosition:a="top-right",cornerRadius:c=0,pixelRatio:l,powerPreference:u="default",maxFPS:d=120})=>{const h=fe.useRef(new Map),[,p]=fe.useState(0),g=fe.useRef(!1),_=fe.useCallback(()=>{g.current||(g.current=!0,Promise.resolve().then(()=>{g.current=!1,p(H=>H+1)}))},[]),f=Pc().toLowerCase().indexOf("light")!==-1,T=fe.useCallback(H=>{h.current.set(H.id,H);const ne=H.ref.current;ne&&k.current&&k.current.observe(ne),G.current=!0,_()},[_]),w=fe.useCallback(H=>{const Q=h.current.get(H)?.ref.current;Q&&k.current&&k.current.unobserve(Q),h.current.delete(H),G.current=!0,_()},[_]),M=fe.useRef(performance.now()),O=fe.useRef(null),I=fe.useRef(null),R=fe.useRef(performance.now()),L=fe.useRef(d),y=fe.useRef(()=>{}),v=fe.useCallback(()=>{I.current===null&&(F.current=performance.now(),O.current&&(I.current=requestAnimationFrame(O.current)))},[]),x=fe.useCallback((H,ne,Q={})=>{const de=$.current;if(!de)return;let De=R0(Q);f&&(De=(De+.5)%1);const Ce=Q.energy??2.5,le=Q.radius??Kt.injectionRadius;de.injectionMaterial.uniforms.uInjectionRadius.value=le,de.injectPulse(H,ne,De,Ce),M.current=performance.now(),v()},[f,v]);fe.useEffect(()=>{y.current=x},[x]),fe.useEffect(()=>{L.current=d},[d]);const b=fe.useCallback(H=>{const Q=h.current.get(H)?.ref.current;if(!Q)return null;const de=Q.getBoundingClientRect();return{u:(de.left+de.width/2)/window.innerWidth,v:1-(de.top+de.height/2)/window.innerHeight}},[]),P=fe.useMemo(()=>({register:T,unregister:w,pulseAt:x,getNodeCenter:b}),[T,w,x,b]),D=fe.useRef(null),F=fe.useRef(performance.now()),U=fe.useRef(new Float32Array(An*4)),$=fe.useRef(null),z=fe.useRef(null),[K,re]=fe.useState(s),ve=fe.useRef(null),Re=fe.useRef(e),G=fe.useRef(!0);fe.useEffect(()=>{if(!D.current)return;M.current=performance.now();const H=new x0({alpha:!0,antialias:!0,powerPreference:u}),ne=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;H.setPixelRatio(ne),H.setSize(window.innerWidth,window.innerHeight),D.current.appendChild(H.domElement),ve.current=H;const Q=new hl,de=new Ho(-1,1,1,-1,0,1),De=new w0(H);$.current=De;const Ce=De.simulationMaterial.uniforms;Ce.uSpeed.value=t,Ce.uAttenuation.value=i,Ce.uEnergyConservation.value=Kt.energyConservation;const le={uRes:{value:new et(window.innerWidth,window.innerHeight)},uGuideTexture:{value:De.getGuideTexture()},uSimulationTexture:{value:De.getCurrentTexture()},uTime:{value:0},uRailHalfWidthUV:{value:De.guideMaterial.uniforms.uLineWidth.value},uCoreWidthPx:{value:2},uBladeWidthPx:{value:10},uCornerRadiusPx:{value:c},uDebugView:{value:0},uOverlayVectors:{value:!1},uVectorSpacingPx:{value:16},uVectorLengthPx:{value:8},uVectorThicknessPx:{value:1.25},uEnergyScale:{value:1},uGamma:{value:1},uShowCenterline:{value:!1},uCenterlineWidthPx:{value:1.25},uIntensityCutoff:{value:.01},uGlowIntensity:{value:1.35},uCoreGain:{value:1},uHaloStrength:{value:.6},uWhiteHotStrength:{value:.25},uExposure:{value:1}};z.current=le;const _e=new $t(new Ei(2,2),new Rt({vertexShader:di,fragmentShader:T0,uniforms:le,transparent:!0,depthWrite:!1,blending:Fs}));Q.add(_e),G.current=!0;const pe=1e4,C=()=>{const Be=performance.now();if(Be-M.current>pe){I.current=null;return}const Se=L.current;if(Se&&Se>0){const A=1e3/Se;if(Be-R.current<A){I.current=requestAnimationFrame(C);return}}const We=Math.min((Be-F.current)/1e3,.033);F.current=Be;const Pe=window.innerWidth,Ve=window.innerHeight,tt=Array.from(h.current.values()).slice(0,An);tt.forEach((A,S)=>{const W=A.ref.current;if(!W)return;const Z=W.getBoundingClientRect(),ee=S*4,Y=[Z.left/Pe,(Ve-(Z.top+Z.height))/Ve,Z.width/Pe,Z.height/Ve];for(let ae=0;ae<4;ae++)Math.abs(U.current[ee+ae]-Y[ae])>.001&&(U.current[ee+ae]=Y[ae],G.current=!0)});for(let A=tt.length*4;A<U.current.length;A++)U.current[A]!==0&&(U.current[A]=0,G.current=!0);if(G.current){const A=Re.current==="grid"?S0(U.current,tt.length).edges:y0(U.current,tt.length).edges;De.updateGuideTexture(A),G.current=!1}De.simulationStep(We),le.uSimulationTexture.value=De.getCurrentTexture(),le.uTime.value=Be/1e3,le.uRailHalfWidthUV.value=De.guideMaterial.uniforms.uLineWidth.value,H.setRenderTarget(null),H.render(Q,de),R.current=Be,I.current=requestAnimationFrame(C)};O.current=C,I.current=requestAnimationFrame(C);const He=()=>{le.uRes.value.set(window.innerWidth,window.innerHeight),H.setSize(window.innerWidth,window.innerHeight),G.current=!0};window.addEventListener("resize",He);const Te=D.current;return()=>{window.removeEventListener("resize",He),I.current!==null&&cancelAnimationFrame(I.current),I.current=null,De.dispose(),H.dispose(),Te&&H.domElement.parentElement===Te&&Te.removeChild(H.domElement)}},[i,c,l,u,t]),fe.useEffect(()=>{Re.current=e,G.current=!0,v()},[e,v]),fe.useEffect(()=>{const H=$.current;if(!H)return;const ne=H.simulationMaterial.uniforms;ne.uSpeed.value=t,ne.uAttenuation.value=i},[t,i]),fe.useEffect(()=>{if(!r)return;const H=ne=>{const Q=ne.clientX/window.innerWidth,de=1-ne.clientY/window.innerHeight;y.current&&y.current(Q,de,{hue:.33})};return window.addEventListener("click",H),()=>window.removeEventListener("click",H)},[r]),fe.useEffect(()=>{const H=ve.current;if(!H)return;const ne=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;H.setPixelRatio(ne)},[l]);const k=fe.useRef(null);return fe.useEffect(()=>(k.current=new ResizeObserver(()=>{G.current=!0,_()}),h.current.forEach(H=>{const ne=H.ref.current;ne&&k.current&&k.current.observe(ne)}),()=>k.current?.disconnect()),[_]),fe.useEffect(()=>re(s),[s]),fe.useEffect(()=>{z.current&&(z.current.uCornerRadiusPx.value=c)},[c]),ue.jsxDEV(vc.Provider,{value:P,children:[n,ue.jsxDEV("div",{ref:D,style:{position:"fixed",inset:0,pointerEvents:"none",mixBlendMode:"difference"}},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/NetworkScope.tsx",lineNumber:445,columnNumber:13},void 0),K&&ue.jsxDEV(A0,{scopeId:o,gpuSimRef:$,vizUniformsRef:z,nodeCount:h.current.size,position:a,onClose:()=>re(!1)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/NetworkScope.tsx",lineNumber:451,columnNumber:30},void 0)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/NetworkScope.tsx",lineNumber:443,columnNumber:10},void 0)},P0=n=>{const e=pn.c(9);if(e[0]!=="2d99ff02242d3cacb69781c60b501db9b006fc8acd297a22648d04d0820888ba"){for(let l=0;l<9;l+=1)e[l]=Symbol.for("react.memo_cache_sentinel");e[0]="2d99ff02242d3cacb69781c60b501db9b006fc8acd297a22648d04d0820888ba"}const t=Qo("networkScopeEffects"),i=Qo("legacyGpuNetworkScope"),r=dd(),s=Zu();let o,a;if(e[1]!==t||e[2]!==r||e[3]!==s?(o=()=>{r&&t&&s.updateSettings({path:"features.networkScopeEffects",value:!1})},a=[t,r,s],e[1]=t,e[2]=r,e[3]=s,e[4]=o,e[5]=a):(o=e[4],a=e[5]),fe.useEffect(o,a),!t||r)return n.children;let c;return e[6]!==n||e[7]!==i?(c=i?ue.jsxDEV(C0,{...n},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/NetworkScopeSwitch.tsx",lineNumber:46,columnNumber:37},void 0):ue.jsxDEV(ah,{...n},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/teacher/swirl/network/NetworkScopeSwitch.tsx",lineNumber:46,columnNumber:76},void 0),e[6]=n,e[7]=i,e[8]=c):c=e[8],c},I0=fe.lazy(()=>mc(()=>import("./Assistant-Cwh4gDsO.js").then(n=>n.A),__vite__mapDeps([17,1,2,0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37])));function D0(n){const e=pn.c(34);if(e[0]!=="558f989d363428abfeaf0bc78fbef7f3b0ea40407018ea5489453eef8f0eef0a"){for(let L=0;L<34;L+=1)e[L]=Symbol.for("react.memo_cache_sentinel");e[0]="558f989d363428abfeaf0bc78fbef7f3b0ea40407018ea5489453eef8f0eef0a"}const{error:t}=n,i=td(),r=i["text.primary"];let s;e[1]!==i.background||e[2]!==r?(s={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",p:"2rem",boxSizing:"border-box",textAlign:"center",color:r,backgroundColor:i.background},e[1]=i.background,e[2]=r,e[3]=s):s=e[3];let o;e[4]===Symbol.for("react.memo_cache_sentinel")?(o={maxWidth:760},e[4]=o):o=e[4];const a=i["status.error"];let c;e[5]!==a?(c=ue.jsxDEV(er,{component:"h2",variant:"h5",sx:{mb:2,color:a},children:"Assistant stopped to protect your data"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:73,columnNumber:10},this),e[5]=a,e[6]=c):c=e[6];const l=i["status.error"];let u;e[7]!==l?(u={mb:2,lineHeight:1.5,color:l,overflowWrap:"anywhere"},e[7]=l,e[8]=u):u=e[8];let d;e[9]!==t.message||e[10]!==u?(d=ue.jsxDEV(er,{sx:u,children:t.message},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:98,columnNumber:10},this),e[9]=t.message,e[10]=u,e[11]=d):d=e[11];const h=i["text.secondary"];let p;e[12]!==h?(p=ue.jsxDEV(er,{sx:{mb:3,lineHeight:1.5,color:h,fontSize:"0.95rem"},children:`Do not clear this browser's site data and do not delete or "reset" Assistant storage — your data may still be recoverable from this browser profile. Try reloading first; if this screen keeps appearing, contact support with a screenshot of this message.`},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:108,columnNumber:11},this),e[12]=h,e[13]=p):p=e[13];let g;e[14]===Symbol.for("react.memo_cache_sentinel")?(g=ue.jsxDEV(ta,{variant:"contained",onClick:L0,children:"Reload Assistant"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:121,columnNumber:11},this),e[14]=g):g=e[14];const _=i.divider,m=i["text.primary"];let f;e[15]!==i.button?(f=Al(i.button,.08),e[15]=i.button,e[16]=f):f=e[16];let T;e[17]!==f?(T={backgroundColor:f},e[17]=f,e[18]=T):T=e[18];let w;e[19]!==i.divider||e[20]!==m||e[21]!==T?(w=ue.jsxDEV(nd,{direction:"row",justifyContent:"center",flexWrap:"wrap",gap:1.5,children:[g,ue.jsxDEV(ta,{variant:"outlined",onClick:N0,title:"Preserves conversations and resets only tabs, panels, and layout state",sx:{borderColor:_,color:m,"&:hover":T},children:"Reset layout & tabs"},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:148,columnNumber:89},this)]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:148,columnNumber:11},this),e[19]=i.divider,e[20]=m,e[21]=T,e[22]=w):w=e[22];const M=i["text.secondary"];let O;e[23]!==M?(O=ue.jsxDEV(er,{sx:{mt:2,lineHeight:1.5,color:M,fontSize:"0.85rem"},children:"The reset preserves conversations and stored Assistant data."},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:163,columnNumber:11},this),e[23]=M,e[24]=O):O=e[24];let I;e[25]!==p||e[26]!==w||e[27]!==O||e[28]!==c||e[29]!==d?(I=ue.jsxDEV(na,{sx:o,children:[c,d,p,w,O]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:176,columnNumber:11},this),e[25]=p,e[26]=w,e[27]=O,e[28]=c,e[29]=d,e[30]=I):I=e[30];let R;return e[31]!==I||e[32]!==s?(R=ue.jsxDEV(na,{sx:s,children:I},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:188,columnNumber:11},this),e[31]=I,e[32]=s,e[33]=R):R=e[33],R}function N0(){return window.location.assign(Rl())}function L0(){return window.location.reload()}const pc=n=>{const e=pn.c(26);if(e[0]!=="558f989d363428abfeaf0bc78fbef7f3b0ea40407018ea5489453eef8f0eef0a"){for(let I=0;I<26;I+=1)e[I]=Symbol.for("react.memo_cache_sentinel");e[0]="558f989d363428abfeaf0bc78fbef7f3b0ea40407018ea5489453eef8f0eef0a"}const{onReady:t}=n;let i;e[1]===Symbol.for("react.memo_cache_sentinel")?(i=ea(),e[1]=i):i=e[1];const[r,s]=fe.useState(i);let o;e[2]===Symbol.for("react.memo_cache_sentinel")?(o=Ju(),e[2]=o):o=e[2];const[a,c]=fe.useState(o);let l,u;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let I=!1;return ea()?(s(!0),()=>{I=!0}):(Qu().then(()=>{I||s(!0)}).catch(R=>{I||c(R instanceof Error?R:new Error(String(R)))}),()=>{I=!0})},u=[],e[3]=l,e[4]=u):(l=e[3],u=e[4]),fe.useEffect(l,u);let d,h;e[5]!==r?(d=()=>{if(!r)return;const I=Fd(),R=Id();return()=>{R?.(),I?.()}},h=[r],e[5]=r,e[6]=d,e[7]=h):(d=e[6],h=e[7]),fe.useEffect(d,h);let p,g;e[8]!==a||e[9]!==r?(p=()=>{if(!(!r||a))return ed.startAutoConnect()},g=[r,a],e[8]=a,e[9]=r,e[10]=p,e[11]=g):(p=e[10],g=e[11]),fe.useEffect(p,g);let _;e[12]===Symbol.for("react.memo_cache_sentinel")?(_={width:"100%",height:"100%",overflow:"hidden"},e[12]=_):_=e[12];let m;e[13]===Symbol.for("react.memo_cache_sentinel")?(m=ue.jsxDEV(Ul,{},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:317,columnNumber:11},void 0),e[13]=m):m=e[13];let f;e[14]!==a||e[15]!==r?(f=r&&!a?ue.jsxDEV(rh,{},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:324,columnNumber:29},void 0):null,e[14]=a,e[15]=r,e[16]=f):f=e[16];let T,w;e[17]===Symbol.for("react.memo_cache_sentinel")?(T=ue.jsxDEV(Ol,{},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:334,columnNumber:11},void 0),w=ue.jsxDEV(Fl,{},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:335,columnNumber:11},void 0),e[17]=T,e[18]=w):(T=e[17],w=e[18]);let M;e[19]!==a||e[20]!==t||e[21]!==r?(M=a instanceof rd?ue.jsxDEV(Bl,{error:a},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:344,columnNumber:53},void 0):a?ue.jsxDEV(D0,{error:a},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:344,columnNumber:105},void 0):r?ue.jsxDEV(I0,{onReady:t},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:344,columnNumber:163},void 0):null,e[19]=a,e[20]=t,e[21]=r,e[22]=M):M=e[22];let O;return e[23]!==f||e[24]!==M?(O=ue.jsxDEV("div",{style:_,children:ue.jsxDEV(Wl,{runtime:xc,store:Ht,children:ue.jsxDEV(kl,{children:ue.jsxDEV(Vl,{children:ue.jsxDEV(zl,{children:ue.jsxDEV(P0,{topology:"grid",cornerRadius:18,children:[m,f,T,w,M]},void 0,!0,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:354,columnNumber:173},void 0)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:354,columnNumber:151},void 0)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:354,columnNumber:125},void 0)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:354,columnNumber:103},void 0)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:354,columnNumber:27},void 0)},void 0,!1,{fileName:"/mnt/old-root/home/lachlan/dev/assistant/client/src/AssistantApp.tsx",lineNumber:354,columnNumber:11},void 0),e[23]=f,e[24]=M,e[25]=O):O=e[25],O},K0=Object.freeze(Object.defineProperty({__proto__:null,AssistantApp:pc,default:pc},Symbol.toStringTag,{value:"Module"}));export{K0 as A,kc as a,jd as g,Zf as r,Y0 as u};
