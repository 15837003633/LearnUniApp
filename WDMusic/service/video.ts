import wd_request from ".";

export function getTopMVRequest(offset = 0,limit = 20){
	return  wd_request.get({
		url:"top/mv",
		data:{
			offset,
			limit
		}
	})
	
}