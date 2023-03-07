import{t as k,e as d,y as v,n as F}from"./cast-a534ae90.js";import"./geometry-eec1b371.js";import{g as G}from"./Graphic-1859ae71.js";import{j as D}from"./asyncUtils-087555fc.js";import{j as I}from"./Collection-7c37b74e.js";import{s as L,a as U}from"./Error-57322e92.js";import{n as z}from"./Evented-cbf5f368.js";import{s as V,t as u,r as g,p as O,q as P}from"./typedArrayUtil-d9bc5fbd.js";import{k as C,j as R,n as j,c as J}from"./automaticLengthMeasurementUtils-0fd27163.js";import{f as Q,P as S,l as q,w as B}from"./reactiveUtils-5869e41a.js";import{c as T}from"./screenUtils-90993e16.js";import"./ensureType-25b8cc06.js";import{g as K,m as N,r as M,x as $}from"./Polyline-b571c705.js";import{h as W}from"./GraphicsLayer-a7c6f685.js";import{y as b}from"./symbols-75e7a993.js";import{l as X}from"./ViewingMode-915d19cb.js";import{aM as Y,l as H,ai as Z,ah as tt,g as et,aL as it,aQ as ot,aJ as st,P as rt}from"./index-7dfdb274.js";import{h as pt,D as nt}from"./GraphicMover-836666dd.js";import{r as at,n as ht}from"./TranslateTooltipInfos-2bd19c7a.js";import{u as ct}from"./automaticAreaMeasurementUtils-065aa71f.js";import{w as f}from"./Extent-a1a1de42.js";import"./string-480f3e3f.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./PopupTemplate-52faab17.js";import"./Clonable-9b34e760.js";import"./fieldUtils-77ec75e2.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-5175e7d9.js";import"./enumeration-61a13175.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./Identifiable-093f90a8.js";import"./jsonUtils-c6684c52.js";import"./SimpleObservable-8e532943.js";import"./intl-70c09a3c.js";import"./messages-28bf3b89.js";import"./request-f17a8ddb.js";import"./assets-a5ce5e1a.js";import"./unitUtils-dd6fb8ee.js";import"./widget-09d2e7af.js";import"./Promise-368b703a.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./projection-0af97a56.js";import"./mathUtils-57aba1ea.js";import"./vec4-46a9b36d.js";import"./mat4-7dde83b1.js";import"./aaBoundingRect-b340cf8c.js";import"./zscale-48bab05e.js";import"./geometryEngine-0f4f9d5a.js";import"./geometryEngineBase-3dd302e0.js";import"./hydrated-00dd97bc.js";import"./collectionUtils-0365f48b.js";import"./HandleOwner-2edbba46.js";import"./Layer-ead8c88c.js";import"./Loadable-46524a7e.js";import"./BlendLayer-813950f9.js";import"./parser-01f6451e.js";import"./colorUtils-639f4d25.js";import"./mat4f32-77b3d8ac.js";import"./ScaleRangeLayer-c072e266.js";import"./ElevationInfo-88554f24.js";import"./lengthUtils-92fed992.js";import"./CIMSymbol-8f02a6e3.js";import"./Symbol-8266348e.js";import"./Color-af6e0c66.js";import"./opacityUtils-1333f803.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./persistableUrlUtils-56d43b12.js";import"./Portal-51616380.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./Basemap-f70b1b37.js";import"./deprecate-0d93948c.js";import"./loadAll-01cdf0a9.js";import"./PortalItem-6eebfb2b.js";import"./writeUtils-3bde6e49.js";import"./layerUtils-68eea656.js";import"./compilerUtils-fefa73ae.js";import"./CollectionFlattener-f43a0fce.js";import"./TablesMixin-a4aaaf91.js";import"./Cyclical-078b4564.js";import"./workers-5d67fe7a.js";import"./Connection-b756149d.js";import"./Queue-275a6362.js";import"./TileInfo-c5c8c8d2.js";import"./byteSizeEstimations-90c5a50d.js";import"./executeQueryJSON-0696009a.js";import"./normalizeUtils-6483f6b5.js";import"./query-71223310.js";import"./pbfQueryUtils-c922ef32.js";import"./pbf-8b0546e8.js";import"./OptimizedFeature-73582c6e.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-3c8de33a.js";import"./FeatureSet-9cc47aef.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./Query-13124a97.js";import"./TimeExtent-2004eecf.js";import"./RelationshipQuery-c27267ab.js";import"./LegendOptions-2e7b3d70.js";import"./utils-4aa03157.js";import"./ItemCache-bf1028d4.js";import"./MemCache-1d2f56ee.js";import"./utils-0c7f5071.js";import"./jsonUtils-559e9000.js";import"./UniqueValueRenderer-30750d31.js";import"./diffUtils-8a8cb5bc.js";import"./colorRamps-8d7efc14.js";import"./sizeVariableUtils-d4870b0d.js";import"./jsonUtils-eb568237.js";import"./styleUtils-015eeecd.js";import"./DictionaryLoader-326d0e17.js";import"./LRUCache-b9228ca3.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./featureConversionUtils-d2229ed4.js";import"./TopFeaturesQuery-9aca00bf.js";import"./FeatureLayer-9a7e04cf.js";import"./MultiOriginJSONSupport-b8792dfa.js";import"./LayerFloorInfo-e7c896e5.js";import"./FeatureLayerBase-d5682b4b.js";import"./HeightModelInfo-34f16d74.js";import"./arcgisLayerUrl-6e9db12f.js";import"./OperationalLayer-1dad72ac.js";import"./editsZScale-12d81957.js";import"./APIKeyMixin-b6e4f897.js";import"./ArcGISService-e571bcff.js";import"./CustomParametersMixin-a5d06ccc.js";import"./EditBusLayer-b5dc3689.js";import"./FeatureReductionLayer-1e5c4045.js";import"./labelingInfo-be3a629c.js";import"./labelUtils-4f4b54c6.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-9623e905.js";import"./PortalLayer-9dd15f09.js";import"./RefreshableLayer-49182ab8.js";import"./TemporalLayer-f784dd83.js";import"./TimeInfo-f76d6c20.js";import"./FeatureTemplate-c4496b93.js";import"./FeatureType-0be9420b.js";import"./fieldProperties-9e220f14.js";import"./FieldsIndex-16707836.js";import"./versionUtils-f229b9a6.js";import"./styleUtils-08eaa4d2.js";import"./popupUtils-88fed094.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-5e6ccc87.js";import"./unitBezier-881ac1eb.js";import"./vec2-ab9f47bf.js";import"./vec2f64-30dc1443.js";import"./mat3-9a8d9db7.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./TileStrategy-a5366189.js";import"./TileStore-8f580dbf.js";import"./TileKey-9cae9369.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-d08b6e58.js";import"./context-util-d4c193b5.js";import"./Subtype-a3103d84.js";import"./datetime-4f774298.js";import"./elevationInfoUtils-44cce436.js";import"./QueryEngineResult-eb704fb1.js";import"./utils-52ad3c09.js";import"./generateRendererUtils-2f0b667c.js";import"./WhereClause-6c9440a1.js";import"./utils-63166b41.js";import"./json-48e3ea08.js";import"./Util-289ce3b5.js";import"./EffectView-dffeb0bc.js";import"./ExportImageParameters-3714ed4b.js";import"./sublayerUtils-eea48c01.js";import"./webStyleSymbolUtils-6bef877f.js";import"./devEnvironmentUtils-5002a058.js";import"./dehydratedFeatures-3dcd65f1.js";import"./enums-4b2a86a0.js";import"./plane-46a8c767.js";import"./sphere-622880b9.js";import"./quatf64-c94bd656.js";import"./mat4f64-fbeb2cd1.js";import"./quat-ec16a584.js";import"./GraphicManipulator-7a117f97.js";import"./earcut-58237617.js";import"./triangle-8cd02c5d.js";import"./lineSegment-c6f0b9d1.js";class lt{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape-start"}}class mt{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape"}}class dt{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape-stop"}}class vt{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move-start"}}class _t{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move"}}class yt{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move-stop"}}class gt{constructor(e){this.added=e,this.type="vertex-select"}}class ut{constructor(e){this.removed=e,this.type="vertex-deselect"}}class xt{constructor(e,i,o,s){this.added=e,this.graphic=i,this.oldGraphic=o,this.vertices=s,this.type="vertex-add"}}class ft{constructor(e,i,o,s){this.removed=e,this.graphic=i,this.oldGraphic=o,this.vertices=s,this.type="vertex-remove"}}const _=Y.reshapeGraphics,E={vertices:{default:new b({style:"circle",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new b({style:"circle",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}}),selected:new b({style:"circle",size:_.selected.size,color:_.selected.color,outline:{color:_.selected.outlineColor,width:1}})},midpoints:{default:new b({style:"circle",size:_.midpoint.size,color:_.midpoint.color,outline:{color:_.midpoint.outlineColor,width:1}}),hover:new b({style:"circle",size:_.midpoint.size,color:_.midpoint.color,outline:{color:_.midpoint.outlineColor,width:1}})}};let m=class extends z.EventedAccessor{constructor(t){super(t),this._activeOperationInfo=null,this._editGeometryOperations=null,this._handles=new k,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingTask=null,this._stagedVertex=null,this._tooltip=null,this._viewHandles=new k,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new I,this.midpointSymbol=new b({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.tooltipOptions=new H,this.type="reshape",this.vertexGraphics=new I,this.view=null}initialize(){const t=this.view;this._highlightHelper=new pt({view:t}),this._setup(),this._handles.add([Q(()=>t==null?void 0:t.ready,()=>{const{layer:e,view:i}=this;st(i,e),this._viewHandles.add(i.on("key-down",o=>this._keyDownHandler(o),rt.TOOL))},{once:!0,initial:!0}),S(()=>this.graphic,()=>this.refresh()),S(()=>this.layer,(e,i)=>{i&&(this._clearSelection(),this._resetGraphics(i)),this.refresh()}),S(()=>this.enableMidpoints,()=>this.refresh()),q(()=>this.tooltipOptions.enabled,e=>{this._tooltip=e?new J({view:this.view}):V(this._tooltip)},B)])}destroy(){var t;this._reset(),(t=this._mover)==null||t.destroy(),this._mover=null,this._tooltip=V(this._tooltip),this._handles=V(this._handles),this._viewHandles=V(this._viewHandles)}set highlightsEnabled(t){var e;(e=this._highlightHelper)==null||e.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphic")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{midpoints:e=E.midpoints,vertices:i=E.vertices}=t||{};this._set("symbols",{midpoints:e,vertices:i})}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:t,layer:e}=this;if(!e||!t||u(t.geometry))return;const i=t.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&K(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper.add(this.graphic)}_setUpGeometryHelper(){const t=this.graphic.geometry;if(u(t)||t.type==="mesh"||t.type==="extent")return void this._logGeometryTypeError();const e=t.type==="multipoint"?new N({paths:t.points,spatialReference:t.spatialReference}):t;this._editGeometryOperations=Z.fromGeometry(e,X.Local)}_saveSnappingContextForHandle(t,e){var i;this._snappingGraphicsLayer=new W({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new tt({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:((i=e.viewEvent)==null?void 0:i.pointerType)||"mouse",excludeFeature:this.graphic,visualizer:new et(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){this._clearSelection(),this._highlightHelper.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){var t;g(this.snappingManager)&&this.snappingManager.doneSnapping(),g(this._snappingGraphicsLayer)&&((t=this.view)!=null&&t.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=V(this._editGeometryOperations),this._snappingTask=O(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this._set("selectedVertices",[])}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_getCoordinatesForUI(t){const e=M(t.clone());if(t.type==="polygon")for(const i of e){const o=i[i.length-1];i[0][0]===o[0]&&i[0][1]===o[1]&&i.length>2&&i.pop()}return e}_setupGraphics(){const t=this.graphic.geometry;if(g(t)&&(t.type==="polyline"||t.type==="polygon")){const e=this._getCoordinatesForUI(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:e,symbols:i,view:{spatialReference:o}}=this,s=[];return t==null||t.forEach((p,r)=>{p.forEach((a,h)=>{var l;const[n,c]=a;s.push(new G({geometry:new f({x:n,y:c,spatialReference:o}),symbol:(l=i==null?void 0:i.vertices)==null?void 0:l.default,attributes:{...e,pathIndex:r,pointIndex:h}}))})}),s}_createMidpointGraphics(t){const{_graphicAttributes:e,symbols:i,view:{spatialReference:o}}=this,s=[];return t==null||t.forEach((p,r)=>{p.forEach((a,h)=>{const[n,c]=a,l=p[h+1]?h+1:0;if(P(this.graphic.geometry,"type")==="polygon"||l!==0){const[y,x]=p[l],[w,A]=$([n,c],[y,x]);s.push(new G({geometry:new f({x:w,y:A,spatialReference:o}),symbol:i.midpoints.default,attributes:{...e,pathIndex:r,pointIndexStart:h,pointIndexEnd:l}}))}})}),s}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<e.length;i++){const o=[];for(let s=0;s<e.length;s++){if(i===s)continue;const p=e[i],r=e[s];p.x===r.x&&p.y===r.y&&o.push(s)}t[i].attributes.relatedGraphicIndices=o}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:o,view:s}=this,p=o.concat(i).items;t&&p.push(e),this._mover=new nt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:p,view:s,callbacks:{onGraphicClick:r=>this._onGraphicClickCallback(r),onGraphicMoveStart:r=>this._onGraphicMoveStartCallback(r),onGraphicMove:r=>this._onGraphicMoveCallback(r),onGraphicMoveStop:r=>this._onGraphicMoveStopCallback(r),onGraphicPointerOver:r=>this._onGraphicPointerOverCallback(r),onGraphicPointerOut:r=>this._onGraphicPointerOutCallback(r)}})}_onGraphicClickCallback(t){t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t);else if(this._isMidpoint(e)){if(t.viewEvent.button===2)return;const i=this.graphic.clone(),o=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],i,o)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),t.viewEvent.button===2?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:o}=t,s=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:s?"move":"reshape",totalDx:i,totalDy:o}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:o}=t;if(o===this.graphic){const{geometry:s}=o;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(g(s)&&s.type==="point"&&this._onHandleMove(o,e,i,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}))}if(!this.selectedVertices.includes(o)){if(this._clearSelection(),this._isMidpoint(o)){const s=this.graphic.clone(),p=this._createVertexFromMidpoint(o);this._emitVertexAddEvent([o],s,p)}this._addToSelection(o)}this._setUpOperation(t),this._emitReshapeStartEvent(o),this._onHandleMove(o,e,i,t,()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)})}_onGraphicMoveCallback(t){const{dx:e,dy:i,graphic:o}=t;this._activeOperationInfo.totalDx+=e,this._activeOperationInfo.totalDy+=i;const{operationType:s}=this._activeOperationInfo,{geometry:p}=o;if(!u(p)){if(s!=="move")this._onHandleMove(o,e,i,t,()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)});else if(p.type==="point")this._onHandleMove(o,e,i,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)});else if(p.type==="polyline"||p.type==="polygon"){const r=this._getCoordinatesForUI(p);this._updateVertexGraphicLocations(r),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}}}_onGraphicMoveStopCallback(t){const{dx:e,dy:i,graphic:o}=t,{operationType:s}=this._activeOperationInfo;this._activeOperationInfo.totalDx+=e,this._activeOperationInfo.totalDy+=i,this._onHandleMove(o,e,i,t,()=>s==="move"?this._emitMoveStopEvent():this._emitReshapeStopEvent(o)),this._isMidpoint(o)?this.refresh():(this._updateTooltip(this._isVertex(o)?o:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const e=this.view.spatialReference;for(const i of this.vertexGraphics){const{pathIndex:o,pointIndex:s}=i.attributes,[p,r]=t[o][s];i.geometry=new f({x:p,y:r,spatialReference:e})}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:o,pointIndexEnd:s}=e.attributes,[p,r]=t[i][o],[a,h]=t[i][s],[n,c]=$([p,r],[a,h]);e.geometry=new f({x:n,y:c,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:t}){return[(t==null?void 0:t.pathIndex)||0,(t==null?void 0:t.pointIndex)||0]}_getVertexFromEditGeometry(t){const[e,i]=this._getIndicesForVertexGraphic(t);return this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,i,o,s){if(O(this._snappingTask),!this._snappingContext)return;const p=t.geometry,r=o.type==="graphic-move-stop";if(g(this.snappingManager)&&this.selectedVertices.length<2&&!r){const a=this.snappingManager;this._stagedVertex=a.update({point:p,context:this._snappingContext}),this._syncGeometryAfterVertexMove(t,new f(this._stagedVertex),e,i,r),s(),this._snappingTask=D(async h=>{const n=await a.snap({point:p,context:this._snappingContext,signal:h});n.valid&&(this._stagedVertex=n.apply(),this._syncGeometryAfterVertexMove(t,new f(this._stagedVertex),e,i,r),s())})}else{const a=g(this._stagedVertex)?new f(this._stagedVertex):p;this._syncGeometryAfterVertexMove(t,a,e,i,r),s()}}async _syncGeometryAfterVertexMove(t,e,i,o,s=!1){const p=this._editGeometryOperations.data.geometry;if(p.type==="point")t.geometry=e;else{const{x:r,y:a}=e,[h,n]=this._getIndicesForVertexGraphic(t);let c=M(p);const l=c[h].length-1;c[h][n]=[r,a],p.type==="polygon"&&(n===0?c[h][l]=[r,a]:n===l&&(c[h][0]=[r,a])),this._isVertex(t)&&(c=this._moveRelatedCoordinates(c,t,r,a),c=this._moveSelectedHandleCoordinates(c,t,i,o,p.type==="polygon"),this._updateMidpointGraphicLocations(c)),this.graphic.geometry=p.clone();const y=this._getVertexFromEditGeometry(t),x=r-y.pos[0],w=a-y.pos[1];this._editGeometryOperations.moveVertices([y],x,w,0),s&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i,o){const{relatedGraphicIndices:s}=e.attributes;for(const p of s){const r=this.vertexGraphics.getItemAt(p),{pathIndex:a,pointIndex:h}=r.attributes;t[a][h]=[i,o],r.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,o,s){for(const p of this.selectedVertices)if(p!==e){const{pathIndex:r,pointIndex:a,relatedGraphicIndices:h}=p.attributes,n=it(p.geometry,i,o,this.view),c=t[r].length-1;t[r][a]=[n.x,n.y],p.geometry=n,s&&(a===0?t[r][c]=[n.x,n.y]:a===c&&(t[r][0]=[n.x,n.y]));for(const l of h){const y=this.vertexGraphics.getItemAt(l),{pathIndex:x,pointIndex:w}=y.attributes;t[x][w]=[n.x,n.y],y.geometry=n}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic,i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,o=i.geometry;if(u(o)||o.type!=="polygon"&&o.type!=="polyline")return[];const s=o.clone(),p=[],{pathIndex:r,pointIndexStart:a,pointIndexEnd:h}=t.attributes,{x:n,y:c}=t.geometry,l=h===0?a+1:h,y=M(s);return y[r].splice(l,0,[n,c]),t.attributes={...e,pathIndex:r,pointIndex:l,relatedGraphicIndices:[]},p.push({coordinates:y[r][l],componentIndex:r,vertexIndex:l}),this.graphic.geometry=s,p}_addToSelection(t){t instanceof G&&(t=[t]);for(const e of t)e.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(t)),this._emitSelectEvent(t)}_removeFromSelection(t,e){const{vertices:i}=this.symbols,o=e?i.hover:i.default;t instanceof G&&(t=[t]);for(const s of t)this.selectedVertices.splice(this.selectedVertices.indexOf(s),1),this._set("selectedVertices",this.selectedVertices),s.set("symbol",o);this._emitDeselectEvent(t)}_clearSelection(){if(this.selectedVertices.length){const t=this.selectedVertices;for(const e of this.selectedVertices)e.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(t)}}_keyDownHandler(t){ot.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const e=this.graphic.geometry;if(u(e)||e.type!=="polygon"&&e.type!=="polyline"||e.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;t instanceof G&&(t=[t]);const i=this.graphic.clone(),o=e.clone();let s=M(o);const p=[];t instanceof G&&(t=[t]);for(const r of t){const{x:a,y:h}=r.geometry;for(let n=0;n<s.length;n++){const c=s[n];for(let l=0;l<c.length;l++){const[y,x]=c[l];a===y&&h===x&&(p.push({coordinates:s[n][l],componentIndex:n,vertexIndex:l}),s[n].splice(Number(l),1))}}}if(o.type==="polygon")s=s.filter(r=>{if(r.length<2)return!1;const[a,h]=r[0],[n,c]=r[r.length-1];return(r.length!==2||a!==n||h!==c)&&(a===n&&h===c||r.push(r[0]),!0)}),o.rings=s;else{for(const r of s)r.length===1&&s.splice(s.indexOf(r),1);o.paths=s}this.graphic.geometry=o,this.refresh(),this._emitVertexRemoveEvent(t,i,p)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){u(this._tooltip)||(t?t===this.graphic?this._updateMoveGraphicTooltip(e):this._updateMoveVertexTooltip(e):this._tooltip.clear())}_updateMoveGraphicTooltip(t){const{_tooltip:e,tooltipOptions:i,view:o}=this;if(u(e))return;const s=new at({tooltipOptions:i});if(t){const{x:p,y:r}=t.origin,a=o.toMap(t),h=o.toMap(T(p,r)),n=C(h,a);s.distance=g(n)?n:R}e.info=s}_updateMoveVertexTooltip(t){const{_tooltip:e,graphic:{geometry:i},tooltipOptions:o,view:s}=this;if(u(e))return;const p=new ht({tooltipOptions:o});if(g(i)&&(i.type==="polygon"?p.area=ct(i):i.type==="polyline"&&(p.totalLength=j(i))),t){const{x:r,y:a}=t.origin,h=s.toMap(t),n=s.toMap(T(r,a)),c=C(n,h);p.distance=g(c)?c:R}e.info=p}_emitMoveStartEvent(t,e){const i=new vt(this.graphic,t,e);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(t,e){const i=new _t(this.graphic,t,e);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const{totalDx:t,totalDy:e}=this._activeOperationInfo,i=new yt(this.graphic,t,e);this.emit("move-stop",i),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(i)}_emitReshapeStartEvent(t){const e=new lt(this.graphic,t,this.selectedVertices);this.emit("reshape-start",e),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(e)}_emitReshapeEvent(t){const e=new mt(this.graphic,t,this.selectedVertices);this.emit("reshape",e),this.callbacks.onReshape&&this.callbacks.onReshape(e)}_emitReshapeStopEvent(t){const e=new dt(this.graphic,t,this.selectedVertices);this.emit("reshape-stop",e),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(e)}_emitSelectEvent(t){const e=new gt(t);this.emit("select",e),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(e)}_emitDeselectEvent(t){const e=new ut(t);this.emit("deselect",e),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(e)}_emitVertexAddEvent(t,e,i){const o=new xt(t,this.graphic,e,i);this.emit("vertex-add",o),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(o)}_emitVertexRemoveEvent(t,e,i){const o=new ft(t,this.graphic,e,i);this.emit("vertex-remove",o),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(o)}_logGeometryTypeError(){L.getLogger(this.declaredClass).error(new U("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};d([v()],m.prototype,"_tooltip",void 0),d([v()],m.prototype,"callbacks",void 0),d([v()],m.prototype,"enableMidpoints",void 0),d([v()],m.prototype,"enableMovement",void 0),d([v()],m.prototype,"enableVertices",void 0),d([v()],m.prototype,"graphic",void 0),d([v({value:!0})],m.prototype,"highlightsEnabled",null),d([v()],m.prototype,"layer",void 0),d([v({readOnly:!0})],m.prototype,"midpointGraphics",void 0),d([v()],m.prototype,"midpointSymbol",void 0),d([v({readOnly:!0})],m.prototype,"selectedVertices",void 0),d([v()],m.prototype,"snappingManager",void 0),d([v({readOnly:!0})],m.prototype,"state",null),d([v({value:E})],m.prototype,"symbols",null),d([v({type:H})],m.prototype,"tooltipOptions",void 0),d([v({readOnly:!0})],m.prototype,"type",void 0),d([v({readOnly:!0})],m.prototype,"vertexGraphics",void 0),d([v()],m.prototype,"view",void 0),m=d([F("esri.views.draw.support.Reshape")],m);const is=m;export{is as default};
