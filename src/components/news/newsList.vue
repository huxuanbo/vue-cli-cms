<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsInfo/' + item.id ">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<p class="mui-ellipsis">
                <span>发表日期：{{item.add_time | times }}</span>
                <span>点击：{{item.click}}次</span>
                </p>
						</div>
					</router-link>
		    </li>
		</ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.newsList();
  },
  methods: {
    newsList() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(res => {
          // console.log(res.body.message);
          this.newslist = res.body.message;
        });
    }
  }
};
</script>

<style scoped>
.mui-table-view li h3 {
    font-size: 14px;
}
.mui-table-view li .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
}
</style>
