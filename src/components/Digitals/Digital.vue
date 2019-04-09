<template>
  <div >
   <div class="digitals">
      <header>
      <div class="header_tou">
        <p>用的香</p>
        <p style="font-size:15px;color:#83C2FC">看看这些具有古老气息的神器，保证物美价廉</p>
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
  margin-top: 20px;
}
.contents{
  display: flex;
  width: 80%;
  margin: auto;
}
</style>
