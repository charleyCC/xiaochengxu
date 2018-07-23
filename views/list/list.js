Page({
	data : {
		title : '豆瓣电影',
		type : 'in_theaters',
		list : []
	},
	onLoad : function(params){
		
		wx.showLoading({
		  title: '加载中'
		});
	
	
		const _this = this;

		//发送请求数据 api
		wx.request({
			url: 'https://douban.uieee.com/v2/movie/'+params.type,
			data: {},
			header: {
			    'content-type': 'json'
			},
			success: function(res) {
				console.log(res.data.subjects)
				wx.hideLoading();
				_this.setData({
					list : res.data.subjects,
					title : params.title,
					type : params.type
				});
			  
			}
		});
	}
});