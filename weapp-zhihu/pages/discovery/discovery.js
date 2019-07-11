//discovery.js
var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    imgUrls: [
      'https://imgs.qunarzz.com/p/tts5/1804/ba/fcf263e7f3c55502.jpg_r_390x260x90_83aa24e1.jpg',
      'https://imgs.qunarzz.com/p/tts5/1712/13/0e38d2b9a41bb602.jpg_r_390x260x90_fe3114b5.jpg',
      'https://imgs.qunarzz.com/p/tts2/201403/31/4954355107c1f618c8d65eac.jpg_r_390x260x90_4f9ed9f0.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0
  },
  onLoad: function () {
    console.log('onLoad')

    this.refresh();
  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  upper: function () {
    //上拉导航条添加加载圆圈
    wx.showNavigationBarLoading()
    //滚动到顶部重新刷新获取数据
    this.refresh();
    //hideNavigationBarLoading停止当前导航条加载动画
    //topPullDownRefresh停止下拉刷新
    setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },
  //使用本地 fake 数据实现刷新效果
  refresh: function(){
    var feed = util.getDiscovery();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length: feed_data.length
    });
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function(){
    var next = util.discoveryNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  }
});
