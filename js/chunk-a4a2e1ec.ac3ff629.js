(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4a2e1ec"],{"12f3":function(t,i,s){"use strict";s("8647")},8647:function(t,i,s){},bab5:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"mv-detail"},[i("div",{staticClass:"mv-video",class:[t.isNight?"active":""]},[i("div",{staticClass:"w1200"},[i("div",{staticClass:"video-main"},[t.videoOptions.sources[0].src?i("video-player",{attrs:{options:t.videoOptions},on:{play:t.onPlay,pause:t.onPause,seeking:t.onSeeking,qualityChange:t.onQualityChange}}):t._e(),i("div",{staticClass:"mv-light",class:[t.isNight?"active":""],on:{click:t.toggleLight}},[i("i",{staticClass:"iconfont",class:[t.isNight?"icon-night":"icon-day"]})])],1),i("div",{staticClass:"mv-info"},[i("div",{staticClass:"mv-info-hd"},[i("div",{staticClass:"info-name"},[t._v(t._s(t.mvDetail.name))]),t._l(t.mvDetail.artists,(function(s,a){return i("router-link",{key:s.name,staticClass:"song-author",attrs:{to:{path:"/singer",query:{id:s.id}}}},[t._v(t._s(0!==a?" / "+s.name:s.name))])})),i("div",{staticClass:"mv-info-count"},[i("span",{staticClass:"info-count"},[t._v("播放量："+t._s(t.$utils.formartNum(t.mvDetail.playCount)))]),i("span",{staticClass:"info-time"},[t._v("发布时间："+t._s(t.mvDetail.publishTime))])])],2),i("div",{staticClass:"mv-desc"},[t._v(" "+t._s(t.mvDetail.briefDesc?t.mvDetail.briefDesc:"暂无简介")+" ")])])])]),i("div",{staticClass:"w1200"},[i("div",{staticClass:"mv-container"},[i("div",{staticClass:"mv-main"},[i("Comments",{attrs:{type:t.type,id:t.mId}})],1),i("div",{staticClass:"mv-aside"},[i("div",{staticClass:"simi-mv"},[i("h3",{staticClass:"aside-title"},[t._v("相似MV")]),i("div",{staticClass:"aside-main mv-main"},t._l(t.simiMv,(function(s,a){return i("div",{key:""+s.id+a,staticClass:"item"},[i("router-link",{staticClass:"faceImg",attrs:{to:{path:"/mv",query:{id:s.id}}}},[i("i",{staticClass:"iconfont icon-play"}),i("el-image",{attrs:{src:s.cover||s.imgurl}},[i("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"iconfont icon-placeholder"})])])],1),i("div",{staticClass:"info"},[i("router-link",{staticClass:"mv-name",attrs:{to:{path:"/mv",query:{id:s.id}}}},[t._v(t._s(s.name))]),s.publishTime?t._e():i("router-link",{staticClass:"mv-author",attrs:{to:{path:"/singer",query:{id:s.artistId}}}},[t._v(t._s(s.artistName))]),i("div",{staticClass:"mv-playCount"},[i("i",{staticClass:"iconfont icon-video"}),t._v(" "+t._s(t.$utils.formartNum(s.playCount)))]),s.publishTime?i("div",{staticClass:"mv-time"},[t._v("发布时间："+t._s(s.publishTime))]):t._e()],1)],1)})),0)])])])])])},e=[],n=s("0de3"),o=s("09a4"),r=s("2f62"),l={name:"mvDetail",components:{videoPlayer:n["a"],Comments:o["a"]},data(){return{mId:this.$route.query.id,mvDetail:{},type:1,videoOptions:{sources:[{type:"",src:""}],qualityList:[],quality:{}},currentTime:0,simiMv:[],isNight:!1}},computed:{},mounted(){this.init(),this.setPlayStatus(!1)},methods:{...Object(r["d"])({setPlayStatus:"SET_PLAYSTATUS"}),async getMvDetail(){const{data:t}=await this.$http.mvDetail({id:this.mId});if(200!==t.code)return this.$msg.error("数据请求失败");this.mvDetail=t.data,this.videoOptions.qualityList=t.data.brs,this.videoOptions.quality=t.mp},async getMvUrl(t){const{data:i}=await this.$http.mvUrl({id:this.mId,r:t});if(200!==i.code)return this.$msg.error("数据请求失败");this.$set(this.videoOptions.sources,0,{type:"video/mp4",src:i.data.url})},async getSimiMv(){const{data:t}=await this.$http.simiMv({id:this.mId});if(200!==t.code)return this.$msg.error("数据请求失败");this.simiMv=t.mvs},init(){const t=this.$http.mvDetail({id:this.mId}),i=this.$http.mvUrl({id:this.mId});this.currentTime=0,Promise.all([t,i]).then(t=>{t.forEach((t,i)=>{const s=t.data;if(0===i){if(200!==s.code)return this.$msg.error("数据请求失败");this.mvDetail=s.data,this.videoOptions.qualityList=s.data.brs,this.videoOptions.quality={br:s.mp.dl}}else{if(200!==s.code)return this.$msg.error("数据请求失败");this.$set(this.videoOptions.sources,0,{type:"video/mp4",src:s.data.url})}})}),this.getSimiMv()},onPlay(t){t.currentTime(this.currentTime)},onSeeking(t){this.currentTime=t.currentTime()},onPause(t){this.currentTime=t.currentTime(),t.pause()},onQualityChange(t){this.onPause(t),this.currentTime=t.currentTime(),this.getMvUrl(t.quality.val)},toggleLight(){this.isNight=!this.isNight}},watch:{$route(t,i){this.mId=this.$route.query.id,this.mId&&this.init()}}},c=l,m=(s("12f3"),s("2877")),d=Object(m["a"])(c,a,e,!1,null,"a4177fb2",null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-a4a2e1ec.ac3ff629.js.map