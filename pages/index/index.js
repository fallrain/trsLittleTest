//index.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
Page({
  data : {
    motto : 'Hello World1',
    userInfo : {},
    getSearchTipData : util.getSearchTipData()//控制搜素区显示隐藏的数据
  },
  //事件处理函数
  bindViewTap : function(){
    wx.navigateTo({
      url : '../logs/logs'
    })
  },
  onLoad : function(){
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo : userInfo
      })
    })
  },
  showSearchTip : function(){
    util.showSearchTip(this);
  },
  jumpSearch : function(){
    //重载搜素页
    util.jumpSearch();
  }
});
