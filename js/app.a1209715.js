(function(e){function t(t){for(var n,o,c=t[0],f=t[1],d=t[2],i=0,u=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);l&&l(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,c=1;c<s.length;c++){var f=s[c];0!==a[f]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=f;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"29d4":function(e,t,s){},"45cb":function(e,t,s){"use strict";var n=s("aef8"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");for(var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[s("a-layout-sider",{attrs:{collapsible:""},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[s("div",{attrs:{id:"logo"}},[e._v(" Algorigame ")]),s("a-menu",{attrs:{theme:"dark","default-selected-keys":["1"],mode:"inline"}},[s("a-menu-item",{key:"1"},[s("a-icon",{attrs:{type:"pie-chart"}}),s("span",[e._v("Dijkstra")])],1),s("a-menu-item",{key:"2"},[s("a-icon",{attrs:{type:"desktop"}}),s("span",[e._v("to be updated")])],1)],1)],1),s("a-layout",[s("a-layout-content",{staticStyle:{margin:"0 16px"}},[s("graph")],1),s("a-layout-footer",{staticStyle:{"text-align":"center"}},[e._v(" Author zjhl2 ")])],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{attrs:{width:"100%",height:"1000",version:"1.1"}},[s("g",[e._l(e.edges,(function(t){return s("edge",{key:t.id,attrs:{x1:e.nodes[t.from].x,y1:e.nodes[t.from].y,x2:e.nodes[t.to].x,y2:e.nodes[t.to].y,len:t.length}})})),e._l(e.nodes,(function(t){return s("node",{key:t.id,ref:"nodes",refInFor:!0,attrs:{id:t.id,x:t.x,y:t.y,r:t.r},nativeOn:{click:function(s){return e.click11(t.id)}}})}))],2)])},c=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("g",{attrs:{id:e.id}},[s("circle",{attrs:{cx:e.x,cy:e.y,r:e.r,fill:e.color,stroke:e.color,"stroke-width":"4"}}),s("text",{attrs:{x:e.x,y:e.y}},[e._v(e._s(e.distance))])])},d=[],l={name:"Node",props:["id","x","y","r"],data:function(){return{status:0,distance:0}},created:function(){0==this.id&&(this.status=1)},computed:{color:function(){return 0==this.status?"gray":1==this.status?"orange":2==this.status?"greenyellow":"black"}}},i=l,u=(s("45cb"),s("2877")),j=Object(u["a"])(i,f,d,!1,null,"fd795dd2",null),b=j.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("g",[s("line",{attrs:{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2}}),s("text",{attrs:{x:(e.x1+e.x2)/2-5,y:(e.y1+e.y2)/2-5}},[e._v(e._s(e.len))])])},m=[],g={name:"Edge",props:["x1","y1","x2","y2","len"]},y=g,p=(s("6a42"),Object(u["a"])(y,h,m,!1,null,"a197a910",null)),v=p.exports,x={nodes:[{id:0,x:100,y:100,r:30},{id:1,x:800,y:100,r:30},{id:2,x:600,y:200,r:30},{id:3,x:200,y:300,r:30},{id:4,x:400,y:400,r:30},{id:5,x:100,y:400,r:30},{id:6,x:200,y:500,r:30},{id:7,x:900,y:300,r:30},{id:8,x:500,y:500,r:30},{id:9,x:1e3,y:500,r:30}],edges:[{from:0,to:1,length:20},{from:1,to:2,length:10},{from:0,to:2,length:10},{from:2,to:3,length:5},{from:3,to:7,length:10},{from:3,to:4,length:10},{from:5,to:3,length:5},{from:4,to:7,length:9},{from:4,to:8,length:10},{from:6,to:8,length:5},{from:0,to:3,length:4},{from:5,to:6,length:10},{from:0,to:5,length:8},{from:2,to:7,length:9},{from:5,to:6,length:10},{from:1,to:7,length:3},{from:9,to:7,length:4},{from:4,to:6,length:10},{from:5,to:4,length:3},{from:7,to:8,length:10},{from:8,to:9,length:8}]},k=new Array(x.nodes.length),_=0;_<x.nodes.length;_++)k[_]=[];for(var z=0;z<x.edges.length;z++){var w=x.edges[z].from,O=x.edges[z].to,E=x.edges[z].length;k[w].push({to:O,len:E}),k[O].push({to:w,len:E})}var S={name:"Graph",components:{Node:b,Edge:v},data:function(){return{nodes:x.nodes,edges:x.edges,links:k}},methods:{click11:function(e){var t=this.$refs.nodes,s=t[e];if(1==s.status){s.status=2;for(var n=0;n<k[e].length;n++){var a=k[e][n],r=a.to,o=a.len;0==t[r].status?(t[r].status=1,t[r].distance=s.distance+o):1==t[r].status&&(t[r].distance=Math.min(t[r].distance,s.distance+o))}}}}},P=S,M=(s("e7c3"),Object(u["a"])(P,o,c,!1,null,"43895850",null)),$=M.exports,N={components:{Graph:$},data:function(){return{collapsed:!1}}},T=N,A=(s("034f"),Object(u["a"])(T,a,r,!1,null,null,null)),D=A.exports,q=s("f23d");s("202f");n["a"].use(q["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(D)}}).$mount("#app")},"6a42":function(e,t,s){"use strict";var n=s("f0f0"),a=s.n(n);a.a},"85ec":function(e,t,s){},aef8:function(e,t,s){},e7c3:function(e,t,s){"use strict";var n=s("29d4"),a=s.n(n);a.a},f0f0:function(e,t,s){}});
//# sourceMappingURL=app.a1209715.js.map