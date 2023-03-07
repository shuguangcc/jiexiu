import{r as d,t as I}from"./typedArrayUtil-d9bc5fbd.js";import{r as v}from"./vec2-ab9f47bf.js";import{f as g,n as x}from"./vec2f64-30dc1443.js";import{s as y,a as O}from"./Error-57322e92.js";import{O as L}from"./VertexAttribute-9c5c630d.js";var l;(function(r){r[r.Pass=0]="Pass",r[r.Draw=1]="Draw"})(l||(l={}));let B=class{};function u(r,...e){let n="";for(let t=0;t<e.length;t++)n+=r[t]+e[t];return n+=r[r.length-1],n}(function(r){function e(t){return Math.round(t).toString()}function n(t){return t.toPrecision(8)}r.int=e,r.float=n})(u||(u={}));function R(r){r.code.add(u`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function V(r){r.include(R),r.code.add(u`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}let S=class{constructor(e,n,t,s,o=null){this.name=e,this.type=n,this.arraySize=o,this.bind={[l.Pass]:null,[l.Draw]:null},d(t)&&d(s)&&(this.bind[t]=s)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},_=class extends S{constructor(e,n){super(e,"vec2",l.Pass,(t,s,o)=>t.setUniform2fv(e,n(s,o)))}},J=class extends S{constructor(e,n){super(e,"float",l.Pass,(t,s,o)=>t.setUniform1f(e,n(s,o)))}};const F="Size",p="InvSize";function Q(r,e,n=!1,t=0){if(r.hasWebGL2Context){const s=u`vec2(textureSize(${e}, ${u.int(t)}))`;return n?"(1.0 / "+s+")":s}return n?e+p:e+F}function Y(r,e,n,t=null,s=0){if(r.hasWebGL2Context)return u`texelFetch(${e}, ivec2(${n}), ${u.int(s)})`;let o=u`texture2D(${e}, ${n} * `;return o+=t?u`(${t}))`:u`${e+p})`,o}var m;(function(r){r[r.None=0]="None",r[r.Size=1]="Size",r[r.InvSize=2]="InvSize"})(m||(m={}));let D=class extends S{constructor(e,n){super(e,"sampler2D",l.Pass,(t,s,o)=>t.bindTexture(e,n(s,o)))}};function ee(r,e,n=m.None){const t=[new D(r,e)];if(n&m.Size){const s=r+F;t.push(new _(s,(o,c)=>{const i=e(o,c);return d(i)?v(b,i.descriptor.width,i.descriptor.height):g}))}if(n&m.InvSize){const s=r+p;t.push(new _(s,(o,c)=>{const i=e(o,c);return d(i)?v(b,1/i.descriptor.width,1/i.descriptor.height):g}))}return t}const b=x(),w=y.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class A{constructor(){this._includedModules=new Map}include(e,n){if(this._includedModules.has(e)){const t=this._includedModules.get(e);if(t!==n){w.error("Trying to include shader module multiple times with different sets of options.");const s=new Set;for(const o of Object.keys(t))t[o]!==e[o]&&s.add(o);for(const o of Object.keys(e))t[o]!==e[o]&&s.add(o);s.forEach(o=>console.error(`  ${o}: current ${t[o]} new ${e[o]}`))}}else this._includedModules.set(e,n),e(this.builder,n)}}let te=class extends A{constructor(){super(...arguments),this.vertex=new T,this.fragment=new T,this.attributes=new G,this.varyings=new M,this.extensions=new h,this.constants=new a}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const n=this.extensions.generateSource(e),t=this.attributes.generateSource(e),s=this.varyings.generateSource(),o=e==="vertex"?this.vertex:this.fragment,c=o.uniforms.generateSource(),i=o.code.generateSource(),$=e==="vertex"?k:P,f=this.constants.generateSource().concat(o.constants.generateSource());return`
${n.join(`
`)}

${$}

${f.join(`
`)}

${c.join(`
`)}

${t.join(`
`)}

${s.join(`
`)}

${i.join(`
`)}`}generateBind(e,n){const t=new Map;this.vertex.uniforms.entries.forEach(c=>{const i=c.bind[e];d(i)&&t.set(c.name,i)}),this.fragment.uniforms.entries.forEach(c=>{const i=c.bind[e];d(i)&&t.set(c.name,i)});const s=Array.from(t.values()),o=s.length;return(c,i,$)=>{for(let f=0;f<o;++f)s[f](n,c,i,$)}}};class E{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const n of e)this._add(n)}get(e){return this._entries.get(e)}_add(e){if(I(e))w.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new O(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>d(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}}class z{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class T extends A{constructor(){super(...arguments),this.uniforms=new E,this.code=new z,this.constants=new a}get builder(){return this}}class G{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e==="fragment"?[]:this._entries.map(n=>`attribute ${n[1]} ${n[0]};`)}}class M{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class h{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const n=e==="vertex"?h.ALLOWLIST_VERTEX:h.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(t=>n.includes(t)).map(t=>`#extension ${t} : enable`)}}h.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],h.ALLOWLIST_VERTEX=[];class a{constructor(){this._entries=new Set}add(e,n,t){let s="ERROR_CONSTRUCTOR_STRING";switch(n){case"float":s=a._numberToFloatStr(t);break;case"int":s=a._numberToIntStr(t);break;case"bool":s=t.toString();break;case"vec2":s=`vec2(${a._numberToFloatStr(t[0])},                            ${a._numberToFloatStr(t[1])})`;break;case"vec3":s=`vec3(${a._numberToFloatStr(t[0])},                            ${a._numberToFloatStr(t[1])},                            ${a._numberToFloatStr(t[2])})`;break;case"vec4":s=`vec4(${a._numberToFloatStr(t[0])},                            ${a._numberToFloatStr(t[1])},                            ${a._numberToFloatStr(t[2])},                            ${a._numberToFloatStr(t[3])})`;break;case"ivec2":s=`ivec2(${a._numberToIntStr(t[0])},                             ${a._numberToIntStr(t[1])})`;break;case"ivec3":s=`ivec3(${a._numberToIntStr(t[0])},                             ${a._numberToIntStr(t[1])},                             ${a._numberToIntStr(t[2])})`;break;case"ivec4":s=`ivec4(${a._numberToIntStr(t[0])},                             ${a._numberToIntStr(t[1])},                             ${a._numberToIntStr(t[2])},                             ${a._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":s=`${n}(${Array.prototype.map.call(t,o=>a._numberToFloatStr(o)).join(", ")})`}return this._entries.add(`const ${n} ${e} = ${s};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const P=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,k=`precision highp float;
precision highp sampler2D;`;function ne(r,e=!0){r.attributes.add(L.POSITION,"vec2"),e&&r.varyings.add("uv","vec2"),r.vertex.code.add(u`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?u`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}export{V as a,te as b,ne as c,R as d,_ as e,D as f,m as g,S as h,Y as i,l as j,F as k,p as l,u as n,J as o,Q as r,B as t,ee as u};
