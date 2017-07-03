//获取应用实例
var app = getApp();
Page({
  data : {
    showSearchTerms : true,
    searchTermsLayerAnimationCls : ''
  },
  onReady : function(){
    this.bindLis();
  },
  bindLis : function(){
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
});
