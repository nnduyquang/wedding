var cssua=function(e,t,n){"use strict";var r=" ua-",i=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,o=/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,a=/\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,s=/\bsilk-accelerated=true\b/,l=/\bfluidapp\b/,u=/(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,c=/(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,f=/(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,p={parse:function(e,t){var n={};if(t&&(n.standalone=t),e=(""+e).toLowerCase(),!e)return n;for(var r,p,d=e.split(/[()]/),h=0,g=d.length;g>h;h++)if(h%2){var m=d[h].split(";");for(r=0,p=m.length;p>r;r++)if(i.exec(m[r])){var v=RegExp.$1.split(" ").join("_"),y=RegExp.$2;(!n[v]||parseFloat(n[v])<parseFloat(y))&&(n[v]=y)}}else{var b=d[h].match(o);if(b)for(r=0,p=b.length;p>r;r++){var x=b[r].split(/[\/\s]+/);x.length&&"mozilla"!==x[0]&&(n[x[0].split(" ").join("_")]=x.slice(1).join("-"))}}if(c.exec(e))n.mobile=RegExp.$1,a.exec(e)&&(delete n[n.mobile],n.blackberry=n.version||RegExp.$3||RegExp.$2||RegExp.$1,RegExp.$1?n.mobile="blackberry":"0.0.1"===n.version&&(n.blackberry="7.1.0.0"));else if(f.exec(e)){n.game=RegExp.$1;var w=n.game.split(" ").join("_");n.version&&!n[w]&&(n[w]=n.version)}else u.exec(e)&&(n.desktop=RegExp.$1);return n.intel_mac_os_x?(n.mac_os_x=n.intel_mac_os_x.split("_").join("."),delete n.intel_mac_os_x):n.cpu_iphone_os?(n.ios=n.cpu_iphone_os.split("_").join("."),delete n.cpu_iphone_os):n.cpu_os?(n.ios=n.cpu_os.split("_").join("."),delete n.cpu_os):"iphone"!==n.mobile||n.ios||(n.ios="1"),n.opera&&n.version?(n.opera=n.version,delete n.blackberry):s.exec(e)?n.silk_accelerated=!0:l.exec(e)&&(n.fluidapp=n.version),n.edge&&(delete n.applewebkit,delete n.safari,delete n.chrome,delete n.android),n.applewebkit?(n.webkit=n.applewebkit,delete n.applewebkit,n.opr&&(n.opera=n.opr,delete n.opr,delete n.chrome),n.safari&&(n.chrome||n.crios||n.opera||n.silk||n.fluidapp||n.phantomjs||n.mobile&&!n.ios?(delete n.safari,n.vivaldi&&delete n.chrome):n.version&&!n.rim_tablet_os?n.safari=n.version:n.safari={419:"2.0.4",417:"2.0.3",416:"2.0.2",412:"2.0",312:"1.3",125:"1.2",85:"1.0"}[parseInt(n.safari,10)]||n.safari)):n.msie||n.trident?(n.opera||(n.ie=n.msie||n.rv),delete n.msie,delete n.android,n.windows_phone_os?(n.windows_phone=n.windows_phone_os,delete n.windows_phone_os):("wpdesktop"===n.mobile||"xblwp7"===n.mobile||"zunewp7"===n.mobile)&&(n.mobile="windows desktop",n.windows_phone=+n.ie<9?"7.0":+n.ie<10?"7.5":"8.0",delete n.windows_nt)):(n.gecko||n.firefox)&&(n.gecko=n.rv),n.rv&&delete n.rv,n.version&&delete n.version,n},format:function(e){function t(e,t){e=e.split(".").join("-");var n=r+e;if("string"==typeof t){t=t.split(" ").join("_").split(".").join("-");for(var i=t.indexOf("-");i>0;)n+=r+e+"-"+t.substring(0,i),i=t.indexOf("-",i+1);n+=r+e+"-"+t}return n}var n="";for(var i in e)i&&e.hasOwnProperty(i)&&(n+=t(i,e[i]));return n},encode:function(e){var t="";for(var n in e)n&&e.hasOwnProperty(n)&&(t&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}};p.userAgent=p.ua=p.parse(t,n);var d=p.format(p.ua)+" js";return e.className?e.className=e.className.replace(/\bno-js\b/g,"")+d:e.className=d.substr(1),p}(document.documentElement,navigator.userAgent,navigator.standalone);(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,o=Function.prototype,a=r.push,s=r.slice,l=r.concat,u=i.toString,c=i.hasOwnProperty,f=r.forEach,p=r.map,d=r.reduce,h=r.reduceRight,g=r.filter,m=r.every,v=r.some,y=r.indexOf,b=r.lastIndexOf,x=Array.isArray,w=Object.keys,T=o.bind,C=function(e){return e instanceof C?e:this instanceof C?void(this._wrapped=e):new C(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=C),exports._=C):e._=C,C.VERSION="1.5.2";var S=C.each=C.forEach=function(e,t,r){if(null!=e)if(f&&e.forEach===f)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,o=e.length;o>i;i++)if(t.call(r,e[i],i,e)===n)return}else for(var a=C.keys(e),i=0,o=a.length;o>i;i++)if(t.call(r,e[a[i]],a[i],e)===n)return};C.map=C.collect=function(e,t,n){var r=[];return null==e?r:p&&e.map===p?e.map(t,n):(S(e,function(e,i,o){r.push(t.call(n,e,i,o))}),r)};var k="Reduce of empty array with no initial value";C.reduce=C.foldl=C.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),d&&e.reduce===d)return r&&(t=C.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(S(e,function(e,o,a){i?n=t.call(r,n,e,o,a):(n=e,i=!0)}),!i)throw new TypeError(k);return n},C.reduceRight=C.foldr=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),h&&e.reduceRight===h)return r&&(t=C.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var o=e.length;if(o!==+o){var a=C.keys(e);o=a.length}if(S(e,function(s,l,u){l=a?a[--o]:--o,i?n=t.call(r,n,e[l],l,u):(n=e[l],i=!0)}),!i)throw new TypeError(k);return n},C.find=C.detect=function(e,t,n){var r;return E(e,function(e,i,o){return t.call(n,e,i,o)?(r=e,!0):void 0}),r},C.filter=C.select=function(e,t,n){var r=[];return null==e?r:g&&e.filter===g?e.filter(t,n):(S(e,function(e,i,o){t.call(n,e,i,o)&&r.push(e)}),r)},C.reject=function(e,t,n){return C.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},C.every=C.all=function(e,t,r){t||(t=C.identity);var i=!0;return null==e?i:m&&e.every===m?e.every(t,r):(S(e,function(e,o,a){return(i=i&&t.call(r,e,o,a))?void 0:n}),!!i)};var E=C.some=C.any=function(e,t,r){t||(t=C.identity);var i=!1;return null==e?i:v&&e.some===v?e.some(t,r):(S(e,function(e,o,a){return i||(i=t.call(r,e,o,a))?n:void 0}),!!i)};C.contains=C.include=function(e,t){return null==e?!1:y&&e.indexOf===y?-1!=e.indexOf(t):E(e,function(e){return e===t})},C.invoke=function(e,t){var n=s.call(arguments,2),r=C.isFunction(t);return C.map(e,function(e){return(r?t:e[t]).apply(e,n)})},C.pluck=function(e,t){return C.map(e,function(e){return e[t]})},C.where=function(e,t,n){return C.isEmpty(t)?n?void 0:[]:C[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},C.findWhere=function(e,t){return C.where(e,t,!0)},C.max=function(e,t,n){if(!t&&C.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&C.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return S(e,function(e,i,o){var a=t?t.call(n,e,i,o):e;a>r.computed&&(r={value:e,computed:a})}),r.value},C.min=function(e,t,n){if(!t&&C.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&C.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return S(e,function(e,i,o){var a=t?t.call(n,e,i,o):e;a<r.computed&&(r={value:e,computed:a})}),r.value},C.shuffle=function(e){var t,n=0,r=[];return S(e,function(e){t=C.random(n++),r[n-1]=r[t],r[t]=e}),r},C.sample=function(e,t,n){return arguments.length<2||n?e[C.random(e.length-1)]:C.shuffle(e).slice(0,Math.max(0,t))};var N=function(e){return C.isFunction(e)?e:function(t){return t[e]}};C.sortBy=function(e,t,n){var r=N(t);return C.pluck(C.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};var j=function(e){return function(t,n,r){var i={},o=null==n?C.identity:N(n);return S(t,function(n,a){var s=o.call(r,n,a,t);e(i,s,n)}),i}};C.groupBy=j(function(e,t,n){(C.has(e,t)?e[t]:e[t]=[]).push(n)}),C.indexBy=j(function(e,t,n){e[t]=n}),C.countBy=j(function(e,t){C.has(e,t)?e[t]++:e[t]=1}),C.sortedIndex=function(e,t,n,r){n=null==n?C.identity:N(n);for(var i=n.call(r,t),o=0,a=e.length;a>o;){var s=o+a>>>1;n.call(r,e[s])<i?o=s+1:a=s}return o},C.toArray=function(e){return e?C.isArray(e)?s.call(e):e.length===+e.length?C.map(e,C.identity):C.values(e):[]},C.size=function(e){return null==e?0:e.length===+e.length?e.length:C.keys(e).length},C.first=C.head=C.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:s.call(e,0,t)},C.initial=function(e,t,n){return s.call(e,0,e.length-(null==t||n?1:t))},C.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:s.call(e,Math.max(e.length-t,0))},C.rest=C.tail=C.drop=function(e,t,n){return s.call(e,null==t||n?1:t)},C.compact=function(e){return C.filter(e,C.identity)};var A=function(e,t,n){return t&&C.every(e,C.isArray)?l.apply(n,e):(S(e,function(e){C.isArray(e)||C.isArguments(e)?t?a.apply(n,e):A(e,t,n):n.push(e)}),n)};C.flatten=function(e,t){return A(e,t,[])},C.without=function(e){return C.difference(e,s.call(arguments,1))},C.uniq=C.unique=function(e,t,n,r){C.isFunction(t)&&(r=n,n=t,t=!1);var i=n?C.map(e,n,r):e,o=[],a=[];return S(i,function(n,r){(t?r&&a[a.length-1]===n:C.contains(a,n))||(a.push(n),o.push(e[r]))}),o},C.union=function(){return C.uniq(C.flatten(arguments,!0))},C.intersection=function(e){var t=s.call(arguments,1);return C.filter(C.uniq(e),function(e){return C.every(t,function(t){return C.indexOf(t,e)>=0})})},C.difference=function(e){var t=l.apply(r,s.call(arguments,1));return C.filter(e,function(e){return!C.contains(t,e)})},C.zip=function(){for(var e=C.max(C.pluck(arguments,"length").concat(0)),t=new Array(e),n=0;e>n;n++)t[n]=C.pluck(arguments,""+n);return t},C.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},C.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=C.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;i>r;r++)if(e[r]===t)return r;return-1},C.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=r?n:e.length;i--;)if(e[i]===t)return i;return-1},C.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=0,o=new Array(r);r>i;)o[i++]=e,e+=n;return o};var P=function(){};C.bind=function(e,t){var n,r;if(T&&e.bind===T)return T.apply(e,s.call(arguments,1));if(!C.isFunction(e))throw new TypeError;return n=s.call(arguments,2),r=function(){if(!(this instanceof r))return e.apply(t,n.concat(s.call(arguments)));P.prototype=e.prototype;var i=new P;P.prototype=null;var o=e.apply(i,n.concat(s.call(arguments)));return Object(o)===o?o:i}},C.partial=function(e){var t=s.call(arguments,1);return function(){return e.apply(this,t.concat(s.call(arguments)))}},C.bindAll=function(e){var t=s.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return S(t,function(t){e[t]=C.bind(e[t],e)}),e},C.memoize=function(e,t){var n={};return t||(t=C.identity),function(){var r=t.apply(this,arguments);return C.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},C.delay=function(e,t){var n=s.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},C.defer=function(e){return C.delay.apply(C,[e,1].concat(s.call(arguments,1)))},C.throttle=function(e,t,n){var r,i,o,a=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:new Date,a=null,o=e.apply(r,i)};return function(){var u=new Date;s||n.leading!==!1||(s=u);var c=t-(u-s);return r=this,i=arguments,0>=c?(clearTimeout(a),a=null,s=u,o=e.apply(r,i)):a||n.trailing===!1||(a=setTimeout(l,c)),o}},C.debounce=function(e,t,n){var r,i,o,a,s;return function(){o=this,i=arguments,a=new Date;var l=function(){var u=new Date-a;t>u?r=setTimeout(l,t-u):(r=null,n||(s=e.apply(o,i)))},u=n&&!r;return r||(r=setTimeout(l,t)),u&&(s=e.apply(o,i)),s}},C.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},C.wrap=function(e,t){return function(){var n=[e];return a.apply(n,arguments),t.apply(this,n)}},C.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},C.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},C.keys=w||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)C.has(e,n)&&t.push(n);return t},C.values=function(e){for(var t=C.keys(e),n=t.length,r=new Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},C.pairs=function(e){for(var t=C.keys(e),n=t.length,r=new Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},C.invert=function(e){for(var t={},n=C.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},C.functions=C.methods=function(e){var t=[];for(var n in e)C.isFunction(e[n])&&t.push(n);return t.sort()},C.extend=function(e){return S(s.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},C.pick=function(e){var t={},n=l.apply(r,s.call(arguments,1));return S(n,function(n){n in e&&(t[n]=e[n])}),t},C.omit=function(e){var t={},n=l.apply(r,s.call(arguments,1));for(var i in e)C.contains(n,i)||(t[i]=e[i]);return t},C.defaults=function(e){return S(s.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},C.clone=function(e){return C.isObject(e)?C.isArray(e)?e.slice():C.extend({},e):e},C.tap=function(e,t){return t(e),e};var L=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof C&&(e=e._wrapped),t instanceof C&&(t=t._wrapped);var i=u.call(e);if(i!=u.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var o=n.length;o--;)if(n[o]==e)return r[o]==t;var a=e.constructor,s=t.constructor;if(a!==s&&!(C.isFunction(a)&&a instanceof a&&C.isFunction(s)&&s instanceof s))return!1;n.push(e),r.push(t);var l=0,c=!0;if("[object Array]"==i){if(l=e.length,c=l==t.length)for(;l--&&(c=L(e[l],t[l],n,r)););}else{for(var f in e)if(C.has(e,f)&&(l++,!(c=C.has(t,f)&&L(e[f],t[f],n,r))))break;if(c){for(f in t)if(C.has(t,f)&&!l--)break;c=!l}}return n.pop(),r.pop(),c};C.isEqual=function(e,t){return L(e,t,[],[])},C.isEmpty=function(e){if(null==e)return!0;if(C.isArray(e)||C.isString(e))return 0===e.length;for(var t in e)if(C.has(e,t))return!1;return!0},C.isElement=function(e){return!(!e||1!==e.nodeType)},C.isArray=x||function(e){return"[object Array]"==u.call(e)},C.isObject=function(e){return e===Object(e)},S(["Arguments","Function","String","Number","Date","RegExp"],function(e){C["is"+e]=function(t){return u.call(t)=="[object "+e+"]"}}),C.isArguments(arguments)||(C.isArguments=function(e){return!(!e||!C.has(e,"callee"))}),"function"!=typeof/./&&(C.isFunction=function(e){return"function"==typeof e}),C.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},C.isNaN=function(e){return C.isNumber(e)&&e!=+e},C.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==u.call(e)},C.isNull=function(e){return null===e},C.isUndefined=function(e){return void 0===e},C.has=function(e,t){return c.call(e,t)},C.noConflict=function(){return e._=t,this},C.identity=function(e){return e},C.times=function(e,t,n){for(var r=Array(Math.max(0,e)),i=0;e>i;i++)r[i]=t.call(n,i);return r},C.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};_.unescape=C.invert(_.escape);var O={escape:new RegExp("["+C.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+C.keys(_.unescape).join("|")+")","g")};C.each(["escape","unescape"],function(e){C[e]=function(t){return null==t?"":(""+t).replace(O[e],function(t){return _[e][t]})}}),C.result=function(e,t){if(null!=e){var n=e[t];return C.isFunction(n)?n.call(e):n}},C.mixin=function(e){S(C.functions(e),function(t){var n=C[t]=e[t];C.prototype[t]=function(){var e=[this._wrapped];return a.apply(e,arguments),V.call(this,n.apply(C,e))}})};var D=0;C.uniqueId=function(e){var t=++D+"";return e?e+t:t},C.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,M={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},F=/\\|'|\r|\n|\t|\u2028|\u2029/g;C.template=function(e,t,n){var r;n=C.defaults({},n,C.templateSettings);var i=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(i,function(t,n,r,i,s){return a+=e.slice(o,s).replace(F,function(e){return"\\"+M[e]}),n&&(a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(a+="';\n"+i+"\n__p+='"),o=s+t.length,t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(n.variable||"obj","_",a)}catch(s){throw s.source=a,s}if(t)return r(t,C);var l=function(e){return r.call(this,e,C)};return l.source="function("+(n.variable||"obj")+"){\n"+a+"}",l},C.chain=function(e){return C(e).chain()};var V=function(e){return this._chain?C(e).chain():e};C.mixin(C),S(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];C.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],V.call(this,n)}}),S(["concat","join","slice"],function(e){var t=r[e];C.prototype[e]=function(){return V.call(this,t.apply(this._wrapped,arguments))}}),C.extend(C.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this),!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=oe.type(e);return"function"===n||oe.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(oe.isFunction(t))return oe.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return oe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(de.test(t))return oe.filter(t,e,n);t=oe.filter(t,e)}return oe.grep(e,function(e){return oe.inArray(e,t)>=0!==n})}function i(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function o(e){var t=we[e]={};return oe.each(e.match(xe)||[],function(e,n){t[n]=!0}),t}function a(){ge.addEventListener?(ge.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1)):(ge.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(ge.addEventListener||"load"===event.type||"complete"===ge.readyState)&&(a(),oe.ready())}function l(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(Ee,"-$1").toLowerCase();if(n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:ke.test(n)?oe.parseJSON(n):n}catch(i){}oe.data(e,t,n)}else n=void 0}return n}function u(e){var t;for(t in e)if(("data"!==t||!oe.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,n,r){if(oe.acceptData(e)){var i,o,a=oe.expando,s=e.nodeType,l=s?oe.cache:e,u=s?e[a]:e[a]&&a;if(u&&l[u]&&(r||l[u].data)||void 0!==n||"string"!=typeof t)return u||(u=s?e[a]=G.pop()||oe.guid++:a),l[u]||(l[u]=s?{}:{toJSON:oe.noop}),("object"==typeof t||"function"==typeof t)&&(r?l[u]=oe.extend(l[u],t):l[u].data=oe.extend(l[u].data,t)),o=l[u],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[oe.camelCase(t)]=n),"string"==typeof t?(i=o[t],null==i&&(i=o[oe.camelCase(t)])):i=o,i}}function f(e,t,n){if(oe.acceptData(e)){var r,i,o=e.nodeType,a=o?oe.cache:e,s=o?e[oe.expando]:oe.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){oe.isArray(t)?t=t.concat(oe.map(t,oe.camelCase)):t in r?t=[t]:(t=oe.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;for(;i--;)delete r[t[i]];if(n?!u(r):!oe.isEmptyObject(r))return}(n||(delete a[s].data,u(a[s])))&&(o?oe.cleanData([e],!0):re.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function p(){return!0}function d(){return!1}function h(){try{return ge.activeElement}catch(e){}}function g(e){var t=Me.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function m(e,t){var n,r,i=0,o=typeof e.getElementsByTagName!==Ce?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==Ce?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||oe.nodeName(r,t)?o.push(r):oe.merge(o,m(r,t));return void 0===t||t&&oe.nodeName(e,t)?oe.merge([e],o):o}function v(e){Le.test(e.type)&&(e.defaultChecked=e.checked)}function y(e,t){return oe.nodeName(e,"table")&&oe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function b(e){return e.type=(null!==oe.find.attr(e,"type"))+"/"+e.type,e}function x(e){var t=Qe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function w(e,t){for(var n,r=0;null!=(n=e[r]);r++)oe._data(n,"globalEval",!t||oe._data(t[r],"globalEval"))}function T(e,t){if(1===t.nodeType&&oe.hasData(e)){var n,r,i,o=oe._data(e),a=oe._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)oe.event.add(t,n,s[n][r])}a.data&&(a.data=oe.extend({},a.data))}}function C(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!re.noCloneEvent&&t[oe.expando]){i=oe._data(t);for(r in i.events)oe.removeEvent(t,r,i.handle);t.removeAttribute(oe.expando)}"script"===n&&t.text!==e.text?(b(t).text=e.text,x(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),re.html5Clone&&e.innerHTML&&!oe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Le.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function S(t,n){var r,i=oe(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:oe.css(i[0],"display");return i.detach(),o}function k(e){var t=ge,n=Ke[e];return n||(n=S(e,t),"none"!==n&&n||(Ze=(Ze||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Ze[0].contentWindow||Ze[0].contentDocument).document,t.write(),t.close(),n=S(e,t),Ze.detach()),Ke[e]=n),n}function E(e,t){return{get:function(){var n=e();return null!=n?n?void delete this.get:(this.get=t).apply(this,arguments):void 0}}}function N(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=pt.length;i--;)if(t=pt[i]+n,t in e)return t;return r}function j(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=oe._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Ae(r)&&(o[a]=oe._data(r,"olddisplay",k(r.nodeName)))):(i=Ae(r),(n&&"none"!==n||!i)&&oe._data(r,"olddisplay",i?n:oe.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function A(e,t,n){var r=lt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function P(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=oe.css(e,n+je[o],!0,i)),r?("content"===n&&(a-=oe.css(e,"padding"+je[o],!0,i)),"margin"!==n&&(a-=oe.css(e,"border"+je[o]+"Width",!0,i))):(a+=oe.css(e,"padding"+je[o],!0,i),"padding"!==n&&(a+=oe.css(e,"border"+je[o]+"Width",!0,i)));return a}function L(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=nt(e),a=re.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=rt(e,t,o),(0>i||null==i)&&(i=e.style[t]),tt.test(i))return i;r=a&&(re.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+P(e,t,n||(a?"border":"content"),r,o)+"px"}function _(e,t,n,r,i){return new _.prototype.init(e,t,n,r,i)}function O(){return setTimeout(function(){dt=void 0}),dt=oe.now()}function D(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=je[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function H(e,t,n){for(var r,i=(bt[t]||[]).concat(bt["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function M(e,t,n){var r,i,o,a,s,l,u,c,f=this,p={},d=e.style,h=e.nodeType&&Ae(e),g=oe._data(e,"fxshow");n.queue||(s=oe._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,oe.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],u=oe.css(e,"display"),c="none"===u?oe._data(e,"olddisplay")||k(e.nodeName):u,"inline"===c&&"none"===oe.css(e,"float")&&(re.inlineBlockNeedsLayout&&"inline"!==k(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",re.shrinkWrapBlocks()||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],gt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||oe.style(e,r)}else u=void 0;if(oe.isEmptyObject(p))"inline"===("none"===u?k(e.nodeName):u)&&(d.display=u);else{g?"hidden"in g&&(h=g.hidden):g=oe._data(e,"fxshow",{}),o&&(g.hidden=!h),h?oe(e).show():f.done(function(){oe(e).hide()}),f.done(function(){var t;oe._removeData(e,"fxshow");for(t in p)oe.style(e,t,p[t])});for(r in p)a=H(h?g[r]:0,r,f),r in g||(g[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function F(e,t){var n,r,i,o,a;for(n in e)if(r=oe.camelCase(n),i=t[r],o=e[n],oe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=oe.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function V(e,t,n){var r,i,o=0,a=yt.length,s=oe.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=dt||O(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:dt||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=oe.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(F(c,u.opts.specialEasing);a>o;o++)if(r=yt[o].call(u,e,c,u.opts))return r;return oe.map(c,H,u),oe.isFunction(u.opts.start)&&u.opts.start.call(e,u),oe.fx.timer(oe.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function q(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(xe)||[];if(oe.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function R(e,t,n,r){function i(s){var l;return o[s]=!0,oe.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||a||o[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var o={},a=e===zt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function I(e,t){var n,r,i=oe.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&oe.extend(!0,e,n),e}function B(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function z(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function W(e,t,n,r){var i;if(oe.isArray(t))oe.each(t,function(t,i){n||Qt.test(e)?r(e,i):W(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==oe.type(t))r(e,t);else for(i in t)W(e+"["+i+"]",t[i],n,r)}function X(){try{return new e.XMLHttpRequest}catch(t){}}function Q(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function U(e){return oe.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var G=[],Y=G.slice,J=G.concat,Z=G.push,K=G.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,re={},ie="1.11.3",oe=function(e,t){return new oe.fn.init(e,t)},ae=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,se=/^-ms-/,le=/-([\da-z])/gi,ue=function(e,t){return t.toUpperCase()};oe.fn=oe.prototype={jquery:ie,constructor:oe,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=oe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return oe.each(this,e,t)},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Z,sort:G.sort,splice:G.splice},oe.extend=oe.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||oe.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(u&&n&&(oe.isPlainObject(n)||(t=oe.isArray(n)))?(t?(t=!1,o=e&&oe.isArray(e)?e:[]):o=e&&oe.isPlainObject(e)?e:{},a[r]=oe.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},oe.extend({expando:"jQuery"+(ie+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray||function(e){return"array"===oe.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!oe.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1;try{if(e.constructor&&!ne.call(e,"constructor")&&!ne.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(re.ownLast)for(t in e)return ne.call(e,t);for(t in e);return void 0===t||ne.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(t){t&&oe.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(se,"ms-").replace(le,ue)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ae,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?oe.merge(r,"string"==typeof e?[e]:e):Z.call(r,e)),
r},inArray:function(e,t,n){var r;if(t){if(K)return K.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),l=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&l.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&l.push(i);return J.apply([],l)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(i=e[t],t=e,e=i),oe.isFunction(e)?(n=Y.call(arguments,2),r=function(){return e.apply(t||this,n.concat(Y.call(arguments)))},r.guid=e.guid=e.guid||oe.guid++,r):void 0},now:function(){return+new Date},support:re}),oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()});var ce=function(e){function t(e,t,n,r){var i,o,a,s,l,u,f,d,h,g;if((t?t.ownerDocument||t:R)!==_&&L(t),t=t||_,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!r&&D){if(11!==s&&(i=ye.exec(e)))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&V(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return K.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&w.getElementsByClassName)return K.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!H||!H.test(e))){if(d=f=q,h=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=k(e),(f=t.getAttribute("id"))?d=f.replace(xe,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",l=u.length;l--;)u[l]=d+p(u[l]);h=be.test(e)&&c(t.parentNode)||t,g=u.join(",")}if(g)try{return K.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return N(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[q]=!0,e}function i(e){var t=_.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||U)-(~e.sourceIndex||U);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=B++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u=[I,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[q]||(t[q]={}),(s=l[r])&&s[0]===I&&s[1]===o)return u[2]=s[2];if(l[r]=u,u[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function v(e,t,n,i,o,a){return i&&!i[q]&&(i=v(i)),o&&!o[q]&&(o=v(o,a)),r(function(r,a,s,l){var u,c,f,p=[],d=[],h=a.length,v=r||g(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:m(v,p,e,s,l),b=n?o||(r?e:h||i)?[]:a:y;if(n&&n(y,b,s,l),i)for(u=m(b,d),i(u,[],s,l),c=u.length;c--;)(f=u[c])&&(b[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(u=[],c=b.length;c--;)(f=b[c])&&u.push(y[c]=f);o(null,b=[],u,l)}for(c=b.length;c--;)(f=b[c])&&(u=o?te(r,f):p[c])>-1&&(r[u]=!(a[u]=f))}}else b=m(b===a?b.splice(h,b.length):b),o?o(null,a,b,l):K.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,l=d(function(e){return e===t},a,!0),u=d(function(e){return te(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==j)||((t=n).nodeType?l(e,n,r):u(e,n,r));return t=null,i}];i>s;s++)if(n=T.relative[e[s].type])c=[d(h(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[q]){for(r=++s;i>r&&!T.relative[e[r].type];r++);return v(s>1&&h(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,l,u){var c,f,p,d=0,h="0",g=r&&[],v=[],y=j,b=r||o&&T.find.TAG("*",u),x=I+=null==y?1:Math.random()||.1,w=b.length;for(u&&(j=a!==_&&a);h!==w&&null!=(c=b[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,a,s)){l.push(c);break}u&&(I=x)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,a,s);if(r){if(d>0)for(;h--;)g[h]||v[h]||(v[h]=J.call(l));v=m(v)}K.apply(l,v),u&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(l)}return u&&(I=x,j=y),g};return i?r(a):a}var x,w,T,C,S,k,E,N,j,A,P,L,_,O,D,H,M,F,V,q="sizzle"+1*new Date,R=e.document,I=0,B=0,z=n(),W=n(),X=n(),Q=function(e,t){return e===t&&(P=!0),0},U=1<<31,G={}.hasOwnProperty,Y=[],J=Y.pop,Z=Y.push,K=Y.push,ee=Y.slice,te=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ie.replace("w","w#"),ae="\\["+re+"*("+ie+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+re+"*\\]",se=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",le=new RegExp(re+"+","g"),ue=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),ce=new RegExp("^"+re+"*,"+re+"*"),fe=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),pe=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),de=new RegExp(se),he=new RegExp("^"+oe+"$"),ge={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},me=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,xe=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),Te=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ce=function(){L()};try{K.apply(Y=ee.call(R.childNodes),R.childNodes),Y[R.childNodes.length].nodeType}catch(Se){K={apply:Y.length?function(e,t){Z.apply(e,ee.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:R;return r!==_&&9===r.nodeType&&r.documentElement?(_=r,O=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),D=!S(r),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=$.test(r.getElementsByClassName),w.getById=i(function(e){return O.appendChild(e).id=q,!r.getElementsByName||!r.getElementsByName(q).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&D){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return D?t.getElementsByClassName(e):void 0},M=[],H=[],(w.qsa=$.test(r.querySelectorAll))&&(i(function(e){O.appendChild(e).innerHTML="<a id='"+q+"'></a><select id='"+q+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&H.push("[*^$]="+re+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||H.push("\\["+re+"*(?:value|"+ne+")"),e.querySelectorAll("[id~="+q+"-]").length||H.push("~="),e.querySelectorAll(":checked").length||H.push(":checked"),e.querySelectorAll("a#"+q+"+*").length||H.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&H.push("name"+re+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),(w.matchesSelector=$.test(F=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&i(function(e){w.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),M.push("!=",se)}),H=H.length&&new RegExp(H.join("|")),M=M.length&&new RegExp(M.join("|")),t=$.test(O.compareDocumentPosition),V=t||$.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Q=t?function(e,t){if(e===t)return P=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===R&&V(R,e)?-1:t===r||t.ownerDocument===R&&V(R,t)?1:A?te(A,e)-te(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return P=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:A?te(A,e)-te(A,t):0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;l[i]===u[i];)i++;return i?a(l[i],u[i]):l[i]===R?-1:u[i]===R?1:0},r):_},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==_&&L(e),n=n.replace(pe,"='$1']"),!(!w.matchesSelector||!D||M&&M.test(n)||H&&H.test(n)))try{var r=F.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,_,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==_&&L(e),V(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==_&&L(e);var n=T.attrHandle[t.toLowerCase()],r=n&&G.call(T.attrHandle,t.toLowerCase())?n(e,t,!D):void 0;return void 0!==r?r:w.attributes||!D?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(P=!w.detectDuplicates,A=!w.sortStable&&e.slice(0),e.sort(Q),P){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return A=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:ge,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ge.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+re+")"+e+"("+re+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(le," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(c=m[q]||(m[q]={}),u=c[e]||[],d=u[0]===I&&u[1],p=u[0]===I&&u[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[I,d,p];break}}else if(y&&(u=(t[q]||(t[q]={}))[e])&&u[0]===I)p=u[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(y&&((f[q]||(f[q]={}))[e]=[I,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[q]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=te(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=E(e.replace(ue,"$1"));return i[q]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Te),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return he.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n;do if(n=D?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===_.activeElement&&(!_.hasFocus||_.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return me.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=l(x);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,k=t.tokenize=function(e,n){var r,i,o,a,s,l,u,c=W[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=T.preFilter;s;){(!r||(i=ce.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=fe.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),s=s.slice(r.length));for(a in T.filter)!(i=ge[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):W(e,l).slice(0)},E=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=y(t[n]),o[q]?r.push(o):i.push(o);o=X(e,b(i,r)),o.selector=e}return o},N=t.select=function(e,t,n,r){var i,o,a,s,l,u="function"==typeof e&&e,f=!r&&k(e=u.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&D&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(we,Te),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=ge.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((l=T.find[s])&&(r=l(a.matches[0].replace(we,Te),be.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return K.apply(n,r),n;break}}return(u||E(e,f))(r,t,!D,n,be.test(e)&&c(t.parentNode)||t),n},w.sortStable=q.split("").sort(Q).join("")===q,w.detectDuplicates=!!P,L(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(_.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(ne,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);oe.find=ce,oe.expr=ce.selectors,oe.expr[":"]=oe.expr.pseudos,oe.unique=ce.uniqueSort,oe.text=ce.getText,oe.isXMLDoc=ce.isXML,oe.contains=ce.contains;var fe=oe.expr.match.needsContext,pe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,de=/^.[^:#\[\.,]*$/;oe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?oe.find.matchesSelector(r,e)?[r]:[]:oe.find.matches(e,oe.grep(t,function(e){return 1===e.nodeType}))},oe.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(oe(e).filter(function(){for(t=0;i>t;t++)if(oe.contains(r[t],this))return!0}));for(t=0;i>t;t++)oe.find(e,r[t],n);return n=this.pushStack(i>1?oe.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&fe.test(e)?oe(e):e||[],!1).length}});var he,ge=e.document,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ve=oe.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:me.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||he).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof oe?t[0]:t,oe.merge(this,oe.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ge,!0)),pe.test(n[1])&&oe.isPlainObject(t))for(n in t)oe.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(r=ge.getElementById(n[2]),r&&r.parentNode){if(r.id!==n[2])return he.find(e);this.length=1,this[0]=r}return this.context=ge,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?"undefined"!=typeof he.ready?he.ready(e):e(oe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))};ve.prototype=oe.fn,he=oe(ge);var ye=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,prev:!0};oe.extend({dir:function(e,t,n){for(var r=[],i=e[t];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!oe(i).is(n));)1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),oe.fn.extend({has:function(e){var t,n=oe(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(oe.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=fe.test(e)||"string"!=typeof e?oe(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?oe.unique(o):o)},index:function(e){return e?"string"==typeof e?oe.inArray(this[0],oe(e)):oe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(oe.unique(oe.merge(this.get(),oe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return oe.dir(e,"parentNode")},parentsUntil:function(e,t,n){return oe.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return oe.dir(e,"nextSibling")},prevAll:function(e){return oe.dir(e,"previousSibling")},nextUntil:function(e,t,n){return oe.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return oe.dir(e,"previousSibling",n)},siblings:function(e){return oe.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return oe.sibling(e.firstChild)},contents:function(e){return oe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,r){var i=oe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=oe.filter(r,i)),this.length>1&&(be[e]||(i=oe.unique(i)),ye.test(e)&&(i=i.reverse())),this.pushStack(i)}});var xe=/\S+/g,we={};oe.Callbacks=function(e){e="string"==typeof e?we[e]||o(e):oe.extend({},e);var t,n,r,i,a,s,l=[],u=!e.once&&[],c=function(o){for(n=e.memory&&o,r=!0,a=s||0,s=0,i=l.length,t=!0;l&&i>a;a++)if(l[a].apply(o[0],o[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:f.disable())},f={add:function(){if(l){var r=l.length;!function o(t){oe.each(t,function(t,n){var r=oe.type(n);"function"===r?e.unique&&f.has(n)||l.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),t?i=l.length:n&&(s=r,c(n))}return this},remove:function(){return l&&oe.each(arguments,function(e,n){for(var r;(r=oe.inArray(n,l,r))>-1;)l.splice(r,1),t&&(i>=r&&i--,a>=r&&a--)}),this},has:function(e){return e?oe.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],i=0,this},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||f.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!l||r&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):c(n)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!r}};return f},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return oe.Deferred(function(n){oe.each(t,function(t,o){var a=oe.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&oe.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,r):r}},i={};return r.pipe=r.then,oe.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=Y.call(arguments),r=n.length,i=1!==r||e&&oe.isFunction(e.promise)?r:0,o=1===i?e:oe.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?Y.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=new Array(r),l=new Array(r),u=new Array(r);r>t;t++)n[t]&&oe.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}});var Te;oe.fn.ready=function(e){return oe.ready.promise().done(e),this},oe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){if(e===!0?!--oe.readyWait:!oe.isReady){if(!ge.body)return setTimeout(oe.ready);oe.isReady=!0,e!==!0&&--oe.readyWait>0||(Te.resolveWith(ge,[oe]),oe.fn.triggerHandler&&(oe(ge).triggerHandler("ready"),oe(ge).off("ready")))}}}),oe.ready.promise=function(t){if(!Te)if(Te=oe.Deferred(),"complete"===ge.readyState)setTimeout(oe.ready);else if(ge.addEventListener)ge.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1);else{ge.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&ge.documentElement}catch(r){}n&&n.doScroll&&!function i(){if(!oe.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}a(),oe.ready()}}()}return Te.promise(t)};var Ce="undefined",Se;for(Se in oe(re))break;re.ownLast="0"!==Se,re.inlineBlockNeedsLayout=!1,oe(function(){var e,t,n,r;n=ge.getElementsByTagName("body")[0],n&&n.style&&(t=ge.createElement("div"),r=ge.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==Ce&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",re.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=ge.createElement("div");if(null==re.deleteExpando){re.deleteExpando=!0;try{delete e.test}catch(t){re.deleteExpando=!1}}e=null}(),oe.acceptData=function(e){var t=oe.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return 1!==n&&9!==n?!1:!t||t!==!0&&e.getAttribute("classid")===t};var ke=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ee=/([A-Z])/g;oe.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?oe.cache[e[oe.expando]]:e[oe.expando],!!e&&!u(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return f(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return f(e,t,!0)}}),oe.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=oe.data(o),1===o.nodeType&&!oe._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=oe.camelCase(r.slice(5)),l(o,r,i[r])));oe._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){oe.data(this,e)}):arguments.length>1?this.each(function(){oe.data(this,e,t)}):o?l(o,e,oe.data(o,e)):void 0},removeData:function(e){return this.each(function(){oe.removeData(this,e)})}}),oe.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=oe._data(e,t),n&&(!r||oe.isArray(n)?r=oe._data(e,t,oe.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=oe.queue(e,t),r=n.length,i=n.shift(),o=oe._queueHooks(e,t),a=function(){oe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return oe._data(e,n)||oe._data(e,n,{empty:oe.Callbacks("once memory").add(function(){oe._removeData(e,t+"queue"),oe._removeData(e,n)})})}}),oe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?oe.queue(this[0],e):void 0===t?this:this.each(function(){var n=oe.queue(this,e,t);oe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=oe.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=oe._data(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,je=["Top","Right","Bottom","Left"],Ae=function(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)},Pe=oe.access=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n;if("object"===oe.type(n)){i=!0;for(s in n)oe.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,oe.isFunction(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(oe(e),n)})),t))for(;l>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):o},Le=/^(?:checkbox|radio)$/i;!function(){var e=ge.createElement("input"),t=ge.createElement("div"),n=ge.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",re.leadingWhitespace=3===t.firstChild.nodeType,re.tbody=!t.getElementsByTagName("tbody").length,re.htmlSerialize=!!t.getElementsByTagName("link").length,re.html5Clone="<:nav></:nav>"!==ge.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),re.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",re.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",re.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,re.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){re.noCloneEvent=!1}),t.cloneNode(!0).click()),null==re.deleteExpando){re.deleteExpando=!0;try{delete t.test}catch(r){re.deleteExpando=!1}}}(),function(){var t,n,r=ge.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(re[t+"Bubbles"]=n in e)||(r.setAttribute(n,"t"),re[t+"Bubbles"]=r.attributes[n].expando===!1);r=null}();var _e=/^(?:input|select|textarea)$/i,Oe=/^key/,De=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,He=/^([^.]*)(?:\.(.+)|)$/;oe.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=oe._data(e);if(m){for(n.handler&&(l=n,n=l.handler,i=l.selector),n.guid||(n.guid=oe.guid++),(a=m.events)||(a=m.events={}),(c=m.handle)||(c=m.handle=function(e){return typeof oe===Ce||e&&oe.event.triggered===e.type?void 0:oe.event.dispatch.apply(c.elem,arguments)},c.elem=e),
t=(t||"").match(xe)||[""],s=t.length;s--;)o=He.exec(t[s])||[],d=g=o[1],h=(o[2]||"").split(".").sort(),d&&(u=oe.event.special[d]||{},d=(i?u.delegateType:u.bindType)||d,u=oe.event.special[d]||{},f=oe.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&oe.expr.match.needsContext.test(i),namespace:h.join(".")},l),(p=a[d])||(p=a[d]=[],p.delegateCount=0,u.setup&&u.setup.call(e,r,h,c)!==!1||(e.addEventListener?e.addEventListener(d,c,!1):e.attachEvent&&e.attachEvent("on"+d,c))),u.add&&(u.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,f):p.push(f),oe.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=oe.hasData(e)&&oe._data(e);if(m&&(c=m.events)){for(t=(t||"").match(xe)||[""],u=t.length;u--;)if(s=He.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=oe.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=c[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=p.length;o--;)a=p[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));l&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||oe.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)oe.event.remove(e,d+t[u],n,r,!0);oe.isEmptyObject(c)&&(delete m.handle,oe._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,l,u,c,f,p=[r||ge],d=ne.call(t,"type")?t.type:t,h=ne.call(t,"namespace")?t.namespace.split("."):[];if(s=c=r=r||ge,3!==r.nodeType&&8!==r.nodeType&&!$.test(d+oe.event.triggered)&&(d.indexOf(".")>=0&&(h=d.split("."),d=h.shift(),h.sort()),a=d.indexOf(":")<0&&"on"+d,t=t[oe.expando]?t:new oe.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:oe.makeArray(n,[t]),u=oe.event.special[d]||{},i||!u.trigger||u.trigger.apply(r,n)!==!1)){if(!i&&!u.noBubble&&!oe.isWindow(r)){for(l=u.delegateType||d,$.test(l+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),c=s;c===(r.ownerDocument||ge)&&p.push(c.defaultView||c.parentWindow||e)}for(f=0;(s=p[f++])&&!t.isPropagationStopped();)t.type=f>1?l:u.bindType||d,o=(oe._data(s,"events")||{})[t.type]&&oe._data(s,"handle"),o&&o.apply(s,n),o=a&&s[a],o&&o.apply&&oe.acceptData(s)&&(t.result=o.apply(s,n),t.result===!1&&t.preventDefault());if(t.type=d,!i&&!t.isDefaultPrevented()&&(!u._default||u._default.apply(p.pop(),n)===!1)&&oe.acceptData(r)&&a&&r[d]&&!oe.isWindow(r)){c=r[a],c&&(r[a]=null),oe.event.triggered=d;try{r[d]()}catch(g){}oe.event.triggered=void 0,c&&(r[a]=c)}return t.result}},dispatch:function(e){e=oe.event.fix(e);var t,n,r,i,o,a=[],s=Y.call(arguments),l=(oe._data(this,"events")||{})[e.type]||[],u=oe.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(a=oe.event.handlers.call(this,e,l),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,o=0;(r=i.handlers[o++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,n=((oe.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],o=0;s>o;o++)r=t[o],n=r.selector+" ",void 0===i[n]&&(i[n]=r.needsContext?oe(n,this).index(l)>=0:oe.find(n,this,null,[l]).length),i[n]&&i.push(r);i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[oe.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=De.test(i)?this.mouseHooks:Oe.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new oe.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||ge),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||ge,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return oe.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return oe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=oe.extend(new oe.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?oe.event.trigger(i,null,t):oe.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},oe.removeEvent=ge.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===Ce&&(e[r]=null),e.detachEvent(r,n))},oe.Event=function(e,t){return this instanceof oe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?p:d):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),void(this[oe.expando]=!0)):new oe.Event(e,t)},oe.Event.prototype={isDefaultPrevented:d,isPropagationStopped:d,isImmediatePropagationStopped:d,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=p,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=p,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=p,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!oe.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),re.submitBubbles||(oe.event.special.submit={setup:function(){return oe.nodeName(this,"form")?!1:void oe.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=oe.nodeName(t,"input")||oe.nodeName(t,"button")?t.form:void 0;n&&!oe._data(n,"submitBubbles")&&(oe.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),oe._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&oe.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return oe.nodeName(this,"form")?!1:void oe.event.remove(this,"._submit")}}),re.changeBubbles||(oe.event.special.change={setup:function(){return _e.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(oe.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),oe.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),oe.event.simulate("change",this,e,!0)})),!1):void oe.event.add(this,"beforeactivate._change",function(e){var t=e.target;_e.test(t.nodeName)&&!oe._data(t,"changeBubbles")&&(oe.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||oe.event.simulate("change",this.parentNode,e,!0)}),oe._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return oe.event.remove(this,"._change"),!_e.test(this.nodeName)}}),re.focusinBubbles||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){oe.event.simulate(t,e.target,oe.event.fix(e),!0)};oe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=oe._data(r,t);i||r.addEventListener(e,n,!0),oe._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=oe._data(r,t)-1;i?oe._data(r,t,i):(r.removeEventListener(e,n,!0),oe._removeData(r,t))}}}),oe.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(o in e)this.on(o,t,n,e[o],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=d;else if(!r)return this;return 1===i&&(a=r,r=function(e){return oe().off(e),a.apply(this,arguments)},r.guid=a.guid||(a.guid=oe.guid++)),this.each(function(){oe.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,oe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=d),this.each(function(){oe.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?oe.event.trigger(e,t,n,!0):void 0}});var Me="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Fe=/ jQuery\d+="(?:null|\d+)"/g,Ve=new RegExp("<(?:"+Me+")[\\s/>]","i"),qe=/^\s+/,Re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ie=/<([\w:]+)/,Be=/<tbody/i,ze=/<|&#?\w+;/,$e=/<(?:script|style|link)/i,We=/checked\s*(?:[^=]|=\s*.checked.)/i,Xe=/^$|\/(?:java|ecma)script/i,Qe=/^true\/(.*)/,Ue=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ge={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:re.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ye=g(ge),Je=Ye.appendChild(ge.createElement("div"));Ge.optgroup=Ge.option,Ge.tbody=Ge.tfoot=Ge.colgroup=Ge.caption=Ge.thead,Ge.th=Ge.td,oe.extend({clone:function(e,t,n){var r,i,o,a,s,l=oe.contains(e.ownerDocument,e);if(re.html5Clone||oe.isXMLDoc(e)||!Ve.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Je.innerHTML=e.outerHTML,Je.removeChild(o=Je.firstChild)),!(re.noCloneEvent&&re.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(r=m(o),s=m(e),a=0;null!=(i=s[a]);++a)r[a]&&C(i,r[a]);if(t)if(n)for(s=s||m(e),r=r||m(o),a=0;null!=(i=s[a]);a++)T(i,r[a]);else T(e,o);return r=m(o,"script"),r.length>0&&w(r,!l&&m(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,c,f=e.length,p=g(t),d=[],h=0;f>h;h++)if(o=e[h],o||0===o)if("object"===oe.type(o))oe.merge(d,o.nodeType?[o]:o);else if(ze.test(o)){for(s=s||p.appendChild(t.createElement("div")),l=(Ie.exec(o)||["",""])[1].toLowerCase(),c=Ge[l]||Ge._default,s.innerHTML=c[1]+o.replace(Re,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!re.leadingWhitespace&&qe.test(o)&&d.push(t.createTextNode(qe.exec(o)[0])),!re.tbody)for(o="table"!==l||Be.test(o)?"<table>"!==c[1]||Be.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)oe.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(oe.merge(d,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=p.lastChild}else d.push(t.createTextNode(o));for(s&&p.removeChild(s),re.appendChecked||oe.grep(m(d,"input"),v),h=0;o=d[h++];)if((!r||-1===oe.inArray(o,r))&&(a=oe.contains(o.ownerDocument,o),s=m(p.appendChild(o),"script"),a&&w(s),n))for(i=0;o=s[i++];)Xe.test(o.type||"")&&n.push(o);return s=null,p},cleanData:function(e,t){for(var n,r,i,o,a=0,s=oe.expando,l=oe.cache,u=re.deleteExpando,c=oe.event.special;null!=(n=e[a]);a++)if((t||oe.acceptData(n))&&(i=n[s],o=i&&l[i])){if(o.events)for(r in o.events)c[r]?oe.event.remove(n,r):oe.removeEvent(n,r,o.handle);l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==Ce?n.removeAttribute(s):n[s]=null,G.push(i))}}}),oe.fn.extend({text:function(e){return Pe(this,function(e){return void 0===e?oe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ge).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?oe.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||oe.cleanData(m(n)),n.parentNode&&(t&&oe.contains(n.ownerDocument,n)&&w(m(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&oe.cleanData(m(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&oe.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return Pe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Fe,""):void 0;if(!("string"!=typeof e||$e.test(e)||!re.htmlSerialize&&Ve.test(e)||!re.leadingWhitespace&&qe.test(e)||Ge[(Ie.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Re,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(oe.cleanData(m(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,oe.cleanData(m(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=J.apply([],e);var n,r,i,o,a,s,l=0,u=this.length,c=this,f=u-1,p=e[0],d=oe.isFunction(p);if(d||u>1&&"string"==typeof p&&!re.checkClone&&We.test(p))return this.each(function(n){var r=c.eq(n);d&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(u&&(s=oe.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(o=oe.map(m(s,"script"),b),i=o.length;u>l;l++)r=s,l!==f&&(r=oe.clone(r,!0,!0),i&&oe.merge(o,m(r,"script"))),t.call(this[l],r,l);if(i)for(a=o[o.length-1].ownerDocument,oe.map(o,x),l=0;i>l;l++)r=o[l],Xe.test(r.type||"")&&!oe._data(r,"globalEval")&&oe.contains(a,r)&&(r.src?oe._evalUrl&&oe._evalUrl(r.src):oe.globalEval((r.text||r.textContent||r.innerHTML||"").replace(Ue,"")));s=n=null}return this}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,r=0,i=[],o=oe(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),oe(o[r])[t](n),Z.apply(i,n.get());return this.pushStack(i)}});var Ze,Ke={};!function(){var e;re.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,r;return n=ge.getElementsByTagName("body")[0],n&&n.style?(t=ge.createElement("div"),r=ge.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==Ce&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(ge.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0}}();var et=/^margin/,tt=new RegExp("^("+Ne+")(?!px)[a-z%]+$","i"),nt,rt,it=/^(top|right|bottom|left)$/;e.getComputedStyle?(nt=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)},rt=function(e,t,n){var r,i,o,a,s=e.style;return n=n||nt(e),a=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||oe.contains(e.ownerDocument,e)||(a=oe.style(e,t)),tt.test(a)&&et.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):ge.documentElement.currentStyle&&(nt=function(e){return e.currentStyle},rt=function(e,t,n){var r,i,o,a,s=e.style;return n=n||nt(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),tt.test(a)&&!it.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"}),!function(){function t(){var t,n,r,i;n=ge.getElementsByTagName("body")[0],n&&n.style&&(t=ge.createElement("div"),r=ge.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o=a=!1,l=!0,e.getComputedStyle&&(o="1%"!==(e.getComputedStyle(t,null)||{}).top,a="4px"===(e.getComputedStyle(t,null)||{width:"4px"}).width,i=t.appendChild(ge.createElement("div")),i.style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",t.style.width="1px",l=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight),t.removeChild(i)),t.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=t.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===i[0].offsetHeight,s&&(i[0].style.display="",i[1].style.display="none",s=0===i[0].offsetHeight),n.removeChild(r))}var n,r,i,o,a,s,l;n=ge.createElement("div"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=n.getElementsByTagName("a")[0],(r=i&&i.style)&&(r.cssText="float:left;opacity:.5",re.opacity="0.5"===r.opacity,re.cssFloat=!!r.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",re.clearCloneStyle="content-box"===n.style.backgroundClip,re.boxSizing=""===r.boxSizing||""===r.MozBoxSizing||""===r.WebkitBoxSizing,oe.extend(re,{reliableHiddenOffsets:function(){return null==s&&t(),s},boxSizingReliable:function(){return null==a&&t(),a},pixelPosition:function(){return null==o&&t(),o},reliableMarginRight:function(){return null==l&&t(),l}}))}(),oe.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var ot=/alpha\([^)]*\)/i,at=/opacity\s*=\s*([^)]*)/,st=/^(none|table(?!-c[ea]).+)/,lt=new RegExp("^("+Ne+")(.*)$","i"),ut=new RegExp("^([+-])=("+Ne+")","i"),ct={position:"absolute",visibility:"hidden",display:"block"},ft={letterSpacing:"0",fontWeight:"400"},pt=["Webkit","O","Moz","ms"];oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=rt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":re.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=oe.camelCase(t),l=e.style;if(t=oe.cssProps[s]||(oe.cssProps[s]=N(l,s)),a=oe.cssHooks[t]||oe.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];if(o=typeof n,"string"===o&&(i=ut.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(oe.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||oe.cssNumber[s]||(n+="px"),re.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{l[t]=n}catch(u){}}},css:function(e,t,n,r){var i,o,a,s=oe.camelCase(t);return t=oe.cssProps[s]||(oe.cssProps[s]=N(e.style,s)),a=oe.cssHooks[t]||oe.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=rt(e,t,r)),"normal"===o&&t in ft&&(o=ft[t]),""===n||n?(i=parseFloat(o),n===!0||oe.isNumeric(i)?i||0:o):o}}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,r){return n?st.test(oe.css(e,"display"))&&0===e.offsetWidth?oe.swap(e,ct,function(){return L(e,t,r)}):L(e,t,r):void 0},set:function(e,n,r){var i=r&&nt(e);return A(e,n,r?P(e,t,r,re.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,i),i):0)}}}),re.opacity||(oe.cssHooks.opacity={get:function(e,t){return at.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=oe.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===oe.trim(o.replace(ot,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=ot.test(o)?o.replace(ot,i):o+" "+i)}}),oe.cssHooks.marginRight=E(re.reliableMarginRight,function(e,t){return t?oe.swap(e,{display:"inline-block"},rt,[e,"marginRight"]):void 0}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+je[r]+t]=o[r]||o[r-2]||o[0];return i}},et.test(e)||(oe.cssHooks[e+t].set=A)}),oe.fn.extend({css:function(e,t){return Pe(this,function(e,t,n){var r,i,o={},a=0;if(oe.isArray(t)){for(r=nt(e),i=t.length;i>a;a++)o[t[a]]=oe.css(e,t[a],!1,r);return o}return void 0!==n?oe.style(e,t,n):oe.css(e,t)},e,t,arguments.length>1)},show:function(){return j(this,!0)},hide:function(){return j(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ae(this)?oe(this).show():oe(this).hide()})}}),oe.Tween=_,_.prototype={constructor:_,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(oe.cssNumber[n]?"":"px")},cur:function(){var e=_.propHooks[this.prop];return e&&e.get?e.get(this):_.propHooks._default.get(this)},run:function(e){var t,n=_.propHooks[this.prop];return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):_.propHooks._default.set(this),this}},_.prototype.init.prototype=_.prototype,_.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=oe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[oe.cssProps[e.prop]]||oe.cssHooks[e.prop])?oe.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},_.propHooks.scrollTop=_.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},oe.fx=_.prototype.init,oe.fx.step={};var dt,ht,gt=/^(?:toggle|show|hide)$/,mt=new RegExp("^(?:([+-])=|)("+Ne+")([a-z%]*)$","i"),vt=/queueHooks$/,yt=[M],bt={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=mt.exec(t),o=i&&i[3]||(oe.cssNumber[e]?"":"px"),a=(oe.cssNumber[e]||"px"!==o&&+r)&&mt.exec(oe.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,oe.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};oe.Animation=oe.extend(V,{tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],bt[n]=bt[n]||[],bt[n].unshift(t)},prefilter:function(e,t){t?yt.unshift(e):yt.push(e)}}),oe.speed=function(e,t,n){var r=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t};return r.duration=oe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in oe.fx.speeds?oe.fx.speeds[r.duration]:oe.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){oe.isFunction(r.old)&&r.old.call(this),r.queue&&oe.dequeue(this,r.queue)},r},oe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=oe.isEmptyObject(e),o=oe.speed(t,n,r),a=function(){var t=V(this,oe.extend({},e),o);(i||oe._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=oe.timers,a=oe._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&vt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&oe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=oe._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=oe.timers,a=r?r.length:0;for(n.finish=!0,oe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t];oe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(D(t,!0),e,r,i)}}),oe.each({slideDown:D("show"),slideUp:D("hide"),slideToggle:D("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),oe.timers=[],oe.fx.tick=function(){var e,t=oe.timers,n=0;for(dt=oe.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||oe.fx.stop(),dt=void 0},oe.fx.timer=function(e){oe.timers.push(e),e()?oe.fx.start():oe.timers.pop()},oe.fx.interval=13,oe.fx.start=function(){ht||(ht=setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){clearInterval(ht),ht=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(e,t){return e=oe.fx?oe.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e,t,n,r,i;t=ge.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],n=ge.createElement("select"),i=n.appendChild(ge.createElement("option")),e=t.getElementsByTagName("input")[0],r.style.cssText="top:1px",re.getSetAttribute="t"!==t.className,re.style=/top/.test(r.getAttribute("style")),re.hrefNormalized="/a"===r.getAttribute("href"),re.checkOn=!!e.value,re.optSelected=i.selected,re.enctype=!!ge.createElement("form").enctype,n.disabled=!0,re.optDisabled=!i.disabled,e=ge.createElement("input"),e.setAttribute("value",""),re.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),re.radioValue="t"===e.value}();var xt=/\r/g;oe.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=oe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,oe(this).val()):e,null==i?i="":"number"==typeof i?i+="":oe.isArray(i)&&(i=oe.map(i,function(e){return null==e?"":e+""})),t=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=oe.valHooks[i.type]||oe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(xt,""):null==n?"":n)):void 0}}),oe.extend({valHooks:{option:{get:function(e){var t=oe.find.attr(e,"value");return null!=t?t:oe.trim(oe.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(re.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=oe.makeArray(t),a=i.length;a--;)if(r=i[a],oe.inArray(oe.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(s){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(e,t){return oe.isArray(t)?e.checked=oe.inArray(oe(e).val(),t)>=0:void 0}},re.checkOn||(oe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var wt,Tt,Ct=oe.expr.attrHandle,St=/^(?:checked|selected)$/i,kt=re.getSetAttribute,Et=re.input;oe.fn.extend({attr:function(e,t){return Pe(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})}}),oe.extend({attr:function(e,t,n){var r,i,o=e.nodeType;return e&&3!==o&&8!==o&&2!==o?typeof e.getAttribute===Ce?oe.prop(e,t,n):(1===o&&oe.isXMLDoc(e)||(t=t.toLowerCase(),r=oe.attrHooks[t]||(oe.expr.match.bool.test(t)?Tt:wt)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=oe.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void oe.removeAttr(e,t)):void 0},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(xe);if(o&&1===e.nodeType)for(;n=o[i++];)r=oe.propFix[n]||n,oe.expr.match.bool.test(n)?Et&&kt||!St.test(n)?e[r]=!1:e[oe.camelCase("default-"+n)]=e[r]=!1:oe.attr(e,n,""),e.removeAttribute(kt?n:r)},attrHooks:{type:{set:function(e,t){if(!re.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Tt={set:function(e,t,n){return t===!1?oe.removeAttr(e,n):Et&&kt||!St.test(n)?e.setAttribute(!kt&&oe.propFix[n]||n,n):e[oe.camelCase("default-"+n)]=e[n]=!0,n}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ct[t]||oe.find.attr;Ct[t]=Et&&kt||!St.test(t)?function(e,t,r){var i,o;return r||(o=Ct[t],Ct[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ct[t]=o),i}:function(e,t,n){return n?void 0:e[oe.camelCase("default-"+t)]?t.toLowerCase():null}}),Et&&kt||(oe.attrHooks.value={set:function(e,t,n){return oe.nodeName(e,"input")?void(e.defaultValue=t):wt&&wt.set(e,t,n)}}),kt||(wt={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},Ct.id=Ct.name=Ct.coords=function(e,t,n){
var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},oe.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:wt.set},oe.attrHooks.contenteditable={set:function(e,t,n){wt.set(e,""===t?!1:t,n)}},oe.each(["width","height"],function(e,t){oe.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),re.style||(oe.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Nt=/^(?:input|select|textarea|button|object)$/i,jt=/^(?:a|area)$/i;oe.fn.extend({prop:function(e,t){return Pe(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return e=oe.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(t){}})}}),oe.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;return e&&3!==a&&8!==a&&2!==a?(o=1!==a||!oe.isXMLDoc(e),o&&(t=oe.propFix[t]||t,i=oe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]):void 0},propHooks:{tabIndex:{get:function(e){var t=oe.find.attr(e,"tabindex");return t?parseInt(t,10):Nt.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:-1}}}}),re.hrefNormalized||oe.each(["href","src"],function(e,t){oe.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),re.optSelected||(oe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this}),re.enctype||(oe.propFix.enctype="encoding");var At=/[\t\r\n\f]/g;oe.fn.extend({addClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u="string"==typeof e&&e;if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(xe)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(At," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=oe.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof e&&e;if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(xe)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(At," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?oe.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(oe.isFunction(e)?function(n){oe(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=oe(this),o=e.match(xe)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===Ce||"boolean"===n)&&(this.className&&oe._data(this,"__className__",this.className),this.className=this.className||e===!1?"":oe._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(At," ").indexOf(t)>=0)return!0;return!1}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),oe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Pt=oe.now(),Lt=/\?/,_t=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;oe.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=oe.trim(t+"");return i&&!oe.trim(i.replace(_t,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():oe.error("Invalid JSON: "+t)},oe.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(r=new DOMParser,n=r.parseFromString(t,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(i){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+t),n};var Ot,Dt,Ht=/#.*$/,Mt=/([?&])_=[^&]*/,Ft=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Vt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Bt={},zt={},$t="*/".concat("*");try{Dt=location.href}catch(Wt){Dt=ge.createElement("a"),Dt.href="",Dt=Dt.href}Ot=It.exec(Dt.toLowerCase())||[],oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dt,type:"GET",isLocal:Vt.test(Ot[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?I(I(e,oe.ajaxSettings),t):I(oe.ajaxSettings,e)},ajaxPrefilter:q(Bt),ajaxTransport:q(zt),ajax:function(e,t){function n(e,t,n,r){var i,c,v,y,x,T=t;2!==b&&(b=2,s&&clearTimeout(s),u=void 0,a=r||"",w.readyState=e>0?4:0,i=e>=200&&300>e||304===e,n&&(y=B(f,w,n)),y=z(f,y,w,i),i?(f.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(oe.lastModified[o]=x),x=w.getResponseHeader("etag"),x&&(oe.etag[o]=x)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,i=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",i?h.resolveWith(p,[c,T,w]):h.rejectWith(p,[w,T,v]),w.statusCode(m),m=void 0,l&&d.trigger(i?"ajaxSuccess":"ajaxError",[w,f,i?c:v]),g.fireWith(p,[w,T]),l&&(d.trigger("ajaxComplete",[w,f]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,a,s,l,u,c,f=oe.ajaxSetup({},t),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?oe(p):oe.event,h=oe.Deferred(),g=oe.Callbacks("once memory"),m=f.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=Ft.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return u&&u.abort(t),n(0,t),this}};if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||Dt)+"").replace(Ht,"").replace(Rt,Ot[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=oe.trim(f.dataType||"*").toLowerCase().match(xe)||[""],null==f.crossDomain&&(r=It.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===Ot[1]&&r[2]===Ot[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Ot[3]||("http:"===Ot[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=oe.param(f.data,f.traditional)),R(Bt,f,t,w),2===b)return w;l=oe.event&&f.global,l&&0===oe.active++&&oe.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!qt.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(Lt.test(o)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=Mt.test(o)?o.replace(Mt,"$1_="+Pt++):o+(Lt.test(o)?"&":"?")+"_="+Pt++)),f.ifModified&&(oe.lastModified[o]&&w.setRequestHeader("If-Modified-Since",oe.lastModified[o]),oe.etag[o]&&w.setRequestHeader("If-None-Match",oe.etag[o])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+$t+"; q=0.01":""):f.accepts["*"]);for(i in f.headers)w.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(f.beforeSend.call(p,w,f)===!1||2===b))return w.abort();x="abort";for(i in{success:1,error:1,complete:1})w[i](f[i]);if(u=R(zt,f,t,w)){w.readyState=1,l&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},f.timeout));try{b=1,u.send(v,n)}catch(T){if(!(2>b))throw T;n(-1,T)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return oe.get(e,t,n,"json")},getScript:function(e,t){return oe.get(e,void 0,t,"script")}}),oe.each(["get","post"],function(e,t){oe[t]=function(e,n,r,i){return oe.isFunction(n)&&(i=i||r,r=n,n=void 0),oe.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),oe._evalUrl=function(e){return oe.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},oe.fn.extend({wrapAll:function(e){if(oe.isFunction(e))return this.each(function(t){oe(this).wrapAll(e.call(this,t))});if(this[0]){var t=oe(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(oe.isFunction(e)?function(t){oe(this).wrapInner(e.call(this,t))}:function(){var t=oe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e);return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()}}),oe.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!re.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||oe.css(e,"display"))},oe.expr.filters.visible=function(e){return!oe.expr.filters.hidden(e)};var Xt=/%20/g,Qt=/\[\]$/,Ut=/\r?\n/g,Gt=/^(?:submit|button|image|reset|file)$/i,Yt=/^(?:input|select|textarea|keygen)/i;oe.param=function(e,t){var n,r=[],i=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){i(this.name,this.value)});else for(n in e)W(n,e[n],t,i);return r.join("&").replace(Xt,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements");return e?oe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!oe(this).is(":disabled")&&Yt.test(this.nodeName)&&!Gt.test(e)&&(this.checked||!Le.test(e))}).map(function(e,t){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(Ut,"\r\n")}}):{name:t.name,value:n.replace(Ut,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&X()||Q()}:X;var Jt=0,Zt={},Kt=oe.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Zt)Zt[e](void 0,!0)}),re.cors=!!Kt&&"withCredentials"in Kt,Kt=re.ajax=!!Kt,Kt&&oe.ajaxTransport(function(e){if(!e.crossDomain||re.cors){var t;return{send:function(n,r){var i,o=e.xhr(),a=++Jt;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(e.hasContent&&e.data||null),t=function(n,i){var s,l,u;if(t&&(i||4===o.readyState))if(delete Zt[a],t=void 0,o.onreadystatechange=oe.noop,i)4!==o.readyState&&o.abort();else{u={},s=o.status,"string"==typeof o.responseText&&(u.text=o.responseText);try{l=o.statusText}catch(c){l=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&r(s,l,u,o.getAllResponseHeaders())},e.async?4===o.readyState?setTimeout(t):o.onreadystatechange=Zt[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=ge.head||oe("head")[0]||ge.documentElement;return{send:function(r,i){t=ge.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var en=[],tn=/(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=en.pop()||oe.expando+"_"+Pt++;return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(tn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tn.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=oe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tn,"$1"+i):t.jsonp!==!1&&(t.url+=(Lt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||oe.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,en.push(i)),a&&oe.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),oe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ge;var r=pe.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=oe.buildFragment([e],t,i),i&&i.length&&oe(i).remove(),oe.merge([],r.childNodes))};var nn=oe.fn.load;oe.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=oe.trim(e.slice(s,e.length)),e=e.slice(0,s)),oe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&oe.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?oe("<div>").append(oe.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,i||[e.responseText,t,e])}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length};var rn=e.document.documentElement;oe.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u,c=oe.css(e,"position"),f=oe(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=oe.css(e,"top"),l=oe.css(e,"left"),u=("absolute"===c||"fixed"===c)&&oe.inArray("auto",[o,l])>-1,u?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),oe.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},oe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){oe.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,oe.contains(t,i)?(typeof i.getBoundingClientRect!==Ce&&(r=i.getBoundingClientRect()),n=U(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===oe.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(n=e.offset()),n.top+=oe.css(e[0],"borderTopWidth",!0),n.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-oe.css(r,"marginTop",!0),left:t.left-n.left-oe.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||rn;e&&!oe.nodeName(e,"html")&&"static"===oe.css(e,"position");)e=e.offsetParent;return e||rn})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);oe.fn[e]=function(r){return Pe(this,function(e,r,i){var o=U(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?oe(o).scrollLeft():i,n?i:oe(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),oe.each(["top","left"],function(e,t){oe.cssHooks[t]=E(re.pixelPosition,function(e,n){return n?(n=rt(e,t),tt.test(n)?oe(e).position()[t]+"px":n):void 0})}),oe.each({Height:"height",Width:"width"},function(e,t){oe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){oe.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return Pe(this,function(t,n,r){var i;return oe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?oe.css(t,n,a):oe.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),oe.fn.size=function(){return this.length},oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe});var on=e.jQuery,an=e.$;return oe.noConflict=function(t){return e.$===oe&&(e.$=an),t&&e.jQuery===oe&&(e.jQuery=on),oe},typeof t===Ce&&(e.jQuery=e.$=oe),oe}),this.createjs=this.createjs||{},function(){"use strict";function e(){this._listeners=null,this._captureListeners=null}var t=e.prototype;e.initialize=function(e){e.addEventListener=t.addEventListener,e.on=t.on,e.removeEventListener=e.off=t.removeEventListener,e.removeAllEventListeners=t.removeAllEventListeners,e.hasEventListener=t.hasEventListener,e.dispatchEvent=t.dispatchEvent,e._dispatchEvent=t._dispatchEvent,e.willTrigger=t.willTrigger},t.addEventListener=function(e,t,n){var r;r=n?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var i=r[e];return i&&this.removeEventListener(e,t,n),i=r[e],i?i.push(t):r[e]=[t],t},t.on=function(e,t,n,r,i,o){return t.handleEvent&&(n=n||t,t=t.handleEvent),n=n||this,this.addEventListener(e,function(e){t.call(n,e,i),r&&e.remove()},o)},t.removeEventListener=function(e,t,n){var r=n?this._captureListeners:this._listeners;if(r){var i=r[e];if(i)for(var o=0,a=i.length;a>o;o++)if(i[o]==t){1==a?delete r[e]:i.splice(o,1);break}}},t.off=t.removeEventListener,t.removeAllEventListeners=function(e){e?(this._listeners&&delete this._listeners[e],this._captureListeners&&delete this._captureListeners[e]):this._listeners=this._captureListeners=null},t.dispatchEvent=function(e,t,n){if("string"==typeof e){var r=this._listeners;if(!(t||r&&r[e]))return!0;e=new createjs.Event(e,t,n)}else e.target&&e.clone&&(e=e.clone());try{e.target=this}catch(i){}if(e.bubbles&&this.parent){for(var o=this,a=[o];o.parent;)a.push(o=o.parent);var s,l=a.length;for(s=l-1;s>=0&&!e.propagationStopped;s--)a[s]._dispatchEvent(e,1+(0==s));for(s=1;l>s&&!e.propagationStopped;s++)a[s]._dispatchEvent(e,3)}else this._dispatchEvent(e,2);return!e.defaultPrevented},t.hasEventListener=function(e){var t=this._listeners,n=this._captureListeners;return!!(t&&t[e]||n&&n[e])},t.willTrigger=function(e){for(var t=this;t;){if(t.hasEventListener(e))return!0;t=t.parent}return!1},t.toString=function(){return"[EventDispatcher]"},t._dispatchEvent=function(e,t){var n,r=1==t?this._captureListeners:this._listeners;if(e&&r){var i=r[e.type];if(!i||!(n=i.length))return;try{e.currentTarget=this}catch(o){}try{e.eventPhase=t}catch(o){}e.removed=!1,i=i.slice();for(var a=0;n>a&&!e.immediatePropagationStopped;a++){var s=i[a];s.handleEvent?s.handleEvent(e):s(e),e.removed&&(this.off(e.type,s,1==t),e.removed=!1)}}},createjs.EventDispatcher=e}(),function(e){function t(e){var t=e.length,n=$.type(e);return"function"===n||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?r[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!i.call(e,"constructor")&&!i.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}for(t in e);return void 0===t||i.call(e,t)},$.each=function(e,n,r){var i,o=0,a=e.length,s=t(e);if(r){if(s)for(;a>o&&(i=n.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=n.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=n.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=n.call(e[o],o,e[o]),i===!1)break;return e},$.data=function(e,t,r){if(void 0===r){var i=e[$.expando],o=i&&n[i];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var i=e[$.expando]||(e[$.expando]=++$.uuid);return n[i]=n[i]||{},n[i][t]=r,r}},$.removeData=function(e,t){var r=e[$.expando],i=r&&n[r];i&&$.each(t,function(e,t){delete i[t]})},$.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"!=typeof a&&"function"!==$.type(a)&&(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(u&&n&&($.isPlainObject(n)||(t=$.isArray(n)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},a[r]=$.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},$.queue=function(e,n,r){function i(e,n){var r=n||[];return null!=e&&(t(Object(e))?!function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e}(r,"string"==typeof e?[e]:e):[].push.call(r,e)),r}if(e){n=(n||"fx")+"queue";var o=$.data(e,n);return r?(!o||$.isArray(r)?o=$.data(e,n,i(r)):o.push(r),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,n){t=t||"fx";var r=$.queue(n,t),i=r.shift();"inprogress"===i&&(i=r.shift()),i&&("fx"===t&&r.unshift("inprogress"),i.call(n,function(){$.dequeue(n,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),n=this.offset(),r=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return n.top-=parseFloat(t.style.marginTop)||0,n.left-=parseFloat(t.style.marginLeft)||0,e.style&&(r.top+=parseFloat(e.style.borderTopWidth)||0,r.left+=parseFloat(e.style.borderLeftWidth)||0),{top:n.top-r.top,left:n.left-r.left}}};var n={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var r={},i=r.hasOwnProperty,o=r.toString,a="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<a.length;s++)r["[object "+a[s]+"]"]=a[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,n,r){function i(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r}function o(e){return h.isWrapped(e)?e=[].slice.call(e):h.isNode(e)&&(e=[e]),e}function a(e){var t=$.data(e,"velocity");return null===t?r:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,n,r,i){function o(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,n){return((o(t,n)*e+a(t,n))*e+s(t))*e}function u(e,t,n){return 3*o(t,n)*e*e+2*a(t,n)*e+s(t)}function c(t,n){for(var i=0;g>i;++i){var o=u(n,e,r);if(0===o)return n;var a=l(n,e,r)-t;n-=a/o}return n}function f(){for(var t=0;b>t;++t)C[t]=l(t*x,e,r)}function p(t,n,i){var o,a,s=0;do a=n+(i-n)/2,o=l(a,e,r)-t,o>0?i=a:n=a;while(Math.abs(o)>v&&++s<y);return a}function d(t){for(var n=0,i=1,o=b-1;i!=o&&C[i]<=t;++i)n+=x;--i;var a=(t-C[i])/(C[i+1]-C[i]),s=n+a*x,l=u(s,e,r);return l>=m?c(t,s):0==l?s:p(t,n,n+x)}function h(){S=!0,(e!=n||r!=i)&&f()}var g=4,m=.001,v=1e-7,y=10,b=11,x=1/(b-1),w="Float32Array"in t;if(4!==arguments.length)return!1;for(var T=0;4>T;++T)if("number"!=typeof arguments[T]||isNaN(arguments[T])||!isFinite(arguments[T]))return!1;e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0);var C=w?new Float32Array(b):new Array(b),S=!1,k=function(t){return S||h(),e===n&&r===i?t:0===t?0:1===t?1:l(d(t),n,i)};k.getControlPoints=function(){return[{x:e,y:n},{x:r,y:i}]};var E="generateBezier("+[e,n,r,i]+")";return k.toString=function(){return E},k}function u(e,t){var n=e;return h.isString(e)?y.Easings[e]||(n=!1):n=h.isArray(e)&&1===e.length?s.apply(null,e):h.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):h.isArray(e)&&4===e.length?l.apply(null,e):!1,n===!1&&(n=y.Easings[y.defaults.easing]?y.defaults.easing:v),n}function c(e){if(e){var t=(new Date).getTime(),n=y.State.calls.length;n>1e4&&(y.State.calls=i(y.State.calls));for(var o=0;n>o;o++)if(y.State.calls[o]){var s=y.State.calls[o],l=s[0],u=s[2],p=s[3],d=!!p,g=null;p||(p=y.State.calls[o][3]=t-16);for(var m=Math.min((t-p)/u.duration,1),v=0,b=l.length;b>v;v++){var w=l[v],C=w.element;if(a(C)){var S=!1;if(u.display!==r&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var k=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(k,function(e,t){x.setPropertyValue(C,"display",t)})}x.setPropertyValue(C,"display",u.display)}u.visibility!==r&&"hidden"!==u.visibility&&x.setPropertyValue(C,"visibility",u.visibility);for(var E in w)if("element"!==E){var N=w[E],j,A=h.isString(N.easing)?y.Easings[N.easing]:N.easing;if(1===m)j=N.endValue;else{var P=N.endValue-N.startValue;if(j=N.startValue+P*A(m,u,P),!d&&j===N.currentValue)continue}if(N.currentValue=j,"tween"===E)g=j;else{if(x.Hooks.registered[E]){var L=x.Hooks.getRoot(E),_=a(C).rootPropertyValueCache[L];_&&(N.rootPropertyValue=_)}var O=x.setPropertyValue(C,E,N.currentValue+(0===parseFloat(j)?"":N.unitType),N.rootPropertyValue,N.scrollData);x.Hooks.registered[E]&&(x.Normalizations.registered[L]?a(C).rootPropertyValueCache[L]=x.Normalizations.registered[L]("extract",null,O[1]):a(C).rootPropertyValueCache[L]=O[1]),"transform"===O[0]&&(S=!0)}}u.mobileHA&&a(C).transformCache.translate3d===r&&(a(C).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(C)}}u.display!==r&&"none"!==u.display&&(y.State.calls[o][2].display=!1),u.visibility!==r&&"hidden"!==u.visibility&&(y.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],m,Math.max(0,p+u.duration-t),p,g),1===m&&f(o)}}y.State.isTicking&&T(c)}function f(e,t){if(!y.State.calls[e])return!1;for(var n=y.State.calls[e][0],i=y.State.calls[e][1],o=y.State.calls[e][2],s=y.State.calls[e][4],l=!1,u=0,c=n.length;c>u;u++){var f=n[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(f,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(f,"visibility",o.visibility)),o.loop!==!0&&($.queue(f)[1]===r||!/\.velocityQueueEntryFlag/i.test($.queue(f)[1]))&&a(f)){a(f).isAnimating=!1,a(f).rootPropertyValueCache={};var p=!1;$.each(x.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=a(f).transformCache[t];a(f).transformCache[t]!==r&&new RegExp("^\\("+n+"[^.]").test(i)&&(p=!0,delete a(f).transformCache[t])}),o.mobileHA&&(p=!0,delete a(f).transformCache.translate3d),p&&x.flushTransformCache(f),x.Values.removeClass(f,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(i,i)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(i),a(f)&&o.loop===!0&&!t&&($.each(a(f).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),y(f,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(f,o.queue)}y.State.calls[e]=!1;for(var h=0,g=y.State.calls.length;g>h;h++)if(y.State.calls[h]!==!1){l=!0;break}l===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var p=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return r}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n=(new Date).getTime(),r;return r=Math.max(0,16-(n-e)),e=n+r,setTimeout(function(){t(n+r)},r)}}(),h={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==r&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,g=!1;if(e.fn&&e.fn.jquery?($=e,g=!0):$=t.Velocity.Utilities,8>=p&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=p)return void(jQuery.fn.velocity=jQuery.fn.animate);var m=400,v="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:m,easing:v,begin:r,complete:r,progress:r,display:r,visibility:r,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:h.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==r?(y.State.scrollAnchor=t,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},o=t(n,.5*r,i),a=t(n,.5*r,o),s=t(n,r,a),l=1/6*(i.dx+2*(o.dx+a.dx)+s.dx),u=1/6*(i.dv+2*(o.dv+a.dv)+s.dv);return n.x=n.x+l*r,n.v=n.v+u*r,
n}return function r(e,t,i){var o={x:-1,v:0,tension:null,friction:null},a=[0],s=0,l=1e-4,u=.016,c,f,p;for(e=parseFloat(e)||500,t=parseFloat(t)||20,i=i||null,o.tension=e,o.friction=t,c=null!==i,c?(s=r(e,t),f=s/i*u):f=u;;)if(p=n(p||o,f),a.push(1+p.x),s+=16,!(Math.abs(p.x)>l&&Math.abs(p.v)>l))break;return c?function(e){return a[e*(a.length-1)|0]}:s}}();y.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){y.Easings[t[0]]=l.apply(null,t[1])});var x=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,r,i;if(p)for(n in x.Hooks.templates){r=x.Hooks.templates[n],i=r[0].split(" ");var o=r[1].match(x.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),o.push(o.shift()),x.Hooks.templates[n]=[i.join(" "),o.join(" ")])}for(n in x.Hooks.templates){r=x.Hooks.templates[n],i=r[0].split(" ");for(var e in i){var a=n+i[e],s=e;x.Hooks.registered[a]=[n,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=x.Hooks.registered[e];if(n){var r=n[0],i=n[1];return t=x.Hooks.cleanRootPropertyValue(r,t),t.toString().match(x.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var r=x.Hooks.registered[e];if(r){var i=r[0],o=r[1],a,s;return n=x.Hooks.cleanRootPropertyValue(i,n),a=n.toString().match(x.RegEx.valueSplit),a[o]=t,s=a.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var r;return x.RegEx.wrappedValueAlreadyExtracted.test(n)?r=n:(r=n.toString().match(x.RegEx.valueUnwrap),r=r?r[1].replace(/,(\s+)?/g," "):n),r;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var r=parseFloat(n);if(!r&&0!==r){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);r=i?i[1]:0}return r;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(8>=p)switch(e){case"name":return"filter";case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=r?r[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":return n;case"inject":return n}}},register:function(){9>=p||y.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return"transform";case"extract":return a(n)===r||a(n).transformCache[t]===r?/^scale/i.test(t)?1:0:a(n).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":y.State.isAndroid&&a(n).transformCache[t]===r&&1>i&&(i=1),o=!/(\d)$/i.test(i);break;case"skew":o=!/(deg|\d)$/i.test(i);break;case"rotate":o=!/(deg|\d)$/i.test(i)}return o||(a(n).transformCache[t]="("+i+")"),a(n).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(i))o=i;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?a=s[i]!==r?s[i]:s.black:x.RegEx.isHex.test(i)?a="rgb("+x.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(a=s.black),o=(a||i).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=p||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=p?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(8>=p?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(y.State.prefixMatches[e])return[y.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,r=t.length;r>n;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),h.isString(y.State.prefixElement.style[i]))return y.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,r;return e=e.replace(t,function(e,t,n,r){return t+t+n+n+r+r}),r=n.exec(e),r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,n,i,o){function s(e,n){function i(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=p)l=$.css(e,n);else{var u=!1;if(/^(width|height)$/.test(n)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return i(),c}if("width"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return i(),f}}var d;d=a(e)===r?t.getComputedStyle(e,null):a(e).computedStyle?a(e).computedStyle:a(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===n&&(n="borderTopColor"),l=9===p&&"filter"===n?d.getPropertyValue(n):d[n],(""===l||null===l)&&(l=e.style[n]),i()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(n)){var h=s(e,"position");("fixed"===h||"absolute"===h&&/top|left/i.test(n))&&(l=$(e).position()[n]+"px")}return l}var l;if(x.Hooks.registered[n]){var u=n,c=x.Hooks.getRoot(u);i===r&&(i=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(i=x.Normalizations.registered[c]("extract",e,i)),l=x.Hooks.extractValue(u,i)}else if(x.Normalizations.registered[n]){var f,d;f=x.Normalizations.registered[n]("name",e),"transform"!==f&&(d=s(e,x.Names.prefixCheck(f)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[n]&&(d=x.Hooks.templates[n][1])),l=x.Normalizations.registered[n]("extract",e,d)}if(!/^[\d-]/.test(l))if(a(e)&&a(e).isSVG&&x.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{l=e.getBBox()[n]}catch(h){l=0}else l=e.getAttribute(n);else l=s(e,x.Names.prefixCheck(n)[0]);return x.Values.isCSSNullValue(l)&&(l=0),y.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,r,i,o){var s=n;if("scroll"===n)o.container?o.container["scroll"+o.direction]=r:"Left"===o.direction?t.scrollTo(r,o.alternateValue):t.scrollTo(o.alternateValue,r);else if(x.Normalizations.registered[n]&&"transform"===x.Normalizations.registered[n]("name",e))x.Normalizations.registered[n]("inject",e,r),s="transform",r=a(e).transformCache[n];else{if(x.Hooks.registered[n]){var l=n,u=x.Hooks.getRoot(n);i=i||x.getPropertyValue(e,u),r=x.Hooks.injectValue(l,r,i),n=u}if(x.Normalizations.registered[n]&&(r=x.Normalizations.registered[n]("inject",e,r),n=x.Normalizations.registered[n]("name",e)),s=x.Names.prefixCheck(n)[0],8>=p)try{e.style[s]=r}catch(c){y.debug&&console.log("Browser does not support ["+r+"] for ["+s+"]")}else a(e)&&a(e).isSVG&&x.Names.SVGAttribute(n)?e.setAttribute(n,r):e.style[s]=r;y.debug>=2&&console.log("Set "+n+" ("+s+"): "+r)}return[s,r]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var n="";if((p||y.State.isAndroid&&!y.State.isChrome)&&a(e).isSVG){var r={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(a(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),r[e]&&(n+=e+"("+r[e].join(" ")+") ",delete r[e])})}else{var i,o;$.each(a(e).transformCache,function(t){return i=a(e).transformCache[t],"transformPerspective"===t?(o=i,!0):(9===p&&"rotateZ"===t&&(t="rotate"),void(n+=t+i+" "))}),o&&(n="perspective"+o+" "+n)}x.setPropertyValue(e,"transform",n)}};x.Hooks.register(),x.Normalizations.register(),y.hook=function(e,t,n){var i=r;return e=o(e),$.each(e,function(e,o){if(a(o)===r&&y.init(o),n===r)i===r&&(i=y.CSS.getPropertyValue(o,t));else{var s=y.CSS.setPropertyValue(o,t,n);"transform"===s[0]&&y.CSS.flushTransformCache(o),i=s}}),i};var w=function(){function e(){return l?E.promise||null:p}function i(){function e(e){function f(e,t){var n=r,a=r,s=r;return h.isArray(e)?(n=e[0],!h.isArray(e[1])&&/^[\d-]/.test(e[1])||h.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(h.isString(e[1])&&!x.RegEx.isHex.test(e[1])||h.isArray(e[1]))&&(a=t?e[1]:u(e[1],o.duration),e[2]!==r&&(s=e[2]))):n=e,t||(a=a||o.easing),h.isFunction(n)&&(n=n.call(i,C,T)),h.isFunction(s)&&(s=s.call(i,C,T)),[n||0,a,s]}function p(e,t){var n,r;return r=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=x.Values.getUnitType(e)),[r,n]}function d(){var e={myParent:i.parentNode||n.body,position:x.getPropertyValue(i,"position"),fontSize:x.getPropertyValue(i,"fontSize")},r=e.position===O.lastPosition&&e.myParent===O.lastParent,o=e.fontSize===O.lastFontSize;O.lastParent=e.myParent,O.lastPosition=e.position,O.lastFontSize=e.fontSize;var s=100,l={};if(o&&r)l.emToPx=O.lastEmToPx,l.percentToPxWidth=O.lastPercentToPxWidth,l.percentToPxHeight=O.lastPercentToPxHeight;else{var u=a(i).isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");y.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){y.CSS.setPropertyValue(u,t,"hidden")}),y.CSS.setPropertyValue(u,"position",e.position),y.CSS.setPropertyValue(u,"fontSize",e.fontSize),y.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){y.CSS.setPropertyValue(u,t,s+"%")}),y.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=O.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=O.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=O.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===O.remToPx&&(O.remToPx=parseFloat(x.getPropertyValue(n.body,"fontSize"))||16),null===O.vwToPx&&(O.vwToPx=parseFloat(t.innerWidth)/100,O.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=O.remToPx,l.vwToPx=O.vwToPx,l.vhToPx=O.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),i),l}if(o.begin&&0===C)try{o.begin.call(g,g)}catch(m){setTimeout(function(){throw m},1)}if("scroll"===N){var w=/^x$/i.test(o.axis)?"Left":"Top",S=parseFloat(o.offset)||0,k,j,A;o.container?h.isWrapped(o.container)||h.isNode(o.container)?(o.container=o.container[0]||o.container,k=o.container["scroll"+w],A=k+$(i).position()[w.toLowerCase()]+S):o.container=null:(k=y.State.scrollAnchor[y.State["scrollProperty"+w]],j=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===w?"Top":"Left")]],A=$(i).offset()[w.toLowerCase()]+S),s={scroll:{rootPropertyValue:!1,startValue:k,currentValue:k,endValue:A,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:w,alternateValue:j}},element:i},y.debug&&console.log("tweensContainer (scroll): ",s.scroll,i)}else if("reverse"===N){if(!a(i).tweensContainer)return void $.dequeue(i,o.queue);"none"===a(i).opts.display&&(a(i).opts.display="auto"),"hidden"===a(i).opts.visibility&&(a(i).opts.visibility="visible"),a(i).opts.loop=!1,a(i).opts.begin=null,a(i).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},a(i).opts,o);var P=$.extend(!0,{},a(i).tweensContainer);for(var L in P)if("element"!==L){var _=P[L].startValue;P[L].startValue=P[L].currentValue=P[L].endValue,P[L].endValue=_,h.isEmptyObject(b)||(P[L].easing=o.easing),y.debug&&console.log("reverse tweensContainer ("+L+"): "+JSON.stringify(P[L]),i)}s=P}else if("start"===N){var P;a(i).tweensContainer&&a(i).isAnimating===!0&&(P=a(i).tweensContainer),$.each(v,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var n=f(t,!0),i=n[0],o=n[1],a=n[2];if(x.RegEx.isHex.test(i)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(i),u=a?x.Values.hexToRgb(a):r,c=0;c<s.length;c++){var p=[l[c]];o&&p.push(o),u!==r&&p.push(u[c]),v[e+s[c]]=p}delete v[e]}}});for(var H in v){var M=f(v[H]),F=M[0],V=M[1],q=M[2];H=x.Names.camelCase(H);var R=x.Hooks.getRoot(H),I=!1;if(a(i).isSVG||"tween"===R||x.Names.prefixCheck(R)[1]!==!1||x.Normalizations.registered[R]!==r){(o.display!==r&&null!==o.display&&"none"!==o.display||o.visibility!==r&&"hidden"!==o.visibility)&&/opacity|filter/.test(H)&&!q&&0!==F&&(q=0),o._cacheValues&&P&&P[H]?(q===r&&(q=P[H].endValue+P[H].unitType),I=a(i).rootPropertyValueCache[R]):x.Hooks.registered[H]?q===r?(I=x.getPropertyValue(i,R),q=x.getPropertyValue(i,H,I)):I=x.Hooks.templates[R][1]:q===r&&(q=x.getPropertyValue(i,H));var B,z,W,X=!1;if(B=p(H,q),q=B[0],W=B[1],B=p(H,F),F=B[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),z=B[1],q=parseFloat(q)||0,F=parseFloat(F)||0,"%"===z&&(/^(fontSize|lineHeight)$/.test(H)?(F/=100,z="em"):/^scale/.test(H)?(F/=100,z=""):/(Red|Green|Blue)$/i.test(H)&&(F=F/100*255,z="")),/[\/*]/.test(X))z=W;else if(W!==z&&0!==q)if(0===F)z=W;else{l=l||d();var Q=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)||"x"===H?"x":"y";switch(W){case"%":q*="x"===Q?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:q*=l[W+"ToPx"]}switch(z){case"%":q*=1/("x"===Q?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:q*=1/l[z+"ToPx"]}}switch(X){case"+":F=q+F;break;case"-":F=q-F;break;case"*":F=q*F;break;case"/":F=q/F}s[H]={rootPropertyValue:I,startValue:q,currentValue:q,endValue:F,unitType:z,easing:V},y.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(s[H]),i)}else y.debug&&console.log("Skipping ["+R+"] due to a lack of browser support.")}s.element=i}s.element&&(x.Values.addClass(i,"velocity-animating"),D.push(s),""===o.queue&&(a(i).tweensContainer=s,a(i).opts=o),a(i).isAnimating=!0,C===T-1?(y.State.calls.push([D,g,o,null,E.resolver]),y.State.isTicking===!1&&(y.State.isTicking=!0,c())):C++)}var i=this,o=$.extend({},y.defaults,b),s={},l;switch(a(i)===r&&y.init(i),parseFloat(o.delay)&&o.queue!==!1&&$.queue(i,o.queue,function(e){y.velocityQueueEntryFlag=!0,a(i).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=m;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}y.mock!==!1&&(y.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(y.mock)||1,o.delay*=parseFloat(y.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!h.isFunction(o.begin)&&(o.begin=null),o.progress&&!h.isFunction(o.progress)&&(o.progress=null),o.complete&&!h.isFunction(o.complete)&&(o.complete=null),o.display!==r&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=y.CSS.Values.getDisplayType(i))),o.visibility!==r&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(i,o.queue,function(t,n){return n===!0?(E.promise&&E.resolver(g),!0):(y.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(i)[0]||$.dequeue(i)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||h.isString(arguments[0].properties)),l,p,d,g,v,b;if(h.isWrapped(this)?(l=!1,d=0,g=this,p=this):(l=!0,d=1,g=s?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){s?(v=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(v=arguments[d],b=arguments[d+1]);var T=g.length,C=0;if(!/^(stop|finish|finishAll)$/i.test(v)&&!$.isPlainObject(b)){var S=d+1;b={};for(var k=S;k<arguments.length;k++)h.isArray(arguments[k])||!/^(fast|normal|slow)$/i.test(arguments[k])&&!/^\d/.test(arguments[k])?h.isString(arguments[k])||h.isArray(arguments[k])?b.easing=arguments[k]:h.isFunction(arguments[k])&&(b.complete=arguments[k]):b.duration=arguments[k]}var E={promise:null,resolver:null,rejecter:null};l&&y.Promise&&(E.promise=new y.Promise(function(e,t){E.resolver=e,E.rejecter=t}));var N;switch(v){case"scroll":N="scroll";break;case"reverse":N="reverse";break;case"finish":case"finishAll":case"stop":$.each(g,function(e,t){a(t)&&a(t).delayTimer&&(clearTimeout(a(t).delayTimer.setTimeout),a(t).delayTimer.next&&a(t).delayTimer.next(),delete a(t).delayTimer),"finishAll"!==v||b!==!0&&!h.isString(b)||($.each($.queue(t,h.isString(b)?b:""),function(e,t){h.isFunction(t)&&t()}),$.queue(t,h.isString(b)?b:"",[]))});var j=[];return $.each(y.State.calls,function(e,t){t&&$.each(t[1],function(n,i){var o=b===r?"":b;return o===!0||t[2].queue===o||b===r&&t[2].queue===!1?void $.each(g,function(n,r){r===i&&((b===!0||h.isString(b))&&($.each($.queue(r,h.isString(b)?b:""),function(e,t){h.isFunction(t)&&t(null,!0)}),$.queue(r,h.isString(b)?b:"",[])),"stop"===v?(a(r)&&a(r).tweensContainer&&o!==!1&&$.each(a(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),j.push(e)):("finish"===v||"finishAll"===v)&&(t[2].duration=1))}):!0})}),"stop"===v&&($.each(j,function(e,t){f(t,!0)}),E.promise&&E.resolver(g)),e();default:if(!$.isPlainObject(v)||h.isEmptyObject(v)){if(h.isString(v)&&y.Redirects[v]){var A=$.extend({},b),P=A.duration,L=A.delay||0;return A.backwards===!0&&(g=$.extend(!0,[],g).reverse()),$.each(g,function(e,t){parseFloat(A.stagger)?A.delay=L+parseFloat(A.stagger)*e:h.isFunction(A.stagger)&&(A.delay=L+A.stagger.call(t,e,T)),A.drag&&(A.duration=parseFloat(P)||(/^(callout|transition)/.test(v)?1e3:m),A.duration=Math.max(A.duration*(A.backwards?1-e/T:(e+1)/T),.75*A.duration,200)),y.Redirects[v].call(t,t,A||{},e,T,g,E.promise?E:r)}),e()}var _="Velocity: First argument ("+v+") was not a property map, a known action, or a registered redirect. Aborting.";return E.promise?E.rejecter(new Error(_)):console.log(_),e()}N="start"}var O={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},D=[];$.each(g,function(e,t){h.isNode(t)&&i.call(t)});var A=$.extend({},y.defaults,b),H;if(A.loop=parseInt(A.loop),H=2*A.loop-1,A.loop)for(var M=0;H>M;M++){var F={delay:A.delay,progress:A.progress};M===H-1&&(F.display=A.display,F.visibility=A.visibility,F.complete=A.complete),w(g,"reverse",F)}return e()}};y=$.extend(w,y),y.animate=w;var T=t.requestAnimationFrame||d;return y.State.isMobile||n.hidden===r||n.addEventListener("visibilitychange",function(){n.hidden?(T=function(e){return setTimeout(function(){e(!0)},16)},c()):T=t.requestAnimationFrame||d}),e.Velocity=y,e!==t&&(e.fn.velocity=w,e.fn.velocity.defaults=y.defaults),$.each(["Down","Up"],function(e,t){y.Redirects["slide"+t]=function(e,n,i,o,a,s){var l=$.extend({},n),u=l.begin,c=l.complete,f={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},p={};l.display===r&&(l.display="Down"===t?"inline"===y.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(a,a);for(var n in f){p[n]=e.style[n];var r=y.CSS.getPropertyValue(e,n);f[n]="Down"===t?[r,0]:[0,r]}p.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in p)e.style[t]=p[t];c&&c.call(a,a),s&&s.resolver(a)},y(e,f,l)}}),$.each(["In","Out"],function(e,t){y.Redirects["fade"+t]=function(e,n,i,o,a,s){var l=$.extend({},n),u={opacity:"In"===t?1:0},c=l.complete;i!==o-1?l.complete=l.begin=null:l.complete=function(){c&&c.call(a,a),s&&s.resolver(a)},l.display===r&&(l.display="In"===t?"auto":"none"),y(this,u,l)}}),y}(window.jQuery||window.Zepto||window,window,document)}),function($){var e=$({});$.subscribe=function(){e.on.apply(e,arguments)},$.unsubscribe=function(){e.off.apply(e,arguments)},$.publish=function(){e.trigger.apply(e,arguments)}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return 0==t?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){return 0==t?n:t==i?n+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(1==(t/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(r/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/a))+n},easeOutElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(1==(t/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(r/s);return s*Math.pow(2,-10*t)*Math.sin((t*i-o)*(2*Math.PI)/a)+r+n},easeInOutElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(2==(t/=i/2))return n+r;if(a||(a=i*(.3*1.5)),s<Math.abs(r)){s=r;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(r/s);return 1>t?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/a))+n:s*Math.pow(2,-10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/a)*.5+r+n},easeInBack:function(e,t,n,r,i,o){return void 0==o&&(o=1.70158),r*(t/=i)*t*((o+1)*t-o)+n},easeOutBack:function(e,t,n,r,i,o){return void 0==o&&(o=1.70158),r*((t=t/i-1)*t*((o+1)*t+o)+1)+n},easeInOutBack:function(e,t,n,r,i,o){return void 0==o&&(o=1.70158),(t/=i/2)<1?r/2*(t*t*(((o*=1.525)+1)*t-o))+n:r/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){return(t/=i)<1/2.75?r*(7.5625*t*t)+n:2/2.75>t?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return i/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,r,i)+n:.5*jQuery.easing.easeOutBounce(e,2*t-i,0,r,i)+.5*r+n}}),function(e,t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n=document.createElement(e||"div"),r;for(r in t)n[r]=t[r];return n}function t(e){for(var t=1,n=arguments.length;n>t;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,r){var i=["opacity",t,~~(100*e),n,r].join("-"),o=.01+n/r*100,a=Math.max(1-(1-e)/t*(100-o),e),s=f.substring(0,f.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return c[i]||(p.insertRule("@"+l+"keyframes "+i+"{0%{opacity:"+a+"}"+o+"%{opacity:"+e+"}"+(o+.01)+"%{opacity:1}"+(o+t)%100+"%{opacity:"+e+"}100%{opacity:"+a+"}}",p.cssRules.length),c[i]=1),i}function r(e,t){var n=e.style,r,i;if(t=t.charAt(0).toUpperCase()+t.slice(1),void 0!==n[t])return t;for(i=0;i<u.length;i++)if(r=u[i]+t,void 0!==n[r])return r}function i(e,t){for(var n in t)e.style[r(e,n)||n]=t[n];return e}function o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)void 0===e[r]&&(e[r]=n[r])}return e}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function s(e){this.opts=o(e||{},s.defaults,d)}function l(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}p.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(e,r){function o(){return i(n("group",{coordsize:u+" "+u,coordorigin:-l+" "+-l}),{width:u,height:u})}function s(e,s,u){t(f,t(i(o(),{rotation:360/r.lines*e+"deg",left:~~s}),t(i(n("roundrect",{arcsize:r.corners}),{width:l,height:r.scale*r.width,left:r.scale*r.radius,top:-r.scale*r.width>>1,filter:u}),n("fill",{color:a(r.color,e),opacity:r.opacity}),n("stroke",{opacity:0}))))}var l=r.scale*(r.length+r.width),u=2*r.scale*l,c=-(r.width+r.length)*r.scale*2+"px",f=i(o(),{position:"absolute",top:c,left:c}),p;if(r.shadow)for(p=1;p<=r.lines;p++)s(p,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(p=1;p<=r.lines;p++)s(p);return t(e,f)},s.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}}var u=["webkit","Moz","ms","O"],c={},f,p,d={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(s.defaults={},o(s.prototype,{spin:function(t){this.stop();var n=this,r=n.opts,o=n.el=e(null,{className:r.className});if(i(o,{position:r.position,width:0,zIndex:r.zIndex,left:r.left,top:r.top}),t&&t.insertBefore(o,t.firstChild||null),o.setAttribute("role","progressbar"),n.lines(o,n.opts),!f){var a=0,s=(r.lines-1)*(1-r.direction)/2,l,u=r.fps,c=u/r.speed,p=(1-r.opacity)/(c*r.trail/100),d=c/r.lines;!function h(){a++;for(var e=0;e<r.lines;e++)l=Math.max(1-(a+(r.lines-e)*d)%c*p,r.opacity),n.opacity(o,e*r.direction+s,l,r);n.timeout=n.el&&setTimeout(h,~~(1e3/u))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(r,o){function s(t,n){return i(e(),{position:"absolute",width:o.scale*(o.length+o.width)+"px",height:o.scale*o.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*l+o.rotate)+"deg) translate("+o.scale*o.radius+"px,0)",borderRadius:(o.corners*o.scale*o.width>>1)+"px"})}for(var l=0,u=(o.lines-1)*(1-o.direction)/2,c;l<o.lines;l++)c=i(e(),{position:"absolute",top:1+~(o.scale*o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:f&&n(o.opacity,o.trail,u+l*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&t(c,i(s("#000","0 0 4px #000"),{top:"2px"})),t(r,t(c,s(a(o.color,l),"0 0 1px rgba(0,0,0,.1)")));return r},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),"undefined"!=typeof document){p=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}();var h=i(e("group"),{behavior:"url(#default#VML)"});!r(h,"transform")&&h.adj?l():f=r(h,"animation")}return s});
// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.decollte = {};

  window.decollte.instances = {};

  window.decollte._instances = [];

  window.decollte.events = {};

  window.decollte.events.TRANSITIONEND = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  window.decollte.Base = (function() {
    function Base() {
      this._w = window.decollte;
      this._name = this.constructor.name;
      createjs.EventDispatcher.initialize(this);
    }

    Base.prototype.init = function() {};

    Base.prototype.fire = function(type, data) {
      if (data == null) {
        data = null;
      }
      return this.dispatchEvent({
        type: type,
        target: this,
        data: data
      });
    };

    return Base;

  })();

  window.decollte.Utils = (function() {
    function Utils() {}

    Utils.isset = function(data) {
      return typeof data !== 'undefined';
    };

    Utils.removeHyphen = function(val) {
      if (!val) {
        return null;
      }
      return val.replace(/-/g, "");
    };

    Utils.removeSlash = function(val) {
      if (!val) {
        return null;
      }
      return val.replace(/\//g, "");
    };

    Utils.uniformerHeight = function($container) {
      var children, group, list, targets;
      group = $container.data('group-num');
      children = $container.children();
      list = [];
      targets = [];
      return children.each(function() {
        var maxNum;
        list.push($(this).height());
        targets.push($(this));
        if (list.length >= group) {
          maxNum = Math.max.apply(null, list);
          $(targets).each(function() {
            return $(this).css({
              height: maxNum
            });
          });
          list = [];
          return targets = [];
        }
      });
    };

    Utils.getDocHeight = function() {
      return Math.max($(document).height(), $(window).height(), document.documentElement.clientHeight);
    };

    Utils.scrollTo = function(targetOffset, time, easing) {
      var ah, h;
      if (time == null) {
        time = 800;
      }
      if (easing == null) {
        easing = 'easeInOutQuart';
      }
      ah = window.decollte.Utils.getDocHeight() - $(window).height();
      h = targetOffset > ah ? ah : targetOffset;
      return $('html,body').stop().animate({
        scrollTop: h
      }, time, easing);
    };

    Utils.scrollToElement = function(elementId, time, easing) {
      var $t, e, error, offset, pt;
      if (time == null) {
        time = 800;
      }
      if (easing == null) {
        easing = 'easeInOutQuart';
      }
      try {
        if ($(elementId).length) {
          $t = $(elementId);
          offset = $(elementId).offset().top;
          pt = 0;
          if ($t.data('sc')) {
            pt = $t.data('sc');
          }
          offset = offset + pt;
        } else {
          offset = 0;
        }
      } catch (error) {
        e = error;
        offset = 0;
      }
      return window.decollte.Utils.scrollTo(offset, time, easing);
    };

    Utils.loadImages = function(imgs, callback) {
      var count, limit, onLoadOrError;
      limit = imgs.length;
      count = 0;
      onLoadOrError = (function(_this) {
        return function() {
          count += 1;
          if (count >= limit) {
            return callback.apply(_this);
          }
        };
      })(this);
      if (limit) {
        return imgs.each((function(_this) {
          return function(i, t) {
            var img, src;
            if (typeof t === 'string') {
              src = t;
            } else {
              src = $(t).attr('src');
            }
            img = $('<img>').attr('src', src);
            return img.on({
              load: function() {
                return onLoadOrError();
              },
              error: function() {
                return onLoadOrError();
              }
            });
          };
        })(this));
      } else {
        return callback.apply(this);
      }
    };

    Utils.getCustomFieldImageURL = function(data, id) {
      var url;
      if (data.custom_fields[id]) {
        url = data.custom_fields[id][0];
        if (url && url.indexOf(']') !== -1) {
          return url.substring(url.indexOf(']') + 1, url.length);
        } else {
          return url;
        }
      } else {
        return null;
      }
    };

    Utils.changeTitle = function(head) {
      return document.title = window.decollte.Utils.findAll(head, 'title').text();
    };

    Utils.getHeadAndBody = function(d) {
      var $body, $head, result;
      if (!d) {
        result = {
          head: null,
          body: null
        };
        return result;
      }
      if (/<html/i.test(d)) {
        $head = $(d.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]);
        $body = $(d.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]);
      } else {
        $head = $body = $(d);
      }
      result = {
        head: $head,
        body: $body
      };
      return result;
    };

    Utils.findAll = function(elems, selector) {
      return elems.filter(selector).add(elems.find(selector));
    };

    Utils.getCurrentBaseURL = function() {
      return location.href.replace(/\#.*$/, '').replace(/\?.*$/, '');
    };

    Utils.getQueries = function() {
      var element, j, len, param, paramName, paramValue, parameters, query, result;
      result = {};
      if (1 < window.location.search.length) {
        query = window.location.search.substring(1);
        parameters = query.split('&');
        for (j = 0, len = parameters.length; j < len; j++) {
          param = parameters[j];
          element = param.split('=');
          paramName = decodeURIComponent(element[0]);
          paramValue = decodeURIComponent(element[1]);
          result[paramName] = paramValue;
        }
      }
      return result;
    };

    Utils.windowFixOn = function() {
      window.decollte.Utils.currentScrollTop = $(window).scrollTop();
      return $('body').addClass('is-fixed').css({
        top: -1 * window.decollte.Utils.currentScrollTop
      });
    };

    Utils.windowFixOff = function() {
      $('body').removeClass('is-fixed').css({
        top: ''
      });
      return $('html, body').prop({
        scrollTop: window.decollte.Utils.currentScrollTop
      });
    };

    return Utils;

  })();

  $(function() {
    var _w, i, j, len, ref, results, setAnchor;
    setAnchor = function() {
      if ($('a[href^="#"]').length) {
        return $('a[href^="#"]').on({
          click: (function(_this) {
            return function(e) {
              var href;
              href = $(e.currentTarget).attr('href');
              window.decollte.Utils.scrollToElement(href);
              return false;
            };
          })(this)
        });
      }
    };
    setAnchor();
    _w = window.decollte;
    $('[data-j-class]').each(function(i, e) {
      var className, instance, isNoCreate, tmpClass;
      className = $(this).data('j-class');
      isNoCreate = Number($(this).data('j-no-create'));
      if (_w[className] && !isNoCreate) {
        tmpClass = _w[className];
        instance = new tmpClass($(this));
        if (!_w['instances'][className]) {
          _w['instances'][className] = [];
        }
        _w['instances'][className].push(instance);
        return _w['_instances'].push(instance);
      }
    });
    ref = _w['_instances'];
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      results.push(i.init());
    }
    return results;
  });

  window.decollte.ToTop = (function(superClass) {
    extend(ToTop, superClass);

    function ToTop($target) {
      this.$target = $target;
      ToTop.__super__.constructor.call(this, this.$target);
      this.isShown = false;
      $(window).on({
        "scroll.@_name": (function(_this) {
          return function() {
            var scrollTop;
            scrollTop = $(window).scrollTop();
            if (scrollTop >= 300) {
              return _this.show();
            } else {
              return _this.hide();
            }
          };
        })(this)
      });
    }

    ToTop.prototype.show = function() {
      if (this.isShown) {
        return;
      }
      this.isShown = true;
      return this.$target.addClass('is-active');
    };

    ToTop.prototype.hide = function() {
      if (!this.isShown) {
        return;
      }
      this.isShown = false;
      return this.$target.removeClass('is-active');
    };

    return ToTop;

  })(window.decollte.Base);

  window.decollte.Faq = (function(superClass) {
    extend(Faq, superClass);

    function Faq($target) {
      this.$target = $target;
      Faq.__super__.constructor.call(this, this.$target);
      $(window).load((function(_this) {
        return function() {
          return _this.initalize();
        };
      })(this));
      $('.p-faq-nav__item').on({
        'click': (function(_this) {
          return function(e) {
            var $t;
            $t = $(e.currentTarget);
            return _this.selected($t.data('id'));
          };
        })(this)
      });
    }

    Faq.prototype.initalize = function() {
      var hash;
      hash = location.hash.substr(1);
      if (hash === '') {
        return this.selected($('.p-faq-nav__item:first').data('id'));
      } else {
        return this.selected(hash);
      }
    };

    Faq.prototype.selected = function(selectedId) {
      $('.p-faq-body').css({
        'display': 'none'
      });
      $('.p-faq-body[data-id="' + selectedId + '"]').css({
        'display': 'block'
      });
      $('.p-faq-nav__item').removeClass('p-faq-nav__item--is-active');
      return $('.p-faq-nav__item[data-id="' + selectedId + '"]').addClass('p-faq-nav__item--is-active');
    };

    return Faq;

  })(window.decollte.Base);

  window.decollte.MainVisualMovie = (function(superClass) {
    extend(MainVisualMovie, superClass);

    function MainVisualMovie($target) {
      var obj;
      this.$target = $target;
      this.resize = bind(this.resize, this);
      MainVisualMovie.__super__.constructor.call(this, this.$target);
      this.ratio = 16 / 9;
      this.iframe = this.$target.find('iframe');
      window.onYouTubeIframeAPIReady = (function(_this) {
        return function() {
          return _this.onReady();
        };
      })(this);
      this.ready();
      $(window).on((
        obj = {},
        obj["resize." + this._name] = (function(_this) {
          return function() {
            return _this.resize();
          };
        })(this),
        obj
      ));
      $(window).trigger("resize." + this._name);
    }

    MainVisualMovie.prototype.ready = function() {
      var firstScriptTag, tag;
      tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag = document.getElementsByTagName('script')[0];
      return firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    MainVisualMovie.prototype.setYT = function() {
      return this.player = new YT.Player(this.iframe.get(0), {
        height: '100%',
        width: '100%',
        events: {
          onReady: (function(_this) {
            return function(e) {
              return _this.onMovieReady(e);
            };
          })(this),
          onStateChange: (function(_this) {
            return function(e) {
              if (e.data === YT.PlayerState.PLAYING) {

              } else if (e.data === YT.PlayerState.ENDED) {
                return _this.player.seekTo(0);
              }
            };
          })(this)
        }
      });
    };

    MainVisualMovie.prototype.resize = function() {
      var height, pHeight, pWidth, width;
      width = this.$target.width();
      height = this.$target.height();
      if (width / this.ratio < height) {
        pWidth = Math.ceil(height * this.ratio);
        return this.iframe.css({
          width: pWidth,
          height: height,
          left: (width - pWidth) >> 1,
          top: 0
        });
      } else {
        pHeight = Math.ceil(width / this.ratio);
        return this.iframe.css({
          width: width,
          height: pHeight,
          left: 0,
          top: (height - pHeight) >> 1
        });
      }
    };

    MainVisualMovie.prototype.onMovieReady = function(e) {
      return e.target.mute();
    };

    MainVisualMovie.prototype.onReady = function() {
      return this.setYT();
    };

    return MainVisualMovie;

  })(window.decollte.Base);

  window.decollte.PickupCampaigns = (function(superClass) {
    extend(PickupCampaigns, superClass);

    function PickupCampaigns($target) {
      var obj;
      this.$target = $target;
      this.prevTo = bind(this.prevTo, this);
      this.nextTo = bind(this.nextTo, this);
      this.moveTo = bind(this.moveTo, this);
      PickupCampaigns.__super__.constructor.call(this, this.$target);
      this.ITEM_MARGIN = 30;
      this.MOVE_TIME = 550;
      this.MOVE_EASING = 'easeOutQuart';
      this.WAIT_TIME = 5000;
      this.isMoving = false;
      this.isMousEnter = false;
      this.intervalId = null;
      this.$items = this.$target.find('.j-pickup-campaigns-items');
      this.updateItemList();
      this.itemWidth = this.$itemList.first().width();
      this.itemBaseNum = this.$itemList.length;
      this.itemNum = this.itemBaseNum * 2;
      this.totalWidth = (this.itemWidth + this.ITEM_MARGIN) * this.itemBaseNum;
      this.totalWidth = this.totalWidth * 2;
      this.$items.css({
        width: this.totalWidth
      });
      this.$nextBtn = this.$target.find('.p-pickup-campaigns__next');
      this.$prevBtn = this.$target.find('.p-pickup-campaigns__prev');
      this.$nextBtn.on({
        click: (function(_this) {
          return function() {
            _this.nextTo(true);
            return false;
          };
        })(this)
      });
      this.$prevBtn.on({
        click: (function(_this) {
          return function() {
            _this.prevTo(true);
            return false;
          };
        })(this)
      });
      this.$target.on({
        mouseenter: (function(_this) {
          return function() {
            _this.isMousEnter = true;
            return _this.stopWait();
          };
        })(this),
        mouseleave: (function(_this) {
          return function() {
            _this.isMousEnter = false;
            return _this.wait();
          };
        })(this)
      });
      this.$itemList.each((function(_this) {
        return function(i, e) {
          var $clone, $e;
          $e = $(e);
          $clone = $e.clone();
          return _this.$items.append($clone);
        };
      })(this));
      $(window).on((
        obj = {},
        obj["resize." + this._name] = (function(_this) {
          return function() {
            return _this.setBaseLeft();
          };
        })(this),
        obj
      ));
      this.updateItemList();
      this.setBaseLeft();
      this.wait();
    }

    PickupCampaigns.prototype.wait = function() {
      this.stopWait();
      return this.intervalId = setTimeout((function(_this) {
        return function() {
          return _this.nextTo();
        };
      })(this), this.WAIT_TIME);
    };

    PickupCampaigns.prototype.stopWait = function() {
      if (this.intervalId) {
        return clearInterval(this.intervalId);
      }
    };

    PickupCampaigns.prototype.updateItemList = function() {
      return this.$itemList = this.$items.find('.j-pickup-campaigns-item');
    };

    PickupCampaigns.prototype.moveTo = function(pos, isForce, isFirst) {
      if (isForce == null) {
        isForce = false;
      }
      if (isFirst == null) {
        isFirst = false;
      }
      if (!isForce) {
        if (this.isMousEnter) {
          return;
        }
      }
      if (this.isMoving) {
        return;
      }
      this.isMoving = true;
      return this.$items.stop().animate({
        marginLeft: pos
      }, this.MOVE_TIME, this.MOVE_EASING, (function(_this) {
        return function() {
          var $tmpItem;
          if (isFirst) {
            $tmpItem = _this.$itemList.first();
            _this.$items.append($tmpItem);
          } else {
            $tmpItem = _this.$itemList.last();
            _this.$items.prepend($tmpItem);
          }
          _this.$items.css({
            marginLeft: _this.baseLeft
          });
          _this.isMoving = false;
          _this.updateItemList();
          return _this.wait();
        };
      })(this));
    };

    PickupCampaigns.prototype.nextTo = function(isForce) {
      var pos;
      if (isForce == null) {
        isForce = false;
      }
      this.stopWait();
      pos = this.baseLeft - (this.itemWidth + this.ITEM_MARGIN);
      return this.moveTo(pos, isForce, true);
    };

    PickupCampaigns.prototype.prevTo = function(isForce) {
      var pos;
      if (isForce == null) {
        isForce = false;
      }
      this.stopWait();
      pos = this.baseLeft + (this.itemWidth + this.ITEM_MARGIN);
      return this.moveTo(pos, isForce, false);
    };

    PickupCampaigns.prototype.setBaseLeft = function() {
      this.baseLeft = (this.$target.width() - this.itemWidth) >> 1;
      this.baseLeft = this.baseLeft - (this.itemBaseNum * (this.itemWidth + this.ITEM_MARGIN));
      return this.$items.css({
        marginLeft: this.baseLeft
      });
    };

    return PickupCampaigns;

  })(window.decollte.Base);

  window.decollte.Header = (function(superClass) {
    extend(Header, superClass);

    function Header($target) {
      this.$target = $target;
      Header.__super__.constructor.call(this, this.$target);
      $(window).on('scroll', function() {
        if ($(this).scrollTop() > 68) {
          return $('.p-header').addClass('p-header--is-scroll');
        } else {
          return $('.p-header').removeClass('p-header--is-scroll');
        }
      });
    }

    Header.prototype.testFunc = function() {};

    return Header;

  })(window.decollte.Base);

  window.decollte.OurArea = (function(superClass) {
    extend(OurArea, superClass);

    function OurArea($target) {
      this.$target = $target;
      OurArea.__super__.constructor.call(this, this.$target);
      $('.p-area-select-nav__item a').mouseover(function() {
        var selected_map_name;
        $('.p-our-area__map__content').removeClass('p-our-area__map__content--is-active');
        selected_map_name = $(this).attr('data-map-name');
        $('[data-map-img-name=' + selected_map_name + ']').addClass('p-our-area__map__content--is-active');
        $('.p-area-select-nav__item a').css('color', 'white');
        return $(this).css('color', '#c30d23');
      }).mouseout(function() {});
    }

    return OurArea;

  })(window.decollte.Base);

  window.decollte.Gallery = (function(superClass) {
    extend(Gallery, superClass);

    function Gallery($target) {
      this.$target = $target;
      Gallery.__super__.constructor.call(this, this.$target);
      this.indexNow = 0;
      this.indexAll = $('.c-gallery__item').length;
      this.isModal = 0;
      $('.c-gallery__item').each((function(_this) {
        return function(i, e) {
          return $(e).attr('data-id', i + 1);
        };
      })(this));
      $('.c-lightbox__photo').each((function(_this) {
        return function(i, e) {
          return $(e).attr('data-id', i + 1);
        };
      })(this));
      $('.c-gallery__item').on({
        'click': (function(_this) {
          return function(e) {
            var $t;
            $t = $(e.currentTarget);
            _this.indexNow = $t.data('id');
            return _this.show();
          };
        })(this)
      });
      $('.c-lightbox__btn--delete').on({
        'click': (function(_this) {
          return function() {
            console.log('delete');
            return _this.quit();
          };
        })(this)
      });
      $('.c-lightbox__filter').on({
        'click': (function(_this) {
          return function() {
            return _this.quit();
          };
        })(this)
      });
      $('.c-lightbox__btn--next').on({
        'click': (function(_this) {
          return function() {
            return _this.next();
          };
        })(this)
      });
      $('.c-lightbox__btn--prev').on({
        'click': (function(_this) {
          return function() {
            return _this.prev();
          };
        })(this)
      });
    }

    Gallery.prototype.show = function() {
      $('.c-lightbox').css({
        'display': 'block',
        'opacity': 0
      }).velocity({
        'opacity': 1
      }, {
        duration: 150,
        easing: 'ease-out'
      });
      $('.c-lightbox__photo[data-id="' + this.indexNow + '"]').addClass('c-lightbox__photo--is-active');
      $('body').css({
        'overflow': 'hidden'
      });
      return this.isModal = true;
    };

    Gallery.prototype.quit = function() {
      this.indexNow = 0;
      return $('.c-lightbox').velocity({
        'opacity': 0
      }, {
        duration: 150,
        easing: 'ease-in',
        complete: function() {
          $('.c-lightbox').css({
            'display': 'none'
          });
          $('.c-lightbox__photo--is-active').css({
            'left': '',
            'marginLeft': ''
          });
          $('.c-lightbox__photo').removeClass('c-lightbox__photo--is-active');
          $('body').css({
            'overflow': ''
          });
          return this.isModal = false;
        }
      });
    };

    Gallery.prototype.next = function() {
      var duration, easing;
      easing = "easeOutQuart";
      duration = 450;
      this.indexNow += 1;
      $('.c-lightbox__photo--is-active').stop().velocity({
        'left': '0px',
        'marginLeft': '-645px'
      }, {
        duration: duration,
        easing: easing,
        complete: function() {
          return $(this).css({
            'left': '',
            'marginLeft': ''
          });
        }
      });
      $('.c-lightbox__photo').removeClass('c-lightbox__photo--is-active');
      if (this.indexNow === this.indexAll + 1) {
        this.indexNow = 1;
        $('.c-lightbox__photo[data-id="' + this.indexNow + '"]').addClass('c-lightbox__photo--is-active');
      } else {
        $('.c-lightbox__photo[data-id="' + this.indexNow + '"]').addClass('c-lightbox__photo--is-active');
      }
      $('.c-lightbox__photo--is-active').css({
        'left': '100%',
        'marginLeft': '0'
      });
      return $('.c-lightbox__photo--is-active').stop().velocity({
        'top': '50%',
        'left': '50%',
        'marginTop': '-237.5px',
        'marginLeft': '-316.5px'
      }, {
        duration: duration,
        easing: easing
      });
    };

    Gallery.prototype.prev = function() {
      var duration, easing;
      easing = "easeOutQuart";
      duration = 450;
      this.indexNow -= 1;
      $('.c-lightbox__photo--is-active').stop().velocity({
        'left': '100%',
        'marginLeft': '0'
      }, {
        duration: duration,
        easing: easing,
        complete: function() {
          return $(this).css({
            'left': '',
            'marginLeft': ''
          });
        }
      });
      $('.c-lightbox__photo').removeClass('c-lightbox__photo--is-active');
      if (this.indexNow === 0) {
        this.indexNow = this.indexAll;
        $('.c-lightbox__photo[data-id="' + this.indexNow + '"]').addClass('c-lightbox__photo--is-active');
      } else {
        $('.c-lightbox__photo[data-id="' + this.indexNow + '"]').addClass('c-lightbox__photo--is-active');
      }
      $('.c-lightbox__photo--is-active').css({
        'left': '0',
        'marginLeft': '-633px'
      });
      return $('.c-lightbox__photo--is-active').stop().velocity({
        'top': '50%',
        'left': '50%',
        'marginTop': '-237.5px',
        'marginLeft': '-316.5px'
      }, {
        duration: duration,
        easing: easing
      });
    };

    return Gallery;

  })(window.decollte.Base);

  window.decollte.MoreContents = (function(superClass) {
    extend(MoreContents, superClass);

    function MoreContents($target) {
      this.$target = $target;
      MoreContents.__super__.constructor.call(this, this.$target);
      this.$more = this.$target.find('[data-j-selector="more"]');
      this.$contents = this.$target.find('[data-j-selector="contents"]');
      this.url = this.$contents.data('j-next-url');
      this.createSpin();
      this.isLoading = false;
      if (this.$more.length) {
        this.$more.on({
          click: (function(_this) {
            return function() {
              _this.load();
              return false;
            };
          })(this)
        });
      }
    }

    MoreContents.prototype.createSpin = function() {
      var options;
      options = {
        lines: 10,
        length: 4,
        width: 3,
        radius: 8,
        scale: 1,
        corners: 1,
        color: '#fff',
        opacity: 0.25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 60,
        fps: 20,
        zIndex: 2e9,
        className: 'spinner',
        top: '50%',
        left: '50%',
        shadow: false,
        hwaccel: false,
        position: 'absolute'
      };
      return this.spinner = new Spinner(options).spin(this.$more.get(0));
    };

    MoreContents.prototype.changeLoading = function() {
      this.isLoading = false;
      if (this.$more && this.$more.length) {
        return this.$more.addClass('is-loading');
      }
    };

    MoreContents.prototype.changeUnLoading = function() {
      this.isLoading = false;
      if (this.$more && this.$more.length) {
        return this.$more.removeClass('is-loading');
      }
    };

    MoreContents.prototype.removeMoreBtn = function() {
      this.$more.remove();
      this.$more.off('click');
      return this.$more = null;
    };

    MoreContents.prototype.addContents = function(data) {
      var $content, $contents;
      $contents = $(data);
      this.url = $contents.data('j-next-url');
      $content = $contents.find('[data-j-selector="content"]');
      this.$contents.append($content);
      setTimeout((function(_this) {
        return function() {
          return $content.addClass('is-show');
        };
      })(this), 100);
      if (!this.url) {
        return this.removeMoreBtn();
      }
    };

    MoreContents.prototype.load = function() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      this.changeLoading();
      return $.ajax({
        url: this.url,
        type: 'post',
        data: {
          js: 1
        },
        dataType: 'html',
        success: (function(_this) {
          return function(data) {
            _this.addContents(data);
            return _this.changeUnLoading();
          };
        })(this),
        error: (function(_this) {
          return function() {
            return _this.changeUnLoading();
          };
        })(this)
      });
    };

    return MoreContents;

  })(window.decollte.Base);

  window.decollte.SearchPlanHorizontal = (function(superClass) {
    extend(SearchPlanHorizontal, superClass);

    function SearchPlanHorizontal($target) {
      this.$target = $target;
      SearchPlanHorizontal.__super__.constructor.call(this, this.$target);
      this.isFixed = false;
      this.targetPos = this.$target.offset().top;
      this.targetHeight = this.$target.outerHeight();
      $(this.$target).attr('data-is-clone', '0');
      this.$clone = $(this.$target).clone().attr('data-is-clone', '1');
      this.$cloneTarget = $('<div>');
      this.$cloneTarget.css({
        'z-index': 9999,
        'display': 'none',
        position: 'fixed',
        top: 62,
        left: 0,
        width: '100%'
      });
      this.$cloneTargetInner = $('<div>');
      this.$cloneTargetInner.css({
        'max-width': 1306,
        'min-width': 1024,
        'margin-left': 'auto',
        'margin-right': 'auto',
        'box-sizing': 'border-box',
        borderLeft: '1px solid transparent',
        borderRight: '1px solid transparent'
      });
      this.$cloneTarget.append(this.$cloneTargetInner);
      this.$cloneTargetInner.append(this.$clone);
      $('body').append(this.$cloneTarget);
      $(window).scroll((function(_this) {
        return function() {
          var changePos, containerPos, containerScrollPos, scrollTop;
          scrollTop = $(window).scrollTop();
          containerPos = $('#container').offset().top;
          containerScrollPos = scrollTop - containerPos;
          changePos = $('#container').height() - ($('#footer').height() + 100);
          if (_this.targetPos < scrollTop + 62) {
            $(_this.$cloneTarget).css({
              'display': 'block'
            });
            if (changePos < containerScrollPos + _this.targetHeight + 62) {
              $('[data-is-clone=1]').addClass('p-search-plan--no-active');
              return $('[data-is-clone=1]').removeClass('p-search-plan--active');
            } else {
              $('[data-is-clone=1]').addClass('p-search-plan--active');
              return $('[data-is-clone=1]').removeClass('p-search-plan--no-active');
            }
          } else {
            return $(_this.$cloneTarget).css({
              'display': 'none'
            });
          }
        };
      })(this));
    }

    return SearchPlanHorizontal;

  })(window.decollte.Base);

  window.decollte.SearchPlanVartical = (function(superClass) {
    extend(SearchPlanVartical, superClass);

    function SearchPlanVartical($target) {
      var obj, obj1;
      this.$target = $target;
      SearchPlanVartical.__super__.constructor.call(this, this.$target);
      window.decollte.SearchPlanVartical.HEADER_HEIGHT = 62;
      this.$footer = $('#footer');
      this.$positionBaseTarget = $('[data-j-selector="search-plan-position-base"]');
      this.footerTop = this.$footer.offset().top;
      this.maxTop = this.$positionBaseTarget.offset().top;
      this.maxBottom = this.footerTop - 50;
      this.cloneBottom = 0;
      this.cloneTurningBottom = 0;
      this.isFixed = false;
      this.isFixedTop = false;
      this.scrollStatus = 'down';
      this.changePoint = 0;
      this.scrollTop = $(window).scrollTop();
      this.pastScrollTop = $(window).scrollTop();
      this.targetTop = this.$target.offset().top;
      this.targetHeight = this.$target.outerHeight();
      this.windowHeight = $(window).height();
      this.createClone();
      $(window).on((
        obj = {},
        obj["resize." + this._name] = (function(_this) {
          return function() {
            _this.windowHeight = $(window).height();
            _this.targetTop = _this.$target.offset().top;
            _this.targetHeight = _this.$target.outerHeight();
            _this.updateMaxBottom();
            return _this.onScrollDown();
          };
        })(this),
        obj
      ));
      $(window).on((
        obj1 = {},
        obj1["scroll." + this._name] = (function(_this) {
          return function() {
            _this.updateMaxBottom();
            _this.scrollTop = $(window).scrollTop();
            if (_this.scrollTop >= _this.pastScrollTop) {
              if (_this.scrollStatus !== 'down') {
                _this.changePoint = _this.scrollTop;
                _this.cloneTurningBottom = _this.cloneBottom;
              }
              _this.scrollStatus = 'down';
              _this.onScrollDown();
            } else {
              if (_this.scrollStatus !== 'up') {
                _this.changePoint = _this.scrollTop;
                _this.cloneTurningBottom = _this.cloneBottom;
              }
              _this.scrollStatus = 'up';
              _this.onScrollUp();
            }
            return _this.pastScrollTop = _this.scrollTop;
          };
        })(this),
        obj1
      ));
      $(window).trigger("resize." + this._name);
      $(window).trigger("scroll." + this._name);
    }

    SearchPlanVartical.prototype.updateMaxBottom = function() {
      if (this.windowHeight - window.decollte.SearchPlanVartical.HEADER_HEIGHT >= this.targetHeight) {
        if (!this.isFixedTop) {
          this.isFixedTop = true;
          this.$clone.addClass('is-fixed-top');
        }
      } else {
        if (this.isFixedTop) {
          this.isFixedTop = false;
          this.$clone.removeClass('is-fixed-top');
        }
      }
      this.footerTop = this.$footer.offset().top;
      this.maxBottom = this.footerTop - 50;
      return this.maxTop = this.$positionBaseTarget.offset().top;
    };

    SearchPlanVartical.prototype.checkMaxBottom = function() {
      if (this.scrollTop + this.windowHeight >= this.maxBottom) {
        this.tmpBottom = this.scrollTop + this.windowHeight - this.maxBottom;
        this.changePoint = this.scrollTop;
        return this.$cloneTarget.css({
          top: '',
          bottom: this.tmpBottom
        });
      }
    };

    SearchPlanVartical.prototype.checkMaxBottomForLargeWindow = function() {
      if (this.scrollTop + this.windowHeight >= this.maxBottom) {
        this.tmpBottom = this.scrollTop + this.windowHeight - this.maxBottom;
        this.changePoint = this.scrollTop;
        return this.$cloneTarget.css({
          top: window.decollte.SearchPlanVartical.HEADER_HEIGHT - this.tmpBottom,
          bottom: ''
        });
      }
    };

    SearchPlanVartical.prototype.checkFixedForLargeWindow = function() {
      if (this.scrollTop + window.decollte.SearchPlanVartical.HEADER_HEIGHT >= this.maxTop) {
        this.showClone();
        this.$cloneTarget.css({
          bottom: '',
          top: window.decollte.SearchPlanVartical.HEADER_HEIGHT
        });
        return this.checkMaxBottomForLargeWindow();
      } else {
        return this.hideClone();
      }
    };

    SearchPlanVartical.prototype.showClone = function() {
      if (this.isFixed) {
        return;
      }
      this.isFixed = true;
      this.cloneBottom = 0;
      this.$cloneTarget.css({
        display: 'block',
        top: '',
        bottom: this.cloneBottom
      });
      return this.$target.css({
        visibility: 'hidden'
      });
    };

    SearchPlanVartical.prototype.hideClone = function() {
      if (!this.isFixed) {
        return;
      }
      this.isFixed = false;
      this.cloneBottom = 0;
      this.$cloneTarget.css({
        display: 'none',
        top: '',
        bottom: this.cloneBottom
      });
      return this.$target.css({
        visibility: 'visible'
      });
    };

    SearchPlanVartical.prototype.createClone = function() {
      this.$clone = $(this.$target).clone();
      this.$clone.addClass('is-clone');
      this.$cloneTarget = $('<div>');
      this.$cloneTarget.css({
        width: '100%',
        height: 0,
        display: 'none',
        position: 'fixed',
        zIndex: 900,
        bottom: 0,
        left: 0
      });
      this.$cloneTargetContainer = $('<div>');
      this.$cloneTargetContainer.css({
        maxWidth: 1306,
        minWidth: 1024,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        boxSizing: 'border-box'
      });
      this.$cloneTargetInner = $('<div>');
      this.$cloneTargetInner.css({
        height: 0,
        width: 1200 / 1306 * 100 + '%',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
        position: 'relative'
      });
      this.$cloneTarget.append(this.$cloneTargetContainer);
      this.$cloneTargetContainer.append(this.$cloneTargetInner);
      this.$cloneTargetInner.append(this.$clone);
      return $('body').append(this.$cloneTarget);
    };

    SearchPlanVartical.prototype.onScrollDown = function() {
      var d, scrollBottom, targetBottom;
      scrollBottom = this.scrollTop + this.windowHeight;
      targetBottom = this.targetTop + this.targetHeight;
      if (this.isFixedTop) {
        return this.checkFixedForLargeWindow();
      } else {
        if (scrollBottom > targetBottom) {
          this.showClone();
        } else {
          this.hideClone();
        }
        if (this.isFixed) {
          d = this.scrollTop - this.changePoint;
          if (this.cloneBottom < 0) {
            this.cloneBottom = this.cloneTurningBottom + d;
          } else {
            this.cloneBottom = 0;
          }
          this.$cloneTarget.css({
            top: '',
            bottom: this.cloneBottom
          });
          return this.checkMaxBottom();
        }
      }
    };

    SearchPlanVartical.prototype.onScrollUp = function() {
      var d, scrollBottom, targetBottom;
      scrollBottom = this.scrollTop + this.windowHeight;
      targetBottom = this.targetTop + this.targetHeight;
      if (this.isFixedTop) {
        return this.checkFixedForLargeWindow();
      } else {
        if (this.isFixed) {
          d = this.scrollTop - this.changePoint;
          if (-d >= this.targetHeight + window.decollte.SearchPlanVartical.HEADER_HEIGHT - this.windowHeight) {
            d = -(this.targetHeight + window.decollte.SearchPlanVartical.HEADER_HEIGHT - this.windowHeight);
          }
          this.cloneBottom = d;
          this.$cloneTarget.css({
            top: '',
            bottom: this.cloneBottom
          });
          if (this.scrollTop + window.decollte.SearchPlanVartical.HEADER_HEIGHT <= this.targetTop) {
            this.hideClone();
          }
          return this.checkMaxBottom();
        }
      }
    };

    return SearchPlanVartical;

  })(window.decollte.Base);

  window.decollte.Albums = (function(superClass) {
    extend(Albums, superClass);

    function Albums($target) {
      this.$target = $target;
      Albums.__super__.constructor.call(this, this.$target);
      this.indexAll = $('.c-albums__group').length;
      this.indexNow = 0;
      this.easingIn = 'ease-in-out';
      this.easingOut = 'ease-in-out';
      this.isActive = [];
      $('.p-albums__item').each((function(_this) {
        return function(i, e) {
          return $(e).attr('data-group-id', i + 1);
        };
      })(this));
      $('.p-albums-group').each((function(_this) {
        return function(i, e) {
          return $(e).attr('data-group-id', i + 1);
        };
      })(this));
      $('.p-albums-group__photos').each((function(_this) {
        return function(oi, oe) {
          _this.isActive.push(0);
          return $(oe).children('.p-albums-group__photo').each(function(i, e) {
            return $(e).attr('data-photo-id', i + 1);
          });
        };
      })(this));
      $('.p-albums-group__thmbs').each((function(_this) {
        return function(oi, oe) {
          _this.isActive[oi] = 1;
          return $(oe).children('.p-albums-group__thmb').each(function(i, e) {
            return $(e).attr('data-photo-id', i + 1);
          });
        };
      })(this));
      $('.p-albums__item').on({
        'click': (function(_this) {
          return function(e) {
            var $t;
            $t = $(e.currentTarget);
            _this.indexNow = $t.data('group-id');
            return _this.show();
          };
        })(this)
      });
      $('.c-albums__btn--delete').on({
        'click': (function(_this) {
          return function() {
            return _this.quit();
          };
        })(this)
      });
      $('.c-albums__filter').on({
        'click': (function(_this) {
          return function() {
            return _this.quit();
          };
        })(this)
      });
      $('.c-albums__btn--next').on({
        'click': (function(_this) {
          return function() {
            return _this.next();
          };
        })(this)
      });
      $('.c-albums__btn--prev').on({
        'click': (function(_this) {
          return function() {
            return _this.prev();
          };
        })(this)
      });
      $('.p-albums-group__thmb').on({
        'click': (function(_this) {
          return function(e) {
            return _this.selected(e);
          };
        })(this)
      });
    }

    Albums.prototype.show = function() {
      $('.c-albums').css({
        'display': 'block',
        'opacity': 0
      }).velocity({
        'opacity': 1
      }, {
        duration: 150,
        easing: this.easingOut
      });
      $('.c-albums__group[data-group-id="' + this.indexNow + '"]').addClass('c-albums__group--is-active');
      $('.p-albums-group__photo:first-child').addClass('p-albums-group__photo--is-active');
      $('.p-albums-group__thmb:first-child').addClass('p-albums-group__thmb--is-active');
      return $('body').css({
        'overflow': 'hidden'
      });
    };

    Albums.prototype.quit = function() {
      this.indexNow = 0;
      return $('.c-albums').velocity({
        'opacity': 0
      }, {
        duration: 150,
        easing: this.easingOut,
        complete: function() {
          $('.c-albums').css({
            'display': 'none'
          });
          $('.c-albums__group--is-active').css({
            'left': '',
            'marginLeft': ''
          });
          $('.c-albums__group').removeClass('c-albums__group--is-active');
          return $('body').css({
            'overflow': ''
          });
        }
      });
    };

    Albums.prototype.next = function() {
      var duration, easing;
      easing = "easeOutQuart";
      duration = 450;
      this.indexNow += 1;
      $('.c-albums__group--is-active').stop().velocity({
        'left': '0px',
        'marginLeft': '-633px'
      }, {
        duration: duration,
        easing: easing,
        complete: function() {
          return $(this).css({
            'left': '',
            'marginLeft': ''
          });
        }
      });
      $('.c-albums__group').removeClass('c-albums__group--is-active');
      if (this.indexNow === this.indexAll + 1) {
        this.indexNow = 1;
        $('.c-albums__group[data-group-id="' + this.indexNow + '"]').addClass('c-albums__group--is-active');
      } else {
        $('.c-albums__group[data-group-id="' + this.indexNow + '"]').addClass('c-albums__group--is-active');
      }
      $('.c-albums__group--is-active').css({
        'left': '100%',
        'marginLeft': '0'
      });
      return $('.c-albums__group--is-active').stop().velocity({
        'left': '50%',
        'marginLeft': '-316.5px'
      }, {
        duration: duration,
        easing: easing
      });
    };

    Albums.prototype.prev = function() {
      var duration, easing;
      easing = "easeOutQuart";
      duration = 450;
      this.indexNow -= 1;
      $('.c-albums__group--is-active').stop().velocity({
        'left': '100%',
        'marginLeft': '0'
      }, {
        duration: duration,
        easing: easing,
        complete: function() {
          return $(this).css({
            'left': '',
            'marginLeft': ''
          });
        }
      });
      $('.c-albums__group').removeClass('c-albums__group--is-active');
      if (this.indexNow === 0) {
        this.indexNow = this.indexAll;
        $('.c-albums__group[data-group-id="' + this.indexNow + '"]').addClass('c-albums__group--is-active');
      } else {
        $('.c-albums__group[data-group-id="' + this.indexNow + '"]').addClass('c-albums__group--is-active');
      }
      $('.c-albums__group--is-active').css({
        'left': '0',
        'marginLeft': '-633px'
      });
      return $('.c-albums__group--is-active').stop().velocity({
        'left': '50%',
        'marginLeft': '-316.5px'
      }, {
        duration: duration,
        easing: easing
      });
    };

    Albums.prototype.selected = function(e) {
      var $t, groupId, photoId;
      $t = $(e.currentTarget);
      photoId = $t.data('photo-id');
      groupId = $t.parents('.c-albums__group').data('group-id');
      $('.c-albums__group[data-group-id="' + groupId + '"] .p-albums-group__photo').removeClass('p-albums-group__photo--is-active');
      $('.c-albums__group[data-group-id="' + groupId + '"] .p-albums-group__thmb').removeClass('p-albums-group__thmb--is-active');
      $('.c-albums__group[data-group-id="' + groupId + '"] .p-albums-group__photo[data-photo-id="' + photoId + '"]').addClass('p-albums-group__photo--is-active');
      $('.c-albums__group[data-group-id="' + groupId + '"] .p-albums-group__photo[data-photo-id="' + photoId + '"]').css({
        'opacity': 0.3
      });
      $('.c-albums__group[data-group-id="' + groupId + '"] .p-albums-group__photo[data-photo-id="' + photoId + '"]').velocity({
        'opacity': 1
      }, {
        duration: 450,
        easing: this.easeingIn
      });
      return $('.c-albums__group[data-group-id="' + groupId + '"] .p-albums-group__thmb[data-photo-id="' + photoId + '"]').addClass('p-albums-group__thmb--is-active');
    };

    return Albums;

  })(window.decollte.Base);

  window.decollte.Shares = (function(superClass) {
    extend(Shares, superClass);

    function Shares($target) {
      this.$target = $target;
      Shares.__super__.constructor.call(this, this.$target);
      this.$btns = this.$target.find('[data-j-selector="btn"]');
      this.$btns.on({
        click: (function(_this) {
          return function(e) {
            var $t, h, href, left, top, w;
            $t = $(e.currentTarget);
            href = $t.attr('href');
            w = $t.data('j-width');
            h = $t.data('j-height');
            left = Number((window.screen.width - w) >> 1);
            top = Number((window.screen.height - h) >> 1);
            window.open(href, 'sns', "width=" + w + ", height=" + h + ", left=" + left + ", top=" + top);
            return false;
          };
        })(this)
      });
    }

    return Shares;

  })(window.decollte.Base);

}).call(this);
