(this["webpackJsonpmaterial-pg-01"]=this["webpackJsonpmaterial-pg-01"]||[]).push([[0],{66:function(e,t,a){e.exports=a(80)},71:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},73:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),r=a.n(c),o=(a(71),a(72),a(73),a(49),a(5)),s=a(115),l=a(114),u=a(111),m=a(112),v=a(108),p=a(113),h=a(35),d=a.n(h),f=a(81),g=a(109),y=a(110);Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),Object(o.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(m.a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(36),k=a.n(b),B=a(44),E=a(45),w=a(46),x=a(50),C=a(48),A=a(47),O=a(20);function j(){return i.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",i.a.createElement(v.a,{color:"inherit",href:"https://audible-tools.github.io/"},"audible-tools")," ",(new Date).getFullYear(),".")}var D=function(e){Object(x.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).DarkerDisabledTextField=Object(o.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(m.a),n.setChecksum=function(e){e.length>40||n.setState({checksum:e})},n.isChecksumValid=function(){var e=n.state.checksum;return RegExp("[a-f0-9]{40}").test(e)},n.requestActivationBytes=function(){var e=n.state.checksum;O.a.event({category:"Action",action:"Request Activation Bytes",checksum:e,value:e}),fetch("https://aaxactivationserviceapi.azurewebsites.net/api/v2/activation/"+e).then((function(e){return e.json()})).then((function(t){var a=t.success,i=t.activationBytes;!0===a?(n.setState({activationBytes:t.activationBytes}),O.a.event({category:"Action",action:"Recevived valid activation bytes",checksum:e,activationBytes:i,value:"".concat(e," ").concat(i),success:!0})):(n.setState({activationBytes:"UNKNOWN"}),O.a.event({category:"Action",action:"Recevived invalid activation bytes",checksum:e,activationBytes:i,value:"".concat(e," ").concat(i),success:!1}))}),(function(e){n.setState({activationBytes:"UNKNOWN"})}))},n.acceptFile=function(){var e=Object(B.a)(k.a.mark((function e(t){var a,i,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t[0]).name.endsWith(".aax")){e.next=4;break}return alert("FileType not supported!"),e.abrupt("return");case 4:return i=a.slice(653,673),e.t0=n,e.next=8,i.arrayBuffer();case 8:e.t1=e.sent,c=e.t0.buf2hex.call(e.t0,e.t1),n.setChecksum(c),n.requestActivationBytes();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={checksum:""},n}return Object(w.a)(a,[{key:"buf2hex",value:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.checksum,c=a.activationBytes;return i.a.createElement(y.a,{component:"main",maxWidth:"xs"},i.a.createElement(u.a,null),i.a.createElement("div",{className:t.paper},i.a.createElement(s.a,{className:t.avatar},i.a.createElement(d.a,null)),i.a.createElement(f.a,{component:"h1",variant:"h5"},"AAX Checksum Resolver"),i.a.createElement("form",{className:t.form,noValidate:!0},i.a.createElement(A.a,{noClick:!0,onDrop:function(t){console.log(t),e.acceptFile(t)}},(function(t){var a=t.getRootProps,c=t.getInputProps;return i.a.createElement("section",null,i.a.createElement("div",a(),i.a.createElement("input",c()),i.a.createElement(m.a,{error:!e.isChecksumValid(),variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"checksum",label:"Checksum or Drag&Drop .aax file",name:"checksum",autoComplete:"checksum",autoFocus:!0,onChange:function(t){return e.setChecksum(t.target.value)},value:n})))})),i.a.createElement(l.a,{fullWidth:!0,variant:"contained",onClick:function(){e.requestActivationBytes()},disabled:!this.isChecksumValid()},"Request Activation Bytes"),i.a.createElement(this.DarkerDisabledTextField,{value:c,disabled:!0,variant:"outlined",margin:"normal",fullWidth:!0,id:"activationBytes",label:c?"":"Activation Bytes",name:"activationBytes",autoComplete:"activationBytes","aria-readonly":!0,InputProps:{readOnly:!0}}))),i.a.createElement(p.a,{mt:1},i.a.createElement(j,null)))}}]),a}(i.a.Component),N=Object(o.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}}))(D);O.a.initialize("UA-174657678-1"),O.a.pageview(window.location.pathname+window.location.search),r.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.8bdafc37.chunk.js.map