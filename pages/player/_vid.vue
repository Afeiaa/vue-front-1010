<template>
  <div>

    <!-- 阿里云视频播放器样式 -->
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css" >
    <!-- 阿里云视频播放器脚本 -->
    <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js" />

    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>

<script>
import course from "@/api/course"

export default {
    layout: 'video',
    mounted() {
         console.log(this.playAuth)
         console.log(this.vid)
         
          var player = new Aliplayer({
            id: "J_prismPlayer",
            vid: this.vid, // 视频id
            playauth: this.playAuth, // 播放凭证
            width: "100%",
            height: "500px",
            encryptType: '1',
            autoplay: false,
            preload: false,
            isLive: false,
            // 以下可选设置
            cover: 'http://guli.shop/photo/banner/1525939573202.jpg', // 封面
            qualitySort: 'asc', // 清晰度排序

            mediaType: 'video', // 返回音频还是视频
            autoplay: false, // 自动播放
            isLive: false, // 直播
            rePlay: false, // 循环播放
            preload: true,
            controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
            useH5Prism: true, // 播放器类型：html5
          }, function (player) {
            console.log("The player is created");
          })

    },

    asyncData({ params, error }) {
    return course.getPlayAuth(params.vid).then(response => {
      console.log(response.data.data);
      return { 
        playAuth: response.data.data.playAuth,
        vid: params.vid
      }
    })
  }
}
</script>

<style scoped>
  .prism-player .prism-cover{
    background-color:none;
    display:block;
  }
  
  .prism-player .prism-marker-text{
    display:none;
  }
</style>