/*! For license information please see 890.33474677.js.LICENSE.txt */
"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[890],{556:(r,t,a)=>{a.d(t,{g:()=>o,s:()=>i,w:()=>s});var e=a(4440);const o=e.i`
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
`,i=e.i`
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
`},890:(r,t,a)=>{a.r(t),a.d(t,{CanaryContent:()=>u});var e=a(4440),o=a(4715);var s=a(1389),i=a(3277),n=a(6468),c=a(9938),l=a(556),d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,b=(r,t,a,e)=>{for(var o,s=e>1?void 0:e?h(t,a):t,i=r.length-1;i>=0;i--)(o=r[i])&&(s=(e?o(t,a,s):o(s))||s);return e&&s&&d(t,a,s),s};let u=class extends e.s{constructor(){super(...arguments),this._query=""}render(){return e.x`
      <div class="container" part="container">
        <div class="head-container" part="head-container">
          <slot name="head"></slot>
        </div>
        <slot name="input"></slot>
        <slot name="mode"></slot>
        <div
          class=${(0,s.e)({footer:!0,hide:!this._query||0===this._footers.length})}
        >
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};var p;u.styles=[l.g,l.w,e.i`
      .container {
        width: 300px;

        outline: none;
        padding-top: 6px;
        padding-bottom: 8px;

        border: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);

        background-color: var(--canary-color-gray-100);
      }

      @media (min-width: 40rem) {
        .container {
          width: var(--canary-content-max-width, 550px);
        }
      }

      .head-container {
        padding-left: 12px;
        padding-right: 12px;
      }
    `,e.i`
      .footer {
        padding-top: 2px;
        padding-right: 6px;
      }

      .hide {
        display: none;
      }
    `],b([(0,i.c)({context:n.qD,subscribe:!0}),(0,o.r)()],u.prototype,"_query",2),b([(p={slot:"footer"},(r,t)=>{const{slot:a,selector:e}=p??{},o="slot"+(a?`[name=${a}]`:":not([name])");return((r,t,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(r,t,a),a))(r,t,{get(){var r;const t=null==(r=this.renderRoot)?void 0:r.querySelector(o),a=(null==t?void 0:t.assignedElements(p))??[];return void 0===e?a:a.filter(r=>r.matches(e))}})})],u.prototype,"_footers",2),u=b([(0,c.r)("canary-content")],u)},1389:(r,t,a)=>{a.d(t,{e:()=>s});var e=a(4440),o=a(7319);const s=(0,o.e)(class extends o.i{constructor(r){var t;if(super(r),r.type!==o.t.ATTRIBUTE||"class"!==r.name||(null==(t=r.strings)?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var a,o;if(void 0===this.st){this.st=new Set,void 0!==r.strings&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(r=>""!==r)));for(const r in t)t[r]&&!(null==(a=this.nt)?void 0:a.has(r))&&this.st.add(r);return this.render(t)}const s=r.element.classList;for(const e of this.st)e in t||(s.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||(null==(o=this.nt)?void 0:o.has(e))||(r?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return e.w}})},3277:(r,t,a)=>{a.d(t,{c:()=>o});var e=a(5793);function o({context:r,subscribe:t}){return(a,o)=>{"object"==typeof o?o.addInitializer(function(){new e.s(this,{context:r,callback:r=>{a.set.call(this,r)},subscribe:t})}):a.constructor.addInitializer(a=>{new e.s(a,{context:r,callback:r=>{a[o]=r},subscribe:t})})}}},4715:(r,t,a)=>{a.d(t,{r:()=>o});var e=a(4676);function o(r){return(0,e.n)({...r,state:!0,attribute:!1})}},5793:(r,t,a)=>{a.d(t,{s:()=>o});var e=a(699);class o{constructor(r,t,a,e){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,t)),this.unsubscribe=t},this.host=r,void 0!==t.context){const r=t;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=t,this.callback=a,this.subscribe=e??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new e.s(this.context,this.t,this.subscribe))}}},7319:(r,t,a)=>{a.d(t,{e:()=>o,i:()=>s,t:()=>e});const e={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=r=>(...t)=>({_$litDirective$:r,values:t});class s{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,a){this._$Ct=r,this._$AM=t,this._$Ci=a}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}}}]);