import{w as k,m as P}from"./cast-a534ae90.js";import{j}from"./Collection-7c37b74e.js";import{t as u,r as g}from"./typedArrayUtil-d9bc5fbd.js";const C=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function d(t){return t instanceof P}function V(t){return t instanceof j?Object.keys(t.items):d(t)?k(t).keys():t?Object.keys(t):[]}function y(t,n){return t instanceof j?t.items[n]:t[n]}function O(t,n){return!(!Array.isArray(t)||!Array.isArray(n))&&t.length!==n.length}function s(t){return t?t.declaredClass:null}function w(t,n){const e=t.diff;if(e&&typeof e=="function")return e(t,n);const i=V(t),c=V(n);if(i.length===0&&c.length===0)return;if(!i.length||!c.length||O(t,n))return{type:"complete",oldValue:t,newValue:n};const a=c.filter(o=>!i.includes(o)),A=i.filter(o=>!c.includes(o)),h=i.filter(o=>c.includes(o)&&y(t,o)!==y(n,o)).concat(a,A).sort(),b=s(t);if(b&&C.includes(b)&&h.length)return{type:"complete",oldValue:t,newValue:n};let p;const D=d(t)&&d(n);for(const o of h){const r=y(t,o),f=y(n,o);let l;if((D||typeof r!="function"&&typeof f!="function")&&r!==f&&(r!=null||f!=null)){if(e&&e[o]&&typeof e[o]=="function")l=e[o](r,f);else if(r instanceof Date&&f instanceof Date){if(r.getTime()===f.getTime())continue;l={type:"complete",oldValue:r,newValue:f}}else l=typeof r=="object"&&typeof f=="object"&&s(r)===s(f)?w(r,f):{type:"complete",oldValue:r,newValue:f};g(l)&&(g(p)?p.diff[o]=l:p={type:"partial",diff:{[o]:l}})}}return p}function S(t,n){if(u(t))return!1;const e=n.split(".");let i=t;for(const c of e){if(i.type==="complete")return!0;if(i.type!=="partial")return!1;{const a=i.diff[c];if(!a)return!1;i=a}}return!0}function q(t,n){for(const e of n)if(S(t,e))return!0;return!1}function z(t,n){if(!(typeof t=="function"||typeof n=="function"||u(t)&&u(n)))return u(t)||u(n)||typeof t=="object"&&typeof n=="object"&&s(t)!==s(n)?{type:"complete",oldValue:t,newValue:n}:w(t,n)}function m(t){if(u(t))return!0;switch(t.type){case"complete":return!1;case"collection":{const n=t;for(const e of n.added)if(!m(e))return!1;for(const e of n.removed)if(!m(e))return!1;for(const e of n.changed)if(!m(e))return!1;return!0}case"partial":for(const n in t.diff)if(!m(t.diff[n]))return!1;return!0}}export{S as a,m as d,z as m,q as y};
