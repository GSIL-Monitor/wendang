<template>
  <div class="hello">
     <transition  leave-active-class="animated slideOutLeft">
    <div class="box"  v-if='show'></div>  
    </transition>
  <button @click="show=false">消失</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  metaInfo: {
    link: [
      {
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css",
        rel: "stylesheet"
      }
    ]
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      show: true
    };
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: red;
}
</style>
