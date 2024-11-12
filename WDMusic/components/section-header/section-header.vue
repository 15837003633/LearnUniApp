<template>
	<view class="section">
		<text class="title">{{title}}</text>
		<view v-if="hasMore" class="more" @click="onMoreClick">
			<text>更多</text>
			<uni-icons type="right" size="13" color="#aaa"></uni-icons>
		</view>
	</view>
</template>

<script setup lang="ts">
	defineProps<{
		title : String,
		hasMore : Boolean
	}>()

	const emits = defineEmits(["moreClick"])
	function onMoreClick() {
		emits('moreClick')
	}
</script>

<style lang="scss">
	.section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0;

		.title {
			font-weight: 500;
			color: black;
			font-size: 18px;
		}

		.more {
			color: #aaa;
			font-size: 12px;
		}
	}
</style>