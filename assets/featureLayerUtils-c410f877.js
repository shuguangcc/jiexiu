import{O as K,t as F,r as $}from"./typedArrayUtil-d9bc5fbd.js";import{s as R,a as m}from"./Error-57322e92.js";import{x as f,E as D}from"./promiseUtils-32d9c228.js";import{i as w}from"./originUtils-1469eeaf.js";import j from"./FeatureLayer-534ff006.js";import{m as _}from"./arcgisLayerUrl-bed3cba1.js";import{r as q}from"./fetchService-41d7502d.js";import{l as z,o as M}from"./layerUtils-68eea656.js";import{j as U}from"./Portal-c6e03126.js";import Y from"./PortalItem-e4ba4b94.js";import{o as v}from"./jsonContext-342cb5f2.js";import{i as c,a as B,c as g,f as n}from"./portalItemUtils-83d91a4e.js";import"./string-480f3e3f.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./preload-helper-41c905a7.js";import"./cast-a534ae90.js";import"./ensureType-25b8cc06.js";import"./nextTick-3ee5a785.js";import"./PopupTemplate-f97bb051.js";import"./Clonable-9b34e760.js";import"./Collection-7c37b74e.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./Extent-a1a1de42.js";import"./fieldUtils-b2df74c4.js";import"./arcadeOnDemand-a976a73c.js";import"./geometry-eec1b371.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./enumeration-61a13175.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./Identifiable-093f90a8.js";import"./UniqueValueRenderer-73d567ad.js";import"./symbols-9fcb6cc2.js";import"./CIMSymbol-72a9d286.js";import"./Symbol-8266348e.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./screenUtils-90993e16.js";import"./opacityUtils-1333f803.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./aaBoundingRect-b340cf8c.js";import"./request-24011425.js";import"./persistableUrlUtils-d0777bec.js";import"./collectionUtils-0365f48b.js";import"./LegendOptions-2e7b3d70.js";import"./reactiveUtils-5869e41a.js";import"./diffUtils-8a8cb5bc.js";import"./colorRamps-8d7efc14.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-6c08e65d.js";import"./jsonUtils-c6684c52.js";import"./compilerUtils-fefa73ae.js";import"./lengthUtils-92fed992.js";import"./unitUtils-dd6fb8ee.js";import"./jsonUtils-8c02ff16.js";import"./styleUtils-391927cf.js";import"./PortalGroup-d495847c.js";import"./jsonUtils-1c5cdf77.js";import"./DictionaryLoader-2a334243.js";import"./LRUCache-b9228ca3.js";import"./MemCache-1d2f56ee.js";import"./deprecate-0d93948c.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./MultiOriginJSONSupport-b8792dfa.js";import"./LayerFloorInfo-f184c8f5.js";import"./FeatureLayerBase-c0aa3674.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./HeightModelInfo-34f16d74.js";import"./OperationalLayer-9c50475b.js";import"./TimeExtent-2004eecf.js";import"./ElevationInfo-80227ecc.js";import"./RelationshipQuery-c27267ab.js";import"./Query-13124a97.js";import"./Layer-cea228f0.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./HandleOwner-2edbba46.js";import"./workers-af024c50.js";import"./Connection-b591250e.js";import"./Queue-275a6362.js";import"./assets-cd44347b.js";import"./intl-7d39a8c0.js";import"./messages-28bf3b89.js";import"./editsZScale-12d81957.js";import"./queryZScale-3c8de33a.js";import"./zscale-48bab05e.js";import"./FeatureSet-deb2029d.js";import"./PortalUser-1016c43c.js";import"./APIKeyMixin-b6e4f897.js";import"./ArcGISService-aada3b5d.js";import"./BlendLayer-813950f9.js";import"./parser-01f6451e.js";import"./mat4f32-77b3d8ac.js";import"./mat4-7dde83b1.js";import"./CustomParametersMixin-a5d06ccc.js";import"./EditBusLayer-b5dc3689.js";import"./FeatureReductionLayer-fcaeb34a.js";import"./labelingInfo-c70ad911.js";import"./labelUtils-4f4b54c6.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-9623e905.js";import"./PortalLayer-12f4a535.js";import"./asyncUtils-087555fc.js";import"./RefreshableLayer-49182ab8.js";import"./ScaleRangeLayer-c072e266.js";import"./TemporalLayer-c74d13d4.js";import"./TimeInfo-f76d6c20.js";import"./FeatureTemplate-c4496b93.js";import"./FeatureType-0be9420b.js";import"./fieldProperties-4207e953.js";import"./FieldsIndex-02142c8a.js";import"./versionUtils-fabd8b3a.js";import"./styleUtils-08eaa4d2.js";import"./TopFeaturesQuery-9aca00bf.js";import"./popupUtils-1ecc877c.js";import"./projection-acd73147.js";const C=R.getLogger("esri.layers.FeatureLayer"),d="Feature Service";function u(t,r){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${r}`}function A(t,r){if(r.type!==d)throw new m("feature-layer:portal-item-wrong-type",u(t,`should have portal item of type "${d}"`))}async function E(t){if(await t.load(),z(t))throw new m("feature-layer:save",u(t,"using an in-memory source cannot be saved to a portal item"))}function G(t,r){let a=(t.messages??[]).filter(({type:o})=>o==="error").map(({name:o,message:i,details:e})=>new m(o,i,e));if(r!=null&&r.ignoreUnsupported&&(a=a.filter(({name:o})=>o!=="layer:unsupported"&&o!=="symbol:unsupported"&&o!=="symbol-layer:unsupported"&&o!=="property:unsupported"&&o!=="url:unsupported")),a.length>0)throw new m("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}async function h(t,r,a){"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const o=t.write({},r);return G(r,a),o}function J(t){const{layer:r,layerJSON:a}=t;return r.isTable?{layers:[],tables:[a]}:{layers:[a],tables:[]}}function b(t){c(t,n.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((r,a,o)=>o.indexOf(r)===a))}function Z(t){const r=t.portalItem;if(!r)throw C.error("save: requires the portalItem property to be set"),new m("feature-layer:portal-item-not-set",u(t,"requires the portalItem property to be set"));if(!r.loaded)throw new m("feature-layer:portal-item-not-loaded",u(t,"cannot be saved to a portal item that does not exist or is inaccessible"));A(t,r)}async function N(t,r){return/\/\d+\/?$/.test(t.url??"")?J(r[0]):k(t,r)}async function k(t,r){const{layer:{url:a,customParameters:o,apiKey:i}}=r[0];let e=await t.fetchData("json");e&&e.layers!=null&&e.tables!=null||(e=await H(e,{url:a??"",customParameters:o,apiKey:i},r.map(p=>p.layer.layerId)));for(const p of r)P(p.layer,p.layerJSON,e);return e}async function H(t,r,a){var o,i;t||(t={}),(o=t).layers||(o.layers=[]),(i=t).tables||(i.tables=[]);const{url:e,customParameters:p,apiKey:s}=r,{serviceJSON:l,layersJSON:y}=await q(e,{customParameters:p,apiKey:s}),I=O(t.layers,l.layers,a),S=O(t.tables,l.tables,a);t.layers=I.itemResources,t.tables=S.itemResources;const T=[...I.added,...S.added],L=y?[...y.layers,...y.tables]:[];return await Q(t,T,e,L),t}function O(t,r,a){const o=K(t,r,(e,p)=>e.id===p.id);t=t.filter(e=>!o.removed.some(p=>p.id===e.id));const i=o.added.map(({id:e})=>({id:e}));return i.forEach(({id:e})=>{t.push({id:e})}),{itemResources:t,added:i.filter(({id:e})=>!a.includes(e))}}async function Q(t,r,a,o){const i=r.map(({id:e})=>new j({url:a,layerId:e,sourceJSON:o.find(({id:p})=>p===e)}));await D(i.map(e=>e.load())),i.forEach(e=>{const{layerId:p,loaded:s,defaultPopupTemplate:l}=e;!s||F(l)||P(e,{id:p,popupInfo:l.toJSON()},t)})}function P(t,r,a){t.isTable?x(a.tables,r):x(a.layers,r)}function x(t,r){if(!t)return;const a=t.findIndex(({id:o})=>o===r.id);a===-1?t.push(r):t[a]=r}function V(t){const{portalItem:r}=t;return M(t)&&!t.dynamicDataSource&&!!(r!=null&&r.loaded)&&r.type===d}async function W(t){if(!(t!=null&&t.length))throw new m("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(t.map(o=>o.load()));for(const o of t)if(!V(o))throw new m("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${u(o,"does not conform")}`,{layer:o});const r=t.map(o=>o.portalItem.id);if(new Set(r).size>1)throw new m("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const a=t.map(o=>o.layerId);if(new Set(a).size!==a.length)throw new m("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function X(t,r){var a,o;let i=Y.from(r);return i.id&&(i=i.clone(),i.id=null),(a=i).type??(a.type=d),(o=i).portal??(o.portal=U.getDefault()),A(t,i),i}async function tt(t,r){const{url:a,layerId:o,title:i,fullExtent:e,isTable:p}=t,s=_(a),l=$(s)&&s.serverType==="FeatureServer";r.url=l?a:`${a}/${o}`,r.title||(r.title=i),r.extent=null,!p&&$(e)&&(r.extent=await B(e)),g(r,n.METADATA),g(r,n.MULTI_LAYER),c(r,n.SINGLE_LAYER),p&&c(r,n.TABLE),b(r)}async function rt(t,r,a){var i;const o=t.portal;await(o==null?void 0:o._signIn()),await((i=o==null?void 0:o.user)==null?void 0:i.addItem({item:t,data:r,folder:a==null?void 0:a.folder}))}const Oo=f(ot);async function ot(t,r){await E(t),Z(t);const a=t.portalItem,o=v(a),i=await h(t,o,r),e=await N(a,[{layer:t,layerJSON:i}]);return b(a),await a.update({data:e}),w(o),a}const xo=f(async(t,r)=>{await W(t);const a=t[0].portalItem,o=v(a),i=await Promise.all(t.map(p=>h(p,o,r))),e=await N(a,t.map((p,s)=>({layer:p,layerJSON:i[s]})));return b(a),await a.update({data:e}),await Promise.all(t.slice(1).map(p=>p.portalItem.reload())),w(o),a.clone()}),Ao=f(at);async function at(t,r,a){await E(t);const o=X(t,r),i=v(o),e=J({layer:t,layerJSON:await h(t,i,a)});return await tt(t,o),await rt(o,e,a),t.portalItem=o,w(i),o}export{Oo as save,xo as saveAll,Ao as saveAs};