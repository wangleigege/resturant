<template>
  <div >
   <div class="digitals">
      <header>
      <div class="header_tou">
        <p>其他小物品</p>
        <p style="font-size:15px">想选神魔自己看啊哦</p>
      </div>
    </header>
   <section>
     <div class="contents">
     <router-view></router-view>
     </div>
   </section>
   </div>
   <footer>
     <div>
       <cart-digtal></cart-digtal>
     </div>
   </footer>
  </div>
</template>

<script>
import CartDigtal from './CartDigtal'
export default {
  name: 'Digtal',
  components:{
    CartDigtal
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
  width: 80%;
  margin: auto;
}
</style>
