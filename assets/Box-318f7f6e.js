import{e as d,y as u,n as ct}from"./cast-a534ae90.js";import"./geometry-eec1b371.js";import{g as R}from"./Graphic-6c08e65d.js";import{n as lt}from"./Evented-cbf5f368.js";import{s as X,r as P,t as S}from"./typedArrayUtil-d9bc5fbd.js";import{c as D,k as $,j as mt}from"./automaticLengthMeasurementUtils-83ea356f.js";import{f as _t,l as k,w as dt}from"./reactiveUtils-5869e41a.js";import"./ensureType-25b8cc06.js";import{u as I}from"./aaBoundingRect-b340cf8c.js";import{v as B,m as Q,u as ut,r as V,h as U}from"./Polyline-b571c705.js";import{w as g}from"./Extent-a1a1de42.js";import{y as M,S as F,m as gt}from"./symbols-9fcb6cc2.js";import{aM as vt,l as W,aL as x,aN as T,aO as yt,aP as ft,aJ as Gt}from"./index-40f88256.js";import{h as xt,D as wt}from"./GraphicMover-a40d20da.js";import{i as bt,p as St}from"./ExtentTooltipInfos-f4055dd0.js";import{r as kt}from"./TranslateTooltipInfos-40f8c2db.js";import"./string-480f3e3f.js";import"./Error-57322e92.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./PopupTemplate-f97bb051.js";import"./Clonable-9b34e760.js";import"./Collection-7c37b74e.js";import"./SimpleObservable-8e532943.js";import"./fieldUtils-b2df74c4.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-a976a73c.js";import"./enumeration-61a13175.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./Identifiable-093f90a8.js";import"./jsonUtils-c6684c52.js";import"./intl-7d39a8c0.js";import"./messages-28bf3b89.js";import"./request-24011425.js";import"./assets-cd44347b.js";import"./unitUtils-dd6fb8ee.js";import"./widget-4abc68df.js";import"./Promise-368b703a.js";import"./uuid-73213768.js";import"./dom-5b7af1bf.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./projection-acd73147.js";import"./mathUtils-57aba1ea.js";import"./vec4-46a9b36d.js";import"./mat4-7dde83b1.js";import"./zscale-48bab05e.js";import"./geometryEngine-0f4f9d5a.js";import"./geometryEngineBase-3dd302e0.js";import"./hydrated-00dd97bc.js";import"./CIMSymbol-72a9d286.js";import"./Symbol-8266348e.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./screenUtils-90993e16.js";import"./opacityUtils-1333f803.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./persistableUrlUtils-d0777bec.js";import"./collectionUtils-0365f48b.js";import"./Portal-c6e03126.js";import"./Loadable-46524a7e.js";import"./PortalGroup-d495847c.js";import"./PortalUser-1016c43c.js";import"./Basemap-59ed9516.js";import"./deprecate-0d93948c.js";import"./loadAll-01cdf0a9.js";import"./asyncUtils-087555fc.js";import"./PortalItem-e4ba4b94.js";import"./writeUtils-3bde6e49.js";import"./layerUtils-68eea656.js";import"./compilerUtils-fefa73ae.js";import"./CollectionFlattener-f43a0fce.js";import"./TablesMixin-55858fba.js";import"./Layer-cea228f0.js";import"./Cyclical-078b4564.js";import"./workers-af024c50.js";import"./Connection-b591250e.js";import"./Queue-275a6362.js";import"./TileInfo-c5c8c8d2.js";import"./HandleOwner-2edbba46.js";import"./byteSizeEstimations-90c5a50d.js";import"./executeQueryJSON-29279a46.js";import"./normalizeUtils-0f537694.js";import"./query-b7b3a76b.js";import"./pbfQueryUtils-c922ef32.js";import"./pbf-8b0546e8.js";import"./OptimizedFeature-73582c6e.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-3c8de33a.js";import"./FeatureSet-deb2029d.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./Query-13124a97.js";import"./TimeExtent-2004eecf.js";import"./RelationshipQuery-c27267ab.js";import"./LegendOptions-2e7b3d70.js";import"./utils-4469bf65.js";import"./BlendLayer-813950f9.js";import"./parser-01f6451e.js";import"./mat4f32-77b3d8ac.js";import"./ItemCache-bf1028d4.js";import"./MemCache-1d2f56ee.js";import"./utils-c81a5c52.js";import"./jsonUtils-1c5cdf77.js";import"./UniqueValueRenderer-73d567ad.js";import"./diffUtils-8a8cb5bc.js";import"./colorRamps-8d7efc14.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-92fed992.js";import"./jsonUtils-8c02ff16.js";import"./styleUtils-391927cf.js";import"./DictionaryLoader-2a334243.js";import"./LRUCache-b9228ca3.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./featureConversionUtils-d2229ed4.js";import"./TopFeaturesQuery-9aca00bf.js";import"./FeatureLayer-534ff006.js";import"./MultiOriginJSONSupport-b8792dfa.js";import"./LayerFloorInfo-f184c8f5.js";import"./FeatureLayerBase-c0aa3674.js";import"./HeightModelInfo-34f16d74.js";import"./arcgisLayerUrl-bed3cba1.js";import"./OperationalLayer-9c50475b.js";import"./ElevationInfo-80227ecc.js";import"./editsZScale-12d81957.js";import"./APIKeyMixin-b6e4f897.js";import"./ArcGISService-aada3b5d.js";import"./CustomParametersMixin-a5d06ccc.js";import"./EditBusLayer-b5dc3689.js";import"./FeatureReductionLayer-fcaeb34a.js";import"./labelingInfo-c70ad911.js";import"./labelUtils-4f4b54c6.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-9623e905.js";import"./PortalLayer-12f4a535.js";import"./RefreshableLayer-49182ab8.js";import"./ScaleRangeLayer-c072e266.js";import"./TemporalLayer-c74d13d4.js";import"./TimeInfo-f76d6c20.js";import"./FeatureTemplate-c4496b93.js";import"./FeatureType-0be9420b.js";import"./fieldProperties-4207e953.js";import"./FieldsIndex-02142c8a.js";import"./versionUtils-fabd8b3a.js";import"./styleUtils-08eaa4d2.js";import"./popupUtils-1ecc877c.js";import"./colorUtils-82440b70.js";import"./mat2d-d0b91e3e.js";import"./Scheduler-5e6ccc87.js";import"./GraphicsLayer-b332f442.js";import"./ViewingMode-915d19cb.js";import"./unitBezier-881ac1eb.js";import"./vec2-ab9f47bf.js";import"./vec2f64-30dc1443.js";import"./mat3-9a8d9db7.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./TileStrategy-a5366189.js";import"./TileStore-8f580dbf.js";import"./TileKey-9cae9369.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-d08b6e58.js";import"./context-util-d4c193b5.js";import"./Subtype-a3103d84.js";import"./datetime-4f774298.js";import"./elevationInfoUtils-c3025fae.js";import"./QueryEngineResult-92e13fe4.js";import"./utils-52ad3c09.js";import"./generateRendererUtils-2f0b667c.js";import"./WhereClause-6c9440a1.js";import"./utils-44a68fd6.js";import"./json-48e3ea08.js";import"./Util-289ce3b5.js";import"./EffectView-dffeb0bc.js";import"./ExportImageParameters-ba01802d.js";import"./sublayerUtils-eea48c01.js";import"./webStyleSymbolUtils-0b165621.js";import"./devEnvironmentUtils-5002a058.js";import"./dehydratedFeatures-3dcd65f1.js";import"./enums-4b2a86a0.js";import"./plane-46a8c767.js";import"./sphere-622880b9.js";import"./quatf64-c94bd656.js";import"./mat4f64-fbeb2cd1.js";import"./quat-ec16a584.js";import"./GraphicManipulator-473c875a.js";function j(t){let e=0,i=0;const r=t.length;let o,s=t[i];for(i=0;i<r-1;i++)o=t[i+1],e+=(o[0]-s[0])*(o[1]+s[1]),s=o;return e>=0}function L(t,e,i,r){const o=[];for(const s of t){const h=s.slice(0);o.push(h);const n=e*(s[0]-r.x)-i*(s[1]-r.y)+r.x,a=i*(s[0]-r.x)+e*(s[1]-r.y)+r.y;h[0]=n,h[1]=a}return o}function E(t,e,i){const r=t.spatialReference,o=e*Math.PI/180,s=Math.cos(o),h=Math.sin(o);if("xmin"in t&&(i=i??t.center,t=new B({spatialReference:r,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){i=i??t.extent.center;const n=[];for(const a of t.paths)n.push(L(a,s,h,i));return new Q({spatialReference:r,paths:n})}if("rings"in t){i=i??t.extent.center;const n=[];for(const a of t.rings){const c=j(a),p=L(a,s,h,i);j(p)!==c&&p.reverse(),n.push(p)}return new B({spatialReference:r,rings:n})}if("x"in t){i=i??t;const n=new g({x:s*(t.x-i.x)-h*(t.y-i.y)+i.x,y:h*(t.x-i.x)+s*(t.y-i.y)+i.y,spatialReference:r});return t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}return"points"in t?(i=i??t.extent.center,new ut({points:L(t.points,s,h,i),spatialReference:r})):null}class Rt{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.dx=r,this.dy=o,this.type="move-start"}}class It{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.dx=r,this.dy=o,this.type="move"}}class q{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.dx=r,this.dy=o,this.type="move-stop"}}class Mt{constructor(e,i,r){this.graphics=e,this.mover=i,this.angle=r,this.type="rotate-start"}}class Ot{constructor(e,i,r){this.graphics=e,this.mover=i,this.angle=r,this.type="rotate"}}class J{constructor(e,i,r){this.graphics=e,this.mover=i,this.angle=r,this.type="rotate-stop"}}class Ct{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.xScale=r,this.yScale=o,this.type="scale-start"}}class Ht{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.xScale=r,this.yScale=o,this.type="scale"}}class K{constructor(e,i,r,o){this.graphics=e,this.mover=i,this.xScale=r,this.yScale=o,this.type="scale-stop"}}const m=vt.transformGraphics,w={centerIndicator:new M({style:"cross",size:m.center.size,color:m.center.color}),fill:{default:new F({color:m.fill.color,outline:{color:m.fill.outlineColor,join:"round",width:1}}),active:new F({color:m.fill.stagedColor,outline:{color:m.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new M({style:"square",size:m.vertex.size,color:m.vertex.color,outline:{color:m.vertex.outlineColor,width:1}}),hover:new M({style:"square",size:m.vertex.hoverSize,color:m.vertex.hoverColor,outline:{color:m.vertex.hoverOutlineColor,width:1}})},rotator:{default:new M({style:"circle",size:m.vertex.size,color:m.vertex.color,outline:{color:m.vertex.outlineColor,width:1}}),hover:new M({style:"circle",size:m.vertex.hoverSize,color:m.vertex.hoverColor,outline:{color:m.vertex.hoverOutlineColor,width:1}})},rotatorLine:new gt({color:m.line.color,width:1})};let _=class extends lt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._tooltip=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=w,this.tooltipOptions=new W,this.view=null,this._getBounds=(()=>{const e=I();return(i,r)=>{i[0]=Number.POSITIVE_INFINITY,i[1]=Number.POSITIVE_INFINITY,i[2]=Number.NEGATIVE_INFINITY,i[3]=Number.NEGATIVE_INFINITY;for(const o of r){if(!o)continue;let s,h,n,a;if(o.type==="point")s=n=o.x,h=a=o.y;else if(o.type==="multipoint"){const c=V(o);[s,h,n,a]=U(e,[c])}else if(o.type==="extent")[s,h,n,a]=[o.xmin,o.ymin,o.xmax,o.ymax];else{const c=V(o);[s,h,n,a]=U(e,c)}i[0]=Math.min(s,i[0]),i[1]=Math.min(h,i[1]),i[2]=Math.max(n,i[2]),i[3]=Math.max(a,i[3])}return i}})()}initialize(){const t=this.view;this._highlightHelper=new xt({view:t}),this._tooltip=new D({view:t}),this._setup(),this.addHandles([_t(()=>t==null?void 0:t.ready,()=>{const{layer:e,view:i}=this;Gt(i,e)},{once:!0,initial:!0}),k(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),k(()=>t==null?void 0:t.scale,()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),k(()=>this.graphics,()=>this.refresh()),k(()=>this.layer,(e,i)=>{i&&this._resetGraphics(i),this.refresh()}),k(()=>this.highlightsEnabled,()=>{var e;(e=this._highlightHelper)==null||e.removeAll(),this._setUpHighlights()}),k(()=>this.tooltipOptions.enabled,e=>{this._tooltip=e?new D({view:this.view}):X(this._tooltip)},dt),this.on("move-start",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onMoveStart)==null?void 0:r.call(i,e)}),this.on("move",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onMove)==null?void 0:r.call(i,e)}),this.on("move-stop",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onMoveStop)==null?void 0:r.call(i,e)}),this.on("rotate-start",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onRotateStart)==null?void 0:r.call(i,e)}),this.on("rotate",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onRotate)==null?void 0:r.call(i,e)}),this.on("rotate-stop",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onRotateStop)==null?void 0:r.call(i,e)}),this.on("scale-start",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onScaleStart)==null?void 0:r.call(i,e)}),this.on("scale",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onScale)==null?void 0:r.call(i,e)}),this.on("scale-stop",e=>{var i,r;return(r=(i=this.callbacks)==null?void 0:i.onScaleStop)==null?void 0:r.call(i,e)})])}destroy(){this._reset(),this._tooltip=X(this._tooltip)}get state(){var i;const t=((i=this.view)==null?void 0:i.ready)??!1,e=this.graphics.length&&this.layer;return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const r=i.geometry,o=x(r,t,e,this.view);i.geometry=o}this.refresh(),this.emit("move-stop",new q(this.graphics,null,t,e))}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const r=i.geometry,o=T(r,t,e);i.geometry=o}this.refresh(),this.emit("scale-stop",new K(this.graphics,null,t,e))}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const i=this._vertexGraphics[1].geometry.x,r=this._vertexGraphics[3].geometry.y;e=new g(i,r,this.view.spatialReference)}for(const i of this.graphics){const r=i.geometry,o=E(r,t,e);i.geometry=o}this.refresh(),this.emit("rotate-stop",new J(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._highlightHelper.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new wt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}})}_getStartInfo(t){const[e,i,r,o]=this._getBoxBounds(I()),s=Math.abs(r-e),h=Math.abs(o-i),n=(r+e)/2,a=(o+i)/2,{x:c,y:p}=t.geometry;return{width:s,height:h,centerX:n,centerY:a,startX:c,startY:p,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const e=t.geometry,[i,r,o,s]=this._getBounds(I(),[e]);return{width:Math.abs(o-i),height:Math.abs(s-r),centerX:(o+i)/2,centerY:(s+r)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:r,_backgroundGraphic:o,_vertexGraphics:s,_rotateHandleGraphic:h,symbols:n}=this,a=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),o.symbol=n.fill.active,this._startInfo=this._getStartInfo(a),this._updateTooltip(a,t.viewEvent),a===h?(this.view.cursor="grabbing",this.emit("rotate-start",new Mt(this.graphics,a,e))):s.includes(a)?(this._activeHandleGraphic=a,this.emit("scale-start",new Ct(this.graphics,a,i,r))):this.emit("move-start",new Rt(this.graphics,a,t.dx,t.dy))}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(e))this._scaleGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("scale",new Ht(this.graphics,e,this._xScale,this._yScale));else if(e===this._rotateHandleGraphic)this._rotateGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("rotate",new Ot(this.graphics,e,this._angleOfRotation));else{const{dx:i,dy:r}=t;this._totalDx+=i,this._totalDy+=r,this._moveGraphic(e,i,r),this._updateTooltip(e,t.viewEvent),this.emit("move",new It(this.graphics,e,i,r))}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:r,_totalDy:o,_xScale:s,_yScale:h,_vertexGraphics:n,_rotateHandleGraphic:a}=this;this.refresh(),e===a?(this.view.cursor="pointer",this.emit("rotate-stop",new J(this.graphics,e,i))):n.includes(e)?this.emit("scale-stop",new K(this.graphics,e,s,h)):this.emit("move-stop",new q(this.graphics,e,r,o))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:e,_vertexGraphics:i,graphics:r,_rotateHandleGraphic:o,symbols:s,view:h}=this,n=t.graphic;if(n===o)return o.symbol=s.rotator.hover,h.cursor="pointer",void this._updateTooltip(n);if(r.includes(n)||n===e)return void(h.cursor="move");if(!i.includes(n))return void(h.cursor="pointer");this._updateTooltip(n),t.graphic.symbol=s.handles.hover;const a=h.rotation;let c,p=t.index;switch(p<8&&(a>=0&&a<45?p%=8:p=a>=45&&a<90?(p+1)%8:a>=90&&a<135?(p+2)%8:a>=135&&a<180?(p+3)%8:a>=180&&a<225?(p+4)%8:a>=225&&a<270?(p+5)%8:a>=270&&a<315?(p+6)%8:(p+7)%8),p){case 0:case 4:c="nwse-resize";break;case 1:case 5:c="ns-resize";break;case 2:case 6:c="nesw-resize";break;case 3:case 7:c="ew-resize";break;default:c="pointer"}h.cursor=c}_onGraphicPointerOutCallback(t){const{_vertexGraphics:e,_rotateHandleGraphic:i,symbols:r,view:o}=this;t.graphic===i?i.symbol=r.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=r.handles.default),o.cursor="default",this._updateTooltip()}_scaleGraphic(t){const{_startInfo:e,_vertexGraphics:i,preserveAspectRatio:r,view:o}=this,{centerX:s,centerY:h,startX:n,startY:a}=e,{resolution:c,transform:p}=o.state,l=i.indexOf(t);l!==1&&l!==5||this._updateX(t,s),l!==3&&l!==7||this._updateY(t,h);const{x:v,y}=t.geometry,Z=p[0]*v+p[2]*y+p[4],tt=p[1]*v+p[3]*y+p[5],O=e.graphicInfos.map(b=>b.geometry);if(r){const b=p[0]*s+p[2]*h+p[4],C=p[1]*s+p[3]*h+p[5],f=p[0]*n+p[2]*a+p[4],G=p[1]*n+p[3]*a+p[5];this._xScale=this._yScale=yt(b,C,f,G,Z,tt);for(const H of O){const z=O.indexOf(H);this.graphics[z].geometry=T(H,this._xScale,this._yScale,[s,h])}this._updateBackgroundGraphic()}else{const{width:b,height:C}=e;let f=v-n,G=a-y;if(l===1||l===5?f=0:l!==3&&l!==7||(G=0),f===0&&G===0)return;const H=b+(n>s?f:-1*f),z=C+(a<h?G:-1*G),it=s+f/2,et=h+G/2;this._xScale=H/b||1,this._yScale=z/C||1,l===1||l===5?this._xScale=1:l!==3&&l!==7||(this._yScale=1);const rt=(it-s)/c,ot=(et-h)/c,st=T(e.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=x(st,rt,ot,o,!0);const{centerX:Y,centerY:N}=this._getGraphicInfo(this._backgroundGraphic),at=(Y-s)/c,ht=-1*(N-h)/c;for(const A of O){const pt=O.indexOf(A),nt=T(A,this._xScale,this._yScale,[s,h]);this.graphics[pt].geometry=x(nt,at,ht,o,!0)}this._centerGraphic.geometry=new g(Y,N,o.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:r,startY:o,box:s,rotate:h}=this._startInfo,n=new g(r,o,this.view.spatialReference),a=new g(e,i,this.view.spatialReference),c=t.geometry;this._angleOfRotation=ft(n,c,a);const p=this._startInfo.graphicInfos.map(l=>l.geometry);for(const l of p){const v=p.indexOf(l),y=E(l,this._angleOfRotation,a);this.graphics[v].geometry=y}this._backgroundGraphic.geometry=E(s,this._angleOfRotation,a),this._rotateHandleGraphic.geometry=E(h,this._angleOfRotation,a)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const r=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(r,e,i,this.view);for(const o of this.graphics)o!==t&&(o.geometry=x(o.geometry,e,i,this.view))}else if(t===this._centerGraphic){const r=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(r,e,i,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const r of this.graphics)r.geometry=x(r.geometry,e,i,this.view)}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphics.length&&((t=this._highlightHelper)==null||t.add(this.graphics))}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._centerGraphic=new R(null,e.centerIndicator,t),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new R(null,e.fill.default,t),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new R(null,e.rotatorLine,t),this._rotateHandleGraphic=new R(null,e.rotator.default,t),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let i=0;i<8;i++)this._vertexGraphics.push(new R(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach((e,i)=>{const[r,o]=t[i];this._updateXY(e,r,o)})}_updateBackgroundGraphic(){const t=this._getCoordinates();this._backgroundGraphic.geometry=new B({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,r]=this._getBoxBounds(I()),o=(i+t)/2,s=(r+e)/2;this._centerGraphic.geometry=new g(o,s,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:e}=this._vertexGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new g(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this._vertexGraphics.length||!this._rotateHandleGraphic||!this._rotateHandleGraphic.geometry)return;const t=this._vertexGraphics[1].geometry,e=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new Q({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new g(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new g(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new g(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>t&&P(t.geometry)&&t.geometry.type==="extent")}_getBoxBounds(t){const e=this.graphics.map(i=>i.geometry);return this._getBounds(t,e)}_getCoordinates(t){const[e,i,r,o]=this._getBoxBounds(I());if(t){const s=(e+r)/2,h=(o+i)/2;return[[e,o],[s,o],[r,o],[r,h],[r,i],[s,i],[e,i],[e,h]]}return[[e,o],[r,o],[r,i],[e,i]]}_updateTooltip(t,e){if(S(this._tooltip))return;if(!t)return void this._tooltip.clear();const{_backgroundGraphic:i,graphics:r,_vertexGraphics:o,_rotateHandleGraphic:s}=this;t===s?this._updateRotateTooltip():o.includes(t)?this._updateScaleTooltip():(r.includes(t)||t===i)&&this._updateMoveTooltip(e)}_updateRotateTooltip(){S(this._tooltip)||(this._tooltip.info=new bt({tooltipOptions:this.tooltipOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{_tooltip:t,_xScale:e,_yScale:i,tooltipOptions:r,view:o}=this;if(S(t))return;const s=o.spatialReference,h=this._getCoordinates(),n=new g(h[0][0],h[0][1],s),a=new g(h[1][0],h[1][1],s),c=new g(h[2][0],h[2][1],s),p=$(n,a),l=$(a,c);if(S(p)||S(l))return;const v=Math.abs(e),y=Math.abs(i);t.info=new St({tooltipOptions:r,xScale:v,yScale:y,xSize:p,ySize:l})}_updateMoveTooltip(t){const{_tooltip:e,tooltipOptions:i,view:r}=this;if(S(e))return;const o=new kt({tooltipOptions:i});if(t){const{x:s,y:h}=t.origin,n=r.toMap(t),a=r.toMap({x:s,y:h}),c=$(a,n);o.distance=P(c)?c:mt}e.info=o}};d([u()],_.prototype,"_tooltip",void 0),d([u({readOnly:!0})],_.prototype,"type",void 0),d([u()],_.prototype,"callbacks",void 0),d([u()],_.prototype,"enableMovement",void 0),d([u()],_.prototype,"enableRotation",void 0),d([u()],_.prototype,"enableScaling",void 0),d([u()],_.prototype,"graphics",void 0),d([u()],_.prototype,"highlightsEnabled",void 0),d([u()],_.prototype,"layer",void 0),d([u()],_.prototype,"preserveAspectRatio",void 0),d([u()],_.prototype,"showCenterGraphic",void 0),d([u({readOnly:!0})],_.prototype,"state",null),d([u({value:w,cast(t){const{centerIndicator:e=w.centerIndicator,fill:i=w.fill,handles:r=w.handles,rotator:o=w.rotator,rotatorLine:s=w.rotatorLine}=t||{};return{centerIndicator:e,fill:i,handles:r,rotator:o,rotatorLine:s}}})],_.prototype,"symbols",void 0),d([u({type:W})],_.prototype,"tooltipOptions",void 0),d([u({constructOnly:!0})],_.prototype,"view",void 0),_=d([ct("esri.views.draw.support.Box")],_);const no=_;export{no as default};