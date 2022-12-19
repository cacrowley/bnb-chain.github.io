"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3831],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(t),h=o,p=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return t?a.createElement(p,c(c({ref:n},l),{},{components:t})):a.createElement(p,c({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<r;u++)c[u]=t[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65085:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>c,metadata:()=>i,toc:()=>s,default:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={},c="Accounts",i={unversionedId:"beaconchain/learn/accounts",id:"beaconchain/learn/accounts",isDocsHomePage:!1,title:"Accounts",description:"Whenever a new address receives an asset, the corresponding transaction would create an Account for that address, which contains balances across all assets that are owned on this address.",source:"@site/docs/beaconchain/learn/accounts.md",sourceDirName:"beaconchain/learn",slug:"/beaconchain/learn/accounts",permalink:"/docs/beaconchain/learn/accounts",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/learn/accounts.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Governance",permalink:"/docs/beaconchain/governance"},next:{title:"Purely-Code-Controlled Escrow Accounts",permalink:"/docs/beaconchain/learn/escrow-accounts"}},s=[{value:"Account Balance",id:"account-balance",children:[],level:2},{value:"Account and Sequence Number",id:"account-and-sequence-number",children:[],level:2}],u={toc:s};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"Whenever a new address receives an asset, the corresponding transaction would create an Account for that address, which contains balances across all assets that are owned on this address."),(0,o.kt)("h2",{id:"account-balance"},"Account Balance"),(0,o.kt)("p",null,"The balance (the amount of tokens) of each asset is composed of 3 different parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Available: the amount of tokens that can be transferred, and spent to swap (buy) other assets"),(0,o.kt)("li",{parentName:"ul"},"Locked: the amount of tokens that has been used in any outstanding orders. Once the order terminates (either filled, canceled or expired), the locked amount will decrease."),(0,o.kt)("li",{parentName:"ul"},"Frozen: the amount of tokens that has been frozen via Freeze transactions.")),(0,o.kt)("p",null,"You can query the account info with the following command on mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bnbcli account <your-address> --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443 --indent --trust-node\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("p",null,"Please note that the amount is boosted by e^8 for the decimal part."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"type":"bnbchain/Account","value":{"base":{"address":"tbnb1sylyjw032eajr9cyllp26n04300qzzre38qyv5","coins":[{"denom":"000-0E1","amount":"10530"},{"denom":"BNB","amount":"247349863800"},{"denom":"BTC.B-918","amount":"113218800"},{"denom":"COSMOS-587","amount":"50000101983748977"},{"denom":"EDU-DD0","amount":"139885964"},{"denom":"MFH-9B5","amount":"1258976083286"},{"denom":"NASC-137","amount":"0"},{"denom":"PPC-00A","amount":"205150260"},{"denom":"TGT-9FC","amount":"33251102828"},{"denom":"UCX-CC8","amount":"1398859649"},{"denom":"USDT.B-B7C","amount":"140456966268"},{"denom":"YLC-D8B","amount":"210572645"},{"denom":"ZZZ-21E","amount":"13988596"}],"public_key":{"type":"tendermint/PubKeySecp256k1","value":"AhOb3ZXecsIqwqKw+HhTscyi6K35xYpKaJx10yYwE0Qa"},"account_number":"406226","sequence":"29"},"name":"","frozen":null,"locked":[{"denom":"KOGE48-35D","amount":"10000000000"}]}}\n')),(0,o.kt)("p",null,"From the output you can see that this account account_number is 406226 and its sequence is 29. This is the important information about this account."),(0,o.kt)("h2",{id:"account-and-sequence-number"},"Account and Sequence Number"),(0,o.kt)("p",null,"After Account is created, besides the balances, Account also contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Account Number: an internal identifier for the account"),(0,o.kt)("li",{parentName:"ul"},"Sequence Number: an ever-changing integer.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Sequence Number")," is the way how Beacon Chain  prevents Replay Attack (the idea is borrowed from Cosmos network, but varies a bit in handling). Every transaction should have a new Sequence Number increased by 1 from the current latest sequence number of the Account, and after this transaction is recorded on the blockchain, the Sequence Number will be set to the same number as the one of latest transaction."),(0,o.kt)("p",null,"This logic forces the client to be aware of the current Sequence Number, either by reading from the blockchain via API, or keep the counting locally by themselves. The recommended way is to keep counting locally and re-synchronize from the blockchain periodically."))}l.isMDXComponent=!0}}]);