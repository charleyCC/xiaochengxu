Page({
	data : {
		list : []
	},
	onLoad : function(){
		console.log('search page');
	},
	search : function(e){
		if (e.detail.value == '') {
			return false;
		}
		console.log(e.detail.value)
		wx.showLoading({
		  title: '搜索中'
		});
	
	
		const _this = this;
		const value = e.detail.value;

		//发送请求数据 api
		wx.request({
			url: 'https://douban.uieee.com/v2/movie/search?q='+value,
			data: {},
			header: {
			    'content-type': 'json'
			},
			success: function(res) {
				console.log(res.data.subjects)
				wx.hideLoading();
				_this.setData({
					list : res.data.subjects,
				});
			  
			}
		});
	}

});