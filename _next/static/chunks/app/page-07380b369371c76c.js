(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4948:(e,t,n)=>{Promise.resolve().then(n.bind(n,4651))},4651:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>G});var r=n(5155),s=n(8334),a=n.n(s),l=n(4919),c=n.n(l);function o(e,t,n){let r=100-t/2,s=(n-r)/Math.min(r,100-r);return"hsl(".concat(e,", ").concat(100*s,"%, ").concat(r,"%)")}let i=e=>{let{saturation:t,onClick:n}=e;return(0,r.jsx)("div",{className:c().hsvGradient,onClick:e=>{let r=e.target.getBoundingClientRect(),s=e.clientX-r.left,a=e.clientY-r.top;n({h:s/r.width*360%360,s:t,v:100-a/r.height*100})},style:{background:"\n                    linear-gradient(to top, black, transparent),\n                    linear-gradient(to right, ".concat(o(0,t,100),", ").concat(o(60,t,100),", ").concat(o(120,t,100),", ").concat(o(180,t,100),", ").concat(o(240,t,100),", ").concat(o(300,t,100),", ").concat(o(0,t,100),")\n                ")}})};var h=n(5593),d=n(6417),x=n(7753),u=n(1348),j=n(9409),p=n.n(j),g=n(5565);let m=(e,t,n)=>{let r=function(r){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(r+e/60)%6;return n-n*t*Math.max(0,Math.min(s,4-s,1))},[s,a,l]=[r(5),r(3),r(1)];return{r:Math.round(255*s),g:Math.round(255*a),b:Math.round(255*l)}},v=e=>{let{open:t,color:n,onClose:s}=e,a=m(n.h,n.s/100,n.v/100);return(0,r.jsxs)(h.A,{open:t,onClose:s,children:[(0,r.jsx)(d.A,{children:11==a.r&&45==a.g&&14==a.b?"非常臭顏色":"非常好顏色"}),(0,r.jsxs)(x.A,{children:[11==a.r&&45==a.g&&14==a.b?(0,r.jsx)(g.default,{className:p().previewBlock,src:"/homo.jpg",height:100,width:100,alt:"哼哼啊啊啊啊"}):(0,r.jsx)("div",{className:p().previewBlock,style:{background:"rgb(".concat(a.r,", ").concat(a.g,", ").concat(a.b,")")}}),(0,r.jsxs)(u.A,{children:["HSV: ",n.h.toFixed(0),", ",n.s.toFixed(0),"%, ",n.v.toFixed(0),"%"]}),(0,r.jsxs)(u.A,{children:["RGB: ",a.r,", ",a.g,", ",a.b]})]})]})};var A=n(5200),_=n(8998);let b=e=>{let{saturation:t,onChange:n}=e;return(0,r.jsx)(_.A,{sx:{flexGrow:1},children:(0,r.jsx)(A.Ay,{value:t,onChange:(e,t)=>{n(t)},min:0,max:100,step:1,sx:{mt:.5}})})};var k=n(2115),f=n(9532),C=n(6656),w=n(2065),y=n(5394);function S(){let[e,t]=(0,k.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.A,{sx:{ml:2},onClick:()=>t(!0),color:"primary",children:(0,r.jsx)(w.A,{})}),(0,r.jsxs)(h.A,{open:e,onClose:()=>t(!1),children:[(0,r.jsx)(d.A,{children:"About"}),(0,r.jsxs)(x.A,{children:[(0,r.jsxs)(u.A,{variant:"body1",children:["閒著沒事就買了",(0,r.jsx)(C.A,{href:"https://色.tw",children:"色.tw"})]}),(0,r.jsxs)(_.A,{display:"flex",alignItems:"center",mt:1,children:[(0,r.jsx)(y.A,{sx:{mr:1}}),(0,r.jsx)(C.A,{href:"https://github.com/nyraa/color-palette",target:"_blank",rel:"noopener",children:"Source code"})]})]})]})]})}function G(){let[e,t]=(0,k.useState)(100),[n,s]=(0,k.useState)({h:0,s:100,v:100}),[l,c]=(0,k.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:a().main,children:[(0,r.jsxs)(_.A,{sx:{display:"flex",pl:4,pr:1,py:1},children:[(0,r.jsx)(b,{saturation:e,onChange:e=>t(e)}),(0,r.jsx)(S,{})]}),(0,r.jsx)(i,{saturation:e,onClick:e=>{s(e),c(!0)}})]}),(0,r.jsx)(v,{open:l,color:n,onClose:()=>c(!1)})]})}},9409:e=>{e.exports={previewBlock:"ColorDialog_previewBlock__S_zxO"}},4919:e=>{e.exports={hsvGradient:"HSVGradient_hsvGradient__uI1nh"}},8334:e=>{e.exports={main:"page_main__GlU4n"}}},e=>{var t=t=>e(e.s=t);e.O(0,[795,158,441,517,358],()=>t(4948)),_N_E=e.O()}]);