<template>
	<view class="item">
		<view class="album">
			<image class="cover" :src='props.itemInfo.cover' mode="widthFix"></image>
			<view class="info">
				<view class="left">{{props.itemInfo.playCount}}</view>
				<view class="right">{{props.itemInfo.playCount}}</view>
			</view>
		</view>
		<text class="title">{{props.itemInfo.name}}-{{props.itemInfo.artistName}}</text>
	</view>
</template>

<script setup lang="ts">
	interface IProps {
		itemInfo : any
	}

	const props = defineProps<IProps>()
</script>

<style lang="less">
	.item{
		display: flex;
		flex-direction: column;
		padding: 10rpx 0;
		
		.album{
			position: relative;
			overflow: hidden;

			color: white;
			.cover{
				width: 100%;
				border-radius: 10rpx;
				overflow: hidden;
			}
				
			.info{
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 10rpx 10rpx;
			}
		}
	}
</style>