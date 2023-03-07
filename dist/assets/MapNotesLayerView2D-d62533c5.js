import{e as f,n as w}from"./cast-a534ae90.js";import{g as y}from"./Graphic-1859ae71.js";import{j as _}from"./Collection-7c37b74e.js";import{r as m,t as V}from"./typedArrayUtil-d9bc5fbd.js";import{l as h,h as a,a as v}from"./reactiveUtils-5869e41a.js";import"./Error-57322e92.js";import"./ensureType-25b8cc06.js";import"./string-480f3e3f.js";import{i as C}from"./utils-0d179f64.js";import{r as b}from"./GroupContainer-e381229e.js";import{y as H}from"./LayerView2D-fc5f87cc.js";import{i as c}from"./GraphicContainer-cad8d3da.js";import{o as g}from"./BaseGraphicContainer-b5497723.js";import{u as T}from"./LayerView-a849dd77.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./geometry-eec1b371.js";import"./Extent-a1a1de42.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./PopupTemplate-52faab17.js";import"./Clonable-9b34e760.js";import"./fieldUtils-77ec75e2.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-5175e7d9.js";import"./enumeration-61a13175.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./Identifiable-093f90a8.js";import"./symbols-75e7a993.js";import"./CIMSymbol-8f02a6e3.js";import"./Symbol-8266348e.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./screenUtils-90993e16.js";import"./opacityUtils-1333f803.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./aaBoundingRect-b340cf8c.js";import"./request-f17a8ddb.js";import"./persistableUrlUtils-56d43b12.js";import"./collectionUtils-0365f48b.js";import"./Portal-51616380.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./jsonUtils-c6684c52.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./mat3f32-d3d088e8.js";import"./EffectView-dffeb0bc.js";import"./parser-01f6451e.js";import"./mat4f32-77b3d8ac.js";import"./mat4-7dde83b1.js";import"./enums-4ca4641f.js";import"./MaterialKey-a0a08f8b.js";import"./alignmentUtils-ae955d28.js";import"./Utils-a4216b91.js";import"./number-954e4ab6.js";import"./enums-4b2a86a0.js";import"./enums-64ab819c.js";import"./Texture-411ca148.js";import"./context-util-d4c193b5.js";import"./VertexElementDescriptor-2925c6af.js";import"./definitions-2d0dd0cd.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./WGLContainer-b2d1fffc.js";import"./mat3-9a8d9db7.js";import"./vec2f32-461e65a9.js";import"./pixelUtils-cc2ca9c3.js";import"./vec2f64-30dc1443.js";import"./VertexArrayObject-3630ef4f.js";import"./vec4f32-2f36231b.js";import"./ProgramTemplate-f021fc55.js";import"./StyleDefinition-7d58136b.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./vec2-ab9f47bf.js";import"./featureConversionUtils-d2229ed4.js";import"./OptimizedFeature-73582c6e.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./cimAnalyzer-020551ab.js";import"./fontUtils-4ed0e787.js";import"./BidiEngine-836b7ef6.js";import"./utils-0c7f5071.js";import"./mat2d-d0b91e3e.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-13fe9b68.js";import"./utils-52ad3c09.js";import"./generateRendererUtils-2f0b667c.js";import"./colorRamps-8d7efc14.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-090399ba.js";import"./HandleOwner-2edbba46.js";import"./normalizeUtilsSync-a801e3b6.js";import"./normalizeUtils-6483f6b5.js";import"./utils-63166b41.js";import"./unitUtils-dd6fb8ee.js";import"./projection-0af97a56.js";import"./assets-a5ce5e1a.js";import"./zscale-48bab05e.js";import"./json-48e3ea08.js";import"./labelingInfo-be3a629c.js";import"./labelUtils-4f4b54c6.js";import"./defaultsJSON-59981e75.js";import"./jsonUtils-eb568237.js";import"./FeatureContainer-e57c4b30.js";import"./TileContainer-a618bf74.js";import"./TileKey-9cae9369.js";import"./Queue-275a6362.js";import"./visualVariablesUtils-c668eb89.js";import"./visualVariablesUtils-3304d1a5.js";import"./lengthUtils-92fed992.js";import"./capabilities-d08b6e58.js";import"./Matcher-e07e835b.js";import"./TileStrategy-a5366189.js";import"./TileStore-8f580dbf.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-13124a97.js";import"./TimeExtent-2004eecf.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./tileUtils-dbff68ee.js";import"./TileClipper-9381cfab.js";import"./Geometry-daada628.js";import"./LRUCache-b9228ca3.js";import"./MemCache-1d2f56ee.js";import"./ExpandedCIM-5a2216e6.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-015eeecd.js";import"./schemaUtils-5803029f.js";import"./LayerFloorInfo-e7c896e5.js";import"./diffUtils-8a8cb5bc.js";import"./createSymbolSchema-1bb8123a.js";import"./rendererUtils-c63e720f.js";import"./FeatureReductionLayer-1e5c4045.js";import"./BlendLayer-813950f9.js";import"./UniqueValueRenderer-30750d31.js";import"./LegendOptions-2e7b3d70.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-fefa73ae.js";import"./jsonUtils-559e9000.js";import"./DictionaryLoader-326d0e17.js";import"./deprecate-0d93948c.js";import"./OperationalLayer-1dad72ac.js";import"./ElevationInfo-88554f24.js";import"./util-0a217e96.js";import"./ComputedAttributeStorage-c1fec1a0.js";import"./FeatureSetReader-3d68adfe.js";import"./centroid-56c5816c.js";import"./FieldsIndex-16707836.js";import"./vec3f32-4322908d.js";const d="sublayers",n="layerView",I=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends H(T){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(r=>!!r.popupTemplate)).flat()}*graphicsViews(){m(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():m(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),r=>{const p=r.hitTest(i);if(m(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(r);for(const o of p)!o.popupTemplate&&e.popupTemplate&&(o.popupTemplate=e.popupTemplate),o.sourceLayer=o.layer=this.layer}return p}).flat().map(r=>({type:"graphic",graphic:r,layer:this.layer,mapPoint:i}))}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof y?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):_.isCollection(i)&&(t=i.map(r=>r&&r.uid).toArray()),t=t.filter(r=>r!=null),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):I}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),r=this.layer.featureCollections;if(m(r)&&r.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const p of r){const e=new c(this.view.featuresTilingScheme),o=new g({view:i,graphics:p.source,renderer:p.renderer,requestUpdateCallback:t,container:e});this._graphicsViewsFeatureCollectionMap.set(o,p),this.container.addChild(o.container),this.handles.add([h(()=>p.visible,s=>o.container.visible=s,a),h(()=>o.updating,()=>this.notifyChange("updating"),a)],n)}this._updateHighlight()}else m(this.layer.sublayers)&&this.handles.add(v(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),V(this.layer.sublayers))return;const i=[],t=this.view,r=()=>this.requestUpdate();for(const p of this.layer.sublayers){const e=new C,o=new c(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const s=new g({view:t,graphics:p.graphics,requestUpdateCallback:r,container:o});this.handles.add([p.on("graphic-update",s.graphicUpdateHandler),h(()=>p.visible,u=>s.container.visible=u,a),h(()=>s.updating,()=>this.notifyChange("updating"),a)],n),e.addChild(s.container),this.container.addChild(e),i.push(s)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=f([w("esri.views.2d.layers.MapNotesLayerView2D")],l);const Mr=l;export{Mr as default};