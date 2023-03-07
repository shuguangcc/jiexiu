import{e as s,n as l}from"./cast-a534ae90.js";import{r as a}from"./typedArrayUtil-d9bc5fbd.js";import{l as n,h as y}from"./reactiveUtils-5869e41a.js";import"./Error-57322e92.js";import"./ensureType-25b8cc06.js";import"./string-480f3e3f.js";import{y as u}from"./FeatureReductionLayer-1e5c4045.js";import d from"./FeatureLayerView2D-d223de57.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./BlendLayer-813950f9.js";import"./parser-01f6451e.js";import"./colorUtils-639f4d25.js";import"./screenUtils-90993e16.js";import"./mat4f32-77b3d8ac.js";import"./mat4-7dde83b1.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./geometry-eec1b371.js";import"./Extent-a1a1de42.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./TimeExtent-2004eecf.js";import"./Query-13124a97.js";import"./enumeration-61a13175.js";import"./jsonUtils-c6684c52.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./Clonable-9b34e760.js";import"./PopupTemplate-52faab17.js";import"./Collection-7c37b74e.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./fieldUtils-77ec75e2.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-5175e7d9.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./Identifiable-093f90a8.js";import"./UniqueValueRenderer-30750d31.js";import"./symbols-75e7a993.js";import"./CIMSymbol-8f02a6e3.js";import"./Symbol-8266348e.js";import"./Color-af6e0c66.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec4-46a9b36d.js";import"./opacityUtils-1333f803.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./aaBoundingRect-b340cf8c.js";import"./request-f17a8ddb.js";import"./persistableUrlUtils-56d43b12.js";import"./collectionUtils-0365f48b.js";import"./Portal-51616380.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./LegendOptions-2e7b3d70.js";import"./diffUtils-8a8cb5bc.js";import"./colorRamps-8d7efc14.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-1859ae71.js";import"./compilerUtils-fefa73ae.js";import"./lengthUtils-92fed992.js";import"./unitUtils-dd6fb8ee.js";import"./jsonUtils-eb568237.js";import"./styleUtils-015eeecd.js";import"./jsonUtils-559e9000.js";import"./DictionaryLoader-326d0e17.js";import"./LRUCache-b9228ca3.js";import"./MemCache-1d2f56ee.js";import"./deprecate-0d93948c.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./OperationalLayer-1dad72ac.js";import"./ElevationInfo-88554f24.js";import"./labelingInfo-be3a629c.js";import"./labelUtils-4f4b54c6.js";import"./defaultsJSON-59981e75.js";import"./EffectView-dffeb0bc.js";import"./FeatureSet-9cc47aef.js";import"./definitions-2d0dd0cd.js";import"./LayerView2D-fc5f87cc.js";import"./utils-0d179f64.js";import"./mat3f32-d3d088e8.js";import"./enums-4ca4641f.js";import"./MaterialKey-a0a08f8b.js";import"./alignmentUtils-ae955d28.js";import"./Utils-a4216b91.js";import"./number-954e4ab6.js";import"./enums-4b2a86a0.js";import"./enums-64ab819c.js";import"./Texture-411ca148.js";import"./context-util-d4c193b5.js";import"./VertexElementDescriptor-2925c6af.js";import"./schemaUtils-5803029f.js";import"./LayerFloorInfo-e7c896e5.js";import"./visualVariablesUtils-3304d1a5.js";import"./createSymbolSchema-1bb8123a.js";import"./cimAnalyzer-020551ab.js";import"./fontUtils-4ed0e787.js";import"./BidiEngine-836b7ef6.js";import"./utils-0c7f5071.js";import"./mat2d-d0b91e3e.js";import"./vec2-ab9f47bf.js";import"./vec2f32-461e65a9.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-13fe9b68.js";import"./utils-52ad3c09.js";import"./generateRendererUtils-2f0b667c.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-090399ba.js";import"./ExpandedCIM-5a2216e6.js";import"./rendererUtils-c63e720f.js";import"./capabilities-d08b6e58.js";import"./util-0a217e96.js";import"./TileStore-8f580dbf.js";import"./Queue-275a6362.js";import"./TileKey-9cae9369.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./workers-5d67fe7a.js";import"./Connection-b756149d.js";import"./assets-a5ce5e1a.js";import"./intl-70c09a3c.js";import"./messages-28bf3b89.js";import"./ExportImageParameters-3714ed4b.js";import"./HandleOwner-2edbba46.js";import"./sublayerUtils-eea48c01.js";import"./popupUtils-57580c23.js";import"./LayerView-a849dd77.js";import"./RefreshableLayerView-2de321c7.js";function h(r,i){return!r.visible||r.minScale!==0&&i>r.minScale||r.maxScale!==0&&i<r.maxScale}let e=class extends d{initialize(){this.handles.add([n(()=>{var r;return(r=this.view)==null?void 0:r.viewpoint},()=>this._update(),y)])}_injectOverrides(r){let i=super._injectOverrides(r);const p=this.view.scale,o=this.layer.sublayers.filter(m=>h(m,p)).map(m=>m.subtypeCode);if(!o.length)return i;i=a(i)?i:new u().toJSON();const t=`NOT ${this.layer.subtypeField} IN (${o.join(",")})`;return i.where=i.where?`(${i.where}) AND (${t})`:t,i}_setLayersForFeature(r){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),p=r.attributes[i.name],o=this.layer.sublayers.find(t=>t.subtypeCode===p);r.layer=o,r.sourceLayer=this.layer}_createSchemaConfig(){const r={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(t=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:t.labelingInfo,labelsVisible:t.labelsVisible,renderer:t.renderer,subtypeCode:t.subtypeCode,orderBy:null}))},i=this.layer.sublayers.map(t=>t.subtypeCode).join(","),p=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let o=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return o+=p,{...super._createSchemaConfig(),...r,definitionExpression:o}}};e=s([l("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const ki=e;export{ki as default};
