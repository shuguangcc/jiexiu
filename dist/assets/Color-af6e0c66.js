import{o as c,r as m,l as f}from"./colorUtils-639f4d25.js";import{a as A}from"./mathUtils-57aba1ea.js";import{r as u}from"./typedArrayUtil-d9bc5fbd.js";import{s as p}from"./ensureType-25b8cc06.js";function l(n){return A(p(n),0,255)}function g(n,r,t){return n=Number(n),isNaN(n)?t:n<r?r:n>t?t:n}class a{constructor(r){this.r=255,this.g=255,this.b=255,this.a=1,r&&this.setColor(r)}static blendColors(r,t,i,s=new a){return s.r=Math.round(r.r+(t.r-r.r)*i),s.g=Math.round(r.g+(t.g-r.g)*i),s.b=Math.round(r.b+(t.b-r.b)*i),s.a=r.a+(t.a-r.a)*i,s._sanitize()}static fromRgb(r,t){const i=r.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(i){const s=i[2].split(/\s*,\s*/),e=i[1];if(e==="rgb"&&s.length===3||e==="rgba"&&s.length===4){const h=s[0];if(h.charAt(h.length-1)==="%"){const o=s.map(b=>2.56*parseFloat(b));return s.length===4&&(o[3]=parseFloat(s[3])),a.fromArray(o,t)}return a.fromArray(s.map(o=>parseFloat(o)),t)}if(e==="hsl"&&s.length===3||e==="hsla"&&s.length===4)return a.fromArray(c(parseFloat(s[0]),parseFloat(s[1])/100,parseFloat(s[2])/100,parseFloat(s[3])),t)}return null}static fromHex(r,t=new a){if(r.length!==4&&r.length!==7||r[0]!=="#")return null;const i=r.length===4?4:8,s=(1<<i)-1;let e=Number("0x"+r.substr(1));return isNaN(e)?null:(["b","g","r"].forEach(h=>{const o=e&s;e>>=i,t[h]=i===4?17*o:o}),t.a=1,t)}static fromArray(r,t=new a){return t._set(Number(r[0]),Number(r[1]),Number(r[2]),Number(r[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(r,t){const i=m(r)?f(r):null;return i&&a.fromArray(i,t)||a.fromRgb(r,t)||a.fromHex(r,t)}static fromJSON(r){return r&&new a([r[0],r[1],r[2],r[3]/255])}static toUnitRGB(r){return u(r)?[r.r/255,r.g/255,r.b/255]:null}static toUnitRGBA(r){return u(r)?[r.r/255,r.g/255,r.b/255,r.a!=null?r.a:1]:null}get isBright(){return .299*this.r+.587*this.g+.114*this.b>=127}setColor(r){return typeof r=="string"?a.fromString(r,this):Array.isArray(r)?a.fromArray(r,this):(this._set(r.r??0,r.g??0,r.b??0,r.a??1),r instanceof a||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const r=this.r.toString(16),t=this.g.toString(16),i=this.b.toString(16);return`#${r.length<2?"0"+r:r}${t.length<2?"0"+t:t}${i.length<2?"0"+i:i}`}toCss(r=!1){const t=this.r+", "+this.g+", "+this.b;return r?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(r=a.AlphaMode.ALWAYS){const t=l(this.r),i=l(this.g),s=l(this.b);return r===a.AlphaMode.ALWAYS||this.a!==1?[t,i,s,l(255*this.a)]:[t,i,s]}clone(){return new a(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(r){return u(r)&&r.r===this.r&&r.g===this.g&&r.b===this.b&&r.a===this.a}_sanitize(){return this.r=Math.round(g(this.r,0,255)),this.g=Math.round(g(this.g,0,255)),this.b=Math.round(g(this.b,0,255)),this.a=g(this.a,0,1),this}_set(r,t,i,s){this.r=r,this.g=t,this.b=i,this.a=s}}a.prototype.declaredClass="esri.Color",function(n){var r;(r=n.AlphaMode||(n.AlphaMode={}))[r.ALWAYS=0]="ALWAYS",r[r.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"}(a||(a={}));const M=a;export{M as l};
