(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{775:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(7401).A)("AlignJustify",[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]])},6046:(e,t,n)=>{"use strict";var r=n(6658);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},9723:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_499217",variable:"__variable_499217"}},7744:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_57c236",variable:"__variable_57c236"}},4223:(e,t,n)=>{"use strict";n.d(t,{bm:()=>e4,UC:()=>e7,VY:()=>e5,hJ:()=>e3,ZL:()=>e2,bL:()=>e0,hE:()=>e6,l9:()=>e1});var r,o,a=n(2115),i=n(3610),c=n(8068),l=n(8166),u=n(7668),s=n(1488),d=n(9674),f=n(3360),m=n(1524),p=n(5155),v="focusScope.autoFocusOnMount",h="focusScope.autoFocusOnUnmount",g={bubbles:!1,cancelable:!0},y=a.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...l}=e,[u,s]=a.useState(null),d=(0,m.c)(o),y=(0,m.c)(i),S=a.useRef(null),O=(0,c.s)(t,e=>s(e)),x=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(r){let e=function(e){if(x.paused||!u)return;let t=e.target;u.contains(t)?S.current=t:E(S.current,{select:!0})},t=function(e){if(x.paused||!u)return;let t=e.relatedTarget;null===t||u.contains(t)||E(S.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&E(u)});return u&&n.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,u,x.paused]),a.useEffect(()=>{if(u){C.add(x);let e=document.activeElement;if(!u.contains(e)){let t=new CustomEvent(v,g);u.addEventListener(v,d),u.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(E(r,{select:t}),document.activeElement!==n)return}(b(u).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&E(u))}return()=>{u.removeEventListener(v,d),setTimeout(()=>{let t=new CustomEvent(h,g);u.addEventListener(h,y),u.dispatchEvent(t),t.defaultPrevented||E(null!=e?e:document.body,{select:!0}),u.removeEventListener(h,y),C.remove(x)},0)}}},[u,d,y,x]);let k=a.useCallback(e=>{if(!n&&!r||x.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=b(e);return[w(t,e),w(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&E(a,{select:!0})):(e.preventDefault(),n&&E(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,x.paused]);return(0,p.jsx)(f.sG.div,{tabIndex:-1,...l,ref:O,onKeyDown:k})});function b(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function w(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function E(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}y.displayName="FocusScope";var C=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=S(e,t)).unshift(t)},remove(t){var n;null===(n=(e=S(e,t))[0])||void 0===n||n.resume()}}}();function S(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var O=n(7323),x=n(7028),k=0;function j(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function A(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create;var P=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),R="width-before-scroll-bar";function T(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var M="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,D=new WeakMap;function I(e){return e}var L=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=I),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=N({async:!0,ssr:!1},e),o}(),_=function(){},F=a.forwardRef(function(e,t){var n,r,o,i,c=a.useRef(null),l=a.useState({onScrollCapture:_,onWheelCapture:_,onTouchMoveCapture:_}),u=l[0],s=l[1],d=e.forwardProps,f=e.children,m=e.className,p=e.removeScrollBar,v=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,w=e.allowPinchZoom,E=e.as,C=e.gapMode,S=A(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),O=(n=[c,t],r=function(e){return n.forEach(function(t){return T(t,e)})},(o=(0,a.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,i=o.facade,M(function(){var e=D.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||T(e,null)}),r.forEach(function(e){t.has(e)||T(e,o)})}D.set(i,n)},[n]),i),x=N(N({},S),u);return a.createElement(a.Fragment,null,v&&a.createElement(g,{sideCar:L,removeScrollBar:p,shards:h,noIsolation:y,inert:b,setCallbacks:s,allowPinchZoom:!!w,lockRef:c,gapMode:C}),d?a.cloneElement(a.Children.only(f),N(N({},x),{ref:O})):a.createElement(void 0===E?"div":E,N({},x,{className:m,ref:O}),f))});F.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},F.classNames={fullWidth:R,zeroRight:P};var W=function(e){var t=e.sideCar,n=A(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return a.createElement(r,N({},n))};W.isSideCarExport=!0;var B=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},K=function(){var e=B();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},X=function(){var e=K();return function(t){return e(t.styles,t.dynamic),null}},Y={left:0,top:0,right:0,gap:0},H=function(e){return parseInt(e||"",10)||0},Z=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[H(n),H(r),H(o)]},q=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return Y;var t=Z(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},z=X(),G="data-scroll-locked",U=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,c=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body[").concat(G,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(P," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(R," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(P," .").concat(P," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(R," .").concat(R," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(G,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(c,"px;\n  }\n")},J=function(){var e=parseInt(document.body.getAttribute(G)||"0",10);return isFinite(e)?e:0},V=function(){a.useEffect(function(){return document.body.setAttribute(G,(J()+1).toString()),function(){var e=J()-1;e<=0?document.body.removeAttribute(G):document.body.setAttribute(G,e.toString())}},[])},Q=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;V();var i=a.useMemo(function(){return q(o)},[o]);return a.createElement(z,{styles:U(i,!t,o,n?"":"!important")})},$=!1;if("undefined"!=typeof window)try{var ee=Object.defineProperty({},"passive",{get:function(){return $=!0,!0}});window.addEventListener("test",ee,ee),window.removeEventListener("test",ee,ee)}catch(e){$=!1}var et=!!$&&{passive:!1},en=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},er=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),eo(e,r)){var o=ea(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},eo=function(e,t){return"v"===e?en(t,"overflowY"):en(t,"overflowX")},ea=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ei=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),c=i*r,l=n.target,u=t.contains(l),s=!1,d=c>0,f=0,m=0;do{var p=ea(e,l),v=p[0],h=p[1]-p[2]-i*v;(v||h)&&eo(e,l)&&(f+=h,m+=v),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&c>f)?s=!0:!d&&(o&&1>Math.abs(m)||!o&&-c>m)&&(s=!0),s},ec=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},el=function(e){return[e.deltaX,e.deltaY]},eu=function(e){return e&&"current"in e?e.current:e},es=0,ed=[];let ef=(r=function(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(es++)[0],i=a.useState(X)[0],c=a.useRef(e);a.useEffect(function(){c.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eu),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=a.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!c.current.allowPinchZoom;var o,a=ec(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-a[0],u="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=er(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=er(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||u)&&(r.current=o),!o)return!0;var m=r.current||o;return ei(m,t,e,"h"===m?l:u,!0)},[]),u=a.useCallback(function(e){if(ed.length&&ed[ed.length-1]===i){var n="deltaY"in e?el(e):ec(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(eu).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=a.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=a.useCallback(function(e){n.current=ec(e),r.current=void 0},[]),f=a.useCallback(function(t){s(t.type,el(t),t.target,l(t,e.lockRef.current))},[]),m=a.useCallback(function(t){s(t.type,ec(t),t.target,l(t,e.lockRef.current))},[]);a.useEffect(function(){return ed.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:m}),document.addEventListener("wheel",u,et),document.addEventListener("touchmove",u,et),document.addEventListener("touchstart",d,et),function(){ed=ed.filter(function(e){return e!==i}),document.removeEventListener("wheel",u,et),document.removeEventListener("touchmove",u,et),document.removeEventListener("touchstart",d,et)}},[]);var p=e.removeScrollBar,v=e.inert;return a.createElement(a.Fragment,null,v?a.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?a.createElement(Q,{gapMode:e.gapMode}):null)},L.useMedium(r),W);var em=a.forwardRef(function(e,t){return a.createElement(F,N({},e,{ref:t,sideCar:ef}))});em.classNames=F.classNames;var ep=new WeakMap,ev=new WeakMap,eh={},eg=0,ey=function(e){return e&&(e.host||ey(e.parentNode))},eb=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=ey(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eh[n]||(eh[n]=new WeakMap);var a=eh[n],i=[],c=new Set,l=new Set(o),u=function(e){!e||c.has(e)||(c.add(e),u(e.parentNode))};o.forEach(u);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(c.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(ep.get(e)||0)+1,u=(a.get(e)||0)+1;ep.set(e,l),a.set(e,u),i.push(e),1===l&&o&&ev.set(e,!0),1===u&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),c.clear(),eg++,function(){i.forEach(function(e){var t=ep.get(e)-1,o=a.get(e)-1;ep.set(e,t),a.set(e,o),t||(ev.has(e)||e.removeAttribute(r),ev.delete(e)),o||e.removeAttribute(n)}),--eg||(ep=new WeakMap,ep=new WeakMap,ev=new WeakMap,eh={})}},ew=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),eb(o,a,n,"aria-hidden")):function(){return null}},eE=n(2317),eC="Dialog",[eS,eO]=(0,l.A)(eC),[ex,ek]=eS(eC),ej=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:c=!0}=e,l=a.useRef(null),d=a.useRef(null),[f=!1,m]=(0,s.i)({prop:r,defaultProp:o,onChange:i});return(0,p.jsx)(ex,{scope:t,triggerRef:l,contentRef:d,contentId:(0,u.B)(),titleId:(0,u.B)(),descriptionId:(0,u.B)(),open:f,onOpenChange:m,onOpenToggle:a.useCallback(()=>m(e=>!e),[m]),modal:c,children:n})};ej.displayName=eC;var eN="DialogTrigger",eA=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eN,n),a=(0,c.s)(t,o.triggerRef);return(0,p.jsx)(f.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eG(o.open),...r,ref:a,onClick:(0,i.m)(e.onClick,o.onOpenToggle)})});eA.displayName=eN;var eP="DialogPortal",[eR,eT]=eS(eP,{forceMount:void 0}),eM=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=ek(eP,t);return(0,p.jsx)(eR,{scope:t,forceMount:n,children:a.Children.map(r,e=>(0,p.jsx)(x.C,{present:n||i.open,children:(0,p.jsx)(O.Z,{asChild:!0,container:o,children:e})}))})};eM.displayName=eP;var eD="DialogOverlay",eI=a.forwardRef((e,t)=>{let n=eT(eD,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ek(eD,e.__scopeDialog);return a.modal?(0,p.jsx)(x.C,{present:r||a.open,children:(0,p.jsx)(eL,{...o,ref:t})}):null});eI.displayName=eD;var eL=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eD,n);return(0,p.jsx)(em,{as:eE.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,p.jsx)(f.sG.div,{"data-state":eG(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),e_="DialogContent",eF=a.forwardRef((e,t)=>{let n=eT(e_,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ek(e_,e.__scopeDialog);return(0,p.jsx)(x.C,{present:r||a.open,children:a.modal?(0,p.jsx)(eW,{...o,ref:t}):(0,p.jsx)(eB,{...o,ref:t})})});eF.displayName=e_;var eW=a.forwardRef((e,t)=>{let n=ek(e_,e.__scopeDialog),r=a.useRef(null),o=(0,c.s)(t,n.contentRef,r);return a.useEffect(()=>{let e=r.current;if(e)return ew(e)},[]),(0,p.jsx)(eK,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,i.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,i.m)(e.onFocusOutside,e=>e.preventDefault())})}),eB=a.forwardRef((e,t)=>{let n=ek(e_,e.__scopeDialog),r=a.useRef(!1),o=a.useRef(!1);return(0,p.jsx)(eK,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let c=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(c))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eK=a.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...l}=e,u=ek(e_,n),s=a.useRef(null),f=(0,c.s)(t,s);return a.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:j()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:j()),k++,()=>{1===k&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),k--}},[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,p.jsx)(d.qW,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":eG(u.open),...l,ref:f,onDismiss:()=>u.onOpenChange(!1)})}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(eQ,{titleId:u.titleId}),(0,p.jsx)(e$,{contentRef:s,descriptionId:u.descriptionId})]})]})}),eX="DialogTitle",eY=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eX,n);return(0,p.jsx)(f.sG.h2,{id:o.titleId,...r,ref:t})});eY.displayName=eX;var eH="DialogDescription",eZ=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eH,n);return(0,p.jsx)(f.sG.p,{id:o.descriptionId,...r,ref:t})});eZ.displayName=eH;var eq="DialogClose",ez=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ek(eq,n);return(0,p.jsx)(f.sG.button,{type:"button",...r,ref:t,onClick:(0,i.m)(e.onClick,()=>o.onOpenChange(!1))})});function eG(e){return e?"open":"closed"}ez.displayName=eq;var eU="DialogTitleWarning",[eJ,eV]=(0,l.q)(eU,{contentName:e_,titleName:eX,docsSlug:"dialog"}),eQ=e=>{let{titleId:t}=e,n=eV(eU),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return a.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e$=e=>{let{contentRef:t,descriptionId:n}=e,r=eV("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return a.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},e0=ej,e1=eA,e2=eM,e3=eI,e7=eF,e6=eY,e5=eZ,e4=ez},7113:(e,t,n)=>{"use strict";n.d(t,{D:()=>s,N:()=>d});var r=n(2115),o=(e,t,n,r,o,a,i,c)=>{let l=document.documentElement,u=["light","dark"];function s(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?o.map(e=>a[e]||e):o;n?(l.classList.remove(...r),l.classList.add(t)):l.setAttribute(e,t)}),c&&u.includes(t)&&(l.style.colorScheme=t)}if(r)s(r);else try{let e=localStorage.getItem(t)||n,r=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;s(r)}catch(e){}},a=["light","dark"],i="(prefers-color-scheme: dark)",c="undefined"==typeof window,l=r.createContext(void 0),u={setTheme:e=>{},themes:[]},s=()=>{var e;return null!=(e=r.useContext(l))?e:u},d=e=>r.useContext(l)?r.createElement(r.Fragment,null,e.children):r.createElement(m,{...e}),f=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:c=!0,storageKey:u="theme",themes:s=f,defaultTheme:d=o?"system":"light",attribute:m="data-theme",value:y,children:b,nonce:w,scriptProps:E}=e,[C,S]=r.useState(()=>v(u,d)),[O,x]=r.useState(()=>v(u)),k=y?Object.values(y):s,j=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=g());let r=y?y[t]:t,i=n?h(w):null,l=document.documentElement,u=e=>{"class"===e?(l.classList.remove(...k),r&&l.classList.add(r)):e.startsWith("data-")&&(r?l.setAttribute(e,r):l.removeAttribute(e))};if(Array.isArray(m)?m.forEach(u):u(m),c){let e=a.includes(d)?d:null,n=a.includes(t)?t:e;l.style.colorScheme=n}null==i||i()},[w]),N=r.useCallback(e=>{let t="function"==typeof e?e(C):e;S(t);try{localStorage.setItem(u,t)}catch(e){}},[C]),A=r.useCallback(e=>{x(g(e)),"system"===C&&o&&!t&&j("system")},[C,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),r.useEffect(()=>{let e=e=>{e.key===u&&N(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),r.useEffect(()=>{j(null!=t?t:C)},[t,C]);let P=r.useMemo(()=>({theme:C,setTheme:N,forcedTheme:t,resolvedTheme:"system"===C?O:C,themes:o?[...s,"system"]:s,systemTheme:o?O:void 0}),[C,N,t,O,o,s]);return r.createElement(l.Provider,{value:P},r.createElement(p,{forcedTheme:t,storageKey:u,attribute:m,enableSystem:o,enableColorScheme:c,defaultTheme:d,value:y,themes:s,nonce:w,scriptProps:E}),b)},p=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:i,enableColorScheme:c,defaultTheme:l,value:u,themes:s,nonce:d,scriptProps:f}=e,m=JSON.stringify([a,n,l,t,s,u,i,c]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(m,")")}})}),v=(e,t)=>{let n;if(!c){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},g=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")},3435:(e,t,n)=>{"use strict";n.d(t,{k5:()=>s});var r=n(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e){return t=>r.createElement(d,c({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,u({key:n},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var n,{attr:o,size:a,title:l}=e,s=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,i),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,e=>t(e)):t(o)}}}]);