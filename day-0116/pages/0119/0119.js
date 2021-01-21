// pages/0119/0119.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isUpdata:0,
    isShow:'0',
    height: 1250,
    width1:'350px',
    width2:'350px',
    width3:'350px',
    list00:[],
    list01:[],
    list02:[],
    list:[
      {
        id:0,
        img:"../../images/1.png"
      },
      {
        id:1,
        img:"../../images/1.png"
      },
      {
        id:2,
        img:"../../images/1.png"
      }
    ],
    lists:[
      {
        key:'1',
        title:'A',
        p:'输入这个选项，一张图片',
        iconUrl:'../../images/1.png',
        style:'1',        // 1是小的框，2是大的框  输入框
        is:'1' ,           // 1是可见，0是被禁用，不可见
        value:''
      },
      {
        key:'2',
        title:'B',
        p:'这是内容',
        iconUrl:'../../images/1.png',
        style:'1',        // 1是小的框，2是大的框  输入框
        is:'1',            // 1是可见，0是被禁用，不可见
        value:''
      },
      {
        key:'3',
        title:'C',
        p:'输入这个选项，有很多文字可以回行输入这个选项，有很多字可',
        iconUrl:'../../images/1.png',
        style:'2',        // 1是小的框，2是大的框  输入框
        is:'1',            // 1是可见，0是被禁用，不可见
        value:''
      },
      {
        key:'4',
        title:'D',
        p:'内容',
        iconUrl:'../../images/1.png',
        style:'1',        // 1是小的框，2是大的框  输入框
        is:'1',            // 1是可见，0是被禁用，不可见
        value:''
      }
    ]
  },
  keep(){
    wx.setStorageSync('isUpdata', 1),

    wx.setStorageSync('isShow', this.data.isShow),
    wx.setStorageSync('height', this.data.height),
    wx.setStorageSync('width1', this.data.width1),
    wx.setStorageSync('width2', this.data.width2),
    wx.setStorageSync('width3', this.data.width3),
    wx.setStorageSync('list00', this.data.list00),
    wx.setStorageSync('list01', this.data.list01),
    wx.setStorageSync('list02', this.data.list02),
    wx.setStorageSync('list  ', this.data.list  ),
    wx.setStorageSync('lists ', this.data.lists )
    wx.showToast({
      title: '保存成功',
    })
  },
  setinpIcon(e){
    console.log(e);
    var tempFilePaths = ''
    var page = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
      // tempFilePath可以作为img标签的src属性显示图片
       tempFilePaths = res.tempFilePaths
       page.data.lists[e.currentTarget.id-1].iconUrl = tempFilePaths
       page.setData({ lists: page.data.lists })
      }
    })

  },
  inputUp(e){
    this.data.lists[e.currentTarget.id-1].value = e.detail.value
    this.setData({ lists: this.data.lists })
  },
  delBtn(e){
    this.data.lists[e.currentTarget.id-1].is="0" 
    this.setData({
      lists:this.data.lists
    })
  },
  addLists(){
    this.setData({ isShow: "1" })
  },
  click(e){
    this.setData({ isShow: "0"})
    this.data.lists[this.data.lists.length] =  {
      key:this.data.lists.length+1,
      title:String.fromCharCode(65+this.data.lists.length),
      p:'内容'+this.data.lists.length,
      iconUrl:'../../images/1.png',
      style:e.currentTarget.id,        // 1是小的框，2是大的框  输入框
      is:'1',            // 1是可见，0是被禁用，不可见
      value:''
    }
    this.setData({ lists:this.data.lists })
  },
  addList00(){
    var len = this.data.list00.length
    if(len === 3){ 
      if(this.data.list01.length === 3){
        if(this.data.list02.length === 3){
          wx.showToast({
            title: '已经存在9张图片上限了！',
            icon: 'none'
          })
        }
        else{
          // 点击添加触发的页面拉长效果
          if(this.data.list02.length === 0)
          this.setData({
              height: this.data.height + 90 * 2,
              height1: this.data.height1 + 90,
              height3: this.data.height3 + 90,
            })      
            this.data.list02[this.data.list02.length] = {id:this.data.list02.length,img:'../../images/1.png'}
            this.setData({list02:this.data.list02})
        }
      }
      else{
      // 点击添加触发的页面拉长效果
      if(this.data.list01.length === 0){
        this.setData({
           height: this.data.height + 90 * 2,
           height1: this.data.height1 + 90,
           height3: this.data.height3 + 90
         })
      }
        this.data.list01[this.data.list01.length] = {id:this.data.list01.length,img:'../../images/1.png'}
        this.setData({list01:this.data.list01})
      }
    }
    else{
      this.data.list00[len] = {id:len,img:'../../images/1.png'}
      this.setData({ list00:this.data.list00 })
    }

  },
  btnImg0(e){
    var x =  e.currentTarget.id.charAt(3)
    var y =  e.currentTarget.id.charAt(4)
    var tempFilePaths = ''

    var page = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
      // tempFilePath可以作为img标签的src属性显示图片
       tempFilePaths = res.tempFilePaths


       if(x === '0'){
        page.data.list00[y].img =  tempFilePaths[0]
        page.setData({ list00:page.data.list00 })
        }
        else if(x === '1'){
          page.data.list01[y].img =  tempFilePaths[0]
          page.setData({ list01:page.data.list01 })
        }
        else{
          page.data.list02[y].img =  tempFilePaths[0]
          page.setData({list02:page.data.list02})
        }
      }
    })
  },
  btnIcon0(e){
    var x =  e.currentTarget.id.charAt(4)
    var y =  e.currentTarget.id.charAt(5)
    console.log(x);
    console.log(y);
    console.log(x==="0");
    if(x === "0"){
      this.data.list00.splice(y,1)
      this.setData({list00:this.data.list00})
      if(this.data.list01.length >= 1){
        this.data.list00[this.data.list00.length] = this.data.list01[0]
        this.setData({list00:this.data.list00})
        if(this.data.list01.length === 1){
          this.setData({list01:[]})
        }
        else{
          this.data.list01.splice(0,1)
          this.setData({list01:this.data.list01})
        }


        // 下面是判断第三层有没有块上移
        if(this.data.list02.length > 0){
          this.data.list01[this.data.list01.length] = this.data.list02[0]
          this.setData({list01:this.data.list01})
          if(this.data.list02.length === 1){
            this.setData({list02:[]})
          }
          else
           this.data.list02.splice(0,1)
           this.setData({list02:this.data.list02})
        }
        // 当长度为0的时候应该缩小块高度，页面高度
        if(this.data.list01.length === 0){
          this.setData({
            height:  this.data.height - 90 * 2,
            height1: this.data.height1 - 90,
            height3: this.data.height3 - 90
          })
        }
      }

    }
    else if(x === '1'){
      this.data.list01.splice(y,1)
      this.setData({list01:this.data.list01})
      if(this.data.list02.length > 0){
        this.data.list01[this.data.list01.length] = this.data.list02[0]
        this.setData({list01:this.data.list01})
        if(this.data.list02.length === 1){
          this.setData({list02:[]})
        }
        else
         this.data.list02.splice(0,1)
         this.setData({list02:this.data.list02})
        // 当长度为0的时候应该缩小块高度，页面高度
        if(this.data.list02.length === 0){
          this.setData({
            height :this.data.height - 90 * 2,
            height1: this.data.height1 - 90,
            height3: this.data.height3 - 90 
          })
        }
      }
    }
    else{
      if(this.data.list02.length === 1){
        this.setData({list02:[]})
      }
      else
       this.data.list02.splice(0,1)   
       this.setData({list02:this.data.list02})   
       // 当长度为0的时候应该缩小块高度，页面高度
      if(this.data.list02.length === 0){
        this.setData({
          height: this.data.height - 90 * 2,
          height1: this.data.height1 - 90,
          height3: this.data.height3 - 90
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      list00:this.data.list
    })

    var is = wx.getStorageSync('isUpdata')
    console.log(is);
    if(is === 1){
      this.setData({
        isShow:wx.getStorageSync('isShow'),
        height:wx.getStorageSync('height'),
        width1:wx.getStorageSync('width1'),
        width2:wx.getStorageSync('width2'),
        width3:wx.getStorageSync('width3'),
        list00:wx.getStorageSync('list00'),
        list01:wx.getStorageSync('list01'),
        list02:wx.getStorageSync('list02'),
        list  :wx.getStorageSync('list  '),
        lists :wx.getStorageSync('lists ')
      })
    }
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