(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0054cfb5"],{"0ccb":function(t,e,r){var n=r("50c4"),o=r("1148"),i=r("1d80"),a=Math.ceil,c=function(t){return function(e,r,c){var s,u,l=String(i(e)),d=l.length,f=void 0===c?" ":String(c),g=n(r);return g<=d||""==f?l:(s=g-d,u=o.call(f,a(s/f.length)),u.length>s&&(u=u.slice(0,s)),t?l+u:u+l)}};t.exports={start:c(!1),end:c(!0)}},"0d03":function(t,e,r){var n=r("6eeb"),o=Date.prototype,i="Invalid Date",a="toString",c=o[a],s=o.getTime;new Date(NaN)+""!=i&&n(o,a,(function(){var t=s.call(this);return t===t?c.call(this):i}))},1148:function(t,e,r){"use strict";var n=r("a691"),o=r("1d80");t.exports="".repeat||function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"265e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t._l(t.imgs,(function(t){return r("v-list",{key:t.id,staticStyle:{display:"inline"}},[r("img",{attrs:{src:t.url,width:"14%"}})])})),r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("video",{ref:"rVideo",staticClass:"style_video"})]),r("v-col",{staticClass:"mt-5 text-center",attrs:{cols:"12"}},[r("p",[t._v("iOS는 지원하지 않습니다.")])])],1),r("div",{staticClass:"text-center my-3"},[this.bIsWait?t._e():r("v-btn",{attrs:{color:"red",fab:"",dark:"",bottom:""},on:{click:function(e){return t.fnCameraCapture()}}},[r("v-icon",[t._v("camera")])],1),this.bIsWait?r("v-progress-circular",{attrs:{size:50,indeterminate:"",color:"grey"}}):t._e()],1)],2)},o=[],i=(r("7db0"),r("d81d"),r("accc"),r("0d03"),r("05a2")),a={name:"App",firebase:{oTodos:i["b"]},data:function(){return{imgs:[{url:r("ced5")},{url:r("688a")},{url:r("24bf")},{url:r("538a")},{url:r("972b")},{url:r("c776")},{url:r("16e7")}],oTodos:[],oVideoStream:null,itemPic:null,bIsWait:!1}},created:function(){var t=this.$route.params.p_id;this.itemPic=this.oTodos.find((function(e){return e[".key"]===t}))},mounted:function(){var t=this;navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){t.oVideoStream=e,t.$refs.rVideo.srcObject=e,t.$refs.rVideo.play()}))["catch"]((function(t){console.log(t)}))},destroyed:function(){var t=this.oVideoStream.getTracks();t.map((function(t){return t.stop()}))},methods:{fnCameraCapture:function(){var t=this.itemPic;this.bIsWait=!0;var e=this.oVideoStream.getVideoTracks()[0],r=new window.ImageCapture(e),n={imageHeight:359,imageWidth:640,fillLightMode:"off"},o=this;return r.takePhoto(n).then((function(e){var r=o.oVideoStream.getTracks();r.map((function(t){return t.stop()})),console.log("캡처: "+e.type+", "+e.size+"바이트");var n=(new Date).toISOString(),a=i["a"].ref("images").child("pic"+n).put(e);a.on("state_changed",(function(t){var e=t.bytesTransferred/t.totalBytes*100;console.log("업로드: "+e+"% 완료",t.state)}),(function(t){console.log(t)}),(function(){a.snapshot.ref.getDownloadURL().then((function(e){console.log("업로드URL:",e),i["b"].child(t[".key"]).update({b_completed:!0,filename:"pic"+n,url:e}).then(o.$router.push("/"))}))}))}))}}},c=a,s=(r("2b75"),r("2877")),u=r("6544"),l=r.n(u),d=r("8336"),f=r("62ad"),g=r("a523"),p=r("132d"),v=r("8860"),h=r("490a"),m=r("0fd9b"),b=Object(s["a"])(c,n,o,!1,null,null,null);e["default"]=b.exports;l()(b,{VBtn:d["a"],VCol:f["a"],VContainer:g["a"],VIcon:p["a"],VList:v["a"],VProgressCircular:h["a"],VRow:m["a"]})},"2b75":function(t,e,r){"use strict";var n=r("f44f"),o=r.n(n);o.a},"2d00":function(t,e,r){var n,o,i=r("da84"),a=r("342f"),c=i.process,s=c&&c.versions,u=s&&s.v8;u?(n=u.split("."),o=n[0]+n[1]):a&&(n=a.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/),n&&(o=n[1]))),t.exports=o&&+o},"342f":function(t,e,r){var n=r("d066");t.exports=n("navigator","userAgent")||""},"64e5":function(t,e,r){"use strict";var n=r("d039"),o=r("0ccb").start,i=Math.abs,a=Date.prototype,c=a.getTime,s=a.toISOString;t.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=s.call(new Date(-50000000000001))}))||!n((function(){s.call(new Date(NaN))}))?function(){if(!isFinite(c.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),r=t.getUTCMilliseconds(),n=e<0?"-":e>9999?"+":"";return n+o(i(e),n?6:4,0)+"-"+o(t.getUTCMonth()+1,2,0)+"-"+o(t.getUTCDate(),2,0)+"T"+o(t.getUTCHours(),2,0)+":"+o(t.getUTCMinutes(),2,0)+":"+o(t.getUTCSeconds(),2,0)+"."+o(r,3,0)+"Z"}:s},accc:function(t,e,r){var n=r("23e7"),o=r("64e5");n({target:"Date",proto:!0,forced:Date.prototype.toISOString!==o},{toISOString:o})},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),a=r("ae40"),c=i("map"),s=a("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},f44f:function(t,e,r){}}]);
//# sourceMappingURL=chunk-0054cfb5.bcb55d63.js.map