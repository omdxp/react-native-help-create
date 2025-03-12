"use strict";(self.webpackChunkrnhc_docs=self.webpackChunkrnhc_docs||[]).push([[9311],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>u});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(a),d=r,u=g["".concat(l,".").concat(d)]||g[d]||m[d]||i;return a?t.createElement(u,o(o({ref:n},p),{},{components:a})):t.createElement(u,o({ref:n},p))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3982:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(8168),r=(a(6540),a(5680));const i={sidebar_position:4},o="Create Navigations",s={unversionedId:"create/create-navigations",id:"version-2.3.4/create/create-navigations",title:"Create Navigations",description:"Navigations are the relations between chosen screens, those relations can be stack navigation, drawer navigation or tab navigation.",source:"@site/versioned_docs/version-2.3.4/create/create-navigations.md",sourceDirName:"create",slug:"/create/create-navigations",permalink:"/react-native-help-create/docs/2.3.4/create/create-navigations",draft:!1,tags:[],version:"2.3.4",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create Screens",permalink:"/react-native-help-create/docs/2.3.4/create/create-screens"},next:{title:"Using Templates",permalink:"/react-native-help-create/docs/2.3.4/create/using-templates"}},l={},c=[{value:"Create Navigation for specific screens",id:"create-navigation-for-specific-screens",level:2},{value:"Example",id:"example",level:3},{value:"Create Navigation for specific screens in a specific folder",id:"create-navigation-for-specific-screens-in-a-specific-folder",level:2},{value:"Example",id:"example-1",level:3},{value:"Create Navigation that depends on other navigations",id:"create-navigation-that-depends-on-other-navigations",level:2},{value:"Example",id:"example-2",level:3},{value:"Create Navigation for all screens",id:"create-navigation-for-all-screens",level:2}],p={toc:c};function g(e){let{components:n,...a}=e;return(0,r.yg)("wrapper",(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-navigations"},"Create Navigations"),(0,r.yg)("p",null,"Navigations are the relations between chosen screens, those relations can be stack navigation, drawer navigation or tab navigation."),(0,r.yg)("h2",{id:"create-navigation-for-specific-screens"},"Create Navigation for specific screens"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create a navigation between two or more screens, simply run:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n <navigation-type> <screen-name-1> <screen-name-2> ...\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<navigation-type>")," can be either of these types: ",(0,r.yg)("inlineCode",{parentName:"p"},"stack")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"drawer")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"tab"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The number of given screens should be 2 or more.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If one of the screens does not exist, ",(0,r.yg)("inlineCode",{parentName:"p"},"rnhc")," will try to create the ",(0,r.yg)("inlineCode",{parentName:"p"},"navigation.jsx")," file that resides next to the existed screens.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If all screens does not exist, ",(0,r.yg)("inlineCode",{parentName:"p"},"rhnc")," will prompt you the following:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"None of these screens exist\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n stack screen-1 screen-2\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will create a ",(0,r.yg)("inlineCode",{parentName:"li"},"navigation.jsx")," file next to ",(0,r.yg)("inlineCode",{parentName:"li"},"screen-1")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"screen-2")," screens as the following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"src\n\u2514\u2500\u2500\u2500screens\n    \u2502   navigation.jsx\n    \u2502\n    \u251c\u2500\u2500\u2500screen-1\n    \u2502   \u2502   index.jsx\n    \u2502   \u2502   styles.js\n    \u2502   \u2502\n    \u2502   \u2514\u2500\u2500\u2500functions\n    \u2502           index.js\n    \u2502\n    \u2514\u2500\u2500\u2500screen-2\n        \u2502   index.jsx\n        \u2502   styles.js\n        \u2502\n        \u2514\u2500\u2500\u2500functions\n                index.js\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The content for the ",(0,r.yg)("inlineCode",{parentName:"li"},"navigation.jsx")," file is as the following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nimport { createStackNavigator } from "@react-navigation/stack";\nconst { Navigator, Screen } = createStackNavigator();\n\nimport { Screen1Screen } from "./screen-1";\nimport { Screen2Screen } from "./screen-2";\n\nconst routes = [\n  {\n    name: "screen-1",\n    component: Screen1Screen,\n  },\n  {\n    name: "screen-2",\n    component: Screen2Screen,\n  },\n];\n\nexport const Navigation = () => {\n  return (\n    <Navigator>\n      {routes.map(({ name, component }) => (\n        <Screen key={name} name={name} component={component} />\n      ))}\n    </Navigator>\n  );\n};\n')),(0,r.yg)("h2",{id:"create-navigation-for-specific-screens-in-a-specific-folder"},"Create Navigation for specific screens in a specific folder"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create a navigation file for screens that resides in a specific path under the ",(0,r.yg)("inlineCode",{parentName:"li"},"src/screens/")," folder, you can run this:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n <navigation-type> <screen-name-1> <screen-name-2> ... -f <folder-path>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will create the ",(0,r.yg)("inlineCode",{parentName:"li"},"navigation.jsx")," file under the ",(0,r.yg)("inlineCode",{parentName:"li"},"src/screens/<folder-path>/")," folder for the screens that resides in the same location.")),(0,r.yg)("h3",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rhnc create -n drawer screen-1 screen-2 -f foo/bar\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will create ",(0,r.yg)("inlineCode",{parentName:"li"},"navigation.jsx")," file under ",(0,r.yg)("inlineCode",{parentName:"li"},"src/screens/foo/bar/")," folder which contains the following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nimport { createStackNavigator } from "@react-navigation/stack";\nconst { Navigator, Screen } = createStackNavigator();\n\nimport { Screen1Screen } from "./screen-1";\nimport { Screen2Screen } from "./screen-2";\n\nconst routes = [\n  {\n    name: "screen-1",\n    component: Screen1Screen,\n  },\n  {\n    name: "screen-2",\n    component: Screen2Screen,\n  },\n];\n\nexport const Navigation = () => {\n  return (\n    <Navigator>\n      {routes.map(({ name, component }) => (\n        <Screen key={name} name={name} component={component} />\n      ))}\n    </Navigator>\n  );\n};\n')),(0,r.yg)("h2",{id:"create-navigation-that-depends-on-other-navigations"},"Create Navigation that depends on other navigations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create a navigation that depends on another navigation you can run the same command as this:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n <navigation-type> <screen-name-1> <screen-name-2> ... <another-navigation-folder>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will create ",(0,r.yg)("inlineCode",{parentName:"li"},"navigation.jsx")," file that resides in the same location for the given inputs.")),(0,r.yg)("h3",{id:"example-2"},"Example"),(0,r.yg)("p",null,"In this example, we have the following structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"src\n\u2514\u2500\u2500\u2500screens\n    \u251c\u2500\u2500\u2500folder\n    \u2502   \u2502   navigation.jsx\n    \u2502   \u2502\n    \u2502   \u251c\u2500\u2500\u2500screen-one\n    \u2502   \u2502   \u2502   index.jsx\n    \u2502   \u2502   \u2502   styles.js\n    \u2502   \u2502   \u2502\n    \u2502   \u2502   \u2514\u2500\u2500\u2500functions\n    \u2502   \u2502           index.js\n    \u2502   \u2502\n    \u2502   \u2514\u2500\u2500\u2500screen-two\n    \u2502       \u2502   index.jsx\n    \u2502       \u2502   styles.js\n    \u2502       \u2502\n    \u2502       \u2514\u2500\u2500\u2500functions\n    \u2502               index.js\n    \u2502\n    \u2514\u2500\u2500\u2500screen-three\n        \u2502   index.jsx\n        \u2502   styles.js\n        \u2502\n        \u2514\u2500\u2500\u2500functions\n                index.js\n")),(0,r.yg)("p",null,"Where we have a drawer navigation between ",(0,r.yg)("inlineCode",{parentName:"p"},"screen-one")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"screen-two")," under the ",(0,r.yg)("inlineCode",{parentName:"p"},"folder")," folder. And we want to create a stack navigation between ",(0,r.yg)("inlineCode",{parentName:"p"},"folder")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"screen-three"),". And to show that ",(0,r.yg)("inlineCode",{parentName:"p"},"rnhc")," will continue to run for the existed screens we added in the command line ",(0,r.yg)("inlineCode",{parentName:"p"},"screen-four")," which does not exist as the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n stack folder screen-three screen-four\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The command will output the following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"src/screens/screen-four/ does not exist\nsrc/screens/navigation.jsx created\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"And it will add a new ",(0,r.yg)("inlineCode",{parentName:"li"},"navigation.jsx")," that resides between ",(0,r.yg)("inlineCode",{parentName:"li"},"folder")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"screen-three")," as the following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"src\n\u2514\u2500\u2500\u2500screens\n    \u2502   navigation.jsx\n    \u2502\n    \u251c\u2500\u2500\u2500folder\n    \u2502   \u2502   navigation.jsx\n    \u2502   \u2502\n    \u2502   \u251c\u2500\u2500\u2500screen-one\n    \u2502   \u2502   \u2502   index.jsx\n    \u2502   \u2502   \u2502   styles.js\n    \u2502   \u2502   \u2502\n    \u2502   \u2502   \u2514\u2500\u2500\u2500functions\n    \u2502   \u2502           index.js\n    \u2502   \u2502\n    \u2502   \u2514\u2500\u2500\u2500screen-two\n    \u2502       \u2502   index.jsx\n    \u2502       \u2502   styles.js\n    \u2502       \u2502\n    \u2502       \u2514\u2500\u2500\u2500functions\n    \u2502               index.js\n    \u2502\n    \u2514\u2500\u2500\u2500screen-three\n        \u2502   index.jsx\n        \u2502   styles.js\n        \u2502\n        \u2514\u2500\u2500\u2500functions\n                index.js\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"And the content of the new ",(0,r.yg)("inlineCode",{parentName:"li"},"navigation.jsx")," file will be like this:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nimport { createStackNavigator } from "@react-navigation/stack";\nconst { Navigator, Screen } = createStackNavigator();\n\nimport { Navigation as Folder } from "./folder/navigation";\nimport { ScreenThreeScreen } from "./screen-three";\n\nconst routes = [\n  {\n    name: "folder",\n    component: Folder,\n  },\n  {\n    name: "screen-three",\n    component: ScreenThreeScreen,\n  },\n];\n\nexport const Navigation = () => {\n  return (\n    <Navigator>\n      {routes.map(({ name, component }) => (\n        <Screen key={name} name={name} component={component} />\n      ))}\n    </Navigator>\n  );\n};\n')),(0,r.yg)("h2",{id:"create-navigation-for-all-screens"},"Create Navigation for all screens"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create a navigation file for multiple screens that resides at the root of the ",(0,r.yg)("inlineCode",{parentName:"li"},"src/screens/")," folder, you can run this:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n <navigation-type>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will create the navigation file for all existed screens in the ",(0,r.yg)("inlineCode",{parentName:"li"},"src/screens/")," folder.")),(0,r.yg)("p",null,"You can also run this command to create a navigation file for multiple screens that resides in a specific path under the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/screens/")," folder:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n <navigation-type> -f <folder-path>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This will create the navigation file for all existed screens in the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/screens/<folder-path>/")," folder.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This also work for the nested navigations.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"All the sub folders should contain the navigation files so it can be added to the navigation file you want to create, for example take this structure:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"src\n\u2514\u2500\u2500\u2500screens\n    \u2502   navigation.jsx\n    \u2502\n    \u251c\u2500\u2500\u2500folder\n    \u2502   \u2502\n    \u2502   \u251c\u2500\u2500\u2500screen-one\n    \u2502   \u2502   \u2502   index.jsx\n    \u2502   \u2502   \u2502   styles.js\n    \u2502   \u2502   \u2502\n    \u2502   \u2502   \u2514\u2500\u2500\u2500functions\n    \u2502   \u2502           index.js\n    \u2502   \u2502\n    \u2502   \u2514\u2500\u2500\u2500screen-two\n    \u2502       \u2502   index.jsx\n    \u2502       \u2502   styles.js\n    \u2502       \u2502\n    \u2502       \u2514\u2500\u2500\u2500functions\n    \u2502               index.js\n    \u2502\n    \u251c\u2500\u2500\u2500screen-three\n    \u2502   \u2502   index.jsx\n    \u2502   \u2502   styles.js\n    \u2502   \u2502\n    \u2502   \u2514\u2500\u2500\u2500functions\n    \u2502           index.js\n    \u2502\n    \u2514\u2500\u2500\u2500screen-four\n        \u2502   index.jsx\n        \u2502   styles.js\n        \u2502\n        \u2514\u2500\u2500\u2500functions\n                index.js\n")),(0,r.yg)("p",null,"When you try to create a navigation like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n stack\n")),(0,r.yg)("p",null,"It will contain only ",(0,r.yg)("inlineCode",{parentName:"p"},"screen-three")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"screen-four")," because the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/screens/folder")," does not contain a navigation file."),(0,r.yg)("p",null,"So if you want to create a navigation file for all existed screens in the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/screens/")," folder, you must take in consideration that all subfolders must contain a navigation file first and then you can either update the navigation file or create a new one."),(0,r.yg)("p",null,"By updating it means overwriting in other words, so you can just do this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -n stack -o\n")))}g.isMDXComponent=!0}}]);