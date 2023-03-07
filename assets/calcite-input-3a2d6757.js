import{r as j,i as N,p as P,H as R,c as f,T as $,l as E,j as U,o as S,m as C,g as M,h as o,C as B,b as K}from"./dom-5b7af1bf.js";import{c as W,d as q,g as O}from"./label2-0103af15.js";import{s as G,c as X,d as J,H as Y}from"./form-9bc9e261.js";import{n as k}from"./key-1fec8108.js";import{c as F}from"./observers-c77bfda3.js";import{u as Z}from"./interactive-52dcf836.js";import{d as Q}from"./icon-1a289254.js";import{d as tt}from"./progress-ae83f8fa.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */class r{constructor(e){if(e instanceof r)return e;const[i,a]=String(e).split(".").concat("");this.value=BigInt(i+a.padEnd(r.DECIMALS,"0").slice(0,r.DECIMALS))+BigInt(r.ROUNDED&&a[r.DECIMALS]>="5"),this.isNegative=e.charAt(0)==="-"}static _divRound(e,i){return r.fromBigInt(e/i+(r.ROUNDED?e*BigInt(2)/i%BigInt(2):BigInt(0)))}static fromBigInt(e){return Object.assign(Object.create(r.prototype),{value:e})}toString(){const e=this.value.toString().replace(new RegExp("-","g"),"").padStart(r.DECIMALS+1,"0"),i=e.slice(0,-r.DECIMALS),a=e.slice(-r.DECIMALS).replace(/\.?0+$/,""),n=i.concat(a.length?"."+a:"");return`${this.isNegative?"-":""}${n}`}formatToParts(e){const i=this.value.toString().replace(new RegExp("-","g"),"").padStart(r.DECIMALS+1,"0"),a=i.slice(0,-r.DECIMALS),n=i.slice(-r.DECIMALS).replace(/\.?0+$/,""),s=e.formatToParts(BigInt(a));return this.isNegative&&s.unshift({type:"minusSign",value:c.minusSign}),n.length&&(s.push({type:"decimal",value:c.decimal}),n.split("").forEach(l=>s.push({type:"fraction",value:l}))),s}format(e){const i=this.value.toString().replace(new RegExp("-","g"),"").padStart(r.DECIMALS+1,"0"),a=i.slice(0,-r.DECIMALS),n=i.slice(-r.DECIMALS).replace(/\.?0+$/,""),s=`${this.isNegative?c.minusSign:""}${e.format(BigInt(a))}`,l=n.length?`${c.decimal}${e.format(BigInt(n))}`:"";return`${s}${l}`}add(e){return r.fromBigInt(this.value+new r(e).value)}subtract(e){return r.fromBigInt(this.value-new r(e).value)}multiply(e){return r._divRound(this.value*new r(e).value,r.SHIFT)}divide(e){return r._divRound(this.value*r.SHIFT,new r(e).value)}}r.DECIMALS=100;r.ROUNDED=!0;r.SHIFT=BigInt("1"+"0".repeat(r.DECIMALS));function d(t){return!(!t||isNaN(Number(t)))}function et(t){return!t||!ot(t)?"":g(t,e=>{let i=!1;const a=e.split("").filter((n,s)=>n.match(/\./g)&&!i?(i=!0,!0):n.match(/\-/g)&&s===0?!0:k.includes(n)).reduce((n,s)=>n+s);return d(a)?new r(a).toString():""})}const it=/^([-0])0+(?=\d)/,nt=/(?!^\.)\.$/,at=/(?!^-)-/g,rt=/^-\b0\b\.?0*$/,st=t=>g(t,e=>{const i=e.replace(at,"").replace(nt,"").replace(it,"$1");return d(i)?rt.test(i)?i:new r(i).toString():e});function g(t,e){if(!t)return t;const i=t.toLowerCase().indexOf("e")+1;return i?t.replace(/[eE]*$/g,"").substring(0,i).concat(t.slice(i).replace(/[eE]/g,"")).split(/[eE]/).map((a,n)=>e(n===1?a.replace(/\./g,""):a)).join("e").replace(/^e/,"1e"):e(t)}function ot(t){return k.some(e=>t.includes(e))}const p="en",w=["ar","bg","bs","ca","cs","da","de","de-CH","el",p,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","nb","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],lt=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],H=t=>lt.includes(t),I=new Intl.NumberFormat().resolvedOptions().numberingSystem,z=I==="arab"||!H(I)?"latn":I,ut=t=>H(t)?t:z;function ct(t){return w.indexOf(t)>-1?t:t?(t=t.toLowerCase(),t==="nb"?"no":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,(e,i,a)=>`${i}-${a.toUpperCase()}`),w.includes(t)||(t=t.split("-")[0])),w.includes(t)?t:p)):p}const b=new Set;function dt(t){T(t),b.size===0&&_.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),b.add(t)}function T(t){t.effectiveLocale=mt(t)}function ht(t){b.delete(t),b.size===0&&_.disconnect()}const _=F("mutation",t=>{t.forEach(e=>{const i=e.target;b.forEach(a=>{const n=!!(a.locale&&!a.el.lang),s=!j(i,a.el);if(n||s)return;const l=N(a.el,"[lang]");if(!l){a.effectiveLocale=p;return}const h=l.lang;a.effectiveLocale=l.hasAttribute("lang")&&h===""?p:h})})});function mt(t){var e;return t.el.lang||t.locale||((e=N(t.el,"[lang]"))===null||e===void 0?void 0:e.lang)||document.documentElement.lang||p}class pt{constructor(){this.delocalize=e=>this._numberFormatOptions?g(e,i=>i.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):e,this.localize=e=>this._numberFormatOptions?g(e,i=>d(i.trim())?new r(i.trim()).format(this._numberFormatter).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):i):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){if(e.locale=ct(e==null?void 0:e.locale),e.numberingSystem=ut(e==null?void 0:e.numberingSystem),!this._numberFormatOptions&&e.locale===p&&e.numberingSystem===z&&Object.keys(e).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const i=new Map(this._digits.map((n,s)=>[n,s])),a=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-123456789e-1);this._actualGroup=a.find(n=>n.type==="group").value,this._group=this._actualGroup.trim().length===0?" ":this._actualGroup,this._decimal=a.find(n=>n.type==="decimal").value,this._minusSign=a.find(n=>n.type==="minusSign").value,this._getDigitIndex=n=>i.get(n)}}const c=new pt;/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const V=t=>{const e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const u={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"},L={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"},bt={action:"action"},ft={clear:"Clear value"},gt="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host textarea,:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-color:transparent}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:1}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",A=P(class extends R{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputFocus=f(this,"calciteInternalInputFocus",6),this.calciteInternalInputBlur=f(this,"calciteInternalInputBlur",6),this.calciteInputInput=f(this,"calciteInputInput",7),this.calciteInputChange=f(this,"calciteInputChange",6),this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.groupSeparator=!1,this.hidden=!1,this.intlLoading=$.loading,this.iconFlipRtl=!1,this.loading=!1,this.localeFormat=!1,this.numberButtonType="vertical",this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.editingEnabled=!1,this.type="text",this.value="",this.childElType="input",this.previousValueOrigin="initial",this.mutationObserver=F("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.effectiveLocale="",this.keyDownHandler=t=>{this.readOnly||this.disabled||(this.isClearable&&t.key==="Escape"&&(this.clearInputValue(t),t.preventDefault()),t.key==="Enter"&&!t.defaultPrevented&&G(this)&&t.preventDefault())},this.clearInputValue=t=>{this.setValue({committing:!0,nativeEvent:t,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue&&this.calciteInputChange.emit(),this.previousEmittedValue=this.value},this.inputBlurHandler=()=>{this.calciteInternalInputBlur.emit(),this.emitChangeIfUserModified()},this.inputFocusHandler=t=>{const e=E(this.el,"action");t.target!==e&&this.setFocus(),this.calciteInternalInputFocus.emit()},this.inputInputHandler=t=>{this.disabled||this.readOnly||this.setValue({nativeEvent:t,origin:"user",value:t.target.value})},this.inputKeyDownHandler=t=>{this.disabled||this.readOnly||t.key==="Enter"&&this.emitChangeIfUserModified()},this.inputNumberInputHandler=t=>{if(this.disabled||this.readOnly)return;const e=t.target.value;c.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=c.delocalize(e);t.inputType==="insertFromPaste"?(d(i)||t.preventDefault(),this.setValue({nativeEvent:t,origin:"user",value:et(i)}),this.childNumberEl.value=this.localizedValue):this.setValue({nativeEvent:t,origin:"user",value:i})},this.inputNumberKeyDownHandler=t=>{if(this.type!=="number"||this.disabled||this.readOnly)return;if(t.key==="ArrowUp"){t.preventDefault(),this.nudgeNumberValue("up",t);return}if(t.key==="ArrowDown"){this.nudgeNumberValue("down",t);return}const e=[...k,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(t.altKey||t.ctrlKey||t.metaKey)return;const i=t.shiftKey&&t.key==="Tab";if(e.includes(t.key)&&(!t.shiftKey||i)){t.key==="Enter"&&this.emitChangeIfUserModified();return}c.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},!(t.key===c.decimal&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.indexOf(c.decimal)===-1))&&(/[eE]/.test(t.key)&&(!this.value&&!this.childNumberEl.value||this.value&&!/[eE]/.test(this.childNumberEl.value))||t.key==="-"&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.split("-").length<=2)||t.preventDefault())},this.nudgeNumberValue=(t,e)=>{if(e instanceof KeyboardEvent&&e.repeat||this.type!=="number")return;const i=this.maxString?parseFloat(this.maxString):null,a=this.minString?parseFloat(this.minString):null,n=100;this.incrementOrDecrementNumberValue(t,i,a,e),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let s=!0;this.nudgeNumberValueIntervalId=window.setInterval(()=>{if(s){s=!1;return}this.incrementOrDecrementNumberValue(t,i,a,e)},n)},this.numberButtonPointerUpAndOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.numberButtonPointerDownHandler=t=>{if(!U(t))return;t.preventDefault();const e=t.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(e,t)},this.hiddenInputChangeHandler=t=>{if(t.target.name===this.name){const e=t.target.value,i=this.type==="number"?d(e)?e:"":e;this.setValue({value:i,origin:"direct"})}t.stopPropagation()},this.setChildElRef=t=>{this.childEl=t},this.setChildNumberElRef=t=>{this.childNumberEl=t},this.setInputValue=t=>{this.type==="text"&&!this.childEl||this.type==="number"&&!this.childNumberEl||(this[`child${this.type==="number"?"Number":""}El`].value=t)},this.setPreviousEmittedValue=t=>{this.previousEmittedValue=this.type==="number"?d(t)?t:"":t},this.setPreviousValue=t=>{this.previousValue=this.type==="number"?d(t)?t:"":t},this.setValue=({committing:t=!1,nativeEvent:e,origin:i,previousValue:a,value:n})=>{if(c.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},this.type==="number"){const s=this.numberingSystem&&this.numberingSystem!=="latn"||z!=="latn"?c.delocalize(n):n,l=st(s),h=n&&!l||[".","-"].includes(l)?d(this.previousValue)?this.previousValue:"":l,m=c.localize(h);this.localizedValue=m,this.userChangedValue=i==="user"&&this.value!==h,this.value=h,i==="direct"&&this.setInputValue(m)}else this.userChangedValue=i==="user"&&this.value!==n,this.value=n,i==="direct"&&this.setInputValue(n);this.setPreviousValue(a||this.value),this.previousValueOrigin=i,e&&(this.calciteInputInput.emit({element:this.childEl,nativeEvent:e,value:this.value}).defaultPrevented?(this.value=this.previousValue,this.localizedValue=this.type==="number"?c.localize(this.previousValue):this.previousValue):t&&this.emitChangeIfUserModified())},this.inputKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)}}disabledWatcher(){this.setDisabledAction()}localeChanged(){T(this)}maxWatcher(){var t;this.maxString=((t=this.max)===null||t===void 0?void 0:t.toString())||null}minWatcher(){var t;this.minString=((t=this.min)===null||t===void 0?void 0:t.toString())||null}valueWatcher(t,e){this.userChangedValue||(this.setValue({origin:"direct",previousValue:e,value:t==null||t==""?"":this.type==="number"?d(t)?t:this.previousValue||"":t}),this.warnAboutInvalidNumberValue(t)),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=S(L,this.icon,this.type)}get isClearable(){return!this.isTextarea&&(this.clearable||this.type==="search")&&this.value.length>0}get isTextarea(){return this.childElType==="textarea"}connectedCallback(){var t;dt(this),this.scale=C(this.el,"scale",this.scale),this.status=C(this.el,"status",this.status),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),W(this),X(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),this.type==="number"&&(this.warnAboutInvalidNumberValue(this.value),this.setValue({origin:"connected",value:d(this.value)?this.value:""})),(t=this.mutationObserver)===null||t===void 0||t.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}disconnectedCallback(){var t;q(this),J(this),ht(this),(t=this.mutationObserver)===null||t===void 0||t.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}componentWillLoad(){var t,e;this.childElType=this.type==="textarea"?"textarea":"input",this.maxString=(t=this.max)===null||t===void 0?void 0:t.toString(),this.minString=(e=this.min)===null||e===void 0?void 0:e.toString(),this.requestedIcon=S(L,this.icon,this.type)}componentShouldUpdate(t,e,i){return this.type==="number"&&i==="value"&&t&&!d(t)?(this.setValue({origin:"reset",value:e}),!1):!0}componentDidRender(){Z(this)}async setFocus(){var t,e;this.type==="number"?(t=this.childNumberEl)===null||t===void 0||t.focus():(e=this.childEl)===null||e===void 0||e.focus()}async selectText(){var t,e;this.type==="number"?(t=this.childNumberEl)===null||t===void 0||t.select():(e=this.childEl)===null||e===void 0||e.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(t,e,i,a){const{value:n}=this,s=this.step==="any"?1:Math.abs(this.step||1),l=n&&n!==""?parseFloat(n):0,m=l+s*(t==="up"?1:-1),v=typeof i=="number"&&!isNaN(i)&&m<i||typeof e=="number"&&!isNaN(e)&&m>e?l:m,y=V(l),x=V(s);this.setValue({committing:!0,nativeEvent:a,origin:"user",value:v.toFixed(Math.max(y,x))})}onFormReset(){this.setValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(t){var e,i,a,n;this.type==="number"?(t.type="number",t.min=(i=(e=this.min)===null||e===void 0?void 0:e.toString(10))!==null&&i!==void 0?i:"",t.max=(n=(a=this.max)===null||a===void 0?void 0:a.toString(10))!==null&&n!==void 0?n:""):this.type==="text"?(t.type="text",this.minLength!=null&&(t.minLength=this.minLength),this.maxLength!=null&&(t.maxLength=this.maxLength)):this.type==="password"&&(t.type="password")}setDisabledAction(){const t=E(this.el,"action");t&&(this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled"))}warnAboutInvalidNumberValue(t){this.type==="number"&&t&&!d(t)&&console.warn(`The specified value "${t}" cannot be parsed, or is out of range.`)}render(){const t=M(this.el),e=o("div",{class:u.loader},o("calcite-progress",{label:this.intlLoading,type:"indeterminate"})),i=o("button",{"aria-label":this.intlClear||ft.clear,class:u.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},o("calcite-icon",{icon:"x",scale:"s"})),a=o("calcite-icon",{class:u.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"s"}),n=this.numberButtonType==="horizontal",s=o("button",{"aria-hidden":"true",class:{[u.numberButtonItem]:!0,[u.buttonItemHorizontal]:n},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},o("calcite-icon",{icon:"chevron-up",scale:"s"})),l=o("button",{"aria-hidden":"true",class:{[u.numberButtonItem]:!0,[u.buttonItemHorizontal]:n},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},o("calcite-icon",{icon:"chevron-down",scale:"s"})),h=o("div",{class:u.numberButtonWrapper},s,l),m=o("div",{class:u.prefix},this.prefixText),v=o("div",{class:u.suffix},this.suffixText),y=this.type==="number"?o("input",{"aria-label":O(this),autofocus:this.autofocus?!0:null,defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:this.el.enterKeyHint,inputMode:this.el.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.localizedValue}):null,x=this.type!=="number"?[o(this.childElType,{"aria-label":O(this),autofocus:this.autofocus?!0:null,class:{[u.editingEnabled]:this.editingEnabled,[u.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:this.el.enterKeyHint,inputMode:this.el.inputMode,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,name:this.name,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:this.required?!0:null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value}),this.isTextarea?o("div",{class:u.resizeIconWrapper},o("calcite-icon",{icon:"chevron-down",scale:"s"})):null]:null;return o(K,{onClick:this.inputFocusHandler,onKeyDown:this.keyDownHandler},o("div",{class:{[u.inputWrapper]:!0,[B.rtl]:t==="rtl"}},this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?l:null,this.prefixText?m:null,o("div",{class:u.wrapper},y,x,this.isClearable?i:null,this.requestedIcon?a:null,this.loading?e:null),o("div",{class:u.actionWrapper},o("slot",{name:bt.action})),this.type==="number"&&this.numberButtonType==="vertical"&&!this.readOnly?h:null,this.suffixText?v:null,this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?s:null,o(Y,{component:this})))}get el(){return this}static get watchers(){return{disabled:["disabledWatcher"],locale:["localeChanged"],max:["maxWatcher"],min:["minWatcher"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"]}}static get style(){return gt}},[1,"calcite-input",{alignment:[513],autofocus:[516],clearable:[516],disabled:[516],groupSeparator:[516,"group-separator"],hidden:[516],icon:[520],intlClear:[1,"intl-clear"],intlLoading:[1,"intl-loading"],iconFlipRtl:[516,"icon-flip-rtl"],label:[1],loading:[516],locale:[1],numberingSystem:[513,"numbering-system"],localeFormat:[4,"locale-format"],max:[514],min:[514],maxlength:[514],maxLength:[514,"max-length"],minLength:[514,"min-length"],name:[513],numberButtonType:[513,"number-button-type"],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[1537],status:[1537],step:[520],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],type:[513],value:[1025],effectiveLocale:[32],localizedValue:[32],setFocus:[64],selectText:[64]}]);function D(){if(typeof customElements>"u")return;["calcite-input","calcite-icon","calcite-progress"].forEach(e=>{switch(e){case"calcite-input":customElements.get(e)||customElements.define(e,A);break;case"calcite-icon":customElements.get(e)||Q();break;case"calcite-progress":customElements.get(e)||tt();break}})}D();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const St=A,Ct=D;export{St as CalciteInput,Ct as defineCustomElement};