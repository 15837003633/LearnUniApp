import wd_request from "../";

export function getTopMVRequest(offset = 0,limit = 20){
	return  wd_request.get({
		url:"/top/mv",
		data:{
			offset,
			limit
		}
	})
}


export function getMVDetail(mvid:string){
  return wd_request.get({
    url:"/mv/detail",
    data:{
      mvid
    }
  })
}
export function getMVPlayURL(id:string){
  return wd_request.get({
    url:"/mv/url",
    data:{
      id,
      r:1080
    }
  })
}

export function getMVRelateVideoList(id:string){
  return wd_request.get({
    url:"/related/allvideo",
    data:{
      id
    }
  })
}
