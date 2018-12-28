<template>
  <div class="hello">
  </div>
</template>

<script>
import Mock from	'mockjs';
import Vue from 'vue';
export default {
  name: "HelloWorld",
  data() {
    return {
    };
  },
  mounted() {
  	this.$ajax.get('http://123123.com').then(function(data){
  		console.log(data.data)
  	}).catch(function(){
  		console.log(123)
  	})
	var data = Mock.mock('http://123123.com',{
	   "array|1-10":[	{"string|1-10": '1',  
			      "number|+1": 202,
			       "boolean":true,
			      "time":'@now("yyyy-MM-dd HH:mm:ss")',
			      "name":'@cname()',
			      'url':'@url()',
			      'email':'@email()',
			      "ip":'@ip()',
			      'county':'@county(true)',
			      'id':'@id()',
			        "object|1-4": {
					    "310000": "上海市",
					    "320000": "江苏省",
					    "330000": "浙江省",
					    "340000": "安徽省"
		  }
	   }]
	    
	     
	     
	})
console.log(data)
  	
  }
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
