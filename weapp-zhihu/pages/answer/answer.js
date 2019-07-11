//answer.js
var app = getApp()
Page({
  data: {
 
  },
  //事件处理函数
  toQuestion: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  onLoad: function () {
  }
})
