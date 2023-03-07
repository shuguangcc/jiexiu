import"./string-480f3e3f.js";import{s as F}from"./Error-57322e92.js";import{l as R,L}from"./mathUtils-57aba1ea.js";import{t as G}from"./typedArrayUtil-d9bc5fbd.js";import{g as H}from"./mat4-7dde83b1.js";import{r as M,e as m,_ as w,z as y,P as f,u as b,g as $,s as h,x as J,O as N,v as U,o as T,p as W}from"./vec3-1863987c.js";import{u as tt,t as Y,n as g}from"./vec3f64-6cd30318.js";import{a as et}from"./vec4-46a9b36d.js";import{u as rt,n as it,r as q}from"./vec4f64-939de194.js";import{t as E}from"./nextTick-3ee5a785.js";import{s as st}from"./byteSizeEstimations-90c5a50d.js";import{n as nt,b as ot}from"./quatf64-c94bd656.js";import{n as ct}from"./mat4f64-fbeb2cd1.js";import{o as ut}from"./vec2f64-30dc1443.js";var p;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(p||(p={}));class at{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&E(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*Z);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,Z));e++)this._items.push(this._allocator())}}const Z=1024;let o=class{constructor(e,r,i){this._itemByteSize=e,this._itemCreate=r,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this._itemByteSize)}get(){this._itemsPtr===0&&E(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const r=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let i=0;i<this._itemsPerBuffer;++i)this._items.push(this._itemCreate(r,i*this._itemByteSize));this._buffers.push(r)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=l){return new o(16,ut,e)}static createVec3f64(e=l){return new o(24,tt,e)}static createVec4f64(e=l){return new o(32,rt,e)}static createMat3f64(e=l){return new o(72,nt,e)}static createMat4f64(e=l){return new o(128,ct,e)}static createQuatf64(e=l){return new o(32,ot,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}};const l=4*st.KILOBYTES,Dt=o.createVec2f64(),u=o.createVec3f64(),Ft=o.createVec4f64();o.createMat3f64();const ft=o.createMat4f64(),Gt=o.createQuatf64();function B(t){return t?j(Y(t.origin),Y(t.direction)):j(g(),g())}function j(t,e){return{origin:t,direction:e}}function Ht(t,e){const r=_t.get();return r.origin=t,r.direction=e,r}function Jt(t,e=B()){return ht(t.origin,t.direction,e)}function Nt(t,e,r=B()){return M(r.origin,t),m(r.direction,e,t),r}function ht(t,e,r=B()){return M(r.origin,t),M(r.direction,e),r}function Ut(t,e){const r=w(u.get(),y(u.get(),t.direction),m(u.get(),e,t.origin));return f(r,r)}function mt(t,e,r){const i=f(t.direction,m(r,e,t.origin));return b(r,t.origin,$(r,t.direction,i)),r}const _t=new at(()=>B());function Wt(t,e,r){const i=f(t,e)/f(t,t);return $(r,t,i)}function te(t,e){return f(t,e)/h(t)}function gt(t,e){const r=f(t,e)/(h(t)*h(e));return-R(r)}function ee(t,e,r){y(d,t),y(A,e);const i=f(d,A),s=R(i),n=w(d,d,A);return f(n,r)<0?2*Math.PI-s:s}const d=g(),A=g();function v(){return it()}function X(t,e=v()){return et(e,t)}function lt(t,e){return q(t[0],t[1],t[2],e)}function pt(t){return t}function $t(t){t[0]=t[1]=t[2]=t[3]=0}function Pt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function S(t){return t[3]}function dt(t){return t}function Mt(t,e,r,i){return q(t,e,r,i)}function wt(t,e,r){return t!==r&&M(r,t),r[3]=t[3]+e,r}function yt(t,e,r){return F.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===r?r:X(t,r)}function z(t,e,r){if(G(e))return!1;const{origin:i,direction:s}=e,n=bt;n[0]=i[0]-t[0],n[1]=i[1]-t[1],n[2]=i[2]-t[2];const c=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(c===0)return!1;const a=2*(s[0]*n[0]+s[1]*n[1]+s[2]*n[2]),P=a*a-4*c*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-t[3]*t[3]);if(P<0)return!1;const C=Math.sqrt(P);let _=(-a-C)/(2*c);const x=(-a+C)/(2*c);return(_<0||x<_&&x>0)&&(_=x),!(_<0)&&(r&&(r[0]=i[0]+s[0]*_,r[1]=i[1]+s[1]*_,r[2]=i[2]+s[2]*_),!0)}const bt=g();function Bt(t,e){return z(t,e,null)}function St(t,e,r){if(z(t,e,r))return r;const i=I(t,e,u.get());return b(r,e.origin,$(u.get(),e.direction,J(e.origin,i)/h(e.direction))),r}function I(t,e,r){const i=u.get(),s=ft.get();w(i,e.origin,e.direction);const n=S(t);w(r,i,e.origin),$(r,r,1/h(r)*n);const c=k(t,e.origin),a=gt(e.origin,r);return H(s,a+c,i),N(r,r,s),r}function zt(t,e,r){return z(t,e,r)?r:(mt(e,t,r),Q(t,r,r))}function Q(t,e,r){const i=m(u.get(),e,t),s=$(u.get(),i,t[3]/h(i));return b(r,s,t)}function xt(t,e){const r=m(u.get(),e,t),i=U(r),s=t[3]*t[3];return Math.sqrt(Math.abs(i-s))}function k(t,e){const r=m(u.get(),e,t),i=h(r),s=S(t),n=s+Math.abs(s-i);return R(s/n)}const V=g();function K(t,e,r,i){const s=m(V,e,t);switch(r){case p.X:{const n=L(s,V)[2];return T(i,-Math.sin(n),Math.cos(n),0)}case p.Y:{const n=L(s,V),c=n[1],a=n[2],P=Math.sin(c);return T(i,-P*Math.cos(a),-P*Math.sin(a),Math.cos(c))}case p.Z:return y(i,s);default:return}}function D(t,e){const r=m(O,e,t);return h(r)-t[3]}function At(t,e,r,i){const s=D(t,e),n=K(t,e,p.Z,O),c=$(O,n,r-s);return b(i,e,c)}function Vt(t,e){const r=W(t,e),i=S(t);return r<=i*i}const O=g(),Ot=v();Object.freeze(Object.defineProperty({__proto__:null,create:v,copy:X,fromCenterAndRadius:lt,wrap:pt,clear:$t,fromRadius:Pt,getRadius:S,getCenter:dt,fromValues:Mt,elevate:wt,setExtent:yt,intersectRay:z,intersectsRay:Bt,intersectRayClosestSilhouette:St,closestPointOnSilhouette:I,closestPoint:zt,projectPoint:Q,distanceToSilhouette:xt,angleToSilhouette:k,axisAt:K,altitudeAt:D,setAltitudeAt:At,containsPoint:Vt,tmpSphere:Ot},Symbol.toStringTag,{value:"Module"}));export{$t as C,Mt as E,Vt as N,v as R,S as T,Bt as V,X as _,gt as a,Jt as b,u as c,B as d,ft as e,te as f,Wt as g,Nt as h,Ut as i,ee as j,dt as k,p as n,Gt as o,Ht as p,Ft as r,at as s,Dt as t,pt as w};
