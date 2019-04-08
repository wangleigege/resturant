<template>
  <div class="books">
    <div class="book_one" v-for="(item,index) in books_list">
    <img :src="item.src" alt="" @click="booksmessage(item)">
    <el-tag class="introduction" type="success">商品价格：{{item.price}}元</el-tag>
    <div class="add" @click="add(index,item)">
     <el-button type="success" icon="el-icon-check" >添加</el-button>
    </div>
    <div class="increase" @click="increase(item)"><el-button type="primary" icon="el-icon-circle-plus"></el-button></div>
    <div class="books_number"><p>{{item.text}}</p></div>
    <div class="decrease" @click="decrease(item)"><el-button type="primary" icon="el-icon-remove"></el-button></div>
    </div>
    
  </div>
</template>

<script>

import { MessageBox } from 'mint-ui';
export default {
  name:"books",
  data () {
    return {
      books_list:[
        {"src":"static/image1/book.jpg","text":1,"name":"福尔摩斯","price":100,"message":"著名的故事，福尔摩斯，快快入手吧"},
        {"src":"static/image1/book1.jpg","text":1,"name":"窦娥冤","price":55,"message":"你会了解一个凄惨的故事，引人深思"},
        {"src":"static/image1/book2.jpg","text":1,"name":"外国名著","price":100,"message":"整册的书，一起出首了"},
        {"src":"static/image1/book4.jpg","text":1,"name":"历史","price":100,"message":"快快快，了解外史的时候到了"},
        {"src":"static/image1/book5.jpg","text":1,"name":"昆虫记","price":99,"message":"想了解一下世界昆虫的奇妙吗"},
        {"src":"static/image1/book6.jpg","text":1,"name":"名著","price":125,"message":"名著是很重要的，了解一点国外的文化"},
        {"src":"static/image1/book7.jpg","text":1,"name":"唐宋传奇","price":130,"message":"传奇入手吧"},
        {"src":"static/image1/book8.jpg","text":1,"name":"水浒传","price":66,"message":"水浒传，经典之作"}
      ]
    
    }
  },
  mounted () {
    this.$http.get('').then(function(res){
        console.log(res)
    })
  },
  methods :{
    add (index,item) {
      // this.$store.state.totalmoney = 0
      let anindex = this.$store.state.cart_list.indexOf(item)
      if(anindex == -1) {
        this.$store.state.cart_list.push(this.books_list[index])
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
   booksmessage(item) {
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
.books{
  width: 100%;
  padding-top: 10px;
  text-align: center;
 
}
.book_one{
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

.add,.increase,.decrease,.books_number {
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
