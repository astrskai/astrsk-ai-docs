"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[6214],{6214:(e,t,a)=>{a.r(t),a.d(t,{CanaryFilterTabsGlob:()=>y});var r=a(4440),s=a(4676),n=a(4715),i=a(1389),c=a(1053),l=a(9938),o=a(2208),d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=(e,t,a,r)=>{for(var s,n=r>1?void 0:r?p(t,a):t,i=e.length-1;i>=0;i--)(s=e[i])&&(n=(r?s(t,a,n):s(n))||n);return r&&n&&d(t,a,n),n};const b="canary-filter-tabs-glob";let y=class extends r.s{constructor(){super(...arguments),this.tabs=[{name:"All",pattern:"**/*"}]}connectedCallback(){super.connectedCallback(),this._ensureTabs(),this._ensureSelected(),this.dispatchEvent((0,o.lh)({type:"set_filter",data:{name:b,filter:{args:{tab:this._selected},fn:(e,{tab:t})=>{const{pattern:a,options:r}=this.tabs.find(({name:e})=>e===t),s=(0,c.p)(a,r);return e.filter(e=>{let t="";try{const{hostname:a,pathname:r}=new URL(e.url);t=`${a}${r}`}catch(a){t=e.url}return s(t)})}}}}))}render(){return r.x`
      <div class="container" part="container">
        ${this.tabs.map(({name:e})=>{const t=e===this._selected;return r.x`<div
            @click=${()=>this._handleChangeTab(e)}
            part=${["tab",t?"active":"inactive"].join(" ")}
          >
            <input
              type="radio"
              name="mode"
              .id=${e}
              .value=${e}
              ?checked=${t}
            />
            <label
              part=${["label",t?"active":"inactive"].join(" ")}
              class=${(0,i.e)({tab:!0,selected:t})}
            >
              ${e}
            </label>
          </div>`})}
      </div>
    `}_handleChangeTab(e){this._selected=e,this.dispatchEvent((0,o.lh)({type:"set_filter",data:{name:b,filter:{args:{tab:this._selected}}}}))}_ensureTabs(){"string"==typeof this.tabs&&(this.tabs=JSON.parse(this.tabs))}_ensureSelected(){this._selected||(this._selected=this.tabs[0].name)}};y.styles=r.i`
    .container {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding-left: 2px;
      padding-bottom: 4px;
      gap: 8px;

      color: var(--canary-color-gray-50);
      text-decoration-color: var(--canary-color-gray-50);
    }

    .selected.tab {
      color: var(--canary-color-gray-10);
      text-decoration: underline;
      text-decoration-color: var(--canary-color-gray-10);
    }

    label {
      font-size: 0.75rem;
      text-decoration-skip-ink: none;
    }

    input {
      display: none;
    }
  `,h([(0,s.n)({type:Array})],y.prototype,"tabs",2),h([(0,n.r)()],y.prototype,"_selected",2),y=h([(0,l.r)(b)],y)}}]);