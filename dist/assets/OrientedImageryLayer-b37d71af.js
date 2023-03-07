import{e as t,y as r,n as i}from"./cast-a534ae90.js";import{a as m}from"./Error-57322e92.js";import"./typedArrayUtil-d9bc5fbd.js";import"./ensureType-25b8cc06.js";import e from"./FeatureLayer-9a7e04cf.js";import"./string-480f3e3f.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./preload-helper-101896b7.js";import"./PopupTemplate-52faab17.js";import"./Clonable-9b34e760.js";import"./Collection-7c37b74e.js";import"./Evented-cbf5f368.js";import"./SimpleObservable-8e532943.js";import"./Extent-a1a1de42.js";import"./fieldUtils-77ec75e2.js";import"./arcadeOnDemand-5175e7d9.js";import"./geometry-eec1b371.js";import"./Polyline-b571c705.js";import"./typeUtils-cd52dc20.js";import"./jsonMap-190c5593.js";import"./enumeration-61a13175.js";import"./number-2ab8ca0d.js";import"./locale-30120714.js";import"./Identifiable-093f90a8.js";import"./UniqueValueRenderer-30750d31.js";import"./symbols-75e7a993.js";import"./CIMSymbol-8f02a6e3.js";import"./Symbol-8266348e.js";import"./Color-af6e0c66.js";import"./colorUtils-639f4d25.js";import"./mathUtils-57aba1ea.js";import"./vec3-1863987c.js";import"./vec3f64-6cd30318.js";import"./common-c186b691.js";import"./vec4-46a9b36d.js";import"./screenUtils-90993e16.js";import"./opacityUtils-1333f803.js";import"./symbolLayerUtils3D-c8c40895.js";import"./aaBoundingBox-4a83dbbc.js";import"./aaBoundingRect-b340cf8c.js";import"./request-f17a8ddb.js";import"./persistableUrlUtils-56d43b12.js";import"./collectionUtils-0365f48b.js";import"./Portal-51616380.js";import"./Loadable-46524a7e.js";import"./Promise-368b703a.js";import"./PortalGroup-d495847c.js";import"./PortalUser-e16fc7d1.js";import"./LegendOptions-2e7b3d70.js";import"./reactiveUtils-5869e41a.js";import"./diffUtils-8a8cb5bc.js";import"./colorRamps-8d7efc14.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-1859ae71.js";import"./jsonUtils-c6684c52.js";import"./compilerUtils-fefa73ae.js";import"./lengthUtils-92fed992.js";import"./unitUtils-dd6fb8ee.js";import"./jsonUtils-eb568237.js";import"./styleUtils-015eeecd.js";import"./jsonUtils-559e9000.js";import"./DictionaryLoader-326d0e17.js";import"./LRUCache-b9228ca3.js";import"./MemCache-1d2f56ee.js";import"./deprecate-0d93948c.js";import"./heatmapUtils-3d7c22c5.js";import"./vec4f64-939de194.js";import"./MultiOriginJSONSupport-b8792dfa.js";import"./LayerFloorInfo-e7c896e5.js";import"./FeatureLayerBase-d5682b4b.js";import"./Field-1d4f9ca4.js";import"./fieldType-b34e5d2d.js";import"./HeightModelInfo-34f16d74.js";import"./arcgisLayerUrl-6e9db12f.js";import"./OperationalLayer-1dad72ac.js";import"./TimeExtent-2004eecf.js";import"./ElevationInfo-88554f24.js";import"./RelationshipQuery-c27267ab.js";import"./Query-13124a97.js";import"./Layer-ead8c88c.js";import"./HandleOwner-2edbba46.js";import"./workers-5d67fe7a.js";import"./Connection-b756149d.js";import"./Queue-275a6362.js";import"./assets-a5ce5e1a.js";import"./intl-70c09a3c.js";import"./messages-28bf3b89.js";import"./editsZScale-12d81957.js";import"./queryZScale-3c8de33a.js";import"./zscale-48bab05e.js";import"./FeatureSet-9cc47aef.js";import"./APIKeyMixin-b6e4f897.js";import"./ArcGISService-e571bcff.js";import"./BlendLayer-813950f9.js";import"./parser-01f6451e.js";import"./mat4f32-77b3d8ac.js";import"./mat4-7dde83b1.js";import"./CustomParametersMixin-a5d06ccc.js";import"./EditBusLayer-b5dc3689.js";import"./FeatureReductionLayer-1e5c4045.js";import"./labelingInfo-be3a629c.js";import"./labelUtils-4f4b54c6.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-9623e905.js";import"./PortalLayer-9dd15f09.js";import"./asyncUtils-087555fc.js";import"./PortalItem-6eebfb2b.js";import"./RefreshableLayer-49182ab8.js";import"./ScaleRangeLayer-c072e266.js";import"./TemporalLayer-f784dd83.js";import"./TimeInfo-f76d6c20.js";import"./FeatureTemplate-c4496b93.js";import"./FeatureType-0be9420b.js";import"./fieldProperties-9e220f14.js";import"./FieldsIndex-16707836.js";import"./versionUtils-f229b9a6.js";import"./styleUtils-08eaa4d2.js";import"./TopFeaturesQuery-9aca00bf.js";import"./popupUtils-88fed094.js";let o=class extends e{constructor(p){super(p),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new m("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([r()],o.prototype,"cameraProperties",void 0),t([r()],o.prototype,"coverage",void 0),t([r()],o.prototype,"coveragePercent",void 0),t([r()],o.prototype,"defaultSearchLocation",void 0),t([r()],o.prototype,"depthImage",void 0),t([r()],o.prototype,"digitalElevationModel",void 0),t([r()],o.prototype,"geometryType",void 0),t([r()],o.prototype,"imageProperties",void 0),t([r()],o.prototype,"maximumDistance",void 0),t([r({json:{read:!1},value:"oriented-imagery",readOnly:!0})],o.prototype,"type",void 0),t([r({type:["OrientedImageryLayer"]})],o.prototype,"operationalLayerType",void 0),o=t([i("esri.layers.OrientedImageryLayer")],o);const It=o;export{It as default};