<template>
  <div class="hello">
      <router-link to="./Login">
        <label class="login">登录</label>
      </router-link>


      <span>{{this.$store.state.user}}</span>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<style>
 .login {

 }

</style>


