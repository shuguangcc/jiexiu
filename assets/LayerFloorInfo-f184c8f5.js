import{_ as d}from"./preload-helper-41c905a7.js";import{r as s}from"./typedArrayUtil-d9bc5fbd.js";import{e as t,y as l,l as p,n as v}from"./cast-a534ae90.js";import{j as a}from"./Collection-7c37b74e.js";import"./ensureType-25b8cc06.js";async function A(e,r){const{WhereClause:n}=await d(()=>import("./WhereClause-6c9440a1.js"),["./WhereClause-6c9440a1.js","./string-480f3e3f.js","./typedArrayUtil-d9bc5fbd.js"],import.meta.url);return n.create(e,r)}function y(e,r){return s(e)?s(r)?`(${e}) AND (${r})`:e:r}var i;let o=i=class extends p{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new a}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};t([l({type:String,json:{write:!0}})],o.prototype,"floorField",void 0),t([l({json:{read:!1,write:!1}})],o.prototype,"viewAllMode",void 0),t([l({json:{read:!1,write:!1}})],o.prototype,"viewAllLevelIds",void 0),o=i=t([v("esri.layers.support.LayerFloorInfo")],o);const _=o;export{_ as p,A as r,y as t};
