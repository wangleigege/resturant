<template>
  <div class="homes">
    
   <div class="footers">
    <p class="topic">小<span>购</span>物</p>
    <div class="navitems">
      <ul class="navitems-group1">
			        <li><a href="javascript:void(0);" @click="select_food()">外卖</a></li>
              <li><a href="javascript:void(0);" @click="select_book()">二手书</a></li>
              <li><a href="javascript:void(0);" @click="select_other()">小物品</a></li>
              <li><a href="javascript:void(0);" @click="select_reg()">登陆</a></li>
              <li><a href="javascript:void(0);" @click="feed_back()">注册</a></li>
			</ul>
    </div>
  </div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in dazhe_list" :key="item">
        <h3>
          <img :src="item.src" alt="">
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="boxs">
      <div class="boxs_inner">
         <div class="box">
        <img class="img_one" src="static/image/drink.jpg" alt="">
        <p>买一song万</p>
        <img class="img_one" src="static/image/drink1.jpg" alt="">
      </div>
      <div class="box">
        <img class="img_two" src="static/image/food2.jpg" alt="">
      </div>
      <div class="box box_three">
        <div class=" box_inner"></div>
        <img class="img_three" src="static/image/drink.jpg" alt="">
        <img class="img_three" src="static/image/drink1.jpg" alt="">
      </div>
      </div>
    </div>
    <div class="boxs">
      <div class="boxs_inner">
         <div class="box">
        <img class="img_one" src="static/image/drink.jpg" alt="">
        <p>买一song万</p>
        <img class="img_one" src="static/image/drink1.jpg" alt="">
      </div>
      <div class="box">
        <img class="img_two" src="static/image/food2.jpg" alt="">
      </div>
      <div class="box box_three">
        <div class=" box_inner"></div>
        <img class="img_three" src="static/image/drink.jpg" alt="">
        <img class="img_three" src="static/image/drink1.jpg" alt="">
      </div>
      </div>
    </div>
    <div class="boxs">
      <div class="boxs_inner">
         <div class="box">
        <img class="img_one" src="static/image/drink.jpg" alt="">
        <p>买一song万</p>
        <img class="img_one" src="static/image/drink1.jpg" alt="">
      </div>
      <div class="box">
        <img class="img_two" src="static/image/food2.jpg" alt="">
      </div>
      <div class="box box_three">
        <div class=" box_inner"></div>
        <img class="img_three" src="static/image/drink.jpg" alt="">
        <img class="img_three" src="static/image/drink1.jpg" alt="">
      </div>
      </div>
    </div>
    <div class="sidebar">
       <div class="sider "><i class="el-icon el-icon-edit"></i><a href="javascript:void(0);" @click="bomb_1()">博主联系方式</a></div>
       <div class="sider "><i class="el-icon el-icon-time"></i><a href="javascript:void(0)" @click="bomb_2()">反馈小建议</a></div>
       <div class="sider "><i class="el-icon el-icon-star-on"></i><a href="javascript:void(0);" @click="bomb_3()">我的信息管理</a></div>
       <div class="sider "><span class="el-icon el-icon-d-arrow-left"></span><a href="javascript:void(0);" @click="bomb_4()">活动</a></div>
       <div class="sider "><i class="el-icon el-icon-time"></i><a href="javascript:void(0);" @click="bomb_5()">客服</a></div>
    </div>
    <div class="sidebar_left">
      <img src="static/image/image_gif.gif" alt="">
    </div>
    <div class="users">
      <img src="static/image/zhaopai.jpg" alt="">
      <p v-if="this.$store.state.user_name == 0">欢迎光临本小店</p>
      <p v-else>欢迎光临: <span style="color:black;">{{this.$store.state.user_name}}</span></p>
    </div>
    <div class="footered">
      <p class="footer1">
       本残品还在测试中  请勿下单  保证不送
      </p>
      <img src="static/image1/footer1.jpg" alt="">
    </div>

  </div>
</template>

