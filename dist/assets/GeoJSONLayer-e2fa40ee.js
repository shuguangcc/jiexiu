import{_ as w}from"./preload-helper-101896b7.js";import{e as r,y as i,n as b}from"./cast-a534ae90.js";import"./geometry-eec1b371.js";import{k as j}from"./PopupTemplate-52faab17.js";import"./UniqueValueRenderer-30750d31.js";import{b as J,n as N}from"./jsonUtils-559e9000.js";import{r as O,t as R}from"./typedArrayUtil-d9bc5fbd.js";import{O as P}from"./MultiOriginJSONSupport-b8792dfa.js";import{x as q,w as k}from"./promiseUtils-32d9c228.js";import{j as y}from"./request-f17a8ddb.js";import"./ensureType-25b8cc06.js";import{i as I}from"./typeUtils-cd52dc20.js";import{b as T}from"./Layer-ead8c88c.js";import{s as D,a as f}from"./Error-57322e92.js";import{h as G}from"./string-480f3e3f.js";import{m as L}from"./Loadable-46524a7e.js";import{u as Q}from"./workers-5d67fe7a.js";import{l as Z}from"./clientSideDefaults-207a0a96.js";import z from"./FeatureSet-9cc47aef.js";import{a as x,k as F}from"./Extent-a1a1de42.js";import{v as C}from"./Polyline-b571c705.js";import{n as V}from"./BlendLayer-813950f9.js";import{o as A}from"./CustomParametersMixin-a5d06ccc.js";import{n as U,p as W}from"./FeatureReductionLayer-1e5c4045.js";import{c as B,d as M,j as H,m as K,a as X,w as Y,p as tt,l as et,f as rt}from"./OperationalLayer-1dad72ac.js";import{c as ot}from"./OrderedLayer-9623e905.js";import{v as it}from"./PortalLayer-9dd15f09.js";import{p as st}from"./RefreshableLayer-49182ab8.js";import{t as nt}from"./ScaleRangeLayer-c072e266.js";import{a as at}from"./TemporalLayer-f784dd83.js";import{p as pt}from"./FeatureTemplate-c4496b93.js";import{n as lt}from"./FeatureType-0be9420b.js";import{y as ut}from"./Field-1d4f9ca4.js";import{s as dt}from"./fieldProperties-9e220f14.js";import{F as g,b as mt}from"./fieldUtils-77ec75e2.js";import{j as ht,i as ct}from"./labelingInfo-be3a629c.js";import{x as h}from"./Query-13124a97.js";import{p as yt}from"./popupUtils-88fed094.js";import"./nextTick-3ee5a785.js";import"./Clonable-9b34e760.js";import"./Collection-7c37b74e.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./jsonMap-190c5593.js";import"./enumeration-61a13175.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./Identifiable-093f90a8.js";import"./symbols-75e7a993.js";import"./CIMSymbol-8f02a6e3.js";import"./Symbol-8266348e.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./screenUtils-90993e16.js";import"./opacityUtils-1333f803.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./aaBoundingRect-b340cf8c.js";import"./persistableUrlUtils-56d43b12.js";import"./collectionUtils-0365f48b.js";import"./Portal-51616380.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./LegendOptions-2e7b3d70.js";import"./arcadeOnDemand-5175e7d9.js";import"./reactiveUtils-5869e41a.js";import"./diffUtils-8a8cb5bc.js";import"./colorRamps-8d7efc14.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-1859ae71.js";import"./jsonUtils-c6684c52.js";import"./compilerUtils-fefa73ae.js";import"./lengthUtils-92fed992.js";import"./unitUtils-dd6fb8ee.js";import"./jsonUtils-eb568237.js";import"./styleUtils-015eeecd.js";import"./DictionaryLoader-326d0e17.js";import"./LRUCache-b9228ca3.js";import"./MemCache-1d2f56ee.js";import"./deprecate-0d93948c.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./Promise-368b703a.js";import"./Connection-b756149d.js";import"./Queue-275a6362.js";import"./assets-a5ce5e1a.js";import"./intl-70c09a3c.js";import"./messages-28bf3b89.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-59981e75.js";import"./fieldType-b34e5d2d.js";import"./parser-01f6451e.js";import"./mat4f32-77b3d8ac.js";import"./mat4-7dde83b1.js";import"./TimeExtent-2004eecf.js";import"./ElevationInfo-88554f24.js";import"./asyncUtils-087555fc.js";import"./PortalItem-6eebfb2b.js";import"./TimeInfo-f76d6c20.js";import"./FieldsIndex-16707836.js";import"./labelUtils-4f4b54c6.js";const E="esri.layers.graphics.sources.GeoJSONSource",v=D.getLogger(E);let d=class extends L{constructor(){super(...arguments),this.type="geojson",this.refresh=q(async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=O(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(o=>z.fromJSON(o))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(o=>({count:o.count,extent:x.fromJSON(o.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,o=[],n=[],u=[];if(t.addFeatures)for(const a of t.addFeatures)o.push(this._serializeFeature(a));if(t.deleteFeatures)for(const a of t.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[e]!=null&&n.push(a.attributes[e]);if(t.updateFeatures)for(const a of t.updateFeatures)u.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:u,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:l})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(l)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new f("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,o=this._geometryForSerialization(t);return o?{geometry:o.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return R(e)?null:e.type==="mesh"||e.type==="extent"?C.fromExtent(e.extent):e}async _startWorker(t){this._connection=await Q("GeoJSONSourceWorker",{strategy:G("feature-layers-workers")?"dedicated":"local",signal:t});const{fields:e,spatialReference:o,hasZ:n,geometryType:u,objectIdField:a,url:p,timeInfo:l,customParameters:S}=this.layer,_=this.layer.originOf("spatialReference")==="defaults",$={url:p,customParameters:S,fields:e&&e.map(c=>c.toJSON()),geometryType:I.toJSON(u),hasZ:n,objectIdField:a,timeInfo:l?l.toJSON():null,spatialReference:_?null:o&&o.toJSON()},m=await this._connection.invoke("load",$,{signal:t});for(const c of m.warnings)v.warn(c.message,{layer:this.layer,warning:c});m.featureErrors.length&&v.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=Z(this.sourceJSON.hasZ,!0)}};r([i()],d.prototype,"capabilities",void 0),r([i()],d.prototype,"type",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"sourceJSON",void 0),d=r([b(E)],d);const ft=dt();let s=class extends ot(A(U(W(V(at(nt(st(B(it(P(T))))))))))){constructor(t){super(t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var t;(t=this.source)==null||t.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(k).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),mt(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?y(this.url):null}set renderer(t){g(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=y(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async applyEdits(t,e){const o=await w(()=>import("./editingSupport-cdeabe48.js"),["assets/editingSupport-cdeabe48.js","assets/Graphic-1859ae71.js","assets/cast-a534ae90.js","assets/typedArrayUtil-d9bc5fbd.js","assets/string-480f3e3f.js","assets/Error-57322e92.js","assets/ensureType-25b8cc06.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-32d9c228.js","assets/geometry-eec1b371.js","assets/Extent-a1a1de42.js","assets/Polyline-b571c705.js","assets/typeUtils-cd52dc20.js","assets/jsonMap-190c5593.js","assets/PopupTemplate-52faab17.js","assets/Clonable-9b34e760.js","assets/Collection-7c37b74e.js","assets/Evented-cbf5f368.js","assets/SimpleObservable-8e532943.js","assets/fieldUtils-77ec75e2.js","assets/preload-helper-101896b7.js","assets/arcadeOnDemand-5175e7d9.js","assets/enumeration-61a13175.js","assets/number-2ab8ca0d.js","assets/locale-30120714.js","assets/Identifiable-093f90a8.js","assets/symbols-75e7a993.js","assets/CIMSymbol-8f02a6e3.js","assets/Symbol-8266348e.js","assets/Color-af6e0c66.js","assets/colorUtils-639f4d25.js","assets/mathUtils-57aba1ea.js","assets/vec3-1863987c.js","assets/vec3f64-6cd30318.js","assets/common-c186b691.js","assets/vec4-46a9b36d.js","assets/screenUtils-90993e16.js","assets/opacityUtils-1333f803.js","assets/symbolLayerUtils3D-c8c40895.js","assets/aaBoundingBox-4a83dbbc.js","assets/aaBoundingRect-b340cf8c.js","assets/request-f17a8ddb.js","assets/persistableUrlUtils-56d43b12.js","assets/collectionUtils-0365f48b.js","assets/Portal-51616380.js","assets/Loadable-46524a7e.js","assets/Promise-368b703a.js","assets/PortalGroup-d495847c.js","assets/PortalUser-e16fc7d1.js","assets/jsonUtils-c6684c52.js","assets/uuid-73213768.js","assets/normalizeUtils-6483f6b5.js","assets/EditBusLayer-b5dc3689.js"]);await this.load();const n=await o.applyEdits(this,this.source,t,e);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(t,e){return super.on(t,e)}createPopupTemplate(t){return yt(this,t)}createQuery(){const t=new h,e=this.get("capabilities.data");t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return t.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,t}getFieldDomain(t,e){let o,n=!1;const u=e&&e.feature,a=u&&u.attributes,p=this.typeIdField&&a&&a[this.typeIdField];return p!=null&&this.types&&(n=this.types.some(l=>l.id==p&&(o=l.domains&&l.domains[t],o&&o.type==="inherited"&&(o=this._getLayerDomain(t)),!0))),n||o||(o=this._getLayerDomain(t)),o}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(h.from(t)||this.createQuery(),e)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(h.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(h.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(h.from(t)||this.createQuery(),e))}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return O(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_getLayerDomain(t){if(!this.fields)return null;let e=null;return this.fields.some(o=>(o.name===t&&(e=o.domain),!!e)),e}};r([i({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",null),r([i({type:String})],s.prototype,"copyright",void 0),r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([i({type:String})],s.prototype,"displayField",void 0),r([i({type:Boolean})],s.prototype,"editingEnabled",void 0),r([i(M)],s.prototype,"elevationInfo",void 0),r([i({type:[ut],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([i(ft.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({type:x,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],s.prototype,"geometryType",void 0),r([i({type:Boolean})],s.prototype,"hasZ",void 0),r([i(H)],s.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([i(K)],s.prototype,"labelsVisible",void 0),r([i({type:[ht],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ct},write:!0}})],s.prototype,"labelingInfo",void 0),r([i(X)],s.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([i(Y)],s.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],s.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i(tt)],s.prototype,"popupEnabled",void 0),r([i({type:j,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([i({types:J,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:N}}}})],s.prototype,"renderer",null),r([i(et)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({type:F})],s.prototype,"spatialReference",void 0),r([i({type:[pt]})],s.prototype,"templates",void 0),r([i()],s.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([i({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([i({type:[lt]})],s.prototype,"types",void 0),r([i(rt)],s.prototype,"url",null),s=r([b("esri.layers.GeoJSONLayer")],s);const yr=s;export{yr as default};
