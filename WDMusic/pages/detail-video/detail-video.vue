<template>
	<view class="detail-video">
		<video class="player" :src="mvUrl"/>
		<scroll-view class="content" scroll-y>
			<view class="info">
				{{ mvInfo.desc}} - {{mvInfo.name}} 
			</view>
			<template v-for="item in 100" :key="item">
				<view> 相关视频： {{item}}</view>
			</template>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
	
	import { ref } from 'vue';
import { getMVDetail,getMVRelateVideoList,getMVPlayURL } from '../../service/video/video';

	const props = defineProps({
		mvid:{
			// type: number，Vue 将无法正确识别，因为它期待的是构造函数而不是基本类型
			type:String,
			default:0
		}
	})
	
	const mvUrl = ref<string>()
	getMVPlayURL(props.mvid).then((res:any)=>{
		mvUrl.value = res?.data?.url
	})
	
	const mvInfo = ref()
	getMVDetail(props.mvid).then((res:any)=>{
		mvInfo.value = res.data
		uni.setNavigationBarTitle({
			title:mvInfo.value.name
		})
	})
	
	const mvRelationList = ref()
	getMVRelateVideoList(props.mvid).then((res:any)=>{
		mvRelationList.value = res.data
	})
	

	
</script>

<style lang="less">
	.detail-video {
		display: flex;
		flex-direction: column;
		
		
		.player {
			width: 100%;
			height: 400rpx;
		}
		
			
		.content {
			height: calc(100vh - 400rpx);
			box-sizing: border-box;
			padding: 20rpx;
			
			.info {
				margin-bottom: 20rpx;
			}
		}
	}
	       
</style>
