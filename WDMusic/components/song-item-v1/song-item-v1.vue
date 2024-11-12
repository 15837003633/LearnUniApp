<template>
	<view class="song-item">
		<image class="album" :src="songInfo.al.picUrl"></image>
		<view class="info">
			<text class="name">{{songInfo.name}}</text>
			<text class="author">{{songInfo.ar[0]?.name}}</text>
		</view>
		<uni-icons  type="right" size="13" color="#aaa"></uni-icons>
		
	</view>
</template>

<script setup lang="ts">
const props = defineProps<{
	songInfo: any
}>()
</script>

<style lang="scss">
	.song-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		padding-bottom: 12rpx;
		.album{
			width: 80rpx;
			height: 80rpx;
			border-radius: 6rpx;
			overflow: hidden;
		}
		.info{
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;
			.name {
				font-size: 15px;
				color: black;
			}
			.author{
				font-size: 12px;
				color: #aaa;
			}
		}
	}

</style>