(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4948:(t,e,n)=>{Promise.resolve().then(n.bind(n,4369))},4369:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>f});var a=n(5155),r=n(8334),s=n.n(r),c=n(4919),o=n.n(c);function i(t,e,n){let a=100-e/2,r=(n-a)/Math.min(a,100-a);return"hsl(".concat(t,", ").concat(100*r,"%, ").concat(a,"%)")}let l=t=>{let{saturation:e,onClick:n}=t;return(0,a.jsx)("div",{className:o().hsvGradient,onClick:t=>{let a=t.target.getBoundingClientRect(),r=t.clientX-a.left,s=t.clientY-a.top;n({h:r/a.width*360%360,s:e,v:100-s/a.height*100})},style:{background:"\n                    linear-gradient(to top, black, transparent),\n                    linear-gradient(to right, ".concat(i(0,e,100),", ").concat(i(60,e,100),", ").concat(i(120,e,100),", ").concat(i(180,e,100),", ").concat(i(240,e,100),", ").concat(i(300,e,100),", ").concat(i(0,e,100),")\n                ")}})};var h=n(4739),d=n(6417),u=n(7753),x=n(1348),g=n(9409),v=n.n(g),p=n(5565);let j=(t,e,n)=>{let a=function(a){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(a+t/60)%6;return n-n*e*Math.max(0,Math.min(r,4-r,1))},[r,s,c]=[a(5),a(3),a(1)];return{r:Math.round(255*r),g:Math.round(255*s),b:Math.round(255*c)}},m=t=>{let{open:e,color:n,onClose:r}=t,s=j(n.h,n.s/100,n.v/100);return(0,a.jsxs)(h.A,{open:e,onClose:r,children:[(0,a.jsx)(d.A,{children:11==s.r&&45==s.g&&14==s.b?"非常臭顏色":"非常好顏色"}),(0,a.jsxs)(u.A,{children:[11==s.r&&45==s.g&&14==s.b?(0,a.jsx)(p.default,{className:v().previewBlock,src:"/homo.jpg",height:100,width:100,alt:"哼哼啊啊啊啊"}):(0,a.jsx)("div",{className:v().previewBlock,style:{background:"rgb(".concat(s.r,", ").concat(s.g,", ").concat(s.b,")")}}),(0,a.jsxs)(x.A,{children:["HSV: ",n.h.toFixed(0),", ",n.s.toFixed(0),"%, ",n.v.toFixed(0),"%"]}),(0,a.jsxs)(x.A,{children:["RGB: ",s.r,", ",s.g,", ",s.b]})]})]})};var _=n(8833),k=n(8998);let b=t=>{let{saturation:e,onChange:n}=t;return(0,a.jsx)(k.A,{sx:{px:4,py:1},children:(0,a.jsx)(_.Ay,{value:e,onChange:(t,e)=>{n(e)},min:0,max:100,step:1,sx:{mt:.5}})})};var C=n(2115);function f(){let[t,e]=(0,C.useState)(100),[n,r]=(0,C.useState)({h:0,s:100,v:100}),[c,o]=(0,C.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:s().main,children:[(0,a.jsx)(b,{saturation:t,onChange:t=>e(t)}),(0,a.jsx)(l,{saturation:t,onClick:t=>{r(t),o(!0)}})]}),(0,a.jsx)(m,{open:c,color:n,onClose:()=>o(!1)})]})}},9409:t=>{t.exports={previewBlock:"ColorDialog_previewBlock__S_zxO"}},4919:t=>{t.exports={hsvGradient:"HSVGradient_hsvGradient__uI1nh"}},8334:t=>{t.exports={main:"page_main__GlU4n"}}},t=>{var e=e=>t(t.s=e);t.O(0,[795,416,441,517,358],()=>e(4948)),_N_E=t.O()}]);