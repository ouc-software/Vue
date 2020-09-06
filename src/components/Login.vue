<template>
   <div class="Login">
       <div class="tab">
          <router-link to="./" class="home">首页</router-link>
          <router-view/>
       </div>
       <!--登录表单 -->
       <div class="login_form">

          <div class="row">
           <img src="../assets/login/user.png" class="img" style="height:37px;width:37px;margin-right:80px;">
           <input type="text" MaxLength=16 class="login_user" placeholder="用户名" v-mode="userName" ref="input1">
          </div>

          <div class="xhx"></div>

          <div class="row">
           <img src="../assets/login/password.png" class="img" style="height:37px;width:32px;margin-right:83px;">
           <input type="password" MaxLength=16 class="login_password" placeholder="密码" v-mode="password" ref="input2">
          </div>

          <div class="xhx"></div>

        <button class="login_btn" @click="login" type="primary" round :loading="isBtnLoading" >登 录</button>



          <div class="text">
             <router-link to="./Register" style="color: #000099;margin-left:40px;margin-right:830px; margin-top:20px; text-decoration: none;" @click="login">注册</router-link>
             <span style="color: #A9A9AB; margin-top:20px;">忘记密码？</span>
          </div>
          <router-view></router-view>
       </div>
   </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
    }
  },
    created () {
     // if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
     //   this.userName = JSON.parse( localStorage.getItem('user')).userName;  //转换为JSON格式
     //   this.password = JSON.parse( localStorage.getItem('user')).password;
     // }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        this.userName = this.$refs.input1.value
        this.password = this.$refs.input2.value
        if (this.userName=='') {
          this.$message.error('请输入用户名');
          return;
        }
        if (this.password=='') {
          this.$message.error('请输入密码');
          return;
        }

        //登录

        //登录成功后：
        //store中状态的改变值由后端传来
        this.$store.state.user=this.userName
        this.$router.push({name:'Album'})
      }
    }
  }

</script>

<style>
  .tab {
    width:100%;
    height: 100px;
    text-decoration: none;
    background-color: #E6E6FA;
    margin-top:0px;
  }
  .home {
    font-size:20px;

    color: #808080;
    text-decoration: none;
    float:right;
    margin-top:40px;
    margin-right:100px;
  }
  .login_form {
    margin-top:100px;
    margin-left:450px;
    padding:1px;
  }

  .row {
    display: flex;
    margin-left: 5px;
    margin-top:10px;
  }

  .xhx {
     height: 1.5px;
     width:  1000px;
     background-color:#A9A9AB;
     margin-top:10px;
     margin-bottom: 15px;
  }

  .login_user {
    border:none;
    height:40px;
    width: 200px;
    font-size:17px;
  }

  .login_password {
    border:none;
    height:40px;
    width:200px;
    font-size:17px;
  }

  .login_btn {
    display:inline-block;
    border-radius:20px;
    border:none;
    font-size:20px;
    fon-color: #A9A9AB;
    background-color: #C7C7E2;
    float:left;
    margin-top:20px;
    padding-left: 510px;
    padding-right:465px;
    padding-top:6px;
    padding-bottom:6px;
  }

  .text {
    position:absolute;
    //margin-left:50px;
    margin-top:50px;
    display:flex;
  }

</style>
