<template>
  <div class="feedback">
    <p>请输入反馈信息 我们也许会第一时间处理</p>
    <el-input class="phone_name" placeholder="name" v-model="input8" clearable></el-input>
    <el-input class="phone_name" placeholder="phone" v-model="input7" clearable></el-input>
    <el-input class="feedback_two" type="textarea" :rows="3" placeholder="Please输入您的意见或者建议" v-model="textarea"></el-input>
    <el-button type="primary"  @click="pays()">确认提交</el-button>
    <el-button type="primary"  @click="back">返回</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input8: "",
      input7: "",
      textarea: ""
    };
  },
  methods : {
    pays () {
      this.$http.get("",{
        params:{
          back_name:this.input8,
          back_phone:this.input7,
          back_suggestion:this.textarea
        }
      }).then((res)=>{
        this.$alert('反馈信息已提交', '', {
                confirmButtonText: '确定',
              });
      })
      
    },
    back() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.feedback{
  width: 500px;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  font-stretch:extra-condensed;
}
.feedback_two{
  margin: 20px 0;
}
.el-input{
  width: 30%;
}
</style>
