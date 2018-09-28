<template>
  <div class="article">
    <div class="author">
      <img :src="form.author.avatar" >
      <div class="text">
        <p class="title">{{form.title}}</p>
        <p class="looknums">{{form.createdAt.substring(0,10)}} 阅读：{{form.looknums}}</p>
      </div>
    </div>
    <div class="content" v-html="form.content"></div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          id: '',
          form: {
            author: {
              avatar: ''
            },
            title: '',
            createdAt: '',
            looknums: '',
            content: ''
          }
        }
      },
      methods: {
        getArticle() {
          this.id = this.$route.params.id
          this.$axios.get(`/article/${this.id}`).then(res => {
            this.form = res.data
          })
        }
      },
      created() {
        this.getArticle()
      }
    }
</script>

<style scoped lang="scss">
  .article {
    width: 760px;
    margin: 40px auto 0;
    background-color: #fff;
    border-radius: 6px;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .author {
    display: flex;

    img {
      width: 60px;
      height: 60px;
    }

    .text {
      margin-left: 10px;

      .title {
        font-size: 18px;
        font-weight: 700;
      }

      .looknums {
        font-size: 14px;
        color: #888;
        margin-top: 10px;
      }
    }
  }

  .content {
    margin-top: 50px;
  }
</style>
