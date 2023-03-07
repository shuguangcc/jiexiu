import{e as o,y as s,n as y,R as g,m as k}from"./cast-a534ae90.js";import{x as L,h as C,p as b,t as f,o as E,r as H}from"./typedArrayUtil-d9bc5fbd.js";import{p as I,f as x}from"./promiseUtils-32d9c228.js";import"./ensureType-25b8cc06.js";import{d as _}from"./HandleOwner-2edbba46.js";import{h as v}from"./WorkerHandle-ef77a7ef.js";import{D as c}from"./workerHelper-641d0601.js";import{f as A}from"./edgeProcessing-5c860c29.js";import{n as O}from"./vec3f64-6cd30318.js";import{E as $}from"./sphere-622880b9.js";import{E as w}from"./elevationInfoUtils-44cce436.js";import{aY as P}from"./index-7dfdb274.js";import{o as R}from"./VertexSnappingCandidate-5828c264.js";import"./string-480f3e3f.js";import"./Error-57322e92.js";import"./nextTick-3ee5a785.js";import"./reactiveUtils-5869e41a.js";import"./workers-5d67fe7a.js";import"./preload-helper-101896b7.js";import"./Connection-b756149d.js";import"./Queue-275a6362.js";import"./request-f17a8ddb.js";import"./assets-a5ce5e1a.js";import"./intl-70c09a3c.js";import"./number-2ab8ca0d.js";import"./jsonMap-190c5593.js";import"./locale-30120714.js";import"./messages-28bf3b89.js";import"./BufferView-478024d2.js";import"./vec2-ab9f47bf.js";import"./common-c186b691.js";import"./vec3-1863987c.js";import"./vec4-46a9b36d.js";import"./InterleavedLayout-b5930508.js";import"./types-e1c0a5bf.js";import"./deduplicate-d92c3cc2.js";import"./mathUtils-57aba1ea.js";import"./VertexAttribute-9c5c630d.js";import"./glUtil-7aa58841.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./mat4-7dde83b1.js";import"./vec4f64-939de194.js";import"./byteSizeEstimations-90c5a50d.js";import"./quatf64-c94bd656.js";import"./mat4f64-fbeb2cd1.js";import"./vec2f64-30dc1443.js";import"./ElevationInfo-88554f24.js";import"./Extent-a1a1de42.js";import"./fieldUtils-77ec75e2.js";import"./arcadeOnDemand-5175e7d9.js";import"./geometry-eec1b371.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./lengthUtils-92fed992.js";import"./unitUtils-dd6fb8ee.js";import"./Basemap-f70b1b37.js";import"./Collection-7c37b74e.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./collectionUtils-0365f48b.js";import"./deprecate-0d93948c.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./loadAll-01cdf0a9.js";import"./asyncUtils-087555fc.js";import"./Portal-51616380.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./PortalItem-6eebfb2b.js";import"./writeUtils-3bde6e49.js";import"./layerUtils-68eea656.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./compilerUtils-fefa73ae.js";import"./enumeration-61a13175.js";import"./opacityUtils-1333f803.js";import"./CollectionFlattener-f43a0fce.js";import"./TablesMixin-a4aaaf91.js";import"./Layer-ead8c88c.js";import"./Identifiable-093f90a8.js";import"./Graphic-1859ae71.js";import"./PopupTemplate-52faab17.js";import"./Clonable-9b34e760.js";import"./symbols-75e7a993.js";import"./CIMSymbol-8f02a6e3.js";import"./Symbol-8266348e.js";import"./screenUtils-90993e16.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./aaBoundingRect-b340cf8c.js";import"./persistableUrlUtils-56d43b12.js";import"./jsonUtils-c6684c52.js";import"./Cyclical-078b4564.js";import"./projection-0af97a56.js";import"./zscale-48bab05e.js";import"./TileInfo-c5c8c8d2.js";import"./widget-09d2e7af.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./executeQueryJSON-0696009a.js";import"./normalizeUtils-6483f6b5.js";import"./query-71223310.js";import"./pbfQueryUtils-c922ef32.js";import"./pbf-8b0546e8.js";import"./OptimizedFeature-73582c6e.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-3c8de33a.js";import"./FeatureSet-9cc47aef.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./Query-13124a97.js";import"./TimeExtent-2004eecf.js";import"./RelationshipQuery-c27267ab.js";import"./LegendOptions-2e7b3d70.js";import"./utils-4aa03157.js";import"./BlendLayer-813950f9.js";import"./parser-01f6451e.js";import"./mat4f32-77b3d8ac.js";import"./ItemCache-bf1028d4.js";import"./MemCache-1d2f56ee.js";import"./utils-0c7f5071.js";import"./jsonUtils-559e9000.js";import"./UniqueValueRenderer-30750d31.js";import"./diffUtils-8a8cb5bc.js";import"./colorRamps-8d7efc14.js";import"./sizeVariableUtils-d4870b0d.js";import"./jsonUtils-eb568237.js";import"./styleUtils-015eeecd.js";import"./DictionaryLoader-326d0e17.js";import"./LRUCache-b9228ca3.js";import"./heatmapUtils-3d7c22c5.js";import"./featureConversionUtils-d2229ed4.js";import"./TopFeaturesQuery-9aca00bf.js";import"./FeatureLayer-9a7e04cf.js";import"./MultiOriginJSONSupport-b8792dfa.js";import"./LayerFloorInfo-e7c896e5.js";import"./FeatureLayerBase-d5682b4b.js";import"./HeightModelInfo-34f16d74.js";import"./arcgisLayerUrl-6e9db12f.js";import"./OperationalLayer-1dad72ac.js";import"./editsZScale-12d81957.js";import"./APIKeyMixin-b6e4f897.js";import"./ArcGISService-e571bcff.js";import"./CustomParametersMixin-a5d06ccc.js";import"./EditBusLayer-b5dc3689.js";import"./FeatureReductionLayer-1e5c4045.js";import"./labelingInfo-be3a629c.js";import"./labelUtils-4f4b54c6.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-9623e905.js";import"./PortalLayer-9dd15f09.js";import"./RefreshableLayer-49182ab8.js";import"./ScaleRangeLayer-c072e266.js";import"./TemporalLayer-f784dd83.js";import"./TimeInfo-f76d6c20.js";import"./FeatureTemplate-c4496b93.js";import"./FeatureType-0be9420b.js";import"./fieldProperties-9e220f14.js";import"./FieldsIndex-16707836.js";import"./versionUtils-f229b9a6.js";import"./styleUtils-08eaa4d2.js";import"./popupUtils-88fed094.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-5e6ccc87.js";import"./GraphicsLayer-a7c6f685.js";import"./ViewingMode-915d19cb.js";import"./unitBezier-881ac1eb.js";import"./mat3-9a8d9db7.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./TileStrategy-a5366189.js";import"./TileStore-8f580dbf.js";import"./TileKey-9cae9369.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-d08b6e58.js";import"./context-util-d4c193b5.js";import"./Subtype-a3103d84.js";import"./datetime-4f774298.js";import"./QueryEngineResult-eb704fb1.js";import"./utils-52ad3c09.js";import"./generateRendererUtils-2f0b667c.js";import"./WhereClause-6c9440a1.js";import"./utils-63166b41.js";import"./json-48e3ea08.js";import"./Util-289ce3b5.js";import"./EffectView-dffeb0bc.js";import"./ExportImageParameters-3714ed4b.js";import"./sublayerUtils-eea48c01.js";import"./webStyleSymbolUtils-6bef877f.js";import"./devEnvironmentUtils-5002a058.js";import"./dehydratedFeatures-3dcd65f1.js";import"./enums-4b2a86a0.js";import"./plane-46a8c767.js";import"./quat-ec16a584.js";class V extends v{constructor(t){super("EdgeProcessingWorker","extract",{extract:i=>[i.dataBuffer],extractComponentsEdgeLocations:i=>[i.dataBuffer],extractEdgeLocations:i=>[i.dataBuffer]},t)}async process(t,i,e){if(e)return A(t);const n=await this.invoke(new u(t),i);return this._unpackOutput(n)}async extractEdgeLocations(t,i){const e=await this.invokeMethod("extractEdgeLocations",new u(t),i);return c(e)}async extractComponentsEdgeLocations(t,i){const e=await this.invokeMethod("extractComponentsEdgeLocations",new u(t),i);return c(e)}_unpackOutput(t){return{regular:{instancesData:c(t.regular.instancesData),lodInfo:{lengths:new Float32Array(t.regular.lodInfo.lengths)}},silhouette:{instancesData:c(t.silhouette.instancesData),lodInfo:{lengths:new Float32Array(t.silhouette.lodInfo.lengths)}},averageEdgeLength:t.averageEdgeLength}}}class u{constructor(t){this.dataBuffer=t.data.buffer,this.writerSettings=t.writerSettings,this.skipDeduplicate=t.skipDeduplicate,this.indices=Array.isArray(t.indices)?t.indices:t.indices.buffer,this.indicesType=Array.isArray(t.indices)?"Array":L(t.indices)?"Uint32Array":"Uint16Array",this.indicesLength=t.indicesLength}}let m=class extends _{constructor(r){super(r),this.availability=0,this._ids=new Set,this._tmpP=O()}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new D(this.schedule,{fetchAllEdgeLocations:(r,t)=>this._fetchAllEdgeLocations(r,t)})}async fetchCandidates(r,t){const i=r.coordinateHelper,e=i.toXYZ(r.point);this.renderCoordsHelper.toRenderCoords(e,i.spatialReference,e);const n=r.distance,l=typeof n=="number"?n:n.distance,p=await this._workerHandle.invoke({bounds:$(e[0],e[1],e[2],l),types:r.types},t);return p.candidates.sort((h,S)=>h.distance-S.distance),p.candidates.map(h=>this._convertCandidate(i,h))}async add(r,t){this._ids.add(r.id),await this._workerHandle.invokeMethod("add",r,t)}async remove(r,t){this._ids.delete(r.id),await this._workerHandle.invokeMethod("remove",r,t)}_convertCandidate(r,t){switch(t.type){case"edge":return new P({coordinateHelper:r,objectId:t.objectId,targetPoint:this._convertRenderCoordinate(r,t.target),edgeStart:this._convertRenderCoordinate(r,t.start),edgeEnd:this._convertRenderCoordinate(r,t.end),elevationInfo:w});case"vertex":return new R({coordinateHelper:r,objectId:t.objectId,targetPoint:this._convertRenderCoordinate(r,t.target),elevationInfo:w})}}_convertRenderCoordinate(r,t){return this.renderCoordsHelper.fromRenderCoords(t,this._tmpP,r.spatialReference),r.fromXYZ(this._tmpP)}async _fetchAllEdgeLocations(r,t){const i=[],e=[];for(const{id:n,uid:l}of r.components)this._ids.has(n)&&i.push((async()=>{const p=await this.fetchEdgeLocations(n,t.signal);return e.push(p.locations.buffer),{id:n,uid:l,objectIds:p.objectIds,locations:p.locations.buffer,origin:p.origin,type:p.type}})());return{result:{components:(await Promise.all(i)).filter(({id:n})=>this._ids.has(n))},transferList:e}}};o([s({constructOnly:!0})],m.prototype,"renderCoordsHelper",void 0),o([s({constructOnly:!0})],m.prototype,"fetchEdgeLocations",void 0),o([s({constructOnly:!0})],m.prototype,"schedule",void 0),o([s({readOnly:!0})],m.prototype,"availability",void 0),m=o([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],m);class D extends v{constructor(t,i){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:i})}}let a=class extends _{constructor(r){super(r),this.availability=1,this._abortController=new AbortController}get updating(){return this.updatingHandles.updating}destroy(){this._tracker=C(this._tracker),this._abortController=b(this._abortController)}initialize(){const{view:r}=this,t=r.resourceController;this._edgeWorker=new V(i=>t.schedule(i)),this._workerHandle=new m({renderCoordsHelper:this.view.renderCoordsHelper,schedule:i=>t.schedule(i),fetchEdgeLocations:async(i,e)=>{if(f(this._tracker))throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(i,this._edgeWorker,e)}}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([g(this._workerHandle),g(this._edgeWorker)])}async fetchCandidates(r,t){return this._workerHandle.fetchCandidates(r,t)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const r=E(this._abortController,i=>i.signal),t=await this.getLayerView();f(t)||I(r)||(this._tracker=t.trackSnappingSources({add:(i,e)=>{this.updatingHandles.addPromise(this._workerHandle.add({id:i,bounds:e},r))},remove:i=>{this.updatingHandles.addPromise(this._workerHandle.remove({id:i},r))}}))}};o([s({constructOnly:!0})],a.prototype,"getLayerView",void 0),o([s({constructOnly:!0})],a.prototype,"view",void 0),o([s({readOnly:!0})],a.prototype,"updating",null),o([s({readOnly:!0})],a.prototype,"availability",void 0),a=o([y("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],a);let d=class extends k{constructor(r){super(r),this.availability=1,this._i3sSources=[]}get updating(){return this._i3sSources.some(r=>r.updating)}destroy(){this._i3sSources.forEach(r=>r.destroy()),this._i3sSources.length=0}initialize(){const{view:r}=this,t=this.layerSource.layer;this._i3sSources=t.type==="building-scene"?this._getBuildingSceneI3SSources(r,t):[this._getSceneLayerI3SSource(r,t)]}async fetchCandidates(r,t){const i=await Promise.all(this._i3sSources.map(e=>e.fetchCandidates(r,t)));return x(t),i.flat()}refresh(){this._i3sSources.forEach(r=>r.refresh())}_getBuildingSceneI3SSources(r,t){return t.allSublayers.toArray().map(i=>i.type==="building-component"?new a({getLayerView:async()=>(await r.whenLayerView(t)).whenSublayerView(i),view:r}):null).filter(H)}_getSceneLayerI3SSource(r,t){return new a({getLayerView:async()=>{const i=await r.whenLayerView(t);return i.type==="scene-layer-graphics-3d"?void 0:i},view:r})}};o([s({constructOnly:!0})],d.prototype,"layerSource",void 0),o([s({constructOnly:!0})],d.prototype,"view",void 0),o([s({readOnly:!0})],d.prototype,"updating",null),o([s({readOnly:!0})],d.prototype,"availability",void 0),d=o([y("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],d);export{d as SceneLayerSnappingSource};
