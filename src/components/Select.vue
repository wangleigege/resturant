<template>
  <div class="select">
    <p>欢迎光临</p>
  <el-input class="input_one" v-model="input_one" placeholder="请输入预定的座位号"></el-input>
  <el-input v-model="input_two" placeholder="请输入用餐人数"></el-input>
  <el-button type="success" icon="el-icon-check" circle @click="submit()"></el-button>
  </div>
</template>

<script>
export default {
data () {
  return {
    input_one:'',
    input_two:''
  }
},
methods:{
  submit () {
    this.$http.post('www.4399.com',{
      weizhi:this.input_one,
      renshu:this.input_two
    }).then(function(res){
     console.log(res)
    })
    //  this.$router.push("/home")
     
  }

}
}
</script>

<style scoped>
.select{
  width: 500px;
  text-align: center;
  margin:auto;
  margin-top: 50px;
}

</style>
