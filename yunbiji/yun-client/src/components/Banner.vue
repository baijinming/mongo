<template>
    <div class="banner">
      <img src="../../static/imgs/banner.jpg" alt="">
      <div class="desc">十三亿人都在用的云笔记</div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped lang="scss">
  .banner {
    width: 750px;
    height: 340px;
    border-radius: 6px;
    overflow: hidden;

    img {
      width: 750px;
      height: 340px;
    }

    .desc {
      position: relative;
      top: -50px;
      left: 0;
      height: 50px;
      background-color: #000;
      opacity: 0.5;
      color: #fff;
      line-height: 50px;
      padding-left: 30px;
      font-size: 26px;
    }
  }
</style>
