import{s as u,a as m}from"./Error-57322e92.js";import{t as l}from"./typedArrayUtil-d9bc5fbd.js";import{q as p,C as f,B as y,a as d}from"./utils-52ad3c09.js";function M(o,r,e,a,t){if(l(o))return null;const n=o.referencesGeometry()&&t?g(r,a,t):r,s=o.repurposeFeature(n);try{return o.evaluate({...e,$feature:s})}catch(c){return u.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const i=new Map;function g(o,r,e){const{transform:a,hasZ:t,hasM:n}=e;i.has(r)||i.set(r,w(r));const s=i.get(r)(o.geometry,a,t,n);return{...o,geometry:s}}function w(o){const r={};switch(o){case"esriGeometryPoint":return(e,a,t,n)=>d(a,r,e,t,n);case"esriGeometryPolygon":return(e,a,t,n)=>y(a,r,e,t,n);case"esriGeometryPolyline":return(e,a,t,n)=>f(a,r,e,t,n);case"esriGeometryMultipoint":return(e,a,t,n)=>p(a,r,e,t,n);default:return u.getLogger("esri.views.2d.support.arcadeOnDemand").error(new m("mapview-arcade",`Unable to handle geometryType: ${o}`)),e=>e}}export{M as i};