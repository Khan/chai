module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=7)}([function(t,e){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var r=t.__flags||(t.__flags=Object.create(null));if(3!==arguments.length)return r[e];r[e]=n}},function(t,e,n){var r=n(3),o=n(13),i=n(4);t.exports=function(t,e,n,r){return u({showHidden:e,seen:[],stylize:function(t){return t}},t,void 0===n?2:n)};var s=function(t){if("outerHTML"in t)return t.outerHTML;var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","_"),r=((window.HTMLElement||window.Element).prototype,new XMLSerializer);return document.xmlVersion?r.serializeToString(t):(n.appendChild(t.cloneNode(!1)),e=n.innerHTML.replace("><",">"+t.innerHTML+"<"),n.innerHTML="",e)},a=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName};function u(t,n,g){if(n&&"function"==typeof n.inspect&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var y=n.inspect(g);return"string"!=typeof y&&(y=u(t,y,g)),y}var b=function(t,e){switch(typeof e){case"undefined":return t.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string");case"number":return t.stylize(""+e,"number");case"boolean":return t.stylize(""+e,"boolean")}if(null===e)return t.stylize("null","null")}(t,n);if(b)return b;if(a(n))return s(n);var w=i(n),v=t.showHidden?o(n):w;if(0===v.length||l(n)&&(1===v.length&&"stack"===v[0]||2===v.length&&"description"===v[0]&&"stack"===v[1])){if("function"==typeof n){var x=(m=r(n))?": "+m:"";return t.stylize("[Function"+x+"]","special")}if(f(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(p(n))return t.stylize(Date.prototype.toUTCString.call(n),"date");if(l(n))return c(n)}var m,A,E="",j=!1,_=["{","}"];((function(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===d(t)})(n)&&(j=!0,_=["[","]"]),"function"==typeof n)&&(E=" [Function"+(x=(m=r(n))?": "+m:"")+"]");return f(n)&&(E=" "+RegExp.prototype.toString.call(n)),p(n)&&(E=" "+Date.prototype.toUTCString.call(n)),l(n)?c(n):0!==v.length||j&&0!=n.length?g<0?f(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),A=j?function(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)Object.prototype.hasOwnProperty.call(e,String(s))?i.push(h(t,e,n,r,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(h(t,e,n,r,o,!0))}),i}(t,n,g,w,v):v.map(function(e){return h(t,n,g,w,e,j)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(A,E,_)):_[0]+E+_[1]}function c(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,n,r,o,i){var s,a;if(e.__lookupGetter__&&(e.__lookupGetter__(o)?a=e.__lookupSetter__(o)?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):e.__lookupSetter__(o)&&(a=t.stylize("[Setter]","special"))),r.indexOf(o)<0&&(s="["+o+"]"),a||(t.seen.indexOf(e[o])<0?(a=u(t,e[o],null===n?null:n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n")):a=t.stylize("[Circular]","special")),void 0===s){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function f(t){return"object"==typeof t&&"[object RegExp]"===d(t)}function p(t){return"object"==typeof t&&"[object Date]"===d(t)}function l(t){return"object"==typeof t&&"[object Error]"===d(t)}function d(t){return Object.prototype.toString.call(t)}},function(t,e){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){var n=e[4];return void 0!==n?n:t._obj}},function(t,e){
/*!
 * Chai - getName utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){if(t.name)return t.name;var e=/^\s?function ([^(]*)\(/.exec(t);return e&&e[1]?e[1]:""}},function(t,e){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){var e=[];for(var n in t)e.push(n);return e}},function(t,e,n){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=n(1);t.exports=function(t){var e=r(t),n=Object.prototype.toString.call(t);if(e.length>=40){if("[object Function]"===n)return t.name&&""!==t.name?"[Function: "+t.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+t.length+") ]";if("[object Object]"===n){var o=Object.keys(t);return"{ Object ("+(o.length>2?o.splice(0,2).join(", ")+", ...":o.join(", "))+") }"}return e}return e}},function(t,e){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var r=t.__flags||(t.__flags=Object.create(null));for(var o in e.__flags||(e.__flags=Object.create(null)),n=3!==arguments.length||n,r)(n||"object"!==o&&"ssfi"!==o&&"message"!=o)&&(e.__flags[o]=r[o])}},function(t,e,n){
/*!
 * chai
 * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=[];
/*!
 * Chai version
 */(e=t.exports={}).version="1.7.2",
/*!
 * Assertion Error
 */
e.AssertionError=n(8);
/*!
 * Utils for plugins (not exported)
 */
var o=n(9);e.use=function(t){return~r.indexOf(t)||(t(this,o),r.push(t)),this};
/*!
 * Primary `Assertion` prototype
 */
var i=n(26);e.use(i);
/*!
 * Core Assertions
 */
var s=n(27);e.use(s);
/*!
 * Expect interface
 */
var a=n(28);e.use(a);
/*!
 * Should interface
 */
var u=n(29);e.use(u);
/*!
 * Assert interface
 */
var c=n(30);e.use(c)},function(t,e){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function n(){var t=[].slice.call(arguments);function e(e,n){Object.keys(n).forEach(function(r){~t.indexOf(r)||(e[r]=n[r])})}return function(){for(var t=[].slice.call(arguments),n=0,r={};n<t.length;n++)e(r,t[n]);return r}}function r(t,e,r){var o=n("name","message","stack","constructor","toJSON")(e||{});for(var i in this.message=t||"Unspecified AssertionError",this.showDiff=!1,o)this[i]=o[i];(r=r||arguments.callee)&&Error.captureStackTrace&&Error.captureStackTrace(this,r)}
/*!
 * Inherit from Error.prototype
 */
/*!
 * Primary Exports
 */
t.exports=r,r.prototype=Object.create(Error.prototype),
/*!
 * Statically set name
 */
r.prototype.name="AssertionError",
/*!
 * Ensure correct constructor
 */
r.prototype.constructor=r,r.prototype.toJSON=function(t){var e=n("constructor","toJSON","stack")({name:this.name},this);return!1!==t&&this.stack&&(e.stack=this.stack),e}},function(t,e,n){
/*!
 * test utility
 */
(e=t.exports={}).test=n(10),
/*!
 * type utility
 */
e.type=n(11),
/*!
 * message utility
 */
e.getMessage=n(12),
/*!
 * actual utility
 */
e.getActual=n(2),
/*!
 * Inspect util
 */
e.inspect=n(1),
/*!
 * Object Display util
 */
e.objDisplay=n(5),
/*!
 * Flag utility
 */
e.flag=n(0),
/*!
 * Flag transferring utility
 */
e.transferFlags=n(6),
/*!
 * Deep equal utility
 */
e.eql=n(14),
/*!
 * Deep path value
 */
e.getPathValue=n(20),
/*!
 * Function name
 */
e.getName=n(3),
/*!
 * add Property
 */
e.addProperty=n(21),
/*!
 * add Method
 */
e.addMethod=n(22),
/*!
 * overwrite Property
 */
e.overwriteProperty=n(23),
/*!
 * overwrite Method
 */
e.overwriteMethod=n(24),
/*!
 * Add a chainable method
 */
e.addChainableMethod=n(25)},function(t,e,n){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=n(0);t.exports=function(t,e){var n=r(t,"negate"),o=e[0];return n?!o:o}},function(t,e){
/*!
 * Chai - type utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Detectable javascript natives
 */
var n={"[object Arguments]":"arguments","[object Array]":"array","[object Date]":"date","[object Function]":"function","[object Number]":"number","[object RegExp]":"regexp","[object String]":"string"};t.exports=function(t){var e=Object.prototype.toString.call(t);return n[e]?n[e]:null===t?"null":void 0===t?"undefined":t===Object(t)?"object":typeof t}},function(t,e,n){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=n(0),o=n(2),i=(n(1),n(5));t.exports=function(t,e){var n=r(t,"negate"),s=r(t,"object"),a=e[3],u=o(t,e),c=n?e[2]:e[1],h=r(t,"message");return c=(c=c||"").replace(/#{this}/g,i(s)).replace(/#{act}/g,i(u)).replace(/#{exp}/g,i(a)),h?h+": "+c:c}},function(t,e){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){var e=Object.getOwnPropertyNames(subject);function n(t){-1===e.indexOf(t)&&e.push(t)}for(var r=Object.getPrototypeOf(subject);null!==r;)Object.getOwnPropertyNames(r).forEach(n),r=Object.getPrototypeOf(r);return e}},function(t,e,n){t.exports=i;var r,o=n(4);try{r=n(15).Buffer}catch(t){r={isBuffer:function(){return!1}}}function i(t,e,n){if(t===e)return!0;if(r.isBuffer(t)&&r.isBuffer(e)){if(t.length!=e.length)return!1;for(var u=0;u<t.length;u++)if(t[u]!==e[u])return!1;return!0}return e instanceof Date?t instanceof Date&&t.getTime()===e.getTime():"object"!=typeof t&&"object"!=typeof e?t===e:e instanceof RegExp?t instanceof RegExp&&t.toString()===e.toString():function(t,e,n){if(s(t)||s(e))return!1;if(t.prototype!==e.prototype)return!1;var r;if(n){for(r=0;r<n.length;r++)if(n[r][0]===t&&n[r][1]===e||n[r][0]===e&&n[r][1]===t)return!0}else n=[];if(a(t))return!!a(e)&&(t=pSlice.call(t),e=pSlice.call(e),i(t,e,n));try{var u,c=o(t),h=o(e)}catch(t){return!1}if(c.length!=h.length)return!1;for(c.sort(),h.sort(),r=c.length-1;r>=0;r--)if(c[r]!=h[r])return!1;for(n.push([t,e]),r=c.length-1;r>=0;r--)if(u=c[r],!i(t[u],e[u],n))return!1;return!0}(t,e,n)}function s(t){return null===t||void 0===t}function a(t){return"[object Arguments]"==Object.prototype.toString.call(t)}},function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n(17),o=n(18),i=n(19);function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,n){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return c(this,t,e,n)}function c(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=p(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|d(e,n),o=(t=a(t,r)).write(e,n);o!==r&&(t=t.slice(0,o));return t}(t,e,n):function(t,e){if(u.isBuffer(e)){var n=0|l(e.length);return 0===(t=a(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||function(t){return t!=t}(e.length)?a(t,0):p(t,e);if("Buffer"===e.type&&i(e.data))return p(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e){if(h(e),t=a(t,e<0?0:0|l(e)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function p(t,e){var n=e.length<0?0:0|l(e.length);t=a(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function l(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function d(t,e){if(u.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return D(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return q(t).length;default:if(r)return D(t).length;e=(""+e).toLowerCase(),r=!0}}function g(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function y(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:b(t,e,n,r,o);if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):b(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function b(t,e,n,r,o){var i,s=1,a=t.length,u=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,n/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var h=-1;for(i=n;i<a;i++)if(c(t,i)===c(e,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===u)return h*s}else-1!==h&&(i-=i-h),h=-1}else for(n+u>a&&(n=a-u),i=n;i>=0;i--){for(var f=!0,p=0;p<u;p++)if(c(t,i+p)!==c(e,p)){f=!1;break}if(f)return i}return-1}function w(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function v(t,e,n,r){return z(D(e,t.length-n),t,n,r)}function x(t,e,n,r){return z(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function m(t,e,n,r){return x(t,e,n,r)}function A(t,e,n,r){return z(q(e),t,n,r)}function E(t,e,n,r){return z(function(t,e){for(var n,r,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}(e,t.length-n),t,n,r)}function j(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function _(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i,s,a,u,c=t[o],h=null,f=c>239?4:c>223?3:c>191?2:1;if(o+f<=n)switch(f){case 1:c<128&&(h=c);break;case 2:128==(192&(i=t[o+1]))&&(u=(31&c)<<6|63&i)>127&&(h=u);break;case 3:i=t[o+1],s=t[o+2],128==(192&i)&&128==(192&s)&&(u=(15&c)<<12|(63&i)<<6|63&s)>2047&&(u<55296||u>57343)&&(h=u);break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],128==(192&i)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(h=u)}null===h?(h=65533,f=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|1023&h),r.push(h),o+=f}return function(t){var e=t.length;if(e<=P)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=P));return n}(r)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,n){return c(null,t,e,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,n){return function(t,e,n,r){return h(e),e<=0?a(t,e):void 0!==n?"string"==typeof r?a(t,e).fill(n,r):a(t,e).fill(n):a(t,e)}(null,t,e,n)},u.allocUnsafe=function(t){return f(null,t)},u.allocUnsafeSlow=function(t){return f(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=u.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var s=t[n];if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,o),o+=s.length}return r},u.byteLength=d,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?_(this,0,t):function(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,e,n);case"utf8":case"utf-8":return _(this,e,n);case"ascii":return O(this,e,n);case"latin1":case"binary":return T(this,e,n);case"base64":return j(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,n,r,o){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,o>>>=0,this===t)return 0;for(var i=o-r,s=n-e,a=Math.min(i,s),c=this.slice(r,o),h=t.slice(e,n),f=0;f<a;++f)if(c[f]!==h[f]){i=c[f],s=h[f];break}return i<s?-1:s<i?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return y(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return y(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return w(this,t,e,n);case"utf8":case"utf-8":return v(this,t,e,n);case"ascii":return x(this,t,e,n);case"latin1":case"binary":return m(this,t,e,n);case"base64":return A(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function O(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function T(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function S(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=N(t[i]);return o}function M(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function R(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function B(t,e,n,r,o,i){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function U(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function L(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function k(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function C(t,e,n,r,i){return i||k(t,0,n,4),o.write(t,e,n,r,23,4),n+4}function I(t,e,n,r,i){return i||k(t,0,n,8),o.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=u.prototype;else{var o=e-t;n=new u(o,void 0);for(var i=0;i<o;++i)n[i]=this[i+t]}return n},u.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||R(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},u.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||R(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},u.prototype.readUInt8=function(t,e){return e||R(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||R(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||R(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||R(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||R(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||R(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return e||R(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||R(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){e||R(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return e||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||R(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||R(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||R(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||R(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||B(this,t,e,n,Math.pow(2,8*n)-1,0);var o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},u.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||B(this,t,e,n,Math.pow(2,8*n)-1,0);var o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},u.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):U(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):U(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):L(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);B(this,t,e,n,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);B(this,t,e,n,o-1,-o)}var i=n-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):U(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):U(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):L(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,n){return C(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return C(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return I(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return I(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,i=r-n;if(this===t&&n<e&&e<r)for(o=i-1;o>=0;--o)t[o+e]=this[o+n];else if(i<1e3||!u.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+i),e);return i},u.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{var s=u.isBuffer(t)?t:D(new u(t,r).toString()),a=s.length;for(i=0;i<n-e;++i)this[i+e]=s[i%a]}return this};var Y=/[^+\/0-9A-Za-z-_]/g;function N(t){return t<16?"0"+t.toString(16):t.toString(16)}function D(t,e){var n;e=e||1/0;for(var r=t.length,o=null,i=[],s=0;s<r;++s){if((n=t.charCodeAt(s))>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function q(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(Y,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function z(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}}).call(this,n(16))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";e.byteLength=function(t){var e=c(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){for(var e,n=c(t),r=n[0],s=n[1],a=new i(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),u=0,h=s>0?r-4:r,f=0;f<h;f+=4)e=o[t.charCodeAt(f)]<<18|o[t.charCodeAt(f+1)]<<12|o[t.charCodeAt(f+2)]<<6|o[t.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=255&e;2===s&&(e=o[t.charCodeAt(f)]<<2|o[t.charCodeAt(f+1)]>>4,a[u++]=255&e);1===s&&(e=o[t.charCodeAt(f)]<<10|o[t.charCodeAt(f+1)]<<4|o[t.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=255&e);return a},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],s=0,a=n-o;s<a;s+=16383)i.push(f(t,s,s+16383>a?a:s+16383));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)r[a]=s[a],o[s.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function h(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function f(t,e,n){for(var r,o=[],i=e;i<n;i+=3)r=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]),o.push(h(r));return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,o){var i,s,a=8*o-r-1,u=(1<<a)-1,c=u>>1,h=-7,f=n?o-1:0,p=n?-1:1,l=t[e+f];for(f+=p,i=l&(1<<-h)-1,l>>=-h,h+=a;h>0;i=256*i+t[e+f],f+=p,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=r;h>0;s=256*s+t[e+f],f+=p,h-=8);if(0===i)i=1-c;else{if(i===u)return s?NaN:1/0*(l?-1:1);s+=Math.pow(2,r),i-=c}return(l?-1:1)*s*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var s,a,u,c=8*i-o-1,h=(1<<c)-1,f=h>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=r?0:i-1,d=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+f>=1?p/u:p*Math.pow(2,1-f))*u>=2&&(s++,u/=2),s+f>=h?(a=0,s=h):s+f>=1?(a=(e*u-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[n+l]=255&a,l+=d,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[n+l]=255&s,l+=d,s/=256,c-=8);t[n+l-d]|=128*g}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){
/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */
t.exports=function(t,e){
/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */
return function(t,e){for(var n,r=e,o=0,i=t.length;o<i;o++){var s=t[o];r?(void 0!==s.p?r=r[s.p]:void 0!==s.i&&(r=r[s.i]),o==i-1&&(n=r)):n=void 0}return n}(
/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */
function(t){return t.replace(/\[/g,".[").match(/(\\\.|[^.]+?)+/g).map(function(t){var e=/\[(\d+)\]$/.exec(t);return e?{i:parseFloat(e[1])}:{p:t}})}(t),e)}},function(t,e){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){Object.defineProperty(t,e,{get:function(){var t=n.call(this);return void 0===t?this:t},configurable:!0})}},function(t,e){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){t[e]=function(){var t=n.apply(this,arguments);return void 0===t?this:t}}},function(t,e){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var r=Object.getOwnPropertyDescriptor(t,e),o=function(){};r&&"function"==typeof r.get&&(o=r.get),Object.defineProperty(t,e,{get:function(){var t=n(o).call(this);return void 0===t?this:t},configurable:!0})}},function(t,e){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var r=t[e],o=function(){return this};r&&"function"==typeof r&&(o=r),t[e]=function(){var t=n(o).apply(this,arguments);return void 0===t?this:t}}},function(t,e,n){
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var r=n(6),o="__proto__"in Object,i=/^(?:length|name|arguments|caller)$/,s=Function.prototype.call,a=Function.prototype.apply;
/*!
 * Module variables
 */t.exports=function(t,e,n,u){"function"!=typeof u&&(u=function(){}),Object.defineProperty(t,e,{get:function(){u.call(this);var e=function(){var t=n.apply(this,arguments);return void 0===t?this:t};if(o){var c=e.__proto__=Object.create(this);c.call=s,c.apply=a}else{Object.getOwnPropertyNames(t).forEach(function(n){if(!i.test(n)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r)}})}return r(this,e),e},configurable:!0})}},function(t,e){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){
/*!
   * Module dependencies.
   */
var n=t.AssertionError,r=e.flag;
/*!
   * Module export.
   */
/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * @api private
   */
function o(t,e,n){r(this,"ssfi",n||arguments.callee),r(this,"object",t),r(this,"message",e)}
/*!
    * ### Assertion.includeStack
    *
    * User configurable property, influences whether stack trace
    * is included in Assertion error message. Default of false
    * suppresses stack trace in the error message
    *
    *     Assertion.includeStack = true;  // enable stack on error
    *
    * @api public
    */t.Assertion=o,o.includeStack=!1,
/*!
   * ### Assertion.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @api public
   */
o.showDiff=!0,o.addProperty=function(t,n){e.addProperty(this.prototype,t,n)},o.addMethod=function(t,n){e.addMethod(this.prototype,t,n)},o.addChainableMethod=function(t,n,r){e.addChainableMethod(this.prototype,t,n,r)},o.overwriteProperty=function(t,n){e.overwriteProperty(this.prototype,t,n)},o.overwriteMethod=function(t,n){e.overwriteMethod(this.prototype,t,n)},
/*!
   * ### .assert(expression, message, negateMessage, expected, actual)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String} message to display if fails
   * @param {String} negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @api private
   */
o.prototype.assert=function(t,i,s,a,u,c){var h=e.test(this,arguments);if(!0!==c&&(c=!1),!0!==o.showDiff&&(c=!1),!h){i=e.getMessage(this,arguments);var f=e.getActual(this,arguments);throw new n(i,{actual:f,expected:a,showDiff:c},o.includeStack?this.assert:r(this,"ssfi"))}},
/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(o.prototype,"_obj",{get:function(){return r(this,"object")},set:function(t){r(this,"object",t)}})}},function(t,e){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){var n=t.Assertion,r=(Object.prototype.toString,e.flag);function o(t,n){n&&r(this,"message",n),t=t.toLowerCase();var o=r(this,"object"),i=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an ":"a ";this.assert(t===e.type(o),"expected #{this} to be "+i+t,"expected #{this} not to be "+i+t)}function i(){r(this,"contains",!0)}function s(t,n){n&&r(this,"message",n);var o=r(this,"object");this.assert(~o.indexOf(t),"expected #{this} to include "+e.inspect(t),"expected #{this} to not include "+e.inspect(t))}function a(){var t=r(this,"object"),e=Object.prototype.toString.call(t);this.assert("[object Arguments]"===e,"expected #{this} to be arguments but got "+e,"expected #{this} to not be arguments")}function u(t,e){e&&r(this,"message",e);var n=r(this,"object");if(r(this,"deep"))return this.eql(t);this.assert(t===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",t,this._obj,!0)}function c(t,n){n&&r(this,"message",n),this.assert(e.eql(t,r(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",t,this._obj,!0)}function h(t,e){e&&r(this,"message",e);var o=r(this,"object");if(r(this,"doLength")){new n(o,e).to.have.property("length");var i=o.length;this.assert(i>t,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",t,i)}else this.assert(o>t,"expected #{this} to be above "+t,"expected #{this} to be at most "+t)}function f(t,e){e&&r(this,"message",e);var o=r(this,"object");if(r(this,"doLength")){new n(o,e).to.have.property("length");var i=o.length;this.assert(i>=t,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",t,i)}else this.assert(o>=t,"expected #{this} to be at least "+t,"expected #{this} to be below "+t)}function p(t,e){e&&r(this,"message",e);var o=r(this,"object");if(r(this,"doLength")){new n(o,e).to.have.property("length");var i=o.length;this.assert(i<t,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",t,i)}else this.assert(o<t,"expected #{this} to be below "+t,"expected #{this} to be at least "+t)}function l(t,e){e&&r(this,"message",e);var o=r(this,"object");if(r(this,"doLength")){new n(o,e).to.have.property("length");var i=o.length;this.assert(i<=t,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",t,i)}else this.assert(o<=t,"expected #{this} to be at most "+t,"expected #{this} to be above "+t)}function d(t,n){n&&r(this,"message",n);var o=e.getName(t);this.assert(r(this,"object")instanceof t,"expected #{this} to be an instance of "+o,"expected #{this} to not be an instance of "+o)}function g(t,n){n&&r(this,"message",n);var o=r(this,"object");this.assert(o.hasOwnProperty(t),"expected #{this} to have own property "+e.inspect(t),"expected #{this} to not have own property "+e.inspect(t))}function y(){r(this,"doLength",!0)}function b(t,e){e&&r(this,"message",e);var o=r(this,"object");new n(o,e).to.have.property("length");var i=o.length;this.assert(i==t,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",t,i)}function w(t){var n,o=r(this,"object"),i=!0;if(!(t=t instanceof Array?t:Array.prototype.slice.call(arguments)).length)throw new Error("keys required");var s=Object.keys(o),a=t.length;if(i=t.every(function(t){return~s.indexOf(t)}),r(this,"negate")||r(this,"contains")||(i=i&&t.length==s.length),a>1){var u=(t=t.map(function(t){return e.inspect(t)})).pop();n=t.join(", ")+", and "+u}else n=e.inspect(t[0]);n=(a>1?"keys ":"key ")+n,n=(r(this,"contains")?"contain ":"have ")+n,this.assert(i,"expected #{this} to "+n,"expected #{this} to not "+n)}function v(t,o,i){i&&r(this,"message",i);var s=r(this,"object");new n(s,i).is.a("function");var a=!1,u=null,c=null,h=null;0===arguments.length?(o=null,t=null):t&&(t instanceof RegExp||"string"==typeof t)?(o=t,t=null):t&&t instanceof Error?(u=t,t=null,o=null):"function"==typeof t?c=(new t).name:t=null;try{s()}catch(n){if(u)return this.assert(n===u,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",u,n),this;if(t&&(this.assert(n instanceof t,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",c,n),!o))return this;var f="object"===e.type(n)&&"message"in n?n.message:""+n;if(null!=f&&o&&o instanceof RegExp)return this.assert(o.exec(f),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",o,f),this;if(null!=f&&o&&"string"==typeof o)return this.assert(~f.indexOf(o),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",o,f),this;a=!0,h=n}var p="",l=null!==c?c:u?"#{exp}":"an error";a&&(p=" but #{act} was thrown"),this.assert(!0===a,"expected #{this} to throw "+l+p,"expected #{this} to not throw "+l+p,u,h)}function x(t,e){return t.every(function(t){return-1!==e.indexOf(t)})}["to","be","been","is","and","have","with","that","at","of","same"].forEach(function(t){n.addProperty(t,function(){return this})}),n.addProperty("not",function(){r(this,"negate",!0)}),n.addProperty("deep",function(){r(this,"deep",!0)}),n.addChainableMethod("an",o),n.addChainableMethod("a",o),n.addChainableMethod("include",s,i),n.addChainableMethod("contain",s,i),n.addProperty("ok",function(){this.assert(r(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),n.addProperty("true",function(){this.assert(!0===r(this,"object"),"expected #{this} to be true","expected #{this} to be false",!this.negate)}),n.addProperty("false",function(){this.assert(!1===r(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!this.negate)}),n.addProperty("null",function(){this.assert(null===r(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),n.addProperty("undefined",function(){this.assert(void 0===r(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),n.addProperty("exist",function(){this.assert(null!=r(this,"object"),"expected #{this} to exist","expected #{this} to not exist")}),n.addProperty("empty",function(){var t=r(this,"object"),e=t;Array.isArray(t)||"string"==typeof object?e=t.length:"object"==typeof t&&(e=Object.keys(t).length),this.assert(!e,"expected #{this} to be empty","expected #{this} not to be empty")}),n.addProperty("arguments",a),n.addProperty("Arguments",a),n.addMethod("equal",u),n.addMethod("equals",u),n.addMethod("eq",u),n.addMethod("eql",c),n.addMethod("eqls",c),n.addMethod("above",h),n.addMethod("gt",h),n.addMethod("greaterThan",h),n.addMethod("least",f),n.addMethod("gte",f),n.addMethod("below",p),n.addMethod("lt",p),n.addMethod("lessThan",p),n.addMethod("most",l),n.addMethod("lte",l),n.addMethod("within",function(t,e,o){o&&r(this,"message",o);var i=r(this,"object"),s=t+".."+e;if(r(this,"doLength")){new n(i,o).to.have.property("length");var a=i.length;this.assert(a>=t&&a<=e,"expected #{this} to have a length within "+s,"expected #{this} to not have a length within "+s)}else this.assert(i>=t&&i<=e,"expected #{this} to be within "+s,"expected #{this} to not be within "+s)}),n.addMethod("instanceof",d),n.addMethod("instanceOf",d),n.addMethod("property",function(t,n,o){o&&r(this,"message",o);var i=r(this,"deep")?"deep property ":"property ",s=r(this,"negate"),a=r(this,"object"),u=r(this,"deep")?e.getPathValue(t,a):a[t];if(s&&void 0!==n){if(void 0===u)throw o=null!=o?o+": ":"",new Error(o+e.inspect(a)+" has no "+i+e.inspect(t))}else this.assert(void 0!==u,"expected #{this} to have a "+i+e.inspect(t),"expected #{this} to not have "+i+e.inspect(t));void 0!==n&&this.assert(n===u,"expected #{this} to have a "+i+e.inspect(t)+" of #{exp}, but got #{act}","expected #{this} to not have a "+i+e.inspect(t)+" of #{act}",n,u),r(this,"object",u)}),n.addMethod("ownProperty",g),n.addMethod("haveOwnProperty",g),n.addChainableMethod("length",b,y),n.addMethod("lengthOf",b,y),n.addMethod("match",function(t,e){e&&r(this,"message",e);var n=r(this,"object");this.assert(t.exec(n),"expected #{this} to match "+t,"expected #{this} not to match "+t)}),n.addMethod("string",function(t,o){o&&r(this,"message",o);var i=r(this,"object");new n(i,o).is.a("string"),this.assert(~i.indexOf(t),"expected #{this} to contain "+e.inspect(t),"expected #{this} to not contain "+e.inspect(t))}),n.addMethod("keys",w),n.addMethod("key",w),n.addMethod("throw",v),n.addMethod("throws",v),n.addMethod("Throw",v),n.addMethod("respondTo",function(t,n){n&&r(this,"message",n);var o=r(this,"object"),i=r(this,"itself"),s="function"!==e.type(o)||i?o[t]:o.prototype[t];this.assert("function"==typeof s,"expected #{this} to respond to "+e.inspect(t),"expected #{this} to not respond to "+e.inspect(t))}),n.addProperty("itself",function(){r(this,"itself",!0)}),n.addMethod("satisfy",function(t,n){n&&r(this,"message",n);var o=r(this,"object");this.assert(t(o),"expected #{this} to satisfy "+e.objDisplay(t),"expected #{this} to not satisfy"+e.objDisplay(t),!this.negate,t(o))}),n.addMethod("closeTo",function(t,e,n){n&&r(this,"message",n);var o=r(this,"object");this.assert(Math.abs(o-t)<=e,"expected #{this} to be close to "+t+" +/- "+e,"expected #{this} not to be close to "+t+" +/- "+e)}),n.addMethod("members",function(t,e){e&&r(this,"message",e);var o=r(this,"object");if(new n(o).to.be.an("array"),new n(t).to.be.an("array"),r(this,"contains"))return this.assert(x(t,o),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",o,t);this.assert(x(o,t)&&x(t,o),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",o,t)})}},function(t,e){
/*!
 * chai
 * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){t.expect=function(e,n){return new t.Assertion(e,n)}}},function(t,e){
/*!
 * chai
 * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){var n=t.Assertion;function r(){Object.defineProperty(Object.prototype,"should",{set:function(t){Object.defineProperty(this,"should",{value:t,enumerable:!0,configurable:!0,writable:!0})},get:function(){return this instanceof String||this instanceof Number?new n(this.constructor(this)):this instanceof Boolean?new n(1==this):new n(this)},configurable:!0});var t={equal:function(t,e,r){new n(t,r).to.equal(e)},Throw:function(t,e,r,o){new n(t,o).to.Throw(e,r)},exist:function(t,e){new n(t,e).to.exist},not:{}};return t.not.equal=function(t,e,r){new n(t,r).to.not.equal(e)},t.not.Throw=function(t,e,r,o){new n(t,o).to.not.Throw(e,r)},t.not.exist=function(t,e){new n(t,e).to.not.exist},t.throw=t.Throw,t.not.throw=t.not.Throw,t}t.should=r,t.Should=r}},function(module,exports){
/*!
 * chai
 * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
module.exports=function(chai,util){
/*!
   * Chai dependencies.
   */
var Assertion=chai.Assertion,flag=util.flag,assert=chai.assert=function(t,e){new Assertion(null).assert(t,e,"[ negation message unavailable ]")};
/*!
   * Module export.
   */assert.fail=function(t,e,n,r){throw new chai.AssertionError({actual:t,expected:e,message:n,operator:r,stackStartFunction:assert.fail})},assert.ok=function(t,e){new Assertion(t,e).is.ok},assert.notOk=function(t,e){new Assertion(t,e).is.not.ok},assert.equal=function(t,e,n){var r=new Assertion(t,n);r.assert(e==flag(r,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",e,t)},assert.notEqual=function(t,e,n){var r=new Assertion(t,n);r.assert(e!=flag(r,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",e,t)},assert.strictEqual=function(t,e,n){new Assertion(t,n).to.equal(e)},assert.notStrictEqual=function(t,e,n){new Assertion(t,n).to.not.equal(e)},assert.deepEqual=function(t,e,n){new Assertion(t,n).to.eql(e)},assert.notDeepEqual=function(t,e,n){new Assertion(t,n).to.not.eql(e)},assert.isTrue=function(t,e){new Assertion(t,e).is.true},assert.isFalse=function(t,e){new Assertion(t,e).is.false},assert.isNull=function(t,e){new Assertion(t,e).to.equal(null)},assert.isNotNull=function(t,e){new Assertion(t,e).to.not.equal(null)},assert.isUndefined=function(t,e){new Assertion(t,e).to.equal(void 0)},assert.isDefined=function(t,e){new Assertion(t,e).to.not.equal(void 0)},assert.isFunction=function(t,e){new Assertion(t,e).to.be.a("function")},assert.isNotFunction=function(t,e){new Assertion(t,e).to.not.be.a("function")},assert.isObject=function(t,e){new Assertion(t,e).to.be.a("object")},assert.isNotObject=function(t,e){new Assertion(t,e).to.not.be.a("object")},assert.isArray=function(t,e){new Assertion(t,e).to.be.an("array")},assert.isNotArray=function(t,e){new Assertion(t,e).to.not.be.an("array")},assert.isString=function(t,e){new Assertion(t,e).to.be.a("string")},assert.isNotString=function(t,e){new Assertion(t,e).to.not.be.a("string")},assert.isNumber=function(t,e){new Assertion(t,e).to.be.a("number")},assert.isNotNumber=function(t,e){new Assertion(t,e).to.not.be.a("number")},assert.isBoolean=function(t,e){new Assertion(t,e).to.be.a("boolean")},assert.isNotBoolean=function(t,e){new Assertion(t,e).to.not.be.a("boolean")},assert.typeOf=function(t,e,n){new Assertion(t,n).to.be.a(e)},assert.notTypeOf=function(t,e,n){new Assertion(t,n).to.not.be.a(e)},assert.instanceOf=function(t,e,n){new Assertion(t,n).to.be.instanceOf(e)},assert.notInstanceOf=function(t,e,n){new Assertion(t,n).to.not.be.instanceOf(e)},assert.include=function(t,e,n){var r=new Assertion(t,n);if(Array.isArray(t))r.to.include(e);else{if("string"!=typeof t)throw new chai.AssertionError("expected an array or string",null,assert.include);r.to.contain.string(e)}},assert.notInclude=function(t,e,n){var r=new Assertion(t,n);if(Array.isArray(t))r.to.not.include(e);else{if("string"!=typeof t)throw new chai.AssertionError("expected an array or string",null,assert.notInclude);r.to.not.contain.string(e)}},assert.match=function(t,e,n){new Assertion(t,n).to.match(e)},assert.notMatch=function(t,e,n){new Assertion(t,n).to.not.match(e)},assert.property=function(t,e,n){new Assertion(t,n).to.have.property(e)},assert.notProperty=function(t,e,n){new Assertion(t,n).to.not.have.property(e)},assert.deepProperty=function(t,e,n){new Assertion(t,n).to.have.deep.property(e)},assert.notDeepProperty=function(t,e,n){new Assertion(t,n).to.not.have.deep.property(e)},assert.propertyVal=function(t,e,n,r){new Assertion(t,r).to.have.property(e,n)},assert.propertyNotVal=function(t,e,n,r){new Assertion(t,r).to.not.have.property(e,n)},assert.deepPropertyVal=function(t,e,n,r){new Assertion(t,r).to.have.deep.property(e,n)},assert.deepPropertyNotVal=function(t,e,n,r){new Assertion(t,r).to.not.have.deep.property(e,n)},assert.lengthOf=function(t,e,n){new Assertion(t,n).to.have.length(e)},assert.Throw=function(t,e,n,r){("string"==typeof e||e instanceof RegExp)&&(n=e,e=null),new Assertion(t,r).to.Throw(e,n)},assert.doesNotThrow=function(t,e,n){"string"==typeof e&&(n=e,e=null),new Assertion(t,n).to.not.Throw(e)},assert.operator=function(val,operator,val2,msg){if(!~["==","===",">",">=","<","<=","!=","!=="].indexOf(operator))throw new Error('Invalid operator "'+operator+'"');var test=new Assertion(eval(val+operator+val2),msg);test.assert(!0===flag(test,"object"),"expected "+util.inspect(val)+" to be "+operator+" "+util.inspect(val2),"expected "+util.inspect(val)+" to not be "+operator+" "+util.inspect(val2))},assert.closeTo=function(t,e,n,r){new Assertion(t,r).to.be.closeTo(e,n)},assert.sameMembers=function(t,e,n){new Assertion(t,n).to.have.same.members(e)},assert.includeMembers=function(t,e,n){new Assertion(t,n).to.include.members(e)}
/*!
   * Undocumented / untested
   */,assert.ifError=function(t,e){new Assertion(t,e).to.not.be.ok},
/*!
   * Aliases.
   */
function t(e,n){return assert[n]=assert[e],t}("Throw","throw")("Throw","throws")}}]);