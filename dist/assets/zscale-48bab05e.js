import{t as i}from"./typedArrayUtil-d9bc5fbd.js";import{L as s}from"./unitUtils-dd6fb8ee.js";import{E as c}from"./Extent-a1a1de42.js";function z(t,o,n){if(i(o)||i(n)||n.vcsWkid||c(o,n))return null;const e=s(o)/s(n);if(e===1)return null;switch(t){case"point":case"esriGeometryPoint":return r=>l(r,e);case"polyline":case"esriGeometryPolyline":return r=>u(r,e);case"polygon":case"esriGeometryPolygon":return r=>f(r,e);case"multipoint":case"esriGeometryMultipoint":return r=>a(r,e);case"extent":case"esriGeometryExtent":return r=>m(r,e);default:return null}}function l(t,o){t&&t.z!=null&&(t.z*=o)}function f(t,o){if(t)for(const n of t.rings)for(const e of n)e.length>2&&(e[2]*=o)}function u(t,o){if(t)for(const n of t.paths)for(const e of n)e.length>2&&(e[2]*=o)}function a(t,o){if(t)for(const n of t.points)n.length>2&&(n[2]*=o)}function m(t,o){t&&t.zmin!=null&&t.zmax!=null&&(t.zmin*=o,t.zmax*=o)}export{z as o};
