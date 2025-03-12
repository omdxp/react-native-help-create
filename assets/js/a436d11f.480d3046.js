"use strict";(self.webpackChunkrnhc_docs=self.webpackChunkrnhc_docs||[]).push([[1163],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,f=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={sidebar_position:4},l="Delete Navigations",o={unversionedId:"delete/delete-navigations",id:"delete/delete-navigations",title:"Delete Navigations",description:"Delete the root Navigation",source:"@site/docs/delete/delete-navigations.md",sourceDirName:"delete",slug:"/delete/delete-navigations",permalink:"/react-native-help-create/docs/delete/delete-navigations",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Delete Screens",permalink:"/react-native-help-create/docs/delete/delete-screens"},next:{title:"Delete Redux",permalink:"/react-native-help-create/docs/delete/delete-redux"}},c={},s=[{value:"Delete the root Navigation",id:"delete-the-root-navigation",level:2},{value:"Delete a Navigation in a Specific Folder",id:"delete-a-navigation-in-a-specific-folder",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"delete-navigations"},"Delete Navigations"),(0,a.yg)("h2",{id:"delete-the-root-navigation"},"Delete the root Navigation"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To delete a navigation file that resides in ",(0,a.yg)("inlineCode",{parentName:"li"},"src/screens/")," folder simply run:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc delete -n\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This will delete the navigation file if it exists, if not ",(0,a.yg)("inlineCode",{parentName:"li"},"rnhc")," will prompt the following:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"It seems there is no navigation file in src/screens/\n")),(0,a.yg)("h2",{id:"delete-a-navigation-in-a-specific-folder"},"Delete a Navigation in a Specific Folder"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To delete a navigation file that resides in a specific path that resides under ",(0,a.yg)("inlineCode",{parentName:"li"},"src/screens/")," folder you can run:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc delete -n -f <folder-path>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This will delete the navigation file if it does exist under the ",(0,a.yg)("inlineCode",{parentName:"li"},"src/screens/<folder-path>/")," folder.")))}p.isMDXComponent=!0}}]);