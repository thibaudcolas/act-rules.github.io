(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+YAX":function(e,t,n){var r=n("2nzh"),a=n("1PpB"),o=n("cqv3");e.exports=function(e){return r(e)||a(e)||o()}},"1PpB":function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},"2nzh":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"6R51":function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}},"7h0T":function(e,t,n){var r=n("XKFU");r(r.S,"Number",{isNaN:function(e){return e!=e}})},"8jRI":function(e,t,n){"use strict";n("pIFo"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("SRfc"),n("Oyvg");var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(n),o(r))}function i(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},r=a.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=i(r[0]);o!==r[0]&&(n[r[0]]=o)}r=a.exec(e)}n["%C2"]="�";for(var c=Object.keys(n),l=0;l<c.length;l++){var u=c[l];e=e.replace(new RegExp(u,"g"),n[u])}return e}(e)}}},"8yz6":function(e,t,n){"use strict";n("V+eJ"),e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},AD4l:function(e,t,n){"use strict";n.r(t);n("Z2Ku"),n("L9s1"),n("OG14");var r=n("q1tI"),a=n.n(r),o=n("cr+I"),i=n.n(o),c=n("Bl7J"),l=n("vrFN"),u=n("JPpi"),s=n("Wbzz"),f=(n("91GP"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("hhXQ"),n("Ppnf")),p=n.n(f),m=function(e){var t=e.ruleId,n=e.implementations,r=void 0===n?[]:n,o=e.filter,i=void 0===o?d:o;return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Testcase Url"),a.a.createElement("th",{width:"100px"},"Expected"),r.map((function(e,t){var n=e.implementationId;return a.a.createElement("th",{width:"100px",key:n+"- "+t},n)})))),a.a.createElement("tbody",null,Object.values(function(e,t,n){var r={},a=t.filter(n),o=Array.isArray(a),i=0;for(a=o?a:a[Symbol.iterator]();;){var c;if(o){if(i>=a.length)break;c=a[i++]}else{if((i=a.next()).done)break;c=i.value}var l=c,u=l.implementationId,s=l.findings,f=Array.isArray(s),m=0;for(s=f?s:s[Symbol.iterator]();;){var d;if(f){if(m>=s.length)break;d=s[m++]}else{if((m=s.next()).done)break;d=m.value}var v,y,h=d,g=h.url,b=h.testcase,E=h.expected,x=h.actual;if(r[b])r[b]=Object.assign({},r[b],{actuals:Object.assign({},r[b].actuals,(v={},v[u]=x,v))});else r[b]={url:g,testcase:b,relativeUrl:"/rules/"+e+"/#"+p()(b),expected:E,actuals:(y={},y[u]=x,y)}}}return r}(t,r,i)).map((function(e,t){var n=e.testcase,o=e.url,i=e.relativeUrl,c=e.expected,l=e.actuals;return a.a.createElement("tr",{key:o+"-"+t},a.a.createElement("td",null,a.a.createElement(s.Link,{to:i},n)),a.a.createElement("td",null,c),r.map((function(e,t){var n=e.implementationId;return a.a.createElement("td",{width:"100px",key:n+"-"+o+"="+t},l[n])})))}))))};function d(){return!0}var v=function(e){var t=e.mapping,n=void 0===t?[]:t,r=e.showIncomplete,o=void 0!==r&&r;return a.a.createElement("div",null,n.map((function(e){var t=e.ruleId,n=e.ruleName,r=e.implementations;return a.a.createElement("div",{key:t},a.a.createElement(s.Link,{to:"/rules/"+t},a.a.createElement("h2",{id:"id-"+t},n)),function(e,t,n){if(!e||!e.length)return a.a.createElement(u.a,{cls:"invalid",title:"No Implementations",body:"Feel free to submit an implementation for this rule."});return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{cls:"invalid",title:"Incomplete Implementation",body:"Listed below are the incomplete assertions. Kindly submit an amended implementation report."}),a.a.createElement(m,{ruleId:n,implementations:e,filter:function(e){return"inconsistent"===e.consistency}})):a.a.createElement(m,{ruleId:n,implementations:e,filter:function(e){return"inconsistent"!==e.consistency}}))}(r,o,t))})))};n.d(t,"query",(function(){return y})),n.d(t,"filterByConsistency",(function(){return h}));t.default=function(e){var t=e.location,n=e.data.sitePage.context,r=n.title,o=n.implementerData,s=JSON.parse(o),f=s.actMapping.every((function(e){return!1===e.complete})),p=function(e){if(!e)return!1;var t=i.a.parse(e).incomplete;return"true"===(void 0!==t&&t)}(t.search);return a.a.createElement(c.a,{location:t},a.a.createElement(l.a,{title:r}),a.a.createElement("section",{className:"page-container page-implementers"},a.a.createElement("h1",null,r),f&&!p?a.a.createElement(u.a,{cls:"invalid",title:"Incomplete Implementation",body:"All implementations provided are incomplete. Kindly submit an amended implementation report."}):a.a.createElement(a.a.Fragment,null,function(e,t){if(t){var n=h(e,["inconsistent"]);return n.length?a.a.createElement(v,{mapping:n,showIncomplete:t}):a.a.createElement(u.a,{cls:"valid",title:"Well Done",body:"All submitted implementation reports are complete."})}var r=h(e,["consistent","partially-consistent"]);return a.a.createElement(v,{mapping:r,showIncomplete:t})}(s.actMapping,p))))};var y="2362017837";function h(e,t){return e.filter((function(e){var n=e.consistency;return t.includes(n)}))}},HsiO:function(e,t,n){var r=n("Z6+o"),a=n("6R51"),o=n("UlM4");e.exports=function(e,t){return r(e)||a(e,t)||o()}},JPpi:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o);n("wNCM");t.a=function(e){var t=e.cls,n=void 0===t?"":t,r=e.title,o=void 0===r?"":r,c=e.body,l=void 0===c?"":c;return a.a.createElement("div",{className:i()("note",n)},a.a.createElement("b",null,o),a.a.createElement("p",null,l))}},Pmem:function(e,t,n){"use strict";n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo"),e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},Ppnf:function(e,t,n){n("KKXr");e.exports=function(e,t){void 0===t&&(t=!0);var n=e.split(" ").join("-");return t?n.toLowerCase():n}},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},UExd:function(e,t,n){var r=n("nh4g"),a=n("DVgA"),o=n("aCFj"),i=n("UqcF").f;e.exports=function(e){return function(t){for(var n,c=o(t),l=a(c),u=l.length,s=0,f=[];u>s;)n=l[s++],r&&!i.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}}},UlM4:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},"Z6+o":function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},cqv3:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"cr+I":function(e,t,n){"use strict";n("0l/t");var r=n("HsiO");n("rE2o"),n("ioFf"),n("DNiP"),n("hHhE"),n("91GP"),n("Tze0"),n("7h0T"),n("xfY5"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),n("Vd3H"),n("LK8F"),n("KKXr"),n("V+eJ"),n("pIFo");var a=n("+YAX"),o=n("Pmem"),i=n("8jRI"),c=n("8yz6");function l(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function u(e,t){return t.decode?i(e):e}function s(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){var t=(e=s(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":return function(e,t,n){var r="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;n[e]=r};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var o=!0,i=!1,l=void 0;try{for(var s,f=e.split("&")[Symbol.iterator]();!(o=(s=f.next()).done);o=!0){var m=s.value,d=c(t.decode?m.replace(/\+/g," "):m,"="),v=r(d,2),y=v[0],h=v[1];h=void 0===h?null:u(h,t),n(u(y,t),h,a)}}catch(A){i=!0,l=A}finally{try{o||null==f.return||f.return()}finally{if(i)throw l}}for(var g=0,b=Object.keys(a);g<b.length;g++){var E=b[g],x=a[E];if("object"==typeof x&&null!==x)for(var I=0,N=Object.keys(x);I<N.length;I++){var j=N[I];x[j]=p(x[j],t)}else a[E]=p(x,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))}t.extract=f,t.parse=m,t.stringify=function(e,t){if(!e)return"";var n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var o=n.length;return void 0===r||e.skipNull&&null===r?n:[].concat(a(n),null===r?[[l(t,e),"[",o,"]"].join("")]:[[l(t,e),"[",l(o,e),"]=",l(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r?n:[].concat(a(n),null===r?[[l(t,e),"[]"].join("")]:[[l(t,e),"[]=",l(r,e)].join("")])}};case"comma":return function(t){return function(n,r){return null==r||0===r.length?n:0===n.length?[[l(t,e),"=",l(r,e)].join("")]:[[n,l(r,e)].join(",")]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r?n:[].concat(a(n),null===r?[l(t,e)]:[[l(t,e),"=",l(r,e)].join("")])}}}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),r=Object.assign({},e);if(t.skipNull)for(var o=0,i=Object.keys(r);o<i.length;o++){var c=i[o];void 0!==r[c]&&null!==r[c]||delete r[c]}var u=Object.keys(r);return!1!==t.sort&&u.sort(t.sort),u.map((function(r){var a=e[r];return void 0===a?"":null===a?l(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):l(r,t)+"="+l(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){return{url:s(e).split("?")[0]||"",query:m(f(e),t)}}},hhXQ:function(e,t,n){var r=n("XKFU"),a=n("UExd")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),o=n("LZWt"),i=n("Xbzi"),c=n("apmT"),l=n("eeVq"),u=n("kJMx").f,s=n("EemH").f,f=n("hswa").f,p=n("qncB").trim,m=r.Number,d=m,v=m.prototype,y="Number"==o(n("Kuth")(v)),h="trim"in String.prototype,g=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=h?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,l=t.slice(2),u=0,s=l.length;u<s;u++)if((i=l.charCodeAt(u))<48||i>a)return NaN;return parseInt(l,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(y?l((function(){v.valueOf.call(n)})):"Number"!=o(n))?i(new d(g(t)),n,m):g(t)};for(var b,E=n("nh4g")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;E.length>x;x++)a(d,b=E[x])&&!a(m,b)&&f(m,b,s(d,b));m.prototype=v,v.constructor=m,n("KroJ")(r,"Number",m)}}}]);
//# sourceMappingURL=component---src-templates-implementer-js-85140d6b606d745aded6.js.map