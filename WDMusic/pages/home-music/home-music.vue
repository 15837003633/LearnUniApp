<template>
	<view>
		<uni-search-bar @click="onSearchClick" placeholder="请输入搜索关键字" radius="50" readonly />
		<banner-vue :bannerList="bannerList"></banner-vue>
		<view class="recommondPanel">
			<section-header title="推荐歌曲" :hasMore="true" @moreClick="onRecMoreClick"></section-header>
			<template v-for="item in homeMusicStore.recommendList6" :key="item.id">
				<song-item-v1 :songInfo="item"></song-item-v1>
			</template>
		</view>
	</view>
</template>


<script setup lang="ts">
	import { ref } from 'vue';
	// import * as Pinia from 'pinia'
	//cpns
	import bannerVue from './cpns/banner.vue';
	// service
	import { getMusicBanner } from '../../service/music/music';
	import useHomeMusicStore from '@/store/home-music'

	const homeMusicStore = useHomeMusicStore()


	const bannerList = ref([])
	getMusicBanner().then((res : any) => {
		bannerList.value = res.banners
	})

	homeMusicStore.fetchRecommendSongList()

	function onRecMoreClick() {
		uni.navigateTo({
			url:"/pages/song-list/song-list?type=recommond"
		})
	}

	function onSearchClick() {
		console.log("onSearchClick")
	}
</script>

<style lang="scss">
	page {
		// background-color: $page-background-color;
		padding: 20rpx;
		box-sizing: border-box;
	}
</style>