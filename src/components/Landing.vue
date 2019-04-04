<template>
  <div>
    <p class="land_p">欢迎注册</p>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input v-model.number="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
    <el-form-item style="width:100%;text-align:center">
      <el-button type="primary" @click="submitForm()">提交</el-button>
      <el-button type="primary"  @click="back">返回</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkusername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
        
      }
      setTimeout(() => {
        this.$http.get("/check_name",{
          params:{
            username:value
          }
        }).then((res)=>{
          if (res.data == 1) {
           
              callback(new Error("账号已存在"));
            } else {
               this.check_data = res.data
              this.$message({
                message: '可以使用当前账号',
                type: 'sucess'
              });
            }
        })
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        username: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkusername, trigger: "blur" }]
      },
      check_data:"2"
    };
  },
  created() {
      if(document.documentElement.clientWidth < 800){
          this.$router.push('/appland')
          
      }else{
          this.$router.push('/land')
      }
  },
  methods: {
    submitForm() {
          if(this.check_data == 2&&this.ruleForm2.username!=""&&this.ruleForm2.checkPass!=""&&this.ruleForm2.pass!=""){
             this.$http.get("/register",{
            params:{
              username:this.ruleForm2.username,
              password:this.ruleForm2.pass
            }
          }).then((res)=>{
            if(res.data == 2){
              this.$alert('注册成功，点击确定跳转到登录页面', '', {
                confirmButtonText: '确定',
              });
              this.$router.push('/registed')
            }else{
              this.$message({
                message: '系统繁忙 请稍后再试',
                type: 'warning'
              });
            }
          })
          }else{
            this.$alert('注册失败，请好好仔细检查是否填写完整', '', {
                confirmButtonText: '确定',
              });
          }
         
       
    },
    back() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
  .el-form-item {
    margin-bottom: 22px;
    width: 26%;
    margin: auto;
    margin-top: 30px;
}
/* .el-button--primary{
   margin-left: 15%;

} */
.land_p{
  text-align: center;
  margin-left: 5%;
  margin-top: 5%;
}
.el-form-item__content{
  width:100%;
}
</style>
