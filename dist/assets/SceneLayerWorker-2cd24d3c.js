import{z as c,r as G}from"./typedArrayUtil-d9bc5fbd.js";import{_ as q}from"./preload-helper-101896b7.js";import{a as J}from"./assets-a5ce5e1a.js";import"./sphere-622880b9.js";import"./Error-57322e92.js";import"./string-480f3e3f.js";import"./request-f17a8ddb.js";import"./promiseUtils-32d9c228.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./mat4-7dde83b1.js";import"./vec4f64-939de194.js";import"./nextTick-3ee5a785.js";import"./byteSizeEstimations-90c5a50d.js";import"./quatf64-c94bd656.js";import"./mat4f64-fbeb2cd1.js";import"./vec2f64-30dc1443.js";var L,D;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(L||(L={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(D||(D={}));function K(){return T||(T=new Promise(e=>q(()=>import("./i3s-13c93165.js"),[]).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:Q,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),T}function Q(e){return J(`esri/libs/i3s/${e}`)}let T;var N,p,x,B,$;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(N||(N={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(p||(p={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(x||(x={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(B||(B={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}($||($={}));async function ge(e){await g();const t=[e.geometryBuffer];return{result:k(e,t),transferList:t}}async function we(e){var w;await g();const t=[e.geometryBuffer],{geometryBuffer:r}=e,f=r.byteLength,i=o._malloc(f),d=new Uint8Array(o.HEAPU8.buffer,i,f);d.set(new Uint8Array(r));const s=o.dracoDecompressPointCloudData(i,d.byteLength);if(o._free(i),s.error.length>0)throw`i3s.wasm: ${s.error}`;const E=((w=s.featureIds)==null?void 0:w.length)>0?c(s.featureIds):null,b=c(s.positions);return E&&t.push(E.buffer),t.push(b.buffer),{result:{positions:b,featureIds:E},transferList:t}}async function _e(e){await g(),X(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Le(e){await g(),W(e)}async function Ae(e){await g(),o.setLegacySchema(e.context,e.jsonSchema)}function Ie(e){H(e)}let _,o;function W(e){const t=e.modifications,r=o._malloc(8*t.length),f=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function k(e,t){if(!o)return null;const{context:r,localOrigin:f,globalTrafo:i,mbs:d,obb:s,elevationOffset:E,geometryBuffer:b,geometryDescriptor:w,indexToVertexProjector:Y,vertexToRenderProjector:z}=e,A=o._malloc(b.byteLength),F=33,I=o._malloc(F*Float64Array.BYTES_PER_ELEMENT),R=new Uint8Array(o.HEAPU8.buffer,A,b.byteLength);R.set(new Uint8Array(b));const a=new Float64Array(o.HEAPU8.buffer,I,F);h(a,f);let u=a.byteOffset+3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,u);h(l,i),u+=16*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,u),h(l,d),u+=4*a.BYTES_PER_ELEMENT,G(s)&&(l=new Float64Array(a.buffer,u),h(l,s.center),u+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,u),h(l,s.halfSize),u+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,u),h(l,s.quaternion));const M=w,V={isDraco:!1,isLegacy:!1,color:e.layouts.some(m=>m.some(y=>y.name==="color")),normal:e.needNormals&&e.layouts.some(m=>m.some(y=>y.name==="normalCompressed")),uv0:e.layouts.some(m=>m.some(y=>y.name==="uv0")),uvRegion:e.layouts.some(m=>m.some(y=>y.name==="uvRegion")),featureIndex:M.featureIndex},n=o.process(r,!!e.obb,A,R.byteLength,M,V,I,E,Y,z,e.normalReferenceFrame);if(o._free(I),o._free(A),n.error.length>0)throw`i3s.wasm: ${n.error}`;if(n.discarded)return null;const U=n.componentOffsets.length>0?c(n.componentOffsets):null,P=n.featureIds.length>0?c(n.featureIds):null,S=c(n.interleavedVertedData).buffer,C=n.indicesType===L.Int16?c(new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2)):c(new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4)),O=c(n.positions),v=n.positionIndicesType===L.Int16?c(new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2)):c(new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4)),j={layout:e.layouts[0],interleavedVertexData:S,indices:C,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:O,indices:v}};return P&&t.push(P.buffer),U&&t.push(U.buffer),t.push(S),t.push(C.buffer),t.push(O.buffer),t.push(v.buffer),{componentOffsets:U,featureIds:P,transformedGeometry:j,obb:n.obb}}function Ue(e){return e===0?p.Unmodified:e===1?p.PotentiallyModified:e===2?p.Culled:p.Unknown}function X(e){const{context:t,buffer:r}=e,f=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(o.HEAPU8.buffer,f,i),s=new Float64Array(r);d.set(s),o.filterOBBs(t,f,i),s.set(d),o._free(f)}function H(e){o&&o.destroy(e)}function h(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function g(){return o?Promise.resolve():(_||(_=K().then(e=>{o=e,_=null})),_)}const Pe={transform:k,destroy:H};export{Ie as destroyContext,we as dracoDecompressPointCloudData,_e as filterObbsForModifications,X as filterObbsForModificationsSync,g as initialize,Ue as interpretObbModificationResults,ge as process,Ae as setLegacySchema,Le as setModifications,W as setModificationsSync,Pe as test};
