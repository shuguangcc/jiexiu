function o(){return[0,0,0]}function _(n){return[n[0],n[1],n[2]]}function t(n,r,u){return[n,r,u]}function s(n){const r=o(),u=Math.min(3,n.length);for(let e=0;e<u;++e)r[e]=n[e];return r}function O(n,r){return new Float64Array(n,r,3)}function c(){return o()}function i(){return t(1,1,1)}function f(){return t(1,0,0)}function a(){return t(0,1,0)}function l(){return t(0,0,1)}const b=c(),m=i(),y=f(),N=a(),S=l();Object.freeze(Object.defineProperty({__proto__:null,create:o,clone:_,fromValues:t,fromArray:s,createView:O,zeros:c,ones:i,unitX:f,unitY:a,unitZ:l,ZEROS:b,ONES:m,UNIT_X:y,UNIT_Y:N,UNIT_Z:S},Symbol.toStringTag,{value:"Module"}));export{S as b,s as e,b as f,m as l,o as n,t as r,_ as t,O as u};
