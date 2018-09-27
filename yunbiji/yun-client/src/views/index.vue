<template>
  <div class="index">
    <div class="banner-userbox">
      <Banner></Banner>
      <UserBox></UserBox>
    </div>
    <div class="sort">
      <router-link to="/" class="one-sort">
        <div class="item-top">
          <div class="img">
            <img src="../../static/imgs/banner.jpg" alt="">
          </div>
          <div class="text">
            <div class="row1">
              <div class="author">heboor</div>
              <div class="title">测试标题</div>
            </div>
            <div class="row2">
              <div class="tag">浏览：2</div>
              <div class="tag">回复：2</div>
              <div class="tag">分类：2</div>
            </div>
          </div>
        </div>
        <div class="item-content">
          测试内容
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import UserBox from '../components/UserBox'
    export default {
        components: {
          Banner,
          UserBox
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

  .sort {
    margin-top: 30px;
    width: 750px;
    background-color: #fff;
    padding: 20px 10px 0;
    box-sizing: border-box;
    border-radius: 6px;

    a{
      text-decoration: none;
      color: #333;
    }
  }

  .one-sort {
    margin-bottom: 20px;

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


    }
  }
</style>
