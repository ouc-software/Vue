<template>
    <div class="register">
       <div class="tab">
          <router-link to="./" class="home">首页</router-link>
          <router-view/>
       </div>
       <div class="login_form">
          <div class="row">
           <label for="name" class="label">用户名</label>
           <div class="line"></div>
           <input id="name" type="text" MaxLength=16 class="login_user" placeholder="长度不超过16位" v-mode="userName" ref="input1">
          </div>

          <div class="xhx"></div>

          <div class="row">
           <label for="pwd" class="label">设置密码</label>
           <div class="line"></div>
           <input id="pwd" type="password" MaxLength=16 class="login_password" placeholder="长度不超过16位" v-mode="password" ref="input2">
          </div>

          <div class="xhx"></div>

          <div class="row">
           <label for="repwd" class="label">确认密码</label>
           <div class="line"></div>
           <input id="repwd" type="password" MaxLength=16 class="login_password" placeholder="请确认密码" v-mode="password" ref="input3">
          </div>

          <div class="xhx"></div>

          <button class="login_btn" @click="register" type="primary" round :loading="isBtnLoading" >注 册</button>

       </div>
    </div>
</template>

<script>
    export default {
        props: {
        },

        data() {
           return {
              userName: '',
              password: '',
              rePassword:''
           }
        },
       created () {
          if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
            this.userName = JSON.parse( localStorage.getItem('user')).userName;
            this.password = JSON.parse( localStorage.getItem('user')).password;
            this.rePassword = JSON.parse( localStorage.getItem('user')).rePassword;
          }
       },
       methods: {
          register() {
             this.userName = this.$refs.input1.value
             this.password = this.$refs.input2.value
             this.rePassword = this.$refs.input3.value

             if (this.userName=='') {
                this.$message.error('请输入用户名');
                return;
             }
             if (this.password=='') {
                this.$message.error('请输入密码');
                return;
             }
             if(this.rePassword=='') {
                this.$message.error('请再次输入密码');
                return;
             }
             if(this.password != this.rePassword) {
                this.$message.error('两次密码不一致');
                return;
             }

             //将注册的数据传送给后端

             //注册成功后，即返回登陆页面进行登录
             this.$router.push({name:'Login'});
          }
       }
    };
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

  .label {
    align:right;
    border:none;
    height:30px;
    width:100px;
    font-size: 17px;
    margin-right:50px;
    margin-top: 10px;
  }

  .xhx {
     height: 1.5px;
     width:  1000px;
     background-color:#A9A9AB;
     margin-top:5px;
     margin-bottom: 15px;
  }

  .line {
    width:1px;
    height: 50px;
    background-color:#A9A9AB;
    margin-right:45px;
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
    background-color:#C7C7E2;
    float:left;
    margin-top:20px;
    padding-left: 500px;
    padding-right:465px;
    padding-top:6px;
    padding-bottom:6px;
  }
</style>
