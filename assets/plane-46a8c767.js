import{a as z}from"./mathUtils-57aba1ea.js";import{r as j}from"./typedArrayUtil-d9bc5fbd.js";import{o as T,_ as x,z as p,g as O,e as g,u as V,P as I,F as C}from"./vec3-1863987c.js";import{n as E}from"./vec3f64-6cd30318.js";import{c as f,r as k,f as L}from"./sphere-622880b9.js";function rr(r){const n=r[0]*r[0]+r[4]*r[4]+r[8]*r[8],t=r[1]*r[1]+r[5]*r[5]+r[9]*r[9],u=r[2]*r[2]+r[6]*r[6]+r[10]*r[10];return Math.sqrt(Math.max(n,t,u))}function nr(r,n){const t=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),u=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),e=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return T(r,t,u,e),r}function G(r,n,t){Math.abs(r[0])>Math.abs(r[1])?T(n,0,1,0):T(n,1,0,0),x(t,r,n),p(n,n),x(n,t,r),p(t,t)}function d(r=m){return[r[0],r[1],r[2],r[3]]}function tr(r=m[0],n=m[1],t=m[2],u=m[3]){return v(r,n,t,u,k.get())}function H(r,n){return v(n[0],n[1],n[2],n[3],r)}function v(r,n,t,u,e=d()){return e[0]=r,e[1]=n,e[2]=t,e[3]=u,e}function J(r,n,t){const u=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],e=Math.abs(u-1)>1e-5&&u>1e-12?1/Math.sqrt(u):1;return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=-(t[0]*r[0]+t[1]*r[1]+t[2]*r[2]),t}function K(r,n,t,u=d()){const e=t[0]-n[0],c=t[1]-n[1],o=t[2]-n[2],N=r[0]-n[0],$=r[1]-n[1],F=r[2]-n[2],s=c*F-o*$,q=o*N-e*F,P=e*$-c*N,X=s*s+q*q+P*P,l=Math.abs(X-1)>1e-5&&X>1e-12?1/Math.sqrt(X):1;return u[0]=s*l,u[1]=q*l,u[2]=P*l,u[3]=-(u[0]*r[0]+u[1]*r[1]+u[2]*r[2]),u}function R(r,n,t,u,e){if(r.count<3)return!1;r.getVec(t,h);let c=u,o=!1;for(;c<r.count-1&&!o;)r.getVec(c,M),c++,o=!C(h,M);if(!o)return!1;for(c=Math.max(c,e),o=!1;c<r.count&&!o;)r.getVec(c,a),c++,g(_,h,M),p(_,_),g(A,M,a),p(A,A),o=!C(h,a)&&!C(M,a)&&Math.abs(I(_,A))<U;return o?(K(h,M,a,n),!0):(t!==0||u!==1||e!==2)&&R(r,n,0,1,2)}const U=.99619469809,h=E(),M=E(),a=E(),_=E(),A=E();function ur(r,n,t){return n!==r&&H(r,n),r[3]=-I(r,t),r}function er(r,n){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n[3]=-r[3],n}function or(r,n,t,u){return x(a,n,r),J(t,a,u)}function cr(r,n,t,u){return b(r,n,g(f.get(),t,n),Y,u)}function ir(r,n,t){return!!j(n)&&b(r,n.origin,n.direction,Z,t)}function fr(r,n,t){return b(r,n.origin,n.vector,i.NONE,t)}function ar(r,n,t){return b(r,n.origin,n.vector,i.CLAMP,t)}function Ir(r,n){return y(r,n)>=0}function Nr(r,n){const t=I(r,n.ray.direction),u=-y(r,n.ray.origin);if(t>-1e-6&&t<1e-6)return u>0;const e=u/t;return t>0?e<n.c1&&(n.c1=e):e>n.c0&&(n.c0=e),n.c0<=n.c1}function Mr(r,n,t){const u=O(f.get(),r,-r[3]),e=W(r,g(f.get(),n,u),f.get());return V(t,e,u),t}function gr(r,n,t,u){const e=r,c=f.get(),o=f.get();G(e,c,o);const N=g(f.get(),t,n),$=L(c,N),F=L(o,N),s=L(e,N);return T(u,$,F,s)}function W(r,n,t){const u=O(f.get(),r,I(r,n));return g(t,n,u),t}function y(r,n){return I(r,n)+r[3]}function b(r,n,t,u,e){const c=I(r,t);if(c===0)return!1;let o=-(I(r,n)+r[3])/c;return u&i.CLAMP&&(o=z(o,0,1)),!(!(u&i.INFINITE_MIN)&&o<0||!(u&i.INFINITE_MAX)&&o>1)&&(V(e,n,O(e,t,o)),!0)}function sr(r){return r}const m=[0,0,1,0];var i;(function(r){r[r.NONE=0]="NONE",r[r.CLAMP=1]="CLAMP",r[r.INFINITE_MIN=4]="INFINITE_MIN",r[r.INFINITE_MAX=8]="INFINITE_MAX"})(i||(i={}));const Y=i.INFINITE_MIN|i.INFINITE_MAX,Z=i.INFINITE_MAX;export{H as A,tr as E,v as F,Nr as G,Mr as H,gr as J,ur as L,or as O,er as P,y as R,ar as U,cr as V,sr as Y,J as _,nr as a,R as b,K as j,rr as l,d as p,ir as q,fr as x,Ir as z};