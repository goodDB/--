// pages/0119/0119.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // A:true,
    // B:true,
    // C:true,
    // D:true,
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
    ]
  },
  delBtn(e){
    var id = e.currentTarget.id
    console.log(e.currentTarget.id);
    if(id === '0'){
      this.data.A = false
      // console.log(this.data.A);
      wx.setStorageSync('A', this.data.A)
    }
    else if(id === '1'){
      this.data.B = false
      wx.setStorageSync('B', this.data.B)
    }

    else if(id === '2'){
      this.data.C = false
      wx.setStorageSync('C', this.data.C)
    }

   else if(id === '3'){
     this.data.D = false
     wx.setStorageSync('D', this.data.D)
   }

    wx.redirectTo({
      url: '../0119/0119',
    })
  },
  addList00(){
    var len = this.data.list00.length
    if(len === 3){
      // 点击添加触发的页面拉长效果
      // if(!this.data.list01.length)
      // this.setData({
      //   height: this.data.height + 90,
      //   height1: this.data.height1 + 90
      // })      
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
              height: this.data.height + 90,
              height1: this.data.height1 + 90,
              height3: this.data.height3 + 90,
            })      
            wx.setStorageSync('height', this.data.height),
            wx.setStorageSync('height1', this.data.height1),
            wx.setStorageSync('height2', this.data.height2),
            wx.setStorageSync('height3', this.data.height3)
          this.data.list02[this.data.list02.length] = {id:this.data.list02.length,img:'../../images/1.png'}
          wx.setStorage({
            data: this.data.list02,
            key: 'list02'
          })
          wx.redirectTo({
            url: '../0119/0119',
          }) 
        }
      }
      else{
      // 点击添加触发的页面拉长效果
      if(this.data.list01.length === 0)
       this.setData({
          height: this.data.height + 90,
          height1: this.data.height1 + 90,
          height3: this.data.height3 + 90
        })      
        wx.setStorageSync('height', this.data.height),
        wx.setStorageSync('height1', this.data.height1),
        wx.setStorageSync('height2', this.data.height2),
        wx.setStorageSync('height3', this.data.height3)
        this.data.list01[this.data.list01.length] = {id:this.data.list01.length,img:'../../images/1.png'}
        wx.setStorage({
          data: this.data.list01,
          key: 'list01'
        })
        wx.redirectTo({
          url: '../0119/0119',
        }) 
      }
    }
    else{
      this.data.list00[len] = {id:len,img:'../../images/1.png'}
      wx.setStorage({
        data: this.data.list00,
        key: 'list00',
      })
      wx.redirectTo({
        url: '../0119/0119',
      })    
    }

  },
  btnImg0(e){
    var x =  e.currentTarget.id.charAt(3)
    var y =  e.currentTarget.id.charAt(4)
    var tempFilePaths = ''
    console.log(x);
    console.log(y);
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
         console.log(page.data.list00[y].img);
         wx.setStorageSync('list00', page.data.list00)
        }
        else if(x === '1'){
          page.data.list01[y].img =  tempFilePaths[0]
          console.log(page.data.list01[y].img);
          wx.setStorageSync('list01', page.data.list01)
        }
        else{
          page.data.list02[y].img =  tempFilePaths[0]
          console.log(page.data.list02[y].img);
          wx.setStorageSync('list02', page.data.list02)
        }
           wx.redirectTo({
             url: '../0119/0119',
           })
      }
    })
  },
  btnIcon0(e){
    var x =  e.currentTarget.id.charAt(4)
    var y =  e.currentTarget.id.charAt(5)
    console.log(x);
    console.log(y);
    if(x === "0"){
      this.data.list00.splice(y,1)
      console.log(this.data.list00);
      if(this.data.list01.length >= 1){
        this.data.list00[this.data.list00.length] = this.data.list01[0]
        if(this.data.list01.length === 1){
          this.data.list01 = []
        }
        else
         this.data.list01.splice(1,1)

        // 下面是判断第三层有没有块上移
        if(this.data.list02.length > 0){
          this.data.list01[this.data.list01.length] = this.data.list02[0]
          if(this.data.list02.length === 1){
            this.data.list02 = []
          }
          else
           this.data.list02.splice(1,1)
        }
        // 当长度为0的时候应该缩小块高度，页面高度
        if(this.data.list01.length === 0){
          this.data.height = this.data.height - 90
          this.data.height1 = this.data.height1 - 90
          this.data.height3 = this.data.height3 - 90
          wx.setStorageSync('height',  this.data.height)
          wx.setStorageSync('height1',  this.data.height1)
          wx.setStorageSync('height3',  this.data.height3)
        }
      }

    }
    else if(x === '1'){
      this.data.list01.splice(y,1)
      if(this.data.list02.length > 0){
        this.data.list01[this.data.list01.length] = this.data.list02[0]
        if(this.data.list02.length === 1){
          this.data.list02 = []
        }
        else
         this.data.list02.splice(1,1)

        // 当长度为0的时候应该缩小块高度，页面高度
        if(this.data.list02.length === 0){
          this.data.height = this.data.height - 90
          this.data.height1 = this.data.height1 - 90
          this.data.height3 = this.data.height3 - 90
          wx.setStorageSync('height',  this.data.height)
          wx.setStorageSync('height1',  this.data.height1)
          wx.setStorageSync('height3',  this.data.height3)
        }
      }
    }
    else{
      if(this.data.list02.length === 1){
        this.data.list02 = []
      }
      else
       this.data.list02.splice(1,1)      
       // 当长度为0的时候应该缩小块高度，页面高度
      if(this.data.list02.length === 0){
        this.data.height = this.data.height - 90
        this.data.height1 = this.data.height1 - 90
        this.data.height3 = this.data.height3 - 90
        wx.setStorageSync('height',  this.data.height)
        wx.setStorageSync('height1',  this.data.height1)
        wx.setStorageSync('height3',  this.data.height3)
      }
    }
    wx.setStorageSync('list00', this.data.list00)
    wx.setStorageSync('list01', this.data.list01)
    wx.setStorageSync('list02', this.data.list02)
    wx.redirectTo({
      url: '../0119/0119',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 点击添加触发的页面拉长效果
      // if(!this.data.list01.length)
      // this.setData({
      //   height: this.data.height + 90,
      //   height1: this.data.height1 + 90
      // })        
    this.setData({
      A:true,
      B:true,
      C:true,
      D:true
    })  
    var a = wx.getStorageSync('A')
    var b = wx.getStorageSync('B')
    var c = wx.getStorageSync('C')
    var d = wx.getStorageSync('D')
    if(a === false || a === true){
      this.setData({A:a})
    }
    if(b === false || b === true){
      this.setData({B:b})
    }
    if(c === false || c === true){
      this.setData({C:c})
    }
    if(d === false || d === true){
      this.setData({D:d})
    }
    var h = wx.getStorageSync('height')
    var h1 = wx.getStorageSync('height1')
    var h2 = wx.getStorageSync('height2')
    var h3 = wx.getStorageSync('height3')
    if(h){
      this.setData({height : h})
      this.setData({height1 : h1})
      this.setData({height2 : h2})
      this.setData({height3 : h3})
    }
    else{
      this.setData({
        height:1327,
        height1:366,
        height2:372,
        height3:366
      })
      // this.data.height = 1327
      wx.setStorageSync('height', 1327)
      wx.setStorageSync('height1', 366)
      wx.setStorageSync('height2', 372)
      wx.setStorageSync('height3', 366)
      // wx.redirectTo({
      //   url: '../0119/0119',
      // })
    }
    var sto = wx.getStorageSync('list00')
    var sto1 = wx.getStorageSync('list01')
    var sto2 = wx.getStorageSync('list02')
    if (sto) {
      this.setData({list00 : sto})
      this.setData({list01 : sto1})
      this.setData({list02 : sto2})
    }
    else{
      this.data.list00=this.data.list
      wx.setStorageSync('list00', this.data.list00)
      wx.setStorageSync('list01', this.data.list01)
      wx.setStorageSync('list02', this.data.list02)
      wx.redirectTo({
        url: '../0119/0119',
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