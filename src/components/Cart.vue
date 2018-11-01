<template>
<!-- <div class="carts">
  <ul>
    <li v-for="(list,index) in this.$store.state.cart_list ">商品:{{list.name}}----------------------------数量:{{list.text}}个----------------------------价格:{{list.price*list.text}}元</li>
  </ul>
  <div class="settlement">
    <li >总金额{{this.$store.state.totalmoney}}</li>
    <input type="button" @click="totalmoneys()" value="确定" >
    <input type="button" @click="cancel()" value="取消">
    <input type="button" @click="cancel()" value="结算">

  </div>
   
  </div> -->
 <div class="shopping">
   <p>购物车</p>
    <table id="cartTable">
    <thead>
          <tr>
             <th>商品</th>
             <th>单价</th>
             <th>数量</th>
        </tr>
    </thead>
    <tbody>
      <tr v-for="(list,index) in this.$store.state.cart_list ">
        <td>{{list.name}}</td>
        <td>{{list.price*list.text}}</td>
        <td>{{list.text}}</td>
      </tr>
    </tbody>
  </table>
   <div class="settlement">
    <li>总金额:{{this.$store.state.totalmoney}}</li>
    <el-button type="success" round @click="totalmoneys()">确认金额</el-button>
    <el-button type="warning" round @click="cancel()">清空购物车</el-button>
    <!-- <input type="button" @click="totalmoneys()" value="确定" > -->
    <!-- <input type="button" @click="cancel()" value="取消"> -->
    <el-button type="warning" round @click="cancel()">结算</el-button>
    <!-- <input type="button" @click="cancel()" value="结算"> -->
  </div>
 </div>
</template>

<script>
export default {
 name:"Cart",
 data () {
   return {
    data:''
   }
 },
 mounted () {
  
 },
 methods :{
   totalmoneys () {
     this.$store.state.totalmoney = Number(this.$store.state.totalmoney)
      this.$store.state.cart_list.forEach((item,index) => {
            this.$store.state.totalmoney += item.price * item.text

            console.log(this.$store.state.totalmoney)
            
          });
   },
   cancel () {
     this.$store.state.totalmoney= 0
     this.$store.state.cart_list = []
   }
 }
 
}
</script>

<style>

li{
  list-style: none;
}
.settlement{
  text-align: center;
  float:right;
  /* margin-left:20px; */
  border: 1px solid #c8c8c8;
  font-weight: bold;
  color: rgb(64, 4, 66);
}
table{
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    text-align: center;
    width: 50%;
    margin: auto;
}
th,td{
    border: 1px solid #cadeff;
}
th{
    background: #e2f2ff;
    border-top: 3px solid #a7cbff;
    height: 30px;
}
td{
    padding: 10px;
    color: #444;
     
}
tbody tr:hover{
    background: RGB(238,246,255);
}
.topic{
  text-align: center;
}
.shopping p{
   text-align: center;
   background-image: linear-gradient(RGB(241,241,241),RGB(226,226,226));  
}
</style>
