//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
//商品数据模拟js,以后需要从接口返回
var goods = require('../../utils/goods.js');
Page({
  data : {
    showSearchTerms : true,
    searchTermsLayerAnimationCls : '',
    searchTipData : util.getSearchTipData(),//控制搜索提示区
    searchBtnLis : 'goToIndex',
    searchTermsItemChoosed : '',
    goods : goods.getGoods(),
    priceIconSort : '',
    commentNumIconSort : '',
    searchTermsGoods : [
      {
        "name" : "冰箱",
        "checkCls" : ""
      },
      {
        "name" : "洗衣机",
        "checkCls" : ""
      },
      {
        "name" : "空调",
        "checkCls" : ""
      },
      {
        "name" : "热水器",
        "checkCls" : ""
      },
      {
        "name" : "电视",
        "checkCls" : ""
      },
      {
        "name" : "厨电",
        "checkCls" : ""
      }
    ]
  },
  onLoad : function(){
    /*页面加载*/
    this.getSearchTerms();
  },
  onReady : function(){

  },
  sort : function(e){
    var _this = e.currentTarget;
    var dataSet = _this.dataset;
    var type = dataSet.type;
    var sortType = dataSet.sort;
    if(!sortType || sortType == 'down'){
      sortType = 'up';
    }else{
      sortType = 'down';
    }
    var beSetData = {};
    var otherType = type == 'price' ? 'commentNum' : 'price';
    beSetData[type + 'IconSort'] = sortType;
    beSetData[otherType + 'IconSort'] = '';
    this.setData(beSetData);
    //对数据进行排序
    this.sortGoodsData(type, sortType);
  },
  sortGoodsData : function(type, upOrDown){
    var goodsAy = this.data.goods;
    var newGoodsAy = [];
    var upOrDownCoefficient = 1;
    if(upOrDown == 'down'){
      upOrDownCoefficient = -1;
    }
    goodsAy.sort(function(a, b){
      return (a[type] - b[type]) * upOrDownCoefficient;
    });
    this.setData({
      goods : goodsAy
    });
  },
  getSearchTerms : function(){

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
