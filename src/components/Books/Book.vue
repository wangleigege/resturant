<template>
  <div>
    <header>
      <div class="header_tou">
        <p>欢迎光临小书店</p>
        <p style="font-size:15px">很荣幸您可以参观 </p>
      </div>
    </header>
   <section>
     <div class="contents">
     <LibTabBook></LibTabBook>
     <router-view></router-view>
     </div>
   </section>
   <footer>
     <div>
       <cart-book></cart-book>
     </div>
   </footer>
  </div>
</template>

<script>
import CartBook from './CartBook'
import LibTabBook from './LibTabBook'
export default {
  name: 'Book',
  components:{
    LibTabBook,
    CartBook
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
