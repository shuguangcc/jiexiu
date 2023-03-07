import{e as a,y as l,n as h}from"./cast-a534ae90.js";import"./Error-57322e92.js";import"./ensureType-25b8cc06.js";import{t as m}from"./typedArrayUtil-d9bc5fbd.js";import"./string-480f3e3f.js";import{r as n}from"./GroupContainer-e381229e.js";import{y as d}from"./LayerView2D-fc5f87cc.js";import{j as V}from"./Collection-7c37b74e.js";import{t as w,n as v}from"./collectionUtils-0365f48b.js";import{l as o,U as p}from"./reactiveUtils-5869e41a.js";import{u}from"./LayerView-a849dd77.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./WGLContainer-b2d1fffc.js";import"./mat3f32-d3d088e8.js";import"./enums-64ab819c.js";import"./mat3-9a8d9db7.js";import"./common-c186b691.js";import"./vec2f32-461e65a9.js";import"./pixelUtils-cc2ca9c3.js";import"./utils-0d179f64.js";import"./EffectView-dffeb0bc.js";import"./parser-01f6451e.js";import"./colorUtils-639f4d25.js";import"./screenUtils-90993e16.js";import"./mat4f32-77b3d8ac.js";import"./mat4-7dde83b1.js";import"./vec3f64-6cd30318.js";import"./Evented-cbf5f368.js";import"./enums-4ca4641f.js";import"./MaterialKey-a0a08f8b.js";import"./alignmentUtils-ae955d28.js";import"./Utils-a4216b91.js";import"./number-954e4ab6.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec4-46a9b36d.js";import"./enums-4b2a86a0.js";import"./Texture-411ca148.js";import"./context-util-d4c193b5.js";import"./VertexElementDescriptor-2925c6af.js";import"./definitions-2d0dd0cd.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./Color-af6e0c66.js";import"./vec2f64-30dc1443.js";import"./VertexArrayObject-3630ef4f.js";import"./vec4f32-2f36231b.js";import"./ProgramTemplate-f021fc55.js";import"./StyleDefinition-7d58136b.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./vec2-ab9f47bf.js";import"./featureConversionUtils-d2229ed4.js";import"./jsonUtils-c6684c52.js";import"./Extent-a1a1de42.js";import"./Polyline-b571c705.js";import"./OptimizedFeature-73582c6e.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./geometry-eec1b371.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./SimpleObservable-8e532943.js";import"./HandleOwner-2edbba46.js";import"./Identifiable-093f90a8.js";import"./Promise-368b703a.js";let t=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new V}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),o(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),p),o(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},p)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",v(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{var r;return(r=this._findLayerViewForLayer(e))==null?void 0:r.visible});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){m(i)&&(i=this._firstVisibleOnLayerOrder(),m(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(r=>o(()=>r.visible,s=>this._applyVisibility(()=>{s!==this.visible&&(r.visible=this.visible)},()=>this._applyExclusiveVisibility(s?r:null)),p)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var r,s;this._hasLayerViewVisibleOverrides()&&(((r=this.layer)==null?void 0:r.visibilityMode)==="inherited"?i():((s=this.layer)==null?void 0:s.visibilityMode)==="exclusive"&&e())}};a([l({cast:w})],t.prototype,"layerViews",null),a([l({readOnly:!0})],t.prototype,"updatingProgress",null),a([l()],t.prototype,"view",void 0),t=a([h("esri.views.layers.GroupLayerView")],t);const b=t;let y=class extends d(b){constructor(){super(...arguments),this.container=new n}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};y=a([h("esri.views.2d.layers.GroupLayerView2D")],y);const Hi=y;export{Hi as default};
