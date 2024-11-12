<template>
	<swiper class="swiper" indicator-dots>
		<template v-for="item in bannerList" :key="item">
			<swiper-item class="item">

				<image class="image" :src="item.imageUrl" mode="scaleToFill"></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup lang="ts">
	defineProps<{
		bannerList : any[]
	}>()
</script>

<style lang="scss">
	.swiper {
		height: 280rpx;
		border-radius: 10rpx;
		overflow: hidden;

		.image {
			width: 100%;
			height: 100%;
		}

	}
</style>