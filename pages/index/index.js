var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleOpacity: 1,
    currentType: 0,
    currentColor: "",
    typeIcons: ["#", "RGBA", "HSLA", "CMYK", "Lab"],

    sixteenValue: "",

    rValueOfRGBA: "",
    gValueOfRGBA: "",
    bValueOfRGBA: "",
    aValueOfRGBA: "",

    hValueOfHSLA: "",
    lValueOfHSLA: "",
    sValueOfHSLA: "",
    aValueOfHSLA: "",

    cValueOfCMYK: "",
    mValueOfCMYK: "",
    yValueOfCMYK: "",
    kValueOfCMYK: "",

    lValueOfLAB: "",
    aValueOfLAB: "",
    bValueOfLAB: "",
    aSymbol: "正",
    bSymbol: "正",


    typeIconsUI: {
      width: 250,
      height: 160,
    },
    firstTypeMarginLeft: 0,
    shouldShowInputs: "hide-inputs-wrapper",
    inputsWrapperHeight: 300,
    animationData: {},
    resultsWrapperHeight: 0,

    touchStartLeft: 0,
    duration: 600,
    animationData: {},
    resultOneAnimation: {},
    resultTwoAnimation: {},
    resultThreeAnimation: {},
    resultFourAnimation: {},
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

        var typeIconsUI
        if (windowWidth < 375) {
          typeIconsUI = {
            width: 250,
            height: 160
          }
        } else {
          typeIconsUI = {
            width: 300,
            height: 160
          }
        }

        that.setData({
          typeIconsUI: typeIconsUI,
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          firstTypeMarginLeft: (windowWidth - typeIconsUI.width) / 2,
          resultsWrapperHeight: res.windowHeight 
          // 顶部导航栏高度
          // + 64 
          // 引导语高度
          - 56 
          // 格式选择高度
          - 160
          // indicator
          - 16
          // seperator
          -1 
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
          currentType: 0,
          inputsWrapperHeight: 300
        })
        break
      case "RGBA":
        this.setData({
          currentType: 1,
          inputsWrapperHeight: 400
        })
        break
      case "HSLA":
        this.setData({
          currentType: 2,
          inputsWrapperHeight: 400
        })
        break
      case "CMYK":
        this.setData({
          currentType: 3,
          inputsWrapperHeight: 400
        })
        break
      case "Lab":
        this.setData({
          currentType: 4,
          inputsWrapperHeight: 350
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
    var strValue = e.detail.value.replace(/[^0-9a-f]/ig, "")
    this.setData({
      sixteenValue: strValue,
    })
  },



  onROfRGBAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue)> 255) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      rValueOfRGBA: strValue,
    })
  },
  onGOfRGBAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 255) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      gValueOfRGBA: strValue,
    })
  },
  onBOfRGBAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 255) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      bValueOfRGBA: strValue,
    })
  },
  onAOfRGBAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      aValueOfRGBA: strValue,
    })
  },



  onHOfHSLAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 360) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      hValueOfHSLA: strValue,
    })
  },
  onLOfHSLAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      lValueOfHSLA: strValue,
    })
  },
  onSOfHSLAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      sValueOfHSLA: strValue,
    })
  },
  onAOfHSLAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      aValueOfHSLA: strValue,
    })
  },



  onCOfCMYKInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      cValueOfCMYK: strValue,
    })
  },
  onMOfCMYKInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      mValueOfCMYK: strValue,
    })
  },
  onYOfCMYKInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      yValueOfCMYK: strValue,
    })
  },
  onKOfCMYKInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      kValueOfCMYK: strValue,
    })
  },



  onLOfLABInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      lValueOfLAB: strValue,
    })
  },
  onAOfLABInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9-]/ig, "")
    if (strValue[0] == "-") {
      strValue = "-" + strValue.replace(/[-]/ig, "")
    } else {
      strValue = strValue.replace(/[-]/ig, "")
    }
    if (parseInt(strValue) > 127 || parseInt(strValue) < -128) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      aValueOfLAB: strValue,
    })
  },
  onBOfLABInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9-]/ig, "")
    if (strValue[0] == "-") {
      strValue = "-" + strValue.replace(/[-]/ig, "")
    } else {
      strValue = strValue.replace(/[-]/ig, "")
    }
    if (parseInt(strValue) > 127 || parseInt(strValue) < -128) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      bValueOfLAB: strValue,
    })
  },
  onASymbolChange: function() {
    var a = this.data.aValueOfLAB
    var aSymbol
    if (a[0] != "-") {
      a = "-" + a
      aSymbol = "负"
    } else {
      a = a.replace(/[-]/ig, "")
      if (parseInt(a) > 127) {
        a = 127
      }
      aSymbol = "正"
    }
    this.setData({
      aSymbol: aSymbol,
      aValueOfLAB: a
    })
  },
  onBSymbolChange: function () {
    var b = this.data.bValueOfLAB
    var bSymbol
    if (b[0] != "-") {
      b = "-" + b
      bSymbol = "负"
    } else {
      b = b.replace(/[-]/ig, "")
      if (parseInt(b) > 127) {
        b = 127
      }
      bSymbol = "正"
    }
    this.setData({
      bSymbol: bSymbol,
      bValueOfLAB: b
    })
  },

  confirmInputs: function () {
    this.setData({
      titleOpacity: 1,
      shouldShowInputs: "hide-inputs-wrapper"
    })
  },
  onGalleryTouchStart: function (e) {
    this.setData({
      touchStartLeft: e.touches[0].clientX,
    })
  },
  onGalleryTouchEnd: function (e) {
    var that = this
    var start = that.data.touchStartLeft
    var end = e.changedTouches[0].clientX
    var index = that.data.currentType
    var typesLength = that.data.typeIcons.length
    var left
    if ((end - start) > 0) {
      index -= 1
    } else if ((end - start) < 0) {
      index += 1
    }
    if (index < 0) {
      index = 0
      left = 0
    } else if (index > (typesLength - 1)) {
      index = typesLength - 1
      left = - (typesLength - 1) * (that.data.typeIconsUI.width + 20)
    } else {
      left = - index * (that.data.typeIconsUI.width + 20)
    }

    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: that.data.duration,
      timingFunction: "ease",
      delay: 0
    })

    var resultOneAnimation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: that.data.duration,
      timingFunction: "ease",
      delay: 60
    })
    var resultTwoAnimation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: that.data.duration,
      timingFunction: "ease",
      delay: 120
    })
    var resultThreeAnimation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: that.data.duration,
      timingFunction: "ease",
      delay: 180
    })
    var resultFourAnimation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: that.data.duration,
      timingFunction: "ease",
      delay: 240
    })

    var resultLeft = -index * that.data.windowWidth

    that.setData({
      currentType: index,
      animationData: animation.left(left).step().export(),
      resultOneAnimation: resultOneAnimation.left(resultLeft).step().export(),
      resultTwoAnimation: resultTwoAnimation.left(resultLeft).step().export(),
      resultThreeAnimation: resultThreeAnimation.left(resultLeft).step().export(),
      resultFourAnimation: resultFourAnimation.left(resultLeft).step().export(),
    })
  }
})