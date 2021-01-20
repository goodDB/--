// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    r:'',
    e:''
  },
  request(e){
   return  wx.request({
      url: 'https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=633CA00059F111EBBFE3070CF743CEB7E251A07B817246C983DB411EFD6D57CD&optimus_risk_level=71&optimus_code=10',
      header: {
        'content-type': 'application/json' // 默认值
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(this.request()); 
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