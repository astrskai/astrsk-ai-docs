/*! For license information please see 6428.1a44731a.js.LICENSE.txt */
"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[6428],{556:(t,e,s)=>{s.d(e,{g:()=>o,s:()=>i,w:()=>a});var r=s(4440);const o=r.i`
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
`;r.i`
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
`;r.i`
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
`;r.i`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;const a=r.i`
  :host {
    display: contents;
  }
`,i=r.i`
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
`;r.i`
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
`},1674:(t,e,s)=>{s.d(e,{e:()=>d,n:()=>b});var r=s(4440),o=s(7319);const a=(t,e)=>{var s;const r=t._$AN;if(void 0===r)return!1;for(const o of r)null==(s=o._$AO)||s.call(o,e,!1),a(o,e);return!0},i=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},n=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),h(e)}};function c(t){void 0!==this._$AN?(i(this),this._$AM=t,n(this)):this._$AM=t}function l(t,e=!1,s=0){const r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(r))for(let n=s;n<r.length;n++)a(r[n],!1),i(r[n]);else null!=r&&(a(r,!1),i(r));else a(this,t)}const h=t=>{t.type==o.t.CHILD&&(t._$AP??(t._$AP=l),t._$AQ??(t._$AQ=c))};class u extends o.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),n(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?null==(s=this.reconnected)||s.call(this):null==(r=this.disconnected)||r.call(this)),e&&(a(this,t),i(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const d=()=>new v;class v{}const p=new WeakMap,b=(0,o.e)(class extends u{render(t){return r.T}update(t,[e]){var s;const o=e!==this.Y;return o&&void 0!==this.Y&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(s=t.options)?void 0:s.host,this.rt(this.ct=t.element)),r.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let s=p.get(e);void 0===s&&(s=new WeakMap,p.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=p.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},2208:(t,e,s)=>{s.d(e,{b8:()=>p,lh:()=>b,y$:()=>v});var r=s(8030),o=s(6468),a=s(7879),i=s(4435),n=s(2551);const c="function"==typeof Symbol&&Symbol.observable||"@@observable";function l(t,e,s){var r,o,a;const i="object"==typeof t,n=i?t:void 0;return{next:null==(r=i?t.next:t)?void 0:r.bind(n),error:null==(o=i?t.error:e)?void 0:o.bind(n),complete:null==(a=i?t.complete:s)?void 0:a.bind(n)}}const h=new WeakMap;function u(t,e,s){let r,o;const a={context:t,status:"active",output:void 0,error:void 0};let i=a;const n=t=>{if(!o)return;const e=t.type,s=o.get(e);s&&s.forEach(e=>e(t))},u=function(t){return(e,s)=>{let r=e.context;const o=null==t?void 0:t[s.type],a=[],i={emit:t=>{a.push(t)}};if(!o)return[e,a];if("function"==typeof o)r=(t=>Object.assign({},r,null==o?void 0:o(t,s,i)))(r);else{const t={};for(const e of Object.keys(o)){const a=o[e];t[e]="function"==typeof a?a(r,s,i):a}r=Object.assign({},r,t)}return[{...e,context:r},a]}}(e);const d={on(t,e){o||(o=new Map);let s=o.get(t);s||(s=new Set,o.set(t,s));const r=e.bind(void 0);return s.add(r),{unsubscribe(){s.delete(r)}}},sessionId:Math.random().toString(36).slice(6),send(t){var e;null==(e=h.get(d))||e.forEach(e=>{var s;null==(s=e.next)||s.call(e,{type:"@xstate.event",event:t,sourceRef:void 0,actorRef:d,rootId:d.sessionId})}),function(t){var e;let s;[i,s]=u(i,t),null==(e=h.get(d))||e.forEach(e=>{var s;null==(s=e.next)||s.call(e,{type:"@xstate.snapshot",event:t,snapshot:i,actorRef:d,rootId:d.sessionId})}),null==r||r.forEach(t=>{var e;return null==(e=t.next)?void 0:e.call(t,i)}),s.forEach(n)}(t)},getSnapshot:()=>i,getInitialSnapshot:()=>a,subscribe(t){const e=l(t);return r??(r=new Set),r.add(e),{unsubscribe:()=>null==r?void 0:r.delete(e)}},[c](){return this},inspect:t=>{var e,s;const r=l(t);return h.set(d,h.get(d)??new Set),h.get(d).add(r),null==(e=r.next)||e.call(r,{type:"@xstate.actor",actorRef:d,rootId:d.sessionId}),null==(s=r.next)||s.call(r,{type:"@xstate.snapshot",snapshot:a,event:{type:"@xstate.init"},actorRef:d,rootId:d.sessionId}),{unsubscribe(){var t;return null==(t=h.get(d))?void 0:t.delete(r)}}}};return d}const d=()=>{try{return crypto.randomUUID()}catch(t){return Array(2).fill(null).map(()=>Math.random().toString(36).substring(2,15)).join("-")}},v=t=>{return e={session_id:d(),operation:new r.i(t,{context:o.LL,initialValue:{}}),mode:new r.i(t,{context:o.pC,initialValue:{options:new Set([]),default:null,current:null}}),filters:new r.i(t,{context:o.ld,initialValue:{}}),query:new r.i(t,{context:o.qD,initialValue:{text:"",tags:[]}}),executionManager:new a.E(t,{searchDebounceMs:50,askDebounceMs:0})},void 0===(s={register_operations:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),{operation:t.operation}),register_mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),{mode:t.mode}),set_filter:(t,{data:e})=>{const s=t.filters.value,r=t.executionManager.ctx,o={...s,[e.name]:{...s[e.name],...e.filter}},a={...r.search,matches:(0,n.W5)(r._search.matches,o)};return t.filters.setValue(o),t.executionManager.ctx={...r,search:a},{filters:t.filters,executionManager:t.executionManager}},set_mode:(t,{data:e})=>(t.mode.setValue({...t.mode.value,current:e}),e===i.M&&(t.executionManager.abort(),t.executionManager.search(t.session_id,t.query.value,t.operation.value,t.filters.value)),e===i.a&&(t.executionManager.abort(),t.executionManager.ask(t.session_id,t.query.value,t.operation.value,t.filters.value)),{mode:t.mode,session_id:d()}),set_query:(t,{data:e})=>{const s={...t.query.value,...e};return t.query.setValue(s,!0),t.mode.setValue({...t.mode.value,current:i.M}),t.executionManager.search(t.session_id,s,t.operation.value,t.filters.value),{query:t.query,mode:t.mode,session_id:0===s.text.length?d():t.session_id}}})?u(e.context,e.on):u(e,s);var e,s},p="canary-broadcast",b=t=>new CustomEvent(p,{detail:t,composed:!0,bubbles:!0})},2551:(t,e,s)=>{s.d(e,{Kl:()=>a,W5:()=>n,b2:()=>r,cM:()=>o});const r=t=>i(t).pathname.split("/").map((t,e)=>{const s=t.replace(/[-_]/g," ");return s.charAt(0).toUpperCase()+s.slice(1)}).map(t=>t.includes("#")?t.split("#")[0]:t).map(t=>t.endsWith(".html")?t.replace(".html",""):t).map(decodeURIComponent).filter(Boolean).slice(-4),o=async t=>new Promise(e=>setTimeout(e,t)),a=t=>{try{const{pathname:e,search:s}=i(t);return e+s}catch{return t}},i=t=>{const e=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(e)},n=(t,e)=>Object.entries(e).reduce((t,[e,{fn:s,args:r}])=>s(t,r),t)},4435:(t,e,s)=>{s.d(e,{M:()=>r,a:()=>o});const r="Search",o="Ask"},7319:(t,e,s)=>{s.d(e,{e:()=>o,i:()=>a,t:()=>r});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},7879:(t,e,s)=>{s.d(e,{E:()=>c,T:()=>i});var r=s(8030),o=s(2551),a=s(6468);const i={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},n="manager";class c{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:i.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new r.i(t,{context:a.kF,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;null==(t=this._abortController)||t.abort(n)}transition(t){this.ctx={...this.ctx,...t}}async search(t,e,s,r){var a;if(!s.search)return;this.transition({status:i.PENDING}),this._abortController.abort(n);const c=++this._callId;if(null==(a=s.beforeSearch)||a.call(s,e),await(0,o.cM)(this._options.searchDebounceMs),c===this._callId){this._abortController=new AbortController;try{this.transition({status:i.PENDING});const a=await s.search(e,{session_id:t},this._abortController.signal);this.transition({status:i.COMPLETE,search:{...a,matches:(0,o.W5)(a.matches,r)},_search:{...a,matches:a.matches}})}catch(l){if(l===n||l instanceof Error&&"AbortError"===l.name)return void this.transition({status:i.INITIAL});console.error(l),this.transition({status:i.ERROR})}}}async ask(t,e,s,r){if(!s.ask)return;this.transition({...this._initialState,status:i.PENDING}),this._abortController.abort(n);const a=++this._callId;if(await(0,o.cM)(this._options.askDebounceMs),a===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:i.PENDING}),await s.ask(e,{session_id:t},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:i.COMPLETE})}catch(c){if(c===n||c instanceof Error&&"AbortError"===c.name)return void this.transition({status:i.INITIAL});console.error(c),this.transition({status:i.ERROR})}}}_handleDelta(t){this.transition({ask:t})}}},8030:(t,e,s)=>{s.d(e,{i:()=>i});var r=s(699);class o{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}class a extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class i extends o{constructor(t,e,s){var o,a;super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[o,{consumerHost:a}]of this.subscriptions)s.has(o)||(s.add(o),a.dispatchEvent(new r.s(this.context,o,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(a=(o=this.host).addController)||a.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new a(this.context))}}}}]);