<template>
  <div class="homes">
   <div class="footers">
    <p class="topic"><span>真香</span>小店</p>
    <div class="navitems">
      <ul class="navitems-group1">
			        <li><a href="javascript:void(0);" @click="select_food()">吃的香</a></li>
              <li><a href="javascript:void(0);" @click="select_book()">书的香</a></li>
              <li><a href="javascript:void(0);" @click="select_other()">用的香</a></li>
              <li><a href="javascript:void(0);" @click="select_reg()">登陆</a></li>
              <li><a href="javascript:void(0);" @click="feed_back()">注册</a></li>
			</ul>
    </div>
  </div>
    <el-carousel class="gundong" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in dazhe_list" :key="item">
        <h3>
          <img :src="item.src" alt="">
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="boxs">
      <div class="boxs_inner">
         <div class="box">
        <img class="img_one" @click="img_one" src="static/image/drink.jpg" alt="">
        <p>活动期间<sapn style="color:blue;font-size:15px">惊爆价</sapn>：15元</p>
        <img class="img_one" src="static/image/drink1.jpg" alt="">
        <p>活动期间<sapn style="color:blue;font-size:15px">惊爆价</sapn>：15元</p>
      </div>
      <div class="box">
        <img class="img_two" src="static/image/food2.jpg" alt="">
        <p><span style="font-size:15px;color:blue">打折</span>了，快快抢购</p>
        <div class="img_price">
          <span class="img_priceold">
            <i>¥</i>
            <span>15</span>
          </span>
          <span class="img_pricenew">
            <i>¥</i>
            <span>15</span>
          </span>
        </div>
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
        <p>活动期间<sapn style="color:blue;font-size:15px">惊爆价</sapn>：15元</p>
        <img class="img_one" src="static/image/drink1.jpg" alt="">
        <p>活动期间<sapn style="color:blue;font-size:15px">惊爆价</sapn>：15元</p>
      </div>
      <div class="box">
        <img class="img_two" src="static/image/food2.jpg" alt="">
         <p><span style="font-size:15px;color:blue">打折</span>了，快快抢购</p>
        <div class="img_price">
          <span class="img_priceold">
            <i>¥</i>
            <span>15</span>
          </span>
          <span class="img_pricenew">
            <i>¥</i>
            <span>15</span>
          </span>
        </div>
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
        <p>活动期间<sapn style="color:blue;font-size:15px">惊爆价</sapn>：15元</p>
        <img class="img_one" src="static/image/drink1.jpg" alt="">
        <p>活动期间<sapn style="color:blue;font-size:15px">惊爆价</sapn>：15元</p>
      </div>
      <div class="box">
        <img class="img_two" src="static/image/food2.jpg" alt="">
         <p><span style="font-size:15px;color:blue">打折</span>了，快快抢购</p>
        <div class="img_price">
          <span class="img_priceold">
            <i>¥</i>
            <span>15</span>
          </span>
          <span class="img_pricenew">
            <i>¥</i>
            <span>15</span>
          </span>
        </div>
      </div>
      <div class="box box_three">
        <div class=" box_inner"></div>
        <img class="img_three" src="static/image/drink.jpg" alt="">
        <img class="img_three" src="static/image/drink1.jpg" alt="">
      </div>
      </div>
    </div>
    <div class="sidebar">
       <div class="sider "><i class="el-icon el-icon-edit"></i><a href="javascript:void(0);" @click="bomb_1()">联系</a></div>
       <div class="sider "><i class="el-icon el-icon-time"></i><a href="javascript:void(0)" @click="bomb_2()">反馈</a></div>
       <div class="sider "><i class="el-icon el-icon-star-on"></i><a href="javascript:void(0);" @click="bomb_3()">信息</a></div>
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
import { MessageBox } from 'mint-ui';
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
   
 },
 mounted () {
   this.$store.state.user_name=sessionStorage.getItem("userName")
   if (this._isMobile()) {
      this.$router.replace('/anhome');
    } else {
      this.$router.replace('/');
    }
   console.log(document.documentElement.clientWidth)
 },
 methods:{
   _isMobile() {
	 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	 return flag;
   },
   select_food () {
     this.$router.push('/home')
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
      // this.$alert('请小姐姐添加=>O(∩_∩)=>wl6wl9', '博主微信', {
      //     customClass:"analert",
      //     confirmButtonText: '确定',
      //   });
      MessageBox('博主微信', '请小姐姐添加=>O(∩_∩)=>wl6wl9');
      console.log(1)
   },
   bomb_2(){
     this.$router.push('/feed')
   },
   bomb_3(){
     this.$router.push('/address')
   },
   bomb_4(){
      // this.$alert('活动还未开始o(∩_∩)o 哈哈', '', {
      //     confirmButtonText: '确定',
      //   });
      MessageBox('活动？', '活动还未开始o(∩_∩)o 哈哈');
   },
   bomb_5(){
      // this.$alert('请小姐姐添加=>O(∩_∩)=>wl6wl9', '客服微信', {
      //     confirmButtonText: '确定',
      //   });
      MessageBox('客服微信', '请小姐姐添加=>O(∩_∩)=>wl6wl9');

   },
   img_one() {
     this.$router.push('/home')
   }
 }
}
</script>

