<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* App.vue（样式层级高）定义全局样式. !important可以覆盖子组件或者父组件 */
/* 	.name{
		color: red !important;
	} */
</style>
