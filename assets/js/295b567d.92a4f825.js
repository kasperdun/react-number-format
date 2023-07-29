"use strict";(self.webpackChunkreact_number_format=self.webpackChunkreact_number_format||[]).push([[154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>m,metadata:()=>s,toc:()=>c});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],m={sidebar_position:6,title:"Migration guide"},u="Migration guide",s={unversionedId:"migration",id:"migration",title:"Migration guide",description:"NumberFormat -> NumericFormat and PatternFormat",source:"@site/docs/migration.md",sourceDirName:".",slug:"/migration",permalink:"/react-number-format/docs/migration",editUrl:"https://github.com/s-yadav/react-number-format/docs/migration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Migration guide"},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/react-number-format/docs/customization"},next:{title:"Notes & Quirks",permalink:"/react-number-format/docs/quirks"}},l={},c=[{value:"NumberFormat -&gt; NumericFormat and PatternFormat",id:"numberformat---numericformat-and-patternformat",level:3},{value:"isNumericString -&gt; valueIsNumericString",id:"isnumericstring---valueisnumericstring",level:3},{value:"Function values for format and removeFormatting are handled in NumberFormatBase.",id:"function-values-for-format-and-removeformatting-are-handled-in-numberformatbase",level:3},{value:"customNumerals <code>Array&lt;string&gt;</code>",id:"customnumerals-arraystring",level:3}],p={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-guide"},"Migration guide"),(0,o.kt)("h3",{id:"numberformat---numericformat-and-patternformat"},"NumberFormat -> NumericFormat and PatternFormat"),(0,o.kt)("p",null,"The whole NumberFormat module is divided into smaller modules."),(0,o.kt)("p",null,"This changes from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import NumberFormat from 'react-number-format';\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n\\\\ or\n\nimport { PatternFormat } from 'react-number-format';\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/numeric_format"},(0,o.kt)("strong",{parentName:"a"},"NumericFormat"))," for Number based formatting like currency inputs."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/pattern_format"},(0,o.kt)("strong",{parentName:"a"},"PatternFormat"))," for Pattern based formatting like card numbers, phone number inputs.")),(0,o.kt)("p",null,"It also provide lower level units allowing better customization. ",(0,o.kt)("a",{parentName:"p",href:"/docs/customization"},"See Customization Docs")),(0,o.kt)("h3",{id:"isnumericstring---valueisnumericstring"},"isNumericString -> valueIsNumericString"),(0,o.kt)("p",null,"Number format modules need to know if the passed value is a formatting string or string representation of number to be able to properly separate format characters and numbers."),(0,o.kt)("p",null,"isNumericString prop was confusing and wasn't explaining what is numeric string. The prop is now renamed to more verbose name ",(0,o.kt)("inlineCode",{parentName:"p"},"valueIsNumericString"),"."),(0,o.kt)("h3",{id:"function-values-for-format-and-removeformatting-are-handled-in-numberformatbase"},"Function values for format and removeFormatting are handled in NumberFormatBase."),(0,o.kt)("p",null,"The ability to use a custom formatting function has been extracted to a base customizable module. ",(0,o.kt)("a",{parentName:"p",href:"/docs/customization"},(0,o.kt)("strong",{parentName:"a"},"NumberFormatBase"))," for custom formatter based formatting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { NumberFormatBase} from "react-number-format";\n')),(0,o.kt)("h3",{id:"customnumerals-arraystring"},"customNumerals ",(0,o.kt)("inlineCode",{parentName:"h3"},"Array<string>")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Removed")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is removed in v5."))),(0,o.kt)("p",null,"See custom numeral implementation with v5\n",(0,o.kt)("a",{parentName:"p",href:"https://s-yadav.github.io/react-number-format/docs/customization#custom-numeral-example"},"https://s-yadav.github.io/react-number-format/docs/customization#custom-numeral-example")),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);