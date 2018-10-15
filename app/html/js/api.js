!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=148)}({148:function(e,t){!function(e){var t={},n=/android/gi.test(navigator.appVersion),r=function(){var t=e.localStorage;return n&&(t=os.localStorage()),t};function a(e,t,n,r){return"function"==typeof t&&(r=n,n=t,t=void 0),"function"!=typeof n&&(r=n,n=void 0),{url:e,data:t,fnSuc:n,dataType:r}}t.trim=function(e){return String.prototype.trim?null==e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},t.trimAll=function(e){return e.replace(/\s*/g,"")},t.isElement=function(e){return!(!e||1!=e.nodeType)},t.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},t.isEmptyObject=function(e){return"{}"===JSON.stringify(e)},t.addEvt=function(e,n,r,a){t.isElement(e)?(a=a||!1,e.addEventListener&&e.addEventListener(n,r,a)):console.warn("$api.addEvt Function need el param, el param must be DOM Element")},t.rmEvt=function(e,n,r,a){t.isElement(e)?(a=a||!1,e.removeEventListener&&e.removeEventListener(n,r,a)):console.warn("$api.rmEvt Function need el param, el param must be DOM Element")},t.one=function(e,n,r,a){if(t.isElement(e)){a=a||!1;var o=this,i=function(){r&&r(),o.rmEvt(e,n,i,a)};o.addEvt(e,n,i,a)}else console.warn("$api.one Function need el param, el param must be DOM Element")},t.dom=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelector)return document.querySelector(arguments[0])}else if(2===arguments.length&&e.querySelector)return e.querySelector(t)},t.domAll=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelectorAll)return document.querySelectorAll(arguments[0])}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(t)},t.byId=function(e){return document.getElementById(e)},t.first=function(e,n){return 1===arguments.length?t.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,n+":first-child"):void 0},t.last=function(e,n){if(1===arguments.length){if(!t.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var r=e.children;return r[r.length-1]}if(2===arguments.length)return this.dom(e,n+":last-child")},t.eq=function(e,t){return this.dom(e,":nth-child("+t+")")},t.not=function(e,t){return this.domAll(e,":not("+t+")")},t.prev=function(e){if(t.isElement(e)){var n=e.previousSibling;return n.nodeType&&3===n.nodeType?n=n.previousSibling:void 0}console.warn("$api.prev Function need el param, el param must be DOM Element")},t.next=function(e){if(t.isElement(e)){var n=e.nextSibling;return n.nodeType&&3===n.nodeType?n=n.nextSibling:void 0}console.warn("$api.next Function need el param, el param must be DOM Element")},t.closest=function(e,n){if(t.isElement(e)){var r,a,o=function(e,n){for(r=t.domAll(e.parentNode,n),a=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n].isSameNode(t))return e[n];return!1}(r,e);!a;){if(null!=(e=e.parentNode)&&e.nodeType==e.DOCUMENT_NODE)return!1;o(e,n)}return a};return o(e,n)}console.warn("$api.closest Function need el param, el param must be DOM Element")},t.contains=function(e,t){var n=!1;if(t===e)return n=!0;do{if((t=t.parentNode)===e)return n=!0}while(t===document.body||t===document.documentElement);return n},t.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},t.attr=function(e,n,r){if(t.isElement(e))return 2==arguments.length?e.getAttribute(n):3==arguments.length?(e.setAttribute(n,r),e):void 0;console.warn("$api.attr Function need el param, el param must be DOM Element")},t.removeAttr=function(e,n){t.isElement(e)?2===arguments.length&&e.removeAttribute(n):console.warn("$api.removeAttr Function need el param, el param must be DOM Element")},t.hasCls=function(e,n){if(t.isElement(e))return e.className.indexOf(n)>-1;console.warn("$api.hasCls Function need el param, el param must be DOM Element")},t.addCls=function(e,n){if(t.isElement(e)){if("classList"in e)e.classList.add(n);else{var r=e.className+" "+n;e.className=r}return e}console.warn("$api.addCls Function need el param, el param must be DOM Element")},t.removeCls=function(e,n){if(t.isElement(e)){if("classList"in e)e.classList.remove(n);else{var r=e.className.replace(n,"");e.className=r}return e}console.warn("$api.removeCls Function need el param, el param must be DOM Element")},t.toggleCls=function(e,n){if(t.isElement(e))return"classList"in e?e.classList.toggle(n):t.hasCls(e,n)?t.removeCls(e,n):t.addCls(e,n),e;console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},t.val=function(e,n){if(t.isElement(e)){if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=n,e;case"INPUT":case"TEXTAREA":return e.value=n,e}}else console.warn("$api.val Function need el param, el param must be DOM Element")},t.prepend=function(e,n){if(t.isElement(e))return e.insertAdjacentHTML("afterbegin",n),e;console.warn("$api.prepend Function need el param, el param must be DOM Element")},t.append=function(e,n){if(t.isElement(e))return e.insertAdjacentHTML("beforeend",n),e;console.warn("$api.append Function need el param, el param must be DOM Element")},t.before=function(e,n){if(t.isElement(e))return e.insertAdjacentHTML("beforebegin",n),e;console.warn("$api.before Function need el param, el param must be DOM Element")},t.after=function(e,n){if(t.isElement(e))return e.insertAdjacentHTML("afterend",n),e;console.warn("$api.after Function need el param, el param must be DOM Element")},t.html=function(e,n){if(t.isElement(e))return 1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=n,e):void 0;console.warn("$api.html Function need el param, el param must be DOM Element")},t.text=function(e,n){if(t.isElement(e))return 1===arguments.length?e.textContent:2===arguments.length?(e.textContent=n,e):void 0;console.warn("$api.text Function need el param, el param must be DOM Element")},t.offset=function(e){if(t.isElement(e)){var n=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),r=Math.max(document.documentElement.scrollTop,document.body.scrollTop),a=e.getBoundingClientRect();return{l:a.left+n,t:a.top+r,w:e.offsetWidth,h:e.offsetHeight}}console.warn("$api.offset Function need el param, el param must be DOM Element")},t.css=function(e,n){t.isElement(e)?"string"==typeof n&&n.indexOf(":")>0&&e.style&&(e.style.cssText+=";"+n):console.warn("$api.css Function need el param, el param must be DOM Element")},t.cssVal=function(n,r){if(t.isElement(n)){if(2===arguments.length)return e.getComputedStyle(n,null).getPropertyValue(r)}else console.warn("$api.cssVal Function need el param, el param must be DOM Element")},t.jsonToStr=function(e){if("object"==typeof e)return JSON&&JSON.stringify(e)},t.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},t.setStorage=function(e,t){if(2===arguments.length){var n=t;n="object"==typeof n?"obj-"+(n=JSON.stringify(n)):"str-"+n;var a=r();a&&a.setItem(e,n)}},t.getStorage=function(e){var t=r();if(t){var n=t.getItem(e);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}},t.rmStorage=function(e){var t=r();t&&e&&t.removeItem(e)},t.clearStorage=function(){var e=r();e&&e.clear()},t.fixIos7Bar=function(e){return t.fixStatusBar(e)},t.fixStatusBar=function(e){return t.isElement(e)?(e.style.paddingTop=api.safeArea.top+"px",e.offsetHeight):(console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"),0)},t.fixTabBar=function(e){return t.isElement(e)?(e.style.paddingBottom=api.safeArea.bottom+"px",e.offsetHeight):(console.warn("$api.fixTabBar Function need el param, el param must be DOM Element"),0)},t.toast=function(e,t,n){var r={},a=function(e,t){api.showProgress(e),setTimeout(function(){api.hideProgress()},t)};if(1===arguments.length){n=n||500;"number"==typeof e?n=e:r.title=e+"",a(r,n)}else if(2===arguments.length){n=n||500;if("number"==typeof(t=t))n=t,t=null;e&&(r.title=e),t&&(r.text=t),a(r,n)}e&&(r.title=e),t&&(r.text=t),a(r,n=n||500)},t.post=function(){var e=a.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.data&&(t.data=e.data),e.dataType){var r=e.dataType.toLowerCase();"text"!=r&&"json"!=r||(t.dataType=r)}else t.dataType="json";t.method="post",api.ajax(t,function(e,t){e&&n&&n(e)})},t.get=function(){var e=a.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.dataType){var r=e.dataType.toLowerCase();"text"!=r&&"json"!=r||(t.dataType=r)}else t.dataType="text";t.method="get",api.ajax(t,function(e,t){e&&n&&n(e)})},e.$api=t}(window)}});