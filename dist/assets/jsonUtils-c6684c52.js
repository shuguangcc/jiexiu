import{t as y}from"./typedArrayUtil-d9bc5fbd.js";import{p as v,w as e,a as n}from"./Extent-a1a1de42.js";import{m as o,v as i,u as t}from"./Polyline-b571c705.js";function m(r){return r.xmin!==void 0&&r.ymin!==void 0&&r.xmax!==void 0&&r.ymax!==void 0}function u(r){return r.points!==void 0}function l(r){return r.x!==void 0&&r.y!==void 0}function s(r){return r.paths!==void 0}function f(r){return r.rings!==void 0}function x(r){return y(r)?null:r instanceof v?r:l(r)?e.fromJSON(r):s(r)?o.fromJSON(r):f(r)?i.fromJSON(r):u(r)?t.fromJSON(r):m(r)?n.fromJSON(r):null}function P(r){return r?l(r)?"esriGeometryPoint":s(r)?"esriGeometryPolyline":f(r)?"esriGeometryPolygon":m(r)?"esriGeometryEnvelope":u(r)?"esriGeometryMultipoint":null:null}const a={esriGeometryPoint:e,esriGeometryPolyline:o,esriGeometryPolygon:i,esriGeometryEnvelope:n,esriGeometryMultipoint:t};function J(r){return r&&a[r]||null}export{P as c,J as d,s as f,u as l,l as s,m as u,x as v,f as y};
