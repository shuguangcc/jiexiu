import{s as i}from"./sphere-622880b9.js";import{e as t,s as w,_ as b}from"./vec3-1863987c.js";import{t as m,n as o}from"./vec3f64-6cd30318.js";import{v as h}from"./lineSegment-c6f0b9d1.js";function j(r){return r?{p0:m(r.p0),p1:m(r.p1),p2:m(r.p2)}:{p0:o(),p1:o(),p2:o()}}function S(r,p,n){const c=p[0]-r[0],e=p[1]-r[1],u=n[0]-r[0],a=n[1]-r[1];return .5*Math.abs(c*a-e*u)}function V(r,p,n){return t(s,p,r),t(f,n,r),w(b(s,s,f))/2}new i(h);new i(()=>j());const s=o(),f=o();export{S,V as w};