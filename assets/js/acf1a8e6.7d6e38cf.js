"use strict";(self.webpackChunkrnhc_docs=self.webpackChunkrnhc_docs||[]).push([[9978],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),y=a,g=m["".concat(c,".").concat(y)]||m[y]||u[y]||o;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const o={sidebar_position:6},l="Notes",i={unversionedId:"notes",id:"version-2.6.0/notes",title:"Notes",description:"- To see the available commands for rnhc you can run:",source:"@site/versioned_docs/version-2.6.0/notes.md",sourceDirName:".",slug:"/notes",permalink:"/react-native-help-create/docs/2.6.0/notes",draft:!1,tags:[],version:"2.6.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Combine Screens",permalink:"/react-native-help-create/docs/2.6.0/combine/combine-screens"}},c={},p=[],s={toc:p};function m(e){let{components:n,...t}=e;return(0,a.yg)("wrapper",(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"notes"},"Notes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To see the available commands for ",(0,a.yg)("inlineCode",{parentName:"li"},"rnhc")," you can run:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc --help\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To see the available positionals and options for a specific command like ",(0,a.yg)("inlineCode",{parentName:"li"},"create")," you can run:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --help\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In order to ",(0,a.yg)("inlineCode",{parentName:"li"},"rnhc")," to work, you must be at the root of your React Native project. It will check and if somehow you are not at the root of the project, ",(0,a.yg)("inlineCode",{parentName:"li"},"rnhc")," will prompt:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"You don't seem to be at the root of a react native project\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"In ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," command, ",(0,a.yg)("inlineCode",{parentName:"p"},"rnhc")," will create files with the project's used language, so if the project is written with TypeScript, it will write files with TypeScript, the same apply for JavaScript.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you are in a JavaScript project and somehow you want to create your component or screen in TypeScript, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"--typescript")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"--ts")," option:"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -s test-screen --ts\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It doesn't matter what case you name your component or screen, ",(0,a.yg)("inlineCode",{parentName:"li"},"rnhc")," will always create a component or screen with the same name, but with the first letter in uppercase, and the folder will be in kebab case. So if you name your component with ",(0,a.yg)("inlineCode",{parentName:"li"},"test-comp"),", it will create a component or screen with the name ",(0,a.yg)("inlineCode",{parentName:"li"},"TestComp")," in the ",(0,a.yg)("inlineCode",{parentName:"li"},"index.jsx")," file under the ",(0,a.yg)("inlineCode",{parentName:"li"},"./src/components/test-comp/")," folder. Check the example below:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -c test-comp\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -c testComp\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -c TestComp\n")),(0,a.yg)("p",null,"The above commands produce the same outcome:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"src/\n\u2514\u2500\u2500 components\n    \u2514\u2500\u2500 test-comp\n        \u251c\u2500\u2500 __tests__\n        \u2502\xa0\xa0 \u2514\u2500\u2500 index.spec.jsx\n        \u251c\u2500\u2500 index.jsx\n        \u2514\u2500\u2500 styles.js\n\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You can always overwrite your implementation using the ",(0,a.yg)("inlineCode",{parentName:"li"},"--overwrite")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"-o")," option, for example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -c test-component -o\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -s TestScreen -o\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -r -o\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --reducer testReducer -o\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --action testReducer test-action -o\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This is helpful when you want to update your navigation files, for example you already have a navigation file in ",(0,a.yg)("inlineCode",{parentName:"li"},"src/screens/")," folder and you want to update it with the new screens you created:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n stack --overwrite\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"When creating reducers you should have already a redux implmentation created with ",(0,a.yg)("inlineCode",{parentName:"p"},"rnhc create -r")," so it can work.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"When creating actions, you should have already a redux implementation created with ",(0,a.yg)("inlineCode",{parentName:"p"},"rnhc create -r")," as well as an existed reducer with ",(0,a.yg)("inlineCode",{parentName:"p"},"rnhc create --reducer <reducer-name>")," so it can create actions for that specific reducer.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Creating and deleting reducers and actions will not just delete files, but also update other files that depends on them under the ",(0,a.yg)("inlineCode",{parentName:"p"},"src/redux/")," folder (Or your specified path for the root of redux folder in ",(0,a.yg)("inlineCode",{parentName:"p"},"rnhc.config.json"),").")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"--silent")," option to avoid the prompts for all commands:"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -c foo --silent\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"rnhc")," will recommend you similar commands if you type a command that doesn't exist. For example, if you type ",(0,a.yg)("inlineCode",{parentName:"li"},"rnhc crete -c"),", it will prompt you with the following:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc <command> [option]\n\nCommands:\n  rnhc create [name]   Create components, screens, navigations and redux\n                       implementation\n  rnhc delete [name]   Delete components, screens, navigations and redux\n                       implementation\n  rnhc combine [name]  Combine components or screens in a folder\n\nOptions:\n  --version  Show version number                                       [boolean]\n  --silent   Do not show log messages                                  [boolean]\n  --help     Show help                                                 [boolean]\n\nDid you mean create?\n")))}m.isMDXComponent=!0}}]);