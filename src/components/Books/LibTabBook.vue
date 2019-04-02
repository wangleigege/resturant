<template>
  <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>艺术馆</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="food_choose()">绘画</el-menu-item>
          <el-menu-item index="1-2">书法</el-menu-item>
          <el-menu-item index="1-3">摄影</el-menu-item>
          <el-menu-item index="1-4">音乐</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>经管馆</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="drink_choose()">管理</el-menu-item>
          <el-menu-item index="1-2">经济</el-menu-item>
          <el-menu-item index="1-3">投资</el-menu-item>
          <el-menu-item index="1-4">营销</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="drink_choose()">饮料</span>
      </el-menu-item> -->
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">电子书</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">动漫</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  
</el-row>
</template>

<script>
export default {
name:"LibTabBook",
data () {
  return {
    
  }
},
methods: {
      food_choose () {
        this.$router.push("/book/bookstore")
      },
      drink_choose () {
        this.$router.push("/home/drinks")
      }
}
}
</script>

<style>
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
