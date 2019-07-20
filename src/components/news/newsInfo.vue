<template>
    <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsInfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsInfo.add_time | times }}</span>
      <span>点击：{{ newsInfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsInfo.content"></div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../subComponent/comment.vue"
export default {
 data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  created() {
    this.newsInfo1()
  },
  methods: {
    newsInfo1() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnew/"+ this.id)
        .then(res => {
          // console.log(res);
          this.newsInfo = res.body.message[0];
        });
    }
  },
  components: {
    "comment-box": comment
  }
   
}
</script>

<style scoped>
.newsinfo-container {
  padding: 0 4px;
}
.newsinfo-container .title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.newsinfo-container .subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.newsinfo-container .content img {
  width: 100%;
}
</style>
