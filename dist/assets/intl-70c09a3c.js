import{m as c,L as u}from"./number-2ab8ca0d.js";import{s as y,a as m}from"./Error-57322e92.js";import{n as U,t as L}from"./string-480f3e3f.js";import"./locale-30120714.js";import{h as R,l as x}from"./messages-28bf3b89.js";import{U as B}from"./request-f17a8ddb.js";import{r as k}from"./typedArrayUtil-d9bc5fbd.js";import{a as A}from"./assets-a5ce5e1a.js";const $=y.getLogger("esri.intl.substitute");function z(t,e,n={}){const{format:r={}}=n;return U(t,s=>O(s,e,r))}function O(t,e,n){let r,s;const o=t.indexOf(":");if(o===-1?r=t.trim():(r=t.slice(0,o).trim(),s=t.slice(o+1).trim()),!r)return"";const i=L(r,e);if(i==null)return"";const a=(s?n==null?void 0:n[s]:null)??(n==null?void 0:n[r]);return a?j(i,a):s?E(i,s):d(i)}function j(t,e){switch(e.type){case"date":return u(t,e.intlOptions);case"number":return c(t,e.intlOptions);default:return $.warn("missing format descriptor for key {key}"),d(t)}}function E(t,e){switch(e.toLowerCase()){case"dateformat":return u(t);case"numberformat":return c(t);default:return $.warn(`inline format is unsupported since 4.12: ${e}`),/^(dateformat|datestring)/i.test(e)?u(t):/^numberformat/i.test(e)?c(t):d(t)}}function d(t){switch(typeof t){case"string":return t;case"number":return c(t);case"boolean":return""+t;default:return t instanceof Date?u(t):""}}async function v(t,e,n,r){const s=e.exec(n);if(!s)throw new m("esri-intl:invalid-bundle",`Bundle id "${n}" is not compatible with the pattern "${e}"`);const o=s[1]?`${s[1]}/`:"",i=s[2],a=R(r),f=`${o}${i}.json`,w=a?`${o}${i}_${a}.json`:f;let l;try{l=await p(t(w))}catch(b){if(w===f)throw new m("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:b});try{l=await p(t(f))}catch(g){throw new m("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:g})}}return l}async function p(t){if(k(h.fetchBundleAsset))return h.fetchBundleAsset(t);const e=await B(t,{responseType:"text"});return JSON.parse(e.data)}class C{constructor({base:e="",pattern:n,location:r=new URL(window.location.href)}){let s;s=typeof r=="string"?o=>new URL(o,new URL(r,window.location.href)).href:r instanceof URL?o=>new URL(o,r).href:r,this.pattern=typeof n=="string"?new RegExp(`^${n}`):n,this.getAssetUrl=s,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,n){return v(this.getAssetUrl,this.matcher,e,n)}}function D(t){return new C(t)}const h={};x(D({pattern:"esri/",location:A}));export{z as s};
