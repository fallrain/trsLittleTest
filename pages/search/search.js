//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
Page({
  data : {
    showSearchTerms : true,
    searchTermsLayerAnimationCls : '',
    searchTipData : util.getSearchTipData(),//控制搜索提示区
    searchBtnLis : 'goToIndex',
    searchTermsItemChoosed : ''
  },
  onReady : function(){
  },
  searchTermsLayerAnimationEnd : function(e){
    if(e.detail.animationName == 'searchTermsLayerHide'){
      /*this.setData({
       showSearchTerms : true
       });*/
    }
  },
  //事件处理函数
  showSearchTerms : function(){
    this.setData({
      showSearchTerms : false,
      searchTermsLayerAnimationCls : 'searchTermsLayerShowAnimation hago-search-terms-layer-showpos'
    });
  },
  hideSearchTerms : function(){
    this.setData({
      searchTermsLayerAnimationCls : 'searchTermsLayerHideAnimation hago-search-terms-layer-hidepos'
    });
  },
  searchIptChange : function(e){
    var tg = e.target;
    if(e.detail.value.length > 0){
      this.setData({
        searchTipData : {
          searchBtnVal : '搜索',
          searchBtnClass : 'hago-search-head-seach-btn',
          hidden : false
        },
        searchBtnLis : 'search'
      });
    }else{
      this.setData({
        searchTipData : {
          searchBtnVal : '取消',
          searchBtnClass : 'hago-search-head-seach-btn-cancel',
          hidden : false
        },
        searchBtnLis : 'goToIndex'
      });
    }
  },
  search : function(e){
    this.setData({
      searchTipData : {
        searchBtnVal : '搜索',
        searchBtnClass : 'hago-search-head-seach-btn',
        hidden : true
      }
    });
  },
  goToIndex : function(){
    wx.reLaunch({
      url : '/pages/index/index'
    });
  },
  termsHover : function(){
    this.setData({
      searchTermsItemChoosed : 'hago-search-terms-item-choosed'
    });
  }
});
