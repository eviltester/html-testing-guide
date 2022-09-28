"use strict";(self.webpackChunkhtml_testing_reference=self.webpackChunkhtml_testing_reference||[]).push([[110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,y=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8286:(e,t,n)=>{n.d(t,{VH:()=>i,W5:()=>l,aN:()=>o});var r=n(7294);function i(e){let{data:t}=e;return r.createElement("ul",null,t.links.map(((e,t)=>r.createElement("li",null,r.createElement("a",{href:e},e)))))}function l(e){let{data:t}=e;return r.createElement("ul",null,t.ideas.map(((e,t)=>r.createElement("li",null,e))))}function o(e){let{data:t}=e;return r.createElement("ul",null,r.createElement("li",null,t.cssSelector))}},6710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),i=(n(7294),n(3905)),l=n(8286);const o={links:["https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number"],cssSelector:'input[type="number"]',ideas:['Number may include characters you don\'t expect, try them e.g. "e", ".","-","+"','Try changing the type to "text" and submitting a very invalid input.']},a='type="number"',u={unversionedId:"html elements/input/input-type-number",id:"html elements/input/input-type-number",title:'type="number"',description:'Number is not restricted to positive Integer so it is possible to add characters that the server or follow on functionality is not expecting e.g. "-.e" so we need to try the full range of input characters.',source:"@site/docs/html elements/input/input-type-number.mdx",sourceDirName:"html elements/input",slug:"/html elements/input/input-type-number",permalink:"/html-testing-guide/docs/html elements/input/input-type-number",draft:!1,tags:[],version:"current",frontMatter:{links:["https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number"],cssSelector:'input[type="number"]',ideas:['Number may include characters you don\'t expect, try them e.g. "e", ".","-","+"','Try changing the type to "text" and submitting a very invalid input.']},sidebar:"tutorialSidebar",previous:{title:'type="hidden"',permalink:"/html-testing-guide/docs/html elements/input/input-type-hidden"},next:{title:'type="text"',permalink:"/html-testing-guide/docs/html elements/input/input-type-text"}},s={},c=[{value:"Useful Links",id:"useful-links",level:2},{value:"CSS Selector",id:"css-selector",level:2},{value:"Test Ideas",id:"test-ideas",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typenumber"},(0,i.kt)("inlineCode",{parentName:"h1"},'type="number"')),(0,i.kt)("p",null,'Number is not restricted to positive Integer so it is possible to add characters that the server or follow on functionality is not expecting e.g. "-.e" so we need to try the full range of input characters.'),(0,i.kt)("h2",{id:"useful-links"},"Useful Links"),(0,i.kt)(l.VH,{data:o,mdxType:"UsefulLinks"}),(0,i.kt)("h2",{id:"css-selector"},"CSS Selector"),(0,i.kt)(l.aN,{data:o,mdxType:"CSSSelectors"}),(0,i.kt)("h2",{id:"test-ideas"},"Test Ideas"),(0,i.kt)(l.W5,{data:o,mdxType:"TestIdeas"}))}m.isMDXComponent=!0}}]);