function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
// pages/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuValue: '',
    danmuValueList: [],
    danmuValueTime: [],
    time: "",
    timeList: []
  },
  inputBlur(e) {
    if (!e.detail.value) { e.detail.value = null }
    this.setData({
      danmuValue: e.detail.value
    })
  },
  btnPush() {

    var list = this.data.danmuValueList
    var times = this.data.timeList
    if (this.data.time)
      times.push(this.data.time)
    else
      times.push("0.00")
    list.push(this.data.danmuValue)
    this.setData({ danmuValueList: list, timeList: times })
    this.videoContext.sendDanmu({
      text: this.data.danmuValue,
      color: getRandomColor()
    })
  },
  timeUpdate: function (e) {
    this.data.time = e.detail.currentTime
    // return e.detail.currentTime

  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
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