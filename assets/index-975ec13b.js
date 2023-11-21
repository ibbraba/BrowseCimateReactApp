function F6(n,r){for(var a=0;a<r.length;a++){const c=r[a];if(typeof c!="string"&&!Array.isArray(c)){for(const u in c)if(u!=="default"&&!(u in n)){const p=Object.getOwnPropertyDescriptor(c,u);p&&Object.defineProperty(n,u,p.get?p:{enumerable:!0,get:()=>c[u]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(u){if(u.ep)return;u.ep=!0;const p=a(u);fetch(u.href,p)}})();var Ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mT={exports:{}},vf={},gT={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=Symbol.for("react.element"),V6=Symbol.for("react.portal"),U6=Symbol.for("react.fragment"),H6=Symbol.for("react.strict_mode"),$6=Symbol.for("react.profiler"),W6=Symbol.for("react.provider"),q6=Symbol.for("react.context"),G6=Symbol.for("react.forward_ref"),K6=Symbol.for("react.suspense"),Y6=Symbol.for("react.memo"),Q6=Symbol.for("react.lazy"),U2=Symbol.iterator;function Z6(n){return n===null||typeof n!="object"?null:(n=U2&&n[U2]||n["@@iterator"],typeof n=="function"?n:null)}var kT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bT=Object.assign,wT={};function _l(n,r,a){this.props=n,this.context=r,this.refs=wT,this.updater=a||kT}_l.prototype.isReactComponent={};_l.prototype.setState=function(n,r){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,r,"setState")};_l.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function vT(){}vT.prototype=_l.prototype;function r0(n,r,a){this.props=n,this.context=r,this.refs=wT,this.updater=a||kT}var i0=r0.prototype=new vT;i0.constructor=r0;bT(i0,_l.prototype);i0.isPureReactComponent=!0;var H2=Array.isArray,AT=Object.prototype.hasOwnProperty,s0={current:null},CT={key:!0,ref:!0,__self:!0,__source:!0};function _T(n,r,a){var c,u={},p=null,m=null;if(r!=null)for(c in r.ref!==void 0&&(m=r.ref),r.key!==void 0&&(p=""+r.key),r)AT.call(r,c)&&!CT.hasOwnProperty(c)&&(u[c]=r[c]);var w=arguments.length-2;if(w===1)u.children=a;else if(1<w){for(var k=Array(w),_=0;_<w;_++)k[_]=arguments[_+2];u.children=k}if(n&&n.defaultProps)for(c in w=n.defaultProps,w)u[c]===void 0&&(u[c]=w[c]);return{$$typeof:zd,type:n,key:p,ref:m,props:u,_owner:s0.current}}function J6(n,r){return{$$typeof:zd,type:n.type,key:r,ref:n.ref,props:n.props,_owner:n._owner}}function a0(n){return typeof n=="object"&&n!==null&&n.$$typeof===zd}function X6(n){var r={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(a){return r[a]})}var $2=/\/+/g;function Hk(n,r){return typeof n=="object"&&n!==null&&n.key!=null?X6(""+n.key):r.toString(36)}function hp(n,r,a,c,u){var p=typeof n;(p==="undefined"||p==="boolean")&&(n=null);var m=!1;if(n===null)m=!0;else switch(p){case"string":case"number":m=!0;break;case"object":switch(n.$$typeof){case zd:case V6:m=!0}}if(m)return m=n,u=u(m),n=c===""?"."+Hk(m,0):c,H2(u)?(a="",n!=null&&(a=n.replace($2,"$&/")+"/"),hp(u,r,a,"",function(_){return _})):u!=null&&(a0(u)&&(u=J6(u,a+(!u.key||m&&m.key===u.key?"":(""+u.key).replace($2,"$&/")+"/")+n)),r.push(u)),1;if(m=0,c=c===""?".":c+":",H2(n))for(var w=0;w<n.length;w++){p=n[w];var k=c+Hk(p,w);m+=hp(p,r,a,k,u)}else if(k=Z6(n),typeof k=="function")for(n=k.call(n),w=0;!(p=n.next()).done;)p=p.value,k=c+Hk(p,w++),m+=hp(p,r,a,k,u);else if(p==="object")throw r=String(n),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return m}function Vh(n,r,a){if(n==null)return n;var c=[],u=0;return hp(n,c,"","",function(p){return r.call(a,p,u++)}),c}function eF(n){if(n._status===-1){var r=n._result;r=r(),r.then(function(a){(n._status===0||n._status===-1)&&(n._status=1,n._result=a)},function(a){(n._status===0||n._status===-1)&&(n._status=2,n._result=a)}),n._status===-1&&(n._status=0,n._result=r)}if(n._status===1)return n._result.default;throw n._result}var Dn={current:null},pp={transition:null},tF={ReactCurrentDispatcher:Dn,ReactCurrentBatchConfig:pp,ReactCurrentOwner:s0};Pe.Children={map:Vh,forEach:function(n,r,a){Vh(n,function(){r.apply(this,arguments)},a)},count:function(n){var r=0;return Vh(n,function(){r++}),r},toArray:function(n){return Vh(n,function(r){return r})||[]},only:function(n){if(!a0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Pe.Component=_l;Pe.Fragment=U6;Pe.Profiler=$6;Pe.PureComponent=r0;Pe.StrictMode=H6;Pe.Suspense=K6;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tF;Pe.cloneElement=function(n,r,a){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var c=bT({},n.props),u=n.key,p=n.ref,m=n._owner;if(r!=null){if(r.ref!==void 0&&(p=r.ref,m=s0.current),r.key!==void 0&&(u=""+r.key),n.type&&n.type.defaultProps)var w=n.type.defaultProps;for(k in r)AT.call(r,k)&&!CT.hasOwnProperty(k)&&(c[k]=r[k]===void 0&&w!==void 0?w[k]:r[k])}var k=arguments.length-2;if(k===1)c.children=a;else if(1<k){w=Array(k);for(var _=0;_<k;_++)w[_]=arguments[_+2];c.children=w}return{$$typeof:zd,type:n.type,key:u,ref:p,props:c,_owner:m}};Pe.createContext=function(n){return n={$$typeof:q6,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:W6,_context:n},n.Consumer=n};Pe.createElement=_T;Pe.createFactory=function(n){var r=_T.bind(null,n);return r.type=n,r};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(n){return{$$typeof:G6,render:n}};Pe.isValidElement=a0;Pe.lazy=function(n){return{$$typeof:Q6,_payload:{_status:-1,_result:n},_init:eF}};Pe.memo=function(n,r){return{$$typeof:Y6,type:n,compare:r===void 0?null:r}};Pe.startTransition=function(n){var r=pp.transition;pp.transition={};try{n()}finally{pp.transition=r}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(n,r){return Dn.current.useCallback(n,r)};Pe.useContext=function(n){return Dn.current.useContext(n)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(n){return Dn.current.useDeferredValue(n)};Pe.useEffect=function(n,r){return Dn.current.useEffect(n,r)};Pe.useId=function(){return Dn.current.useId()};Pe.useImperativeHandle=function(n,r,a){return Dn.current.useImperativeHandle(n,r,a)};Pe.useInsertionEffect=function(n,r){return Dn.current.useInsertionEffect(n,r)};Pe.useLayoutEffect=function(n,r){return Dn.current.useLayoutEffect(n,r)};Pe.useMemo=function(n,r){return Dn.current.useMemo(n,r)};Pe.useReducer=function(n,r,a){return Dn.current.useReducer(n,r,a)};Pe.useRef=function(n){return Dn.current.useRef(n)};Pe.useState=function(n){return Dn.current.useState(n)};Pe.useSyncExternalStore=function(n,r,a){return Dn.current.useSyncExternalStore(n,r,a)};Pe.useTransition=function(){return Dn.current.useTransition()};Pe.version="18.2.0";gT.exports=Pe;var V=gT.exports;const ji=jd(V),Mp=F6({__proto__:null,default:ji},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nF=V,oF=Symbol.for("react.element"),rF=Symbol.for("react.fragment"),iF=Object.prototype.hasOwnProperty,sF=nF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aF={key:!0,ref:!0,__self:!0,__source:!0};function yT(n,r,a){var c,u={},p=null,m=null;a!==void 0&&(p=""+a),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(m=r.ref);for(c in r)iF.call(r,c)&&!aF.hasOwnProperty(c)&&(u[c]=r[c]);if(n&&n.defaultProps)for(c in r=n.defaultProps,r)u[c]===void 0&&(u[c]=r[c]);return{$$typeof:oF,type:n,key:p,ref:m,props:u,_owner:sF.current}}vf.Fragment=rF;vf.jsx=yT;vf.jsxs=yT;mT.exports=vf;var E=mT.exports,Bb={},xT={exports:{}},ao={},ET={exports:{}},ST={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function r(se,ee){var ke=se.length;se.push(ee);e:for(;0<ke;){var Se=ke-1>>>1,Ke=se[Se];if(0<u(Ke,ee))se[Se]=ee,se[ke]=Ke,ke=Se;else break e}}function a(se){return se.length===0?null:se[0]}function c(se){if(se.length===0)return null;var ee=se[0],ke=se.pop();if(ke!==ee){se[0]=ke;e:for(var Se=0,Ke=se.length,cn=Ke>>>1;Se<cn;){var dn=2*(Se+1)-1,Eo=se[dn],vn=dn+1,Oe=se[vn];if(0>u(Eo,ke))vn<Ke&&0>u(Oe,Eo)?(se[Se]=Oe,se[vn]=ke,Se=vn):(se[Se]=Eo,se[dn]=ke,Se=dn);else if(vn<Ke&&0>u(Oe,ke))se[Se]=Oe,se[vn]=ke,Se=vn;else break e}}return ee}function u(se,ee){var ke=se.sortIndex-ee.sortIndex;return ke!==0?ke:se.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var m=Date,w=m.now();n.unstable_now=function(){return m.now()-w}}var k=[],_=[],x=1,y=null,A=3,S=!1,I=!1,N=!1,F=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(se){for(var ee=a(_);ee!==null;){if(ee.callback===null)c(_);else if(ee.startTime<=se)c(_),ee.sortIndex=ee.expirationTime,r(k,ee);else break;ee=a(_)}}function H(se){if(N=!1,B(se),!I)if(a(k)!==null)I=!0,me(q);else{var ee=a(_);ee!==null&&_e(H,ee.startTime-se)}}function q(se,ee){I=!1,N&&(N=!1,R(O),O=-1),S=!0;var ke=A;try{for(B(ee),y=a(k);y!==null&&(!(y.expirationTime>ee)||se&&!X());){var Se=y.callback;if(typeof Se=="function"){y.callback=null,A=y.priorityLevel;var Ke=Se(y.expirationTime<=ee);ee=n.unstable_now(),typeof Ke=="function"?y.callback=Ke:y===a(k)&&c(k),B(ee)}else c(k);y=a(k)}if(y!==null)var cn=!0;else{var dn=a(_);dn!==null&&_e(H,dn.startTime-ee),cn=!1}return cn}finally{y=null,A=ke,S=!1}}var Y=!1,K=null,O=-1,te=5,$=-1;function X(){return!(n.unstable_now()-$<te)}function pe(){if(K!==null){var se=n.unstable_now();$=se;var ee=!0;try{ee=K(!0,se)}finally{ee?fe():(Y=!1,K=null)}}else Y=!1}var fe;if(typeof T=="function")fe=function(){T(pe)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,ze=Ge.port2;Ge.port1.onmessage=pe,fe=function(){ze.postMessage(null)}}else fe=function(){F(pe,0)};function me(se){K=se,Y||(Y=!0,fe())}function _e(se,ee){O=F(function(){se(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){I||S||(I=!0,me(q))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return a(k)},n.unstable_next=function(se){switch(A){case 1:case 2:case 3:var ee=3;break;default:ee=A}var ke=A;A=ee;try{return se()}finally{A=ke}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,ee){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ke=A;A=se;try{return ee()}finally{A=ke}},n.unstable_scheduleCallback=function(se,ee,ke){var Se=n.unstable_now();switch(typeof ke=="object"&&ke!==null?(ke=ke.delay,ke=typeof ke=="number"&&0<ke?Se+ke:Se):ke=Se,se){case 1:var Ke=-1;break;case 2:Ke=250;break;case 5:Ke=1073741823;break;case 4:Ke=1e4;break;default:Ke=5e3}return Ke=ke+Ke,se={id:x++,callback:ee,priorityLevel:se,startTime:ke,expirationTime:Ke,sortIndex:-1},ke>Se?(se.sortIndex=ke,r(_,se),a(k)===null&&se===a(_)&&(N?(R(O),O=-1):N=!0,_e(H,ke-Se))):(se.sortIndex=Ke,r(k,se),I||S||(I=!0,me(q))),se},n.unstable_shouldYield=X,n.unstable_wrapCallback=function(se){var ee=A;return function(){var ke=A;A=ee;try{return se.apply(this,arguments)}finally{A=ke}}}})(ST);ET.exports=ST;var lF=ET.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT=V,so=lF;function ie(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var TT=new Set,pd={};function Zs(n,r){hl(n,r),hl(n+"Capture",r)}function hl(n,r){for(pd[n]=r,n=0;n<r.length;n++)TT.add(r[n])}var Xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ob=Object.prototype.hasOwnProperty,cF=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W2={},q2={};function dF(n){return Ob.call(q2,n)?!0:Ob.call(W2,n)?!1:cF.test(n)?q2[n]=!0:(W2[n]=!0,!1)}function uF(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function hF(n,r,a,c){if(r===null||typeof r>"u"||uF(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Tn(n,r,a,c,u,p,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=m}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ln[n]=new Tn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];ln[r]=new Tn(r,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ln[n]=new Tn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ln[n]=new Tn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ln[n]=new Tn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ln[n]=new Tn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ln[n]=new Tn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ln[n]=new Tn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ln[n]=new Tn(n,5,!1,n.toLowerCase(),null,!1,!1)});var l0=/[\-:]([a-z])/g;function c0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(l0,c0);ln[r]=new Tn(r,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(l0,c0);ln[r]=new Tn(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(l0,c0);ln[r]=new Tn(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ln[n]=new Tn(n,1,!1,n.toLowerCase(),null,!1,!1)});ln.xlinkHref=new Tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ln[n]=new Tn(n,1,!1,n.toLowerCase(),null,!0,!0)});function d0(n,r,a,c){var u=ln.hasOwnProperty(r)?ln[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(hF(r,a,u,c)&&(a=null),c||u===null?dF(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):u.mustUseProperty?n[u.propertyName]=a===null?u.type===3?!1:"":a:(r=u.attributeName,c=u.attributeNamespace,a===null?n.removeAttribute(r):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var ri=DT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uh=Symbol.for("react.element"),Wa=Symbol.for("react.portal"),qa=Symbol.for("react.fragment"),u0=Symbol.for("react.strict_mode"),Rb=Symbol.for("react.profiler"),IT=Symbol.for("react.provider"),MT=Symbol.for("react.context"),h0=Symbol.for("react.forward_ref"),Lb=Symbol.for("react.suspense"),jb=Symbol.for("react.suspense_list"),p0=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),NT=Symbol.for("react.offscreen"),G2=Symbol.iterator;function Pc(n){return n===null||typeof n!="object"?null:(n=G2&&n[G2]||n["@@iterator"],typeof n=="function"?n:null)}var At=Object.assign,$k;function qc(n){if($k===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);$k=r&&r[1]||""}return`
`+$k+n}var Wk=!1;function qk(n,r){if(!n||Wk)return"";Wk=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(_){var c=_}Reflect.construct(n,[],r)}else{try{r.call()}catch(_){c=_}n.call(r.prototype)}else{try{throw Error()}catch(_){c=_}n()}}catch(_){if(_&&c&&typeof _.stack=="string"){for(var u=_.stack.split(`
`),p=c.stack.split(`
`),m=u.length-1,w=p.length-1;1<=m&&0<=w&&u[m]!==p[w];)w--;for(;1<=m&&0<=w;m--,w--)if(u[m]!==p[w]){if(m!==1||w!==1)do if(m--,w--,0>w||u[m]!==p[w]){var k=`
`+u[m].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=m&&0<=w);break}}}finally{Wk=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?qc(n):""}function pF(n){switch(n.tag){case 5:return qc(n.type);case 16:return qc("Lazy");case 13:return qc("Suspense");case 19:return qc("SuspenseList");case 0:case 2:case 15:return n=qk(n.type,!1),n;case 11:return n=qk(n.type.render,!1),n;case 1:return n=qk(n.type,!0),n;default:return""}}function zb(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qa:return"Fragment";case Wa:return"Portal";case Rb:return"Profiler";case u0:return"StrictMode";case Lb:return"Suspense";case jb:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case MT:return(n.displayName||"Context")+".Consumer";case IT:return(n._context.displayName||"Context")+".Provider";case h0:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case p0:return r=n.displayName||null,r!==null?r:zb(n.type)||"Memo";case Ni:r=n._payload,n=n._init;try{return zb(n(r))}catch{}}return null}function fF(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zb(r);case 8:return r===u0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Xi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function PT(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mF(n){var r=PT(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return u.call(this)},set:function(m){c=""+m,p.call(this,m)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(m){c=""+m},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Hh(n){n._valueTracker||(n._valueTracker=mF(n))}function BT(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=PT(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Np(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Fb(n,r){var a=r.checked;return At({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function K2(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Xi(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function OT(n,r){r=r.checked,r!=null&&d0(n,"checked",r,!1)}function Vb(n,r){OT(n,r);var a=Xi(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ub(n,r.type,a):r.hasOwnProperty("defaultValue")&&Ub(n,r.type,Xi(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Y2(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ub(n,r,a){(r!=="number"||Np(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Gc=Array.isArray;function ol(n,r,a,c){if(n=n.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<n.length;a++)u=r.hasOwnProperty("$"+n[a].value),n[a].selected!==u&&(n[a].selected=u),u&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Xi(a),r=null,u=0;u<n.length;u++){if(n[u].value===a){n[u].selected=!0,c&&(n[u].defaultSelected=!0);return}r!==null||n[u].disabled||(r=n[u])}r!==null&&(r.selected=!0)}}function Hb(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(ie(91));return At({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q2(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(ie(92));if(Gc(a)){if(1<a.length)throw Error(ie(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Xi(a)}}function RT(n,r){var a=Xi(r.value),c=Xi(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Z2(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function LT(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $b(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?LT(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $h,jT=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,u){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,u)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for($h=$h||document.createElement("div"),$h.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=$h.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function fd(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Xc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gF=["Webkit","ms","Moz","O"];Object.keys(Xc).forEach(function(n){gF.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Xc[r]=Xc[n]})});function zT(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Xc.hasOwnProperty(n)&&Xc[n]?(""+r).trim():r+"px"}function FT(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=zT(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,u):n[a]=u}}var kF=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wb(n,r){if(r){if(kF[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(ie(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(ie(61))}if(r.style!=null&&typeof r.style!="object")throw Error(ie(62))}}function qb(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gb=null;function f0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Kb=null,rl=null,il=null;function J2(n){if(n=Ud(n)){if(typeof Kb!="function")throw Error(ie(280));var r=n.stateNode;r&&(r=xf(r),Kb(n.stateNode,n.type,r))}}function VT(n){rl?il?il.push(n):il=[n]:rl=n}function UT(){if(rl){var n=rl,r=il;if(il=rl=null,J2(n),r)for(n=0;n<r.length;n++)J2(r[n])}}function HT(n,r){return n(r)}function $T(){}var Gk=!1;function WT(n,r,a){if(Gk)return n(r,a);Gk=!0;try{return HT(n,r,a)}finally{Gk=!1,(rl!==null||il!==null)&&($T(),UT())}}function md(n,r){var a=n.stateNode;if(a===null)return null;var c=xf(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(ie(231,r,typeof a));return a}var Yb=!1;if(Xr)try{var Bc={};Object.defineProperty(Bc,"passive",{get:function(){Yb=!0}}),window.addEventListener("test",Bc,Bc),window.removeEventListener("test",Bc,Bc)}catch{Yb=!1}function bF(n,r,a,c,u,p,m,w,k){var _=Array.prototype.slice.call(arguments,3);try{r.apply(a,_)}catch(x){this.onError(x)}}var ed=!1,Pp=null,Bp=!1,Qb=null,wF={onError:function(n){ed=!0,Pp=n}};function vF(n,r,a,c,u,p,m,w,k){ed=!1,Pp=null,bF.apply(wF,arguments)}function AF(n,r,a,c,u,p,m,w,k){if(vF.apply(this,arguments),ed){if(ed){var _=Pp;ed=!1,Pp=null}else throw Error(ie(198));Bp||(Bp=!0,Qb=_)}}function Js(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function qT(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function X2(n){if(Js(n)!==n)throw Error(ie(188))}function CF(n){var r=n.alternate;if(!r){if(r=Js(n),r===null)throw Error(ie(188));return r!==n?null:n}for(var a=n,c=r;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return X2(u),n;if(p===c)return X2(u),r;p=p.sibling}throw Error(ie(188))}if(a.return!==c.return)a=u,c=p;else{for(var m=!1,w=u.child;w;){if(w===a){m=!0,a=u,c=p;break}if(w===c){m=!0,c=u,a=p;break}w=w.sibling}if(!m){for(w=p.child;w;){if(w===a){m=!0,a=p,c=u;break}if(w===c){m=!0,c=p,a=u;break}w=w.sibling}if(!m)throw Error(ie(189))}}if(a.alternate!==c)throw Error(ie(190))}if(a.tag!==3)throw Error(ie(188));return a.stateNode.current===a?n:r}function GT(n){return n=CF(n),n!==null?KT(n):null}function KT(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=KT(n);if(r!==null)return r;n=n.sibling}return null}var YT=so.unstable_scheduleCallback,eS=so.unstable_cancelCallback,_F=so.unstable_shouldYield,yF=so.unstable_requestPaint,Ot=so.unstable_now,xF=so.unstable_getCurrentPriorityLevel,m0=so.unstable_ImmediatePriority,QT=so.unstable_UserBlockingPriority,Op=so.unstable_NormalPriority,EF=so.unstable_LowPriority,ZT=so.unstable_IdlePriority,Af=null,Er=null;function SF(n){if(Er&&typeof Er.onCommitFiberRoot=="function")try{Er.onCommitFiberRoot(Af,n,void 0,(n.current.flags&128)===128)}catch{}}var $o=Math.clz32?Math.clz32:IF,DF=Math.log,TF=Math.LN2;function IF(n){return n>>>=0,n===0?32:31-(DF(n)/TF|0)|0}var Wh=64,qh=4194304;function Kc(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Rp(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,u=n.suspendedLanes,p=n.pingedLanes,m=a&268435455;if(m!==0){var w=m&~u;w!==0?c=Kc(w):(p&=m,p!==0&&(c=Kc(p)))}else m=a&~u,m!==0?c=Kc(m):p!==0&&(c=Kc(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&u)&&(u=c&-c,p=r&-r,u>=p||u===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-$o(r),u=1<<a,c|=n[a],r&=~u;return c}function MF(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NF(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,u=n.expirationTimes,p=n.pendingLanes;0<p;){var m=31-$o(p),w=1<<m,k=u[m];k===-1?(!(w&a)||w&c)&&(u[m]=MF(w,r)):k<=r&&(n.expiredLanes|=w),p&=~w}}function Zb(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function JT(){var n=Wh;return Wh<<=1,!(Wh&4194240)&&(Wh=64),n}function Kk(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Fd(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-$o(r),n[r]=a}function PF(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var u=31-$o(a),p=1<<u;r[u]=0,c[u]=-1,n[u]=-1,a&=~p}}function g0(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-$o(a),u=1<<c;u&r|n[c]&r&&(n[c]|=r),a&=~u}}var tt=0;function XT(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var eI,k0,tI,nI,oI,Jb=!1,Gh=[],Ui=null,Hi=null,$i=null,gd=new Map,kd=new Map,Oi=[],BF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tS(n,r){switch(n){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":gd.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":kd.delete(r.pointerId)}}function Oc(n,r,a,c,u,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[u]},r!==null&&(r=Ud(r),r!==null&&k0(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),n)}function OF(n,r,a,c,u){switch(r){case"focusin":return Ui=Oc(Ui,n,r,a,c,u),!0;case"dragenter":return Hi=Oc(Hi,n,r,a,c,u),!0;case"mouseover":return $i=Oc($i,n,r,a,c,u),!0;case"pointerover":var p=u.pointerId;return gd.set(p,Oc(gd.get(p)||null,n,r,a,c,u)),!0;case"gotpointercapture":return p=u.pointerId,kd.set(p,Oc(kd.get(p)||null,n,r,a,c,u)),!0}return!1}function rI(n){var r=Ls(n.target);if(r!==null){var a=Js(r);if(a!==null){if(r=a.tag,r===13){if(r=qT(a),r!==null){n.blockedOn=r,oI(n.priority,function(){tI(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fp(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Xb(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Gb=c,a.target.dispatchEvent(c),Gb=null}else return r=Ud(a),r!==null&&k0(r),n.blockedOn=a,!1;r.shift()}return!0}function nS(n,r,a){fp(n)&&a.delete(r)}function RF(){Jb=!1,Ui!==null&&fp(Ui)&&(Ui=null),Hi!==null&&fp(Hi)&&(Hi=null),$i!==null&&fp($i)&&($i=null),gd.forEach(nS),kd.forEach(nS)}function Rc(n,r){n.blockedOn===r&&(n.blockedOn=null,Jb||(Jb=!0,so.unstable_scheduleCallback(so.unstable_NormalPriority,RF)))}function bd(n){function r(u){return Rc(u,n)}if(0<Gh.length){Rc(Gh[0],n);for(var a=1;a<Gh.length;a++){var c=Gh[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ui!==null&&Rc(Ui,n),Hi!==null&&Rc(Hi,n),$i!==null&&Rc($i,n),gd.forEach(r),kd.forEach(r),a=0;a<Oi.length;a++)c=Oi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Oi.length&&(a=Oi[0],a.blockedOn===null);)rI(a),a.blockedOn===null&&Oi.shift()}var sl=ri.ReactCurrentBatchConfig,Lp=!0;function LF(n,r,a,c){var u=tt,p=sl.transition;sl.transition=null;try{tt=1,b0(n,r,a,c)}finally{tt=u,sl.transition=p}}function jF(n,r,a,c){var u=tt,p=sl.transition;sl.transition=null;try{tt=4,b0(n,r,a,c)}finally{tt=u,sl.transition=p}}function b0(n,r,a,c){if(Lp){var u=Xb(n,r,a,c);if(u===null)rb(n,r,c,jp,a),tS(n,c);else if(OF(u,n,r,a,c))c.stopPropagation();else if(tS(n,c),r&4&&-1<BF.indexOf(n)){for(;u!==null;){var p=Ud(u);if(p!==null&&eI(p),p=Xb(n,r,a,c),p===null&&rb(n,r,c,jp,a),p===u)break;u=p}u!==null&&c.stopPropagation()}else rb(n,r,c,null,a)}}var jp=null;function Xb(n,r,a,c){if(jp=null,n=f0(c),n=Ls(n),n!==null)if(r=Js(n),r===null)n=null;else if(a=r.tag,a===13){if(n=qT(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return jp=n,null}function iI(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xF()){case m0:return 1;case QT:return 4;case Op:case EF:return 16;case ZT:return 536870912;default:return 16}default:return 16}}var zi=null,w0=null,mp=null;function sI(){if(mp)return mp;var n,r=w0,a=r.length,c,u="value"in zi?zi.value:zi.textContent,p=u.length;for(n=0;n<a&&r[n]===u[n];n++);var m=a-n;for(c=1;c<=m&&r[a-c]===u[p-c];c++);return mp=u.slice(n,1<c?1-c:void 0)}function gp(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Kh(){return!0}function oS(){return!1}function lo(n){function r(a,c,u,p,m){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=p,this.target=m,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(a=n[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Kh:oS,this.isPropagationStopped=oS,this}return At(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kh)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kh)},persist:function(){},isPersistent:Kh}),r}var yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},v0=lo(yl),Vd=At({},yl,{view:0,detail:0}),zF=lo(Vd),Yk,Qk,Lc,Cf=At({},Vd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:A0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lc&&(Lc&&n.type==="mousemove"?(Yk=n.screenX-Lc.screenX,Qk=n.screenY-Lc.screenY):Qk=Yk=0,Lc=n),Yk)},movementY:function(n){return"movementY"in n?n.movementY:Qk}}),rS=lo(Cf),FF=At({},Cf,{dataTransfer:0}),VF=lo(FF),UF=At({},Vd,{relatedTarget:0}),Zk=lo(UF),HF=At({},yl,{animationName:0,elapsedTime:0,pseudoElement:0}),$F=lo(HF),WF=At({},yl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),qF=lo(WF),GF=At({},yl,{data:0}),iS=lo(GF),KF={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YF={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QF={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZF(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=QF[n])?!!r[n]:!1}function A0(){return ZF}var JF=At({},Vd,{key:function(n){if(n.key){var r=KF[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=gp(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?YF[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:A0,charCode:function(n){return n.type==="keypress"?gp(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gp(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),XF=lo(JF),e7=At({},Cf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sS=lo(e7),t7=At({},Vd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:A0}),n7=lo(t7),o7=At({},yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),r7=lo(o7),i7=At({},Cf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),s7=lo(i7),a7=[9,13,27,32],C0=Xr&&"CompositionEvent"in window,td=null;Xr&&"documentMode"in document&&(td=document.documentMode);var l7=Xr&&"TextEvent"in window&&!td,aI=Xr&&(!C0||td&&8<td&&11>=td),aS=String.fromCharCode(32),lS=!1;function lI(n,r){switch(n){case"keyup":return a7.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cI(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ga=!1;function c7(n,r){switch(n){case"compositionend":return cI(r);case"keypress":return r.which!==32?null:(lS=!0,aS);case"textInput":return n=r.data,n===aS&&lS?null:n;default:return null}}function d7(n,r){if(Ga)return n==="compositionend"||!C0&&lI(n,r)?(n=sI(),mp=w0=zi=null,Ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return aI&&r.locale!=="ko"?null:r.data;default:return null}}var u7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cS(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!u7[n.type]:r==="textarea"}function dI(n,r,a,c){VT(c),r=zp(r,"onChange"),0<r.length&&(a=new v0("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var nd=null,wd=null;function h7(n){AI(n,0)}function _f(n){var r=Qa(n);if(BT(r))return n}function p7(n,r){if(n==="change")return r}var uI=!1;if(Xr){var Jk;if(Xr){var Xk="oninput"in document;if(!Xk){var dS=document.createElement("div");dS.setAttribute("oninput","return;"),Xk=typeof dS.oninput=="function"}Jk=Xk}else Jk=!1;uI=Jk&&(!document.documentMode||9<document.documentMode)}function uS(){nd&&(nd.detachEvent("onpropertychange",hI),wd=nd=null)}function hI(n){if(n.propertyName==="value"&&_f(wd)){var r=[];dI(r,wd,n,f0(n)),WT(h7,r)}}function f7(n,r,a){n==="focusin"?(uS(),nd=r,wd=a,nd.attachEvent("onpropertychange",hI)):n==="focusout"&&uS()}function m7(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _f(wd)}function g7(n,r){if(n==="click")return _f(r)}function k7(n,r){if(n==="input"||n==="change")return _f(r)}function b7(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Go=typeof Object.is=="function"?Object.is:b7;function vd(n,r){if(Go(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!Ob.call(r,u)||!Go(n[u],r[u]))return!1}return!0}function hS(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pS(n,r){var a=hS(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hS(a)}}function pI(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?pI(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function fI(){for(var n=window,r=Np();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Np(n.document)}return r}function _0(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function w7(n){var r=fI(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&pI(a.ownerDocument.documentElement,a)){if(c!==null&&_0(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var u=a.textContent.length,p=Math.min(c.start,u);c=c.end===void 0?p:Math.min(c.end,u),!n.extend&&p>c&&(u=c,c=p,p=u),u=pS(a,p);var m=pS(a,c);u&&m&&(n.rangeCount!==1||n.anchorNode!==u.node||n.anchorOffset!==u.offset||n.focusNode!==m.node||n.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var v7=Xr&&"documentMode"in document&&11>=document.documentMode,Ka=null,ew=null,od=null,tw=!1;function fS(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tw||Ka==null||Ka!==Np(c)||(c=Ka,"selectionStart"in c&&_0(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),od&&vd(od,c)||(od=c,c=zp(ew,"onSelect"),0<c.length&&(r=new v0("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ka)))}function Yh(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ya={animationend:Yh("Animation","AnimationEnd"),animationiteration:Yh("Animation","AnimationIteration"),animationstart:Yh("Animation","AnimationStart"),transitionend:Yh("Transition","TransitionEnd")},eb={},mI={};Xr&&(mI=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function yf(n){if(eb[n])return eb[n];if(!Ya[n])return n;var r=Ya[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in mI)return eb[n]=r[a];return n}var gI=yf("animationend"),kI=yf("animationiteration"),bI=yf("animationstart"),wI=yf("transitionend"),vI=new Map,mS="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(n,r){vI.set(n,r),Zs(r,[n])}for(var tb=0;tb<mS.length;tb++){var nb=mS[tb],A7=nb.toLowerCase(),C7=nb[0].toUpperCase()+nb.slice(1);ns(A7,"on"+C7)}ns(gI,"onAnimationEnd");ns(kI,"onAnimationIteration");ns(bI,"onAnimationStart");ns("dblclick","onDoubleClick");ns("focusin","onFocus");ns("focusout","onBlur");ns(wI,"onTransitionEnd");hl("onMouseEnter",["mouseout","mouseover"]);hl("onMouseLeave",["mouseout","mouseover"]);hl("onPointerEnter",["pointerout","pointerover"]);hl("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_7=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yc));function gS(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,AF(c,r,void 0,n),n.currentTarget=null}function AI(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],u=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var m=c.length-1;0<=m;m--){var w=c[m],k=w.instance,_=w.currentTarget;if(w=w.listener,k!==p&&u.isPropagationStopped())break e;gS(u,w,_),p=k}else for(m=0;m<c.length;m++){if(w=c[m],k=w.instance,_=w.currentTarget,w=w.listener,k!==p&&u.isPropagationStopped())break e;gS(u,w,_),p=k}}}if(Bp)throw n=Qb,Bp=!1,Qb=null,n}function ht(n,r){var a=r[sw];a===void 0&&(a=r[sw]=new Set);var c=n+"__bubble";a.has(c)||(CI(r,n,2,!1),a.add(c))}function ob(n,r,a){var c=0;r&&(c|=4),CI(a,n,c,r)}var Qh="_reactListening"+Math.random().toString(36).slice(2);function Ad(n){if(!n[Qh]){n[Qh]=!0,TT.forEach(function(a){a!=="selectionchange"&&(_7.has(a)||ob(a,!1,n),ob(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qh]||(r[Qh]=!0,ob("selectionchange",!1,r))}}function CI(n,r,a,c){switch(iI(r)){case 1:var u=LF;break;case 4:u=jF;break;default:u=b0}a=u.bind(null,r,a,n),u=void 0,!Yb||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?n.addEventListener(r,a,{capture:!0,passive:u}):n.addEventListener(r,a,!0):u!==void 0?n.addEventListener(r,a,{passive:u}):n.addEventListener(r,a,!1)}function rb(n,r,a,c,u){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var m=c.tag;if(m===3||m===4){var w=c.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(m===4)for(m=c.return;m!==null;){var k=m.tag;if((k===3||k===4)&&(k=m.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;m=m.return}for(;w!==null;){if(m=Ls(w),m===null)return;if(k=m.tag,k===5||k===6){c=p=m;continue e}w=w.parentNode}}c=c.return}WT(function(){var _=p,x=f0(a),y=[];e:{var A=vI.get(n);if(A!==void 0){var S=v0,I=n;switch(n){case"keypress":if(gp(a)===0)break e;case"keydown":case"keyup":S=XF;break;case"focusin":I="focus",S=Zk;break;case"focusout":I="blur",S=Zk;break;case"beforeblur":case"afterblur":S=Zk;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=rS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=VF;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=n7;break;case gI:case kI:case bI:S=$F;break;case wI:S=r7;break;case"scroll":S=zF;break;case"wheel":S=s7;break;case"copy":case"cut":case"paste":S=qF;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=sS}var N=(r&4)!==0,F=!N&&n==="scroll",R=N?A!==null?A+"Capture":null:A;N=[];for(var T=_,B;T!==null;){B=T;var H=B.stateNode;if(B.tag===5&&H!==null&&(B=H,R!==null&&(H=md(T,R),H!=null&&N.push(Cd(T,H,B)))),F)break;T=T.return}0<N.length&&(A=new S(A,I,null,a,x),y.push({event:A,listeners:N}))}}if(!(r&7)){e:{if(A=n==="mouseover"||n==="pointerover",S=n==="mouseout"||n==="pointerout",A&&a!==Gb&&(I=a.relatedTarget||a.fromElement)&&(Ls(I)||I[ei]))break e;if((S||A)&&(A=x.window===x?x:(A=x.ownerDocument)?A.defaultView||A.parentWindow:window,S?(I=a.relatedTarget||a.toElement,S=_,I=I?Ls(I):null,I!==null&&(F=Js(I),I!==F||I.tag!==5&&I.tag!==6)&&(I=null)):(S=null,I=_),S!==I)){if(N=rS,H="onMouseLeave",R="onMouseEnter",T="mouse",(n==="pointerout"||n==="pointerover")&&(N=sS,H="onPointerLeave",R="onPointerEnter",T="pointer"),F=S==null?A:Qa(S),B=I==null?A:Qa(I),A=new N(H,T+"leave",S,a,x),A.target=F,A.relatedTarget=B,H=null,Ls(x)===_&&(N=new N(R,T+"enter",I,a,x),N.target=B,N.relatedTarget=F,H=N),F=H,S&&I)t:{for(N=S,R=I,T=0,B=N;B;B=ja(B))T++;for(B=0,H=R;H;H=ja(H))B++;for(;0<T-B;)N=ja(N),T--;for(;0<B-T;)R=ja(R),B--;for(;T--;){if(N===R||R!==null&&N===R.alternate)break t;N=ja(N),R=ja(R)}N=null}else N=null;S!==null&&kS(y,A,S,N,!1),I!==null&&F!==null&&kS(y,F,I,N,!0)}}e:{if(A=_?Qa(_):window,S=A.nodeName&&A.nodeName.toLowerCase(),S==="select"||S==="input"&&A.type==="file")var q=p7;else if(cS(A))if(uI)q=k7;else{q=m7;var Y=f7}else(S=A.nodeName)&&S.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(q=g7);if(q&&(q=q(n,_))){dI(y,q,a,x);break e}Y&&Y(n,A,_),n==="focusout"&&(Y=A._wrapperState)&&Y.controlled&&A.type==="number"&&Ub(A,"number",A.value)}switch(Y=_?Qa(_):window,n){case"focusin":(cS(Y)||Y.contentEditable==="true")&&(Ka=Y,ew=_,od=null);break;case"focusout":od=ew=Ka=null;break;case"mousedown":tw=!0;break;case"contextmenu":case"mouseup":case"dragend":tw=!1,fS(y,a,x);break;case"selectionchange":if(v7)break;case"keydown":case"keyup":fS(y,a,x)}var K;if(C0)e:{switch(n){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ga?lI(n,a)&&(O="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(O="onCompositionStart");O&&(aI&&a.locale!=="ko"&&(Ga||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ga&&(K=sI()):(zi=x,w0="value"in zi?zi.value:zi.textContent,Ga=!0)),Y=zp(_,O),0<Y.length&&(O=new iS(O,n,null,a,x),y.push({event:O,listeners:Y}),K?O.data=K:(K=cI(a),K!==null&&(O.data=K)))),(K=l7?c7(n,a):d7(n,a))&&(_=zp(_,"onBeforeInput"),0<_.length&&(x=new iS("onBeforeInput","beforeinput",null,a,x),y.push({event:x,listeners:_}),x.data=K))}AI(y,r)})}function Cd(n,r,a){return{instance:n,listener:r,currentTarget:a}}function zp(n,r){for(var a=r+"Capture",c=[];n!==null;){var u=n,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=md(n,a),p!=null&&c.unshift(Cd(n,p,u)),p=md(n,r),p!=null&&c.push(Cd(n,p,u))),n=n.return}return c}function ja(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function kS(n,r,a,c,u){for(var p=r._reactName,m=[];a!==null&&a!==c;){var w=a,k=w.alternate,_=w.stateNode;if(k!==null&&k===c)break;w.tag===5&&_!==null&&(w=_,u?(k=md(a,p),k!=null&&m.unshift(Cd(a,k,w))):u||(k=md(a,p),k!=null&&m.push(Cd(a,k,w)))),a=a.return}m.length!==0&&n.push({event:r,listeners:m})}var y7=/\r\n?/g,x7=/\u0000|\uFFFD/g;function bS(n){return(typeof n=="string"?n:""+n).replace(y7,`
`).replace(x7,"")}function Zh(n,r,a){if(r=bS(r),bS(n)!==r&&a)throw Error(ie(425))}function Fp(){}var nw=null,ow=null;function rw(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var iw=typeof setTimeout=="function"?setTimeout:void 0,E7=typeof clearTimeout=="function"?clearTimeout:void 0,wS=typeof Promise=="function"?Promise:void 0,S7=typeof queueMicrotask=="function"?queueMicrotask:typeof wS<"u"?function(n){return wS.resolve(null).then(n).catch(D7)}:iw;function D7(n){setTimeout(function(){throw n})}function ib(n,r){var a=r,c=0;do{var u=a.nextSibling;if(n.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){n.removeChild(u),bd(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);bd(r)}function Wi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function vS(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var xl=Math.random().toString(36).slice(2),wr="__reactFiber$"+xl,_d="__reactProps$"+xl,ei="__reactContainer$"+xl,sw="__reactEvents$"+xl,T7="__reactListeners$"+xl,I7="__reactHandles$"+xl;function Ls(n){var r=n[wr];if(r)return r;for(var a=n.parentNode;a;){if(r=a[ei]||a[wr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=vS(n);n!==null;){if(a=n[wr])return a;n=vS(n)}return r}n=a,a=n.parentNode}return null}function Ud(n){return n=n[wr]||n[ei],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function xf(n){return n[_d]||null}var aw=[],Za=-1;function os(n){return{current:n}}function ft(n){0>Za||(n.current=aw[Za],aw[Za]=null,Za--)}function lt(n,r){Za++,aw[Za]=n.current,n.current=r}var es={},kn=os(es),Hn=os(!1),$s=es;function pl(n,r){var a=n.type.contextTypes;if(!a)return es;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=u),u}function $n(n){return n=n.childContextTypes,n!=null}function Vp(){ft(Hn),ft(kn)}function AS(n,r,a){if(kn.current!==es)throw Error(ie(168));lt(kn,r),lt(Hn,a)}function _I(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(ie(108,fF(n)||"Unknown",u));return At({},a,c)}function Up(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||es,$s=kn.current,lt(kn,n),lt(Hn,Hn.current),!0}function CS(n,r,a){var c=n.stateNode;if(!c)throw Error(ie(169));a?(n=_I(n,r,$s),c.__reactInternalMemoizedMergedChildContext=n,ft(Hn),ft(kn),lt(kn,n)):ft(Hn),lt(Hn,a)}var qr=null,Ef=!1,sb=!1;function yI(n){qr===null?qr=[n]:qr.push(n)}function M7(n){Ef=!0,yI(n)}function rs(){if(!sb&&qr!==null){sb=!0;var n=0,r=tt;try{var a=qr;for(tt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}qr=null,Ef=!1}catch(u){throw qr!==null&&(qr=qr.slice(n+1)),YT(m0,rs),u}finally{tt=r,sb=!1}}return null}var Ja=[],Xa=0,Hp=null,$p=0,wo=[],vo=0,Ws=null,Yr=1,Qr="";function Ms(n,r){Ja[Xa++]=$p,Ja[Xa++]=Hp,Hp=n,$p=r}function xI(n,r,a){wo[vo++]=Yr,wo[vo++]=Qr,wo[vo++]=Ws,Ws=n;var c=Yr;n=Qr;var u=32-$o(c)-1;c&=~(1<<u),a+=1;var p=32-$o(r)+u;if(30<p){var m=u-u%5;p=(c&(1<<m)-1).toString(32),c>>=m,u-=m,Yr=1<<32-$o(r)+u|a<<u|c,Qr=p+n}else Yr=1<<p|a<<u|c,Qr=n}function y0(n){n.return!==null&&(Ms(n,1),xI(n,1,0))}function x0(n){for(;n===Hp;)Hp=Ja[--Xa],Ja[Xa]=null,$p=Ja[--Xa],Ja[Xa]=null;for(;n===Ws;)Ws=wo[--vo],wo[vo]=null,Qr=wo[--vo],wo[vo]=null,Yr=wo[--vo],wo[vo]=null}var oo=null,no=null,bt=!1,Ho=null;function EI(n,r){var a=Ao(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function _S(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,oo=n,no=Wi(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,oo=n,no=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ws!==null?{id:Yr,overflow:Qr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Ao(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,oo=n,no=null,!0):!1;default:return!1}}function lw(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cw(n){if(bt){var r=no;if(r){var a=r;if(!_S(n,r)){if(lw(n))throw Error(ie(418));r=Wi(a.nextSibling);var c=oo;r&&_S(n,r)?EI(c,a):(n.flags=n.flags&-4097|2,bt=!1,oo=n)}}else{if(lw(n))throw Error(ie(418));n.flags=n.flags&-4097|2,bt=!1,oo=n}}}function yS(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oo=n}function Jh(n){if(n!==oo)return!1;if(!bt)return yS(n),bt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!rw(n.type,n.memoizedProps)),r&&(r=no)){if(lw(n))throw SI(),Error(ie(418));for(;r;)EI(n,r),r=Wi(r.nextSibling)}if(yS(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){no=Wi(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}no=null}}else no=oo?Wi(n.stateNode.nextSibling):null;return!0}function SI(){for(var n=no;n;)n=Wi(n.nextSibling)}function fl(){no=oo=null,bt=!1}function E0(n){Ho===null?Ho=[n]:Ho.push(n)}var N7=ri.ReactCurrentBatchConfig;function Vo(n,r){if(n&&n.defaultProps){r=At({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}var Wp=os(null),qp=null,el=null,S0=null;function D0(){S0=el=qp=null}function T0(n){var r=Wp.current;ft(Wp),n._currentValue=r}function dw(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function al(n,r){qp=n,S0=el=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Un=!0),n.firstContext=null)}function yo(n){var r=n._currentValue;if(S0!==n)if(n={context:n,memoizedValue:r,next:null},el===null){if(qp===null)throw Error(ie(308));el=n,qp.dependencies={lanes:0,firstContext:n}}else el=el.next=n;return r}var js=null;function I0(n){js===null?js=[n]:js.push(n)}function DI(n,r,a,c){var u=r.interleaved;return u===null?(a.next=a,I0(r)):(a.next=u.next,u.next=a),r.interleaved=a,ti(n,c)}function ti(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Pi=!1;function M0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TI(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qi(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ue&2){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,ti(n,a)}return u=c.interleaved,u===null?(r.next=r,I0(c)):(r.next=u.next,u.next=r),c.interleaved=r,ti(n,a)}function kp(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,g0(n,a)}}function xS(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var m={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=m:p=p.next=m,a=a.next}while(a!==null);p===null?u=p=r:p=p.next=r}else u=p=r;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Gp(n,r,a,c){var u=n.updateQueue;Pi=!1;var p=u.firstBaseUpdate,m=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,_=k.next;k.next=null,m===null?p=_:m.next=_,m=k;var x=n.alternate;x!==null&&(x=x.updateQueue,w=x.lastBaseUpdate,w!==m&&(w===null?x.firstBaseUpdate=_:w.next=_,x.lastBaseUpdate=k))}if(p!==null){var y=u.baseState;m=0,x=_=k=null,w=p;do{var A=w.lane,S=w.eventTime;if((c&A)===A){x!==null&&(x=x.next={eventTime:S,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var I=n,N=w;switch(A=r,S=a,N.tag){case 1:if(I=N.payload,typeof I=="function"){y=I.call(S,y,A);break e}y=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=N.payload,A=typeof I=="function"?I.call(S,y,A):I,A==null)break e;y=At({},y,A);break e;case 2:Pi=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,A=u.effects,A===null?u.effects=[w]:A.push(w))}else S={eventTime:S,lane:A,tag:w.tag,payload:w.payload,callback:w.callback,next:null},x===null?(_=x=S,k=y):x=x.next=S,m|=A;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;A=w,w=A.next,A.next=null,u.lastBaseUpdate=A,u.shared.pending=null}}while(1);if(x===null&&(k=y),u.baseState=k,u.firstBaseUpdate=_,u.lastBaseUpdate=x,r=u.shared.interleaved,r!==null){u=r;do m|=u.lane,u=u.next;while(u!==r)}else p===null&&(u.shared.lanes=0);Gs|=m,n.lanes=m,n.memoizedState=y}}function ES(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(ie(191,u));u.call(c)}}}var II=new DT.Component().refs;function uw(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:At({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Sf={isMounted:function(n){return(n=n._reactInternals)?Js(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Sn(),u=Ki(n),p=Zr(c,u);p.payload=r,a!=null&&(p.callback=a),r=qi(n,p,u),r!==null&&(Wo(r,n,u,c),kp(r,n,u))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Sn(),u=Ki(n),p=Zr(c,u);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qi(n,p,u),r!==null&&(Wo(r,n,u,c),kp(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Sn(),c=Ki(n),u=Zr(a,c);u.tag=2,r!=null&&(u.callback=r),r=qi(n,u,c),r!==null&&(Wo(r,n,c,a),kp(r,n,c))}};function SS(n,r,a,c,u,p,m){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,m):r.prototype&&r.prototype.isPureReactComponent?!vd(a,c)||!vd(u,p):!0}function MI(n,r,a){var c=!1,u=es,p=r.contextType;return typeof p=="object"&&p!==null?p=yo(p):(u=$n(r)?$s:kn.current,c=r.contextTypes,p=(c=c!=null)?pl(n,u):es),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sf,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=u,n.__reactInternalMemoizedMaskedChildContext=p),r}function DS(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Sf.enqueueReplaceState(r,r.state,null)}function hw(n,r,a,c){var u=n.stateNode;u.props=a,u.state=n.memoizedState,u.refs=II,M0(n);var p=r.contextType;typeof p=="object"&&p!==null?u.context=yo(p):(p=$n(r)?$s:kn.current,u.context=pl(n,p)),u.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(uw(n,r,p,a),u.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Sf.enqueueReplaceState(u,u.state,null),Gp(n,a,u,c),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308)}function jc(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(ie(309));var c=a.stateNode}if(!c)throw Error(ie(147,n));var u=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(m){var w=u.refs;w===II&&(w=u.refs={}),m===null?delete w[p]:w[p]=m},r._stringRef=p,r)}if(typeof n!="string")throw Error(ie(284));if(!a._owner)throw Error(ie(290,n))}return n}function Xh(n,r){throw n=Object.prototype.toString.call(r),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function TS(n){var r=n._init;return r(n._payload)}function NI(n){function r(R,T){if(n){var B=R.deletions;B===null?(R.deletions=[T],R.flags|=16):B.push(T)}}function a(R,T){if(!n)return null;for(;T!==null;)r(R,T),T=T.sibling;return null}function c(R,T){for(R=new Map;T!==null;)T.key!==null?R.set(T.key,T):R.set(T.index,T),T=T.sibling;return R}function u(R,T){return R=Yi(R,T),R.index=0,R.sibling=null,R}function p(R,T,B){return R.index=B,n?(B=R.alternate,B!==null?(B=B.index,B<T?(R.flags|=2,T):B):(R.flags|=2,T)):(R.flags|=1048576,T)}function m(R){return n&&R.alternate===null&&(R.flags|=2),R}function w(R,T,B,H){return T===null||T.tag!==6?(T=pb(B,R.mode,H),T.return=R,T):(T=u(T,B),T.return=R,T)}function k(R,T,B,H){var q=B.type;return q===qa?x(R,T,B.props.children,H,B.key):T!==null&&(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ni&&TS(q)===T.type)?(H=u(T,B.props),H.ref=jc(R,T,B),H.return=R,H):(H=_p(B.type,B.key,B.props,null,R.mode,H),H.ref=jc(R,T,B),H.return=R,H)}function _(R,T,B,H){return T===null||T.tag!==4||T.stateNode.containerInfo!==B.containerInfo||T.stateNode.implementation!==B.implementation?(T=fb(B,R.mode,H),T.return=R,T):(T=u(T,B.children||[]),T.return=R,T)}function x(R,T,B,H,q){return T===null||T.tag!==7?(T=Vs(B,R.mode,H,q),T.return=R,T):(T=u(T,B),T.return=R,T)}function y(R,T,B){if(typeof T=="string"&&T!==""||typeof T=="number")return T=pb(""+T,R.mode,B),T.return=R,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Uh:return B=_p(T.type,T.key,T.props,null,R.mode,B),B.ref=jc(R,null,T),B.return=R,B;case Wa:return T=fb(T,R.mode,B),T.return=R,T;case Ni:var H=T._init;return y(R,H(T._payload),B)}if(Gc(T)||Pc(T))return T=Vs(T,R.mode,B,null),T.return=R,T;Xh(R,T)}return null}function A(R,T,B,H){var q=T!==null?T.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return q!==null?null:w(R,T,""+B,H);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Uh:return B.key===q?k(R,T,B,H):null;case Wa:return B.key===q?_(R,T,B,H):null;case Ni:return q=B._init,A(R,T,q(B._payload),H)}if(Gc(B)||Pc(B))return q!==null?null:x(R,T,B,H,null);Xh(R,B)}return null}function S(R,T,B,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return R=R.get(B)||null,w(T,R,""+H,q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Uh:return R=R.get(H.key===null?B:H.key)||null,k(T,R,H,q);case Wa:return R=R.get(H.key===null?B:H.key)||null,_(T,R,H,q);case Ni:var Y=H._init;return S(R,T,B,Y(H._payload),q)}if(Gc(H)||Pc(H))return R=R.get(B)||null,x(T,R,H,q,null);Xh(T,H)}return null}function I(R,T,B,H){for(var q=null,Y=null,K=T,O=T=0,te=null;K!==null&&O<B.length;O++){K.index>O?(te=K,K=null):te=K.sibling;var $=A(R,K,B[O],H);if($===null){K===null&&(K=te);break}n&&K&&$.alternate===null&&r(R,K),T=p($,T,O),Y===null?q=$:Y.sibling=$,Y=$,K=te}if(O===B.length)return a(R,K),bt&&Ms(R,O),q;if(K===null){for(;O<B.length;O++)K=y(R,B[O],H),K!==null&&(T=p(K,T,O),Y===null?q=K:Y.sibling=K,Y=K);return bt&&Ms(R,O),q}for(K=c(R,K);O<B.length;O++)te=S(K,R,O,B[O],H),te!==null&&(n&&te.alternate!==null&&K.delete(te.key===null?O:te.key),T=p(te,T,O),Y===null?q=te:Y.sibling=te,Y=te);return n&&K.forEach(function(X){return r(R,X)}),bt&&Ms(R,O),q}function N(R,T,B,H){var q=Pc(B);if(typeof q!="function")throw Error(ie(150));if(B=q.call(B),B==null)throw Error(ie(151));for(var Y=q=null,K=T,O=T=0,te=null,$=B.next();K!==null&&!$.done;O++,$=B.next()){K.index>O?(te=K,K=null):te=K.sibling;var X=A(R,K,$.value,H);if(X===null){K===null&&(K=te);break}n&&K&&X.alternate===null&&r(R,K),T=p(X,T,O),Y===null?q=X:Y.sibling=X,Y=X,K=te}if($.done)return a(R,K),bt&&Ms(R,O),q;if(K===null){for(;!$.done;O++,$=B.next())$=y(R,$.value,H),$!==null&&(T=p($,T,O),Y===null?q=$:Y.sibling=$,Y=$);return bt&&Ms(R,O),q}for(K=c(R,K);!$.done;O++,$=B.next())$=S(K,R,O,$.value,H),$!==null&&(n&&$.alternate!==null&&K.delete($.key===null?O:$.key),T=p($,T,O),Y===null?q=$:Y.sibling=$,Y=$);return n&&K.forEach(function(pe){return r(R,pe)}),bt&&Ms(R,O),q}function F(R,T,B,H){if(typeof B=="object"&&B!==null&&B.type===qa&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Uh:e:{for(var q=B.key,Y=T;Y!==null;){if(Y.key===q){if(q=B.type,q===qa){if(Y.tag===7){a(R,Y.sibling),T=u(Y,B.props.children),T.return=R,R=T;break e}}else if(Y.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ni&&TS(q)===Y.type){a(R,Y.sibling),T=u(Y,B.props),T.ref=jc(R,Y,B),T.return=R,R=T;break e}a(R,Y);break}else r(R,Y);Y=Y.sibling}B.type===qa?(T=Vs(B.props.children,R.mode,H,B.key),T.return=R,R=T):(H=_p(B.type,B.key,B.props,null,R.mode,H),H.ref=jc(R,T,B),H.return=R,R=H)}return m(R);case Wa:e:{for(Y=B.key;T!==null;){if(T.key===Y)if(T.tag===4&&T.stateNode.containerInfo===B.containerInfo&&T.stateNode.implementation===B.implementation){a(R,T.sibling),T=u(T,B.children||[]),T.return=R,R=T;break e}else{a(R,T);break}else r(R,T);T=T.sibling}T=fb(B,R.mode,H),T.return=R,R=T}return m(R);case Ni:return Y=B._init,F(R,T,Y(B._payload),H)}if(Gc(B))return I(R,T,B,H);if(Pc(B))return N(R,T,B,H);Xh(R,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,T!==null&&T.tag===6?(a(R,T.sibling),T=u(T,B),T.return=R,R=T):(a(R,T),T=pb(B,R.mode,H),T.return=R,R=T),m(R)):a(R,T)}return F}var ml=NI(!0),PI=NI(!1),Hd={},Sr=os(Hd),yd=os(Hd),xd=os(Hd);function zs(n){if(n===Hd)throw Error(ie(174));return n}function N0(n,r){switch(lt(xd,r),lt(yd,n),lt(Sr,Hd),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:$b(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=$b(r,n)}ft(Sr),lt(Sr,r)}function gl(){ft(Sr),ft(yd),ft(xd)}function BI(n){zs(xd.current);var r=zs(Sr.current),a=$b(r,n.type);r!==a&&(lt(yd,n),lt(Sr,a))}function P0(n){yd.current===n&&(ft(Sr),ft(yd))}var wt=os(0);function Kp(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ab=[];function B0(){for(var n=0;n<ab.length;n++)ab[n]._workInProgressVersionPrimary=null;ab.length=0}var bp=ri.ReactCurrentDispatcher,lb=ri.ReactCurrentBatchConfig,qs=0,vt=null,Gt=null,Zt=null,Yp=!1,rd=!1,Ed=0,P7=0;function hn(){throw Error(ie(321))}function O0(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Go(n[a],r[a]))return!1;return!0}function R0(n,r,a,c,u,p){if(qs=p,vt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bp.current=n===null||n.memoizedState===null?L7:j7,n=a(c,u),rd){p=0;do{if(rd=!1,Ed=0,25<=p)throw Error(ie(301));p+=1,Zt=Gt=null,r.updateQueue=null,bp.current=z7,n=a(c,u)}while(rd)}if(bp.current=Qp,r=Gt!==null&&Gt.next!==null,qs=0,Zt=Gt=vt=null,Yp=!1,r)throw Error(ie(300));return n}function L0(){var n=Ed!==0;return Ed=0,n}function gr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?vt.memoizedState=Zt=n:Zt=Zt.next=n,Zt}function xo(){if(Gt===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=Gt.next;var r=Zt===null?vt.memoizedState:Zt.next;if(r!==null)Zt=r,Gt=n;else{if(n===null)throw Error(ie(310));Gt=n,n={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Zt===null?vt.memoizedState=Zt=n:Zt=Zt.next=n}return Zt}function Sd(n,r){return typeof r=="function"?r(n):r}function cb(n){var r=xo(),a=r.queue;if(a===null)throw Error(ie(311));a.lastRenderedReducer=n;var c=Gt,u=c.baseQueue,p=a.pending;if(p!==null){if(u!==null){var m=u.next;u.next=p.next,p.next=m}c.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,c=c.baseState;var w=m=null,k=null,_=p;do{var x=_.lane;if((qs&x)===x)k!==null&&(k=k.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),c=_.hasEagerState?_.eagerState:n(c,_.action);else{var y={lane:x,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};k===null?(w=k=y,m=c):k=k.next=y,vt.lanes|=x,Gs|=x}_=_.next}while(_!==null&&_!==p);k===null?m=c:k.next=w,Go(c,r.memoizedState)||(Un=!0),r.memoizedState=c,r.baseState=m,r.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){u=n;do p=u.lane,vt.lanes|=p,Gs|=p,u=u.next;while(u!==n)}else u===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function db(n){var r=xo(),a=r.queue;if(a===null)throw Error(ie(311));a.lastRenderedReducer=n;var c=a.dispatch,u=a.pending,p=r.memoizedState;if(u!==null){a.pending=null;var m=u=u.next;do p=n(p,m.action),m=m.next;while(m!==u);Go(p,r.memoizedState)||(Un=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function OI(){}function RI(n,r){var a=vt,c=xo(),u=r(),p=!Go(c.memoizedState,u);if(p&&(c.memoizedState=u,Un=!0),c=c.queue,j0(zI.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Zt!==null&&Zt.memoizedState.tag&1){if(a.flags|=2048,Dd(9,jI.bind(null,a,c,u,r),void 0,null),Jt===null)throw Error(ie(349));qs&30||LI(a,r,u)}return u}function LI(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=vt.updateQueue,r===null?(r={lastEffect:null,stores:null},vt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function jI(n,r,a,c){r.value=a,r.getSnapshot=c,FI(r)&&VI(n)}function zI(n,r,a){return a(function(){FI(r)&&VI(n)})}function FI(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Go(n,a)}catch{return!0}}function VI(n){var r=ti(n,1);r!==null&&Wo(r,n,1,-1)}function IS(n){var r=gr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sd,lastRenderedState:n},r.queue=n,n=n.dispatch=R7.bind(null,vt,n),[r.memoizedState,n]}function Dd(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=vt.updateQueue,r===null?(r={lastEffect:null,stores:null},vt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function UI(){return xo().memoizedState}function wp(n,r,a,c){var u=gr();vt.flags|=n,u.memoizedState=Dd(1|r,a,void 0,c===void 0?null:c)}function Df(n,r,a,c){var u=xo();c=c===void 0?null:c;var p=void 0;if(Gt!==null){var m=Gt.memoizedState;if(p=m.destroy,c!==null&&O0(c,m.deps)){u.memoizedState=Dd(r,a,p,c);return}}vt.flags|=n,u.memoizedState=Dd(1|r,a,p,c)}function MS(n,r){return wp(8390656,8,n,r)}function j0(n,r){return Df(2048,8,n,r)}function HI(n,r){return Df(4,2,n,r)}function $I(n,r){return Df(4,4,n,r)}function WI(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function qI(n,r,a){return a=a!=null?a.concat([n]):null,Df(4,4,WI.bind(null,r,n),a)}function z0(){}function GI(n,r){var a=xo();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&O0(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function KI(n,r){var a=xo();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&O0(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function YI(n,r,a){return qs&21?(Go(a,r)||(a=JT(),vt.lanes|=a,Gs|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=a)}function B7(n,r){var a=tt;tt=a!==0&&4>a?a:4,n(!0);var c=lb.transition;lb.transition={};try{n(!1),r()}finally{tt=a,lb.transition=c}}function QI(){return xo().memoizedState}function O7(n,r,a){var c=Ki(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ZI(n))JI(r,a);else if(a=DI(n,r,a,c),a!==null){var u=Sn();Wo(a,n,c,u),XI(a,r,c)}}function R7(n,r,a){var c=Ki(n),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ZI(n))JI(r,u);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var m=r.lastRenderedState,w=p(m,a);if(u.hasEagerState=!0,u.eagerState=w,Go(w,m)){var k=r.interleaved;k===null?(u.next=u,I0(r)):(u.next=k.next,k.next=u),r.interleaved=u;return}}catch{}finally{}a=DI(n,r,u,c),a!==null&&(u=Sn(),Wo(a,n,c,u),XI(a,r,c))}}function ZI(n){var r=n.alternate;return n===vt||r!==null&&r===vt}function JI(n,r){rd=Yp=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function XI(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,g0(n,a)}}var Qp={readContext:yo,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},L7={readContext:yo,useCallback:function(n,r){return gr().memoizedState=[n,r===void 0?null:r],n},useContext:yo,useEffect:MS,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,wp(4194308,4,WI.bind(null,r,n),a)},useLayoutEffect:function(n,r){return wp(4194308,4,n,r)},useInsertionEffect:function(n,r){return wp(4,2,n,r)},useMemo:function(n,r){var a=gr();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=gr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=O7.bind(null,vt,n),[c.memoizedState,n]},useRef:function(n){var r=gr();return n={current:n},r.memoizedState=n},useState:IS,useDebugValue:z0,useDeferredValue:function(n){return gr().memoizedState=n},useTransition:function(){var n=IS(!1),r=n[0];return n=B7.bind(null,n[1]),gr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=vt,u=gr();if(bt){if(a===void 0)throw Error(ie(407));a=a()}else{if(a=r(),Jt===null)throw Error(ie(349));qs&30||LI(c,r,a)}u.memoizedState=a;var p={value:a,getSnapshot:r};return u.queue=p,MS(zI.bind(null,c,p,n),[n]),c.flags|=2048,Dd(9,jI.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=gr(),r=Jt.identifierPrefix;if(bt){var a=Qr,c=Yr;a=(c&~(1<<32-$o(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ed++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=P7++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},j7={readContext:yo,useCallback:GI,useContext:yo,useEffect:j0,useImperativeHandle:qI,useInsertionEffect:HI,useLayoutEffect:$I,useMemo:KI,useReducer:cb,useRef:UI,useState:function(){return cb(Sd)},useDebugValue:z0,useDeferredValue:function(n){var r=xo();return YI(r,Gt.memoizedState,n)},useTransition:function(){var n=cb(Sd)[0],r=xo().memoizedState;return[n,r]},useMutableSource:OI,useSyncExternalStore:RI,useId:QI,unstable_isNewReconciler:!1},z7={readContext:yo,useCallback:GI,useContext:yo,useEffect:j0,useImperativeHandle:qI,useInsertionEffect:HI,useLayoutEffect:$I,useMemo:KI,useReducer:db,useRef:UI,useState:function(){return db(Sd)},useDebugValue:z0,useDeferredValue:function(n){var r=xo();return Gt===null?r.memoizedState=n:YI(r,Gt.memoizedState,n)},useTransition:function(){var n=db(Sd)[0],r=xo().memoizedState;return[n,r]},useMutableSource:OI,useSyncExternalStore:RI,useId:QI,unstable_isNewReconciler:!1};function kl(n,r){try{var a="",c=r;do a+=pF(c),c=c.return;while(c);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:u,digest:null}}function ub(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function pw(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var F7=typeof WeakMap=="function"?WeakMap:Map;function e5(n,r,a){a=Zr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Jp||(Jp=!0,_w=c),pw(n,r)},a}function t5(n,r,a){a=Zr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;a.payload=function(){return c(u)},a.callback=function(){pw(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){pw(n,r),typeof c!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),a}function NS(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new F7;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(a)||(u.add(a),n=e9.bind(null,n,r,a),r.then(n,n))}function PS(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function BS(n,r,a,c,u){return n.mode&1?(n.flags|=65536,n.lanes=u,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Zr(-1,1),r.tag=2,qi(a,r,1))),a.lanes|=1),n)}var V7=ri.ReactCurrentOwner,Un=!1;function xn(n,r,a,c){r.child=n===null?PI(r,null,a,c):ml(r,n.child,a,c)}function OS(n,r,a,c,u){a=a.render;var p=r.ref;return al(r,u),c=R0(n,r,a,c,p,u),a=L0(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~u,ni(n,r,u)):(bt&&a&&y0(r),r.flags|=1,xn(n,r,c,u),r.child)}function RS(n,r,a,c,u){if(n===null){var p=a.type;return typeof p=="function"&&!G0(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,n5(n,r,p,c,u)):(n=_p(a.type,null,c,r,r.mode,u),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&u)){var m=p.memoizedProps;if(a=a.compare,a=a!==null?a:vd,a(m,c)&&n.ref===r.ref)return ni(n,r,u)}return r.flags|=1,n=Yi(p,c),n.ref=r.ref,n.return=r,r.child=n}function n5(n,r,a,c,u){if(n!==null){var p=n.memoizedProps;if(vd(p,c)&&n.ref===r.ref)if(Un=!1,r.pendingProps=c=p,(n.lanes&u)!==0)n.flags&131072&&(Un=!0);else return r.lanes=n.lanes,ni(n,r,u)}return fw(n,r,a,c,u)}function o5(n,r,a){var c=r.pendingProps,u=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(nl,Xn),Xn|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,lt(nl,Xn),Xn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,lt(nl,Xn),Xn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,lt(nl,Xn),Xn|=c;return xn(n,r,u,a),r.child}function r5(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function fw(n,r,a,c,u){var p=$n(a)?$s:kn.current;return p=pl(r,p),al(r,u),a=R0(n,r,a,c,p,u),c=L0(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~u,ni(n,r,u)):(bt&&c&&y0(r),r.flags|=1,xn(n,r,a,u),r.child)}function LS(n,r,a,c,u){if($n(a)){var p=!0;Up(r)}else p=!1;if(al(r,u),r.stateNode===null)vp(n,r),MI(r,a,c),hw(r,a,c,u),c=!0;else if(n===null){var m=r.stateNode,w=r.memoizedProps;m.props=w;var k=m.context,_=a.contextType;typeof _=="object"&&_!==null?_=yo(_):(_=$n(a)?$s:kn.current,_=pl(r,_));var x=a.getDerivedStateFromProps,y=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function";y||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==c||k!==_)&&DS(r,m,c,_),Pi=!1;var A=r.memoizedState;m.state=A,Gp(r,c,m,u),k=r.memoizedState,w!==c||A!==k||Hn.current||Pi?(typeof x=="function"&&(uw(r,a,x,c),k=r.memoizedState),(w=Pi||SS(r,a,w,c,A,k,_))?(y||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),m.props=c,m.state=k,m.context=_,c=w):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{m=r.stateNode,TI(n,r),w=r.memoizedProps,_=r.type===r.elementType?w:Vo(r.type,w),m.props=_,y=r.pendingProps,A=m.context,k=a.contextType,typeof k=="object"&&k!==null?k=yo(k):(k=$n(a)?$s:kn.current,k=pl(r,k));var S=a.getDerivedStateFromProps;(x=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==y||A!==k)&&DS(r,m,c,k),Pi=!1,A=r.memoizedState,m.state=A,Gp(r,c,m,u);var I=r.memoizedState;w!==y||A!==I||Hn.current||Pi?(typeof S=="function"&&(uw(r,a,S,c),I=r.memoizedState),(_=Pi||SS(r,a,_,c,A,I,k)||!1)?(x||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,I,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,I,k)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=I),m.props=c,m.state=I,m.context=k,c=_):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(r.flags|=1024),c=!1)}return mw(n,r,a,c,p,u)}function mw(n,r,a,c,u,p){r5(n,r);var m=(r.flags&128)!==0;if(!c&&!m)return u&&CS(r,a,!1),ni(n,r,p);c=r.stateNode,V7.current=r;var w=m&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&m?(r.child=ml(r,n.child,null,p),r.child=ml(r,null,w,p)):xn(n,r,w,p),r.memoizedState=c.state,u&&CS(r,a,!0),r.child}function i5(n){var r=n.stateNode;r.pendingContext?AS(n,r.pendingContext,r.pendingContext!==r.context):r.context&&AS(n,r.context,!1),N0(n,r.containerInfo)}function jS(n,r,a,c,u){return fl(),E0(u),r.flags|=256,xn(n,r,a,c),r.child}var gw={dehydrated:null,treeContext:null,retryLane:0};function kw(n){return{baseLanes:n,cachePool:null,transitions:null}}function s5(n,r,a){var c=r.pendingProps,u=wt.current,p=!1,m=(r.flags&128)!==0,w;if((w=m)||(w=n!==null&&n.memoizedState===null?!1:(u&2)!==0),w?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(u|=1),lt(wt,u&1),n===null)return cw(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=c.children,n=c.fallback,p?(c=r.mode,p=r.child,m={mode:"hidden",children:m},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=m):p=Mf(m,c,0,null),n=Vs(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=kw(a),r.memoizedState=gw,n):F0(r,m));if(u=n.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return U7(n,r,m,c,w,u,a);if(p){p=c.fallback,m=r.mode,u=n.child,w=u.sibling;var k={mode:"hidden",children:c.children};return!(m&1)&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=Yi(u,k),c.subtreeFlags=u.subtreeFlags&14680064),w!==null?p=Yi(w,p):(p=Vs(p,m,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,m=n.child.memoizedState,m=m===null?kw(a):{baseLanes:m.baseLanes|a,cachePool:null,transitions:m.transitions},p.memoizedState=m,p.childLanes=n.childLanes&~a,r.memoizedState=gw,c}return p=n.child,n=p.sibling,c=Yi(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function F0(n,r){return r=Mf({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ep(n,r,a,c){return c!==null&&E0(c),ml(r,n.child,null,a),n=F0(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function U7(n,r,a,c,u,p,m){if(a)return r.flags&256?(r.flags&=-257,c=ub(Error(ie(422))),ep(n,r,m,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,u=r.mode,c=Mf({mode:"visible",children:c.children},u,0,null),p=Vs(p,u,m,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&ml(r,n.child,null,m),r.child.memoizedState=kw(m),r.memoizedState=gw,p);if(!(r.mode&1))return ep(n,r,m,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var w=c.dgst;return c=w,p=Error(ie(419)),c=ub(p,c,void 0),ep(n,r,m,c)}if(w=(m&n.childLanes)!==0,Un||w){if(c=Jt,c!==null){switch(m&-m){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(c.suspendedLanes|m)?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,ti(n,u),Wo(c,n,u,-1))}return q0(),c=ub(Error(ie(421))),ep(n,r,m,c)}return u.data==="$?"?(r.flags|=128,r.child=n.child,r=t9.bind(null,n),u._reactRetry=r,null):(n=p.treeContext,no=Wi(u.nextSibling),oo=r,bt=!0,Ho=null,n!==null&&(wo[vo++]=Yr,wo[vo++]=Qr,wo[vo++]=Ws,Yr=n.id,Qr=n.overflow,Ws=r),r=F0(r,c.children),r.flags|=4096,r)}function zS(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),dw(n.return,r,a)}function hb(n,r,a,c,u){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=u)}function a5(n,r,a){var c=r.pendingProps,u=c.revealOrder,p=c.tail;if(xn(n,r,c.children,a),c=wt.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zS(n,a,r);else if(n.tag===19)zS(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(lt(wt,c),!(r.mode&1))r.memoizedState=null;else switch(u){case"forwards":for(a=r.child,u=null;a!==null;)n=a.alternate,n!==null&&Kp(n)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),hb(r,!1,u,a,p);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(n=u.alternate,n!==null&&Kp(n)===null){r.child=u;break}n=u.sibling,u.sibling=a,a=u,u=n}hb(r,!0,a,null,p);break;case"together":hb(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function vp(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ni(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Gs|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(ie(153));if(r.child!==null){for(n=r.child,a=Yi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Yi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function H7(n,r,a){switch(r.tag){case 3:i5(r),fl();break;case 5:BI(r);break;case 1:$n(r.type)&&Up(r);break;case 4:N0(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;lt(Wp,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(lt(wt,wt.current&1),r.flags|=128,null):a&r.child.childLanes?s5(n,r,a):(lt(wt,wt.current&1),n=ni(n,r,a),n!==null?n.sibling:null);lt(wt,wt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return a5(n,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),lt(wt,wt.current),c)break;return null;case 22:case 23:return r.lanes=0,o5(n,r,a)}return ni(n,r,a)}var l5,bw,c5,d5;l5=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};bw=function(){};c5=function(n,r,a,c){var u=n.memoizedProps;if(u!==c){n=r.stateNode,zs(Sr.current);var p=null;switch(a){case"input":u=Fb(n,u),c=Fb(n,c),p=[];break;case"select":u=At({},u,{value:void 0}),c=At({},c,{value:void 0}),p=[];break;case"textarea":u=Hb(n,u),c=Hb(n,c),p=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fp)}Wb(a,c);var m;a=null;for(_ in u)if(!c.hasOwnProperty(_)&&u.hasOwnProperty(_)&&u[_]!=null)if(_==="style"){var w=u[_];for(m in w)w.hasOwnProperty(m)&&(a||(a={}),a[m]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(pd.hasOwnProperty(_)?p||(p=[]):(p=p||[]).push(_,null));for(_ in c){var k=c[_];if(w=u!=null?u[_]:void 0,c.hasOwnProperty(_)&&k!==w&&(k!=null||w!=null))if(_==="style")if(w){for(m in w)!w.hasOwnProperty(m)||k&&k.hasOwnProperty(m)||(a||(a={}),a[m]="");for(m in k)k.hasOwnProperty(m)&&w[m]!==k[m]&&(a||(a={}),a[m]=k[m])}else a||(p||(p=[]),p.push(_,a)),a=k;else _==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(p=p||[]).push(_,k)):_==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(_,""+k):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(pd.hasOwnProperty(_)?(k!=null&&_==="onScroll"&&ht("scroll",n),p||w===k||(p=[])):(p=p||[]).push(_,k))}a&&(p=p||[]).push("style",a);var _=p;(r.updateQueue=_)&&(r.flags|=4)}};d5=function(n,r,a,c){a!==c&&(r.flags|=4)};function zc(n,r){if(!bt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function pn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var u=n.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=n,u=u.sibling;else for(u=n.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=n,u=u.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function $7(n,r,a){var c=r.pendingProps;switch(x0(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(r),null;case 1:return $n(r.type)&&Vp(),pn(r),null;case 3:return c=r.stateNode,gl(),ft(Hn),ft(kn),B0(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Jh(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ho!==null&&(Ew(Ho),Ho=null))),bw(n,r),pn(r),null;case 5:P0(r);var u=zs(xd.current);if(a=r.type,n!==null&&r.stateNode!=null)c5(n,r,a,c,u),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(ie(166));return pn(r),null}if(n=zs(Sr.current),Jh(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[wr]=r,c[_d]=p,n=(r.mode&1)!==0,a){case"dialog":ht("cancel",c),ht("close",c);break;case"iframe":case"object":case"embed":ht("load",c);break;case"video":case"audio":for(u=0;u<Yc.length;u++)ht(Yc[u],c);break;case"source":ht("error",c);break;case"img":case"image":case"link":ht("error",c),ht("load",c);break;case"details":ht("toggle",c);break;case"input":K2(c,p),ht("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},ht("invalid",c);break;case"textarea":Q2(c,p),ht("invalid",c)}Wb(a,p),u=null;for(var m in p)if(p.hasOwnProperty(m)){var w=p[m];m==="children"?typeof w=="string"?c.textContent!==w&&(p.suppressHydrationWarning!==!0&&Zh(c.textContent,w,n),u=["children",w]):typeof w=="number"&&c.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&Zh(c.textContent,w,n),u=["children",""+w]):pd.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&ht("scroll",c)}switch(a){case"input":Hh(c),Y2(c,p,!0);break;case"textarea":Hh(c),Z2(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Fp)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{m=u.nodeType===9?u:u.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=LT(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=m.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=m.createElement(a,{is:c.is}):(n=m.createElement(a),a==="select"&&(m=n,c.multiple?m.multiple=!0:c.size&&(m.size=c.size))):n=m.createElementNS(n,a),n[wr]=r,n[_d]=c,l5(n,r,!1,!1),r.stateNode=n;e:{switch(m=qb(a,c),a){case"dialog":ht("cancel",n),ht("close",n),u=c;break;case"iframe":case"object":case"embed":ht("load",n),u=c;break;case"video":case"audio":for(u=0;u<Yc.length;u++)ht(Yc[u],n);u=c;break;case"source":ht("error",n),u=c;break;case"img":case"image":case"link":ht("error",n),ht("load",n),u=c;break;case"details":ht("toggle",n),u=c;break;case"input":K2(n,c),u=Fb(n,c),ht("invalid",n);break;case"option":u=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},u=At({},c,{value:void 0}),ht("invalid",n);break;case"textarea":Q2(n,c),u=Hb(n,c),ht("invalid",n);break;default:u=c}Wb(a,u),w=u;for(p in w)if(w.hasOwnProperty(p)){var k=w[p];p==="style"?FT(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&jT(n,k)):p==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&fd(n,k):typeof k=="number"&&fd(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(pd.hasOwnProperty(p)?k!=null&&p==="onScroll"&&ht("scroll",n):k!=null&&d0(n,p,k,m))}switch(a){case"input":Hh(n),Y2(n,c,!1);break;case"textarea":Hh(n),Z2(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Xi(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ol(n,!!c.multiple,p,!1):c.defaultValue!=null&&ol(n,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(n.onclick=Fp)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return pn(r),null;case 6:if(n&&r.stateNode!=null)d5(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(ie(166));if(a=zs(xd.current),zs(Sr.current),Jh(r)){if(c=r.stateNode,a=r.memoizedProps,c[wr]=r,(p=c.nodeValue!==a)&&(n=oo,n!==null))switch(n.tag){case 3:Zh(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zh(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[wr]=r,r.stateNode=c}return pn(r),null;case 13:if(ft(wt),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&no!==null&&r.mode&1&&!(r.flags&128))SI(),fl(),r.flags|=98560,p=!1;else if(p=Jh(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(ie(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(ie(317));p[wr]=r}else fl(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;pn(r),p=!1}else Ho!==null&&(Ew(Ho),Ho=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||wt.current&1?Kt===0&&(Kt=3):q0())),r.updateQueue!==null&&(r.flags|=4),pn(r),null);case 4:return gl(),bw(n,r),n===null&&Ad(r.stateNode.containerInfo),pn(r),null;case 10:return T0(r.type._context),pn(r),null;case 17:return $n(r.type)&&Vp(),pn(r),null;case 19:if(ft(wt),p=r.memoizedState,p===null)return pn(r),null;if(c=(r.flags&128)!==0,m=p.rendering,m===null)if(c)zc(p,!1);else{if(Kt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(m=Kp(n),m!==null){for(r.flags|=128,zc(p,!1),c=m.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,m=p.alternate,m===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=m.childLanes,p.lanes=m.lanes,p.child=m.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=m.memoizedProps,p.memoizedState=m.memoizedState,p.updateQueue=m.updateQueue,p.type=m.type,n=m.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return lt(wt,wt.current&1|2),r.child}n=n.sibling}p.tail!==null&&Ot()>bl&&(r.flags|=128,c=!0,zc(p,!1),r.lanes=4194304)}else{if(!c)if(n=Kp(m),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),zc(p,!0),p.tail===null&&p.tailMode==="hidden"&&!m.alternate&&!bt)return pn(r),null}else 2*Ot()-p.renderingStartTime>bl&&a!==1073741824&&(r.flags|=128,c=!0,zc(p,!1),r.lanes=4194304);p.isBackwards?(m.sibling=r.child,r.child=m):(a=p.last,a!==null?a.sibling=m:r.child=m,p.last=m)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Ot(),r.sibling=null,a=wt.current,lt(wt,c?a&1|2:a&1),r):(pn(r),null);case 22:case 23:return W0(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?Xn&1073741824&&(pn(r),r.subtreeFlags&6&&(r.flags|=8192)):pn(r),null;case 24:return null;case 25:return null}throw Error(ie(156,r.tag))}function W7(n,r){switch(x0(r),r.tag){case 1:return $n(r.type)&&Vp(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return gl(),ft(Hn),ft(kn),B0(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return P0(r),null;case 13:if(ft(wt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(ie(340));fl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ft(wt),null;case 4:return gl(),null;case 10:return T0(r.type._context),null;case 22:case 23:return W0(),null;case 24:return null;default:return null}}var tp=!1,gn=!1,q7=typeof WeakSet=="function"?WeakSet:Set,ue=null;function tl(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Dt(n,r,c)}else a.current=null}function ww(n,r,a){try{a()}catch(c){Dt(n,r,c)}}var FS=!1;function G7(n,r){if(nw=Lp,n=fI(),_0(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var m=0,w=-1,k=-1,_=0,x=0,y=n,A=null;t:for(;;){for(var S;y!==a||u!==0&&y.nodeType!==3||(w=m+u),y!==p||c!==0&&y.nodeType!==3||(k=m+c),y.nodeType===3&&(m+=y.nodeValue.length),(S=y.firstChild)!==null;)A=y,y=S;for(;;){if(y===n)break t;if(A===a&&++_===u&&(w=m),A===p&&++x===c&&(k=m),(S=y.nextSibling)!==null)break;y=A,A=y.parentNode}y=S}a=w===-1||k===-1?null:{start:w,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(ow={focusedElem:n,selectionRange:a},Lp=!1,ue=r;ue!==null;)if(r=ue,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ue=n;else for(;ue!==null;){r=ue;try{var I=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var N=I.memoizedProps,F=I.memoizedState,R=r.stateNode,T=R.getSnapshotBeforeUpdate(r.elementType===r.type?N:Vo(r.type,N),F);R.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var B=r.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(H){Dt(r,r.return,H)}if(n=r.sibling,n!==null){n.return=r.return,ue=n;break}ue=r.return}return I=FS,FS=!1,I}function id(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&n)===n){var p=u.destroy;u.destroy=void 0,p!==void 0&&ww(r,a,p)}u=u.next}while(u!==c)}}function Tf(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function vw(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function u5(n){var r=n.alternate;r!==null&&(n.alternate=null,u5(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[wr],delete r[_d],delete r[sw],delete r[T7],delete r[I7])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function h5(n){return n.tag===5||n.tag===3||n.tag===4}function VS(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||h5(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Aw(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Fp));else if(c!==4&&(n=n.child,n!==null))for(Aw(n,r,a),n=n.sibling;n!==null;)Aw(n,r,a),n=n.sibling}function Cw(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Cw(n,r,a),n=n.sibling;n!==null;)Cw(n,r,a),n=n.sibling}var rn=null,Uo=!1;function Ti(n,r,a){for(a=a.child;a!==null;)p5(n,r,a),a=a.sibling}function p5(n,r,a){if(Er&&typeof Er.onCommitFiberUnmount=="function")try{Er.onCommitFiberUnmount(Af,a)}catch{}switch(a.tag){case 5:gn||tl(a,r);case 6:var c=rn,u=Uo;rn=null,Ti(n,r,a),rn=c,Uo=u,rn!==null&&(Uo?(n=rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rn.removeChild(a.stateNode));break;case 18:rn!==null&&(Uo?(n=rn,a=a.stateNode,n.nodeType===8?ib(n.parentNode,a):n.nodeType===1&&ib(n,a),bd(n)):ib(rn,a.stateNode));break;case 4:c=rn,u=Uo,rn=a.stateNode.containerInfo,Uo=!0,Ti(n,r,a),rn=c,Uo=u;break;case 0:case 11:case 14:case 15:if(!gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var p=u,m=p.destroy;p=p.tag,m!==void 0&&(p&2||p&4)&&ww(a,r,m),u=u.next}while(u!==c)}Ti(n,r,a);break;case 1:if(!gn&&(tl(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(w){Dt(a,r,w)}Ti(n,r,a);break;case 21:Ti(n,r,a);break;case 22:a.mode&1?(gn=(c=gn)||a.memoizedState!==null,Ti(n,r,a),gn=c):Ti(n,r,a);break;default:Ti(n,r,a)}}function US(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new q7),r.forEach(function(c){var u=n9.bind(null,n,c);a.has(c)||(a.add(c),c.then(u,u))})}}function jo(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var p=n,m=r,w=m;e:for(;w!==null;){switch(w.tag){case 5:rn=w.stateNode,Uo=!1;break e;case 3:rn=w.stateNode.containerInfo,Uo=!0;break e;case 4:rn=w.stateNode.containerInfo,Uo=!0;break e}w=w.return}if(rn===null)throw Error(ie(160));p5(p,m,u),rn=null,Uo=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(_){Dt(u,r,_)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)f5(r,n),r=r.sibling}function f5(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jo(r,n),mr(n),c&4){try{id(3,n,n.return),Tf(3,n)}catch(N){Dt(n,n.return,N)}try{id(5,n,n.return)}catch(N){Dt(n,n.return,N)}}break;case 1:jo(r,n),mr(n),c&512&&a!==null&&tl(a,a.return);break;case 5:if(jo(r,n),mr(n),c&512&&a!==null&&tl(a,a.return),n.flags&32){var u=n.stateNode;try{fd(u,"")}catch(N){Dt(n,n.return,N)}}if(c&4&&(u=n.stateNode,u!=null)){var p=n.memoizedProps,m=a!==null?a.memoizedProps:p,w=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&OT(u,p),qb(w,m);var _=qb(w,p);for(m=0;m<k.length;m+=2){var x=k[m],y=k[m+1];x==="style"?FT(u,y):x==="dangerouslySetInnerHTML"?jT(u,y):x==="children"?fd(u,y):d0(u,x,y,_)}switch(w){case"input":Vb(u,p);break;case"textarea":RT(u,p);break;case"select":var A=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var S=p.value;S!=null?ol(u,!!p.multiple,S,!1):A!==!!p.multiple&&(p.defaultValue!=null?ol(u,!!p.multiple,p.defaultValue,!0):ol(u,!!p.multiple,p.multiple?[]:"",!1))}u[_d]=p}catch(N){Dt(n,n.return,N)}}break;case 6:if(jo(r,n),mr(n),c&4){if(n.stateNode===null)throw Error(ie(162));u=n.stateNode,p=n.memoizedProps;try{u.nodeValue=p}catch(N){Dt(n,n.return,N)}}break;case 3:if(jo(r,n),mr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{bd(r.containerInfo)}catch(N){Dt(n,n.return,N)}break;case 4:jo(r,n),mr(n);break;case 13:jo(r,n),mr(n),u=n.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(H0=Ot())),c&4&&US(n);break;case 22:if(x=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(_=gn)||x,jo(r,n),gn=_):jo(r,n),mr(n),c&8192){if(_=n.memoizedState!==null,(n.stateNode.isHidden=_)&&!x&&n.mode&1)for(ue=n,x=n.child;x!==null;){for(y=ue=x;ue!==null;){switch(A=ue,S=A.child,A.tag){case 0:case 11:case 14:case 15:id(4,A,A.return);break;case 1:tl(A,A.return);var I=A.stateNode;if(typeof I.componentWillUnmount=="function"){c=A,a=A.return;try{r=c,I.props=r.memoizedProps,I.state=r.memoizedState,I.componentWillUnmount()}catch(N){Dt(c,a,N)}}break;case 5:tl(A,A.return);break;case 22:if(A.memoizedState!==null){$S(y);continue}}S!==null?(S.return=A,ue=S):$S(y)}x=x.sibling}e:for(x=null,y=n;;){if(y.tag===5){if(x===null){x=y;try{u=y.stateNode,_?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=y.stateNode,k=y.memoizedProps.style,m=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=zT("display",m))}catch(N){Dt(n,n.return,N)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=_?"":y.memoizedProps}catch(N){Dt(n,n.return,N)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===n)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:jo(r,n),mr(n),c&4&&US(n);break;case 21:break;default:jo(r,n),mr(n)}}function mr(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(h5(a)){var c=a;break e}a=a.return}throw Error(ie(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(fd(u,""),c.flags&=-33);var p=VS(n);Cw(n,p,u);break;case 3:case 4:var m=c.stateNode.containerInfo,w=VS(n);Aw(n,w,m);break;default:throw Error(ie(161))}}catch(k){Dt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function K7(n,r,a){ue=n,m5(n)}function m5(n,r,a){for(var c=(n.mode&1)!==0;ue!==null;){var u=ue,p=u.child;if(u.tag===22&&c){var m=u.memoizedState!==null||tp;if(!m){var w=u.alternate,k=w!==null&&w.memoizedState!==null||gn;w=tp;var _=gn;if(tp=m,(gn=k)&&!_)for(ue=u;ue!==null;)m=ue,k=m.child,m.tag===22&&m.memoizedState!==null?WS(u):k!==null?(k.return=m,ue=k):WS(u);for(;p!==null;)ue=p,m5(p),p=p.sibling;ue=u,tp=w,gn=_}HS(n)}else u.subtreeFlags&8772&&p!==null?(p.return=u,ue=p):HS(n)}}function HS(n){for(;ue!==null;){var r=ue;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:gn||Tf(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!gn)if(a===null)c.componentDidMount();else{var u=r.elementType===r.type?a.memoizedProps:Vo(r.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&ES(r,p,c);break;case 3:var m=r.updateQueue;if(m!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}ES(r,m,a)}break;case 5:var w=r.stateNode;if(a===null&&r.flags&4){a=w;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var _=r.alternate;if(_!==null){var x=_.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&bd(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}gn||r.flags&512&&vw(r)}catch(A){Dt(r,r.return,A)}}if(r===n){ue=null;break}if(a=r.sibling,a!==null){a.return=r.return,ue=a;break}ue=r.return}}function $S(n){for(;ue!==null;){var r=ue;if(r===n){ue=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ue=a;break}ue=r.return}}function WS(n){for(;ue!==null;){var r=ue;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Tf(4,r)}catch(k){Dt(r,a,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(k){Dt(r,u,k)}}var p=r.return;try{vw(r)}catch(k){Dt(r,p,k)}break;case 5:var m=r.return;try{vw(r)}catch(k){Dt(r,m,k)}}}catch(k){Dt(r,r.return,k)}if(r===n){ue=null;break}var w=r.sibling;if(w!==null){w.return=r.return,ue=w;break}ue=r.return}}var Y7=Math.ceil,Zp=ri.ReactCurrentDispatcher,V0=ri.ReactCurrentOwner,Co=ri.ReactCurrentBatchConfig,Ue=0,Jt=null,Ut=null,an=0,Xn=0,nl=os(0),Kt=0,Td=null,Gs=0,If=0,U0=0,sd=null,zn=null,H0=0,bl=1/0,Wr=null,Jp=!1,_w=null,Gi=null,np=!1,Fi=null,Xp=0,ad=0,yw=null,Ap=-1,Cp=0;function Sn(){return Ue&6?Ot():Ap!==-1?Ap:Ap=Ot()}function Ki(n){return n.mode&1?Ue&2&&an!==0?an&-an:N7.transition!==null?(Cp===0&&(Cp=JT()),Cp):(n=tt,n!==0||(n=window.event,n=n===void 0?16:iI(n.type)),n):1}function Wo(n,r,a,c){if(50<ad)throw ad=0,yw=null,Error(ie(185));Fd(n,a,c),(!(Ue&2)||n!==Jt)&&(n===Jt&&(!(Ue&2)&&(If|=a),Kt===4&&Ri(n,an)),Wn(n,c),a===1&&Ue===0&&!(r.mode&1)&&(bl=Ot()+500,Ef&&rs()))}function Wn(n,r){var a=n.callbackNode;NF(n,r);var c=Rp(n,n===Jt?an:0);if(c===0)a!==null&&eS(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&eS(a),r===1)n.tag===0?M7(qS.bind(null,n)):yI(qS.bind(null,n)),S7(function(){!(Ue&6)&&rs()}),a=null;else{switch(XT(c)){case 1:a=m0;break;case 4:a=QT;break;case 16:a=Op;break;case 536870912:a=ZT;break;default:a=Op}a=_5(a,g5.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function g5(n,r){if(Ap=-1,Cp=0,Ue&6)throw Error(ie(327));var a=n.callbackNode;if(ll()&&n.callbackNode!==a)return null;var c=Rp(n,n===Jt?an:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=ef(n,c);else{r=c;var u=Ue;Ue|=2;var p=b5();(Jt!==n||an!==r)&&(Wr=null,bl=Ot()+500,Fs(n,r));do try{J7();break}catch(w){k5(n,w)}while(1);D0(),Zp.current=p,Ue=u,Ut!==null?r=0:(Jt=null,an=0,r=Kt)}if(r!==0){if(r===2&&(u=Zb(n),u!==0&&(c=u,r=xw(n,u))),r===1)throw a=Td,Fs(n,0),Ri(n,c),Wn(n,Ot()),a;if(r===6)Ri(n,c);else{if(u=n.current.alternate,!(c&30)&&!Q7(u)&&(r=ef(n,c),r===2&&(p=Zb(n),p!==0&&(c=p,r=xw(n,p))),r===1))throw a=Td,Fs(n,0),Ri(n,c),Wn(n,Ot()),a;switch(n.finishedWork=u,n.finishedLanes=c,r){case 0:case 1:throw Error(ie(345));case 2:Ns(n,zn,Wr);break;case 3:if(Ri(n,c),(c&130023424)===c&&(r=H0+500-Ot(),10<r)){if(Rp(n,0)!==0)break;if(u=n.suspendedLanes,(u&c)!==c){Sn(),n.pingedLanes|=n.suspendedLanes&u;break}n.timeoutHandle=iw(Ns.bind(null,n,zn,Wr),r);break}Ns(n,zn,Wr);break;case 4:if(Ri(n,c),(c&4194240)===c)break;for(r=n.eventTimes,u=-1;0<c;){var m=31-$o(c);p=1<<m,m=r[m],m>u&&(u=m),c&=~p}if(c=u,c=Ot()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Y7(c/1960))-c,10<c){n.timeoutHandle=iw(Ns.bind(null,n,zn,Wr),c);break}Ns(n,zn,Wr);break;case 5:Ns(n,zn,Wr);break;default:throw Error(ie(329))}}}return Wn(n,Ot()),n.callbackNode===a?g5.bind(null,n):null}function xw(n,r){var a=sd;return n.current.memoizedState.isDehydrated&&(Fs(n,r).flags|=256),n=ef(n,r),n!==2&&(r=zn,zn=a,r!==null&&Ew(r)),n}function Ew(n){zn===null?zn=n:zn.push.apply(zn,n)}function Q7(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],p=u.getSnapshot;u=u.value;try{if(!Go(p(),u))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ri(n,r){for(r&=~U0,r&=~If,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-$o(r),c=1<<a;n[a]=-1,r&=~c}}function qS(n){if(Ue&6)throw Error(ie(327));ll();var r=Rp(n,0);if(!(r&1))return Wn(n,Ot()),null;var a=ef(n,r);if(n.tag!==0&&a===2){var c=Zb(n);c!==0&&(r=c,a=xw(n,c))}if(a===1)throw a=Td,Fs(n,0),Ri(n,r),Wn(n,Ot()),a;if(a===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ns(n,zn,Wr),Wn(n,Ot()),null}function $0(n,r){var a=Ue;Ue|=1;try{return n(r)}finally{Ue=a,Ue===0&&(bl=Ot()+500,Ef&&rs())}}function Ks(n){Fi!==null&&Fi.tag===0&&!(Ue&6)&&ll();var r=Ue;Ue|=1;var a=Co.transition,c=tt;try{if(Co.transition=null,tt=1,n)return n()}finally{tt=c,Co.transition=a,Ue=r,!(Ue&6)&&rs()}}function W0(){Xn=nl.current,ft(nl)}function Fs(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,E7(a)),Ut!==null)for(a=Ut.return;a!==null;){var c=a;switch(x0(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vp();break;case 3:gl(),ft(Hn),ft(kn),B0();break;case 5:P0(c);break;case 4:gl();break;case 13:ft(wt);break;case 19:ft(wt);break;case 10:T0(c.type._context);break;case 22:case 23:W0()}a=a.return}if(Jt=n,Ut=n=Yi(n.current,null),an=Xn=r,Kt=0,Td=null,U0=If=Gs=0,zn=sd=null,js!==null){for(r=0;r<js.length;r++)if(a=js[r],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,p=a.pending;if(p!==null){var m=p.next;p.next=u,c.next=m}a.pending=c}js=null}return n}function k5(n,r){do{var a=Ut;try{if(D0(),bp.current=Qp,Yp){for(var c=vt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}Yp=!1}if(qs=0,Zt=Gt=vt=null,rd=!1,Ed=0,V0.current=null,a===null||a.return===null){Kt=1,Td=r,Ut=null;break}e:{var p=n,m=a.return,w=a,k=r;if(r=an,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var _=k,x=w,y=x.tag;if(!(x.mode&1)&&(y===0||y===11||y===15)){var A=x.alternate;A?(x.updateQueue=A.updateQueue,x.memoizedState=A.memoizedState,x.lanes=A.lanes):(x.updateQueue=null,x.memoizedState=null)}var S=PS(m);if(S!==null){S.flags&=-257,BS(S,m,w,p,r),S.mode&1&&NS(p,_,r),r=S,k=_;var I=r.updateQueue;if(I===null){var N=new Set;N.add(k),r.updateQueue=N}else I.add(k);break e}else{if(!(r&1)){NS(p,_,r),q0();break e}k=Error(ie(426))}}else if(bt&&w.mode&1){var F=PS(m);if(F!==null){!(F.flags&65536)&&(F.flags|=256),BS(F,m,w,p,r),E0(kl(k,w));break e}}p=k=kl(k,w),Kt!==4&&(Kt=2),sd===null?sd=[p]:sd.push(p),p=m;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var R=e5(p,k,r);xS(p,R);break e;case 1:w=k;var T=p.type,B=p.stateNode;if(!(p.flags&128)&&(typeof T.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Gi===null||!Gi.has(B)))){p.flags|=65536,r&=-r,p.lanes|=r;var H=t5(p,w,r);xS(p,H);break e}}p=p.return}while(p!==null)}v5(a)}catch(q){r=q,Ut===a&&a!==null&&(Ut=a=a.return);continue}break}while(1)}function b5(){var n=Zp.current;return Zp.current=Qp,n===null?Qp:n}function q0(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),Jt===null||!(Gs&268435455)&&!(If&268435455)||Ri(Jt,an)}function ef(n,r){var a=Ue;Ue|=2;var c=b5();(Jt!==n||an!==r)&&(Wr=null,Fs(n,r));do try{Z7();break}catch(u){k5(n,u)}while(1);if(D0(),Ue=a,Zp.current=c,Ut!==null)throw Error(ie(261));return Jt=null,an=0,Kt}function Z7(){for(;Ut!==null;)w5(Ut)}function J7(){for(;Ut!==null&&!_F();)w5(Ut)}function w5(n){var r=C5(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,r===null?v5(n):Ut=r,V0.current=null}function v5(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=W7(a,r),a!==null){a.flags&=32767,Ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,Ut=null;return}}else if(a=$7(a,r,Xn),a!==null){Ut=a;return}if(r=r.sibling,r!==null){Ut=r;return}Ut=r=n}while(r!==null);Kt===0&&(Kt=5)}function Ns(n,r,a){var c=tt,u=Co.transition;try{Co.transition=null,tt=1,X7(n,r,a,c)}finally{Co.transition=u,tt=c}return null}function X7(n,r,a,c){do ll();while(Fi!==null);if(Ue&6)throw Error(ie(327));a=n.finishedWork;var u=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(PF(n,p),n===Jt&&(Ut=Jt=null,an=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||np||(np=!0,_5(Op,function(){return ll(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=Co.transition,Co.transition=null;var m=tt;tt=1;var w=Ue;Ue|=4,V0.current=null,G7(n,a),f5(a,n),w7(ow),Lp=!!nw,ow=nw=null,n.current=a,K7(a),yF(),Ue=w,tt=m,Co.transition=p}else n.current=a;if(np&&(np=!1,Fi=n,Xp=u),p=n.pendingLanes,p===0&&(Gi=null),SF(a.stateNode),Wn(n,Ot()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)u=r[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(Jp)throw Jp=!1,n=_w,_w=null,n;return Xp&1&&n.tag!==0&&ll(),p=n.pendingLanes,p&1?n===yw?ad++:(ad=0,yw=n):ad=0,rs(),null}function ll(){if(Fi!==null){var n=XT(Xp),r=Co.transition,a=tt;try{if(Co.transition=null,tt=16>n?16:n,Fi===null)var c=!1;else{if(n=Fi,Fi=null,Xp=0,Ue&6)throw Error(ie(331));var u=Ue;for(Ue|=4,ue=n.current;ue!==null;){var p=ue,m=p.child;if(ue.flags&16){var w=p.deletions;if(w!==null){for(var k=0;k<w.length;k++){var _=w[k];for(ue=_;ue!==null;){var x=ue;switch(x.tag){case 0:case 11:case 15:id(8,x,p)}var y=x.child;if(y!==null)y.return=x,ue=y;else for(;ue!==null;){x=ue;var A=x.sibling,S=x.return;if(u5(x),x===_){ue=null;break}if(A!==null){A.return=S,ue=A;break}ue=S}}}var I=p.alternate;if(I!==null){var N=I.child;if(N!==null){I.child=null;do{var F=N.sibling;N.sibling=null,N=F}while(N!==null)}}ue=p}}if(p.subtreeFlags&2064&&m!==null)m.return=p,ue=m;else e:for(;ue!==null;){if(p=ue,p.flags&2048)switch(p.tag){case 0:case 11:case 15:id(9,p,p.return)}var R=p.sibling;if(R!==null){R.return=p.return,ue=R;break e}ue=p.return}}var T=n.current;for(ue=T;ue!==null;){m=ue;var B=m.child;if(m.subtreeFlags&2064&&B!==null)B.return=m,ue=B;else e:for(m=T;ue!==null;){if(w=ue,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:Tf(9,w)}}catch(q){Dt(w,w.return,q)}if(w===m){ue=null;break e}var H=w.sibling;if(H!==null){H.return=w.return,ue=H;break e}ue=w.return}}if(Ue=u,rs(),Er&&typeof Er.onPostCommitFiberRoot=="function")try{Er.onPostCommitFiberRoot(Af,n)}catch{}c=!0}return c}finally{tt=a,Co.transition=r}}return!1}function GS(n,r,a){r=kl(a,r),r=e5(n,r,1),n=qi(n,r,1),r=Sn(),n!==null&&(Fd(n,1,r),Wn(n,r))}function Dt(n,r,a){if(n.tag===3)GS(n,n,a);else for(;r!==null;){if(r.tag===3){GS(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gi===null||!Gi.has(c))){n=kl(a,n),n=t5(r,n,1),r=qi(r,n,1),n=Sn(),r!==null&&(Fd(r,1,n),Wn(r,n));break}}r=r.return}}function e9(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Sn(),n.pingedLanes|=n.suspendedLanes&a,Jt===n&&(an&a)===a&&(Kt===4||Kt===3&&(an&130023424)===an&&500>Ot()-H0?Fs(n,0):U0|=a),Wn(n,r)}function A5(n,r){r===0&&(n.mode&1?(r=qh,qh<<=1,!(qh&130023424)&&(qh=4194304)):r=1);var a=Sn();n=ti(n,r),n!==null&&(Fd(n,r,a),Wn(n,a))}function t9(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),A5(n,a)}function n9(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,u=n.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(ie(314))}c!==null&&c.delete(r),A5(n,a)}var C5;C5=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Hn.current)Un=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Un=!1,H7(n,r,a);Un=!!(n.flags&131072)}else Un=!1,bt&&r.flags&1048576&&xI(r,$p,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;vp(n,r),n=r.pendingProps;var u=pl(r,kn.current);al(r,a),u=R0(null,r,c,n,u,a);var p=L0();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,$n(c)?(p=!0,Up(r)):p=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,M0(r),u.updater=Sf,r.stateNode=u,u._reactInternals=r,hw(r,c,n,a),r=mw(null,r,c,!0,p,a)):(r.tag=0,bt&&p&&y0(r),xn(null,r,u,a),r=r.child),r;case 16:c=r.elementType;e:{switch(vp(n,r),n=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=r9(c),n=Vo(c,n),u){case 0:r=fw(null,r,c,n,a);break e;case 1:r=LS(null,r,c,n,a);break e;case 11:r=OS(null,r,c,n,a);break e;case 14:r=RS(null,r,c,Vo(c.type,n),a);break e}throw Error(ie(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vo(c,u),fw(n,r,c,u,a);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vo(c,u),LS(n,r,c,u,a);case 3:e:{if(i5(r),n===null)throw Error(ie(387));c=r.pendingProps,p=r.memoizedState,u=p.element,TI(n,r),Gp(r,c,null,a);var m=r.memoizedState;if(c=m.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){u=kl(Error(ie(423)),r),r=jS(n,r,c,a,u);break e}else if(c!==u){u=kl(Error(ie(424)),r),r=jS(n,r,c,a,u);break e}else for(no=Wi(r.stateNode.containerInfo.firstChild),oo=r,bt=!0,Ho=null,a=PI(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fl(),c===u){r=ni(n,r,a);break e}xn(n,r,c,a)}r=r.child}return r;case 5:return BI(r),n===null&&cw(r),c=r.type,u=r.pendingProps,p=n!==null?n.memoizedProps:null,m=u.children,rw(c,u)?m=null:p!==null&&rw(c,p)&&(r.flags|=32),r5(n,r),xn(n,r,m,a),r.child;case 6:return n===null&&cw(r),null;case 13:return s5(n,r,a);case 4:return N0(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=ml(r,null,c,a):xn(n,r,c,a),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vo(c,u),OS(n,r,c,u,a);case 7:return xn(n,r,r.pendingProps,a),r.child;case 8:return xn(n,r,r.pendingProps.children,a),r.child;case 12:return xn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,p=r.memoizedProps,m=u.value,lt(Wp,c._currentValue),c._currentValue=m,p!==null)if(Go(p.value,m)){if(p.children===u.children&&!Hn.current){r=ni(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var w=p.dependencies;if(w!==null){m=p.child;for(var k=w.firstContext;k!==null;){if(k.context===c){if(p.tag===1){k=Zr(-1,a&-a),k.tag=2;var _=p.updateQueue;if(_!==null){_=_.shared;var x=_.pending;x===null?k.next=k:(k.next=x.next,x.next=k),_.pending=k}}p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),dw(p.return,a,r),w.lanes|=a;break}k=k.next}}else if(p.tag===10)m=p.type===r.type?null:p.child;else if(p.tag===18){if(m=p.return,m===null)throw Error(ie(341));m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),dw(m,a,r),m=p.sibling}else m=p.child;if(m!==null)m.return=p;else for(m=p;m!==null;){if(m===r){m=null;break}if(p=m.sibling,p!==null){p.return=m.return,m=p;break}m=m.return}p=m}xn(n,r,u.children,a),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,al(r,a),u=yo(u),c=c(u),r.flags|=1,xn(n,r,c,a),r.child;case 14:return c=r.type,u=Vo(c,r.pendingProps),u=Vo(c.type,u),RS(n,r,c,u,a);case 15:return n5(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vo(c,u),vp(n,r),r.tag=1,$n(c)?(n=!0,Up(r)):n=!1,al(r,a),MI(r,c,u),hw(r,c,u,a),mw(null,r,c,!0,n,a);case 19:return a5(n,r,a);case 22:return o5(n,r,a)}throw Error(ie(156,r.tag))};function _5(n,r){return YT(n,r)}function o9(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ao(n,r,a,c){return new o9(n,r,a,c)}function G0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function r9(n){if(typeof n=="function")return G0(n)?1:0;if(n!=null){if(n=n.$$typeof,n===h0)return 11;if(n===p0)return 14}return 2}function Yi(n,r){var a=n.alternate;return a===null?(a=Ao(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _p(n,r,a,c,u,p){var m=2;if(c=n,typeof n=="function")G0(n)&&(m=1);else if(typeof n=="string")m=5;else e:switch(n){case qa:return Vs(a.children,u,p,r);case u0:m=8,u|=8;break;case Rb:return n=Ao(12,a,r,u|2),n.elementType=Rb,n.lanes=p,n;case Lb:return n=Ao(13,a,r,u),n.elementType=Lb,n.lanes=p,n;case jb:return n=Ao(19,a,r,u),n.elementType=jb,n.lanes=p,n;case NT:return Mf(a,u,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case IT:m=10;break e;case MT:m=9;break e;case h0:m=11;break e;case p0:m=14;break e;case Ni:m=16,c=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return r=Ao(m,a,r,u),r.elementType=n,r.type=c,r.lanes=p,r}function Vs(n,r,a,c){return n=Ao(7,n,c,r),n.lanes=a,n}function Mf(n,r,a,c){return n=Ao(22,n,c,r),n.elementType=NT,n.lanes=a,n.stateNode={isHidden:!1},n}function pb(n,r,a){return n=Ao(6,n,null,r),n.lanes=a,n}function fb(n,r,a){return r=Ao(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function i9(n,r,a,c,u){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kk(0),this.expirationTimes=Kk(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kk(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function K0(n,r,a,c,u,p,m,w,k){return n=new i9(n,r,a,w,k),r===1?(r=1,p===!0&&(r|=8)):r=0,p=Ao(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},M0(p),n}function s9(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wa,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function y5(n){if(!n)return es;n=n._reactInternals;e:{if(Js(n)!==n||n.tag!==1)throw Error(ie(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if($n(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(ie(171))}if(n.tag===1){var a=n.type;if($n(a))return _I(n,a,r)}return r}function x5(n,r,a,c,u,p,m,w,k){return n=K0(a,c,!0,n,u,p,m,w,k),n.context=y5(null),a=n.current,c=Sn(),u=Ki(a),p=Zr(c,u),p.callback=r??null,qi(a,p,u),n.current.lanes=u,Fd(n,u,c),Wn(n,c),n}function Nf(n,r,a,c){var u=r.current,p=Sn(),m=Ki(u);return a=y5(a),r.context===null?r.context=a:r.pendingContext=a,r=Zr(p,m),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qi(u,r,m),n!==null&&(Wo(n,u,m,p),kp(n,u,m)),m}function tf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function KS(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Y0(n,r){KS(n,r),(n=n.alternate)&&KS(n,r)}function a9(){return null}var E5=typeof reportError=="function"?reportError:function(n){console.error(n)};function Q0(n){this._internalRoot=n}Pf.prototype.render=Q0.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(ie(409));Nf(n,r,null,null)};Pf.prototype.unmount=Q0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ks(function(){Nf(null,n,null,null)}),r[ei]=null}};function Pf(n){this._internalRoot=n}Pf.prototype.unstable_scheduleHydration=function(n){if(n){var r=nI();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Oi.length&&r!==0&&r<Oi[a].priority;a++);Oi.splice(a,0,n),a===0&&rI(n)}};function Z0(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function YS(){}function l9(n,r,a,c,u){if(u){if(typeof c=="function"){var p=c;c=function(){var _=tf(m);p.call(_)}}var m=x5(r,c,n,0,null,!1,!1,"",YS);return n._reactRootContainer=m,n[ei]=m.current,Ad(n.nodeType===8?n.parentNode:n),Ks(),m}for(;u=n.lastChild;)n.removeChild(u);if(typeof c=="function"){var w=c;c=function(){var _=tf(k);w.call(_)}}var k=K0(n,0,!1,null,null,!1,!1,"",YS);return n._reactRootContainer=k,n[ei]=k.current,Ad(n.nodeType===8?n.parentNode:n),Ks(function(){Nf(r,k,a,c)}),k}function Of(n,r,a,c,u){var p=a._reactRootContainer;if(p){var m=p;if(typeof u=="function"){var w=u;u=function(){var k=tf(m);w.call(k)}}Nf(r,m,n,u)}else m=l9(a,r,n,u,c);return tf(m)}eI=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Kc(r.pendingLanes);a!==0&&(g0(r,a|1),Wn(r,Ot()),!(Ue&6)&&(bl=Ot()+500,rs()))}break;case 13:Ks(function(){var c=ti(n,1);if(c!==null){var u=Sn();Wo(c,n,1,u)}}),Y0(n,1)}};k0=function(n){if(n.tag===13){var r=ti(n,134217728);if(r!==null){var a=Sn();Wo(r,n,134217728,a)}Y0(n,134217728)}};tI=function(n){if(n.tag===13){var r=Ki(n),a=ti(n,r);if(a!==null){var c=Sn();Wo(a,n,r,c)}Y0(n,r)}};nI=function(){return tt};oI=function(n,r){var a=tt;try{return tt=n,r()}finally{tt=a}};Kb=function(n,r,a){switch(r){case"input":if(Vb(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var u=xf(c);if(!u)throw Error(ie(90));BT(c),Vb(c,u)}}}break;case"textarea":RT(n,a);break;case"select":r=a.value,r!=null&&ol(n,!!a.multiple,r,!1)}};HT=$0;$T=Ks;var c9={usingClientEntryPoint:!1,Events:[Ud,Qa,xf,VT,UT,$0]},Fc={findFiberByHostInstance:Ls,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},d9={bundleType:Fc.bundleType,version:Fc.version,rendererPackageName:Fc.rendererPackageName,rendererConfig:Fc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=GT(n),n===null?null:n.stateNode},findFiberByHostInstance:Fc.findFiberByHostInstance||a9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var op=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!op.isDisabled&&op.supportsFiber)try{Af=op.inject(d9),Er=op}catch{}}ao.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c9;ao.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Z0(r))throw Error(ie(200));return s9(n,r,null,a)};ao.createRoot=function(n,r){if(!Z0(n))throw Error(ie(299));var a=!1,c="",u=E5;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=K0(n,1,!1,null,null,a,!1,c,u),n[ei]=r.current,Ad(n.nodeType===8?n.parentNode:n),new Q0(r)};ao.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=GT(r),n=n===null?null:n.stateNode,n};ao.flushSync=function(n){return Ks(n)};ao.hydrate=function(n,r,a){if(!Bf(r))throw Error(ie(200));return Of(null,n,r,!0,a)};ao.hydrateRoot=function(n,r,a){if(!Z0(n))throw Error(ie(405));var c=a!=null&&a.hydratedSources||null,u=!1,p="",m=E5;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),r=x5(r,null,n,1,a??null,u,!1,p,m),n[ei]=r.current,Ad(n),c)for(n=0;n<c.length;n++)a=c[n],u=a._getVersion,u=u(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,u]:r.mutableSourceEagerHydrationData.push(a,u);return new Pf(r)};ao.render=function(n,r,a){if(!Bf(r))throw Error(ie(200));return Of(null,n,r,!1,a)};ao.unmountComponentAtNode=function(n){if(!Bf(n))throw Error(ie(40));return n._reactRootContainer?(Ks(function(){Of(null,null,n,!1,function(){n._reactRootContainer=null,n[ei]=null})}),!0):!1};ao.unstable_batchedUpdates=$0;ao.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Bf(a))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return Of(n,r,a,!1,c)};ao.version="18.2.0-next-9e3b772b8-20220608";function S5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S5)}catch(n){console.error(n)}}S5(),xT.exports=ao;var D5=xT.exports;const Qc=jd(D5);var QS=D5;Bb.createRoot=QS.createRoot,Bb.hydrateRoot=QS.hydrateRoot;function T5(n,r){return function(){return n.apply(r,arguments)}}const{toString:u9}=Object.prototype,{getPrototypeOf:J0}=Object,Rf=(n=>r=>{const a=u9.call(r);return n[a]||(n[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),Ir=n=>(n=n.toLowerCase(),r=>Rf(r)===n),Lf=n=>r=>typeof r===n,{isArray:El}=Array,Id=Lf("undefined");function h9(n){return n!==null&&!Id(n)&&n.constructor!==null&&!Id(n.constructor)&&_o(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const I5=Ir("ArrayBuffer");function p9(n){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(n):r=n&&n.buffer&&I5(n.buffer),r}const f9=Lf("string"),_o=Lf("function"),M5=Lf("number"),jf=n=>n!==null&&typeof n=="object",m9=n=>n===!0||n===!1,yp=n=>{if(Rf(n)!=="object")return!1;const r=J0(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},g9=Ir("Date"),k9=Ir("File"),b9=Ir("Blob"),w9=Ir("FileList"),v9=n=>jf(n)&&_o(n.pipe),A9=n=>{let r;return n&&(typeof FormData=="function"&&n instanceof FormData||_o(n.append)&&((r=Rf(n))==="formdata"||r==="object"&&_o(n.toString)&&n.toString()==="[object FormData]"))},C9=Ir("URLSearchParams"),_9=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $d(n,r,{allOwnKeys:a=!1}={}){if(n===null||typeof n>"u")return;let c,u;if(typeof n!="object"&&(n=[n]),El(n))for(c=0,u=n.length;c<u;c++)r.call(null,n[c],c,n);else{const p=a?Object.getOwnPropertyNames(n):Object.keys(n),m=p.length;let w;for(c=0;c<m;c++)w=p[c],r.call(null,n[w],w,n)}}function N5(n,r){r=r.toLowerCase();const a=Object.keys(n);let c=a.length,u;for(;c-- >0;)if(u=a[c],r===u.toLowerCase())return u;return null}const P5=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),B5=n=>!Id(n)&&n!==P5;function Sw(){const{caseless:n}=B5(this)&&this||{},r={},a=(c,u)=>{const p=n&&N5(r,u)||u;yp(r[p])&&yp(c)?r[p]=Sw(r[p],c):yp(c)?r[p]=Sw({},c):El(c)?r[p]=c.slice():r[p]=c};for(let c=0,u=arguments.length;c<u;c++)arguments[c]&&$d(arguments[c],a);return r}const y9=(n,r,a,{allOwnKeys:c}={})=>($d(r,(u,p)=>{a&&_o(u)?n[p]=T5(u,a):n[p]=u},{allOwnKeys:c}),n),x9=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),E9=(n,r,a,c)=>{n.prototype=Object.create(r.prototype,c),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:r.prototype}),a&&Object.assign(n.prototype,a)},S9=(n,r,a,c)=>{let u,p,m;const w={};if(r=r||{},n==null)return r;do{for(u=Object.getOwnPropertyNames(n),p=u.length;p-- >0;)m=u[p],(!c||c(m,n,r))&&!w[m]&&(r[m]=n[m],w[m]=!0);n=a!==!1&&J0(n)}while(n&&(!a||a(n,r))&&n!==Object.prototype);return r},D9=(n,r,a)=>{n=String(n),(a===void 0||a>n.length)&&(a=n.length),a-=r.length;const c=n.indexOf(r,a);return c!==-1&&c===a},T9=n=>{if(!n)return null;if(El(n))return n;let r=n.length;if(!M5(r))return null;const a=new Array(r);for(;r-- >0;)a[r]=n[r];return a},I9=(n=>r=>n&&r instanceof n)(typeof Uint8Array<"u"&&J0(Uint8Array)),M9=(n,r)=>{const c=(n&&n[Symbol.iterator]).call(n);let u;for(;(u=c.next())&&!u.done;){const p=u.value;r.call(n,p[0],p[1])}},N9=(n,r)=>{let a;const c=[];for(;(a=n.exec(r))!==null;)c.push(a);return c},P9=Ir("HTMLFormElement"),B9=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,c,u){return c.toUpperCase()+u}),ZS=(({hasOwnProperty:n})=>(r,a)=>n.call(r,a))(Object.prototype),O9=Ir("RegExp"),O5=(n,r)=>{const a=Object.getOwnPropertyDescriptors(n),c={};$d(a,(u,p)=>{let m;(m=r(u,p,n))!==!1&&(c[p]=m||u)}),Object.defineProperties(n,c)},R9=n=>{O5(n,(r,a)=>{if(_o(n)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const c=n[a];if(_o(c)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},L9=(n,r)=>{const a={},c=u=>{u.forEach(p=>{a[p]=!0})};return El(n)?c(n):c(String(n).split(r)),a},j9=()=>{},z9=(n,r)=>(n=+n,Number.isFinite(n)?n:r),mb="abcdefghijklmnopqrstuvwxyz",JS="0123456789",R5={DIGIT:JS,ALPHA:mb,ALPHA_DIGIT:mb+mb.toUpperCase()+JS},F9=(n=16,r=R5.ALPHA_DIGIT)=>{let a="";const{length:c}=r;for(;n--;)a+=r[Math.random()*c|0];return a};function V9(n){return!!(n&&_o(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const U9=n=>{const r=new Array(10),a=(c,u)=>{if(jf(c)){if(r.indexOf(c)>=0)return;if(!("toJSON"in c)){r[u]=c;const p=El(c)?[]:{};return $d(c,(m,w)=>{const k=a(m,u+1);!Id(k)&&(p[w]=k)}),r[u]=void 0,p}}return c};return a(n,0)},H9=Ir("AsyncFunction"),$9=n=>n&&(jf(n)||_o(n))&&_o(n.then)&&_o(n.catch),ne={isArray:El,isArrayBuffer:I5,isBuffer:h9,isFormData:A9,isArrayBufferView:p9,isString:f9,isNumber:M5,isBoolean:m9,isObject:jf,isPlainObject:yp,isUndefined:Id,isDate:g9,isFile:k9,isBlob:b9,isRegExp:O9,isFunction:_o,isStream:v9,isURLSearchParams:C9,isTypedArray:I9,isFileList:w9,forEach:$d,merge:Sw,extend:y9,trim:_9,stripBOM:x9,inherits:E9,toFlatObject:S9,kindOf:Rf,kindOfTest:Ir,endsWith:D9,toArray:T9,forEachEntry:M9,matchAll:N9,isHTMLForm:P9,hasOwnProperty:ZS,hasOwnProp:ZS,reduceDescriptors:O5,freezeMethods:R9,toObjectSet:L9,toCamelCase:B9,noop:j9,toFiniteNumber:z9,findKey:N5,global:P5,isContextDefined:B5,ALPHABET:R5,generateString:F9,isSpecCompliantForm:V9,toJSONObject:U9,isAsyncFn:H9,isThenable:$9};function je(n,r,a,c,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",r&&(this.code=r),a&&(this.config=a),c&&(this.request=c),u&&(this.response=u)}ne.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ne.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const L5=je.prototype,j5={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{j5[n]={value:n}});Object.defineProperties(je,j5);Object.defineProperty(L5,"isAxiosError",{value:!0});je.from=(n,r,a,c,u,p)=>{const m=Object.create(L5);return ne.toFlatObject(n,m,function(k){return k!==Error.prototype},w=>w!=="isAxiosError"),je.call(m,n.message,r,a,c,u),m.cause=n,m.name=n.name,p&&Object.assign(m,p),m};const W9=null;function Dw(n){return ne.isPlainObject(n)||ne.isArray(n)}function z5(n){return ne.endsWith(n,"[]")?n.slice(0,-2):n}function XS(n,r,a){return n?n.concat(r).map(function(u,p){return u=z5(u),!a&&p?"["+u+"]":u}).join(a?".":""):r}function q9(n){return ne.isArray(n)&&!n.some(Dw)}const G9=ne.toFlatObject(ne,{},null,function(r){return/^is[A-Z]/.test(r)});function zf(n,r,a){if(!ne.isObject(n))throw new TypeError("target must be an object");r=r||new FormData,a=ne.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,F){return!ne.isUndefined(F[N])});const c=a.metaTokens,u=a.visitor||x,p=a.dots,m=a.indexes,k=(a.Blob||typeof Blob<"u"&&Blob)&&ne.isSpecCompliantForm(r);if(!ne.isFunction(u))throw new TypeError("visitor must be a function");function _(I){if(I===null)return"";if(ne.isDate(I))return I.toISOString();if(!k&&ne.isBlob(I))throw new je("Blob is not supported. Use a Buffer instead.");return ne.isArrayBuffer(I)||ne.isTypedArray(I)?k&&typeof Blob=="function"?new Blob([I]):Buffer.from(I):I}function x(I,N,F){let R=I;if(I&&!F&&typeof I=="object"){if(ne.endsWith(N,"{}"))N=c?N:N.slice(0,-2),I=JSON.stringify(I);else if(ne.isArray(I)&&q9(I)||(ne.isFileList(I)||ne.endsWith(N,"[]"))&&(R=ne.toArray(I)))return N=z5(N),R.forEach(function(B,H){!(ne.isUndefined(B)||B===null)&&r.append(m===!0?XS([N],H,p):m===null?N:N+"[]",_(B))}),!1}return Dw(I)?!0:(r.append(XS(F,N,p),_(I)),!1)}const y=[],A=Object.assign(G9,{defaultVisitor:x,convertValue:_,isVisitable:Dw});function S(I,N){if(!ne.isUndefined(I)){if(y.indexOf(I)!==-1)throw Error("Circular reference detected in "+N.join("."));y.push(I),ne.forEach(I,function(R,T){(!(ne.isUndefined(R)||R===null)&&u.call(r,R,ne.isString(T)?T.trim():T,N,A))===!0&&S(R,N?N.concat(T):[T])}),y.pop()}}if(!ne.isObject(n))throw new TypeError("data must be an object");return S(n),r}function eD(n){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(c){return r[c]})}function X0(n,r){this._pairs=[],n&&zf(n,this,r)}const F5=X0.prototype;F5.append=function(r,a){this._pairs.push([r,a])};F5.toString=function(r){const a=r?function(c){return r.call(this,c,eD)}:eD;return this._pairs.map(function(u){return a(u[0])+"="+a(u[1])},"").join("&")};function K9(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function V5(n,r,a){if(!r)return n;const c=a&&a.encode||K9,u=a&&a.serialize;let p;if(u?p=u(r,a):p=ne.isURLSearchParams(r)?r.toString():new X0(r,a).toString(c),p){const m=n.indexOf("#");m!==-1&&(n=n.slice(0,m)),n+=(n.indexOf("?")===-1?"?":"&")+p}return n}class Y9{constructor(){this.handlers=[]}use(r,a,c){return this.handlers.push({fulfilled:r,rejected:a,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){ne.forEach(this.handlers,function(c){c!==null&&r(c)})}}const tD=Y9,U5={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Q9=typeof URLSearchParams<"u"?URLSearchParams:X0,Z9=typeof FormData<"u"?FormData:null,J9=typeof Blob<"u"?Blob:null,X9=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),e8=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Cr={isBrowser:!0,classes:{URLSearchParams:Q9,FormData:Z9,Blob:J9},isStandardBrowserEnv:X9,isStandardBrowserWebWorkerEnv:e8,protocols:["http","https","file","blob","url","data"]};function t8(n,r){return zf(n,new Cr.classes.URLSearchParams,Object.assign({visitor:function(a,c,u,p){return Cr.isNode&&ne.isBuffer(a)?(this.append(c,a.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},r))}function n8(n){return ne.matchAll(/\w+|\[(\w*)]/g,n).map(r=>r[0]==="[]"?"":r[1]||r[0])}function o8(n){const r={},a=Object.keys(n);let c;const u=a.length;let p;for(c=0;c<u;c++)p=a[c],r[p]=n[p];return r}function H5(n){function r(a,c,u,p){let m=a[p++];const w=Number.isFinite(+m),k=p>=a.length;return m=!m&&ne.isArray(u)?u.length:m,k?(ne.hasOwnProp(u,m)?u[m]=[u[m],c]:u[m]=c,!w):((!u[m]||!ne.isObject(u[m]))&&(u[m]=[]),r(a,c,u[m],p)&&ne.isArray(u[m])&&(u[m]=o8(u[m])),!w)}if(ne.isFormData(n)&&ne.isFunction(n.entries)){const a={};return ne.forEachEntry(n,(c,u)=>{r(n8(c),u,a,0)}),a}return null}function r8(n,r,a){if(ne.isString(n))try{return(r||JSON.parse)(n),ne.trim(n)}catch(c){if(c.name!=="SyntaxError")throw c}return(a||JSON.stringify)(n)}const ev={transitional:U5,adapter:["xhr","http"],transformRequest:[function(r,a){const c=a.getContentType()||"",u=c.indexOf("application/json")>-1,p=ne.isObject(r);if(p&&ne.isHTMLForm(r)&&(r=new FormData(r)),ne.isFormData(r))return u&&u?JSON.stringify(H5(r)):r;if(ne.isArrayBuffer(r)||ne.isBuffer(r)||ne.isStream(r)||ne.isFile(r)||ne.isBlob(r))return r;if(ne.isArrayBufferView(r))return r.buffer;if(ne.isURLSearchParams(r))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let w;if(p){if(c.indexOf("application/x-www-form-urlencoded")>-1)return t8(r,this.formSerializer).toString();if((w=ne.isFileList(r))||c.indexOf("multipart/form-data")>-1){const k=this.env&&this.env.FormData;return zf(w?{"files[]":r}:r,k&&new k,this.formSerializer)}}return p||u?(a.setContentType("application/json",!1),r8(r)):r}],transformResponse:[function(r){const a=this.transitional||ev.transitional,c=a&&a.forcedJSONParsing,u=this.responseType==="json";if(r&&ne.isString(r)&&(c&&!this.responseType||u)){const m=!(a&&a.silentJSONParsing)&&u;try{return JSON.parse(r)}catch(w){if(m)throw w.name==="SyntaxError"?je.from(w,je.ERR_BAD_RESPONSE,this,null,this.response):w}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Cr.classes.FormData,Blob:Cr.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ne.forEach(["delete","get","head","post","put","patch"],n=>{ev.headers[n]={}});const tv=ev,i8=ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),s8=n=>{const r={};let a,c,u;return n&&n.split(`
`).forEach(function(m){u=m.indexOf(":"),a=m.substring(0,u).trim().toLowerCase(),c=m.substring(u+1).trim(),!(!a||r[a]&&i8[a])&&(a==="set-cookie"?r[a]?r[a].push(c):r[a]=[c]:r[a]=r[a]?r[a]+", "+c:c)}),r},nD=Symbol("internals");function Vc(n){return n&&String(n).trim().toLowerCase()}function xp(n){return n===!1||n==null?n:ne.isArray(n)?n.map(xp):String(n)}function a8(n){const r=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=a.exec(n);)r[c[1]]=c[2];return r}const l8=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function gb(n,r,a,c,u){if(ne.isFunction(c))return c.call(this,r,a);if(u&&(r=a),!!ne.isString(r)){if(ne.isString(c))return r.indexOf(c)!==-1;if(ne.isRegExp(c))return c.test(r)}}function c8(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,a,c)=>a.toUpperCase()+c)}function d8(n,r){const a=ne.toCamelCase(" "+r);["get","set","has"].forEach(c=>{Object.defineProperty(n,c+a,{value:function(u,p,m){return this[c].call(this,r,u,p,m)},configurable:!0})})}class Ff{constructor(r){r&&this.set(r)}set(r,a,c){const u=this;function p(w,k,_){const x=Vc(k);if(!x)throw new Error("header name must be a non-empty string");const y=ne.findKey(u,x);(!y||u[y]===void 0||_===!0||_===void 0&&u[y]!==!1)&&(u[y||k]=xp(w))}const m=(w,k)=>ne.forEach(w,(_,x)=>p(_,x,k));return ne.isPlainObject(r)||r instanceof this.constructor?m(r,a):ne.isString(r)&&(r=r.trim())&&!l8(r)?m(s8(r),a):r!=null&&p(a,r,c),this}get(r,a){if(r=Vc(r),r){const c=ne.findKey(this,r);if(c){const u=this[c];if(!a)return u;if(a===!0)return a8(u);if(ne.isFunction(a))return a.call(this,u,c);if(ne.isRegExp(a))return a.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,a){if(r=Vc(r),r){const c=ne.findKey(this,r);return!!(c&&this[c]!==void 0&&(!a||gb(this,this[c],c,a)))}return!1}delete(r,a){const c=this;let u=!1;function p(m){if(m=Vc(m),m){const w=ne.findKey(c,m);w&&(!a||gb(c,c[w],w,a))&&(delete c[w],u=!0)}}return ne.isArray(r)?r.forEach(p):p(r),u}clear(r){const a=Object.keys(this);let c=a.length,u=!1;for(;c--;){const p=a[c];(!r||gb(this,this[p],p,r,!0))&&(delete this[p],u=!0)}return u}normalize(r){const a=this,c={};return ne.forEach(this,(u,p)=>{const m=ne.findKey(c,p);if(m){a[m]=xp(u),delete a[p];return}const w=r?c8(p):String(p).trim();w!==p&&delete a[p],a[w]=xp(u),c[w]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const a=Object.create(null);return ne.forEach(this,(c,u)=>{c!=null&&c!==!1&&(a[u]=r&&ne.isArray(c)?c.join(", "):c)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,a])=>r+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...a){const c=new this(r);return a.forEach(u=>c.set(u)),c}static accessor(r){const c=(this[nD]=this[nD]={accessors:{}}).accessors,u=this.prototype;function p(m){const w=Vc(m);c[w]||(d8(u,m),c[w]=!0)}return ne.isArray(r)?r.forEach(p):p(r),this}}Ff.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ne.reduceDescriptors(Ff.prototype,({value:n},r)=>{let a=r[0].toUpperCase()+r.slice(1);return{get:()=>n,set(c){this[a]=c}}});ne.freezeMethods(Ff);const Jr=Ff;function kb(n,r){const a=this||tv,c=r||a,u=Jr.from(c.headers);let p=c.data;return ne.forEach(n,function(w){p=w.call(a,p,u.normalize(),r?r.status:void 0)}),u.normalize(),p}function $5(n){return!!(n&&n.__CANCEL__)}function Wd(n,r,a){je.call(this,n??"canceled",je.ERR_CANCELED,r,a),this.name="CanceledError"}ne.inherits(Wd,je,{__CANCEL__:!0});function u8(n,r,a){const c=a.config.validateStatus;!a.status||!c||c(a.status)?n(a):r(new je("Request failed with status code "+a.status,[je.ERR_BAD_REQUEST,je.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}const h8=Cr.isStandardBrowserEnv?function(){return{write:function(a,c,u,p,m,w){const k=[];k.push(a+"="+encodeURIComponent(c)),ne.isNumber(u)&&k.push("expires="+new Date(u).toGMTString()),ne.isString(p)&&k.push("path="+p),ne.isString(m)&&k.push("domain="+m),w===!0&&k.push("secure"),document.cookie=k.join("; ")},read:function(a){const c=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return c?decodeURIComponent(c[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function p8(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function f8(n,r){return r?n.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):n}function W5(n,r){return n&&!p8(r)?f8(n,r):r}const m8=Cr.isStandardBrowserEnv?function(){const r=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");let c;function u(p){let m=p;return r&&(a.setAttribute("href",m),m=a.href),a.setAttribute("href",m),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return c=u(window.location.href),function(m){const w=ne.isString(m)?u(m):m;return w.protocol===c.protocol&&w.host===c.host}}():function(){return function(){return!0}}();function g8(n){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return r&&r[1]||""}function k8(n,r){n=n||10;const a=new Array(n),c=new Array(n);let u=0,p=0,m;return r=r!==void 0?r:1e3,function(k){const _=Date.now(),x=c[p];m||(m=_),a[u]=k,c[u]=_;let y=p,A=0;for(;y!==u;)A+=a[y++],y=y%n;if(u=(u+1)%n,u===p&&(p=(p+1)%n),_-m<r)return;const S=x&&_-x;return S?Math.round(A*1e3/S):void 0}}function oD(n,r){let a=0;const c=k8(50,250);return u=>{const p=u.loaded,m=u.lengthComputable?u.total:void 0,w=p-a,k=c(w),_=p<=m;a=p;const x={loaded:p,total:m,progress:m?p/m:void 0,bytes:w,rate:k||void 0,estimated:k&&m&&_?(m-p)/k:void 0,event:u};x[r?"download":"upload"]=!0,n(x)}}const b8=typeof XMLHttpRequest<"u",w8=b8&&function(n){return new Promise(function(a,c){let u=n.data;const p=Jr.from(n.headers).normalize(),m=n.responseType;let w;function k(){n.cancelToken&&n.cancelToken.unsubscribe(w),n.signal&&n.signal.removeEventListener("abort",w)}let _;ne.isFormData(u)&&(Cr.isStandardBrowserEnv||Cr.isStandardBrowserWebWorkerEnv?p.setContentType(!1):p.getContentType(/^\s*multipart\/form-data/)?ne.isString(_=p.getContentType())&&p.setContentType(_.replace(/^\s*(multipart\/form-data);+/,"$1")):p.setContentType("multipart/form-data"));let x=new XMLHttpRequest;if(n.auth){const I=n.auth.username||"",N=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";p.set("Authorization","Basic "+btoa(I+":"+N))}const y=W5(n.baseURL,n.url);x.open(n.method.toUpperCase(),V5(y,n.params,n.paramsSerializer),!0),x.timeout=n.timeout;function A(){if(!x)return;const I=Jr.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),F={data:!m||m==="text"||m==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:I,config:n,request:x};u8(function(T){a(T),k()},function(T){c(T),k()},F),x=null}if("onloadend"in x?x.onloadend=A:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(A)},x.onabort=function(){x&&(c(new je("Request aborted",je.ECONNABORTED,n,x)),x=null)},x.onerror=function(){c(new je("Network Error",je.ERR_NETWORK,n,x)),x=null},x.ontimeout=function(){let N=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const F=n.transitional||U5;n.timeoutErrorMessage&&(N=n.timeoutErrorMessage),c(new je(N,F.clarifyTimeoutError?je.ETIMEDOUT:je.ECONNABORTED,n,x)),x=null},Cr.isStandardBrowserEnv){const I=(n.withCredentials||m8(y))&&n.xsrfCookieName&&h8.read(n.xsrfCookieName);I&&p.set(n.xsrfHeaderName,I)}u===void 0&&p.setContentType(null),"setRequestHeader"in x&&ne.forEach(p.toJSON(),function(N,F){x.setRequestHeader(F,N)}),ne.isUndefined(n.withCredentials)||(x.withCredentials=!!n.withCredentials),m&&m!=="json"&&(x.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&x.addEventListener("progress",oD(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",oD(n.onUploadProgress)),(n.cancelToken||n.signal)&&(w=I=>{x&&(c(!I||I.type?new Wd(null,n,x):I),x.abort(),x=null)},n.cancelToken&&n.cancelToken.subscribe(w),n.signal&&(n.signal.aborted?w():n.signal.addEventListener("abort",w)));const S=g8(y);if(S&&Cr.protocols.indexOf(S)===-1){c(new je("Unsupported protocol "+S+":",je.ERR_BAD_REQUEST,n));return}x.send(u||null)})},Tw={http:W9,xhr:w8};ne.forEach(Tw,(n,r)=>{if(n){try{Object.defineProperty(n,"name",{value:r})}catch{}Object.defineProperty(n,"adapterName",{value:r})}});const rD=n=>`- ${n}`,v8=n=>ne.isFunction(n)||n===null||n===!1,q5={getAdapter:n=>{n=ne.isArray(n)?n:[n];const{length:r}=n;let a,c;const u={};for(let p=0;p<r;p++){a=n[p];let m;if(c=a,!v8(a)&&(c=Tw[(m=String(a)).toLowerCase()],c===void 0))throw new je(`Unknown adapter '${m}'`);if(c)break;u[m||"#"+p]=c}if(!c){const p=Object.entries(u).map(([w,k])=>`adapter ${w} `+(k===!1?"is not supported by the environment":"is not available in the build"));let m=r?p.length>1?`since :
`+p.map(rD).join(`
`):" "+rD(p[0]):"as no adapter specified";throw new je("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return c},adapters:Tw};function bb(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Wd(null,n)}function iD(n){return bb(n),n.headers=Jr.from(n.headers),n.data=kb.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),q5.getAdapter(n.adapter||tv.adapter)(n).then(function(c){return bb(n),c.data=kb.call(n,n.transformResponse,c),c.headers=Jr.from(c.headers),c},function(c){return $5(c)||(bb(n),c&&c.response&&(c.response.data=kb.call(n,n.transformResponse,c.response),c.response.headers=Jr.from(c.response.headers))),Promise.reject(c)})}const sD=n=>n instanceof Jr?n.toJSON():n;function wl(n,r){r=r||{};const a={};function c(_,x,y){return ne.isPlainObject(_)&&ne.isPlainObject(x)?ne.merge.call({caseless:y},_,x):ne.isPlainObject(x)?ne.merge({},x):ne.isArray(x)?x.slice():x}function u(_,x,y){if(ne.isUndefined(x)){if(!ne.isUndefined(_))return c(void 0,_,y)}else return c(_,x,y)}function p(_,x){if(!ne.isUndefined(x))return c(void 0,x)}function m(_,x){if(ne.isUndefined(x)){if(!ne.isUndefined(_))return c(void 0,_)}else return c(void 0,x)}function w(_,x,y){if(y in r)return c(_,x);if(y in n)return c(void 0,_)}const k={url:p,method:p,data:p,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:w,headers:(_,x)=>u(sD(_),sD(x),!0)};return ne.forEach(Object.keys(Object.assign({},n,r)),function(x){const y=k[x]||u,A=y(n[x],r[x],x);ne.isUndefined(A)&&y!==w||(a[x]=A)}),a}const G5="1.5.1",nv={};["object","boolean","number","function","string","symbol"].forEach((n,r)=>{nv[n]=function(c){return typeof c===n||"a"+(r<1?"n ":" ")+n}});const aD={};nv.transitional=function(r,a,c){function u(p,m){return"[Axios v"+G5+"] Transitional option '"+p+"'"+m+(c?". "+c:"")}return(p,m,w)=>{if(r===!1)throw new je(u(m," has been removed"+(a?" in "+a:"")),je.ERR_DEPRECATED);return a&&!aD[m]&&(aD[m]=!0,console.warn(u(m," has been deprecated since v"+a+" and will be removed in the near future"))),r?r(p,m,w):!0}};function A8(n,r,a){if(typeof n!="object")throw new je("options must be an object",je.ERR_BAD_OPTION_VALUE);const c=Object.keys(n);let u=c.length;for(;u-- >0;){const p=c[u],m=r[p];if(m){const w=n[p],k=w===void 0||m(w,p,n);if(k!==!0)throw new je("option "+p+" must be "+k,je.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new je("Unknown option "+p,je.ERR_BAD_OPTION)}}const Iw={assertOptions:A8,validators:nv},Ii=Iw.validators;class nf{constructor(r){this.defaults=r,this.interceptors={request:new tD,response:new tD}}request(r,a){typeof r=="string"?(a=a||{},a.url=r):a=r||{},a=wl(this.defaults,a);const{transitional:c,paramsSerializer:u,headers:p}=a;c!==void 0&&Iw.assertOptions(c,{silentJSONParsing:Ii.transitional(Ii.boolean),forcedJSONParsing:Ii.transitional(Ii.boolean),clarifyTimeoutError:Ii.transitional(Ii.boolean)},!1),u!=null&&(ne.isFunction(u)?a.paramsSerializer={serialize:u}:Iw.assertOptions(u,{encode:Ii.function,serialize:Ii.function},!0)),a.method=(a.method||this.defaults.method||"get").toLowerCase();let m=p&&ne.merge(p.common,p[a.method]);p&&ne.forEach(["delete","get","head","post","put","patch","common"],I=>{delete p[I]}),a.headers=Jr.concat(m,p);const w=[];let k=!0;this.interceptors.request.forEach(function(N){typeof N.runWhen=="function"&&N.runWhen(a)===!1||(k=k&&N.synchronous,w.unshift(N.fulfilled,N.rejected))});const _=[];this.interceptors.response.forEach(function(N){_.push(N.fulfilled,N.rejected)});let x,y=0,A;if(!k){const I=[iD.bind(this),void 0];for(I.unshift.apply(I,w),I.push.apply(I,_),A=I.length,x=Promise.resolve(a);y<A;)x=x.then(I[y++],I[y++]);return x}A=w.length;let S=a;for(y=0;y<A;){const I=w[y++],N=w[y++];try{S=I(S)}catch(F){N.call(this,F);break}}try{x=iD.call(this,S)}catch(I){return Promise.reject(I)}for(y=0,A=_.length;y<A;)x=x.then(_[y++],_[y++]);return x}getUri(r){r=wl(this.defaults,r);const a=W5(r.baseURL,r.url);return V5(a,r.params,r.paramsSerializer)}}ne.forEach(["delete","get","head","options"],function(r){nf.prototype[r]=function(a,c){return this.request(wl(c||{},{method:r,url:a,data:(c||{}).data}))}});ne.forEach(["post","put","patch"],function(r){function a(c){return function(p,m,w){return this.request(wl(w||{},{method:r,headers:c?{"Content-Type":"multipart/form-data"}:{},url:p,data:m}))}}nf.prototype[r]=a(),nf.prototype[r+"Form"]=a(!0)});const Ep=nf;class ov{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(p){a=p});const c=this;this.promise.then(u=>{if(!c._listeners)return;let p=c._listeners.length;for(;p-- >0;)c._listeners[p](u);c._listeners=null}),this.promise.then=u=>{let p;const m=new Promise(w=>{c.subscribe(w),p=w}).then(u);return m.cancel=function(){c.unsubscribe(p)},m},r(function(p,m,w){c.reason||(c.reason=new Wd(p,m,w),a(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const a=this._listeners.indexOf(r);a!==-1&&this._listeners.splice(a,1)}static source(){let r;return{token:new ov(function(u){r=u}),cancel:r}}}const C8=ov;function _8(n){return function(a){return n.apply(null,a)}}function y8(n){return ne.isObject(n)&&n.isAxiosError===!0}const Mw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Mw).forEach(([n,r])=>{Mw[r]=n});const x8=Mw;function K5(n){const r=new Ep(n),a=T5(Ep.prototype.request,r);return ne.extend(a,Ep.prototype,r,{allOwnKeys:!0}),ne.extend(a,r,null,{allOwnKeys:!0}),a.create=function(u){return K5(wl(n,u))},a}const $t=K5(tv);$t.Axios=Ep;$t.CanceledError=Wd;$t.CancelToken=C8;$t.isCancel=$5;$t.VERSION=G5;$t.toFormData=zf;$t.AxiosError=je;$t.Cancel=$t.CanceledError;$t.all=function(r){return Promise.all(r)};$t.spread=_8;$t.isAxiosError=y8;$t.mergeConfig=wl;$t.AxiosHeaders=Jr;$t.formToJSON=n=>H5(ne.isHTMLForm(n)?new FormData(n):n);$t.getAdapter=q5.getAdapter;$t.HttpStatusCode=x8;$t.default=$t;const le=$t;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Md(){return Md=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c])}return n},Md.apply(this,arguments)}var Vi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Vi||(Vi={}));const lD="popstate";function E8(n){n===void 0&&(n={});function r(c,u){let{pathname:p,search:m,hash:w}=c.location;return Nw("",{pathname:p,search:m,hash:w},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(c,u){return typeof u=="string"?u:of(u)}return D8(r,a,null,n)}function Ht(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function rv(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function S8(){return Math.random().toString(36).substr(2,8)}function cD(n,r){return{usr:n.state,key:n.key,idx:r}}function Nw(n,r,a,c){return a===void 0&&(a=null),Md({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof r=="string"?Sl(r):r,{state:a,key:r&&r.key||c||S8()})}function of(n){let{pathname:r="/",search:a="",hash:c=""}=n;return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function Sl(n){let r={};if(n){let a=n.indexOf("#");a>=0&&(r.hash=n.substr(a),n=n.substr(0,a));let c=n.indexOf("?");c>=0&&(r.search=n.substr(c),n=n.substr(0,c)),n&&(r.pathname=n)}return r}function D8(n,r,a,c){c===void 0&&(c={});let{window:u=document.defaultView,v5Compat:p=!1}=c,m=u.history,w=Vi.Pop,k=null,_=x();_==null&&(_=0,m.replaceState(Md({},m.state,{idx:_}),""));function x(){return(m.state||{idx:null}).idx}function y(){w=Vi.Pop;let F=x(),R=F==null?null:F-_;_=F,k&&k({action:w,location:N.location,delta:R})}function A(F,R){w=Vi.Push;let T=Nw(N.location,F,R);a&&a(T,F),_=x()+1;let B=cD(T,_),H=N.createHref(T);try{m.pushState(B,"",H)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;u.location.assign(H)}p&&k&&k({action:w,location:N.location,delta:1})}function S(F,R){w=Vi.Replace;let T=Nw(N.location,F,R);a&&a(T,F),_=x();let B=cD(T,_),H=N.createHref(T);m.replaceState(B,"",H),p&&k&&k({action:w,location:N.location,delta:0})}function I(F){let R=u.location.origin!=="null"?u.location.origin:u.location.href,T=typeof F=="string"?F:of(F);return Ht(R,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,R)}let N={get action(){return w},get location(){return n(u,m)},listen(F){if(k)throw new Error("A history only accepts one active listener");return u.addEventListener(lD,y),k=F,()=>{u.removeEventListener(lD,y),k=null}},createHref(F){return r(u,F)},createURL:I,encodeLocation(F){let R=I(F);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:A,replace:S,go(F){return m.go(F)}};return N}var dD;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(dD||(dD={}));function T8(n,r,a){a===void 0&&(a="/");let c=typeof r=="string"?Sl(r):r,u=iv(c.pathname||"/",a);if(u==null)return null;let p=Y5(n);I8(p);let m=null;for(let w=0;m==null&&w<p.length;++w)m=z8(p[w],U8(u));return m}function Y5(n,r,a,c){r===void 0&&(r=[]),a===void 0&&(a=[]),c===void 0&&(c="");let u=(p,m,w)=>{let k={relativePath:w===void 0?p.path||"":w,caseSensitive:p.caseSensitive===!0,childrenIndex:m,route:p};k.relativePath.startsWith("/")&&(Ht(k.relativePath.startsWith(c),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(c.length));let _=Qi([c,k.relativePath]),x=a.concat(k);p.children&&p.children.length>0&&(Ht(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),Y5(p.children,r,x,_)),!(p.path==null&&!p.index)&&r.push({path:_,score:L8(_,p.index),routesMeta:x})};return n.forEach((p,m)=>{var w;if(p.path===""||!((w=p.path)!=null&&w.includes("?")))u(p,m);else for(let k of Q5(p.path))u(p,m,k)}),r}function Q5(n){let r=n.split("/");if(r.length===0)return[];let[a,...c]=r,u=a.endsWith("?"),p=a.replace(/\?$/,"");if(c.length===0)return u?[p,""]:[p];let m=Q5(c.join("/")),w=[];return w.push(...m.map(k=>k===""?p:[p,k].join("/"))),u&&w.push(...m),w.map(k=>n.startsWith("/")&&k===""?"/":k)}function I8(n){n.sort((r,a)=>r.score!==a.score?a.score-r.score:j8(r.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}const M8=/^:\w+$/,N8=3,P8=2,B8=1,O8=10,R8=-2,uD=n=>n==="*";function L8(n,r){let a=n.split("/"),c=a.length;return a.some(uD)&&(c+=R8),r&&(c+=P8),a.filter(u=>!uD(u)).reduce((u,p)=>u+(M8.test(p)?N8:p===""?B8:O8),c)}function j8(n,r){return n.length===r.length&&n.slice(0,-1).every((c,u)=>c===r[u])?n[n.length-1]-r[r.length-1]:0}function z8(n,r){let{routesMeta:a}=n,c={},u="/",p=[];for(let m=0;m<a.length;++m){let w=a[m],k=m===a.length-1,_=u==="/"?r:r.slice(u.length)||"/",x=F8({path:w.relativePath,caseSensitive:w.caseSensitive,end:k},_);if(!x)return null;Object.assign(c,x.params);let y=w.route;p.push({params:c,pathname:Qi([u,x.pathname]),pathnameBase:q8(Qi([u,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(u=Qi([u,x.pathnameBase]))}return p}function F8(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[a,c]=V8(n.path,n.caseSensitive,n.end),u=r.match(a);if(!u)return null;let p=u[0],m=p.replace(/(.)\/+$/,"$1"),w=u.slice(1);return{params:c.reduce((_,x,y)=>{if(x==="*"){let A=w[y]||"";m=p.slice(0,p.length-A.length).replace(/(.)\/+$/,"$1")}return _[x]=H8(w[y]||"",x),_},{}),pathname:p,pathnameBase:m,pattern:n}}function V8(n,r,a){r===void 0&&(r=!1),a===void 0&&(a=!0),rv(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let c=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(m,w)=>(c.push(w),"/([^\\/]+)"));return n.endsWith("*")?(c.push("*"),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,r?void 0:"i"),c]}function U8(n){try{return decodeURI(n)}catch(r){return rv(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),n}}function H8(n,r){try{return decodeURIComponent(n)}catch(a){return rv(!1,'The value for the URL param "'+r+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),n}}function iv(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,c=n.charAt(a);return c&&c!=="/"?null:n.slice(a)||"/"}function $8(n,r){r===void 0&&(r="/");let{pathname:a,search:c="",hash:u=""}=typeof n=="string"?Sl(n):n;return{pathname:a?a.startsWith("/")?a:W8(a,r):r,search:G8(c),hash:K8(u)}}function W8(n,r){let a=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?a.length>1&&a.pop():u!=="."&&a.push(u)}),a.length>1?a.join("/"):"/"}function wb(n,r,a,c){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z5(n){return n.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function J5(n,r,a,c){c===void 0&&(c=!1);let u;typeof n=="string"?u=Sl(n):(u=Md({},n),Ht(!u.pathname||!u.pathname.includes("?"),wb("?","pathname","search",u)),Ht(!u.pathname||!u.pathname.includes("#"),wb("#","pathname","hash",u)),Ht(!u.search||!u.search.includes("#"),wb("#","search","hash",u)));let p=n===""||u.pathname==="",m=p?"/":u.pathname,w;if(c||m==null)w=a;else{let y=r.length-1;if(m.startsWith("..")){let A=m.split("/");for(;A[0]==="..";)A.shift(),y-=1;u.pathname=A.join("/")}w=y>=0?r[y]:"/"}let k=$8(u,w),_=m&&m!=="/"&&m.endsWith("/"),x=(p||m===".")&&a.endsWith("/");return!k.pathname.endsWith("/")&&(_||x)&&(k.pathname+="/"),k}const Qi=n=>n.join("/").replace(/\/\/+/g,"/"),q8=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),G8=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,K8=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Y8(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const X5=["post","put","patch","delete"];new Set(X5);const Q8=["get",...X5];new Set(Q8);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rf(){return rf=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c])}return n},rf.apply(this,arguments)}const sv=V.createContext(null),Z8=V.createContext(null),Dl=V.createContext(null),Vf=V.createContext(null),is=V.createContext({outlet:null,matches:[],isDataRoute:!1}),eM=V.createContext(null);function J8(n,r){let{relative:a}=r===void 0?{}:r;qd()||Ht(!1);let{basename:c,navigator:u}=V.useContext(Dl),{hash:p,pathname:m,search:w}=nM(n,{relative:a}),k=m;return c!=="/"&&(k=m==="/"?c:Qi([c,m])),u.createHref({pathname:k,search:w,hash:p})}function qd(){return V.useContext(Vf)!=null}function Uf(){return qd()||Ht(!1),V.useContext(Vf).location}function tM(n){V.useContext(Dl).static||V.useLayoutEffect(n)}function Gd(){let{isDataRoute:n}=V.useContext(is);return n?uV():X8()}function X8(){qd()||Ht(!1);let n=V.useContext(sv),{basename:r,navigator:a}=V.useContext(Dl),{matches:c}=V.useContext(is),{pathname:u}=Uf(),p=JSON.stringify(Z5(c).map(k=>k.pathnameBase)),m=V.useRef(!1);return tM(()=>{m.current=!0}),V.useCallback(function(k,_){if(_===void 0&&(_={}),!m.current)return;if(typeof k=="number"){a.go(k);return}let x=J5(k,JSON.parse(p),u,_.relative==="path");n==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:Qi([r,x.pathname])),(_.replace?a.replace:a.push)(x,_.state,_)},[r,a,p,u,n])}function Xs(){let{matches:n}=V.useContext(is),r=n[n.length-1];return r?r.params:{}}function nM(n,r){let{relative:a}=r===void 0?{}:r,{matches:c}=V.useContext(is),{pathname:u}=Uf(),p=JSON.stringify(Z5(c).map(m=>m.pathnameBase));return V.useMemo(()=>J5(n,JSON.parse(p),u,a==="path"),[n,p,u,a])}function eV(n,r){return tV(n,r)}function tV(n,r,a){qd()||Ht(!1);let{navigator:c}=V.useContext(Dl),{matches:u}=V.useContext(is),p=u[u.length-1],m=p?p.params:{};p&&p.pathname;let w=p?p.pathnameBase:"/";p&&p.route;let k=Uf(),_;if(r){var x;let N=typeof r=="string"?Sl(r):r;w==="/"||(x=N.pathname)!=null&&x.startsWith(w)||Ht(!1),_=N}else _=k;let y=_.pathname||"/",A=w==="/"?y:y.slice(w.length)||"/",S=T8(n,{pathname:A}),I=sV(S&&S.map(N=>Object.assign({},N,{params:Object.assign({},m,N.params),pathname:Qi([w,c.encodeLocation?c.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?w:Qi([w,c.encodeLocation?c.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),u,a);return r&&I?V.createElement(Vf.Provider,{value:{location:rf({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Vi.Pop}},I):I}function nV(){let n=dV(),r=Y8(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),a=n instanceof Error?n.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},p=null;return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},r),a?V.createElement("pre",{style:u},a):null,p)}const oV=V.createElement(nV,null);class rV extends V.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,a){return a.location!==r.location||a.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error||a.error,location:a.location,revalidation:r.revalidation||a.revalidation}}componentDidCatch(r,a){console.error("React Router caught the following error during render",r,a)}render(){return this.state.error?V.createElement(is.Provider,{value:this.props.routeContext},V.createElement(eM.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iV(n){let{routeContext:r,match:a,children:c}=n,u=V.useContext(sv);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),V.createElement(is.Provider,{value:r},c)}function sV(n,r,a){var c;if(r===void 0&&(r=[]),a===void 0&&(a=null),n==null){var u;if((u=a)!=null&&u.errors)n=a.matches;else return null}let p=n,m=(c=a)==null?void 0:c.errors;if(m!=null){let w=p.findIndex(k=>k.route.id&&(m==null?void 0:m[k.route.id]));w>=0||Ht(!1),p=p.slice(0,Math.min(p.length,w+1))}return p.reduceRight((w,k,_)=>{let x=k.route.id?m==null?void 0:m[k.route.id]:null,y=null;a&&(y=k.route.errorElement||oV);let A=r.concat(p.slice(0,_+1)),S=()=>{let I;return x?I=y:k.route.Component?I=V.createElement(k.route.Component,null):k.route.element?I=k.route.element:I=w,V.createElement(iV,{match:k,routeContext:{outlet:w,matches:A,isDataRoute:a!=null},children:I})};return a&&(k.route.ErrorBoundary||k.route.errorElement||_===0)?V.createElement(rV,{location:a.location,revalidation:a.revalidation,component:y,error:x,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}var oM=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(oM||{}),sf=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(sf||{});function aV(n){let r=V.useContext(sv);return r||Ht(!1),r}function lV(n){let r=V.useContext(Z8);return r||Ht(!1),r}function cV(n){let r=V.useContext(is);return r||Ht(!1),r}function rM(n){let r=cV(),a=r.matches[r.matches.length-1];return a.route.id||Ht(!1),a.route.id}function dV(){var n;let r=V.useContext(eM),a=lV(sf.UseRouteError),c=rM(sf.UseRouteError);return r||((n=a.errors)==null?void 0:n[c])}function uV(){let{router:n}=aV(oM.UseNavigateStable),r=rM(sf.UseNavigateStable),a=V.useRef(!1);return tM(()=>{a.current=!0}),V.useCallback(function(u,p){p===void 0&&(p={}),a.current&&(typeof u=="number"?n.navigate(u):n.navigate(u,rf({fromRouteId:r},p)))},[n,r])}function kt(n){Ht(!1)}function hV(n){let{basename:r="/",children:a=null,location:c,navigationType:u=Vi.Pop,navigator:p,static:m=!1}=n;qd()&&Ht(!1);let w=r.replace(/^\/*/,"/"),k=V.useMemo(()=>({basename:w,navigator:p,static:m}),[w,p,m]);typeof c=="string"&&(c=Sl(c));let{pathname:_="/",search:x="",hash:y="",state:A=null,key:S="default"}=c,I=V.useMemo(()=>{let N=iv(_,w);return N==null?null:{location:{pathname:N,search:x,hash:y,state:A,key:S},navigationType:u}},[w,_,x,y,A,S,u]);return I==null?null:V.createElement(Dl.Provider,{value:k},V.createElement(Vf.Provider,{children:a,value:I}))}function pV(n){let{children:r,location:a}=n;return eV(Pw(r),a)}new Promise(()=>{});function Pw(n,r){r===void 0&&(r=[]);let a=[];return V.Children.forEach(n,(c,u)=>{if(!V.isValidElement(c))return;let p=[...r,u];if(c.type===V.Fragment){a.push.apply(a,Pw(c.props.children,p));return}c.type!==kt&&Ht(!1),!c.props.index||!c.props.children||Ht(!1);let m={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=Pw(c.props.children,p)),a.push(m)}),a}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bw(){return Bw=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c])}return n},Bw.apply(this,arguments)}function fV(n,r){if(n==null)return{};var a={},c=Object.keys(n),u,p;for(p=0;p<c.length;p++)u=c[p],!(r.indexOf(u)>=0)&&(a[u]=n[u]);return a}function mV(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function gV(n,r){return n.button===0&&(!r||r==="_self")&&!mV(n)}const kV=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],bV="startTransition",hD=Mp[bV];function wV(n){let{basename:r,children:a,future:c,window:u}=n,p=V.useRef();p.current==null&&(p.current=E8({window:u,v5Compat:!0}));let m=p.current,[w,k]=V.useState({action:m.action,location:m.location}),{v7_startTransition:_}=c||{},x=V.useCallback(y=>{_&&hD?hD(()=>k(y)):k(y)},[k,_]);return V.useLayoutEffect(()=>m.listen(x),[m,x]),V.createElement(hV,{basename:r,children:a,location:w.location,navigationType:w.action,navigator:m})}const vV=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AV=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=V.forwardRef(function(r,a){let{onClick:c,relative:u,reloadDocument:p,replace:m,state:w,target:k,to:_,preventScrollReset:x,unstable_viewTransition:y}=r,A=fV(r,kV),{basename:S}=V.useContext(Dl),I,N=!1;if(typeof _=="string"&&AV.test(_)&&(I=_,vV))try{let B=new URL(window.location.href),H=_.startsWith("//")?new URL(B.protocol+_):new URL(_),q=iv(H.pathname,S);H.origin===B.origin&&q!=null?_=q+H.search+H.hash:N=!0}catch{}let F=J8(_,{relative:u}),R=CV(_,{replace:m,state:w,target:k,preventScrollReset:x,relative:u,unstable_viewTransition:y});function T(B){c&&c(B),B.defaultPrevented||R(B)}return V.createElement("a",Bw({},A,{href:I||F,onClick:N||p?c:T,ref:a,target:k}))});var pD;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(pD||(pD={}));var fD;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(fD||(fD={}));function CV(n,r){let{target:a,replace:c,state:u,preventScrollReset:p,relative:m,unstable_viewTransition:w}=r===void 0?{}:r,k=Gd(),_=Uf(),x=nM(n,{relative:m});return V.useCallback(y=>{if(gV(y,a)){y.preventDefault();let A=c!==void 0?c:of(_)===of(x);k(n,{replace:A,state:u,preventScrollReset:p,relative:m,unstable_viewTransition:w})}},[_,k,x,c,u,a,n,p,m,w])}function Ow(n){this.message=n}Ow.prototype=new Error,Ow.prototype.name="InvalidCharacterError";var mD=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(n){var r=String(n).replace(/=+$/,"");if(r.length%4==1)throw new Ow("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,c,u=0,p=0,m="";c=r.charAt(p++);~c&&(a=u%4?64*a+c:c,u++%4)?m+=String.fromCharCode(255&a>>(-2*u&6)):0)c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c);return m};function _V(n){var r=n.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(a){return decodeURIComponent(mD(a).replace(/(.)/g,function(c,u){var p=u.charCodeAt(0).toString(16).toUpperCase();return p.length<2&&(p="0"+p),"%"+p}))}(r)}catch{return mD(r)}}function af(n){this.message=n}function yV(n,r){if(typeof n!="string")throw new af("Invalid token specified");var a=(r=r||{}).header===!0?0:1;try{return JSON.parse(_V(n.split(".")[a]))}catch(c){throw new af("Invalid token specified: "+c.message)}}af.prototype=new Error,af.prototype.name="InvalidTokenError";var iM={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var r={}.hasOwnProperty;function a(){for(var c=[],u=0;u<arguments.length;u++){var p=arguments[u];if(p){var m=typeof p;if(m==="string"||m==="number")c.push(p);else if(Array.isArray(p)){if(p.length){var w=a.apply(null,p);w&&c.push(w)}}else if(m==="object"){if(p.toString!==Object.prototype.toString&&!p.toString.toString().includes("[native code]")){c.push(p.toString());continue}for(var k in p)r.call(p,k)&&p[k]&&c.push(k)}}}return c.join(" ")}n.exports?(a.default=a,n.exports=a):window.classNames=a})()})(iM);var sM=iM.exports;const bn=jd(sM);function ge(){return ge=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c])}return n},ge.apply(this,arguments)}function wn(n,r){if(n==null)return{};var a={},c=Object.keys(n),u,p;for(p=0;p<c.length;p++)u=c[p],!(r.indexOf(u)>=0)&&(a[u]=n[u]);return a}function gD(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function xV(n){var r=EV(n,"string");return typeof r=="symbol"?r:String(r)}function EV(n,r){if(typeof n!="object"||n===null)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var c=a.call(n,r||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function SV(n,r,a){var c=V.useRef(n!==void 0),u=V.useState(r),p=u[0],m=u[1],w=n!==void 0,k=c.current;return c.current=w,!w&&k&&p!==r&&m(r),[w?n:p,V.useCallback(function(_){for(var x=arguments.length,y=new Array(x>1?x-1:0),A=1;A<x;A++)y[A-1]=arguments[A];a&&a.apply(void 0,[_].concat(y)),m(_)},[a])]}function DV(n,r){return Object.keys(r).reduce(function(a,c){var u,p=a,m=p[gD(c)],w=p[c],k=wn(p,[gD(c),c].map(xV)),_=r[c],x=SV(w,m,n[_]),y=x[0],A=x[1];return ge({},k,(u={},u[c]=y,u[_]=A,u))},n)}function Rw(n,r){return Rw=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Rw(n,r)}function TV(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,Rw(n,r)}function IV(n){const r=V.useRef(n);return V.useEffect(()=>{r.current=n},[n]),r}function aM(n){const r=IV(n);return V.useCallback(function(...a){return r.current&&r.current(...a)},[r])}const MV=["xxl","xl","lg","md","sm","xs"],NV="xs",PV=V.createContext({prefixes:{},breakpoints:MV,minBreakpoint:NV});function co(n,r){const{prefixes:a}=V.useContext(PV);return n||a[r]||r}const av=n=>V.forwardRef((r,a)=>E.jsx("div",{...r,ref:a,className:bn(r.className,n)})),lM=av("h4");lM.displayName="DivStyledAsH4";const cM=V.forwardRef(({className:n,bsPrefix:r,as:a=lM,...c},u)=>(r=co(r,"alert-heading"),E.jsx(a,{ref:u,className:bn(n,r),...c})));cM.displayName="AlertHeading";const BV=cM,OV=["as","disabled"];function RV(n,r){if(n==null)return{};var a={},c=Object.keys(n),u,p;for(p=0;p<c.length;p++)u=c[p],!(r.indexOf(u)>=0)&&(a[u]=n[u]);return a}function LV(n){return!n||n.trim()==="#"}function dM({tagName:n,disabled:r,href:a,target:c,rel:u,role:p,onClick:m,tabIndex:w=0,type:k}){n||(a!=null||c!=null||u!=null?n="a":n="button");const _={tagName:n};if(n==="button")return[{type:k||"button",disabled:r},_];const x=A=>{if((r||n==="a"&&LV(a))&&A.preventDefault(),r){A.stopPropagation();return}m==null||m(A)},y=A=>{A.key===" "&&(A.preventDefault(),x(A))};return n==="a"&&(a||(a="#"),r&&(a=void 0)),[{role:p??"button",disabled:void 0,tabIndex:r?void 0:w,href:a,target:n==="a"?c:void 0,"aria-disabled":r||void 0,rel:n==="a"?u:void 0,onClick:x,onKeyDown:y},_]}const jV=V.forwardRef((n,r)=>{let{as:a,disabled:c}=n,u=RV(n,OV);const[p,{tagName:m}]=dM(Object.assign({tagName:a,disabled:c},u));return E.jsx(m,Object.assign({},u,p,{ref:r}))});jV.displayName="Button";const zV=["onKeyDown"];function FV(n,r){if(n==null)return{};var a={},c=Object.keys(n),u,p;for(p=0;p<c.length;p++)u=c[p],!(r.indexOf(u)>=0)&&(a[u]=n[u]);return a}function VV(n){return!n||n.trim()==="#"}const uM=V.forwardRef((n,r)=>{let{onKeyDown:a}=n,c=FV(n,zV);const[u]=dM(Object.assign({tagName:"a"},c)),p=aM(m=>{u.onKeyDown(m),a==null||a(m)});return VV(c.href)||c.role==="button"?E.jsx("a",Object.assign({ref:r},c,u,{onKeyDown:p})):E.jsx("a",Object.assign({ref:r},c,{onKeyDown:a}))});uM.displayName="Anchor";const UV=uM,hM=V.forwardRef(({className:n,bsPrefix:r,as:a=UV,...c},u)=>(r=co(r,"alert-link"),E.jsx(a,{ref:u,className:bn(n,r),...c})));hM.displayName="AlertLink";const HV=hM;var pM={exports:{}},$V="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",WV=$V,qV=WV;function fM(){}function mM(){}mM.resetWarningCache=fM;var GV=function(){function n(c,u,p,m,w,k){if(k!==qV){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}n.isRequired=n;function r(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:r,element:n,elementType:n,instanceOf:r,node:n,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:mM,resetWarningCache:fM};return a.PropTypes=a,a};pM.exports=GV();var gM=pM.exports;const vb=jd(gM),kD={disabled:!1},kM=ji.createContext(null);var KV=function(r){return r.scrollTop},Zc="unmounted",Ps="exited",Bi="entering",Os="entered",Lw="exiting",ii=function(n){TV(r,n);function r(c,u){var p;p=n.call(this,c,u)||this;var m=u,w=m&&!m.isMounting?c.enter:c.appear,k;return p.appearStatus=null,c.in?w?(k=Ps,p.appearStatus=Bi):k=Os:c.unmountOnExit||c.mountOnEnter?k=Zc:k=Ps,p.state={status:k},p.nextCallback=null,p}r.getDerivedStateFromProps=function(u,p){var m=u.in;return m&&p.status===Zc?{status:Ps}:null};var a=r.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(u){var p=null;if(u!==this.props){var m=this.state.status;this.props.in?m!==Bi&&m!==Os&&(p=Bi):(m===Bi||m===Os)&&(p=Lw)}this.updateStatus(!1,p)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var u=this.props.timeout,p,m,w;return p=m=w=u,u!=null&&typeof u!="number"&&(p=u.exit,m=u.enter,w=u.appear!==void 0?u.appear:m),{exit:p,enter:m,appear:w}},a.updateStatus=function(u,p){if(u===void 0&&(u=!1),p!==null)if(this.cancelNextCallback(),p===Bi){if(this.props.unmountOnExit||this.props.mountOnEnter){var m=this.props.nodeRef?this.props.nodeRef.current:Qc.findDOMNode(this);m&&KV(m)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ps&&this.setState({status:Zc})},a.performEnter=function(u){var p=this,m=this.props.enter,w=this.context?this.context.isMounting:u,k=this.props.nodeRef?[w]:[Qc.findDOMNode(this),w],_=k[0],x=k[1],y=this.getTimeouts(),A=w?y.appear:y.enter;if(!u&&!m||kD.disabled){this.safeSetState({status:Os},function(){p.props.onEntered(_)});return}this.props.onEnter(_,x),this.safeSetState({status:Bi},function(){p.props.onEntering(_,x),p.onTransitionEnd(A,function(){p.safeSetState({status:Os},function(){p.props.onEntered(_,x)})})})},a.performExit=function(){var u=this,p=this.props.exit,m=this.getTimeouts(),w=this.props.nodeRef?void 0:Qc.findDOMNode(this);if(!p||kD.disabled){this.safeSetState({status:Ps},function(){u.props.onExited(w)});return}this.props.onExit(w),this.safeSetState({status:Lw},function(){u.props.onExiting(w),u.onTransitionEnd(m.exit,function(){u.safeSetState({status:Ps},function(){u.props.onExited(w)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(u,p){p=this.setNextCallback(p),this.setState(u,p)},a.setNextCallback=function(u){var p=this,m=!0;return this.nextCallback=function(w){m&&(m=!1,p.nextCallback=null,u(w))},this.nextCallback.cancel=function(){m=!1},this.nextCallback},a.onTransitionEnd=function(u,p){this.setNextCallback(p);var m=this.props.nodeRef?this.props.nodeRef.current:Qc.findDOMNode(this),w=u==null&&!this.props.addEndListener;if(!m||w){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var k=this.props.nodeRef?[this.nextCallback]:[m,this.nextCallback],_=k[0],x=k[1];this.props.addEndListener(_,x)}u!=null&&setTimeout(this.nextCallback,u)},a.render=function(){var u=this.state.status;if(u===Zc)return null;var p=this.props,m=p.children;p.in,p.mountOnEnter,p.unmountOnExit,p.appear,p.enter,p.exit,p.timeout,p.addEndListener,p.onEnter,p.onEntering,p.onEntered,p.onExit,p.onExiting,p.onExited,p.nodeRef;var w=wn(p,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ji.createElement(kM.Provider,{value:null},typeof m=="function"?m(u,w):ji.cloneElement(ji.Children.only(m),w))},r}(ji.Component);ii.contextType=kM;ii.propTypes={};function za(){}ii.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:za,onEntering:za,onEntered:za,onExit:za,onExiting:za,onExited:za};ii.UNMOUNTED=Zc;ii.EXITED=Ps;ii.ENTERING=Bi;ii.ENTERED=Os;ii.EXITING=Lw;const YV=ii;function QV(n){return n&&n.ownerDocument||document}function ZV(n){var r=QV(n);return r&&r.defaultView||window}function JV(n,r){return ZV(n).getComputedStyle(n,r)}var XV=/([A-Z])/g;function eU(n){return n.replace(XV,"-$1").toLowerCase()}var tU=/^ms-/;function rp(n){return eU(n).replace(tU,"-ms-")}var nU=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function oU(n){return!!(n&&nU.test(n))}function bM(n,r){var a="",c="";if(typeof r=="string")return n.style.getPropertyValue(rp(r))||JV(n).getPropertyValue(rp(r));Object.keys(r).forEach(function(u){var p=r[u];!p&&p!==0?n.style.removeProperty(rp(u)):oU(u)?c+=u+"("+p+") ":a+=rp(u)+": "+p+";"}),c&&(a+="transform: "+c+";"),n.style.cssText+=";"+a}const rU=!!(typeof window<"u"&&window.document&&window.document.createElement);var jw=!1,zw=!1;try{var Ab={get passive(){return jw=!0},get once(){return zw=jw=!0}};rU&&(window.addEventListener("test",Ab,Ab),window.removeEventListener("test",Ab,!0))}catch{}function iU(n,r,a,c){if(c&&typeof c!="boolean"&&!zw){var u=c.once,p=c.capture,m=a;!zw&&u&&(m=a.__once||function w(k){this.removeEventListener(r,w,p),a.call(this,k)},a.__once=m),n.addEventListener(r,m,jw?c:p)}n.addEventListener(r,a,c)}function sU(n,r,a,c){var u=c&&typeof c!="boolean"?c.capture:c;n.removeEventListener(r,a,u),a.__once&&n.removeEventListener(r,a.__once,u)}function wM(n,r,a,c){return iU(n,r,a,c),function(){sU(n,r,a,c)}}function aU(n,r,a,c){if(a===void 0&&(a=!1),c===void 0&&(c=!0),n){var u=document.createEvent("HTMLEvents");u.initEvent(r,a,c),n.dispatchEvent(u)}}function lU(n){var r=bM(n,"transitionDuration")||"",a=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*a}function cU(n,r,a){a===void 0&&(a=5);var c=!1,u=setTimeout(function(){c||aU(n,"transitionend",!0)},r+a),p=wM(n,"transitionend",function(){c=!0},{once:!0});return function(){clearTimeout(u),p()}}function dU(n,r,a,c){a==null&&(a=lU(n)||0);var u=cU(n,a,c),p=wM(n,"transitionend",r);return function(){u(),p()}}function bD(n,r){const a=bM(n,r)||"",c=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*c}function uU(n,r){const a=bD(n,"transitionDuration"),c=bD(n,"transitionDelay"),u=dU(n,p=>{p.target===n&&(u(),r(p))},a+c)}function hU(n){n.offsetHeight}const wD=n=>!n||typeof n=="function"?n:r=>{n.current=r};function pU(n,r){const a=wD(n),c=wD(r);return u=>{a&&a(u),c&&c(u)}}function fU(n,r){return V.useMemo(()=>pU(n,r),[n,r])}function mU(n){return n&&"setState"in n?Qc.findDOMNode(n):n??null}const gU=ji.forwardRef(({onEnter:n,onEntering:r,onEntered:a,onExit:c,onExiting:u,onExited:p,addEndListener:m,children:w,childRef:k,..._},x)=>{const y=V.useRef(null),A=fU(y,k),S=Y=>{A(mU(Y))},I=Y=>K=>{Y&&y.current&&Y(y.current,K)},N=V.useCallback(I(n),[n]),F=V.useCallback(I(r),[r]),R=V.useCallback(I(a),[a]),T=V.useCallback(I(c),[c]),B=V.useCallback(I(u),[u]),H=V.useCallback(I(p),[p]),q=V.useCallback(I(m),[m]);return E.jsx(YV,{ref:x,..._,onEnter:N,onEntered:R,onEntering:F,onExit:T,onExited:H,onExiting:B,addEndListener:q,nodeRef:y,children:typeof w=="function"?(Y,K)=>w(Y,{...K,ref:S}):ji.cloneElement(w,{ref:S})})}),kU=gU,bU={[Bi]:"show",[Os]:"show"},vM=V.forwardRef(({className:n,children:r,transitionClasses:a={},onEnter:c,...u},p)=>{const m={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},w=V.useCallback((k,_)=>{hU(k),c==null||c(k,_)},[c]);return E.jsx(kU,{ref:p,addEndListener:uU,...m,onEnter:w,childRef:r.ref,children:(k,_)=>V.cloneElement(r,{..._,className:bn("fade",n,r.props.className,bU[k],a[k])})})});vM.displayName="Fade";const vD=vM,wU={"aria-label":vb.string,onClick:vb.func,variant:vb.oneOf(["white"])},lv=V.forwardRef(({className:n,variant:r,"aria-label":a="Close",...c},u)=>E.jsx("button",{ref:u,type:"button",className:bn("btn-close",r&&`btn-close-${r}`,n),"aria-label":a,...c}));lv.displayName="CloseButton";lv.propTypes=wU;const vU=lv,AM=V.forwardRef((n,r)=>{const{bsPrefix:a,show:c=!0,closeLabel:u="Close alert",closeVariant:p,className:m,children:w,variant:k="primary",onClose:_,dismissible:x,transition:y=vD,...A}=DV(n,{show:"onClose"}),S=co(a,"alert"),I=aM(R=>{_&&_(!1,R)}),N=y===!0?vD:y,F=E.jsxs("div",{role:"alert",...N?void 0:A,ref:r,className:bn(m,S,k&&`${S}-${k}`,x&&`${S}-dismissible`),children:[x&&E.jsx(vU,{onClick:I,"aria-label":u,variant:p}),w]});return N?E.jsx(N,{unmountOnExit:!0,...A,ref:void 0,in:c,children:F}):c?F:null});AM.displayName="Alert";const Fw=Object.assign(AM,{Link:HV,Heading:BV});function Tt(){return localStorage.getItem("bc-token")}const Hf=async()=>{console.log("Calling CheckUserLogged from main");try{return await $f()?await Mr():null}catch(n){return console.log(n),null}};async function $f(){const n=localStorage.getItem("bc-token");return n?(le.defaults.headers.common.Authorization=`Bearer ${n}`,await le.get("https://browseclimate20231121101412.azurewebsites.net/api/User/validate")):!1}function Mr(){const n=localStorage.getItem("bc-token");return n?(console.log("Token detected, decoding user"),yV(n)):(console.error("No token stored"),null)}const AU=()=>{const[n,r]=V.useState(""),[a,c]=V.useState(""),[u,p]=V.useState(null),m=Gd();_()==!0&&m("/profile"),V.useState(()=>{},[u]);async function k(){try{console.log("Call login");const x=await le.post(`https://browseclimate20231121101412.azurewebsites.net/api/User/login?pseudo=${n}&password=${a}`);localStorage.setItem("bc-token",x.data),m("/")}catch(x){console.log(x),console.log("Login error"),x.response.data.title?p(x.response.data.title):p(x.response.data)}console.log("End call login")}async function _(){}return E.jsxs("div",{children:[u&&E.jsxs(Fw,{variant:"danger",children:[" ",u," "]}),E.jsx("h3",{children:" Connectez-vous "}),E.jsx("div",{children:E.jsxs("form",{children:[E.jsx("label",{children:" Pseudo "}),E.jsx("input",{type:"text",onChange:x=>r(x.target.value),name:"pseudo"}),E.jsx("label",{children:" Mot se passe "}),E.jsx("input",{type:"password",onChange:x=>c(x.target.value),name:"password"}),E.jsx("button",{type:"submit",onClick:x=>{x.preventDefault(),k()},children:" Se connecter "})]})})]})},CU=()=>{const[n,r]=V.useState(null);V.useEffect(()=>{a()},[]),V.useEffect(()=>{},[n]);async function a(){console.log("Calling CheckUserLogged from main");try{if(await $f()){const u=await Mr();r(u)}}catch(c){console.log(c)}}return E.jsxs("div",{children:[E.jsxs("div",{className:"home-rubrique-container",children:[E.jsx("h3",{children:"  Explorez et apprenez  "}),E.jsxs("div",{className:"home homepage-presentation",children:[E.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis odio, ratione placeat quidem iusto, repellat autem, laudantium cumque obcaecati dignissimos! Corporis, nemo quis ullam consequuntur placeat commodi temporibus, exercitationem unde laudantium facere odio voluptatum necessitatibus facilis doloremque nulla! Reprehenderit?"}),E.jsx("img",{src:"../src/assets/images/app/home/compass.jpg"})]})]}),E.jsxs("div",{className:"home-rubrique-container",children:[E.jsx("h3",{children:" Les plus belles villes du monde sont la  "}),E.jsxs("div",{className:"home homepage-ville",children:[E.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, doloremque voluptatibus pariatur, voluptas quo corporis eius optio vero ab, nihil nobis sunt at quae! Dignissimos dolorum natus tenetur quia veritatis a similique? Veritatis debitis ad distinctio ducimus, quia sunt vel aliquid dolor, nihil at iure? Quo, quas? Consequatur, alias culpa! Eius consectetur atque eaque est perspiciatis, praesentium beatae sequi fugit laborum reiciendis sit provident tempora quis voluptatum odio dignissimos, reprehenderit, sapiente corrupti. Fugiat dolores error quia ad saepe doloribus deleniti!"}),E.jsx("img",{src:"../src/assets/images/app/home/tokyoHome.jpg"})]}),E.jsx(Ce,{className:"btn btn-primary",to:"/city",children:" Decouvrir les villes "})]}),E.jsxs("div",{className:"home-rubrique-container",children:[E.jsx("h3",{children:" Nos plus belles écritures "}),E.jsxs("div",{className:"home homepage-article",children:[E.jsx("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis vero aliquam voluptas obcaecati quibusdam quidem quam, nostrum laudantium nemo commodi inventore facilis doloremque facere? Similique voluptatibus quibusdam itaque id velit suscipit fugiat, molestiae culpa delectus ipsum facilis reiciendis natus quis omnis cupiditate, hic distinctio repellendus minima rem at non dolorem earum magni magnam. Sint quae ab totam architecto molestiae perferendis, deserunt nesciunt iure nobis quis repellat cumque odit in ea!"}),E.jsx("img",{src:"../src/assets/images/app/home/pen.jpg"})]}),E.jsx(Ce,{className:"btn btn-primary",to:"/article",children:" Lire les articles "})]}),E.jsxs("div",{className:"home-rubrique-container",children:[E.jsx("h3",{children:" Votre profil, votre monde "}),E.jsx("div",{className:"home homepage-profile",children:E.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, enim ut saepe provident maxime eius cumque tempore voluptates iste, dignissimos quia temporibus laboriosam. Est voluptates assumenda dignissimos nam temporibus, cupiditate autem sint vitae dolorum, doloribus ut? Vel perferendis quas, laborum, pariatur nisi praesentium animi quae distinctio delectus quis, nihil repudiandae amet fugit repellat aperiam! Error, dolorum quisquam! Neque facere voluptatibus necessitatibus quod? Dolorem, error dolores. Ducimus adipisci voluptatem reprehenderit, ullam beatae amet facilis natus sint ratione consequatur incidunt porro! Corporis neque blanditiis ex dicta? Delectus."})}),n&&E.jsx(Ce,{className:"btn btn-primary",to:"/profile",children:" Accédez à votre profil  "}),!n&&E.jsx(Ce,{className:"btn btn-primary",to:"/login",children:" Connectez-vous et découvrez toutes les fonctionalités  "})]}),E.jsx("div",{className:"home-rubrique-container",children:E.jsxs("div",{className:"home homepage-stats",children:[E.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus voluptatibus atque distinctio exercitationem natus accusantium sapiente nostrum quis. Voluptas, libero!"}),E.jsx("img",{src:"../src/assets/images/app/home/stats.jpg"})]})})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=function(n){const r=[];let a=0;for(let c=0;c<n.length;c++){let u=n.charCodeAt(c);u<128?r[a++]=u:u<2048?(r[a++]=u>>6|192,r[a++]=u&63|128):(u&64512)===55296&&c+1<n.length&&(n.charCodeAt(c+1)&64512)===56320?(u=65536+((u&1023)<<10)+(n.charCodeAt(++c)&1023),r[a++]=u>>18|240,r[a++]=u>>12&63|128,r[a++]=u>>6&63|128,r[a++]=u&63|128):(r[a++]=u>>12|224,r[a++]=u>>6&63|128,r[a++]=u&63|128)}return r},_U=function(n){const r=[];let a=0,c=0;for(;a<n.length;){const u=n[a++];if(u<128)r[c++]=String.fromCharCode(u);else if(u>191&&u<224){const p=n[a++];r[c++]=String.fromCharCode((u&31)<<6|p&63)}else if(u>239&&u<365){const p=n[a++],m=n[a++],w=n[a++],k=((u&7)<<18|(p&63)<<12|(m&63)<<6|w&63)-65536;r[c++]=String.fromCharCode(55296+(k>>10)),r[c++]=String.fromCharCode(56320+(k&1023))}else{const p=n[a++],m=n[a++];r[c++]=String.fromCharCode((u&15)<<12|(p&63)<<6|m&63)}}return r.join("")},_M={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,r){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=r?this.byteToCharMapWebSafe_:this.byteToCharMap_,c=[];for(let u=0;u<n.length;u+=3){const p=n[u],m=u+1<n.length,w=m?n[u+1]:0,k=u+2<n.length,_=k?n[u+2]:0,x=p>>2,y=(p&3)<<4|w>>4;let A=(w&15)<<2|_>>6,S=_&63;k||(S=64,m||(A=64)),c.push(a[x],a[y],a[A],a[S])}return c.join("")},encodeString(n,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(n):this.encodeByteArray(CM(n),r)},decodeString(n,r){return this.HAS_NATIVE_SUPPORT&&!r?atob(n):_U(this.decodeStringToByteArray(n,r))},decodeStringToByteArray(n,r){this.init_();const a=r?this.charToByteMapWebSafe_:this.charToByteMap_,c=[];for(let u=0;u<n.length;){const p=a[n.charAt(u++)],w=u<n.length?a[n.charAt(u)]:0;++u;const _=u<n.length?a[n.charAt(u)]:64;++u;const y=u<n.length?a[n.charAt(u)]:64;if(++u,p==null||w==null||_==null||y==null)throw new yU;const A=p<<2|w>>4;if(c.push(A),_!==64){const S=w<<4&240|_>>2;if(c.push(S),y!==64){const I=_<<6&192|y;c.push(I)}}}return c},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yU extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xU=function(n){const r=CM(n);return _M.encodeByteArray(r,!0)},lf=function(n){return xU(n).replace(/\./g,"")},EU=function(n){try{return _M.decodeString(n,!0)}catch(r){console.error("base64Decode failed: ",r)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SU(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DU=()=>SU().__FIREBASE_DEFAULTS__,TU=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},IU=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const r=n&&EU(n[1]);return r&&JSON.parse(r)},cv=()=>{try{return DU()||TU()||IU()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},MU=n=>{var r,a;return(a=(r=cv())===null||r===void 0?void 0:r.emulatorHosts)===null||a===void 0?void 0:a[n]},NU=n=>{const r=MU(n);if(!r)return;const a=r.lastIndexOf(":");if(a<=0||a+1===r.length)throw new Error(`Invalid host ${r} with no separate hostname and port!`);const c=parseInt(r.substring(a+1),10);return r[0]==="["?[r.substring(1,a-1),c]:[r.substring(0,a),c]},yM=()=>{var n;return(n=cv())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((r,a)=>{this.resolve=r,this.reject=a})}wrapCallback(r){return(a,c)=>{a?this.reject(a):this.resolve(c),typeof r=="function"&&(this.promise.catch(()=>{}),r.length===1?r(a):r(a,c))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BU(n,r){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},c=r||"demo-project",u=n.iat||0,p=n.sub||n.user_id;if(!p)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const m=Object.assign({iss:`https://securetoken.google.com/${c}`,aud:c,iat:u,exp:u+3600,auth_time:u,sub:p,user_id:p,firebase:{sign_in_provider:"custom",identities:{}}},n),w="";return[lf(JSON.stringify(a)),lf(JSON.stringify(m)),w].join(".")}function OU(){var n;const r=(n=cv())===null||n===void 0?void 0:n.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RU(){try{return typeof indexedDB=="object"}catch{return!1}}function LU(){return new Promise((n,r)=>{try{let a=!0;const c="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(c);u.onsuccess=()=>{u.result.close(),a||self.indexedDB.deleteDatabase(c),n(!0)},u.onupgradeneeded=()=>{a=!1},u.onerror=()=>{var p;r(((p=u.error)===null||p===void 0?void 0:p.message)||"")}}catch(a){r(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jU="FirebaseError";class Tl extends Error{constructor(r,a,c){super(a),this.code=r,this.customData=c,this.name=jU,Object.setPrototypeOf(this,Tl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xM.prototype.create)}}class xM{constructor(r,a,c){this.service=r,this.serviceName=a,this.errors=c}create(r,...a){const c=a[0]||{},u=`${this.service}/${r}`,p=this.errors[r],m=p?zU(p,c):"Error",w=`${this.serviceName}: ${m} (${u}).`;return new Tl(u,w,c)}}function zU(n,r){return n.replace(FU,(a,c)=>{const u=r[c];return u!=null?String(u):`<${c}?>`})}const FU=/\{\$([^}]+)}/g;function Vw(n,r){if(n===r)return!0;const a=Object.keys(n),c=Object.keys(r);for(const u of a){if(!c.includes(u))return!1;const p=n[u],m=r[u];if(AD(p)&&AD(m)){if(!Vw(p,m))return!1}else if(p!==m)return!1}for(const u of c)if(!a.includes(u))return!1;return!0}function AD(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n){return n&&n._delegate?n._delegate:n}class Nd{constructor(r,a,c){this.name=r,this.instanceFactory=a,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(r){return this.instantiationMode=r,this}setMultipleInstances(r){return this.multipleInstances=r,this}setServiceProps(r){return this.serviceProps=r,this}setInstanceCreatedCallback(r){return this.onInstanceCreated=r,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU{constructor(r,a){this.name=r,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(r){const a=this.normalizeInstanceIdentifier(r);if(!this.instancesDeferred.has(a)){const c=new PU;if(this.instancesDeferred.set(a,c),this.isInitialized(a)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:a});u&&c.resolve(u)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(r){var a;const c=this.normalizeInstanceIdentifier(r==null?void 0:r.identifier),u=(a=r==null?void 0:r.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(p){if(u)return null;throw p}else{if(u)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(r){if(r.name!==this.name)throw Error(`Mismatching Component ${r.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=r,!!this.shouldAutoInitialize()){if(HU(r))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[a,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);try{const p=this.getOrInitializeService({instanceIdentifier:u});c.resolve(p)}catch{}}}}clearInstance(r=Bs){this.instancesDeferred.delete(r),this.instancesOptions.delete(r),this.instances.delete(r)}async delete(){const r=Array.from(this.instances.values());await Promise.all([...r.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...r.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(r=Bs){return this.instances.has(r)}getOptions(r=Bs){return this.instancesOptions.get(r)||{}}initialize(r={}){const{options:a={}}=r,c=this.normalizeInstanceIdentifier(r.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:c,options:a});for(const[p,m]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(p);c===w&&m.resolve(u)}return u}onInit(r,a){var c;const u=this.normalizeInstanceIdentifier(a),p=(c=this.onInitCallbacks.get(u))!==null&&c!==void 0?c:new Set;p.add(r),this.onInitCallbacks.set(u,p);const m=this.instances.get(u);return m&&r(m,u),()=>{p.delete(r)}}invokeOnInitCallbacks(r,a){const c=this.onInitCallbacks.get(a);if(c)for(const u of c)try{u(r,a)}catch{}}getOrInitializeService({instanceIdentifier:r,options:a={}}){let c=this.instances.get(r);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:UU(r),options:a}),this.instances.set(r,c),this.instancesOptions.set(r,a),this.invokeOnInitCallbacks(c,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,c)}catch{}return c||null}normalizeInstanceIdentifier(r=Bs){return this.component?this.component.multipleInstances?r:Bs:r}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UU(n){return n===Bs?void 0:n}function HU(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $U{constructor(r){this.name=r,this.providers=new Map}addComponent(r){const a=this.getProvider(r.name);if(a.isComponentSet())throw new Error(`Component ${r.name} has already been registered with ${this.name}`);a.setComponent(r)}addOrOverwriteComponent(r){this.getProvider(r.name).isComponentSet()&&this.providers.delete(r.name),this.addComponent(r)}getProvider(r){if(this.providers.has(r))return this.providers.get(r);const a=new VU(r,this);return this.providers.set(r,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pt||(pt={}));const WU={debug:pt.DEBUG,verbose:pt.VERBOSE,info:pt.INFO,warn:pt.WARN,error:pt.ERROR,silent:pt.SILENT},qU=pt.INFO,GU={[pt.DEBUG]:"log",[pt.VERBOSE]:"log",[pt.INFO]:"info",[pt.WARN]:"warn",[pt.ERROR]:"error"},KU=(n,r,...a)=>{if(r<n.logLevel)return;const c=new Date().toISOString(),u=GU[r];if(u)console[u](`[${c}]  ${n.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${r})`)};class YU{constructor(r){this.name=r,this._logLevel=qU,this._logHandler=KU,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(r){if(!(r in pt))throw new TypeError(`Invalid value "${r}" assigned to \`logLevel\``);this._logLevel=r}setLogLevel(r){this._logLevel=typeof r=="string"?WU[r]:r}get logHandler(){return this._logHandler}set logHandler(r){if(typeof r!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=r}get userLogHandler(){return this._userLogHandler}set userLogHandler(r){this._userLogHandler=r}debug(...r){this._userLogHandler&&this._userLogHandler(this,pt.DEBUG,...r),this._logHandler(this,pt.DEBUG,...r)}log(...r){this._userLogHandler&&this._userLogHandler(this,pt.VERBOSE,...r),this._logHandler(this,pt.VERBOSE,...r)}info(...r){this._userLogHandler&&this._userLogHandler(this,pt.INFO,...r),this._logHandler(this,pt.INFO,...r)}warn(...r){this._userLogHandler&&this._userLogHandler(this,pt.WARN,...r),this._logHandler(this,pt.WARN,...r)}error(...r){this._userLogHandler&&this._userLogHandler(this,pt.ERROR,...r),this._logHandler(this,pt.ERROR,...r)}}const QU=(n,r)=>r.some(a=>n instanceof a);let CD,_D;function ZU(){return CD||(CD=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JU(){return _D||(_D=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const EM=new WeakMap,Uw=new WeakMap,SM=new WeakMap,Cb=new WeakMap,dv=new WeakMap;function XU(n){const r=new Promise((a,c)=>{const u=()=>{n.removeEventListener("success",p),n.removeEventListener("error",m)},p=()=>{a(Zi(n.result)),u()},m=()=>{c(n.error),u()};n.addEventListener("success",p),n.addEventListener("error",m)});return r.then(a=>{a instanceof IDBCursor&&EM.set(a,n)}).catch(()=>{}),dv.set(r,n),r}function eH(n){if(Uw.has(n))return;const r=new Promise((a,c)=>{const u=()=>{n.removeEventListener("complete",p),n.removeEventListener("error",m),n.removeEventListener("abort",m)},p=()=>{a(),u()},m=()=>{c(n.error||new DOMException("AbortError","AbortError")),u()};n.addEventListener("complete",p),n.addEventListener("error",m),n.addEventListener("abort",m)});Uw.set(n,r)}let Hw={get(n,r,a){if(n instanceof IDBTransaction){if(r==="done")return Uw.get(n);if(r==="objectStoreNames")return n.objectStoreNames||SM.get(n);if(r==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return Zi(n[r])},set(n,r,a){return n[r]=a,!0},has(n,r){return n instanceof IDBTransaction&&(r==="done"||r==="store")?!0:r in n}};function tH(n){Hw=n(Hw)}function nH(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(r,...a){const c=n.call(_b(this),r,...a);return SM.set(c,r.sort?r.sort():[r]),Zi(c)}:JU().includes(n)?function(...r){return n.apply(_b(this),r),Zi(EM.get(this))}:function(...r){return Zi(n.apply(_b(this),r))}}function oH(n){return typeof n=="function"?nH(n):(n instanceof IDBTransaction&&eH(n),QU(n,ZU())?new Proxy(n,Hw):n)}function Zi(n){if(n instanceof IDBRequest)return XU(n);if(Cb.has(n))return Cb.get(n);const r=oH(n);return r!==n&&(Cb.set(n,r),dv.set(r,n)),r}const _b=n=>dv.get(n);function rH(n,r,{blocked:a,upgrade:c,blocking:u,terminated:p}={}){const m=indexedDB.open(n,r),w=Zi(m);return c&&m.addEventListener("upgradeneeded",k=>{c(Zi(m.result),k.oldVersion,k.newVersion,Zi(m.transaction),k)}),a&&m.addEventListener("blocked",k=>a(k.oldVersion,k.newVersion,k)),w.then(k=>{p&&k.addEventListener("close",()=>p()),u&&k.addEventListener("versionchange",_=>u(_.oldVersion,_.newVersion,_))}).catch(()=>{}),w}const iH=["get","getKey","getAll","getAllKeys","count"],sH=["put","add","delete","clear"],yb=new Map;function yD(n,r){if(!(n instanceof IDBDatabase&&!(r in n)&&typeof r=="string"))return;if(yb.get(r))return yb.get(r);const a=r.replace(/FromIndex$/,""),c=r!==a,u=sH.includes(a);if(!(a in(c?IDBIndex:IDBObjectStore).prototype)||!(u||iH.includes(a)))return;const p=async function(m,...w){const k=this.transaction(m,u?"readwrite":"readonly");let _=k.store;return c&&(_=_.index(w.shift())),(await Promise.all([_[a](...w),u&&k.done]))[0]};return yb.set(r,p),p}tH(n=>({...n,get:(r,a,c)=>yD(r,a)||n.get(r,a,c),has:(r,a)=>!!yD(r,a)||n.has(r,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(r){this.container=r}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(lH(a)){const c=a.getImmediate();return`${c.library}/${c.version}`}else return null}).filter(a=>a).join(" ")}}function lH(n){const r=n.getComponent();return(r==null?void 0:r.type)==="VERSION"}const $w="@firebase/app",xD="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new YU("@firebase/app"),cH="@firebase/app-compat",dH="@firebase/analytics-compat",uH="@firebase/analytics",hH="@firebase/app-check-compat",pH="@firebase/app-check",fH="@firebase/auth",mH="@firebase/auth-compat",gH="@firebase/database",kH="@firebase/database-compat",bH="@firebase/functions",wH="@firebase/functions-compat",vH="@firebase/installations",AH="@firebase/installations-compat",CH="@firebase/messaging",_H="@firebase/messaging-compat",yH="@firebase/performance",xH="@firebase/performance-compat",EH="@firebase/remote-config",SH="@firebase/remote-config-compat",DH="@firebase/storage",TH="@firebase/storage-compat",IH="@firebase/firestore",MH="@firebase/firestore-compat",NH="firebase",PH="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="[DEFAULT]",BH={[$w]:"fire-core",[cH]:"fire-core-compat",[uH]:"fire-analytics",[dH]:"fire-analytics-compat",[pH]:"fire-app-check",[hH]:"fire-app-check-compat",[fH]:"fire-auth",[mH]:"fire-auth-compat",[gH]:"fire-rtdb",[kH]:"fire-rtdb-compat",[bH]:"fire-fn",[wH]:"fire-fn-compat",[vH]:"fire-iid",[AH]:"fire-iid-compat",[CH]:"fire-fcm",[_H]:"fire-fcm-compat",[yH]:"fire-perf",[xH]:"fire-perf-compat",[EH]:"fire-rc",[SH]:"fire-rc-compat",[DH]:"fire-gcs",[TH]:"fire-gcs-compat",[IH]:"fire-fst",[MH]:"fire-fst-compat","fire-js":"fire-js",[NH]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Map,qw=new Map;function OH(n,r){try{n.container.addComponent(r)}catch(a){Ys.debug(`Component ${r.name} failed to register with FirebaseApp ${n.name}`,a)}}function df(n){const r=n.name;if(qw.has(r))return Ys.debug(`There were multiple attempts to register component ${r}.`),!1;qw.set(r,n);for(const a of cf.values())OH(a,n);return!0}function RH(n,r){const a=n.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),n.container.getProvider(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LH={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ji=new xM("app","Firebase",LH);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jH{constructor(r,a,c){this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new Nd("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(r){this.checkDestroyed(),this._automaticDataCollectionEnabled=r}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(r){this._isDeleted=r}checkDestroyed(){if(this.isDeleted)throw Ji.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zH=PH;function DM(n,r={}){let a=n;typeof r!="object"&&(r={name:r});const c=Object.assign({name:Ww,automaticDataCollectionEnabled:!1},r),u=c.name;if(typeof u!="string"||!u)throw Ji.create("bad-app-name",{appName:String(u)});if(a||(a=yM()),!a)throw Ji.create("no-options");const p=cf.get(u);if(p){if(Vw(a,p.options)&&Vw(c,p.config))return p;throw Ji.create("duplicate-app",{appName:u})}const m=new $U(u);for(const k of qw.values())m.addComponent(k);const w=new jH(a,c,m);return cf.set(u,w),w}function FH(n=Ww){const r=cf.get(n);if(!r&&n===Ww&&yM())return DM();if(!r)throw Ji.create("no-app",{appName:n});return r}function cl(n,r,a){var c;let u=(c=BH[n])!==null&&c!==void 0?c:n;a&&(u+=`-${a}`);const p=u.match(/\s|\//),m=r.match(/\s|\//);if(p||m){const w=[`Unable to register library "${u}" with version "${r}":`];p&&w.push(`library name "${u}" contains illegal characters (whitespace or "/")`),p&&m&&w.push("and"),m&&w.push(`version name "${r}" contains illegal characters (whitespace or "/")`),Ys.warn(w.join(" "));return}df(new Nd(`${u}-version`,()=>({library:u,version:r}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VH="firebase-heartbeat-database",UH=1,Pd="firebase-heartbeat-store";let xb=null;function TM(){return xb||(xb=rH(VH,UH,{upgrade:(n,r)=>{switch(r){case 0:n.createObjectStore(Pd)}}}).catch(n=>{throw Ji.create("idb-open",{originalErrorMessage:n.message})})),xb}async function HH(n){try{return await(await TM()).transaction(Pd).objectStore(Pd).get(IM(n))}catch(r){if(r instanceof Tl)Ys.warn(r.message);else{const a=Ji.create("idb-get",{originalErrorMessage:r==null?void 0:r.message});Ys.warn(a.message)}}}async function ED(n,r){try{const c=(await TM()).transaction(Pd,"readwrite");await c.objectStore(Pd).put(r,IM(n)),await c.done}catch(a){if(a instanceof Tl)Ys.warn(a.message);else{const c=Ji.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});Ys.warn(c.message)}}}function IM(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $H=1024,WH=30*24*60*60*1e3;class qH{constructor(r){this.container=r,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new KH(a),this._heartbeatsCachePromise=this._storage.read().then(c=>(this._heartbeatsCache=c,c))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=SD();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const p=new Date(u.date).valueOf();return Date.now()-p<=WH}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const r=SD(),{heartbeatsToSend:a,unsentEntries:c}=GH(this._heartbeatsCache.heartbeats),u=lf(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=r,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}}function SD(){return new Date().toISOString().substring(0,10)}function GH(n,r=$H){const a=[];let c=n.slice();for(const u of n){const p=a.find(m=>m.agent===u.agent);if(p){if(p.dates.push(u.date),DD(a)>r){p.dates.pop();break}}else if(a.push({agent:u.agent,dates:[u.date]}),DD(a)>r){a.pop();break}c=c.slice(1)}return{heartbeatsToSend:a,unsentEntries:c}}class KH{constructor(r){this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RU()?LU().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HH(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(r){var a;if(await this._canUseIndexedDBPromise){const u=await this.read();return ED(this.app,{lastSentHeartbeatDate:(a=r.lastSentHeartbeatDate)!==null&&a!==void 0?a:u.lastSentHeartbeatDate,heartbeats:r.heartbeats})}else return}async add(r){var a;if(await this._canUseIndexedDBPromise){const u=await this.read();return ED(this.app,{lastSentHeartbeatDate:(a=r.lastSentHeartbeatDate)!==null&&a!==void 0?a:u.lastSentHeartbeatDate,heartbeats:[...u.heartbeats,...r.heartbeats]})}else return}}function DD(n){return lf(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YH(n){df(new Nd("platform-logger",r=>new aH(r),"PRIVATE")),df(new Nd("heartbeat",r=>new qH(r),"PRIVATE")),cl($w,xD,n),cl($w,xD,"esm2017"),cl("fire-js","")}YH("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM="firebasestorage.googleapis.com",NM="storageBucket",QH=2*60*1e3,ZH=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Tl{constructor(r,a,c=0){super(Eb(r),`Firebase Storage: ${a} (${Eb(r)})`),this.status_=c,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mt.prototype)}get status(){return this.status_}set status(r){this.status_=r}_codeEquals(r){return Eb(r)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(r){this.customData.serverResponse=r,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var It;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(It||(It={}));function Eb(n){return"storage/"+n}function uv(){const n="An unknown error occurred, please check the error payload for server response.";return new Mt(It.UNKNOWN,n)}function JH(n){return new Mt(It.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function XH(n){return new Mt(It.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function e$(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Mt(It.UNAUTHENTICATED,n)}function t$(){return new Mt(It.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function n$(n){return new Mt(It.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function o$(){return new Mt(It.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function r$(){return new Mt(It.CANCELED,"User canceled the upload/download.")}function i$(n){return new Mt(It.INVALID_URL,"Invalid URL '"+n+"'.")}function s$(n){return new Mt(It.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function a$(){return new Mt(It.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+NM+"' property when initializing the app?")}function l$(){return new Mt(It.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function c$(){return new Mt(It.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function d$(n){return new Mt(It.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gw(n){return new Mt(It.INVALID_ARGUMENT,n)}function PM(){return new Mt(It.APP_DELETED,"The Firebase app was deleted.")}function u$(n){return new Mt(It.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ld(n,r){return new Mt(It.INVALID_FORMAT,"String does not match format '"+n+"': "+r)}function Uc(n){throw new Mt(It.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(r,a){this.bucket=r,this.path_=a}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const r=encodeURIComponent;return"/b/"+r(this.bucket)+"/o/"+r(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(r,a){let c;try{c=En.makeFromUrl(r,a)}catch{return new En(r,"")}if(c.path==="")return c;throw s$(r)}static makeFromUrl(r,a){let c=null;const u="([A-Za-z0-9.\\-_]+)";function p(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const m="(/(.*))?$",w=new RegExp("^gs://"+u+m,"i"),k={bucket:1,path:3};function _(H){H.path_=decodeURIComponent(H.path)}const x="v[A-Za-z0-9_]+",y=a.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",S=new RegExp(`^https?://${y}/${x}/b/${u}/o${A}`,"i"),I={bucket:1,path:3},N=a===MM?"(?:storage.googleapis.com|storage.cloud.google.com)":a,F="([^?#]*)",R=new RegExp(`^https?://${N}/${u}/${F}`,"i"),B=[{regex:w,indices:k,postModify:p},{regex:S,indices:I,postModify:_},{regex:R,indices:{bucket:1,path:2},postModify:_}];for(let H=0;H<B.length;H++){const q=B[H],Y=q.regex.exec(r);if(Y){const K=Y[q.indices.bucket];let O=Y[q.indices.path];O||(O=""),c=new En(K,O),q.postModify(c);break}}if(c==null)throw i$(r);return c}}class h${constructor(r){this.promise_=Promise.reject(r)}getPromise(){return this.promise_}cancel(r=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p$(n,r,a){let c=1,u=null,p=null,m=!1,w=0;function k(){return w===2}let _=!1;function x(...F){_||(_=!0,r.apply(null,F))}function y(F){u=setTimeout(()=>{u=null,n(S,k())},F)}function A(){p&&clearTimeout(p)}function S(F,...R){if(_){A();return}if(F){A(),x.call(null,F,...R);return}if(k()||m){A(),x.call(null,F,...R);return}c<64&&(c*=2);let B;w===1?(w=2,B=0):B=(c+Math.random())*1e3,y(B)}let I=!1;function N(F){I||(I=!0,A(),!_&&(u!==null?(F||(w=2),clearTimeout(u),y(0)):F||(w=1)))}return y(0),p=setTimeout(()=>{m=!0,N(!0)},a),N}function f$(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m$(n){return n!==void 0}function g$(n){return typeof n=="object"&&!Array.isArray(n)}function hv(n){return typeof n=="string"||n instanceof String}function TD(n){return pv()&&n instanceof Blob}function pv(){return typeof Blob<"u"&&!OU()}function Kw(n,r,a,c){if(c<r)throw Gw(`Invalid value for '${n}'. Expected ${r} or greater.`);if(c>a)throw Gw(`Invalid value for '${n}'. Expected ${a} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,r,a){let c=r;return a==null&&(c=`https://${r}`),`${a}://${c}/v0${n}`}function BM(n){const r=encodeURIComponent;let a="?";for(const c in n)if(n.hasOwnProperty(c)){const u=r(c)+"="+r(n[c]);a=a+u+"&"}return a=a.slice(0,-1),a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Us;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Us||(Us={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k$(n,r){const a=n>=500&&n<600,u=[408,429].indexOf(n)!==-1,p=r.indexOf(n)!==-1;return a||u||p}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b${constructor(r,a,c,u,p,m,w,k,_,x,y,A=!0){this.url_=r,this.method_=a,this.headers_=c,this.body_=u,this.successCodes_=p,this.additionalRetryCodes_=m,this.callback_=w,this.errorCallback_=k,this.timeout_=_,this.progressCallback_=x,this.connectionFactory_=y,this.retry=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,I)=>{this.resolve_=S,this.reject_=I,this.start_()})}start_(){const r=(c,u)=>{if(u){c(!1,new ip(!1,null,!0));return}const p=this.connectionFactory_();this.pendingConnection_=p;const m=w=>{const k=w.loaded,_=w.lengthComputable?w.total:-1;this.progressCallback_!==null&&this.progressCallback_(k,_)};this.progressCallback_!==null&&p.addUploadProgressListener(m),p.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&p.removeUploadProgressListener(m),this.pendingConnection_=null;const w=p.getErrorCode()===Us.NO_ERROR,k=p.getStatus();if(!w||k$(k,this.additionalRetryCodes_)&&this.retry){const x=p.getErrorCode()===Us.ABORT;c(!1,new ip(!1,null,x));return}const _=this.successCodes_.indexOf(k)!==-1;c(!0,new ip(_,p))})},a=(c,u)=>{const p=this.resolve_,m=this.reject_,w=u.connection;if(u.wasSuccessCode)try{const k=this.callback_(w,w.getResponse());m$(k)?p(k):p()}catch(k){m(k)}else if(w!==null){const k=uv();k.serverResponse=w.getErrorText(),this.errorCallback_?m(this.errorCallback_(w,k)):m(k)}else if(u.canceled){const k=this.appDelete_?PM():r$();m(k)}else{const k=o$();m(k)}};this.canceled_?a(!1,new ip(!1,null,!0)):this.backoffId_=p$(r,a,this.timeout_)}getPromise(){return this.promise_}cancel(r){this.canceled_=!0,this.appDelete_=r||!1,this.backoffId_!==null&&f$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ip{constructor(r,a,c){this.wasSuccessCode=r,this.connection=a,this.canceled=!!c}}function w$(n,r){r!==null&&r.length>0&&(n.Authorization="Firebase "+r)}function v$(n,r){n["X-Firebase-Storage-Version"]="webjs/"+(r??"AppManager")}function A$(n,r){r&&(n["X-Firebase-GMPID"]=r)}function C$(n,r){r!==null&&(n["X-Firebase-AppCheck"]=r)}function _$(n,r,a,c,u,p,m=!0){const w=BM(n.urlParams),k=n.url+w,_=Object.assign({},n.headers);return A$(_,r),w$(_,a),v$(_,p),C$(_,c),new b$(k,n.method,_,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,u,m)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function x$(...n){const r=y$();if(r!==void 0){const a=new r;for(let c=0;c<n.length;c++)a.append(n[c]);return a.getBlob()}else{if(pv())return new Blob(n);throw new Mt(It.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function E$(n,r,a){return n.webkitSlice?n.webkitSlice(r,a):n.mozSlice?n.mozSlice(r,a):n.slice?n.slice(r,a):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(n){if(typeof atob>"u")throw d$("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sb{constructor(r,a){this.data=r,this.contentType=a||null}}function D$(n,r){switch(n){case _r.RAW:return new Sb(OM(r));case _r.BASE64:case _r.BASE64URL:return new Sb(RM(n,r));case _r.DATA_URL:return new Sb(I$(r),M$(r))}throw uv()}function OM(n){const r=[];for(let a=0;a<n.length;a++){let c=n.charCodeAt(a);if(c<=127)r.push(c);else if(c<=2047)r.push(192|c>>6,128|c&63);else if((c&64512)===55296)if(!(a<n.length-1&&(n.charCodeAt(a+1)&64512)===56320))r.push(239,191,189);else{const p=c,m=n.charCodeAt(++a);c=65536|(p&1023)<<10|m&1023,r.push(240|c>>18,128|c>>12&63,128|c>>6&63,128|c&63)}else(c&64512)===56320?r.push(239,191,189):r.push(224|c>>12,128|c>>6&63,128|c&63)}return new Uint8Array(r)}function T$(n){let r;try{r=decodeURIComponent(n)}catch{throw ld(_r.DATA_URL,"Malformed data URL.")}return OM(r)}function RM(n,r){switch(n){case _r.BASE64:{const u=r.indexOf("-")!==-1,p=r.indexOf("_")!==-1;if(u||p)throw ld(n,"Invalid character '"+(u?"-":"_")+"' found: is it base64url encoded?");break}case _r.BASE64URL:{const u=r.indexOf("+")!==-1,p=r.indexOf("/")!==-1;if(u||p)throw ld(n,"Invalid character '"+(u?"+":"/")+"' found: is it base64 encoded?");r=r.replace(/-/g,"+").replace(/_/g,"/");break}}let a;try{a=S$(r)}catch(u){throw u.message.includes("polyfill")?u:ld(n,"Invalid character found")}const c=new Uint8Array(a.length);for(let u=0;u<a.length;u++)c[u]=a.charCodeAt(u);return c}class LM{constructor(r){this.base64=!1,this.contentType=null;const a=r.match(/^data:([^,]+)?,/);if(a===null)throw ld(_r.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const c=a[1]||null;c!=null&&(this.base64=N$(c,";base64"),this.contentType=this.base64?c.substring(0,c.length-7):c),this.rest=r.substring(r.indexOf(",")+1)}}function I$(n){const r=new LM(n);return r.base64?RM(_r.BASE64,r.rest):T$(r.rest)}function M$(n){return new LM(n).contentType}function N$(n,r){return n.length>=r.length?n.substring(n.length-r.length)===r:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(r,a){let c=0,u="";TD(r)?(this.data_=r,c=r.size,u=r.type):r instanceof ArrayBuffer?(a?this.data_=new Uint8Array(r):(this.data_=new Uint8Array(r.byteLength),this.data_.set(new Uint8Array(r))),c=this.data_.length):r instanceof Uint8Array&&(a?this.data_=r:(this.data_=new Uint8Array(r.length),this.data_.set(r)),c=r.length),this.size_=c,this.type_=u}size(){return this.size_}type(){return this.type_}slice(r,a){if(TD(this.data_)){const c=this.data_,u=E$(c,r,a);return u===null?null:new Li(u)}else{const c=new Uint8Array(this.data_.buffer,r,a-r);return new Li(c,!0)}}static getBlob(...r){if(pv()){const a=r.map(c=>c instanceof Li?c.data_:c);return new Li(x$.apply(null,a))}else{const a=r.map(m=>hv(m)?D$(_r.RAW,m).data:m.data_);let c=0;a.forEach(m=>{c+=m.byteLength});const u=new Uint8Array(c);let p=0;return a.forEach(m=>{for(let w=0;w<m.length;w++)u[p++]=m[w]}),new Li(u,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(n){let r;try{r=JSON.parse(n)}catch{return null}return g$(r)?r:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P$(n){if(n.length===0)return null;const r=n.lastIndexOf("/");return r===-1?"":n.slice(0,r)}function B$(n,r){const a=r.split("/").filter(c=>c.length>0).join("/");return n.length===0?a:n+"/"+a}function jM(n){const r=n.lastIndexOf("/",n.length-2);return r===-1?n:n.slice(r+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O$(n,r){return r}class _n{constructor(r,a,c,u){this.server=r,this.local=a||r,this.writable=!!c,this.xform=u||O$}}let sp=null;function R$(n){return!hv(n)||n.length<2?n:jM(n)}function zM(){if(sp)return sp;const n=[];n.push(new _n("bucket")),n.push(new _n("generation")),n.push(new _n("metageneration")),n.push(new _n("name","fullPath",!0));function r(p,m){return R$(m)}const a=new _n("name");a.xform=r,n.push(a);function c(p,m){return m!==void 0?Number(m):m}const u=new _n("size");return u.xform=c,n.push(u),n.push(new _n("timeCreated")),n.push(new _n("updated")),n.push(new _n("md5Hash",null,!0)),n.push(new _n("cacheControl",null,!0)),n.push(new _n("contentDisposition",null,!0)),n.push(new _n("contentEncoding",null,!0)),n.push(new _n("contentLanguage",null,!0)),n.push(new _n("contentType",null,!0)),n.push(new _n("metadata","customMetadata",!0)),sp=n,sp}function L$(n,r){function a(){const c=n.bucket,u=n.fullPath,p=new En(c,u);return r._makeStorageReference(p)}Object.defineProperty(n,"ref",{get:a})}function j$(n,r,a){const c={};c.type="file";const u=a.length;for(let p=0;p<u;p++){const m=a[p];c[m.local]=m.xform(c,r[m.server])}return L$(c,n),c}function FM(n,r,a){const c=fv(r);return c===null?null:j$(n,c,a)}function z$(n,r,a,c){const u=fv(r);if(u===null||!hv(u.downloadTokens))return null;const p=u.downloadTokens;if(p.length===0)return null;const m=encodeURIComponent;return p.split(",").map(_=>{const x=n.bucket,y=n.fullPath,A="/b/"+m(x)+"/o/"+m(y),S=Kd(A,a,c),I=BM({alt:"media",token:_});return S+I})[0]}function F$(n,r){const a={},c=r.length;for(let u=0;u<c;u++){const p=r[u];p.writable&&(a[p.server]=n[p.local])}return JSON.stringify(a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID="prefixes",MD="items";function V$(n,r,a){const c={prefixes:[],items:[],nextPageToken:a.nextPageToken};if(a[ID])for(const u of a[ID]){const p=u.replace(/\/$/,""),m=n._makeStorageReference(new En(r,p));c.prefixes.push(m)}if(a[MD])for(const u of a[MD]){const p=n._makeStorageReference(new En(r,u.name));c.items.push(p)}return c}function U$(n,r,a){const c=fv(a);return c===null?null:V$(n,r,c)}class Wf{constructor(r,a,c,u){this.url=r,this.method=a,this.handler=c,this.timeout=u,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n){if(!n)throw uv()}function H$(n,r){function a(c,u){const p=FM(n,u,r);return mv(p!==null),p}return a}function $$(n,r){function a(c,u){const p=U$(n,r,u);return mv(p!==null),p}return a}function W$(n,r){function a(c,u){const p=FM(n,u,r);return mv(p!==null),z$(p,u,n.host,n._protocol)}return a}function gv(n){function r(a,c){let u;return a.getStatus()===401?a.getErrorText().includes("Firebase App Check token is invalid")?u=t$():u=e$():a.getStatus()===402?u=XH(n.bucket):a.getStatus()===403?u=n$(n.path):u=c,u.status=a.getStatus(),u.serverResponse=c.serverResponse,u}return r}function VM(n){const r=gv(n);function a(c,u){let p=r(c,u);return c.getStatus()===404&&(p=JH(n.path)),p.serverResponse=u.serverResponse,p}return a}function q$(n,r,a,c,u){const p={};r.isRoot?p.prefix="":p.prefix=r.path+"/",a&&a.length>0&&(p.delimiter=a),c&&(p.pageToken=c),u&&(p.maxResults=u);const m=r.bucketOnlyServerUrl(),w=Kd(m,n.host,n._protocol),k="GET",_=n.maxOperationRetryTime,x=new Wf(w,k,$$(n,r.bucket),_);return x.urlParams=p,x.errorHandler=gv(r),x}function G$(n,r,a){const c=r.fullServerUrl(),u=Kd(c,n.host,n._protocol),p="GET",m=n.maxOperationRetryTime,w=new Wf(u,p,W$(n,a),m);return w.errorHandler=VM(r),w}function K$(n,r){const a=r.fullServerUrl(),c=Kd(a,n.host,n._protocol),u="DELETE",p=n.maxOperationRetryTime;function m(k,_){}const w=new Wf(c,u,m,p);return w.successCodes=[200,204],w.errorHandler=VM(r),w}function Y$(n,r){return n&&n.contentType||r&&r.type()||"application/octet-stream"}function Q$(n,r,a){const c=Object.assign({},a);return c.fullPath=n.path,c.size=r.size(),c.contentType||(c.contentType=Y$(null,r)),c}function Z$(n,r,a,c,u){const p=r.bucketOnlyServerUrl(),m={"X-Goog-Upload-Protocol":"multipart"};function w(){let B="";for(let H=0;H<2;H++)B=B+Math.random().toString().slice(2);return B}const k=w();m["Content-Type"]="multipart/related; boundary="+k;const _=Q$(r,c,u),x=F$(_,a),y="--"+k+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+x+`\r
--`+k+`\r
Content-Type: `+_.contentType+`\r
\r
`,A=`\r
--`+k+"--",S=Li.getBlob(y,c,A);if(S===null)throw l$();const I={name:_.fullPath},N=Kd(p,n.host,n._protocol),F="POST",R=n.maxUploadRetryTime,T=new Wf(N,F,H$(n,a),R);return T.urlParams=I,T.headers=m,T.body=S.uploadData(),T.errorHandler=gv(r),T}class J${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Us.NO_ERROR,this.sendPromise_=new Promise(r=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Us.ABORT,r()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Us.NETWORK_ERROR,r()}),this.xhr_.addEventListener("load",()=>{r()})})}send(r,a,c,u){if(this.sent_)throw Uc("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(a,r,!0),u!==void 0)for(const p in u)u.hasOwnProperty(p)&&this.xhr_.setRequestHeader(p,u[p].toString());return c!==void 0?this.xhr_.send(c):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Uc("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Uc("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Uc("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Uc("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(r){return this.xhr_.getResponseHeader(r)}addUploadProgressListener(r){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",r)}removeUploadProgressListener(r){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",r)}}class X$ extends J${initXhr(){this.xhr_.responseType="text"}}function qf(){return new X$}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(r,a){this._service=r,a instanceof En?this._location=a:this._location=En.makeFromUrl(a,r.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(r,a){return new Qs(r,a)}get root(){const r=new En(this._location.bucket,"");return this._newRef(this._service,r)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jM(this._location.path)}get storage(){return this._service}get parent(){const r=P$(this._location.path);if(r===null)return null;const a=new En(this._location.bucket,r);return new Qs(this._service,a)}_throwIfRoot(r){if(this._location.path==="")throw u$(r)}}function eW(n,r,a){n._throwIfRoot("uploadBytes");const c=Z$(n.storage,n._location,zM(),new Li(r,!0),a);return n.storage.makeRequestWithTokens(c,qf).then(u=>({metadata:u,ref:n}))}function tW(n){const r={prefixes:[],items:[]};return UM(n,r).then(()=>r)}async function UM(n,r,a){const u=await nW(n,{pageToken:a});r.prefixes.push(...u.prefixes),r.items.push(...u.items),u.nextPageToken!=null&&await UM(n,r,u.nextPageToken)}function nW(n,r){r!=null&&typeof r.maxResults=="number"&&Kw("options.maxResults",1,1e3,r.maxResults);const a=r||{},c=q$(n.storage,n._location,"/",a.pageToken,a.maxResults);return n.storage.makeRequestWithTokens(c,qf)}function oW(n){n._throwIfRoot("getDownloadURL");const r=G$(n.storage,n._location,zM());return n.storage.makeRequestWithTokens(r,qf).then(a=>{if(a===null)throw c$();return a})}function rW(n){n._throwIfRoot("deleteObject");const r=K$(n.storage,n._location);return n.storage.makeRequestWithTokens(r,qf)}function iW(n,r){const a=B$(n._location.path,r),c=new En(n._location.bucket,a);return new Qs(n.storage,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sW(n){return/^[A-Za-z]+:\/\//.test(n)}function aW(n,r){return new Qs(n,r)}function HM(n,r){if(n instanceof kv){const a=n;if(a._bucket==null)throw a$();const c=new Qs(a,a._bucket);return r!=null?HM(c,r):c}else return r!==void 0?iW(n,r):n}function lW(n,r){if(r&&sW(r)){if(n instanceof kv)return aW(n,r);throw Gw("To use ref(service, url), the first argument must be a Storage instance.")}else return HM(n,r)}function ND(n,r){const a=r==null?void 0:r[NM];return a==null?null:En.makeFromBucketSpec(a,n)}function cW(n,r,a,c={}){n.host=`${r}:${a}`,n._protocol="http";const{mockUserToken:u}=c;u&&(n._overrideAuthToken=typeof u=="string"?u:BU(u,n.app.options.projectId))}class kv{constructor(r,a,c,u,p){this.app=r,this._authProvider=a,this._appCheckProvider=c,this._url=u,this._firebaseVersion=p,this._bucket=null,this._host=MM,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QH,this._maxUploadRetryTime=ZH,this._requests=new Set,u!=null?this._bucket=En.makeFromBucketSpec(u,this._host):this._bucket=ND(this._host,this.app.options)}get host(){return this._host}set host(r){this._host=r,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,r):this._bucket=ND(r,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(r){Kw("time",0,Number.POSITIVE_INFINITY,r),this._maxUploadRetryTime=r}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(r){Kw("time",0,Number.POSITIVE_INFINITY,r),this._maxOperationRetryTime=r}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const r=this._authProvider.getImmediate({optional:!0});if(r){const a=await r.getToken();if(a!==null)return a.accessToken}return null}async _getAppCheckToken(){const r=this._appCheckProvider.getImmediate({optional:!0});return r?(await r.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(r=>r.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(r){return new Qs(this,r)}_makeRequest(r,a,c,u,p=!0){if(this._deleted)return new h$(PM());{const m=_$(r,this._appId,c,u,a,this._firebaseVersion,p);return this._requests.add(m),m.getPromise().then(()=>this._requests.delete(m),()=>this._requests.delete(m)),m}}async makeRequestWithTokens(r,a){const[c,u]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(r,a,c,u).getPromise()}}const PD="@firebase/storage",BD="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M="storage";function Yw(n,r,a){return n=Il(n),eW(n,r,a)}function Dr(n){return n=Il(n),tW(n)}function ts(n){return n=Il(n),oW(n)}function dW(n){return n=Il(n),rW(n)}function Fn(n,r){return n=Il(n),lW(n,r)}function uW(n=FH(),r){n=Il(n);const c=RH(n,$M).getImmediate({identifier:r}),u=NU("storage");return u&&hW(c,...u),c}function hW(n,r,a,c={}){cW(n,r,a,c)}function pW(n,{instanceIdentifier:r}){const a=n.getProvider("app").getImmediate(),c=n.getProvider("auth-internal"),u=n.getProvider("app-check-internal");return new kv(a,c,u,r,zH)}function fW(){df(new Nd($M,pW,"PUBLIC").setMultipleInstances(!0)),cl(PD,BD,""),cl(PD,BD,"esm2017")}fW();var mW="firebase",gW="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cl(mW,gW,"app");const kW={apiKey:"AIzaSyBYkekAoY9y3pBzj3IQYGyriUygZXEWJ84",authDomain:"browseclimate.firebaseapp.com",projectId:"browseclimate",storageBucket:"browseclimate.appspot.com",messagingSenderId:"145552178268",appId:"1:145552178268:web:150a388b24f06b18a4fa99",storage:{rules:"storage.rules"}},bW=DM(kW),Vn=uW(bW),wW=()=>{const[n,r]=V.useState(null),[a,c]=V.useState(!1);V.useEffect(()=>{async function k(){const _=await m();await w(_),_.sort(function(x,y){return y.timestamp-x.timestamp}),r(_)}k()},[]),V.useEffect(()=>{},[a]),V.useEffect(()=>{console.log("updat")},[n]);function u(){if(n){const k=[...n];k.sort(function(_,x){return x.timestamp-_.timestamp}),r(k)}}function p(){if(n){const k=[...n];k.sort(function(_,x){return r(k),x.views-_.views}),r(k)}}async function m(){try{return console.log("Call all Articles"),(await le.get("https://browseclimate20231121101412.azurewebsites.net/api/Article/GetAll")).data}catch(k){console.log(k)}}async function w(k){console.log(k);for(const _ of k){let x=Fn(Vn,`/articles/${_.id}`);const y=await Dr(x);if(y.items.length>0){console.log(y),console.log("Image on article "+_.id);const A=await ts(y.items[0]);_.imageURL=A,console.log(_)}}return console.log(k),k}return E.jsxs("div",{className:"articles-list",children:[E.jsxs("div",{className:"articles-sort",children:[E.jsx("p",{children:"Trier par : "}),E.jsx("button",{onClick:()=>{u()},children:" Date "}),E.jsx("button",{onClick:()=>{p()},children:"  Popularité "})]}),n&&n.map(k=>E.jsxs("div",{className:"article-container",children:[E.jsxs("h4",{className:"article-title",children:[" ",k.title]}),E.jsx("p",{}),E.jsxs("p",{children:["  ",k.likes,"  ♥ "]}),k.imageURL&&E.jsx("img",{className:"article-image",src:k.imageURL}),!k.imageURL&&E.jsx("img",{className:"article-image",src:"../src/assets/images/app/articles/telescope.jpg"}),E.jsx("div",{className:"article-description",children:k.description}),E.jsx("div",{children:k.content}),E.jsxs("button",{children:[E.jsx(Ce,{to:"/article/"+k.id,children:" Lire "}),"  "]})]},k.id))]})};var uf={exports:{}};uf.exports;(function(n,r){(function(a){const c=a.en=a.en||{};c.dictionary=Object.assign(c.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(a,c){n.exports=c()}(self,()=>(()=>{var a={4959:(m,w,k)=>{const _=k(1103),x={};for(const A of Object.keys(_))x[_[A]]=A;const y={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};m.exports=y;for(const A of Object.keys(y)){if(!("channels"in y[A]))throw new Error("missing channels property: "+A);if(!("labels"in y[A]))throw new Error("missing channel labels property: "+A);if(y[A].labels.length!==y[A].channels)throw new Error("channel and label counts mismatch: "+A);const{channels:S,labels:I}=y[A];delete y[A].channels,delete y[A].labels,Object.defineProperty(y[A],"channels",{value:S}),Object.defineProperty(y[A],"labels",{value:I})}y.rgb.hsl=function(A){const S=A[0]/255,I=A[1]/255,N=A[2]/255,F=Math.min(S,I,N),R=Math.max(S,I,N),T=R-F;let B,H;R===F?B=0:S===R?B=(I-N)/T:I===R?B=2+(N-S)/T:N===R&&(B=4+(S-I)/T),B=Math.min(60*B,360),B<0&&(B+=360);const q=(F+R)/2;return H=R===F?0:q<=.5?T/(R+F):T/(2-R-F),[B,100*H,100*q]},y.rgb.hsv=function(A){let S,I,N,F,R;const T=A[0]/255,B=A[1]/255,H=A[2]/255,q=Math.max(T,B,H),Y=q-Math.min(T,B,H),K=function(O){return(q-O)/6/Y+.5};return Y===0?(F=0,R=0):(R=Y/q,S=K(T),I=K(B),N=K(H),T===q?F=N-I:B===q?F=.3333333333333333+S-N:H===q&&(F=.6666666666666666+I-S),F<0?F+=1:F>1&&(F-=1)),[360*F,100*R,100*q]},y.rgb.hwb=function(A){const S=A[0],I=A[1];let N=A[2];const F=y.rgb.hsl(A)[0],R=1/255*Math.min(S,Math.min(I,N));return N=1-.00392156862745098*Math.max(S,Math.max(I,N)),[F,100*R,100*N]},y.rgb.cmyk=function(A){const S=A[0]/255,I=A[1]/255,N=A[2]/255,F=Math.min(1-S,1-I,1-N);return[100*((1-S-F)/(1-F)||0),100*((1-I-F)/(1-F)||0),100*((1-N-F)/(1-F)||0),100*F]},y.rgb.keyword=function(A){const S=x[A];if(S)return S;let I,N=1/0;for(const T of Object.keys(_)){const B=_[T],H=(R=B,((F=A)[0]-R[0])**2+(F[1]-R[1])**2+(F[2]-R[2])**2);H<N&&(N=H,I=T)}var F,R;return I},y.keyword.rgb=function(A){return _[A]},y.rgb.xyz=function(A){let S=A[0]/255,I=A[1]/255,N=A[2]/255;return S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,I=I>.04045?((I+.055)/1.055)**2.4:I/12.92,N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,[100*(.4124*S+.3576*I+.1805*N),100*(.2126*S+.7152*I+.0722*N),100*(.0193*S+.1192*I+.9505*N)]},y.rgb.lab=function(A){const S=y.rgb.xyz(A);let I=S[0],N=S[1],F=S[2];return I/=95.047,N/=100,F/=108.883,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,F=F>.008856?F**.3333333333333333:7.787*F+.13793103448275862,[116*N-16,500*(I-N),200*(N-F)]},y.hsl.rgb=function(A){const S=A[0]/360,I=A[1]/100,N=A[2]/100;let F,R,T;if(I===0)return T=255*N,[T,T,T];F=N<.5?N*(1+I):N+I-N*I;const B=2*N-F,H=[0,0,0];for(let q=0;q<3;q++)R=S+.3333333333333333*-(q-1),R<0&&R++,R>1&&R--,T=6*R<1?B+6*(F-B)*R:2*R<1?F:3*R<2?B+(F-B)*(.6666666666666666-R)*6:B,H[q]=255*T;return H},y.hsl.hsv=function(A){const S=A[0];let I=A[1]/100,N=A[2]/100,F=I;const R=Math.max(N,.01);return N*=2,I*=N<=1?N:2-N,F*=R<=1?R:2-R,[S,100*(N===0?2*F/(R+F):2*I/(N+I)),100*((N+I)/2)]},y.hsv.rgb=function(A){const S=A[0]/60,I=A[1]/100;let N=A[2]/100;const F=Math.floor(S)%6,R=S-Math.floor(S),T=255*N*(1-I),B=255*N*(1-I*R),H=255*N*(1-I*(1-R));switch(N*=255,F){case 0:return[N,H,T];case 1:return[B,N,T];case 2:return[T,N,H];case 3:return[T,B,N];case 4:return[H,T,N];case 5:return[N,T,B]}},y.hsv.hsl=function(A){const S=A[0],I=A[1]/100,N=A[2]/100,F=Math.max(N,.01);let R,T;T=(2-I)*N;const B=(2-I)*F;return R=I*F,R/=B<=1?B:2-B,R=R||0,T/=2,[S,100*R,100*T]},y.hwb.rgb=function(A){const S=A[0]/360;let I=A[1]/100,N=A[2]/100;const F=I+N;let R;F>1&&(I/=F,N/=F);const T=Math.floor(6*S),B=1-N;R=6*S-T,1&T&&(R=1-R);const H=I+R*(B-I);let q,Y,K;switch(T){default:case 6:case 0:q=B,Y=H,K=I;break;case 1:q=H,Y=B,K=I;break;case 2:q=I,Y=B,K=H;break;case 3:q=I,Y=H,K=B;break;case 4:q=H,Y=I,K=B;break;case 5:q=B,Y=I,K=H}return[255*q,255*Y,255*K]},y.cmyk.rgb=function(A){const S=A[0]/100,I=A[1]/100,N=A[2]/100,F=A[3]/100;return[255*(1-Math.min(1,S*(1-F)+F)),255*(1-Math.min(1,I*(1-F)+F)),255*(1-Math.min(1,N*(1-F)+F))]},y.xyz.rgb=function(A){const S=A[0]/100,I=A[1]/100,N=A[2]/100;let F,R,T;return F=3.2406*S+-1.5372*I+-.4986*N,R=-.9689*S+1.8758*I+.0415*N,T=.0557*S+-.204*I+1.057*N,F=F>.0031308?1.055*F**.4166666666666667-.055:12.92*F,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,T=T>.0031308?1.055*T**.4166666666666667-.055:12.92*T,F=Math.min(Math.max(0,F),1),R=Math.min(Math.max(0,R),1),T=Math.min(Math.max(0,T),1),[255*F,255*R,255*T]},y.xyz.lab=function(A){let S=A[0],I=A[1],N=A[2];return S/=95.047,I/=100,N/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,[116*I-16,500*(S-I),200*(I-N)]},y.lab.xyz=function(A){let S,I,N;I=(A[0]+16)/116,S=A[1]/500+I,N=I-A[2]/200;const F=I**3,R=S**3,T=N**3;return I=F>.008856?F:(I-.13793103448275862)/7.787,S=R>.008856?R:(S-.13793103448275862)/7.787,N=T>.008856?T:(N-.13793103448275862)/7.787,S*=95.047,I*=100,N*=108.883,[S,I,N]},y.lab.lch=function(A){const S=A[0],I=A[1],N=A[2];let F;return F=360*Math.atan2(N,I)/2/Math.PI,F<0&&(F+=360),[S,Math.sqrt(I*I+N*N),F]},y.lch.lab=function(A){const S=A[0],I=A[1],N=A[2]/360*2*Math.PI;return[S,I*Math.cos(N),I*Math.sin(N)]},y.rgb.ansi16=function(A,S=null){const[I,N,F]=A;let R=S===null?y.rgb.hsv(A)[2]:S;if(R=Math.round(R/50),R===0)return 30;let T=30+(Math.round(F/255)<<2|Math.round(N/255)<<1|Math.round(I/255));return R===2&&(T+=60),T},y.hsv.ansi16=function(A){return y.rgb.ansi16(y.hsv.rgb(A),A[2])},y.rgb.ansi256=function(A){const S=A[0],I=A[1],N=A[2];return S===I&&I===N?S<8?16:S>248?231:Math.round((S-8)/247*24)+232:16+36*Math.round(S/255*5)+6*Math.round(I/255*5)+Math.round(N/255*5)},y.ansi16.rgb=function(A){let S=A%10;if(S===0||S===7)return A>50&&(S+=3.5),S=S/10.5*255,[S,S,S];const I=.5*(1+~~(A>50));return[(1&S)*I*255,(S>>1&1)*I*255,(S>>2&1)*I*255]},y.ansi256.rgb=function(A){if(A>=232){const I=10*(A-232)+8;return[I,I,I]}let S;return A-=16,[Math.floor(A/36)/5*255,Math.floor((S=A%36)/6)/5*255,S%6/5*255]},y.rgb.hex=function(A){const S=(((255&Math.round(A[0]))<<16)+((255&Math.round(A[1]))<<8)+(255&Math.round(A[2]))).toString(16).toUpperCase();return"000000".substring(S.length)+S},y.hex.rgb=function(A){const S=A.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!S)return[0,0,0];let I=S[0];S[0].length===3&&(I=I.split("").map(F=>F+F).join(""));const N=parseInt(I,16);return[N>>16&255,N>>8&255,255&N]},y.rgb.hcg=function(A){const S=A[0]/255,I=A[1]/255,N=A[2]/255,F=Math.max(Math.max(S,I),N),R=Math.min(Math.min(S,I),N),T=F-R;let B,H;return B=T<1?R/(1-T):0,H=T<=0?0:F===S?(I-N)/T%6:F===I?2+(N-S)/T:4+(S-I)/T,H/=6,H%=1,[360*H,100*T,100*B]},y.hsl.hcg=function(A){const S=A[1]/100,I=A[2]/100,N=I<.5?2*S*I:2*S*(1-I);let F=0;return N<1&&(F=(I-.5*N)/(1-N)),[A[0],100*N,100*F]},y.hsv.hcg=function(A){const S=A[1]/100,I=A[2]/100,N=S*I;let F=0;return N<1&&(F=(I-N)/(1-N)),[A[0],100*N,100*F]},y.hcg.rgb=function(A){const S=A[0]/360,I=A[1]/100,N=A[2]/100;if(I===0)return[255*N,255*N,255*N];const F=[0,0,0],R=S%1*6,T=R%1,B=1-T;let H=0;switch(Math.floor(R)){case 0:F[0]=1,F[1]=T,F[2]=0;break;case 1:F[0]=B,F[1]=1,F[2]=0;break;case 2:F[0]=0,F[1]=1,F[2]=T;break;case 3:F[0]=0,F[1]=B,F[2]=1;break;case 4:F[0]=T,F[1]=0,F[2]=1;break;default:F[0]=1,F[1]=0,F[2]=B}return H=(1-I)*N,[255*(I*F[0]+H),255*(I*F[1]+H),255*(I*F[2]+H)]},y.hcg.hsv=function(A){const S=A[1]/100,I=S+A[2]/100*(1-S);let N=0;return I>0&&(N=S/I),[A[0],100*N,100*I]},y.hcg.hsl=function(A){const S=A[1]/100,I=A[2]/100*(1-S)+.5*S;let N=0;return I>0&&I<.5?N=S/(2*I):I>=.5&&I<1&&(N=S/(2*(1-I))),[A[0],100*N,100*I]},y.hcg.hwb=function(A){const S=A[1]/100,I=S+A[2]/100*(1-S);return[A[0],100*(I-S),100*(1-I)]},y.hwb.hcg=function(A){const S=A[1]/100,I=1-A[2]/100,N=I-S;let F=0;return N<1&&(F=(I-N)/(1-N)),[A[0],100*N,100*F]},y.apple.rgb=function(A){return[A[0]/65535*255,A[1]/65535*255,A[2]/65535*255]},y.rgb.apple=function(A){return[A[0]/255*65535,A[1]/255*65535,A[2]/255*65535]},y.gray.rgb=function(A){return[A[0]/100*255,A[0]/100*255,A[0]/100*255]},y.gray.hsl=function(A){return[0,0,A[0]]},y.gray.hsv=y.gray.hsl,y.gray.hwb=function(A){return[0,100,A[0]]},y.gray.cmyk=function(A){return[0,0,0,A[0]]},y.gray.lab=function(A){return[A[0],0,0]},y.gray.hex=function(A){const S=255&Math.round(A[0]/100*255),I=((S<<16)+(S<<8)+S).toString(16).toUpperCase();return"000000".substring(I.length)+I},y.rgb.gray=function(A){return[(A[0]+A[1]+A[2])/3/255*100]}},841:(m,w,k)=>{const _=k(4959),x=k(9325),y={};Object.keys(_).forEach(A=>{y[A]={},Object.defineProperty(y[A],"channels",{value:_[A].channels}),Object.defineProperty(y[A],"labels",{value:_[A].labels});const S=x(A);Object.keys(S).forEach(I=>{const N=S[I];y[A][I]=function(F){const R=function(...T){const B=T[0];if(B==null)return B;B.length>1&&(T=B);const H=F(T);if(typeof H=="object")for(let q=H.length,Y=0;Y<q;Y++)H[Y]=Math.round(H[Y]);return H};return"conversion"in F&&(R.conversion=F.conversion),R}(N),y[A][I].raw=function(F){const R=function(...T){const B=T[0];return B==null?B:(B.length>1&&(T=B),F(T))};return"conversion"in F&&(R.conversion=F.conversion),R}(N)})}),m.exports=y},9325:(m,w,k)=>{const _=k(4959);function x(S){const I=function(){const F={},R=Object.keys(_);for(let T=R.length,B=0;B<T;B++)F[R[B]]={distance:-1,parent:null};return F}(),N=[S];for(I[S].distance=0;N.length;){const F=N.pop(),R=Object.keys(_[F]);for(let T=R.length,B=0;B<T;B++){const H=R[B],q=I[H];q.distance===-1&&(q.distance=I[F].distance+1,q.parent=F,N.unshift(H))}}return I}function y(S,I){return function(N){return I(S(N))}}function A(S,I){const N=[I[S].parent,S];let F=_[I[S].parent][S],R=I[S].parent;for(;I[R].parent;)N.unshift(I[R].parent),F=y(_[I[R].parent][R],F),R=I[R].parent;return F.conversion=N,F}m.exports=function(S){const I=x(S),N={},F=Object.keys(I);for(let R=F.length,T=0;T<R;T++){const B=F[T];I[B].parent!==null&&(N[B]=A(B,I))}return N}},1103:m=>{m.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const S=A},3062:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const S=A},903:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const S=A},3143:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},4717:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const S=A},9315:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const S=A},8733:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const S=A},3508:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const S=A},2640:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const S=A},3535:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const S=A},1568:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const S=A},6270:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const S=A},5083:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},4036:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const S=A},3773:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const S=A},3689:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const S=A},1905:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},9773:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const S=A},2347:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},7754:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},111:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const S=A},4721:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const S=A},5730:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const S=A},4564:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},6082:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const S=A},2417:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const S=A},1199:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const S=A},4652:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const S=A},7442:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},9292:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7368:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},4070:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},9247:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const S=A},1613:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const S=A},6306:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const S=A},2128:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const S=A},5087:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},4101:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const S=A},3881:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const S=A},6237:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7341:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},6945:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},8157:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-modal)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-modal);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},4906:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=A},5332:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=A},6781:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const S=A},3398:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const S=A},4157:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const S=A},5485:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},3949:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7686:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7339:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const S=A},9688:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},8847:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BASD,CAPC,6BACC,qCACD,CAEA,8CACC,WACD,CCbD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& .ck-icon {
		margin-right: var(--ck-spacing-medium);
	}

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const S=A},8960:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const S=A},6574:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},4879:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},3662:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const S=A},2577:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},1046:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>span{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,8BACC,cAAe,CACf,eAAiB,CACjB,gCACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > span {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},8793:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},4650:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const S=A},7676:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},5868:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},6764:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},6770:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const S=A},498:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const S=A},8182:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const S=A},9695:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const S=A},5542:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},3332:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,qCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CACrB,wCAAyC,CAFzC,wBAGD,CApBD,gCAuBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const S=A},4793:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const S=A},3488:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},8506:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const S=A},4921:(m,w,k)=>{k.d(w,{Z:()=>S});var _=k(1799),x=k.n(_),y=k(2609),A=k.n(y)()(x());A.push([m.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const S=A},2609:m=>{m.exports=function(w){var k=[];return k.toString=function(){return this.map(function(_){var x=w(_);return _[2]?"@media ".concat(_[2]," {").concat(x,"}"):x}).join("")},k.i=function(_,x,y){typeof _=="string"&&(_=[[null,_,""]]);var A={};if(y)for(var S=0;S<this.length;S++){var I=this[S][0];I!=null&&(A[I]=!0)}for(var N=0;N<_.length;N++){var F=[].concat(_[N]);y&&A[F[0]]||(x&&(F[2]?F[2]="".concat(x," and ").concat(F[2]):F[2]=x),k.push(F))}},k}},1799:m=>{function w(_,x){return function(y){if(Array.isArray(y))return y}(_)||function(y,A){var S=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(S!=null){var I,N,F=[],R=!0,T=!1;try{for(S=S.call(y);!(R=(I=S.next()).done)&&(F.push(I.value),!A||F.length!==A);R=!0);}catch(B){T=!0,N=B}finally{try{R||S.return==null||S.return()}finally{if(T)throw N}}return F}}(_,x)||function(y,A){if(y){if(typeof y=="string")return k(y,A);var S=Object.prototype.toString.call(y).slice(8,-1);if(S==="Object"&&y.constructor&&(S=y.constructor.name),S==="Map"||S==="Set")return Array.from(y);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return k(y,A)}}(_,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(_,x){(x==null||x>_.length)&&(x=_.length);for(var y=0,A=new Array(x);y<x;y++)A[y]=_[y];return A}m.exports=function(_){var x=w(_,4),y=x[1],A=x[3];if(!A)return y;if(typeof btoa=="function"){var S=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),I="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),N="/*# ".concat(I," */"),F=A.sources.map(function(R){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(R," */")});return[y].concat(F).concat([N]).join(`
`)}return[y].join(`
`)}},6062:(m,w,k)=>{var _,x=function(){return _===void 0&&(_=!!(window&&document&&document.all&&!window.atob)),_},y=function(){var K={};return function(O){if(K[O]===void 0){var te=document.querySelector(O);if(window.HTMLIFrameElement&&te instanceof window.HTMLIFrameElement)try{te=te.contentDocument.head}catch{te=null}K[O]=te}return K[O]}}(),A=[];function S(K){for(var O=-1,te=0;te<A.length;te++)if(A[te].identifier===K){O=te;break}return O}function I(K,O){for(var te={},$=[],X=0;X<K.length;X++){var pe=K[X],fe=O.base?pe[0]+O.base:pe[0],Ge=te[fe]||0,ze="".concat(fe," ").concat(Ge);te[fe]=Ge+1;var me=S(ze),_e={css:pe[1],media:pe[2],sourceMap:pe[3]};me!==-1?(A[me].references++,A[me].updater(_e)):A.push({identifier:ze,updater:Y(_e,O),references:1}),$.push(ze)}return $}function N(K){var O=document.createElement("style"),te=K.attributes||{};if(te.nonce===void 0){var $=k.nc;$&&(te.nonce=$)}if(Object.keys(te).forEach(function(pe){O.setAttribute(pe,te[pe])}),typeof K.insert=="function")K.insert(O);else{var X=y(K.insert||"head");if(!X)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");X.appendChild(O)}return O}var F,R=(F=[],function(K,O){return F[K]=O,F.filter(Boolean).join(`
`)});function T(K,O,te,$){var X=te?"":$.media?"@media ".concat($.media," {").concat($.css,"}"):$.css;if(K.styleSheet)K.styleSheet.cssText=R(O,X);else{var pe=document.createTextNode(X),fe=K.childNodes;fe[O]&&K.removeChild(fe[O]),fe.length?K.insertBefore(pe,fe[O]):K.appendChild(pe)}}function B(K,O,te){var $=te.css,X=te.media,pe=te.sourceMap;if(X?K.setAttribute("media",X):K.removeAttribute("media"),pe&&typeof btoa<"u"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(pe))))," */")),K.styleSheet)K.styleSheet.cssText=$;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode($))}}var H=null,q=0;function Y(K,O){var te,$,X;if(O.singleton){var pe=q++;te=H||(H=N(O)),$=T.bind(null,te,pe,!1),X=T.bind(null,te,pe,!0)}else te=N(O),$=B.bind(null,te,O),X=function(){(function(fe){if(fe.parentNode===null)return!1;fe.parentNode.removeChild(fe)})(te)};return $(K),function(fe){if(fe){if(fe.css===K.css&&fe.media===K.media&&fe.sourceMap===K.sourceMap)return;$(K=fe)}else X()}}m.exports=function(K,O){(O=O||{}).singleton||typeof O.singleton=="boolean"||(O.singleton=x());var te=I(K=K||[],O);return function($){if($=$||[],Object.prototype.toString.call($)==="[object Array]"){for(var X=0;X<te.length;X++){var pe=S(te[X]);A[pe].references--}for(var fe=I($,O),Ge=0;Ge<te.length;Ge++){var ze=S(te[Ge]);A[ze].references===0&&(A[ze].updater(),A.splice(ze,1))}te=fe}}}}},c={};function u(m){var w=c[m];if(w!==void 0)return w.exports;var k=c[m]={id:m,exports:{}};return a[m](k,k.exports,u),k.exports}u.n=m=>{var w=m&&m.__esModule?()=>m.default:()=>m;return u.d(w,{a:w}),w},u.d=(m,w)=>{for(var k in w)u.o(w,k)&&!u.o(m,k)&&Object.defineProperty(m,k,{enumerable:!0,get:w[k]})},u.o=(m,w)=>Object.prototype.hasOwnProperty.call(m,w),u.nc=void 0;var p={};return(()=>{function m({emitter:i,activator:e,callback:t,contextElements:o}){i.listenTo(document,"mousedown",(s,l)=>{if(!e())return;const d=typeof l.composedPath=="function"?l.composedPath():[],h=typeof o=="function"?o():o;for(const f of h)if(f.contains(l.target)||d.includes(f))return;t()})}function w(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function k({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}u.d(p,{default:()=>Uk});const _=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var x;const y={isMac:A(_),isWindows:(x=_,x.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(_),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(_),isiOS:function(i){return!!i.match(/iphone|ipad/i)||A(i)&&navigator.maxTouchPoints>0}(_),isAndroid:function(i){return i.indexOf("android")>-1}(_),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(_),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function A(i){return i.indexOf("macintosh")>-1}function S(i,e,t,o){t=t||function(f,g){return f===g};const s=Array.isArray(i)?i:Array.prototype.slice.call(i),l=Array.isArray(e)?e:Array.prototype.slice.call(e),d=function(f,g,b){const v=I(f,g,b);if(v===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const C=N(f,v),D=N(g,v),M=I(C,D,b),P=f.length-M,z=g.length-M;return{firstIndex:v,lastIndexOld:P,lastIndexNew:z}}(s,l,t);return o?function(f,g){const{firstIndex:b,lastIndexOld:v,lastIndexNew:C}=f;if(b===-1)return Array(g).fill("equal");let D=[];return b>0&&(D=D.concat(Array(b).fill("equal"))),C-b>0&&(D=D.concat(Array(C-b).fill("insert"))),v-b>0&&(D=D.concat(Array(v-b).fill("delete"))),C<g&&(D=D.concat(Array(g-C).fill("equal"))),D}(d,l.length):function(f,g){const b=[],{firstIndex:v,lastIndexOld:C,lastIndexNew:D}=g;return D-v>0&&b.push({index:v,type:"insert",values:f.slice(v,D)}),C-v>0&&b.push({index:v+(D-v),type:"delete",howMany:C-v}),b}(l,d)}function I(i,e,t){for(let o=0;o<Math.max(i.length,e.length);o++)if(i[o]===void 0||e[o]===void 0||!t(i[o],e[o]))return o;return-1}function N(i,e){return i.slice(e).reverse()}function F(i,e,t){t=t||function(P,z){return P===z};const o=i.length,s=e.length;if(o>200||s>200||o+s>300)return F.fastDiff(i,e,t,!0);let l,d;if(s<o){const P=i;i=e,e=P,l="delete",d="insert"}else l="insert",d="delete";const h=i.length,f=e.length,g=f-h,b={},v={};function C(P){const z=(v[P-1]!==void 0?v[P-1]:-1)+1,U=v[P+1]!==void 0?v[P+1]:-1,G=z>U?-1:1;b[P+G]&&(b[P]=b[P+G].slice(0)),b[P]||(b[P]=[]),b[P].push(z>U?l:d);let J=Math.max(z,U),ce=J-P;for(;ce<h&&J<f&&t(i[ce],e[J]);)ce++,J++,b[P].push("equal");return J}let D,M=0;do{for(D=-M;D<g;D++)v[D]=C(D);for(D=g+M;D>g;D--)v[D]=C(D);v[g]=C(g),M++}while(v[g]!==f);return b[g].slice(1)}F.fastDiff=S;const R=function(){return function i(){i.called=!0}};class T{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=R(),this.off=R()}}const B=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function H(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+B[i>>0&255]+B[i>>8&255]+B[i>>16&255]+B[i>>24&255]+B[e>>0&255]+B[e>>8&255]+B[e>>16&255]+B[e>>24&255]+B[t>>0&255]+B[t>>8&255]+B[t>>16&255]+B[t>>24&255]+B[o>>0&255]+B[o>>8&255]+B[o>>16&255]+B[o>>24&255]}const q={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function Y(i,e){const t=q.get(e.priority);for(let o=0;o<i.length;o++)if(q.get(i[o].priority)<t)return void i.splice(o,0,e);i.push(e)}const K="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class O extends Error{constructor(e,t,o){super(function(s,l){const d=new WeakSet,h=(b,v)=>{if(typeof v=="object"&&v!==null){if(d.has(v))return`[object ${v.constructor.name}]`;d.add(v)}return v},f=l?` ${JSON.stringify(l,h)}`:"",g=X(s);return s+f+g}(e,o)),this.name="CKEditorError",this.context=t,this.data=o}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const o=new O(e.message,t);throw o.stack=e.stack,o}}function te(i,e){console.warn(...pe(i,e))}function $(i,e){console.error(...pe(i,e))}function X(i){return`
Read more: ${K}#error-${i}`}function pe(i,e){const t=X(i);return e?[i,e,t]:[i,t]}const fe="40.0.0",Ge=new Date(2023,9,4);if(globalThis.CKEDITOR_VERSION)throw new O("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=fe;const ze=Symbol("listeningTo"),me=Symbol("emitterId"),_e=Symbol("delegations"),se=ee(Object);function ee(i){return i?class extends i{on(e,t,o){this.listenTo(this,e,t,o)}once(e,t,o){let s=!1;this.listenTo(this,e,(l,...d)=>{s||(s=!0,l.off(),t.call(this,l,...d))},o)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,o,s={}){let l,d;this[ze]||(this[ze]={});const h=this[ze];Se(e)||ke(e);const f=Se(e);(l=h[f])||(l=h[f]={emitter:e,callbacks:{}}),(d=l.callbacks[t])||(d=l.callbacks[t]=[]),d.push(o),function(g,b,v,C,D){b._addEventListener?b._addEventListener(v,C,D):g._addEventListener.call(b,v,C,D)}(this,e,t,o,s)}stopListening(e,t,o){const s=this[ze];let l=e&&Se(e);const d=s&&l?s[l]:void 0,h=d&&t?d.callbacks[t]:void 0;if(!(!s||e&&!d||t&&!h))if(o)vn(this,e,t,o),h.indexOf(o)!==-1&&(h.length===1?delete d.callbacks[t]:vn(this,e,t,o));else if(h){for(;o=h.pop();)vn(this,e,t,o);delete d.callbacks[t]}else if(d){for(t in d.callbacks)this.stopListening(e,t);delete s[l]}else{for(l in s)this.stopListening(s[l].emitter);delete this[ze]}}fire(e,...t){try{const o=e instanceof T?e:new T(this,e),s=o.name;let l=dn(this,s);if(o.path.push(this),l){const h=[o,...t];l=Array.from(l);for(let f=0;f<l.length&&(l[f].callback.apply(this,h),o.off.called&&(delete o.off.called,this._removeEventListener(s,l[f].callback)),!o.stop.called);f++);}const d=this[_e];if(d){const h=d.get(s),f=d.get("*");h&&Eo(h,o,t),f&&Eo(f,o,t)}return o.return}catch(o){O.rethrowUnexpectedError(o,this)}}delegate(...e){return{to:(t,o)=>{this[_e]||(this[_e]=new Map),e.forEach(s=>{const l=this[_e].get(s);l?l.set(t,o):this[_e].set(s,new Map([[t,o]]))})}}}stopDelegating(e,t){if(this[_e])if(e)if(t){const o=this[_e].get(e);o&&o.delete(t)}else this[_e].delete(e);else this[_e].clear()}_addEventListener(e,t,o){(function(d,h){const f=Ke(d);if(f[h])return;let g=h,b=null;const v=[];for(;g!==""&&!f[g];)f[g]={callbacks:[],childEvents:[]},v.push(f[g]),b&&f[g].childEvents.push(b),b=g,g=g.substr(0,g.lastIndexOf(":"));if(g!==""){for(const C of v)C.callbacks=f[g].callbacks.slice();f[g].childEvents.push(b)}})(this,e);const s=cn(this,e),l={callback:t,priority:q.get(o.priority)};for(const d of s)Y(d,l)}_removeEventListener(e,t){const o=cn(this,e);for(const s of o)for(let l=0;l<s.length;l++)s[l].callback==t&&(s.splice(l,1),l--)}}:se}function ke(i,e){i[me]||(i[me]=e||H())}function Se(i){return i[me]}function Ke(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function cn(i,e){const t=Ke(i)[e];if(!t)return[];let o=[t.callbacks];for(let s=0;s<t.childEvents.length;s++){const l=cn(i,t.childEvents[s]);o=o.concat(l)}return o}function dn(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?dn(i,e.substr(0,e.lastIndexOf(":"))):null}function Eo(i,e,t){for(let[o,s]of i){s?typeof s=="function"&&(s=s(e.name)):s=e.name;const l=new T(e.source,s);l.path=[...e.path],o.fire(l,...t)}}function vn(i,e,t,o){e._removeEventListener?e._removeEventListener(t,o):i._removeEventListener.call(e,t,o)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{ee[i]=se.prototype[i]});const Oe=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},si=Symbol("observableProperties"),ai=Symbol("boundObservables"),li=Symbol("boundProperties"),So=Symbol("decoratedMethods"),Ko=Symbol("decoratedOriginal"),Yo=De(ee());function De(i){return i?class extends i{set(e,t){if(Oe(e))return void Object.keys(e).forEach(s=>{this.set(s,e[s])},this);nt(this);const o=this[si];if(e in this&&!o.has(e))throw new O("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>o.get(e),set(s){const l=o.get(e);let d=this.fire(`set:${e}`,e,s,l);d===void 0&&(d=s),l===d&&o.has(e)||(o.set(e,d),this.fire(`change:${e}`,e,d,l))}}),this[e]=t}bind(...e){if(!e.length||!In(e))throw new O("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new O("observable-bind-duplicate-properties",this);nt(this);const t=this[li];e.forEach(s=>{if(t.has(s))throw new O("observable-bind-rebind",this)});const o=new Map;return e.forEach(s=>{const l={property:s,to:[]};t.set(s,l),o.set(s,l)}),{to:Nt,toMany:An,_observable:this,_bindProperties:e,_to:[],_bindings:o}}unbind(...e){if(!this[si])return;const t=this[li],o=this[ai];if(e.length){if(!In(e))throw new O("observable-unbind-wrong-properties",this);e.forEach(s=>{const l=t.get(s);l&&(l.to.forEach(([d,h])=>{const f=o.get(d),g=f[h];g.delete(l),g.size||delete f[h],Object.keys(f).length||(o.delete(d),this.stopListening(d,"change"))}),t.delete(s))})}else o.forEach((s,l)=>{this.stopListening(l,"change")}),o.clear(),t.clear()}decorate(e){nt(this);const t=this[e];if(!t)throw new O("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(o,s)=>{o.return=t.apply(this,s)}),this[e]=function(...o){return this.fire(e,o)},this[e][Ko]=t,this[So]||(this[So]=[]),this[So].push(e)}stopListening(e,t,o){if(!e&&this[So]){for(const s of this[So])this[s]=this[s][Ko];delete this[So]}super.stopListening(e,t,o)}}:Yo}function nt(i){i[si]||(Object.defineProperty(i,si,{value:new Map}),Object.defineProperty(i,ai,{value:new Map}),Object.defineProperty(i,li,{value:new Map}))}function Nt(...i){const e=function(...l){if(!l.length)throw new O("observable-bind-to-parse-error",null);const d={to:[]};let h;return typeof l[l.length-1]=="function"&&(d.callback=l.pop()),l.forEach(f=>{if(typeof f=="string")h.properties.push(f);else{if(typeof f!="object")throw new O("observable-bind-to-parse-error",null);h={observable:f,properties:[]},d.to.push(h)}}),d}(...i),t=Array.from(this._bindings.keys()),o=t.length;if(!e.callback&&e.to.length>1)throw new O("observable-bind-to-no-callback",this);if(o>1&&e.callback)throw new O("observable-bind-to-extra-callback",this);var s;e.to.forEach(l=>{if(l.properties.length&&l.properties.length!==o)throw new O("observable-bind-to-properties-length",this);l.properties.length||(l.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),s=this._observable,this._to.forEach(l=>{const d=s[ai];let h;d.get(l.observable)||s.listenTo(l.observable,"change",(f,g)=>{h=d.get(l.observable)[g],h&&h.forEach(b=>{Mn(s,b.property)})})}),function(l){let d;l._bindings.forEach((h,f)=>{l._to.forEach(g=>{d=g.properties[h.callback?0:l._bindProperties.indexOf(f)],h.to.push([g.observable,d]),function(b,v,C,D){const M=b[ai],P=M.get(C),z=P||{};z[D]||(z[D]=new Set),z[D].add(v),P||M.set(C,z)}(l._observable,h,g.observable,d)})})}(this),this._bindProperties.forEach(l=>{Mn(this._observable,l)})}function An(i,e,t){if(this._bindings.size>1)throw new O("observable-bind-to-many-not-one-binding",this);this.to(...function(o,s){const l=o.map(d=>[d,s]);return Array.prototype.concat.apply([],l)}(i,e),t)}function In(i){return i.every(e=>typeof e=="string")}function Mn(i,e){const t=i[li].get(e);let o;t.callback?o=t.callback.apply(i,t.to.map(s=>s[0][s[1]])):(o=t.to[0],o=o[0][o[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=o:i.set(e,o)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{De[i]=Yo.prototype[i]});class Qo{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Cn(i){let e=0;for(const t of i)e++;return e}function ct(i,e){const t=Math.min(i.length,e.length);for(let o=0;o<t;o++)if(i[o]!=e[o])return o;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function Wt(i){return!(!i||!i[Symbol.iterator])}const Pl=typeof Ar=="object"&&Ar&&Ar.Object===Object&&Ar;var Bl=typeof self=="object"&&self&&self.Object===Object&&self;const Nn=Pl||Bl||Function("return this")(),uo=Nn.Symbol;var ou=Object.prototype,Pr=ou.hasOwnProperty,um=ou.toString,ss=uo?uo.toStringTag:void 0;const hm=function(i){var e=Pr.call(i,ss),t=i[ss];try{i[ss]=void 0;var o=!0}catch{}var s=um.call(i);return o&&(e?i[ss]=t:delete i[ss]),s};var pm=Object.prototype.toString;const fm=function(i){return pm.call(i)};var ru=uo?uo.toStringTag:void 0;const Zo=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":ru&&ru in Object(i)?hm(i):fm(i)},Xt=Array.isArray,Rt=function(i){return i!=null&&typeof i=="object"},ci=function(i){return typeof i=="string"||!Xt(i)&&Rt(i)&&Zo(i)=="[object String]"};function Jo(i,e,t={},o=[]){const s=t&&t.xmlns,l=s?i.createElementNS(s,e):i.createElement(e);for(const d in t)l.setAttribute(d,t[d]);!ci(o)&&Wt(o)||(o=[o]);for(let d of o)ci(d)&&(d=i.createTextNode(d)),l.appendChild(d);return l}const iu=function(i,e){return function(t){return i(e(t))}},Ol=iu(Object.getPrototypeOf,Object);var mm=Function.prototype,gm=Object.prototype,su=mm.toString,km=gm.hasOwnProperty,bm=su.call(Object);const Lt=function(i){if(!Rt(i)||Zo(i)!="[object Object]")return!1;var e=Ol(i);if(e===null)return!0;var t=km.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&su.call(t)==bm},au=function(){this.__data__=[],this.size=0},as=function(i,e){return i===e||i!=i&&e!=e},ea=function(i,e){for(var t=i.length;t--;)if(as(i[t][0],e))return t;return-1};var ta=Array.prototype.splice;const wm=function(i){var e=this.__data__,t=ea(e,i);return!(t<0)&&(t==e.length-1?e.pop():ta.call(e,t,1),--this.size,!0)},vm=function(i){var e=this.__data__,t=ea(e,i);return t<0?void 0:e[t][1]},Am=function(i){return ea(this.__data__,i)>-1},Cm=function(i,e){var t=this.__data__,o=ea(t,i);return o<0?(++this.size,t.push([i,e])):t[o][1]=e,this};function Gn(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var o=i[e];this.set(o[0],o[1])}}Gn.prototype.clear=au,Gn.prototype.delete=wm,Gn.prototype.get=vm,Gn.prototype.has=Am,Gn.prototype.set=Cm;const na=Gn,_m=function(){this.__data__=new na,this.size=0},di=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},ym=function(i){return this.__data__.get(i)},xm=function(i){return this.__data__.has(i)},Xo=function(i){if(!Oe(i))return!1;var e=Zo(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},oa=Nn["__core-js_shared__"];var lu=function(){var i=/[^.]+$/.exec(oa&&oa.keys&&oa.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const cu=function(i){return!!lu&&lu in i};var ra=Function.prototype.toString;const Br=function(i){if(i!=null){try{return ra.call(i)}catch{}try{return i+""}catch{}}return""};var du=/^\[object .+?Constructor\]$/,uu=Function.prototype,Em=Object.prototype,Sm=uu.toString,Dm=Em.hasOwnProperty,Rl=RegExp("^"+Sm.call(Dm).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Tm=function(i){return!(!Oe(i)||cu(i))&&(Xo(i)?Rl:du).test(Br(i))},hu=function(i,e){return i==null?void 0:i[e]},er=function(i,e){var t=hu(i,e);return Tm(t)?t:void 0},ui=er(Nn,"Map"),hi=er(Object,"create"),Im=function(){this.__data__=hi?hi(null):{},this.size=0},Mm=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var pu=Object.prototype.hasOwnProperty;const st=function(i){var e=this.__data__;if(hi){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return pu.call(e,i)?e[i]:void 0};var Nm=Object.prototype.hasOwnProperty;const Ll=function(i){var e=this.__data__;return hi?e[i]!==void 0:Nm.call(e,i)},fu=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=hi&&e===void 0?"__lodash_hash_undefined__":e,this};function ho(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var o=i[e];this.set(o[0],o[1])}}ho.prototype.clear=Im,ho.prototype.delete=Mm,ho.prototype.get=st,ho.prototype.has=Ll,ho.prototype.set=fu;const ia=ho,pi=function(){this.size=0,this.__data__={hash:new ia,map:new(ui||na),string:new ia}},mu=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},sa=function(i,e){var t=i.__data__;return mu(e)?t[typeof e=="string"?"string":"hash"]:t.map},Pm=function(i){var e=sa(this,i).delete(i);return this.size-=e?1:0,e},gu=function(i){return sa(this,i).get(i)},Bm=function(i){return sa(this,i).has(i)},jl=function(i,e){var t=sa(this,i),o=t.size;return t.set(i,e),this.size+=t.size==o?0:1,this};function Or(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var o=i[e];this.set(o[0],o[1])}}Or.prototype.clear=pi,Or.prototype.delete=Pm,Or.prototype.get=gu,Or.prototype.has=Bm,Or.prototype.set=jl;const aa=Or,Om=function(i,e){var t=this.__data__;if(t instanceof na){var o=t.__data__;if(!ui||o.length<199)return o.push([i,e]),this.size=++t.size,this;t=this.__data__=new aa(o)}return t.set(i,e),this.size=t.size,this};function fi(i){var e=this.__data__=new na(i);this.size=e.size}fi.prototype.clear=_m,fi.prototype.delete=di,fi.prototype.get=ym,fi.prototype.has=xm,fi.prototype.set=Om;const mi=fi,zl=function(i,e){for(var t=-1,o=i==null?0:i.length;++t<o&&e(i[t],t,i)!==!1;);return i},la=function(){try{var i=er(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Fl=function(i,e,t){e=="__proto__"&&la?la(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var Rm=Object.prototype.hasOwnProperty;const Vl=function(i,e,t){var o=i[e];Rm.call(i,e)&&as(o,t)&&(t!==void 0||e in i)||Fl(i,e,t)},tr=function(i,e,t,o){var s=!t;t||(t={});for(var l=-1,d=e.length;++l<d;){var h=e[l],f=o?o(t[h],i[h],h,t,i):void 0;f===void 0&&(f=i[h]),s?Fl(t,h,f):Vl(t,h,f)}return t},Lm=function(i,e){for(var t=-1,o=Array(i);++t<i;)o[t]=e(t);return o},Ul=function(i){return Rt(i)&&Zo(i)=="[object Arguments]"};var Hl=Object.prototype,ku=Hl.hasOwnProperty,bu=Hl.propertyIsEnumerable;const $l=Ul(function(){return arguments}())?Ul:function(i){return Rt(i)&&ku.call(i,"callee")&&!bu.call(i,"callee")},jm=function(){return!1};var wu=r&&!r.nodeType&&r,Wl=wu&&!0&&n&&!n.nodeType&&n,vu=Wl&&Wl.exports===wu?Nn.Buffer:void 0;const gi=(vu?vu.isBuffer:void 0)||jm;var ql=/^(?:0|[1-9]\d*)$/;const Gl=function(i,e){var t=typeof i;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&ql.test(i))&&i>-1&&i%1==0&&i<e},Kl=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var Qe={};Qe["[object Float32Array]"]=Qe["[object Float64Array]"]=Qe["[object Int8Array]"]=Qe["[object Int16Array]"]=Qe["[object Int32Array]"]=Qe["[object Uint8Array]"]=Qe["[object Uint8ClampedArray]"]=Qe["[object Uint16Array]"]=Qe["[object Uint32Array]"]=!0,Qe["[object Arguments]"]=Qe["[object Array]"]=Qe["[object ArrayBuffer]"]=Qe["[object Boolean]"]=Qe["[object DataView]"]=Qe["[object Date]"]=Qe["[object Error]"]=Qe["[object Function]"]=Qe["[object Map]"]=Qe["[object Number]"]=Qe["[object Object]"]=Qe["[object RegExp]"]=Qe["[object Set]"]=Qe["[object String]"]=Qe["[object WeakMap]"]=!1;const Au=function(i){return Rt(i)&&Kl(i.length)&&!!Qe[Zo(i)]},Yl=function(i){return function(e){return i(e)}};var Ql=r&&!r.nodeType&&r,ls=Ql&&!0&&n&&!n.nodeType&&n,Zl=ls&&ls.exports===Ql&&Pl.process;const nr=function(){try{var i=ls&&ls.require&&ls.require("util").types;return i||Zl&&Zl.binding&&Zl.binding("util")}catch{}}();var ca=nr&&nr.isTypedArray;const cs=ca?Yl(ca):Au;var Jl=Object.prototype.hasOwnProperty;const Xl=function(i,e){var t=Xt(i),o=!t&&$l(i),s=!t&&!o&&gi(i),l=!t&&!o&&!s&&cs(i),d=t||o||s||l,h=d?Lm(i.length,String):[],f=h.length;for(var g in i)!e&&!Jl.call(i,g)||d&&(g=="length"||s&&(g=="offset"||g=="parent")||l&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||Gl(g,f))||h.push(g);return h};var Cu=Object.prototype;const da=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||Cu)},_u=iu(Object.keys,Object);var yu=Object.prototype.hasOwnProperty;const zm=function(i){if(!da(i))return _u(i);var e=[];for(var t in Object(i))yu.call(i,t)&&t!="constructor"&&e.push(t);return e},ua=function(i){return i!=null&&Kl(i.length)&&!Xo(i)},ec=function(i){return ua(i)?Xl(i):zm(i)},Fm=function(i,e){return i&&tr(e,ec(e),i)},Vm=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var Rr=Object.prototype.hasOwnProperty;const tc=function(i){if(!Oe(i))return Vm(i);var e=da(i),t=[];for(var o in i)(o!="constructor"||!e&&Rr.call(i,o))&&t.push(o);return t},ki=function(i){return ua(i)?Xl(i,!0):tc(i)},Um=function(i,e){return i&&tr(e,ki(e),i)};var nc=r&&!r.nodeType&&r,ha=nc&&!0&&n&&!n.nodeType&&n,xu=ha&&ha.exports===nc?Nn.Buffer:void 0,Eu=xu?xu.allocUnsafe:void 0;const Su=function(i,e){if(e)return i.slice();var t=i.length,o=Eu?Eu(t):new i.constructor(t);return i.copy(o),o},oc=function(i,e){var t=-1,o=i.length;for(e||(e=Array(o));++t<o;)e[t]=i[t];return e},Du=function(i,e){for(var t=-1,o=i==null?0:i.length,s=0,l=[];++t<o;){var d=i[t];e(d,t,i)&&(l[s++]=d)}return l},Tu=function(){return[]};var Hm=Object.prototype.propertyIsEnumerable,Iu=Object.getOwnPropertySymbols;const pa=Iu?function(i){return i==null?[]:(i=Object(i),Du(Iu(i),function(e){return Hm.call(i,e)}))}:Tu,$m=function(i,e){return tr(i,pa(i),e)},Mu=function(i,e){for(var t=-1,o=e.length,s=i.length;++t<o;)i[s+t]=e[t];return i},Nu=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)Mu(e,pa(i)),i=Ol(i);return e}:Tu,Pu=function(i,e){return tr(i,Nu(i),e)},Bu=function(i,e,t){var o=e(i);return Xt(i)?o:Mu(o,t(i))},rc=function(i){return Bu(i,ec,pa)},Ou=function(i){return Bu(i,ki,Nu)},ic=er(Nn,"DataView"),fa=er(Nn,"Promise"),ma=er(Nn,"Set"),ga=er(Nn,"WeakMap");var Ze="[object Map]",Ru="[object Promise]",Lu="[object Set]",ju="[object WeakMap]",zu="[object DataView]",Fu=Br(ic),Wm=Br(ui),qm=Br(fa),Gm=Br(ma),Km=Br(ga),or=Zo;(ic&&or(new ic(new ArrayBuffer(1)))!=zu||ui&&or(new ui)!=Ze||fa&&or(fa.resolve())!=Ru||ma&&or(new ma)!=Lu||ga&&or(new ga)!=ju)&&(or=function(i){var e=Zo(i),t=e=="[object Object]"?i.constructor:void 0,o=t?Br(t):"";if(o)switch(o){case Fu:return zu;case Wm:return Ze;case qm:return Ru;case Gm:return Lu;case Km:return ju}return e});const Do=or;var Vu=Object.prototype.hasOwnProperty;const Ym=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&Vu.call(i,"index")&&(t.index=i.index,t.input=i.input),t},ds=Nn.Uint8Array,ka=function(i){var e=new i.constructor(i.byteLength);return new ds(e).set(new ds(i)),e},sc=function(i,e){var t=e?ka(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var ac=/\w*$/;const bi=function(i){var e=new i.constructor(i.source,ac.exec(i));return e.lastIndex=i.lastIndex,e};var Uu=uo?uo.prototype:void 0,L=Uu?Uu.valueOf:void 0;const j=function(i){return L?Object(L.call(i)):{}},W=function(i,e){var t=e?ka(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},Q=function(i,e,t){var o=i.constructor;switch(e){case"[object ArrayBuffer]":return ka(i);case"[object Boolean]":case"[object Date]":return new o(+i);case"[object DataView]":return sc(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return W(i,t);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(i);case"[object RegExp]":return bi(i);case"[object Symbol]":return j(i)}};var he=Object.create;const Ae=function(){function i(){}return function(e){if(!Oe(e))return{};if(he)return he(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),ye=function(i){return typeof i.constructor!="function"||da(i)?{}:Ae(Ol(i))},Ee=function(i){return Rt(i)&&Do(i)=="[object Map]"};var mt=nr&&nr.isMap;const dt=mt?Yl(mt):Ee,ba=function(i){return Rt(i)&&Do(i)=="[object Set]"};var rr=nr&&nr.isSet;const po=rr?Yl(rr):ba;var Lr="[object Arguments]",wi="[object Function]",ir="[object Object]",Ie={};Ie[Lr]=Ie["[object Array]"]=Ie["[object ArrayBuffer]"]=Ie["[object DataView]"]=Ie["[object Boolean]"]=Ie["[object Date]"]=Ie["[object Float32Array]"]=Ie["[object Float64Array]"]=Ie["[object Int8Array]"]=Ie["[object Int16Array]"]=Ie["[object Int32Array]"]=Ie["[object Map]"]=Ie["[object Number]"]=Ie[ir]=Ie["[object RegExp]"]=Ie["[object Set]"]=Ie["[object String]"]=Ie["[object Symbol]"]=Ie["[object Uint8Array]"]=Ie["[object Uint8ClampedArray]"]=Ie["[object Uint16Array]"]=Ie["[object Uint32Array]"]=!0,Ie["[object Error]"]=Ie[wi]=Ie["[object WeakMap]"]=!1;const Pn=function i(e,t,o,s,l,d){var h,f=1&t,g=2&t,b=4&t;if(o&&(h=l?o(e,s,l,d):o(e)),h!==void 0)return h;if(!Oe(e))return e;var v=Xt(e);if(v){if(h=Ym(e),!f)return oc(e,h)}else{var C=Do(e),D=C==wi||C=="[object GeneratorFunction]";if(gi(e))return Su(e,f);if(C==ir||C==Lr||D&&!l){if(h=g||D?{}:ye(e),!f)return g?Pu(e,Um(h,e)):$m(e,Fm(h,e))}else{if(!Ie[C])return l?e:{};h=Q(e,C,f)}}d||(d=new mi);var M=d.get(e);if(M)return M;d.set(e,h),po(e)?e.forEach(function(z){h.add(i(z,t,o,z,e,d))}):dt(e)&&e.forEach(function(z,U){h.set(U,i(z,t,o,U,e,d))});var P=v?void 0:(b?g?Ou:rc:g?ki:ec)(e);return zl(P||e,function(z,U){P&&(z=e[U=z]),Vl(h,U,i(z,t,o,U,e,d))}),h},en=function(i,e){return Pn(i,5,e=typeof e=="function"?e:void 0)},tn=function(i){return Rt(i)&&i.nodeType===1&&!Lt(i)};class sr{constructor(e,t){this._config={},t&&this.define(Pv(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,o,s=!1){if(Lt(t))return void this._setObjectToTarget(e,t,s);const l=t.split(".");t=l.pop();for(const d of l)Lt(e[d])||(e[d]={}),e=e[d];if(Lt(o))return Lt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,o,s);s&&e[t]!==void 0||(e[t]=o)}_getFromSource(e,t){const o=t.split(".");t=o.pop();for(const s of o){if(!Lt(e[s])){e=null;break}e=e[s]}return e?Pv(e[t]):void 0}_setObjectToTarget(e,t,o){Object.keys(t).forEach(s=>{this._setToTarget(e,s,t[s],o)})}}function Pv(i){return en(i,PN)}function PN(i){return tn(i)?i:void 0}function vi(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function Hu(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const Bv=fo(ee());function fo(i){return i?class extends i{listenTo(e,t,o,s={}){if(vi(e)||Hu(e)){const l={capture:!!s.useCapture,passive:!!s.usePassive},d=this._getProxyEmitter(e,l)||new BN(e,l);this.listenTo(d,t,o,s)}else super.listenTo(e,t,o,s)}stopListening(e,t,o){if(vi(e)||Hu(e)){const s=this._getAllProxyEmitters(e);for(const l of s)this.stopListening(l,t,o)}else super.stopListening(e,t,o)}_getProxyEmitter(e,t){return function(o,s){const l=o[ze];return l&&l[s]?l[s].emitter:null}(this,Ov(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Bv}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{fo[i]=Bv.prototype[i]});class BN extends ee(){constructor(e,t){super(),ke(this,Ov(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,o){this.attach(e),ee().prototype._addEventListener.call(this,e,t,o)}_removeEventListener(e,t){ee().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=o=>{this.fire(e,o)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Ov(i,e){let t=function(o){return o["data-ck-expando"]||(o["data-ck-expando"]=H())}(i);for(const o of Object.keys(e).sort())e[o]&&(t+="-"+o);return t}let Qm;try{Qm={window,document}}catch{Qm={window:{},document:{}}}const be=Qm;function jt(i){return Object.prototype.toString.call(i)=="[object Text]"}function $u(i){return Object.prototype.toString.apply(i)=="[object Range]"}function Rv(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function Lv(i){return i&&i.parentNode?i.offsetParent===be.document.body?null:i.offsetParent:null}const jv=["top","right","bottom","left","width","height"];class Fe{constructor(e){const t=$u(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Zm(e)||t)if(t){const o=Fe.getDomRangeRects(e);Wu(this,Fe.getBoundingRect(o))}else Wu(this,e.getBoundingClientRect());else if(Hu(e)){const{innerWidth:o,innerHeight:s}=e;Wu(this,{top:0,right:o,bottom:s,left:0,width:o,height:s})}else Wu(this,e)}clone(){return new Fe(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const o=new Fe(t);return o._source=this._source,o}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(zv(e))return t;let o,s=e,l=e.parentNode||e.commonAncestorContainer;for(;l&&!zv(l);){const h=((d=l)instanceof HTMLElement?d.ownerDocument.defaultView.getComputedStyle(d).overflow:"visible")==="visible";s instanceof HTMLElement&&Fv(s)==="absolute"&&(o=s);const f=Fv(l);if(h||o&&(f==="relative"&&h||f!=="relative")){s=l,l=l.parentNode;continue}const g=new Fe(l),b=t.getIntersection(g);if(!b)return null;b.getArea()<t.getArea()&&(t=b),s=l,l=l.parentNode}var d;return t}isEqual(e){for(const t of jv)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=be.window,o=this.clone().moveBy(e,t);if(Zm(o._source)){const s=Lv(o._source);s&&function(l,d){const h=new Fe(d),f=Rv(d);let g=0,b=0;g-=h.left,b-=h.top,g+=d.scrollLeft,b+=d.scrollTop,g-=f.left,b-=f.top,l.moveBy(g,b)}(o,s)}return o}excludeScrollbarsAndBorders(){const e=this._source;let t,o,s;if(Hu(e))t=e.innerWidth-e.document.documentElement.clientWidth,o=e.innerHeight-e.document.documentElement.clientHeight,s=e.getComputedStyle(e.document.documentElement).direction;else{const l=Rv(e);t=e.offsetWidth-e.clientWidth-l.left-l.right,o=e.offsetHeight-e.clientHeight-l.top-l.bottom,s=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=l.left,this.top+=l.top,this.right-=l.right,this.bottom-=l.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,s==="ltr"?this.right-=t:this.left+=t,this.height-=o,this.bottom-=o,this}static getDomRangeRects(e){const t=[],o=Array.from(e.getClientRects());if(o.length)for(const s of o)t.push(new Fe(s));else{let s=e.startContainer;jt(s)&&(s=s.parentNode);const l=new Fe(s.getBoundingClientRect());l.right=l.left,l.width=0,t.push(l)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let o=0;for(const s of e)o++,t.left=Math.min(t.left,s.left),t.top=Math.min(t.top,s.top),t.right=Math.max(t.right,s.right),t.bottom=Math.max(t.bottom,s.bottom);return o==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Fe(t))}}function Wu(i,e){for(const t of jv)i[t]=e[t]}function zv(i){return!!Zm(i)&&i===i.ownerDocument.body}function Zm(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}function Fv(i){return i instanceof HTMLElement?i.ownerDocument.defaultView.getComputedStyle(i).position:"static"}const Pt=class{constructor(i,e){Pt._observerInstance||Pt._createObserver(),this._element=i,this._callback=e,Pt._addElementCallback(i,e),Pt._observerInstance.observe(i)}get element(){return this._element}destroy(){Pt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(i,e){Pt._elementCallbacks||(Pt._elementCallbacks=new Map);let t=Pt._elementCallbacks.get(i);t||(t=new Set,Pt._elementCallbacks.set(i,t)),t.add(e)}static _deleteElementCallback(i,e){const t=Pt._getElementCallbacks(i);t&&(t.delete(e),t.size||(Pt._elementCallbacks.delete(i),Pt._observerInstance.unobserve(i))),Pt._elementCallbacks&&!Pt._elementCallbacks.size&&(Pt._observerInstance=null,Pt._elementCallbacks=null)}static _getElementCallbacks(i){return Pt._elementCallbacks?Pt._elementCallbacks.get(i):null}static _createObserver(){Pt._observerInstance=new be.window.ResizeObserver(i=>{for(const e of i){const t=Pt._getElementCallbacks(e.target);if(t)for(const o of t)o(e)}})}};let lc=Pt;function ON(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function cc(i){return e=>e+i}function qu(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function Vv(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function dc(i){return i&&i.nodeType===Node.COMMENT_NODE}function us(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}lc._observerInstance=null,lc._elementCallbacks=null;var Uv=Math.pow;function Jm({element:i,target:e,positions:t,limiter:o,fitInViewport:s,viewportOffsetConfig:l}){Xo(e)&&(e=e()),Xo(o)&&(o=o());const d=Lv(i),h=function(C){C=Object.assign({top:0,bottom:0,left:0,right:0},C);const D=new Fe(be.window);return D.top+=C.top,D.height-=C.top,D.bottom-=C.bottom,D.height-=C.bottom,D}(l),f=new Fe(i),g=Hv(e,h);let b;if(!g||!h.getIntersection(g))return null;const v={targetRect:g,elementRect:f,positionedElementAncestor:d,viewportRect:h};if(o||s){if(o){const C=Hv(o,h);C&&(v.limiterRect=C)}b=function(C,D){const{elementRect:M}=D,P=M.getArea(),z=C.map(J=>new $v(J,D)).filter(J=>!!J.name);let U=0,G=null;for(const J of z){const{limiterIntersectionArea:ce,viewportIntersectionArea:we}=J;if(ce===P)return J;const $e=Uv(we,2)+Uv(ce,2);$e>U&&(U=$e,G=J)}return G}(t,v)}else b=new $v(t[0],v);return b}function Hv(i,e){const t=new Fe(i).getVisible();return t?t.getIntersection(e):null}class $v{constructor(e,t){const o=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!o)return;const{left:s,top:l,name:d,config:h}=o;this.name=d,this.config=h,this._positioningFunctionCoordinates={left:s,top:l},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Wv(i){const e=i.parentNode;e&&e.removeChild(i)}function RN({window:i,rect:e,alignToTop:t,forceScroll:o,viewportOffset:s}){const l=e.clone().moveBy(0,s.bottom),d=e.clone().moveBy(0,-s.top),h=new Fe(i).excludeScrollbarsAndBorders(),f=t&&o,g=[d,l].every(M=>h.contains(M));let{scrollX:b,scrollY:v}=i;const C=b,D=v;f?v-=h.top-e.top+s.top:g||(Gv(d,h)?v-=h.top-e.top+s.top:qv(l,h)&&(v+=t?e.top-h.top-s.top:e.bottom-h.bottom+s.bottom)),g||(Kv(e,h)?b-=h.left-e.left+s.left:Yv(e,h)&&(b+=e.right-h.right+s.right)),b==C&&v===D||i.scrollTo(b,v)}function LN({parent:i,getRect:e,alignToTop:t,forceScroll:o,ancestorOffset:s=0,limiterElement:l}){const d=Xm(i),h=t&&o;let f,g,b;const v=l||d.document.body;for(;i!=v;)g=e(),f=new Fe(i).excludeScrollbarsAndBorders(),b=f.contains(g),h?i.scrollTop-=f.top-g.top+s:b||(Gv(g,f)?i.scrollTop-=f.top-g.top+s:qv(g,f)&&(i.scrollTop+=t?g.top-f.top-s:g.bottom-f.bottom+s)),b||(Kv(g,f)?i.scrollLeft-=f.left-g.left+s:Yv(g,f)&&(i.scrollLeft+=g.right-f.right+s)),i=i.parentNode}function qv(i,e){return i.bottom>e.bottom}function Gv(i,e){return i.top<e.top}function Kv(i,e){return i.left<e.left}function Yv(i,e){return i.right>e.right}function Xm(i){return $u(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function jN(i){if($u(i)){let e=i.commonAncestorContainer;return jt(e)&&(e=e.parentNode),e}return i.parentNode}function Qv(i,e){const t=Xm(i),o=new Fe(i);if(t===e)return o;{let s=t;for(;s!=e;){const l=s.frameElement,d=new Fe(l).excludeScrollbarsAndBorders();o.moveBy(d.left,d.top),s=s.parent}}return o}const zN={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},FN={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Re=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),VN=Object.fromEntries(Object.entries(Re).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function wa(i){let e;if(typeof i=="string"){if(e=Re[i.toLowerCase()],!e)throw new O("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?Re.alt:0)+(i.ctrlKey?Re.ctrl:0)+(i.shiftKey?Re.shift:0)+(i.metaKey?Re.cmd:0);return e}function uc(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return wa(t.slice(0,-1));const o=wa(t);return(y.isMac||y.isiOS)&&o==Re.ctrl?Re.cmd:o}(e):e).reduce((e,t)=>t+e,0)}function Zv(i){let e=uc(i);return Object.entries(y.isMac||y.isiOS?zN:FN).reduce((t,[o,s])=>(e&Re[o]&&(e&=~Re[o],t+=s),t),"")+(e?VN[e]:"")}function eg(i,e){const t=e==="ltr";switch(i){case Re.arrowleft:return t?"left":"right";case Re.arrowright:return t?"right":"left";case Re.arrowup:return"up";case Re.arrowdown:return"down"}}function Yt(i){return Array.isArray(i)?i:[i]}function UN(i,e,t=1){if(typeof t!="number")throw new O("translation-service-quantity-not-a-number",null,{quantity:t});const o=Object.keys(be.window.CKEDITOR_TRANSLATIONS).length;o===1&&(i=Object.keys(be.window.CKEDITOR_TRANSLATIONS)[0]);const s=e.id||e.string;if(o===0||!function(f,g){return!!be.window.CKEDITOR_TRANSLATIONS[f]&&!!be.window.CKEDITOR_TRANSLATIONS[f].dictionary[g]}(i,s))return t!==1?e.plural:e.string;const l=be.window.CKEDITOR_TRANSLATIONS[i].dictionary,d=be.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(f=>f===1?0:1),h=l[s];return typeof h=="string"?h:h[Number(d(t))]}be.window.CKEDITOR_TRANSLATIONS||(be.window.CKEDITOR_TRANSLATIONS={});const HN=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Jv(i){return HN.includes(i)?"rtl":"ltr"}class $N{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Jv(this.uiLanguage),this.contentLanguageDirection=Jv(this.contentLanguage),this.t=(o,s)=>this._t(o,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Yt(t),typeof e=="string"&&(e={string:e});const o=e.plural?t[0]:1;return function(s,l){return s.replace(/%(\d+)/g,(d,h)=>h<l.length?l[h]:d)}(UN(this.uiLanguage,e,o),t)}}class To extends ee(){constructor(e={},t={}){super();const o=Wt(e);if(o||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],o)for(const s of e)this._items.push(s),this._itemMap.set(this._getItemIdBeforeAdding(s),s)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new O("collection-add-item-invalid-index",this);let o=0;for(const s of e){const l=this._getItemIdBeforeAdding(s),d=t+o;this._items.splice(d,0,s),this._itemMap.set(l,s),this.fire("add",s,d),o++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new O("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,o]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:o}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new O("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(o=>new t(o))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(o=>o[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,o=(s,l,d)=>{const h=t._bindToCollection==this,f=t._bindToInternalToExternalMap.get(l);if(h&&f)this._bindToExternalToInternalMap.set(l,f),this._bindToInternalToExternalMap.set(f,l);else{const g=e(l);if(!g)return void this._skippedIndexesFromExternal.push(d);let b=d;for(const v of this._skippedIndexesFromExternal)d>v&&b--;for(const v of t._skippedIndexesFromExternal)b>=v&&b++;this._bindToExternalToInternalMap.set(l,g),this._bindToInternalToExternalMap.set(g,l),this.add(g,b);for(let v=0;v<t._skippedIndexesFromExternal.length;v++)b<=t._skippedIndexesFromExternal[v]&&t._skippedIndexesFromExternal[v]++}};for(const s of t)o(0,s,t.getIndex(s));this.listenTo(t,"add",o),this.listenTo(t,"remove",(s,l,d)=>{const h=this._bindToExternalToInternalMap.get(l);h&&this.remove(h),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((f,g)=>(d<g&&f.push(g-1),d>g&&f.push(g),f),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let o;if(t in e){if(o=e[t],typeof o!="string")throw new O("collection-add-invalid-id",this);if(this.get(o))throw new O("collection-add-item-already-exists",this)}else e[t]=o=H();return o}_remove(e){let t,o,s,l=!1;const d=this._idProperty;if(typeof e=="string"?(o=e,s=this._itemMap.get(o),l=!s,s&&(t=this._items.indexOf(s))):typeof e=="number"?(t=e,s=this._items[t],l=!s,s&&(o=s[d])):(s=e,o=s[d],t=this._items.indexOf(s),l=t==-1||!this._itemMap.get(o)),l)throw new O("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(o);const h=this._bindToInternalToExternalMap.get(s);return this._bindToInternalToExternalMap.delete(s),this._bindToExternalToInternalMap.delete(h),this.fire("remove",s,t),[s,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function zt(i){const e=i.next();return e.done?null:e.value}class Bn extends fo(De()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new O("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Io{constructor(){this._listener=new(fo())}listenTo(e){this._listener.listenTo(e,"keydown",(t,o)=>{this._listener.fire("_keydown:"+wa(o),o)})}set(e,t,o={}){const s=uc(e),l=o.priority;this._listener.listenTo(this._listener,"_keydown:"+s,(d,h)=>{t(h,()=>{h.preventDefault(),h.stopPropagation(),d.stop()}),d.return=!0},{priority:l})}press(e){return!!this._listener.fire("_keydown:"+wa(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function ar(i){return Wt(i)?new Map(i):function(e){const t=new Map;for(const o in e)t.set(o,e[o]);return t}(i)}function tg(i,e){let t;function o(...s){o.cancel(),t=setTimeout(()=>i(...s),e)}return o.cancel=()=>{clearTimeout(t)},o}function ng(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(o){return!!o&&o.length==1&&/[\udc00-\udfff]/.test(o)}(i.charAt(e));var t}function og(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const WN=function(){const i=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+i.map(o=>o.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function Xv(i,e){const t=String(i).matchAll(WN);return Array.from(t).some(o=>o.index<e&&e<o.index+o[0].length)}class jr extends To{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,o,s)=>{this._renderViewIntoCollectionParent(o,s)}),this.on("remove",(t,o)=>{o.element&&this._parentElement&&o.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new O("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const o of this)for(const s of e)o.delegate(s).to(t);this.on("add",(o,s)=>{for(const l of e)s.delegate(l).to(t)}),this.on("remove",(o,s)=>{for(const l of e)s.stopDelegating(l,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}var qN=u(6062),de=u.n(qN),eA=u(4793),GN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(eA.Z,GN),eA.Z.locals;class xe extends fo(De()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new To,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,o)=>{o.locale=e,o.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Mo.bind(this,this)}createCollection(e){const t=new jr(e);return this._viewCollections.add(t),t}registerChild(e){Wt(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Wt(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Mo(e)}extendTemplate(e){Mo.extend(this.template,e)}render(){if(this.isRendered)throw new O("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class Mo extends ee(){constructor(e){super(),Object.assign(this,rA(oA(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new O("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const o of t.children)Ku(o)?yield o:rg(o)&&(yield*e(o))}(this)}static bind(e,t){return{to:(o,s)=>new KN({eventNameOrFunction:o,attribute:o,observable:e,emitter:t,callback:s}),if:(o,s,l)=>new tA({observable:e,emitter:t,attribute:o,valueIfTrue:s,callback:l})}}static extend(e,t){if(e._isRendered)throw new O("template-extend-render",[this,e]);lA(e,rA(oA(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new O("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Gu(this.text)?this._bindToObservable({schema:this.text,updater:YN(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,o=e.revertData;for(const s in this.attributes){const l=t.getAttribute(s),d=this.attributes[s];o&&(o.attributes[s]=l);const h=cA(d)?d[0].ns:null;if(Gu(d)){const f=cA(d)?d[0].value:d;o&&dA(s)&&f.unshift(l),this._bindToObservable({schema:f,updater:QN(t,s,h),data:e})}else if(s=="style"&&typeof d[0]!="string")this._renderStyleAttribute(d[0],e);else{o&&l&&dA(s)&&d.unshift(l);const f=d.map(g=>g&&g.value||g).reduce((g,b)=>g.concat(b),[]).reduce(sA,"");va(f)||t.setAttributeNS(h,s,f)}}}_renderStyleAttribute(e,t){const o=t.node;for(const s in e){const l=e[s];Gu(l)?this._bindToObservable({schema:[l],updater:ZN(o,s),data:t}):o.style[s]=l}}_renderElementChildren(e){const t=e.node,o=e.intoFragment?document.createDocumentFragment():t,s=e.isApplying;let l=0;for(const d of this.children)if(ig(d)){if(!s){d.setParent(t);for(const h of d)o.appendChild(h.element)}}else if(Ku(d))s||(d.isRendered||d.render(),o.appendChild(d.element));else if(vi(d))o.appendChild(d);else if(s){const h={children:[],bindings:[],attributes:{}};e.revertData.children.push(h),d._renderNode({intoFragment:!1,node:o.childNodes[l++],isApplying:!0,revertData:h})}else o.appendChild(d.render());e.intoFragment&&t.appendChild(o)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const o=this.eventListeners[t].map(s=>{const[l,d]=t.split("@");return s.activateDomEventListener(l,d,e)});e.revertData&&e.revertData.bindings.push(o)}}_bindToObservable({schema:e,updater:t,data:o}){const s=o.revertData;nA(e,t,o);const l=e.filter(d=>!va(d)).filter(d=>d.observable).map(d=>d.activateAttributeListener(e,t,o));s&&s.bindings.push(l)}_revertTemplateFromNode(e,t){for(const s of t.bindings)for(const l of s)l();if(t.text)return void(e.textContent=t.text);const o=e;for(const s in t.attributes){const l=t.attributes[s];l===null?o.removeAttribute(s):o.setAttribute(s,l)}for(let s=0;s<t.children.length;++s)this._revertTemplateFromNode(o.childNodes[s],t.children[s])}}class hc{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,o){const s=()=>nA(e,t,o);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,s),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,s)}}}class KN extends hc{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,o){const s=(l,d)=>{t&&!d.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(d):this.observable.fire(this.eventNameOrFunction,d))};return this.emitter.listenTo(o.node,e,s),()=>{this.emitter.stopListening(o.node,e,s)}}}class tA extends hc{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!va(super.getValue(e))&&(this.valueIfTrue||!0)}}function Gu(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Gu):i instanceof hc)}function nA(i,e,{node:t}){const o=function(l,d){return l.map(h=>h instanceof hc?h.getValue(d):h)}(i,t);let s;s=i.length==1&&i[0]instanceof tA?o[0]:o.reduce(sA,""),va(s)?e.remove():e.set(s)}function YN(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function QN(i,e,t){return{set(o){i.setAttributeNS(t,e,o)},remove(){i.removeAttributeNS(t,e)}}}function ZN(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function oA(i){return en(i,e=>{if(e&&(e instanceof hc||rg(e)||Ku(e)||ig(e)))return e})}function rA(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=Yt(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)iA(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const o in t)t[o].value&&(t[o].value=Yt(t[o].value)),iA(t,o)}(i.attributes);const e=[];if(i.children)if(ig(i.children))e.push(i.children);else for(const t of i.children)rg(t)||Ku(t)||vi(t)?e.push(t):e.push(new Mo(t));i.children=e}return i}function iA(i,e){i[e]=Yt(i[e])}function sA(i,e){return va(e)?i:va(i)?e:`${i} ${e}`}function aA(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function lA(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),aA(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),aA(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new O("ui-template-extend-children-mismatch",i);let t=0;for(const o of e.children)lA(i.children[t++],o)}}function va(i){return!i&&i!==0}function Ku(i){return i instanceof xe}function rg(i){return i instanceof Mo}function ig(i){return i instanceof jr}function cA(i){return Oe(i[0])&&i[0].ns}function dA(i){return i=="class"||i=="style"}class JN extends jr{constructor(e,t=[]){super(t),this.locale=e}get bodyCollectionContainer(){return this._bodyCollectionContainer}attachToDom(){this._bodyCollectionContainer=new Mo({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=Jo(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var uA=u(6574),XN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(uA.Z,XN),uA.Z.locals;const hA=class extends xe{constructor(){super();const i=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.set("isVisible",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon",i.if("isVisible","ck-hidden",e=>!e),"ck-reset_all-excluded",i.if("isColorInherited","ck-icon_inherit-color")],viewBox:i.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const i=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=i.getAttribute("viewBox");e&&(this.viewBox=e);for(const{name:t,value:o}of Array.from(i.attributes))hA.presentationalAttributeNames.includes(t)&&this.element.setAttribute(t,o);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;i.childNodes.length>0;)this.element.appendChild(i.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(i=>{i.style.fill=this.fillColor})}};let hs=hA;hs.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];class e4 extends xe{constructor(){super(),this.set({style:void 0,text:void 0,id:void 0});const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:e.to("style"),id:e.to("id")},children:[{text:e.to("text")}]})}}var pA=u(4906),t4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(pA.Z,t4),pA.Z.locals;class at extends xe{constructor(e,t=new e4){super(e),this._focusDelayed=null;const o=this.bindTemplate,s=H();this.set("ariaChecked",void 0),this.set("ariaLabel",void 0),this.set("ariaLabelledBy",`ck-editor__aria-label_${s}`),this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("role",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._setupLabelView(t),this.iconView=new hs,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const l={tag:"button",attributes:{class:["ck","ck-button",o.to("class"),o.if("isEnabled","ck-disabled",d=>!d),o.if("isVisible","ck-hidden",d=>!d),o.to("isOn",d=>d?"ck-on":"ck-off"),o.if("withText","ck-button_with-text"),o.if("withKeystroke","ck-button_with-keystroke")],role:o.to("role"),type:o.to("type",d=>d||"button"),tabindex:o.to("tabindex"),"aria-label":o.to("ariaLabel"),"aria-labelledby":o.to("ariaLabelledBy"),"aria-disabled":o.if("isEnabled",!0,d=>!d),"aria-checked":o.to("isOn"),"aria-pressed":o.to("isOn",d=>!!this.isToggleable&&String(!!d)),"data-cke-tooltip-text":o.to("_tooltipString"),"data-cke-tooltip-position":o.to("tooltipPosition")},children:this.children,on:{click:o.to(d=>{this.isEnabled?this.fire("execute"):d.preventDefault()})}};y.isSafari&&(this._focusDelayed||(this._focusDelayed=tg(()=>this.focus(),0)),l.on.mousedown=o.to(()=>{this._focusDelayed()}),l.on.mouseup=o.to(()=>{this._focusDelayed.cancel()})),this.setTemplate(l)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}destroy(){this._focusDelayed&&this._focusDelayed.cancel(),super.destroy()}_setupLabelView(e){return e.bind("text","style","id").to(this,"label","labelStyle","ariaLabelledBy"),e}_createKeystrokeView(){const e=new xe;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Zv(t))}]}),e}_getTooltipString(e,t,o){return e?typeof e=="string"?e:(o&&(o=Zv(o)),e instanceof Function?e(t,o):`${t}${o?` (${o})`:""}`):""}}var fA=u(5332),n4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(fA.Z,n4),fA.Z.locals;class Yu extends at{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new xe;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var mA=u(6781),o4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(mA.Z,o4),mA.Z.locals,u(1103),u(841);var gA=u(3662),r4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(gA.Z,r4),gA.Z.locals;class kA extends xe{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${H()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}var bA=u(2577),i4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(bA.Z,i4),bA.Z.locals;class Qu extends xe{constructor(e,t){super(e);const o=`ck-labeled-field-view-${H()}`,s=`ck-labeled-field-view-status-${H()}`;this.fieldView=t(this,o,s),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(o),this.statusView=this._createStatusView(s),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(d,h)=>d||h);const l=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",l.to("class"),l.if("isEnabled","ck-disabled",d=>!d),l.if("isEmpty","ck-labeled-field-view_empty"),l.if("isFocused","ck-labeled-field-view_focused"),l.if("placeholder","ck-labeled-field-view_placeholder"),l.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new kA(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new xe(this.locale),o=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",o.if("errorText","ck-labeled-field-view__status_error"),o.if("_statusText","ck-hidden",s=>!s)],id:e,role:o.if("errorText","alert")},children:[{text:o.to("_statusText")}]}),t}focus(e){this.fieldView.focus(e)}}class s4 extends xe{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new Bn,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...o)=>{this.fire("input",...o),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,o)=>{this._setDomElementValue(o),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}reset(){this.value=this.element.value="",this._updateIsEmpty()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}var wA=u(4879),a4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(wA.Z,a4),wA.Z.locals;class l4 extends s4{constructor(e){super(e),this.set("inputMode","text");const t=this.bindTemplate;this.extendTemplate({attributes:{inputmode:t.to("inputMode")}})}}class c4 extends l4{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var vA=u(8182),d4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(vA.Z,d4),vA.Z.locals;class u4 extends xe{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",o=>`ck-dropdown__panel_${o}`),t.if("isVisible","ck-dropdown__panel-visible")],tabindex:"-1"},children:this.children,on:{selectstart:t.to(o=>{o.target.tagName.toLocaleLowerCase()!=="input"&&o.preventDefault()})}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():te("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var AA=u(5485),h4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(AA.Z,h4),AA.Z.locals;const sg=class extends xe{constructor(i,e,t){super(i);const o=this.bindTemplate;this.buttonView=e,this.panelView=t,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new Io,this.focusTracker=new Bn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",s=>!s)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[e,t]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":o.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(e,t,o)=>{if(o)if(this.panelPosition==="auto"){const s=sg._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=s?s.name:this._panelPositions[0].name}else this.panelView.position=this.panelPosition}),this.keystrokes.listenTo(this.element);const i=(e,t)=>{this.isOpen&&(this.isOpen=!1,t())};this.keystrokes.set("arrowdown",(e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t())}),this.keystrokes.set("arrowright",(e,t)=>{this.isOpen&&t()}),this.keystrokes.set("arrowleft",i),this.keystrokes.set("esc",i)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:i,north:e,southEast:t,southWest:o,northEast:s,northWest:l,southMiddleEast:d,southMiddleWest:h,northMiddleEast:f,northMiddleWest:g}=sg.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[t,o,d,h,i,s,l,f,g,e]:[o,t,h,d,i,l,s,g,f,e]}};let ag=sg;ag.defaultPanelPositions={south:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),southMiddleEast:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/4,name:"sme"}),southMiddleWest:(i,e)=>({top:i.bottom,left:i.left-3*(e.width-i.width)/4,name:"smw"}),north:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/2,name:"n"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),northMiddleEast:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/4,name:"nme"}),northMiddleWest:(i,e)=>({top:i.top-e.height,left:i.left-3*(e.width-i.width)/4,name:"nmw"})},ag._getOptimalPosition=Jm;const CA='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class p4 extends at{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new hs;return e.content=CA,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}class Ai extends ee(){constructor(e){if(super(),this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let o=e.actions[t];typeof o=="string"&&(o=[o]);for(const s of o)e.keystrokeHandler.set(s,(l,d)=>{this[t](),d()})}this.on("forwardCycle",()=>this.focusFirst(),{priority:"low"}),this.on("backwardCycle",()=>this.focusLast(),{priority:"low"})}get first(){return this.focusables.find(lg)||null}get last(){return this.focusables.filter(lg).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,o)=>{const s=t.element===this.focusTracker.focusedElement;return s&&(e=o),s}),e)}focusFirst(){this._focus(this.first,1)}focusLast(){this._focus(this.last,-1)}focusNext(){const e=this.next;e&&this.focusables.getIndex(e)===this.current||(e===this.first?this.fire("forwardCycle"):this._focus(e,1))}focusPrevious(){const e=this.previous;e&&this.focusables.getIndex(e)===this.current||(e===this.last?this.fire("backwardCycle"):this._focus(e,-1))}_focus(e,t){e&&e.focus(t)}_getFocusableItem(e){const t=this.current,o=this.focusables.length;if(!o)return null;if(t===null)return this[e===1?"first":"last"];let s=(t+o+e)%o;do{const l=this.focusables.get(s);if(lg(l))return l;s=(s+o+e)%o}while(s!==t);return null}}function lg(i){return!(!("focus"in i)||!us(i.element))}class _A extends xe{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class f4 extends xe{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function yA(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}class re extends De(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",xA,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",xA),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function xA(i){i.return=!1,i.stop()}class Me extends De(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const o=e.model.document.selection,s=o.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(o);(e.isReadOnly||this._isEnabledBasedOnSelection&&!s)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",EA,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",EA),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function EA(i){i.return=!1,i.stop()}class SA extends Me{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){Y(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class DA extends ee(){constructor(e,t=[],o=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const s of t)s.pluginName&&this._availablePlugins.set(s.pluginName,s);this._contextPlugins=new Map;for(const[s,l]of o)this._contextPlugins.set(s,l),this._contextPlugins.set(l,s),s.pluginName&&this._availablePlugins.set(s.pluginName,s)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let o=e;throw typeof e=="function"&&(o=e.pluginName||e.name),new O("plugincollection-plugin-not-loaded",this._context,{plugin:o})}return t}has(e){return this._plugins.has(e)}init(e,t=[],o=[]){const s=this,l=this._context;(function M(P,z=new Set){P.forEach(U=>{f(U)&&(z.has(U)||(z.add(U),U.pluginName&&!s._availablePlugins.has(U.pluginName)&&s._availablePlugins.set(U.pluginName,U),U.requires&&M(U.requires,z)))})})(e),C(e);const d=[...function M(P,z=new Set){return P.map(U=>f(U)?U:s._availablePlugins.get(U)).reduce((U,G)=>z.has(G)?U:(z.add(G),G.requires&&(C(G.requires,G),M(G.requires,z).forEach(J=>U.add(J))),U.add(G)),new Set)}(e.filter(M=>!b(M,t)))];(function(M,P){for(const z of P){if(typeof z!="function")throw new O("plugincollection-replace-plugin-invalid-type",null,{pluginItem:z});const U=z.pluginName;if(!U)throw new O("plugincollection-replace-plugin-missing-name",null,{pluginItem:z});if(z.requires&&z.requires.length)throw new O("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:U});const G=s._availablePlugins.get(U);if(!G)throw new O("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:U});const J=M.indexOf(G);if(J===-1){if(s._contextPlugins.has(G))return;throw new O("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:U})}if(G.requires&&G.requires.length)throw new O("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:U});M.splice(J,1,z),s._availablePlugins.set(U,z)}})(d,o);const h=d.map(M=>{let P=s._contextPlugins.get(M);return P=P||new M(l),s._add(M,P),P});return D(h,"init").then(()=>D(h,"afterInit")).then(()=>h);function f(M){return typeof M=="function"}function g(M){return f(M)&&!!M.isContextPlugin}function b(M,P){return P.some(z=>z===M||v(M)===z||v(z)===M)}function v(M){return f(M)?M.pluginName||M.name:M}function C(M,P=null){M.map(z=>f(z)?z:s._availablePlugins.get(z)||z).forEach(z=>{(function(U,G){if(!f(U))throw G?new O("plugincollection-soft-required",l,{missingPlugin:U,requiredBy:v(G)}):new O("plugincollection-plugin-not-found",l,{plugin:U})})(z,P),function(U,G){if(g(G)&&!g(U))throw new O("plugincollection-context-required",l,{plugin:v(U),requiredBy:v(G)})}(z,P),function(U,G){if(G&&b(U,t))throw new O("plugincollection-required",l,{plugin:v(U),requiredBy:v(G)})}(z,P)})}function D(M,P){return M.reduce((z,U)=>U[P]?s._contextPlugins.has(U)?z:z.then(U[P].bind(U)):z,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const o=e.pluginName;if(o){if(this._plugins.has(o))throw new O("plugincollection-plugin-name-conflict",null,{pluginName:o,plugin1:this._plugins.get(o).constructor,plugin2:e});this._plugins.set(o,t)}}}class TA{constructor(e){this._contextOwner=null,this.config=new sr(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new DA(this,t);const o=this.config.get("language")||{};this.locale=new $N({uiLanguage:typeof o=="string"?o:o.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new To}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const o of e.concat(t)){if(typeof o!="function")throw new O("context-initplugins-constructor-only",null,{Plugin:o});if(o.isContextPlugin!==!0)throw new O("context-initplugins-invalid-plugin",null,{Plugin:o})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new O("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const o=new this(e);t(o.initPlugins().then(()=>o))})}}class Zu extends De(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class m4 extends Io{constructor(e){super(),this.editor=e}set(e,t,o={}){if(typeof t=="string"){const s=t;t=(l,d)=>{this.editor.execute(s),d()}}super.set(e,t,o)}}var IA=u(4717),g4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(IA.Z,g4),IA.Z.locals;const Ju=new WeakMap;let MA=!1;function NA({view:i,element:e,text:t,isDirectHost:o=!0,keepOnFocus:s=!1}){const l=i.document;function d(h){Ju.get(l).set(e,{text:h,isDirectHost:o,keepOnFocus:s,hostElement:o?e:null}),i.change(f=>cg(l,f))}Ju.has(l)||(Ju.set(l,new Map),l.registerPostFixer(h=>cg(l,h)),l.on("change:isComposing",()=>{i.change(h=>cg(l,h))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(h,f,g)=>{d(g)}),e.placeholder?d(e.placeholder):t&&d(t),t&&function(){MA||te("enableplaceholder-deprecated-text-option"),MA=!0}()}function k4(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function cg(i,e){const t=Ju.get(i),o=[];let s=!1;for(const[l,d]of t)d.isDirectHost&&(o.push(l),PA(e,l,d)&&(s=!0));for(const[l,d]of t){if(d.isDirectHost)continue;const h=b4(l);h&&(o.includes(h)||(d.hostElement=h,PA(e,l,d)&&(s=!0)))}return s}function PA(i,e,t){const{text:o,isDirectHost:s,hostElement:l}=t;let d=!1;return l.getAttribute("data-placeholder")!==o&&(i.setAttribute("data-placeholder",o,l),d=!0),(s||e.childCount==1)&&function(h,f){if(!h.isAttached()||Array.from(h.getChildren()).some(v=>!v.is("uiElement")))return!1;const g=h.document,b=g.selection.anchor;return!(g.isComposing&&b&&b.parent===h||!f&&g.isFocused&&(!b||b.parent===h))}(l,t.keepOnFocus)?function(h,f){return!f.hasClass("ck-placeholder")&&(h.addClass("ck-placeholder",f),!0)}(i,l)&&(d=!0):k4(i,l)&&(d=!0),d}function b4(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class ps{is(){throw new Error("is() method is abstract")}}const BA=function(i){return Pn(i,4)};class fs extends ee(ps){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new O("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let o=e.includeSelf?this:this.parent;for(;o;)t[e.parentFirst?"push":"unshift"](o),o=o.parent;return t}getCommonAncestor(e,t={}){const o=this.getAncestors(t),s=e.getAncestors(t);let l=0;for(;o[l]==s[l]&&o[l];)l++;return l===0?null:o[l-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),o=e.getPath(),s=ct(t,o);switch(s){case"prefix":return!0;case"extension":return!1;default:return t[s]<o[s]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=BA(this);return delete e.parent,e}}fs.prototype.is=function(i){return i==="node"||i==="view:node"};class ot extends fs{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof ot&&(this===e||this.data===e.data)}_clone(){return new ot(this.document,this.data)}}ot.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class lr extends ps{constructor(e,t,o){if(super(),this.textNode=e,t<0||t>e.data.length)throw new O("view-textproxy-wrong-offsetintext",this);if(o<0||t+o>e.data.length)throw new O("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+o),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let o=e.includeSelf?this.textNode:this.parent;for(;o!==null;)t[e.parentFirst?"push":"unshift"](o),o=o.parent;return t}}lr.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class No{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const o of this._patterns){const s=OA(t,o);if(s)return{element:t,pattern:o,match:s}}return null}matchAll(...e){const t=[];for(const o of e)for(const s of this._patterns){const l=OA(o,s);l&&t.push({element:o,pattern:s,match:l})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function OA(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(o,s){return o instanceof RegExp?!!s.match(o):o===s}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(o,s){const l=new Set(s.getAttributeKeys());return Lt(o)?(o.style!==void 0&&te("matcher-pattern-deprecated-attributes-style-key",o),o.class!==void 0&&te("matcher-pattern-deprecated-attributes-class-key",o)):(l.delete("style"),l.delete("class")),dg(o,l,d=>s.getAttribute(d))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(o,s){return dg(o,s.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(o,s){return dg(o,s.getStyleNames(!0),l=>s.getStyle(l))}(e.styles,i),!t.styles)?null:t}function dg(i,e,t){const o=function(d){return Array.isArray(d)?d.map(h=>Lt(h)?(h.key!==void 0&&h.value!==void 0||te("matcher-pattern-missing-key-or-value",h),[h.key,h.value]):[h,!0]):Lt(d)?Object.entries(d):[[d,!0]]}(i),s=Array.from(e),l=[];if(o.forEach(([d,h])=>{s.forEach(f=>{(function(g,b){return g===!0||g===b||g instanceof RegExp&&b.match(g)})(d,f)&&function(g,b,v){if(g===!0)return!0;const C=v(b);return g===C||g instanceof RegExp&&!!String(C).match(g)}(h,f,t)&&l.push(f)})}),o.length&&!(l.length<o.length))return l}const Xu=function(i){return typeof i=="symbol"||Rt(i)&&Zo(i)=="[object Symbol]"};var w4=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,v4=/^\w*$/;const A4=function(i,e){if(Xt(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!Xu(i))||v4.test(i)||!w4.test(i)||e!=null&&i in Object(e)};function ug(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var o=arguments,s=e?e.apply(this,o):o[0],l=t.cache;if(l.has(s))return l.get(s);var d=i.apply(this,o);return t.cache=l.set(s,d)||l,d};return t.cache=new(ug.Cache||aa),t}ug.Cache=aa;const C4=ug,_4=function(i){var e=C4(i,function(o){return t.size===500&&t.clear(),o}),t=e.cache;return e};var y4=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,x4=/\\(\\)?/g,E4=_4(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(y4,function(t,o,s,l){e.push(s?l.replace(x4,"$1"):o||t)}),e});const S4=E4,D4=function(i,e){for(var t=-1,o=i==null?0:i.length,s=Array(o);++t<o;)s[t]=e(i[t],t,i);return s};var RA=uo?uo.prototype:void 0,LA=RA?RA.toString:void 0;const T4=function i(e){if(typeof e=="string")return e;if(Xt(e))return D4(e,i)+"";if(Xu(e))return LA?LA.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},hg=function(i){return i==null?"":T4(i)},pg=function(i,e){return Xt(i)?i:A4(i,e)?[i]:S4(hg(i))},I4=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},fg=function(i){if(typeof i=="string"||Xu(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},jA=function(i,e){for(var t=0,o=(e=pg(e,i)).length;i!=null&&t<o;)i=i[fg(e[t++])];return t&&t==o?i:void 0},zA=function(i,e,t){var o=-1,s=i.length;e<0&&(e=-e>s?0:s+e),(t=t>s?s:t)<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var l=Array(s);++o<s;)l[o]=i[o+e];return l},M4=function(i,e){return e.length<2?i:jA(i,zA(e,0,-1))},N4=function(i,e){return e=pg(e,i),(i=M4(i,e))==null||delete i[fg(I4(e))]},P4=function(i,e){return i==null||N4(i,e)},eh=function(i,e,t){var o=i==null?void 0:jA(i,e);return o===void 0?t:o},mg=function(i,e,t){(t!==void 0&&!as(i[e],t)||t===void 0&&!(e in i))&&Fl(i,e,t)},B4=function(i){return function(e,t,o){for(var s=-1,l=Object(e),d=o(e),h=d.length;h--;){var f=d[i?h:++s];if(t(l[f],f,l)===!1)break}return e}}(),O4=function(i){return Rt(i)&&ua(i)},gg=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},R4=function(i){return tr(i,ki(i))},L4=function(i,e,t,o,s,l,d){var h=gg(i,t),f=gg(e,t),g=d.get(f);if(g)mg(i,t,g);else{var b=l?l(h,f,t+"",i,e,d):void 0,v=b===void 0;if(v){var C=Xt(f),D=!C&&gi(f),M=!C&&!D&&cs(f);b=f,C||D||M?Xt(h)?b=h:O4(h)?b=oc(h):D?(v=!1,b=Su(f,!0)):M?(v=!1,b=W(f,!0)):b=[]:Lt(f)||$l(f)?(b=h,$l(h)?b=R4(h):Oe(h)&&!Xo(h)||(b=ye(f))):v=!1}v&&(d.set(f,b),s(b,f,o,l,d),d.delete(f)),mg(i,t,b)}},j4=function i(e,t,o,s,l){e!==t&&B4(t,function(d,h){if(l||(l=new mi),Oe(d))L4(e,t,h,o,i,s,l);else{var f=s?s(gg(e,h),d,h+"",e,t,l):void 0;f===void 0&&(f=d),mg(e,h,f)}},ki)},ms=function(i){return i},z4=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var FA=Math.max;const F4=function(i,e,t){return e=FA(e===void 0?i.length-1:e,0),function(){for(var o=arguments,s=-1,l=FA(o.length-e,0),d=Array(l);++s<l;)d[s]=o[e+s];s=-1;for(var h=Array(e+1);++s<e;)h[s]=o[s];return h[e]=t(d),z4(i,this,h)}},V4=function(i){return function(){return i}},U4=la?function(i,e){return la(i,"toString",{configurable:!0,enumerable:!1,value:V4(e),writable:!0})}:ms;var H4=Date.now;const $4=function(i){var e=0,t=0;return function(){var o=H4(),s=16-(o-t);if(t=o,s>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(U4),W4=function(i,e){return $4(F4(i,e,ms),i+"")},q4=function(i,e,t){if(!Oe(t))return!1;var o=typeof e;return!!(o=="number"?ua(t)&&Gl(e,t.length):o=="string"&&e in t)&&as(t[e],i)},VA=function(i){return W4(function(e,t){var o=-1,s=t.length,l=s>1?t[s-1]:void 0,d=s>2?t[2]:void 0;for(l=i.length>3&&typeof l=="function"?(s--,l):void 0,d&&q4(t[0],t[1],d)&&(l=s<3?void 0:l,s=1),e=Object(e);++o<s;){var h=t[o];h&&i(e,h,o,l)}return e})},UA=VA(function(i,e,t){j4(i,e,t)}),G4=function(i,e,t,o){if(!Oe(i))return i;for(var s=-1,l=(e=pg(e,i)).length,d=l-1,h=i;h!=null&&++s<l;){var f=fg(e[s]),g=t;if(f==="__proto__"||f==="constructor"||f==="prototype")return i;if(s!=d){var b=h[f];(g=o?o(b,f,h):void 0)===void 0&&(g=Oe(b)?b:Gl(e[s+1])?[]:{})}Vl(h,f,g),h=h[f]}return i},K4=function(i,e,t){return i==null?i:G4(i,e,t)};class Y4{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(o){let s=null,l=0,d=0,h=null;const f=new Map;if(o==="")return f;o.charAt(o.length-1)!=";"&&(o+=";");for(let g=0;g<o.length;g++){const b=o.charAt(g);if(s===null)switch(b){case":":h||(h=o.substr(l,g-l),d=g+1);break;case'"':case"'":s=b;break;case";":{const v=o.substr(d,g-d);h&&f.set(h.trim(),v.trim()),h=null,l=g+1;break}}else b===s&&(s=null)}return f}(e).entries());for(const[o,s]of t)this._styleProcessor.toNormalizedForm(o,s,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([o])=>o===e);return Array.isArray(t)}set(e,t){if(Oe(e))for(const[o,s]of Object.entries(e))this._styleProcessor.toNormalizedForm(o,s,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=kg(e);P4(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Oe(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([o])=>o===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const o of t)e.push(...this._styleProcessor.getReducedForm(o,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const o=t.splice(0,t.length-1).join("."),s=eh(this._styles,o);s&&!Array.from(Object.keys(s)).length&&this.remove(o)}}class Q4{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,o){if(Oe(t))bg(o,kg(e),t);else if(this._normalizers.has(e)){const s=this._normalizers.get(e),{path:l,value:d}=s(t);bg(o,l,d)}else bg(o,e,t)}getNormalized(e,t){if(!e)return UA({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const o=this._extractors.get(e);if(typeof o=="string")return eh(t,o);const s=o(e,t);if(s)return s}return eh(t,kg(e))}getReducedForm(e,t){const o=this.getNormalized(e,t);return o===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(o):[[e,o]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(s=>{const l=this.getNormalized(s,e);return l&&typeof l=="object"?Object.keys(l).length:l}),o=new Set([...t,...Object.keys(e)]);return Array.from(o.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const o of t)this._mapStyleNames(o,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function kg(i){return i.replace("-",".")}function bg(i,e,t){let o=t;Oe(t)&&(o=UA({},eh(i,e),t)),K4(i,e,o)}class Kn extends fs{constructor(e,t,o,s){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(l){const d=ar(l);for(const[h,f]of d)f===null?d.delete(h):typeof f!="string"&&d.set(h,String(f));return d}(o),this._children=[],s&&this._insertChild(0,s),this._classes=new Set,this._attrs.has("class")){const l=this._attrs.get("class");HA(this._classes,l),this._attrs.delete("class")}this._styles=new Y4(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Kn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,o]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==o)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new No(...e);let o=this.parent;for(;o&&!o.is("documentFragment");){if(t.match(o))return o;o=o.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),o=Array.from(this._attrs).map(s=>`${s[0]}="${s[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(o==""?"":` ${o}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const s of this.getChildren())t.push(s._clone(e));const o=new this.constructor(this.document,this.name,this._attrs,t);return o._classes=new Set(this._classes),o._styles.set(this._styles.getNormalized()),o._customProperties=new Map(this._customProperties),o.getFillerOffset=this.getFillerOffset,o._unsafeAttributesToRender=this._unsafeAttributesToRender,o}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let o=0;const s=function(l,d){return typeof d=="string"?[new ot(l,d)]:(Wt(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new ot(l,h):h instanceof lr?new ot(l,h.data):h))}(this.document,t);for(const l of s)l.parent!==null&&l._remove(),l.parent=this,l.document=this.document,this._children.splice(e,0,l),e++,o++;return o}_removeChildren(e,t=1){this._fireChange("children",this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const o=String(t);this._fireChange("attributes",this),e=="class"?HA(this._classes,o):e=="style"?this._styles.setTo(o):this._attrs.set(e,o)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Yt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Yt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Yt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function HA(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(o=>i.add(o))}Kn.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class pc extends Kn{constructor(e,t,o,s){super(e,t,o,s),this.getFillerOffset=$A}}function $A(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}pc.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class th extends De(pc){constructor(e,t,o,s){super(e,t,o,s),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",l=>l&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}th.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const WA=Symbol("rootName");class qA extends th{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(WA)}set rootName(e){this._setCustomProperty(WA,e)}set _name(e){this.name=e}}qA.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class gs{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new O("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new O("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=ae._createAt(e.startPosition):this._position=ae._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,o;do o=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,o=e.parent;if(o.parent===null&&e.offset===o.childCount)return{done:!0,value:void 0};if(o===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let s;if(o instanceof ot){if(e.isAtEnd)return this._position=ae._createAfter(o),this._next();s=o.data[e.offset]}else s=o.getChild(e.offset);if(s instanceof Kn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new ae(s,0);return this._position=e,this._formatReturnValue("elementStart",s,t,e,1)}if(s instanceof ot){if(this.singleCharacters)return e=new ae(s,0),this._position=e,this._next();let l,d=s.data.length;return s==this._boundaryEndParent?(d=this.boundaries.end.offset,l=new lr(s,0,d),e=ae._createAfter(l)):(l=new lr(s,0,s.data.length),e.offset++),this._position=e,this._formatReturnValue("text",l,t,e,d)}if(typeof s=="string"){let l;this.singleCharacters?l=1:l=(o===this._boundaryEndParent?this.boundaries.end.offset:o.data.length)-e.offset;const d=new lr(o,e.offset,l);return e.offset+=l,this._position=e,this._formatReturnValue("text",d,t,e,l)}return e=ae._createAfter(o),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",o,t,e)}_previous(){let e=this.position.clone();const t=this.position,o=e.parent;if(o.parent===null&&e.offset===0)return{done:!0,value:void 0};if(o==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let s;if(o instanceof ot){if(e.isAtStart)return this._position=ae._createBefore(o),this._previous();s=o.data[e.offset-1]}else s=o.getChild(e.offset-1);if(s instanceof Kn)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",s,t,e,1)):(e=new ae(s,s.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",s,t,e));if(s instanceof ot){if(this.singleCharacters)return e=new ae(s,s.data.length),this._position=e,this._previous();let l,d=s.data.length;if(s==this._boundaryStartParent){const h=this.boundaries.start.offset;l=new lr(s,h,s.data.length-h),d=l.data.length,e=ae._createBefore(l)}else l=new lr(s,0,s.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",l,t,e,d)}if(typeof s=="string"){let l;if(this.singleCharacters)l=1;else{const h=o===this._boundaryStartParent?this.boundaries.start.offset:0;l=e.offset-h}e.offset-=l;const d=new lr(o,e.offset,l);return this._position=e,this._formatReturnValue("text",d,t,e,l)}return e=ae._createBefore(o),this._position=e,this._formatReturnValue("elementStart",o,t,e,1)}_formatReturnValue(e,t,o,s,l){return t instanceof lr&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?o=ae._createAfter(t.textNode):(s=ae._createAfter(t.textNode),this._position=s)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?o=ae._createBefore(t.textNode):(s=ae._createBefore(t.textNode),this._position=s))),{done:!1,value:{type:e,item:t,previousPosition:o,nextPosition:s,length:l}}}}class ae extends ps{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof th);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=ae._createAt(this),o=t.offset+e;return t.offset=o<0?0:o,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const o=new gs(t);return o.skip(e),o.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),o=e.getAncestors();let s=0;for(;t[s]==o[s]&&t[s];)s++;return s===0?null:t[s-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],o=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),o.push(e.offset);const s=ct(t,o);switch(s){case"prefix":return"before";case"extension":return"after";default:return t[s]<o[s]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new gs(e)}clone(){return new ae(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ae)return new this(e.parent,e.offset);{const o=e;if(t=="end")t=o.is("$text")?o.data.length:o.childCount;else{if(t=="before")return this._createBefore(o);if(t=="after")return this._createAfter(o);if(t!==0&&!t)throw new O("view-createpositionat-offset-required",o)}return new ae(o,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ae(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new O("view-position-after-root",e,{root:e});return new ae(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ae(e.textNode,e.offsetInText);if(!e.parent)throw new O("view-position-before-root",e,{root:e});return new ae(e.parent,e.index)}}ae.prototype.is=function(i){return i==="position"||i==="view:position"};class ve extends ps{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new gs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(nh,{direction:"backward"}),t=this.end.getLastMatchingPosition(nh);return e.parent.is("$text")&&e.isAtStart&&(e=ae._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ae._createAfter(t.parent)),new ve(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(nh);if(e.isAfter(this.end)||e.isEqual(this.end))return new ve(e,e);let t=this.end.getLastMatchingPosition(nh,{direction:"backward"});const o=e.nodeAfter,s=t.nodeBefore;return o&&o.is("$text")&&(e=new ae(o,0)),s&&s.is("$text")&&(t=new ae(s,s.data.length)),new ve(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const o=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),s=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return o&&s}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new ve(this.start,e.start)),this.containsPosition(e.end)&&t.push(new ve(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,o=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(o=e.end),new ve(t,o)}return null}getWalker(e={}){return e.boundaries=this,new gs(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new ve(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new gs(e);for(const o of t)yield o.item}*getPositions(e={}){e.boundaries=this;const t=new gs(e);yield t.position;for(const o of t)yield o.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,o,s){return new this(new ae(e,t),new ae(o,s))}static _createFromPositionAndShift(e,t){const o=e,s=e.getShiftedBy(t);return t>0?new this(o,s):new this(s,o)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ae._createBefore(e),t)}}function nh(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}ve.prototype.is=function(i){return i==="range"||i==="view:range"};class Po extends ee(ps){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let o=!1;for(const s of e._ranges)if(t.isEqual(s)){o=!0;break}if(!o)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Cn(this.getRanges());if(t!=Cn(e.getRanges()))return!1;if(t==0)return!0;for(let o of this.getRanges()){o=o.getTrimmed();let s=!1;for(let l of e.getRanges())if(l=l.getTrimmed(),o.start.isEqual(l.start)&&o.end.isEqual(l.end)){s=!0;break}if(!s)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,o,s]=e;if(typeof o=="object"&&(s=o,o=void 0),t===null)this._setRanges([]),this._setFakeOptions(s);else if(t instanceof Po||t instanceof wg)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof ve)this._setRanges([t],s&&s.backward),this._setFakeOptions(s);else if(t instanceof ae)this._setRanges([new ve(t)]),this._setFakeOptions(s);else if(t instanceof fs){const l=!!s&&!!s.backward;let d;if(o===void 0)throw new O("view-selection-setto-required-second-parameter",this);d=o=="in"?ve._createIn(t):o=="on"?ve._createOn(t):new ve(ae._createAt(t,o)),this._setRanges([d],l),this._setFakeOptions(s)}else{if(!Wt(t))throw new O("view-selection-setto-not-selectable",this);this._setRanges(t,s&&s.backward),this._setFakeOptions(s)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new O("view-selection-setfocus-no-ranges",this);const o=ae._createAt(e,t);if(o.compareWith(this.focus)=="same")return;const s=this.anchor;this._ranges.pop(),o.compareWith(s)=="before"?this._addRange(new ve(o,s),!0):this._addRange(new ve(s,o)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const o of e)this._addRange(o);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof ve))throw new O("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new O("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new ve(e.start,e.end))}}Po.prototype.is=function(i){return i==="selection"||i==="view:selection"};class wg extends ee(ps){constructor(...e){super(),this._selection=new Po,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}wg.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class Aa extends T{constructor(e,t,o){super(e,t),this.startRange=o,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const vg=Symbol("bubbling contexts");function Ag(i){return class extends i{fire(e,...t){try{const o=e instanceof T?e:new T(this,e),s=Cg(this);if(!s.size)return;if(fc(o,"capturing",this),Ca(s,"$capture",o,...t))return o.return;const l=o.startRange||this.selection.getFirstRange(),d=l?l.getContainedElement():null,h=!!d&&!!GA(s,d);let f=d||function(g){if(!g)return null;const b=g.start.parent,v=g.end.parent,C=b.getPath(),D=v.getPath();return C.length>D.length?b:v}(l);if(fc(o,"atTarget",f),!h){if(Ca(s,"$text",o,...t))return o.return;fc(o,"bubbling",f)}for(;f;){if(f.is("rootElement")){if(Ca(s,"$root",o,...t))return o.return}else if(f.is("element")&&Ca(s,f.name,o,...t))return o.return;if(Ca(s,f,o,...t))return o.return;f=f.parent,fc(o,"bubbling",f)}return fc(o,"bubbling",this),Ca(s,"$document",o,...t),o.return}catch(o){O.rethrowUnexpectedError(o,this)}}_addEventListener(e,t,o){const s=Yt(o.context||"$document"),l=Cg(this);for(const d of s){let h=l.get(d);h||(h=new(ee()),l.set(d,h)),this.listenTo(h,e,t,o)}}_removeEventListener(e,t){const o=Cg(this);for(const s of o.values())this.stopListening(s,e,t)}}}{const i=Ag(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Ag[e]=i.prototype[e]})}function fc(i,e,t){i instanceof Aa&&(i._eventPhase=e,i._currentTarget=t)}function Ca(i,e,t,...o){const s=typeof e=="string"?i.get(e):GA(i,e);return!!s&&(s.fire(t,...o),t.stop.called)}function GA(i,e){for(const[t,o]of i)if(typeof t=="function"&&t(e))return o;return null}function Cg(i){return i[vg]||(i[vg]=new Map),i[vg]}class oh extends Ag(De()){constructor(e){super(),this._postFixers=new Set,this.selection=new wg,this.roots=new To({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const o of this._postFixers)if(t=o(e),t)break;while(t)}}class ks extends Kn{constructor(e,t,o,s){super(e,t,o,s),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=Z4}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new O("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function Z4(){if(_g(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(_g(i)>1)return null;i=i.parent}return!i||_g(i)>1?null:this.childCount}function _g(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}ks.DEFAULT_PRIORITY=10,ks.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class yg extends Kn{constructor(e,t,o,s){super(e,t,o,s),this.getFillerOffset=J4}_insertChild(e,t){if(t&&(t instanceof fs||Array.from(t).length>0))throw new O("view-emptyelement-cannot-add",[this,t]);return 0}}function J4(){return null}yg.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class rh extends Kn{constructor(e,t,o,s){super(e,t,o,s),this.getFillerOffset=eP}_insertChild(e,t){if(t&&(t instanceof fs||Array.from(t).length>0))throw new O("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const o of this.getAttributeKeys())t.setAttribute(o,this.getAttribute(o));return t}}function X4(i){i.document.on("arrowKey",(e,t)=>function(o,s,l){if(s.keyCode==Re.arrowright){const d=s.domTarget.ownerDocument.defaultView.getSelection(),h=d.rangeCount==1&&d.getRangeAt(0).collapsed;if(h||s.shiftKey){const f=d.focusNode,g=d.focusOffset,b=l.domPositionToView(f,g);if(b===null)return;let v=!1;const C=b.getLastMatchingPosition(D=>(D.item.is("uiElement")&&(v=!0),!(!D.item.is("uiElement")&&!D.item.is("attributeElement"))));if(v){const D=l.viewPositionToDom(C);h?d.collapse(D.parent,D.offset):d.extend(D.parent,D.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function eP(){return null}rh.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class xg extends Kn{constructor(e,t,o,s){super(e,t,o,s),this.getFillerOffset=tP}_insertChild(e,t){if(t&&(t instanceof fs||Array.from(t).length>0))throw new O("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function tP(){return null}xg.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class bs extends ee(ps){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let o=0;const s=function(l,d){return typeof d=="string"?[new ot(l,d)]:(Wt(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new ot(l,h):h instanceof lr?new ot(l,h.data):h))}(this.document,t);for(const l of s)l.parent!==null&&l._remove(),l.parent=this,this._children.splice(e,0,l),e++,o++;return o}_removeChildren(e,t=1){this._fireChange("children",this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}bs.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class KA{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new bs(this.document,e)}createText(e){return new ot(this.document,e)}createAttributeElement(e,t,o={}){const s=new ks(this.document,e,t);return typeof o.priority=="number"&&(s._priority=o.priority),o.id&&(s._id=o.id),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createContainerElement(e,t,o={},s={}){let l=null;Lt(o)?s=o:l=o;const d=new pc(this.document,e,t,l);return s.renderUnsafeAttributes&&d._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),d}createEditableElement(e,t,o={}){const s=new th(this.document,e,t);return o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createEmptyElement(e,t,o={}){const s=new yg(this.document,e,t);return o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createUIElement(e,t,o){const s=new rh(this.document,e,t);return o&&(s.render=o),s}createRawElement(e,t,o,s={}){const l=new xg(this.document,e,t);return o&&(l.render=o),s.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),l}setAttribute(e,t,o){o._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,o){Lt(e)&&o===void 0?t._setStyle(e):o._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,o){o._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ae?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new O("view-writer-break-non-container-element",this.document);if(!t.parent)throw new O("view-writer-break-root",this.document);if(e.isAtStart)return ae._createBefore(t);if(!e.isAtEnd){const o=t._clone(!1);this.insert(ae._createAfter(t),o);const s=new ve(e,ae._createAt(t,"end")),l=new ae(o,0);this.move(s,l)}return ae._createAfter(t)}mergeAttributes(e){const t=e.offset,o=e.parent;if(o.is("$text"))return e;if(o.is("attributeElement")&&o.childCount===0){const d=o.parent,h=o.index;return o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new ae(d,h))}const s=o.getChild(t-1),l=o.getChild(t);if(!s||!l)return e;if(s.is("$text")&&l.is("$text"))return QA(s,l);if(s.is("attributeElement")&&l.is("attributeElement")&&s.isSimilar(l)){const d=s.childCount;return s._appendChild(l.getChildren()),l._remove(),this._removeFromClonedElementsGroup(l),this.mergeAttributes(new ae(s,d))}return e}mergeContainers(e){const t=e.nodeBefore,o=e.nodeAfter;if(!(t&&o&&t.is("containerElement")&&o.is("containerElement")))throw new O("view-writer-merge-containers-invalid-position",this.document);const s=t.getChild(t.childCount-1),l=s instanceof ot?ae._createAt(s,"end"):ae._createAt(t,"end");return this.move(ve._createIn(o),ae._createAt(t,"end")),this.remove(ve._createOn(o)),l}insert(e,t){ZA(t=Wt(t)?[...t]:[t],this.document);const o=t.reduce((d,h)=>{const f=d[d.length-1],g=!h.is("uiElement");return f&&f.breakAttributes==g?f.nodes.push(h):d.push({breakAttributes:g,nodes:[h]}),d},[]);let s=null,l=e;for(const{nodes:d,breakAttributes:h}of o){const f=this._insertNodes(l,d,h);s||(s=f.start),l=f.end}return s?new ve(s,l):new ve(e)}remove(e){const t=e instanceof ve?e:ve._createOn(e);if(mc(t,this.document),t.isCollapsed)return new bs(this.document);const{start:o,end:s}=this._breakAttributesRange(t,!0),l=o.parent,d=s.offset-o.offset,h=l._removeChildren(o.offset,d);for(const g of h)this._removeFromClonedElementsGroup(g);const f=this.mergeAttributes(o);return t.start=f,t.end=f.clone(),new bs(this.document,h)}clear(e,t){mc(e,this.document);const o=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const s of o){const l=s.item;let d;if(l.is("element")&&t.isSimilar(l))d=ve._createOn(l);else if(!s.nextPosition.isAfter(e.start)&&l.is("$textProxy")){const h=l.getAncestors().find(f=>f.is("element")&&t.isSimilar(f));h&&(d=ve._createIn(h))}d&&(d.end.isAfter(e.end)&&(d.end=e.end),d.start.isBefore(e.start)&&(d.start=e.start),this.remove(d))}}move(e,t){let o;if(t.isAfter(e.end)){const s=(t=this._breakAttributes(t,!0)).parent,l=s.childCount;e=this._breakAttributesRange(e,!0),o=this.remove(e),t.offset+=s.childCount-l}else o=this.remove(e);return this.insert(t,o)}wrap(e,t){if(!(t instanceof ks))throw new O("view-writer-wrap-invalid-attribute",this.document);if(mc(e,this.document),e.isCollapsed){let s=e.start;s.parent.is("element")&&(o=s.parent,!Array.from(o.getChildren()).some(d=>!d.is("uiElement")))&&(s=s.getLastMatchingPosition(d=>d.item.is("uiElement"))),s=this._wrapPosition(s,t);const l=this.document.selection;return l.isCollapsed&&l.getFirstPosition().isEqual(e.start)&&this.setSelection(s),new ve(s)}return this._wrapRange(e,t);var o}unwrap(e,t){if(!(t instanceof ks))throw new O("view-writer-unwrap-invalid-attribute",this.document);if(mc(e,this.document),e.isCollapsed)return e;const{start:o,end:s}=this._breakAttributesRange(e,!0),l=o.parent,d=this._unwrapChildren(l,o.offset,s.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const f=this.mergeAttributes(d.end);return new ve(h,f)}rename(e,t){const o=new pc(this.document,e,t.getAttributes());return this.insert(ae._createAfter(t),o),this.move(ve._createIn(t),ae._createAt(o,0)),this.remove(ve._createOn(t)),o}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ae._createAt(e,t)}createPositionAfter(e){return ae._createAfter(e)}createPositionBefore(e){return ae._createBefore(e)}createRange(e,t){return new ve(e,t)}createRangeOn(e){return ve._createOn(e)}createRangeIn(e){return ve._createIn(e)}createSelection(...e){return new Po(...e)}createSlot(e="children"){if(!this._slotFactory)throw new O("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,o){let s,l;if(s=o?Eg(e):e.parent.is("$text")?e.parent.parent:e.parent,!s)throw new O("view-writer-invalid-position-container",this.document);l=o?this._breakAttributes(e,!0):e.parent.is("$text")?Sg(e):e;const d=s._insertChild(l.offset,t);for(const b of t)this._addToClonedElementsGroup(b);const h=l.getShiftedBy(d),f=this.mergeAttributes(l);f.isEqual(l)||h.offset--;const g=this.mergeAttributes(h);return new ve(f,g)}_wrapChildren(e,t,o,s){let l=t;const d=[];for(;l<o;){const f=e.getChild(l),g=f.is("$text"),b=f.is("attributeElement");if(b&&this._wrapAttributeElement(s,f))d.push(new ae(e,l));else if(g||!b||nP(s,f)){const v=s._clone();f._remove(),v._appendChild(f),e._insertChild(l,v),this._addToClonedElementsGroup(v),d.push(new ae(e,l))}else this._wrapChildren(f,0,f.childCount,s);l++}let h=0;for(const f of d)f.offset-=h,f.offset!=t&&(this.mergeAttributes(f).isEqual(f)||(h++,o--));return ve._createFromParentsAndOffsets(e,t,e,o)}_unwrapChildren(e,t,o,s){let l=t;const d=[];for(;l<o;){const f=e.getChild(l);if(f.is("attributeElement"))if(f.isSimilar(s)){const g=f.getChildren(),b=f.childCount;f._remove(),e._insertChild(l,g),this._removeFromClonedElementsGroup(f),d.push(new ae(e,l),new ae(e,l+b)),l+=b,o+=b-1}else this._unwrapAttributeElement(s,f)?(d.push(new ae(e,l),new ae(e,l+1)),l++):(this._unwrapChildren(f,0,f.childCount,s),l++);else l++}let h=0;for(const f of d)f.offset-=h,!(f.offset==t||f.offset==o)&&(this.mergeAttributes(f).isEqual(f)||(h++,o--));return ve._createFromParentsAndOffsets(e,t,e,o)}_wrapRange(e,t){const{start:o,end:s}=this._breakAttributesRange(e,!0),l=o.parent,d=this._wrapChildren(l,o.offset,s.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const f=this.mergeAttributes(d.end);return new ve(h,f)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return YA(e.clone());e.parent.is("$text")&&(e=Sg(e));const o=this.createAttributeElement("_wrapPosition-fake-element");o._priority=Number.POSITIVE_INFINITY,o.isSimilar=()=>!1,e.parent._insertChild(e.offset,o);const s=new ve(e,e.getShiftedBy(1));this.wrap(s,t);const l=new ae(o.parent,o.index);o._remove();const d=l.nodeBefore,h=l.nodeAfter;return d instanceof ot&&h instanceof ot?QA(d,h):YA(l)}_wrapAttributeElement(e,t){if(!JA(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if(o!=="class"&&o!=="style"&&t.hasAttribute(o)&&t.getAttribute(o)!==e.getAttribute(o))return!1;for(const o of e.getStyleNames())if(t.hasStyle(o)&&t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())o!=="class"&&o!=="style"&&(t.hasAttribute(o)||this.setAttribute(o,e.getAttribute(o),t));for(const o of e.getStyleNames())t.hasStyle(o)||this.setStyle(o,e.getStyle(o),t);for(const o of e.getClassNames())t.hasClass(o)||this.addClass(o,t);return!0}_unwrapAttributeElement(e,t){if(!JA(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if(o!=="class"&&o!=="style"&&(!t.hasAttribute(o)||t.getAttribute(o)!==e.getAttribute(o)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const o of e.getStyleNames())if(!t.hasStyle(o)||t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())o!=="class"&&o!=="style"&&this.removeAttribute(o,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const o=e.start,s=e.end;if(mc(e,this.document),e.isCollapsed){const f=this._breakAttributes(e.start,t);return new ve(f,f)}const l=this._breakAttributes(s,t),d=l.parent.childCount,h=this._breakAttributes(o,t);return l.offset+=l.parent.childCount-d,new ve(h,l)}_breakAttributes(e,t=!1){const o=e.offset,s=e.parent;if(e.parent.is("emptyElement"))throw new O("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new O("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new O("view-writer-cannot-break-raw-element",this.document);if(!t&&s.is("$text")&&Dg(s.parent)||Dg(s))return e.clone();if(s.is("$text"))return this._breakAttributes(Sg(e),t);if(o==s.childCount){const l=new ae(s.parent,s.index+1);return this._breakAttributes(l,t)}if(o===0){const l=new ae(s.parent,s.index);return this._breakAttributes(l,t)}{const l=s.index+1,d=s._clone();s.parent._insertChild(l,d),this._addToClonedElementsGroup(d);const h=s.childCount-o,f=s._removeChildren(o,h);d._appendChild(f);const g=new ae(s.parent,l);return this._breakAttributes(g,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const s of e.getChildren())this._addToClonedElementsGroup(s);const t=e.id;if(!t)return;let o=this._cloneGroups.get(t);o||(o=new Set,this._cloneGroups.set(t,o)),o.add(e),e._clonesGroup=o}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const s of e.getChildren())this._removeFromClonedElementsGroup(s);const t=e.id;if(!t)return;const o=this._cloneGroups.get(t);o&&o.delete(e)}}function Eg(i){let e=i.parent;for(;!Dg(e);){if(!e)return;e=e.parent}return e}function nP(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function YA(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new ae(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new ae(t,0):i}function Sg(i){if(i.offset==i.parent.data.length)return new ae(i.parent.parent,i.parent.index+1);if(i.offset===0)return new ae(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new ot(i.root.document,e)),new ae(i.parent.parent,i.parent.index+1)}function QA(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new ae(i,t)}const oP=[ot,ks,pc,yg,xg,rh];function ZA(i,e){for(const t of i){if(!oP.some(o=>t instanceof o))throw new O("view-writer-insert-invalid-node-type",e);t.is("$text")||ZA(t.getChildren(),e)}}function Dg(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function mc(i,e){const t=Eg(i.start),o=Eg(i.end);if(!t||!o||t!==o)throw new O("view-writer-invalid-range-container",e)}function JA(i,e){return i.id===null&&e.id===null}const XA=i=>i.createTextNode(" "),eC=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},tC=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Bo=7,gc="⁠".repeat(Bo);function Yn(i){return typeof i=="string"?i.substr(0,Bo)===gc:jt(i)&&i.data.substr(0,Bo)===gc}function kc(i){return i.data.length==Bo&&Yn(i)}function nC(i){const e=typeof i=="string"?i:i.data;return Yn(i)?e.slice(Bo):e}function rP(i,e){if(e.keyCode==Re.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const o=t.getRangeAt(0).startContainer,s=t.getRangeAt(0).startOffset;Yn(o)&&s<=Bo&&t.collapse(o,0)}}}var oC=u(9315),iP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(oC.Z,iP),oC.Z.locals;class sP extends De(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),y.isBlink&&!y.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new O("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!y.isAndroid)return;let e=null;const t=!(y.isBlink&&!y.isAndroid)||!this.isSelecting;for(const o of this.markedChildren)this._updateChildrenMappings(o);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ae._createBefore(e.parent)));for(const o of this.markedAttributes)this._updateAttrs(o);for(const o of this.markedChildren)this._updateChildren(o,{inlineFillerPosition:e});for(const o of this.markedTexts)!this.markedChildren.has(o.parent)&&this.domConverter.mapViewToDom(o.parent)&&this._updateText(o,{inlineFillerPosition:e});if(t)if(e){const o=this.domConverter.viewPositionToDom(e),s=o.parent.ownerDocument;Yn(o.parent)?this._inlineFiller=o.parent:this._inlineFiller=rC(s,o.parent,o.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const o=Array.from(t.childNodes),s=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),l=this._diffNodeLists(o,s),d=this._findUpdateActions(l,o,s,aP);if(d.indexOf("update")!==-1){const h={equal:0,insert:0,delete:0};for(const f of d)if(f==="update"){const g=h.equal+h.insert,b=h.equal+h.delete,v=e.getChild(g);!v||v.is("uiElement")||v.is("rawElement")||this._updateElementMappings(v,o[b]),Wv(s[g]),h.equal++}else h[f]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ae._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&jt(t.parent)&&Yn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Yn(e))throw new O("view-renderer-filler-was-lost",this);kc(e)?e.remove():e.data=e.data.substr(Bo),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,o=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(d){if(d.getAttribute("contenteditable")=="false")return!1;const h=d.findAncestor(f=>f.hasAttribute("contenteditable"));return!h||h.getAttribute("contenteditable")=="true"}(t)||o===t.getFillerOffset())return!1;const s=e.nodeBefore,l=e.nodeAfter;return!(s instanceof ot||l instanceof ot)&&(!y.isAndroid||!s&&!l)}_updateText(e,t){const o=this.domConverter.findCorrespondingDomText(e);let s=this.domConverter.viewToDom(e).data;const l=t.inlineFillerPosition;l&&l.parent==e.parent&&l.offset==e.index&&(s=gc+s),iC(o,s)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const o=Array.from(t.attributes).map(l=>l.name),s=e.getAttributeKeys();for(const l of s)this.domConverter.setDomElementAttribute(t,l,e.getAttribute(l),e);for(const l of o)e.hasAttribute(l)||this.domConverter.removeDomElementAttribute(t,l)}_updateChildren(e,t){const o=this.domConverter.mapViewToDom(e);if(!o)return;if(y.isAndroid){let v=null;for(const C of Array.from(o.childNodes)){if(v&&jt(v)&&jt(C)){o.normalize();break}v=C}}const s=t.inlineFillerPosition,l=o.childNodes,d=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));s&&s.parent===e&&rC(o.ownerDocument,d,s.offset);const h=this._diffNodeLists(l,d),f=this._findUpdateActions(h,l,d,lP);let g=0;const b=new Set;for(const v of f)v==="delete"?(b.add(l[g]),Wv(l[g])):v!=="equal"&&v!=="update"||g++;g=0;for(const v of f)v==="insert"?(Vv(o,g,d[g]),g++):v==="update"?(iC(l[g],d[g].data),g++):v==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(d[g])),g++);for(const v of b)v.parentNode||this.domConverter.unbindDomElement(v)}_diffNodeLists(e,t){return e=function(o,s){const l=Array.from(o);return l.length==0||!s||l[l.length-1]==s&&l.pop(),l}(e,this._fakeSelectionContainer),F(e,t,cP.bind(null,this.domConverter))}_findUpdateActions(e,t,o,s){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let l=[],d=[],h=[];const f={equal:0,insert:0,delete:0};for(const g of e)g==="insert"?h.push(o[f.equal+f.insert]):g==="delete"?d.push(t[f.equal+f.delete]):(l=l.concat(F(d,h,s).map(b=>b==="equal"?"update":b)),l.push("equal"),d=[],h=[]),f[g]++;return l.concat(F(d,h,s).map(g=>g==="equal"?"update":g))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(y.isBlink&&!y.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&y.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(d){const h=d.createElement("div");return h.className="ck-fake-selection-container",Object.assign(h.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),h.textContent=" ",h}(t));const o=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(o,this.selection),!this._fakeSelectionNeedsUpdate(e))return;o.parentElement&&o.parentElement==e||e.appendChild(o),o.textContent=this.selection.fakeSelectionLabel||" ";const s=t.getSelection(),l=t.createRange();s.removeAllRanges(),l.selectNodeContents(o),s.addRange(l)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const o=this.domConverter.viewPositionToDom(this.selection.anchor),s=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(o.parent,o.offset,s.parent,s.offset),y.isGecko&&function(l,d){const h=l.parent;if(h.nodeType!=Node.ELEMENT_NODE||l.offset!=h.childNodes.length-1)return;const f=h.childNodes[l.offset];f&&f.tagName=="BR"&&d.addRange(d.getRangeAt(0))}(s,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,o=e.ownerDocument.getSelection();return!t||t.parentElement!==e||o.anchorNode!==t&&!t.contains(o.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const o=e.activeElement,s=this.domConverter.mapDomToView(o);o&&s&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function rC(i,e,t){const o=e instanceof Array?e:e.childNodes,s=o[t];if(jt(s))return s.data=gc+s.data,s;{const l=i.createTextNode(gc);return Array.isArray(e)?o.splice(t,0,l):Vv(e,t,l),l}}function aP(i,e){return vi(i)&&vi(e)&&!jt(i)&&!jt(e)&&!dc(i)&&!dc(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function lP(i,e){return vi(i)&&vi(e)&&jt(i)&&jt(e)}function cP(i,e,t){return e===t||(jt(e)&&jt(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function iC(i,e){const t=i.data;if(t==e)return;const o=S(t,e);for(const s of o)s.type==="insert"?i.insertData(s.index,s.values.join("")):i.deleteData(s.index,s.howMany)}const dP=tC(be.document),uP=XA(be.document),hP=eC(be.document),ih="data-ck-unsafe-attribute-",sC="data-ck-unsafe-element";class sh{constructor(e,{blockFillerMode:t,renderingMode:o="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new No,this._inlineObjectElementMatcher=new No,this.document=e,this.renderingMode=o,this.blockFillerMode=t||(o==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?be.document:be.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Po(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const o of Array.from(e.children))this.unbindDomElement(o)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,o){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(o==="img"&&(e==="src"||e==="srcset")||o==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const o=new DOMParser().parseFromString(t,"text/html"),s=o.createDocumentFragment(),l=o.body.childNodes;for(;l.length>0;)s.appendChild(l[0]);const d=o.createTreeWalker(s,NodeFilter.SHOW_ELEMENT),h=[];let f;for(;f=d.nextNode();)h.push(f);for(const g of h){for(const v of g.getAttributeNames())this.setDomElementAttribute(g,v,g.getAttribute(v));const b=g.tagName.toLowerCase();this._shouldRenameElement(b)&&(cC(b),g.replaceWith(this._createReplacementDomElement(b,g)))}for(;e.firstChild;)e.firstChild.remove();e.append(s)}viewToDom(e,t={}){if(e.is("$text")){const o=this._processDataFromViewText(e);return this._domDocument.createTextNode(o)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let o;if(e.is("documentFragment"))o=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(o,e);else{if(e.is("uiElement"))return o=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(o,e),o;this._shouldRenameElement(e.name)?(cC(e.name),o=this._createReplacementDomElement(e.name)):o=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(o,this),t.bind&&this.bindElements(o,e);for(const s of e.getAttributeKeys())this.setDomElementAttribute(o,s,e.getAttribute(s),e)}if(t.withChildren!==!1)for(const s of this.viewChildrenToDom(e,t))o.appendChild(s);return o}}setDomElementAttribute(e,t,o,s){const l=this.shouldRenderAttribute(t,o,e.tagName.toLowerCase())||s&&s.shouldRenderUnsafeAttribute(t);l||te("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:o}),function(d){try{be.document.createAttribute(d)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!l?e.removeAttribute(t):e.hasAttribute(ih+t)&&l&&e.removeAttribute(ih+t),e.setAttribute(l?t:ih+t,o)):te("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:o})}removeDomElementAttribute(e,t){t!=sC&&(e.removeAttribute(t),e.removeAttribute(ih+t))}*viewChildrenToDom(e,t={}){const o=e.getFillerOffset&&e.getFillerOffset();let s=0;for(const l of e.getChildren()){o===s&&(yield this._getBlockFiller());const d=l.is("element")&&!!l.getCustomProperty("dataPipeline:transparentRendering")&&!zt(l.getAttributes());d&&this.renderingMode=="data"?yield*this.viewChildrenToDom(l,t):(d&&te("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:l}),yield this.viewToDom(l,t)),s++}o===s&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),o=this.viewPositionToDom(e.end),s=this._domDocument.createRange();return s.setStart(t.parent,t.offset),s.setEnd(o.parent,o.offset),s}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const o=this.findCorrespondingDomText(t);if(!o)return null;let s=e.offset;return Yn(o)&&(s+=Bo),{parent:o,offset:s}}{let o,s,l;if(e.offset===0){if(o=this.mapViewToDom(t),!o)return null;l=o.childNodes[0]}else{const d=e.nodeBefore;if(s=d.is("$text")?this.findCorrespondingDomText(d):this.mapViewToDom(d),!s)return null;o=s.parentNode,l=s.nextSibling}return jt(l)&&Yn(l)?{parent:l,offset:Bo}:{parent:o,offset:s?qu(s)+1:0}}}domToView(e,t={}){const o=[],s=this._domToView(e,t,o),l=s.next().value;return l?(s.next(),this._processDomInlineNodes(null,o,t),l.is("$text")&&l.data.length==0?null:l):null}*domChildrenToView(e,t={},o=[]){for(let s=0;s<e.childNodes.length;s++){const l=e.childNodes[s],d=this._domToView(l,t,o),h=d.next().value;h!==null&&(this._isBlockViewElement(h)&&this._processDomInlineNodes(e,o,t),yield h,d.next())}this._processDomInlineNodes(e,o,t)}domSelectionToView(e){if(function(s){if(!y.isGecko||!s.rangeCount)return!1;const l=s.getRangeAt(0).startContainer;try{Object.prototype.toString.call(l)}catch{return!0}return!1}(e))return new Po([]);if(e.rangeCount===1){let s=e.getRangeAt(0).startContainer;jt(s)&&(s=s.parentNode);const l=this.fakeSelectionToView(s);if(l)return l}const t=this.isDomSelectionBackward(e),o=[];for(let s=0;s<e.rangeCount;s++){const l=e.getRangeAt(s),d=this.domRangeToView(l);d&&o.push(d)}return new Po(o,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),o=this.domPositionToView(e.endContainer,e.endOffset);return t&&o?new ve(t,o):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,qu(e));const o=this.mapDomToView(e);if(o&&(o.is("uiElement")||o.is("rawElement")))return ae._createBefore(o);if(jt(e)){if(kc(e))return this.domPositionToView(e.parentNode,qu(e));const s=this.findCorrespondingViewText(e);let l=t;return s?(Yn(e)&&(l-=Bo,l=l<0?0:l),new ae(s,l)):null}if(t===0){const s=this.mapDomToView(e);if(s)return new ae(s,0)}else{const s=e.childNodes[t-1];if(jt(s)&&kc(s)||s&&this.isBlockFiller(s))return this.domPositionToView(s.parentNode,qu(s));const l=jt(s)?this.findCorrespondingViewText(s):this.mapDomToView(s);if(l&&l.parent)return new ae(l.parent,l.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(kc(e))return null;const t=this.getHostViewElement(e);if(t)return t;const o=e.previousSibling;if(o){if(!this.isElement(o))return null;const s=this.mapDomToView(o);if(s){const l=s.nextSibling;return l instanceof ot?l:null}}else{const s=this.mapDomToView(e.parentNode);if(s){const l=s.getChild(0);return l instanceof ot?l:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:o,scrollY:s}=be.window,l=[];aC(t,d=>{const{scrollLeft:h,scrollTop:f}=d;l.push([h,f])}),t.focus(),aC(t,d=>{const[h,f]=l.shift();d.scrollLeft=h,d.scrollTop=f}),be.window.scrollTo(o,s)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),o=this.domSelectionToView(t);o&&o.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(dP):!(e.tagName!=="BR"||!lC(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(hP)||function(t,o){return t.isEqualNode(uP)&&lC(t,o)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const o=t.collapsed;return t.detach(),o}getHostViewElement(e){const t=function(o){const s=[];let l=o;for(;l&&l.nodeType!=Node.DOCUMENT_NODE;)s.unshift(l),l=l.parentNode;return s}(e);for(t.pop();t.length;){const o=t.pop(),s=this._domToViewMapping.get(o);if(s&&(s.is("uiElement")||s.is("rawElement")))return s}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return XA(this._domDocument);case"markedNbsp":return eC(this._domDocument);case"br":return tC(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(jt(e)&&Yn(e)&&t<Bo||this.isElement(e)&&Yn(e.childNodes[t]))return!1;const o=this.mapDomToView(e);return!o||!o.is("uiElement")&&!o.is("rawElement")}*_domToView(e,t,o){if(this.isBlockFiller(e))return null;const s=this.getHostViewElement(e);if(s)return s;if(dc(e)&&t.skipComments)return null;if(jt(e)){if(kc(e))return null;{const l=e.data;if(l==="")return null;const d=new ot(this.document,l);return o.push(d),d}}{let l=this.mapDomToView(e);if(l)return this._isInlineObjectElement(l)&&o.push(l),l;if(this.isDocumentFragment(e))l=new bs(this.document),t.bind&&this.bindDocumentFragments(e,l);else{l=this._createViewElement(e,t),t.bind&&this.bindElements(e,l);const h=e.attributes;if(h)for(let f=h.length,g=0;g<f;g++)l._setAttribute(h[g].name,h[g].value);if(this._isViewElementWithRawContent(l,t))return l._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(l)||o.push(l),l;if(dc(e))return l._setCustomProperty("$rawContent",e.data),l}yield l;const d=[];if(t.withChildren!==!1)for(const h of this.domChildrenToView(e,t,d))l._appendChild(h);if(this._isInlineObjectElement(l))o.push(l);else for(const h of d)o.push(h)}}_processDomInlineNodes(e,t,o){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let s=!1;for(let l=0;l<t.length;l++){const d=t[l];if(!d.is("$text")){s=!1;continue}let h,f=!1;if(pP(d,this.preElements))h=nC(d.data);else{h=d.data.replace(/[ \n\t\r]{1,}/g," "),f=/[^\S\u00A0]/.test(h.charAt(h.length-1));const g=l>0?t[l-1]:null,b=l+1<t.length?t[l+1]:null,v=!g||g.is("element")&&g.name=="br"||s,C=!b&&!Yn(d.data);o.withChildren!==!1&&(v&&(h=h.replace(/^ /,"")),C&&(h=h.replace(/ $/,""))),h=nC(h),h=h.replace(/ \u00A0/g,"  ");const D=b&&b.is("element")&&b.name!="br",M=b&&b.is("$text")&&b.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(h)||!b||D||M)&&(h=h.replace(/\u00A0$/," ")),(v||g&&g.is("element")&&g.name!="br")&&(h=h.replace(/^\u00A0/," "))}h.length==0&&d.parent?(d._remove(),t.splice(l,1),l--):(d._data=h,s=f)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(o=>this.preElements.includes(o.name)))return t;if(t.charAt(0)==" "){const o=this._getTouchingInlineViewNode(e,!1);!(o&&o.is("$textProxy")&&this._nodeEndsWithSpace(o))&&o||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const o=this._getTouchingInlineViewNode(e,!0),s=o&&o.is("$textProxy")&&o.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&o&&!s||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(o=>this.preElements.includes(o.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const o=new gs({startPosition:t?ae._createAfter(e):ae._createBefore(e),direction:t?"forward":"backward"});for(const s of o){if(s.item.is("element","br"))return null;if(this._isInlineObjectElement(s.item))return s.item;if(s.item.is("containerElement"))return null;if(s.item.is("$textProxy"))return s.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(dc(e))return new rh(this.document,"$comment");const o=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Kn(this.document,o)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const o=this._domDocument.createElement("span");if(o.setAttribute(sC,e),t){for(;t.firstChild;)o.appendChild(t.firstChild);for(const s of t.getAttributeNames())o.setAttribute(s,t.getAttribute(s))}return o}}function pP(i,e){return i.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function aC(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function lC(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function cC(i){i==="script"&&te("domconverter-unsafe-script-element-detected"),i==="style"&&te("domconverter-unsafe-style-element-detected")}class cr extends fo(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const dC=VA(function(i,e){tr(e,ki(e),i)});class _a{constructor(e,t,o){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,dC(this,o)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Ci extends cr{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(o,s)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(s.target)&&this.onDomEvent(s)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,o){this.isEnabled&&this.document.fire(e,new _a(this.view,t,o))}}class fP extends Ci{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return wa(this)}};this.fire(e.type,e,t)}}const Tg=function(){return Nn.Date.now()};var mP=/\s/;const gP=function(i){for(var e=i.length;e--&&mP.test(i.charAt(e)););return e};var kP=/^\s+/;const bP=function(i){return i&&i.slice(0,gP(i)+1).replace(kP,"")};var wP=/^[-+]0x[0-9a-f]+$/i,vP=/^0b[01]+$/i,AP=/^0o[0-7]+$/i,CP=parseInt;const uC=function(i){if(typeof i=="number")return i;if(Xu(i))return NaN;if(Oe(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Oe(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=bP(i);var t=vP.test(i);return t||AP.test(i)?CP(i.slice(2),t?2:8):wP.test(i)?NaN:+i};var _P=Math.max,yP=Math.min;const bc=function(i,e,t){var o,s,l,d,h,f,g=0,b=!1,v=!1,C=!0;if(typeof i!="function")throw new TypeError("Expected a function");function D(G){var J=o,ce=s;return o=s=void 0,g=G,d=i.apply(ce,J)}function M(G){var J=G-f;return f===void 0||J>=e||J<0||v&&G-g>=l}function P(){var G=Tg();if(M(G))return z(G);h=setTimeout(P,function(J){var ce=e-(J-f);return v?yP(ce,l-(J-g)):ce}(G))}function z(G){return h=void 0,C&&o?D(G):(o=s=void 0,d)}function U(){var G=Tg(),J=M(G);if(o=arguments,s=this,f=G,J){if(h===void 0)return function(ce){return g=ce,h=setTimeout(P,e),b?D(ce):d}(f);if(v)return clearTimeout(h),h=setTimeout(P,e),D(f)}return h===void 0&&(h=setTimeout(P,e)),d}return e=uC(e)||0,Oe(t)&&(b=!!t.leading,l=(v="maxWait"in t)?_P(uC(t.maxWait)||0,e):l,C="trailing"in t?!!t.trailing:C),U.cancel=function(){h!==void 0&&clearTimeout(h),g=0,o=f=s=h=void 0},U.flush=function(){return h===void 0?d:z(Tg())},U};class xP extends cr{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=bc(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,o)=>{e.selection.isFake&&this.isEnabled&&o.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,o)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(o.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,o=new Po(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Re.arrowleft&&e!=Re.arrowup||o.setTo(o.getFirstPosition()),e!=Re.arrowright&&e!=Re.arrowdown||o.setTo(o.getLastPosition());const s={oldSelection:t,newSelection:o,domSelection:null};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}const EP=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},SP=function(i){return this.__data__.has(i)};function ah(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new aa;++e<t;)this.add(i[e])}ah.prototype.add=ah.prototype.push=EP,ah.prototype.has=SP;const DP=ah,TP=function(i,e){for(var t=-1,o=i==null?0:i.length;++t<o;)if(e(i[t],t,i))return!0;return!1},IP=function(i,e){return i.has(e)},hC=function(i,e,t,o,s,l){var d=1&t,h=i.length,f=e.length;if(h!=f&&!(d&&f>h))return!1;var g=l.get(i),b=l.get(e);if(g&&b)return g==e&&b==i;var v=-1,C=!0,D=2&t?new DP:void 0;for(l.set(i,e),l.set(e,i);++v<h;){var M=i[v],P=e[v];if(o)var z=d?o(P,M,v,e,i,l):o(M,P,v,i,e,l);if(z!==void 0){if(z)continue;C=!1;break}if(D){if(!TP(e,function(U,G){if(!IP(D,G)&&(M===U||s(M,U,t,o,l)))return D.push(G)})){C=!1;break}}else if(M!==P&&!s(M,P,t,o,l)){C=!1;break}}return l.delete(i),l.delete(e),C},MP=function(i){var e=-1,t=Array(i.size);return i.forEach(function(o,s){t[++e]=[s,o]}),t},NP=function(i){var e=-1,t=Array(i.size);return i.forEach(function(o){t[++e]=o}),t};var pC=uo?uo.prototype:void 0,Ig=pC?pC.valueOf:void 0;const PP=function(i,e,t,o,s,l,d){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!l(new ds(i),new ds(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return as(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var h=MP;case"[object Set]":var f=1&o;if(h||(h=NP),i.size!=e.size&&!f)return!1;var g=d.get(i);if(g)return g==e;o|=2,d.set(i,e);var b=hC(h(i),h(e),o,s,l,d);return d.delete(i),b;case"[object Symbol]":if(Ig)return Ig.call(i)==Ig.call(e)}return!1};var BP=Object.prototype.hasOwnProperty;const OP=function(i,e,t,o,s,l){var d=1&t,h=rc(i),f=h.length;if(f!=rc(e).length&&!d)return!1;for(var g=f;g--;){var b=h[g];if(!(d?b in e:BP.call(e,b)))return!1}var v=l.get(i),C=l.get(e);if(v&&C)return v==e&&C==i;var D=!0;l.set(i,e),l.set(e,i);for(var M=d;++g<f;){var P=i[b=h[g]],z=e[b];if(o)var U=d?o(z,P,b,e,i,l):o(P,z,b,i,e,l);if(!(U===void 0?P===z||s(P,z,t,o,l):U)){D=!1;break}M||(M=b=="constructor")}if(D&&!M){var G=i.constructor,J=e.constructor;G==J||!("constructor"in i)||!("constructor"in e)||typeof G=="function"&&G instanceof G&&typeof J=="function"&&J instanceof J||(D=!1)}return l.delete(i),l.delete(e),D};var fC="[object Arguments]",mC="[object Array]",lh="[object Object]",gC=Object.prototype.hasOwnProperty;const RP=function(i,e,t,o,s,l){var d=Xt(i),h=Xt(e),f=d?mC:Do(i),g=h?mC:Do(e),b=(f=f==fC?lh:f)==lh,v=(g=g==fC?lh:g)==lh,C=f==g;if(C&&gi(i)){if(!gi(e))return!1;d=!0,b=!1}if(C&&!b)return l||(l=new mi),d||cs(i)?hC(i,e,t,o,s,l):PP(i,e,f,t,o,s,l);if(!(1&t)){var D=b&&gC.call(i,"__wrapped__"),M=v&&gC.call(e,"__wrapped__");if(D||M){var P=D?i.value():i,z=M?e.value():e;return l||(l=new mi),s(P,z,t,o,l)}}return!!C&&(l||(l=new mi),OP(i,e,t,o,s,l))},kC=function i(e,t,o,s,l){return e===t||(e==null||t==null||!Rt(e)&&!Rt(t)?e!=e&&t!=t:RP(e,t,o,s,i,l))},LP=function(i,e,t){var o=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return o===void 0?kC(i,e,void 0,t):!!o};class bC extends cr{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,o=new Set,s=new Set;for(const d of e){const h=t.mapDomToView(d.target);h&&(h.is("uiElement")||h.is("rawElement")||d.type!=="childList"||this._isBogusBrMutation(d)||s.add(h))}for(const d of e){const h=t.mapDomToView(d.target);if((!h||!h.is("uiElement")&&!h.is("rawElement"))&&d.type==="characterData"){const f=t.findCorrespondingViewText(d.target);f&&!s.has(f.parent)?o.add(f):!f&&Yn(d.target)&&s.add(t.mapDomToView(d.target.parentNode))}}let l=!1;for(const d of o)l=!0,this.renderer.markToSync("text",d);for(const d of s){const h=t.mapViewToDom(d),f=Array.from(d.getChildren()),g=Array.from(t.domChildrenToView(h,{withChildren:!1}));LP(f,g,jP)||(l=!0,this.renderer.markToSync("children",d))}l&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function jP(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class ch extends Ci{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(o,s)=>{const l=t.selection.editableElement;l!==null&&l!==s.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class zP extends cr{constructor(e){super(e),this.mutationObserver=e.getObserver(bC),this.focusObserver=e.getObserver(ch),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=bc(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=bc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,o=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",o,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",o,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",o,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(s,l)=>{this.document.isComposing&&!y.isAndroid||(this._handleSelectionChange(l,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const o=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(o.anchorNode))return;this.mutationObserver.flush();const s=this.domConverter.domSelectionToView(o);if(s.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(s)||!this.domConverter.isDomSelectionCorrect(o))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(s))this.view.forceRender();else{const l={oldSelection:this.selection,newSelection:s,domSelection:o};this.document.fire("selectionChange",l),this._fireSelectionChangeDoneDebounced(l)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class FP extends Ci{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class wC{constructor(e,t={}){this._files=t.cacheFiles?vC(e):null,this._native=e}get files(){return this._files||(this._files=vC(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,o){this._native.setDragImage(e,t,o)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function vC(i){const e=Array.from(i.files||[]),t=Array.from(i.items||[]);return e.length?e:t.filter(o=>o.kind==="file").map(o=>o.getAsFile())}class VP extends Ci{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),o=this.view,s=o.document;let l=null,d=null,h=[];if(e.dataTransfer&&(l=new wC(e.dataTransfer)),e.data!==null?d=e.data:l&&(d=l.getData("text/plain")),s.selection.isFake)h=Array.from(s.selection.getRanges());else if(t.length)h=t.map(f=>{const g=o.domConverter.domPositionToView(f.startContainer,f.startOffset),b=o.domConverter.domPositionToView(f.endContainer,f.endOffset);return g?o.createRange(g,b):b?o.createRange(b):void 0}).filter(f=>!!f);else if(y.isAndroid){const f=e.target.ownerDocument.defaultView.getSelection();h=Array.from(o.domConverter.domSelectionToView(f).getRanges())}if(y.isAndroid&&e.inputType=="insertCompositionText"&&d&&d.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[o.createRange(h[0].end)]});else if(e.inputType=="insertText"&&d&&d.includes(`
`,isColorInherited:!1}),o.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],o],on:{dragstart:s.to(l=>l.preventDefault())}}]})}}function fy(i,e,t){return(o,s)=>{const l=new Fe(i);if(l.width<iO||l.height<rO)return null;let d;d=e.position==="inside"?l.bottom-s.height:l.bottom-s.height/2,d-=e.verticalOffset;const h=t(l,s),f=o.clone().moveTo(h,d).getIntersection(s.clone().moveTo(h,d)).getVisible();return!f||f.getArea()<s.getArea()?null:{top:d,left:h,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function my(i){const e=i.config.get("ui.poweredBy"),t=e&&e.position||"border";return oO({position:t,label:sO,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var cO=Object.defineProperty,gy=Object.getOwnPropertySymbols,dO=Object.prototype.hasOwnProperty,uO=Object.prototype.propertyIsEnumerable,ky=(i,e,t)=>e in i?cO(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class hO extends De(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new G3(e),this.focusTracker=new Bn,this.tooltipManager=new wh(e),this.poweredBy=new aO(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const o=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?o():this.once("ready",o)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const o=e.config.get("toolbar.viewportTopOffset");return o?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:o}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let o,s;e.keystrokes.set("Alt+F10",(l,d)=>{const h=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(h)&&!Array.from(t.domRoots.values()).includes(h)&&(o=h);const f=this._getCurrentFocusedToolbarDefinition();f&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let g=0;g<s.length;g++){const b=s.shift();if(s.push(b),b!==f&&this._focusFocusableCandidateToolbar(b)){f&&f.options.afterBlur&&f.options.afterBlur();break}}d()}),e.keystrokes.set("Esc",(l,d)=>{const h=this._getCurrentFocusedToolbarDefinition();h&&(o?(o.focus(),o=null):e.editing.view.focus(),h.options.afterBlur&&h.options.afterBlur(),d())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:o,options:s}=t;(us(o.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,o)=>by(t)-by(o)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:o}}=e;return o&&o(),!!us(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const o=((s,l)=>{for(var d in l||(l={}))dO.call(l,d)&&ky(s,d,l[d]);if(gy)for(var d of gy(l))uO.call(l,d)&&ky(s,d,l[d]);return s})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=o.top,t.viewportOffset.bottom+=o.bottom,t.viewportOffset.left+=o.left,t.viewportOffset.right+=o.right}}function by(i){const{toolbarView:e,options:t}=i;let o=10;return us(e.element)&&o--,t.isContextual&&o--,o}var wy=u(9688),pO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(wy.Z,pO),wy.Z.locals;class fO extends xe{constructor(e){super(e),this.body=new JN(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class mO extends fO{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new kA;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class gO extends xe{constructor(e,t,o){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=o,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(o){e.change(s=>{const l=e.document.getRoot(o.name);s.addClass(o.isFocused?"ck-focused":"ck-blurred",l),s.removeClass(o.isFocused?"ck-blurred":"ck-focused",l)})}e.isRenderingInProgress?function o(s){e.once("change:isRenderingInProgress",(l,d,h)=>{h?o(s):t(s)})}(this):t(this)}}class kO extends gO{constructor(e,t,o,s={}){super(e,t,o);const l=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>l("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const o=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),o)})}}var vy=u(8847),bO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(vy.Z,bO),vy.Z.locals;class ok extends Zu{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Ay extends De(){constructor(e,t){super(),t&&dC(this,t),e&&this.set(e)}}var Cy=u(4650),wO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(Cy.Z,wO),Cy.Z.locals;var _y=u(7676),vO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(_y.Z,vO),_y.Z.locals;const Ah=cc("px");class Ch extends re{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,o=t.document.selection.editableElement;return o?t.domConverter.mapViewToDom(o.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new O("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const o=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),o.set(e.view,e),this._viewToStack.set(e.view,o),o===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new O("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new O("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Ln(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new AO(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(o,s)=>!s&&o>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(o,s)=>{if(s<2)return"";const l=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[l,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new CO(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,o)=>!o&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:o=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=o,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class AO extends xe{constructor(e){super(e);const t=e.t,o=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Bn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",o.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:o.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const o=new at(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o}}class CO extends xe{constructor(e,t){super(e);const o=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",o.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:o.to("top",Ah),left:o.to("left",Ah),width:o.to("width",Ah),height:o.to("height",Ah)}},children:this.content}),this.on("change:numberOfPanels",(s,l,d,h)=>{d>h?this._addPanels(d-h):this._removePanels(h-d),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new xe;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:o,height:s}=new Fe(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:o,height:s})}}}var yy=u(5868),_O={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(yy.Z,_O),yy.Z.locals;const Da=cc("px");class yO extends xe{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Mo({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",o=>o?"block":"none"),height:t.to("isSticky",o=>o?Da(this._contentPanelRect.height):null)}}}).render(),this._contentPanel=new Mo({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",o=>o?Da(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",o=>o&&Da(o)),bottom:t.to("_stickyBottomOffset",o=>o&&Da(o)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(be.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new Fe(this.limiterElement);let t=e.getVisible();if(t){const o=new Fe(be.window);o.top+=this.viewportTopOffset,o.height-=this.viewportTopOffset,t=t.getIntersection(o)}if(t&&e.top<t.top){const o=t.top;if(o+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const s=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-s>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(s):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(o):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=Da(-be.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=Da(-be.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Fe(this._contentPanel)}}class xO extends Qu{constructor(e,t){const o=e.t,s=Object.assign({},{showResetButton:!0,showIcon:!0,creator:gh},t);super(e,s.creator),this.label=t.label,this._viewConfig=s,this._viewConfig.showIcon&&(this.iconView=new hs,this.iconView.content=ut.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new at(e),this.resetButtonView.set({label:o("Clear"),icon:ut.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",l=>!l),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class EO extends xe{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class SO extends xe{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Bn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Ai({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var xy=/[\\^$.*+?()[\]{}|]/g,DO=RegExp(xy.source);const Ey=function(i){return(i=hg(i))&&DO.test(i)?i.replace(xy,"\\$&"):i};var Sy=u(6770),TO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(Sy.Z,TO),Sy.Z.locals;var IO=Object.defineProperty,Dy=Object.getOwnPropertySymbols,MO=Object.prototype.hasOwnProperty,NO=Object.prototype.propertyIsEnumerable,Ty=(i,e,t)=>e in i?IO(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class PO extends xe{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Bn,this.keystrokes=new Io,this.resultsView=new SO(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new EO,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Ai({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(o,{resultsCount:s,totalItemsCount:l})=>{this.resultsCount=s,this.totalItemsCount=l}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(Ey(e),"ig"):null,o=this.filteredView.filter(t);this.fire("search",((s,l)=>{for(var d in l||(l={}))MO.call(l,d)&&Ty(s,d,l[d]);if(Dy)for(var d of Dy(l))NO.call(l,d)&&Ty(s,d,l[d]);return s})({query:e},o))}_createSearchTextQueryView(){const e=new xO(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function o(s,{query:l,resultsCount:d,totalItemsCount:h}){return typeof s=="function"?s(l,d,h):s}this.on("search",(s,l)=>{if(l.resultsCount)t.set({isVisible:!1});else{const d=this._config.infoView&&this._config.infoView.text;let h,f;l.totalItemsCount?d&&d.notFound?(h=d.notFound.primary,f=d.notFound.secondary):(h=e("No results found"),f=""):d&&d.noSearchableItems?(h=d.noSearchableItems.primary,f=d.noSearchableItems.secondary):(h=e("No searchable items"),f=""),t.set({primaryText:o(h,l),secondaryText:o(f,l),isVisible:!0})}})}}var Iy=u(8157),BO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(Iy.Z,BO),Iy.Z.locals;const rk=class extends PO{constructor(i,e){super(i,e),this._config=e;const t=cc("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const o=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[o.if("isVisible","ck-hidden",s=>!s),o.to("_position",s=>`ck-search__results_${s}`)],style:{width:o.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(s,l,d)=>{this._updateResultsVisibility(),d?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(s,l)=>{this.resultsView.isVisible=!1,l()}),this.listenTo(be.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(s,{value:l})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=l,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Fe(this.queryView.fieldView.element).width;const i=rk._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:rk.defaultResultsPositions});this.resultsView._position=i?i.name:"s"}_updateResultsVisibility(){const i=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=i}};let My=rk;My.defaultResultsPositions=[i=>({top:i.bottom,left:i.left,name:"s"}),(i,e)=>({top:i.top-e.height,left:i.left,name:"n"})],My._getOptimalPosition=Jm;var Ny=u(8960),OO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(Ny.Z,OO),Ny.Z.locals;var Py=u(498),RO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(Py.Z,RO),Py.Z.locals;var By=u(9695),LO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(By.Z,LO),By.Z.locals;class jO extends hO{constructor(e,t){super(e),this.view=t,this._toolbarConfig=yA(e.config.get("toolbar")),this._elementReplacer=new Qo,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,o=this.view,s=t.editing.view,l=o.editable,d=s.document.getRoot();l.name=d.rootName,o.render();const h=l.element;this.setEditableElement(l.name,h),o.editable.bind("isFocused").to(this.focusTracker),s.attachDomRoot(h),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,o=t.document.getRoot(),s=e.sourceElement;let l;const d=e.config.get("placeholder");d&&(l=typeof d=="string"?d:d[this.view.editable.name]),!l&&s&&s.tagName.toLowerCase()==="textarea"&&(l=s.getAttribute("placeholder")),l&&(o.placeholder=l),NA({view:t,element:o,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,o){const s=this.view.stickyPanel;if(s.isSticky){const l=new Fe(s.element).height;t.viewportOffset.top+=l}else{const l=()=>{this.editor.editing.view.scrollToTheSelection(o)};this.listenTo(s,"change:isSticky",l),setTimeout(()=>{this.stopListening(s,"change:isSticky",l)},20)}}}var Oy=u(3143),zO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};de()(Oy.Z,zO),Oy.Z.locals;class FO extends mO{constructor(e,t,o={}){super(e),this.stickyPanel=new yO(e),this.toolbar=new $g(e,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new kO(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Ry{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const o="error"in t?t.error:t.reason;o instanceof Error&&this._handleError(o,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(o=>o!==t)}_fire(e,...t){const o=this._listeners[e]||[];for(const s of o)s.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const o=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:o}),o?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function ik(i,e=new Set){const t=[i],o=new Set;let s=0;for(;t.length>s;){const l=t[s++];if(!o.has(l)&&VO(l)&&!e.has(l))if(o.add(l),Symbol.iterator in l)try{for(const d of l)t.push(d)}catch{}else for(const d in l)d!=="defaultValue"&&t.push(l[d])}return o}function VO(i){const e=Object.prototype.toString.call(i),t=typeof i;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function Ly(i,e,t=new Set){if(i===e&&typeof(o=i)=="object"&&o!==null)return!0;var o;const s=ik(i,t),l=ik(e,t);for(const d of s)if(l.has(d))return!0;return!1}var UO=Object.defineProperty,HO=Object.defineProperties,$O=Object.getOwnPropertyDescriptors,_h=Object.getOwnPropertySymbols,jy=Object.prototype.hasOwnProperty,zy=Object.prototype.propertyIsEnumerable,Fy=(i,e,t)=>e in i?UO(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,sk=(i,e)=>{for(var t in e||(e={}))jy.call(e,t)&&Fy(i,t,e[t]);if(_h)for(var t of _h(e))zy.call(e,t)&&Fy(i,t,e[t]);return i};class Vy extends Ry{constructor(e,t={}){super(t),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=vh(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(o,s)=>e.create(o,s)),this._destructor=o=>o.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],o=this._config.rootsAttributes||{},s={};for(const[f,g]of Object.entries(this._data.roots))g.isLoaded?(e[f]="",s[f]=o[f]||{}):t.push(f);const l=(d=sk({},this._config),h={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:s,_watchdogInitialData:this._data},HO(d,$O(h)));var d,h;return delete l.initialData,l.extraPlugins.push(WO),this._initUsingData?this.create(e,l,l.context):tn(this._elementOrData)?this.create(this._elementOrData,l,l.context):this.create(this._editables,l,l.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,o){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=o,this._creator(e,this._config))).then(s=>{this._editor=s,s.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=s.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(h=>h.isAttached()&&h.rootName!="$graveyard"),{plugins:o}=e,s=o.has("CommentsRepository")&&o.get("CommentsRepository"),l=o.has("TrackChanges")&&o.get("TrackChanges"),d={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(h=>{d.roots[h.rootName]={content:JSON.stringify(Array.from(h.getChildren())),attributes:JSON.stringify(Array.from(h.getAttributes())),isLoaded:h._isLoaded}});for(const h of e.model.markers)h._affectsData&&(d.markers[h.name]={rangeJSON:h.getRange().toJSON(),usingOperation:h._managedUsingOperations,affectsData:h._affectsData});return s&&(d.commentThreads=JSON.stringify(s.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),l&&(d.suggestions=JSON.stringify(l.getSuggestions({toJSON:!0,skipNotAttached:!0}))),d}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const o=this.editor.ui.getEditableElement(t);o&&(e[t]=o)}return e}_isErrorComingFromThisItem(e){return Ly(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return en(e,(t,o)=>tn(t)||o==="context"?t:void 0)}}class WO{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const o=e.createElement(t.name,t.attributes);if(t.children)for(const s of t.children)o._appendChild(this._createNode(e,s));return o}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([o,{content:s,attributes:l}])=>{const d=JSON.parse(s),h=JSON.parse(l),f=t.model.document.getRoot(o);for(const[g,b]of h)e.setAttribute(g,b,f);for(const g of d){const b=this._createNode(e,g);e.insert(b,f,"end")}}),Object.entries(this._data.markers).forEach(([o,s])=>{const{document:l}=t.model,d=s,{rangeJSON:{start:h,end:f}}=d,g=((M,P)=>{var z={};for(var U in M)jy.call(M,U)&&P.indexOf(U)<0&&(z[U]=M[U]);if(M!=null&&_h)for(var U of _h(M))P.indexOf(U)<0&&zy.call(M,U)&&(z[U]=M[U]);return z})(d,["rangeJSON"]),b=l.getRoot(h.root),v=e.createPositionFromPath(b,h.path,h.stickiness),C=e.createPositionFromPath(b,f.path,f.stickiness),D=e.createRange(v,C);e.addMarker(o,sk({range:D},g))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(o=>{const s=this.editor.config.get("collaboration.channelId"),l=this.editor.plugins.get("CommentsRepository");l.hasCommentThread(o.threadId)&&l.getCommentThread(o.threadId).remove(),l.addCommentThread(sk({channelId:s},o))}),t.forEach(o=>{const s=this.editor.plugins.get("TrackChangesEditing");s.hasSuggestion(o.id)?s.getSuggestion(o.id).attributes=o.attributes:s.addSuggestionData(o)})}}const Tc=Symbol("MainQueueId");class qO{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const o=e===Tc;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const s=(o?Promise.all(this._queues.values()):Promise.all([this._queues.get(Tc),this._queues.get(e)])).then(t),l=s.catch(()=>{});return this._queues.set(e,l),s.finally(()=>{this._activeActions--,this._queues.get(e)===l&&this._activeActions===0&&this._onEmptyCallbacks.forEach(d=>d())})}}function Uy(i){return Array.isArray(i)?i:[i]}class yh extends fh(Hg(x3)){constructor(e,t={}){if(!xh(e)&&t.initialData!==void 0)throw new O("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(l){return xh(l)?(d=l,d instanceof HTMLTextAreaElement?d.value:d.innerHTML):l;var d}(e)),xh(e)&&(this.sourceElement=e),this.model.document.createRoot();const o=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new FO(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:o});this.ui=new jO(this,s),function(l){if(!Xo(l.updateSourceElement))throw new O("attachtoform-missing-elementapi-interface",l);const d=l.sourceElement;if(function(h){return!!h&&h.tagName.toLowerCase()==="textarea"}(d)&&d.form){let h;const f=d.form,g=()=>l.updateSourceElement();Xo(f.submit)&&(h=f.submit,f.submit=()=>{g(),h.apply(f)}),f.addEventListener("submit",g),l.on("destroy",()=>{f.removeEventListener("submit",g),h&&(f.submit=h)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(o=>{const s=new this(e,t);o(s.initPlugins().then(()=>s.ui.init(xh(e)?e:null)).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function xh(i){return tn(i)}yh.Context=TA,yh.EditorWatchdog=Vy,yh.ContextWatchdog=class extends Ry{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new qO,this._watchdogConfig=e,this._creator=t=>i.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(Tc,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=Uy(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let o;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return o=new Vy(null,this._watchdogConfig),o.setCreator(t.creator),o._setExcludedProperties(this._contextProps),t.destructor&&o.setDestructor(t.destructor),this._watchdogs.set(t.id,o),o.on("error",(s,{error:l,causesRestart:d})=>{this._fire("itemError",{itemId:t.id,error:l}),d&&this._actionQueues.enqueue(t.id,()=>new Promise(h=>{const f=()=>{o.off("restart",f),this._fire("itemRestart",{itemId:t.id}),h()};o.on("restart",f)}))}),o.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(i){const e=Uy(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const o=this._getWatchdog(t);return this._watchdogs.delete(t),o.destroy()})))}destroy(){return this._actionQueues.enqueue(Tc,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Tc,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=ik(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return Ly(this._context,i.context)}};class Ic extends Ci{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function o(s){return(l,d)=>{d.preventDefault();const h=d.dropRange?[d.dropRange]:null,f=new T(t,s);t.fire(f,{dataTransfer:d.dataTransfer,method:l.name,targetRanges:h,target:d.target,domEvent:d.domEvent}),f.stop.called&&d.stopPropagation()}}this.listenTo(t,"paste",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",o("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,o=e.type=="drop"||e.type=="paste",s={dataTransfer:new wC(t,{cacheFiles:o})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(l,d){const h=d.target.ownerDocument,f=d.clientX,g=d.clientY;let b;return h.caretRangeFromPoint&&h.caretRangeFromPoint(f,g)?b=h.caretRangeFromPoint(f,g):d.rangeParent&&(b=h.createRange(),b.setStart(d.rangeParent,d.rangeOffset),b.collapse(!0)),b?l.domConverter.domRangeToView(b):null}(this.view,e)),this.fire(e.type,e,s)}}const Hy=["figcaption","li"];function $y(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const o of i.getChildren()){const s=$y(o);t&&(t.is("containerElement")||o.is("containerElement"))&&(Hy.includes(t.name)||Hy.includes(o.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */hf.exports;(function(n,r){(function(a,c){n.exports=c(V)})(self,a=>(()=>{var c={703:(w,k,_)=>{var x=_(414);function y(){}function A(){}A.resetWarningCache=y,w.exports=function(){function S(F,R,T,B,H,q){if(q!==x){var Y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Y.name="Invariant Violation",Y}}function I(){return S}S.isRequired=S;var N={array:S,bigint:S,bool:S,func:S,number:S,object:S,string:S,symbol:S,any:S,arrayOf:I,element:S,elementType:S,instanceOf:I,node:S,objectOf:I,oneOf:I,oneOfType:I,shape:I,exact:I,checkPropTypes:A,resetWarningCache:y};return N.PropTypes=N,N}},697:(w,k,_)=>{w.exports=_(703)()},414:w=>{w.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:w=>{w.exports=a}},u={};function p(w){var k=u[w];if(k!==void 0)return k.exports;var _=u[w]={exports:{}};return c[w](_,_.exports,p),_.exports}p.n=w=>{var k=w&&w.__esModule?()=>w.default:()=>w;return p.d(k,{a:k}),k},p.d=(w,k)=>{for(var _ in k)p.o(k,_)&&!p.o(w,_)&&Object.defineProperty(w,_,{enumerable:!0,get:k[_]})},p.o=(w,k)=>Object.prototype.hasOwnProperty.call(w,k),p.r=w=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(w,"__esModule",{value:!0})};var m={};return(()=>{p.r(m),p.d(m,{CKEditor:()=>bi,CKEditorContext:()=>sc});var w=p(787),k=p.n(w),_=p(697),x=p.n(_);const y=new Array(256).fill("").map((L,j)=>("0"+j.toString(16)).slice(-2));class A{constructor(j){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof j.crashNumberLimit=="number"?j.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof j.minimumNonErrorTimePeriod=="number"?j.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=W=>{const Q="error"in W?W.error:W.reason;Q instanceof Error&&this._handleError(Q,W)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(j,W){this._listeners[j]||(this._listeners[j]=[]),this._listeners[j].push(W)}off(j,W){this._listeners[j]=this._listeners[j].filter(Q=>Q!==W)}_fire(j,...W){const Q=this._listeners[j]||[];for(const he of Q)he.apply(this,[null,...W])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(j,W){if(this._shouldReactToError(j)){this.crashes.push({message:j.message,stack:j.stack,filename:W instanceof ErrorEvent?W.filename:void 0,lineno:W instanceof ErrorEvent?W.lineno:void 0,colno:W instanceof ErrorEvent?W.colno:void 0,date:this._now()});const Q=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:j,causesRestart:Q}),Q?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(j){return j.is&&j.is("CKEditorError")&&j.context!==void 0&&j.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(j)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function S(L,j=new Set){const W=[L],Q=new Set;let he=0;for(;W.length>he;){const Ae=W[he++];if(!Q.has(Ae)&&I(Ae)&&!j.has(Ae))if(Q.add(Ae),Symbol.iterator in Ae)try{for(const ye of Ae)W.push(ye)}catch{}else for(const ye in Ae)ye!=="defaultValue"&&W.push(Ae[ye])}return Q}function I(L){const j=Object.prototype.toString.call(L),W=typeof L;return!(W==="number"||W==="boolean"||W==="string"||W==="symbol"||W==="function"||j==="[object Date]"||j==="[object RegExp]"||j==="[object Module]"||L==null||L._watchdogExcluded||L instanceof EventTarget||L instanceof Event)}function N(L,j,W=new Set){if(L===j&&typeof(Q=L)=="object"&&Q!==null)return!0;var Q;const he=S(L,W),Ae=S(j,W);for(const ye of he)if(Ae.has(ye))return!0;return!1}const F=function(L){var j=typeof L;return L!=null&&(j=="object"||j=="function")},R=typeof Ar=="object"&&Ar&&Ar.Object===Object&&Ar;var T=typeof self=="object"&&self&&self.Object===Object&&self;const B=R||T||Function("return this")(),H=function(){return B.Date.now()};var q=/\s/;const Y=function(L){for(var j=L.length;j--&&q.test(L.charAt(j)););return j};var K=/^\s+/;const O=function(L){return L&&L.slice(0,Y(L)+1).replace(K,"")},te=B.Symbol;var $=Object.prototype,X=$.hasOwnProperty,pe=$.toString,fe=te?te.toStringTag:void 0;const Ge=function(L){var j=X.call(L,fe),W=L[fe];try{L[fe]=void 0;var Q=!0}catch{}var he=pe.call(L);return Q&&(j?L[fe]=W:delete L[fe]),he};var ze=Object.prototype.toString;const me=function(L){return ze.call(L)};var _e=te?te.toStringTag:void 0;const se=function(L){return L==null?L===void 0?"[object Undefined]":"[object Null]":_e&&_e in Object(L)?Ge(L):me(L)},ee=function(L){return L!=null&&typeof L=="object"},ke=function(L){return typeof L=="symbol"||ee(L)&&se(L)=="[object Symbol]"};var Se=/^[-+]0x[0-9a-f]+$/i,Ke=/^0b[01]+$/i,cn=/^0o[0-7]+$/i,dn=parseInt;const Eo=function(L){if(typeof L=="number")return L;if(ke(L))return NaN;if(F(L)){var j=typeof L.valueOf=="function"?L.valueOf():L;L=F(j)?j+"":j}if(typeof L!="string")return L===0?L:+L;L=O(L);var W=Ke.test(L);return W||cn.test(L)?dn(L.slice(2),W?2:8):Se.test(L)?NaN:+L};var vn=Math.max,Oe=Math.min;const si=function(L,j,W){var Q,he,Ae,ye,Ee,mt,dt=0,ba=!1,rr=!1,po=!0;if(typeof L!="function")throw new TypeError("Expected a function");function Lr(en){var tn=Q,sr=he;return Q=he=void 0,dt=en,ye=L.apply(sr,tn)}function wi(en){var tn=en-mt;return mt===void 0||tn>=j||tn<0||rr&&en-dt>=Ae}function ir(){var en=H();if(wi(en))return Ie(en);Ee=setTimeout(ir,function(tn){var sr=j-(tn-mt);return rr?Oe(sr,Ae-(tn-dt)):sr}(en))}function Ie(en){return Ee=void 0,po&&Q?Lr(en):(Q=he=void 0,ye)}function Pn(){var en=H(),tn=wi(en);if(Q=arguments,he=this,mt=en,tn){if(Ee===void 0)return function(sr){return dt=sr,Ee=setTimeout(ir,j),ba?Lr(sr):ye}(mt);if(rr)return clearTimeout(Ee),Ee=setTimeout(ir,j),Lr(mt)}return Ee===void 0&&(Ee=setTimeout(ir,j)),ye}return j=Eo(j)||0,F(W)&&(ba=!!W.leading,Ae=(rr="maxWait"in W)?vn(Eo(W.maxWait)||0,j):Ae,po="trailing"in W?!!W.trailing:po),Pn.cancel=function(){Ee!==void 0&&clearTimeout(Ee),dt=0,Q=mt=he=Ee=void 0},Pn.flush=function(){return Ee===void 0?ye:Ie(H())},Pn},ai=function(L,j,W){var Q=!0,he=!0;if(typeof L!="function")throw new TypeError("Expected a function");return F(W)&&(Q="leading"in W?!!W.leading:Q,he="trailing"in W?!!W.trailing:he),si(L,j,{leading:Q,maxWait:j,trailing:he})},li=function(){this.__data__=[],this.size=0},So=function(L,j){return L===j||L!=L&&j!=j},Ko=function(L,j){for(var W=L.length;W--;)if(So(L[W][0],j))return W;return-1};var Yo=Array.prototype.splice;const De=function(L){var j=this.__data__,W=Ko(j,L);return!(W<0)&&(W==j.length-1?j.pop():Yo.call(j,W,1),--this.size,!0)},nt=function(L){var j=this.__data__,W=Ko(j,L);return W<0?void 0:j[W][1]},Nt=function(L){return Ko(this.__data__,L)>-1},An=function(L,j){var W=this.__data__,Q=Ko(W,L);return Q<0?(++this.size,W.push([L,j])):W[Q][1]=j,this};function In(L){var j=-1,W=L==null?0:L.length;for(this.clear();++j<W;){var Q=L[j];this.set(Q[0],Q[1])}}In.prototype.clear=li,In.prototype.delete=De,In.prototype.get=nt,In.prototype.has=Nt,In.prototype.set=An;const Mn=In,Qo=function(){this.__data__=new Mn,this.size=0},Cn=function(L){var j=this.__data__,W=j.delete(L);return this.size=j.size,W},ct=function(L){return this.__data__.get(L)},Wt=function(L){return this.__data__.has(L)},Pl=function(L){if(!F(L))return!1;var j=se(L);return j=="[object Function]"||j=="[object GeneratorFunction]"||j=="[object AsyncFunction]"||j=="[object Proxy]"},Bl=B["__core-js_shared__"];var Nn=function(){var L=/[^.]+$/.exec(Bl&&Bl.keys&&Bl.keys.IE_PROTO||"");return L?"Symbol(src)_1."+L:""}();const uo=function(L){return!!Nn&&Nn in L};var ou=Function.prototype.toString;const Pr=function(L){if(L!=null){try{return ou.call(L)}catch{}try{return L+""}catch{}}return""};var um=/^\[object .+?Constructor\]$/,ss=Function.prototype,hm=Object.prototype,pm=ss.toString,fm=hm.hasOwnProperty,ru=RegExp("^"+pm.call(fm).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Zo=function(L){return!(!F(L)||uo(L))&&(Pl(L)?ru:um).test(Pr(L))},Xt=function(L,j){return L==null?void 0:L[j]},Rt=function(L,j){var W=Xt(L,j);return Zo(W)?W:void 0},ci=Rt(B,"Map"),Jo=Rt(Object,"create"),iu=function(){this.__data__=Jo?Jo(null):{},this.size=0},Ol=function(L){var j=this.has(L)&&delete this.__data__[L];return this.size-=j?1:0,j};var mm=Object.prototype.hasOwnProperty;const gm=function(L){var j=this.__data__;if(Jo){var W=j[L];return W==="__lodash_hash_undefined__"?void 0:W}return mm.call(j,L)?j[L]:void 0};var su=Object.prototype.hasOwnProperty;const km=function(L){var j=this.__data__;return Jo?j[L]!==void 0:su.call(j,L)},bm=function(L,j){var W=this.__data__;return this.size+=this.has(L)?0:1,W[L]=Jo&&j===void 0?"__lodash_hash_undefined__":j,this};function Lt(L){var j=-1,W=L==null?0:L.length;for(this.clear();++j<W;){var Q=L[j];this.set(Q[0],Q[1])}}Lt.prototype.clear=iu,Lt.prototype.delete=Ol,Lt.prototype.get=gm,Lt.prototype.has=km,Lt.prototype.set=bm;const au=Lt,as=function(){this.size=0,this.__data__={hash:new au,map:new(ci||Mn),string:new au}},ea=function(L){var j=typeof L;return j=="string"||j=="number"||j=="symbol"||j=="boolean"?L!=="__proto__":L===null},ta=function(L,j){var W=L.__data__;return ea(j)?W[typeof j=="string"?"string":"hash"]:W.map},wm=function(L){var j=ta(this,L).delete(L);return this.size-=j?1:0,j},vm=function(L){return ta(this,L).get(L)},Am=function(L){return ta(this,L).has(L)},Cm=function(L,j){var W=ta(this,L),Q=W.size;return W.set(L,j),this.size+=W.size==Q?0:1,this};function Gn(L){var j=-1,W=L==null?0:L.length;for(this.clear();++j<W;){var Q=L[j];this.set(Q[0],Q[1])}}Gn.prototype.clear=as,Gn.prototype.delete=wm,Gn.prototype.get=vm,Gn.prototype.has=Am,Gn.prototype.set=Cm;const na=Gn,_m=function(L,j){var W=this.__data__;if(W instanceof Mn){var Q=W.__data__;if(!ci||Q.length<199)return Q.push([L,j]),this.size=++W.size,this;W=this.__data__=new na(Q)}return W.set(L,j),this.size=W.size,this};function di(L){var j=this.__data__=new Mn(L);this.size=j.size}di.prototype.clear=Qo,di.prototype.delete=Cn,di.prototype.get=ct,di.prototype.has=Wt,di.prototype.set=_m;const ym=di,xm=function(L,j){for(var W=-1,Q=L==null?0:L.length;++W<Q&&j(L[W],W,L)!==!1;);return L},Xo=function(){try{var L=Rt(Object,"defineProperty");return L({},"",{}),L}catch{}}(),oa=function(L,j,W){j=="__proto__"&&Xo?Xo(L,j,{configurable:!0,enumerable:!0,value:W,writable:!0}):L[j]=W};var lu=Object.prototype.hasOwnProperty;const cu=function(L,j,W){var Q=L[j];lu.call(L,j)&&So(Q,W)&&(W!==void 0||j in L)||oa(L,j,W)},ra=function(L,j,W,Q){var he=!W;W||(W={});for(var Ae=-1,ye=j.length;++Ae<ye;){var Ee=j[Ae],mt=Q?Q(W[Ee],L[Ee],Ee,W,L):void 0;mt===void 0&&(mt=L[Ee]),he?oa(W,Ee,mt):cu(W,Ee,mt)}return W},Br=function(L,j){for(var W=-1,Q=Array(L);++W<L;)Q[W]=j(W);return Q},du=function(L){return ee(L)&&se(L)=="[object Arguments]"};var uu=Object.prototype,Em=uu.hasOwnProperty,Sm=uu.propertyIsEnumerable;const Dm=du(function(){return arguments}())?du:function(L){return ee(L)&&Em.call(L,"callee")&&!Sm.call(L,"callee")},Rl=Array.isArray,Tm=function(){return!1};var hu=r&&!r.nodeType&&r,er=hu&&!0&&n&&!n.nodeType&&n,ui=er&&er.exports===hu?B.Buffer:void 0;const hi=(ui?ui.isBuffer:void 0)||Tm;var Im=/^(?:0|[1-9]\d*)$/;const Mm=function(L,j){var W=typeof L;return!!(j=j??9007199254740991)&&(W=="number"||W!="symbol"&&Im.test(L))&&L>-1&&L%1==0&&L<j},pu=function(L){return typeof L=="number"&&L>-1&&L%1==0&&L<=9007199254740991};var st={};st["[object Float32Array]"]=st["[object Float64Array]"]=st["[object Int8Array]"]=st["[object Int16Array]"]=st["[object Int32Array]"]=st["[object Uint8Array]"]=st["[object Uint8ClampedArray]"]=st["[object Uint16Array]"]=st["[object Uint32Array]"]=!0,st["[object Arguments]"]=st["[object Array]"]=st["[object ArrayBuffer]"]=st["[object Boolean]"]=st["[object DataView]"]=st["[object Date]"]=st["[object Error]"]=st["[object Function]"]=st["[object Map]"]=st["[object Number]"]=st["[object Object]"]=st["[object RegExp]"]=st["[object Set]"]=st["[object String]"]=st["[object WeakMap]"]=!1;const Nm=function(L){return ee(L)&&pu(L.length)&&!!st[se(L)]},Ll=function(L){return function(j){return L(j)}};var fu=r&&!r.nodeType&&r,ho=fu&&!0&&n&&!n.nodeType&&n,ia=ho&&ho.exports===fu&&R.process;const pi=function(){try{var L=ho&&ho.require&&ho.require("util").types;return L||ia&&ia.binding&&ia.binding("util")}catch{}}();var mu=pi&&pi.isTypedArray;const sa=mu?Ll(mu):Nm;var Pm=Object.prototype.hasOwnProperty;const gu=function(L,j){var W=Rl(L),Q=!W&&Dm(L),he=!W&&!Q&&hi(L),Ae=!W&&!Q&&!he&&sa(L),ye=W||Q||he||Ae,Ee=ye?Br(L.length,String):[],mt=Ee.length;for(var dt in L)!j&&!Pm.call(L,dt)||ye&&(dt=="length"||he&&(dt=="offset"||dt=="parent")||Ae&&(dt=="buffer"||dt=="byteLength"||dt=="byteOffset")||Mm(dt,mt))||Ee.push(dt);return Ee};var Bm=Object.prototype;const jl=function(L){var j=L&&L.constructor;return L===(typeof j=="function"&&j.prototype||Bm)},Or=function(L,j){return function(W){return L(j(W))}},aa=Or(Object.keys,Object);var Om=Object.prototype.hasOwnProperty;const fi=function(L){if(!jl(L))return aa(L);var j=[];for(var W in Object(L))Om.call(L,W)&&W!="constructor"&&j.push(W);return j},mi=function(L){return L!=null&&pu(L.length)&&!Pl(L)},zl=function(L){return mi(L)?gu(L):fi(L)},la=function(L,j){return L&&ra(j,zl(j),L)},Fl=function(L){var j=[];if(L!=null)for(var W in Object(L))j.push(W);return j};var Rm=Object.prototype.hasOwnProperty;const Vl=function(L){if(!F(L))return Fl(L);var j=jl(L),W=[];for(var Q in L)(Q!="constructor"||!j&&Rm.call(L,Q))&&W.push(Q);return W},tr=function(L){return mi(L)?gu(L,!0):Vl(L)},Lm=function(L,j){return L&&ra(j,tr(j),L)};var Ul=r&&!r.nodeType&&r,Hl=Ul&&!0&&n&&!n.nodeType&&n,ku=Hl&&Hl.exports===Ul?B.Buffer:void 0,bu=ku?ku.allocUnsafe:void 0;const $l=function(L,j){if(j)return L.slice();var W=L.length,Q=bu?bu(W):new L.constructor(W);return L.copy(Q),Q},jm=function(L,j){var W=-1,Q=L.length;for(j||(j=Array(Q));++W<Q;)j[W]=L[W];return j},wu=function(L,j){for(var W=-1,Q=L==null?0:L.length,he=0,Ae=[];++W<Q;){var ye=L[W];j(ye,W,L)&&(Ae[he++]=ye)}return Ae},Wl=function(){return[]};var vu=Object.prototype.propertyIsEnumerable,gi=Object.getOwnPropertySymbols;const ql=gi?function(L){return L==null?[]:(L=Object(L),wu(gi(L),function(j){return vu.call(L,j)}))}:Wl,Gl=function(L,j){return ra(L,ql(L),j)},Kl=function(L,j){for(var W=-1,Q=j.length,he=L.length;++W<Q;)L[he+W]=j[W];return L},Qe=Or(Object.getPrototypeOf,Object),Au=Object.getOwnPropertySymbols?function(L){for(var j=[];L;)Kl(j,ql(L)),L=Qe(L);return j}:Wl,Yl=function(L,j){return ra(L,Au(L),j)},Ql=function(L,j,W){var Q=j(L);return Rl(L)?Q:Kl(Q,W(L))},ls=function(L){return Ql(L,zl,ql)},Zl=function(L){return Ql(L,tr,Au)},nr=Rt(B,"DataView"),ca=Rt(B,"Promise"),cs=Rt(B,"Set"),Jl=Rt(B,"WeakMap");var Xl="[object Map]",Cu="[object Promise]",da="[object Set]",_u="[object WeakMap]",yu="[object DataView]",zm=Pr(nr),ua=Pr(ci),ec=Pr(ca),Fm=Pr(cs),Vm=Pr(Jl),Rr=se;(nr&&Rr(new nr(new ArrayBuffer(1)))!=yu||ci&&Rr(new ci)!=Xl||ca&&Rr(ca.resolve())!=Cu||cs&&Rr(new cs)!=da||Jl&&Rr(new Jl)!=_u)&&(Rr=function(L){var j=se(L),W=j=="[object Object]"?L.constructor:void 0,Q=W?Pr(W):"";if(Q)switch(Q){case zm:return yu;case ua:return Xl;case ec:return Cu;case Fm:return da;case Vm:return _u}return j});const tc=Rr;var ki=Object.prototype.hasOwnProperty;const Um=function(L){var j=L.length,W=new L.constructor(j);return j&&typeof L[0]=="string"&&ki.call(L,"index")&&(W.index=L.index,W.input=L.input),W},nc=B.Uint8Array,ha=function(L){var j=new L.constructor(L.byteLength);return new nc(j).set(new nc(L)),j},xu=function(L,j){var W=j?ha(L.buffer):L.buffer;return new L.constructor(W,L.byteOffset,L.byteLength)};var Eu=/\w*$/;const Su=function(L){var j=new L.constructor(L.source,Eu.exec(L));return j.lastIndex=L.lastIndex,j};var oc=te?te.prototype:void 0,Du=oc?oc.valueOf:void 0;const Tu=function(L){return Du?Object(Du.call(L)):{}},Hm=function(L,j){var W=j?ha(L.buffer):L.buffer;return new L.constructor(W,L.byteOffset,L.length)},Iu=function(L,j,W){var Q=L.constructor;switch(j){case"[object ArrayBuffer]":return ha(L);case"[object Boolean]":case"[object Date]":return new Q(+L);case"[object DataView]":return xu(L,W);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Hm(L,W);case"[object Map]":case"[object Set]":return new Q;case"[object Number]":case"[object String]":return new Q(L);case"[object RegExp]":return Su(L);case"[object Symbol]":return Tu(L)}};var pa=Object.create;const $m=function(){function L(){}return function(j){if(!F(j))return{};if(pa)return pa(j);L.prototype=j;var W=new L;return L.prototype=void 0,W}}(),Mu=function(L){return typeof L.constructor!="function"||jl(L)?{}:$m(Qe(L))},Nu=function(L){return ee(L)&&tc(L)=="[object Map]"};var Pu=pi&&pi.isMap;const Bu=Pu?Ll(Pu):Nu,rc=function(L){return ee(L)&&tc(L)=="[object Set]"};var Ou=pi&&pi.isSet;const ic=Ou?Ll(Ou):rc;var fa="[object Arguments]",ma="[object Function]",ga="[object Object]",Ze={};Ze[fa]=Ze["[object Array]"]=Ze["[object ArrayBuffer]"]=Ze["[object DataView]"]=Ze["[object Boolean]"]=Ze["[object Date]"]=Ze["[object Float32Array]"]=Ze["[object Float64Array]"]=Ze["[object Int8Array]"]=Ze["[object Int16Array]"]=Ze["[object Int32Array]"]=Ze["[object Map]"]=Ze["[object Number]"]=Ze[ga]=Ze["[object RegExp]"]=Ze["[object Set]"]=Ze["[object String]"]=Ze["[object Symbol]"]=Ze["[object Uint8Array]"]=Ze["[object Uint8ClampedArray]"]=Ze["[object Uint16Array]"]=Ze["[object Uint32Array]"]=!0,Ze["[object Error]"]=Ze[ma]=Ze["[object WeakMap]"]=!1;const Ru=function L(j,W,Q,he,Ae,ye){var Ee,mt=1&W,dt=2&W,ba=4&W;if(Q&&(Ee=Ae?Q(j,he,Ae,ye):Q(j)),Ee!==void 0)return Ee;if(!F(j))return j;var rr=Rl(j);if(rr){if(Ee=Um(j),!mt)return jm(j,Ee)}else{var po=tc(j),Lr=po==ma||po=="[object GeneratorFunction]";if(hi(j))return $l(j,mt);if(po==ga||po==fa||Lr&&!Ae){if(Ee=dt||Lr?{}:Mu(j),!mt)return dt?Yl(j,Lm(Ee,j)):Gl(j,la(Ee,j))}else{if(!Ze[po])return Ae?j:{};Ee=Iu(j,po,mt)}}ye||(ye=new ym);var wi=ye.get(j);if(wi)return wi;ye.set(j,Ee),ic(j)?j.forEach(function(Ie){Ee.add(L(Ie,W,Q,Ie,j,ye))}):Bu(j)&&j.forEach(function(Ie,Pn){Ee.set(Pn,L(Ie,W,Q,Pn,j,ye))});var ir=rr?void 0:(ba?dt?Zl:ls:dt?tr:zl)(j);return xm(ir||j,function(Ie,Pn){ir&&(Ie=j[Pn=Ie]),cu(Ee,Pn,L(Ie,W,Q,Pn,j,ye))}),Ee},Lu=function(L,j){return Ru(L,5,j=typeof j=="function"?j:void 0)};var ju=Function.prototype,zu=Object.prototype,Fu=ju.toString,Wm=zu.hasOwnProperty,qm=Fu.call(Object);const Gm=function(L){if(!ee(L)||se(L)!="[object Object]")return!1;var j=Qe(L);if(j===null)return!0;var W=Wm.call(j,"constructor")&&j.constructor;return typeof W=="function"&&W instanceof W&&Fu.call(W)==qm},Km=function(L){return ee(L)&&L.nodeType===1&&!Gm(L)};class or extends A{constructor(j,W={}){super(W),this._editor=null,this._throttledSave=ai(this._save.bind(this),typeof W.saveInterval=="number"?W.saveInterval:5e3),j&&(this._creator=(Q,he)=>j.create(Q,he)),this._destructor=Q=>Q.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(j){this._creator=j}setDestructor(j){this._destructor=j}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(j=>{console.error("An error happened during the editor destroying.",j)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const j=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,j,j.context)}}).then(()=>{this._fire("restart")})}create(j=this._elementOrData,W=this._config,Q){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=j,this._config=this._cloneEditorConfiguration(W)||{},this._config.context=Q,this._creator(j,this._config))).then(he=>{this._editor=he,he.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=he.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const j=this._editor;return this._editor=null,j.model.document.off("change:data",this._throttledSave),this._destructor(j)})}_save(){const j=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=j}catch(W){console.error(W,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(j){this._excludedProps=j}_getData(){const j={};for(const W of this._editor.model.document.getRootNames())j[W]=this._editor.data.get({rootName:W});return j}_isErrorComingFromThisItem(j){return N(this._editor,j.context,this._excludedProps)}_cloneEditorConfiguration(j){return Lu(j,(W,Q)=>Km(W)||Q==="context"?W:void 0)}}const Do=Symbol("MainQueueId");class Vu extends A{constructor(j,W={}){super(W),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Ym,this._watchdogConfig=W,this._creator=Q=>j.create(Q),this._destructor=Q=>Q.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(j){this._creator=j}setDestructor(j){this._destructor=j}get context(){return this._context}create(j={}){return this._actionQueues.enqueue(Do,()=>(this._contextConfig=j,this._create()))}getItem(j){return this._getWatchdog(j)._item}getItemState(j){return this._getWatchdog(j).state}add(j){const W=ds(j);return Promise.all(W.map(Q=>this._actionQueues.enqueue(Q.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let he;if(this._watchdogs.has(Q.id))throw new Error(`Item with the given id is already added: '${Q.id}'.`);if(Q.type==="editor")return he=new or(null,this._watchdogConfig),he.setCreator(Q.creator),he._setExcludedProperties(this._contextProps),Q.destructor&&he.setDestructor(Q.destructor),this._watchdogs.set(Q.id,he),he.on("error",(Ae,{error:ye,causesRestart:Ee})=>{this._fire("itemError",{itemId:Q.id,error:ye}),Ee&&this._actionQueues.enqueue(Q.id,()=>new Promise(mt=>{const dt=()=>{he.off("restart",dt),this._fire("itemRestart",{itemId:Q.id}),mt()};he.on("restart",dt)}))}),he.create(Q.sourceElementOrData,Q.config,this._context);throw new Error(`Not supported item type: '${Q.type}'.`)})))}remove(j){const W=ds(j);return Promise.all(W.map(Q=>this._actionQueues.enqueue(Q,()=>{const he=this._getWatchdog(Q);return this._watchdogs.delete(Q),he.destroy()})))}destroy(){return this._actionQueues.enqueue(Do,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Do,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(j=>{console.error("An error happened during destroying the context or items.",j)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(j=>(this._context=j,this._contextProps=S(this._context),Promise.all(Array.from(this._watchdogs.values()).map(W=>(W._setExcludedProperties(this._contextProps),W.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const j=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(W=>W.destroy())).then(()=>this._destructor(j))})}_getWatchdog(j){const W=this._watchdogs.get(j);if(!W)throw new Error(`Item with the given id was not registered: ${j}.`);return W}_isErrorComingFromThisItem(j){for(const W of this._watchdogs.values())if(W._isErrorComingFromThisItem(j))return!1;return N(this._context,j.context)}}class Ym{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(j){this._onEmptyCallbacks.push(j)}enqueue(j,W){const Q=j===Do;this._activeActions++,this._queues.get(j)||this._queues.set(j,Promise.resolve());const he=(Q?Promise.all(this._queues.values()):Promise.all([this._queues.get(Do),this._queues.get(j)])).then(W),Ae=he.catch(()=>{});return this._queues.set(j,Ae),he.finally(()=>{this._activeActions--,this._queues.get(j)===Ae&&this._activeActions===0&&this._onEmptyCallbacks.forEach(ye=>ye())})}}function ds(L){return Array.isArray(L)?L:[L]}const ka=k().createContext("contextWatchdog");class sc extends k().Component{constructor(j,W){super(j,W),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(j){return this._shouldComponentUpdate(j)}async _shouldComponentUpdate(j){return j.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(j.config)),j.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(j.config),!0):this.props.children!==j.children}render(){return k().createElement(ka.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(j){this.contextWatchdog=new Vu(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(W,Q)=>{this.props.onError(Q.error,{phase:"runtime",willContextRestart:Q.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(j).catch(W=>{this.props.onError(W,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}sc.defaultProps={isLayoutReady:!0,onError:(L,j)=>console.error(L,j)},sc.propTypes={id:x().string,isLayoutReady:x().bool,context:x().func,watchdogConfig:x().object,config:x().object,onReady:x().func,onError:x().func};const ac="Lock from React integration (@ckeditor/ckeditor5-react)";class bi extends k().Component{constructor(j){super(j),this.editorDestructionInProgress=null,this.domContainer=k().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:W}=window;if(W){const[Q]=W.split(".").map(Number);Q<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(j){return!!this.editor&&(j.id!==this.props.id||j.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(j)&&this.editor.data.set(j.data),"disabled"in j&&(j.disabled?this.editor.enableReadOnlyMode(ac):this.editor.disableReadOnlyMode(ac)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return k().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Vu?this.watchdog=new Uu(this.context):this.watchdog=new bi._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((j,W)=>this._createEditor(j,W)),this.watchdog.on("error",(j,{error:W,causesRestart:Q})=>{(this.props.onError||console.error)(W,{phase:"runtime",willEditorRestart:Q})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(j=>{(this.props.onError||console.error)(j,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(j,W){return this.props.editor.create(j,W).then(Q=>{"disabled"in this.props&&this.props.disabled&&Q.enableReadOnlyMode(ac);const he=Q.model.document,Ae=Q.editing.view.document;return he.on("change:data",ye=>{this.props.onChange&&this.props.onChange(ye,Q)}),Ae.on("focus",ye=>{this.props.onFocus&&this.props.onFocus(ye,Q)}),Ae.on("blur",ye=>{this.props.onBlur&&this.props.onBlur(ye,Q)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(Q)}),Q})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(j=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,j()):this.instance?(await this.instance.destroy(),this.instance=null,j()):void j())})}_shouldUpdateEditor(j){return this.props.data!==j.data&&this.editor.data.get()!==j.data}_getConfig(){const j=this.props.config||{};return this.props.data&&j.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...j,initialData:j.initialData||this.props.data||""}}}bi.contextType=ka,bi.propTypes={editor:x().func.isRequired,data:x().string,config:x().object,disableWatchdog:x().bool,watchdogConfig:x().object,onChange:x().func,onReady:x().func,onFocus:x().func,onBlur:x().func,onError:x().func,disabled:x().bool,id:x().any},bi._EditorWatchdog=or;class Uu{constructor(j){this._contextWatchdog=j,this._id=function(){const W=4294967296*Math.random()>>>0,Q=4294967296*Math.random()>>>0,he=4294967296*Math.random()>>>0,Ae=4294967296*Math.random()>>>0;return"e"+y[W>>0&255]+y[W>>8&255]+y[W>>16&255]+y[W>>24&255]+y[Q>>0&255]+y[Q>>8&255]+y[Q>>16&255]+y[Q>>24&255]+y[he>>0&255]+y[he>>8&255]+y[he>>16&255]+y[he>>24&255]+y[Ae>>0&255]+y[Ae>>8&255]+y[Ae>>16&255]+y[Ae>>24&255]}()}setCreator(j){this._creator=j}create(j,W){return this._contextWatchdog.add({sourceElementOrData:j,config:W,creator:this._creator,id:this._id,type:"editor"})}on(j,W){this._contextWatchdog.on("itemError",(Q,{itemId:he,error:Ae})=>{he===this._id&&W(null,{error:Ae,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),m})())})(hf,hf.exports);var CW=hf.exports;const WM=()=>{const[n,r]=V.useState(null),[a,c]=V.useState(null),[u,p]=V.useState(null),[m,w]=V.useState(null),k=(me,_e)=>{p(_e.getData())},[_,x]=V.useState(null),[y,A]=V.useState(null),[S,I]=V.useState(!1),[N,F]=V.useState(null),[R,T]=V.useState(null),[B,H]=V.useState(null),[q,Y]=V.useState(""),[K,O]=V.useState(null),te=Xs(),{id:$}=te;V.useEffect(()=>{X();const me=Mr();console.log(me),F(me),$&&pe()},[]),V.useEffect(()=>{fe(),console.log(B)},[B]),V.useEffect(()=>{B&&m&&m.forEach(me=>{me.id==B.cityId&&O(me.name)})},[B,m]),V.useEffect(()=>{},[K]);async function X(){try{const me=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/City/GetAll");w(me.data),console.log(m)}catch(me){console.log(me)}}async function pe(){console.log("Call Single article with id "+$);const me=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/Article/Get?id="+$);H(me.data)}async function fe(){console.log("Fetching article image");const me=Fn(Vn,"/articles/"+$),_e=await Dr(me);if(_e.items[0]){const se=await ts(_e.items[0]);console.log(se),Y(se)}}async function Ge(){let me=null;if(n!=""&&a!=""&&u!="")try{console.log("Sending  ");const _e=Tt();le.defaults.headers.common.Authorization=`Bearer ${_e}`,console.log(N);const se=await le.post("https://browseclimate20231121101412.azurewebsites.net/api/Article/Create",{title:n,description:a,content:u,cityId:_,createdBy:N.UserId,ImageURL:"null"});console.log(se),me=se.data.id}catch(_e){console.log(_e)}else I(!0);if(y!=null||me!=null)try{console.log("Uploading image ... for article with id :"+me);const _e=Fn(Vn,`/articles/${me}/${me}`),se=await Dr(_e);console.log(se),Yw(_e,y)}catch(_e){console.log(_e)}console.log("End add article"),T("Article ajouté !")}async function ze(){if(console.log(n),console.log(a),console.log(u),console.log(_),(await le.post("https://browseclimate20231121101412.azurewebsites.net/api/Article/Update",{id:$,title:n||B.title,description:a||B.description,content:u||B.content,cityId:_||B.cityId,createdAt:"2023-11-08T09:08:50.568Z",updatedAt:"2023-11-08T09:08:50.568Z",createdBy:B.createdBy,isAdminArticle:!0,likes:B.likes,views:B.views,imageURL:"string",timestamp:B.timestamp})).status==200&&T("L'article a bien été modifié !"),y!=null||$!=null)try{console.log("Uploading image ...");const _e=Fn(Vn,`/articles/${$}`),se=await Dr(_e);if(console.log(se),console.log(y),se.items[0]&&y){dW(Fn(Vn,`/articles/${$}/${$}`));const ee=Fn(Vn,`/articles/${$}/${$}`);Yw(ee,y)}}catch(_e){console.log(_e)}}return N==null?E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:" Veuillez vous connecter avant d'explorer"}),E.jsx(Ce,{to:"/login",children:" Se connecter  "})]}):E.jsxs("div",{className:"write-article-container",children:[R&&E.jsxs("div",{className:"alert alert-success",children:[R,E.jsx(Ce,{to:"/article",children:" Retour à la liste des articles "})]}),!R&&E.jsxs(E.Fragment,{children:[E.jsx("img",{src:q}),B&&E.jsxs("h5",{children:[" Ville choisie : ",K]}),E.jsxs("select",{className:"admin-city-select",defaultValue:B?B.cityId:"all",onChange:me=>x(me.target.value),name:"",id:"",children:["Séléctionnez une ville",E.jsx("option",{value:"all",children:" Choisir une ville "}),m&&m.map(me=>E.jsxs("option",{value:me.id,children:[" ",me.name]},me.id))]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"",children:"Choisissez l'image de l'article"}),E.jsx("input",{className:"choose-file-input",type:"file",onChange:me=>A(me.target.files[0])})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"",children:" Titre de l'article"}),E.jsx("input",{type:"text",defaultValue:B?B.title:"",onChange:me=>r(me.target.value)})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"",children:" Description"}),E.jsx("input",{type:"text",defaultValue:B?B.description:"",placeholder:"Decrivez votre article en quelques lignes",onChange:me=>c(me.target.value)})]}),E.jsx(CW.CKEditor,{editor:AW,onChange:(me,_e)=>{k(me,_e)},data:B?B.content:""}),S&&E.jsx("div",{className:"alert alert-danger",children:"Veuillez indiquer le titre, la description et le contenu de l'article. "}),E.jsx("button",{onClick:()=>B?ze():Ge(),children:" Envoyer  "})]})]})},_W=()=>E.jsxs("div",{children:[E.jsx("div",{className:"best-articles",children:E.jsx("h3",{children:" Articles "})}),E.jsx(wW,{}),E.jsxs("div",{className:"write-article",children:[E.jsx("h3",{children:" Inspiré ? A vous de jouer. "}),E.jsx("div",{children:E.jsx(Ce,{to:"/write",className:"btn btn-primary",children:"Ecrire un article"})})]})]}),yW=()=>{const[n,r]=V.useState([]);V.useState([]);const[a,c]=V.useState(!1);V.useEffect(()=>{async function p(){const m=await u();r(m),console.log(m)}p()},[]),V.useEffect(()=>{console.log("Call OK")},[a]);async function u(){try{return(await le.get("https://browseclimate20231121101412.azurewebsites.net/api/City/GetAll")).data}catch(p){console.log(p)}}return E.jsx("div",{className:"cities-list",children:n&&n.map(p=>E.jsx("div",{style:{backgroundImage:`url(../src/assets/images/city/${p.name.replace(" ","").trim()}.jpg)`},className:"card city-card",children:E.jsxs("div",{className:"card-body city-image-infos",children:[E.jsx("h5",{className:"card-title",children:p.name}),E.jsx("p",{className:"card-text",children:p.imageURL}),E.jsx("p",{}),E.jsxs("button",{children:[E.jsx(Ce,{to:"/city/"+p.id,children:" Visiter "}),"  "]})]})},p.id))})},xW=()=>E.jsxs("div",{children:[E.jsxs("div",{className:"intro",children:[E.jsx("h3",{children:"Les plus belles villes à découvrir "}),E.jsx(yW,{children:"  "})]}),E.jsx("div",{children:" Classement des plus belles villes "}),E.jsx("div",{children:"Visitez en images"})]}),EW=()=>{const[n,r]=V.useState(null);V.useState([]);const[a,c]=V.useState([]),[u,p]=V.useState(null),[m,w]=V.useState([]),[k,_]=V.useState(null),[x,y]=V.useState(!1),[A,S]=V.useState(null),[I,N]=V.useState(null),F=Xs(),{id:R}=F;V.useEffect(()=>{T();async function $(){const X=await B();await q(),await Y(),await H(),r(X)}$()},[]),V.useEffect(()=>{},[u]),V.useEffect(()=>{if(a&&m&&n){a.forEach(X=>{X.type="city"}),m.forEach(X=>{X.type="fact"}),n.forEach(X=>{X.type="article"});const $=[...a,...n,...m];$.forEach(X=>{X.objKey=$.indexOf(X)}),$.sort(function(X,pe){return pe.timestamp-X.timestamp}),_($)}},[n,m,a]),V.useEffect(()=>{n&&H()},[n]),V.useEffect(()=>{a&&u&&a.forEach($=>{$.id==u.favoriteCity&&S($)})},[a]),V.useEffect(()=>{m&&!I&&(console.log("Loading userFactLikes"),K())},[m]),V.useEffect(()=>{if(I){console.log("Adding like property to facts ..."),console.log(m);const $=[...m];$.forEach(X=>{I.includes(X.id)?X.isLiked=!0:X.isLiked=!1}),w($),console.log($),console.log(I)}},[I]);async function T(){try{const $=await Hf(),X=Tt();if($){le.defaults.headers.common.Authorization=`Bearer ${X}`;const pe=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/User/Get?id="+$.UserId);p(pe.data),S(u.favoriteCity)}}catch($){console.log($)}}async function B(){if(R!=null)try{const $=Tt();le.defaults.headers.common.Authorization=`Bearer ${$}`;const X=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/Article/GetDiscoverArticles?userId="+R);for(const pe of X.data){const fe=new Date(pe.timestamp*1e3).toLocaleDateString();pe.date=fe}r(X.data)}catch($){console.log($)}}async function H(){for(const $ of n){let X=Fn(Vn,`/articles/${$.id}`);const pe=await Dr(X);if(pe.items.length>0){console.log(pe),console.log("Image on article "+$.id);const fe=await ts(pe.items[0]);$.imageURL=fe}}return n}V.useEffect(()=>{},[k]);async function q(){const $=Tt();le.defaults.headers.common.Authorization=`Bearer ${$}`;const X=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/City/GetAll");c(X.data)}async function Y(){const $=Tt();le.defaults.headers.common.Authorization=`Bearer ${$}`;const X=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/Fact/GetAll");w(X.data)}async function K(){if(u){console.log("Loading Facts Likes ...");const $=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/Fact/UserLikes?userId="+u.id);console.log($),$.status==200&&N($.data)}}async function O($){const X=await le.post("https://browseclimate20231121101412.azurewebsites.net/api/Fact/AddLikeToFact?factId="+$+"&userId="+u.id);X.status==200?console.log("Like ajouté"):console.log(X),K()}async function te($){const X=await le.post("https://browseclimate20231121101412.azurewebsites.net/api/Fact/DeleteLike?factId="+$+"&userId="+u.id);X.status==200?console.log("Like supprimé "):console.log(X),K()}return u==null?E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:" Veuillez vous connecter avant d'explorer"}),E.jsx(Ce,{to:"/login",children:" Se connecter  "})]}):E.jsxs(E.Fragment,{children:[E.jsx("h3",{children:"Explorez, découvrez, ressentez "}),E.jsx("p",{children:"Votre fil d'actualité est prêt, bon voyage"}),!x&&E.jsx("button",{onClick:$=>{y(!0)},children:"  Start Discover"}),x&&A&&E.jsxs("div",{className:"discover-favoritecity",children:[E.jsx("p",{children:"Votre ville préférée"}),E.jsxs("h5",{children:[" ",A.name," "]}),E.jsx("p",{children:A.timeZone}),E.jsxs("p",{children:[A.temperature," °C"]})]}),k&&x&&k.map($=>E.jsxs("div",{children:[E.jsx("p",{children:$.id}),$.type=="article"&&E.jsxs("div",{children:[E.jsx("p",{className:"article-header",children:"Article"}),E.jsxs("div",{className:"article-container",children:[E.jsx("p",{children:$.date}),E.jsxs("h4",{className:"article-title",children:[" ",$.title]}),$.imageURL&&E.jsx("img",{className:"article-image",src:$.imageURL}),!$.imageURL&&E.jsx("img",{className:"article-image",src:"../src/assets/images/app/articles/telescope.jpg"}),E.jsx("div",{className:"article-description",children:$.description}),E.jsx("div",{children:$.content}),E.jsxs("button",{children:[E.jsx(Ce,{to:"/article/"+$.id,children:" Lire "}),"  "]})]},$.objKey)]}),$.type==="fact"&&E.jsxs("div",{className:"single-fact",children:[E.jsx("h3",{children:"Fact"}),E.jsx("p",{children:$.description}),$.isLiked&&E.jsx("button",{onClick:()=>te($.id),children:"  💔  "}),!$.isLiked&&E.jsx("button",{onClick:()=>O($.id),children:" ♥  "})]})]},$.objKey))]})},SW=()=>E.jsxs("div",{children:[E.jsx(EW,{}),E.jsx("div",{className:"discover-facts"})]}),DW=()=>{const[n,r]=V.useState(null),[a,c]=V.useState(!1),[u,p]=V.useState(!0),[m,w]=V.useState([]),[k,_]=V.useState(""),[x,y]=V.useState(""),[A,S]=V.useState(""),[I,N]=V.useState(""),[F,R]=V.useState(null),[T,B]=V.useState(null),[H,q]=V.useState(null),[Y,K]=V.useState(!1),[O,te]=V.useState(null),[$,X]=V.useState(null),pe=Gd();console.log("Init component"),V.useEffect(()=>{fe()},[]),V.useEffect(()=>{n&&(console.log(n),me(),Ge())},[n,a]),V.useEffect(()=>{T&&n&&T.forEach(ee=>{ee.id==n.favoriteCity&&q(ee)})},[T,n]),V.useEffect(()=>{},[H]),V.useEffect(()=>{},[m]),V.useEffect(()=>{},[Y,$,O]);async function fe(){try{console.log("Fetching User ... ");const ee=await Hf(),ke=Tt();if(console.log(ee),ee){le.defaults.headers.common.Authorization=`Bearer ${ke}`;const Se=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/User/Get?id="+ee.UserId);console.log(Se),console.log("End RES"),r(Se.data),_(Se.data.name),y(Se.data.firstName),S(Se.data.email),q(Se.data.favoriteCity)}}catch(ee){console.log(ee)}}async function Ge(){const ee=Tt();le.defaults.headers.common.Authorization=`Bearer ${ee}`;const ke=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/City/GetAll");B(ke.data)}async function ze(){try{console.log("Updating User ... ");const ee=Tt();if(n.name=k,n.firstName=x,n.email=A,n.password=I,n.favoriteCity=F,k==""||x==""||A==""||F=="test"){te("Veuillez renseigner les champs"),X(falses);return}else{le.defaults.headers.common.Authorization=`Bearer ${ee}`;const ke=await le.put("https://browseclimate20231121101412.azurewebsites.net/api/User/Update",{id:n.id,name:n.name,firstName:n.firstName,email:n.email,pseudo:n.pseudo,password:n.password,role:n.role,createdAt:"2023-10-06T12:31:43.456Z",favoriteCity:n.favoriteCity});ke.status==200&&(r(ke.data),te(null),X("Profil mis à jour"))}}catch(ee){console.log(ee),te("Une erreur est survenue. Merci de réessayer"),X(null)}}async function me(){try{console.log("Fetching Articles for User ... ");const ee=Tt();le.defaults.headers.common.Authorization=`Bearer ${ee}`,console.log(n);const ke=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/Article/GetUserArticle?id="+n.id);w(ke.data)}catch(ee){console.log(ee)}}async function _e(ee){try{const ke=Tt();le.defaults.headers.common.Authorization=`Bearer ${ke}`;const Se=await le.delete("https://browseclimate20231121101412.azurewebsites.net/api/Article/Delete?id="+ee);if(console.log(Se),Se.status===200){let Ke=m.findIndex(dn=>dn.id===ee);console.log(Ke);const cn=[...m];cn.splice(Ke,1),w(cn)}}catch(ke){console.log(ke)}}function se(){localStorage.getItem("bc-token")&&localStorage.removeItem("bc-token"),console.log("User logout ..."),r(null),pe("/")}return E.jsxs(E.Fragment,{children:[!n&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:" Veuillez vous connecter avant d'explorer"}),E.jsx(Ce,{to:"/login",children:" Se connecter  "})]}),O&&E.jsxs(Fw,{variant:"danger",children:[" ",O," "]}),$&&E.jsxs(Fw,{variant:"success",children:[" ",$," "]}),n&&E.jsxs(E.Fragment,{children:[E.jsxs("h1",{children:["Profil de ",n.name," ",n.firstName]}),E.jsxs("div",{className:"profile-page",children:[E.jsx("div",{className:"profile-page-menu",children:E.jsxs("ul",{className:"profile-page-menulist",children:[E.jsx("li",{children:E.jsx("button",{className:"btn btn-primary",onClick:()=>{c(!0),p(!1),console.log(a)},children:"Informations du profil"})}),E.jsx("li",{children:E.jsx("button",{className:"btn btn-primary",onClick:()=>{c(!1),p(!0),console.log(a)},children:"Mes articles"})}),E.jsx("li",{children:E.jsx("button",{className:"btn btn-danger",onClick:()=>se(),children:"Se deconnecter"})})]})}),E.jsxs("div",{className:"profile-page-display",children:[a&&E.jsx("div",{children:E.jsxs("form",{className:"profile-page-form",method:"POST",action:"https://browseclimate20231121101412.azurewebsites.net/api/User/Update",children:[E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"Nom"}),E.jsx("input",{className:"form-control",type:"text",defaultValue:n.name.trim(),onChange:ee=>_(ee.target.value)})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"Prénom"}),E.jsx("input",{className:"form-control",type:"text",defaultValue:n.firstName.trim(),onChange:ee=>y(ee.target.value)})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"Email"}),E.jsx("input",{className:"form-control",type:"mail",defaultValue:n.email.trim(),onChange:ee=>S(ee.target.value)})]}),E.jsx("div",{className:"form-group my-3 profile-select-city",children:H&&E.jsxs(E.Fragment,{children:[E.jsxs("label",{children:["Ville préférée : ",H.name," "]}),E.jsxs("select",{className:"admin-city-select my-2",defaultValue:"test",onChange:ee=>{R(ee.target.value),console.log(ee.target.value)},name:"",id:"",children:[E.jsx("option",{value:"all",children:"Selectionnez une ville "}),T&&T.map(ee=>E.jsxs("option",{value:ee.id,children:[" ",ee.name," "]},ee.id))]})]})}),E.jsx("button",{className:"btn btn-primary",type:"submit",onClick:ee=>{ee.preventDefault(),ze()},children:" Mettre à jour les Informations "})]})}),u===!0&&E.jsxs("div",{children:["Mes articles",m&&m.map(ee=>E.jsxs("div",{className:"profile-article",children:[ee.title,E.jsxs("div",{children:[E.jsx(Ce,{to:"/article/"+ee.id,children:" Lire "}),E.jsx(Ce,{to:"/article/edit/"+ee.id,children:"Editer "}),E.jsx(Ce,{onClick:ke=>{_e(ee.id)},children:"Supprimer "})]})]},ee.id))]})]})]})]})]})},OD=()=>E.jsx("div",{children:E.jsx(DW,{})}),TW=()=>{const[n,r]=V.useState(null),a=Gd();V.useEffect(()=>{c()},[]);async function c(){(await $f()).data==!0?(a("/profile"),r(!0)):r(!1)}return E.jsx(E.Fragment,{children:!n&&E.jsxs("div",{children:["LoginPage",E.jsx(AU,{}),E.jsxs("div",{children:[E.jsx("h3",{children:"Vous n'avez pas de compte ? "}),E.jsx(Ce,{to:"/register",children:" S'inscrire"})]})]})})},IW=()=>{const[n,r]=V.useState(null),[a,c]=V.useState(null),[u,p]=V.useState([]),[m,w]=V.useState(!1),[k,_]=V.useState(""),x=Xs(),{id:y}=x;V.useEffect(()=>{A(),S();async function R(){const T=await Hf();T&&c(T)}R()},[]),V.useEffect(()=>{console.log(k)},[k]),V.useEffect(()=>{a&&I()},[a]),V.useEffect(()=>{u.forEach(R=>{R.id==y&&w(!0)})},[u]),V.useEffect(()=>{console.log("Article Liked: "+m)},[m]),V.useEffect(()=>{n&&(console.log("Loading image ..."),S())},[n]);async function A(){console.log("Call Single article with id "+y);const R=await le.get("https://browseclimate20231121101412.azurewebsites.net/api/Article/Get?id="+y);r(R.data)}async function S(){console.log("Fetching article image");const R=Fn(Vn,"/articles/"+n.id),T=await Dr(R),B=await ts(T.items[0]);console.log(B),_(B)}async function I(){const R=Tt();le.defaults.headers.common.Authorization=`Bearer ${R}`;const T=await le.post("https://browseclimate20231121101412.azurewebsites.net/api/Article/GetArticlesLikedByUser?userId="+a.UserId);console.log(T.data),p(T.data)}async function N(){await le.post(`https://browseclimate20231121101412.azurewebsites.net/api/Article/AddLike?articleId=${n.id}&userId=${a.UserId}`,{articleId:n.Id,userId:a.Id}),w(!0),n.likes=n.likes+1}async function F(){await le.post(`https://browseclimate20231121101412.azurewebsites.net/api/Article/RemoveLike?articleId=${n.id}&userId=${a.UserId}`,{articleId:n.Id,userId:a.Id}),n.likes=n.likes-1,w(!1)}return n?E.jsxs("div",{className:"article-container single-article-display",children:[E.jsxs("div",{className:"articles-likes-section",children:[a&&m&&E.jsx("button",{onClick:()=>F(),children:"  💔 "}),a&&!m&&E.jsx("button",{onClick:()=>N(),children:" ♥  "}),E.jsxs("p",{children:[" ",n.likes," likes "]})]}),E.jsx("h1",{children:n.title}),k&&E.jsx("img",{className:"article-image",src:k}),!k&&E.jsx("img",{className:"article-image",src:"../src/assets/images/app/articles/telescope.jpg"}),E.jsx("p",{children:n.description}),E.jsx("div",{dangerouslySetInnerHTML:{__html:n.content}})]}):null},MW=()=>(V.useState(null),E.jsx("div",{children:E.jsx(IW,{})})),NW={black:"#000",white:"#fff"},Bd=NW,PW={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Fa=PW,BW={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Va=BW,OW={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ua=OW,RW={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Ha=RW,LW={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},$a=LW,jW={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Hc=jW,zW={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},FW=zW;function Kr(n){return n!==null&&typeof n=="object"&&n.constructor===Object}function qM(n){if(!Kr(n))return n;const r={};return Object.keys(n).forEach(a=>{r[a]=qM(n[a])}),r}function qo(n,r,a={clone:!0}){const c=a.clone?ge({},n):n;return Kr(n)&&Kr(r)&&Object.keys(r).forEach(u=>{u!=="__proto__"&&(Kr(r[u])&&u in n&&Kr(n[u])?c[u]=qo(n[u],r[u],a):a.clone?c[u]=Kr(r[u])?qM(r[u]):r[u]:c[u]=r[u])}),c}function vl(n){let r="https://mui.com/production-error/?code="+n;for(let a=1;a<arguments.length;a+=1)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified MUI error #"+n+"; visit "+r+" for the full message."}function ro(n){if(typeof n!="string")throw new Error(vl(7));return n.charAt(0).toUpperCase()+n.slice(1)}function VW(n,r){typeof n=="function"?n(r):n&&(n.current=r)}let RD=0;function UW(n){const[r,a]=V.useState(n),c=n||r;return V.useEffect(()=>{r==null&&(RD+=1,a(`mui-${RD}`))},[r]),c}const LD=Mp["useId".toString()];function GM(n){if(LD!==void 0){const r=LD();return n??r}return UW(n)}function HW({controlled:n,default:r,name:a,state:c="value"}){const{current:u}=V.useRef(n!==void 0),[p,m]=V.useState(r),w=u?n:p,k=V.useCallback(_=>{u||m(_)},[]);return[w,k]}function $W(...n){return V.useMemo(()=>n.every(r=>r==null)?null:r=>{n.forEach(a=>{VW(a,r)})},n)}let Gf=!0,Qw=!1,jD;const WW={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function qW(n){const{type:r,tagName:a}=n;return!!(a==="INPUT"&&WW[r]&&!n.readOnly||a==="TEXTAREA"&&!n.readOnly||n.isContentEditable)}function GW(n){n.metaKey||n.altKey||n.ctrlKey||(Gf=!0)}function Db(){Gf=!1}function KW(){this.visibilityState==="hidden"&&Qw&&(Gf=!0)}function YW(n){n.addEventListener("keydown",GW,!0),n.addEventListener("mousedown",Db,!0),n.addEventListener("pointerdown",Db,!0),n.addEventListener("touchstart",Db,!0),n.addEventListener("visibilitychange",KW,!0)}function QW(n){const{target:r}=n;try{return r.matches(":focus-visible")}catch{}return Gf||qW(r)}function ZW(){const n=V.useCallback(u=>{u!=null&&YW(u.ownerDocument)},[]),r=V.useRef(!1);function a(){return r.current?(Qw=!0,window.clearTimeout(jD),jD=window.setTimeout(()=>{Qw=!1},100),r.current=!1,!0):!1}function c(u){return QW(u)?(r.current=!0,!0):!1}return{isFocusVisibleRef:r,onFocus:c,onBlur:a,ref:n}}const JW={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},XW=JW;function KM(n,r){const a=ge({},r);return Object.keys(n).forEach(c=>{if(c.toString().match(/^(components|slots)$/))a[c]=ge({},n[c],a[c]);else if(c.toString().match(/^(componentsProps|slotProps)$/)){const u=n[c]||{},p=r[c];a[c]={},!p||!Object.keys(p)?a[c]=u:!u||!Object.keys(u)?a[c]=p:(a[c]=ge({},p),Object.keys(u).forEach(m=>{a[c][m]=KM(u[m],p[m])}))}else a[c]===void 0&&(a[c]=n[c])}),a}function Kf(n,r,a=void 0){const c={};return Object.keys(n).forEach(u=>{c[u]=n[u].reduce((p,m)=>{if(m){const w=r(m);w!==""&&p.push(w),a&&a[m]&&p.push(a[m])}return p},[]).join(" ")}),c}const zD=n=>n,eq=()=>{let n=zD;return{configure(r){n=r},generate(r){return n(r)},reset(){n=zD}}},tq=eq(),nq=tq,oq={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Yd(n,r,a="Mui"){const c=oq[r];return c?`${a}-${c}`:`${nq.generate(n)}-${r}`}function Yf(n,r,a="Mui"){const c={};return r.forEach(u=>{c[u]=Yd(n,u,a)}),c}const bv="$$material";function YM(n){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=n(a)),r[a]}}var rq=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,iq=YM(function(n){return rq.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91});function sq(n){if(n.sheet)return n.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===n)return document.styleSheets[r]}function aq(n){var r=document.createElement("style");return r.setAttribute("data-emotion",n.key),n.nonce!==void 0&&r.setAttribute("nonce",n.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var lq=function(){function n(a){var c=this;this._insertTag=function(u){var p;c.tags.length===0?c.insertionPoint?p=c.insertionPoint.nextSibling:c.prepend?p=c.container.firstChild:p=c.before:p=c.tags[c.tags.length-1].nextSibling,c.container.insertBefore(u,p),c.tags.push(u)},this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var r=n.prototype;return r.hydrate=function(c){c.forEach(this._insertTag)},r.insert=function(c){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(aq(this));var u=this.tags[this.tags.length-1];if(this.isSpeedy){var p=sq(u);try{p.insertRule(c,p.cssRules.length)}catch{}}else u.appendChild(document.createTextNode(c));this.ctr++},r.flush=function(){this.tags.forEach(function(c){return c.parentNode&&c.parentNode.removeChild(c)}),this.tags=[],this.ctr=0},n}(),fn="-ms-",pf="-moz-",We="-webkit-",QM="comm",wv="rule",vv="decl",cq="@import",ZM="@keyframes",dq="@layer",uq=Math.abs,Qf=String.fromCharCode,hq=Object.assign;function pq(n,r){return sn(n,0)^45?(((r<<2^sn(n,0))<<2^sn(n,1))<<2^sn(n,2))<<2^sn(n,3):0}function JM(n){return n.trim()}function fq(n,r){return(n=r.exec(n))?n[0]:n}function qe(n,r,a){return n.replace(r,a)}function Zw(n,r){return n.indexOf(r)}function sn(n,r){return n.charCodeAt(r)|0}function Od(n,r,a){return n.slice(r,a)}function kr(n){return n.length}function Av(n){return n.length}function ap(n,r){return r.push(n),n}function mq(n,r){return n.map(r).join("")}var Zf=1,Al=1,XM=0,qn=0,Vt=0,Ml="";function Jf(n,r,a,c,u,p,m){return{value:n,root:r,parent:a,type:c,props:u,children:p,line:Zf,column:Al,length:m,return:""}}function $c(n,r){return hq(Jf("",null,null,"",null,null,0),n,{length:-n.length},r)}function gq(){return Vt}function kq(){return Vt=qn>0?sn(Ml,--qn):0,Al--,Vt===10&&(Al=1,Zf--),Vt}function io(){return Vt=qn<XM?sn(Ml,qn++):0,Al++,Vt===10&&(Al=1,Zf++),Vt}function Tr(){return sn(Ml,qn)}function Sp(){return qn}function Qd(n,r){return Od(Ml,n,r)}function Rd(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eN(n){return Zf=Al=1,XM=kr(Ml=n),qn=0,[]}function tN(n){return Ml="",n}function Dp(n){return JM(Qd(qn-1,Jw(n===91?n+2:n===40?n+1:n)))}function bq(n){for(;(Vt=Tr())&&Vt<33;)io();return Rd(n)>2||Rd(Vt)>3?"":" "}function wq(n,r){for(;--r&&io()&&!(Vt<48||Vt>102||Vt>57&&Vt<65||Vt>70&&Vt<97););return Qd(n,Sp()+(r<6&&Tr()==32&&io()==32))}function Jw(n){for(;io();)switch(Vt){case n:return qn;case 34:case 39:n!==34&&n!==39&&Jw(Vt);break;case 40:n===41&&Jw(n);break;case 92:io();break}return qn}function vq(n,r){for(;io()&&n+Vt!==47+10;)if(n+Vt===42+42&&Tr()===47)break;return"/*"+Qd(r,qn-1)+"*"+Qf(n===47?n:io())}function Aq(n){for(;!Rd(Tr());)io();return Qd(n,qn)}function Cq(n){return tN(Tp("",null,null,null,[""],n=eN(n),0,[0],n))}function Tp(n,r,a,c,u,p,m,w,k){for(var _=0,x=0,y=m,A=0,S=0,I=0,N=1,F=1,R=1,T=0,B="",H=u,q=p,Y=c,K=B;F;)switch(I=T,T=io()){case 40:if(I!=108&&sn(K,y-1)==58){Zw(K+=qe(Dp(T),"&","&\f"),"&\f")!=-1&&(R=-1);break}case 34:case 39:case 91:K+=Dp(T);break;case 9:case 10:case 13:case 32:K+=bq(I);break;case 92:K+=wq(Sp()-1,7);continue;case 47:switch(Tr()){case 42:case 47:ap(_q(vq(io(),Sp()),r,a),k);break;default:K+="/"}break;case 123*N:w[_++]=kr(K)*R;case 125*N:case 59:case 0:switch(T){case 0:case 125:F=0;case 59+x:R==-1&&(K=qe(K,/\f/g,"")),S>0&&kr(K)-y&&ap(S>32?VD(K+";",c,a,y-1):VD(qe(K," ","")+";",c,a,y-2),k);break;case 59:K+=";";default:if(ap(Y=FD(K,r,a,_,x,u,w,B,H=[],q=[],y),p),T===123)if(x===0)Tp(K,r,Y,Y,H,p,y,w,q);else switch(A===99&&sn(K,3)===110?100:A){case 100:case 108:case 109:case 115:Tp(n,Y,Y,c&&ap(FD(n,Y,Y,0,0,u,w,B,u,H=[],y),q),u,q,y,w,c?H:q);break;default:Tp(K,Y,Y,Y,[""],q,0,w,q)}}_=x=S=0,N=R=1,B=K="",y=m;break;case 58:y=1+kr(K),S=I;default:if(N<1){if(T==123)--N;else if(T==125&&N++==0&&kq()==125)continue}switch(K+=Qf(T),T*N){case 38:R=x>0?1:(K+="\f",-1);break;case 44:w[_++]=(kr(K)-1)*R,R=1;break;case 64:Tr()===45&&(K+=Dp(io())),A=Tr(),x=y=kr(B=K+=Aq(Sp())),T++;break;case 45:I===45&&kr(K)==2&&(N=0)}}return p}function FD(n,r,a,c,u,p,m,w,k,_,x){for(var y=u-1,A=u===0?p:[""],S=Av(A),I=0,N=0,F=0;I<c;++I)for(var R=0,T=Od(n,y+1,y=uq(N=m[I])),B=n;R<S;++R)(B=JM(N>0?A[R]+" "+T:qe(T,/&\f/g,A[R])))&&(k[F++]=B);return Jf(n,r,a,u===0?wv:w,k,_,x)}function _q(n,r,a){return Jf(n,r,a,QM,Qf(gq()),Od(n,2,-2),0)}function VD(n,r,a,c){return Jf(n,r,a,vv,Od(n,0,c),Od(n,c+1,-1),c)}function dl(n,r){for(var a="",c=Av(n),u=0;u<c;u++)a+=r(n[u],u,n,r)||"";return a}function yq(n,r,a,c){switch(n.type){case dq:if(n.children.length)break;case cq:case vv:return n.return=n.return||n.value;case QM:return"";case ZM:return n.return=n.value+"{"+dl(n.children,c)+"}";case wv:n.value=n.props.join(",")}return kr(a=dl(n.children,c))?n.return=n.value+"{"+a+"}":""}function xq(n){var r=Av(n);return function(a,c,u,p){for(var m="",w=0;w<r;w++)m+=n[w](a,c,u,p)||"";return m}}function Eq(n){return function(r){r.root||(r=r.return)&&n(r)}}var Sq=function(r,a,c){for(var u=0,p=0;u=p,p=Tr(),u===38&&p===12&&(a[c]=1),!Rd(p);)io();return Qd(r,qn)},Dq=function(r,a){var c=-1,u=44;do switch(Rd(u)){case 0:u===38&&Tr()===12&&(a[c]=1),r[c]+=Sq(qn-1,a,c);break;case 2:r[c]+=Dp(u);break;case 4:if(u===44){r[++c]=Tr()===58?"&\f":"",a[c]=r[c].length;break}default:r[c]+=Qf(u)}while(u=io());return r},Tq=function(r,a){return tN(Dq(eN(r),a))},UD=new WeakMap,Iq=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var a=r.value,c=r.parent,u=r.column===c.column&&r.line===c.line;c.type!=="rule";)if(c=c.parent,!c)return;if(!(r.props.length===1&&a.charCodeAt(0)!==58&&!UD.get(c))&&!u){UD.set(r,!0);for(var p=[],m=Tq(a,p),w=c.props,k=0,_=0;k<m.length;k++)for(var x=0;x<w.length;x++,_++)r.props[_]=p[k]?m[k].replace(/&\f/g,w[x]):w[x]+" "+m[k]}}},Mq=function(r){if(r.type==="decl"){var a=r.value;a.charCodeAt(0)===108&&a.charCodeAt(2)===98&&(r.return="",r.value="")}};function nN(n,r){switch(pq(n,r)){case 5103:return We+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return We+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return We+n+pf+n+fn+n+n;case 6828:case 4268:return We+n+fn+n+n;case 6165:return We+n+fn+"flex-"+n+n;case 5187:return We+n+qe(n,/(\w+).+(:[^]+)/,We+"box-$1$2"+fn+"flex-$1$2")+n;case 5443:return We+n+fn+"flex-item-"+qe(n,/flex-|-self/,"")+n;case 4675:return We+n+fn+"flex-line-pack"+qe(n,/align-content|flex-|-self/,"")+n;case 5548:return We+n+fn+qe(n,"shrink","negative")+n;case 5292:return We+n+fn+qe(n,"basis","preferred-size")+n;case 6060:return We+"box-"+qe(n,"-grow","")+We+n+fn+qe(n,"grow","positive")+n;case 4554:return We+qe(n,/([^-])(transform)/g,"$1"+We+"$2")+n;case 6187:return qe(qe(qe(n,/(zoom-|grab)/,We+"$1"),/(image-set)/,We+"$1"),n,"")+n;case 5495:case 3959:return qe(n,/(image-set\([^]*)/,We+"$1$`$1");case 4968:return qe(qe(n,/(.+:)(flex-)?(.*)/,We+"box-pack:$3"+fn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+We+n+n;case 4095:case 3583:case 4068:case 2532:return qe(n,/(.+)-inline(.+)/,We+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kr(n)-1-r>6)switch(sn(n,r+1)){case 109:if(sn(n,r+4)!==45)break;case 102:return qe(n,/(.+:)(.+)-([^]+)/,"$1"+We+"$2-$3$1"+pf+(sn(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Zw(n,"stretch")?nN(qe(n,"stretch","fill-available"),r)+n:n}break;case 4949:if(sn(n,r+1)!==115)break;case 6444:switch(sn(n,kr(n)-3-(~Zw(n,"!important")&&10))){case 107:return qe(n,":",":"+We)+n;case 101:return qe(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+We+(sn(n,14)===45?"inline-":"")+"box$3$1"+We+"$2$3$1"+fn+"$2box$3")+n}break;case 5936:switch(sn(n,r+11)){case 114:return We+n+fn+qe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return We+n+fn+qe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return We+n+fn+qe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return We+n+fn+n+n}return n}var Nq=function(r,a,c,u){if(r.length>-1&&!r.return)switch(r.type){case vv:r.return=nN(r.value,r.length);break;case ZM:return dl([$c(r,{value:qe(r.value,"@","@"+We)})],u);case wv:if(r.length)return mq(r.props,function(p){switch(fq(p,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return dl([$c(r,{props:[qe(p,/:(read-\w+)/,":"+pf+"$1")]})],u);case"::placeholder":return dl([$c(r,{props:[qe(p,/:(plac\w+)/,":"+We+"input-$1")]}),$c(r,{props:[qe(p,/:(plac\w+)/,":"+pf+"$1")]}),$c(r,{props:[qe(p,/:(plac\w+)/,fn+"input-$1")]})],u)}return""})}},Pq=[Nq],Bq=function(r){var a=r.key;if(a==="css"){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(N){var F=N.getAttribute("data-emotion");F.indexOf(" ")!==-1&&(document.head.appendChild(N),N.setAttribute("data-s",""))})}var u=r.stylisPlugins||Pq,p={},m,w=[];m=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(N){for(var F=N.getAttribute("data-emotion").split(" "),R=1;R<F.length;R++)p[F[R]]=!0;w.push(N)});var k,_=[Iq,Mq];{var x,y=[yq,Eq(function(N){x.insert(N)})],A=xq(_.concat(u,y)),S=function(F){return dl(Cq(F),A)};k=function(F,R,T,B){x=T,S(F?F+"{"+R.styles+"}":R.styles),B&&(I.inserted[R.name]=!0)}}var I={key:a,sheet:new lq({key:a,container:m,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:p,registered:{},insert:k};return I.sheet.hydrate(w),I},Oq=!0;function Rq(n,r,a){var c="";return a.split(" ").forEach(function(u){n[u]!==void 0?r.push(n[u]+";"):c+=u+" "}),c}var oN=function(r,a,c){var u=r.key+"-"+a.name;(c===!1||Oq===!1)&&r.registered[u]===void 0&&(r.registered[u]=a.styles)},Lq=function(r,a,c){oN(r,a,c);var u=r.key+"-"+a.name;if(r.inserted[a.name]===void 0){var p=a;do r.insert(a===p?"."+u:"",p,r.sheet,!0),p=p.next;while(p!==void 0)}};function jq(n){for(var r=0,a,c=0,u=n.length;u>=4;++c,u-=4)a=n.charCodeAt(c)&255|(n.charCodeAt(++c)&255)<<8|(n.charCodeAt(++c)&255)<<16|(n.charCodeAt(++c)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,r=(a&65535)*1540483477+((a>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(u){case 3:r^=(n.charCodeAt(c+2)&255)<<16;case 2:r^=(n.charCodeAt(c+1)&255)<<8;case 1:r^=n.charCodeAt(c)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var zq={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fq=/[A-Z]|^ms/g,Vq=/_EMO_([^_]+?)_([^]*?)_EMO_/g,rN=function(r){return r.charCodeAt(1)===45},HD=function(r){return r!=null&&typeof r!="boolean"},Tb=YM(function(n){return rN(n)?n:n.replace(Fq,"-$&").toLowerCase()}),$D=function(r,a){switch(r){case"animation":case"animationName":if(typeof a=="string")return a.replace(Vq,function(c,u,p){return br={name:u,styles:p,next:br},u})}return zq[r]!==1&&!rN(r)&&typeof a=="number"&&a!==0?a+"px":a};function Ld(n,r,a){if(a==null)return"";if(a.__emotion_styles!==void 0)return a;switch(typeof a){case"boolean":return"";case"object":{if(a.anim===1)return br={name:a.name,styles:a.styles,next:br},a.name;if(a.styles!==void 0){var c=a.next;if(c!==void 0)for(;c!==void 0;)br={name:c.name,styles:c.styles,next:br},c=c.next;var u=a.styles+";";return u}return Uq(n,r,a)}case"function":{if(n!==void 0){var p=br,m=a(n);return br=p,Ld(n,r,m)}break}}if(r==null)return a;var w=r[a];return w!==void 0?w:a}function Uq(n,r,a){var c="";if(Array.isArray(a))for(var u=0;u<a.length;u++)c+=Ld(n,r,a[u])+";";else for(var p in a){var m=a[p];if(typeof m!="object")r!=null&&r[m]!==void 0?c+=p+"{"+r[m]+"}":HD(m)&&(c+=Tb(p)+":"+$D(p,m)+";");else if(Array.isArray(m)&&typeof m[0]=="string"&&(r==null||r[m[0]]===void 0))for(var w=0;w<m.length;w++)HD(m[w])&&(c+=Tb(p)+":"+$D(p,m[w])+";");else{var k=Ld(n,r,m);switch(p){case"animation":case"animationName":{c+=Tb(p)+":"+k+";";break}default:c+=p+"{"+k+"}"}}}return c}var WD=/label:\s*([^\s;\n{]+)\s*(;|$)/g,br,Hq=function(r,a,c){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var u=!0,p="";br=void 0;var m=r[0];m==null||m.raw===void 0?(u=!1,p+=Ld(c,a,m)):p+=m[0];for(var w=1;w<r.length;w++)p+=Ld(c,a,r[w]),u&&(p+=m[w]);WD.lastIndex=0;for(var k="",_;(_=WD.exec(p))!==null;)k+="-"+_[1];var x=jq(p)+k;return{name:x,styles:p,next:br}},$q=function(r){return r()},Wq=Mp["useInsertionEffect"]?Mp["useInsertionEffect"]:!1,qq=Wq||$q,iN=V.createContext(typeof HTMLElement<"u"?Bq({key:"css"}):null);iN.Provider;var Gq=function(r){return V.forwardRef(function(a,c){var u=V.useContext(iN);return r(a,u,c)})},sN=V.createContext({}),Kq=iq,Yq=function(r){return r!=="theme"},qD=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Kq:Yq},GD=function(r,a,c){var u;if(a){var p=a.shouldForwardProp;u=r.__emotion_forwardProp&&p?function(m){return r.__emotion_forwardProp(m)&&p(m)}:p}return typeof u!="function"&&c&&(u=r.__emotion_forwardProp),u},Qq=function(r){var a=r.cache,c=r.serialized,u=r.isStringTag;return oN(a,c,u),qq(function(){return Lq(a,c,u)}),null},Zq=function n(r,a){var c=r.__emotion_real===r,u=c&&r.__emotion_base||r,p,m;a!==void 0&&(p=a.label,m=a.target);var w=GD(r,a,c),k=w||qD(u),_=!k("as");return function(){var x=arguments,y=c&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(p!==void 0&&y.push("label:"+p+";"),x[0]==null||x[0].raw===void 0)y.push.apply(y,x);else{y.push(x[0][0]);for(var A=x.length,S=1;S<A;S++)y.push(x[S],x[0][S])}var I=Gq(function(N,F,R){var T=_&&N.as||u,B="",H=[],q=N;if(N.theme==null){q={};for(var Y in N)q[Y]=N[Y];q.theme=V.useContext(sN)}typeof N.className=="string"?B=Rq(F.registered,H,N.className):N.className!=null&&(B=N.className+" ");var K=Hq(y.concat(H),F.registered,q);B+=F.key+"-"+K.name,m!==void 0&&(B+=" "+m);var O=_&&w===void 0?qD(T):k,te={};for(var $ in N)_&&$==="as"||O($)&&(te[$]=N[$]);return te.className=B,te.ref=R,V.createElement(V.Fragment,null,V.createElement(Qq,{cache:F,serialized:K,isStringTag:typeof T=="string"}),V.createElement(T,te))});return I.displayName=p!==void 0?p:"Styled("+(typeof u=="string"?u:u.displayName||u.name||"Component")+")",I.defaultProps=r.defaultProps,I.__emotion_real=I,I.__emotion_base=u,I.__emotion_styles=y,I.__emotion_forwardProp=w,Object.defineProperty(I,"toString",{value:function(){return"."+m}}),I.withComponent=function(N,F){return n(N,ge({},a,F,{shouldForwardProp:GD(I,F,!0)})).apply(void 0,y)},I}},Jq=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Xw=Zq.bind();Jq.forEach(function(n){Xw[n]=Xw(n)});/**
 * @mui/styled-engine v5.14.15
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.