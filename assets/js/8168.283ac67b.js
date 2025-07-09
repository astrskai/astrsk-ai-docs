/*! For license information please see 8168.283ac67b.js.LICENSE.txt */
"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[8168],{556:(t,e,r)=>{r.d(e,{g:()=>s,s:()=>n,w:()=>o});var a=r(4440);const s=a.i`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  :host {
    -webkit-font-smoothing: antialiased;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;a.i`
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    background-color: var(--canary-is-light, var(--canary-color-primary-90))
      var(--canary-is-dark, var(--canary-color-primary-80));
  }
  button:hover {
    background-color: var(--canary-is-light, var(--canary-color-primary-95))
      var(--canary-is-dark, var(--canary-color-primary-70));
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    font-weight: bold;
    color: var(--canary-color-gray-0);
  }
`;a.i`
  :host {
    display: contents;
  }

  input {
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    font-size: 1rem;
    color: var(--canary-color-gray-10);
    background-color: var(--canary-color-gray-100);
  }

  input::placeholder {
    color: var(--canary-color-gray-40);
    font-size: 0.875rem;
  }
`;a.i`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;const o=a.i`
  :host {
    display: contents;
  }
`,n=a.i`
  .scroll-container {
    overflow-y: auto;
    max-height: var(--canary-content-max-height, 650px);
    padding-left: 12px;
    padding-right: 2px;

    scrollbar-gutter: stable;

    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: var(--canary-color-gray-100);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--canary-is-light, var(--canary-color-gray-90));
      background-color: var(--canary-is-dark, var(--canary-color-gray-60));
      border-radius: 4px;
    }

    scrollbar-color: var(--canary-is-light, var(--canary-color-gray-90))
      var(--canary-is-dark, var(--canary-color-gray-60))
      var(--canary-color-gray-100);
  }
`;a.i`
  pre code {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: var(--canary-color-gray-100);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--canary-is-light, var(--canary-color-gray-90));
      background-color: var(--canary-is-dark, var(--canary-color-gray-60));
      border-radius: 4px;
    }

    scrollbar-color: var(--canary-is-light, var(--canary-color-gray-90))
      var(--canary-is-dark, var(--canary-color-gray-60))
      var(--canary-color-gray-100);
  }
