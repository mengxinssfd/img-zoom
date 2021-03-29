/*!
 * ImgZoom v1.2.0
 * Author: dyh
 * Documentation: https://github.com/mengxinssfd/img-zoom#readme
 * Date: 2021-3-30
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ImgZoom=t():e.ImgZoom=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return _})),n.d(t,"c",(function(){return v}));n(10);var r=n(1),o=n.n(r),i=n(2);function a(e){var t=o()(e);return"object"!==t?t:Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function u(e){return"object"===a(e)}function c(e){return"array"===a(e)}function s(e){var t=a(e);if(["string","null","undefined","number","boolean"].indexOf(t)>-1)return!1;var n=!!e&&"length"in e&&e.length;return"function"!==t&&e!==window&&("array"===t||0===n||f(n)&&n>0&&n-1 in e)}function l(e){return"string"===a(e)}function f(e){return"number"===a(e)}function p(e){return"function"===a(e)}function d(e){return void 0===e}function h(e){var t=o()(e);return!!e&&("object"===t||"function"===t)&&"function"==typeof e.then}function _(e){return f(e)&&e!=e}function v(e){if(Object(i.a)([void 0,null,"",NaN],e))return!0;switch(a(e)){case"array":return!e.length;case"object":return function(e){if(!u(e))return!1;for(var t in e)return void 0===t;return!0}(e)}return!1}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));n(3);var r=n(0);n(11);function o(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e||this,i=o.length,a=n;a<i;a++){var u=o[a];if("function"==typeof t){if(t(u,a,o))return!0}else if(u===t)return!0;if(Object(r.e)(u)&&Object(r.e)(t))return!0}return!1}function i(e,t){if(!e.length)return e;for(var n=t||function(e,t){return e===t},r=[],o=function(t){var o=e[t];if(r.some((function(e){return n(e,o)})))return"continue";r.push(o)},i=0;i<e.length;i++)o(i);return r}},function(e,t,n){var r=n(12),o=n(13),i=n(7),a=n(14);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){e.exports=n(18)},function(e,t,n){var r=n(15),o=n(16),i=n(7),a=n(17);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(6);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},e.exports.default=e.exports,e.exports.__esModule=!0},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return deepClone}));var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__),_type__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0);function cloneFunction(fn){return"function"!==Object(_type__WEBPACK_IMPORTED_MODULE_3__.j)(fn)?fn:(eval("newFn = "+fn.toString()),newFn);var newFn}var cloneStrategies=(st={array:function(e){return new e.constructor},function:function(e){return cloneFunction(e)},date:function(e){return new e.constructor(e)}},st.object=st.array,st.regexp=st.date,st),st;function deepClone(e){var t=Object(_type__WEBPACK_IMPORTED_MODULE_3__.j)(e),n=cloneStrategies[t],r=n?n(e):e;if(-1===["object","array","function"].indexOf(t))return r;var o=e;for(var i in o)o.hasOwnProperty(i)&&(r[i]=deepClone(o[i]));return r}function deepCloneBfs(e){if("object"!==_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(e)||!e)return e;var t=new e.constructor,n=r(e,t);function r(e,t){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push([r,e[r],t]);return n}for(;n.length;){var o=n.shift(),i=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(o,3),a=i[0],u=i[1],c=i[2],s=_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(u);console.log(s),"object"===s?(void 0===c[a]&&(c[a]=new u.constructor),n.push.apply(n,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(r(u,c[a])))):c[a]=u}return t}},function(e,t,n){var r=n(6);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=b(a,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function f(){}function p(){}function d(){}var h={};h[o]=function(){return this};var _=Object.getPrototypeOf,v=_&&_(_(O([])));v&&v!==t&&n.call(v,o)&&(h=v);var m=d.prototype=f.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,u){var c=s(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function g(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(g,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=m.constructor=d,d.constructor=p,p.displayName=u(d,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,a,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},y(w.prototype),w.prototype[i]=function(){return this},e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(m),u(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var r=n(8),o=n.n(r),i=n(9),a=n.n(i),u=n(1),c=n.n(u),s=n(3),l=n.n(s),f=n(2),p=(n(5),n(0));function d(e,t){for(var n in e){if(e.hasOwnProperty(n))if(!1===t(e[n],n,e))return}}function h(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((function(t){d(t,(function(t,n){e[n]=t}))})),e}var _=document.createElement("div").style,v=function(){var e={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var t in e)if(void 0!==_[e[t]])return t;return!1}();function m(){return!!document.documentElement.classList}function y(e){if(!e)return[];var t=e;return Object(p.h)(e)&&(t=[e.trim()]),t.reduce((function(e,t,n){var r=t.trim().split(/ +/);return e.push.apply(e,l()(r)),e}),[])}m();var w=m()?function(e,t){var n=y(t),r=e.classList;return n.forEach((function(e){return r.add(e)})),e.className}:function(e,t){var n=y(t),r=e.className+" "+n.join(" ");return n=r.split(" "),n=(n=Object(f.b)(n)).filter((function(e){return Boolean(e)})),e.className=n.join(" "),e.className};var b=m()?function(e,t){return y(t).forEach((function(t){e.classList.remove(t)})),e.className}:function(e,t){var n=y(t),r=Object(f.b)(e.className.split(/ +/).filter((function(e){return!Object(f.a)(n,e)})));return e.className=r.join(" ")};function g(e,t){var n=document.createElement(e);return d(t,(function(e,t,r){var o="object"===c()(e);"style"===t&&o?d(e,(function(e,t){n.style[t]=e})):n.setAttribute(t,o?JSON.stringify(e):e)})),n}function x(e){return e&&"object"===c()(e)&&1===e.nodeType&&"string"==typeof e.nodeName}function E(e){return e instanceof HTMLElement}var O=Object(p.i)(window.HTMLElement)?x:E;function L(e,t){return O(t)&&t.nodeName===e.toUpperCase()}function M(){return"ontouchstart"in window}n(4);var j=["零","一","二","三","四","五","六","七","八","九"],P=["十","百","千"],A=[""].concat(P,["万"],P,["亿"]),S=A.length,I=function e(t){var n=~~t,r="",o=0;if(t>=0&&t<10)return e.numbers[t];for(;n>=1&&o<S;){var i=e.units[o],a=e.numbers[n%10];a!==e.numbers[0]&&(r=i+r),1===n&&1===o||(r=a+r),n=~~(n/10),o++}return r.replace(/(零+$)|((零)\3+)/g,"$3")};I.units=l()(A),I.numbers=[].concat(j);var T=function e(t){if(new RegExp("([^".concat(e.units.join()+e.numbers.join(),"])")).test(t))throw new TypeError("发现不符合规则的字符(必须在units和numbers里存在的字符):"+RegExp.$1);return t.split(new RegExp("[".concat(e.units[4]).concat(e.units[8],"]"),"g")).map((function(t){for(var n=0,r=1,o=t.length-1;o>-1;o--){var i=t[o],a=e.numbers.indexOf(i);a>0&&(n+=a*r);var u=e.units.indexOf(i);r=u>0?Math.pow(10,u):r}return t[0]===e.units[1]&&(n+=10),n})).reverse().reduce((function(e,t,n){return e+Math.pow(1e4,n)*t}),0)};T.units=l()(A),T.numbers=[].concat(j);var k="\n.img-zoom-wrapper {\n  z-index: 10000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.img-zoom-wrapper.hide {\n  display: none;\n}\n.img-zoom-wrapper .img-zoom-view {\n  z-index: 1000000;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  display: block;\n  width: auto;\n  height: auto;\n  user-select: none;\n  border: none;\n  outline: none;\n}\n".replace(/[\n\r]/g,""),C=function(e){return!1!==v&&("transform"===v?e:v+e.charAt(0).toUpperCase()+e.substr(1))}("transform"),D={max:10,min:.1,step:.1,default:1},N={triggerEl:".img-zoom",isClickViewImgClose:!1,dataset:"data-img-zoom"},z=function(){},R=function(){function e(t){o()(this,e),this.needCancelEventList=[];var n=h({},N,t||{});n.scale=h({},D,n.scale||{}),this.options=n;var r=this.options.scale,i=r.min,a=r.max,u=r.default,c=r.step;if(a<i)throw new Error("scale.max不能小于scale.min");if(u<i)throw new Error("scale.default不能小于scale.min");if(u>a)throw new Error("scale.default不能大于scale.max");if(i<=0)throw new Error("scale.min不能小于等于0");c>a&&console.warn("scale.step已大于scale.max"),this.init()}return a()(e,[{key:"init",value:function(){this.initView(),this.addInitViewEventListener(),this.initTrigger()}},{key:"setImg",value:function(e){this.scale=this.options.scale.default,this.zoomImg.src=e,b(this.wrapper,"hide"),this.resetViewScaleAndPosition(),this.saveViewPositionFromMatrix()}},{key:"initTrigger",value:function(){var e=this,t=function(t){var n=t.target,r=n.getAttribute(e.options.dataset);!r&&L("IMG",n)&&(r=t.target.src),r&&e.setImg(r)},n=this.options.triggerEl,r=Object(p.b)(n)?n:[n],o=this.needCancelEventList;Array.prototype.forEach.call(r,(function(e){O(e)&&(e.addEventListener("click",t),o.push((function(){e.removeEventListener("click",t)}))),Object(p.h)(e)&&o.push(function(e,t,n,r){var o;function i(e){e=e||window.event;var t=O(n)?[n]:Array.prototype.slice.call(document.querySelectorAll(n),0);Object(f.a)(t,e.target)&&r(e)}return null===(o=e?O(e)?e:document.querySelector(e):document.documentElement)?null:(o.addEventListener(t,i),function(){o.removeEventListener(t,i)})}(null,"click",e,t))}));var i,a,u,c=(i=function(){z("resize"),e.resetViewScaleAndPosition(),e.saveViewPositionFromMatrix()},a=100,u=null,function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];u&&(clearTimeout(u),u=null),u=setTimeout((function(){u=null,i.apply(e,n)}),a)});window.addEventListener("resize",c),this.needCancelEventList.push((function(){window.removeEventListener("resize",c)}))}},{key:"resetViewScaleAndPosition",value:function(){this.zoomImg.style[C]="translate(-50%, -50%) scale(".concat(this.scale,")")}},{key:"getViewPosition",value:function(){var e=window.innerHeight||document.documentElement.clientHeight,t=window.innerWidth||document.documentElement.clientWidth,n=this.zoomImg,r=n.offsetWidth,o=n.offsetHeight;z(e,t,r,o),this.left=(e-r)/2,this.top=(t-o)/2}},{key:"getZoomImgStyleMatrixVal",value:function(){var e=getComputedStyle(this.zoomImg)[C];return(/matrix\(([\d\\.,\- ]+)\)/.test(e)?RegExp.$1:"0,0,0,0,0,0").split(/, ?/)}},{key:"saveViewPositionFromMatrix",value:function(){var e=this.getZoomImgStyleMatrixVal();this.left=Number(e[4])||0,this.top=Number(e[5])||0}},{key:"setViewScaleAndPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.scale,n=this.getZoomImgStyleMatrixVal();n[0]=n[3]=t,n[4]=this.left,n[5]=this.top,this.zoomImg.style[C]="".concat(e&&M()?"translateZ(0) ":"","matrix(").concat(n.join(", "),")")}},{key:"initView",value:function(){var e=document.createElement("style");e.innerHTML=k;var t=g("div",{class:"img-zoom-wrapper hide"}),n=g("img",{class:"img-zoom-view",draggable:"false",ondragstart:"return false"});document.head.appendChild(e),t.appendChild(n),document.body.appendChild(t),this.zoomImg=n,this.wrapper=t}},{key:"scaleIncrease",value:function(){var e=this.options.scale,t=e.max,n=this.scale+e.step;n>t&&(n=t),this.scale=n,this.setViewScaleAndPosition()}},{key:"scaleDecrease",value:function(){var e=this.options.scale,t=e.min,n=this.scale-e.step;n<t&&(n=t),this.scale=n,this.setViewScaleAndPosition()}},{key:"addInitViewEventListener",value:function(){var e=this,t=this.wrapper,n=this.zoomImg,r=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n){if(!t||!M())return z("wrapper click"),w(e.wrapper,"hide"),n.stopPropagation(),n.preventDefault(),!1}};t.addEventListener("mouseup",r()),t.addEventListener("touchend",r(!0)),t.addEventListener("touchcancel",r(!0)),t.addEventListener("wheel",(function(t){return(t=t||window.event).deltaY>0?e.scaleDecrease():e.scaleIncrease(),t.stopPropagation(),t.preventDefault(),!1})),function(e){var t=e.el,n=e.onDown,r=e.onMove,o=e.onUp,i=e.capture,a=void 0===i?{down:!1,up:!0,move:!1}:i,u=t;if(!O(t))if(Object(p.h)(t)){if(!(u=document.querySelector(t)))throw new Error("element not found!")}else u=window;var c,s={x:0,y:0},l={x:0,y:0};function f(e){var t={x:e.screenX,y:e.screenY};return t.x=~~t.x,t.y=~~t.y,t}function d(e){var t=e.changedTouches[0],n={x:t.clientX,y:t.clientY};return n.x=~~n.x,n.y=~~n.y,n}function h(e,t){l=(c="mouse"===t?f:d)(e),s=l;var r=void 0;return n&&Object(p.d)(n)&&(r=n.call(this,e,l)),r}function _(e){var t=c(e),n=void 0;return r&&Object(p.d)(r)&&(n=r.call(this,e,t,s,l)),s=t,n}function v(e){var t=c(e),n=void 0;return s=t,o&&Object(p.d)(o)&&(n=o.call(this,e,t,l)),w(),n}function m(e){var t=h.call(this,e,"mouse");return window.addEventListener("mousemove",_,a.move),window.addEventListener("mouseup",v,a.up),t}function y(e){var t=h.call(this,e,"touch");return window.addEventListener("touchmove",_,a.move),window.addEventListener("touchend",v,a.up),window.addEventListener("touchcancel",v,a.up),t}function w(){window.removeEventListener("mousemove",_,a.move),window.removeEventListener("mouseup",v,a.up),window.removeEventListener("touchmove",_,a.move),window.removeEventListener("touchend",v,a.up),window.removeEventListener("touchcancel",v,a.up)}u.addEventListener("mousedown",m,a.down),u.addEventListener("touchstart",y,a.down)}({el:n,onMove:function(t,n,r,o){var i=n.x,a=n.y,u=~~(i-r.x),c=~~(a-r.y);e.left+=u,e.top+=c,e.setViewScaleAndPosition(!0)},onUp:function(t,n,r){if(e.setViewScaleAndPosition(),!e.options.isClickViewImgClose||n.x!==r.x&&n.y!==r.y)return t.stopPropagation(),t.preventDefault(),!1},onDown:function(){z(arguments)}})}},{key:"destroy",value:function(){this.needCancelEventList.forEach((function(e){return e()})),this.wrapper.parentNode.removeChild(this.wrapper)}}]),e}()}]).default}));