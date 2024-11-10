class WDRequest {

	baseURL : string
	timeOut : number

	constructor(baseURL : string, timeOut : number = 10000) {
		this.baseURL = baseURL
		this.timeOut = timeOut
	}

	async request(options : any) {
		const url = this.baseURL + '/' +options.url
		
		return new Promise((resolve,reject)=>{
			uni.request({
				...options,
				url,
				timeout:this.timeOut,
				success:(res: any)=>{
					console.log("req:",options,"rep:",res.data)
					resolve(res.data)
				},
				fail:()=>{
					reject()
				}
			})
		})
	}

	get(options : any) {
		return this.request({
			...options,
			method: 'GET'
		})
	}
	post(options : any) {
		return this.request({
			...options,
			method: 'POST'
		})
	}
}

export default WDRequest