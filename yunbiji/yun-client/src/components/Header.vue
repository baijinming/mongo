<template>
    <div class="header">
      <div class="w1170 content">
        <router-link to="/">云笔记</router-link>
        <el-button class="btn" @click="handleGO">写笔记</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        methods: {
          handleGO() {
            if(this.$store.state.userInfo) {
              this.$router.push('/write')
            }else {
              this.$message.error('登录之后才能写笔记')
            }
          }
        }
    }
</script>

<style scoped lang="scss">
  .header {
    background-color: #409eff;
    height: 50px;

    .content {
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 30px;
        line-height: 50px;
        font-weight: 400;
      }

      .btn {
        margin: 5px 0;
      }
    }
  }
</style>
