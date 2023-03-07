import{h as l}from"./string-480f3e3f.js";import{r as h}from"./typedArrayUtil-d9bc5fbd.js";import{h as s}from"./PooledRBush-0bffad50.js";import{k as u}from"./georeference-ee71fc83.js";import"./cast-a534ae90.js";import"./Error-57322e92.js";import"./ensureType-25b8cc06.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./quickselect-322ec8e1.js";import"./unitUtils-dd6fb8ee.js";import"./jsonMap-190c5593.js";import"./Extent-a1a1de42.js";import"./quatf64-c94bd656.js";import"./mat4-7dde83b1.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./mat4f64-fbeb2cd1.js";import"./mat3-9a8d9db7.js";import"./projection-0af97a56.js";import"./preload-helper-101896b7.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec4-46a9b36d.js";import"./SimpleObservable-8e532943.js";import"./Polyline-b571c705.js";import"./assets-a5ce5e1a.js";import"./request-f17a8ddb.js";import"./aaBoundingRect-b340cf8c.js";import"./zscale-48bab05e.js";import"./quat-ec16a584.js";import"./axisAngleDegrees-700f0205.js";import"./BufferView-478024d2.js";import"./vec2-ab9f47bf.js";import"./vec33-ec7b196f.js";import"./projection-78a47c97.js";class Q{async createIndex(t,o){const i=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new s;const n=this._createMeshData(t),e=h(o)?await o.invoke("createIndexThread",n,{transferList:i}):this.createIndexThread(n).result;return this._createPooledRBush().fromJSON(e)}createIndexThread(t){const o=new Float64Array(t.position),i=this._createPooledRBush();return t.components?this._createIndexComponentsThread(i,o,t.components.map(n=>new Uint32Array(n))):this._createIndexAllThread(i,o)}_createIndexAllThread(t,o){const i=new Array(o.length/9);let n=0;for(let e=0;e<o.length;e+=9)i[n++]=p(o,e+0,e+3,e+6);return t.load(i),{result:t.toJSON()}}_createIndexComponentsThread(t,o,i){let n=0;for(const m of i)n+=m.length/3;const e=new Array(n);let c=0;for(const m of i)for(let a=0;a<m.length;a+=3)e[c++]=p(o,3*m[a+0],3*m[a+1],3*m[a+2]);return t.load(e),{result:t.toJSON()}}_createMeshData(t){const o=(t.transform?u({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(i=>!i.faces)?{position:o}:{position:o,components:t.components.map(i=>i.faces)}}_createPooledRBush(){return new s(9,l("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function p(r,t,o,i){return{minX:Math.min(r[t+0],r[o+0],r[i+0]),maxX:Math.max(r[t+0],r[o+0],r[i+0]),minY:Math.min(r[t+1],r[o+1],r[i+1]),maxY:Math.max(r[t+1],r[o+1],r[i+1]),p0:[r[t+0],r[t+1],r[t+2]],p1:[r[o+0],r[o+1],r[o+2]],p2:[r[i+0],r[i+1],r[i+2]]}}export{Q as default};
