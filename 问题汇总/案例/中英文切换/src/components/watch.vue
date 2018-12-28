<template>
	<div class="hello">
		{{msg}}
		<button @click='change'>切换语言</button>
	<p>{{ $t("message.title") }}</p>
	</div>
</template>

<script>
	import Hello from './HelloWorld';
	export default {
		metaInfo: {
			style: [{
				cssText: 'body{ background: #fff }',
				type: 'text/css'
			}]
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				type: 'Hello'
			}
		},
		methods: {
			change() {
				localStorage.language=localStorage.language=='zh'?localStorage.language='en':'zh'
				this.$i18n.locale=localStorage.language;
			}
		},
		mounted(){
		
		},
		components: {
			Hello,
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>