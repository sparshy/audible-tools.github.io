(this["webpackJsonpmaterial-pg-01"]=this["webpackJsonpmaterial-pg-01"]||[]).push([[0],{65:function(e,t,a){e.exports=a(79)},70:function(e,t,a){},71:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},72:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(70),a(71),a(72),a(48),a(5)),s=a(114),l=a(113),u=a(110),m=a(111),p=a(107),h=a(112),d=a(34),v=a.n(d),f=a(80),g=a(108),y=a(109);Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),Object(c.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(m.a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(35),k=a.n(b),E=a(43),x=a(44),B=a(45),C=a(49),w=a(47),O=a(46);function j(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(p.a,{color:"inherit",href:"https://audible-tools.github.io/"},"audible-tools")," ",(new Date).getFullYear(),".")}var D=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).DarkerDisabledTextField=Object(c.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(m.a),n.setChecksum=function(e){e.length>40||n.setState({checksum:e})},n.isChecksumValid=function(){var e=n.state.checksum;return RegExp("[a-f0-9]{40}").test(e)},n.requestActivationBytes=function(){var e=n.state.checksum;fetch("https://aaxactivationserviceapi.azurewebsites.net/api/v2/activation/"+e).then((function(e){return e.json()})).then((function(e){var t=e.success;e.activationBytes;!0===t?n.setState({activationBytes:e.activationBytes}):n.setState({activationBytes:"UNKNOWN"})}),(function(e){n.setState({activationBytes:"UNKNOWN"})}))},n.acceptFile=function(){var e=Object(E.a)(k.a.mark((function e(t){var a,r,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t[0]).name.endsWith(".aax")){e.next=4;break}return alert("FileType not supported!"),e.abrupt("return");case 4:return r=a.slice(653,673),e.t0=n,e.next=8,r.arrayBuffer();case 8:e.t1=e.sent,i=e.t0.buf2hex.call(e.t0,e.t1),n.setChecksum(i),n.requestActivationBytes();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={checksum:""},n}return Object(B.a)(a,[{key:"buf2hex",value:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.checksum,i=a.activationBytes;return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(s.a,{className:t.avatar},r.a.createElement(v.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"AAX Checksum Resolver"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(O.a,{noClick:!0,onDrop:function(t){console.log(t),e.acceptFile(t)}},(function(t){var a=t.getRootProps,i=t.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",a(),r.a.createElement("input",i()),r.a.createElement(m.a,{error:!e.isChecksumValid(),variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"checksum",label:"Checksum or Drag&Drop .aax file",name:"checksum",autoComplete:"checksum",autoFocus:!0,onChange:function(t){return e.setChecksum(t.target.value)},value:n})))})),r.a.createElement(l.a,{fullWidth:!0,variant:"contained",onClick:function(){e.requestActivationBytes()},disabled:!this.isChecksumValid()},"Request Activation Bytes"),r.a.createElement(this.DarkerDisabledTextField,{value:i,disabled:!0,variant:"outlined",margin:"normal",fullWidth:!0,id:"activationBytes",label:i?"":"Activation Bytes",name:"activationBytes",autoComplete:"activationBytes","aria-readonly":!0,InputProps:{readOnly:!0}}))),r.a.createElement(h.a,{mt:1},r.a.createElement(j,null)))}}]),a}(r.a.Component),A=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}}))(D);o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.b7efe26b.chunk.js.map