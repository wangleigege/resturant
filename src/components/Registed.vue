<template>
  <div class="registed">
   <p>欢迎登陆神秘网站</p>
  <el-input  placeholder="请输入你的账号" v-model="input1" clearable suffix-icon="el-icon-more"></el-input>
  <el-input type="password" class="registed1" placeholder="请输入你的密码" v-model="input2" clearable suffix-icon="el-icon-more-outline"></el-input>
  <el-button type="primary" icon="el-icon-circle-check-outline" @click="registed()">登陆</el-button>
  </div>
</template>

<script>
export default {
  name:'Registed',
  data () {
    return {
      input1:'',
      input2:''
    }
  },
  methods : {
    registed () {
      this.$http.get('/login',{
        params:{
          username:this.input1,
          password:this.input2
        }
        }).then((res) =>{
        if(res.data[0]==1){
          	sessionStorage.setItem("userName",this.input1)

          this.$router.push("./")
          this.$message({
            message: '恭喜你，登陆成功',
            type: 'success'
          });
        }else if(res.data[0]==2){
          this.$message({
            message: '密码错了啊',
            type: 'warning'
          });
        }else{
          this.$message({
            message: '账号不存在啊',
            type: 'warning'
          });
        }
      })
    }
  }
};
</script>

<style scoped>
 .registed{
  width: 500px;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  font-stretch:extra-condensed;
 }
 .registed1{
   margin: 20px 0;
 }
</style>
