import{j as o,r as U}from"./index-BWNaj3TZ.js";import{g as X,R as m,r as p}from"./index-B-SYruCi.js";import"./index-C-aVi5AG.js";var j={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var D;function Z(){return D||(D=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",s=0;s<arguments.length;s++){var c=arguments[s];c&&(a=l(a,n(c)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var c in a)t.call(a,c)&&a[c]&&(s=l(s,c));return s}function l(a,s){return s?a?a+" "+s:a+s:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(j)),j.exports}var $=Z();const ee=X($),C=({text:e,classNames:t})=>o.jsx("label",{className:["text-sm font-medium min-w-[100px]",t].join(" "),children:e});C.__docgenInfo={description:"",methods:[],displayName:"Label",props:{text:{required:!0,tsType:{name:"string"},description:""},classNames:{required:!1,tsType:{name:"string"},description:""}}};var k={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=m.createContext&&m.createContext(k),te=["attr","size","title"];function re(e,t){if(e==null)return{};var r=ne(e,t),n,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ne(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(n){ae(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ae(e,t,r){return t=se(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(e){var t=oe(e,"string");return typeof t=="symbol"?t:t+""}function oe(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function F(e){return e&&e.map((t,r)=>m.createElement(t.tag,h({key:r},t.attr),F(t.child)))}function x(e){return t=>m.createElement(ie,y({attr:h({},e.attr)},t),F(e.child))}function ie(e){var t=r=>{var{attr:n,size:l,title:a}=e,s=re(e,te),c=l||r.size||"1em",d;return r.className&&(d=r.className),e.className&&(d=(d?d+" ":"")+e.className),m.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:d,style:h(h({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&m.createElement("title",null,a),e.children)};return E!==void 0?m.createElement(E.Consumer,null,r=>t(r)):t(k)}function le(e){return x({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"},child:[]}]})(e)}function ce(e){return x({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(e)}function ue(e){return x({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"},child:[]}]})(e)}const W=({selectedOptions:e,multiple:t,onClick:r,removeOption:n})=>{var l;return o.jsxs("div",{className:"border-2 border-neutral-300 flex-grow rounded-md p-2 cursor-pointer flex items-center justify-between",onClick:r,children:[o.jsx("div",{className:"flex flex-wrap gap-1",children:t&&e.length?e.map(a=>o.jsxs("span",{className:"bg-neutral-200 text-black text-sm px-2 py-1 gap-1 rounded-full flex items-center",children:[a.label,o.jsx(ue,{className:"ml-1 cursor-pointer",onClick:s=>{s.stopPropagation(),n&&n(a)}})]},a.value)):(l=e[0])==null?void 0:l.label}),o.jsx("span",{className:"ml-auto",children:o.jsx(le,{})})]})};W.__docgenInfo={description:"",methods:[],displayName:"DropdownToggle",props:{selectedOptions:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},removeOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: Option) => void",signature:{arguments:[{type:{name:"Option"},name:"option"}],return:{name:"void"}}},description:""}}};function de(e){return x({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}const N=({icon:e,onClick:t})=>o.jsx("span",{className:"cursor-pointer",onClick:t,children:e});N.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const A=({customClassName:e,...t})=>o.jsx("input",{className:e,...t});A.__docgenInfo={description:"",methods:[],displayName:"Input",props:{customClassName:{required:!1,tsType:{name:"string"},description:""}}};const B=({searchTerm:e,setSearchTerm:t})=>o.jsxs("div",{className:"p-2 flex items-center border-b",children:[o.jsx(N,{icon:o.jsx(de,{className:"text-gray-400 mx-2",size:24})}),o.jsx(A,{type:"text",className:"w-full p-1 outline-none",value:e,onChange:r=>t(r.target.value)}),o.jsx(N,{icon:o.jsx(ce,{}),onClick:()=>t("")})]});B.__docgenInfo={description:"",methods:[],displayName:"DropdownSearch",props:{searchTerm:{required:!0,tsType:{name:"string"},description:""},setSearchTerm:{required:!0,tsType:{name:"signature",type:"function",raw:"(term: string) => void",signature:{arguments:[{type:{name:"string"},name:"term"}],return:{name:"void"}}},description:""}}};const V=({label:e,options:t,multiple:r=!1,searchable:n=!0,portal:l=!1,zIndex:a=1050,onChange:s,renderOption:c})=>{const[d,T]=p.useState(!1),[S,G]=p.useState(""),[_,w]=p.useState([]),b=p.useRef(null),[P,M]=p.useState({top:0,left:0}),[K,Y]=p.useState(0);p.useEffect(()=>{if(d&&l&&b.current){const i=b.current.getBoundingClientRect();M({top:i.bottom+window.scrollY,left:i.left})}},[d,l]),p.useEffect(()=>{if(b.current){const i=()=>{var u;Y(((u=b.current)==null?void 0:u.offsetWidth)||0)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}},[]);const H=t.filter(i=>i.label.toLowerCase().includes(S.toLowerCase())),J=i=>{r?w(u=>{const g=u.some(O=>O.value===i.value)?u.filter(O=>O.value!==i.value):[...u,i];return s==null||s(g),g}):(w([i]),s==null||s(i),T(!1))},Q=i=>{w(u=>{const f=u.filter(g=>g.value!==i.value);return s==null||s(f.length?f:null),f})},q=()=>o.jsxs("div",{className:"absolute w-full mt-2 bg-white shadow-lg rounded-md overflow-hidden border-2 border-gray-300",style:l?{top:P.top,left:P.left,width:K,position:"absolute",zIndex:a}:{zIndex:a},children:[n&&o.jsx("div",{className:"sticky top-0 bg-white z-10 border-b border-gray-200",children:o.jsx(B,{searchTerm:S,setSearchTerm:G})}),o.jsx("ul",{className:"max-h-60 overflow-auto",children:H.map(i=>{const u=_.some(f=>f.value===i.value);return o.jsx("li",{className:ee("px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center text-sm font-normal",{"bg-green-100":u}),onClick:()=>J(i),children:c?c(i,u):i.label},i.value)})})]});return o.jsxs("div",{className:"flex flex-row gap-2 items-center w-full",children:[e&&o.jsx(C,{classNames:"font-bold text-lg",text:e}),o.jsxs("div",{className:"relative items-center w-full pl-10",ref:b,children:[o.jsx(W,{selectedOptions:_,multiple:r,onClick:()=>T(!d),removeOption:Q}),d&&(l?U.createPortal(q(),document.body):q())]})]})};V.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},portal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1050",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: Option | Option[] | null) => void",signature:{arguments:[{type:{name:"union",raw:"Option | Option[] | null",elements:[{name:"Option"},{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},{name:"null"}]},name:"selected"}],return:{name:"void"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: Option, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"Option"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const ge={title:"Components/Dropdown",component:V,argTypes:{multiple:{control:"boolean"},searchable:{control:"boolean"},portal:{control:"boolean"},zIndex:{control:"number"}}},pe=[{label:"The Shawshank Redemption",value:"shawshank"},{label:"The Godfather",value:"godfather"},{label:"The Dark Knight",value:"dark_knight"},{label:"Pulp Fiction",value:"pulp_fiction"},{label:"Fight Club",value:"fight_club"},{label:"Inception",value:"inception"},{label:"The Matrix",value:"matrix"},{label:"Forrest Gump",value:"forrest_gump"},{label:"Goodfellas",value:"goodfellas"},{label:"The Silence of the Lambs",value:"silence_lambs"},{label:"Interstellar",value:"interstellar"},{label:"The Lord of the Rings",value:"lotr"}],v={args:{label:"Label",options:pe,multiple:!1,searchable:!0,portal:!1,zIndex:1050}};var L,R,z;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Label",
    options,
    multiple: false,
    searchable: true,
    portal: false,
    zIndex: 1050
  }
}`,...(z=(R=v.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const ve=["Default"];export{v as Default,ve as __namedExportsOrder,ge as default};
