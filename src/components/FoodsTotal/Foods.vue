<template>
  <div class="foods">
    <div class="food_one" v-for="(item,index) in foods_list">
    <img :src="item.src" alt="">
    <el-tag class="introduction" type="success">失误信息</el-tag>
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
        {"src":"static/image/food1.jpg","text":1,"name":"小脚牛奶","price":1},
        {"src":"static/image/food2.jpg","text":1,"name":"瓜皮","price":10},
        {"src":"static/image/food3.jpg","text":1,"name":"香肠","price":100000},
        {"src":"static/image/food1.jpg","text":1,"name":"小脚牛奶","price":1},
        {"src":"static/image/food2.jpg","text":1,"name":"瓜皮","price":10},
        {"src":"static/image/food3.jpg","text":1,"name":"香肠","price":100000},
        {"src":"static/image/food1.jpg","text":1,"name":"小脚牛奶","price":1},
        {"src":"static/image/food2.jpg","text":1,"name":"瓜皮","price":10},
        {"src":"static/image/food3.jpg","text":1,"name":"香肠","price":100000}
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
  margin-top: 20px;
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

</style>
