//logs.js

Page({
  data: {
    navTab: ["通知", "赞与感谢", "关注"],
    currentNavtab: "0"
  },
  onLoad: function () {

  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
})
