import{e as o,y as a,s as v,n as g}from"./cast-a534ae90.js";import{j as _,U as c,g as S,Q as T}from"./request-f17a8ddb.js";import{a as h}from"./Error-57322e92.js";import{a as b}from"./HandleOwner-2edbba46.js";import{r as u}from"./typedArrayUtil-d9bc5fbd.js";import{O as w}from"./MultiOriginJSONSupport-b8792dfa.js";import{w as O}from"./promiseUtils-32d9c228.js";import{k as y,o as $,r as R}from"./Extent-a1a1de42.js";import{b as U}from"./Layer-ead8c88c.js";import{i as W}from"./APIKeyMixin-b6e4f897.js";import{s as P}from"./ArcGISCachedService-65a7e463.js";import{E as j,y as B,z as I}from"./SublayersOwner-60f4a348.js";import{p as L}from"./ArcGISService-e571bcff.js";import{n as k}from"./BlendLayer-813950f9.js";import{o as D}from"./CustomParametersMixin-a5d06ccc.js";import{c as M,f as A}from"./OperationalLayer-1dad72ac.js";import{v as C}from"./PortalLayer-9dd15f09.js";import{p as N}from"./RefreshableLayer-49182ab8.js";import{t as J}from"./ScaleRangeLayer-c072e266.js";import{m as q,g as G,d as E}from"./arcgisLayerUrl-6e9db12f.js";import"./string-480f3e3f.js";import"./ensureType-25b8cc06.js";import"./nextTick-3ee5a785.js";import"./preload-helper-101896b7.js";import"./reactiveUtils-5869e41a.js";import"./geometry-eec1b371.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./Evented-cbf5f368.js";import"./Identifiable-093f90a8.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./TilemapCache-14276d7a.js";import"./TileInfo-c5c8c8d2.js";import"./unitUtils-dd6fb8ee.js";import"./aaBoundingRect-b340cf8c.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./byteSizeEstimations-90c5a50d.js";import"./LRUCache-b9228ca3.js";import"./MemCache-1d2f56ee.js";import"./Version-b16872d5.js";import"./Collection-7c37b74e.js";import"./SimpleObservable-8e532943.js";import"./CollectionFlattener-f43a0fce.js";import"./PopupTemplate-52faab17.js";import"./Clonable-9b34e760.js";import"./fieldUtils-77ec75e2.js";import"./arcadeOnDemand-5175e7d9.js";import"./enumeration-61a13175.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./UniqueValueRenderer-30750d31.js";import"./symbols-75e7a993.js";import"./CIMSymbol-8f02a6e3.js";import"./Symbol-8266348e.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./screenUtils-90993e16.js";import"./opacityUtils-1333f803.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./persistableUrlUtils-56d43b12.js";import"./collectionUtils-0365f48b.js";import"./Portal-51616380.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./LegendOptions-2e7b3d70.js";import"./diffUtils-8a8cb5bc.js";import"./colorRamps-8d7efc14.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-1859ae71.js";import"./jsonUtils-c6684c52.js";import"./compilerUtils-fefa73ae.js";import"./lengthUtils-92fed992.js";import"./jsonUtils-eb568237.js";import"./styleUtils-015eeecd.js";import"./jsonUtils-559e9000.js";import"./DictionaryLoader-326d0e17.js";import"./deprecate-0d93948c.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./LayerFloorInfo-e7c896e5.js";import"./FeatureType-0be9420b.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./FeatureTemplate-c4496b93.js";import"./FieldsIndex-16707836.js";import"./labelingInfo-be3a629c.js";import"./labelUtils-4f4b54c6.js";import"./defaultsJSON-59981e75.js";import"./Query-13124a97.js";import"./TimeExtent-2004eecf.js";import"./popupUtils-88fed094.js";import"./sublayerUtils-eea48c01.js";import"./parser-01f6451e.js";import"./mat4f32-77b3d8ac.js";import"./mat4-7dde83b1.js";import"./ElevationInfo-88554f24.js";import"./asyncUtils-087555fc.js";import"./PortalItem-6eebfb2b.js";import"./assets-a5ce5e1a.js";const d=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let t=class extends k(j(J(M(C(P(B(L(w(b(N(W(D(U))))))))))))){constructor(...r){super(...r),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(r,e){return typeof r=="string"?{url:r,...e}:r}load(r){const e=u(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},r).catch(O).then(()=>this._fetchService(e))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=(e=this.parsedUrl)==null?void 0:e.path.toLowerCase();return r?this._getDefaultAttribution(this._getMapName(r)):null}readSpatialReference(r,e){return(r=r||e.tileInfo&&e.tileInfo.spatialReference)&&y.fromJSON(r)}writeSublayers(r,e,i,s){if(!this.loaded||!r)return;const n=r.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),p=[],m={writeSublayerStructure:!1,...s};n.forEach(l=>{const f=l.write({},m);p.push(f)}),p.some(l=>Object.keys(l).length>1)&&(e.layers=p)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(r){return Array.isArray(r)?r.map(e=>_(e).path):null}fetchTile(r,e,i,s={}){const{signal:n}=s,p=this.getTileUrl(r,e,i),m={responseType:"image",signal:n,query:{...this.refreshParameters}};return c(p,m).then(l=>l.data)}async fetchImageBitmapTile(r,e,i,s={}){const{signal:n}=s,p=this.getTileUrl(r,e,i),m={responseType:"blob",signal:n,query:{...this.refreshParameters}},l=await c(p,m);return createImageBitmap(l.data)}getTileUrl(r,e,i){const s=!this.tilemapCache&&this.supportsBlankTile,n=S({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),p=this.tileServers;return`${p&&p.length?p[e%p.length]:this.parsedUrl.path}/tile/${r}/${e}/${i}${n?"?"+n:""}`}_fetchService(r){return new Promise((e,i)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void e({data:this.sourceJSON})}if(!this.parsedUrl)throw new h("tile-layer:undefined-url","layer's url is not defined");const s=q(this.parsedUrl.path);if(u(s)&&s.serverType==="ImageServer")throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");c(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(e,i)}).then(e=>{if(e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=e.data,this.read(e.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!G(this.url))return this._fetchServerVersion(this.url,r).then(i=>{this.read({currentVersion:i})}).catch(()=>{})})}_fetchServerVersion(r,e){if(!E(r))return Promise.reject();const i=r.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return c(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(s=>{if(s.data&&s.data.currentVersion)return s.data.currentVersion;throw new h("tile-layer:version-not-available")})}_getMapName(r){const e=r.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return e&&e[2]}_getDefaultAttribution(r){if(!r)return;let e;r=r.toLowerCase();for(let i=0,s=d.length;i<s;i++)if(e=d[i],e.toLowerCase().includes(r))return T("//static.arcgis.com/attribution/"+e)}_getDefaultTileServers(r){const e=r.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,i=r.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return e||i?[r,r.replace(e?/server\.arcgisonline/i:/services\.arcgisonline/i,e?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};o([a({readOnly:!0})],t.prototype,"attributionDataUrl",null),o([a({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),o([a({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),o([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0),o([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),o([a({type:Boolean})],t.prototype,"resampling",void 0),o([a()],t.prototype,"sourceJSON",void 0),o([a({type:y})],t.prototype,"spatialReference",void 0),o([$("spatialReference",["spatialReference","tileInfo"])],t.prototype,"readSpatialReference",null),o([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),o([a({readOnly:!0})],t.prototype,"sublayers",void 0),o([R("sublayers",{layers:{type:[I]}})],t.prototype,"writeSublayers",null),o([a({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),o([a()],t.prototype,"tileServers",null),o([v("tileServers")],t.prototype,"castTileServers",null),o([a({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),o([a(A)],t.prototype,"url",void 0),t=o([g("esri.layers.TileLayer")],t),t.prototype.fetchTile.__isDefault__=!0;const Ge=t;export{Ge as default};
