<template>   <div>     <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">       <el-form-item label="账号" prop="username">         <el-input v-model.number="ruleForm2.username"></el-input>       </el-form-item>       <el-form-item label="密码" prop="pass">         <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>       </el-form-item>       <el-form-item label="确认密码" prop="checkPass">         <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>       </el-form-item>     <el-form-item>       <el-button type="primary" @click="submitForm()">提交</el-button>     </el-form-item>   </el-form>   </div> </template>  <script>
export default {
  data() {
    var checkusername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      }
      setTimeout(() => {
        this.$http
          .get("/check_name", { params: { username: value } })
          .then(res => {
            if (res.data == 1) {
              callback(new Error("账号已存在"));
            } else {
              callback(new Error("ojbk！"));
            }
          });
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
      ruleForm2: { pass: "", checkPass: "", username: "" },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkusername, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$http
        .get("/register", {
          params: {
            username: this.ruleForm2.username,
            password1: this.ruleForm2.pass
          }
        })
        .then(res => {
          if (res.data == 2) {
            alert(2);
          } else {
            alert(3);
          }
        });
    }
  }
};
</script>  <style>
</style>