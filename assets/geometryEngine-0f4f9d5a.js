import{G as t}from"./geometryEngineBase-3dd302e0.js";import{hydratedAdapter as r}from"./hydrated-00dd97bc.js";import"./Extent-a1a1de42.js";import"./cast-a534ae90.js";import"./typedArrayUtil-d9bc5fbd.js";import"./string-480f3e3f.js";import"./Error-57322e92.js";import"./ensureType-25b8cc06.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-32d9c228.js";import"./Polyline-b571c705.js";function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function A(e){return t.extendedSpatialReferenceInfo(e)}function D(e,n){return t.clip(r,i(e),e,n)}function L(e,n){return t.cut(r,i(e),e,n)}function T(e,n){return t.contains(r,i(e),e,n)}function V(e,n){return t.crosses(r,i(e),e,n)}function v(e,n,a){return t.distance(r,i(e),e,n,a)}function z(e,n){return t.equals(r,i(e),e,n)}function H(e,n){return t.intersects(r,i(e),e,n)}function I(e,n){return t.touches(r,i(e),e,n)}function J(e,n){return t.within(r,i(e),e,n)}function N(e,n){return t.disjoint(r,i(e),e,n)}function O(e,n){return t.overlaps(r,i(e),e,n)}function b(e,n,a){return t.relate(r,i(e),e,n,a)}function j(e){return t.isSimple(r,i(e),e)}function q(e){return t.simplify(r,i(e),e)}function B(e,n=!1){return t.convexHull(r,i(e),e,n)}function C(e,n){return t.difference(r,i(e),e,n)}function E(e,n){return t.symmetricDifference(r,i(e),e,n)}function P(e,n){return t.intersect(r,i(e),e,n)}function G(e,n=null){return t.union(r,i(e),e,n)}function $(e,n,a,o,s,u){return t.offset(r,i(e),e,n,a,o,s,u)}function k(e,n,a,o=!1){return t.buffer(r,i(e),e,n,a,o)}function F(e,n,a,o,s,u){return t.geodesicBuffer(r,i(e),e,n,a,o,s,u)}function K(e,n,a=!0){return t.nearestCoordinate(r,i(e),e,n,a)}function M(e,n){return t.nearestVertex(r,i(e),e,n)}function Q(e,n,a,o){return t.nearestVertices(r,i(e),e,n,a,o)}function f(e){var n;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?((n=e.extent)==null?void 0:n.center)??null:null}function U(e,n,a){if(e==null)throw new c;const o=e.spatialReference;if((a=a??f(e))==null)throw new c;const s=e.constructor.fromJSON(t.rotate(e,n,a));return s.spatialReference=o,s}function W(e,n){if(e==null)throw new c;const a=e.spatialReference;if((n=n??f(e))==null)throw new c;const o=e.constructor.fromJSON(t.flipHorizontal(e,n));return o.spatialReference=a,o}function X(e,n){if(e==null)throw new c;const a=e.spatialReference;if((n=n??f(e))==null)throw new c;const o=e.constructor.fromJSON(t.flipVertical(e,n));return o.spatialReference=a,o}function Y(e,n,a,o){return t.generalize(r,i(e),e,n,a,o)}function Z(e,n,a){return t.densify(r,i(e),e,n,a)}function _(e,n,a,o=0){return t.geodesicDensify(r,i(e),e,n,a,o)}function ee(e,n){return t.planarArea(r,i(e),e,n)}function ne(e,n){return t.planarLength(r,i(e),e,n)}function te(e,n,a){return t.geodesicArea(r,i(e),e,n,a)}function re(e,n,a){return t.geodesicLength(r,i(e),e,n,a)}function ie(e,n){return t.intersectLinesToPoints(r,i(e),e,n)}function ae(e,n){t.changeDefaultSpatialReferenceTolerance(e,n)}function oe(e){t.clearDefaultSpatialReferenceTolerance(e)}class c extends Error{constructor(){super("Illegal Argument Exception")}}export{k as buffer,ae as changeDefaultSpatialReferenceTolerance,oe as clearDefaultSpatialReferenceTolerance,D as clip,T as contains,B as convexHull,V as crosses,L as cut,Z as densify,C as difference,N as disjoint,v as distance,z as equals,A as extendedSpatialReferenceInfo,W as flipHorizontal,X as flipVertical,Y as generalize,te as geodesicArea,F as geodesicBuffer,_ as geodesicDensify,re as geodesicLength,P as intersect,ie as intersectLinesToPoints,H as intersects,j as isSimple,K as nearestCoordinate,M as nearestVertex,Q as nearestVertices,$ as offset,O as overlaps,ee as planarArea,ne as planarLength,b as relate,U as rotate,q as simplify,E as symmetricDifference,I as touches,G as union,J as within};