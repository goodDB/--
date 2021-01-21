// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {


      text: '成都近日新增确诊新冠患者3例，请大家做好防护，外出请戴好口罩！',
  
      size: 14,//宽度即文字大小
  
      moveTimes: 8,//刚好文字宽度等于屏幕宽度所需的时间
  
      width: 0,//文字宽度
  
      timer: 0 //滚动时间

},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // this.setData({
    //   text:"教我做事，来耍"
    // })

    var screenW = wx.getSystemInfoSync().windowWidth;//获取屏幕宽度

    var contentW = this.data.text.length * this.data.size;//获取文本大概宽度

    var timer = (contentW / screenW) * this.data.moveTimes;//动态计算文字滚动时间

    timer = timer < 8 ? 8 : timer; //判断时间是否小于8s

    this.setData({ width: -contentW, timer: timer });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})