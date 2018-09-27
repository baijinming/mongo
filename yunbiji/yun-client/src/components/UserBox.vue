<template>
  <div class="user-box">
    <div class="mb30">
      <el-input placeholder="邮箱"></el-input>
    </div>
    <div class="mb30">
      <el-input placeholder="密码"></el-input>
    </div>
    <div class="btn mb30">
      <el-button type="primary">登录</el-button>
    </div>
    <div class="btn mb30">
      <el-button @click="$router.push('/register')">注册</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserBox"
    }
</script>

<style scoped lang="scss">
  .user-box {
    height: 340px;
    width: 360px;
    padding: 50px 30px 0;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
  }

  .btn /deep/ .el-button {
    width: 100%;
  }

  .mb30 {
    margin-bottom: 30px;
  }
</style>
