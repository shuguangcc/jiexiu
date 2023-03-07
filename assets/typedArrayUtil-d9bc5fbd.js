const p=null;function c(n){return n!=null}function f(n){return n==null}function m(n,t){return c(n)?t(n):null}function _(n){return n}function w(n,t){return d(n,t),n}function d(n,t){if(f(n))throw new Error(t??"value is None")}function x(n,t){return c(n)?n:typeof t=="function"?t():t}function I(n,t){return c(n)?n:t}function M(n){return c(n)&&n.destroy(),null}function U(n){return c(n)&&n.dispose(),null}function F(n){return c(n)&&n.remove(),null}function v(n){return c(n)&&n.abort(),null}function b(n){return c(n)&&n.release(),null}function E(n,t,r){return c(n)&&c(t)?c(r)?r(n,t):n.equals(t):n===t}function R(n){return null}function z(n,t){const r=new Array;for(const e of n)r.push(g(e,null,t));return r}function B(n,t){for(const r of n)m(r,t)}function g(n,t,r){return c(n)?r(n):t}function C(n){return n.filter(t=>c(t))}function O(n,...t){let r=n;for(let e=0;e<t.length&&r;++e)r=r[t[e]];return r}function j(n){return n}let l=class{constructor(t=1){this._seed=t}set seed(t){this._seed=t??Math.random()*l._m}getInt(){return this._seed=(l._a*this._seed+l._c)%l._m,this._seed}getFloat(){return this.getInt()/(l._m-1)}getIntRange(t,r){return Math.round(this.getFloatRange(t,r))}getFloatRange(t,r){const e=r-t;return t+this.getInt()/l._m*e}};l._m=2147483647,l._a=48271,l._c=0;function N(n,t){return t?n.filter((r,e,u)=>u.findIndex(t.bind(null,r))===e):n.filter((r,e,u)=>u.indexOf(r)===e)}function S(n,t,r){if(f(n)&&f(t))return!0;if(f(n)||f(t)||n.length!==t.length)return!1;if(r){for(let e=0;e<n.length;e++)if(!r(n[e],t[e]))return!1}else for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function k(n,t){let r=n.length!==t.length;r&&(n.length=t.length);for(let e=0;e<t.length;++e)n[e]!==t[e]&&(n[e]=t[e],r=!0);return r}function D(n,t,r){let e,u;return r?(e=t.filter(o=>!n.some(s=>r(s,o))),u=n.filter(o=>!t.some(s=>r(s,o)))):(e=t.filter(o=>!n.includes(o)),u=n.filter(o=>!t.includes(o))),{added:e,removed:u}}function G(n){return n&&typeof n.length=="number"}const y=!!Array.prototype.fill;function H(n,t){if(y)return new Array(n).fill(t);const r=new Array(n);for(let e=0;e<n;e++)r[e]=t;return r}function J(n,t){t===void 0&&(t=n,n=0);const r=new Array(t-n);for(let e=n;e<t;e++)r[e-n]=e;return r}class A{constructor(){this.last=0}}const h=new A;function $(n,t,r,e){e=e||h;const u=Math.max(0,e.last-10);for(let s=u;s<r;++s)if(n[s]===t)return e.last=s,s;const o=Math.min(u,r);for(let s=0;s<o;++s)if(n[s]===t)return e.last=s,s;return-1}function K(n,t,r,e){const u=r??n.length,o=$(n,t,u,e);if(o!==-1)return n[o]=n[u-1],r==null&&n.pop(),t}const i=new Set;function L(n,t,r=n.length,e=t.length,u,o){if(e===0||r===0)return r;i.clear();for(let a=0;a<e;++a)i.add(t[a]);u=u||h;const s=Math.max(0,u.last-10);for(let a=s;a<r;++a)if(i.has(n[a])&&(o&&o.push(n[a]),i.delete(n[a]),n[a]=n[r-1],--r,--a,i.size===0||r===0))return i.clear(),r;for(let a=0;a<s;++a)if(i.has(n[a])&&(o&&o.push(n[a]),i.delete(n[a]),n[a]=n[r-1],--r,--a,i.size===0||r===0))return i.clear(),r;return i.clear(),r}new l;function P(n,t){const r=n.indexOf(t);return r!==-1?(n.splice(r,1),t):null}function Q(n,t){if(n.forEach)n.forEach(t);else for(let r=0;r<n.length;r++)t(n[r],r,n)}function T(n,t,r){if(n.slice)return n.slice(t,r);t===void 0?t=0:(t<0&&(t+=n.length),t=Math.min(n.length,Math.max(0,t))),r===void 0?r=n.length:(r<0&&(r+=n.length),r=Math.min(n.length,Math.max(0,r)));const e=Math.max(0,r-t),u=new n.constructor(e);for(let o=0;o<e;o++)u[o]=n[t+o];return u}function V(n){return n instanceof ArrayBuffer||n&&n.constructor&&n.constructor.name==="ArrayBuffer"}function W(n){return n instanceof Int8Array||n&&n.constructor&&n.constructor.name==="Int8Array"}function X(n){return n instanceof Uint8Array||n&&n.constructor&&n.constructor.name==="Uint8Array"}function Y(n){return n instanceof Uint8ClampedArray||n&&n.constructor&&n.constructor.name==="Uint8ClampedArray"}function Z(n){return n instanceof Int16Array||n&&n.constructor&&n.constructor.name==="Int16Array"}function nn(n){return n instanceof Uint16Array||n&&n.constructor&&n.constructor.name==="Uint16Array"}function tn(n){return n instanceof Int32Array||n&&n.constructor&&n.constructor.name==="Int32Array"}function rn(n){return n instanceof Uint32Array||n&&n.constructor&&n.constructor.name==="Uint32Array"}function en(n){return n instanceof Float32Array||n&&n.constructor&&n.constructor.name==="Float32Array"}function on(n){return n instanceof Float64Array||n&&n.constructor&&n.constructor.name==="Float64Array"}function un(n){const t=new Array(n.length);for(let r=0;r<n.length;r++)t[r]=n[r];return t}export{on as A,j as B,P as C,R as D,A as E,$ as F,L as G,g as H,G as I,U as J,k as K,l as L,z as M,B as N,D as O,b as P,H as Q,J as R,Q as S,V as T,p as U,I as V,S as a,E as b,d as c,W as d,_ as e,w as f,X as g,F as h,x as i,Y as j,Z as k,un as l,C as m,nn as n,m as o,v as p,O as q,c as r,M as s,f as t,N as u,K as v,tn as w,rn as x,en as y,T as z};