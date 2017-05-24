var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleOpacity: 1,
    currentType: 0,
    typeIcons: ["#", "RGBA", "HLSA", "CMYK", "L*A*B*"],

    sixteenValue: "",

    rValueOfRGBA: "",
    gValueOfRGBA: "",
    bValueOfRGBA: "",
    aValueOfRGBA: "",

    hValueOfHLSA: "",
    lValueOfHLSA: "",
    sValueOfHLSA: "",
    aValueOfHLSA: "",

    cValueOfCMYK: "",
    mValueOfCMYK: "",
    yValueOfCMYK: "",
    kValueOfCMYK: "",

    lValueOfLAB: "",
    aValueOfLAB: "",
    bValueOfLAB: "",

    typeIconsUI: {
      typesCnt: 4,
      size: 40,
      margin: []
    },
    shouldShowInputs: "hide-inputs-wrapper",
    animationData: {},
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

        console.log(windowHeight);

        that.setData({
          typeIconsUI: {
            size: that.data.typeIconsUI.size,
            margin: [(100 - that.data.typeIconsUI.size) / 2, (windowWidth / that.data.typeIconsUI.typesCnt - that.data.typeIconsUI.size) / 2]
          },
          resultsWrapperHeight: res.windowHeight 
          // 顶部导航栏高度
          // + 64 
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
    
  },

  bindChooseType: function(e) {
    switch (e.target.id) {
      case "#":
        this.setData({
          currentType: 0
        })
        break
      case "RGBA":
        this.setData({
          currentType: 1
        })
        break
      case "HLSA":
        this.setData({
          currentType: 2
        })
        break
      case "CMYK":
        this.setData({
          currentType: 3
        })
        break
      case "L*A*B*":
        this.setData({
          currentType: 4
        })
        break
      default:
        break
    }


    this.setData({ 
      titleOpacity: 0,
      shouldShowInputs: "show-inputs-wrapper"
    })

  },
  bindDismissInputs: function() {
    this.setData({
      titleOpacity: 1,
      shouldShowInputs: "hide-inputs-wrapper"
    })
  },
  catchStopPropagation: function() {
  },
  onSixteenInput: function(e) {
    this.setData({
      sixteenValue: e.detail.value.replace(" ", ""),
    })
  },



  onROfRGBAInput: function (e) {
    this.setData({
      rValueOfRGBA: e.detail.value.replace(" ", ""),
    })
  },
  onGOfRGBAInput: function (e) {
    this.setData({
      gValueOfRGBA: e.detail.value.replace(" ", ""),
    })
  },
  onBOfRGBAInput: function (e) {
    this.setData({
      bValueOfRGBA: e.detail.value.replace(" ", ""),
    })
  },
  onAOfRGBAInput: function (e) {
    this.setData({
      aValueOfRGBA: e.detail.value.replace(" ", ""),
    })
  },



  onHOfHLSAInput: function (e) {
    this.setData({
      hValueOfHLSA: e.detail.value.replace(" ", ""),
    })
  },
  onLOfHLSAInput: function (e) {
    this.setData({
      lValueOfHLSA: e.detail.value.replace(" ", ""),
    })
  },
  onSOfHLSAInput: function (e) {
    this.setData({
      sValueOfHLSA: e.detail.value.replace(" ", ""),
    })
  },
  onAOfHLSAInput: function (e) {
    this.setData({
      aValueOfHLSA: e.detail.value.replace(" ", ""),
    })
  },



  onCOfCMYKInput: function (e) {
    this.setData({
      cValueOfCMYK: e.detail.value.replace(" ", ""),
    })
  },
  onMOfCMYKInput: function (e) {
    this.setData({
      mValueOfCMYK: e.detail.value.replace(" ", ""),
    })
  },
  onYOfCMYKInput: function (e) {
    this.setData({
      yValueOfCMYK: e.detail.value.replace(" ", ""),
    })
  },
  onKOfCMYKInput: function (e) {
    this.setData({
      kValueOfCMYK: e.detail.value.replace(" ", ""),
    })
  },



  onLOfLABInput: function (e) {
    this.setData({
      lValueOfLAB: e.detail.value.replace(" ", ""),
    })
  },
  onAOfLABInput: function (e) {
    this.setData({
      aValueOfLAB: e.detail.value.replace(" ", ""),
    })
  },
  onBOfLABInput: function (e) {
    this.setData({
      bValueOfLAB: e.detail.value.replace(" ", ""),
    })
  },
})