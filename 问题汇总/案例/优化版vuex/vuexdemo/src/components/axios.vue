<template>
  <div class="hello">
  axios
  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    axios.get('/api/v2/movie/top250')
  .then(function (response) {
    console.log(response);
  })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
