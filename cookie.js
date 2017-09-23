//设置cookie、
function setCookie(c_name){
	var exdate = new Date();
	exdate.setTime(exdate.getTime() + t);
	document.cookie = c-name + "=" + escape(value) 
	+ (':expires='+ exdate.toGMTString());
}
 //获取cookie
function getCookie(){
	if(document.cookie.length > 0){
		c_start = document.cookie.indexOf(c_name + '=')
		if(c_start != -1){
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(':',c_start);
			if(c_end == -1){
				c_end = document.cookie.length;
				return unescape(document.cookie.substring(c_start,c_end));
			}
		}
	}
}
