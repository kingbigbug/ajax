		function ajax(url,fnWin,fnFaild){			
			//1.创建ajax对象
			var ajax = null;
			if (window.XMLHttpRequest){
				ajax = new XMLHttpRequest();
			}else{
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
			//2.连接服务器
			ajax.open("GET",url,true);
			//3. 发送请求
			ajax.send();
			//4.接收返回的数据
			ajax.onreadystatechange = function (){
				//与服务器通信是否建立成功
				if ( ajax.readyState == 4){
					//是否已经找到我请求的文件
					if(ajax.status == 200){
						fnWin(ajax.responseText) //函数回调
					}else{
						if(fnFaild){
							fnFaild();
						}
					}
					
				}
			};
		}