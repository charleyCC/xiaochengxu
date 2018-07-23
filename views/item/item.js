Page({
	data : {
		title : '豆瓣电影',
		movie : []
	},
	onLoad : function(params){
		
		wx.showLoading({
		  title: '加载中'
		});
		
		const id = params.id;
		const _this = this;

		//发送请求数据 api
		 wx.request({
			url: 'https://douban.uieee.com/v2/movie/subject/'+id,
			data: {},
			header: {
			    'content-type': 'json'
			},
			success: function(res) {
				console.log(res.data)
				wx.hideLoading();
				_this.setData({
					movie : res.data,
				});
			  
			}
		});
	}
});