<template>
  <div class="address">
    <p>请输入配送信息</p>
    <el-input  placeholder="姓名" v-model="input9" clearable></el-input>
    <el-input  placeholder="电话" v-model="input10" clearable></el-input>
    <el-input class="address_two" type="textarea" :rows="3" placeholder="Please输入配送地址" v-model="textarea"></el-input>
    <el-input class="address_two" type="textarea" :rows="3" placeholder="Please输入其他需求 不一定满足你" v-model="textarea1"></el-input>
    <el-button type="primary"  @click="pays()">确认保存并支付</el-button>
    <el-button type="primary"  @click="back">返回</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input9: "",
      input10: "",
      textarea: "",
      textarea1: ""
    };
  },
  mounted() {
    this.$http
      .get("/show_address", {
        params: {
          username: this.$store.state.user_name
        }
      })
      .then(res => {
        this.input9 = res.data[0].truename;
        this.input10 = res.data[0].phone;
        this.textarea = res.data[0].address;
        console.log(this.input9);
        console.log(this.textarea1);
      });
  },
  methods: {
    pays() {
      this.$http.get("/address", {
          params: {
            username: this.$store.state.user_name,
            name1: this.input9,
            phone: this.input10,
            address: this.textarea
          }
        })
        .then(res => {
          this.$router.push("/pays");
        });
    },
    back() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.address {
  width: 500px;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  font-stretch: extra-condensed;
}
.address_two {
  margin: 20px 0;
}
.el-input {
  width: 30%;
}
</style>
