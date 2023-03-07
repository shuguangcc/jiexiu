import{_ as v}from"./preload-helper-41c905a7.js";import{e as a,y as n,n as w}from"./cast-a534ae90.js";import{s as u,F as h,U as $,N as P}from"./request-24011425.js";import{b as _}from"./asyncUtils-087555fc.js";import{s as U,a as E}from"./Error-57322e92.js";import{s as b,t as T,r as D}from"./typedArrayUtil-d9bc5fbd.js";import{f as H,j as L,w as M}from"./promiseUtils-32d9c228.js";import"./ensureType-25b8cc06.js";import{o as S,r as j}from"./Extent-a1a1de42.js";import{j as c}from"./Portal-c6e03126.js";import f from"./PortalItem-e4ba4b94.js";import x from"./PortalUser-1016c43c.js";const G=y=>{let i=class extends y{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem=b(this.portalItem)}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new f({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const r=await v(()=>import("./layersLoader-92ad9054.js").then(s=>s.l),["./layersLoader-92ad9054.js","./Error-57322e92.js","./string-480f3e3f.js","./typedArrayUtil-d9bc5fbd.js","./Layer-cea228f0.js","./preload-helper-41c905a7.js","./cast-a534ae90.js","./ensureType-25b8cc06.js","./nextTick-3ee5a785.js","./promiseUtils-32d9c228.js","./geometry-eec1b371.js","./Extent-a1a1de42.js","./Polyline-b571c705.js","./typeUtils-cd52dc20.js","./jsonMap-190c5593.js","./request-24011425.js","./Evented-cbf5f368.js","./Identifiable-093f90a8.js","./Loadable-46524a7e.js","./Promise-368b703a.js","./arcgisLayerUrl-bed3cba1.js","./persistableUrlUtils-d0777bec.js","./Portal-c6e03126.js","./locale-30120714.js","./PortalGroup-d495847c.js","./PortalUser-1016c43c.js","./PortalItem-e4ba4b94.js","./assets-cd44347b.js","./jsonContext-342cb5f2.js","./portalItemUtils-83d91a4e.js","./projection-acd73147.js","./mathUtils-57aba1ea.js","./vec3-1863987c.js","./vec3f64-6cd30318.js","./common-c186b691.js","./vec4-46a9b36d.js","./unitUtils-dd6fb8ee.js","./SimpleObservable-8e532943.js","./mat4-7dde83b1.js","./aaBoundingRect-b340cf8c.js","./zscale-48bab05e.js","./styleUtils-08eaa4d2.js","./asyncUtils-087555fc.js"],import.meta.url);return H(t),await r.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(r){throw L(r)||U.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${r}`),r}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch(t=>(M(t),!0)))}async _fetchUserHasEditingPrivileges(e){var s;const t=this.url?(s=u)==null?void 0:s.findCredential(this.url):null;if(!t)return!0;const r=l.credential===t?l.user:await this._fetchEditingUser(e);return l.credential=t,l.user=r,T(r)||r.privileges==null||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var m,d;const t=(d=(m=this.portalItem)==null?void 0:m.portal)==null?void 0:d.user;if(t)return t;const r=u.findServerInfo(this.url??"");if(!(r!=null&&r.owningSystemUrl))return null;const s=`${r.owningSystemUrl}/sharing/rest`,o=c.getDefault();if(o&&o.loaded&&h(o.restUrl)===h(s))return o.user;const g=`${s}/community/self`,I=D(e)?e.signal:null,p=await _($(g,{authMode:"no-prompt",query:{f:"json"},signal:I}));return p.ok?x.fromJSON(p.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||c.getDefault());return r&&s&&!P(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new E("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return a([n({type:f})],i.prototype,"portalItem",null),a([S("web-document","portalItem",["itemId"])],i.prototype,"readPortalItem",null),a([j("web-document","portalItem",{itemId:{type:String}})],i.prototype,"writePortalItem",null),a([n({clonable:!1})],i.prototype,"resourceReferences",void 0),a([n({readOnly:!0})],i.prototype,"userHasEditingPrivileges",void 0),i=a([w("esri.layers.mixins.PortalLayer")],i),i},l={credential:null,user:null};export{G as v};