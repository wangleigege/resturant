<template>
<!-- <div class="carts">
  <ul>
    <li v-for="(list,index) in this.$store.state.cartbook_list ">商品:{{list.name}}----------------------------数量:{{list.text}}个----------------------------价格:{{list.price*list.text}}元</li>
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
             <th>商品图片</th>
             <th>单价</th>
             <th>数量</th>
             <th>操作</th>
             
        </tr>
    </thead>
    <tbody>
      <tr v-for="(list,index) in this.$store.state.cart_list ">
        <td>{{list.name}}</td>
        <td><img :src="list.src" alt="" width="50px" height="50px"></td>
        <td>{{list.price*list.text}}</td>
        <td>{{list.text}}</td>
        <!-- <td> <button @click="remove(index)">删除</button></td> -->
        <td><el-button @click="remove(index)" type="danger" icon="el-icon-delete" circle></el-button></td>
        
      </tr>
    </tbody>
  </table>
   <div class="settlement">
    <li>总金额:{{this.$store.state.totalmoney}}元</li>
    <el-button type="success" round @click="totalmoneys()" icon="el-icon-success">确认金额</el-button>
    <el-button type="warning" round @click="cancel()" icon="el-icon-delete">清空购物车</el-button>
    <!-- <input type="button" @click="totalmoneys()" value="确定" > -->
    <!-- <input type="button" @click="cancel()" value="取消"> -->
    <el-button type="warning" round @click="address()" icon="el-icon-edit">填写地址</el-button>
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
 created() {
       if(document.documentElement.clientWidth < 800){
         require('../../../static/apcart.css');
          
      }
  },
 methods :{
   totalmoneys () {
     this.$store.state.totalmoney = 0
     this.$store.state.totalmoney = Number(this.$store.state.totalmoney)
      this.$store.state.cart_list.forEach((item,index) => {
            this.$store.state.totalmoney += item.price * item.text

            console.log(this.$store.state.totalmoney)
            
          });
   },
   cancel () {
     this.$store.state.totalmoney= 0
     this.$store.state.cart_list = []
   },
   address () {
     this.$router.push("/address")
   },
   remove (index) {
     this.$store.state.cart_list.splice(index,1)
     this.totalmoneys()
    },
 }
 
}
</script>

<style scoped>

li{
  list-style: none;
}
.settlement{
  text-align: center;
  float:right;
  /* margin-left:20px; */
  /* border: 3px solid #c8c8c8; */
  margin-top: 20px;
  font-weight: bold;
  color: rgb(64, 4, 66);
}
table{
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    text-align: center;
    width: 100%;
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
.shopping{
    box-shadow: 0px 4px 7px green;
    width: 50%;
    margin-left: 25%;
}
.shopping p{
   text-align: center;
   font-size: 25px;
   margin-top: 20px;
   background-image: linear-gradient(RGB(241,241,241),RGB(226,226,226));  
   
}
</style>
