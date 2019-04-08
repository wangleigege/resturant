<template>
  <div class="foods">
    <div class="food_one" v-for="(item,index) in foods_list">
    <img :src="item.src" alt="" @click="drinksmessage(item)">
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
        {"src":"static/image/drink6.jpg","text":1,"name":"好茶","price":15,"message":"提神醒脑，上好的茶叶"},
        {"src":"static/image/drink1.jpg","text":1,"name":"红茶","price":10,"message":"夏天火热的不行，快快解暑必备"},
        {"src":"static/image/drink2.jpg","text":1,"name":"健力宝","price":10,"message":"10元三罐，最新日期"},
        {"src":"static/image/drink3.jpg","text":1,"name":"美年达","price":9,"message":"三中各送一瓶"},
        {"src":"static/image/drink4.jpg","text":1,"name":"柠檬汁","price":10,"message":"喝起来很舒服"},
        {"src":"static/image/drink5.jpg","text":1,"name":"红酒","price":99,"message":"高大上，非你莫属！"}
      ]
    
    }
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
   drinksmessage(item) {
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
  margin-left: 5px;
}
</style>
