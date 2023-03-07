import{_ as ce}from"./preload-helper-101896b7.js";import{t as ae,r as Y}from"./typedArrayUtil-d9bc5fbd.js";import{a as de,l as H,b as he,e as fe}from"./Polyline-b571c705.js";import{c as G,x as me,m as ge,f as U,d as X,V as pe,T as ye,F as xe,D as Fe,N as Ie,S as _e,v as Ve,s as k,p as Te}from"./utils-52ad3c09.js";import{I as ve,E as W}from"./Extent-a1a1de42.js";import{a as S}from"./Error-57322e92.js";import{e as J}from"./ItemCache-bf1028d4.js";import{WhereClause as De}from"./WhereClause-6c9440a1.js";import{E as $,g as K,v as O,b as ee}from"./utils-63166b41.js";import{t as te}from"./fieldUtils-77ec75e2.js";import{i as Ae}from"./arcadeOnDemand-5175e7d9.js";let be=class{constructor(t,e){this._cache=new J(t),this._invalidCache=new J(e)}get(t,e){const i=`${e.uid}:${t}`,a=this._cache.get(i);if(a)return a;if(this._invalidCache.get(i)!==void 0)return null;try{const s=De.create(t,e);return this._cache.put(i,s),s}catch{return this._invalidCache.put(i,null),null}}};const j=new be(50,500),w="feature-store:unsupported-query",re=" as ",ze=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function Be(u,t){if(!t)return!0;const e=j.get(t,u);if(!e)throw new S(w,"invalid SQL expression",{where:t});if(!e.isStandardized)throw new S(w,"where clause is not standard",{where:t});return Z(u,e.fieldNames,"where clause contains missing fields"),!0}function Ye(u,t,e){if(!t)return!0;const i=j.get(t,u);if(!i)throw new S(w,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new S(w,"having does not contain a valid aggregate function",{having:t});const a=i.fieldNames;if(Z(u,a,"having contains missing fields"),!i.getExpressions().every(s=>{const{aggregateType:r,field:n}=s,o=u.has(n)&&u.get(n).name;return e.some(c=>{const{onStatisticField:l,statisticType:d}=c;return(u.has(l)&&u.get(l).name)===o&&d.toLowerCase().trim()===r})}))throw new S(w,"expressions in having should also exist in outStatistics",{having:t});return!0}function q(u,t){return u?j.get(u,t):null}function Z(u,t,e,i=!0){const a=[];for(const s of t)if(s!=="*"&&!u.has(s))if(i){const r=ne(s);try{const n=q(r,u);if(!n)throw new S(w,"invalid SQL expression",{where:r});if(!n.isStandardized)throw new S(w,"expression is not standard",{clause:n});Z(u,n.fieldNames,"expression contains missing fields")}catch(n){const o=n&&n.details;if(o&&(o.clause||o.where))throw n;o&&o.missingFields?a.push(...o.missingFields):a.push(s)}}else a.push(s);if(a.length)throw new S(w,e,{missingFields:a})}function ne(u){return u.split(re)[0]}function Se(u){return u.split(re)[1]}function He(u,t){const e=t.get(u);return!!e&&!ze.has(e.type)}class M{constructor(t,e,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues??!1,this.fieldsIndex=i,this.featureAdapter=e;const a=t.outFields;if(a&&!a.includes("*")){this.outFields=a;let s=0;for(const r of a){const n=ne(r),o=this.fieldsIndex.get(n),c=o?null:q(n,i),l=o?o.name:Se(r)||"FIELD_EXP_"+s++;this._fieldDataCache.set(r,{alias:l,clause:c})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,e,i){const a=i?i.name:e;let s=null;return this._fieldDataCache.has(a)?s=this._fieldDataCache.get(a).clause:i||(s=q(e,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:s})),i?this.featureAdapter.getAttribute(t,a):s.calculateValue(t,this.featureAdapter)}getDataValue(t,e){const i=e.normalizationType,a=e.normalizationTotal;let s=this.getFieldValue(t,e.field,this.fieldsIndex.get(e.field));if(e.field2&&(s=`${G(s)}${e.fieldDelimiter}${G(this.getFieldValue(t,e.field2,this.fieldsIndex.get(e.field2)))}`,e.field3&&(s=`${s}${e.fieldDelimiter}${G(this.getFieldValue(t,e.field3,this.fieldsIndex.get(e.field3)))}`)),i&&Number.isFinite(s)){const r=i==="field"&&e.normalizationField?this.getFieldValue(t,e.normalizationField,this.fieldsIndex.get(e.normalizationField)):null;s=me(s,i,r,a)}return s}getExpressionValue(t,e,i,a){const s={attributes:this.featureAdapter.getAttributes(t),layer:{fields:this.fieldsIndex.fields}},r=a.createExecContext(s,i);return a.executeFunction(e,r)}getExpressionValues(t,e,i,a){const s={fields:this.fieldsIndex.fields};return t.map(r=>{const n={attributes:this.featureAdapter.getAttributes(r),layer:s},o=a.createExecContext(n,i);return a.executeFunction(e,o)})}validateItem(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:q(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testFeature(t,this.featureAdapter)}validateItems(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:q(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testSet(t,this.featureAdapter)}_processAttributesForOutFields(t){const e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);const i={};for(const a of e){const{alias:s,clause:r}=this._fieldDataCache.get(a);i[s]=r?r.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,s)}return i}_processAttributesForDistinctValues(t){if(ae(t)||!this.returnDistinctValues)return t;const e=this.outFields,i=[];if(e)for(const r of e){const{alias:n}=this._fieldDataCache.get(r);i.push(t[n])}else for(const r in t)i.push(t[r]);const a=`${(e||["*"]).join(",")}=${i.join(",")}`;let s=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++s),s>1?null:t}}function we(u,t,e){return{objectId:u,target:t,distance:e,type:"vertex"}}function Ee(u,t,e,i,a,s=!1){return{objectId:u,target:t,distance:e,type:"edge",start:i,end:a,draped:s}}class Ue{constructor(t,e,i){this.items=t,this.query=e,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const t=new M(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:e,having:i,outStatistics:a}=this.query;if(!(e==null?void 0:e.length))return 1;const r=new Map,n=new Map,o=new Set;for(const c of a){const{statisticType:l}=c,d=l!=="exceedslimit"?c.onStatisticField:void 0;if(!n.has(d)){const h=[];for(const g of e){const x=this._getAttributeValues(t,g,r);h.push(x)}n.set(d,this._calculateUniqueValues(h,t.returnDistinctValues))}const f=n.get(d);for(const h in f){const{data:g,items:x}=f[h],V=g.join(",");i&&!t.validateItems(x,i)||o.add(V)}}return o.size}async createQueryResponse(){let t;return this.query.outStatistics?t=this.query.outStatistics.some(e=>e.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):t=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry&&(ve(this.query.outSR)&&!W(this.query.geometry.spatialReference,this.query.outSR)?t.queryGeometry=$({spatialReference:this.query.outSR,...K(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR)}):t.queryGeometry=$({spatialReference:this.query.outSR,...this.query.geometry})),t}createSnappingResponse(t,e){const i=this.featureAdapter,a=ie(this.hasZ,this.hasM),{point:s}=t,r=typeof t.distance=="number"?t.distance:t.distance.x,n=typeof t.distance=="number"?t.distance:t.distance.y,o={candidates:[]},c=this.geometryType==="esriGeometryPolygon",l=s.z!=null,d=s.m!=null,f=this._getPointCreator(s,l,d,this.spatialReference,e),h=new se(null,0),g=new se(null,0),x={x:0,y:0,z:0};for(const V of this.items){const y=i.getGeometry(V);if(ae(y))continue;const{coords:I,lengths:_}=y;if(h.coords=I,g.coords=I,t.types&P.EDGE){let F=0;for(let p=0;p<_.length;p++){const m=_[p];for(let T=0;T<m;T++,F+=a){const D=h;if(D.coordsIndex=F,T!==m-1){const b=g;b.coordsIndex=F+a;const v=x;Ce(x,s,D,b);const A=(s.x-v.x)/r,C=(s.y-v.y)/n,E=A*A+C*C;E<=1&&o.candidates.push(Ee(i.getObjectId(V),f(v),Math.sqrt(E),f(D),f(b)))}}}}if(t.types&P.VERTEX){const F=c?I.length-a:I.length;for(let p=0;p<F;p+=a){const m=h;m.coordsIndex=p;const T=(s.x-m.x)/r,D=(s.y-m.y)/n,b=T*T+D*D;b<=1&&o.candidates.push(we(i.getObjectId(V),f(m),Math.sqrt(b)))}}}return o.candidates.sort((V,y)=>V.distance-y.distance),o}_getPointCreator(t,e,i,a,s){const r=Y(s)&&!W(a,s)?l=>K(l,a,s):l=>l,{hasZ:n}=this,o=0,c=t.m;return e&&i?n?({x:l,y:d,z:f})=>r({x:l,y:d,z:f,m:c}):({x:l,y:d})=>r({x:l,y:d,z:o,m:c}):e?n?({x:l,y:d,z:f})=>r({x:l,y:d,z:f}):({x:l,y:d})=>r({x:l,y:d,z:o}):i?({x:l,y:d})=>r({x:l,y:d,m:c}):({x:l,y:d})=>r({x:l,y:d})}async createSummaryStatisticsResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,minValue:n,maxValue:o,scale:c}=t,l=this.fieldsIndex.isDateField(e),d=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,scale:c}),f=ge({normalizationType:s,normalizationField:a,minValue:n,maxValue:o}),h=this.fieldsIndex.get(e),g={value:.5,fieldType:h==null?void 0:h.type},x=te(h)?U({values:d,supportsNullCount:f,percentileParams:g}):X({values:d,minValue:n,maxValue:o,useSampleStdDev:!s,supportsNullCount:f,percentileParams:g});return pe(x,l)}async createUniqueValuesResponse(t){const{field:e,valueExpression:i,domains:a,returnAllCodedValues:s,scale:r}=t,n=await this._getDataValues({field:e,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,valueExpression:i,scale:r}),o=ye(n);return xe(o,a,s,t.fieldDelimiter)}async createClassBreaksResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:c,maxValue:l,numClasses:d,scale:f}=t,h=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,scale:f}),g=Fe(h,{field:e,normalizationField:a,normalizationType:s,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:c,maxValue:l,numClasses:d});return Ie(g,n)}async createHistogramResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:c,maxValue:l,numBins:d,scale:f}=t,h=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,scale:f});return _e(h,{field:e,normalizationField:a,normalizationType:s,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:c,maxValue:l,numBins:d})}_sortFeatures(t,e,i){if(t.length>1&&e&&e.length)for(const a of e.reverse()){const s=a.split(" "),r=s[0],n=this.fieldsIndex.get(r),o=s[1]&&s[1].toLowerCase()==="desc",c=Ve(n==null?void 0:n.type,o);t.sort((l,d)=>{const f=i(l,r,n),h=i(d,r,n);return c(f,h)})}}_createFeatureQueryResponse(t){const e=this.items,{geometryType:i,hasM:a,hasZ:s,objectIdField:r,spatialReference:n}=this,{outFields:o,outSR:c,quantizationParameters:l,resultRecordCount:d,resultOffset:f,returnZ:h,returnM:g}=t,x=d!=null&&e.length>(f||0)+d,V=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(y=>this.fieldsIndex.get(y)));return{exceededTransferLimit:x,features:this._createFeatures(t,e),fields:V,geometryType:i,hasM:a&&g,hasZ:s&&h,objectIdFieldName:r,spatialReference:$(c||n),transform:l&&k(l)||null}}_createFeatures(t,e){const i=new M(t,this.featureAdapter,this.fieldsIndex),{hasM:a,hasZ:s}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:o,returnCentroid:c,maxAllowableOffset:l,resultOffset:d,resultRecordCount:f,returnZ:h=!1,returnM:g=!1}=t,x=s&&h,V=a&&g;let y=[],I=0;const _=[...e];if(this._sortFeatures(_,r,(p,m,T)=>i.getFieldValue(p,m,T)),o||c){const p=k(n);if(o&&!c)for(const m of _)y[I++]={attributes:i.getAttributes(m),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(m),l,p,x,V)};else if(!o&&c)for(const m of _)y[I++]={attributes:i.getAttributes(m),centroid:ee(this,this.featureAdapter.getCentroid(m,this),p)};else for(const m of _)y[I++]={attributes:i.getAttributes(m),centroid:ee(this,this.featureAdapter.getCentroid(m,this),p),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(m),l,p,x,V)}}else for(const p of _){const m=i.getAttributes(p);m&&(y[I++]={attributes:m})}const F=d||0;if(f!=null){const p=F+f;y=y.slice(F,Math.min(y.length,p))}return y}_createExceedsLimitQueryResponse(t){let e=!1,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;for(const r of t.outStatistics)if(r.statisticType==="exceedslimit"){i=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,a=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,s=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")e=this.items.length>i;else if(this.items.length>a)e=!0;else{const r=ie(this.hasZ,this.hasM),n=this.featureAdapter;e=this.items.reduce((o,c)=>{const l=n.getGeometry(c);return o+(Y(l)&&l.coords.length||0)},0)/r>s}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(e)}}]}}async _createStatisticsQueryResponse(t){const e={attributes:{}},i=[],a=new Map,s=new Map,r=new Map,n=new Map,o=new M(t,this.featureAdapter,this.fieldsIndex),c=t.outStatistics,{groupByFieldsForStatistics:l,having:d,orderByFields:f}=t,h=l&&l.length,g=!!h,x=g&&l[0],V=g&&!this.fieldsIndex.get(x);for(const I of c){const{outStatisticFieldName:_,statisticType:F}=I,p=I,m=F!=="exceedslimit"?I.onStatisticField:void 0,T=F==="percentile_disc"||F==="percentile_cont",D=F==="EnvelopeAggregate"||F==="CentroidAggregate"||F==="ConvexHullAggregate",b=g&&h===1&&(m===x||V)&&F==="count";if(g){if(!r.has(m)){const A=[];for(const C of l){const E=this._getAttributeValues(o,C,a);A.push(E)}r.set(m,this._calculateUniqueValues(A,!D&&o.returnDistinctValues))}const v=r.get(m);for(const A in v){const{count:C,data:E,items:Q,itemPositions:oe}=v[A],L=E.join(",");if(!d||o.validateItems(Q,d)){const R=n.get(L)||{attributes:{}};if(D){R.aggregateGeometries||(R.aggregateGeometries={});const{aggregateGeometries:z,outStatisticFieldName:N}=await this._getAggregateGeometry(p,Q);R.aggregateGeometries[N]=z}else{let z=null;if(b)z=C;else{const N=this._getAttributeValues(o,m,a),B=oe.map(ue=>N[ue]);z=T&&"statisticParameters"in p?this._getPercentileValue(p,B):this._getStatisticValue(p,B,null,o.returnDistinctValues)}R.attributes[_]=z}let le=0;l.forEach((z,N)=>R.attributes[this.fieldsIndex.get(z)?z:"EXPR_"+ ++le]=E[N]),n.set(L,R)}}}else if(D){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:v,outStatisticFieldName:A}=await this._getAggregateGeometry(p,this.items);e.aggregateGeometries[A]=v}else{const v=this._getAttributeValues(o,m,a);e.attributes[_]=T&&"statisticParameters"in p?this._getPercentileValue(p,v):this._getStatisticValue(p,v,s,o.returnDistinctValues)}i.push({name:_,alias:_,type:"esriFieldTypeDouble"})}const y=g?Array.from(n.values()):[e];return this._sortFeatures(y,f,(I,_)=>I.attributes[_]),{fields:i,features:y}}async _getAggregateGeometry(t,e){const i=await ce(()=>import("./geometryEngineJSON-a45b7108.js"),["assets/geometryEngineJSON-a45b7108.js","assets/geometryEngineBase-3dd302e0.js","assets/geometryEngineJSON-45c195fe.js","assets/json-48e3ea08.js"]),{statisticType:a,outStatisticFieldName:s}=t,{featureAdapter:r,spatialReference:n,geometryType:o,hasZ:c,hasM:l}=this,d=e.map(g=>O(o,c,l,r.getGeometry(g))),f=i.convexHull(n,d,!0)[0],h={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const g=f?de(f):H(i.union(n,d));h.aggregateGeometries={...g,spatialReference:n},h.outStatisticFieldName=s||"extent"}else if(a==="CentroidAggregate"){const g=f?he(f):fe(H(i.union(n,d)));h.aggregateGeometries={x:g[0],y:g[1],spatialReference:n},h.outStatisticFieldName=s||"centroid"}else a==="ConvexHullAggregate"&&(h.aggregateGeometries=f,h.outStatisticFieldName=s||"convexHull");return h}_getStatisticValue(t,e,i,a){const{onStatisticField:s,statisticType:r}=t;let n=null;return n=i!=null&&i.has(s)?i.get(s):te(this.fieldsIndex.get(s))?U({values:e,returnDistinct:a}):X({values:e,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(s,n),n[r==="var"?"variance":r]}_getPercentileValue(t,e){const{onStatisticField:i,statisticParameters:a,statisticType:s}=t,{value:r,orderBy:n}=a,o=this.fieldsIndex.get(i);return Te(e,{value:r,orderBy:n,fieldType:o==null?void 0:o.type,isDiscrete:s==="percentile_disc"})}_getAttributeValues(t,e,i){if(i.has(e))return i.get(e);const a=this.fieldsIndex.get(e),s=this.items.map(r=>t.getFieldValue(r,e,a));return i.set(e,s),s}_getAttributeDataValues(t,e){return this.items.map(i=>t.getDataValue(i,{field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,normalizationField:e.normalizationField,normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal}))}async _getAttributeExpressionValues(t,e,i){const{arcadeUtils:a}=await Ae(),s=a.createFunction(e),r=i&&a.getViewInfo(i);return t.getExpressionValues(this.items,s,r,a)}_calculateUniqueValues(t,e){const i={},a=this.items,s=a.length;for(let r=0;r<s;r++){const n=a[r],o=[];for(const l of t)o.push(l[r]);const c=o.join(",");e?i[c]==null&&(i[c]={count:1,data:o,items:[n],itemPositions:[r]}):i[c]==null?i[c]={count:1,data:o,items:[n],itemPositions:[r]}:(i[c].count++,i[c].items.push(n),i[c].itemPositions.push(r))}return i}async _getDataValues(t){const e=new M(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:a,normalizationField:s,normalizationType:r,normalizationTotal:n,scale:o}=t,c=i?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(e,i,c):this._getAttributeDataValues(e,{field:a,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:s,normalizationType:r,normalizationTotal:n})}}function Ce(u,t,e,i){const a=i.x-e.x,s=i.y-e.y,r=a*a+s*s,n=(t.x-e.x)*a+(t.y-e.y)*s,o=Math.min(1,Math.max(0,n/r));u.x=e.x+a*o,u.y=e.y+s*o}function ie(u,t){return u?t?4:3:t?3:2}var P;(function(u){u[u.NONE=0]="NONE",u[u.EDGE=1]="EDGE",u[u.VERTEX=2]="VERTEX"})(P||(P={}));class se{constructor(t,e){this.coords=t,this.coordsIndex=e}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}export{Ue as A,Ye as a,Z as c,Ee as e,He as f,q as l,Be as o,P as q,we as t};
