var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeIconsUI: {
      typesCnt: 4,
      size: 40,
      margin: []
    },
    resultsWrapperHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {

        var windowWidth = res.windowWidth
        var windowHeight = res.windowHeight

        that.setData({
          typeIconsUI: {
            size: that.data.typeIconsUI.size,
            margin: [(100 - that.data.typeIconsUI.size) / 2, (windowWidth / that.data.typeIconsUI.typesCnt - that.data.typeIconsUI.size) / 2]
          },
          resultsWrapperHeight: res.windowHeight 
          // 顶部导航栏高度
          + 64 
          // 引导语高度
          - 56 
          // 格式选择高度
          - 132 
          // 结果展示上边距
          - 16
        })
      }
    }) 
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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  }
})