<script>
export default {
 data () {
   return{
      dazhe_list:[
          {"src":'static/image/dazhe1.jpg'},
          {"src":'static/image/dazhe2.jpg'},
          {"src":'static/image/dazhe3.jpg'}
      ],
      bomb:"0"
   }
 },
 created () {
    if(document.documentElement.clientWidth < 800){
        require('../../static/homeapp.css');
        
    }else{
        require('../../static/homepc.css');
    }
 },
 mounted () {
   this.$store.state.user_name=sessionStorage.getItem("userName")
 },
 methods:{
   select_food () {
     this.$router.push('/select')
   },
   select_reg () {
     this.$router.push('/registed')
   },
   select_book () {
     this.$router.push('/book')
   },
   feed_back () {
      this.$router.push('/land')
   },
   select_other () {
     this.$router.push('/digital')
   },
   bomb_1(){
      this.$alert('请小姐姐添加=>O(∩_∩)=>wl6wl9', '博主微信', {
          confirmButtonText: '确定',
        });
   },
   bomb_2(){
     this.$router.push('/feed')
   },
   bomb_3(){
     this.$router.push('/address')
   },
   bomb_4(){
      this.$alert('活动还未开始o(∩_∩)o 哈哈', '', {
          confirmButtonText: '确定',
        });
   },
   bomb_5(){
      this.$alert('请小姐姐添加=>O(∩_∩)=>wl6wl9', '客服微信', {
          confirmButtonText: '确定',
        });
   }
 }
}
</script>

<style scoped >
 /* @import '../../static/homepc.css';  */
/* .topic{
    text-align: center;
}
p{
  font-stretch:expanded;
  font-weight:bold; 
}
.navitems{
    width: 60%;
    height: 50px;
    background-color: #222;
    margin: auto;
    position: relative;
}
.navitems ul{
  margin: auto;
  height: 50px;
  width: 80%;
}
.navitems ul li{
  float: left;
  text-decoration: none;
  list-style: none;
  line-height: 50px;
  padding: 0 5%;
}
.navitems ul a{
    color: aliceblue;
    text-decoration: none;
}
.navitems ul a:hover{
  color: rgb(34, 81, 184);
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel{
    width: 50%;
    margin: auto;
    margin-top: 50px;
  }
  .el-carousel__container img{
    width: 100%;
    height: 300px;
  }
  .boxs{
    margin: auto;
    margin-top: 50px;
    width:60%;
     
    height: 450px;
  }
  .box{
    float: left;
    height: 450px;
    width: 30%;
    margin: 0 0 0 3%;
    text-align: center;
    
    background: #f5f9fa;
  }
  .img_one{
    width: 80%;
    height: 40%;
    margin:5px 0;
  }
  .box_inner::before{
    content: '';
    position: absolute;
    display: block;
    width: 30%;
    height: 420px;
    border: solid 5px #333;
    z-index: 0;
  }
  .img_two{
    margin-top:10%; 
    width: 80%;
    height: 80%;
  }
  .img_three{
    width: 100%;
    height: 45%;
    position: relative; 
  }
  .box_three{
    background: white;
  }
  .sidebar{
    width: 200px;
    height: 500px;
    right: -153px;
    top:150px;
    position: fixed;
    
  }
  .sider{
    height: 60px;
    width: 100%;
    margin-top:10px;
    background: rgb(30, 197, 58);
    border-radius: 10px;
    box-shadow: 6px 3px 1px #343f34;
  }
  .sider:hover{
      transform: translate(-133px,0);
      transition: transform 1s;
  }
  .sidebar_left{
      width:200px;
      height:200px;
      left: 10px;
      top:50px;
      position: fixed; 
      border-radius:50% ; 
      overflow: hidden;
  }
  .sidebar_left img{
    width: 100%;
    height: 100%;
  }
  .users{
    position: absolute;
    top:50px;
    right: 200px;
    width: 150px;
    height: 60px;
  }
  .users p{
    color: rgb(228, 100, 100);
    position: absolute;
    top:0;
    left: 10px;
  }
  .users img{
    width: 100%;
    height: 100%;
    
  }
  .el-icon{
    line-height: 2;
    font-size: 30px;
  } */
</style>
