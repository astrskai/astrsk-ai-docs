"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[8537],{8537:(t,a,r)=>{r.r(a),r.d(a,{CanaryFilterTags:()=>g});var e=r(4440),i=r(4676),o=r(4715),s=r(1389),n=r(1053),c=r(9938);const l={fromAttribute:(t,a)=>String(t).split(","),toAttribute:(t,a)=>Array.isArray(t)?t.join(","):t};var d=r(2208),y=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=(t,a,r,e)=>{for(var i,o=e>1?void 0:e?p(a,r):a,s=t.length-1;s>=0;s--)(i=t[s])&&(o=(e?i(a,r,o):i(o))||o);return e&&o&&y(a,r,o),o};let g=class extends e.s{constructor(){super(...arguments),this.tags=[],this._selected=""}connectedCallback(){super.connectedCallback(),this._ensureTagsConverted(),this._initializeSelected(),window.addEventListener("popstate",this._handlePopState.bind(this)),this._patchHistory()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._handlePopState.bind(this))}updated(t){t.has("_selected")&&this.localStorageKey&&localStorage.setItem(this.localStorageKey,this._selected),t.has("_selected")&&this.dispatchEvent((0,d.lh)({type:"set_query",data:{tags:[this._selected]}}))}_handlePopState(){this._initializeSelected()}_patchHistory(){window.__history_patched__||(window.__history_patched__=!0,window.history.pushState=new Proxy(window.history.pushState,{apply:(t,a,r)=>{const e="string"==typeof r[2]?new URL(r[2],window.location.href).href:window.location.href;return this._initializeSelected(e),t.apply(a,r)}}))}_ensureTagsConverted(){"string"==typeof this.tags&&(this.tags=l.fromAttribute(this.tags,null))}_initializeSelected(t){this._handleSyncURL(t)||this._applyLocalStorage()||(this._selected=this.tags[0])}_handleSyncURL(t){if(!this.syncURL)return!1;const{hostname:a,pathname:r}=new URL(t??window.location.href),e=this.syncURL.find(({pattern:t})=>(0,n.p)(t)(`${a}${r}`));return!!e&&(this._selected=e.tag,!0)}_applyLocalStorage(){if(!this.localStorageKey)return!1;const t=localStorage.getItem(this.localStorageKey);return!(!t||!this.tags.includes(t))&&(this._selected=t,!0)}render(){return e.x`
      <div class="container" part="container">
        ${this.tags.map(t=>{const a=t===this._selected;return e.x`<button
            @click=${()=>this._selected=t}
            part=${["tag",a?"active":"inactive"].join(" ")}
            class=${(0,s.e)({tag:!0,active:a})}
            aria-label=${`${t}-tag`}
          >
            ${t}
          </button>`})}
      </div>
    `}};g.styles=e.i`
    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .tag {
      cursor: pointer;
      font-size: 0.9em;
      padding: 1px 8px;
      min-width: 40px;

      border: 1px solid;
      border-radius: 8px;
      border-color: var(--canary-is-light, var(--canary-color-gray-80))
        var(--canary-is-dark, var(--canary-color-gray-50));

      color: var(--canary-is-light, var(--canary-color-gray-60))
        var(--canary-is-dark, var(--canary-color-gray-40));
      background-color: var(--canary-is-light, var(--canary-color-gray-95))
        var(--canary-is-dark, var(--canary-color-gray-80));
    }

    .tag:hover,
    .tag.active {
      color: var(--canary-is-light, var(--canary-color-primary-40))
        var(--canary-is-dark, var(--canary-color-primary-20));
      border-color: var(--canary-is-light, var(--canary-color-primary-80))
        var(--canary-is-dark, var(--canary-color-primary-50));
      background-color: var(--canary-is-light, var(--canary-color-primary-95))
        var(--canary-is-dark, var(--canary-color-primary-70));
    }
  `,h([(0,i.n)({converter:l})],g.prototype,"tags",2),h([(0,i.n)({type:Object,attribute:"url-sync"})],g.prototype,"syncURL",2),h([(0,i.n)({type:String,attribute:"local-storage-key"})],g.prototype,"localStorageKey",2),h([(0,o.r)()],g.prototype,"_selected",2),g=h([(0,c.r)("canary-filter-tags")],g)}}]);