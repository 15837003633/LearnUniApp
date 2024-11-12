<template>
	<view class="song-item">
		<text class="index">{{index}}</text>
		<view class="info">
			<text class="name">{{songInfo.name}}</text>
			<view class="author">{{songInfo.ar[0]?.name}}</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	defineProps<{
		songInfo : any,
		index : number
	}>()
</script>

<style lang="scss">
	.song-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		padding-bottom: 12rpx;

		.info {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;

			.name {
				font-size: 15px;
				color: black;
			}

			.author {
				position: relative;
				padding-left: 40rpx;
				font-size: 12px;
				color: #aaa;

				&::before {
					content: "";
					position: absolute;
					left: 0rpx;
					top: 8rpx;
					width: 28rpx;
					height: 16rpx;
					background-size: cover;
					background-image: url("@/static/images/icons/sq_icon.png");
				}
			}
		}
	}
</style>