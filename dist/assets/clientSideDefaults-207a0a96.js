import{h as o,y as u}from"./string-480f3e3f.js";import{t as n}from"./QueryEngineCapabilities-42e44ded.js";import{l as i,o as a,S as l}from"./defaultsJSON-59981e75.js";function $(t){return{renderer:{type:"simple",symbol:t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?i:t==="esriGeometryPolyline"?a:l}}}const c=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let y=1;function f(t,s){if(o("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let e=`this.${s} = null;`;for(const r in t)e+=`this${c.test(r)?`.${r}`:`["${r}"]`} = ${JSON.stringify(t[r])};`;const p=new Function(`
      return class AttributesClass$${y++} {
        constructor() {
          ${e};
        }
      }
    `)();return()=>new p}catch{return()=>({[s]:null,...t})}}function A(t={}){return[{name:"New Feature",description:"",prototype:{attributes:u(t)}}]}function S(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:n,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}export{A as a,f as i,S as l,$ as o};
