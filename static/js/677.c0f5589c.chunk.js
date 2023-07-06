"use strict";(self.webpackChunkweb3_boilerplate=self.webpackChunkweb3_boilerplate||[]).push([[677],{93207:function(e,t,i){function r(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}i.d(t,{n:function(){return r}})},70677:function(e,t,i){i.r(t),i.d(t,{PaperWalletConnector:function(){return h}});var r=i(95768),n=i(40744),s=i(86750),a=i(67608),o=i(28552),l=i(87311),c=i(93207),d=(i(52134),new WeakMap),u=new WeakMap;class h extends s.C{constructor(e){super(),(0,n._)(this,"id",l.w.paper),(0,n._)(this,"name","Paper Wallet"),(0,n._)(this,"ready",!0),(0,n._)(this,"user",null),(0,r._)(this,d,{writable:!0,value:void 0}),(0,n._)(this,"options",void 0),(0,r._)(this,u,{writable:!0,value:void 0}),(0,n._)(this,"onAccountsChanged",(async e=>{0===e.length?await this.onDisconnect():this.emit("change",{account:o.getAddress(e[0])})})),(0,n._)(this,"onChainChanged",(e=>{const t=(0,c.n)(e),i=-1===this.options.chains.findIndex((e=>e.chainId===t));this.emit("change",{chain:{id:t,unsupported:i}})})),(0,n._)(this,"onDisconnect",(async()=>{this.emit("disconnect")})),this.options=e}getPaperSDK(){return(0,r.b)(this,d)||(0,r.a)(this,d,new Promise((async(e,t)=>{try{const{PaperEmbeddedWalletSdk:t}=await Promise.resolve().then(i.bind(i,67608));e(new t({clientId:this.options.clientId,chain:"Ethereum"}))}catch(r){t(r)}}))),(0,r.b)(this,d)}async connect(e){const t=await this.getPaperSDK();if(!t)throw new Error("Paper SDK not initialized");let i=await t.getUser();switch(i.status){case a.UserStatus.LOGGED_OUT:{let i;i=e?.email?await t.auth.loginWithPaperEmailOtp({email:e.email}):await t.auth.loginWithPaperModal(),this.user=i.user;break}case a.UserStatus.LOGGED_IN_WALLET_INITIALIZED:this.user=i}if(!this.user)throw new Error("Error connecting User");return e?.chainId&&this.switchChain(e.chainId),this.setupListeners(),this.getAddress()}async disconnect(){const e=await(0,r.b)(this,d);await(e?.auth.logout()),this.user=null}async getAddress(){return(await this.getSigner()).getAddress()}async isConnected(){try{return!!await this.getAddress()}catch(e){return!1}}async getProvider(){const e=await this.getSigner();if(!e.provider)throw new Error("Provider not found");return e.provider}async getSigner(){if((0,r.b)(this,u))return(0,r.b)(this,u);if(!this.user){const e=await this.getPaperSDK();let t=await e.getUser();if(t.status===a.UserStatus.LOGGED_IN_WALLET_INITIALIZED)this.user=t}const e=await(this.user?.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]}));if(!e)throw new Error("Signer not found");return(0,r.a)(this,u,e),e}async isAuthorized(){return!1}async switchChain(e){const t=this.options.chains.find((t=>t.chainId===e));if(!t)throw new Error("Chain not configured");await(this.user?.wallet.setChain({chain:"Ethereum"})),(0,r.a)(this,u,await(this.user?.wallet.getEthersJsSigner({rpcEndpoint:t.rpc[0]}))),this.emit("change",{chain:{id:e,unsupported:!1}})}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}updateChains(e){this.options.chains=e}async getEmail(){if(await this.getProvider(),!this.user)throw new Error("No user found, Paper Wallet is not connected");return this.user.authDetails.email}}},67608:function(e,t,i){i.r(t),i.d(t,{AUTH_TOKEN_LOCAL_STORAGE_NAME:function(){return L},AuthProvider:function(){return O},DEVICE_SHARE_LOCAL_STORAGE_NAME:function(){return A},DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED:function(){return S},PaperEmbeddedWalletSdk:function(){return Q},RecoveryShareManagement:function(){return _},UserStatus:function(){return C},UserWalletStatus:function(){return D},WALLET_USER_ID_LOCAL_STORAGE_NAME:function(){return E}});var r,n,s={Ethereum:"https://rpc.ankr.com/eth",Goerli:"https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",Mumbai:"https://rpc-mumbai.maticvigil.com",Polygon:"https://rpc-mainnet.maticvigil.com",Avalanche:"https://api.avax.network/ext/bc/C/rpc",Optimism:"https://optimism.rpc.thirdweb.com",OptimismGoerli:"https://optimism-goerli.rpc.thirdweb.com",BSC:"https://binance.rpc.thirdweb.com",BSCTestnet:"https://binance-testnet.rpc.thirdweb.com",ArbitrumOne:"https://arbitrum.rpc.thirdweb.com",ArbitrumGoerli:"https://arbitrum-goerli.rpc.thirdweb.com",Fantom:"https://fantom.rpc.thirdweb.com",FantomTestnet:"https://fantom-testnet.rpc.thirdweb.com"},a=()=>{var e;return"undefined"!=typeof window&&"true"===window.localStorage.getItem("IS_PAPER_DEV")?null!=(e=window.localStorage.getItem("PAPER_DEV_URL"))?e:"http://localhost:3000":"undefined"!=typeof window&&window.location.origin.includes("paper.xyz")?window.location.origin:"https://withpaper.com"},o=i(64093),l=i(72388),c=i(54812),d=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,I=(e,t,i)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,w=(e,t)=>{for(var i in t||(t={}))g.call(t,i)&&I(e,i,t[i]);if(p)for(var i of p(t))m.call(t,i)&&I(e,i,t[i]);return e},y=(e,t)=>u(e,h(t)),v=(e,t,i)=>new Promise(((r,n)=>{var s=e=>{try{o(i.next(e))}catch(t){n(t)}},a=e=>{try{o(i.throw(e))}catch(t){n(t)}},o=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);o((i=i.apply(e,t)).next())})),f="/sdk/2022-08-12/embedded-wallet",E=e=>`paperEwsWalletUserId-${e}`,L=e=>`walletToken-${e}`,A=(e,t)=>`a-${e}-${t}`,S=e=>`a-${e}`,_=((r=_||{}).USER_MANAGED="USER_MANAGED",r.AWS_MANAGED="AWS_MANAGED",r),O=(e=>(e.PAPER_EMAIL_OTP="PaperEmailOTP",e.GOOGLE="Google",e.TWITTER="Twitter",e.COGNITO="Cognito",e.AUTH0="Auth0",e.CUSTOM_JWT="CustomJWT",e))(O||{}),C=(e=>(e.LOGGED_OUT="Logged Out",e.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",e))(C||{}),D=((n=D||{}).LOGGED_OUT="Logged Out",n.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",n.LOGGED_IN_NEW_DEVICE="Logged In, New Device",n.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",n),P=new Map,M=class{constructor(e){let{clientId:t}=e;this.isSupported="undefined"!=typeof window&&!!window.localStorage,this.clientId=t}getItem(e){return v(this,null,(function*(){var t;return this.isSupported?window.localStorage.getItem(e):null!=(t=P.get(e))?t:null}))}setItem(e,t){return v(this,null,(function*(){if(this.isSupported)return window.localStorage.setItem(e,t);P.set(e,t)}))}removeItem(e){return v(this,null,(function*(){let t=yield this.getItem(e);return!(!this.isSupported||!t)&&(window.localStorage.removeItem(e),!0)}))}saveAuthCookie(e){return v(this,null,(function*(){yield this.setItem(L(this.clientId),e)}))}getAuthCookie(){return v(this,null,(function*(){return this.getItem(L(this.clientId))}))}removeAuthCookie(){return v(this,null,(function*(){return this.removeItem(L(this.clientId))}))}saveDeviceShare(e,t){return v(this,null,(function*(){yield this.saveWalletUserId(t),yield this.setItem(A(this.clientId,t),e)}))}getDeviceShare(){return v(this,null,(function*(){let e=yield this.getWalletUserId();return e?this.getItem(A(this.clientId,e)):null}))}removeDeviceShare(){return v(this,null,(function*(){let e=yield this.getWalletUserId();return!!e&&this.removeItem(A(this.clientId,e))}))}getWalletUserId(){return v(this,null,(function*(){return this.getItem(E(this.clientId))}))}saveWalletUserId(e){return v(this,null,(function*(){yield this.setItem(E(this.clientId),e)}))}removeWalletUserId(){return v(this,null,(function*(){return this.removeItem(E(this.clientId))}))}};function W(e){return new Promise((t=>{setTimeout(t,1e3*e)}))}var N={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},b=new Map;function T(e){let{clientId:t,path:i,queryParams:r}=e;var n;let s=new URL(i,a());if(r)for(let a of Object.keys(r))s.searchParams.set(a,(null==(n=r[a])?void 0:n.toString())||"");return s.searchParams.set("clientId",t),s}var U="paper-embedded-wallet-iframe",R=class{constructor(e){let{querier:t,preLogin:i,postLogin:r}=e;this.LoginQuerier=t,this.preLogin=i,this.postLogin=r}sendPaperEmailLoginOtp(e){return v(this,arguments,(function*(e){let{email:t,recoveryShareManagement:i}=e;yield this.preLogin();let{isNewUser:r,isNewDevice:n}=yield this.LoginQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:t,recoveryShareManagement:i}});return{isNewUser:r,isNewDevice:n}}))}},G=class extends R{loginWithPaperModal(){return v(this,null,(function*(){yield this.preLogin();let e=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(e)}))}loginWithPaperEmailOtp(e){return v(this,arguments,(function*(e){let{email:t}=e;yield this.preLogin();let i=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:t,recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(i)}))}verifyPaperEmailLoginOtp(e){return v(this,arguments,(function*(e){let{email:t,otp:i}=e,r=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:t,otp:i,recoveryShareManagement:"AWS_MANAGED"},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(r)}))}},k=class extends R{loginWithPaperModal(e){return v(this,null,(function*(){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:null==e?void 0:e.getRecoveryCode}});return this.postLogin(t)}))}loginWithPaperEmailOtp(e){return v(this,arguments,(function*(e){let{email:t,recoveryCode:i}=e;yield this.preLogin();let r=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:t,recoveryCode:i},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(r)}))}verifyPaperEmailLoginOtp(e){return v(this,arguments,(function*(e){let{email:t,otp:i,recoveryCode:r}=e,n=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:t,otp:i,recoveryCode:r},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(n)}))}},q=class{constructor(e){let{chain:t,clientId:i,querier:r}=e;this.chain=t,this.clientId=i,this.gaslessTransactionQuerier=r}callContract(e){return v(this,arguments,(function*(e){let{contractAddress:t,methodArgs:i,methodInterface:r}=e;return yield this.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:this.chain,contractAddress:t,method:{args:i,stub:r}}})}))}},j=class extends l.Signer{constructor(e){let{provider:t,clientId:i,querier:r}=e;var n;super(),this.DEFAULT_ETHEREUM_CHAIN_ID=5,this.clientId=i,this.querier=r,this.endpoint=null==(n=t.connection)?void 0:n.url,(0,c.defineReadOnly)(this,"provider",t)}getAddress(){return v(this,null,(function*(){let{address:e}=yield this.querier.call({procedureName:"getAddress",params:void 0});return e}))}signMessage(e){return v(this,null,(function*(){var t,i,r,n;let s=yield null==(t=this.provider)?void 0:t.getNetwork();s&&s._defaultProvider;let{signedMessage:a}=yield this.querier.call({procedureName:"signMessage",params:{message:e,chainId:null!=(n=null==(r=yield null==(i=this.provider)?void 0:i.getNetwork())?void 0:r.chainId)?n:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a}))}signTransaction(e){return v(this,null,(function*(){var t,i,r;let{signedTransaction:n}=yield this.querier.call({procedureName:"signTransaction",params:{transaction:e,chainId:null!=(r=null==(i=yield null==(t=this.provider)?void 0:t.getNetwork())?void 0:i.chainId)?r:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return n}))}_signTypedData(e,t,i){return v(this,null,(function*(){var r,n,s;let{signedTypedData:a}=yield this.querier.call({procedureName:"signTypedDataV4",params:{domain:e,types:t,message:i,chainId:null!=(s=null==(n=yield null==(r=this.provider)?void 0:r.getNetwork())?void 0:n.chainId)?s:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a}))}connect(e){return new j({clientId:this.clientId,provider:e,querier:this.querier})}},Q=class{constructor(e){let{clientId:t,chain:i,styles:r,advancedOptions:n}=e;this.clientId=t,this.querier=new class extends class{constructor(e){let{link:t,iframeId:i,container:r=document.body,iframeStyles:n,onIframeInitialize:s}=e;this.POLLING_INTERVAL_SECONDS=1.4,this.POST_LOAD_BUFFER_SECONDS=1;let a=document.getElementById(i),o=new URL(t),l="1.1.0";if(o.searchParams.set("sdkVersion",l),!a||a.src!=o.href){if(!a){a=document.createElement("iframe");let e=w(w({},N),n);Object.assign(a.style,e),a.setAttribute("id",i),a.setAttribute("fetchpriority","high"),r.appendChild(a)}a.src=o.href,a.setAttribute("data-version",l),a.onload=this.onIframeLoadHandler(a,this.POST_LOAD_BUFFER_SECONDS,s)}this.iframe=a}onIframeLoadedInitVariables(){return v(this,null,(function*(){return{}}))}onIframeLoadHandler(e,t,i){return()=>v(this,null,(function*(){yield new Promise(((r,n)=>v(this,null,(function*(){var s;let o=new MessageChannel;o.port1.onmessage=t=>{let{data:s}=t;return o.port1.close(),s.success?(b.set(e.src,!0),i&&i(),r(!0)):n(new Error(s.error))},yield W(t),null==(s=null==e?void 0:e.contentWindow)||s.postMessage({eventType:"initIframe",data:yield this.onIframeLoadedInitVariables()},`${a()}${f}`,[o.port2])}))))}))}call(e){return v(this,arguments,(function*(e){let{procedureName:t,params:i,showIframe:r=!1,injectRecoveryCode:n={isInjectRecoveryCode:!1}}=e;for(;!b.get(this.iframe.src);)yield W(this.POLLING_INTERVAL_SECONDS);return r&&(this.iframe.style.display="block",yield W(.005)),new Promise(((e,s)=>{var o;if(n.isInjectRecoveryCode){let e=t=>v(this,null,(function*(){var i,r;if(t.origin!==a()||"paper_getRecoveryCode"!==t.data.type||"string"!=typeof t.data.userWalletId)return;let s=yield null==(i=n.getRecoveryCode)?void 0:i.call(n,t.data.userWalletId);null==(r=this.iframe.contentWindow)||r.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:s},a()),window.removeEventListener("message",e)}));window.addEventListener("message",e)}let l=new MessageChannel;l.port1.onmessage=t=>v(this,null,(function*(){let{data:i}=t;l.port1.close(),r&&(yield W(.1),this.iframe.style.display="none"),i.success?e(i.data):s(new Error(i.error))})),null==(o=this.iframe.contentWindow)||o.postMessage({eventType:t,data:i},`${a()}${f}`,[l.port2])}))}))}destroy(){b.delete(this.iframe.src)}}{constructor(e){let{clientId:t,customizationOptions:i}=e;super({iframeId:U,link:T({clientId:t,path:f,queryParams:i}).href,container:document.body}),this.clientId=t}onIframeLoadedInitVariables(){return v(this,null,(function*(){let e=new M({clientId:this.clientId});return{authCookie:yield e.getAuthCookie(),deviceShareStored:yield e.getDeviceShare(),walletUserId:yield e.getWalletUserId(),clientId:this.clientId}}))}}({clientId:t,customizationOptions:r}),this.wallet=new class{constructor(e){let{clientId:t,chain:i,querier:r}=e;this.clientId=t,this.chain=i,this.walletManagerQuerier=r,this.gasless=new q({chain:i,clientId:t,querier:r}),this.localStorage=new M({clientId:t})}postWalletSetUp(e){return v(this,arguments,(function*(e){let{deviceShareStored:t,walletAddress:i,isIframeStorageEnabled:r,walletUserId:n}=e;return r||(yield this.localStorage.saveDeviceShare(t,n)),{walletAddress:i}}))}getUserWalletStatus(){return v(this,null,(function*(){let e=yield this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return"Logged In, Wallet Initialized"===e.status?{status:"Logged In, Wallet Initialized",user:y(w({},e.user),{wallet:this})}:e}))}setChain(e){return v(this,arguments,(function*(e){let{chain:t}=e;this.chain=t,this.gasless=new q({chain:t,clientId:this.clientId,querier:this.walletManagerQuerier})}))}getEthersJsSigner(e){return v(this,null,(function*(){var t;return new j({clientId:this.clientId,provider:(0,o.getDefaultProvider)(null!=(t=null==e?void 0:e.rpcEndpoint)?t:s[this.chain]),querier:this.walletManagerQuerier})}))}}({clientId:t,chain:i,querier:this.querier}),this.auth=new class{constructor(e){let{clientId:t,advancedOptions:i,querier:r,onAuthSuccess:n}=e;var s;this.clientId=t,this.advancedOptions={recoveryShareManagement:null!=(s=null==i?void 0:i.recoveryShareManagement)?s:"AWS_MANAGED"},this.AuthQuerier=r,this.localStorage=new M({clientId:t}),this.onAuthSuccess=n,this.userManagedLogin=new k({postLogin:e=>v(this,null,(function*(){return this.postLogin(e)})),preLogin:()=>v(this,null,(function*(){yield this.preLogin()})),querier:r}),this.awsManagedLogin=new G({postLogin:e=>v(this,null,(function*(){return this.postLogin(e)})),preLogin:()=>v(this,null,(function*(){yield this.preLogin()})),querier:r})}preLogin(){return v(this,null,(function*(){yield this.logout()}))}postLogin(e){return v(this,arguments,(function*(e){let{storedToken:t,walletDetails:i}=e;return t.shouldStoreCookieString&&(yield this.localStorage.saveAuthCookie(t.cookieString)),yield this.onAuthSuccess({storedToken:t,walletDetails:i})}))}loginWithJwtAuth(e){return v(this,arguments,(function*(e){let{token:t,authProvider:i,recoveryCode:r}=e;yield this.preLogin();let n=yield this.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:t,authProvider:i,recoveryCode:r}});return this.postLogin(n)}))}loginWithPaperModal(e){return v(this,null,(function*(){return yield this.preLogin(),"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperModal():this.userManagedLogin.loginWithPaperModal(e)}))}loginWithPaperEmailOtp(e){return v(this,null,(function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperEmailOtp({email:e.email}):this.userManagedLogin.loginWithPaperEmailOtp(e)}))}sendPaperEmailLoginOtp(e){return v(this,arguments,(function*(e){let{email:t}=e;return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.sendPaperEmailLoginOtp({email:t,recoveryShareManagement:"AWS_MANAGED"}):this.userManagedLogin.sendPaperEmailLoginOtp({email:t})}))}verifyPaperEmailLoginOtp(e){return v(this,null,(function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.verifyPaperEmailLoginOtp(e):this.userManagedLogin.verifyPaperEmailLoginOtp(e)}))}logout(){return v(this,null,(function*(){let{success:e}=yield this.AuthQuerier.call({procedureName:"logout",params:void 0}),t=yield this.localStorage.removeAuthCookie(),i=yield this.localStorage.removeWalletUserId();return{success:e||t||i}}))}}({clientId:t,advancedOptions:w({recoveryShareManagement:"USER_MANAGED"},null!=n?n:{}),querier:this.querier,onAuthSuccess:e=>v(this,null,(function*(){return yield this.wallet.postWalletSetUp(y(w({},e.walletDetails),{walletUserId:e.storedToken.authDetails.userWalletId})),{user:{status:"Logged In, Wallet Initialized",authDetails:e.storedToken.authDetails,wallet:this.wallet,walletAddress:e.walletDetails.walletAddress}}}))})}getUser(){return v(this,null,(function*(){let e=yield this.wallet.getUserWalletStatus();switch(e.status){case"Logged In, New Device":case"Logged In, Wallet Uninitialized":return yield this.auth.logout(),this.getUser();case"Logged Out":return{status:"Logged Out"};case"Logged In, Wallet Initialized":return w({status:"Logged In, Wallet Initialized"},e.user)}}))}}}}]);