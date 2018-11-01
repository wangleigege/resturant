<template>
  <div class="foods">
    <div class="food_one" v-for="(item,index) in foods_list">
    <img :src="item.src" alt="">
    <el-tag class="introduction" type="success">失误信息</el-tag>
    <div class="add" @click="add(index)">
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
        {"src":"static/image/drink.jpg","text":1,"name":"呱呱","price":1},
        {"src":"static/image/drink1.jpg","text":1,"name":"柠檬汁","price":10},
        {"src":"static/image/drink2.jpg","text":1,"name":"花里胡哨","price":100000}
      ]
    
    }
  },
  methods :{
    add (index) {
      this.$store.state.totalmoney = 0
      console.log(this.$store.state.cart_list)
     this.$store.state.cart_list.push(this.foods_list[index])
    },
    increase (item) {
      item.text++
      this.$store.state.totalmoney = 0
      console.log(1)
    },
    decrease (item) {
      this.$store.state.totalmoney = 0
      if(item.text <= 0)
      {
        item.text = 0
      }else{
        item.text--
      }
      
      
    }
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
  width: 15%;
  height: 220px;
  margin-left: 20px;
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
