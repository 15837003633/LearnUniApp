<template>
	<view class="list">
		<template v-for="item in videoList" :key="item.id">
			<view class="list-item">
				<video-item :itemInfo='item'></video-item>
			</view>
		</template>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	import {
		onPullDownRefresh,
		onReachBottom
	} from '@dcloudio/uni-app'
	import videoItem from './cpns/video-item.vue';
	import {
		getTopMVRequest
	} from '../../service/video';
	
	let offset = 0
	const videoList = ref([])

	fetchNewList()
	onPullDownRefresh(() => {
		console.log("onPullDownRefresh")
		fetchNewList()
	})
	
	onReachBottom(()=>{
		console.log("onReachBottom")
		fetchMoreList()
	})
	
	function fetchNewList(){
		offset = 0
		getTopMVRequest(offset).then(res => {
			videoList.value = res.data
			offset = videoList.value.length
			uni.stopPullDownRefresh()
		})
	}
	
	function fetchMoreList(){
		getTopMVRequest(offset).then(res => {
			if (res.data?.length>0){
				videoList.value.push(...res.data)
				offset = videoList.value.length
			}else{
				uni.showToast({
					title:"no more data"
				})
			}
		})
	}

</script>

<style>
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.list-item {
		width: 48%;
	}
</style>