(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7e4b6d8"],{"050a":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t._self._c;return t.info?s("div",{staticClass:"song-container"},[s("div",{staticClass:"w1200"},[s("div",{staticClass:"song-sidebar"},[s("div",{staticClass:"sidebar"},[s("div",{staticClass:"cover"},[s("div",{staticClass:"cover-img",class:[t.isCurSong?"active":""],on:{click:function(s){return s.stopPropagation(),t.plyaing(t.info)}}},[s("img",{staticClass:"cover-stylus",attrs:{src:i("d7c6")}}),s("el-image",{attrs:{src:t.info.album.picUrl}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1),t.coverDesc?s("div",{staticClass:"cover-desc"},[s("h5",[t._v("专辑简介")]),s("p",[t._v(t._s(t.coverDesc))])]):t._e(),s("div",{staticClass:"simi-song"},[s("h6",[t._v("相似歌曲")]),s("div",{staticClass:"simi-main"},t._l(t.simiSong,(function(i){return s("div",{key:i.id,staticClass:"simi-item"},[s("div",{staticClass:"simi-info"},[s("router-link",{staticClass:"simi-name",attrs:{to:{path:"/song",query:{id:i.id}}}},[t._v(" "+t._s(i.name)+" ")]),s("div",{staticClass:"simi-author"},t._l(i.singer,(function(i,e){return s("router-link",{key:i.name,staticClass:"song-author",attrs:{to:{path:"/singer",query:{id:i.id}}}},[t._v(t._s(0!==e?" / "+i.name:i.name))])})),1)],1),s("div",{staticClass:"simi-song-status"},[i.vip?s("i",{staticClass:"iconfont icon-vip"}):s("i",{class:["iconfont",t.playSimiIcon(i)],on:{click:function(s){return t.plyaing(i)}}})])])})),0)])])])]),s("div",{staticClass:"song-main"},[s("h3",{staticClass:"song-name"},[t._v(" "+t._s(t.info.name)+" "),t.info.mvId?s("router-link",{staticClass:"mv-name",attrs:{to:{path:"/mv",query:{id:t.info.mvId}}}},[s("i",{staticClass:"iconfont icon-video"})]):t._e(),t.info.vip?s("i",{staticClass:"iconfont icon-vip"}):t._e(),t.isCurSong?s("div",{staticClass:"audio-icon"},[s("div",{staticClass:"column",staticStyle:{"animation-delay":"-1.2s"}}),s("div",{staticClass:"column"}),s("div",{staticClass:"column",staticStyle:{"animation-delay":"-1.5s"}}),s("div",{staticClass:"column",staticStyle:{"animation-delay":"-0.9s"}}),s("div",{staticClass:"column",staticStyle:{"animation-delay":"-0.6s"}})]):t._e()],1),s("p",t._l(t.info.singer,(function(i,e){return s("router-link",{key:i.name,staticClass:"song-author",attrs:{to:{path:"/singer",query:{id:i.id}}}},[t._v(t._s(0!==e?" / "+i.name:i.name))])})),1),s("p",{staticClass:"song-info"},[s("span",[t._v("专辑："),s("router-link",{staticClass:"song-album",attrs:{to:{path:"/album",query:{id:t.info.album.id}}}},[t._v(t._s(t.info.album.name))])],1),s("span",[t._v("发行时间："),s("em",[t._v(t._s(t.info.publishTime))])])]),s("div",{staticClass:"song-oper"},[s("span",{class:["play-btn","play-all",t.songDisable],on:{click:function(s){return t.plyaing(t.info)}}},[s("i",{class:["iconfont",t.playFontIcon]}),t._v(" "+t._s(t.info.vip?"VIP尊享":"立即播放"))]),t.isLogin?s("el-popover",{ref:"popAddList",attrs:{placement:"bottom",trigger:"click"}},[s("span",{staticClass:"play-btn play-collect",attrs:{slot:"reference"},slot:"reference"},[s("i",{staticClass:"iconfont icon-collect"}),t._v(" 收藏")]),s("add-list",{attrs:{tracks:t.info.id},on:{closeAddListPop:t.closeAddListPop}})],1):[s("span",{staticClass:"play-btn play-collect",on:{click:t.showAddList}},[s("i",{staticClass:"iconfont icon-collect"}),t._v(" 收藏")])],s("span",{staticClass:"play-btn play-comment",on:{click:t.jumpComment}},[s("i",{staticClass:"iconfont icon-comment"}),t._v(" 评论")])],2),s("div",{staticClass:"song-lyric"},[s("Lyrics",{attrs:{sId:t.sId,local:"page"}})],1),s("div",{ref:"comment",staticClass:"song-comments"},[s("Comments",{attrs:{type:t.type,id:t.sId}})],1)])])]):t._e()},a=[],n=i("2f62"),o=i("eb4d"),c=i("44f8"),r=i("09a4"),l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"addList"},[s("h4",{staticClass:"addListNew",on:{click:t.addListNew}},[s("i",{staticClass:"iconfont icon-add-new",attrs:{title:"新建歌单"}}),t._v("点击新建歌单")]),s("div",{staticClass:"list-mian"},t._l(t.list,(function(i){return s("div",{key:i.id,staticClass:"list-item",on:{click:function(s){return t.addPlayList(i)}}},[s("el-image",{staticClass:"cover-img",attrs:{src:i.coverImgUrl}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])]),s("div",{staticClass:"list-name"},[t._v(t._s(i.name))])],1)})),0)])},m=[],d={name:"addList",components:{},props:["tracks"],data(){return{list:[],limit:30,offset:0}},computed:{...Object(n["c"])(["userInfo"])},mounted(){this.getUserPlayList()},methods:{async getUserPlayList(){const{data:t}=await this.$http.playlistUser({uid:this.userInfo.userId,limit:this.limit,offset:this.offset});if(200!==t.code)return this.$msg.error("数据请求失败");this.list=t.playlist.filter(t=>!t.subscribed)},async addPlayList(t){const{data:s}=await this.$http.addPlayList({op:"add",pid:t.id,tracks:this.tracks});if(this.$emit("closeAddListPop"),200!==s.body.code)return this.$msg.error(s.body.message);this.$msg.success("收藏成功")},addListNew(){this.$emit("closeAddListPop",!0)}}},u=d,h=(i("7a4e"),i("2877")),p=Object(h["a"])(u,l,m,!1,null,"878820f4",null),g=p.exports,f={name:"song-detail",components:{Lyrics:c["a"],Comments:r["a"],addList:g},created(){},data(){return{info:null,sId:"0",type:0,simiSong:[]}},mounted(){this.sId=String(this.$route.query.id),this.init(),window.addEventListener("scroll",this.handleScroll,!0)},computed:{...Object(n["c"])(["isLogin","playList","playIndex","isPlayed"]),isCurSong(){return this.isPlayed&&this.curSongInfo&&this.curSongInfo.id===this.sId},playFontIcon(){return this.isCurSong?"icon-audio-pause":"icon-audio-play"},songDisable(){return this.info.license||this.info.vip?"disable":""},coverDesc(){return this.info.alia.join(" / ")},playSimiIcon(){return function(t){return String(t.id)===this.curSongInfo.id&&this.isPlayed?"icon-audio-pause":"icon-audio-play"}},curSongInfo(){return this.playList[this.playIndex]}},methods:{...Object(n["d"])({setLoginDialog:"setLoginDialog",setPlayStatus:"SET_PLAYSTATUS",setPlayList:"SET_PLAYLIST",setPlayIndex:"SET_PLAYINDEX"}),async getSongDetail(){const{data:t}=await this.$http.songDetail({ids:this.sId,timestamp:(new Date).valueOf()});if(200!==t.code)return this.$msg.error("数据请求失败");t.songs[0].license=!t.privileges[0].cp,this.info=Object(o["a"])(t.songs[0])},async getSimiSong(){const{data:t}=await this.$http.simiSong({id:this.sId});if(200!==t.code)return this.$msg.error("数据请求失败");this.simiSong=t.songs.map(t=>({id:String(t.id),name:t.name,mvId:t.mvid,singer:t.artists,album:t.album,alia:t.alias,duration:this.$utils.formatSongTime(t.duration),url:`https://music.163.com/song/media/outer/url?id=${t.id}.mp3`,vip:1===t.fee,license:t.license,publishTime:t.publishTime}))},plyaing(t){if(this.curSongInfo&&this.curSongInfo.id===t.id)this.setPlayStatus(!this.isPlayed);else{if(t.license)return void this.$msg.error("由于版权保护，您所在的地区暂时无法使用。");if(t.vip)return void this.$msg.error("付费歌曲，请在网易云音乐播放");this.selectPlay({list:[t]})}},closeAddListPop(){this.$refs.popAddList.doClose()},jumpComment(){this.$refs.comment.scrollIntoView(!0)},init(){this.getSongDetail(),this.getSimiSong()},showAddList(){if(!this.isLogin)return this.setLoginDialog(!0),!1},...Object(n["b"])(["selectPlay","playAll"])},watch:{$route:{handler(){this.sId=this.$route.query.id,this.init()},deep:!0}}},v=f,C=(i("07be"),Object(h["a"])(v,e,a,!1,null,"95625d9c",null));s["default"]=C.exports},"07be":function(t,s,i){"use strict";i("7570")},"09a4":function(t,s,i){"use strict";var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"comments"},[s("div",{staticClass:"comment_hd"},[s("h2",[t._v("评论"),s("em",[t._v("共"+t._s(t.total)+"条评论")])]),t.userInfo?s("div",{staticClass:"userInfo"},[s("span",[t._v(t._s(t.userInfo.nickname))]),s("el-image",{staticClass:"avatar",attrs:{src:t.userInfo.avatarUrl}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1):t._e()]),s("el-form",{staticClass:"comment_box"},[s("div",{staticClass:"comment_textarea"},[s("div",{staticClass:"pre"},[t._v(t._s(t.msg))]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"J_inpBox inp-paragraph",attrs:{name:"leave_msg",id:"leave_msg",placeholder:"期待你的神评论……"},domProps:{value:t.msg},on:{input:function(s){s.target.composing||(t.msg=s.target.value)}}})]),s("div",{staticClass:"comment_box_footer"},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.subComment}},[t._v("评论")]),s("span",{staticClass:"comment_limit"},[s("em",{staticClass:"num"},[t._v(t._s(t.msg.length))]),t._v("/"+t._s(t.maxLen))])],1)]),s("div",{staticClass:"comment_area"},[t.comments.length?[t._l(t.comments,(function(i,e){return s("div",{key:i.commentId+e+"",staticClass:"comment_item"},[s("router-link",{staticClass:"comment_avatar",attrs:{to:{path:"/user",query:{id:i.user.userId}}}},[s("el-image",{attrs:{src:i.user.avatarUrl+"?param=120y120"}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1),s("div",{staticClass:"comment_info"},[s("router-link",{attrs:{to:{path:"/user",query:{id:i.user.userId}}}},[t._v(t._s(i.user.nickname))]),s("div",{staticClass:"comment_content"},[t._v(" "+t._s(i.content)+" ")]),t._l(i.beReplied,(function(i){return s("div",{key:i.beRepliedCommentId,staticClass:"comment_reply"},[s("router-link",{attrs:{to:{path:"/user",query:{id:i.user.userId}}}},[t._v(t._s(i.user.nickname))]),t._v(": "+t._s(i.content)+" ")],1)})),s("div",{staticClass:"comment_footer"},[s("div",{staticClass:"comment_time"},[t._v(t._s(t.$utils.formatMsgTime(i.time)))]),s("div",{staticClass:"comment_oper"},[t.userInfo&&t.userInfo.userId===i.user.userId?s("em",{staticClass:"comment_del",on:{click:function(s){return t.delComment(i)}}},[s("i",{staticClass:"iconfont icon-del"})]):t._e(),s("span",{class:[i.liked?"active":""],on:{click:function(s){return t.likeComment(i)}}},[s("i",{staticClass:"iconfont icon-praise"}),t._v("("+t._s(i.likedCount)+")")]),s("span",{staticClass:"replyComment",on:{click:function(s){return t.replyComment(i,e)}}},[s("i",{staticClass:"iconfont icon-comment"})])])]),i.isHot?s("div",{staticClass:"isHot"},[s("i",{staticClass:"iconfont icon-choicest"})]):t._e(),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isShowReply(i,e)?s("replyComment",{attrs:{params:i},on:{replyMsg:t.replyMsg}}):t._e()],1)],2)],1)})),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:this.total},on:{"current-change":t.currentChange}})],1)]:s("div",{staticClass:"comments_status"},[t.isEmpty?s("div",{staticClass:"empty"},[t._m(0),s("p",[t._v("暂无留言")])]):s("div",{staticClass:"loading"},[t._v("评论加载中...")])])],2)],1)},a=[function(){var t=this,s=t._self._c;return s("p",[s("i",{staticClass:"iconfont icon-empty-main"})])}],n=i("2f62"),o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"reply-comment"},[s("h3",[t._v("我回复@"+t._s(t.params.user.nickname)+":")]),s("div",{staticClass:"comment_textarea"},[s("div",{staticClass:"pre"},[t._v(t._s(t.msg))]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"J_inpBox inp-paragraph",attrs:{name:"leave_msg",id:"leave_msg",placeholder:"期待你的神评论……"},domProps:{value:t.msg},on:{input:function(s){s.target.composing||(t.msg=s.target.value)}}})]),s("div",{staticClass:"comment_box_footer"},[s("span",{staticClass:"comment_limit"},[s("em",{staticClass:"num"},[t._v(t._s(t.msg.length))]),t._v("/"+t._s(t.maxLen))]),s("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.subReplyComment}},[t._v("评论")])],1)])},c=[],r={name:"replyComment",components:{},props:["params"],data(){return{msg:"",maxLen:140}},computed:{},methods:{subReplyComment(){this.$emit("replyMsg",this.msg)}},watch:{msg(){this.msg=this.maxLen>=this.msg?this.msg:this.msg.substring(0,this.maxLen)}}},l=r,m=(i("5d8d"),i("2877")),d=Object(m["a"])(l,o,c,!1,null,"6a6b203a",null),u=d.exports,h={name:"Comments",components:{replyComment:u},props:{type:{type:Number,default:0},id:{type:String,default:"0"}},data(){return{msg:"",maxLen:140,curId:this.id,limit:20,offset:0,before:0,hotComments:[],comments:[],total:0,currentPage:0,isEmpty:!1,replyCommentId:0,replyIndex:-1}},computed:{...Object(n["c"])(["isLogin","userInfo"]),isShowReply(){return function(t,s){return t.commentId===this.replyCommentId&&this.replyIndex===s}}},mounted(){this.getComment()},methods:{...Object(n["d"])(["setLoginDialog"]),getComment(){switch(this.type){case 0:this.getSongComment();break;case 1:this.getMvComment();break;case 3:this.getAlbumComment();break;case 5:this.getVideoComment();break}},async getSongComment(){const{data:t}=await this.$http.commentSong({id:this.curId,limit:this.limit,offset:this.offset,before:this.before});this.msgHandler(t)},async getMvComment(){const{data:t}=await this.$http.commentMv({id:this.curId,limit:this.limit,offset:this.offset,before:this.before});this.msgHandler(t)},async getAlbumComment(){const{data:t}=await this.$http.albumComment({id:this.curId,limit:this.limit,offset:this.offset,before:this.before});this.msgHandler(t)},async getVideoComment(){const{data:t}=await this.$http.commentVideo({id:this.curId,limit:this.limit,offset:this.offset,before:this.before});this.msgHandler(t)},msgHandler(t){if(200!==t.code)return this.$msg.error("数据请求失败");this.total=t.total,this.hotComments=t.hotComments||[],this.hotComments.map(t=>(t.isHot=!0,t)),this.comments=[...this.hotComments,...t.comments],this.isEmpty=0===this.before&&!this.comments.length},async commentHandler(t,s,i){const e={t:t,type:this.type,id:this.curId,content:s,commentId:i},{data:a}=await this.$http.comment(e);if(200!==a.code)return this.$msg.error("数据请求失败");this.msg="",this.getComment(),0===t?this.$msg.success("删除评论成功！"):1===t?this.$msg.success("评论成功！"):2===t&&(this.$msg.success("回复评论成功！"),this.replyCommentId=0,this.replyIndex=-1)},subComment(){this.isLogin?this.commentHandler(1,this.msg):this.setLoginDialog(!0)},delComment(t){this.$msgBox.confirm("确定删除评论？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then(()=>{this.commentHandler(0,"",t.commentId)}).catch(()=>{})},replyComment(t,s){this.isLogin?(this.replyCommentId=this.replyCommentId===t.commentId&&this.replyIndex===s?0:t.commentId,this.replyIndex=s):this.setLoginDialog(!0)},replyMsg(t){this.isLogin?this.commentHandler(2,t,this.replyCommentId):this.setLoginDialog(!0)},async likeComment(t){if(!this.isLogin)return void this.setLoginDialog(!0);const{data:s}=await this.$http.commentLike({id:this.curId,cid:t.commentId,t:Number(!t.liked),type:this.type});if(200!==s.code)return this.$msg.error("数据请求失败");this.getComment()},currentChange(t){this.offset=(t-1)*this.limit,this.getComment()}},watch:{id(t,s){this.curId=t,this.offset=0,this.getComment()},msg(){this.msg=this.maxLen>=this.msg?this.msg:this.msg.substring(0,this.maxLen)}}},p=h,g=(i("a3e9"),Object(m["a"])(p,e,a,!1,null,"bf18895a",null));s["a"]=g.exports},"5d8d":function(t,s,i){"use strict";i("a4c2")},7570:function(t,s,i){},"7a4e":function(t,s,i){"use strict";i("cbd4")},a3e9:function(t,s,i){"use strict";i("f2ea")},a4c2:function(t,s,i){},cbd4:function(t,s,i){},d7c6:function(t,s){t.exports="data:image/png;base64,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"},f2ea:function(t,s,i){}}]);
//# sourceMappingURL=chunk-e7e4b6d8.b5780946.js.map