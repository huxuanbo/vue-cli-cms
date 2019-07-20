<template>
    <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | times }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getMone">加载更多</mt-button>
  </div>
</template>

<script>
export default {
    data() {
    return {
      comments: [],
      pageindex: 1,
      msg: ""
    }
  },
  created() {
      this.getcomments()
  },
  methods: {
    getcomments() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getcomments/"+ this.id +"?pageindex="+this.pageindex)
        .then(res => {
        //   console.log(res);
        // this.comments = res.body.message
          this.comments = this.comments.concat(res.body.message);
        })
    },
    getMone() {
        this.pageindex++
        this.getcomments()
    },
    postComment() {
        this.$http
        .post("http://www.liulongbin.top:3005/api/postcomment/"+ this.id,{
            content: this.msg
        })
        .then(res => {
        //   console.log(res);
          let info = {
            user_name: "匿名用户",
            add_time: Date.now(),
            content: this.msg
          }
          this.comments.unshift(info)
          this.msg = ""
        })
    }
  },
  props: ["id"]
}
</script>

<style scoped>
.cmt-container h3 {
    font-size: 18px;
}
.cmt-container textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-container .cmt-list {
    margin: 5px 0;
}
.cmt-container .cmt-list .cmt-item {
    font-size: 13px;
}
.cmt-container .cmt-list .cmt-title {
    line-height: 30px;
    background-color: #ccc;
}
.cmt-container .cmt-list .cmt-body {
    line-height: 35px;
    text-indent: 2em;
}
</style>
