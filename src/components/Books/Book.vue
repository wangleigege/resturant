<template>
  <div>
    <header>
      <div class="header_tou">
        <p>书的香</p>
        <p style="font-size:15px;color:#83C2FC">欢迎光临书的香，在这里你可以尽情的遨游在书香的海洋里，接受知识的洗礼 </p>
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
  margin-top: 20px;
}
.contents{
  display: flex;
  width: 100%;
}
</style>
