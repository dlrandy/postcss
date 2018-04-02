!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){(function(t){e.exports=t}).call(this,{})},
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var u={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":o(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(i.apply(null,n));else if("object"===r)for(var a in n)u.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=i:"object"===o(n(/*! !webpack amd options */0))&&n(/*! !webpack amd options */0)?void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r):window.classNames=i}()},
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,u,i,a,l){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,u,i,a,l],s=0;(c=new Error(t.replace(/%s/g,function(){return f[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var r=n(/*! fbjs/lib/emptyFunction */1),o=n(/*! fbjs/lib/invariant */4),u=n(/*! ./lib/ReactPropTypesSecret */3);e.exports=function(){function e(e,t,n,r,i,a){a!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=n(/*! ./factoryWithThrowingShims */5)()},
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";e.exports={}},
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,a=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))o.call(n,c)&&(a[c]=n[c]);if(r){i=r(n);for(var f=0;f<i.length;f++)u.call(n,i[f])&&(a[i[f]]=n[i[f]])}}return a}},
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";
/** @license React v16.3.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(/*! object-assign */8),u=n(/*! fbjs/lib/emptyObject */7),i=n(/*! fbjs/lib/emptyFunction */1),a="function"==typeof Symbol&&Symbol.for,l=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,f=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,p=a?Symbol.for("react.provider"):60109,y=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,v=a?Symbol.for("react.forward_ref"):60112,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function g(e,t,n){this.props=e,this.context=t,this.refs=u,this.updater=n||b}function _(){}function O(e,t,n){this.props=e,this.context=t,this.refs=u,this.updater=n||b}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!==(void 0===e?"undefined":r(e))&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var S=O.prototype=new _;S.constructor=O,o(S,g.prototype),S.isPureReactComponent=!0;var j={current:null},w=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r=void 0,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:l,type:e,key:u,ref:i,props:o,_owner:j.current}}function x(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e&&e.$$typeof===l}var R=/\/+/g,E=[];function T(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function C(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function M(e,t,n,o){var u=void 0===e?"undefined":r(e);"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case c:i=!0}}if(i)return n(o,e,""===t?"."+$(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=t+$(u=e[a],a);i+=M(u,f,n,o)}else if(null===e||void 0===e?f=null:f="function"==typeof(f=h&&e[h]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),a=0;!(u=e.next()).done;)i+=M(u=u.value,f=t+$(u,a++),n,o);else"object"===u&&m("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}function $(e,t){return"object"===(void 0===e?"undefined":r(e))&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,r,n,i.thatReturnsArgument):null!=e&&(x(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n,e={$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function N(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),t=T(t,u,r,o),null==e||M(e,"",I,t),C(t)}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return N(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=T(null,null,t,n),null==e||M(e,"",A,t),C(t)},count:function(e){return null==e?0:M(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return N(e,t,null,i.thatReturnsArgument),t},only:function(e){return x(e)||m("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:y,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null}).Provider={$$typeof:p,context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:v,render:e}},Fragment:f,StrictMode:s,unstable_AsyncMode:d,createElement:k,cloneElement:function(e,t,n){var r=void 0,u=o({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,c=j.current),void 0!==t.key&&(i=""+t.key);var f=void 0;for(r in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)w.call(t,r)&&!P.hasOwnProperty(r)&&(u[r]=void 0===t[r]&&void 0!==f?f[r]:t[r])}if(1===(r=arguments.length-2))u.children=n;else if(1<r){f=Array(r);for(var s=0;s<r;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:l,type:e.type,key:i,ref:a,props:u,_owner:c}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.3.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:j,assign:o}},U=Object.freeze({default:L}),H=U&&L||U;e.exports=H.default?H.default:H},
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";e.exports=n(/*! ./cjs/react.production.min.js */9)},
/*!*******************************!*\
  !*** ./src/js/AliasedName.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(/*! react */10)),u=a(n(/*! prop-types */6)),i=a(n(/*! classnames */2));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(/*! ../styles/AliasedName.css */17);var c=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.hoverTimer=null,r.longHovering=!1,r.handleMouseEnter=function(){r.hoverTimer||(r.hoverTimer=setTimeout(function(){return r.onLongHover},500))},r.onLongHover=function(){r.longHovering=!0,r.props.onLongHoverStartUsername(r.getIdNameDOM())},r.handleMouseLeave=function(){clearTimeout(r.hoverTimer),r.hoverTimer=null,r.longHovering&&(r.longHovering=!1,setTimeout(r.props.onLongHoverEndUsername.bind(null,r.getIdNameDOM()),500))},r.handleClick=function(){r.longHovering&&(r.longHovering=!1),r.props.onClicktUsername(r.getIdNameDOM())},r.getIdNameDOM=function(){return{id:r.props.id,name:r.props.name,el:r.el}},l(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this,t=(0,i.default)({"svip-user":this.props.isSVIP},{"vip-user":this.props.isVIP},{"admin-user":this.props.isAdmin});return o.default.createElement("span",{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onClick:this.handleClick,ref:function(t){return e.el=t},className:" \n             display-name \n             aliasable \n             colorable \n             "+t+" \n             ","data-user-id":this.props.id,"data-user-type":t},this.props.name)}}]),t}();c.propTypes={name:u.default.string.isRequired,id:u.default.number.isRequired},t.default=c},
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(/*! ./js/AliasedName */11),u=(r=o)&&r.__esModule?r:{default:r};t.default=u.default},,,,
/*!************************************!*\
  !*** ./src/styles/AliasedName.css ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!************************************!*\
  !*** ./src/styles/AliasedName.css ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){}]);
//# sourceMappingURL=index.js.map