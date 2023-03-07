import{_ as n}from"./preload-helper-41c905a7.js";import{e as o,y as i,n as h}from"./cast-a534ae90.js";import"./geometry-eec1b371.js";import{j as b,U as c}from"./request-24011425.js";import{b as f,s as p,a as v}from"./Error-57322e92.js";import{n as g}from"./Evented-cbf5f368.js";import{s as w}from"./Identifiable-093f90a8.js";import{m as _}from"./Loadable-46524a7e.js";import{j as L}from"./promiseUtils-32d9c228.js";import"./typedArrayUtil-d9bc5fbd.js";import"./ensureType-25b8cc06.js";import{a as y,k as l}from"./Extent-a1a1de42.js";async function D(t){const r="portalItem"in t?t:{portalItem:t},d=await n(()=>import("./portalLayers-ac4fdecd.js"),["./portalLayers-ac4fdecd.js","./Error-57322e92.js","./string-480f3e3f.js","./typedArrayUtil-d9bc5fbd.js","./lazyLayerLoader-aae86fba.js","./preload-helper-41c905a7.js","./PortalItem-e4ba4b94.js","./cast-a534ae90.js","./ensureType-25b8cc06.js","./nextTick-3ee5a785.js","./promiseUtils-32d9c228.js","./assets-cd44347b.js","./request-24011425.js","./Loadable-46524a7e.js","./Promise-368b703a.js","./Extent-a1a1de42.js","./Portal-c6e03126.js","./locale-30120714.js","./PortalGroup-d495847c.js","./jsonMap-190c5593.js","./PortalUser-1016c43c.js","./layersLoader-92ad9054.js","./arcgisLayerUrl-bed3cba1.js","./persistableUrlUtils-d0777bec.js","./jsonContext-342cb5f2.js","./portalItemUtils-83d91a4e.js","./projection-acd73147.js","./mathUtils-57aba1ea.js","./vec3-1863987c.js","./vec3f64-6cd30318.js","./common-c186b691.js","./vec4-46a9b36d.js","./unitUtils-dd6fb8ee.js","./SimpleObservable-8e532943.js","./mat4-7dde83b1.js","./Polyline-b571c705.js","./aaBoundingRect-b340cf8c.js","./zscale-48bab05e.js","./styleUtils-08eaa4d2.js","./asyncUtils-087555fc.js","./geometry-eec1b371.js","./typeUtils-cd52dc20.js","./Evented-cbf5f368.js","./Identifiable-093f90a8.js"],import.meta.url);try{return await d.fromItem(r)}catch(s){const a=r&&r.portalItem,u=a&&a.id||"unset",m=a&&a.portal&&a.portal.url||f.portalUrl;throw p.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+m+"', id: '"+u+"')",s),s}}let E=0,e=class extends g.EventedMixin(w(_)){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y(-180,-90,180,90,l.WGS84),this.id=Date.now().toString(16)+"-layer-"+E++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=l.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r=typeof t=="string"?{url:t}:t;return(await n(()=>import("./arcgisLayers-4141415b.js"),["./arcgisLayers-4141415b.js","./preload-helper-41c905a7.js","./Error-57322e92.js","./string-480f3e3f.js","./typedArrayUtil-d9bc5fbd.js","./request-24011425.js","./promiseUtils-32d9c228.js","./arcgisLayerUrl-bed3cba1.js","./persistableUrlUtils-d0777bec.js","./fetchService-41d7502d.js","./lazyLayerLoader-aae86fba.js"],import.meta.url)).fromUrl(r)}static fromPortalItem(t){return D(t)}initialize(){this.when().catch(t=>{L(t)||p.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})})}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t)}}get hasAttributionData(){return this.attributionDataUrl!=null}get parsedUrl(){return b(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await c(t,{query:{f:"json"},responseType:"json"})).data;throw new v("layer:no-attribution-data","Layer does not have attribution data")}};o([i({type:String})],e.prototype,"attributionDataUrl",void 0),o([i({type:y})],e.prototype,"fullExtent",void 0),o([i({readOnly:!0})],e.prototype,"hasAttributionData",null),o([i({type:String,clonable:!1})],e.prototype,"id",void 0),o([i({type:Boolean,nonNullable:!0})],e.prototype,"legendEnabled",void 0),o([i({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0),o([i({type:Number,range:{min:0,max:1},nonNullable:!0})],e.prototype,"opacity",void 0),o([i({clonable:!1})],e.prototype,"parent",void 0),o([i({readOnly:!0})],e.prototype,"parsedUrl",null),o([i({type:Boolean})],e.prototype,"popupEnabled",void 0),o([i({type:Boolean})],e.prototype,"attributionVisible",void 0),o([i({type:l})],e.prototype,"spatialReference",void 0),o([i({type:String})],e.prototype,"title",void 0),o([i({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0),o([i()],e.prototype,"url",void 0),o([i({type:Boolean,nonNullable:!0})],e.prototype,"visible",void 0),e=o([h("esri.layers.Layer")],e);const V=e;export{V as b};
