Page({
	data : {
		navs : [
			{title : '正在热映',type : 'in_theaters'},
			{title : '即将上映',type : 'coming_soon'},
			{title : 'TOP250',type : 'top250'},
			{title : '新片榜',type : 'new_movies'}
		],
		list : [] //最近热映的电影
	},
	onLoad : function(){
		const _this = this;
		//发送请求数据 api
		wx.request({
			url: 'https://douban.uieee.com/v2/movie/in_theaters&count=5',
			data: {},
			header: {
			    'content-type': 'json'
			},
			success: function(res) {		
				_this.setData({
					list : res.data.subjects,
				});
			}
		});
	}
});