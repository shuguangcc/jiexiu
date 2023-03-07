import{e as g,y as _,n as L,m as G}from"./cast-a534ae90.js";import{s as Q}from"./typedArrayUtil-d9bc5fbd.js";import"./ensureType-25b8cc06.js";import{m as X,b as $}from"./vec2-ab9f47bf.js";import{l as W,a as R}from"./TileStore-8f580dbf.js";import{u as Y,R as j}from"./aaBoundingRect-b340cf8c.js";import{e as D}from"./TileKey-9cae9369.js";function H(o,e){return o.length=0,e.forEach(i=>o.push(i)),o}const N=new Set,S=[],P=new Map,B=[0,0];let w=class extends G{constructor(e){super(e),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null}initialize(){const{concurrency:e,process:i}=this;this._queue=new W({concurrency:e,process:(s,t)=>{const r=this._keyToItem.get(s);return i(r,{signal:t})},peeker:s=>s.values().next().value})}destroy(){this.clear(),this._queue=Q(this._queue)}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}get updating(){return this.length>0||this.onGoingCount>0}abort(e){const i=typeof e=="string"?e:e.id;this._queue.abort(i)}clear(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")}has(e){return typeof e=="string"?this._keyToItem.has(e):this._keyToItem.has(e.id)}isOngoing(e){const i=typeof e=="string"?e:e.id;return this.has(i)&&this._queue.isOngoing(i)}pause(){this._queue.pause()}push(e,i){const s=e.key.id+"-"+i;if(this.has(s))return this.get(s);const t=this._queue.push(s),r=()=>{this._keyToItem.delete(s),this.notifyChange("updating")};return this._keyToItem.set(s,e),t.then(r,r),this.notifyChange("updating"),t}reset(){this._queue.reset(),this.notifyChange("updating")}resume(){this._queue.resume()}_peekByScaleFirst(e){if(!this.state)return e.values().next().value;const i=this.tileInfoView;let s=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;e.forEach(n=>{const l=this._keyToItem.get(n),u=this.tileInfoView.getTileScale(l.key);P.has(u)||(P.set(u,[]),s=Math.max(u,s),t=Math.min(u,t)),P.get(u).push(l.key),N.add(u)});let r=this.state.scale;P.has(r)||(H(S,N),S.sort((n,l)=>n-l),r=S.reduce((n,l)=>Math.abs(l-r)<Math.abs(n-r)?l:n,S[0])),r=Math.min(r,s),r=Math.max(r,t);const d=P.get(r),a=i.getClosestInfoForScale(r),c=a.getColumnForX(this.state.center[0]),h=a.getRowForY(this.state.center[1]);return d.sort((n,l)=>{const u=a.denormalizeCol(n.col,n.world),m=a.denormalizeCol(l.col,l.world);return Math.sqrt((c-u)*(c-u)+(h-n.row)*(h-n.row))-Math.sqrt((c-m)*(c-m)+(h-l.row)*(h-l.row))}),N.clear(),P.clear(),d[0].id}_peekByCenterFirst(e){if(!this.state)return e.values().next().value;const i=this.tileInfoView,s=this.state.center;let t,r=Number.POSITIVE_INFINITY;return e.forEach(d=>{const a=this._keyToItem.get(d);i.getTileCoords(B,a.key);const c=X(B,s);c<r&&(r=c,t=a.key)}),t.id}};g([_({constructOnly:!0})],w.prototype,"concurrency",void 0),g([_({constructOnly:!0})],w.prototype,"process",void 0),g([_()],w.prototype,"state",void 0),g([_({constructOnly:!0})],w.prototype,"strategy",void 0),g([_({constructOnly:!0})],w.prototype,"tileInfoView",void 0),g([_({readOnly:!0})],w.prototype,"updating",null),w=g([L("esri.views.2d.tiling.PagedTileQueue")],w);function J(o,e){return o.length=0,e.forEach(i=>o.push(i)),o}const E=new Set,V=[],q=new Map,A=[0,0];let v=class extends G{constructor(o){super(o),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null}initialize(){const{concurrency:o,process:e,strategy:i}=this;this._queue=new W({concurrency:o,process:(s,t)=>{const r=this._keyToItem.get(s);return e(r,{signal:t})},peeker:i==="scale-first"?s=>this._peekByScaleFirst(s):s=>this._peekByCenterFirst(s)})}destroy(){this.clear(),this._queue=Q(this._queue)}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}get updating(){return this.length>0||this.onGoingCount>0}abort(o){const e=typeof o=="string"?o:o.id;this._queue.abort(e)}clear(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")}has(o){return typeof o=="string"?this._keyToItem.has(o):this._keyToItem.has(o.id)}isOngoing(o){const e=typeof o=="string"?o:o.id;return this.has(e)&&this._queue.isOngoing(e)}pause(){this._queue.pause()}push(o){const e=o.key.id;if(this._queue.has(e))return this._queue.get(e);const i=this._queue.push(e),s=()=>{this._keyToItem.delete(e),this.notifyChange("updating")};return this._keyToItem.set(e,o),i.then(s,s),this.notifyChange("updating"),i}reset(){this._queue.reset()}resume(){this._queue.resume()}_peekByScaleFirst(o){if(!this.state)return o.values().next().value;const e=this.tileInfoView;let i=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY;o.forEach(h=>{const n=this._keyToItem.get(h),l=this.tileInfoView.getTileScale(n.key);q.has(l)||(q.set(l,[]),i=Math.max(l,i),s=Math.min(l,s)),q.get(l).push(n.key),E.add(l)});let t=this.state.scale;q.has(t)||(J(V,E),V.sort((h,n)=>h-n),t=V.reduce((h,n)=>Math.abs(n-t)<Math.abs(h-t)?n:h,V[0])),t=Math.min(t,i),t=Math.max(t,s);const r=q.get(t),d=e.getClosestInfoForScale(t),a=d.getColumnForX(this.state.center[0]),c=d.getRowForY(this.state.center[1]);return r.sort((h,n)=>{const l=d.denormalizeCol(h.col,h.world),u=d.denormalizeCol(n.col,n.world);return Math.sqrt((a-l)*(a-l)+(c-h.row)*(c-h.row))-Math.sqrt((a-u)*(a-u)+(c-n.row)*(c-n.row))}),E.clear(),q.clear(),r[0].id}_peekByCenterFirst(o){if(!this.state)return o.values().next().value;const e=this.tileInfoView,i=this.state.center;let s,t=Number.POSITIVE_INFINITY;return o.forEach(r=>{const d=this._keyToItem.get(r);e.getTileCoords(A,d.key);const a=X(A,i);a<t&&(t=a,s=d.key)}),s.id}};g([_({constructOnly:!0})],v.prototype,"concurrency",void 0),g([_({constructOnly:!0})],v.prototype,"process",void 0),g([_()],v.prototype,"state",void 0),g([_({constructOnly:!0})],v.prototype,"strategy",void 0),g([_({constructOnly:!0})],v.prototype,"tileInfoView",void 0),g([_({readOnly:!0})],v.prototype,"updating",null),v=g([L("esri.views.2d.tiling.TileQueue")],v);const le=v;class U{constructor(e,i,s){this.maxSize=e,this._tileInfoView=i,this._removedFunc=s,this._tilePerId=new Map,this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const i=this._tilePerId.get(e);if(!i)return;const s=i.key.level,t=this._tileKeysPerLevel[s];K(this._tilePerId,e);for(let r=0;r<t.length;r++)if(t[r].id===e){t.splice(r,1);break}return i.visible=!0,i}add(e){e.visible=!1;const i=e.key,s=i.id;if(this._tilePerId.has(s))return;this._tilePerId.set(s,e);const t=i.level;this._tileKeysPerLevel[t]||(this._tileKeysPerLevel[t]=[]),this._tileKeysPerLevel[t].push(i)}prune(e,i,s){let t=this._tilePerId.size;if(t<=this.maxSize)return;let r=this._tileKeysPerLevel.length-1;for(;t>this.maxSize&&r>=0;)r!==e&&(t=this._pruneAroundCenterTile(t,i,s,r)),r--;t>this.maxSize&&(t=this._pruneAroundCenterTile(t,i,s,e))}_pruneAroundCenterTile(e,i,s,t){const r=this._tileKeysPerLevel[t];if(!r||r.length===0)return e;const{size:d,origin:a}=this._tileInfoView.tileInfo,c=s*d[0],h=s*d[1],n=[0,0],l=[0,0];for(r.sort((u,m)=>(n[0]=a.x+c*(u.col+.5),n[1]=a.y-h*(u.row+.5),l[0]=a.x+c*(m.col+.5),l[1]=a.y-h*(m.row+.5),$(n,i)-$(l,i)));r.length>0;){const u=r.pop();if(this._removeTile(u.id),--e===this.maxSize)break}return e}_removeTile(e){const i=this._tilePerId.get(e);this._removedFunc&&i&&this._removedFunc(i),K(this._tilePerId,e)}}function K(o,e){o.delete(e)}const C=new D(0,0,0,0),f=new Map,x=[],F=[];class he{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=e.resampling==null||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),e.buffer!=null&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new U(e.cacheSize,this.tileInfoView,i=>{this.releaseTile(i)}))}destroy(){this.tileIndex.clear()}update(e){const{resampling:i,tileIndex:s}=this,t=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(F.length=0,x.length=0,f.clear(),!t)return;const{minScale:r,maxScale:d}=this.tileInfoView.tileInfo,{spans:a,lodInfo:c}=t,{level:h}=c,{scale:n,center:l,resolution:u}=e.state,m=!e.stationary&&n>this._previousScale;if(this._previousScale=n,this.tiles.length=0,!i&&(n>r||n<d))return this.tiles.length=0,f.clear(),s.forEach(y=>{this.releaseTile(y)}),s.clear(),F.length=0,x.length=0,f.clear(),R.pool.release(t),!0;s.forEach(y=>y.visible=!0);let z=0,M=0;if(a.length>0)for(const{row:y,colFrom:p,colTo:b}of a)for(let k=p;k<=b;k++){z++;const I=C.set(h,y,c.normalizeCol(k),c.getWorldForColumn(k)).id;if(s.has(I)){const T=s.get(I);T.isReady?(f.set(I,T),M++):m||this._addParentTile(I,f)}else{let T;if(this._tileCache&&this._tileCache.has(I)){if(T=this._tileCache.pop(I),this.tileIndex.set(I,T),T.isReady){f.set(I,T),M++;continue}}else T=this.acquireTile(C),this.tileIndex.set(I,T);m||this._addParentTile(I,f)}}const O=M===z;s.forEach((y,p)=>{if(C.set(p),f.has(p))return;const b=this.tileInfoView.intersects(t,C),k=this.cachePolicy==="purge"?C.level!==h:C.level>h;!b||!m&&O?!k&&b||x.push(p):y.isReady?k&&this.cachePolicy==="purge"&&this._hasReadyAncestor(C,h)?x.push(p):F.push(p):k&&x.push(p)});for(const y of F){const p=s.get(y);p&&p.isReady&&f.set(y,p)}for(const y of x){const p=s.get(y);this._tileCache?this._tileCache.add(p):this.releaseTile(p),s.delete(y)}return f.forEach(y=>this.tiles.push(y)),s.forEach(y=>{f.has(y.key.id)||(y.visible=!1)}),this._tileCache&&this._tileCache.prune(h,l,u),R.pool.release(t),f.clear(),O}clear(e=!0){const{tileIndex:i}=this;e&&i.forEach(s=>{this.releaseTile(s)}),i.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,i){let s=e,t=null;for(;s=this.tileInfoView.getTileParentId(s),s;)if(this.tileIndex.has(s)){if(t=this.tileIndex.get(s),t&&t.isReady){i.has(t.key.id)||i.set(t.key.id,t);break}}else if(this._tileCache&&this._tileCache.has(s)&&(t=this._tileCache.pop(s),this.tileIndex.set(s,t),t&&t.isReady)){i.has(t.key.id)||i.set(t.key.id,t);break}}_hasReadyAncestor(e,i){const s=Y();this.tileInfoView.getTileBounds(s,e,!0);for(const t of this.tileIndex.values())if(t.isReady&&t.key.level>=i&&t.key.level<e.level){const r=Y();if(this.tileInfoView.getTileBounds(r,t.key,!0),j(r,s))return!0}return!1}}export{he as r,le as y};
