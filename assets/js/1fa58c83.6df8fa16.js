"use strict";(self.webpackChunkrnhc_docs=self.webpackChunkrnhc_docs||[]).push([[832],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=l,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<a;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=t(9668),l=(t(6540),t(5680));const a={sidebar_position:3},i="Delete Screens",s={unversionedId:"delete/delete-screens",id:"version-2.3.4/delete/delete-screens",title:"Delete Screens",description:"Delete a Screen",source:"@site/versioned_docs/version-2.3.4/delete/delete-screens.md",sourceDirName:"delete",slug:"/delete/delete-screens",permalink:"/react-native-help-create/docs/2.3.4/delete/delete-screens",draft:!1,tags:[],version:"2.3.4",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Delete Components",permalink:"/react-native-help-create/docs/2.3.4/delete/delete-components"},next:{title:"Delete Navigations",permalink:"/react-native-help-create/docs/2.3.4/delete/delete-navigations"}},c={},o=[{value:"Delete a Screen",id:"delete-a-screen",level:2},{value:"Delete multiple Screens",id:"delete-multiple-screens",level:2},{value:"Delete a Screens in a Specific Folder",id:"delete-a-screens-in-a-specific-folder",level:2}],p={toc:o};function d(e){let{components:n,...t}=e;return(0,l.yg)("wrapper",(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"delete-screens"},"Delete Screens"),(0,l.yg)("h2",{id:"delete-a-screen"},"Delete a Screen"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"To delete a screen simply run:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc delete -s <screen-name>\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"This will delete the screen with the given name ",(0,l.yg)("inlineCode",{parentName:"p"},"<screen-name>")," under the ",(0,l.yg)("inlineCode",{parentName:"p"},"src/screens/")," folder.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If the screen does not exist, ",(0,l.yg)("inlineCode",{parentName:"p"},"rnhc")," will prompt the following:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"src/screens/<screen-name>/ does not exist\n")),(0,l.yg)("h2",{id:"delete-multiple-screens"},"Delete multiple Screens"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"To delete multiple screens run:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc delete -s <screen-name-1> <screen-name-2> ...\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"This will delete only the existed screens with the given inputs that resides under the ",(0,l.yg)("inlineCode",{parentName:"li"},"src/screens/")," folder.")),(0,l.yg)("h2",{id:"delete-a-screens-in-a-specific-folder"},"Delete a Screens in a Specific Folder"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"To delete one or multiple screens that resides in a specific path under the ",(0,l.yg)("inlineCode",{parentName:"li"},"src/screens/")," folder, you can run:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc delete -s <screen-name-1> <screen-name-2> ... -f <folder-path>\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"This will delete only the existed screens with the given inputs that resides under the ",(0,l.yg)("inlineCode",{parentName:"li"},"src/screens/<folder-path>/")," folder.")))}d.isMDXComponent=!0}}]);