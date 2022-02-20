/*! For license information please see size-webpack-m.js.LICENSE.txt */
(()=>{"use strict";var t={4317:t=>{var e=new Error("Cannot find module ''");throw e.code="MODULE_NOT_FOUND",e}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};var e=function(){return e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.apply(this,arguments)};function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}Object.create;function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}Object.create;const a=void 0;var i=n.n(a),s=function(t){return{isEnabled:function(e){return t.some((function(t){return!!e[t]}))}}},u={measureLayout:s(["layout","layoutId","drag"]),animation:s(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:s(["exit"]),drag:s(["drag","dragControls"]),focus:s(["whileFocus"]),hover:s(["whileHover","onHoverStart","onHoverEnd"]),tap:s(["whileTap","onTap","onTapStart","onTapCancel"]),pan:s(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:s(["whileInView","onViewportEnter","onViewportLeave"])};var c=(0,a.createContext)({strict:!1}),l=Object.keys(u),f=l.length;var d=(0,a.createContext)({transformPagePoint:function(t){return t},isStatic:!1,reducedMotion:"never"}),p=(0,a.createContext)({});var v=(0,a.createContext)(null),m="undefined"!=typeof window,y=m?a.useLayoutEffect:a.useEffect,g={current:null},h=!1;function w(){return!h&&function(){if(h=!0,"undefined"!=typeof window)if(window.matchMedia){var t=window.matchMedia("(prefers-reduced-motion)"),e=function(){return g.current=t.matches};t.addListener(e),e()}else g.current=!1}(),o((0,a.useState)(g.current),1)[0]}function b(t,e,n,r){var o,i,s=(0,a.useContext)(c),u=(0,a.useContext)(p).visualElement,l=(0,a.useContext)(v),f=(o=w(),"never"!==(i=(0,a.useContext)(d).reducedMotion)&&("always"===i||o)),m=(0,a.useRef)(void 0);r||(r=s.renderer),!m.current&&r&&(m.current=r(t,{visualState:e,parent:u,props:n,presenceId:null==l?void 0:l.id,blockInitialAnimation:!1===(null==l?void 0:l.initial),shouldReduceMotion:f}));var g=m.current;return y((function(){null==g||g.syncRender()})),(0,a.useEffect)((function(){var t;null===(t=null==g?void 0:g.animationState)||void 0===t||t.animateChanges()})),y((function(){return function(){return null==g?void 0:g.notifyUnmount()}}),[]),g}function x(t){return"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}function O(t){return"string"==typeof t||function(t){return Array.isArray(t)}(t)}function S(t,e,n,r,o){var a;return void 0===r&&(r={}),void 0===o&&(o={}),"function"==typeof e&&(e=e(null!=n?n:t.custom,r,o)),"string"==typeof e&&(e=null===(a=t.variants)||void 0===a?void 0:a[e]),"function"==typeof e&&(e=e(null!=n?n:t.custom,r,o)),e}function C(t){var e;return"function"==typeof(null===(e=t.animate)||void 0===e?void 0:e.start)||O(t.initial)||O(t.animate)||O(t.whileHover)||O(t.whileDrag)||O(t.whileTap)||O(t.whileFocus)||O(t.exit)}function E(t){var e=function(t,e){if(C(t)){var n=t.initial,r=t.animate;return{initial:!1===n||O(n)?n:void 0,animate:O(r)?r:void 0}}return!1!==t.inherit?e:{}}(t,(0,a.useContext)(p)),n=e.initial,r=e.animate;return(0,a.useMemo)((function(){return{initial:n,animate:r}}),[j(n),j(r)])}function j(t){return Array.isArray(t)?t.join(" "):t}function P(t){var e=(0,a.useRef)(null);return null===e.current&&(e.current=t()),e.current}const T=1/60*1e3,M="undefined"!=typeof performance?()=>performance.now():()=>Date.now(),V="undefined"!=typeof window?t=>window.requestAnimationFrame(t):t=>setTimeout((()=>t(M())),T);let k=!0,L=!1,R=!1;const A={delta:0,timestamp:0},D=["read","update","preRender","render","postRender"],B=D.reduce(((t,e)=>(t[e]=function(t){let e=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(t,a=!1,s=!1)=>{const u=s&&o,c=u?e:n;return a&&i.add(t),-1===c.indexOf(t)&&(c.push(t),u&&o&&(r=e.length)),t},cancel:t=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1),i.delete(t)},process:u=>{if(o)a=!0;else{if(o=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let n=0;n<r;n++){const r=e[n];r(u),i.has(r)&&(s.schedule(r),t())}o=!1,a&&(a=!1,s.process(u))}}};return s}((()=>L=!0)),t)),{}),X=(D.reduce(((t,e)=>{const n=B[e];return t[e]=(t,e=!1,r=!1)=>(L||F(),n.schedule(t,e,r)),t}),{}),D.reduce(((t,e)=>(t[e]=B[e].cancel,t)),{}),D.reduce(((t,e)=>(t[e]=()=>B[e].process(A),t)),{}),t=>B[t].process(A)),Y=t=>{L=!1,A.delta=k?T:Math.max(Math.min(t-A.timestamp,40),1),A.timestamp=t,R=!0,D.forEach(X),R=!1,L&&(k=!1,V(Y))},F=()=>{L=!0,k=!0,R||V(Y)};var H={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var I=1;var W=(0,a.createContext)({}),_=(0,a.createContext)({});var U=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}(n,e),n.prototype.getSnapshotBeforeUpdate=function(){return this.updateProps(),null},n.prototype.componentDidUpdate=function(){},n.prototype.updateProps=function(){var t=this.props,e=t.visualElement,n=t.props;e&&e.setProps(n)},n.prototype.render=function(){return this.props.children},n}(i().Component);function Z(t){var n=t.preloadedFeatures,r=t.createVisualElement,o=t.projectionNodeConstructor,i=t.useRender,s=t.useVisualState,v=t.Component;return n&&function(t){for(var e in t)null!==t[e]&&("projectionNodeConstructor"===e?u.projectionNodeConstructor=t[e]:u[e].Component=t[e])}(n),(0,a.forwardRef)((function(t,n){var y=function(t){var e,n=t.layoutId,r=null===(e=(0,a.useContext)(W))||void 0===e?void 0:e.id;return r&&void 0!==n?r+"-"+n:n}(t);t=e(e({},t),{layoutId:y});var g=(0,a.useContext)(d),h=null,w=E(t),O=g.isStatic?void 0:P((function(){if(H.hasEverUpdated)return I++})),S=s(t,g.isStatic);return!g.isStatic&&m&&(w.visualElement=b(v,S,e(e({},g),t),r),function(t,e,n,r){var o,i=e.layoutId,s=e.layout,u=e.drag,c=e.dragConstraints,l=e.layoutScroll,f=(0,a.useContext)(_);r&&n&&!(null==n?void 0:n.projection)&&(n.projection=new r(t,n.getLatestValues(),null===(o=n.parent)||void 0===o?void 0:o.projection),n.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:Boolean(u)||c&&x(c),visualElement:n,scheduleRender:function(){return n.scheduleRender()},animationType:"string"==typeof s?s:"both",initialPromotionConfig:f,layoutScroll:l}))}(O,t,w.visualElement,o||u.projectionNodeConstructor),h=function(t,n,r){var o=[];if((0,a.useContext)(c),!n)return null;for(var i=0;i<f;i++){var s=l[i],d=u[s],p=d.isEnabled,v=d.Component;p(t)&&v&&o.push(a.createElement(v,e({key:s},t,{visualElement:n})))}return o}(t,w.visualElement)),a.createElement(U,{visualElement:w.visualElement,props:e(e({},g),t)},h,a.createElement(p.Provider,{value:w},i(v,t,O,function(t,e,n){return(0,a.useCallback)((function(r){var o;r&&(null===(o=t.mount)||void 0===o||o.call(t,r)),e&&(r?e.mount(r):e.unmount()),n&&("function"==typeof n?n(r):x(n)&&(n.current=r))}),[e])}(S,w.visualElement,n),S,g.isStatic,w.visualElement)))}))}var z=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","svg","switch","symbol","text","tspan","use","view"];function N(t){return"string"==typeof t&&!t.includes("-")&&!!(z.indexOf(t)>-1||/[A-Z]/.test(t))}var K={};var $=["","X","Y","Z"],q=["transformPerspective","x","y","z"];function G(t,e){return q.indexOf(t)-q.indexOf(e)}["translate","scale","rotate","skew"].forEach((function(t){return $.forEach((function(e){return q.push(t+e)}))}));var J=new Set(q);function Q(t){return J.has(t)}var tt=new Set(["originX","originY","originZ"]);function et(t){return tt.has(t)}function nt(t,e){var n=e.layout,r=e.layoutId;return Q(t)||et(t)||(n||void 0!==r)&&(!!K[t]||"opacity"===t)}var rt=function(t){return Boolean(null!==t&&"object"==typeof t&&t.getVelocity)},ot={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function at(t){return t.startsWith("--")}var it=function(t,e){return e&&"number"==typeof t?e.transform(t):t};const st=t=>({test:e=>function(t){return"string"==typeof t}(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),ut=st("deg"),ct=st("%"),lt=st("px"),ft=(st("vh"),st("vw"),Object.assign(Object.assign({},ct),{parse:t=>ct.parse(t)/100,transform:t=>ct.transform(100*t)})),dt={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},pt=Object.assign(Object.assign({},dt),{transform:(vt=0,mt=1,t=>Math.max(Math.min(t,mt),vt))});var vt,mt;const yt=Object.assign(Object.assign({},dt),{default:1});var gt=e(e({},dt),{transform:Math.round}),ht={borderWidth:lt,borderTopWidth:lt,borderRightWidth:lt,borderBottomWidth:lt,borderLeftWidth:lt,borderRadius:lt,radius:lt,borderTopLeftRadius:lt,borderTopRightRadius:lt,borderBottomRightRadius:lt,borderBottomLeftRadius:lt,width:lt,maxWidth:lt,height:lt,maxHeight:lt,size:lt,top:lt,right:lt,bottom:lt,left:lt,padding:lt,paddingTop:lt,paddingRight:lt,paddingBottom:lt,paddingLeft:lt,margin:lt,marginTop:lt,marginRight:lt,marginBottom:lt,marginLeft:lt,rotate:ut,rotateX:ut,rotateY:ut,rotateZ:ut,scale:yt,scaleX:yt,scaleY:yt,scaleZ:yt,skew:ut,skewX:ut,skewY:ut,distance:lt,translateX:lt,translateY:lt,translateZ:lt,x:lt,y:lt,z:lt,perspective:lt,transformPerspective:lt,opacity:pt,originX:ft,originY:ft,originZ:lt,zIndex:gt,fillOpacity:pt,strokeOpacity:pt,numOctaves:gt};function wt(t,e,n,r){var o,a=t.style,i=t.vars,s=t.transform,u=t.transformKeys,c=t.transformOrigin;u.length=0;var l=!1,f=!1,d=!0;for(var p in e){var v=e[p];if(at(p))i[p]=v;else{var m=ht[p],y=it(v,m);if(Q(p)){if(l=!0,s[p]=y,u.push(p),!d)continue;v!==(null!==(o=m.default)&&void 0!==o?o:0)&&(d=!1)}else et(p)?(c[p]=y,f=!0):a[p]=y}}l?a.transform=function(t,e,n,r){var o=t.transform,a=t.transformKeys,i=e.enableHardwareAcceleration,s=void 0===i||i,u=e.allowTransformNone,c=void 0===u||u,l="";a.sort(G);for(var f=!1,d=a.length,p=0;p<d;p++){var v=a[p];l+="".concat(ot[v]||v,"(").concat(o[v],") "),"z"===v&&(f=!0)}return!f&&s?l+="translateZ(0)":l=l.trim(),r?l=r(o,n?"":l):c&&n&&(l="none"),l}(t,n,d,r):r?a.transform=r({},""):!e.transform&&a.transform&&(a.transform="none"),f&&(a.transformOrigin=function(t){var e=t.originX,n=void 0===e?"50%":e,r=t.originY,o=void 0===r?"50%":r,a=t.originZ,i=void 0===a?0:a;return"".concat(n," ").concat(o," ").concat(i)}(c))}var bt=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function xt(t,e,n){for(var r in e)rt(e[r])||nt(r,n)||(t[r]=e[r])}function Ot(t,n,r){var o={};return xt(o,t.style||{},t),Object.assign(o,function(t,n,r){var o=t.transformTemplate;return(0,a.useMemo)((function(){var t={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}};wt(t,n,{enableHardwareAcceleration:!r},o);var a=t.style;return e(e({},t.vars),a)}),[n])}(t,n,r)),t.transformValues&&(o=t.transformValues(o)),o}function St(t,e,n){var r={},o=Ot(t,e,n);return Boolean(t.drag)&&!1!==t.dragListener&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===t.drag?"none":"pan-".concat("x"===t.drag?"y":"x")),r.style=o,r}var Ct=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover","whileInView","onViewportEnter","onViewportLeave","viewport","layoutScroll"]);function Et(t){return Ct.has(t)}var jt,Pt=function(t){return!Et(t)};try{(jt=n(4317).default)&&(Pt=function(t){return t.startsWith("on")?!Et(t):jt(t)})}catch(t){}function Tt(t,e,n){return"string"==typeof t?t:lt.transform(e+n*t)}var Mt={offset:"stroke-dashoffset",array:"stroke-dasharray"},Vt={offset:"strokeDashoffset",array:"strokeDasharray"};function kt(t,e,n,o){var a=e.attrX,i=e.attrY,s=e.originX,u=e.originY,c=e.pathLength,l=e.pathSpacing,f=void 0===l?1:l,d=e.pathOffset,p=void 0===d?0:d;wt(t,r(e,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]),n,o),t.attrs=t.style,t.style={};var v=t.attrs,m=t.style,y=t.dimensions;v.transform&&(y&&(m.transform=v.transform),delete v.transform),y&&(void 0!==s||void 0!==u||m.transform)&&(m.transformOrigin=function(t,e,n){var r=Tt(e,t.x,t.width),o=Tt(n,t.y,t.height);return"".concat(r," ").concat(o)}(y,void 0!==s?s:.5,void 0!==u?u:.5)),void 0!==a&&(v.x=a),void 0!==i&&(v.y=i),void 0!==c&&function(t,e,n,r,o){void 0===n&&(n=1),void 0===r&&(r=0),void 0===o&&(o=!0),t.pathLength=1;var a=o?Mt:Vt;t[a.offset]=lt.transform(-r);var i=lt.transform(e),s=lt.transform(n);t[a.array]="".concat(i," ").concat(s)}(v,c,f,p,!1)}var Lt=function(){return e(e({},{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}),{attrs:{}})};function Rt(t,n){var r=(0,a.useMemo)((function(){var r=Lt();return kt(r,n,{enableHardwareAcceleration:!1},t.transformTemplate),e(e({},r.attrs),{style:e({},r.style)})}),[n]);if(t.style){var o={};xt(o,t.style,t),r.style=e(e({},o),r.style)}return r}function At(t){void 0===t&&(t=!1);return function(n,r,o,i,s,u){var c=s.latestValues,l=(N(n)?Rt:St)(r,c,u),f=function(t,e,n){var r={};for(var o in t)(Pt(o)||!0===n&&Et(o)||!e&&!Et(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}(r,"string"==typeof n,t),d=e(e(e({},f),l),{ref:i});return o&&(d["data-projection-id"]=o),(0,a.createElement)(n,d)}}var Dt=/([a-z])([A-Z])/g;var Bt=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function Xt(t,e){for(var n in function(t,e,n,r){var o=e.style,a=e.vars;for(var i in Object.assign(t.style,o,r&&r.getProjectionStyles(n)),a)t.style.setProperty(i,a[i])}(t,e),e.attrs)t.setAttribute(Bt.has(n)?n:n.replace(Dt,"$1-$2").toLowerCase(),e.attrs[n])}function Yt(t){var e=t.style,n={};for(var r in e)(rt(e[r])||nt(r,t))&&(n[r]=e[r]);return n}function Ft(t){var e,n=rt(t)?t.get():t;return e=n,Boolean(e&&"object"==typeof e&&e.mix&&e.toValue)?n.toValue():n}function Ht(t,e,n,r){var o=t.scrapeMotionValuesFromProps,a=t.createRenderState,i=t.onMount,s={latestValues:Wt(e,n,r,o),renderState:a()};return i&&(s.mount=function(t){return i(e,t,s)}),s}var It=function(t){return function(e,n){var r=(0,a.useContext)(p),o=(0,a.useContext)(v);return n?Ht(t,e,r,o):P((function(){return Ht(t,e,r,o)}))}};function Wt(t,e,n,o){var a={},i=!1===(null==n?void 0:n.initial),s=o(t);for(var u in s)a[u]=Ft(s[u]);var c=t.initial,l=t.animate,f=C(t),d=function(t){return Boolean(C(t)||t.variants)}(t);e&&d&&!f&&!1!==t.inherit&&(null!=c||(c=e.initial),null!=l||(l=e.animate));var p,v=i||!1===c,m=v?l:c;!m||"boolean"==typeof m||"object"==typeof(p=m)&&"function"==typeof p.start||(Array.isArray(m)?m:[m]).forEach((function(e){var n=S(t,e);if(n){var o=n.transitionEnd,i=(n.transition,r(n,["transitionEnd","transition"]));for(var s in i){var u=i[s];if(Array.isArray(u))u=u[v?u.length-1:0];null!==u&&(a[s]=u)}for(var s in o)a[s]=o[s]}}));return a}var _t={useVisualState:It({scrapeMotionValuesFromProps:function(t){var e=Yt(t);for(var n in t){if(rt(t[n]))e["x"===n||"y"===n?"attr"+n.toUpperCase():n]=t[n]}return e},createRenderState:Lt,onMount:function(t,e,n){var r=n.renderState,o=n.latestValues;try{r.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(t){r.dimensions={x:0,y:0,width:0,height:0}}kt(r,o,{enableHardwareAcceleration:!1},t.transformTemplate),Xt(e,r)}})},Ut={useVisualState:It({scrapeMotionValuesFromProps:Yt,createRenderState:bt})};!function(t){function e(e,n){return void 0===n&&(n={}),Z(t(e,n))}if("undefined"==typeof Proxy)return e;var n=new Map;new Proxy(e,{get:function(t,r){return n.has(r)||n.set(r,e(r)),n.get(r)}})}((function(t,n,r,o,a){var i=n.forwardMotionProps,s=void 0!==i&&i,u=N(t)?_t:Ut;return e(e({},u),{preloadedFeatures:r,useRender:At(s),createVisualElement:o,projectionNodeConstructor:a,Component:t})}))})()})();