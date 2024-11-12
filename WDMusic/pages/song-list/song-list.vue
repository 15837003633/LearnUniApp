<template>
	<view>
		<section-header :title="listInfo.name" :hasMore="false" </section-header>
		<template v-for="(item, index) in listInfo.tracks" :key="item.id">
			<song-item-v2 :index="index+1" :songInfo="item"></song-item-v2>
		</template>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
import useHomeMusicStore from '../../store/home-music';

	const props = defineProps<{
		type : String
	}>()
	
	const homeMusicStore = useHomeMusicStore()
	const listInfo = ref<any>({})
	if (props.type === 'recommond') {
		listInfo.value = homeMusicStore.recommendInfo
		uni.setNavigationBarTitle({
			title:listInfo.value.name
		})
	}
</script>

<style lang="scss">
	page{
		padding: 0 20rpx;
		box-sizing: border-box;
	}

</style>