<style scoped >
 .topic {
    text-align: center;
    font-size: 60px;
    margin:  20px 0;
}

p {
    font-stretch: expanded;
    font-weight: bold;
}
.gundong{
    height: 3.4rem;
}
.navitems {
    width: 60%;
    height: 1.4rem;
    background-color: #222;
    margin: auto;
    position: relative;
    border-radius: 25px;
}

.navitems ul {
    margin: auto;
    height: 50px;
    width: 100%;
    text-align: center;
}

.navitems ul li {
    text-decoration: none;
    list-style: none;
    line-height: 1.4rem;
    padding: 0 0.5%;
    display: inline-block;
    font-size: 15px;
}

.navitems ul a {
    color: aliceblue;
    text-decoration: none;
}

.navitems ul a:hover {
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

.el-carousel {
    width: 80%;
    margin: auto;
    margin-top: 50px;
}

.el-carousel__container {
    height: 150px!important;
}

.el-carousel__container img {
    width: 100%;
    height: 3.386667rem;
}

.boxs {
    margin: auto;
    margin-top: 50px;
    width: 100%;
    height: 450px;
}

.box {
    float: left;
    height: 8.933333rem;
    width: 77%;
    margin-left: 12%;
    text-align: center;
    background: #f5f9fa;
    position: relative;
}

.img_one {
    width: 80%;
    height: 40%;
    margin: 5px 0;
}

.box_inner::before {
    content: '';
    position: absolute;
    display: block;
    width: 340px;
    height: 420px;
    border: solid 5px #333;
    z-index: 0;
}

.img_two {
    margin-top: 10%;
    width: 80%;
    height: 70%;
}

.img_three {
    width: 100%;
    height: 45%;
    position: relative;
}

.box_three {
    background: white;
}

.sidebar {
    width: 182px;
    height: 504px;
    right: -121px;
    top: 150px;
    position: fixed;
    z-index: 10;
}
.el-message-box .analert{
  width: 80%;
  text-align: center;
}

.sider {
    height: 1.533333rem;
    width: 100%;
    margin-top: 10px;
    /* background: rgb(30, 197, 58); */
    border-radius: 10px;
    box-shadow: 6px 3px 1px #343f34;
}

.sider a {
    margin-left: 30px;
    text-decoration: none;
    font-size: 38px;
}

.sider:hover {
    transform: translate(-133px, 0);
    transition: transform 1s;
}

.sidebar_left {
    width: 92px;
    height: 92px;
    left: 10px;
    top: 50px;
    position: fixed;
    border-radius: 50%;
    overflow: hidden;
    z-index: 10;
}

.sidebar_left img {
    width: 100%;
    height: 100%;
}

.users {
    position: absolute;
    top: 40px;
    right: 14px;
    width: 17%;
    height: 54px;
}

.users p {
    color: rgb(228, 100, 100);
    position: absolute;
    top: -15px;
    left: 10px;
}

.users img {
    width: 100%;
    height: 100%;
    display: none;
}

.el-icon {
    line-height: 2;
    font-size: 60px;
}

.footered {
    width: 80%;
    height: 150px;
    margin: auto;
    margin-top: 730px
}

.footer1 {
    text-align: center;
    position: absolute;
    z-index: 10;
    left: 10%;
    width: 80%;
    display: none;
}
.img_price{
    position: absolute;
    left: 70%;
    top: 80%;
    width: 80px;
    height: 30px;
    padding: 1px;
    background: #e6382f;
    line-height: 30px;
}
.img_priceold{
    float: left;
    width: 80px;
    height: 30px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;

}
.img_pricenew{
    float: left;
    width: 80px;
    height: 30px;
    background: #fff;
    text-align: center;
    color: #b7bcb8;
    font-size: 12px;
    text-decoration: line-through;
}

/* .footer1 a {
    margin: 0 5%;
    text-decoration: none;
    font-size: 15px;
} */

.footered img {
    width: 100%;
    height: 100%;
    position: relative;
}
/* 
.el-message-box {
    width: 210px;
    margin-top: 50%;
} */


</style>
