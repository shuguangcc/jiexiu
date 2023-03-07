import{p as f,H as p,l as a,h as n,b as h}from"./dom-5b7af1bf.js";import{c as b,d as v}from"./conditionalSlot-e2a39862.js";import{u as y}from"./interactive-52dcf836.js";import"./observers-c77bfda3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const e={container:"container",contentContainer:"content-container",nestedContainer:"nested-container",contentContainerButton:"content-container--button",content:"content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",hasCenterContent:"has-center-content"},i={actionsStart:"actions-start",contentStart:"content-start",contentEnd:"content-end",actionsEnd:"actions-end"},g="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family)}.container *{box-sizing:border-box}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);outline-color:transparent}.content-container--button{cursor:pointer;border-style:none;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;text-align:initial}.content-container--button:hover{background-color:var(--calcite-ui-foreground-2)}.content-container--button:hover .label,.content-container--button:hover .description{color:var(--calcite-ui-text-1)}.content-container--button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.content-container--button .content-start,.content-container--button .content-end{pointer-events:none}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.has-center-content .content-start,.has-center-content .content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item-group),::slotted(calcite-list-item){padding-inline-start:0.5rem}",s=f(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.nonInteractive=!1,this.disabled=!1}componentDidRender(){y(this)}connectedCallback(){b(this)}disconnectedCallback(){v(this)}async setFocus(){var t;(t=this.focusEl)===null||t===void 0||t.focus()}renderActionsStart(){const{el:t}=this;return a(t,i.actionsStart)?n("div",{class:e.actionsStart},n("slot",{name:i.actionsStart})):null}renderActionsEnd(){const{el:t}=this;return a(t,i.actionsEnd)?n("div",{class:e.actionsEnd},n("slot",{name:i.actionsEnd})):null}renderContentStart(){const{el:t}=this;return a(t,i.contentStart)?n("div",{class:e.contentStart},n("slot",{name:i.contentStart})):null}renderContentEnd(){const{el:t}=this;return a(t,i.contentEnd)?n("div",{class:e.contentEnd},n("slot",{name:i.contentEnd})):null}renderContent(){const{label:t,description:o}=this;return t||o?n("div",{class:e.content},t?n("div",{class:e.label},t):null,o?n("div",{class:e.description},o):null):null}renderContentContainer(){const{description:t,disabled:o,label:d,nonInteractive:u}=this,c=!!d||!!t,r=[this.renderContentStart(),this.renderContent(),this.renderContentEnd()];return u?n("div",{class:{[e.contentContainer]:!0,[e.hasCenterContent]:c},ref:()=>this.focusEl=null},r):n("button",{class:{[e.contentContainer]:!0,[e.contentContainerButton]:!0,[e.hasCenterContent]:c},disabled:o,ref:m=>this.focusEl=m},r)}render(){return n(h,{role:"listitem"},n("div",{class:e.container},this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),n("div",{class:e.nestedContainer},n("slot",null)))}get el(){return this}static get style(){return g}},[1,"calcite-list-item",{nonInteractive:[516,"non-interactive"],description:[1],disabled:[516],label:[1],setFocus:[64]}]);function l(){if(typeof customElements>"u")return;["calcite-list-item"].forEach(o=>{switch(o){case"calcite-list-item":customElements.get(o)||customElements.define(o,s);break}})}l();const k=s,w=l;export{k as CalciteListItem,w as defineCustomElement};
