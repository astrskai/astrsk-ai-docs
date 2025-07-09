/*! For license information please see 51.c6679d62.js.LICENSE.txt */
"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[51],{51:(t,r,e)=>{e.r(r),e.d(r,{CanaryModal:()=>k,MODAL_CLOSE_EVENT:()=>f});var n=e(4440),a=e(4676),o=e(8857),s=e(9938),i=e(1674),l=e(2208),d=e(556),c=e(1389),p=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u=(t,r,e,n)=>{for(var a,o=n>1?void 0:n?h(r,e):r,s=t.length-1;s>=0;s--)(a=t[s])&&(o=(n?a(r,e,o):a(o))||o);return n&&o&&p(r,e,o),o};let y=class extends n.s{constructor(){super(...arguments),this.transition=!1,this.ref=(0,i.e)()}render(){const t={"with-transition":this.transition};return n.x`
      <dialog
        ${(0,i.n)(this.ref)}
        class=${(0,c.e)(t)}
        @click=${this.handleClick}
        part="dialog"
      >
        <slot></slot>
      </dialog>
    `}handleClick(t){const r=this.ref.value;(null==r?void 0:r.open)&&"DIALOG"===t.target.nodeName&&(r.close(),this.dispatchEvent((0,l.lh)({type:"set_query",data:{text:""}})))}};y.styles=[n.i`
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
    `],u([(0,a.n)({type:Boolean})],y.prototype,"transition",2),y=u([(0,s.r)("canary-dialog")],y);var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,b=(t,r,e,n)=>{for(var a,o=n>1?void 0:n?v(r,e):r,s=t.length-1;s>=0;s--)(a=t[s])&&(o=(n?a(r,e,o):a(o))||o);return n&&o&&g(r,e,o),o};const f="modal-close";let k=class extends n.s{constructor(){super(...arguments),this.open=!1,this.transition=!1,this._ref=(0,i.e)()}render(){return n.x`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog
        .ref=${this._ref}
        transition=${(0,o.o)(this.transition)}
        exportparts="dialog"
      >
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var t;null==(t=this._ref.value)||t.showModal()}_handleModalClose(){var t;null==(t=this._ref.value)||t.close(),this.dispatchEvent((0,l.lh)({type:"set_query",data:{text:""}}))}};k.styles=[d.w,n.i`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],b([(0,a.n)({type:Boolean})],k.prototype,"open",2),b([(0,a.n)({type:Boolean})],k.prototype,"transition",2),k=b([(0,s.r)("canary-modal")],k)},1389:(t,r,e)=>{e.d(r,{e:()=>o});var n=e(4440),a=e(7319);const o=(0,a.e)(class extends a.i{constructor(t){var r;if(super(t),t.type!==a.t.ATTRIBUTE||"class"!==t.name||(null==(r=t.strings)?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(r=>t[r]).join(" ")+" "}update(t,[r]){var e,a;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in r)r[t]&&!(null==(e=this.nt)?void 0:e.has(t))&&this.st.add(t);return this.render(r)}const o=t.element.classList;for(const n of this.st)n in r||(o.remove(n),this.st.delete(n));for(const n in r){const t=!!r[n];t===this.st.has(n)||(null==(a=this.nt)?void 0:a.has(n))||(t?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return n.w}})},8857:(t,r,e)=>{e.d(r,{o:()=>a});var n=e(4440);const a=t=>t??n.T}}]);