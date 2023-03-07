import{w as d,e as r,y as o,n as h}from"./cast-a534ae90.js";import{l as b}from"./CollectionFlattener-f43a0fce.js";import{n as v}from"./loadAll-01cdf0a9.js";import{r as u}from"./typedArrayUtil-d9bc5fbd.js";import{O as f}from"./MultiOriginJSONSupport-b8792dfa.js";import{l as m,U as y}from"./reactiveUtils-5869e41a.js";import"./ensureType-25b8cc06.js";import{r as c}from"./Extent-a1a1de42.js";import{b as _}from"./Layer-ead8c88c.js";import{n as g}from"./BlendLayer-813950f9.js";import{c as L}from"./OperationalLayer-1dad72ac.js";import{v as O}from"./PortalLayer-9dd15f09.js";import{t as w}from"./ScaleRangeLayer-c072e266.js";import{a as M}from"./lazyLayerLoader-f5029ec7.js";import{l as V,d as $,t as C}from"./TablesMixin-a4aaaf91.js";import{y as x}from"./writeUtils-3bde6e49.js";import"./string-480f3e3f.js";import"./Error-57322e92.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./Collection-7c37b74e.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./asyncUtils-087555fc.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./preload-helper-101896b7.js";import"./geometry-eec1b371.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./request-f17a8ddb.js";import"./Identifiable-093f90a8.js";import"./parser-01f6451e.js";import"./colorUtils-639f4d25.js";import"./screenUtils-90993e16.js";import"./mat4f32-77b3d8ac.js";import"./mat4-7dde83b1.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./TimeExtent-2004eecf.js";import"./persistableUrlUtils-56d43b12.js";import"./ElevationInfo-88554f24.js";import"./fieldUtils-77ec75e2.js";import"./arcadeOnDemand-5175e7d9.js";import"./lengthUtils-92fed992.js";import"./unitUtils-dd6fb8ee.js";import"./opacityUtils-1333f803.js";import"./Portal-51616380.js";import"./locale-30120714.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./PortalItem-6eebfb2b.js";import"./assets-a5ce5e1a.js";import"./collectionUtils-0365f48b.js";import"./layerUtils-68eea656.js";let t=class extends g(w(L(O(V($(f(_))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new b({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=C(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(m(()=>this.visible,this._onVisibilityChange.bind(this),y))}_writeLayers(i,e,p,s){const l=[];if(!i)return l;i.forEach(n=>{const a=x(n,s.webmap?s.webmap.getLayerJSONFromResourceInfo(n):null,s);u(a)&&a.layerType&&l.push(a)}),e.layers=l}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:M},i)),Promise.resolve(this)}loadAll(){return v(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=m(()=>i.visible,e=>this._onChildVisibilityChange(i,e),y)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!d(this).initialized)return;const p=this.layers;let s=p.find(l=>l.visible);switch(i){case"exclusive":p.length&&!s&&(s=p.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":p.forEach(l=>{l.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};r([o({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),r([o({readOnly:!0})],t.prototype,"allTables",void 0),r([o()],t.prototype,"fullExtent",void 0),r([o({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),r([o({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),r([c("layers")],t.prototype,"_writeLayers",null),r([o({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),r([o({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),r([o()],t.prototype,"spatialReference",void 0),r([o({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),r([o({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=r([h("esri.layers.GroupLayer")],t);const ji=t;export{ji as default};
