import{a as y}from"./Error-57322e92.js";import{b as d}from"./Layer-ead8c88c.js";import{d as v}from"./arcgisLayerUrl-6e9db12f.js";import{j as T}from"./Portal-51616380.js";import S from"./PortalItem-6eebfb2b.js";import{e as F}from"./jsonContext-6424e470.js";import{s as j}from"./portalItemUtils-086b3ea5.js";import{t as G}from"./styleUtils-08eaa4d2.js";import{U as D}from"./request-f17a8ddb.js";async function f(e){const{data:r}=await D(e,{responseType:"json",query:{f:"json"}});return r}async function M(e,r){const t=e.instance.portalItem;if(t&&t.id)return await t.load(r),P(e),$(e,r)}function P(e){const r=e.instance.portalItem;if(!e.supportedTypes.includes(r.type))throw new y("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}async function $(e,r){const t=e.instance,a=t.portalItem,{url:l,title:o}=a,n=F(a);if(t.type==="group")return t.read({title:o},n),x(t,e);l&&t.read({url:l},n);const s=await b(e,r);return s&&t.read(s,n),t.resourceReferences={portalItem:a,paths:n.readResourcePaths},t.type!=="subtype-group"&&t.read({title:o},n),G(t,n)}function x(e,r){let t;const a=e.portalItem.type,l=r.layerModuleTypeMap,o=j(e.portalItem,"Oriented Imagery Layer")??!1;switch(a){case"Feature Service":t=o?l.OrientedImageryLayer:l.FeatureLayer;break;case"Stream Service":t=l.StreamLayer;break;case"Scene Service":t=l.SceneLayer;break;case"Feature Collection":t=l.FeatureLayer;break;default:throw new y("portal:unsupported-item-type-as-group",`The item type '${a}' is not supported as a 'IGroupLayer'`)}let n;return t().then(s=>(n=s,b(r))).then(async s=>{let i=()=>n;if(a==="Feature Service"){if(c(s=await g(s,e.portalItem.url)).length){const I=l.SubtypeGroupLayer,w=await I();i=L=>L.layerType==="SubtypeGroupLayer"?w:n}return p(e,i,s)}return u(s)>0?p(e,i,s):O(e,i)})}function O(e,r){return e.portalItem.url?f(e.portalItem.url).then(t=>{var l,o;function a(n){return{id:n.id,name:n.name}}t&&p(e,r,{layers:(l=t.layers)==null?void 0:l.map(a),tables:(o=t.tables)==null?void 0:o.map(a)})}):Promise.resolve()}function p(e,r,t){let a=t.layers||[];const l=t.tables||[];if(e.portalItem.type==="Feature Collection"&&(a.forEach(o=>{var n;((n=o==null?void 0:o.layerDefinition)==null?void 0:n.type)==="Table"&&l.push(o)}),a=a.filter(o=>{var n;return((n=o==null?void 0:o.layerDefinition)==null?void 0:n.type)!=="Table"})),"coverage"in t){const o=E(t);e.add(o)}a.reverse().forEach(o=>{const n=m(e,r(o),t,o);e.add(n)}),l.reverse().forEach(o=>{const n=m(e,r(o),t,o);e.tables.add(n)})}function m(e,r,t,a){const l=new r({portalItem:e.portalItem.clone(),layerId:a.id});if(l.type!=="subtype-group"&&(l.sublayerTitleMode="service-name"),e.portalItem.type==="Feature Collection"){const o={origin:"portal-item",portal:e.portalItem.portal||T.getDefault()};l.read(a,o);const n=t.showLegend;n!=null&&l.read({showLegend:n},o)}return l}function b(e,r){if(e.supportsData===!1)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",r).catch(()=>null).then(a=>{if(C(t)){let l,o=!0;if(a&&u(a)>0){if(t.layerId==null){const n=c(a);t.layerId=t.type==="subtype-group"?n==null?void 0:n[0]:h(a)}l=k(a,t),l&&(u(a)===1&&(o=!1),a.showLegend!=null&&(l.showLegend=a.showLegend))}return o&&t.sublayerTitleMode!=="service-name"&&(t.sublayerTitleMode="item-title-and-service-name"),l}return a})}async function g(e,r){if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const t=await f(r);(e=e||{}).layers=e.layers||(t==null?void 0:t.layers),e.tables=e.tables||(t==null?void 0:t.tables)}return e}function h(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function k(e,r){var l,o;const{layerId:t}=r,a=((l=e.layers)==null?void 0:l.find(n=>n.id===t))||((o=e.tables)==null?void 0:o.find(n=>n.id===t));return a&&U(a,r)?a:null}function u(e){var r,t;return(((r=e==null?void 0:e.layers)==null?void 0:r.length)??0)+(((t=e==null?void 0:e.tables)==null?void 0:t.length)??0)}function C(e){return e.type!=="stream"&&e.type!=="oriented-imagery"&&"layerId"in e}function E(e){const{coverage:r}=e;if(!r)return null;const t=new URL(r);if(r.toLowerCase().includes("item.html")){const a=t.searchParams.get("id"),l=t.origin;return d.fromPortalItem({portalItem:new S({id:a,url:l})})}if(v(r))return d.fromArcGISServerUrl({url:r});throw new y("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}function c(e){var t;const r=[];return(t=e==null?void 0:e.layers)==null||t.forEach(a=>{a.layerType==="SubtypeGroupLayer"&&r.push(a.id)}),r}function U(e,r){return!(r.type==="feature"&&"layerType"in e&&e.layerType==="SubtypeGroupLayer"||r.type==="subtype-group"&&!("layerType"in e))}const K=Object.freeze(Object.defineProperty({__proto__:null,getFirstLayerOrTableId:h,getNumLayersAndTables:u,getSubtypeGroupLayerIds:c,load:M,preprocessFSItemData:g},Symbol.toStringTag,{value:"Module"}));export{c as T,g as b,h as g,K as l,f as n,u as w};
