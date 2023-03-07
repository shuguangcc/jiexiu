import{e as r,y as o,n as y,l as q}from"./cast-a534ae90.js";import{i as S,k as B}from"./PopupTemplate-52faab17.js";import{G as N,U as E}from"./request-f17a8ddb.js";import{a as p,s as C}from"./Error-57322e92.js";import{y as u,o as _}from"./string-480f3e3f.js";import{r as L}from"./typedArrayUtil-d9bc5fbd.js";import{O}from"./MultiOriginJSONSupport-b8792dfa.js";import{w as V}from"./promiseUtils-32d9c228.js";import{T}from"./ensureType-25b8cc06.js";import{o as A,r as k}from"./Extent-a1a1de42.js";import{b as D}from"./Layer-ead8c88c.js";import{i as G}from"./APIKeyMixin-b6e4f897.js";import{p as K}from"./ArcGISService-e571bcff.js";import{c as M,p as U,d as z,a as H}from"./OperationalLayer-1dad72ac.js";import{v as J}from"./PortalLayer-9dd15f09.js";import{t as Q}from"./ScaleRangeLayer-c072e266.js";import{N as W,L as F}from"./SceneService-c0a92212.js";import{r as v}from"./enumeration-61a13175.js";import{y as w}from"./Field-1d4f9ca4.js";import{s as X}from"./fieldProperties-9e220f14.js";import{c as j,d as Y,b as Z,a as ee}from"./PointCloudUniqueValueRenderer-cdf427ed.js";import{p as te}from"./popupUtils-88fed094.js";import"./nextTick-3ee5a785.js";import"./Clonable-9b34e760.js";import"./Collection-7c37b74e.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./fieldUtils-77ec75e2.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-5175e7d9.js";import"./geometry-eec1b371.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./Identifiable-093f90a8.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./arcgisLayerUrl-6e9db12f.js";import"./persistableUrlUtils-56d43b12.js";import"./TimeExtent-2004eecf.js";import"./ElevationInfo-88554f24.js";import"./lengthUtils-92fed992.js";import"./unitUtils-dd6fb8ee.js";import"./opacityUtils-1333f803.js";import"./asyncUtils-087555fc.js";import"./Portal-51616380.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./PortalItem-6eebfb2b.js";import"./assets-a5ce5e1a.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./HeightModelInfo-34f16d74.js";import"./uuid-73213768.js";import"./resourceUtils-3e9f2594.js";import"./fieldType-b34e5d2d.js";import"./FieldsIndex-16707836.js";import"./LegendOptions-2e7b3d70.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";let c=class extends q{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([o({readOnly:!0,nonNullable:!0,json:{read:!1}})],c.prototype,"type",void 0),c=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],c);const g=c;var b;let l=b=class extends g{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([o({type:[T],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],l.prototype,"requiredClearBits",void 0),r([o({type:[T],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],l.prototype,"requiredSetBits",void 0),r([v({pointCloudBitfieldFilter:"bitfield"})],l.prototype,"type",void 0),l=b=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],l);const re=l;var I;let f=I=class extends g{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new I({field:this.field,includedReturns:u(this.includedReturns)})}};r([o({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([v({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=I=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const oe=f;var $;let d=$=class extends g{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new $({field:this.field,mode:this.mode,values:u(this.values)})}};r([o({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"mode",void 0),r([v({pointCloudValueFilter:"value"})],d.prototype,"type",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"values",void 0),d=$=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],d);const ie=d,se={key:"type",base:g,typeMap:{value:ie,bitfield:re,return:oe}};var x;let h=x=class extends j{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new x({...this.cloneProperties(),field:u(this.field)})}};r([v({pointCloudRGBRenderer:"point-cloud-rgb"})],h.prototype,"type",void 0),r([o({type:String,json:{write:!0}})],h.prototype,"field",void 0),h=x=r([y("esri.renderers.PointCloudRGBRenderer")],h);const ne=h,P={key:"type",base:j,typeMap:{"point-cloud-class-breaks":Y,"point-cloud-rgb":ne,"point-cloud-stretch":Z,"point-cloud-unique-value":ee},errorContext:"renderer"},R=X();let i=class extends W(K(M(J(Q(O(G(D))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new w;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new w({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){_("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=L(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(V).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=te(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var a;const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(m=>m.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var a;const t=this.fieldsIndex.get("RGB");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(m=>m.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new p("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=N(this.parsedUrl.path,`./statistics/${s.key}`);return E(a,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(m=>m.data)}throw new p("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(F.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new p("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&C.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&C.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};r([o({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(U)],i.prototype,"popupEnabled",void 0),r([o({type:B,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({types:[se],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),r([o({type:[w]})],i.prototype,"fields",void 0),r([o(R.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([A("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),r([o(R.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o(z)],i.prototype,"elevationInfo",null),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(H)],i.prototype,"legendEnabled",void 0),r([o({types:P,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:P},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),r([k("renderer")],i.prototype,"writeRenderer",null),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=r([y("esri.layers.PointCloudLayer")],i);const bt=i;export{bt as default};
