<template>
    <div class="layout">
      <Header></Header>
      <div class="w1170">
        <router-view ></router-view>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
        components: {
          Header
        }
    }
</script>

<style scoped>

</style>
