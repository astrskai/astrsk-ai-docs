/*! For license information please see 5389.47b19a2a.js.LICENSE.txt */
"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[51,5389],{51:(r,t,n)=>{n.r(t),n.d(t,{CanaryModal:()=>f,MODAL_CLOSE_EVENT:()=>x});var e=n(4440),a=n(4676),s=n(8857),i=n(9938),o=n(1674),c=n(2208),u=n(556),l=n(1389),p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,h=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?d(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&p(t,n,s),s};let g=class extends e.s{constructor(){super(...arguments),this.transition=!1,this.ref=(0,o.e)()}render(){const r={"with-transition":this.transition};return e.x`
      <dialog
        ${(0,o.n)(this.ref)}
        class=${(0,l.e)(r)}
        @click=${this.handleClick}
        part="dialog"
      >
        <slot></slot>
      </dialog>
    `}handleClick(r){const t=this.ref.value;(null==t?void 0:t.open)&&"DIALOG"===r.target.nodeName&&(t.close(),this.dispatchEvent((0,c.lh)({type:"set_query",data:{text:""}})))}};g.styles=[e.i`
      dialog::backdrop {
        background-color: var(--canary-color-backdrop-overlay);
        -webkit-backdrop-filter: blur(var(--canary-backdrop-blur, 0.25rem));
        backdrop-filter: blur(var(--canary-backdrop-blur, 0.25rem));
      }
      dialog {
        margin: 0 auto;
        top: 60px;
        padding: 0;
        border: none;
        outline: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);
      }

      dialog.with-transition {
        transition:
          opacity var(--canary-transition-duration, 0.1s)
            var(--canary-transition-timing, linear),
          transform var(--canary-transition-duration, 0.1s)
            var(--canary-transition-timing, linear);
      }

      dialog.with-transition[open] {
        opacity: 1;
      }

      dialog.with-transition:not([open]) {
        opacity: 0;
      }

      @starting-style {
        dialog.with-transition[open] {
          opacity: 0;
        }
      }
    `],h([(0,a.n)({type:Boolean})],g.prototype,"transition",2),g=h([(0,i.r)("canary-dialog")],g);var b=Object.defineProperty,y=Object.getOwnPropertyDescriptor,m=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?y(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&b(t,n,s),s};const x="modal-close";let f=class extends e.s{constructor(){super(...arguments),this.open=!1,this.transition=!1,this._ref=(0,o.e)()}render(){return e.x`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog
        .ref=${this._ref}
        transition=${(0,s.o)(this.transition)}
        exportparts="dialog"
      >
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var r;null==(r=this._ref.value)||r.showModal()}_handleModalClose(){var r;null==(r=this._ref.value)||r.close(),this.dispatchEvent((0,c.lh)({type:"set_query",data:{text:""}}))}};f.styles=[u.w,e.i`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],m([(0,a.n)({type:Boolean})],f.prototype,"open",2),m([(0,a.n)({type:Boolean})],f.prototype,"transition",2),f=m([(0,i.r)("canary-modal")],f)},1389:(r,t,n)=>{n.d(t,{e:()=>s});var e=n(4440),a=n(7319);const s=(0,a.e)(class extends a.i{constructor(r){var t;if(super(r),r.type!==a.t.ATTRIBUTE||"class"!==r.name||(null==(t=r.strings)?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var n,a;if(void 0===this.st){this.st=new Set,void 0!==r.strings&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(r=>""!==r)));for(const r in t)t[r]&&!(null==(n=this.nt)?void 0:n.has(r))&&this.st.add(r);return this.render(t)}const s=r.element.classList;for(const e of this.st)e in t||(s.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||(null==(a=this.nt)?void 0:a.has(e))||(r?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return e.w}})},3277:(r,t,n)=>{n.d(t,{c:()=>a});var e=n(5793);function a({context:r,subscribe:t}){return(n,a)=>{"object"==typeof a?a.addInitializer(function(){new e.s(this,{context:r,callback:r=>{n.set.call(this,r)},subscribe:t})}):n.constructor.addInitializer(n=>{new e.s(n,{context:r,callback:r=>{n[a]=r},subscribe:t})})}}},4715:(r,t,n)=>{n.d(t,{r:()=>a});var e=n(4676);function a(r){return(0,e.n)({...r,state:!0,attribute:!1})}},5389:(r,t,n)=>{n.r(t),n.d(t,{CanarySearchResults:()=>Z});var e=n(4440),a=n(4715),s=n(3277),i=n(6468),o=n(9938),c=n(7879),u=n(556),l=n(4676),p=n(51),d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?h(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&d(t,n,s),s};let b=class extends e.s{render(){return e.x`
      <button class="container" part="container" @click=${this._handleClick}>
        <slot name="content-before"></slot>
        <div class="content">
          <slot name="url"></slot>
          <div class="title">
            <slot name="title-icon"></slot>
            <slot name="title"></slot>
            <slot name="title-badge"></slot>
          </div>
          <slot name="excerpt"></slot>
          <slot name="sub-results"></slot>
        </div>
        <div class="arrow">
          <div class="i-heroicons-chevron-right"></div>
        </div>
      </button>
    `}_handleClick(r){r.stopPropagation(),r.metaKey||r.ctrlKey?window.open(this.url,"_blank"):(this.dispatchEvent(new CustomEvent(p.MODAL_CLOSE_EVENT,{bubbles:!0,composed:!0})),window.location.href=this.url)}};b.styles=[u.g,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-chevron-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m8.25 4.5l7.5 7.5l-7.5 7.5'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;}
.flex-shrink{flex-shrink:1;}
.border{border-width:1px;};
    `,e.i`
      .container {
        cursor: pointer;
        width: 100%;

        position: relative;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;

        width: 100%;
        padding: 6px 9px;
        border: 1px solid var(--canary-color-gray-90);
        border-radius: 8px;
        background-color: var(--canary-is-light, var(--canary-color-gray-95))
          var(--canary-is-dark, var(--canary-color-gray-80));
      }

      .container:hover {
        background-color: var(--canary-is-light, var(--canary-color-primary-95))
          var(--canary-is-dark, var(--canary-color-primary-70));
      }

      .container:hover .arrow {
        opacity: 0.5;
      }

      .arrow {
        position: absolute;
        top: 45%;
        right: 8px;
        opacity: 0;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        overflow: hidden;
        text-overflow: ellipsis;
      }

      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }

      .title ::slotted([slot="title-icon"]) {
        flex-shrink: 0;
        opacity: 0.5;
      }
    `],g([(0,l.n)({type:String})],b.prototype,"url",2),b=g([(0,o.r)("canary-search-match-base")],b);var y=n(2551),m=Object.defineProperty,x=Object.getOwnPropertyDescriptor,f=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?x(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&m(t,n,s),s};let w=class extends e.s{render(){const r=(0,y.b2)(this.url);return 0==r.length?this._render_url():this._render_parts(r)}_render_parts(r){return e.x`<div class="paths">
      ${r.map((t,n)=>n<r.length-1?e.x`
              <span class="path">${t}</span>
              <span class="icon i-heroicons-chevron-right"></span>
            `:e.x`<span class="path">${t}</span>`)}
    </div>`}_render_url(){let r=null;try{r=new URL(this.url).host}catch(k){r=null}return r?e.x`<span class="path">${r}</span>`:e.T}};w.styles=[u.g,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-chevron-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m8.25 4.5l7.5 7.5l-7.5 7.5'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: default */
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;};
    `,e.i`
      .paths {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        margin-bottom: 2px;

        color: var(--canary-color-gray-30);
        font-size: 0.75rem;
      }

      .path {
        line-height: 1;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `],f([(0,l.n)({type:String})],w.prototype,"url",2),w=f([(0,o.r)("canary-url-paths")],w);var v=n(7319);class k extends v.i{constructor(r){if(super(r),this.it=e.T,r.type!==v.t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===e.T||null==r)return this._t=void 0,this.it=r;if(r===e.w)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const t=[r];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}k.directiveName="unsafeHTML",k.resultType=1;const _=(0,v.e)(k);var z=Object.defineProperty,O=Object.getOwnPropertyDescriptor,C=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?O(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&z(t,n,s),s};let E=class extends e.s{constructor(){super(...arguments),this.last=!1}render(){return e.x`
      <svg viewBox="0 0 24 54">
        <g
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          ${this._paths()}
        </g>
      </svg>
    `}_paths(){return this.last?e.b`<path d="M8 6v21M20 27H8.3"></path>`:e.b`<path d="M8 6v21M20 27H8.3"></path>
      <path d="M8 6v42M20 27H8.3"></path>`}};E.styles=e.i`
    :host {
      display: contents;
    }

    svg {
      width: 1.4em;
      color: var(--canary-is-light, var(--canary-color-gray-80))
        var(--canary-is-dark, var(--canary-color-gray-50));
    }
  `,C([(0,l.n)({type:Boolean})],E.prototype,"last",2),E=C([(0,o.r)("canary-icon-tree")],E);var $=Object.defineProperty,j=Object.getOwnPropertyDescriptor,T=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?j(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&$(t,n,s),s};let M=class extends e.s{constructor(){super(...arguments),this.value=""}render(){return this.value?e.x`
      <span class="title">${_(this._sanitize(this.value))}</span>
    `:e.T}_sanitize(r){return r.replace(/<mark>/g,"__MARK_START__").replace(/<\/mark>/g,"__MARK_END__").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/__MARK_START__/g,"<mark>").replace(/__MARK_END__/g,"</mark>")}};M.styles=[u.w,e.i`
      span {
        color: var(--canary-color-gray-20);
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.2;
        text-align: start;
      }

      mark {
        background-color: transparent;
        color: inherit;
      }
    `],T([(0,l.n)({type:String})],M.prototype,"value",2),M=T([(0,o.r)("canary-snippet-title")],M);var P=Object.defineProperty,R=Object.getOwnPropertyDescriptor,D=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?R(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&P(t,n,s),s};let A=class extends e.s{constructor(){super(...arguments),this.value="",this._maxLength=110}render(){if(!this.value)return e.T;const r=this._strip(this._sanitize(this.value),this._maxLength);return e.x` <span class="excerpt">${_(r)}</span> `}_sanitize(r){return r.replace(/<mark>/g,"__MARK_START__").replace(/<\/mark>/g,"__MARK_END__").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/__MARK_START__/g,"<mark>").replace(/__MARK_END__/g,"</mark>")}_strip(r,t){const n=r.match(/<mark>(.*?)<\/mark>/);if(!n)return r.slice(0,t);const e=n.index,a=n[0].length,s=Math.max(0,e-Math.floor((t-a)/2)),i=Math.min(r.length,s+t);return r.slice(s,i)}};A.styles=[u.w,e.i`
      span {
        line-height: 1;
        white-space: nowrap;
        color: var(--canary-color-gray-20);
        font-size: 0.875rem;
        font-weight: normal;
        opacity: 0.8;
      }

      mark {
        border-radius: 2px;
        background-color: var(--canary-is-light, var(--canary-color-primary-30))
          var(--canary-is-dark, var(--canary-color-primary-20));
        color: var(--canary-color-gray-90);
      }
    `],D([(0,l.n)({type:String})],A.prototype,"value",2),A=D([(0,o.r)("canary-snippet-excerpt")],A);var L=Object.defineProperty,S=Object.getOwnPropertyDescriptor,B=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?S(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&L(t,n,s),s};let K=class extends e.s{render(){if("webpage"!==this.match.type)throw new Error;return e.x`
      <div class="container" part="container">
        <canary-search-match-base
          url=${this.match.url}
          exportparts="container:match-item"
        >
          <canary-url-paths slot="url" .url=${this.match.url}>
          </canary-url-paths>
          <span slot="title-icon" class="i-heroicons-bookmark"></span>
          <canary-snippet-title slot="title" .value=${this.match.title}>
          </canary-snippet-title>
          <canary-snippet-excerpt slot="excerpt" .value=${this.match.excerpt}>
          </canary-snippet-excerpt>
        </canary-search-match-base>
        ${this.match.sub_results.map((r,t)=>e.x`
            <canary-search-match-base
              url=${r.url}
              exportparts="container:match-item"
            >
              <canary-icon-tree
                slot="content-before"
                .last=${t===this.match.sub_results.length-1}
              >
              </canary-icon-tree>
              <canary-snippet-title
                slot="title"
                class="title"
                .value=${r.title}
              >
              </canary-snippet-title>
              <canary-snippet-excerpt
                slot="excerpt"
                class="excerpt"
                .value=${r.excerpt}
              >
              </canary-snippet-excerpt>
            </canary-search-match-base>
          `)}
      </div>
    `}};K.styles=[u.g,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-bookmark{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25L4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.5 48.5 0 0 1 11.186 0'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.flex{display:flex;};
    `,e.i`
      .container {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .i-heroicons-bookmark {
        opacity: 0.4;
      }
    `],B([(0,l.n)({type:Object})],K.prototype,"match",2),K=B([(0,o.r)("canary-search-match-webpage")],K);var N=Object.defineProperty,H=Object.getOwnPropertyDescriptor,q=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?H(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&N(t,n,s),s};const I="canary-search-match-openapi",V="canary-search-match-github-issue",U="canary-search-match-github-discussion";let F=class extends e.s{render(){return"webpage"===this.match.type?e.x`<canary-search-match-webpage
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-webpage> `:"openapi"===this.match.type?this.is_element_defined(I)?e.x`<canary-search-match-openapi
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-openapi> `:(this._log_element_not_defined(I),e.T):"github_issue"===this.match.type?this.is_element_defined(V)?e.x`<canary-search-match-github-issue
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-github-issue> `:(this._log_element_not_defined(V),e.T):"github_discussion"===this.match.type?this.is_element_defined(U)?e.x`<canary-search-match-github-discussion
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-github-discussion>`:(this._log_element_not_defined(U),e.T):void 0}is_element_defined(r){return void 0!==globalThis.customElements.get(r)}_log_element_not_defined(r){console.error(`${r} is not defined. Please make sure to import it.`)}};F.styles=u.w,q([(0,l.n)({type:Object})],F.prototype,"match",2),F=q([(0,o.r)("canary-search-match")],F);var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor;let Q=class extends e.s{render(){return e.x`
      <div class="container">
        <div class="icon i-heroicons-exclamation-triangle"></div>
        <span>Sorry, something went wrong. Please try again later.</span>
      </div>
    `}};Q.styles=[u.g,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-exclamation-triangle{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0zM12 15.75h.007v.008H12z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.flex{display:flex;}
.border{border-width:1px;};
    `,e.i`
      div.container {
        display: flex;
        gap: 8px;
        align-items: center;

        padding: 8px 16px;

        border-radius: 8px;
        border: 1px solid var(--canary-color-gray-95);

        color: var(--canary-color-gray-10);
        font-size: 0.875rem;
      }
    `],Q=((r,t,n,e)=>{for(var a,s=e>1?void 0:e?J(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&G(t,n,s),s})([(0,o.r)("canary-error")],Q);var W=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(r,t,n,e)=>{for(var a,s=e>1?void 0:e?X(t,n):t,i=r.length-1;i>=0;i--)(a=r[i])&&(s=(e?a(t,n,s):a(s))||s);return e&&s&&W(t,n,s),s};let Z=class extends e.s{render(){if(!this._execution)return e.T;const{matches:r}=this._execution.search;return 0===r.length?e.T:e.x`
      ${this._execution.status===c.T.ERROR?e.x`<canary-error></canary-error>`:e.x`
            <div class="container" part="container">
              ${r.map(r=>e.x`<canary-search-match
                    exportparts="match-group,match-item"
                    .match=${r}
                  ></canary-search-match>`)}
            </div>
          `}
    `}};Z.styles=e.i`
    .container {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  `,Y([(0,s.c)({context:i.kF,subscribe:!0}),(0,a.r)()],Z.prototype,"_execution",2),Z=Y([(0,o.r)("canary-search-results")],Z)},5793:(r,t,n)=>{n.d(t,{s:()=>a});var e=n(699);class a{constructor(r,t,n,e){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,t)),this.unsubscribe=t},this.host=r,void 0!==t.context){const r=t;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=e??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new e.s(this.context,this.t,this.subscribe))}}},8857:(r,t,n)=>{n.d(t,{o:()=>a});var e=n(4440);const a=r=>r??e.T}}]);