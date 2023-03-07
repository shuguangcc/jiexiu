import{_ as L}from"./preload-helper-101896b7.js";import{e as d,y as u,n as V}from"./cast-a534ae90.js";import{U as v,j as N}from"./request-f17a8ddb.js";import{a as h,s as k}from"./Error-57322e92.js";import"./string-480f3e3f.js";import{r as S}from"./typedArrayUtil-d9bc5fbd.js";import{E as q,f as M,x as F}from"./promiseUtils-32d9c228.js";import"./ensureType-25b8cc06.js";import{k as b,o as f,a as R,r as z}from"./Extent-a1a1de42.js";import{i as T}from"./originUtils-1469eeaf.js";import{v as C}from"./HeightModelInfo-34f16d74.js";import{y as J,m as D,h as B,L as Z,b as G}from"./arcgisLayerUrl-6e9db12f.js";import{j as H,f as Q}from"./OperationalLayer-1dad72ac.js";import{j}from"./Portal-51616380.js";import W from"./PortalItem-6eebfb2b.js";import{b as P}from"./asyncUtils-087555fc.js";import{n as X}from"./uuid-73213768.js";import{getSiblingOfSameTypeI as Y}from"./resourceUtils-3e9f2594.js";async function ee(n,s,e,t,o,r){let i=null;if(S(e)){const a=`${n}/nodepages/`,p=a+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await v(p,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:a}}catch(m){S(o)&&o.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",p,m),i=m}}if(!s)return null;const l=`${n}/nodes/`,c=l+(s&&s.split("/").pop());try{return{type:"node",rootNode:(await v(c,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:l}}catch(a){throw new h("sceneservice:root-node-missing","Root node missing.",{pageError:i,nodeError:a,url:c})}}async function O(n,s,e){if(!s||!s.resources)return;const t=s.portalItem===n.portalItem?new Set(n.paths):new Set;n.paths.length=0,n.portalItem=s.portalItem;const o=new Set(s.resources.toKeep.map(a=>a.resource.path)),r=new Set,i=[];o.forEach(a=>{t.delete(a),n.paths.push(a)});for(const a of s.resources.toUpdate)if(t.delete(a.resource.path),o.has(a.resource.path)||r.has(a.resource.path)){const{resource:p,content:m,finish:x,error:_}=a,A=Y(p,X());n.paths.push(A.path),i.push($({resource:A,content:m,compress:a.compress,finish:x,error:_},e))}else n.paths.push(a.resource.path),i.push(te(a,e)),r.add(a.resource.path);for(const a of s.resources.toAdd)i.push($(a,e)),n.paths.push(a.resource.path);if(t.forEach(a=>{const p=s.portalItem.resourceFromPath(a);i.push(p.portalItem.removeResource(p).catch(()=>{}))}),i.length===0)return;const l=await q(i);M(e);const c=l.filter(a=>"error"in a).map(a=>a.error);if(c.length>0)throw new h("save:resources","Failed to save one or more resources",{errors:c})}async function $(n,s){const e={...S(s)?s:{},compress:n.compress},t=await P(n.resource.portalItem.addResource(n.resource,n.content,e));if(t.ok!==!0)throw n.error&&n.error(t.error),t.error;n.finish&&n.finish(n.resource)}async function te(n,s){const e=await P(n.resource.update(n.content,s));if(e.ok!==!0)throw n.error(e.error),e.error;n.finish(n.resource)}const K="esri.layers.mixins.SceneService",y=k.getLogger(K),Ie=n=>{let s=class extends n{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=F(async(e,t,o)=>{switch(e){case I.SAVE:return this._save(t);case I.SAVE_AS:return this._saveAs(o,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return b.fromJSON(e.spatialReference);{const t=e.store,o=t.indexCRS||t.geographicCRS,r=o&&parseInt(o.substring(o.lastIndexOf("/")+1,o.length),10);return r!=null?new b(r):null}}readFullExtent(e,t,o){if(e!=null&&typeof e=="object"){const l=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return R.fromJSON(l,o)}const r=t.store,i=this._readSpatialReference(t);return i==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<E)?null:new R({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},o=e.split(".");return o.length>=2&&(t.major=parseInt(o[0],10),t.minor=parseInt(o[1],10)),t}readVersion(e,t){const o=t.store,r=o.version!=null?o.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const o=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return J(this.url,t.name);let r=t.name;if(!r&&this.url){const i=D(this.url);S(i)&&(r=i.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&o&&(r=o+" - "+r),B(r)}set url(e){const t=Z({layer:this,url:e,nonStandardUrlAllowed:!1,logger:y});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,o,r){G(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=N(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=ee(this.parsedUrl.path,this.rootNode,e,this.apiKey,y,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,o,r;if((e==null?void 0:e.type)==="page"){const i=e.rootIndex%e.pageSize,l=(o=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:o[i];if(l==null||l.obb==null||l.obb.center==null||l.obb.halfSize==null)throw new h("sceneservice:invalid-node-page","Invalid node page.");if(l.obb.center[0]<E||this.fullExtent==null||this.fullExtent.hasZ)return;const c=l.obb.halfSize,a=l.obb.center[2],p=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]);this.fullExtent.zmin=a-p,this.fullExtent.zmax=a+p}else if((e==null?void 0:e.type)==="node"){const i=(r=e.rootNode)==null?void 0:r.mbs;if(!Array.isArray(i)||i.length!==4||i[0]<E)return;const l=i[2],c=i[3],{fullExtent:a}=this;a&&(a.zmin=l-c,a.zmax=l+c)}}async _fetchService(e){if(this.url==null)throw new h("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await v(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var i;const t=await v(((i=this.parsedUrl)==null?void 0:i.path)??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(o=!0),o)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var o;const t=(await v(((o=this.parsedUrl)==null?void 0:o.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,o){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const i of r)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((i,l,c)=>c.indexOf(i)===l),o===g.newItem&&(e.typeKeywords=e.typeKeywords.filter(i=>i!=="Hosted Service")))}async _saveAs(e,t){var a,p;const o={...U,...t};let r=W.from(e);r||(y.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new h("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const i=r.portal||j.getDefault();await this._ensureLoadBeforeSave(),r.type=w,r.portal=i;const l={origin:"portal-item",url:null,messages:[],portal:i,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},c={layers:[this.write({},l)]};return await Promise.all(((a=l.resources)==null?void 0:a.pendingOperations)??[]),await this._validateAgainstJSONSchema(c,l,o),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,o,g.newItem),await i._signIn(),await((p=i.user)==null?void 0:p.addItem({item:r,folder:o&&o.folder,data:c})),await O(this.resourceReferences,l,null),this.portalItem=r,T(l),l.portalItem=r,r}async _save(e){var i;const t={...U,...e};if(!this.portalItem)throw y.error("_save(): requires the .portalItem property to be set"),new h("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==w)throw y.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+w),new h("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${w}"`);await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&N(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||j.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},o)]};return await Promise.all(((i=o.resources)==null?void 0:i.pendingOperations)??[]),await this._validateAgainstJSONSchema(r,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,g.existingItem),await this.portalItem.update({data:r}),await O(this.resourceReferences,o,null),T(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){var i,l,c,a;let r=((i=t.messages)==null?void 0:i.filter(p=>p.type==="error").map(p=>new h(p.name,p.message,p.details)))??[];if(o&&((l=o.validationOptions)!=null&&l.ignoreUnsupported)&&(r=r.filter(p=>p.name!=="layer:unsupported"&&p.name!=="symbol:unsupported"&&p.name!=="symbol-layer:unsupported"&&p.name!=="property:unsupported"&&p.name!=="url:unsupported"&&p.name!=="scenemodification:unsupported")),((c=o.validationOptions)==null?void 0:c.enabled)||re){const p=(await L(()=>import("./schemaValidator-7206ef84.js"),["assets/schemaValidator-7206ef84.js","assets/Error-57322e92.js","assets/string-480f3e3f.js","assets/typedArrayUtil-d9bc5fbd.js","assets/_commonjsHelpers-a430e9ea.js"])).validate(e,o.portalItemLayerType);if(p.length>0){const m=`Layer item did not validate:
${p.join(`
`)}`;if(y.error(`_validateAgainstJSONSchema(): ${m}`),((a=o.validationOptions)==null?void 0:a.failPolicy)==="throw"){const x=p.map(_=>new h("sceneservice:schema-validation",_)).concat(r);throw new h("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:x})}}}if(r.length>0)throw new h("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return d([u(H)],s.prototype,"id",void 0),d([u({type:b})],s.prototype,"spatialReference",void 0),d([f("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readSpatialReference",null),d([u({type:R})],s.prototype,"fullExtent",void 0),d([f("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readFullExtent",null),d([u({readOnly:!0,type:C})],s.prototype,"heightModelInfo",void 0),d([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],s.prototype,"minScale",void 0),d([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],s.prototype,"maxScale",void 0),d([u({readOnly:!0})],s.prototype,"version",void 0),d([f("version",["store.version"])],s.prototype,"readVersion",null),d([u({type:String,json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),d([u({type:String,json:{read:!1}})],s.prototype,"sublayerTitleMode",void 0),d([u({type:String})],s.prototype,"title",void 0),d([f("portal-item","title")],s.prototype,"readTitlePortalItem",null),d([f("service","title",["name"])],s.prototype,"readTitleService",null),d([u({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],s.prototype,"layerId",void 0),d([u(Q)],s.prototype,"url",null),d([z("url")],s.prototype,"writeUrl",null),d([u()],s.prototype,"parsedUrl",null),d([u({readOnly:!0})],s.prototype,"store",void 0),d([u({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),s=d([V(K)],s),s},E=-1e38,re=!1;var g;(function(n){n[n.existingItem=0]="existingItem",n[n.newItem=1]="newItem"})(g||(g={}));const w="Scene Service",U={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var I;(function(n){n[n.SAVE=0]="SAVE",n[n.SAVE_AS=1]="SAVE_AS"})(I||(I={}));export{I as L,Ie as N,ee as n};
