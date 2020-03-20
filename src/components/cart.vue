<template>
	<div>
	<div>购物车</div>
		<foot :show="2"></foot>
	</div>
</template>

<script>
	import f from './foot.vue'
	export default {
		components: {
			'foot': f // 添加底部导航组件
		},
	}
</script>
<style scoped>
	

</style>