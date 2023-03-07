import{_ as Te}from"./preload-helper-101896b7.js";import{a as _t}from"./Error-57322e92.js";import{b as it,a as at,m as ut,N as Pt}from"./mathUtils-57aba1ea.js";import{t as C,e as lt,r as G}from"./typedArrayUtil-d9bc5fbd.js";import{f as Et,O as He}from"./promiseUtils-32d9c228.js";import{$ as ct,I as ft,p as pt,a as St,b as At}from"./unitUtils-dd6fb8ee.js";import{p as Rt}from"./cast-a534ae90.js";import{e as Ct}from"./SimpleObservable-8e532943.js";import{x as Ot,r as Nt,o as Tt}from"./mat4-7dde83b1.js";import{o as be}from"./vec3-1863987c.js";import{n as pe}from"./vec3f64-6cd30318.js";import{i as L,l as ue,t as oe,E as te,I as J,w as Mt,a as gt,G as Lt,m as ht,T as dt,S as Gt,P as It,s as mt}from"./Extent-a1a1de42.js";import{v as yt,m as Ft,u as Wt}from"./Polyline-b571c705.js";import{a as wt}from"./assets-a5ce5e1a.js";import{h as Dt}from"./string-480f3e3f.js";import{a as Ut}from"./aaBoundingRect-b340cf8c.js";import{o as Ht}from"./zscale-48bab05e.js";let Ce,s=null;function ze(){return!!s}function kt(){return!!Dt("esri-wasm")}function Ze(){return Ce||(Ce=Te(()=>import("./pe-wasm-b4e8afc6.js"),[]).then(e=>e.p).then(({default:e})=>e({locateFile:n=>wt(`esri/geometry/support/${n}`)})).then(e=>{Ve(e)}),Ce)}var Me,M,ge;(function(e){function n(i,u,_){s.ensureCache.prepare();const P=Y(_),E=_===P,l=s.ensureFloat64(P),c=s._pe_geog_to_proj(s.getPointer(i),u,l);return c&&x(_,u,l,E),c}function t(i,u,_,P){switch(P){case M.PE_TRANSFORM_P_TO_G:return o(i,u,_);case M.PE_TRANSFORM_G_TO_P:return n(i,u,_)}return 0}function o(i,u,_){return a(i,u,_,0)}function a(i,u,_,P){s.ensureCache.prepare();const E=Y(_),l=_===E,c=s.ensureFloat64(E),p=s._pe_proj_to_geog_center(s.getPointer(i),u,c,P);return p&&x(_,u,c,l),p}e.geogToProj=n,e.projGeog=t,e.projToGeog=o,e.projToGeogCenter=a})(Me||(Me={})),function(e){function n(){e.PE_BUFFER_MAX=s.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=s.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=s.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=s.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=s.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=s.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=s.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=s.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=s.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=s.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=s.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=s.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=s.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=s.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=s.PeDefs.prototype.PE_TYPE_UNIT,e.PE_TYPE_LINUNIT=s.PeDefs.prototype.PE_TYPE_LINUNIT,e.PE_STR_OPTS_NONE=s.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=s.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=s.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=s.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=s.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=s.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=s.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=s.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=s.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=s.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=s.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=s.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=s.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=s.PeDefs.prototype.PE_HORIZON_DELTA}e.init=n}(M||(M={})),function(e){const n={},t={},o=f=>{if(f){const S=f.getType();switch(S){case M.PE_TYPE_GEOGCS:f=s.castObject(f,s.PeGeogcs);break;case M.PE_TYPE_PROJCS:f=s.castObject(f,s.PeProjcs);break;case M.PE_TYPE_GEOGTRAN:f=s.castObject(f,s.PeGeogtran);break;default:S&M.PE_TYPE_UNIT&&(f=s.castObject(f,s.PeUnit))}}return f};function a(){s.PeFactory.prototype.initialize(null)}function i(f){return u(M.PE_TYPE_COORDSYS,f)}function u(f,S){let A=null,R=n[f];if(R||(R={},n[f]=R),R.hasOwnProperty(String(S)))A=R[S];else{const g=s.PeFactory.prototype.factoryByType(f,S);s.compare(g,s.NULL)||(A=g,R[S]=A)}return A=o(A),A}function _(f,S){let A=null,R=t[f];if(R||(R={},t[f]=R),R.hasOwnProperty(S))A=R[S];else{const g=s.PeFactory.prototype.fromString(f,S);s.compare(g,s.NULL)||(A=g,R[S]=A)}return A=o(A),A}function P(f){return u(M.PE_TYPE_GEOGCS,f)}function E(f){return u(M.PE_TYPE_GEOGTRAN,f)}function l(f){return s.PeFactory.prototype.getCode(f)}function c(f){return u(M.PE_TYPE_PROJCS,f)}function p(f){return u(M.PE_TYPE_UNIT,f)}e.initialize=a,e.coordsys=i,e.factoryByType=u,e.fromString=_,e.geogcs=P,e.geogtran=E,e.getCode=l,e.projcs=c,e.unit=p}(ge||(ge={}));let qe=null;var Pe,Le,he,de,le,Ge,Ee,ce,Ie;function Ve(e){function n(i,u,_){i[u]=_(i[u])}s=e,M.init(),Pe.init(),le.init(),Ee.init(),ce.init(),qe=class extends s.PeGCSExtent{destroy(){s.destroy(this)}};const t=[s.PeDatum,s.PeGeogcs,s.PeGeogtran,s.PeObject,s.PeParameter,s.PePrimem,s.PeProjcs,s.PeSpheroid,s.PeUnit];for(const i of t)n(i.prototype,"getName",u=>function(){return u.call(this,new Array(M.PE_NAME_MAX))});for(const i of[s.PeGeogtran,s.PeProjcs])n(i.prototype,"getParameters",u=>function(){const _=new Array(M.PE_PARM_MAX);let P=u.call(this);for(let E=0;E<_.length;E++){const l=s.getValue(P,"*");_[E]=l?s.wrapPointer(l,s.PeParameter):null,P+=Int32Array.BYTES_PER_ELEMENT}return _});n(s.PeHorizon.prototype,"getCoord",i=>function(){const u=this.getSize();if(!u)return null;const _=[];return x(_,u,i.call(this)),_}),n(s.PeGTlistExtendedEntry.prototype,"getEntries",i=>{const u=s._pe_getPeGTlistExtendedGTsSize();return function(){let _=null;const P=i.call(this);if(!s.compare(P,s.NULL)){_=[P];const E=this.getSteps();if(E>1){const l=s.getPointer(P);for(let c=1;c<E;c++)_.push(s.wrapPointer(l+u*c,s.PeGTlistExtendedGTs))}}return _}});const o=s._pe_getPeHorizonSize(),a=i=>function(){let u=this._cache;if(u||(u=new Map,this._cache=u),u.has(i))return u.get(i);let _=null;const P=i.call(this);if(!s.compare(P,s.NULL)){_=[P];const E=P.getNump();if(E>1){const l=s.getPointer(P);for(let c=1;c<E;c++)_.push(s.wrapPointer(l+o*c,s.PeHorizon))}}return u.set(i,_),_};n(s.PeProjcs.prototype,"horizonGcsGenerate",a),n(s.PeProjcs.prototype,"horizonPcsGenerate",a),s.PeObject.prototype.toString=function(i=M.PE_STR_OPTS_NONE){s.ensureCache.prepare();const u=s.getPointer(this),_=s.ensureInt8(new Array(M.PE_BUFFER_MAX));return s.UTF8ToString(s._pe_object_to_string_ext(u,i,_))}}function y(e){if(!e)return;const n=s.getClass(e);if(!n)return;const t=s.getCache(n);if(!t)return;const o=s.getPointer(e);o&&delete t[o]}function ie(e,n){const t=[],o=new Array(n);for(let a=0;a<e;a++)t.push(s.ensureInt8(o));return t}function Y(e){let n;return Array.isArray(e[0])?(n=[],e.forEach(t=>{n.push(t[0],t[1])})):n=e,n}function x(e,n,t,o=!1){if(o)for(let a=0;a<2*n;a++)e[a]=s.getValue(t+a*Float64Array.BYTES_PER_ELEMENT,"double");else{const a=e.length===0;for(let i=0;i<n;i++)a&&(e[i]=new Array(2)),e[i][0]=s.getValue(t,"double"),e[i][1]=s.getValue(t+Float64Array.BYTES_PER_ELEMENT,"double"),t+=2*Float64Array.BYTES_PER_ELEMENT}}(function(e){let n;function t(){e.PE_GTLIST_OPTS_COMMON=s.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,n=s._pe_getPeGTlistExtendedEntrySize()}function o(a,i,u,_,P,E){let l=null;const c=new s.PeInteger(E);try{const p=s.PeGTlistExtended.prototype.getGTlist(a,i,u,_,P,c);if((E=c.val)&&(l=[p],E>1)){const f=s.getPointer(p);for(let S=1;S<E;S++)l.push(s.wrapPointer(f+n*S,s.PeGTlistExtendedEntry))}}finally{s.destroy(c)}return l}e.init=t,e.getGTlist=o})(Pe||(Pe={})),function(e){function n(t){if(t&&t.length){for(const o of t)y(o),o.getEntries().forEach(a=>{y(a);const i=a.getGeogtran();y(i),i.getParameters().forEach(y),[i.getGeogcs1(),i.getGeogcs2()].forEach(u=>{y(u);const _=u.getDatum();y(_),y(_.getSpheroid()),y(u.getPrimem()),y(u.getUnit())})});s.PeGTlistExtendedEntry.prototype.Delete(t[0])}}e.destroy=n}(Le||(Le={})),function(e){function n(t,o,a,i,u){s.ensureCache.prepare();const _=Y(a),P=a===_,E=s.ensureFloat64(_);let l=0;i&&(l=s.ensureFloat64(i));const c=s._pe_geog_to_geog(s.getPointer(t),o,E,l,u);return c&&x(a,o,E,P),c}e.geogToGeog=n}(he||(he={})),function(e){const n=(E,l,c,p,f,S)=>{let A,R;switch(s.ensureCache.prepare(),E){case"dd":A=s._pe_geog_to_dd,R=M.PE_DD_MAX;break;case"ddm":A=s._pe_geog_to_ddm,R=M.PE_DDM_MAX;break;case"dms":A=s._pe_geog_to_dms,R=M.PE_DMS_MAX}let g=0;l&&(g=s.getPointer(l));const w=Y(p),D=s.ensureFloat64(w),U=ie(c,R),m=A(g,c,D,f,s.ensureInt32(U));if(m)for(let h=0;h<c;h++)S[h]=s.UTF8ToString(U[h]);return m},t=(E,l,c,p,f)=>{let S;switch(s.ensureCache.prepare(),E){case"dd":S=s._pe_dd_to_geog;break;case"ddm":S=s._pe_ddm_to_geog;break;case"dms":S=s._pe_dms_to_geog}let A=0;l&&(A=s.getPointer(l));const R=p.map(U=>s.ensureString(U)),g=s.ensureInt32(R),w=s.ensureFloat64(new Array(2*c)),D=S(A,c,g,w);return D&&x(f,c,w),D};function o(E,l,c,p,f){return n("dms",E,l,c,p,f)}function a(E,l,c,p){return t("dms",E,l,c,p)}function i(E,l,c,p,f){return n("ddm",E,l,c,p,f)}function u(E,l,c,p){return t("ddm",E,l,c,p)}function _(E,l,c,p,f){return n("dd",E,l,c,p,f)}function P(E,l,c,p){return t("dd",E,l,c,p)}e.geogToDms=o,e.dmsToGeog=a,e.geogToDdm=i,e.ddmToGeog=u,e.geogToDd=_,e.ddToGeog=P}(de||(de={})),function(e){function n(){e.PE_MGRS_STYLE_NEW=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=s.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=s.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES}function t(a,i,u,_,P,E,l){s.ensureCache.prepare();let c=0;a&&(c=s.getPointer(a));const p=Y(u),f=s.ensureFloat64(p),S=ie(i,M.PE_MGRS_MAX),A=s.ensureInt32(S),R=s._pe_geog_to_mgrs_extended(c,i,f,_,P,E,A);if(R)for(let g=0;g<i;g++)l[g]=s.UTF8ToString(S[g]);return R}function o(a,i,u,_,P){s.ensureCache.prepare();let E=0;a&&(E=s.getPointer(a));const l=u.map(S=>s.ensureString(S)),c=s.ensureInt32(l),p=s.ensureFloat64(new Array(2*i)),f=s._pe_mgrs_to_geog_extended(E,i,c,_,p);return f&&x(P,i,p),f}e.init=n,e.geogToMgrsExtended=t,e.mgrsToGeogExtended=o}(le||(le={})),function(e){function n(o,a,i,u,_,P,E){s.ensureCache.prepare();let l=0;o&&(l=s.getPointer(o));const c=Y(i),p=s.ensureFloat64(c),f=ie(a,M.PE_MGRS_MAX),S=s.ensureInt32(f),A=s._pe_geog_to_usng(l,a,p,u,_,P,S);if(A)for(let R=0;R<a;R++)E[R]=s.UTF8ToString(f[R]);return A}function t(o,a,i,u){s.ensureCache.prepare();let _=0;o&&(_=s.getPointer(o));const P=i.map(p=>s.ensureString(p)),E=s.ensureInt32(P),l=s.ensureFloat64(new Array(2*a)),c=s._pe_usng_to_geog(_,a,E,l);return c&&x(u,a,l),c}e.geogToUsng=n,e.usngToGeog=t}(Ge||(Ge={})),function(e){function n(){e.PE_UTM_OPTS_NONE=s.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=s.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=s.PeNotationUtm.prototype.PE_UTM_OPTS_NS}function t(a,i,u,_,P){s.ensureCache.prepare();let E=0;a&&(E=s.getPointer(a));const l=Y(u),c=s.ensureFloat64(l),p=ie(i,M.PE_UTM_MAX),f=s.ensureInt32(p),S=s._pe_geog_to_utm(E,i,c,_,f);if(S)for(let A=0;A<i;A++)P[A]=s.UTF8ToString(p[A]);return S}function o(a,i,u,_,P){s.ensureCache.prepare();let E=0;a&&(E=s.getPointer(a));const l=u.map(S=>s.ensureString(S)),c=s.ensureInt32(l),p=s.ensureFloat64(new Array(2*i)),f=s._pe_utm_to_geog(E,i,c,_,p);return f&&x(P,i,p),f}e.init=n,e.geogToUtm=t,e.utmToGeog=o}(Ee||(Ee={})),function(e){const n=new Map;function t(){e.PE_PCSINFO_OPTION_NONE=s.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=s.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=s.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=s.PePCSInfo.prototype.PE_POLE_POINT}function o(a,i=e.PE_PCSINFO_OPTION_DOMAIN){let u=null,_=null;return n.has(a)&&(_=n.get(a),_[i]&&(u=_[i])),u||(u=s.PePCSInfo.prototype.generate(a,i),_||(_=[],n.set(a,_)),_[i]=u),u}e.init=t,e.generate=o}(ce||(ce={})),function(e){function n(){return s.PeVersion.prototype.version_string()}e.versionString=n}(Ie||(Ie={}));const Bt=Object.freeze(Object.defineProperty({__proto__:null,get _pe(){return s},isLoaded:ze,isSupported:kt,load:Ze,get PeCSTransformations(){return Me},get PeDefs(){return M},get PeFactory(){return ge},get PeGCSExtent(){return qe},get PeGTlistExtended(){return Pe},get PeGTlistExtendedEntry(){return Le},get PeGTTransformations(){return he},get PeNotationDms(){return de},get PeNotationMgrs(){return le},get PeNotationUsng(){return Ge},get PeNotationUtm(){return Ee},get PePCSInfo(){return ce},get PeVersion(){return Ie},_init:Ve},Symbol.toStringTag,{value:"Module"})),yn=Math.PI/180,Fn=/SPHEROID\[([^\]]+)]/i,H=L.radius,d=L.eccentricitySquared,xt={a1:H*d,a2:H*d*H*d,a3:H*d*d/2,a4:H*d*H*d*2.5,a5:H*d+H*d*d/2,a6:1-d},Wn={4267:{a:63782064e-1,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:L.radius,f:L.flattening},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:ue.radius,f:ue.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:oe.radius,f:oe.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:oe.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};let ae=0;class Q{constructor(n){this.uid=ae++,n?(this._wkt=n.wkt!=null?n.wkt:null,this._wkid=n.wkid!=null?n.wkid:-1,this._isInverse=n.isInverse!=null&&n.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}static fromGE(n){const t=new Q;return t._wkt=n.wkt,t._wkid=n.wkid,t._isInverse=n.isInverse,t}get wkt(){return this._wkt}set wkt(n){this._wkt=n,this.uid=ae++}get wkid(){return this._wkid}set wkid(n){this._wkid=n,this.uid=ae++}get isInverse(){return this._isInverse}set isInverse(n){this._isInverse=n,this.uid=ae++}getInverse(){const n=new Q;return n._wkt=this.wkt,n._wkid=this._wkid,n._isInverse=!this.isInverse,n}}class ${constructor(n){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,n&&n.steps)for(const t of n.steps)t instanceof Q?this.steps.push(t):this.steps.push(new Q({wkid:t.wkid,wkt:t.wkt,isInverse:t.isInverse}))}static cacheKey(n,t){return[n.wkid!==void 0&&n.wkid!==null?n.wkid.toString():"-1",n.wkt!==void 0&&n.wkt!==null?n.wkt.toString():"",t.wkid!==void 0&&t.wkid!==null?t.wkid.toString():"-1",t.wkt!==void 0&&t.wkt!==null?t.wkt.toString():""].join(",")}static fromGE(n){const t=new $;let o="";for(const a of n.steps){const i=Q.fromGE(a);t.steps.push(i),o+=i.uid.toString()+","}return t._cachedProjection={},t._gtlistentry=null,t._chain=o,t}getInverse(){const n=new $;n.steps=[];for(let t=this.steps.length-1;t>=0;t--){const o=this.steps[t];n.steps.push(o.getInverse())}return n}getGTListEntry(){let n="";for(const t of this.steps)n+=t.uid.toString()+",";return n!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=n),this._gtlistentry}assignCachedGe(n,t,o){this._cachedProjection[$.cacheKey(n,t)]=o}getCachedGeTransformation(n,t){let o="";for(const i of this.steps)o+=i.uid.toString()+",";o!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=o);const a=this._cachedProjection[$.cacheKey(n,t)];return a===void 0?null:a}}let v=null,re=null,Oe=null,Ne={};const Je=new Ct;function Qe(){return!!v&&ze()}function me(e){return C(Oe)&&(Oe=Promise.all([Ze(),Te(()=>import("./geometryEngineBase-3dd302e0.js"),[]).then(n=>n.g),Te(()=>import("./hydrated-00dd97bc.js"),["assets/hydrated-00dd97bc.js","assets/Extent-a1a1de42.js","assets/cast-a534ae90.js","assets/typedArrayUtil-d9bc5fbd.js","assets/string-480f3e3f.js","assets/Error-57322e92.js","assets/ensureType-25b8cc06.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-32d9c228.js","assets/Polyline-b571c705.js"])])),Oe.then(([,n,{hydratedAdapter:t}])=>{Et(e),re=t,v=n.default,v._enableProjection(Bt),Je.notify()})}function $t(e,n,t=null,o=null){return Array.isArray(e)?e.length===0?[]:ke(re,e,e[0].spatialReference,n,t,o):ke(re,[e],e.spatialReference,n,t,o)[0]}function ke(e,n,t,o,a=null,i=null){if(C(t)||C(o))return n;if(fe(t,o,a))return n.map(u=>lt(Xt(u,t,o)));if(C(a)){const u=$.cacheKey(t,o);Ne[u]!==void 0?a=Ne[u]:(a=jt(t,o,void 0),C(a)&&(a=new $),Ne[u]=a)}if(C(v)||C(e))throw new ye;return G(i)?v._project(e,n,t,o,a,i):v._project(e,n,t,o,a)}function wn(e,n){const t=vt([e],n);return G(t.pending)?{pending:t.pending,geometry:null}:G(t.geometries)?{pending:null,geometry:t.geometries[0]}:{pending:null,geometry:null}}function vt(e,n){if(!Qe()){for(const t of e)if(G(t)&&!te(t.spatialReference,n)&&J(t.spatialReference)&&J(n)&&!fe(t.spatialReference,n))return Rt(Je),{pending:me(),geometries:null}}return{pending:null,geometries:e.map(t=>C(t)?null:te(t.spatialReference,n)?t:J(t.spatialReference)&&J(n)?Yt(t,n):null)}}function jt(e,n,t=null){if(C(e)||C(n))return null;if(C(v)||C(re))throw new ye;const o=v._getTransformation(re,e,n,t,t==null?void 0:t.spatialReference);return o!==null?$.fromGE(o):null}class ye extends _t{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}var r;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",e[e.WGS84=2]="WGS84",e[e.WEB_MERCATOR=3]="WEB_MERCATOR",e[e.WGS84_ECEF=4]="WGS84_ECEF",e[e.CGCS2000=5]="CGCS2000",e[e.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",e[e.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",e[e.GCSMARS2000=8]="GCSMARS2000",e[e.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",e[e.GCSMOON2000=10]="GCSMOON2000",e[e.LON_LAT=11]="LON_LAT",e[e.PLATE_CARREE=12]="PLATE_CARREE"})(r||(r={}));function Yt(e,n){try{const t=$t(e,n);if(t==null)return null;"xmin"in e&&"xmin"in t&&(t.zmin=e.zmin,t.zmax=e.zmax);const o=Ht(t.type,e.spatialReference,n);return G(o)&&o(t),t}catch(t){if(!(t instanceof ye))throw t;return null}}function fe(e,n,t){return!t&&(!!te(e,n)||J(e)&&J(n)&&!!rt(e,n,st))}async function Dn(e,n,t,o){if(Qe())return He(o);if(Array.isArray(e)){for(const{source:a,dest:i,geographicTransformation:u}of e)if(!fe(a,i,u))return me(o)}else if(!fe(e,n,t))return me(o);return He(o)}function Xt(e,n,t){return e?"x"in e?et(e,n,new Mt,t,0):"xmin"in e?zt(e,n,new gt,t,0):"rings"in e?tt(e,n,new yt,t,0):"paths"in e?bt(e,n,new Ft,t,0):"points"in e?Kt(e,n,new Wt,t,0):null:null}function Un(e,n,t=n.spatialReference,o=0){return G(t)&&G(e.spatialReference)&&G(et(e,e.spatialReference,n,t,o))}function et(e,n,t,o,a){T[0]=e.x,T[1]=e.y;const i=e.z;return T[2]=i!==void 0?i:a,W(T,n,0,T,o,0,1)?(t.x=T[0],t.y=T[1],t.spatialReference=o,i===void 0?(t.z=void 0,t.hasZ=!1):(t.z=T[2],t.hasZ=!0),e.m===void 0?(t.m=void 0,t.hasM=!1):(t.m=e.m,t.hasM=!0),t):null}function Kt(e,n,t,o,a){const{points:i,hasZ:u,hasM:_}=e,P=[],E=i.length,l=[];for(const c of i)l.push(c[0],c[1],u?c[2]:a);if(!W(l,n,0,l,o,0,E))return null;for(let c=0;c<E;++c){const p=3*c,f=l[p],S=l[p+1];u&&_?P.push([f,S,l[p+2],i[c][3]]):u?P.push([f,S,l[p+2]]):_?P.push([f,S,i[c][2]]):P.push([f,S])}return t.points=P,t.spatialReference=o,t.hasZ=u,t.hasM=_,t}function bt(e,n,t,o,a){const{paths:i,hasZ:u,hasM:_}=e,P=[];return nt(i,u??!1,_??!1,n,P,o,a)?(t.paths=P,t.spatialReference=o,t.hasZ=u,t.hasM=_,t):null}function Hn({hasZ:e,spatialReference:n,paths:t},o,a=0){const i=j(n,_e),u=F[i][r.WGS84_COMPARABLE_LON_LAT];if(C(u))return!1;const _=e?P=>P:P=>be(T,P[0],P[1],a);for(const P of t){const E=[];for(const l of P){const c=[0,0,a];u(_(l),0,c,0),E.push(c)}o.push(E)}return!0}function kn({hasZ:e,spatialReference:n,rings:t},o,a=0){const i=j(n,_e),u=F[i][r.WGS84_COMPARABLE_LON_LAT];if(C(u))return!1;const _=e?P=>P:P=>be(T,P[0],P[1],a);for(const P of t){const E=[];for(const l of P){const c=[0,0,a];u(_(l),0,c,0),E.push(c)}o.push(E)}return!0}function Bn(e,n,t=n.spatialReference,o=0){return G(e.spatialReference)&&G(t)&&G(tt(e,e.spatialReference,n,t,o))}function tt(e,n,t,o,a){const{rings:i,hasZ:u,hasM:_}=e,P=[];return nt(i,u??!1,_??!1,n,P,o,a)?(t.rings=P,t.spatialReference=o,t.hasZ=u,t.hasM=_,t):null}function zt(e,n,t,o,a){const{xmin:i,ymin:u,xmax:_,ymax:P,hasZ:E,hasM:l}=e;return Be(i,u,E?e.zmin:a,n,T,o)?(t.xmin=T[0],t.ymin=T[1],E&&(t.zmin=T[2]),Be(_,P,E?e.zmax:a,n,T,o)?(t.xmax=T[0],t.ymax=T[1],E&&(t.zmax=T[2]),l&&(t.mmin=e.mmin,t.mmax=e.mmax),t.spatialReference=o,t):null):null}function xn(e,n,t){return W(e,n,0,T,t.spatialReference,0,1)?(t.x=T[0],t.y=T[1],t.z=T[2],t):null}function $n(e,n,t,o=0){T[0]=e.x,T[1]=e.y;const a=e.z;return T[2]=a!==void 0?a:o,W(T,e.spatialReference,0,n,t,0,1)}function Be(e,n,t,o,a,i){return N[0]=e,N[1]=n,N[2]=t,W(N,o,0,a,i,0,1)}function vn(e,n,t,o){return!(C(n)||C(o)||e.length<2)&&(e.length===2&&(N[0]=e[0],N[1]=e[1],N[2]=0,e=N),W(e,n,0,t,o,0,1))}function jn(e,n,t){return Zt(e,n,t)}function Zt(e,n,t){if(C(n))return!1;const o=j(n,_e),a=F[o][r.WGS84_COMPARABLE_LON_LAT];return!C(a)&&(a(e,0,N,0),t!==N&&(t[0]=N[0],t[1]=N[1],t.length>2&&(t[2]=N[2])),!0)}function W(e,n,t,o,a,i,u=1){const _=rt(n,a,st);if(C(_))return!1;if(_===O){if(e===o&&t===i)return!0;const E=t+3*u;for(let l=t,c=i;l<E;l++,c++)o[c]=e[l];return!0}const P=t+3*u;for(let E=t,l=i;E<P;E+=3,l+=3)_(e,E,o,l);return!0}function nt(e,n,t,o,a,i,u=0){const _=new Array;for(const E of e)for(const l of E)_.push(l[0],l[1],n?l[2]:u);if(!W(_,o,0,_,i,0,_.length/3))return!1;let P=0;a.length=0;for(const E of e){const l=new Array;for(const c of E)n&&t?l.push([_[P++],_[P++],_[P++],c[3]]):n?l.push([_[P++],_[P++],_[P++]]):t?(l.push([_[P++],_[P++],c[2]]),P++):(l.push([_[P++],_[P++]]),P++);a.push(l)}return!0}function Yn(e,n,t,o){return e!=null&&(te(n,o)?(Ut(t,e),!0):(N[0]=e[0],N[1]=e[1],N[2]=0,!!W(N,n,0,N,o,0,1)&&(t[0]=N[0],t[1]=N[1],N[0]=e[2],N[1]=e[3],N[2]=0,!!W(N,n,0,N,o,0,1)&&(t[2]=N[0],t[3]=N[1],!0))))}function Xn(e,n,t,o){if(C(e)||C(o))return!1;const a=j(e,_e),i=j(o,cn);if(a===i&&!xe(i)&&(a!==r.UNKNOWN||te(e,o)))return Ot(t,n),!0;if(xe(i)){const u=F[a][r.LON_LAT],_=F[r.LON_LAT][i];return!C(u)&&!C(_)&&(u(n,0,k,0),_(k,0,B,0),ot(I*k[0],I*k[1],t),t[12]=B[0],t[13]=B[1],t[14]=B[2],!0)}if((i===r.WEB_MERCATOR||i===r.PLATE_CARREE)&&(a===r.WGS84||a===r.CGCS2000&&i===r.PLATE_CARREE||a===r.SPHERICAL_ECEF||a===r.WEB_MERCATOR)){const u=F[a][r.LON_LAT],_=F[r.LON_LAT][i];return!C(u)&&!C(_)&&(u(n,0,k,0),_(k,0,B,0),a===r.SPHERICAL_ECEF?qt(I*k[0],I*k[1],t):Nt(t),t[12]=B[0],t[13]=B[1],t[14]=B[2],!0)}return!1}function xe(e){return e===r.SPHERICAL_ECEF||e===r.SPHERICAL_MARS_PCPF||e===r.SPHERICAL_MOON_PCPF}function ot(e,n,t){const o=Math.sin(e),a=Math.cos(e),i=Math.sin(n),u=Math.cos(n),_=t;return _[0]=-o,_[4]=-i*a,_[8]=u*a,_[12]=0,_[1]=a,_[5]=-i*o,_[9]=u*o,_[13]=0,_[2]=0,_[6]=u,_[10]=i,_[14]=0,_[3]=0,_[7]=0,_[11]=0,_[15]=1,_}function qt(e,n,t){return ot(e,n,t),Tt(t,t),t}function j(e,n){return e?n.spatialReference===e?n.spatialReferenceId:(n.spatialReference=e,"metersPerUnit"in n&&(n.metersPerUnit=ct(e,1)),e.wkt===ft.wkt?n.spatialReferenceId=r.SPHERICAL_ECEF:Lt(e)?n.spatialReferenceId=r.WGS84:ht(e)?n.spatialReferenceId=r.WEB_MERCATOR:dt(e)?n.spatialReferenceId=r.PLATE_CARREE:e.wkt===pt.wkt?n.spatialReferenceId=r.WGS84_ECEF:e.wkid===Gt.CGCS2000?n.spatialReferenceId=r.CGCS2000:e.wkt===St.wkt?n.spatialReferenceId=r.SPHERICAL_MARS_PCPF:e.wkt===At.wkt?n.spatialReferenceId=r.SPHERICAL_MOON_PCPF:It(e)?n.spatialReferenceId=r.GCSMARS2000:mt(e)?n.spatialReferenceId=r.GCSMOON2000:n.spatialReferenceId=r.UNKNOWN):r.UNKNOWN}function O(e,n,t,o){e!==t&&(t[o++]=e[n++],t[o++]=e[n++],t[o]=e[n])}function ee(e,n,t,o){t[o++]=ne*(e[n++]/L.radius),t[o++]=ne*(Math.PI/2-2*Math.atan(Math.exp(-e[n++]/L.radius))),t[o]=e[n]}function Vt(e,n,t,o){ee(e,n,t,o),b(t,o,t,o)}function Jt(e,n,t,o){ee(e,n,t,o),Z(t,o,t,o)}function Qt(e,n,t,o,a){const i=.4999999*Math.PI,u=at(I*e[n+1],-i,i),_=Math.sin(u);t[o++]=I*e[n]*a.radius,t[o++]=a.halfSemiMajorAxis*Math.log((1+_)/(1-_)),t[o]=e[n+2]}function se(e,n,t,o){Qt(e,n,t,o,L)}const $e=L.radius*Math.PI/180,ve=180/(L.radius*Math.PI);function X(e,n,t,o){t[o]=e[n]*$e,t[o+1]=e[n+1]*$e,t[o+2]=e[n+2]}function K(e,n,t,o){t[o]=e[n]*ve,t[o+1]=e[n+1]*ve,t[o+2]=e[n+2]}function en(e,n,t,o){ee(e,n,t,o),X(t,o,t,o)}function tn(e,n,t,o){q(e,n,t,o),X(t,o,t,o)}function nn(e,n,t,o){z(e,n,t,o),X(t,o,t,o)}function on(e,n,t,o){K(e,n,t,o),b(t,o,t,o)}function rn(e,n,t,o){K(e,n,t,o),se(t,o,t,o)}function sn(e,n,t,o){K(e,n,t,o),Z(t,o,t,o)}function Kn(e){if(C(e))return!1;const n=j(e,_e);return!!F[n][r.WGS84_COMPARABLE_LON_LAT]}function Fe(e,n,t,o,a){const i=a+e[n+2],u=I*e[n+1],_=I*e[n],P=Math.cos(u);t[o++]=Math.cos(_)*P*i,t[o++]=Math.sin(_)*P*i,t[o]=Math.sin(u)*i}function je(e,n,t,o){Fe(e,n,t,o,ue.radius)}function Ye(e,n,t,o){Fe(e,n,t,o,oe.radius)}function b(e,n,t,o){Fe(e,n,t,o,L.radius)}function We(e,n,t,o,a){const i=e[n],u=e[n+1],_=e[n+2],P=Math.sqrt(i*i+u*u+_*_),E=Pt(_/(P===0?1:P)),l=Math.atan2(u,i);t[o++]=ne*l,t[o++]=ne*E,t[o]=P-a}function Xe(e,n,t,o){We(e,n,t,o,ue.radius)}function Ke(e,n,t,o){We(e,n,t,o,oe.radius)}function z(e,n,t,o){We(e,n,t,o,L.radius)}function _n(e,n,t,o){z(e,n,t,o),se(t,o,t,o)}function an(e,n,t,o){z(e,n,t,o),Z(t,o,t,o)}function un(e,n,t,o,a){const i=I*e[n],u=I*e[n+1],_=e[n+2],P=Math.sin(u),E=Math.cos(u),l=a.radius/Math.sqrt(1-a.eccentricitySquared*P*P);t[o++]=(l+_)*E*Math.cos(i),t[o++]=(l+_)*E*Math.sin(i),t[o++]=(l*(1-a.eccentricitySquared)+_)*P}function Z(e,n,t,o){un(e,n,t,o,L)}function q(e,n,t,o){const a=xt,i=e[n],u=e[n+1],_=e[n+2];let P,E,l,c,p,f,S,A,R,g,w,D,U,m,h,Se,Ae,Re,V,De,Ue;P=Math.abs(_),E=i*i+u*u,l=Math.sqrt(E),c=E+_*_,p=Math.sqrt(c),De=Math.atan2(u,i),f=_*_/c,S=E/c,m=a.a2/p,h=a.a3-a.a4/p,S>.3?(A=P/p*(1+S*(a.a1+m+f*h)/p),V=Math.asin(A),g=A*A,R=Math.sqrt(1-g)):(R=l/p*(1-f*(a.a5-m-S*h)/p),V=Math.acos(R),g=1-R*R,A=Math.sqrt(g)),w=1-L.eccentricitySquared*g,D=L.radius/Math.sqrt(w),U=a.a6*D,m=l-D*R,h=P-U*A,Ae=R*m+A*h,Se=R*h-A*m,Re=Se/(U/w+Ae),V+=Re,Ue=Ae+Se*Re/2,_<0&&(V=-V),t[o++]=ne*De,t[o++]=ne*V,t[o]=Ue}function Pn(e,n,t,o){q(e,n,t,o),b(t,o,t,o)}function ln(e,n,t,o){q(e,n,t,o),se(t,o,t,o)}const F={[r.WGS84]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:O,[r.WGS84_COMPARABLE_LON_LAT]:O,[r.SPHERICAL_ECEF]:b,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:se,[r.PLATE_CARREE]:X,[r.WGS84]:O,[r.WGS84_ECEF]:Z},[r.CGCS2000]:{[r.CGCS2000]:O,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:O,[r.WGS84_COMPARABLE_LON_LAT]:O,[r.SPHERICAL_ECEF]:b,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:X,[r.WGS84]:null,[r.WGS84_ECEF]:Z},[r.GCSMARS2000]:{[r.CGCS2000]:null,[r.GCSMARS2000]:O,[r.GCSMOON2000]:null,[r.LON_LAT]:O,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:Ye,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.GCSMOON2000]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:O,[r.LON_LAT]:O,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:je,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.WEB_MERCATOR]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:ee,[r.WGS84_COMPARABLE_LON_LAT]:ee,[r.SPHERICAL_ECEF]:Vt,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:O,[r.PLATE_CARREE]:en,[r.WGS84]:ee,[r.WGS84_ECEF]:Jt},[r.WGS84_ECEF]:{[r.CGCS2000]:q,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:q,[r.WGS84_COMPARABLE_LON_LAT]:q,[r.SPHERICAL_ECEF]:Pn,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:ln,[r.PLATE_CARREE]:tn,[r.WGS84]:q,[r.WGS84_ECEF]:O},[r.SPHERICAL_ECEF]:{[r.CGCS2000]:z,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:z,[r.WGS84_COMPARABLE_LON_LAT]:z,[r.SPHERICAL_ECEF]:O,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:_n,[r.PLATE_CARREE]:nn,[r.WGS84]:z,[r.WGS84_ECEF]:an},[r.SPHERICAL_MARS_PCPF]:{[r.CGCS2000]:null,[r.GCSMARS2000]:Ke,[r.GCSMOON2000]:null,[r.LON_LAT]:Ke,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:O,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.SPHERICAL_MOON_PCPF]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:Xe,[r.LON_LAT]:Xe,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:O,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.UNKNOWN]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:null,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:O,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.LON_LAT]:{[r.CGCS2000]:O,[r.GCSMARS2000]:O,[r.GCSMOON2000]:O,[r.LON_LAT]:O,[r.WGS84_COMPARABLE_LON_LAT]:O,[r.SPHERICAL_ECEF]:b,[r.SPHERICAL_MARS_PCPF]:Ye,[r.SPHERICAL_MOON_PCPF]:je,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:se,[r.PLATE_CARREE]:X,[r.WGS84]:O,[r.WGS84_ECEF]:Z},[r.WGS84_COMPARABLE_LON_LAT]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:O,[r.WGS84_COMPARABLE_LON_LAT]:O,[r.SPHERICAL_ECEF]:b,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:X,[r.WGS84]:O,[r.WGS84_ECEF]:Z},[r.PLATE_CARREE]:{[r.CGCS2000]:K,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:K,[r.WGS84_COMPARABLE_LON_LAT]:K,[r.SPHERICAL_ECEF]:on,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:rn,[r.PLATE_CARREE]:O,[r.WGS84]:K,[r.WGS84_ECEF]:sn}};function rt(e,n,t=we()){return C(e)||C(n)?null:En(e,n,t).projector}function En(e,n,t){if(C(e)||C(n)||t.source.spatialReference===e&&t.dest.spatialReference===n)return t;const o=j(e,t.source),a=j(n,t.dest);return o===r.UNKNOWN&&a===r.UNKNOWN?te(e,n)?t.projector=O:t.projector=null:t.projector=F[o][a],t}function we(){return{source:{spatialReference:null,spatialReferenceId:r.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:r.UNKNOWN,metersPerUnit:1},projector:O}}const _e={spatialReference:null,spatialReferenceId:r.UNKNOWN},cn={spatialReference:null,spatialReferenceId:r.UNKNOWN},st=we();we();const I=ut(1),ne=it(1),N=pe(),k=pe(),B=pe(),T=pe();export{fe as A,Be as B,ge as E,xn as H,ce as O,Me as P,Kn as R,kn as W,ot as X,Xn as Z,Dn as _,Fn as a,he as b,jt as c,Wn as d,Qe as e,$ as f,We as g,Hn as h,yn as i,vn as j,$n as k,ke as l,Qt as m,Bn as n,vt as o,Un as p,$t as r,M as s,me as t,wn as u,Yn as v,jn as w,W as x};
