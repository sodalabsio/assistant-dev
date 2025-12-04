import{g as C,a as x,i as N,b as k}from"./AssistantApp-CQnE_nub.js";import"./index-tx_RG7aM.js";import"./chunk-B3F52NIX-BuGdF0ic.js";function R(a){return a.role!=="function"&&"content"in a}function T(a){return a.trim().startsWith("<file")}function A(a){const u=[],g=new Map;let d=0,f=0,n=0;return a.forEach((r,l)=>{if(r.role==="system"||r.role==="developer"||r.role==="function"||!R(r))return;let t;if(r.role==="user")d++,t=`U${d}`;else if(r.role==="assistant")f++,t=`R${f}`;else if(r.role==="tool")n++,t=`T${n}`;else return;if(typeof r.content=="string"){const s=r.content.split(`
`);u.push(`
--- ${t}: ${r.role.toUpperCase()} MESSAGE ---
`),s.forEach((i,c)=>{const e=c+1,o=`${t}[${e}]`;u.push(`${o.padEnd(10)} | ${i}`),g.set(o,{messageIndex:l,contentIndex:0,lineIndex:c,content:i})})}else Array.isArray(r.content)&&(u.push(`
--- ${t}: ${r.role.toUpperCase()} MESSAGE ---
`),r.content.forEach((s,i)=>{if(s.type==="text"){const e=s.text.split(`
`),o=`${t}C${i+1}`;u.push(`
--- ${o}: CONTENT ITEM ${i+1} ---
`),e.forEach((p,y)=>{const m=y+1,$=`${o}[${m}]`;u.push(`${$.padEnd(15)} | ${p}`),g.set($,{messageIndex:l,contentIndex:i,lineIndex:y,content:p})})}}))}),{numberedText:u.join(`
`),lineMap:g}}function S(a,u){const{numberedText:g,lineMap:d}=A(a);return{augmentedText:`QUERY: ${u}

NUMBERED TEXT:
${g}

Based on the above QUERY, identify the most relevant line ranges from the NUMBERED TEXT that would be needed to answer the query completely.
Think carefully about which sections are relevant and which are not. Use the analysis field to explain your reasoning.
For each range, assign a relevance score from 0 to 1, where 1 means highly relevant and 0 means barely relevant but still worth including.
The line numbers use the format PREFIX[LINE] where PREFIX indicates the message type and number (e.g., U1 for first user message, R2 for second assistant response).
Content items within array-based messages are marked with a C followed by the item number (e.g., U1C2 for first user message, second content item).
Output your response as a JSON object with "analysis" and "ranges" fields.`,lineMap:d}}function j(a,u,g){const d=JSON.parse(JSON.stringify(a));if(!u||u.length===0)return console.warn("No ranges provided for compression, returning original messages"),a;const f=new Map;for(const{label:n,start:r,end:l}of u)for(let t=r;t<=l;t++){const s=`${n}[${t}]`,i=g.get(s);if(!i){console.warn(`Could not find lineMap info for id: ${s}. This might be due to incorrect label format in ranges.`);continue}const c=`${i.messageIndex}-${i.contentIndex}`;f.has(c)||f.set(c,new Set),f.get(c).add(i.lineIndex)}if(f.size===0)return console.warn("No relevant lines found for compression, returning original messages"),a;if(d.forEach((n,r)=>{if(R(n)&&!(n.role==="system"||n.role==="developer"||n.role==="function")){if(typeof n.content=="string"){if(T(n.content)){const l=`${r}-0`,t=f.get(l);if(!t||t.size===0){const s=n.content.split(`
`),i=s[0],c=s[s.length-1];n.content=`${i}
[compressed]
${c}`}else{const s=n.content.split(`
`),i=s[0],c=s[s.length-1],e=[];Array.from(t).sort((o,p)=>o-p).forEach(o=>{o>=0&&o<s.length&&e.push(s[o])}),n.content=`${i}
${e.join(`
`)}
${c}`}}return}if(Array.isArray(n.content)){const l=[];n.content.forEach((t,s)=>{if(t.type!=="text"){l.push(t);return}if(T(t.text)){const i=`${r}-${s}`,c=f.get(i);if(!c||c.size===0){const e=t.text.split(`
`),o=e[0],p=e[e.length-1];l.push({type:"text",text:`${o}
[compressed]
${p}`})}else{const e=t.text.split(`
`),o=e[0],p=e[e.length-1],y=[];Array.from(c).sort((m,$)=>m-$).forEach(m=>{m>=0&&m<e.length&&y.push(e[m])}),l.push({type:"text",text:`${o}
${y.join(`
`)}
${p}`})}}else l.push(t)}),n.content=l}}}),u.length>0&&f.size===0){for(const n of d)if(n.role==="user"&&Array.isArray(n.content))for(let r=0;r<n.content.length;r++){const l=n.content[r];if(l.type==="text"&&l.text==="[compressed]"){const t=u.map(s=>`Scene ${s.start}-${s.end}: ${s.label} (Relevance: ${s.relevance})`).join(`

`);n.content[r]={type:"text",text:t};break}}}return d}async function*I(a,u,g){const{augmentedText:d,lineMap:f}=S(a,u);C();const n=x("compression.primary"),r=x("compression.fallback"),l={role:"system",content:`
You are a text compression assistant. Your task is to identify the most relevant line ranges from the numbered text that would be needed to answer the query.

First, analyze the text and query to understand what's relevant. Think about which sections directly address the query and which are tangential or irrelevant.

Then, output a JSON object with:
1. An "analysis" field where you explain your reasoning process
2. A "ranges" array containing objects with "label", "start", "end", and "relevance" fields

The line numbers use a special format: PREFIX[LINE] where:
- PREFIX is U1, U2, etc. for user messages (U1 = first user message)
- PREFIX is R1, R2, etc. for assistant responses (R1 = first assistant response)
- PREFIX is T1, T2, etc. for tool responses
- PREFIX can also include a content item marker like U1C2 for the second content item in the first user message
- LINE is the line number within that message or content item

For example, a line labeled "U1[5]" means line 5 of the first user message, while "U1C2[3]" means line 3 of the second content item in the first user message.

IMPORTANT: The "label" field in your ranges MUST be one of the exact prefixes that appear in the NUMBERED TEXT (U1, U1C2, R3, etc.). Any other format will be ignored.

Notes:
- Try to compress the prompt as much as possible, but no more than that.
- If the user provides an input, you should assume they mean for it to be used in the response at least somewhat, except in the case where the user has provided many inputs for your reference - in that case, just choose the relevant information.
- You can output as many sections as you think are necessary.

Use your judgement and remember that the model will only see the regions you mark as relevant.
`.trim()},t={role:"user",content:d},s={temperature:0,response_format:{type:"json_schema",json_schema:{name:"compression",description:"The relevant line ranges for the query with analysis",schema:{type:"object",properties:{analysis:{type:"string",description:"An analysis of the relevant and irrelevant content, and your reasoning process behind your decisions."},ranges:{type:"array",items:{type:"object",properties:{label:{type:"string",description:"The message prefix (e.g., 'U1', 'R2', 'U1C2'). Must match the pattern ^[URT][1-9][0-9]*(?:C[1-9][0-9]*)?$"},start:{type:"integer",minimum:1,description:"The starting line number (inclusive)"},end:{type:"integer",minimum:1,description:"The ending line number (inclusive)"},relevance:{type:"number",minimum:0,maximum:1,description:"A score from 0 to 1 indicating how relevant this section is to the query"}},required:["label","start","end","relevance"]}}},required:["analysis","ranges"]}}}};async function*i(e){let o=0,p="",y=!1;for(;o<2;){o++,console.log(`Attempting prompt compression with model: ${e}${o>1?" (retry)":""}`);try{const $=N({model:e,messages:o===1?[l,t]:[l,t,{role:"assistant",content:p},{role:"user",content:'Your previous response had JSON parsing or validation errors. Please provide a valid JSON object with "analysis" and "ranges" fields. Make sure each range has valid "label", "start", "end", and "relevance" fields. The "label" field must match one of the prefixes in the numbered text (like U1, R2, U1C2, etc.).'}],args:s});for await(const w of $){if(w.error)return console.error(`Error in model ${e} compression:`,w.error),!1;if(!w.content)continue;p=w.content;const M=k(w.content);if(M.completable)try{const b=JSON.parse(M.completedJson);if(!b.analysis||typeof b.analysis!="string"){console.warn(`Model ${e} missing or invalid 'analysis' field`);continue}if(!Array.isArray(b.ranges)){console.warn(`Model ${e} missing or invalid 'ranges' array`);continue}const E=b.ranges,U=b.analysis;let v=!1;for(const h of E){if(!h.label||typeof h.label!="string"){console.warn(`Model ${e} has range with missing or invalid 'label'`),v=!0;break}if(typeof h.start!="number"||h.start<1){console.warn(`Model ${e} has range with missing or invalid 'start'`),v=!0;break}if(typeof h.end!="number"||h.end<1){console.warn(`Model ${e} has range with missing or invalid 'end'`),v=!0;break}if(typeof h.relevance!="number"||h.relevance<0||h.relevance>1){console.warn(`Model ${e} has range with missing or invalid 'relevance'`),v=!0;break}}if(v)continue;if(E.length>0){const h=j(a,E,f);return yield{analysis:U,ranges:E,originalMessages:a,compressedMessages:h,augmentedText:d},y=!0,!0}else console.warn(`Model ${e} returned no ranges`)}catch(b){console.error(`Error parsing JSON from model ${e}:`,b)}}if(y)return!0;if(o>=2||!p)return console.warn(`Model ${e} failed to produce valid output after ${o} attempts`),!1;console.log(`Retrying with model ${e} after validation/parsing errors`)}catch(m){return console.error(`Exception with model ${e}:`,m),!1}}return y}let c=!1;for await(const e of i(n))yield e,c=!0;if(!c){console.log(`Primary model failed or returned no ranges, falling back to: ${r}`);let e=!1;for await(const o of i(r))yield o,e=!0;e||(console.error("Both compression models failed, returning original messages"),yield{analysis:"Error occurred during compression with both models",ranges:[],originalMessages:a,compressedMessages:a,augmentedText:d})}}export{I as getCompressedPrompt};
