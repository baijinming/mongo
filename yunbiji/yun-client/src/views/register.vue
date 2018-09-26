<template>
  <div class="register">
    <h1>新用户注册</h1>
    <el-form v-model="form">
      <el-form-item>
        <el-input v-model="form.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 350px" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            form: {
              username: '',
              email: '',
              password: ''
            }
          }
        },
      methods: {
        register() {
          this.$axios.post('/register',this.form).then( res => {
            if (res.code == 200) {
              this.$message.success('注册成功')
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .register {
    width: 350px;
    margin: 40px auto;
    padding: 40px 180px;
    background-color: #fff;
    text-align: center;
    border-radius: 6px;

    h1 {
      font-size: 26px;
      font-weight: 400;
      margin-bottom: 20px;
    }
  }
</style>
