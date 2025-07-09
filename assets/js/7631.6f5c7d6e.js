/*! For license information please see 7631.6f5c7d6e.js.LICENSE.txt */
"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[7631],{556:(r,a,t)=>{t.d(a,{g:()=>n,s:()=>s,w:()=>o});var e=t(4440);const n=e.i`
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
`;const o=e.i`
  :host {
    display: contents;
  }
`,s=e.i`
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
`},4715:(r,a,t)=>{t.d(a,{r:()=>n});var e=t(4676);function n(r){return(0,e.n)({...r,state:!0,attribute:!1})}},5793:(r,a,t)=>{t.d(a,{s:()=>n});var e=t(699);class n{constructor(r,a,t,e){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,a)),this.unsubscribe=a},this.host=r,void 0!==a.context){const r=a;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=a,this.callback=t,this.subscribe=e??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new e.s(this.context,this.t,this.subscribe))}}},7631:(r,a,t)=>{t.r(a),t.d(a,{CanaryTriggerSearchbar:()=>k});var e=t(4440),n=t(4676),o=t(9938);t(5793),t(6468);class s{constructor(r,a){this._handleKeyDown=r=>{(()=>"cmdk"===this._key?"k"===r.key&&(r.metaKey||r.ctrlKey):"slash"===this._key?"/"===r.key:void 0)()&&(r.preventDefault(),this.host.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0})))},(this.host=r).addController(this),this._key=a}hostConnected(){document.addEventListener("keydown",this._handleKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this._handleKeyDown)}}var i=t(556),c=t(4715),u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=(r,a,t,e)=>{for(var n,o=e>1?void 0:e?l(a,t):a,s=r.length-1;s>=0;s--)(n=r[s])&&(o=(e?n(a,t,o):n(o))||o);return e&&o&&u(a,t,o),o};const h="canary-media-query";let b=class extends e.s{constructor(){super(...arguments),this.query="",this.matched=!1,this.handleChange=r=>{this.matched=r.matches}}connectedCallback(){if(super.connectedCallback(),!this.query)throw new Error(`'query' is required for '${h}'`);this.mediaQueryList=window.matchMedia(this.query),this.matched=this.mediaQueryList.matches,this.mediaQueryList.addEventListener("change",this.handleChange)}disconnectedCallback(){var r;super.disconnectedCallback(),null==(r=this.mediaQueryList)||r.removeEventListener("change",this.handleChange)}render(){return e.x`
      ${this.matched?e.x`<slot></slot>`:e.x`<slot name="fallback"></slot>`}
    `}};b.styles=i.w,d([(0,n.n)({type:String})],b.prototype,"query",2),d([(0,c.r)()],b.prototype,"matched",2),b=d([(0,o.r)(h)],b);var y=Object.defineProperty,p=Object.getOwnPropertyDescriptor,g=(r,a,t,e)=>{for(var n,o=e>1?void 0:e?p(a,t):a,s=r.length-1;s>=0;s--)(n=r[s])&&(o=(e?n(a,t,o):n(o))||o);return e&&o&&y(a,t,o),o};let k=class extends e.s{constructor(){super(),this.shortcut="cmdk",new s(this,this.shortcut)}render(){return e.x`
      <canary-media-query query="(min-width: 40rem)">
        ${this.desktop()}
        <div slot="fallback">${this.mobile()}</div>
      </canary-media-query>
    `}mobile(){return e.x` <button part="button" class="mobile" aria-label="Search">
      <div part="icon" class="icon i-heroicons-magnifying-glass"></div>
    </button>`}desktop(){return e.x`
      <button part="button" class="desktop" aria-label="Search">
        <div part="icon" class="icon i-heroicons-magnifying-glass"></div>
        <span part="text">Search</span>

        ${"cmdk"===this.shortcut?e.x`
              <kbd part="kbd">
                <kbd class="meta">⌘</kbd>
                <kbd class="key">K</kbd>
              </kbd>
            `:e.x`
              <kbd part="kbd">
                <kbd class="key">/</kbd>
              </kbd>
            `}
      </button>
    `}};k.styles=[i.w,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-magnifying-glass{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: default */
.static{position:static;}
.contents{display:contents;}
.flex{display:flex;}
.border{border-width:1px;};
    `,e.i`
      :host {
        display: contents;
      }

      button.mobile {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }

      button.desktop {
        padding-left: 0.75rem;
        padding-right: 0.5rem;

        width: 100%;
        max-width: var(--canary-trigger-searchbar-max-width, 350px);
        height: var(--canary-trigger-searchbar-height, 40px);
      }

      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;

        border: 1px solid var(--canary-color-gray-80);
        border-radius: 0.5rem;

        background-color: var(--canary-color-gray-100);
        color: var(--canary-color-gray-10);
      }
      button:hover {
        border-color: var(--canary-color-gray-60);
      }

      button > :last-child {
        margin-inline-start: auto;
      }

      button > kbd {
        display: flex;
        flex-direction: row;
        align-items: center;

        border-radius: 0.25rem;
        gap: 0.25em;
        padding: 0.2rem 0.35rem;

        color: var(--canary-color-gray-0);
        background-color: var(--canary-color-gray-95);
      }

      kbd.meta {
        font-size: 0.85rem;
      }
      kbd.key {
        font-size: 0.65rem;
      }
    `],g([(0,n.n)({type:String})],k.prototype,"shortcut",2),k=g([(0,o.r)("canary-trigger-searchbar")],k)}}]);