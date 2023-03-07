import{e as _,n as F}from"./cast-a534ae90.js";import"./string-480f3e3f.js";import{r as S,o as f}from"./typedArrayUtil-d9bc5fbd.js";import"./Error-57322e92.js";import"./ensureType-25b8cc06.js";import{m as U}from"./diffUtils-8a8cb5bc.js";import{s as v}from"./heatmapUtils-3d7c22c5.js";import{o as E}from"./definitions-2d0dd0cd.js";import{p as O}from"./BaseProcessor-7b9e78d6.js";import{l as a}from"./tileUtils-dbff68ee.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./Collection-7c37b74e.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./screenUtils-90993e16.js";import"./vec4f64-939de194.js";import"./HandleOwner-2edbba46.js";import"./reactiveUtils-5869e41a.js";import"./Extent-a1a1de42.js";import"./Query-13124a97.js";import"./geometry-eec1b371.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./TimeExtent-2004eecf.js";import"./enumeration-61a13175.js";import"./jsonUtils-c6684c52.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./Clonable-9b34e760.js";import"./TileKey-9cae9369.js";class n{constructor(t,r){this.offset=t,this.extent=r}}function g(i){const t=i.key,r=new Map,o=256,e=E,s=i.tileInfoView.tileInfo.isWrappable;return r.set(a(t,-1,-1,s).id,new n([-e,-e],[e-o,e-o,e,e])),r.set(a(t,0,-1,s).id,new n([0,-e],[0,e-o,e,e])),r.set(a(t,1,-1,s).id,new n([e,-e],[0,e-o,o,e])),r.set(a(t,-1,0,s).id,new n([-e,0],[e-o,0,e,e])),r.set(a(t,1,0,s).id,new n([e,0],[0,0,o,e])),r.set(a(t,-1,1,s).id,new n([-e,e],[e-o,0,e,o])),r.set(a(t,0,1,s).id,new n([0,e],[0,0,e,o])),r.set(a(t,1,1,s).id,new n([e,e],[0,0,o,o])),r}let l=class extends O{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(i,t){const r=t.schema.processors[0];r.type==="heatmap"&&U(this._schema,r)&&(i.mesh=!0,this._schema=r)}onTileUpdate(i){for(const t of i.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(i){const t={clear:!0};return this._tileKeyToFeatureSets.delete(i.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:i.id,data:t})}async onTileMessage(i,t,r){this._tileKeyToFeatureSets.has(i.key.id)||this._tileKeyToFeatureSets.set(i.key.id,new Map);const o=this._tileKeyToFeatureSets.get(i.key.id);if(S(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&o.set(t.addOrUpdate.instance,t),t.end){const e=[],s=g(i);this._tileKeyToFeatureSets.forEach((c,p)=>{if(p===i.key.id)c.forEach(m=>f(m.addOrUpdate,d=>e.push(d)));else if(s.has(p)){const m=s.get(p),[d,T]=m.offset;c.forEach(w=>f(w.addOrUpdate,k=>{const K=k.transform(d,T,1,1);e.push(K)}))}});const h=v(e,this._schema.mesh,512,512),u={tileKey:i.key.id,intensityInfo:h},y=[h.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",u,{...r,transferList:y})}}onTileError(i,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:i.id,error:t},r)}};l=_([F("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const he=l;export{he as default};
