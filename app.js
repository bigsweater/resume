!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},r={},a={},n={}.hasOwnProperty,s=/^\.\.?(\/|$)/,i=function(t,e){for(var r,a=[],n=(s.test(e)?t+"/"+e:e).split("/"),i=0,o=n.length;i<o;i++)r=n[i],".."===r?a.pop():"."!==r&&""!==r&&a.push(r);return a.join("/")},o=function(t){return t.split("/").slice(0,-1).join("/")},l=function(e){return function(r){var a=i(o(e),r);return t.require(a,e)}},u=function(t,e){var a=null;a=v&&v.createHot(t);var n={id:t,exports:{},hot:a};return r[t]=n,e(n.exports,l(t),n),n.exports},c=function(t){return a[t]?c(a[t]):t},d=function(t,e){return c(i(o(t),e))},p=function(t,a){null==a&&(a="/");var s=c(t);if(n.call(r,s))return r[s].exports;if(n.call(e,s))return u(s,e[s]);throw new Error("Cannot find module '"+t+"' from '"+a+"'")};p.alias=function(t,e){a[e]=t};var f=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,m=function(t){if(f.test(t)){var e=t.replace(f,"");n.call(a,e)&&a[e].replace(f,"")!==e+"/index"||(a[e]=t)}if(h.test(t)){var r=t.replace(h,"");n.call(a,r)||(a[r]=t)}};p.register=p.define=function(t,a){if("object"==typeof t)for(var s in t)n.call(t,s)&&p.register(s,t[s]);else e[t]=a,delete r[t],m(t)},p.list=function(){var t=[];for(var r in e)n.call(e,r)&&t.push(r);return t};var v=t._hmr&&new t._hmr(d,p,e,r);p._cache=r,p.hmr=v&&v.wrap,p.brunch=!0,t.require=p}}(),function(){var t;window;require.register("components/Base.vue",function(t,e,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"Base"},r.exports.__esModule&&(r.exports=r.exports["default"]),("function"==typeof r.exports?r.exports.options:r.exports).template="\n",r.hot&&!function(){r.hot.accept();var t=e("vue-hot-reload-api");if(t.install(e("vue"),!0),t.compatible){var a="app/components/Base.vue";r.hot.data?t.update(a,r.exports,("function"==typeof r.exports?r.exports.options:r.exports).template):t.createRecord(a,r.exports)}}()}),require.register("components/Starfield.vue",function(t,e,r){function a(t){return t&&t.__esModule?t:{"default":t}}var n=e("vueify-insert-css").insert("\n.starfield.debug {\n  z-index: 2;\n}\n.starfield-debug {\n  position: absolute;\n  left: 20px;\n  top:  20px;\n  color: #fff;\n  font-size: 16px;\n  z-index: 1;\n  line-height: 16px;\n  font-family: 'Helvetica Neue', Helvetica, arial, sans-serif;\n  font-weight: 300;\n}\n.starfield {\n  height:   100%;\n  left:     0;\n  margin:   0;\n  padding:  0;\n  position: absolute;\n  top:      0;\n  width:    100%;\n  z-index:  0;\n}\n\n.starfield canvas {\n  height:   100%;\n  left:     0;\n  position: absolute;\n  top:      0;\n  width:    100%;\n}\n\n");Object.defineProperty(t,"__esModule",{value:!0});var s=e("fastdom"),i=a(s),o=e("mainloop.js"),l=a(o),u=e("onecolor"),c=a(u),d=e("stats.js"),p=a(d),f=new p["default"],h=function(){for(var t={},e=[],r=0;r<256;r++)e[r]=(r<16?"0":"")+r.toString(16);return t.generate=function(){var t=4294967295*Math.random()|0,r=4294967295*Math.random()|0,a=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return e[255&t]+e[t>>8&255]+e[t>>16&255]+e[t>>24&255]+"-"+e[255&r]+e[r>>8&255]+"-"+e[r>>16&15|64]+e[r>>24&255]+"-"+e[63&a|128]+e[a>>8&255]+"-"+e[a>>16&255]+e[a>>24&255]+e[255&n]+e[n>>8&255]+e[n>>16&255]+e[n>>24&255]},t}(),m={starColor:{type:String,"default":"rgba(255,255,255,1)"},bgColor:{type:String,"default":"rgba(0,0,0,1)"},mouseAdjust:{type:Boolean,"default":!1},tiltAdjust:{type:Boolean,"default":!1},resizeAdjust:{type:Boolean,"default":!0},resizing:{type:Boolean,"default":!1},easing:{type:Number,"default":1},clickToWarp:{type:Boolean,"default":!1},hyperspace:{type:Boolean,"default":!1},warpFactor:{type:Number,"default":10},opacity:{type:Number,"default":.1},speed:{type:Number,"default":1},quantity:{type:Number,"default":512},debug:{type:Boolean,"default":!1}};t["default"]={name:"Starfield",data:function(){return{mouse:{x:0,y:0},cursor:{x:0,y:0},state:{init:!0,canvas:!1,start:!1,stop:!1,destroy:!1,reset:!1,uid:h.generate(),running:!1}}},props:m,computed:{ids:function(){return{cid:"canvas-"+this.state.uid,vid:"viewport-"+this.state.uid}},colors:function(){return{fill:this.hyperspace?(0,c["default"])(this.bgColor).alpha(this.opacity).cssa():this.bgColor}},compColors:function(){return{stars:(0,c["default"])(this.starColor).hex(),bg:(0,c["default"])(this.bgColor).hex()}},ratio:function(){return{computed:this.quantity/2}},compSpeed:function(){return{lyph:this.hyperspace?this.speed*this.warpFactor:this.speed}},compQuantity:function(){return this.maxStars>0?this.maxStars:this.quantity}},methods:{init:function(){this.state.init=!0,this.state.canvas=!0,this.state.start=!0,this.state.running=!1,this.state.stop=!1,this.state.reset=!1,this.starz(),this.listeners(),this.debug&&(f.showPanel(0),document.body.appendChild(f.dom),f.dom.style.right="20px",f.dom.style.left="auto")},starz:function(){var t=this,e={w:0,h:0,el:null,ctx:null,cw:0,ch:0,x:0,y:0,z:0,star:{colorRatio:0,arr:[]},prevTime:0},r={measure:{viewport:function(){i["default"].measure(function(){e.w=t.$el.clientWidth,e.h=t.$el.clientHeight,e.x=Math.round(e.w/2),e.y=Math.round(e.h/2),e.z=(e.w+e.h)/2,e.star.colorRatio=1/e.z,0!==t.cursor.x&&0!==t.cursor.y||(t.cursor.x=e.x,t.cursor.y=e.y),0!==t.mouse.x&&0!==t.mouse.y||(t.mouse.x=t.cursor.x-e.x,t.mouse.y=t.cursor.y-e.y)}),i["default"]["catch"]=function(){}}}},a={viewport:function(){r.measure.viewport()},canvas:function(){r.measure.viewport();var a=document.getElementById(t.ids.cid);e.ctx=a.getContext("2d"),e.ctx.canvas.width=e.w,e.ctx.canvas.height=e.h,e.ctx.fillStyle=t.colors.fill,e.ctx.strokeStyle=t.starColor},bigBang:function(){var r=e.star.arr.length===t.compQuantity,a=!1;e.star.arr.length>0&&(0===e.star.arr[0][0]&&e.star.arr[0][0]===1/0||(a=!0));var n=function(){e.star.arr=new Array(t.compQuantity);for(var r=0;r<t.compQuantity;r++)e.star.arr[r]=new Array(8),e.star.arr[r][0]=Math.random()*e.w*2-2*e.x,e.star.arr[r][1]=Math.random()*e.h*2-2*e.y,e.star.arr[r][2]=Math.round(Math.random()*e.z),e.star.arr[r][3]=0,e.star.arr[r][4]=0,e.star.arr[r][5]=0,e.star.arr[r][6]=0,e.star.arr[r][7]=!0};r?r&&!a&&n():n()},resize:function(){if(t.resizing){var n=e.star;if(r.measure.viewport(),e.cw=e.ctx.canvas.width,e.ch=e.ctx.canvas.height,e.cw!==e.w||e.ch!==e.h){e.x=Math.round(e.w/2),e.y=Math.round(e.h/2),e.z=(e.w+e.h)/2,e.star.colorRatio=1/e.z;var s=e.w/e.cw,i=e.h/e.ch;if(e.ctx.canvas.width=e.w,e.ctx.canvas.height=e.h,e.star.arr.length)for(var o=0;o<t.compQuantity;o++)e.star.arr[o],e.star.arr[o][0]=n.arr[o][0]*s,e.star.arr[o][1]=n.arr[o][1]*i,e.star.arr[o][3]=e.x+e.star.arr[o][0]/e.star.arr[o][2]*t.ratio.computed,e.star.arr[o][4]=e.y+e.star.arr[o][1]/e.star.arr[o][2]*t.ratio.computed;else a.bigBang();e.ctx.fillStyle=t.colors.fill,e.ctx.strokeStyle=t.starColor,t.resizing=!1}}},anim:{init:function(){l["default"].setBegin(a.anim.begin).setUpdate(a.anim.update).setDraw(a.anim.draw).setEnd(a.anim.end)},start:function(){l["default"].start(),t.resizing=!0},begin:function(){t.debug&&f.begin(),a.resize(),0===e.prevTime&&(e.prevTime=Date.now()),t.state.running=l["default"].isRunning()},update:function(){if(t.mouse.x=(t.cursor.x-e.x)/t.easing,t.mouse.y=(t.cursor.y-e.y)/t.easing,e.star.arr.length>0)for(var r=0;r<t.compQuantity;r++)e.star.arr[r][7]=!0,e.star.arr[r][5]=e.star.arr[r][3],e.star.arr[r][6]=e.star.arr[r][4],e.star.arr[r][0]+=t.mouse.x>>4,e.star.arr[r][0]>e.x<<1&&(e.star.arr[r][0]-=e.w<<1,e.star.arr[r][7]=!1),e.star.arr[r][0]<-e.x<<1&&(e.star.arr[r][0]+=e.w<<1,e.star.arr[r][7]=!1),e.star.arr[r][1]+=t.mouse.y>>4,e.star.arr[r][1]>e.y<<1&&(e.star.arr[r][1]-=e.h<<1,e.star.arr[r][7]=!1),e.star.arr[r][1]<-e.y<<1&&(e.star.arr[r][1]+=e.h<<1,e.star.arr[r][7]=!1),e.star.arr[r][2]-=t.compSpeed.lyph,e.star.arr[r][2]>e.z&&(e.star.arr[r][2]-=e.z,e.star.arr[r][7]=!1),e.star.arr[r][2]<0&&(e.star.arr[r][2]+=e.z,e.star.arr[r][7]=!1),e.star.arr[r][3]=e.x+e.star.arr[r][0]/e.star.arr[r][2]*t.ratio.computed,e.star.arr[r][4]=e.y+e.star.arr[r][1]/e.star.arr[r][2]*t.ratio.computed},draw:function(){if(e.ctx.fillStyle=t.colors.fill,e.ctx.fillRect(0,0,e.w,e.h),e.ctx.strokeStyle=t.starColor,e.star.arr.length)for(var r=0;r<t.compQuantity;r++)e.star.arr[r][5]>0&&e.star.arr[r][5]<e.w&&e.star.arr[r][6]>0&&e.star.arr[r][6]<e.h&&e.star.arr[r][7]&&(e.ctx.lineWidth=2*(1-e.star.colorRatio*e.star.arr[r][2]),e.ctx.beginPath(),e.ctx.moveTo(e.star.arr[r][5],e.star.arr[r][6]),e.ctx.lineTo(e.star.arr[r][3],e.star.arr[r][4]),e.ctx.stroke(),e.ctx.closePath())},stop:function(){l["default"].stop(),t.state.running=l["default"].isRunning()},end:function(r,a){t.debug&&f.end();var n=Date.now()-e.prevTime;r<30&&n>=1e3&&(t.stop(),l["default"].resetFrameDelta(),t.quantity=t.quantity-10,t.reset(),t.compQuantity<32&&t.stop(),e.prevTime=0),a&&l["default"].resetFrameDelta()},reset:function(){t.stop(),a.resetDims(),t.init()},destroy:function(){t.stop(),a.resetDims(),a=null,e=null}},resetDims:function(){e.x=0,e.y=0,e.z=0,e.w=0,e.h=0,e.cw=0,e.ch=0}};t.state.destroy&&(t.state.destroy=!1,a.anim.destroy()),t.state.stop&&(t.state.stop=!1,a.anim.stop()),t.state.reset&&(t.state.reset=!1,a.anim.reset()),t.state.init&&(t.state.init=!1,a.viewport(),a.anim.init()),t.state.canvas&&(t.state.canvas=!1,a.canvas()),t.state.start&&(t.state.start=!1,a.anim.start()),t.listeners()},reset:function(){this.state.reset=!0,this.starz()},stop:function(){this.state.stop=!0,this.starz()},start:function(){this.state.start=!0,this.starz()},listeners:function(){var t=this.$el.parentNode;this.resizeAdjust?window.addEventListener("resize",this.resizeHandler):t.removeEventListener("resize",this.resizeHandler),this.mouseAdjust?t.addEventListener("mousemove",this.mouseHandler):t.removeEventListener("mousemove",this.mouseHandler),this.tiltAdjust?window.addEventListener("deviceorientation",this.tiltHandler):window.removeEventListener("deviceorientation",this.tiltHandler),this.clickToWarp?(t.addEventListener("mousedown",this.clickHandler),t.addEventListener("mouseup",this.clickHandler)):(t.removeEventListener("mousedown",this.clickHandler),t.removeEventListener("mouseup",this.clickHandler))},resizeHandler:function(t){this.resizing=!0},mouseHandler:function(t){var e=this,r=this.$el.parentNode;i["default"].measure(function(){e.cursor.x=t.pageX||t.clientX+r.scrollLeft-r.clientLeft,e.cursor.y=t.pageY||t.clientY+r.scrollTop-r.clientTop})},tiltHandler:function(t){var e=this;null!==t.beta&&null!==t.gamma&&!function(){var r=e,a=t.gamma,n=t.beta;i["default"].measure(function(){r.cursor.x=r.$el.clientWidth/2+5*a,r.cursor.y=r.$el.clientHeight/2+5*n})}()},clickHandler:function(t){"mousedown"===t.type&&(this.hyperspace=!0),"mouseup"===t.type&&(this.hyperspace=!1)}},ready:function(){var t=this;setTimeout(function(){t.init()},100)},beforeDestroy:function(){this.state.init=!1,this.state.canvas=!1,this.state.star=!1,this.state.start=!1,this.state.stop=!1,this.state.destroy=!0,this.mouseAdjust=!1,this.tiltAdjust=!1,this.clickToWarp=!1,this.hyperspace=!1,this.listeners(),this.starz()}},r.exports.__esModule&&(r.exports=r.exports["default"]),("function"==typeof r.exports?r.exports.options:r.exports).template='\n<div class="starfield" :class="{ \'debug\' : debug }" id="{{ ids.vid }}">\n  <canvas id="{{ ids.cid }}"></canvas>\n\n  <form v-if="debug" class="starfield-debug">\n    <div>\n      <label for="isHyperspace">\n        <input type="checkbox" id="isHyperspace" v-model="hyperspace">Hyperspace\n      </label>\n\n      <label for="warpFactor">\n        | Warp Factor\n      </label>\n        <input type="number" name="warpFactor" id="warpFactor" placeholder="{{ warpFactor }}" min="1" max="1000" v-model="warpFactor">\n    </div>\n\n    <div>\n      <label for="clickToWarp">\n        <input type="checkbox" id="clickToWarp" v-model="clickToWarp" @change="listeners">Click to warp\n      </label>\n    </div>\n\n    <div>\n      <label for="mouseAdjust">\n        <input type="checkbox" id="mouseAdjust" v-model="mouseAdjust" @change="listeners">React to mouse movements\n      </label>\n    </div>\n\n    <div>\n      <label for="tiltAdjust">\n        <input type="checkbox" id="tiltAdjust" v-model="tiltAdjust" @change="listeners">React to tilt events\n      </label>\n    </div>\n\n    <div>\n      <label for="easing">Friction: </label>\n      <input type="number" name="easing" id="easing" placeholder="{{ easing }}" min="0" max="100" step="1" v-model="easing">\n    </div>\n\n    <div>\n      <label for="quantity">Number of stars: </label>\n      <input type="number" name="quantity" id="quantity" placeholder="{{ quantity }}" min="0" max="8192" step="1" v-model="quantity" @change="reset">\n    </div>\n\n    <div>\n      <label for="starColor">Star color:</label>\n      <input type="color" value="{{ compColors.stars }}" v-model="starColor" @change="reset">\n    </div>\n\n    <div>\n      <label for="bgColor">Background color:</label>\n      <input type="color" value="{{ compColors.bg }}" v-model="bgColor">\n    </div>\n\n    <div>\n      <label for="speed">Speed: </label>\n      <input type="number" name="speed" id="speed" placeholder="{{ speed }}" min="-100" max="100" step="1" v-model="speed">\n    </div>\n\n    <div style="margin-top: 20px; padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.25); font-size: 0.8em">\n       <input type="button" value="Start" style="color: #000" disabled="{{ state.running }}" @click="start()"> |\n       <input type="button" value="Stop" style="color: #000" disabled="{{ !state.running }}" @click="stop()"> |\n       <input type="button" value="Reset" style="color: #000" @click="reset()">\n    </div>\n  </form>\n</div><!-- /.starfield -->\n',r.hot&&!function(){r.hot.accept();var t=e("vue-hot-reload-api");if(t.install(e("vue"),!0),t.compatible){var a="app/components/Starfield.vue";r.hot.dispose(function(){e("vueify-insert-css").cache["\n.starfield.debug {\n  z-index: 2;\n}\n.starfield-debug {\n  position: absolute;\n  left: 20px;\n  top:  20px;\n  color: #fff;\n  font-size: 16px;\n  z-index: 1;\n  line-height: 16px;\n  font-family: 'Helvetica Neue', Helvetica, arial, sans-serif;\n  font-weight: 300;\n}\n.starfield {\n  height:   100%;\n  left:     0;\n  margin:   0;\n  padding:  0;\n  position: absolute;\n  top:      0;\n  width:    100%;\n  z-index:  0;\n}\n\n.starfield canvas {\n  height:   100%;\n  left:     0;\n  position: absolute;\n  top:      0;\n  width:    100%;\n}\n\n"]=!1,document.head.removeChild(n)}),r.hot.data?t.update(a,r.exports,("function"==typeof r.exports?r.exports.options:r.exports).template):t.createRecord(a,r.exports)}}()}),require.register("initialize.js",function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var n=e("vue"),s=a(n),i=e("components/Starfield.vue"),o=a(i);new s["default"]({el:"#vue",components:{Starfield:o["default"]},template:'<div><starfield click-to-warp bg-color="#f58220" star-color="#ffffff" :easing="13" :quantity="512"></starfield></div>',methods:{}})}),require.alias("process/browser.js","process"),t=require("process"),require.register("___globals___",function(t,e,r){})}(),require("___globals___"),require("initialize");