//获取应用实例
var app = getApp();
Page({
  data : {
    showSearchTerms : true,
    searchTermsLayerAnimationCls : ''
  },
  //事件处理函数
  showSearchTerms : function(){
    this.setData({
      showSearchTerms : false,
      searchTermsLayerAnimationCls : 'searchTermsLayerShowAnimation'
    });
  },
  hideSearchTerms : function(){
    this.setData({
      showSearchTerms : true,
      searchTermsLayerAnimationCls : ''
    });
  }
});
