"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6228],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Using Remix IDE",hide_table_of_contents:!1,sidebar_position:2},s="Using Remix IDE for Issuing BEP20 Tokens on BSC",c={unversionedId:"remix",id:"remix",isDocsHomePage:!1,title:"Using Remix IDE for Issuing BEP20 Tokens on BSC",description:"In this tutorial, we provide guidelines on how to create, compile, and deploy a smart contract for deploying BEP020 tokens on BSC using the Remix IDE.",source:"@site/docs/remix.md",sourceDirName:".",slug:"/remix",permalink:"/docs/remix",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/remix.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using Remix IDE",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Issue BEP20 Tokens",permalink:"/docs/issue-BEP20"},next:{title:"Cross-chain Token Management",permalink:"/docs/tokens-cross-chain"}},m=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:3},{value:"Setting Up Remix IDE",id:"setting-up-remix-ide",children:[],level:3},{value:"Writing the Smart Contract",id:"writing-the-smart-contract",children:[],level:2},{value:"Compile Smart Contract",id:"compile-smart-contract",children:[],level:2},{value:"Configure MetaMask and Fund Your Account",id:"configure-metamask-and-fund-your-account",children:[],level:2},{value:"Deploy Smart Contract",id:"deploy-smart-contract",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:m};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-remix-ide-for-issuing-bep20-tokens-on-bsc"},"Using Remix IDE for Issuing BEP20 Tokens on BSC"),(0,o.kt)("p",null,"In this tutorial, we provide guidelines on how to create, compile, and deploy a smart contract for deploying BEP020 tokens on BSC using the ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE"),"."),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"There is no need for any local environment settings for deploying solidity smart contracts on BSC using the Remix IDE."),(0,o.kt)("p",null,"All you require is a browser-based Web3 wallet (e.g. MetaMask) to interact with the BSC Testnet and deployed contracts. If you are already using MetaMask, it is recommended to create a new account for testing with Replit. You can do this from the account menu, which appears when you click on the account avatar in the top right corner of MetaMask interface."),(0,o.kt)("p",null,"You must set up all of the following Pre-requisites to be able to deploy your solidity smart contract on BSC:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Download Metamask wallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"},"Configure BNB Smart Chain Testnet on Metamask")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.binance.org/faucet-smart"},"Get BNB testnet tokens"))),(0,o.kt)("h3",{id:"setting-up-remix-ide"},"Setting Up Remix IDE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remix is an online IDE to develop smart contracts."),(0,o.kt)("li",{parentName:"ul"},"You need to choose Solidity Compiler, Choose the appropriate compiler version. We used 0.8.4 for this tutorial.")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/93580180/182832093-0229df42-6f44-4027-b418-b8045208a30f.png",alt:"img",style:{zoom:"100%"}}),(0,o.kt)("h2",{id:"writing-the-smart-contract"},"Writing the Smart Contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create new file, name it as ",(0,o.kt)("inlineCode",{parentName:"p"},"BEP20Token.sol")," and copy contract code from the ",(0,o.kt)("a",{target:"_blank",href:n(14033).Z},"BEP20 token template"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Remember to modify \u201cname\u201d, \u201csymbol\u201d, \u201cdecimals\u201d and \u201ctotalSupply\u201d according to your requirements."))),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/93580180/182832302-2e9bb7b7-9b54-49d8-888e-d03613ce59b1.png",alt:"img",style:{zoom:"30%"}}),(0,o.kt)("p",null,"The first line, ",(0,o.kt)("inlineCode",{parentName:"p"},"pragma solidity ^0.8.4")," specifies that the source code is for a Solidity version greater than 0.8.4. ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/layout-of-source-files.html#pragma"},"Pragmas")," are common instructions for compilers about how to treat the source code (e.g., pragma once)."),(0,o.kt)("p",null,"A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. Learn more about the ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/contracts.html#constructor"},"constructor")," and  ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html#storage-memory-and-the-stack"},"memory")," in the docs."),(0,o.kt)("h2",{id:"compile-smart-contract"},"Compile Smart Contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step1: Click button to switch to compile page.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step2: Select the appropriate compiler version, 0.8.4 in our case.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Step3: Enable "Auto compile" and "Optimization" from Advanced Configurations,')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Step4: Select "BEP20Token" from the contract drop-down menu.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Step5: Click "ABI" to copy the contract ABI and save it.'))),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/93580180/182832411-56a76672-40c9-490b-85a3-46eeecf7b911.png",alt:"img",style:{zoom:"100%"}}),(0,o.kt)("h2",{id:"configure-metamask-and-fund-your-account"},"Configure MetaMask and Fund Your Account"),(0,o.kt)("p",null,"Now, We have to deploy our smart contract on BNB Smart Chain Network. For that, we have to connect to Web3 world, this can be done by many services like MetaMask, Brave, Portis etc. We will be using MetaMask. Please follow this ",(0,o.kt)("a",{parentName:"p",href:"/docs/wallet/metamask"},"tutorial to setup a Metamask Account")," for configuring the MetaMask wallet to use with BSC."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open Metamask and select Custom RPC from the networks dropdown")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to setting page"))),(0,o.kt)("img",{src:"https://lh5.googleusercontent.com/NqWPIv1MrMJ-W2wDKjxtdxcdFhDwiqhsZ6G6MY6FQnhxPTCCPfPHBJ59vBl1ddxpbfV11ufETWAolV1s9YjCYHPeJCKW1S-sr8gfjcFt3swXM-p3IgafNBqPZ86DvThK-I9gKbrw",alt:"img",style:{zoom:"30%"}}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a new network")),(0,o.kt)("img",{src:"https://lh6.googleusercontent.com/jrq511YshO6rPPx4i-ePRy2gs-66b465c_JFXEW8Cm5CSNTM7CXgCPuFmIh_Im3JlEhxpAqEDDjmUqfskq2m5rG-FKhwZ4_jIenOTdAVs_rMMTjTvZlM6iOpQeivrz_V1liSvuB5",alt:"img",style:{zoom:"30%"}}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Testnet"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/rpc"},"RPC URLs")),(0,o.kt)("li",{parentName:"ul"},"ChainID: 97"),(0,o.kt)("li",{parentName:"ul"},"Symbol: BNB"),(0,o.kt)("li",{parentName:"ul"},"Block Explorer: ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.bscscan.com"},"https://testnet.bscscan.com")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mainnet"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/rpc"},"RPC URLs")),(0,o.kt)("li",{parentName:"ul"},"ChainID: 56"),(0,o.kt)("li",{parentName:"ul"},"Symbol: BNB"),(0,o.kt)("li",{parentName:"ul"},"Block Explorer: ",(0,o.kt)("a",{parentName:"li",href:"https://bscscan.com"},"https://bscscan.com"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go ahead and click save")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy your address from Metamask")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.binance.org/faucet-smart"},"Faucet")," and request test BNB"))),(0,o.kt)("h2",{id:"deploy-smart-contract"},"Deploy Smart Contract"),(0,o.kt)("p",null,"Let's Deploy the Smart Contract on BNB Smart Chain Testnet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select Injected Web3 in the Environment dropdown and your contract")),(0,o.kt)("img",{src:"https://lh5.googleusercontent.com/Z4XBNJcsMWk5SzSKB8no5vAzv8ie46p4dbv4sh0_9FxIyMfEFlCj2z_a_ZUWR6l3fH9OIr3B2A0_Puh89FzbxlkLMVsTo9diSbLGdbp2Swml0afc7Unl10hBw9jsAY6Ozgbe6HqE",alt:"img",style:{zoom:"20%"}}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accept the Connection Request!")),(0,o.kt)("img",{src:"https://lh3.googleusercontent.com/-SBQ0YKnAs_IR80dcqc3EpWRte8KlVCgTIPgSiFPe6H_TKDZj4O5TBR0rpvts4YZpA1LYN2-5IocYkcZjuMP5yb7rch0NovdTMH-55Pjg4HIorxZGeFO7dkyYGlrY0W5DYfs7t_z",alt:"img",style:{zoom:"30%"}}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once Metamask is connected to Remix, the \u2018Deploy\u2019 transaction would generate another metamask popup that requires transaction confirmation.")),(0,o.kt)("img",{src:"https://lh4.googleusercontent.com/9awuDudNSuUOZDQAlW5FPZ5SbRkWsKPlJSYWGUL7R4raJ5o2mprRP7jt87hP_wbuYeoJy75ErwDcKVC7_spf8YkumCkwOP4Eak9SfcV6dZvyVhy84JqKfVUvmEeLw5mWEZ3-aCED",alt:"img",style:{zoom:"20%"}}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed a BEP20 Contract. Now you can interact with the Smart Contract. Check the deployment status here: ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/"},"https://testnet.bscscan.com/")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This tutorial guided you through the basics of creating and deploying a contract of BEP20 tokens using the Remix IDE and MetaMask Web Wallet. This tutorial uses testnet, however, the exact same instructions and sequence will work on the mainnet as well."))}p.isMDXComponent=!0},14033:function(e,t,n){t.Z=n.p+"assets/files/BEP20Token-90279eb8ba08bbc0df679f37d7886d68.template"}}]);