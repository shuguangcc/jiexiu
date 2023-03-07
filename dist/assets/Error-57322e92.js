import{a as m,c as d,t as p,y as _}from"./string-480f3e3f.js";import{r as g}from"./typedArrayUtil-d9bc5fbd.js";var u;const o={analysisTheme:{accentColor:[255,128,0],textColor:"white"},apiKey:void 0,applicationUrl:(u=globalThis.location)==null?void 0:u.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",routeServiceUrl:"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{crossOriginNoCorsDomains:null,httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,priority:"high",proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(globalThis.esriConfig&&(m(o,globalThis.esriConfig,!0),delete o.has),!o.assetsPath){{const a="4.25.5";o.assetsPath=`https://js.arcgis.com/${a.slice(0,-2)}/@arcgis/core/assets`}o.defaultAssetsPath=o.assetsPath}const h={info:0,warn:1,error:2,none:3};let s=class{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},e.level!=null&&(this.level=e.level),e.writer!=null&&(this.writer=e.writer),this._module=e.module,s._loggers[this.module]=this;const t=this.module.lastIndexOf(".");t!==-1&&(this._parent=s.getLogger(this.module.slice(0,t)))}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e)}warn(...e){this._log("warn","always",...e)}info(...e){this._log("info","always",...e)}errorOnce(...e){this._log("error","once",...e)}warnOnce(...e){this._log("warn","once",...e)}infoOnce(...e){this._log("info","once",...e)}errorOncePerTick(...e){this._log("error","oncePerTick",...e)}warnOncePerTick(...e){this._log("warn","oncePerTick",...e)}infoOncePerTick(...e){this._log("info","oncePerTick",...e)}get test(){const e=this;return{loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return{resetLoggers(e={}){const t=s._loggers;return s._loggers=e,t},set throttlingDisabled(e){s._throttlingDisabled=e}}}static getLogger(e){let t=s._loggers[e];return t||(t=new s({module:e})),t}_log(e,t,...r){if(this._matchLevel(e)){if(t!=="always"&&!s._throttlingDisabled){const i=this._argsToKey(r),n=this._loggedMessages[e].get(i);if(t==="once"&&n!=null||t==="oncePerTick"&&n&&n>=s._tickCounter)return;this._loggedMessages[e].set(i,s._tickCounter),s._scheduleTickCounterIncrement()}for(const i of o.log.interceptors)if(i(e,this.module,...r))return;this._inheritedWriter()(e,this.module,...r)}}_parentWithMember(e,t){let r=this;for(;g(r);){const i=r[e];if(g(i))return i;r=r.parent}return t}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...r){console[e](`[${t}]`,...r)}_matchLevel(e){const t=o.log.level?o.log.level:"warn";return h[this._parentWithMember("level",t)]<=h[e]}_argsToKey(...e){return d(JSON.stringify(e,(r,i)=>typeof i!="object"||Array.isArray(i)?i:"[Object]"))}static _scheduleTickCounterIncrement(){s._tickCounterScheduled||(s._tickCounterScheduled=!0,Promise.resolve().then(()=>{s._tickCounter++,s._tickCounterScheduled=!1}))}};s._loggers={},s._tickCounter=0,s._tickCounterScheduled=!1,s._throttlingDisabled=!1;function f(a,e){return a.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(t,r)=>{if(r==="")return"$";const i=p(r,e),n=i??"";if(n===void 0)throw new Error(`could not find key "${r}" in template`);return n.toString()})}class c{constructor(e,t,r){this.name=e,this.details=r,this instanceof c&&(this.message=(t&&f(t,r))??"")}toString(){return"["+this.name+"]: "+this.message}}class l extends c{constructor(e,t,r){if(super(e,t,r),!(this instanceof l))return new l(e,t,r)}toJSON(){if(this.details!=null)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,(e,t)=>{if(t&&typeof t=="object"&&typeof t.toJSON=="function")return t;try{return _(t)}catch{return"[object]"}}))}}catch(e){throw s.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new l(e.name,e.message,e.details)}}l.prototype.type="error";export{l as a,o as b,c as r,s};
