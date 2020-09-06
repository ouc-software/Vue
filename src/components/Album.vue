<template>
    <div class="gallery-section">
        <!-- 首页导航栏 -->
        <div class="tab">
          <router-link to="./" class="home">首页</router-link>
          <router-view/>
        </div>
        <!-- 相册展示 -->

                <!-- 上传图片到后端，并且刷新之后显示新图片 -->
        <div class="inner-width">
            <h1>My Gallery</h1>
            <div class="border"></div>
            <div id="app" class="row">
                <div class="gallery col-2" v-for="item in arr">
                    <a :href="item.src" class="image">
                        <img :src="item.src" alt="">
                    </a>
                </div>
            </div>
        </div>

        <div class="hello">
        <div class="imgArea">
            <div class="imgArea">
            <button id="load" @click="details">详细信息</button>
            <h2>图片上传预览</h2>
              <ul>
                <li v-for="(item,index) in arr" :key="index">
                <span>+</span>
                <img v-if="item.src != ''" v-bind:src=" item.src || index " >


                <input type="file" : @change="pushImg($event,index)" accept="image/jpeg,image/png,image/gif" alt="">
                <span class="clear" v-if="item.src != ''" @click="delImg($event,index)">删</span>
                </li>
              </ul>
            </div>
        </div>
        <div class="tips" v-if="flag.change">添加成功</div>
        </div>

    </div>
</template>
<script>
export default {
        name: 'hello',
				data() { //data是一个方法
					return{
				          arr:[
                   {src:require('@/image/1.gif')},
                   {src:require('@/image/2.gif')},
                   {src:require('@/image/3.gif')},
                   {src:require('@/image/4.gif')},
                   {src:require('@/image/5.gif')},
                   {src:require('@/image/6.gif')},
                   {src:require('@/image/7.gif')},
                   {src:require('@/image/8.gif')}
               ],
               flag:{
                    change:false //是否上传成功
               }}
         },
				methods: {
          showImg() {   //显示图片
            var img_file =  $("#img_file").val();
            var file =  document.getElementById('img_file').files[0];
            var re = new FileReader();
            re.readAsDataURL(file);
            re.onload = function(re){
                $('#img_id').attr("src", re.target.result);
            }
        },
          detail() {
            this.$router.push({name:'ShowPhotos'});
          },
          pushImg: function (e, i) {
            let mm = this.arr; let flag = this.flag; let file = e.target; let reader = new FileReader()
            reader.readAsDataURL(file.files[0])
            reader.onload = function () { //将读取到的result也就是图片的base64码放入mm[i].data
            mm[i] = this.result
            flag.change = true
            setTimeout(() => {
            flag.change = false
              }, 2000)
              }
          },
          delImg: function (e, i) {
            this.arr[i] = ''
            let dom = document.getElementById(this.arr[i])
            dom.value = ''
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

  .inner-width{
      width: 100%;
      max-width: 1200px;
      margin:auto;
      padding:0 20px;
  }

  .gallery-section h1{
      text-align: center;
      text-transform: uppercase;
      color: #333;

  }

  .border{
      width: 180px;
      height: 4px;
      background:#333;
      margin:60px auto;
  }
  .gallery-section .gallery{
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: center;
  }

  .gallery-section .image{
      flex:25%;
      overflow:hidden;
      cursor: pointer;
  }

  .gallery-section .image img{
      width: 100%;
      height: 100%;
      transition: 0.4s;

  }

  .gallery-section .image:hover img{
      transform: scale(1.4) rotate(15deg);

  }
  @media screen and (max-width:960px){
      .gallery-section .image{
          float: 33.33%;
      }
  }
  @media screen and (max-width:768px){
      .gallery-section .image{
          float: 50%;
      }
  }
  @media screen and (max-width:480px){
      .gallery-section .image{
          float: 100%;
      }
  }
  .hello{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .imgArea{
    width: 400px;
    height: 200px;
    margin: 120px auto;
  }
  .imgArea ul{
    margin-top: 30px;
  }
  .imgArea li{
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    position: relative;
    border: 1px solid #485214;
    margin-right: 10px;
  }
  .imgArea img{
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
  }
  .imgArea input{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 5;
  }
  .imgArea .clear{
    font-size: 16px;
    color: orangered;
    position: absolute;
    right: -5px;
    top: -25px;
    cursor: pointer;
  }
  .tips{
    font-size: 25px;
    width: 200px;
    height: 100px;
    margin: 0 auto;
    border: 1px solid rosybrown;
  }
</style>
