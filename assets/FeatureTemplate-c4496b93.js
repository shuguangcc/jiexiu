import{e as o,y as r,n as l,l as n}from"./cast-a534ae90.js";import{i as a}from"./Clonable-9b34e760.js";import{s}from"./jsonMap-190c5593.js";import"./typedArrayUtil-d9bc5fbd.js";import"./ensureType-25b8cc06.js";const t=new s({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let e=class extends a(n){constructor(i){super(i),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};o([r({json:{write:!0}})],e.prototype,"name",void 0),o([r({json:{write:!0}})],e.prototype,"description",void 0),o([r({json:{read:t.read,write:t.write}})],e.prototype,"drawingTool",void 0),o([r({json:{write:!0}})],e.prototype,"prototype",void 0),o([r({json:{write:!0}})],e.prototype,"thumbnail",void 0),e=o([l("esri.layers.support.FeatureTemplate")],e);const F=e;export{F as p};