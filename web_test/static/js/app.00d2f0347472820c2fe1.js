webpackJsonp([1],{0:function(t,e){},"7zck":function(t,e){},"8fE4":function(t,e){},N45Z:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("/5sW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-content",[e("router-view")],1)],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(t){i("8fE4")},null,null).exports,s=i("/ocq"),o={name:"Tform",data:function(){return{url:"http://35.157.221.243:9999/univariate/get",dataToProcess:'{"data":[15136, 16733, 20016, 17708, 18019, 19227, 22893, 23739, 21133, 22591, 26786, 29740,15028, 17977, 20008, 21354, 19498, 22125, 25817, 28779, 20960, 22254, 27392, 29945,16933, 17892,20533, 23569, 22417, 22084, 26580, 27454, 24081, 23451, 28991, 31386, 16896, 20045, 23471, 21747, 25621, 23859, 25500, 30998, 24475, 23145, 29701, 34365, 17556, 22077, 5702,22214,26886, 23191, 27831, 35406, 23195, 25110, 30009, 36242, 18450, 21845, 26488, 22394, 28057, 25451, 24872, 33424, 24052, 28449, 33533, 37351, 19969, 21701, 26249, 24493, 24603,26485, 30723, 34569, 26689, 26157, 32064, 38870, 21337, 19419, 23166, 28286, 24570, 24001, 33151, 24878, 26804, 28967, 33311, 40226, 20504, 23060, 23562, 27562, 23940, 24584,34303, 25517, 23494, 29095, 32903, 34379, 16991, 21109, 23740, 25552, 21752, 20294, 29009, 25500, 24166, 26960, 31222, 38641, 14672, 17543, 25453, 32683, 22449, 22316]}',loading:!1,rules:{json:function(t){try{JSON.parse(t)}catch(t){return"Data is not a valid json"}return!0},url:function(t){return!!/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\\/]))?/.test(t)||"Url is not a valid"}},errorDialog:{value:!1,text:""}}},methods:{getUrl:function(){var t=this;this.loading=!0,this.$http.post(this.url,this.dataSet).then(function(e){t.$emit("response",{dataToProcess:t.dataSet,result:e.body}),t.loading=!1}).catch(function(e){t.loading=!1,t.errorDialog.value=!0,t.errorDialog.text=e,console.log(e)})}},computed:{dataSet:function(){return JSON.parse(this.dataToProcess)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{attrs:{xs12:""}},[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{label:"Url",rules:[t.rules.url],outline:""},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getUrl(e):null}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-textarea",{attrs:{outline:"",label:"DatatSet",rules:[t.rules.json]},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getUrl(e):null}},model:{value:t.dataToProcess,callback:function(e){t.dataToProcess=e},expression:"dataToProcess"}})],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"success"},on:{click:t.getUrl}},[t._v("Submit "),i("v-icon",{attrs:{right:""}},[t._v("send")])],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("v-card",[i("v-card-text",[t._v("\n        Processing... this may take a while\n        "),i("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:""}})],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"500"},model:{value:t.errorDialog.value,callback:function(e){t.$set(t.errorDialog,"value",e)},expression:"errorDialog.value"}},[i("v-card",{attrs:{color:"red",dark:""}},[i("v-card-text",[i("pre",[t._v(t._s(t.errorDialog.text))])]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.errorDialog.value=!1}}},[t._v("ok")])],1)],1)],1)],1)},staticRenderFns:[]},h=i("VU/8")(o,l,!1,null,null,null).exports,c=i("fZjL"),d=i.n(c),u=i("pFYg"),g=i.n(u),p={name:"jsonViewer",props:["json"],data:function(){return{items:[]}},methods:{addItems:function(t,e,i){for(var r in t)this.items.splice(e,0,{name:r,type:g()(t[r]),data:t[r],level:i,open:!0})},toggle:function(t,e,i,r){r?this.addItems(t,e,i):this.deleteItems(t,e,i)},deleteItems:function(t,e,i){for(var r=this.items.filter(function(t){return t.level>=i}).length,a=d()(t).length,n=r-a==0?a:r,s=0;s<n;s++)this.items.splice(e,1)},getColor:function(t){switch(t){case"object":return"green--text darken-4";case"string":return"red--text darken-4";case"number":return"blue--text darken-4";case"boolean":return"indigo--text darken-4"}}},watch:{json:{handler:function(t){this.items=[],this.addItems(t,0,0),this.items.reverse()},immediate:!0}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{attrs:{xs12:""}},t._l(t.items,function(e,r){return i("div",{key:r,style:{"margin-left":10*e.level+"px",cursor:"object"===e.type&&0!==e.data.length?"pointer":"auto"},on:{click:function(i){"object"!==e.type||t.toggle(e.data,r+1,e.level+1,e.open),e.open=!e.open}}},[i("span",{class:{"font-weight-bold":"object"===e.type&&0!==e.data.length}},[t._v(t._s(e.name)+":")]),t._v(" "),i("span",{class:t.getColor(e.type)},[t._v(t._s("object"===e.type&&0!==e.data.length?"{...}":e.data))])])}))},staticRenderFns:[]},v=i("VU/8")(p,m,!1,null,null,null).exports,f={props:{dataSet:null,height:{type:Number,default:500},marginLeft:{type:Number,default:40},marginTop:{type:Number,default:40},marginRight:{type:Number,default:20},marginBottom:{type:Number,default:30},toggleSize:{type:Boolean}},data:function(){return{width:null,chartWidth:1e3,chartHeight:400,total:[],toPredict:[],prediction:[],debug:[],timeSeries:[],toPredictInDebug:[],zoomMin:0,zoomMax:100,panEnabled:!1,offsetX:0,globalMax:-1e11,globalMin:1e11,isActive:{toPredict:!0,prediction:!0,debug:{}},markPos:{pos:0,val:0}}},mounted:function(){this.calculateSize()},methods:{calculateSize:function(){this.width=this.$el.clientWidth,this.chartWidth=this.width-(this.marginLeft+this.marginRight),this.chartHeight=this.height-(this.marginTop+this.marginBottom)},drawData:function(t){for(var e=this,i=t.toPredict.main||t.toPredict.data,r=0;r<i.length;r++){var a=i[r];this.toPredict.push({x:r,y:a}),this.total.push({x:r,y:a})}var n=t.prediction.future;this.toPredict.push({x:i.length,y:n[0].value||n[0]["expected value"]});for(var s=0;s<n.length;s++){var o=n[s].value||n[s]["expected value"];this.prediction.push({x:n[s].step,y:o}),this.total.push({x:n[s].step,y:o})}var l=t.toPredict.timeseries;if(l&&l.length)for(var h=0;h<l.length;h++){this.$set(this.timeSeries,h,{color:this.$getRandomColor(),dataset:[]});for(var c=0;c<l[h].data.length;c++)this.timeSeries[h].dataset.push({x:c,y:l[h].data[c]});this.$set(this.isActive,h,!0)}if(this.zoomMax=this.total.length-1,this.globalMax=this.$getMax(this.total,"y"),this.globalMin=this.$getMin(this.total,"y"),t.prediction.debug){for(var d in t.prediction.debug){var u=t.prediction.debug[d];this.$set(this.isActive.debug,d,!0),this.debug.push({name:d,d:[],color:this.$getRandomColor()}),u.map(function(t){e.debug[e.debug.length-1].d.push({x:t.step,y:t["expected value"]||t.Prediction}),e.globalMax=e.globalMax>t["expected value"]||t.Prediction?e.globalMax:t["expected value"]||t.Prediction,e.globalMin=e.globalMin<t["expected value"]||t.Prediction?e.globalMin:t["expected value"]||t.Prediction})}for(var g=0;g<this.debug[0].d.length;g++){var p=this.toPredict.length-this.debug[0].d.length-1;this.toPredictInDebug.push({x:this.total[p+g].x,y:this.total[p+g].y})}}},zoom:function(t){var e=t.wheelDelta?.02*t.wheelDelta:-t.deltaY;this.zoomMin&&this.zoomMax>=3e3?(this.zoomMin=0,this.zoomMax=this.total.length-1):(this.zoomMin+=e,this.zoomMax+=-e)},pan:function(t){if(this.panEnabled)this.offsetX+=-t.movementX,this.markPos=0;else for(var e=t.offsetX-this.marginLeft,i=0;i<this.total.length;i++){var r=this.$toXPixel(i,this.zoomMin,this.zoomMax,this.chartWidth)-this.offsetX;r<e&&(this.markPos={pos:r,val:i})}},randomizeColors:function(){for(var t=0;t<this.debug.length;t++)this.debug[t].color=this.$getRandomColor();for(var e=0;e<this.timeSeries.length;e++)this.timeSeries[e].color=this.$getRandomColor()},reset:function(){this.total=[],this.toPredict=[],this.prediction=[],this.globalMax=-1e11,this.globalMin=1e11,this.debug=[],this.timeSeries=[],this.zoomMin=0,this.zoomMax=100,this.offsetX=0,this.isActive={toPredict:!0,prediction:!0,debug:{}},this.toPredictInDebug=[]}},watch:{dataSet:{handler:function(t){var e=this;t.toPredict&&t.prediction&&(t.prediction.debug||(this.debug.isEmpty=!0),this.$nextTick(function(){e.reset(),e.drawData(t)}))},immediate:!0},toggleSize:function(){this.calculateSize()}},computed:{anomalies:function(){var t=this.dataSet;if(t.toPredict){for(var e=[],i=0;i<t.prediction.past.length;i++){var r=this.$toXPixel(t.prediction.past[i].step,this.zoomMin,this.zoomMax,this.chartWidth);e.push(r)}return e}}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{directives:[{name:"resize",rawName:"v-resize",value:t.calculateSize,expression:"calculateSize"}],attrs:{xs12:""}},[i("v-toolbar",{attrs:{dense:"",dark:""}},[i("v-toolbar-items",[t.toPredict.length>0?i("v-btn",{attrs:{color:"blue",flat:""},on:{click:function(e){t.isActive.toPredict=!t.isActive.toPredict}}},[t._v("Main")]):t._e(),t._v(" "),t.prediction.length>0?i("v-btn",{attrs:{color:"yellow",flat:""},on:{click:function(e){t.isActive.prediction=!t.isActive.prediction}}},[t._v("Prediction")]):t._e(),t._v(" "),t._l(t.timeSeries,function(e,r){return t.timeSeries.length>0?i("v-btn",{key:"cheboxTimeSerie"+r,attrs:{color:t.timeSeries[r].color,flat:""},on:{click:function(e){t.isActive[r]=!t.isActive[r]}}},[t._v("data-"+t._s(r))]):t._e()}),t._v(" "),t._l(t.debug,function(e,r){return t.debug.length>0?i("v-btn",{key:"debug"+r,attrs:{color:e.color,flat:""},on:{click:function(i){t.isActive.debug[e.name]=!t.isActive.debug[e.name]}}},[t._v("\n        "+t._s(e.name)+"\n        "),e.name===t.dataSet.prediction.engine?i("span",{staticClass:"winner"},[t._v("♕")]):t._e()]):t._e()})],2),t._v(" "),i("v-spacer"),t._v(" "),i("v-tooltip",{attrs:{bottom:""}},[i("v-btn",{attrs:{slot:"activator",flat:"",icon:""},on:{click:t.randomizeColors},slot:"activator"},[i("v-icon",[t._v("brush")])],1),t._v(" "),i("span",[t._v("Randomize Colors")])],1)],1),t._v(" "),i("svg",{staticClass:"grey darken-3",attrs:{width:"100%",height:t.height},on:{wheel:function(e){return e.preventDefault(),t.zoom(e)},mousedown:function(e){if(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return null;t.panEnabled=!0},mouseup:function(e){t.panEnabled=!1},mousemove:t.pan}},[t.toPredict.length>0&&t.prediction.length>0?i("g",{attrs:{transform:"translate("+t.marginLeft+", "+t.marginTop+")"}},[i("defs",[i("clipPath",{attrs:{id:"clip-rect"}},[i("rect",{attrs:{width:t.chartWidth,height:t.height,y:-this.marginTop}})])]),t._v(" "),i("g",{attrs:{"clip-path":"url(#clip-rect)"}},[t.isActive.toPredict?i("c-path",{attrs:{transform:"translate("+-t.offsetX+" 0)",rangeX:[t.zoomMin,t.zoomMax],rangeY:[t.globalMin,t.globalMax],dataset:t.toPredict,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e(),t._v(" "),t.isActive.prediction?i("c-path",{attrs:{transform:"translate("+(t.$toXPixel(t.prediction[0].x+t.zoomMin,t.zoomMin,t.zoomMax,t.chartWidth)-t.offsetX)+", 0)",color:"yellow",rangeX:[t.zoomMin,t.zoomMax],rangeY:[t.globalMin,t.globalMax],dataset:t.prediction,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e(),t._v(" "),t._l(t.timeSeries,function(e,r){return t.isActive[r]?i("c-path",{key:"serie"+r,attrs:{transform:"translate("+-t.offsetX+" 0)",color:e.color,rangeX:[t.zoomMin,t.zoomMax],rangeY:[t.globalMin,t.globalMax],dataset:e.dataset,column:"y",height:t.chartHeight,width:t.chartWidth}}):t._e()}),t._v(" "),t._l(t.debug,function(e,r){return!t.debug.isEmpty&&t.isActive.debug[e.name]?i("g",{key:"debug"+r},[i("c-path",{attrs:{dasharray:"5,5",transform:"translate("+(t.$toXPixel(e.d[0].x+t.zoomMin,t.zoomMin,t.zoomMax,t.chartWidth)-t.offsetX)+", 0)",color:e.color,rangeX:[t.zoomMin,t.zoomMax],rangeY:[t.globalMin,t.globalMax],dataset:e.d,column:"y",height:t.chartHeight,width:t.chartWidth}})],1):t._e()}),t._v(" "),t.markPos.pos>0?i("line",{attrs:{x1:t.markPos.pos,x2:t.markPos.pos,y2:t.chartHeight,"stroke-width":"2",stroke:"#0eff0e78",fill:"none"}}):t._e(),t._v(" "),t.markPos.pos>0?i("text",{attrs:{fill:"#0eff0e78","text-anchor":"middle",dy:"-5px",transform:"translate("+t.markPos.pos+" 0)"}},[t._v("\n        "+t._s(t.markPos.val)+"\n      ")]):t._e(),t._v(" "),t._l(t.anomalies,function(e,r){return i("circle",{key:r,attrs:{cx:e-t.offsetX,cy:t.chartHeight,r:"7",stroke:"white","stroke-width":"1",fill:"red"}})}),t._v(" "),i("x-axis",{attrs:{transform:"translate("+-t.offsetX+" "+t.chartHeight+")",range:[t.zoomMin,t.zoomMax],dataset:t.total,x:"x",ticks:25,fixed:1,height:t.chartHeight,width:t.chartWidth,label:"Time"}})],2),t._v(" "),i("y-axis",{attrs:{range:[t.globalMin,t.globalMax],ticks:5,fixed:1,height:t.chartHeight,label:"Units"}})],1):t._e()]),t._v(" "),i("svg",{directives:[{name:"show",rawName:"v-show",value:!t.debug.isEmpty,expression:"!debug.isEmpty"}],staticClass:"grey darken-3",attrs:{width:"100%",height:t.height}},[t.isActive.toPredict?i("c-path",{attrs:{dataset:t.toPredictInDebug,rangeY:[t.globalMin,t.globalMax],column:"y",height:t.chartHeight+t.marginTop+t.marginBottom,width:t.chartWidth+t.marginLeft+t.marginRight}}):t._e(),t._v(" "),t._l(t.debug,function(e,r){return!t.debug.isEmpty&&t.isActive.debug[e.name]?i("g",{key:"debug"+r},[i("c-path",{attrs:{dasharray:"5,5",rangeY:[t.globalMin,t.globalMax],color:e.color,dataset:e.d,column:"y",height:t.chartHeight+t.marginTop+t.marginBottom,width:t.chartWidth+t.marginLeft+t.marginRight}})],1):t._e()})],2)],1)},staticRenderFns:[]};var b={name:"homeView",components:{tForm:h,tJson:v,tGraph2d:i("VU/8")(f,x,!1,function(t){i("n0TM")},null,null).exports},data:function(){return{response:{},toggleDataVisibility:!0}},methods:{toggleData:function(){this.toggleDataVisibility=!0},showResponse:function(t){this.response={toPredict:t.dataToProcess,prediction:t.result}}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("v-toolbar",{attrs:{dense:"",app:""}},[i("img",{staticClass:"pa-1",attrs:{src:"static/img/logo.svg",height:"80%",alt:"Time Cop"}}),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:"",color:"blue"},on:{click:function(e){t.toggleDataVisibility=!t.toggleDataVisibility}}},[t._v("\n      data\n      "),t.toggleDataVisibility?i("v-icon",{attrs:{right:""}},[t._v("visibility")]):i("v-icon",{attrs:{right:""}},[t._v("visibility_off")])],1)],1),t._v(" "),i("v-layout",{attrs:{wrap:""}},[i("v-flex",{class:t.toggleDataVisibility?"xs8":"xs12"},[i("t-graph-2d",{attrs:{dataSet:t.response,toggleSize:t.toggleDataVisibility,height:350,marginLeft:70}})],1),t._v(" "),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.toggleDataVisibility,expression:"toggleDataVisibility"}],attrs:{xs4:"","column-code":""}},[i("t-form",{on:{response:t.showResponse}}),t._v(" "),i("t-json",{attrs:{json:t.response.prediction}})],1)],1)],1)},staticRenderFns:[]};var _=i("VU/8")(b,y,!1,function(t){i("N45Z")},null,null).exports,k={data:function(){return{text:"",convertedText:[]}},methods:{convert:function(){for(var t=this.text.split(/\r?\n/),e=0;e<t.length;e+=4){var i=t[e].split(","),r=i[0].split("."),a=r[0],n=r[1]+"/"+a+"/"+r[2]+" "+i[1];this.convertedText.push({timestamp:new Date(n).getTime()/1e3,price:Number(t[e+3])})}this.text=""}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs3:""}},[i("v-text-field",{attrs:{"multi-line":""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),i("v-btn",{on:{click:t.convert}},[t._v("convertir")])],1),t._v(" "),i("v-flex",{attrs:{xs9:""}},[i("pre",[t._v(t._s(t.convertedText))])])],1)},staticRenderFns:[]},w=i("VU/8")(k,M,!1,null,null,null).exports;r.default.use(s.a);var P=new s.a({routes:[{path:"/",name:"home",component:_},{path:"/converter",name:"converter",component:w}]}),z=i("3EgV"),$=i.n(z),S=i("8+8L"),D={name:"y-axis",props:{range:{type:Array,required:!0},ticks:{type:Number},height:{type:Number,required:!0},label:{type:String},fixed:{type:Number}},computed:{ticksList:function(){if(this.range&&this.range.length>0){var t=[],e=this.range[0],i=(this.range[1]-e)/(this.ticks-1),r=e;t.push(this.fixed?e.toFixed(this.fixed):e);for(var a=1;a<this.ticks;a++)t.push(this.fixed?(r+=i).toFixed(this.fixed):r+=i);return t.reverse()}}}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{"text-anchor":"end",fill:"white",stroke:"white","stroke-width":"1"}},[i("line",{attrs:{y1:t.height}}),t._v(" "),t._l(t.ticksList,function(e,r){return i("g",{key:"tick"+r,attrs:{transform:"translate(0, "+r*(t.height/(t.ticksList.length-1))+")"}},[i("line",{attrs:{x2:"-6"}}),t._v(" "),i("text",{attrs:{"stroke-width":"0.1",x:"-9",dy:"0.32em"}},[t._v(t._s(e))])])}),t._v(" "),i("text",{attrs:{transform:"rotate(-90)",y:"6",dy:"0.71em","stroke-width":"0.1"}},[t._v(t._s(t.label))])],2)},staticRenderFns:[]},A=i("VU/8")(D,X,!1,null,null,null).exports,N={name:"x-axis",props:{dataset:{type:Array,required:!0},range:{type:Array},x:{type:String},ticks:{type:Number},height:{type:Number,required:!0},width:{type:Number,required:!0},label:{type:String},fixed:{type:Number}},computed:{ticksList:function(){if(this.dataset&&this.dataset.length>0){for(var t=this.range?this.range[0]:this.$getMin(this.dataset,this.x),e=this.range?this.range[1]:this.$getMax(this.dataset,this.x),i=[],r=0;r<this.dataset.length;r++)i.push({position:this.$toXPixel(this.dataset[r][this.x],t,e,this.width)});for(var a=0;a<this.dataset.length;a+=Math.round(this.dataset.length/this.ticks))i[a].value=this.dataset[a][this.x];return i.reverse()}}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{"text-anchor":"middle",fill:"white",stroke:"white","stroke-width":"1",transform:"translate(0, "+t.height+")"}},[t.ticksList&&t.ticksList.length>0?i("line",{attrs:{x1:t.ticksList[0].position,x2:t.ticksList[t.ticksList.length-1].position}}):t._e(),t._v(" "),t._l(t.ticksList,function(e,r){return i("g",{key:"tick"+r,attrs:{transform:"translate("+e.position+", 0)"}},[i("line",{attrs:{y2:"6"}}),t._v(" "),i("text",{attrs:{"stroke-width":"0.1",y:"9",dy:"0.71em"}},[t._v(t._s(e.value))])])}),t._v(" "),i("text",{attrs:{x:t.ticksList[0].position,y:"-25",dx:"-0.71em",dy:"0.71em","stroke-width":"0.1"}},[t._v(t._s(t.label))])],2)},staticRenderFns:[]},E=i("VU/8")(N,T,!1,null,null,null).exports,R={name:"bars",props:{dataset:{type:Array,required:!0},column:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0}},computed:{list:function(){for(var t=[],e=this.$getMax(this.dataset,this.column),i=this.$getMin(this.dataset,this.column),r=0;r<this.dataset.length;r++)t.push({d:this.dataset[r][this.column],v:this.$toYPixel(this.dataset[r][this.column],i,e,this.height)});return t}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",t._l(t.list,function(e,r){return i("rect",{key:r,attrs:{x:r*(t.width/t.list.length),y:e.v,width:30,height:t.height-e.v,fill:"green"}})}))},staticRenderFns:[]},L=i("VU/8")(R,V,!1,null,null,null).exports,C={name:"cPath",props:{dataset:{type:Array,required:!0},column:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0},color:{type:String,default:"steelblue"},strokeWidth:{type:String,default:"1.5"},dasharray:{type:String,default:""},rangeY:{type:Array},rangeX:{type:Array}},computed:{points:function(){if(this.dataset&&this.dataset.length>0){for(var t=this.rangeY?this.rangeY[0]:this.$getMin(this.dataset,this.column),e=this.rangeY?this.rangeY[1]:this.$getMax(this.dataset,this.column),i=this.rangeX?this.rangeX[0]:0,r=this.rangeX?this.rangeX[1]:this.dataset.length,a=[],n=[],s=0;s<this.dataset.length;s++)a.push(this.$toXPixel(s,i,r,this.width)),n.push(this.$toYPixel(this.dataset[s][this.column],t,e,this.height));a.reverse(),n.reverse();for(var o="M"+a[0]+" "+n[0],l=1;l<this.dataset.length;l++)o+=" L"+a[l]+" "+n[l]+" ";return o}}}},W={render:function(){var t=this.$createElement;return(this._self._c||t)("path",{attrs:{fill:"none",stroke:this.color,"stroke-linejoin":"round","stroke-linecap":"round","stroke-dasharray":this.dasharray,"stroke-width":this.strokeWidth,d:this.points}})},staticRenderFns:[]},j=i("VU/8")(C,W,!1,null,null,null).exports,U={install:function(t){t.prototype.$getMax=function(t,e){var i=0;if(e)for(var r=0;r<t.length;r++)i=t[r][e]>i?t[r][e]:i;else for(var a=0;a<t.length;a++)i=t[a]>i?t[a]:i;return i},t.prototype.$getMin=function(t,e){var i=1e11;if(e)for(var r=0;r<t.length;r++)i=t[r][e]<i?t[r][e]:i;else for(var a=0;a<t.length;a++)i=t[a]<i?t[a]:i;return i},t.prototype.$toYPixel=function(t,e,i,r){return r-(t-e)/(i-e)*r},t.prototype.$toXPixel=function(t,e,i,r){return(t-e)/(i-e)*r},t.prototype.$getRandomColor=function(){return"hsla("+Math.floor(360*Math.random())+", 100%, 70%, 60)"},t.component(A.name,A),t.component(E.name,E),t.component(L.name,L),t.component(j.name,j)}};i("7zck");r.default.use($.a),r.default.config.productionTip=!1,r.default.use(S.a),r.default.http.headers.common["content-type"]="application/json",r.default.use(U),new r.default({el:"#app",router:P,render:function(t){return t(n)}})},n0TM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.00d2f0347472820c2fe1.js.map