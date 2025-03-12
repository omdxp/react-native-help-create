"use strict";(self.webpackChunkrnhc_docs=self.webpackChunkrnhc_docs||[]).push([[3912],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(t),g=r,m=s["".concat(c,".").concat(g)]||s[g]||d[g]||i;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));const i={sidebar_position:6},l="Create Redux",o={unversionedId:"create/create-redux",id:"version-2.6.0/create/create-redux",title:"Create Redux",description:"To create a redux implementation run:",source:"@site/versioned_docs/version-2.6.0/create/create-redux.md",sourceDirName:"create",slug:"/create/create-redux",permalink:"/react-native-help-create/docs/2.6.0/create/create-redux",draft:!1,tags:[],version:"2.6.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Using Templates",permalink:"/react-native-help-create/docs/2.6.0/create/using-templates"},next:{title:"Using Configuration",permalink:"/react-native-help-create/docs/2.6.0/create/using-configuration"}},c={},u=[{value:"Create a reducer",id:"create-a-reducer",level:2},{value:"Example",id:"example",level:3},{value:"Create multiple reducers",id:"create-multiple-reducers",level:2},{value:"Create an action",id:"create-an-action",level:2},{value:"Example",id:"example-1",level:3},{value:"Create multiple actions",id:"create-multiple-actions",level:2}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,r.yg)("wrapper",(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-redux"},"Create Redux"),(0,r.yg)("p",null,"To create a redux implementation run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create -r\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will create a ",(0,r.yg)("inlineCode",{parentName:"li"},"redux")," folder under the ",(0,r.yg)("inlineCode",{parentName:"li"},"src/")," folder containing the following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"src\n\u2514\u2500\u2500\u2500redux\n    \u2502   index.js\n    \u2502\n    \u251c\u2500\u2500\u2500actions\n    \u2502   \u2514\u2500\u2500\u2500general\n    \u2502           index.js\n    \u2502\n    \u2514\u2500\u2500\u2500reducers\n        \u2502   index.js\n        \u2502\n        \u2514\u2500\u2500\u2500general\n                index.js\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Where ",(0,r.yg)("inlineCode",{parentName:"li"},"index.js")," under the ",(0,r.yg)("inlineCode",{parentName:"li"},"redux")," folder contains the redux store definition:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import { applyMiddleware, compose, createStore } from "redux";\nimport { mainReducer } from "./reducers";\n\n/**\n * the main redux state, with all the reducers\n */\nexport const mainStore = createStore(\n  mainReducer,\n  compose(applyMiddleware(thunk))\n);\n\n/**\n * Creates a new redux state each time this function is called, this is used only for unit tests, to ensure that we have fresh state on each individual test\n */\nexport const createMainStore = () => {\n  return createStore(mainReducer, compose(applyMiddleware(thunk)));\n};\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"And ",(0,r.yg)("inlineCode",{parentName:"p"},"actions")," folder contains the action for each reducer, as for a example, at first ",(0,r.yg)("inlineCode",{parentName:"p"},"rnhc")," will create a sample reducer and action which is called ",(0,r.yg)("inlineCode",{parentName:"p"},"general"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"general")," action's ",(0,r.yg)("inlineCode",{parentName:"p"},"index.js")," contains:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// write your general actions here\n\n// this is an example for an action\nexport const init = () => async (dispatch, getState) => {\n  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } });\n};\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"And the ",(0,r.yg)("inlineCode",{parentName:"li"},"general")," reducer's ",(0,r.yg)("inlineCode",{parentName:"li"},"index.js")," contains:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const initialState = { message: "" };\n\nexport const general = (state = initialState, action) => {\n  switch (action.type) {\n    case "UPDATE_GENERAL":\n      return { ...state, ...action.payload };\n    default:\n      return state;\n  }\n};\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"And the ",(0,r.yg)("inlineCode",{parentName:"li"},"index.js")," file under the ",(0,r.yg)("inlineCode",{parentName:"li"},"reducers")," folder contains the following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import { combineReducers } from "redux";\nimport { general } from "./general";\n\nexport const mainReducer = combineReducers({\n  general,\n});\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In TypeScript, the files will be written as the following:")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"redux/index.ts")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { applyMiddleware, compose, createStore } from "redux";\nimport { mainReducer } from "./reducers";\n\n/**\n * the main redux state, with all the reducers\n */\nexport const mainStore = createStore(\n  mainReducer,\n  compose(applyMiddleware(thunk))\n);\n\nexport type StateInterface = ReturnType<typeof mainStore.getState>;\n\n/**\n * list of action types\n */\nexport type ActionType = "UPDATE_GENERAL";\n\nexport interface Action<T> {\n  type: ActionType;\n  payload: Partial<T>;\n}\n\nexport type ThunkResult<\n  A = Record<string, unknown>,\n  E = Record<string, unknown>\n> = ThunkAction<void, StateInterface, E, Action<A>>;\n\nexport type Dispatch<A> = ThunkDispatch<\n  StateInterface,\n  Record<string, unknown>,\n  Action<A>\n>;\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"redux/actions/general/index.ts")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { GeneralState } from "../../reducers/general";\nimport { ThunkResult } from "../..";\n\n// write your general actions here\n\n// this is an example for an action\nexport const init =\n  (): ThunkResult<GeneralState> => async (dispatch, getState) => {\n    dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } });\n  };\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"redux/reducers/general/index.ts")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { Action } from "../..";\n\nexport interface GeneralState {\n  message: string;\n}\n\nexport const general = (\n  state: GeneralState = {\n    message: "",\n  },\n  action: Action<GeneralState>\n) => {\n  switch (action.type) {\n    case "UPDATE_GENERAL":\n      return { ...state, ...action.payload };\n    default:\n      return state;\n  }\n};\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"redux/reducers/index.ts")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { combineReducers } from "redux";\nimport { general } from "./general";\n\nexport const mainReducer = combineReducers({\n  general,\n});\n')),(0,r.yg)("h1",{id:"reducers"},"Reducers"),(0,r.yg)("h2",{id:"create-a-reducer"},"Create a reducer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create a reducer, you must have a redux implementation then run:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --reducer <reducer-name>\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --reducer auth\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will create a ",(0,r.yg)("inlineCode",{parentName:"li"},"auth")," reducer under the ",(0,r.yg)("inlineCode",{parentName:"li"},"src/redux/reducers/")," folder and the ",(0,r.yg)("inlineCode",{parentName:"li"},"index.js")," for this reducer will contain the same code written in the template.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"src/redux/reducers/auth/index.js")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const initialState = {};\n\nexport const auth = (state = initialState, action) => {\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It will also add the reducer to the ",(0,r.yg)("inlineCode",{parentName:"li"},"index.js")," file under the ",(0,r.yg)("inlineCode",{parentName:"li"},"reducers")," folder to use it in the ",(0,r.yg)("inlineCode",{parentName:"li"},"combineReducers")," function.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"src/redux/reducers/index.js")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import { combineReducers } from "redux";\nimport { auth } from "./auth";\nimport { general } from "./general";\n\nexport const mainReducer = combineReducers({\n  auth,\n  general,\n});\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If you don't have a redux implementation create using ",(0,r.yg)("inlineCode",{parentName:"li"},"rnhc create -r"),", this command will prompt:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"Redux implementation does not exist\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You can also overwrite the reducer by running:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --reducer <reducer-name> -o\n")),(0,r.yg)("h2",{id:"create-multiple-reducers"},"Create multiple reducers"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create multiple reducers, you must have a redux implementation then run:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --reducer <reducer-name-1> <reducer-name-2> ...\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will also update your ",(0,r.yg)("inlineCode",{parentName:"li"},"index.js")," file under the ",(0,r.yg)("inlineCode",{parentName:"li"},"reducers")," folder to use the reducers you created.")),(0,r.yg)("h1",{id:"actions"},"Actions"),(0,r.yg)("h2",{id:"create-an-action"},"Create an action"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create an action, you must have a redux implementation as wee as the reducer you want to add an action for it, then run:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --action <reducer-name> <action-name>\n")),(0,r.yg)("h3",{id:"example-1"},"Example"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In this example we are going to create an action for the ",(0,r.yg)("inlineCode",{parentName:"li"},"auth")," reducer, so we will run:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --action auth login\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This will create a ",(0,r.yg)("inlineCode",{parentName:"li"},"login")," action under the ",(0,r.yg)("inlineCode",{parentName:"li"},"src/redux/actions/auth/")," folder and the ",(0,r.yg)("inlineCode",{parentName:"li"},"login.js")," for this action will contain the same code written in the template.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"src/redux/actions/auth/login.js")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'export const loginAction = () => async (dispatch, getState) => {\n  dispatch({ type: "AUTH_LOGIN", payload: {} });\n};\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"And it will update the ",(0,r.yg)("inlineCode",{parentName:"li"},"index.js")," file under ",(0,r.yg)("inlineCode",{parentName:"li"},"src/redux/actions/auth/")," to export the action.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"src/redux/actions/auth/index.js")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'export { loginAction } from "./login";\n')),(0,r.yg)("h2",{id:"create-multiple-actions"},"Create multiple actions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To create multiple actions, you must have a redux implementation and existed reducer, then run:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rnhc create --action <reducer-name> <action-name-1> <action-name-2> ...\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the reducer doesn't exist, you will get an error like this:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./src/redux/reducers/x does not exist\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Keep in mind that this also works for TypeScript projects. Even better when creating an action for a reducer in TypeScript, you will get TypeScript support as well as updating the ",(0,r.yg)("inlineCode",{parentName:"li"},"ActionType")," in the ",(0,r.yg)("inlineCode",{parentName:"li"},"src/redux/index.ts")," file. For example if you create an action for the ",(0,r.yg)("inlineCode",{parentName:"li"},"auth")," reducer, you will get the following:")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"src/redux/index.ts")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { applyMiddleware, compose, createStore } from "redux";\nimport thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";\n\nimport { mainReducer } from "./reducers";\n\n/**\n * the main redux state, with all the reducers\n */\nexport const mainStore = createStore(\n  mainReducer,\n  compose(applyMiddleware(thunk))\n);\n\n/**\n * Creates a new redux state each time this function is called, this is used only for unit tests, to ensure that we have fresh state on each individual test\n */\nexport const createMainStore = () => {\n  return createStore(mainReducer, compose(applyMiddleware(thunk)));\n};\n\nexport type StateInterface = ReturnType<typeof mainStore.getState>;\n\n/**\n * list of action types\n */\nexport type ActionType = "AUTH_LOGIN" | "UPDATE_GENERAL";\n\nexport interface Action<T> {\n  type: ActionType;\n  payload: Partial<T>;\n}\nexport type ThunkResult<\n  A = Record<string, unknown>,\n  E = Record<string, unknown>\n> = ThunkAction<void, StateInterface, E, Action<A>>;\n\nexport type Dispatch<A> = ThunkDispatch<\n  StateInterface,\n  Record<string, unknown>,\n  Action<A>\n>;\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"It will also update the necessary files that imports and exports modules in order to use the action in the reducer.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Also another note, if you prefer not using ",(0,r.yg)("inlineCode",{parentName:"p"},"redux-thunk")," you can set that in ",(0,r.yg)("inlineCode",{parentName:"p"},"rnhc.config.json")," file, this will let you create your store and actions without applying the ",(0,r.yg)("inlineCode",{parentName:"p"},"redux-thunk")," middleware (For more details check ",(0,r.yg)("a",{parentName:"p",href:"./using-configuration"},"configuration section"),")."))))}s.isMDXComponent=!0}}]);