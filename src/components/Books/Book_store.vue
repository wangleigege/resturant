<template>
  <div class="books">
    <div class="book_one" v-for="(item,index) in books_list">
    <img :src="item.src" alt="">
    <el-tag class="introduction" type="success">失误信息</el-tag>
    <div class="add" @click="add(index)">
     <el-button type="success" icon="el-icon-check" >添加</el-button>
    </div>
    <div class="increase" @click="increase(item)"><el-button type="primary" icon="el-icon-circle-plus"></el-button></div>
    <div class="books_number"><p>{{item.text}}</p></div>
    <div class="decrease" @click="decrease(item)"><el-button type="primary" icon="el-icon-remove"></el-button></div>
    </div>
    
  </div>
</template>

<script>

export default {
  name:"books",
  data () {
    return {
      books_list:[
        {"src":"static/image1/book.jpg","text":1,"name":"说什么","price":1},
        {"src":"static/image1/book1.jpg","text":1,"name":"看啥","price":10},
        {"src":"static/image1/book2.jpg","text":1,"name":"想啥","price":100000},
        {"src":"static/image1/book3.jpg","text":1,"name":"你说啥","price":1},
        {"src":"static/image1/book4.jpg","text":1,"name":"你愁啥","price":10},
        {"src":"static/image1/book5.jpg","text":1,"name":"瞅你咋地","price":100000},
        {"src":"static/image1/book6.jpg","text":1,"name":"再抽一个事实","price":1},
        {"src":"static/image1/book7.jpg","text":1,"name":"就抽你","price":10},
        {"src":"static/image1/book8.jpg","text":1,"name":"揪痧","price":100000}
      ]
    
    }
  },
  mounted () {
    this.$http.get('').then(function(res){
        console.log(res)
    })
  },
  methods :{
    add (index) {
      // this.$store.state.totalmoney = 0
    // let anindex = this.$store.state.cart_list.indexOf(item)
    //  console.log(anindex)
      // console.log(this.$store.state.cart_list)
     this.$store.state.cart_list.push(this.books_list[index])
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
  margin-top: 20px;
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
