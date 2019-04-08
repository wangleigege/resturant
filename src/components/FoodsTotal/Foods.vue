<template>
  <div class="foods">
    <div class="food_one" v-for="(item,index) in foods_list">
    <img :src="item.src" alt="" @click="foodsmessage(item)">
    <el-tag class="introduction" type="success">商品价格：{{item.price}}元</el-tag>
    <div class="add" @click="add(index,item)">
     <el-button type="success" icon="el-icon-check" >添加</el-button>
    </div>
    <div class="increase" @click="increase(item)"><el-button type="primary" icon="el-icon-circle-plus"></el-button></div>
    <div class="foods_number"><p>{{item.text}}</p></div>
    <div class="decrease" @click="decrease(item)"><el-button type="primary" icon="el-icon-remove"></el-button></div>
    </div>
    
  </div>
</template>

<script>

export default {
  name:"Foods",
  data () {
    return {
      foods_list:[
        {"src":"static/image/food.jpg","text":1,"name":"披萨","price":30,"message":"此商品入口即化，居家旅行，必备神器"},
        {"src":"static/image/food1.jpg","text":1,"name":"蛋糕","price":10,"message":"蛋糕是女生的最爱，快快为女朋友买一点吧"},
        {"src":"static/image/food2.jpg","text":1,"name":"水果","price":50,"message":"各种水果来一个"},
        {"src":"static/image/food3.jpg","text":1,"name":"好吃的水果","price":100,"message":"这中水果与众不同"},
        {"src":"static/image/food4.jpg","text":1,"name":"粉","price":15,"message":"吃的饱饱的，你指的拥有"},
        {"src":"static/image/food5.jpg","text":1,"name":"炸鸡","price":30,"message":"物超所值，有8个"},
        {"src":"static/image/food6.jpg","text":1,"name":"草莓","price":30,"message":"草莓蛋糕很好吃呦"},
        {"src":"static/image/food7.jpg","text":1,"name":"鸡腿","price":10,"message":"鸡腿棒棒的哟"},

      ]
    
    }
  },
 mounted () {
    this.$http.get('/test').then((res)=>{
      this.foods_list = res.data
        console.log(res)
    })
  },
  methods :{
    add (index,item) {
      // this.$store.state.totalmoney = 0
      let anindex = this.$store.state.cart_list.indexOf(item)
      if(anindex == -1) {
        this.$store.state.cart_list.push(this.foods_list[index])
      }else {
        item.text++
      }
      console.log(anindex)
      console.log(this.$store.state.cart_list)
     
     this.totalmoneys()
    },
    increase (item) {
      item.text++
      // this.$store.state.totalmoney = 0
      this.totalmoneys()
      console.log(1)
    },
    decrease (item) {
      // this.$store.state.totalmoney = 0
      if(item.text <= 0)
      {
        item.text = 0
      }else{
        item.text--
      }
      this.totalmoneys()
      
    },
    totalmoneys () {
     this.$store.state.totalmoney = 0
     this.$store.state.totalmoney = Number(this.$store.state.totalmoney)
      this.$store.state.cart_list.forEach((item,index) => {
            this.$store.state.totalmoney += item.price * item.text

            console.log(this.$store.state.totalmoney)
            
          });
   },
   foodsmessage(item) {
     if(this._isMobile()){
       MessageBox('商品信息', item.message);
       console.log(item)
     }else{
       this.$alert(item.message, '商品信息', {
          confirmButtonText: '我了解了',
        });
        console.log(item)
     }
     
   },
   _isMobile() {
	 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	 return flag;
   },
  }

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
	}
.foods{
  width: 100%;
  padding-top: 10px;
  text-align: center;
 
}
.food_one{
  float: left;
  width: 200px;
  height: 220px;
  margin-left: 20px;
  margin-top: 100px;
  box-shadow: -7px 7px 16px  rgba(46,46,46,0.2)
}
img{
  width: 80%;
  height: 60%;
}

.add,.increase,.decrease,.foods_number {
  color: deeppink;
  font-size: 15px;
  cursor: pointer;
  display: inline-block;
}
.increase,.decrease{
  width: 25px;
}
.introduction{
  display: block;
  margin-bottom: 10px;
}
.foods_number p{
  margin-left: 6px;
}
</style>
