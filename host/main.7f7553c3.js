(()=>{var e,r,t,a,n,o,u,s,i,l,c,d,f,_,p={488:(e,r,t)=>{Promise.all([t.e("webpack_sharing_consume_default_react_react-_6301"),t.e("src_bootstrap_js")]).then(t.bind(t,824))}},h={};function m(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={exports:{}};return p[e](t,t.exports,m),t.exports}m.m=p,m.c=h,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+"."+{"webpack_sharing_consume_default_react_react-_6301":"95aaa4df",src_bootstrap_js:"0de4479f","vendors-node_modules_react-dom_index_js":"edf023fa","webpack_sharing_consume_default_react_react-_7071":"f68f4892","node_modules_react_index_js-_99710":"093edd43","node_modules_react_index_js-_99711":"253c9634"}[e]+".js",m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="module-federation-example-host:",m.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var u,s;if(void 0!==n)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var c=i[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+n){u=c;break}}u||(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,m.nc&&u.setAttribute("nonce",m.nc),u.setAttribute("data-webpack",r+n),u.src=t),e[t]=[a];var d=(r,a)=>{u.onerror=u.onload=null,clearTimeout(f);var n=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach((e=>e(a))),r)return r(a)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{m.S={};var e={},r={};m.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var o=m.S[t],u="module-federation-example-host",s=(e,r,t,a)=>{var n=o[e]=o[e]||{},s=n[r];(!s||!s.loaded&&(!a!=!s.eager?a:u>s.from))&&(n[r]={get:t,from:u,eager:!!a})},i=[];switch(t){case"default":s("react-dom","17.0.2",(()=>Promise.all([m.e("vendors-node_modules_react-dom_index_js"),m.e("webpack_sharing_consume_default_react_react-_7071")]).then((()=>()=>m(542))))),s("react","17.0.2",(()=>m.e("node_modules_react_index_js-_99710").then((()=>()=>m(378)))))}return e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var r=m.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var u=r[a],s=(typeof u)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&n!=u)return n<u;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(s=e[o]))[0]?"-":(a>0?".":"")+(a=2,s);return t}var u=[];for(o=1;o<e.length;o++){var s=e[o];u.push(0===s?"not("+i()+")":1===s?"("+i()+" || "+i()+")":2===s?u.pop()+" "+u.pop():n(s))}return i();function i(){return u.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var u=0,s=1,i=!0;;s++,u++){var l,c,d=s<e.length?(typeof e[s])[0]:"";if(u>=r.length||"o"==(c=(typeof(l=r[u]))[0]))return!i||("u"==d?s>a&&!n:""==d!=n);if("u"==c){if(!i||"u"!=d)return!1}else if(i)if(d==c)if(s<=a){if(l!=e[s])return!1}else{if(n?l>e[s]:l<e[s])return!1;l!=e[s]&&(i=!1)}else if("s"!=d&&"n"!=d){if(n||s<=a)return!1;i=!1,s--}else{if(s<=a||c<d!=n)return!1;i=!1}else"s"!=d&&"n"!=d&&(i=!1,s--)}}var f=[],_=f.pop.bind(f);for(u=1;u<e.length;u++){var p=e[u];f.push(1==p?_()|_():2==p?_()&_():p?o(p,r):!_())}return!!_()},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},s=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",i=(e,r,t,a)=>{var n=u(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(s(t,n,a)),l(e[t][n])},l=e=>(e.loaded=1,e.get()),c=(e=>function(r,t,a,n){var o=m.I(r);return o&&o.then?o.then(e.bind(e,r,m.S[r],t,a,n)):e(0,m.S[r],t,a,n)})(((e,r,t,a,n)=>r&&m.o(r,t)?i(r,0,t,a):n())),d={},f={682:()=>c("default","react",[1,17,0,1],(()=>m.e("node_modules_react_index_js-_99710").then((()=>()=>m(378))))),585:()=>c("default","react-dom",[1,17,0,1],(()=>Promise.all([m.e("vendors-node_modules_react-dom_index_js"),m.e("webpack_sharing_consume_default_react_react-_7071")]).then((()=>()=>m(542))))),80:()=>c("default","react",[4,17,0,2],(()=>m.e("node_modules_react_index_js-_99711").then((()=>()=>m(378)))))},_={"webpack_sharing_consume_default_react_react-_6301":[682],src_bootstrap_js:[585],"webpack_sharing_consume_default_react_react-_7071":[80]},m.f.consumes=(e,r)=>{m.o(_,e)&&_[e].forEach((e=>{if(m.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}},a=r=>{delete d[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var n=f[e]();n.then?r.push(d[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={main:0};m.f.j=(r,t)=>{var a=m.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^webpack_sharing_consume_default_react_react\-_(630|707)1$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=m.p+m.u(r),u=new Error;m.l(o,(t=>{if(m.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,u,s]=t,i=0;for(a in u)m.o(u,a)&&(m.m[a]=u[a]);for(s&&s(m),r&&r(t);i<o.length;i++)n=o[i],m.o(e,n)&&e[n]&&e[n][0](),e[o[i]]=0},t=self.webpackChunkmodule_federation_example_host=self.webpackChunkmodule_federation_example_host||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),m(488)})();