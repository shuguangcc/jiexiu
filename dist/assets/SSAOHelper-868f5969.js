import{J as Le,t as I,r as A,K as cr,e as Jt,f as dr,T as qe,g as ke,h as hr,P as Me,o as At}from"./typedArrayUtil-d9bc5fbd.js";import{t as ur,g as ut,O as Ct,k as wt,m as be,W as _i,_ as xi}from"./OrderIndependentTransparency-68bd812c.js";import{N as bi,h as mr,e as Pe}from"./cast-a534ae90.js";import{o as V,_ as fr,z as pr,A as Lt,p as gr,g as ne,u as k,U as vr,O as Et,e as Gt,r as Ze,j as _r,E as ei}from"./vec3-1863987c.js";import{n as C,r as ue,t as $t,f as Wt}from"./vec3f64-6cd30318.js";import{h as xr,e as G}from"./Util-289ce3b5.js";import{w as br}from"./triangle-8cd02c5d.js";import{u as ti,n as Tr}from"./Indices-d9b791ce.js";import{O as m}from"./VertexAttribute-9c5c630d.js";import{j as D,h as Z,t as Fe,n as d,e as Nt,d as Ti,b as Sr,c as Ar,f as Si,a as wr,u as Qe,g as Ne,i as Or,r as mt,o as Mr}from"./ScreenSpacePass-6db805f2.js";import{u as Ai,n as Ft,h as wi,o as zt,c as Dt,G as Oi}from"./mat4-7dde83b1.js";import{e as $e}from"./mat4f64-fbeb2cd1.js";import{n as qt}from"./compilerUtils-fefa73ae.js";import{s as Pr,a as yr}from"./Error-57322e92.js";import{n as Rr}from"./Evented-cbf5f368.js";import{h as _e,a as kt,c as vt,i as ii}from"./mathUtils-57aba1ea.js";import{f as ri,v as Ir,a as Cr,C as Lr}from"./promiseUtils-32d9c228.js";import{V as si,X as Er,p as $r}from"./request-f17a8ddb.js";import{t as Mi}from"./requestImageUtils-f656eddc.js";import{r as jt,n as xt}from"./vec4f64-939de194.js";import{e as U,x as Nr}from"./SSAO.glsl-3068f7bf.js";import{_ as bt}from"./preload-helper-101896b7.js";import{a as Fr}from"./assets-a5ce5e1a.js";import{E as Je,C as te,F as zr,M as it,P as ae,G as rt,L as ge,u as pe,D as Ye,Y as Pi,V as yi,I as Be,O as Y}from"./enums-64ab819c.js";import{a as Dr,E as oe,n as Br}from"./Texture-411ca148.js";import{a as Vr,E as Hr,_ as Ur,x as ft,n as pt}from"./VertexArrayObject-3630ef4f.js";import{r as J}from"./vec4-46a9b36d.js";import{e as Gr}from"./mat4f32-77b3d8ac.js";import{c as Wr,x as Ot,u as qr,i as ai}from"./BufferView-478024d2.js";import{a as Ve,e as kr}from"./quatf64-c94bd656.js";import{a as jr,d as Xr,q as Kr}from"./aaBoundingBox-4a83dbbc.js";import"./ViewingMode-915d19cb.js";import{y as Yr}from"./mat3-9a8d9db7.js";import{S as Zr}from"./quat-ec16a584.js";import{n as Bt,r as Qr}from"./vec3f32-4322908d.js";import{R as Ri}from"./sphere-622880b9.js";import{h as Jr}from"./string-480f3e3f.js";import{u as Mt,a as es}from"./SSAOBlur.glsl-ea338452.js";import{r as oi}from"./vec2-ab9f47bf.js";import{t as ie}from"./VertexElementDescriptor-2925c6af.js";import{n as ts}from"./vec2f64-30dc1443.js";let is=class extends Vr{},Ii=class{constructor(e,i){this._module=e,this._loadModule=i}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Ci=class{constructor(e,i,r){this.release=r,this.initializeConfiguration(e,i),this._configuration=i.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Le(this._program),this._pipeline=this._configuration=null}reload(e){Le(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,i=null,r){e.setPipelineState(this.getPipelineState(i,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Je.TRIANGLES}getPipelineState(e,i){return this._pipeline}initializeConfiguration(e,i){}},Li=class{constructor(e,i,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new bi({deallocator:null}),this._glProgram=e.programCache.acquire(i.generate("vertex"),i.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=i.generateBind(D.Pass,this),this.bindDraw=i.generateBind(D.Draw,this),this._fragmentUniforms=Dr()?i.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,i){this._glProgram.setUniform1i(e,i?1:0)}setUniform1i(e,i){this._glProgram.setUniform1i(e,i)}setUniform1f(e,i){this._glProgram.setUniform1f(e,i)}setUniform2fv(e,i){this._glProgram.setUniform2fv(e,i)}setUniform3fv(e,i){this._glProgram.setUniform3fv(e,i)}setUniform4fv(e,i){this._glProgram.setUniform4fv(e,i)}setUniformMatrix3fv(e,i){this._glProgram.setUniformMatrix3fv(e,i)}setUniformMatrix4fv(e,i){this._glProgram.setUniformMatrix4fv(e,i)}setUniform1fv(e,i){this._glProgram.setUniform1fv(e,i)}setUniform1iv(e,i){this._glProgram.setUniform1iv(e,i)}setUniform2iv(e,i){this._glProgram.setUniform3iv(e,i)}setUniform3iv(e,i){this._glProgram.setUniform3iv(e,i)}setUniform4iv(e,i){this._glProgram.setUniform4iv(e,i)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,i){if(I(i)||i.glName==null){const s=this._textures.get(e);return s&&(this._context.bindTexture(null,s.unit),this._freeTextureUnit(s),this._textures.delete(e)),null}let r=this._textures.get(e);return r==null?(r=this._allocTextureUnit(i),this._textures.set(e,r)):r.texture=i,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(i,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,i)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(i,e.unit)}),A(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}},H=class extends Z{constructor(e,i){super(e,"vec3",D.Pass,(r,s,a)=>r.setUniform3fv(e,i(s,a)))}},et=class extends Z{constructor(e,i){super(e,"mat4",D.Pass,(r,s,a)=>r.setUniformMatrix4fv(e,i(s,a)))}};const Tt=new Map([[m.POSITION,0],[m.NORMAL,1],[m.UV0,2],[m.COLOR,3],[m.SIZE,4],[m.TANGENT,4],[m.AUXPOS1,5],[m.SYMBOLCOLOR,5],[m.AUXPOS2,6],[m.FEATUREATTRIBUTE,6],[m.INSTANCEFEATUREATTRIBUTE,6],[m.INSTANCECOLOR,7],[m.OBJECTANDLAYERIDCOLOR,7],[m.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[m.MODEL,8],[m.MODELNORMAL,12],[m.MODELORIGINHI,11],[m.MODELORIGINLO,15]]);new ie(m.POSITION,3,te.FLOAT,0,12);new ie(m.POSITION,3,te.FLOAT,0,20),new ie(m.UV0,2,te.FLOAT,12,20);new ie(m.POSITION,3,te.FLOAT,0,32),new ie(m.NORMAL,3,te.FLOAT,12,32),new ie(m.UV0,2,te.FLOAT,24,32);new ie(m.POSITION,3,te.FLOAT,0,16),new ie(m.COLOR,4,te.UNSIGNED_BYTE,12,16);const rs=[new ie(m.POSITION,2,te.FLOAT,0,8)],ss=[new ie(m.POSITION,2,te.FLOAT,0,16),new ie(m.UV0,2,te.FLOAT,8,16)];function Ei(t,e=rs,i=Tt,r=-1,s=1){let a=null;return e===ss?a=new Float32Array([r,r,0,0,s,r,1,0,r,s,0,1,s,s,1,1]):a=new Float32Array([r,r,s,r,r,s,s,s]),new is(t,i,{geometry:e},{geometry:Hr.createVertex(t,zr.STATIC_DRAW,a)})}function jo(t){return new oe(t,{target:it.TEXTURE_2D,pixelFormat:ae.RGBA,dataType:rt.UNSIGNED_BYTE,samplingMode:ge.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}var ni;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(ni||(ni={}));function as(t){return Math.abs(t*t*t)}function $i(t,e,i){const r=i.parameters,s=i.paddingPixelsOverride;return je.scale=Math.min(r.divisor/(e-r.offset),1),je.factor=as(t),je.minPixelSize=r.minPixelSize,je.paddingPixels=s,je}function Ni(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Fi(t,e){return Math.max(_e(t*e.scale,t,e.factor),Ni(t,e))}function os(t,e,i){const r=$i(t,e,i);return r.minPixelSize=0,r.paddingPixels=0,Fi(1,r)}function Xo(t,e,i,r){r.scale=os(t,e,i),r.factor=0,r.minPixelSize=i.parameters.minPixelSize,r.paddingPixels=i.paddingPixelsOverride}function Ko(t,e,i=[0,0]){const r=Math.min(Math.max(e.scale,Ni(t[1],e)/Math.max(1e-5,t[1])),1);return i[0]=t[0]*r,i[1]=t[1]*r,i}function ns(t,e,i,r){return Fi(t,$i(e,i,r))}const je={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function Yo(t,e){return I(t)&&(t=[]),t.push(e),t}function Zo(t,e){if(I(t))return null;const i=t.filter(r=>r!==e);return i.length===0?null:i}function ls(t){return!!A(t)&&!t.visible}function Qo(t,e,i){const r=t.origin.vec3;xr(Pt,-r[0],-r[1],-r[2]),A(t.transformation)?Ai(e,Pt,t.transformation):Ft(e,Pt),wi(i,e),zt(i,i)}function Jo(t,e,i,r,s){at[0]=t.get(e,0),at[1]=t.get(e,1),at[2]=t.get(e,2),ur(at,ye,3),i.set(s,0,ye[0]),r.set(s,0,ye[1]),i.set(s,1,ye[2]),r.set(s,1,ye[3]),i.set(s,2,ye[4]),r.set(s,2,ye[5])}const at=new Float64Array(3),ye=new Float32Array(6),Pt=$e(),ot=jr();function en(t,e,i,r,s,a,o){if(!ls(e))if(t.boundingInfo){G(t.primitiveType===ut.Triangle);const n=i.tolerance;zi(t.boundingInfo,r,s,n,a,o)}else{const n=t.indices.get(m.POSITION),c=t.vertexAttributes.get(m.POSITION);Bi(r,s,0,n.length/3,n,c,void 0,a,o)}}const cs=C();function zi(t,e,i,r,s,a){if(I(t))return;const o=hs(e,i,cs);if(Xr(ot,t.getBBMin()),Kr(ot,t.getBBMax()),A(s)&&s.applyToAabb(ot),us(ot,e,o,r)){const{primitiveIndices:n,indices:c,position:l}=t,h=n?n.length:c.length/3;if(h>gs){const u=t.getChildren();if(u!==void 0){for(let f=0;f<8;++f)u[f]!==void 0&&zi(u[f],e,i,r,s,a);return}}Bi(e,i,0,h,c,l,n,s,a)}}const Di=C();function Bi(t,e,i,r,s,a,o,n,c){if(o)return ds(t,e,i,r,s,a,o,n,c);const l=a.data,h=a.stride||a.size,u=t[0],f=t[1],p=t[2],v=e[0]-u,T=e[1]-f,w=e[2]-p;for(let g=i,$=3*i;g<r;++g){let y=h*s[$++],O=l[y++],L=l[y++],x=l[y];y=h*s[$++];let b=l[y++],M=l[y++],S=l[y];y=h*s[$++];let _=l[y++],R=l[y++],P=l[y];A(n)&&([O,L,x]=n.applyToVertex(O,L,x,g),[b,M,S]=n.applyToVertex(b,M,S,g),[_,R,P]=n.applyToVertex(_,R,P,g));const E=b-O,z=M-L,N=S-x,B=_-O,le=R-L,ce=P-x,Te=T*ce-le*w,He=w*B-ce*v,Ue=v*le-B*T,Q=E*Te+z*He+N*Ue;if(Math.abs(Q)<=Number.EPSILON)continue;const W=u-O,Se=f-L,Ae=p-x,se=W*Te+Se*He+Ae*Ue;if(Q>0){if(se<0||se>Q)continue}else if(se>0||se<Q)continue;const de=Se*N-z*Ae,Ge=Ae*E-N*W,We=W*z-E*Se,we=v*de+T*Ge+w*We;if(Q>0){if(we<0||se+we>Q)continue}else if(we>0||se+we<Q)continue;const Oe=(B*de+le*Ge+ce*We)/Q;Oe>=0&&c(Oe,Vi(E,z,N,B,le,ce,Di),g,!1)}}function ds(t,e,i,r,s,a,o,n,c){const l=a.data,h=a.stride||a.size,u=t[0],f=t[1],p=t[2],v=e[0]-u,T=e[1]-f,w=e[2]-p;for(let g=i;g<r;++g){const $=o[g];let y=3*$,O=h*s[y++],L=l[O++],x=l[O++],b=l[O];O=h*s[y++];let M=l[O++],S=l[O++],_=l[O];O=h*s[y];let R=l[O++],P=l[O++],E=l[O];A(n)&&([L,x,b]=n.applyToVertex(L,x,b,g),[M,S,_]=n.applyToVertex(M,S,_,g),[R,P,E]=n.applyToVertex(R,P,E,g));const z=M-L,N=S-x,B=_-b,le=R-L,ce=P-x,Te=E-b,He=T*Te-ce*w,Ue=w*le-Te*v,Q=v*ce-le*T,W=z*He+N*Ue+B*Q;if(Math.abs(W)<=Number.EPSILON)continue;const Se=u-L,Ae=f-x,se=p-b,de=Se*He+Ae*Ue+se*Q;if(W>0){if(de<0||de>W)continue}else if(de>0||de<W)continue;const Ge=Ae*B-N*se,We=se*z-B*Se,we=Se*N-z*Ae,Oe=v*Ge+T*We+w*we;if(W>0){if(Oe<0||de+Oe>W)continue}else if(Oe>0||de+Oe<W)continue;const Qt=(le*Ge+ce*We+Te*we)/W;Qt>=0&&c(Qt,Vi(z,N,B,le,ce,Te,Di),$,!1)}}const li=C(),ci=C();function Vi(t,e,i,r,s,a,o){return V(li,t,e,i),V(ci,r,s,a),fr(o,li,ci),pr(o,o),o}function hs(t,e,i){return V(i,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function us(t,e,i,r){return ms(t,e,i,r,1/0)}function ms(t,e,i,r,s){const a=(t[0]-r-e[0])*i[0],o=(t[3]+r-e[0])*i[0];let n=Math.min(a,o),c=Math.max(a,o);const l=(t[1]-r-e[1])*i[1],h=(t[4]+r-e[1])*i[1];if(c=Math.min(c,Math.max(l,h)),c<0||(n=Math.max(n,Math.min(l,h)),n>c))return!1;const u=(t[2]-r-e[2])*i[2],f=(t[5]+r-e[2])*i[2];return c=Math.min(c,Math.max(u,f)),!(c<0)&&(n=Math.max(n,Math.min(u,f)),!(n>c)&&n<s)}function tn(t,e,i,r,s){let a=(i.screenLength||0)*t.pixelRatio;A(s)&&(a=ns(a,r,e,s));const o=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return kt(o*e,i.minWorldLength||0,i.maxWorldLength!=null?i.maxWorldLength:1/0)}function Hi(t,e){const i=e?Hi(e):{};for(const r in t){let s=t[r];s&&s.forEach&&(s=ps(s)),s==null&&r in i||(i[r]=s)}return i}function fs(t,e){let i=!1;for(const r in e){const s=e[r];s!==void 0&&(Array.isArray(s)?t[r]===null?(t[r]=s.slice(),i=!0):cr(t[r],s)&&(i=!0):t[r]!==s&&(i=!0,t[r]=s))}return i}function rn(t,e,i,r,s,a){if(!e.options.selectionMode)return;const o=t.vertexAttributes.get(m.POSITION).data,n=t.vertexAttributes.get(m.SIZE),c=n&&n.data[0],l=r[0],h=r[1],u=((c+s)/2+4)*t.screenToWorldRatio;let f=Number.MAX_VALUE,p=0;for(let v=0;v<o.length-5;v+=3){const T=o[v],w=o[v+1],g=l-T,$=h-w,y=o[v+3]-T,O=o[v+4]-w,L=kt((y*g+O*$)/(y*y+O*O),0,1),x=y*L-g,b=O*L-$,M=x*x+b*b;M<f&&(f=M,p=v/3)}f<u*u&&a(i.dist,i.normal,p,!1)}function ps(t){const e=[];return t.forEach(i=>e.push(i)),e}const sn={multiply:1,ignore:2,replace:3,tint:4},gs=1e3;let vs=class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,i={key:this.key};for(const r of e)i[r]=this[r];return i}};function Re(t={}){return(e,i)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(i),t.constValue!=null)Object.defineProperty(e,i,{get:()=>t.constValue});else{const r=e._parameterNames.length-1,s=t.count||2,a=Math.ceil(Math.log2(s)),o=e._parameterBits??[0];let n=0;for(;o[n]+a>16;)n++,n>=o.length&&o.push(0);e._parameterBits=o;const c=o[n],l=(1<<a)-1<<c;o[n]+=a,Object.defineProperty(e,i,{get(){return this[r]},set(h){if(this[r]!==h&&(this[r]=h,this._keyDirty=!0,this._parameterBits[n]=this._parameterBits[n]&~l|+h<<c&l,typeof h!="number"&&typeof h!="boolean"))throw"Configuration value for "+i+" must be boolean or number, got "+typeof h}})}}}let Xt=class{constructor(){this.id=mr()}unload(){}};var st;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(st||(st={}));let Ui=class{constructor(e,i,r,s){this.primitiveIndices=e,this._numIndexPerPrimitive=i,this.indices=r,this.position=s,this.center=C(),this._children=void 0,G(e.length>=1),G(r.length%this._numIndexPerPrimitive==0),G(r.length>=e.length*this._numIndexPerPrimitive),G(s.size===3||s.size===4);const{data:a,size:o}=s,n=e.length;let c=o*r[this._numIndexPerPrimitive*e[0]];Ie.clear(),Ie.push(c),this.bbMin=ue(a[c],a[c+1],a[c+2]),this.bbMax=$t(this.bbMin);for(let h=0;h<n;++h){const u=this._numIndexPerPrimitive*e[h];for(let f=0;f<this._numIndexPerPrimitive;++f){c=o*r[u+f],Ie.push(c);let p=a[c];this.bbMin[0]=Math.min(p,this.bbMin[0]),this.bbMax[0]=Math.max(p,this.bbMax[0]),p=a[c+1],this.bbMin[1]=Math.min(p,this.bbMin[1]),this.bbMax[1]=Math.max(p,this.bbMax[1]),p=a[c+2],this.bbMin[2]=Math.min(p,this.bbMin[2]),this.bbMax[2]=Math.max(p,this.bbMax[2])}}Lt(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let h=0;h<Ie.length;++h){c=Ie.getItemAt(h);const u=a[c]-this.center[0],f=a[c+1]-this.center[1],p=a[c+2]-this.center[2],v=u*u+f*f+p*p;if(v<=l)continue;const T=Math.sqrt(v),w=.5*(T-this.radius);this.radius=this.radius+w,l=this.radius*this.radius;const g=w/T;this.center[0]+=u*g,this.center[1]+=f*g,this.center[2]+=p*g}Ie.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(gr(this.bbMin,this.bbMax)>1){const e=Lt(C(),this.bbMin,this.bbMax,.5),i=this.primitiveIndices.length,r=new Uint8Array(i),s=new Array(8);for(let l=0;l<8;++l)s[l]=0;const{data:a,size:o}=this.position;for(let l=0;l<i;++l){let h=0;const u=this._numIndexPerPrimitive*this.primitiveIndices[l];let f=o*this.indices[u],p=a[f],v=a[f+1],T=a[f+2];for(let w=1;w<this._numIndexPerPrimitive;++w){f=o*this.indices[u+w];const g=a[f],$=a[f+1],y=a[f+2];g<p&&(p=g),$<v&&(v=$),y<T&&(T=y)}p<e[0]&&(h|=1),v<e[1]&&(h|=2),T<e[2]&&(h|=4),r[l]=h,++s[h]}let n=0;for(let l=0;l<8;++l)s[l]>0&&++n;if(n<2)return;const c=new Array(8);for(let l=0;l<8;++l)c[l]=s[l]>0?new Uint32Array(s[l]):void 0;for(let l=0;l<8;++l)s[l]=0;for(let l=0;l<i;++l){const h=r[l];c[h][s[h]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)c[l]!==void 0&&(this._children[l]=new Ui(c[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Ie.prune()}};const Ie=new bi({deallocator:null});function _s(t,e,i){if(!t||!e)return!1;const{size:r,data:s}=t;V(i,0,0,0),V(q,0,0,0);let a=0,o=0;for(let n=0;n<e.length-2;n+=3){const c=e[n+0]*r,l=e[n+1]*r,h=e[n+2]*r;V(F,s[c+0],s[c+1],s[c+2]),V(me,s[l+0],s[l+1],s[l+2]),V(nt,s[h+0],s[h+1],s[h+2]);const u=br(F,me,nt);u?(k(F,F,me),k(F,F,nt),ne(F,F,1/3*u),k(i,i,F),a+=u):(k(q,q,F),k(q,q,me),k(q,q,nt),o+=3)}return(o!==0||a!==0)&&(a!==0?(ne(i,i,1/a),!0):o!==0&&(ne(i,q,1/o),!0))}function xs(t,e,i){if(!t||!e)return!1;const{size:r,data:s}=t;V(i,0,0,0);let a=-1,o=0;for(let n=0;n<e.length;n++){const c=e[n]*r;a!==c&&(i[0]+=s[c+0],i[1]+=s[c+1],i[2]+=s[c+2],o++),a=c}return o>1&&ne(i,i,1/o),o>0}function ln(t,e,i,r){if(!t)return!1;const{size:s,data:a}=t;V(r,0,0,0),V(q,0,0,0);let o=0,n=0;const c=e?e.length-1:a.length/s-1,l=c+(i?2:0);for(let h=0;h<l;h+=2){const u=h<c?h:c,f=h<c?h+1:0,p=(e?e[u]:u)*s,v=(e?e[f]:f)*s;F[0]=a[p+0],F[1]=a[p+1],F[2]=a[p+2],me[0]=a[v+0],me[1]=a[v+1],me[2]=a[v+2],ne(F,k(F,F,me),.5);const T=vr(F,me);T>0?(k(r,r,ne(F,F,T)),o+=T):(k(q,q,F),n++)}return o!==0?(ne(r,r,1/o),!0):n!==0&&(ne(r,q,1/n),!0)}const F=C(),me=C(),nt=C(),q=C();let bs=class extends Xt{constructor(e,i=[],r=ut.Triangle,s=null,a=-1){super(),this._primitiveType=r,this.objectAndLayerIdColor=s,this.edgeIndicesLength=a,this.type=st.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[o,n]of e)n&&this._vertexAttributes.set(o,{...n});if(i==null||i.length===0){const o=Ts(this._vertexAttributes),n=ti(o);this.edgeIndicesLength=this.edgeIndicesLength<0?o:this.edgeIndicesLength;for(const c of this._vertexAttributes.keys())this._indices.set(c,n)}else for(const[o,n]of i)n&&(this._indices.set(o,Tr(n)),o===m.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(o).length:this.edgeIndicesLength))}cloneShallow(){const e=new bs([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:i,_indices:r}=e;return this._vertexAttributes.forEach((s,a)=>i.set(a,s)),this._indices.forEach((s,a)=>r.set(a,s)),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const i=this._vertexAttributes.get(e);return i&&!i.exclusive&&(i.data=Array.from(i.data),i.exclusive=!0),i}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return I(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===ut.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const i=this.indices.get(m.POSITION),r=this.vertexAttributes.get(m.POSITION);return _s(r,i,e)}_computeAttachmentOriginPoints(e){const i=this.indices.get(m.POSITION),r=this.vertexAttributes.get(m.POSITION);return xs(r,i,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(m.POSITION);if(!e||e.length===0)return null;const i=this.primitiveType===ut.Triangle?3:1;G(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const r=ti(e.length/i),s=this.vertexAttributes.get(m.POSITION);return s?new Ui(r,i,e,s):null}};function Ts(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}let dn=class extends Xt{constructor(e,i){super(),this.type=st.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Tt,this._parameters=Hi(e,i),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,i=!0){fs(this._parameters,e)&&(this.validateParameters(this._parameters),i&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){A(this.repository)&&this.repository.materialChanged(this)}};var Vt;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(Vt||(Vt={}));let Ss=class extends Fe{constructor(){super(...arguments),this.renderOccluded=Vt.Occlude}};var j;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExludeHighlight=5]="ShadowExludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(j||(j={}));let As=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,i,r=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(r,i),this._technique),this._technique}ensureResources(e){return Ct.LOADED}},fn=class extends Ss{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=ue(1,1,1),this.vvSizeMaxSize=ue(100,100,100),this.vvSizeOffset=ue(0,0,0),this.vvSizeFactor=ue(1,1,1),this.vvSizeValue=ue(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Ve()}};const yt=8;let Ce=class extends vs{constructor(){super(...arguments),this.hasWebGL2Context=!1}};Pe([Re({constValue:!0})],Ce.prototype,"hasSliceHighlight",void 0),Pe([Re({constValue:!1})],Ce.prototype,"hasSliceInVertexProgram",void 0),Pe([Re({constValue:!1})],Ce.prototype,"instancedDoublePrecision",void 0),Pe([Re({constValue:!1})],Ce.prototype,"useLegacyTerrainShading",void 0),Pe([Re({constValue:!1})],Ce.prototype,"hasModelTransformation",void 0),Pe([Re({constValue:D.Pass})],Ce.prototype,"pbrTextureBindType",void 0),Pe([Re()],Ce.prototype,"hasWebGL2Context",void 0);function ws(t){t.attributes.add(m.POSITION,"vec3"),t.vertex.code.add(d`vec3 positionModel() { return position; }`)}function Os({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(d`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function vn(t){return!!Jr("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}let ve=class extends Z{constructor(e,i){super(e,"vec3",D.Draw,(r,s,a,o)=>r.setUniform3fv(e,i(s,a,o)))}},Gi=class extends Z{constructor(e,i){super(e,"mat3",D.Draw,(r,s,a)=>r.setUniformMatrix3fv(e,i(s,a)))}},Kt=class extends Z{constructor(e,i){super(e,"mat3",D.Pass,(r,s,a)=>r.setUniformMatrix3fv(e,i(s,a)))}};function Wi(t,e){t.include(ws);const i=t.vertex;i.include(Os,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),i.uniforms.add([new H("transformWorldFromViewTH",r=>r.transformWorldFromViewTH),new H("transformWorldFromViewTL",r=>r.transformWorldFromViewTL),new Kt("transformViewFromCameraRelativeRS",r=>r.transformViewFromCameraRelativeRS),new et("transformProjFromView",r=>r.transformProjFromView),new Gi("transformWorldFromModelRS",r=>r.transformWorldFromModelRS),new ve("transformWorldFromModelTH",r=>r.transformWorldFromModelTH),new ve("transformWorldFromModelTL",r=>r.transformWorldFromModelTL)]),i.code.add(d`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),i.code.add(d`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?d`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new H("transformWorldFromViewTL",r=>r.transformWorldFromViewTL)),i.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Ms=class extends Fe{constructor(){super(...arguments),this.transformWorldFromViewTH=C(),this.transformWorldFromViewTL=C(),this.transformViewFromCameraRelativeRS=Ve(),this.transformProjFromView=$e()}};class Ps extends Fe{constructor(){super(...arguments),this.transformWorldFromModelRS=Ve(),this.transformWorldFromModelTH=Bt(),this.transformWorldFromModelTL=Bt()}}function di(t){t.varyings.add("linearDepth","float")}function ys(t){t.vertex.uniforms.add(new Nt("nearFar",(e,i)=>i.camera.nearFar))}function qi(t){t.vertex.code.add(d`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Sn(t,e){const{vertex:i}=t;switch(e.output){case j.Color:if(e.receiveShadows)return di(t),void i.code.add(d`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case j.Depth:case j.Shadow:case j.ShadowHighlight:case j.ShadowExludeHighlight:return t.include(Wi,e),di(t),ys(t),qi(t),void i.code.add(d`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}i.code.add(d`void forwardLinearDepth() {}`)}function An(t,e){Rs(t,e,[new ve("slicePlaneOrigin",(i,r)=>Is(e,i,r)),new ve("slicePlaneBasis1",(i,r)=>{var s;return hi(e,i,r,(s=Jt(r.slicePlane))==null?void 0:s.basis1)}),new ve("slicePlaneBasis2",(i,r)=>{var s;return hi(e,i,r,(s=Jt(r.slicePlane))==null?void 0:s.basis2)})])}function Rs(t,e,i){if(!e.hasSlicePlane){const o=d`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(o),void t.fragment.code.add(o)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(i),t.fragment.uniforms.add(i);const r=d`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,s=d`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?d`
        ${s}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:d`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(r),t.fragment.code.add(r),t.fragment.code.add(a)}function ki(t,e,i){return t.instancedDoublePrecision?V(Cs,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function ji(t,e){return A(t)?Gt(_t,e.origin,t):e.origin}function Xi(t,e,i){return t.hasSliceTranslatedView?A(e)?Dt(Ls,i.camera.viewMatrix,e):i.camera.viewMatrix:null}function Is(t,e,i){if(I(i.slicePlane))return Wt;const r=ki(t,e,i),s=ji(r,i.slicePlane),a=Xi(t,r,i);return A(a)?Et(_t,s,a):s}function hi(t,e,i,r){if(I(r)||I(i.slicePlane))return Wt;const s=ki(t,e,i),a=ji(s,i.slicePlane),o=Xi(t,s,i);return A(o)?(k(Xe,r,a),Et(_t,a,o),Et(Xe,Xe,o),Gt(Xe,Xe,_t)):r}const Cs=C(),_t=C(),Xe=C(),Ls=$e();function wn(t,e){const i=e.output===j.ObjectAndLayerIdColor,r=e.objectAndLayerIdColorInstanced;i&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),r?t.attributes.add(m.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(m.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(d`
     void forwardObjectAndLayerIdColor() {
      ${i?r?d`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:d`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:d``} }`),t.fragment.code.add(d`
      void outputObjectAndLayerIdColor() {
        ${i?d`gl_FragColor = objectAndLayerIdColorVarying;`:d``} }`)}let Es=class extends Z{constructor(e,i,r){super(e,"vec4",D.Pass,(s,a,o)=>s.setUniform4fv(e,i(a,o)),r)}},$s=class extends Z{constructor(e,i,r){super(e,"float",D.Pass,(s,a,o)=>s.setUniform1fv(e,i(a,o)),r)}};function Pn(t,e){switch(t.fragment.include(Ti),e.output){case j.Shadow:case j.ShadowHighlight:case j.ShadowExludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case j.Depth:t.fragment.code.add(d`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}let Ns=class extends Z{constructor(e,i){super(e,"mat4",D.Draw,(r,s,a)=>r.setUniformMatrix4fv(e,i(s,a)))}};function Fs(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Wt):t.uniforms.add(new ve("cameraPosition",(i,r)=>V(Ki,r.camera.viewInverseTransposeMatrix[3]-i.origin[0],r.camera.viewInverseTransposeMatrix[7]-i.origin[1],r.camera.viewInverseTransposeMatrix[11]-i.origin[2])))}function Rn(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new et("proj",(r,s)=>s.camera.projectionMatrix),new Ns("view",(r,s)=>Dt(ui,s.camera.viewMatrix,r.origin)),new ve("localOrigin",r=>r.origin)]);const i=r=>V(Ki,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new et("proj",(r,s)=>s.camera.projectionMatrix),new et("view",(r,s)=>Dt(ui,s.camera.viewMatrix,i(s))),new H("localOrigin",(r,s)=>i(s))])}const ui=Gr(),Ki=C();function In(t){t.uniforms.add(new et("viewNormal",(e,i)=>i.camera.viewInverseTransposeMatrix))}let Yi=class extends Fe{constructor(){super(...arguments),this.color=jt(1,1,1,1)}};function zs(){const t=new Sr;return t.include(Ar),t.fragment.uniforms.add([new Si("tex",e=>e.texture),new U("uColor",e=>e.color)]),t.fragment.code.add(d`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}const Ln=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Yi,build:zs},Symbol.toStringTag,{value:"Module"}));function Ds(){if(I(Rt)){const t=e=>Fr(`esri/libs/basisu/${e}`);Rt=bt(()=>import("./basis_transcoder-ada6623d.js"),["assets/basis_transcoder-ada6623d.js","assets/_commonjsHelpers-a430e9ea.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(i=>(i.initializeBasis(),delete i.then,i)))}return Rt}let Rt;var Ee;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ee||(Ee={}));let re=null,lt=null;async function Zi(){return I(lt)&&(lt=Ds(),re=await lt),lt}function Bs(t,e){if(I(re))return t.byteLength;const i=new re.BasisFile(new Uint8Array(t)),r=Ji(i)?Qi(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),e):0;return i.close(),i.delete(),r}function Vs(t,e){if(I(re))return t.byteLength;const i=new re.KTX2File(new Uint8Array(t)),r=er(i)?Qi(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),e):0;return i.close(),i.delete(),r}function Qi(t,e,i,r,s){const a=Ur(e?pe.COMPRESSED_RGBA8_ETC2_EAC:pe.COMPRESSED_RGB8_ETC2),o=s&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(i*r*a*o)}function Ji(t){return t.getNumImages()>=1&&!t.isUASTC()}function er(t){return t.getFaces()>=1&&t.isETC1S()}async function Hs(t,e,i){I(re)&&(re=await Zi());const r=new re.BasisFile(new Uint8Array(i));if(!Ji(r))return null;r.startTranscoding();const s=tr(t,e,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),(a,o)=>r.getImageTranscodedSizeInBytes(0,a,o),(a,o,n)=>r.transcodeImage(n,0,a,o,0,0));return r.close(),r.delete(),s}async function Us(t,e,i){I(re)&&(re=await Zi());const r=new re.KTX2File(new Uint8Array(i));if(!er(r))return null;r.startTranscoding();const s=tr(t,e,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),(a,o)=>r.getImageTranscodedSizeInBytes(a,0,0,o),(a,o,n)=>r.transcodeImage(n,a,0,0,o,0,-1,-1));return r.close(),r.delete(),s}function tr(t,e,i,r,s,a,o,n){const{compressedTextureETC:c,compressedTextureS3TC:l}=t.capabilities,[h,u]=c?r?[Ee.ETC2_RGBA,pe.COMPRESSED_RGBA8_ETC2_EAC]:[Ee.ETC1_RGB,pe.COMPRESSED_RGB8_ETC2]:l?r?[Ee.BC3_RGBA,pe.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ee.BC1_RGB,pe.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ee.RGBA32,ae.RGBA],f=e.hasMipmap?i:Math.min(1,i),p=[];for(let g=0;g<f;g++)p.push(new Uint8Array(o(g,h))),n(g,h,p[g]);const v=p.length>1,T=v?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,w={...e,samplingMode:T,hasMipmap:v,internalFormat:u,width:s,height:a};return new oe(t,w,{type:"compressed",levels:p})}const Ke=Pr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Gs=542327876,Ws=131072,qs=4;function Yt(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function ks(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const js=Yt("DXT1"),Xs=Yt("DXT3"),Ks=Yt("DXT5"),Ys=31,Zs=0,Qs=1,Js=2,ea=3,ta=4,ia=7,ra=20,sa=21;function aa(t,e,i){const{textureData:r,internalFormat:s,width:a,height:o}=dr(oa(i,e.hasMipmap??!1));return e.samplingMode=r.levels.length>1?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,e.hasMipmap=r.levels.length>1,e.internalFormat=s,e.width=a,e.height=o,new oe(t,e,r)}function oa(t,e){const i=new Int32Array(t,0,Ys);if(i[Zs]!==Gs)return Ke.error("Invalid magic number in DDS header"),null;if(!(i[ra]&qs))return Ke.error("Unsupported format, must contain a FourCC code"),null;const r=i[sa];let s,a;switch(r){case js:s=8,a=pe.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Xs:s=16,a=pe.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ks:s=16,a=pe.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ke.error("Unsupported FourCC code:",ks(r)),null}let o=1,n=i[ta],c=i[ea];!(3&n)&&!(3&c)||(Ke.warn("Rounding up compressed texture size to nearest multiple of 4."),n=n+3&-4,c=c+3&-4);const l=n,h=c;let u,f;i[Js]&Ws&&e!==!1&&(o=Math.max(1,i[ia])),o===1||vt(n)&&vt(c)||(Ke.warn("Ignoring mipmaps of non power of two sized compressed texture."),o=1);let p=i[Qs]+4;const v=[];for(let T=0;T<o;++T)f=(n+3>>2)*(c+3>>2)*s,u=new Uint8Array(t,p,f),v.push(u),p+=f,n=Math.max(1,n>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:v},internalFormat:a,width:l,height:h}}let ee=class extends Xt{constructor(e,i){super(),this._data=e,this.type=st.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Rr,this._passParameters=new Yi,this.params=i||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Ye.REPEAT,t:Ye.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||wt.STRETCH,this.estimatedTexMemRequired=ee._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;I(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(si(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const i=!e.paused;if(e.src=e.src,i&&e.autoplay){const r=()=>{e.removeEventListener("canplay",r),e.play()};e.addEventListener("canplay",r)}}}_startPreloadImageElement(e){Er(e.src)||si(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,i){if(I(e))return 0;if(qe(e)||ke(e))return i.encoding===ee.KTX2_ENCODING?Vs(e,i.mipmap):i.encoding===ee.BASIS_ENCODING?Bs(e,i.mipmap):e.byteLength;const{width:r,height:s}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ee._getDataDimensions(e):i;return(i.mipmap?4/3:1)*r*s*(i.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:it.TEXTURE_2D,pixelFormat:ae.RGBA,dataType:rt.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?ge.LINEAR_MIPMAP_LINEAR:ge.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,i){if(A(this._glTexture))return this._glTexture;if(A(this._loadingPromise))return this._loadingPromise;const r=this._data;return I(r)?(this._glTexture=new oe(e,this._createDescriptor(e),null),this._glTexture):typeof r=="string"?this._loadFromURL(e,i,r):r instanceof Image?this._loadFromImageElement(e,i,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,i,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,i):(qe(r)||ke(r))&&this.params.encoding===ee.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):(qe(r)||ke(r))&&this.params.encoding===ee.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):(qe(r)||ke(r))&&this.params.encoding===ee.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):ke(r)?this._loadFromPixelData(e,r):qe(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,i,r){if(!(this._data instanceof HTMLVideoElement)||I(this._glTexture)||this._data.readyState<tt.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if(A(this._powerOfTwoStretchInfo)){const{framebuffer:s,vao:a,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this._data),this._drawStretchedTexture(e,i,s,a,o,this._glTexture)}else{const{videoWidth:s,videoHeight:a}=this._data,{width:o,height:n}=this._glTexture.descriptor;s!==o||a!==n?this._glTexture.updateData(0,0,0,Math.min(s,o),Math.min(a,n),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,i){return this._glTexture=aa(e,this._createDescriptor(e),i),this._glTexture}_loadFromKTX2(e,i){return this._loadAsync(()=>Us(e,this._createDescriptor(e),i).then(r=>(this._glTexture=r,r)))}_loadFromBasis(e,i){return this._loadAsync(()=>Hs(e,this._createDescriptor(e),i).then(r=>(this._glTexture=r,r)))}_loadFromPixelData(e,i){G(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=this.params.components===1?ae.LUMINANCE:this.params.components===3?ae.RGB:ae.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new oe(e,r,i),this._glTexture}_loadFromURL(e,i,r){return this._loadAsync(async s=>{const a=await Mi(r,{signal:s});return ri(s),this._loadFromImage(e,a,i)})}_loadFromImageElement(e,i,r){return r.complete?this._loadFromImage(e,r,i):this._loadAsync(async s=>{const a=await $r(r,r.src,!1,s);return ri(s),this._loadFromImage(e,a,i)})}_loadFromVideoElement(e,i,r){return r.readyState>=tt.HAVE_CURRENT_DATA?this._loadFromImage(e,r,i):this._loadFromVideoElementAsync(e,i,r)}_loadFromVideoElementAsync(e,i,r){return this._loadAsync(s=>new Promise((a,o)=>{const n=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),hr(h)},c=()=>{r.readyState>=tt.HAVE_CURRENT_DATA&&(n(),a(this._loadFromImage(e,r,i)))},l=u=>{n(),o(u||new yr("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const h=Ir(s,()=>l(Cr()))}))}_loadFromImage(e,i,r){const s=ee._getDataDimensions(i);this.params.width=s.width,this.params.height=s.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?ae.RGB:ae.RGBA,!this._requiresPowerOfTwo(e,a)||vt(s.width)&&vt(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new oe(e,a,i),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,i,s,a,r),this._glTexture)}_loadAsync(e){const i=new AbortController;this._loadingController=i;const r=e(i.signal);this._loadingPromise=r;const s=()=>{this._loadingController===i&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(s,s),r}_requiresPowerOfTwo(e,i){const r=Ye.CLAMP_TO_EDGE,s=typeof i.wrapMode=="number"?i.wrapMode===r:i.wrapMode.s===r&&i.wrapMode.t===r;return!Br(e.gl)&&(i.hasMipmap||!s)}_makePowerOfTwoTexture(e,i,r,s,a){const{width:o,height:n}=r,c=ii(o),l=ii(n);let h;switch(s.width=c,s.height=l,this.params.powerOfTwoResizeMode){case wt.PAD:s.textureCoordinateScaleFactor=[o/c,n/l],h=new oe(e,s),h.updateData(0,0,0,o,n,i);break;case wt.STRETCH:case null:case void 0:h=this._stretchToPowerOfTwo(e,i,s,a());break;default:qt(this.params.powerOfTwoResizeMode)}return s.hasMipmap&&h.generateMipmap(),h}_stretchToPowerOfTwo(e,i,r,s){const a=new oe(e,r),o=new ft(e,{colorTarget:Pi.TEXTURE,depthStencilTarget:yi.NONE},a),n=new oe(e,{target:it.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:rt.UNSIGNED_BYTE,wrapMode:Ye.CLAMP_TO_EDGE,samplingMode:ge.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},i),c=Ei(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,s,o,c,n,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:c,sourceTexture:n,framebuffer:o}:(c.dispose(!0),n.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(l),a}_drawStretchedTexture(e,i,r,s,a,o){this._passParameters.texture=a,e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height),e.bindTechnique(i,this._passParameters,null),e.bindVAO(s),e.drawArrays(Je.TRIANGLE_STRIP,0,pt(s,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height),this._passParameters.texture=null}unload(){if(A(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:i,sourceTexture:r}=this._powerOfTwoStretchInfo;i.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(A(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),A(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};var tt;ee.DDS_ENCODING="image/vnd-ms.dds",ee.KTX2_ENCODING="image/ktx2",ee.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(tt||(tt={}));function $n(t,e){e.hasMultipassTerrain&&(t.fragment.include(wr),t.fragment.uniforms.add(new Si("terrainDepthTexture",(i,r)=>r.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new Nt("nearFar",(i,r)=>r.camera.nearFar)),t.fragment.uniforms.add(new Nt("inverseViewport",(i,r)=>r.inverseViewport)),t.fragment.code.add(d`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}let Nn=class{constructor(){this.enabled=!1,this.cullAboveGround=!1}};function na(t){t.vertex.code.add(d`const float PI = 3.141592653589793;`),t.fragment.code.add(d`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}const zn=.1,Dn=.001;function Bn(t){t.code.add(d`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}const Vn={func:Be.LESS},Hn={func:Be.ALWAYS},Un={mask:255},Gn={mask:0},Wn={function:{func:Be.ALWAYS,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:Y.KEEP,zFail:Y.KEEP,zPass:Y.ZERO}},qn={function:{func:Be.ALWAYS,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:Y.KEEP,zFail:Y.KEEP,zPass:Y.REPLACE}},kn={function:{func:Be.EQUAL,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:Y.KEEP,zFail:Y.KEEP,zPass:Y.KEEP}},jn={function:{func:Be.NOTEQUAL,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:Y.KEEP,zFail:Y.KEEP,zPass:Y.KEEP}};function la(t){t.vertex.code.add(d`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(d`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(d`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(d`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(d`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(d`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(d`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Xn(t){t.uniforms.add(new U("screenSizePerspective",e=>ir(e.screenSizePerspective)))}function ca(t){t.uniforms.add(new U("screenSizePerspectiveAlignment",e=>ir(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function ir(t){return J(da,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const da=xt();function Kn(t,e){const i=t.vertex;e.hasVerticalOffset?(ua(i),e.hasScreenSizePerspective&&(t.include(la),ca(i),Fs(t.vertex,e)),i.code.add(d`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?d`vec3 worldNormal = normalize(worldPos + localOrigin);`:d`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?d`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:d`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):i.code.add(d`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const ha=xt();function ua(t){t.uniforms.add(new U("verticalOffset",(e,i)=>{const{minWorldLength:r,maxWorldLength:s,screenLength:a}=e.verticalOffset,o=Math.tan(.5*i.camera.fovY)/(.5*i.camera.fullViewport[3]),n=i.camera.pixelRatio||1;return J(ha,a*n,o,r,s)}))}let Yn=class extends As{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,i=>this._texture=i),this._acquire(e.normalTextureId,i=>this._textureNormal=i),this._acquire(e.emissiveTextureId,i=>this._textureEmissive=i),this._acquire(e.occlusionTextureId,i=>this._textureOcclusion=i),this._acquire(e.metallicRoughnessTextureId,i=>this._textureMetallicRoughness=i)}dispose(){this._texture=Me(this._texture),this._textureNormal=Me(this._textureNormal),this._textureEmissive=Me(this._textureEmissive),this._textureOcclusion=Me(this._textureOcclusion),this._textureMetallicRoughness=Me(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Ct.LOADED:Ct.LOADING}get textureBindParameters(){return new ma(A(this._texture)?this._texture.glTexture:null,A(this._textureNormal)?this._textureNormal.glTexture:null,A(this._textureEmissive)?this._textureEmissive.glTexture:null,A(this._textureOcclusion)?this._textureOcclusion.glTexture:null,A(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(I(this._texture)||e!==this._texture.id)&&(this._texture=Me(this._texture),this._textureId=e,this._acquire(this._textureId,i=>this._texture=i))}_acquire(e,i){if(I(e))return void i(null);const r=this._textureRepository.acquire(e);if(Lr(r))return++this._numLoading,void r.then(s=>{if(this._disposed)return Me(s),void i(null);i(s)}).finally(()=>--this._numLoading);i(r)}},ma=class extends Fe{constructor(e=null,i=null,r=null,s=null,a=null){super(),this.texture=e,this.textureNormal=i,this.textureEmissive=r,this.textureOcclusion=s,this.textureMetallicRoughness=a}};function fa(t,e,i,r){const s=i.typedBuffer,a=i.typedBufferStride,o=t.length;r*=a;for(let n=0;n<o;++n){const c=2*t[n];s[r]=e[c],s[r+1]=e[c+1],r+=a}}function rr(t,e,i,r,s){const a=i.typedBuffer,o=i.typedBufferStride,n=t.length;if(r*=o,s==null||s===1)for(let c=0;c<n;++c){const l=3*t[c];a[r]=e[l],a[r+1]=e[l+1],a[r+2]=e[l+2],r+=o}else for(let c=0;c<n;++c){const l=3*t[c];for(let h=0;h<s;++h)a[r]=e[l],a[r+1]=e[l+1],a[r+2]=e[l+2],r+=o}}function pa(t,e,i,r,s=1){const a=i.typedBuffer,o=i.typedBufferStride,n=t.length;if(r*=o,s===1)for(let c=0;c<n;++c){const l=4*t[c];a[r]=e[l],a[r+1]=e[l+1],a[r+2]=e[l+2],a[r+3]=e[l+3],r+=o}else for(let c=0;c<n;++c){const l=4*t[c];for(let h=0;h<s;++h)a[r]=e[l],a[r+1]=e[l+1],a[r+2]=e[l+2],a[r+3]=e[l+3],r+=o}}function ga(t,e,i,r,s,a=1){if(!i)return void rr(t,e,r,s,a);const o=r.typedBuffer,n=r.typedBufferStride,c=t.length,l=i[0],h=i[1],u=i[2],f=i[4],p=i[5],v=i[6],T=i[8],w=i[9],g=i[10],$=i[12],y=i[13],O=i[14];s*=n;let L=0,x=0,b=0;const M=sr(i)?S=>{L=e[S]+$,x=e[S+1]+y,b=e[S+2]+O}:S=>{const _=e[S],R=e[S+1],P=e[S+2];L=l*_+f*R+T*P+$,x=h*_+p*R+w*P+y,b=u*_+v*R+g*P+O};if(a===1)for(let S=0;S<c;++S)M(3*t[S]),o[s]=L,o[s+1]=x,o[s+2]=b,s+=n;else for(let S=0;S<c;++S){M(3*t[S]);for(let _=0;_<a;++_)o[s]=L,o[s+1]=x,o[s+2]=b,s+=n}}function va(t,e,i,r,s,a=1){if(!i)return void rr(t,e,r,s,a);const o=i,n=r.typedBuffer,c=r.typedBufferStride,l=t.length,h=o[0],u=o[1],f=o[2],p=o[4],v=o[5],T=o[6],w=o[8],g=o[9],$=o[10],y=!Oi(o),O=1e-6,L=1-O;s*=c;let x=0,b=0,M=0;const S=sr(o)?_=>{x=e[_],b=e[_+1],M=e[_+2]}:_=>{const R=e[_],P=e[_+1],E=e[_+2];x=h*R+p*P+w*E,b=u*R+v*P+g*E,M=f*R+T*P+$*E};if(a===1)if(y)for(let _=0;_<l;++_){S(3*t[_]);const R=x*x+b*b+M*M;if(R<L&&R>O){const P=1/Math.sqrt(R);n[s]=x*P,n[s+1]=b*P,n[s+2]=M*P}else n[s]=x,n[s+1]=b,n[s+2]=M;s+=c}else for(let _=0;_<l;++_)S(3*t[_]),n[s]=x,n[s+1]=b,n[s+2]=M,s+=c;else for(let _=0;_<l;++_){if(S(3*t[_]),y){const R=x*x+b*b+M*M;if(R<L&&R>O){const P=1/Math.sqrt(R);x*=P,b*=P,M*=P}}for(let R=0;R<a;++R)n[s]=x,n[s+1]=b,n[s+2]=M,s+=c}}function _a(t,e,i,r,s,a=1){if(!i)return void pa(t,e,r,s,a);const o=i,n=r.typedBuffer,c=r.typedBufferStride,l=t.length,h=o[0],u=o[1],f=o[2],p=o[4],v=o[5],T=o[6],w=o[8],g=o[9],$=o[10],y=!Oi(o),O=1e-6,L=1-O;if(s*=c,a===1)for(let x=0;x<l;++x){const b=4*t[x],M=e[b],S=e[b+1],_=e[b+2],R=e[b+3];let P=h*M+p*S+w*_,E=u*M+v*S+g*_,z=f*M+T*S+$*_;if(y){const N=P*P+E*E+z*z;if(N<L&&N>O){const B=1/Math.sqrt(N);P*=B,E*=B,z*=B}}n[s]=P,n[s+1]=E,n[s+2]=z,n[s+3]=R,s+=c}else for(let x=0;x<l;++x){const b=4*t[x],M=e[b],S=e[b+1],_=e[b+2],R=e[b+3];let P=h*M+p*S+w*_,E=u*M+v*S+g*_,z=f*M+T*S+$*_;if(y){const N=P*P+E*E+z*z;if(N<L&&N>O){const B=1/Math.sqrt(N);P*=B,E*=B,z*=B}}for(let N=0;N<a;++N)n[s]=P,n[s+1]=E,n[s+2]=z,n[s+3]=R,s+=c}}function mi(t,e,i,r,s,a=1){const o=r.typedBuffer,n=r.typedBufferStride,c=t.length;if(s*=n,i!==e.length||i!==4)if(a!==1)if(i!==4)for(let l=0;l<c;++l){const h=3*t[l];for(let u=0;u<a;++u)o[s]=e[h],o[s+1]=e[h+1],o[s+2]=e[h+2],o[s+3]=255,s+=n}else for(let l=0;l<c;++l){const h=4*t[l];for(let u=0;u<a;++u)o[s]=e[h],o[s+1]=e[h+1],o[s+2]=e[h+2],o[s+3]=e[h+3],s+=n}else{if(i===4){for(let l=0;l<c;++l){const h=4*t[l];o[s]=e[h],o[s+1]=e[h+1],o[s+2]=e[h+2],o[s+3]=e[h+3],s+=n}return}for(let l=0;l<c;++l){const h=3*t[l];o[s]=e[h],o[s+1]=e[h+1],o[s+2]=e[h+2],o[s+3]=255,s+=n}}else{o[s]=e[0],o[s+1]=e[1],o[s+2]=e[2],o[s+3]=e[3];const l=new Uint32Array(r.typedBuffer.buffer,r.start),h=n/4,u=l[s/=4];s+=h;const f=c*a;for(let p=1;p<f;++p)l[s]=u,s+=h}}function xa(t,e,i,r,s=1){const a=e.typedBuffer,o=e.typedBufferStride;if(r*=o,s===1)for(let n=0;n<i;++n)a[r]=t[0],a[r+1]=t[1],a[r+2]=t[2],a[r+3]=t[3],r+=o;else for(let n=0;n<i;++n)for(let c=0;c<s;++c)a[r]=t[0],a[r+1]=t[1],a[r+2]=t[2],a[r+3]=t[3],r+=o}function Jn(t,e,i,r,s,a){for(const o of e.fieldNames){const n=t.vertexAttributes.get(o),c=t.indices.get(o);if(n&&c)switch(o){case m.POSITION:{G(n.size===3);const l=s.getField(o,ai);l&&ga(c,n.data,i,l,a);break}case m.NORMAL:{G(n.size===3);const l=s.getField(o,ai);l&&va(c,n.data,r,l,a);break}case m.UV0:{G(n.size===2);const l=s.getField(o,qr);l&&fa(c,n.data,l,a);break}case m.COLOR:{G(n.size===3||n.size===4);const l=s.getField(o,Ot);l&&mi(c,n.data,n.size,l,a);break}case m.SYMBOLCOLOR:{G(n.size===3||n.size===4);const l=s.getField(o,Ot);l&&mi(c,n.data,n.size,l,a);break}case m.TANGENT:{G(n.size===4);const l=s.getField(o,Wr);l&&_a(c,n.data,r,l,a);break}}else if(o===m.OBJECTANDLAYERIDCOLOR&&A(t.objectAndLayerIdColor)&&t.objectAndLayerIdColor.length===4){const l=t.indices.get(m.POSITION);if(l){const h=l.length,u=s.getField(o,Ot);xa(t.objectAndLayerIdColor,u,h,a)}}}}function sr(t){return t[0]===1&&t[1]===0&&t[2]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[8]===0&&t[9]===0&&t[10]===1}const ba=jt(1,1,0,1),Ta=jt(1,0,1,1);function el(t,e){t.fragment.uniforms.add(Qe("depthTex",(i,r)=>r.highlightDepthTexture,e.hasWebGL2Context?Ne.None:Ne.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",ba).add("unoccludedHighlightFlag","vec4",Ta),t.fragment.code.add(d`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${Or(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}function tl(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(m.INSTANCEFEATUREATTRIBUTE,"vec4");const i=t.vertex;e.vvSize?(i.uniforms.add(new H("vvSizeMinSize",r=>r.vvSizeMinSize)),i.uniforms.add(new H("vvSizeMaxSize",r=>r.vvSizeMaxSize)),i.uniforms.add(new H("vvSizeOffset",r=>r.vvSizeOffset)),i.uniforms.add(new H("vvSizeFactor",r=>r.vvSizeFactor)),i.uniforms.add(new Kt("vvSymbolRotationMatrix",r=>r.vvSymbolRotationMatrix)),i.uniforms.add(new H("vvSymbolAnchor",r=>r.vvSymbolAnchor)),i.code.add(d`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),i.code.add(d`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?d`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):i.code.add(d`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(i.constants.add("vvColorNumber","int",yt),e.hasVvInstancing&&i.uniforms.add([new $s("vvColorValues",r=>r.vvColorValues,yt),new Es("vvColorColors",r=>r.vvColorColors,yt)]),i.code.add(d`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?d`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):i.code.add(d`vec4 vvColor() { return vec4(1.0); }`)}function il(t,e){if(qi(t),e.hasModelTransformation)return t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function rl(t,e){e.hasVertexColors?(t.attributes.add(m.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(d`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(d`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(d`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}let Sa=class{constructor(e=C()){this.intensity=e}},Aa=class{constructor(e=C(),i=ue(.57735,.57735,.57735)){this.intensity=e,this.direction=i}},Ht=class{constructor(e=C(),i=ue(.57735,.57735,.57735),r=!0,s=1,a=1){this.intensity=e,this.direction=i,this.castShadows=r,this.specularStrength=s,this.environmentStrength=a}},ar=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function wa(t,e,i){(i=i||t).length=t.length;for(let r=0;r<t.length;r++)i[r]=t[r]*e[r];return i}function It(t,e,i){(i=i||t).length=t.length;for(let r=0;r<t.length;r++)i[r]=t[r]*e;return i}function De(t,e,i){(i=i||t).length=t.length;for(let r=0;r<t.length;r++)i[r]=t[r]+e[r];return i}function or(t){return(t+1)*(t+1)}function Oa(t){return kt(Math.floor(Math.sqrt(t)-1),0,2)}function nr(t,e,i){const r=t[0],s=t[1],a=t[2],o=i||[];return o.length=or(e),e>=0&&(o[0]=.28209479177),e>=1&&(o[1]=.4886025119*r,o[2]=.4886025119*a,o[3]=.4886025119*s),e>=2&&(o[4]=1.09254843059*r*s,o[5]=1.09254843059*s*a,o[6]=.31539156525*(3*a*a-1),o[7]=1.09254843059*r*a,o[8]=.54627421529*(r*r-s*s)),o}function Ma(t,e){const i=or(t),r=e||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=i;for(let s=0;s<i;s++)r.r[s]=r.g[s]=r.b[s]=0;return r}function Pa(t,e){const i=Oa(e.r.length);for(const r of t)_r(Ut,r.direction),nr(Ut,i,fe),wa(fe,gt),It(fe,r.intensity[0],ze),De(e.r,ze),It(fe,r.intensity[1],ze),De(e.g,ze),It(fe,r.intensity[2],ze),De(e.b,ze);return e}function ya(t,e){nr(Ut,0,fe);for(const i of t)e.r[0]+=fe[0]*gt[0]*i.intensity[0]*4*Math.PI,e.g[0]+=fe[0]*gt[0]*i.intensity[1]*4*Math.PI,e.b[0]+=fe[0]*gt[0]*i.intensity[2]*4*Math.PI;return e}function Ra(t,e,i,r){Ma(e,r),V(i.intensity,0,0,0);let s=!1;const a=Ia,o=Ca,n=La;a.length=0,o.length=0,n.length=0;for(const c of t)c instanceof Ht&&!s?(Ze(i.direction,c.direction),Ze(i.intensity,c.intensity),i.specularStrength=c.specularStrength,i.environmentStrength=c.environmentStrength,i.castShadows=c.castShadows,s=!0):c instanceof Ht||c instanceof Aa?a.push(c):c instanceof Sa?o.push(c):c instanceof ar&&n.push(c);Pa(a,r),ya(o,r);for(const c of n)De(r.r,c.r),De(r.g,c.g),De(r.b,c.b)}const Ia=[],Ca=[],La=[],fe=[0],ze=[0],Ut=C(),gt=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];let fi=class{constructor(){this.color=C(),this.intensity=1}},Ea=class{constructor(){this.direction=C(),this.ambient=new fi,this.diffuse=new fi}};const $a=.4;class dl{constructor(){this._shOrder=2,this._legacy=new Ea,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new ar,this._mainLight=new Ht(C(),ue(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){Ra(e,this._shOrder,this._mainLight,this._sphericalHarmonics),Ze(this._legacy.direction,this._mainLight.direction);const i=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*i,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*i,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*i,ne(this._legacy.diffuse.color,this._mainLight.intensity,i),Ze(ct,this._legacy.diffuse.color),ne(ct,ct,$a*this.globalFactor),k(this._legacy.ambient.color,this._legacy.ambient.color,ct)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),this._mainLight.direction=$t(e.mainLight.direction),this._mainLight.intensity=$t(e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,i,r){if(Lt(this._mainLight.intensity,e.mainLight.intensity,i.mainLight.intensity,r),this._mainLight.environmentStrength=_e(e.mainLight.environmentStrength,i.mainLight.environmentStrength,r),this._mainLight.specularStrength=_e(e.mainLight.specularStrength,i.mainLight.specularStrength,r),Ze(this._mainLight.direction,i.mainLight.direction),this._mainLight.castShadows=i.mainLight.castShadows,this.globalFactor=_e(e.globalFactor,i.globalFactor,r),this.noonFactor=_e(e.noonFactor,i.noonFactor,r),e.sh.r.length===i.sh.r.length)for(let s=0;s<i.sh.r.length;s++)this._sphericalHarmonics.r[s]=_e(e.sh.r[s],i.sh.r[s],r),this._sphericalHarmonics.g[s]=_e(e.sh.g[s],i.sh.g[s],r),this._sphericalHarmonics.b[s]=_e(e.sh.b[s],i.sh.b[s],r);else for(let s=0;s<i.sh.r.length;s++)this._sphericalHarmonics.r[s]=i.sh.r[s],this._sphericalHarmonics.g[s]=i.sh.g[s],this._sphericalHarmonics.b[s]=i.sh.b[s]}}const ct=C();class hl{constructor(){this._transform=$e(),this._transformInverse=new dt({value:this._transform},wi,$e),this._transformInverseTranspose=new dt(this._transformInverse,zt,$e),this._transformTranspose=new dt({value:this._transform},zt,$e),this._transformInverseRotation=new dt({value:this._transform},Yr,Ve)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Ft(this._transform,e)}multiplyTransform(e){Ai(this._transform,this._transform,e)}set(e){Ft(this._transform,e),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,i){this.setTransformMatrix(e),this.multiplyTransform(i),this._invalidateLazyTransforms()}}class dt{constructor(e,i,r){this._original=e,this._update=i,this._dirty=!0,this._transform=r()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class Na{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=C(),this._mbs=Ri(),this._obb={center:C(),halfSize:Bt(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,i,r){const s=e,a=i,o=r+this.componentLocalOriginLength,n=this._totalOffset/Math.sqrt(s*s+a*a+o*o);return this._tmpVertex[0]=e+s*n,this._tmpVertex[1]=i+a*n,this._tmpVertex[2]=r+o*n,this._tmpVertex}applyToAabb(e){const i=e[0],r=e[1],s=e[2]+this.componentLocalOriginLength,a=e[3],o=e[4],n=e[5]+this.componentLocalOriginLength,c=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),l=r*o<0?0:Math.min(Math.abs(r),Math.abs(o)),h=s*n<0?0:Math.min(Math.abs(s),Math.abs(n)),u=Math.sqrt(c*c+l*l+h*h);if(u<this._totalOffset)return e[0]-=i<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=s<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=o>0?this._totalOffset:0,e[5]+=n>0?this._totalOffset:0,e;const f=Math.max(Math.abs(i),Math.abs(a)),p=Math.max(Math.abs(r),Math.abs(o)),v=Math.max(Math.abs(s),Math.abs(n)),T=Math.sqrt(f*f+p*p+v*v),w=this._totalOffset/T,g=this._totalOffset/u;return e[0]+=i*(i>0?w:g),e[1]+=r*(r>0?w:g),e[2]+=s*(s>0?w:g),e[3]+=a*(a<0?w:g),e[4]+=o*(o<0?w:g),e[5]+=n*(n<0?w:g),e}applyToMbs(e){const i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/i;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/i,this._mbs}applyToObb(e){const i=e.center,r=this._totalOffset/Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this._obb.center[0]=i[0]+i[0]*r,this._obb.center[1]=i[1]+i[1]*r,this._obb.center[2]=i[2]+i[2]*r,ei(this._obb.halfSize,e.halfSize,e.quaternion),k(this._obb.halfSize,this._obb.halfSize,e.center);const s=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*s,this._obb.halfSize[1]+=this._obb.halfSize[1]*s,this._obb.halfSize[2]+=this._obb.halfSize[2]*s,Gt(this._obb.halfSize,this._obb.halfSize,e.center),Zr(gi,e.quaternion),ei(this._obb.halfSize,this._obb.halfSize,gi),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}let Fa=class{constructor(e=0){this.offset=e,this.sphere=Ri(),this.tmpVertex=C()}applyToVertex(e,i,r){const s=this.objectTransform.transform;let a=s[0]*e+s[4]*i+s[8]*r+s[12],o=s[1]*e+s[5]*i+s[9]*r+s[13],n=s[2]*e+s[6]*i+s[10]*r+s[14];const c=this.offset/Math.sqrt(a*a+o*o+n*n);a+=a*c,o+=o*c,n+=n*c;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*a+l[4]*o+l[8]*n+l[12],this.tmpVertex[1]=l[1]*a+l[5]*o+l[9]*n+l[13],this.tmpVertex[2]=l[2]*a+l[6]*o+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,i){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const s=this.offset/Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]+=i[0]*s,i[1]+=i[1]*s,i[2]+=i[2]*s}applyToAabb(e){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/i;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/i,this.sphere}};const pi=new Fa;function ml(t){return A(t)?(pi.offset=t,pi):null}new Na;const gi=kr();function za(t){const e=d`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function Da(t,e){e.normalType===xe.Attribute&&(t.attributes.add(m.NORMAL,"vec3"),t.vertex.code.add(d`vec3 normalModel() {
return normal;
}`)),e.normalType===xe.CompressedAttribute&&(t.include(za),t.attributes.add(m.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(d`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===xe.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var xe;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(xe||(xe={}));function fl(t,e){e.normalType===xe.Attribute||e.normalType===xe.CompressedAttribute?(t.include(Da,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new Gi("transformNormalGlobalFromModel",i=>i.transformNormalGlobalFromModel),new Kt("transformNormalViewFromGlobal",i=>i.transformNormalViewFromGlobal)]),t.vertex.code.add(d`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===xe.Ground?(t.include(Wi,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(d`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?d`normalize(vPositionWorldCameraRelative);`:d`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(d`void forwardNormal() {}`)}let pl=class extends Ms{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ve()}},vl=class extends Ps{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ve(),this.toMapSpace=xt()}};var X;function Ba(t,e){switch(e.textureCoordinateType){case X.Default:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case X.Compressed:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(d`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case X.Atlas:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(m.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:qt(e.textureCoordinateType);case X.None:return void t.vertex.code.add(d`void forwardTextureCoordinates() {}`);case X.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(X||(X={}));function Va(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Ha(t,e){switch(t.include(Ba,e),t.fragment.code.add(d`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case X.Default:case X.Compressed:return void t.fragment.code.add(d`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case X.Atlas:return t.include(Va),void t.fragment.code.add(d`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:qt(e.textureCoordinateType);case X.None:case X.COUNT:return}}Qr(0,.6,.2);var K;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(K||(K={}));function xl(t,e){const i=t.fragment,r=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===K.Normal&&r&&t.include(Ha,e),e.pbrMode!==K.Schematic)if(e.pbrMode!==K.Disabled){if(e.pbrMode===K.Normal){i.code.add(d`vec3 mrr;
vec3 emission;
float occlusion;`);const s=e.supportsTextureAtlas?e.hasWebGL2Context?Ne.None:Ne.Size:Ne.None,a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(i.uniforms.add(a===D.Pass?Qe("texMetallicRoughness",o=>o.textureMetallicRoughness,s):Mt("texMetallicRoughness",o=>o.textureMetallicRoughness,s)),i.code.add(d`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(i.uniforms.add(a===D.Pass?Qe("texEmission",o=>o.textureEmissive,s):Mt("texEmission",o=>o.textureEmissive,s)),i.code.add(d`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(i.uniforms.add(a===D.Pass?Qe("texOcclusion",o=>o.textureOcclusion,s):Mt("texOcclusion",o=>o.textureOcclusion,s)),i.code.add(d`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(d`float getBakedOcclusion() { return 1.0; }`),i.uniforms.add(a===D.Pass?[new H("emissionFactor",o=>o.emissiveFactor),new H("mrrFactors",o=>o.mrrFactors)]:[new ve("emissionFactor",o=>o.emissiveFactor),new ve("mrrFactors",o=>o.mrrFactors)]),i.code.add(d`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?d`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?d`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?d`
                vtc.size = ${mt(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:d`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?d`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?d`
                vtc.size = ${mt(e,"texEmission")};
                applyEmission(vtc);`:d`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?d`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?d`
                vtc.size = ${mt(e,"texOcclusion")};
                applyOcclusion(vtc);`:d`applyOcclusion(vtc);`:""}
    }
  `)}}else i.code.add(d`float getBakedOcclusion() { return 1.0; }`);else i.code.add(d`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function bl(t,e){const i=t.fragment,r=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;r===0?(i.uniforms.add(new H("lightingAmbientSH0",(s,a)=>V(vi,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),i.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(i.uniforms.add([new U("lightingAmbientSH_R",(s,a)=>J(he,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new U("lightingAmbientSH_G",(s,a)=>J(he,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new U("lightingAmbientSH_B",(s,a)=>J(he,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))]),i.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===2&&(i.uniforms.add([new H("lightingAmbientSH0",(s,a)=>V(vi,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new U("lightingAmbientSH_R1",(s,a)=>J(he,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new U("lightingAmbientSH_G1",(s,a)=>J(he,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new U("lightingAmbientSH_B1",(s,a)=>J(he,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new U("lightingAmbientSH_R2",(s,a)=>J(he,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new U("lightingAmbientSH_G2",(s,a)=>J(he,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new U("lightingAmbientSH_B2",(s,a)=>J(he,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))]),i.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==K.Normal&&e.pbrMode!==K.Schematic||i.code.add(d`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const vi=C(),he=xt();function Ua(t){t.uniforms.add(new H("mainLightDirection",(e,i)=>i.lighting.mainLight.direction))}function Ga(t){t.uniforms.add(new H("mainLightIntensity",(e,i)=>i.lighting.mainLight.intensity))}function Wa(t,e){e.useLegacyTerrainShading?t.uniforms.add(new Mr("lightingFixedFactor",(i,r)=>r.lighting.noonFactor*(1-r.lighting.globalFactor))):t.constants.add("lightingFixedFactor","float",0)}function Tl(t,e){const i=t.fragment;Ua(i),Ga(i),Wa(i,e),i.code.add(d`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}let qa=class extends Z{constructor(e,i){super(e,"int",D.Pass,(r,s,a)=>r.setUniform1i(e,i(s,a)))}},ka=class extends Z{constructor(e,i,r){super(e,"mat4",D.Draw,(s,a,o)=>s.setUniformMatrix4fv(e,i(a,o)),r)}};class ja extends Z{constructor(e,i,r){super(e,"mat4",D.Pass,(s,a,o)=>s.setUniformMatrix4fv(e,i(a,o)),r)}}function wl(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new ja("shadowMapMatrix",(i,r)=>r.shadowMap.getShadowMapMatrices(i.origin),4)),lr(t,e))}function Ol(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new ka("shadowMapMatrix",(i,r)=>r.shadowMap.getShadowMapMatrices(i.origin),4)),lr(t,e))}function lr(t,e){const i=t.fragment;i.include(Ti),i.uniforms.add([...Qe("shadowMapTex",(r,s)=>s.shadowMap.depthTexture,e.hasWebGL2Context?Ne.None:Ne.Size),new qa("numCascades",(r,s)=>s.shadowMap.numCascades),new U("cascadeDistances",(r,s)=>s.shadowMap.cascadeDistances)]),i.code.add(d`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${mt(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function Xa(t){const e=t.fragment.code;e.add(d`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(d`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(d`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ml(t,e){const i=t.fragment.code;t.include(na),e.pbrMode===K.Water||e.pbrMode===K.WaterOnIntegratedMesh?(i.add(d`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(d`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(d`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(d`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(d`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==K.Normal&&e.pbrMode!==K.Schematic||(t.include(Xa),i.add(d`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),i.add(d`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(d`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(d`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(d`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(d`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class Pl extends Z{constructor(e,i){super(e,"bool",D.Pass,(r,s,a)=>r.setUniform1b(e,i(s,a)))}}let Zt=class extends Ci{initializeProgram(e){return new Li(e.rctx,Zt.shader.get().build(),Tt)}initializePipeline(){return _i({colorWrite:xi})}};Zt.shader=new Ii(es,()=>bt(()=>import("./SSAOBlur.glsl-74f7993c.js"),["assets/SSAOBlur.glsl-74f7993c.js","assets/vec3-1863987c.js","assets/vec3f64-6cd30318.js","assets/common-c186b691.js","assets/ScreenSpacePass-6db805f2.js","assets/typedArrayUtil-d9bc5fbd.js","assets/vec2-ab9f47bf.js","assets/vec2f64-30dc1443.js","assets/Error-57322e92.js","assets/string-480f3e3f.js","assets/VertexAttribute-9c5c630d.js","assets/SSAOBlur.glsl-ea338452.js"]));class St extends Ci{initializeProgram(e){return new Li(e.rctx,St.shader.get().build(),Tt)}initializePipeline(){return _i({colorWrite:xi})}}St.shader=new Ii(Nr,()=>bt(()=>import("./SSAO.glsl-f999d19d.js"),["assets/SSAO.glsl-f999d19d.js","assets/vec2-ab9f47bf.js","assets/common-c186b691.js","assets/vec2f64-30dc1443.js","assets/ScreenSpacePass-6db805f2.js","assets/typedArrayUtil-d9bc5fbd.js","assets/Error-57322e92.js","assets/string-480f3e3f.js","assets/VertexAttribute-9c5c630d.js","assets/vec4-46a9b36d.js","assets/vec4f64-939de194.js","assets/SSAO.glsl-3068f7bf.js"]));class Ka extends Fe{constructor(){super(...arguments),this.projScale=1}}class Ya extends Ka{}class Za extends Fe{}class Qa extends Za{constructor(){super(...arguments),this.blurSize=ts()}}const ht=2;class Rl{constructor(e,i,r){this._techniqueRepository=e,this._rctx=i,this._requestRender=r,this._enabled=!1,this._quadVAO=null,this._passParameters=new Ya,this._drawParameters=new Qa}dispose(){this._quadVAO=Le(this._quadVAO)}disposeOffscreenBuffers(){At(this._ssaoFBO,e=>e.resize(0,0)),At(this._blur0FBO,e=>e.resize(0,0)),At(this._blur1FBO,e=>e.resize(0,0))}set enabled(e){e?this._enable():this._disable()}get enabled(){return this._enabled}get ready(){return this.enabled&&A(this._passParameters.noiseTexture)&&A(this._ssaoFBO)&&A(this._blur0FBO)&&A(this._blur1FBO)}get loading(){return this.enabled&&!this.ready}get colorTexture(){return A(this._blur1FBO)?this._blur1FBO.colorTexture:null}get width(){return A(this._ssaoFBO)?this._ssaoFBO.width:-1}get height(){return A(this._ssaoFBO)?this._ssaoFBO.height:-1}computeSSAO(e,i,r){if(!this.enabled||I(i)||I(r)||I(this._passParameters.noiseTexture)||I(this._ssaoFBO)||I(this._blur0FBO)||I(this._blur1FBO))return;const s=this._rctx,a=e.camera;this._passParameters.normalTexture=r,this._passParameters.depthTexture=i,this._passParameters.projScale=1/a.computeRenderPixelSizeAtDist(1);const o=a.fullViewport,n=o[2],c=o[3],l=n/ht,h=c/ht;this._ssaoFBO.resize(n,c),this._blur0FBO.resize(l,h),this._blur1FBO.resize(l,h),I(this._quadVAO)&&(this._quadVAO=Ei(this._rctx)),s.bindFramebuffer(this._ssaoFBO),s.setViewport(0,0,n,c),s.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),s.bindVAO(this._quadVAO),s.drawArrays(Je.TRIANGLE_STRIP,0,pt(this._quadVAO,"geometry"));const u=s.bindTechnique(this._blurTechnique,this._passParameters,e);s.setViewport(0,0,l,h),s.bindFramebuffer(this._blur0FBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,oi(this._drawParameters.blurSize,0,ht/c),u.bindDraw(this._drawParameters,e,this._passParameters),s.setViewport(0,0,l,h),s.drawArrays(Je.TRIANGLE_STRIP,0,pt(this._quadVAO,"geometry")),s.bindFramebuffer(this._blur1FBO),this._drawParameters.colorTexture=this._blur0FBO.colorTexture,oi(this._drawParameters.blurSize,ht/n,0),u.bindDraw(this._drawParameters,e,this._passParameters),s.drawArrays(Je.TRIANGLE_STRIP,0,pt(this._quadVAO,"geometry")),s.setViewport(o[0],o[1],o[2],o[3])}_selectPrograms(){I(this._ssaoTechnique)&&(this._ssaoTechnique=this._techniqueRepository.acquire(St)),I(this._blurTechnique)&&(this._blurTechnique=this._techniqueRepository.acquire(Zt))}_enable(){this.enabled||(this._enabled=!0,this._loadResources(()=>{this._enabled&&this._initialize()}))}_loadResources(e){this._data?e():bt(()=>import("./SSAOHelperData-348820a1.js"),[]).then(i=>{this._data=i,e()})}_initialize(){const e={target:it.TEXTURE_2D,pixelFormat:ae.RGBA,dataType:rt.UNSIGNED_BYTE,samplingMode:ge.LINEAR,wrapMode:Ye.CLAMP_TO_EDGE,width:0,height:0},i={colorTarget:Pi.TEXTURE,depthStencilTarget:yi.NONE};Mi(this._data.noiseTexture).then(r=>{this._enabled&&(this._ssaoFBO=new ft(this._rctx,i,e),this._blur0FBO=new ft(this._rctx,i,e),this._blur1FBO=new ft(this._rctx,i,e),this._passParameters.noiseTexture=new oe(this._rctx,{target:it.TEXTURE_2D,pixelFormat:ae.RGBA,dataType:rt.UNSIGNED_BYTE,hasMipmap:!0,width:r.width,height:r.height},r),this._requestRender())}),this._selectPrograms()}_disable(){this._enabled=!1,this._passParameters.noiseTexture=Le(this._passParameters.noiseTexture),this._blur1FBO=Le(this._blur1FBO),this._blur0FBO=Le(this._blur0FBO),this._ssaoFBO=Le(this._ssaoFBO)}get gpuMemoryUsage(){return(A(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(A(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(A(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}export{kn as $,As as A,fs as B,Ss as C,Jn as D,Tt as E,ga as F,zn as G,Un as H,qn as I,Wn as J,Yn as K,ee as L,Xt as M,Yo as N,Zo as O,$s as P,yt as Q,Es as R,Hi as S,na as T,Pn as U,wn as V,di as W,qi as X,Hn as Y,jn as Z,Gn as _,et as a,xl as a$,Vn as a0,ls as a1,fn as a2,la as a3,ua as a4,ca as a5,tl as a6,Xn as a7,el as a8,Fi as a9,Qo as aA,Ln as aB,Yi as aC,Rl as aD,jo as aE,Sa as aF,_s as aG,rn as aH,sn as aI,Jo as aJ,Bi as aK,ws as aL,us as aM,Os as aN,ve as aO,qa as aP,Ba as aQ,Da as aR,fl as aS,xe as aT,X as aU,Ha as aV,ht as aW,$a as aX,Kt as aY,Kn as aZ,wl as a_,Ko as aa,xs as ab,Xo as ac,tn as ad,ma as ae,va as af,mi as ag,pa as ah,xa as ai,rl as aj,ys as ak,dl as al,Nn as am,hl as an,ml as ao,vl as ap,Pl as aq,Ua as ar,Ga as as,Ml as at,Sn as au,Tl as av,bl as aw,K as ax,Ol as ay,vn as az,Ci as b,pl as b0,zs as b1,Re as c,vs as d,H as e,ni as f,Vt as g,st as h,bs as i,ln as j,Fs as k,j as l,il as m,An as n,Li as o,Bn as p,In as q,is as r,$n as s,Ii as t,Ei as u,Rn as v,Dn as w,Ce as x,dn as y,en as z};
