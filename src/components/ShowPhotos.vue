<template>
  <div class="gallery-section">
        <!-- 首页导航栏 -->
        <div class="tab">
          <router-link to="./" class="home">首页</router-link>
          <router-view/>
        </div>

        <title>相册展示</title>
        <img :src="imgArr[showidx]">
          <div id="btns">
            <button id="left" @click="left()">&lt;</button>
            <button id="right" @click="right()">&gt;</button>
        </div>

  </div>


</template>

<script>
  export default {

  data () {
    return {
      showidx:0,
      imgArr:[
               require('@/image/1.gif'),
               require('@/image/2.gif'),
               require('@/image/3.gif'),
               require('@/image/4.gif'),
               require('@/image/5.gif'),
               require('@/image/6.gif'),
               require('@/image/7.gif'),
               require('@/image/8.gif')
             ]

    }
  },
  methods:{
                left(){
                    this.showidx--;
                    if(this.showidx <= -1){
                        this.showidx = 3;
                    }
                    // this.imgUrl = this.imgArr[this.showidx];
                    console.log(this.showidx)
                },
                right(){
                    this.showidx++;
                    if(this.showidx >= this.imgArr.length){
                        this.showidx = 0;
                    }
                    // this.imgUrl = this.imgArr[this.showidx];
                    console.log(this.showidx)

                }
            }
}
</script>

<style>
 *{
      margin:0;
      padding:0;
      font-family: "montserrat",sans-serif;
      box-sizing: border-box;
  }

  .gallery-section{
      width: 100%;
      padding:60px 0;
      background: #f1f1f1;

  }
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
  .app{
    position: relative;
    width: 500px;
    }
  .img{
    width: 500px;
    }
  .left{
    position: absolute;
    top: 150px;
    left: 0;
    }
  .right{
    position: absolute;
    top: 150px;
    right: 0;
     }
  .button{
    width: 30px;
    height: 60px;
     }
</style>
