<template>
  <div class="select">
    <p>欢迎光临</p>
  <el-input  v-model="input_one" placeholder="请输入预定的座位号"></el-input>
  <el-input class="input_two" v-model="input_two" placeholder="请输入用餐人数"></el-input>
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
    // 
    this.$http.get('/table',{
      params:{
        position:this.input_one,
        person_number:this.input_two
      }
    }).then((res)=>{
      this.$router.push("/home")
    })
    
     
  }

}
}
</script>

<style scoped>
.select{
 width: 500px;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  font-stretch:extra-condensed;
}
.input_two{
  margin: 20px 0;
}

</style>
