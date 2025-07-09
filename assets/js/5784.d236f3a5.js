/*! For license information please see 5784.d236f3a5.js.LICENSE.txt */
"use strict";(self.webpackChunkastrsk_ai_docs=self.webpackChunkastrsk_ai_docs||[]).push([[5784],{3277:(t,n,s)=>{s.d(n,{c:()=>e});var r=s(5793);function e({context:t,subscribe:n}){return(s,e)=>{"object"==typeof e?e.addInitializer(function(){new r.s(this,{context:t,callback:t=>{s.set.call(this,t)},subscribe:n})}):s.constructor.addInitializer(s=>{new r.s(s,{context:t,callback:t=>{s[e]=t},subscribe:n})})}}},4715:(t,n,s)=>{s.d(n,{r:()=>e});var r=s(4676);function e(t){return(0,r.n)({...t,state:!0,attribute:!1})}},5784:(t,n,s)=>{s.r(n),s.d(n,{CanarySearch:()=>x});var r=s(4440),e=s(4715),i=s(1674),a=s(3277),o=s(6468),c=s(9938),u=s(4435),d=s(556),h=s(2208),b=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p=(t,n,s,r)=>{for(var e,i=r>1?void 0:r?l(n,s):n,a=t.length-1;a>=0;a--)(e=t[a])&&(i=(r?e(n,s,i):e(i))||i);return r&&i&&b(n,s,i),i};let x=class extends r.s{constructor(){super(...arguments),this.MODE=u.M,this._containerRef=(0,i.e)()}connectedCallback(){super.connectedCallback(),this.dispatchEvent((0,h.lh)({type:"register_mode",data:this.MODE}))}render(){return this._mode&&this._mode.current===this.MODE?r.x`
          <div class="container" part="container">
            <div class="head" part="head">
              <slot name="head"></slot>
            </div>
            <div
              class="scroll-container"
              ${(0,i.n)(this._containerRef)}
              part="scroll-container"
            >
              <div class="body" part="body">
                <slot name="body"></slot>
              </div>
            </div>
          </div>
        `:r.T}};x.styles=[d.g,d.s,r.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
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
.sticky{position:sticky;}
.static{position:static;}
.flex{display:flex;};
    `,r.i`
      .container {
        display: flex;
        flex-direction: column;
      }

      .head {
        position: sticky;
        top: 0px;
        background-color: var(--canary-color-gray-100);
        z-index: 50;
        padding-left: 12px;
        margin-bottom: 4px;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    `],p([(0,a.c)({context:o.pC,subscribe:!0}),(0,e.r)()],x.prototype,"_mode",2),x=p([(0,c.r)("canary-search")],x)},5793:(t,n,s)=>{s.d(n,{s:()=>e});var r=s(699);class e{constructor(t,n,s,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,n)),this.unsubscribe=n},this.host=t,void 0!==n.context){const t=n;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=n,this.callback=s,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new r.s(this.context,this.t,this.subscribe))}}}}]);