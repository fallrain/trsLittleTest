/*工具类*/
function formatNumber(n){
  n = n.toString();
  return n[1] ? n : '0' + n
}
module.exports = {
  formatTime : function(date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
  },
  getSearchTipData : function(){
    //值是函数返回一个新对象，如果直接一个对象，那此对象就共用了，请注意这点
    return {
      searchTipHidden : false
    };
  },
  showSearchTip : function(app){
    /*显示搜索提示页*/
    //app：当前app，不采用改变this指向的方式
    app.setData({});
  },
  jumpSearch : function(){
    //因为此页是是tabbar里的，所以得重载
    wx.reLaunch({
      url : '/pages/search/search'
    });
  }
};
