import{x as b}from"./vec3-1863987c.js";import{h,j as v,g as i,k as x,l as _,b as S,c as T,a as F,f as g,o as j,e as z,n as f}from"./ScreenSpacePass-6db805f2.js";import{r as d}from"./typedArrayUtil-d9bc5fbd.js";import{r as p}from"./vec2-ab9f47bf.js";import{f as m,n as D}from"./vec2f64-30dc1443.js";class u extends h{constructor(t,a){super(t,"vec2",v.Draw,(n,e,r,s)=>n.setUniform2fv(t,a(e,r,s)))}}let $=class extends h{constructor(t,a){super(t,"sampler2D",v.Draw,(n,e,r)=>n.bindTexture(t,a(e,r)))}};function P(o,t,a=i.None){const n=[new $(o,t)];if(a&i.Size){const e=o+x;n.push(new u(e,(r,s)=>{const c=t(r,s);return d(c)?p(w,c.descriptor.width,c.descriptor.height):m}))}if(a&i.InvSize){const e=o+_;n.push(new u(e,(r,s)=>{const c=t(r,s);return d(c)?p(w,1/c.descriptor.width,1/c.descriptor.height):m}))}return n}const w=D(),l=4;function M(){const o=new S,t=o.fragment;o.include(T);const a=(l+1)/2,n=1/(2*a*a);return t.include(F),t.uniforms.add([new g("depthMap",e=>e.depthTexture),new $("tex",e=>e.colorTexture),new u("blurSize",e=>e.blurSize),new j("projScale",(e,r)=>{const s=b(r.camera.eye,r.camera.center);return s>5e4?Math.max(0,e.projScale-(s-5e4)):e.projScale}),new z("nearFar",(e,r)=>r.camera.nearFar)]),t.code.add(f`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${f.float(n)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(f`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${f.int(l)}; r <= ${f.int(l)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),o}const U=Object.freeze(Object.defineProperty({__proto__:null,build:M},Symbol.toStringTag,{value:"Module"}));export{U as a,M as c,P as u};
