"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[480],{3293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,description:"How to install and configure dash. using docker-compose",tags:["Installation","Configuration","Docker","Docker-Compose"]},c="Docker-Compose",l={unversionedId:"install/docker-compose",id:"install/docker-compose",title:"Docker-Compose",description:"How to install and configure dash. using docker-compose",source:"@site/docs/install/docker-compose.md",sourceDirName:"install",slug:"/install/docker-compose",permalink:"/docs/install/docker-compose",draft:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/main/apps/docs/docs/install/docker-compose.md",tags:[{label:"Installation",permalink:"/docs/tags/installation"},{label:"Configuration",permalink:"/docs/tags/configuration"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Docker-Compose",permalink:"/docs/tags/docker-compose"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How to install and configure dash. using docker-compose",tags:["Installation","Configuration","Docker","Docker-Compose"]},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/install/docker"},next:{title:"From Source",permalink:"/docs/install/from-source"}},p={},d=[{value:"Configuration",id:"configuration",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-compose"},"Docker-Compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.5'\n\nservices:\n  dash:\n    image: mauricenino/dashdot:latest\n    restart: unless-stopped\n    privileged: true\n    ports:\n      - '80:3001'\n    volumes:\n      - /:/mnt/host:ro\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Config options can optionally set, by using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/#environment"},"environment")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"services:\n  dash:\n    environment:\n      DASHDOT_ENABLE_CPU_TEMPS: 'true'\n    # ...\n")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);