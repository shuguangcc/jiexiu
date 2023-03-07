import{a as It}from"./devEnvironmentUtils-5002a058.js";import{r as p,t as _e,e as Bt,q as zt}from"./typedArrayUtil-d9bc5fbd.js";import{i as ze,g as Fe}from"./mat3-9a8d9db7.js";import{a as Qe}from"./quatf64-c94bd656.js";import{h as Ft}from"./mat4-7dde83b1.js";import{o as et,e as Gt}from"./mat4f64-fbeb2cd1.js";import{o as ge,r as Ut,z as tt,e as ve,s as ot,g as Ge,P as kt,S as Wt,O as Ue,i as ke,A as jt}from"./vec3-1863987c.js";import{n as E,r as Q,e as We}from"./vec3f64-6cd30318.js";import{A as at,c as xe}from"./aaBoundingBox-4a83dbbc.js";import{i as fe,c as je,u as Ht,x as Ae,L as qt,O as He,E as Yt}from"./BufferView-478024d2.js";import{t as Xt,r as Jt,f as qe,e as Zt}from"./vec33-ec7b196f.js";import{m as Kt,n as Qt,o as X,r as k,a as eo,b as to,c as Ye,e as oo,t as ao,i as ro,f as io,d as no}from"./DefaultMaterial_COLOR_GAMMA-ccf18a3a.js";import{e as Z,t as Me}from"./mat3f32-d3d088e8.js";import{c as so,i as lo}from"./vec2f32-461e65a9.js";import{U as co}from"./request-24011425.js";import{b as rt}from"./asyncUtils-087555fc.js";import{e as uo}from"./byteSizeEstimations-90c5a50d.js";import{s as mo,a as po}from"./Error-57322e92.js";import{w as it}from"./promiseUtils-32d9c228.js";import{r as nt}from"./Version-b16872d5.js";import{t as ho}from"./requestImageUtils-d2d7b1fb.js";import{q as vo,r as fo,C as y,o as J,n as U,v as ne,W as go,c as xo,A as To,h as bo,l as yo,b as Co,_ as wo,e as Mo,S as $o}from"./OrderIndependentTransparency-68bd812c.js";import{c as l,d as Oo,aN as So,aO as Xe,l as h,q as Ao,aP as Lo,aI as _o,w as Ne,a as st,v as ee,m as te,aQ as oe,a6 as ae,n as W,a8 as No,aR as Pe,aS as lt,aT as R,U as Po,V as Eo,ak as Ro,aU as ie,aV as Do,aW as Vo,aX as Io,ax as b,at as Ee,aw as Bo,T as zo,ar as ct,as as Re,aq as Fo,av as Go,aY as se,p as Uo,aL as dt,aZ as ut,k as Te,au as mt,aj as pt,s as be,a_ as ht,ay as vt,e as ye,a$ as ft,ap as ko,b0 as Wo,G as jo,g as Ho,t as gt,b as qo,az as Yo,o as Xo,E as Jo,H as Zo,I as Ko,J as Qo,x as ea,y as ta,ad as oa,z as aa,ao as ra,f as me,K as ia,D as na,L as xt,i as Tt}from"./SSAOHelper-dbb21920.js";import{h as sa}from"./string-480f3e3f.js";import{l as Le}from"./ViewingMode-915d19cb.js";import{T as bt}from"./InterleavedLayout-b5930508.js";import{n as yt}from"./compilerUtils-fefa73ae.js";import{n as a,o as P,f as j,g as re,j as la,u as Ct,r as wt,b as Mt}from"./ScreenSpacePass-6db805f2.js";import{O as v}from"./VertexAttribute-9c5c630d.js";import{_ as $t}from"./preload-helper-41c905a7.js";import{r as ca}from"./vec4f64-939de194.js";import{e as c}from"./cast-a534ae90.js";import{r as z}from"./symbolColorUtils-dd198128.js";import{u as da}from"./SSAOBlur.glsl-ea338452.js";import{e as Ot}from"./SSAO.glsl-3068f7bf.js";import{r as ua}from"./context-util-d4c193b5.js";import{I as Je,D as Ze,E as $e}from"./enums-64ab819c.js";function ma(e,t){const o=e.fragment;switch(o.code.add(a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case S.None:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case S.View:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case S.WindingOrder:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:yt(t.doubleSidedMode);case S.COUNT:}}var S;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(S||(S={}));function St(e){e.vertex.code.add(a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}let pa=class extends Oo{constructor(){super(...arguments),this.instancedDoublePrecision=!1}};function At(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(v.MODELORIGINHI,"vec3"),e.attributes.add(v.MODELORIGINLO,"vec3"),e.attributes.add(v.MODEL,"mat3"),e.attributes.add(v.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(So,t),o.uniforms.add(new Xe("viewOriginHi",(r,n)=>vo(ge(pe,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),pe))),o.uniforms.add(new Xe("viewOriginLo",(r,n)=>fo(ge(pe,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),pe)))),o.code.add(a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===h.Normal&&(Ao(o),o.code.add(a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}c([l()],pa.prototype,"instancedDoublePrecision",void 0);const pe=E();function ha(e){e.vertex.code.add(a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.int(z.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.int(z.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.int(z.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.int(z.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Lt(e,t){t.hasSymbolColors?(e.include(ha),e.attributes.add(v.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Lo("colorMixMode",o=>_o[o.colorMixMode])),e.vertex.code.add(a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function va(e){e.fragment.code.add(a`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.float(Ne)}) { discard; } }
  `)}function H(e,t){fa(e,t,new P("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function fa(e,t,o){const r=e.fragment;switch(t.alphaDiscardMode!==y.Mask&&t.alphaDiscardMode!==y.MaskBlend||r.uniforms.add(o),t.alphaDiscardMode){case y.Blend:return e.include(va);case y.Opaque:r.code.add(a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case y.Mask:r.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case y.MaskBlend:e.fragment.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function _t(e,t){const{vertex:o,fragment:r}=e,n=t.hasModelTransformation;n&&o.uniforms.add(new st("model",s=>p(s.modelTransformation)?s.modelTransformation:et));const i=t.hasColorTexture&&t.alphaDiscardMode!==y.Opaque;switch(t.output){case h.Depth:case h.Shadow:case h.ShadowHighlight:case h.ShadowExludeHighlight:case h.ObjectAndLayerIdColor:ee(o,t),e.include(te,t),e.include(oe,t),e.include(ae,t),e.include(Po,t),e.include(W,t),e.include(Eo,t),Ro(e),e.varyings.add("depth","float"),i&&r.uniforms.add(new j("tex",s=>s.texture)),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${n?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(H,t),r.code.add(a`
          void main(void) {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===h.ObjectAndLayerIdColor?a`outputObjectAndLayerIdColor();`:a`outputDepth(depth);`}
          }
        `);break;case h.Normal:ee(o,t),e.include(te,t),e.include(Pe,t),e.include(lt,t),e.include(oe,t),e.include(ae,t),i&&r.uniforms.add(new j("tex",s=>s.texture)),e.varyings.add("vPositionView","vec3"),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===R.Attribute?a`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${n?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(W,t),e.include(H,t),r.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===R.ScreenDerivative?a`
                vec3 normal = screenDerivativeNormal(vPositionView);`:a`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case h.Highlight:ee(o,t),e.include(te,t),e.include(oe,t),e.include(ae,t),i&&r.uniforms.add(new j("tex",s=>s.texture)),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${n?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(W,t),e.include(H,t),e.include(No,t),r.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function ga(e,t){const o=e.fragment;if(t.hasVertexTangents?(e.attributes.add(v.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===S.WindingOrder?o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==ie.None){e.include(Do,t);const r=t.supportsTextureAtlas?t.hasWebGL2Context?re.None:re.Size:re.None;o.uniforms.add(t.pbrTextureBindType===la.Pass?Ct("normalTexture",n=>n.textureNormal,r):da("normalTexture",n=>n.textureNormal,r)),o.code.add(a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?a`vtc.size = ${wt(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function De(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(Ct("ssaoTex",(r,n)=>n.ssaoHelper.colorTexture,t.hasWebGL2Context?re.None:re.InvSize)),o.constants.add("blurSizePixelsInverse","float",1/Vo),o.code.add(a`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${wt(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):o.code.add(a`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Ve(e){e.constants.add("ambientBoostFactor","float",Io)}function Ie(e){e.uniforms.add(new P("lightingGlobalFactor",(t,o)=>o.lighting.globalFactor))}function Nt(e,t){const o=e.fragment;switch(e.include(De,t),t.pbrMode!==b.Disabled&&e.include(Ee,t),e.include(Bo,t),e.include(zo),o.code.add(a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===b.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Ve(o),Ie(o),ct(o),o.code.add(a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?a`normalize(vPosWorld)`:a`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Re(o),o.code.add(a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case b.Disabled:case b.WaterOnIntegratedMesh:case b.Water:e.include(Go,t),o.code.add(a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case b.Normal:case b.Schematic:o.code.add(a`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new Fo("hasFillLights",(r,n)=>n.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add([new P("lightingSpecularStrength",(r,n)=>n.lighting.mainLight.specularStrength),new P("lightingEnvironmentStrength",(r,n)=>n.lighting.mainLight.environmentStrength)]),o.code.add(a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===b.Schematic?a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:yt(t.pbrMode);case b.COUNT:}}function xa(e){e.vertex.uniforms.add(new se("colorTextureTransformMatrix",t=>p(t.colorTextureTransformMatrix)?t.colorTextureTransformMatrix:Z())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ta(e){e.vertex.uniforms.add(new se("normalTextureTransformMatrix",t=>p(t.normalTextureTransformMatrix)?t.normalTextureTransformMatrix:Z())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ba(e){e.vertex.uniforms.add(new se("emissiveTextureTransformMatrix",t=>p(t.emissiveTextureTransformMatrix)?t.emissiveTextureTransformMatrix:Z())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ya(e){e.vertex.uniforms.add(new se("occlusionTextureTransformMatrix",t=>p(t.occlusionTextureTransformMatrix)?t.occlusionTextureTransformMatrix:Z())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ca(e){e.vertex.uniforms.add(new se("metallicRoughnessTextureTransformMatrix",t=>p(t.metallicRoughnessTextureTransformMatrix)?t.metallicRoughnessTextureTransformMatrix:Z())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ce(e){e.include(Uo),e.code.add(a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.int(z.Multiply)}) {
        return allMixed;
      }
      if (mode == ${a.int(z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(z.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${a.int(z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(z.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function wa(e){const t=new Mt,{vertex:o,fragment:r,varyings:n}=t;return ee(o,e),t.include(dt),n.add("vpos","vec3"),t.include(ae,e),t.include(At,e),t.include(ut,e),e.hasColorTextureTransform&&t.include(xa),e.output!==h.Color&&e.output!==h.Alpha||(e.hasNormalTextureTransform&&t.include(Ta),e.hasEmissionTextureTransform&&t.include(ba),e.hasOcclusionTextureTransform&&t.include(ya),e.hasMetallicRoughnessTextureTransform&&t.include(Ca),Te(o,e),t.include(Pe,e),t.include(te,e),e.normalType===R.Attribute&&e.offsetBackfaces&&t.include(St),t.include(ga,e),t.include(lt,e),e.instancedColor&&t.attributes.add(v.INSTANCECOLOR,"vec4"),n.add("localvpos","vec3"),t.include(oe,e),t.include(mt,e),t.include(Lt,e),t.include(pt,e),o.uniforms.add(new Ot("externalColor",i=>i.externalColor)),n.add("vcolorExt","vec4"),e.hasMultipassTerrain&&n.add("depth","float"),e.hasModelTransformation&&o.uniforms.add(new st("model",i=>p(i.modelTransformation)?i.modelTransformation:et)),o.code.add(a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${a.float(Ne)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===R.Attribute?a`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===R.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?a`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?a`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?a`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?a`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?a`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===h.Alpha&&(t.include(W,e),t.include(H,e),t.include(be,e),r.uniforms.add([new P("opacity",i=>i.opacity),new P("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new j("tex",i=>i.texture)),r.include(Ce),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===h.Color&&(t.include(W,e),t.include(Nt,e),t.include(De,e),t.include(H,e),t.include(e.instancedDoublePrecision?ht:vt,e),t.include(be,e),Te(r,e),r.uniforms.add([o.uniforms.get("localOrigin"),new ye("ambient",i=>i.ambient),new ye("diffuse",i=>i.diffuse),new P("opacity",i=>i.opacity),new P("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new j("tex",i=>i.texture)),t.include(ft,e),t.include(Ee,e),r.include(Ce),t.include(ma,e),Ve(r),Ie(r),Re(r),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===R.ScreenDerivative?a`
                vec3 normal = screenDerivativeNormal(localvpos);`:a`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?a`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:a`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?a`normalize(posWorld);`:a`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?a`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===J.Color?a`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(_t,e),t}const Ma=Object.freeze(Object.defineProperty({__proto__:null,build:wa},Symbol.toStringTag,{value:"Module"}));let $a=class extends Wo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Q(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=U.Back,this.emissiveFactor=Q(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Q(.2,.2,.2),this.diffuse=Q(.8,.8,.8),this.externalColor=ca(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=E(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Qe(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=ne.Less,this.textureAlphaMode=y.Blend,this.textureAlphaCutoff=jo,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ho.Occlude}},zr=class extends ko{constructor(){super(...arguments),this.origin=E(),this.slicePlaneLocalOrigin=this.origin}};class le extends qo{initializeConfiguration(t,o){o.hasWebGL2Context=t.rctx.type===ua.WEBGL2,o.spherical=t.viewingMode===Le.Global,o.doublePrecisionRequiresObfuscation=Yo(t.rctx),o.textureCoordinateType=o.hasColorTexture||o.hasMetallicRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture?ie.Default:ie.None,o.objectAndLayerIdColorInstanced=o.instanced}initializeProgram(t){return this._initializeProgram(t,le.shader)}_initializeProgram(t,o){return new Xo(t.rctx,o.get().build(this.configuration),Jo)}_convertDepthTestFunction(t){return t===ne.Lequal?Je.LEQUAL:Je.LESS}_makePipeline(t,o){const r=this.configuration,n=t===J.NONE,i=t===J.FrontFace;return go({blending:r.output!==h.Color&&r.output!==h.Alpha||!r.transparent?null:n?xo:To(t),culling:Oa(r)&&bo(r.cullFace),depthTest:{func:yo(t,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:n||i?r.writeDepth&&Co:null,colorWrite:wo,stencilWrite:r.hasOccludees?Zo:null,stencilTest:r.hasOccludees?o?Ko:Qo:null,polygonOffset:n||i?null:Mo(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(t,o){return o?this._occludeePipelineState:super.getPipelineState(t,o)}}function Oa(e){return e.cullFace!==U.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}le.shader=new gt(Ma,()=>$t(()=>import("./DefaultMaterial.glsl-b47781b9.js"),["./DefaultMaterial.glsl-b47781b9.js","./mat4f64-fbeb2cd1.js","./SSAOHelper-dbb21920.js","./typedArrayUtil-d9bc5fbd.js","./OrderIndependentTransparency-68bd812c.js","./enums-64ab819c.js","./cast-a534ae90.js","./string-480f3e3f.js","./Error-57322e92.js","./ensureType-25b8cc06.js","./nextTick-3ee5a785.js","./promiseUtils-32d9c228.js","./vec3-1863987c.js","./vec3f64-6cd30318.js","./common-c186b691.js","./Util-289ce3b5.js","./vec2f64-30dc1443.js","./vec4-46a9b36d.js","./vec4f64-939de194.js","./triangle-8cd02c5d.js","./sphere-622880b9.js","./mathUtils-57aba1ea.js","./mat4-7dde83b1.js","./byteSizeEstimations-90c5a50d.js","./quatf64-c94bd656.js","./lineSegment-c6f0b9d1.js","./Indices-d9b791ce.js","./VertexAttribute-9c5c630d.js","./ScreenSpacePass-6db805f2.js","./vec2-ab9f47bf.js","./compilerUtils-fefa73ae.js","./Evented-cbf5f368.js","./request-24011425.js","./preload-helper-41c905a7.js","./requestImageUtils-d2d7b1fb.js","./SSAO.glsl-3068f7bf.js","./assets-cd44347b.js","./Texture-411ca148.js","./context-util-d4c193b5.js","./VertexArrayObject-3630ef4f.js","./mat4f32-77b3d8ac.js","./BufferView-478024d2.js","./aaBoundingBox-4a83dbbc.js","./Extent-a1a1de42.js","./aaBoundingRect-b340cf8c.js","./ViewingMode-915d19cb.js","./mat3-9a8d9db7.js","./quat-ec16a584.js","./vec3f32-4322908d.js","./SSAOBlur.glsl-ea338452.js","./VertexElementDescriptor-2925c6af.js","./symbolColorUtils-dd198128.js","./mat3f32-d3d088e8.js","./devEnvironmentUtils-5002a058.js","./vec33-ec7b196f.js","./DefaultMaterial_COLOR_GAMMA-ccf18a3a.js","./types-e1c0a5bf.js","./asyncUtils-087555fc.js","./Version-b16872d5.js","./vec2f32-461e65a9.js","./InterleavedLayout-b5930508.js"],import.meta.url));let d=class extends ea{constructor(){super(...arguments),this.output=h.Color,this.alphaDiscardMode=y.Opaque,this.doubleSidedMode=S.None,this.pbrMode=b.Disabled,this.cullFace=U.None,this.transparencyPassType=J.NONE,this.normalType=R.Attribute,this.textureCoordinateType=ie.None,this.customDepthTest=ne.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}};c([l({count:h.COUNT})],d.prototype,"output",void 0),c([l({count:y.COUNT})],d.prototype,"alphaDiscardMode",void 0),c([l({count:S.COUNT})],d.prototype,"doubleSidedMode",void 0),c([l({count:b.COUNT})],d.prototype,"pbrMode",void 0),c([l({count:U.COUNT})],d.prototype,"cullFace",void 0),c([l({count:J.COUNT})],d.prototype,"transparencyPassType",void 0),c([l({count:R.COUNT})],d.prototype,"normalType",void 0),c([l({count:ie.COUNT})],d.prototype,"textureCoordinateType",void 0),c([l({count:ne.COUNT})],d.prototype,"customDepthTest",void 0),c([l()],d.prototype,"spherical",void 0),c([l()],d.prototype,"hasVertexColors",void 0),c([l()],d.prototype,"hasSymbolColors",void 0),c([l()],d.prototype,"hasVerticalOffset",void 0),c([l()],d.prototype,"hasSlicePlane",void 0),c([l()],d.prototype,"hasSliceHighlight",void 0),c([l()],d.prototype,"hasColorTexture",void 0),c([l()],d.prototype,"hasMetallicRoughnessTexture",void 0),c([l()],d.prototype,"hasEmissionTexture",void 0),c([l()],d.prototype,"hasOcclusionTexture",void 0),c([l()],d.prototype,"hasNormalTexture",void 0),c([l()],d.prototype,"hasScreenSizePerspective",void 0),c([l()],d.prototype,"hasVertexTangents",void 0),c([l()],d.prototype,"hasOccludees",void 0),c([l()],d.prototype,"hasMultipassTerrain",void 0),c([l()],d.prototype,"hasModelTransformation",void 0),c([l()],d.prototype,"offsetBackfaces",void 0),c([l()],d.prototype,"vvSize",void 0),c([l()],d.prototype,"vvColor",void 0),c([l()],d.prototype,"receiveShadows",void 0),c([l()],d.prototype,"receiveAmbientOcclusion",void 0),c([l()],d.prototype,"textureAlphaPremultiplied",void 0),c([l()],d.prototype,"instanced",void 0),c([l()],d.prototype,"instancedColor",void 0),c([l()],d.prototype,"objectAndLayerIdColorInstanced",void 0),c([l()],d.prototype,"instancedDoublePrecision",void 0),c([l()],d.prototype,"doublePrecisionRequiresObfuscation",void 0),c([l()],d.prototype,"writeDepth",void 0),c([l()],d.prototype,"transparent",void 0),c([l()],d.prototype,"enableOffset",void 0),c([l()],d.prototype,"cullAboveGround",void 0),c([l()],d.prototype,"snowCover",void 0),c([l()],d.prototype,"hasColorTextureTransform",void 0),c([l()],d.prototype,"hasEmissionTextureTransform",void 0),c([l()],d.prototype,"hasNormalTextureTransform",void 0),c([l()],d.prototype,"hasOcclusionTextureTransform",void 0),c([l()],d.prototype,"hasMetallicRoughnessTextureTransform",void 0),c([l({constValue:!0})],d.prototype,"hasVvInstancing",void 0),c([l({constValue:!1})],d.prototype,"useCustomDTRExponentForWater",void 0),c([l({constValue:!1})],d.prototype,"supportsTextureAtlas",void 0),c([l({constValue:!0})],d.prototype,"useFillLights",void 0);function Sa(e){const t=new Mt,{vertex:o,fragment:r,varyings:n}=t;return ee(o,e),t.include(dt),n.add("vpos","vec3"),t.include(ae,e),t.include(At,e),t.include(ut,e),e.output!==h.Color&&e.output!==h.Alpha||(Te(t.vertex,e),t.include(Pe,e),t.include(te,e),e.offsetBackfaces&&t.include(St),e.instancedColor&&t.attributes.add(v.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),e.hasMultipassTerrain&&n.add("depth","float"),t.include(oe,e),t.include(mt,e),t.include(Lt,e),t.include(pt,e),o.uniforms.add(new Ot("externalColor",i=>i.externalColor)),n.add("vcolorExt","vec4"),o.code.add(a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${a.float(Ne)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===h.Alpha&&(t.include(W,e),t.include(H,e),t.include(be,e),r.uniforms.add([new P("opacity",i=>i.opacity),new P("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new j("tex",i=>i.texture)),r.include(Ce),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===h.Color&&(t.include(W,e),t.include(Nt,e),t.include(De,e),t.include(H,e),t.include(e.instancedDoublePrecision?ht:vt,e),t.include(be,e),Te(t.fragment,e),ct(r),Ve(r),Ie(r),r.uniforms.add([o.uniforms.get("localOrigin"),o.uniforms.get("view"),new ye("ambient",i=>i.ambient),new ye("diffuse",i=>i.diffuse),new P("opacity",i=>i.opacity),new P("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&r.uniforms.add(new j("tex",i=>i.texture)),t.include(ft,e),t.include(Ee,e),r.include(Ce),t.extensions.add("GL_OES_standard_derivatives"),Re(r),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?a`albedo = mix(albedo, vec3(1), 0.9);`:a``}
        ${a`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?e.spherical?a`vec3 normalGround = normalize(vpos + localOrigin);`:a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:a``}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===J.Color?a`gl_FragColor = premultiplyAlpha(gl_FragColor);`:a``}
      }
    `)),t.include(_t,e),t}const Aa=Object.freeze(Object.defineProperty({__proto__:null,build:Sa},Symbol.toStringTag,{value:"Module"}));class we extends le{initializeConfiguration(t,o){super.initializeConfiguration(t,o),o.hasMetallicRoughnessTexture=!1,o.hasEmissionTexture=!1,o.hasOcclusionTexture=!1,o.hasNormalTexture=!1,o.hasModelTransformation=!1,o.normalType=R.Attribute,o.doubleSidedMode=S.WindingOrder,o.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,we.shader)}}we.shader=new gt(Aa,()=>$t(()=>import("./RealisticTree.glsl-a60499f3.js"),["./RealisticTree.glsl-a60499f3.js","./SSAOHelper-dbb21920.js","./typedArrayUtil-d9bc5fbd.js","./OrderIndependentTransparency-68bd812c.js","./enums-64ab819c.js","./cast-a534ae90.js","./string-480f3e3f.js","./Error-57322e92.js","./ensureType-25b8cc06.js","./nextTick-3ee5a785.js","./promiseUtils-32d9c228.js","./vec3-1863987c.js","./vec3f64-6cd30318.js","./common-c186b691.js","./Util-289ce3b5.js","./vec2f64-30dc1443.js","./vec4-46a9b36d.js","./vec4f64-939de194.js","./triangle-8cd02c5d.js","./sphere-622880b9.js","./mathUtils-57aba1ea.js","./mat4-7dde83b1.js","./byteSizeEstimations-90c5a50d.js","./quatf64-c94bd656.js","./mat4f64-fbeb2cd1.js","./lineSegment-c6f0b9d1.js","./Indices-d9b791ce.js","./VertexAttribute-9c5c630d.js","./ScreenSpacePass-6db805f2.js","./vec2-ab9f47bf.js","./compilerUtils-fefa73ae.js","./Evented-cbf5f368.js","./request-24011425.js","./preload-helper-41c905a7.js","./requestImageUtils-d2d7b1fb.js","./SSAO.glsl-3068f7bf.js","./assets-cd44347b.js","./Texture-411ca148.js","./context-util-d4c193b5.js","./VertexArrayObject-3630ef4f.js","./mat4f32-77b3d8ac.js","./BufferView-478024d2.js","./aaBoundingBox-4a83dbbc.js","./Extent-a1a1de42.js","./aaBoundingRect-b340cf8c.js","./ViewingMode-915d19cb.js","./mat3-9a8d9db7.js","./quat-ec16a584.js","./vec3f32-4322908d.js","./SSAOBlur.glsl-ea338452.js","./VertexElementDescriptor-2925c6af.js","./symbolColorUtils-dd198128.js","./devEnvironmentUtils-5002a058.js","./vec33-ec7b196f.js","./DefaultMaterial_COLOR_GAMMA-ccf18a3a.js","./types-e1c0a5bf.js","./asyncUtils-087555fc.js","./Version-b16872d5.js","./mat3f32-d3d088e8.js","./vec2f32-461e65a9.js","./InterleavedLayout-b5930508.js"],import.meta.url));class Pt extends ta{constructor(t){super(t,Na),this.supportsEdges=!0,this._configuration=new d,this._vertexBufferLayout=Ea(this.parameters),this._instanceBufferLayout=t.instanced?Ra(this.parameters):null}isVisibleForOutput(t){return t!==h.Shadow&&t!==h.ShadowExludeHighlight&&t!==h.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||t.layerOpacity===0)return!1;const{instanced:o,hasVertexColors:r,hasSymbolColors:n,vvColorEnabled:i}=t,s=p(o)&&o.includes("color"),m=t.colorMixMode==="replace",C=t.opacity>0,x=t.externalColor&&t.externalColor[3]>0;return r&&(s||i||n)?!!m||C:r?m?x:C:s||i||n?!!m||C:m?x:C}getConfiguration(t,o){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=p(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=p(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normals==="screenDerivative"?R.ScreenDerivative:R.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,p(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?U.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=o.multipassTerrain.enabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=p(this.parameters.modelTransformation),t!==h.Color&&t!==h.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=S.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?S.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?S.WindingOrder:S.None,this._configuration.instancedColor=p(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!o.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?b.Schematic:b.Normal:b.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<$o,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(t){return p(t.weather)&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}intersect(t,o,r,n,i,s,m){if(p(this.parameters.verticalOffset)){const C=n.camera;ge(Se,r[12],r[13],r[14]);let x=null;switch(n.viewingMode){case Le.Global:x=tt(Ke,Se);break;case Le.Local:x=Ut(Ke,Ia)}let f=0;const T=ve(Ba,Se,C.eye),O=ot(T),A=Ge(T,T,1/O);let w=null;this.parameters.screenSizePerspective&&(w=kt(x,A)),f+=oa(C,O,this.parameters.verticalOffset,w,this.parameters.screenSizePerspective),Ge(x,x,f),Wt(Oe,x,n.transform.inverseRotation),i=ve(Da,i,Oe),s=ve(Va,s,Oe)}aa(t,o,n,i,s,ra(n.verticalOffset),m)}requiresSlot(t,o){return o===h.Color||o===h.Alpha||o===h.Depth||o===h.Normal||o===h.Shadow||o===h.ShadowHighlight||o===h.ShadowExludeHighlight||o===h.Highlight||o===h.ObjectAndLayerIdColor?t===(this.parameters.transparent?this.parameters.writeDepth?me.TRANSPARENT_MATERIAL:me.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:me.OPAQUE_MATERIAL)||t===me.DRAPED_MATERIAL||o===h.ObjectAndLayerIdColor:!1}createGLMaterial(t){return new La(t)}createBufferWriter(){return new Pa(this._vertexBufferLayout,this._instanceBufferLayout)}}class La extends ia{constructor(t){super({...t,...t.material.parameters})}_updateParameters(t){const o=this._material.parameters;this.updateTexture(o.textureId);const r=t.camera.viewInverseTransposeMatrix;return ge(o.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?we:le,t)}_updateShadowState(t){t.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:t.shadowMap.enabled})}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:t.hasOccludees})}beginSlot(t){return this._output!==h.Color&&this._output!==h.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t)),this._updateParameters(t)}}class _a extends $a{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Na=new _a;class Pa{constructor(t,o){this.vertexBufferLayout=t,this.instanceBufferLayout=o}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return t.indices.get(v.POSITION).length}write(t,o,r,n,i){na(r,this.vertexBufferLayout,t,o,n,i)}}function Ea(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=bt().vec3f(v.POSITION).vec3f(v.NORMAL);return e.hasVertexTangents&&o.vec4f(v.TANGENT),t&&o.vec2f(v.UV0),e.hasVertexColors&&o.vec4u8(v.COLOR),e.hasSymbolColors&&o.vec4u8(v.SYMBOLCOLOR),sa("enable-feature:objectAndLayerId-rendering")&&o.vec4u8(v.OBJECTANDLAYERIDCOLOR),o}function Ra(e){let t=bt();return t=e.instancedDoublePrecision?t.vec3f(v.MODELORIGINHI).vec3f(v.MODELORIGINLO).mat3f(v.MODEL).mat3f(v.MODELNORMAL):t.mat4f(v.MODEL).mat4f(v.MODELNORMAL),p(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(v.INSTANCECOLOR)),p(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(v.INSTANCEFEATUREATTRIBUTE)),p(e.instanced)&&e.instanced.includes("objectAndLayerIdColor")&&(t=t.vec4u8(v.OBJECTANDLAYERIDCOLOR_INSTANCED)),t}const Da=E(),Va=E(),Ia=Q(0,0,1),Ke=E(),Oe=E(),Se=E(),Ba=E();function K(e){if(_e(e))return null;const t=p(e.offset)?e.offset:so,o=p(e.rotation)?e.rotation:0,r=p(e.scale)?e.scale:lo,n=Me(1,0,0,0,1,0,t[0],t[1],1),i=Me(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),s=Me(r[0],0,0,0,r[1],0,0,0,1),m=Z();return ze(m,i,s),ze(m,n,m),m}class za{constructor(t,o,r,n,i){this.name=t,this.stageResources=o,this.lodThreshold=r,this.pivotOffset=n,this.numberOfVertices=i}}const B=mo.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Fa(e,t){const o=await Ga(e,t),r=await Ha(o.textureDefinitions,t);let n=0;for(const i in r)if(r.hasOwnProperty(i)){const s=r[i];n+=s!=null&&s.image?s.image.width*s.image.height*4:0}return{resource:o,textures:r,size:n+uo(o)}}async function Ga(e,t){const o=p(t)&&t.streamDataRequester;if(o)return Ua(e,o,t);const r=await rt(co(e,Bt(t)));if(r.ok===!0)return r.value.data;it(r.error),Et(r.error)}async function Ua(e,t,o){const r=await rt(t.request(e,"json",o));if(r.ok===!0)return r.value;it(r.error),Et(r.error.details.url)}function Et(e){throw new po("",`Request for object resource failed: ${e}`)}function ka(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(B.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const s in t.vertexAttributes){const m=i[s];m&&m.values?(m.valueType!=null&&m.valueType!=="UInt32"&&(B.warn(`Unsupported indexed geometry indices type '${m.valueType}', only UInt32 is currently supported`),r=!1),m.valuesPerElement!=null&&m.valuesPerElement!==1&&(B.warn(`Unsupported indexed geometry values per element '${m.valuesPerElement}', only 1 is currently supported`),r=!1)):(B.warn(`Indexed geometry does not specify face indices for '${s}' attribute`),r=!1)}}else B.warn("Indexed geometries must specify faces"),r=!1;break}default:B.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(B.warn("Geometry requires material"),r=!1);const n=e.params.vertexAttributes;for(const i in n)n[i].values||(B.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Wa(e,t){const o=[],r=[],n=[],i=[],s=e.resource,m=nt.parse(s.version||"1.0","wosr");Ya.validate(m);const C=s.model.name,x=s.model.geometries,f=s.materialDefinitions,T=e.textures;let O=0;const A=new Map;for(let w=0;w<x.length;w++){const _=x[w];if(!ka(_))continue;const g=qa(_),L=_.params.vertexAttributes,u=[];for(const M in L){const N=L[M],F=N.values;u.push([M,{data:F,size:N.valuesPerElement,exclusive:!0}])}const $=[];if(_.params.topology!=="PerAttributeArray"){const M=_.params.faces;for(const N in M)$.push([N,M[N].values])}const D=T&&T[g.texture];if(D&&!A.has(g.texture)){const{image:M,params:N}=D,F=new xt(M,N);i.push(F),A.set(g.texture,F)}const q=A.get(g.texture),V=q?q.id:void 0;let I=n[g.material]?n[g.material][g.texture]:null;if(!I){const M=f[g.material.substring(g.material.lastIndexOf("/")+1)].params;M.transparency===1&&(M.transparency=0);const N=D&&D.alphaChannelUsage,F=M.transparency>0||N==="transparency"||N==="maskAndTransparency",Y=D?Rt(D.alphaChannelUsage):void 0,G={ambient:We(M.diffuse),diffuse:We(M.diffuse),opacity:1-(M.transparency||0),transparent:F,textureAlphaMode:Y,textureAlphaCutoff:.33,textureId:V,initTextureTransparent:!0,doubleSided:!0,cullFace:U.None,colorMixMode:M.externalColorMixMode||"tint",textureAlphaPremultiplied:!!D&&!!D.params.preMultiplyAlpha};p(t)&&t.materialParamsMixin&&Object.assign(G,t.materialParamsMixin),I=new Pt(G),n[g.material]||(n[g.material]={}),n[g.material][g.texture]=I}r.push(I);const ce=new Tt(u,$);O+=$.position?$.position.length:0,o.push(ce)}return{engineResources:[{name:C,stageResources:{textures:i,materials:r,geometries:o},pivotOffset:s.model.pivotOffset,numberOfVertices:O,lodThreshold:null}],referenceBoundingBox:ja(o)}}function ja(e){const t=at();return e.forEach(o=>{const r=o.boundingInfo;p(r)&&(xe(t,r.getBBMin()),xe(t,r.getBBMax()))}),t}async function Ha(e,t){const o=[];for(const i in e){const s=e[i],m=s.images[0].data;if(!m){B.warn("Externally referenced texture data is not yet supported");continue}const C=s.encoding+";base64,"+m,x="/textureDefinitions/"+i,f=s.channels==="rgba"?s.alphaChannelUsage||"transparency":"none",T={noUnpackFlip:!0,wrap:{s:Ze.REPEAT,t:Ze.REPEAT},preMultiplyAlpha:Rt(f)!==y.Opaque},O=p(t)&&t.disableTextures?Promise.resolve(null):ho(C,t);o.push(O.then(A=>({refId:x,image:A,params:T,alphaChannelUsage:f})))}const r=await Promise.all(o),n={};for(const i of r)n[i.refId]=i;return n}function Rt(e){switch(e){case"mask":return y.Mask;case"maskAndTransparency":return y.MaskBlend;case"none":return y.Opaque;default:return y.Blend}}function qa(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Ya=new nt(1,2,"wosr");async function Xa(e,t){const o=Dt(It(e));if(o.fileType==="wosr"){const f=await(t.cache?t.cache.loadWOSR(o.url,t):Fa(o.url,t)),{engineResources:T,referenceBoundingBox:O}=Wa(f,t);return{lods:T,referenceBoundingBox:O,isEsriSymbolResource:!1,isWosr:!0}}const r=await(t.cache?t.cache.loadGLTF(o.url,t,t.usePBR):Kt(new Qt(t.streamDataRequester),o.url,t,t.usePBR)),n=zt(r.model.meta,"ESRI_proxyEllipsoid"),i=r.meta.isEsriSymbolResource&&p(n)&&r.meta.uri.includes("/RealisticTrees/");i&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,Qa(r,n));const s=r.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},m={...t.materialParamsMixin,treeRendering:i},{engineResources:C,referenceBoundingBox:x}=Vt(r,s,m,t.skipHighLods&&o.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:C,referenceBoundingBox:x,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Dt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Vt(e,t,o,r){const n=e.model,i=new Array,s=new Map,m=new Map,C=n.lods.length,x=at();return n.lods.forEach((f,T)=>{const O=r.skipHighLods===!0&&(C>1&&T===0||C>3&&T===1)||r.skipHighLods===!1&&r.singleLodIndex!=null&&T!==r.singleLodIndex;if(O&&T!==0)return;const A=new Array;let w=0;if(f.parts.forEach(g=>{const{geometry:L,vertexCount:u}=Ja(g);A.push(L),w+=u;const $=L.boundingInfo;p($)&&T===0&&(xe(x,$.getBBMin()),xe(x,$.getBBMax()))}),O)return;const _=new za(f.name,{textures:new Array,materials:new Array,geometries:A},f.lodThreshold,[0,0,0],w);i.push(_),f.parts.forEach(g=>{const L=g.material+(g.attributes.normal?"_normal":"")+(g.attributes.color?"_color":"")+(g.attributes.texCoord0?"_texCoord0":"")+(g.attributes.tangent?"_tangent":""),u=n.materials.get(g.material),$=p(g.attributes.texCoord0),D=p(g.attributes.normal);if(_e(u))return;const q=Za(u.alphaMode);if(!s.has(L)){if($){const G=(de,Be=!1)=>{if(p(de)&&!m.has(de)){const ue=n.textures.get(de);p(ue)&&m.set(de,new xt(ue.data,Be?{...ue.parameters,preMultiplyAlpha:Be}:ue.parameters))}};G(u.textureColor,q!==y.Opaque),G(u.textureNormal),G(u.textureOcclusion),G(u.textureEmissive),G(u.textureMetallicRoughness)}const V=u.color[0]**(1/X),I=u.color[1]**(1/X),ce=u.color[2]**(1/X),M=u.emissiveFactor[0]**(1/X),N=u.emissiveFactor[1]**(1/X),F=u.emissiveFactor[2]**(1/X),Y=p(u.textureColor)&&$?m.get(u.textureColor):null;s.set(L,new Pt({...t,transparent:q===y.Blend,customDepthTest:ne.Lequal,textureAlphaMode:q,textureAlphaCutoff:u.alphaCutoff,diffuse:[V,I,ce],ambient:[V,I,ce],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?U.None:U.Back,hasVertexColors:!!g.attributes.color,hasVertexTangents:!!g.attributes.tangent,normals:D?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:p(Y)?Y.id:void 0,colorMixMode:u.colorMixMode,normalTextureId:p(u.textureNormal)&&$?m.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:p(Y)&&!!Y.params.preMultiplyAlpha,occlusionTextureId:p(u.textureOcclusion)&&$?m.get(u.textureOcclusion).id:void 0,emissiveTextureId:p(u.textureEmissive)&&$?m.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:p(u.textureMetallicRoughness)&&$?m.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[M,N,F],mrrFactors:[u.metallicFactor,u.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:K(u.colorTextureTransform),normalTextureTransformMatrix:K(u.normalTextureTransform),occlusionTextureTransformMatrix:K(u.occlusionTextureTransform),emissiveTextureTransformMatrix:K(u.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:K(u.metallicRoughnessTextureTransform),...o}))}if(_.stageResources.materials.push(s.get(L)),$){const V=I=>{p(I)&&_.stageResources.textures.push(m.get(I))};V(u.textureColor),V(u.textureNormal),V(u.textureOcclusion),V(u.textureEmissive),V(u.textureMetallicRoughness)}})}),{engineResources:i,referenceBoundingBox:x}}function Ja(e){const t=Ka(e.indices||e.attributes.position.count,e.primitiveType),o=e.attributes.position.count,r=k(fe,o);Xt(r,e.attributes.position,e.transform);const n=[[v.POSITION,{data:r.typedBuffer,size:r.elementCount,exclusive:!0}]],i=[[v.POSITION,t]];if(p(e.attributes.normal)){const s=k(fe,o);Fe(he,e.transform),Jt(s,e.attributes.normal,he),n.push([v.NORMAL,{data:s.typedBuffer,size:s.elementCount,exclusive:!0}]),i.push([v.NORMAL,t])}if(p(e.attributes.tangent)){const s=k(je,o);Fe(he,e.transform),eo(s,e.attributes.tangent,he),n.push([v.TANGENT,{data:s.typedBuffer,size:s.elementCount,exclusive:!0}]),i.push([v.TANGENT,t])}if(p(e.attributes.texCoord0)){const s=k(Ht,o);to(s,e.attributes.texCoord0),n.push([v.UV0,{data:s.typedBuffer,size:s.elementCount,exclusive:!0}]),i.push([v.UV0,t])}if(p(e.attributes.color)){const s=k(Ae,o);if(e.attributes.color.elementCount===4)e.attributes.color instanceof je?Ye(s,e.attributes.color,255):e.attributes.color instanceof Ae?oo(s,e.attributes.color):e.attributes.color instanceof qt&&Ye(s,e.attributes.color,1/256);else{ao(s,255,255,255,255);const m=new He(s.buffer,0,4);e.attributes.color instanceof fe?qe(m,e.attributes.color,255):e.attributes.color instanceof He?Zt(m,e.attributes.color):e.attributes.color instanceof Yt&&qe(m,e.attributes.color,1/256)}n.push([v.COLOR,{data:s.typedBuffer,size:s.elementCount,exclusive:!0}]),i.push([v.COLOR,t])}return{geometry:new Tt(n,i),vertexCount:o}}const he=Qe();function Za(e){switch(e){case"BLEND":return y.Blend;case"MASK":return y.Mask;case"OPAQUE":case null:case void 0:return y.Opaque}}function Ka(e,t){switch(t){case $e.TRIANGLES:return no(e);case $e.TRIANGLE_STRIP:return io(e);case $e.TRIANGLE_FAN:return ro(e)}}function Qa(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];for(const n of r.parts){const i=n.attributes.normal;if(_e(i))return;const s=n.attributes.position,m=s.count,C=E(),x=E(),f=E(),T=k(Ae,m),O=k(fe,m),A=Ft(Gt(),n.transform);for(let w=0;w<m;w++){s.getVec(w,x),i.getVec(w,C),Ue(x,x,n.transform),ve(f,x,t.center),ke(f,f,t.radius);const _=f[2],g=ot(f),L=Math.min(.45+.55*g*g,1);ke(f,f,t.radius),A!==null&&Ue(f,f,A),tt(f,f),o+1!==e.model.lods.length&&e.model.lods.length>1&&jt(f,f,C,_>-1?.2:Math.min(-4*_-3.8,1)),O.setVec(w,f),T.set(w,0,255*L),T.set(w,1,255*L),T.set(w,2,255*L),T.set(w,3,255)}n.attributes.normal=O,n.attributes.color=T}}}const Ur=Object.freeze(Object.defineProperty({__proto__:null,fetch:Xa,gltfToEngineResources:Vt,parseUrl:Dt},Symbol.toStringTag,{value:"Module"}));export{Ra as B,Pt as C,zr as E,Sa as I,wa as Q,Xa as Y,K as c,ma as e,Ve as h,S as i,De as n,Ur as o,Nt as p,Ie as u};