`},2208:(t,e,r)=>{r.d(e,{b8:()=>b,lh:()=>v,y$:()=>p});var a=r(8030),s=r(6468),o=r(7879),n=r(4435),i=r(2551);const c="function"==typeof Symbol&&Symbol.observable||"@@observable";function l(t,e,r){var a,s,o;const n="object"==typeof t,i=n?t:void 0;return{next:null==(a=n?t.next:t)?void 0:a.bind(i),error:null==(s=n?t.error:e)?void 0:s.bind(i),complete:null==(o=n?t.complete:r)?void 0:o.bind(i)}}const u=new WeakMap;function h(t,e,r){let a,s;const o={context:t,status:"active",output:void 0,error:void 0};let n=o;const i=t=>{if(!s)return;const e=t.type,r=s.get(e);r&&r.forEach(e=>e(t))},h=function(t){return(e,r)=>{let a=e.context;const s=null==t?void 0:t[r.type],o=[],n={emit:t=>{o.push(t)}};if(!s)return[e,o];if("function"==typeof s)a=(t=>Object.assign({},a,null==s?void 0:s(t,r,n)))(a);else{const t={};for(const e of Object.keys(s)){const o=s[e];t[e]="function"==typeof o?o(a,r,n):o}a=Object.assign({},a,t)}return[{...e,context:a},o]}}(e);const d={on(t,e){s||(s=new Map);let r=s.get(t);r||(r=new Set,s.set(t,r));const a=e.bind(void 0);return r.add(a),{unsubscribe(){r.delete(a)}}},sessionId:Math.random().toString(36).slice(6),send(t){var e;null==(e=u.get(d))||e.forEach(e=>{var r;null==(r=e.next)||r.call(e,{type:"@xstate.event",event:t,sourceRef:void 0,actorRef:d,rootId:d.sessionId})}),function(t){var e;let r;[n,r]=h(n,t),null==(e=u.get(d))||e.forEach(e=>{var r;null==(r=e.next)||r.call(e,{type:"@xstate.snapshot",event:t,snapshot:n,actorRef:d,rootId:d.sessionId})}),null==a||a.forEach(t=>{var e;return null==(e=t.next)?void 0:e.call(t,n)}),r.forEach(i)}(t)},getSnapshot:()=>n,getInitialSnapshot:()=>o,subscribe(t){const e=l(t);return a??(a=new Set),a.add(e),{unsubscribe:()=>null==a?void 0:a.delete(e)}},[c](){return this},inspect:t=>{var e,r;const a=l(t);return u.set(d,u.get(d)??new Set),u.get(d).add(a),null==(e=a.next)||e.call(a,{type:"@xstate.actor",actorRef:d,rootId:d.sessionId}),null==(r=a.next)||r.call(a,{type:"@xstate.snapshot",snapshot:o,event:{type:"@xstate.init"},actorRef:d,rootId:d.sessionId}),{unsubscribe(){var t;return null==(t=u.get(d))?void 0:t.delete(a)}}}};return d}const d=()=>{try{return crypto.randomUUID()}catch(t){return Array(2).fill(null).map(()=>Math.random().toString(36).substring(2,15)).join("-")}},p=t=>{return e={session_id:d(),operation:new a.i(t,{context:s.LL,initialValue:{}}),mode:new a.i(t,{context:s.pC,initialValue:{options:new Set([]),default:null,current:null}}),filters:new a.i(t,{context:s.ld,initialValue:{}}),query:new a.i(t,{context:s.qD,initialValue:{text:"",tags:[]}}),executionManager:new o.E(t,{searchDebounceMs:50,askDebounceMs:0})},void 0===(r={register_operations:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),{operation:t.operation}),register_mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),{mode:t.mode}),set_filter:(t,{data:e})=>{const r=t.filters.value,a=t.executionManager.ctx,s={...r,[e.name]:{...r[e.name],...e.filter}},o={...a.search,matches:(0,i.W5)(a._search.matches,s)};return t.filters.setValue(s),t.executionManager.ctx={...a,search:o},{filters:t.filters,executionManager:t.executionManager}},set_mode:(t,{data:e})=>(t.mode.setValue({...t.mode.value,current:e}),e===n.M&&(t.executionManager.abort(),t.executionManager.search(t.session_id,t.query.value,t.operation.value,t.filters.value)),e===n.a&&(t.executionManager.abort(),t.executionManager.ask(t.session_id,t.query.value,t.operation.value,t.filters.value)),{mode:t.mode,session_id:d()}),set_query:(t,{data:e})=>{const r={...t.query.value,...e};return t.query.setValue(r,!0),t.mode.setValue({...t.mode.value,current:n.M}),t.executionManager.search(t.session_id,r,t.operation.value,t.filters.value),{query:t.query,mode:t.mode,session_id:0===r.text.length?d():t.session_id}}})?h(e.context,e.on):h(e,r);var e,r},b="canary-broadcast",v=t=>new CustomEvent(b,{detail:t,composed:!0,bubbles:!0})},2551:(t,e,r)=>{r.d(e,{Kl:()=>o,W5:()=>i,b2:()=>a,cM:()=>s});const a=t=>n(t).pathname.split("/").map((t,e)=>{const r=t.replace(/[-_]/g," ");return r.charAt(0).toUpperCase()+r.slice(1)}).map(t=>t.includes("#")?t.split("#")[0]:t).map(t=>t.endsWith(".html")?t.replace(".html",""):t).map(decodeURIComponent).filter(Boolean).slice(-4),s=async t=>new Promise(e=>setTimeout(e,t)),o=t=>{try{const{pathname:e,search:r}=n(t);return e+r}catch{return t}},n=t=>{const e=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(e)},i=(t,e)=>Object.entries(e).reduce((t,[e,{fn:r,args:a}])=>r(t,a),t)},4435:(t,e,r)=>{r.d(e,{M:()=>a,a:()=>s});const a="Search",s="Ask"},4715:(t,e,r)=>{r.d(e,{r:()=>s});var a=r(4676);function s(t){return(0,a.n)({...t,state:!0,attribute:!1})}},5787:(t,e,r)=>{r.r(e),r.d(e,{CanaryProviderPagefind:()=>b});var a=r(4440),s=r(4676),o=r(4715),n=r(2208),i=r(2551),c=r(556);function l(t){const e=new Map;return(...r)=>{const a=JSON.stringify(r);if(e.has(a))return e.get(a);const s=t(...r);return e.set(a,s),Promise.resolve(s).catch(()=>{e.delete(a)}),s}}var u=r(9938),h=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=(t,e,r,a)=>{for(var s,o=a>1?void 0:a?d(e,r):e,n=t.length-1;n>=0;n--)(s=t[n])&&(o=(a?s(e,r,o):s(o))||o);return a&&o&&h(e,r,o),o};let b=class extends a.s{constructor(){super(...arguments),this.options={},this._pagefind=null,this.beforeSearch=async({text:t})=>{this._pagefind.preload(t)},this.search=async({text:t,tags:e},r,a)=>{const s=this.options.maxPages??20,{results:o}=await this._pagefind.search(t),n=await Promise.all(o.slice(0,s).map(t=>t.data())).then(t=>t.filter(({meta:t})=>{const r=(t.tags??"").split(",").map(t=>t.trim()).filter(Boolean);return 0===r.length||r.some(t=>e.includes(t))}));return a.throwIfAborted(),{matches:this._transform(n)}}}async connectedCallback(){var t;super.connectedCallback();let e=window.pagefind;if(!e)try{e=await import((null==(t=this.options)?void 0:t.path)??"/pagefind/pagefind.js")}catch(r){return void console.info("Failed to import pagefind. Try serving app with production build.",r)}this._initPagefind(e),this.dispatchEvent((0,n.lh)({type:"register_operations",data:{search:l(this.search),beforeSearch:this.beforeSearch}}))}async _initPagefind(t){try{t.init(),this.options.pagefind&&await t.options(this.options.pagefind),this._pagefind=t}catch(e){throw new Error(`Failed to initialize pagefind': ${e}`)}}render(){return a.x`<slot></slot>`}_transform(t){const e=this.options.maxSubResults??3,r=t=>this.options._base?this.options._base+(0,i.Kl)(t.replace(this.options._replace||"","")):t,a=t=>t.weighted_locations.reduce((t,e)=>Math.max(t,e.balanced_score),-1);return t.sort((t,e)=>a(e.sub_results[0])-a(t.sub_results[0])).map(t=>{const a=t.sub_results.slice(0,e).map(t=>({url:r(t.url),title:t.title,excerpt:t.excerpt})).filter(({title:e},r)=>!(0==r&&e==t.meta.title));return{type:"webpage",meta:{},title:t.meta.title,url:r(t.url),excerpt:t.excerpt,sub_results:a}})}};b.styles=c.w,p([(0,s.n)({type:Object})],b.prototype,"options",2),p([(0,o.r)()],b.prototype,"_pagefind",2),b=p([(0,u.r)("canary-provider-pagefind")],b)},7879:(t,e,r)=>{r.d(e,{E:()=>c,T:()=>n});var a=r(8030),s=r(2551),o=r(6468);const n={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},i="manager";class c{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:n.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new a.i(t,{context:o.kF,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;null==(t=this._abortController)||t.abort(i)}transition(t){this.ctx={...this.ctx,...t}}async search(t,e,r,a){var o;if(!r.search)return;this.transition({status:n.PENDING}),this._abortController.abort(i);const c=++this._callId;if(null==(o=r.beforeSearch)||o.call(r,e),await(0,s.cM)(this._options.searchDebounceMs),c===this._callId){this._abortController=new AbortController;try{this.transition({status:n.PENDING});const o=await r.search(e,{session_id:t},this._abortController.signal);this.transition({status:n.COMPLETE,search:{...o,matches:(0,s.W5)(o.matches,a)},_search:{...o,matches:o.matches}})}catch(l){if(l===i||l instanceof Error&&"AbortError"===l.name)return void this.transition({status:n.INITIAL});console.error(l),this.transition({status:n.ERROR})}}}async ask(t,e,r,a){if(!r.ask)return;this.transition({...this._initialState,status:n.PENDING}),this._abortController.abort(i);const o=++this._callId;if(await(0,s.cM)(this._options.askDebounceMs),o===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:n.PENDING}),await r.ask(e,{session_id:t},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:n.COMPLETE})}catch(c){if(c===i||c instanceof Error&&"AbortError"===c.name)return void this.transition({status:n.INITIAL});console.error(c),this.transition({status:n.ERROR})}}}_handleDelta(t){this.transition({ask:t})}}},8030:(t,e,r)=>{r.d(e,{i:()=>n});var a=r(699);class s{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:a}=this.subscriptions.get(t);t(this.value,a)}clearCallbacks(){this.subscriptions.clear()}}class o extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class n extends s{constructor(t,e,r){var s,o;super(void 0!==e.context?e.initialValue:r),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const r=new Set;for(const[s,{consumerHost:o}]of this.subscriptions)r.has(s)||(r.add(s),o.dispatchEvent(new a.s(this.context,s,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(o=(s=this.host).addController)||o.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new o(this.context))}}}}]);