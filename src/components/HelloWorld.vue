<template>
  <div>
    <header>
      <div class="header_tou">
        <p>欢迎光临</p>
        <p style="font-size:15px">本店神魔东有 啥都不缺</p>
      </div>
    </header>
   <section>
     <div class="contents">
     <lib-tab></lib-tab>
     <router-view></router-view>
     </div>
   </section>
   <footer>
     <div>
       <cart></cart>
     </div>
   </footer>
  </div>
</template>

<script>
import Cart from './Cart'
import LibTab from './LibTab'
import Foods from './Foods'
export default {
  name: 'HelloWorld',
  components:{
    LibTab,
    Foods,
    Cart
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_tou p{
  text-align: center;
  font-size: 25px;
}
.contents{
  display: flex;
  width: 100%;
}
</style>
