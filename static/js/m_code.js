	//显示加载器  
	function showLoader() {  
		//显示加载器.for jQuery Mobile 1.2.0  
		$.mobile.loading('show', {  
			text: '查询中...', //加载器中显示的文字  
			textVisible: true, //是否显示文字  
			theme: 'black',        //加载器主题样式a-e  
			textonly: false,   //是否只显示文字  
			html: ""           //要显示的html内容，如图片等  
		});
		$.ajax({ 
            type : "POST", 
            url  : "handle.aspx",//演示文件请删除!
            cache : false, 
            data : null, 
            success : function(){hideLoader();}, 
            error : function(){hideLoader();showError('错误');}
        }); 
	}
	  
	//隐藏加载器.for jQuery Mobile 1.2.0  
	function hideLoader()  
	{  
		//隐藏加载器  
		$.mobile.loading('hide');  
	}
	//显示加载器  
	function showError(text) {   
		//显示加载器.for jQuery Mobile 1.2.0  
		$.mobile.loading('show', {  
			text: text, //加载器中显示的文字  
			textVisible: true, //是否显示文字
			theme: 'black',        //加载器主题样式a-e  
			textonly: false,   //是否只显示文字  
			html: ""           //要显示的html内容，如图片等  
		});
	}