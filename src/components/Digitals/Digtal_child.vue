<template>
  <div class="digitals">
    <div class="digital_one" v-for="(item,index) in digtal_list">
    <img :src="item.src" alt="" @click="thingsmessage(item)">
    <el-tag class="introduction" type="success">商品价格：{{item.price}}元</el-tag>
    <div class="add" @click="add(index,item)">
     <el-button type="success" icon="el-icon-check" >添加</el-button>
    </div>
    <div class="increase" @click="increase(item)"><el-button type="primary" icon="el-icon-circle-plus"></el-button></div>
    <div class="digitals_number"><p>{{item.text}}</p></div>
    <div class="decrease" @click="decrease(item)"><el-button type="primary" icon="el-icon-remove"></el-button></div>
    </div>
    
  </div>
</template>

<script>

export default {
  name:"digitals",
  data () {
    return {
      digtal_list:[
        {"src":"static/image1/thing.jpg","text":1,"name":"自行车","price":600,"message":"这辆自行车原价1500，现在挥泪大甩卖，快快抢购"},
        {"src":"static/image1/thing1.jpg","text":1,"name":"耳机","price":50,"message":"走过路过，不要错过，这个耳机听音乐非常舒服"},
        {"src":"static/image1/thing2.jpg","text":1,"name":"行李箱","price":300,"message":"这个行李可以放好多，物超所值"},
        {"src":"static/image1/thing3.jpg","text":1,"name":"电风扇","price":100,"message":"这个电风扇是我朋友的，物超所值"},
        {"src":"static/image1/thing4.jpg","text":1,"name":"包包","price":200,"message":"这个包包是外国名牌，很值得拥有"},
        {"src":"static/image1/thing5.jpg","text":1,"name":"运动鞋","price":99,"message":"这双鞋很耐穿，只是有点小了，挥泪甩卖啊"},
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
        this.$store.state.cart_list.push(this.digtal_list[index])
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
   thingsmessage(item) {
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
.digitals{
  width: 100%;
  padding-top: 10px;
  text-align: center;
 
}
.digital_one{
  float: left;
  width: 200px;
  height: 220px;
  margin-left: 1.266667rem;
 margin-top: 100px;
  box-shadow: -7px 7px 16px  rgba(46,46,46,0.2)
}
img{
  width: 80%;
  height: 60%;
}

.add,.increase,.decrease,.digitals_number {
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
