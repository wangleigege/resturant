<template>
  <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>菜品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="food_choose()">主食</el-menu-item>
          <el-menu-item index="1-2">副食</el-menu-item>
          <el-menu-item index="1-3">想笨笨</el-menu-item>
          <el-menu-item index="1-4">真想</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>饮料</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="drink_choose()">碳酸</el-menu-item>
          <el-menu-item index="1-2">牛奶</el-menu-item>
          <el-menu-item index="1-3">啤酒</el-menu-item>
          <el-menu-item index="1-4">鸡尾酒</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="drink_choose()">饮料</span>
      </el-menu-item> -->
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">水果</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">零食</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  
</el-row>
</template>

<script>
export default {
name:"LibTab",
data () {
  return {
    
  }
},
methods: {
      food_choose () {
        this.$router.push("/home/foods")
      },
      drink_choose () {
        this.$router.push("/home/drinks")
      }
}
}
</script>

<style scoped>
.el-col-12{
  width: 45%;
}
.tac{
  width: 30%;
}
.el-submenu .el-menu-item{
  min-width: 50px;
}
.el-menu{
 /* background: #f1eaea; */
}
</style>
