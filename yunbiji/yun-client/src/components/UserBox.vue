<template>
  <div class="user-box">
    <div v-if="!isLogin">
      <div class="mb30">
        <el-input placeholder="邮箱" v-model="form.email"></el-input>
      </div>
      <div class="mb30">
        <el-input type="password" placeholder="密码" v-model="form.password" @keyup.center="login"></el-input>
      </div>
      <div class="btn mb30">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
      <div class="btn mb30">
        <el-button @click="$router.push('/register')">注册</el-button>
      </div>
    </div>
    <div v-else>
      <div class="user-msg">
        <div class="avatar">
          <img :src="userInfo.avatar" alt="">
          <p>萌新：{{userInfo.username}}</p>
        </div>
        <p>邮箱:{{userInfo.email}}</p>
        <p>个性签名: {{userInfo.desc}}</p>
      </div>
      <el-button type="warning" style="margin-top: 30px;width: 100%" @click="quitLogin">退出登录</el-button>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          form: {
            email: '',
            password: ''
          },
          isLogin: false
        }
      },
      methods: {
        login() {
          this.$axios.post('/user/login', this.form).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg)
              this.$store.commit('CHANGE_INFO', res.data)
              this.isLogin = true
            }else {
              this.$message.error(res.msg)
            }
          })
        },
        quitLogin() {
          this.$axios.post('/user/quitlogin').then(res => {
            if(res.code == 200){
              this.isLogin = false
              this.$message.success(res.msg)
              this.$store.commit('CHANGE_INFO', null)
            }else {
              this.$message.error(res.msg)
            }
          })
        }
      },
      computed: {
        userInfo() {
          return this.$store.state.userInfo
        }
      },
      created() {
        if(this.$store.state.userInfo) {
          this.isLogin = true
        }
      }
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

  .user-msg {
    text-align: center;

    p {
      margin-top: 20px;
    }
    .avatar {
      display: flex;

      img {
        width: 100px;
        height: 100px;
      }
    }

  }
</style>
