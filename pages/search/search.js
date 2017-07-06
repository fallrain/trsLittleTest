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
    searchIptVal : '',
    searchTermsGoods : [
      {
        id : 0,
        hidden : true,
        check : false,
        "name" : "冰箱",
      },
      {
        id : 1,
        hidden : false,
        check : false,
        "name" : "洗衣机",
      },
      {
        id : 2,
        hidden : false,
        check : false,
        "name" : "空调",
      },
      {
        id : 3,
        hidden : false,
        check : false,
        "name" : "热水器",

      },
      {
        id : 4,
        hidden : false,
        check : false,
        "name" : "电视",
      },
      {
        id : 5,
        hidden : false,
        check : false,
        "name" : "厨电",
      }
    ],
    searchTermsGoodsDetailCheck : [],
    searchTermsGoodsDetail : {
      0 : [
        {
          name : '箱门结构',
          spec : [
            {
              name : '十字对开门'
            },
            {
              name : '多门'
            },
            {
              name : '对开门'
            },
            {
              name : '双门'
            },
            {
              name : '单门'
            }
          ]
        },
        {
          name : '最大容积',
          spec : [
            {
              name : '500L以上'
            },
            {
              name : '301-500L'
            },
            {
              name : '251-300L'
            },
            {
              name : '150-250L'
            },
            {
              name : '301-500L'
            },
            {
              name : '150L以下'
            }
          ]
        },
        {
          name : '制冷方式',
          spec : [
            {
              name : '直冷'
            },
            {
              name : '风冷'
            },
            {
              name : '混冷'
            },
          ]
        },
      ],
      1 : [
        {
          name : '结构',
          spec : [
            {
              name : '滚筒'
            },
            {
              name : '波轮'
            },
            {
              name : '直桶'
            },
          ]
        },
        {
          name : '最大容积',
          spec : [
            {
              name : '500L以上'
            },
            {
              name : '301-500L'
            },
            {
              name : '251-300L'
            },
            {
              name : '150-250L'
            },
            {
              name : '301-500L'
            },
            {
              name : '150L以下'
            }
          ]
        }
      ],
      2 : [
        {
          name : '形状',
          spec : [
            {
              name : '挂式'
            },
            {
              name : '立式'
            },
          ]
        },
        {
          name : '功率',
          spec : [
            {
              name : '1P'
            },
            {
              name : '2P以上'
            },
          ]
        },
        {
          name : '制冷方式',
          spec : [
            {
              name : '直冷'
            },
            {
              name : '风冷'
            },
            {
              name : '混冷'
            },
          ]
        },
      ],
      3 : [
        {
          name : '类别',
          spec : [
            {
              name : '直冷'
            },
            {
              name : '风冷'
            }
          ]
        }
      ],
      4 : [
        {
          name : '尺寸',
          spec : [
            {
              name : '30以下'
            },
            {
              name : '30'
            },
            {
              name : '35'
            },
            {
              name : '40'
            },
            {
              name : '45'
            },
            {
              name : '50'
            },
            {
              name : '55'
            },
            {
              name : '60'
            },
            {
              name : '65'
            },
            {
              name : '70'
            },
            {
              name : '70以上'
            },
          ]
        },
      ],
      5 : [
        {
          name : '箱门结构',
          spec : [
            {
              name : '十字对开门'
            },
            {
              name : '多门'
            },
            {
              name : '对开门'
            },
            {
              name : '双门'
            },
            {
              name : '单门'
            }
          ]
        },
        {
          name : '最大容积',
          spec : [
            {
              name : '500L以上'
            },
            {
              name : '301-500L'
            },
            {
              name : '251-300L'
            },
            {
              name : '150-250L'
            },
            {
              name : '301-500L'
            },
            {
              name : '150L以下'
            }
          ]
        },
        {
          name : '制冷方式',
          spec : [
            {
              name : '直冷'
            },
            {
              name : '风冷'
            },
            {
              name : '混冷'
            },
          ]
        },
      ]
    },
    searchTipGoods : [
      {
        id : 0,
        name : '冰箱',
        specs : [
          {
            id : 0,
            name : '双门'
          },
          {
            id : 1,
            name : '海尔'
          },
          {
            id : 2,
            name : '美的'
          },
        ]
      },
      {
        id : 1,
        name : '冰丝席',
        specs : [
          {
            id : 0,
            name : '三件套'
          },
          {
            id : 1,
            name : '京东自营'
          },
          {
            id : 2,
            name : '可水洗'
          },
        ]
      },
      {
        id : 2,
        name : '冰箱 小型',
        specs : [
          {
            id : 0,
            name : '家用'
          },
          {
            id : 1,
            name : '迷你'
          },
          {
            id : 2,
            name : '京东自营'
          },
        ]
      },
      {
        id : 3,
        name : '冰柜',
        specs : [
          {
            id : 0,
            name : '家用'
          },
          {
            id : 1,
            name : '商用'
          },
          {
            id : 2,
            name : '星星'
          },
        ]
      },
      {
        id : 4,
        name : '冰箱 双门',
        specs : [
          {
            id : 0,
            name : '海尔'
          },
          {
            id : 1,
            name : '美的'
          },
          {
            id : 2,
            name : '无霜'
          },
        ]
      },
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
        searchTipData : Object.assign({
          searchBtnVal : '搜索',
          searchBtnClass : 'hago-search-head-seach-btn',
          hidden : false,
          searchTipGoods : this.data.searchTipData.searchTipGoods
        }),
        searchBtnLis : 'search'
      });
    }else{
      this.setData({
        searchTipData : Object.assign({
          searchBtnVal : '取消',
          searchBtnClass : 'hago-search-head-seach-btn-cancel',
          hidden : false,
          searchTipGoods : this.data.searchTipData.searchTipGoods
        }),
        searchBtnLis : 'goToIndex'
      });
    }
  },
  search : function(e){
    var dataSet = e.currentTarget.dataset;
    if(dataSet.tipval){
      this.setData({
        searchIptVal : dataSet.tipval
      });
    }
    this.setData({
      searchTipData : Object.assign(this.data.searchTipData, {
          searchBtnVal : '搜索',
          searchBtnClass : 'hago-search-head-seach-btn',
          hidden : true,
          searchTipGoods : this.data.searchTipData.searchTipGoods
        }
      )
    });
  },
  goToIndex : function(){
    wx.reLaunch({
      url : '/pages/index/index'
    });
  },
  termsCheck : function(e){
    var tg = e.currentTarget;
    var dataSet = tg.dataset;
    var index = dataSet.index;
    var check = dataSet.check;
    var searchTermsGoods = this.data.searchTermsGoods;
    //选中的话，其他隐藏
    for(var i = 0; i < searchTermsGoods.length; i++){
      searchTermsGoods[i].hidden = !check;
    }
    searchTermsGoods[index].check = !check;
    searchTermsGoods[index].hidden = check;

    var id = dataSet.id;
    var searchTermsGoodsDetailCheck = check ? [] : this.data.searchTermsGoodsDetail[id];
    this.setData({
      searchTermsGoods : searchTermsGoods,
      searchTermsGoodsDetailCheck : searchTermsGoodsDetailCheck
    });

  }
});
