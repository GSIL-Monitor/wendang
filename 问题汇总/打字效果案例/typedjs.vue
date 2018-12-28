<template>
	<div class="hello">
		<div id='box'></div>
		<button @click="stop()">停止</button><button @click="start()">继续</button><button @click="reset()">重置</button><button @click="toggle()">切换</button>

	</div>
</template>

<script>
	import typed from 'typed.js'
	export default {
		name: "HelloWorld",
		data() {
			return {
				type: '',

			};
		},
		mounted() {
			this.typed = new typed('#box', {
				strings: ['123123123123', 'sadasdasdasdasd', ],
				typeSpeed: 30, //打字的速度
				backSpeed: 50, //原先就有回退效果  添加后使其更明显
				backDelay: 2000, //延迟多少秒后在打下个子字*/
			})

		},
		methods: {
			stop() {
				this.typed.stop()
			},
			start() {
				this.typed.start()
			},
			reset() {
				this.typed.start()
				this.typed.reset() //当原先暂停时在重置  还是暂停  需开启
			},
			toggle() {
				this.typed.toggle() //只是在暂停与继续中切换
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>