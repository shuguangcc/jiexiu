import{o as h}from"./string-480f3e3f.js";class u{constructor(o,s={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=o,this._options=s,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(o),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(t,r,e)=>{const n=this.toJSON(t);n!==void 0&&h(e,n,r)},this.write.isJSONMapWriter=!0}toJSON(o){if(this._apiToJSON.hasOwnProperty(o)){const s=this._apiToJSON[o];return this._options.useNumericKeys?+s:s}return this._options.ignoreUnknown?void 0:o}fromJSON(o){return this._jsonToAPI.hasOwnProperty(o)?this._jsonToAPI[o]:this._options.ignoreUnknown?void 0:o}_invertMap(o){const s={};for(const t in o)s[o[t]]=t;return s}_getKeysSorted(o){const s=[];for(const t in o)s.push(t);return s.sort(),s}}function p(){return function(i,o){return new u(i,{ignoreUnknown:!0,...o})}}export{p as o,u as s};