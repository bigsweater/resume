!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},r={},a={},s={}.hasOwnProperty,i=/^\.\.?(\/|$)/,n=function(t,e){for(var r,a=[],s=(i.test(e)?t+"/"+e:e).split("/"),n=0,o=s.length;n<o;n++)r=s[n],".."===r?a.pop():"."!==r&&""!==r&&a.push(r);return a.join("/")},o=function(t){return t.split("/").slice(0,-1).join("/")},l=function(e){return function(r){var a=n(o(e),r);return t.require(a,e)}},u=function(t,e){var a=null;a=v&&v.createHot(t);var s={id:t,exports:{},hot:a};return r[t]=s,e(s.exports,l(t),s),s.exports},c=function(t){return a[t]?c(a[t]):t},d=function(t,e){return c(n(o(t),e))},p=function(t,a){null==a&&(a="/");var i=c(t);if(s.call(r,i))return r[i].exports;if(s.call(e,i))return u(i,e[i]);throw new Error("Cannot find module '"+t+"' from '"+a+"'")};p.alias=function(t,e){a[e]=t};var f=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,m=function(t){if(f.test(t)){var e=t.replace(f,"");s.call(a,e)&&a[e].replace(f,"")!==e+"/index"||(a[e]=t)}if(h.test(t)){var r=t.replace(h,"");s.call(a,r)||(a[r]=t)}};p.register=p.define=function(t,a){if("object"==typeof t)for(var i in t)s.call(t,i)&&p.register(i,t[i]);else e[t]=a,delete r[t],m(t)},p.list=function(){var t=[];for(var r in e)s.call(e,r)&&t.push(r);return t};var v=t._hmr&&new t._hmr(d,p,e,r);p._cache=r,p.hmr=v&&v.wrap,p.brunch=!0,t.require=p}}(),function(){var t;"undefined"==typeof window?this:window;require.register("components/Base.vue",function(t,e,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"Base"},r.exports.__esModule&&(r.exports=r.exports["default"])}),require.register("components/Starfield.vue",function(t,e,r){function a(t){return t&&t.__esModule?t:{"default":t}}e("vueify-insert-css").insert(".starfield.debug{z-index:2}.starfield-debug{position:absolute;left:20px;top:20px;color:#fff;font-size:16px;z-index:1;line-height:16px;font-family:Helvetica Neue,Helvetica,arial,sans-serif;font-weight:300}.starfield{margin:0;padding:0;z-index:0}.starfield,.starfield canvas{height:100%;left:0;position:absolute;top:0;width:100%}");Object.defineProperty(t,"__esModule",{value:!0});var s=e("fastdom"),i=a(s),n=e("mainloop.js"),o=a(n),l=e("onecolor"),u=a(l),c=e("stats.js"),d=a(c),p=new d["default"],f=function(){for(var t={},e=[],r=0;r<256;r++)e[r]=(r<16?"0":"")+r.toString(16);return t.generate=function(){var t=4294967295*Math.random()|0,r=4294967295*Math.random()|0,a=4294967295*Math.random()|0,s=4294967295*Math.random()|0;return e[255&t]+e[t>>8&255]+e[t>>16&255]+e[t>>24&255]+"-"+e[255&r]+e[r>>8&255]+"-"+e[r>>16&15|64]+e[r>>24&255]+"-"+e[63&a|128]+e[a>>8&255]+"-"+e[a>>16&255]+e[a>>24&255]+e[255&s]+e[s>>8&255]+e[s>>16&255]+e[s>>24&255]},t}(),h={starColor:{type:String,"default":"rgba(255,255,255,1)"},bgColor:{type:String,"default":"rgba(0,0,0,1)"},mouseAdjust:{type:Boolean,"default":!1},tiltAdjust:{type:Boolean,"default":!1},resizeAdjust:{type:Boolean,"default":!0},resizing:{type:Boolean,"default":!1},easing:{type:Number,"default":1},clickToWarp:{type:Boolean,"default":!1},hyperspace:{type:Boolean,"default":!1},warpFactor:{type:Number,"default":10},opacity:{type:Number,"default":.1},speed:{type:Number,"default":1},quantity:{type:Number,"default":512},debug:{type:Boolean,"default":!1}};t["default"]={name:"Starfield",data:function(){return{mouse:{x:0,y:0},cursor:{x:0,y:0},state:{init:!0,canvas:!1,start:!1,stop:!1,destroy:!1,reset:!1,uid:f.generate(),running:!1}}},props:h,computed:{ids:function(){return{cid:"canvas-"+this.state.uid,vid:"viewport-"+this.state.uid}},colors:function(){return{fill:this.hyperspace?(0,u["default"])(this.bgColor).alpha(this.opacity).cssa():this.bgColor}},compColors:function(){return{stars:(0,u["default"])(this.starColor).hex(),bg:(0,u["default"])(this.bgColor).hex()}},ratio:function(){return{computed:this.quantity/2}},compSpeed:function(){return{lyph:this.hyperspace?this.speed*this.warpFactor:this.speed}},compQuantity:function(){return this.maxStars>0?this.maxStars:this.quantity}},methods:{init:function(){this.state.init=!0,this.state.canvas=!0,this.state.start=!0,this.state.running=!1,this.state.stop=!1,this.state.reset=!1,this.starz(),this.listeners(),this.debug&&(p.showPanel(0),document.body.appendChild(p.dom),p.dom.style.right="20px",p.dom.style.left="auto")},starz:function(){var t=this,e={w:0,h:0,el:null,ctx:null,cw:0,ch:0,x:0,y:0,z:0,star:{colorRatio:0,arr:[]},prevTime:0},r={measure:{viewport:function(){i["default"].measure(function(){e.w=t.$el.clientWidth,e.h=t.$el.clientHeight,e.x=Math.round(e.w/2),e.y=Math.round(e.h/2),e.z=(e.w+e.h)/2,e.star.colorRatio=1/e.z,0!==t.cursor.x&&0!==t.cursor.y||(t.cursor.x=e.x,t.cursor.y=e.y),0!==t.mouse.x&&0!==t.mouse.y||(t.mouse.x=t.cursor.x-e.x,t.mouse.y=t.cursor.y-e.y)}),i["default"]["catch"]=function(){}}}},a={viewport:function(){r.measure.viewport()},canvas:function(){r.measure.viewport();var a=document.getElementById(t.ids.cid);e.ctx=a.getContext("2d"),e.ctx.canvas.width=e.w,e.ctx.canvas.height=e.h,e.ctx.fillStyle=t.colors.fill,e.ctx.strokeStyle=t.starColor},bigBang:function(){var r=e.star.arr.length===t.compQuantity,a=!1;e.star.arr.length>0&&(0===e.star.arr[0][0]&&e.star.arr[0][0]===1/0||(a=!0));var s=function(){e.star.arr=new Array(t.compQuantity);for(var r=0;r<t.compQuantity;r++)e.star.arr[r]=new Array(8),e.star.arr[r][0]=Math.random()*e.w*2-2*e.x,e.star.arr[r][1]=Math.random()*e.h*2-2*e.y,e.star.arr[r][2]=Math.round(Math.random()*e.z),e.star.arr[r][3]=0,e.star.arr[r][4]=0,e.star.arr[r][5]=0,e.star.arr[r][6]=0,e.star.arr[r][7]=!0};r?r&&!a&&s():s()},resize:function(){if(t.resizing){var s=e.star;if(r.measure.viewport(),e.cw=e.ctx.canvas.width,e.ch=e.ctx.canvas.height,e.cw!==e.w||e.ch!==e.h){e.x=Math.round(e.w/2),e.y=Math.round(e.h/2),e.z=(e.w+e.h)/2,e.star.colorRatio=1/e.z;var i=e.w/e.cw,n=e.h/e.ch;if(e.ctx.canvas.width=e.w,e.ctx.canvas.height=e.h,e.star.arr.length)for(var o=0;o<t.compQuantity;o++)e.star.arr[o],e.star.arr[o][0]=s.arr[o][0]*i,e.star.arr[o][1]=s.arr[o][1]*n,e.star.arr[o][3]=e.x+e.star.arr[o][0]/e.star.arr[o][2]*t.ratio.computed,e.star.arr[o][4]=e.y+e.star.arr[o][1]/e.star.arr[o][2]*t.ratio.computed;else a.bigBang();e.ctx.fillStyle=t.colors.fill,e.ctx.strokeStyle=t.starColor,t.resizing=!1}}},anim:{init:function(){o["default"].setBegin(a.anim.begin).setUpdate(a.anim.update).setDraw(a.anim.draw).setEnd(a.anim.end)},start:function(){o["default"].start(),t.resizing=!0},begin:function(){t.debug&&p.begin(),a.resize(),0===e.prevTime&&(e.prevTime=Date.now()),t.state.running=o["default"].isRunning()},update:function(){if(t.mouse.x=(t.cursor.x-e.x)/t.easing,t.mouse.y=(t.cursor.y-e.y)/t.easing,e.star.arr.length>0)for(var r=0;r<t.compQuantity;r++)e.star.arr[r][7]=!0,e.star.arr[r][5]=e.star.arr[r][3],e.star.arr[r][6]=e.star.arr[r][4],e.star.arr[r][0]+=t.mouse.x>>4,e.star.arr[r][0]>e.x<<1&&(e.star.arr[r][0]-=e.w<<1,e.star.arr[r][7]=!1),e.star.arr[r][0]<-e.x<<1&&(e.star.arr[r][0]+=e.w<<1,e.star.arr[r][7]=!1),e.star.arr[r][1]+=t.mouse.y>>4,e.star.arr[r][1]>e.y<<1&&(e.star.arr[r][1]-=e.h<<1,e.star.arr[r][7]=!1),e.star.arr[r][1]<-e.y<<1&&(e.star.arr[r][1]+=e.h<<1,e.star.arr[r][7]=!1),e.star.arr[r][2]-=t.compSpeed.lyph,e.star.arr[r][2]>e.z&&(e.star.arr[r][2]-=e.z,e.star.arr[r][7]=!1),e.star.arr[r][2]<0&&(e.star.arr[r][2]+=e.z,e.star.arr[r][7]=!1),e.star.arr[r][3]=e.x+e.star.arr[r][0]/e.star.arr[r][2]*t.ratio.computed,e.star.arr[r][4]=e.y+e.star.arr[r][1]/e.star.arr[r][2]*t.ratio.computed},draw:function(){if(e.ctx.fillStyle=t.colors.fill,e.ctx.fillRect(0,0,e.w,e.h),e.ctx.strokeStyle=t.starColor,e.star.arr.length)for(var r=0;r<t.compQuantity;r++)e.star.arr[r][5]>0&&e.star.arr[r][5]<e.w&&e.star.arr[r][6]>0&&e.star.arr[r][6]<e.h&&e.star.arr[r][7]&&(e.ctx.lineWidth=2*(1-e.star.colorRatio*e.star.arr[r][2]),e.ctx.beginPath(),e.ctx.moveTo(e.star.arr[r][5],e.star.arr[r][6]),e.ctx.lineTo(e.star.arr[r][3],e.star.arr[r][4]),e.ctx.stroke(),e.ctx.closePath())},stop:function(){o["default"].stop(),t.state.running=o["default"].isRunning()},end:function(r,a){t.debug&&p.end();var s=Date.now()-e.prevTime;r<30&&s>=1e3&&(t.stop(),o["default"].resetFrameDelta(),t.quantity=t.quantity-10,t.reset(),t.compQuantity<32&&t.stop(),e.prevTime=0),a&&o["default"].resetFrameDelta()},reset:function(){t.stop(),a.resetDims(),t.init()},destroy:function(){t.stop(),a.resetDims(),a=null,e=null}},resetDims:function(){e.x=0,e.y=0,e.z=0,e.w=0,e.h=0,e.cw=0,e.ch=0}};t.state.destroy&&(t.state.destroy=!1,a.anim.destroy()),t.state.stop&&(t.state.stop=!1,a.anim.stop()),t.state.reset&&(t.state.reset=!1,a.anim.reset()),t.state.init&&(t.state.init=!1,a.viewport(),a.anim.init()),t.state.canvas&&(t.state.canvas=!1,a.canvas()),t.state.start&&(t.state.start=!1,a.anim.start()),t.listeners()},reset:function(){this.state.reset=!0,this.starz()},stop:function(){this.state.stop=!0,this.starz()},start:function(){this.state.start=!0,this.starz()},listeners:function(){var t=this.$el.parentNode;this.resizeAdjust?window.addEventListener("resize",this.resizeHandler):t.removeEventListener("resize",this.resizeHandler),this.mouseAdjust?t.addEventListener("mousemove",this.mouseHandler):t.removeEventListener("mousemove",this.mouseHandler),this.tiltAdjust?window.addEventListener("deviceorientation",this.tiltHandler):window.removeEventListener("deviceorientation",this.tiltHandler),this.clickToWarp?(t.addEventListener("mousedown",this.clickHandler),t.addEventListener("mouseup",this.clickHandler)):(t.removeEventListener("mousedown",this.clickHandler),t.removeEventListener("mouseup",this.clickHandler))},resizeHandler:function(t){this.resizing=!0},mouseHandler:function(t){var e=this,r=this.$el.parentNode;i["default"].measure(function(){e.cursor.x=t.pageX||t.clientX+r.scrollLeft-r.clientLeft,e.cursor.y=t.pageY||t.clientY+r.scrollTop-r.clientTop})},tiltHandler:function(t){var e=this;null!==t.beta&&null!==t.gamma&&!function(){var r=e,a=t.gamma,s=t.beta;i["default"].measure(function(){r.cursor.x=r.$el.clientWidth/2+5*a,r.cursor.y=r.$el.clientHeight/2+5*s})}()},clickHandler:function(t){"mousedown"===t.type&&(this.hyperspace=!0),"mouseup"===t.type&&(this.hyperspace=!1)}},ready:function(){var t=this;setTimeout(function(){t.init()},100)},beforeDestroy:function(){this.state.init=!1,this.state.canvas=!1,this.state.star=!1,this.state.start=!1,this.state.stop=!1,this.state.destroy=!0,this.mouseAdjust=!1,this.tiltAdjust=!1,this.clickToWarp=!1,this.hyperspace=!1,this.listeners(),this.starz()}},r.exports.__esModule&&(r.exports=r.exports["default"]),("function"==typeof r.exports?r.exports.options:r.exports).template='<div class=starfield :class="{ \'debug\' : debug }" id="{{ ids.vid }}"><canvas id="{{ ids.cid }}"></canvas><form v-if=debug class=starfield-debug><div><label for=isHyperspace><input type=checkbox id=isHyperspace v-model=hyperspace>Hyperspace</label><label for=warpFactor>| Warp Factor</label><input type=number name=warpFactor id=warpFactor placeholder="{{ warpFactor }}" min=1 max=1000 v-model=warpFactor></div><div><label for=clickToWarp><input type=checkbox id=clickToWarp v-model=clickToWarp @change=listeners>Click to warp</label></div><div><label for=mouseAdjust><input type=checkbox id=mouseAdjust v-model=mouseAdjust @change=listeners>React to mouse movements</label></div><div><label for=tiltAdjust><input type=checkbox id=tiltAdjust v-model=tiltAdjust @change=listeners>React to tilt events</label></div><div><label for=easing>Friction:</label><input type=number name=easing id=easing placeholder="{{ easing }}" min=0 max=100 step=1 v-model=easing></div><div><label for=quantity>Number of stars:</label><input type=number name=quantity id=quantity placeholder="{{ quantity }}" min=0 max=8192 step=1 v-model=quantity @change=reset></div><div><label for=starColor>Star color:</label><input type=color value="{{ compColors.stars }}" v-model=starColor @change=reset></div><div><label for=bgColor>Background color:</label><input type=color value="{{ compColors.bg }}" v-model=bgColor></div><div><label for=speed>Speed:</label><input type=number name=speed id=speed placeholder="{{ speed }}" min=-100 max=100 step=1 v-model=speed></div><div style="margin-top: 20px; padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.25); font-size: 0.8em"><input type=button value=Start style="color: #000" disabled @click=start()> | <input type=button value=Stop style="color: #000" disabled @click=stop()> | <input type=button value=Reset style="color: #000" @click=reset()></div></form></div>'}),require.register("initialize.js",function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=e("vue"),i=a(s),n=e("components/Starfield.vue"),o=a(n);new i["default"]({el:"#vue",components:{Starfield:o["default"]},template:'<div><starfield click-to-warp bg-color="#f58220" star-color="#ffffff" :easing="13" :quantity="512"></starfield></div>',methods:{}})}),require.alias("process/browser.js","process"),t=require("process"),require.register("___globals___",function(t,e,r){})}(),require("___globals___"),require("initialize");