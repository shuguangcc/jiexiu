import"./geometry-eec1b371.js";import{j as v,U as P,i as V}from"./request-f17a8ddb.js";import{j as L}from"./asyncUtils-087555fc.js";import{a as F,s as G}from"./Error-57322e92.js";import{j as Q}from"./promiseUtils-32d9c228.js";import{l as R}from"./projection-0af97a56.js";import{t as M}from"./json-48e3ea08.js";import{E as A,m as U,y as Y,k as Z,x as z}from"./Extent-a1a1de42.js";import{s as B,t as J}from"./OptimizedFeature-73582c6e.js";import{u as W}from"./FeatureStore-5d216b73.js";import{f as H}from"./utils-63166b41.js";import{Y as K}from"./QueryEngine-859b4e18.js";import{a as X}from"./number-87bee5a3.js";import{i as ee,o as te}from"./clientSideDefaults-207a0a96.js";import{r as b}from"./FieldsIndex-16707836.js";import{M as ie}from"./fieldUtils-77ec75e2.js";import"./ensureType-25b8cc06.js";import"./string-480f3e3f.js";import"./typedArrayUtil-d9bc5fbd.js";import"./Polyline-b571c705.js";import"./cast-a534ae90.js";import"./nextTick-3ee5a785.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./preload-helper-101896b7.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./unitUtils-dd6fb8ee.js";import"./SimpleObservable-8e532943.js";import"./mat4-7dde83b1.js";import"./assets-a5ce5e1a.js";import"./aaBoundingRect-b340cf8c.js";import"./zscale-48bab05e.js";import"./Evented-cbf5f368.js";import"./aaBoundingBox-4a83dbbc.js";import"./featureConversionUtils-d2229ed4.js";import"./jsonUtils-c6684c52.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./PooledRBush-0bffad50.js";import"./quickselect-322ec8e1.js";import"./optimizedFeatureQueryEngineAdapter-be75ae94.js";import"./centroid-56c5816c.js";import"./normalizeUtils-6483f6b5.js";import"./MemCache-1d2f56ee.js";import"./QueryEngineResult-eb704fb1.js";import"./utils-52ad3c09.js";import"./generateRendererUtils-2f0b667c.js";import"./colorRamps-8d7efc14.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./enumeration-61a13175.js";import"./Symbol-8266348e.js";import"./ItemCache-bf1028d4.js";import"./WhereClause-6c9440a1.js";import"./arcadeOnDemand-5175e7d9.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-14f634eb.js";import"./Scheduler-5e6ccc87.js";import"./reactiveUtils-5869e41a.js";import"./locale-30120714.js";import"./defaultsJSON-59981e75.js";const T=/^\s*"([\S\s]*)"\s*$/,E=/""/g,$=`
`,ne=[","," ",";","|","	"];function*S(r,t,e){let i=0;for(;i<=r.length;){const n=r.indexOf(t,i),o=r.substring(i,n>-1?n:void 0);i+=o.length+t.length,e&&!o.trim()||(yield o)}}function O(r){const t=r.includes(`\r
`)?`\r
`:$;return S(r,t,!0)}function j(r,t){return S(r,t,!1)}function re(r,t,e){r=r.trim(),t=t==null?void 0:t.trim();const i=[],n=Array.from(new Set([e==null?void 0:e.delimiter,...ne])).filter(s=>s!=null);for(const s of n){const a=I(r,s).length,c=I(t,s).length??a;a>1&&i.push({weight:Math.min(a,c),delimiter:s})}const o=i.sort(({weight:s},{weight:a})=>a-s).map(({delimiter:s})=>s);for(const s of o){const a=oe(C(r,s).names,e==null?void 0:e.longitudeField,e==null?void 0:e.latitudeField);if(a.longitudeFieldName&&a.latitudeFieldName)return{delimiter:s,locationInfo:a}}return{delimiter:o[0],locationInfo:null}}function*q(r,t,e,i=()=>Object.create(null)){const n=O(r);n.next();let o="",s="",a=0,c=i(),d=0;e:for(const g of n){const h=j(g,e);for(const f of h)if(o+=s+f,s="",a+=D(f),a%2==0){if(a>0){const p=T.exec(o);if(!p){c=i(),d=0,o="",a=0;continue e}c[t[d]]=p[1].replace(E,'"'),d++}else c[t[d]]=o,d++;o="",a=0}else s=e;a===0?(yield c,c=i(),d=0):s=$}}function C(r,t){const e=I(r,t).filter(n=>n!=null),i=e.map(n=>N(n));for(let n=i.length-1;n>=0;n--)i[n]||(i.splice(n,1),e.splice(n,1));return{names:i,aliases:e}}function I(r,t){if(!(r!=null&&r.length))return[];const e=[];let i="",n="",o=0;const s=j(r,t);for(const a of s)if(i+=n+a,n="",o+=D(a),o%2==0){if(o>0){const c=T.exec(i);c&&e.push(c[1].replace(E,'"'))}else e.push(i);i="",o=0}else n=t;return e}function D(r){let t=0,e=0;for(e=r.indexOf('"',e);e>=0;)t++,e=r.indexOf('"',e+1);return t}function oe(r,t,e){var s,a;t=(s=N(t))==null?void 0:s.toLowerCase(),e=(a=N(e))==null?void 0:a.toLowerCase();const i=r.map(c=>c.toLowerCase()),n=t?r[i.indexOf(t)]:null,o=e?r[i.indexOf(e)]:null;return{longitudeFieldName:n||r[i.indexOf(me.find(c=>i.includes(c)))],latitudeFieldName:o||r[i.indexOf(ce.find(c=>i.includes(c)))]}}function se(r,t,e,i,n){const o=[],s=q(r,e,t),a=[];for(const c of s){if(a.length===10)break;a.push(c)}for(let c=0;c<e.length;c++){const d=e[c],g=i[c];if(d===n.longitudeFieldName||d===n.latitudeFieldName)o.push({name:d,type:"esriFieldTypeDouble",alias:g});else{let h,f;switch(ae(a.map(p=>p[d]))){case"integer":h="esriFieldTypeInteger";break;case"double":h="esriFieldTypeDouble";break;case"date":h="esriFieldTypeDate",f=36;break;default:h="esriFieldTypeString",f=255}o.push({name:d,type:h,alias:g,length:f})}}return o}function ae(r){if(!r.length)return"string";const t=/[^+-.,0-9]/;return r.map(e=>{let i=!1;if(e!==""){if(t.test(e))i=!0;else{let n=w(e);if(!isNaN(n))return/[.,]/.test(e)||!Number.isInteger(n)||n>214783647||n<-214783648?"double":"integer";if(e.includes("E")){if(n=Number(e),!isNaN(n))return"double";if(e.includes(",")){if(e=e.replace(",","."),n=Number(e),!isNaN(n))return"double";i=!0}else i=!0}else i=!0}return i?/^[-]?\d*[.,]?\d*$/.test(e)?"string":k(new Date(e),e)?"date":"string":"string"}}).reduce((e,i)=>e===void 0?i:i===void 0?e:e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}function k(r,t){if(!r||Object.prototype.toString.call(r)!=="[object Date]"||isNaN(r.getTime()))return!1;let e=!0;if(!ue&&/\d+\W*$/.test(t)){const i=t.match(/[a-zA-Z]{2,}/);if(i){let n=!1,o=0;for(;!n&&o<=i.length;)n=!le.test(i[o]),o++;e=!n}}return e}const w=function(){const r=X(),t=new RegExp("^"+r.regexp+"$"),e=new RegExp("["+r.group+"\\s\\xa0]","g"),i=r.factor;return n=>{const o=t.exec(n);if(r.factor=i,!o)return NaN;let s=o[1];if(!o[1]){if(!o[2])return NaN;s=o[2],r.factor*=-1}return s=s.replace(e,"").replace(r.decimal,"."),+s*r.factor}}(),le=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,ue=Number.isNaN(new Date("technology 10").getTime()),ce=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],me=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],de=/^([0-9])/,fe=/[^A-Za-z0-9_\u0080-\uffff]/g,pe=/_{2,}/g,he=/^_/,ye=/_$/;function N(r){return r?r.trim().replace(fe,"_").replace(pe,"_").replace(he,"").replace(ye,"").replace(de,"F$1"):null}const ge=te("esriGeometryPoint"),_e=["csv"],Fe=[0,0];class Ie{constructor(t,e){this.x=t,this.y=e}}class Ct{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var s;this._loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection((s=t==null?void 0:t.parsingOptions)==null?void 0:s.spatialReference)]),n=we(i,t);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const o=await this._createFeatures(i);if(this._queryEngine.featureStore.addMany(o),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:a,end:c}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[a,c]}return n}async applyEdits(){throw new F("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._loadOptions.customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=L(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),Q(i)||G.getLogger("esri.layers.CSVLayer").error(new F("csv-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this._loadOptions;if(!e)throw new F("csv-layer:invalid-source","url not defined");const n=v(e);return(await P(n.path,{query:{...n.query,...i},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:n,timeInfo:o}=t.layerDefinition,s=new W({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new K({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:o,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this._locationInfo,{objectIdField:n,fieldsIndex:o,spatialReference:s}=this._queryEngine;let a=[];const c=[],d=o.fields.filter(l=>l.name!==n).map(l=>l.name);let g=0;const h={};for(const l of o.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const y=ie(l);y!==void 0&&(h[l.name]=y)}const f=q(t,d,this._delimiter,ee(h,n));for(const l of f){const y=this._parseCoordinateValue(l[e]),_=this._parseCoordinateValue(l[i]);if(_!=null&&y!=null&&!isNaN(y)&&!isNaN(_)){l[e]=y,l[i]=_;for(const u in l)if(u!==e&&u!==i){if(o.isDateField(u)){const m=new Date(l[u]);l[u]=k(m,l[u])?m.getTime():null}else if(o.isNumericField(u)){const m=w(l[u]);isNaN(m)?l[u]=null:l[u]=m}}l[n]=g,g++,a.push(new Ie(_,y)),c.push(l)}}if(!A({wkid:4326},s))if(U(s))for(const l of a)[l.x,l.y]=Y(l.x,l.y,Fe);else a=R(M,a,Z.WGS84,s,null,null);const p=[];for(let l=0;l<a.length;l++){const{x:y,y:_}=a[l],u=c[l];u[n]=l+1,p.push(new B(new J([],[y,_]),u,null,u[n]))}return p}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=w(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await H(z,t)}catch{throw new F("csv-layer:projection-not-supported","Projection not supported")}}}function we(r,t){var l,y,_;const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=i.layerDefinition={name:V(t.url,_e)||"csv",drawingInfo:ge,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:102100}}},o=O(r),s=(l=o.next().value)==null?void 0:l.trim(),a=(y=o.next().value)==null?void 0:y.trim();if(!s)throw new F("csv-layer:empty-csv","CSV is empty",{csv:r});const{delimiter:c,locationInfo:d}=re(s,a,e);if(!c)throw new F("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:s,secondLine:a,parsingOptions:e});if(!d)throw new F("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:s,secondLine:a,parsingOptions:e});i.locationInfo=d,i.delimiter=c;const{names:g,aliases:h}=C(s,c),f=se(r,i.delimiter,g,h,i.locationInfo);if((_=e.fields)!=null&&_.length){const u=new b(e.fields);for(const m of f){const x=u.get(m.name);x&&Object.assign(m,x)}}if(!f.some(u=>u.type==="esriFieldTypeOID"&&(n.objectIdField=u.name,!0))){const u={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=u.name,f.unshift(u)}n.fields=f;const p=new b(n.fields);if(i.locationInfo&&(i.locationInfo.latitudeFieldName=p.get(i.locationInfo.latitudeFieldName).name,i.locationInfo.longitudeFieldName=p.get(i.locationInfo.longitudeFieldName).name),n.timeInfo){const u=n.timeInfo;if(u.startTimeField){const m=p.get(u.startTimeField);m?(u.startTimeField=m.name,m.type="esriFieldTypeDate"):u.startTimeField=null}if(u.endTimeField){const m=p.get(u.endTimeField);m?(u.endTimeField=m.name,m.type="esriFieldTypeDate"):u.endTimeField=null}if(u.trackIdField){const m=p.get(u.trackIdField);u.trackIdField=m?m.name:null}u.startTimeField||u.endTimeField||(n.timeInfo=null)}return i}export{Ct as default};