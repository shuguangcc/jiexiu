import{p as l,H as d,c as h,h as n}from"./dom-5b7af1bf.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const p="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion--minimal{--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}",a=l(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionChange=h(this,"calciteInternalAccordionChange",6),this.appearance="solid",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multi",this.items=[],this.sorted=!1,this.sortItems=t=>t.sort((i,e)=>i.position-e.position).map(i=>i.item)}componentDidLoad(){this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){const t=this.appearance==="transparent",i=this.appearance==="minimal";return n("div",{class:{"accordion--transparent":t,"accordion--minimal":i,accordion:!t&&!i}},n("slot",null))}calciteInternalAccordionItemKeyEvent(t){const i=t.detail.item,e=t.detail.parent;if(this.el===e){const{key:s}=i,c=t.target,r=this.itemIndex(c)===0,m=this.itemIndex(c)===this.items.length-1;switch(s){case"ArrowDown":m?this.focusFirstItem():this.focusNextItem(c);break;case"ArrowUp":r?this.focusLastItem():this.focusPrevItem(c);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem();break}}t.stopPropagation()}registerCalciteAccordionItem(t){const i={item:t.target,parent:t.detail.parent,position:t.detail.position};this.el===i.parent&&this.items.push(i),t.stopPropagation()}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.calciteInternalAccordionChange.emit({requestedAccordionItem:this.requestedAccordionItem}),t.stopPropagation()}focusFirstItem(){const t=this.items[0];this.focusElement(t)}focusLastItem(){const t=this.items[this.items.length-1];this.focusElement(t)}focusNextItem(t){const i=this.itemIndex(t),e=this.items[i+1]||this.items[0];this.focusElement(e)}focusPrevItem(t){const i=this.itemIndex(t),e=this.items[i-1]||this.items[this.items.length-1];this.focusElement(e)}itemIndex(t){return this.items.indexOf(t)}focusElement(t){const i=t;i==null||i.focus()}get el(){return this}static get style(){return p}},[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalAccordionItemKeyEvent","calciteInternalAccordionItemKeyEvent"],[0,"calciteInternalAccordionItemRegister","registerCalciteAccordionItem"],[0,"calciteInternalAccordionItemSelect","updateActiveItemOnChange"]]]);function o(){if(typeof customElements>"u")return;["calcite-accordion"].forEach(i=>{switch(i){case"calcite-accordion":customElements.get(i)||customElements.define(i,a);break}})}o();const f=a,g=o;export{f as CalciteAccordion,g as defineCustomElement};