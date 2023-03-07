import{e as l}from"./typedArrayUtil-d9bc5fbd.js";import{r as c}from"./vec2-ab9f47bf.js";import{n as h}from"./vec2f64-30dc1443.js";import{h as y,j as S,e as n,n as o,b as w,c as z,a as F,o as i,f as s}from"./ScreenSpacePass-6db805f2.js";import{r as f}from"./vec4-46a9b36d.js";import{n as T}from"./vec4f64-939de194.js";class b extends y{constructor(e,r){super(e,"vec4",S.Pass,(a,g,P)=>a.setUniform4fv(e,r(g,P)))}}function A(t){t.fragment.uniforms.add(new b("projInfo",(e,r)=>D(r))),t.fragment.uniforms.add(new n("zScale",(e,r)=>x(r))),t.fragment.code.add(o`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function D(t){const e=t.camera.projectionMatrix;return e[11]===0?f(u,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):f(u,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const u=T();function x(t){return t.camera.projectionMatrix[11]===0?c(m,0,1):c(m,1,0)}const m=h(),p=16,$=.5;function j(){const t=new w,e=t.fragment;return t.include(z),e.include(F),t.include(A),e.uniforms.add(new i("radius",(r,a)=>d(a))),e.code.add(o`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(o`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new n("nearFar",(r,a)=>a.camera.nearFar),new s("normalMap",r=>r.normalTexture),new s("depthMap",r=>r.depthTexture),new n("zScale",(r,a)=>x(a)),new i("projScale",r=>r.projScale),new s("rnm",r=>r.noiseTexture),new n("rnmScale",(r,a)=>c(v,a.camera.fullWidth/l(r.noiseTexture).descriptor.width,a.camera.fullHeight/l(r.noiseTexture).descriptor.height)),new i("intensity",(r,a)=>4*$/d(a)**6),new n("screenSize",(r,a)=>c(v,a.camera.fullWidth,a.camera.fullHeight))]),e.code.add(o`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${o.int(p)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${o.int(p)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function d(t){return Math.max(10,20*t.camera.computeRenderPixelSizeAtDist(Math.abs(4*t.camera.relativeElevation)))}const v=h(),I=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}));export{j as d,b as e,A as n,I as x};
