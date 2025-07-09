/*! For license information please see 2756.84e1eaf6.js.LICENSE.txt */
"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[2756],{556:(r,t,a)=>{a.d(t,{g:()=>o,s:()=>n,w:()=>s});var e=a(4440);const o=e.i`
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
`;e.i`
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
`;e.i`
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
`;e.i`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;const s=e.i`
  :host {
    display: contents;
  }
`,n=e.i`
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
`;e.i`
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
`},2208:(r,t,a)=>{a.d(t,{b8:()=>v,lh:()=>p,y$:()=>d});var e=a(8030),o=a(6468),s=a(7879),n=a(4435),c=a(2551);const i="function"==typeof Symbol&&Symbol.observable||"@@observable";function l(r,t,a){var e,o,s;const n="object"==typeof r,c=n?r:void 0;return{next:null==(e=n?r.next:r)?void 0:e.bind(c),error:null==(o=n?r.error:t)?void 0:o.bind(c),complete:null==(s=n?r.complete:a)?void 0:s.bind(c)}}const h=new WeakMap;function y(r,t,a){let e,o;const s={context:r,status:"active",output:void 0,error:void 0};let n=s;const c=r=>{if(!o)return;const t=r.type,a=o.get(t);a&&a.forEach(t=>t(r))},y=function(r){return(t,a)=>{let e=t.context;const o=null==r?void 0:r[a.type],s=[],n={emit:r=>{s.push(r)}};if(!o)return[t,s];if("function"==typeof o)e=(r=>Object.assign({},e,null==o?void 0:o(r,a,n)))(e);else{const r={};for(const t of Object.keys(o)){const s=o[t];r[t]="function"==typeof s?s(e,a,n):s}e=Object.assign({},e,r)}return[{...t,context:e},s]}}(t);const u={on(r,t){o||(o=new Map);let a=o.get(r);a||(a=new Set,o.set(r,a));const e=t.bind(void 0);return a.add(e),{unsubscribe(){a.delete(e)}}},sessionId:Math.random().toString(36).slice(6),send(r){var t;null==(t=h.get(u))||t.forEach(t=>{var a;null==(a=t.next)||a.call(t,{type:"@xstate.event",event:r,sourceRef:void 0,actorRef:u,rootId:u.sessionId})}),function(r){var t;let a;[n,a]=y(n,r),null==(t=h.get(u))||t.forEach(t=>{var a;null==(a=t.next)||a.call(t,{type:"@xstate.snapshot",event:r,snapshot:n,actorRef:u,rootId:u.sessionId})}),null==e||e.forEach(r=>{var t;return null==(t=r.next)?void 0:t.call(r,n)}),a.forEach(c)}(r)},getSnapshot:()=>n,getInitialSnapshot:()=>s,subscribe(r){const t=l(r);return e??(e=new Set),e.add(t),{unsubscribe:()=>null==e?void 0:e.delete(t)}},[i](){return this},inspect:r=>{var t,a;const e=l(r);return h.set(u,h.get(u)??new Set),h.get(u).add(e),null==(t=e.next)||t.call(e,{type:"@xstate.actor",actorRef:u,rootId:u.sessionId}),null==(a=e.next)||a.call(e,{type:"@xstate.snapshot",snapshot:s,event:{type:"@xstate.init"},actorRef:u,rootId:u.sessionId}),{unsubscribe(){var r;return null==(r=h.get(u))?void 0:r.delete(e)}}}};return u}const u=()=>{try{return crypto.randomUUID()}catch(r){return Array(2).fill(null).map(()=>Math.random().toString(36).substring(2,15)).join("-")}},d=r=>{return t={session_id:u(),operation:new e.i(r,{context:o.LL,initialValue:{}}),mode:new e.i(r,{context:o.pC,initialValue:{options:new Set([]),default:null,current:null}}),filters:new e.i(r,{context:o.ld,initialValue:{}}),query:new e.i(r,{context:o.qD,initialValue:{text:"",tags:[]}}),executionManager:new s.E(r,{searchDebounceMs:50,askDebounceMs:0})},void 0===(a={register_operations:(r,{data:t})=>(r.operation.setValue({...r.operation.value,...t}),{operation:r.operation}),register_mode:(r,{data:t})=>(r.mode.setValue({options:r.mode.value.options.add(t),current:r.mode.value.current??t,default:r.mode.value.default??t}),{mode:r.mode}),set_filter:(r,{data:t})=>{const a=r.filters.value,e=r.executionManager.ctx,o={...a,[t.name]:{...a[t.name],...t.filter}},s={...e.search,matches:(0,c.W5)(e._search.matches,o)};return r.filters.setValue(o),r.executionManager.ctx={...e,search:s},{filters:r.filters,executionManager:r.executionManager}},set_mode:(r,{data:t})=>(r.mode.setValue({...r.mode.value,current:t}),t===n.M&&(r.executionManager.abort(),r.executionManager.search(r.session_id,r.query.value,r.operation.value,r.filters.value)),t===n.a&&(r.executionManager.abort(),r.executionManager.ask(r.session_id,r.query.value,r.operation.value,r.filters.value)),{mode:r.mode,session_id:u()}),set_query:(r,{data:t})=>{const a={...r.query.value,...t};return r.query.setValue(a,!0),r.mode.setValue({...r.mode.value,current:n.M}),r.executionManager.search(r.session_id,a,r.operation.value,r.filters.value),{query:r.query,mode:r.mode,session_id:0===a.text.length?u():r.session_id}}})?y(t.context,t.on):y(t,a);var t,a},v="canary-broadcast",p=r=>new CustomEvent(v,{detail:r,composed:!0,bubbles:!0})},2551:(r,t,a)=>{a.d(t,{Kl:()=>s,W5:()=>c,b2:()=>e,cM:()=>o});const e=r=>n(r).pathname.split("/").map((r,t)=>{const a=r.replace(/[-_]/g," ");return a.charAt(0).toUpperCase()+a.slice(1)}).map(r=>r.includes("#")?r.split("#")[0]:r).map(r=>r.endsWith(".html")?r.replace(".html",""):r).map(decodeURIComponent).filter(Boolean).slice(-4),o=async r=>new Promise(t=>setTimeout(t,r)),s=r=>{try{const{pathname:t,search:a}=n(r);return t+a}catch{return r}},n=r=>{const t=r.startsWith("http")?r:r.startsWith("/")?`https://example.com${r}`:`https://example.com/${r}`;return new URL(t)},c=(r,t)=>Object.entries(t).reduce((r,[t,{fn:a,args:e}])=>a(r,e),r)},2756:(r,t,a)=>{a.r(t),a.d(t,{CanaryRoot:()=>m});var e=a(4440),o=a(4676),s=a(9938),n=a(2208),c=a(556),i=a(8030),l=a(6468);class h{constructor(r,{target:t,config:a,callback:e,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=r,null!==t&&this.t.add(t??r),this.l=a,this.o=o??this.o,this.callback=e,window.MutationObserver?(this.u=new MutationObserver(r=>{this.handleChanges(r),this.h.requestUpdate()}),r.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(r){var t;this.value=null==(t=this.callback)?void 0:t.call(this,r,this.u)}hostConnected(){for(const r of this.t)this.observe(r)}hostDisconnected(){this.disconnect()}async hostUpdated(){const r=this.u.takeRecords();(r.length||!this.o&&this.i)&&this.handleChanges(r),this.i=!1}observe(r){this.t.add(r),this.u.observe(r,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}var y=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=(r,t,a,e)=>{for(var o,s=e>1?void 0:e?u(t,a):t,n=r.length-1;n>=0;n--)(o=r[n])&&(s=(e?o(t,a,s):o(s))||s);return e&&s&&y(t,a,s),s};let v=class extends e.s{constructor(){super(...arguments),this.framework="starlight",this.theme="light"}connectedCallback(){super.connectedCallback(),this._handleThemeChange()}render(){return e.x`<slot></slot>`}_handleThemeChange(){const[r]=document.getElementsByTagName("html"),t=["vitepress","nextra"].includes(this.framework),a=r=>t?r.classList.contains("dark")?"dark":"light":r.getAttribute("data-theme")||this.theme;this.theme=a(r),new h(this,{target:r,config:{attributeFilter:[t?"class":"data-theme"]},callback:r=>{var t;const e=null==(t=r[0])?void 0:t.target;if(!e)return this.theme;this.theme=a(e)}})}};v.styles=[c.w,e.i`
      :host {
        font-family: var(
          --canary-font-family-base,
          Arial,
          Helvetica,
          sans-serif
        );
        --canary-font-family-mono: Consolas, Monaco, Lucida Console;
      }
    `,e.i`
      :host {
        --canary-is-light: initial;
        --canary-is-dark: ;

        --l-0: 0%;
        --l-5: 0%;
        --l-10: 10%;
        --l-20: 20%;
        --l-30: 30%;
        --l-40: 40%;
        --l-50: 50%;
        --l-60: 60%;
        --l-70: 70%;
        --l-80: 80%;
        --l-90: 90%;
        --l-95: 95%;
        --l-100: 100%;
      }

      :host([theme="dark"]) {
        --canary-is-light: ;
        --canary-is-dark: initial;

        --l-0: 100%;
        --l-5: 95%;
        --l-10: 90%;
        --l-20: 80%;
        --l-30: 70%;
        --l-40: 60%;
        --l-50: 50%;
        --l-60: 40%;
        --l-70: 30%;
        --l-80: 20%;
        --l-90: 10%;
        --l-95: 5%;
        --l-100: 0%;
      }
    `,e.i`
      :host {
        --_canary-color-primary-c: var(--canary-color-primary-c, 0.1);
        --_canary-color-primary-h: var(--canary-color-primary-h, 270);
        --canary-color-primary-ch: var(--_canary-color-primary-c) var(--_canary-color-primary-h);

        --_canary-color-gray-c: var(--canary-color-gray-c, 0);
        --_canary-color-gray-h: var(--canary-color-gray-h, 0);
        --canary-color-gray-ch: var(--_canary-color-gray-c) var(--_canary-color-gray-h);

        --canary-color-backdrop-overlay: oklch(var(--l-80) var(--_canary-color-gray-ch) / 0.66);

        --canary-color-primary-0: oklch(var(--l-0) var(--canary-color-primary-ch));
        --canary-color-primary-5: oklch(var(--l-5) var(--canary-color-primary-ch));
        --canary-color-primary-10: oklch(var(--l-10) var(--canary-color-primary-ch));
        --canary-color-primary-20: oklch(var(--l-20) var(--canary-color-primary-ch));
        --canary-color-primary-30: oklch(var(--l-30) var(--canary-color-primary-ch));
        --canary-color-primary-40: oklch(var(--l-40) var(--canary-color-primary-ch));
        --canary-color-primary-50: oklch(var(--l-50) var(--canary-color-primary-ch));
        --canary-color-primary-60: oklch(var(--l-60) var(--canary-color-primary-ch));
        --canary-color-primary-70: oklch(var(--l-70) var(--canary-color-primary-ch));
        --canary-color-primary-80: oklch(var(--l-80) var(--canary-color-primary-ch));
        --canary-color-primary-90: oklch(var(--l-90) var(--canary-color-primary-ch));
        --canary-color-primary-95: oklch(var(--l-95) var(--canary-color-primary-ch));
        --canary-color-primary-100: oklch(var(--l-100) var(--canary-color-primary-ch));
        
        --canary-color-gray-0: oklch(var(--l-0) var(--canary-color-gray-ch));
        --canary-color-gray-5: oklch(var(--l-5) var(--canary-color-gray-ch));
        --canary-color-gray-10: oklch(var(--l-10) var(--canary-color-gray-ch));
        --canary-color-gray-20: oklch(var(--l-20) var(--canary-color-gray-ch));
        --canary-color-gray-30: oklch(var(--l-30) var(--canary-color-gray-ch));
        --canary-color-gray-40: oklch(var(--l-40) var(--canary-color-gray-ch));
        --canary-color-gray-50: oklch(var(--l-50) var(--canary-color-gray-ch));
        --canary-color-gray-60: oklch(var(--l-60) var(--canary-color-gray-ch));
        --canary-color-gray-70: oklch(var(--l-70) var(--canary-color-gray-ch));
        --canary-color-gray-80: oklch(var(--l-80) var(--canary-color-gray-ch));
        --canary-color-gray-90: oklch(var(--l-90) var(--canary-color-gray-ch));
        --canary-color-gray-95: oklch(var(--l-95) var(--canary-color-gray-ch));
        --canary-color-gray-100: oklch(var(--l-100) var(--canary-color-gray-ch));
      }
    `],d([(0,o.n)({type:String})],v.prototype,"framework",2),d([function({context:r}){return(t,a)=>{const e=new WeakMap;if("object"==typeof a)return a.addInitializer(function(){e.set(this,new i.i(this,{context:r}))}),{get(){return t.get.call(this)},set(r){var a;return null==(a=e.get(this))||a.setValue(r),t.set.call(this,r)},init(r){var t;return null==(t=e.get(this))||t.setValue(r),r}};{t.constructor.addInitializer(t=>{e.set(t,new i.i(t,{context:r}))});const o=Object.getOwnPropertyDescriptor(t,a);let s;if(void 0===o){const r=new WeakMap;s={get(){return r.get(this)},set(t){e.get(this).setValue(t),r.set(this,t)},configurable:!0,enumerable:!0}}else{const r=o.set;s={...o,set(t){e.get(this).setValue(t),null==r||r.call(this,t)}}}return void Object.defineProperty(t,a,s)}}}({context:l.br}),(0,o.n)({type:String,reflect:!0})],v.prototype,"theme",2),v=d([(0,s.r)("canary-styles")],v);var p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,b=(r,t,a,e)=>{for(var o,s=e>1?void 0:e?g(t,a):t,n=r.length-1;n>=0;n--)(o=r[n])&&(s=(e?o(t,a,s):o(s))||s);return e&&s&&p(t,a,s),s};let m=class extends e.s{constructor(){super(...arguments),this.framework="starlight",this.query="",this._store=(0,n.y$)(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(n.b8,r=>{this._store.send(r.detail)})}firstUpdated(){this.query&&(this._store.send({type:"set_query",data:{text:"..."}}),setTimeout(()=>{this._store.send({type:"set_query",data:{text:this.query}})},200))}render(){return e.x`<canary-styles framework=${this.framework}>
      <slot></slot>
    </canary-styles>`}};m.styles=c.w,b([(0,o.n)({type:String})],m.prototype,"framework",2),b([(0,o.n)({type:String})],m.prototype,"query",2),m=b([(0,s.r)("canary-root")],m)},4435:(r,t,a)=>{a.d(t,{M:()=>e,a:()=>o});const e="Search",o="Ask"},7879:(r,t,a)=>{a.d(t,{E:()=>i,T:()=>n});var e=a(8030),o=a(2551),s=a(6468);const n={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},c="manager";class i{constructor(r,t){this._abortController=new AbortController,this._callId=0,this._initialState={status:n.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=t,this._ctx=new e.i(r,{context:s.kF,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(r){this._ctx.setValue(r)}abort(){var r;null==(r=this._abortController)||r.abort(c)}transition(r){this.ctx={...this.ctx,...r}}async search(r,t,a,e){var s;if(!a.search)return;this.transition({status:n.PENDING}),this._abortController.abort(c);const i=++this._callId;if(null==(s=a.beforeSearch)||s.call(a,t),await(0,o.cM)(this._options.searchDebounceMs),i===this._callId){this._abortController=new AbortController;try{this.transition({status:n.PENDING});const s=await a.search(t,{session_id:r},this._abortController.signal);this.transition({status:n.COMPLETE,search:{...s,matches:(0,o.W5)(s.matches,e)},_search:{...s,matches:s.matches}})}catch(l){if(l===c||l instanceof Error&&"AbortError"===l.name)return void this.transition({status:n.INITIAL});console.error(l),this.transition({status:n.ERROR})}}}async ask(r,t,a,e){if(!a.ask)return;this.transition({...this._initialState,status:n.PENDING}),this._abortController.abort(c);const s=++this._callId;if(await(0,o.cM)(this._options.askDebounceMs),s===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:n.PENDING}),await a.ask(t,{session_id:r},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:n.COMPLETE})}catch(i){if(i===c||i instanceof Error&&"AbortError"===i.name)return void this.transition({status:n.INITIAL});console.error(i),this.transition({status:n.ERROR})}}}_handleDelta(r){this.transition({ask:r})}}},8030:(r,t,a)=>{a.d(t,{i:()=>n});var e=a(699);class o{get value(){return this.o}set value(r){this.setValue(r)}setValue(r,t=!1){const a=t||!Object.is(r,this.o);this.o=r,a&&this.updateObservers()}constructor(r){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:t}]of this.subscriptions)r(this.o,t)},void 0!==r&&(this.value=r)}addCallback(r,t,a){if(!a)return void r(this.value);this.subscriptions.has(r)||this.subscriptions.set(r,{disposer:()=>{this.subscriptions.delete(r)},consumerHost:t});const{disposer:e}=this.subscriptions.get(r);r(this.value,e)}clearCallbacks(){this.subscriptions.clear()}}class s extends Event{constructor(r){super("context-provider",{bubbles:!0,composed:!0}),this.context=r}}class n extends o{constructor(r,t,a){var o,s;super(void 0!==t.context?t.initialValue:a),this.onContextRequest=r=>{const t=r.composedPath()[0];r.context===this.context&&t!==this.host&&(r.stopPropagation(),this.addCallback(r.callback,t,r.subscribe))},this.onProviderRequest=r=>{const t=r.composedPath()[0];if(r.context!==this.context||t===this.host)return;const a=new Set;for(const[o,{consumerHost:s}]of this.subscriptions)a.has(o)||(a.add(o),s.dispatchEvent(new e.s(this.context,o,!0)));r.stopPropagation()},this.host=r,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),null==(s=(o=this.host).addController)||s.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new s(this.context))}}}}]);