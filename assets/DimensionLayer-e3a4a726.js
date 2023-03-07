import{u as j,e as t,y as i,n as f,s as S}from"./cast-a534ae90.js";import{c as E}from"./Analysis-4f8dbb03.js";import{l as y}from"./Color-af6e0c66.js";import{l as R}from"./Clonable-9b34e760.js";import{o as b,e as T}from"./screenUtils-90993e16.js";import{t as h,r,e as N}from"./typedArrayUtil-d9bc5fbd.js";import{T as w,a as k}from"./ensureType-25b8cc06.js";import"./geometry-eec1b371.js";import{s as C}from"./Cyclical-078b4564.js";import{w as x,a as P,r as L}from"./Extent-a1a1de42.js";import{j as O}from"./Collection-7c37b74e.js";import{t as _,n as A}from"./collectionUtils-0365f48b.js";import{l as q,w as D}from"./reactiveUtils-5869e41a.js";import{o as H}from"./projection-acd73147.js";import{O as M}from"./MultiOriginJSONSupport-b8792dfa.js";import{b as B}from"./Layer-cea228f0.js";import{c as F}from"./OperationalLayer-9c50475b.js";import"./string-480f3e3f.js";import"./Error-57322e92.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./Identifiable-093f90a8.js";import"./colorUtils-639f4d25.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./preload-helper-41c905a7.js";import"./unitUtils-dd6fb8ee.js";import"./mat4-7dde83b1.js";import"./assets-cd44347b.js";import"./request-24011425.js";import"./aaBoundingRect-b340cf8c.js";import"./zscale-48bab05e.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./TimeExtent-2004eecf.js";import"./persistableUrlUtils-d0777bec.js";import"./ElevationInfo-80227ecc.js";import"./fieldUtils-b2df74c4.js";import"./arcadeOnDemand-a976a73c.js";import"./lengthUtils-92fed992.js";import"./opacityUtils-1333f803.js";let p=class extends j(R){constructor(e){super(e),this.type="simple",this.color=new y("black"),this.lineSize=2,this.fontSize=10,this.textColor=new y("black"),this.textBackgroundColor=new y([255,255,255,.6])}};t([i({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],p.prototype,"type",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],p.prototype,"color",void 0),t([i({type:Number,cast:b,nonNullable:!0,range:{min:T(1)},json:{write:{isRequired:!0}}})],p.prototype,"lineSize",void 0),t([i({type:Number,cast:b,nonNullable:!0,json:{write:{isRequired:!0}}})],p.prototype,"fontSize",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],p.prototype,"textColor",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],p.prototype,"textBackgroundColor",void 0),p=t([f("esri.analysis.DimensionSimpleStyle")],p);const v=p;var d;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(d||(d={}));const G=[d.Horizontal,d.Vertical,d.Direct];let l=class extends j(R){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=d.Direct,this.offset=0,this.orientation=0}};t([i({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([i({type:x,json:{write:!0}})],l.prototype,"startPoint",void 0),t([i({type:x,json:{write:!0}})],l.prototype,"endPoint",void 0),t([i({type:G,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),S(e=>C.normalize(k(e),0,!0))],l.prototype,"orientation",void 0),l=t([f("esri.analysis.LengthDimension")],l);const z=l,g=O.ofType(z);let a=class extends E{constructor(e){super(e),this.type="dimension",this.style=new v,this.extent=null}initialize(){this.addHandles(q(()=>this._computeExtent(),e=>{(h(e)||h(e.pending))&&this._set("extent",r(e)?e.extent:null)},D))}get dimensions(){return this._get("dimensions")||new g}set dimensions(e){this._set("dimensions",A(e,this.dimensions,g))}get spatialReference(){for(const e of this.dimensions){if(r(e.startPoint))return e.startPoint.spatialReference;if(r(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,o)=>(e.push(o.startPoint,o.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return r(e)?N(e.pending):null}_computeExtent(){const e=this.spatialReference;if(h(e))return{pending:null,extent:null};const o=[];for(const s of this.dimensions)r(s.startPoint)&&o.push(s.startPoint),r(s.endPoint)&&o.push(s.endPoint);const m=H(o,e);if(r(m.pending))return{pending:m.pending,extent:null};let c=null;return r(m.geometries)&&(c=m.geometries.reduce((s,u)=>h(s)?r(u)?P.fromPoint(u):null:r(u)?s.union(P.fromPoint(u)):s,null)),{pending:null,extent:c}}clear(){this.dimensions.removeAll()}};t([i({type:["dimension"]})],a.prototype,"type",void 0),t([i({cast:_,type:g,nonNullable:!0})],a.prototype,"dimensions",null),t([i({readOnly:!0})],a.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:v}},nonNullable:!0})],a.prototype,"style",void 0),t([i({value:null,readOnly:!0})],a.prototype,"extent",void 0),t([i({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),a=t([f("esri.analysis.DimensionAnalysis")],a);const $=a;let n=class extends F(M(B)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new $,this.opacity=1,e){const{source:o,style:m}=e;o&&m&&(o.style=m)}}initialize(){this.addHandles([q(()=>this.source,(e,o)=>{r(o)&&o.parent===this&&(o.parent=null),r(e)&&(e.parent=this)},D)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return N(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new $)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,o,m,c){o.dimensions=e.filter(({startPoint:s,endPoint:u})=>r(s)&&r(u)).map(s=>s.toJSON(c)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["ArcGISDimensionLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],n.prototype,"source",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:v}},json:{write:{ignoreOrigin:!0}}})],n.prototype,"style",null),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),t([i({type:O.ofType(z),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"dimensions",null),t([L("web-scene","dimensions")],n.prototype,"writeDimensions",null),n=t([f("esri.layers.DimensionLayer")],n);const He=n;export{He as default};