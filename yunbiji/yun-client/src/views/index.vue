<template>
  <div class="index">
    <div class="banner-userbox">
      <Banner></Banner>
      <UserBox></UserBox>
    </div>
    <div class="articles">
      <router-link :to="{name: 'article', params: {id: item._id}}" v-for="(item, index) in articles" :key="index">
        <div class="item-top">
          <div class="img">
            <img :src="item.author.avatar" alt="">
          </div>
          <div class="text">
            <div class="row1">
              <div class="author">{{item.author.username}}</div>
              <div class="title">{{item.title}}</div>
            </div>
            <div class="row2">
              <div class="tag">浏览：{{item.looknums}}</div>
              <div class="tag">回复：{{item.commontnums}}</div>
              <div class="tag">分类：{{item.tag}}</div>
            </div>
          </div>
        </div>
        <div class="item-content">
          {{item.contentText}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import UserBox from '../components/UserBox'
    export default {
      data() {
        return {
          articles: [],
          count: 0
        }
      },
      methods: {
        getData() {
          this.$axios.get('/article').then(res => {
            this.count = res.count
            this.articles = res.data
          })
        }
      },
      components: {
        Banner,
        UserBox
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .index {
    margin-top: 50px;
  }

  .banner-userbox {
    display: flex;
    justify-content: space-between;
  }

  .articles {
    margin-top: 30px;
    width: 750px;
    background-color: #fff;
    padding: 20px 20px 0;
    box-sizing: border-box;
    border-radius: 6px;

    a{
      display: block;
      text-decoration: none;
      color: #333;
     padding-bottom: 20px;
    }
  }

  .item-top {
    display: flex;
  }

  .img {
    width: 70px;
    height: 70px;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 70px;
      height: 70px;
    }
  }

  .text {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 700;

    .row1 {
      display: flex;
      height: 30px;
      line-height: 30px;

      .author {
        color: #409eff;
        font-size: 16px;
        padding-right: 10px;
        border-right: 1px solid #000;
      }

      .title {
        padding-left: 10px;
      }
    }

    .row2 {
      background-color: #bbb;
      border-radius: 4px;
      display: flex;
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      width: 600px;

      .tag {
        margin-right: 30px;
        font-size: 14px;
      }
    }
  }

  .item-content {
    margin: 10px;
  }
</style>
