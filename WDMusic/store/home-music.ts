import * as Pinia from 'pinia'
import { getPlayListDetail } from '../service/music/music'

const useHomeMusicStore = Pinia.defineStore("home-music",{
	state:()=>({
		recommendInfo: [] as any[]
	}),
	getters:{
		recommendList6():any[]{
			if (this.recommendInfo.tracks){
				return this.recommendInfo.tracks.slice(0,6)
			}
			return []
		}
	},
	actions:{
		async fetchRecommendSongList(){
			const res: any = await getPlayListDetail("3778678")
			this.recommendInfo = res.playlist
		}
	}
})

export default useHomeMusicStore