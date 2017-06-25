var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleOpacity: 1,
    currentType: 0,
    currentColor: "",
    typeIcons: ["RGBA", "十六进制"],
    // typeIcons: ["#", "RGBA", "HSLA", "CMYK", "Lab"],

    sixteenValue: "",
    aOfSixteenValue: "",

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
    inputsWrapperHeight: 400,
    resultsWrapperHeight: 0,

    touchStartLeft: 0,
    duration: 600,
    animationData: {},
    resultOneAnimation: {},
    resultTwoAnimation: {},
    resultThreeAnimation: {},
    resultFourAnimation: {},

    shouldAnimateColor: true,
    colorAnimation: {},
    rotateLeftAnimation: {},
    rotateRightAnimation: {}
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

        var itervalId = setInterval(function() {
          that.colorAnimator()
        }, 3000) 

        that.setData({
          colorAnimatorIntervalId: itervalId,
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
    var that = this
    switch (e.target.id) {
      case "RGBA":
        this.setData({
          currentType: 0,
          inputsWrapperHeight: 400
        })
        break
      case "十六进制":
        this.setData({
          currentType: 1,
          inputsWrapperHeight: 320
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

    clearInterval(that.data.colorAnimatorIntervalId)

    this.setData({ 
      colorAnimatorIntervalId: '',
      shouldAnimateColor: false,
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
    this.colorUpdate()
  },
  onAOfSixteenInput: function(e) {
    var strValue = e.detail.value.replace(/[^0-9a-f]/ig, "")
    this.setData({
      aOfSixteenValue: strValue,
    })
    this.colorUpdate()
  },



  onROfRGBAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue)> 255) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    console.log(strValue)
    this.setData({
      rValueOfRGBA: strValue,
    })
    this.colorUpdate()
  },
  onGOfRGBAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 255) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      gValueOfRGBA: strValue,
    })
    this.colorUpdate()
  },
  onBOfRGBAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 255) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      bValueOfRGBA: strValue,
    })
    this.colorUpdate()
  },
  onAOfRGBAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      aValueOfRGBA: strValue,
    })
    this.colorUpdate()
  },



  onHOfHSLAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 360) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      hValueOfHSLA: strValue,
    })
    this.colorUpdate()
  },
  onLOfHSLAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      lValueOfHSLA: strValue,
    })
    this.colorUpdate()
  },
  onSOfHSLAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      sValueOfHSLA: strValue,
    })
    this.colorUpdate()
  },
  onAOfHSLAInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      aValueOfHSLA: strValue,
    })
    this.colorUpdate()
  },



  onCOfCMYKInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      cValueOfCMYK: strValue,
    })
    this.colorUpdate()
  },
  onMOfCMYKInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      mValueOfCMYK: strValue,
    })
    this.colorUpdate()
  },
  onYOfCMYKInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      yValueOfCMYK: strValue,
    })
    this.colorUpdate()
  },
  onKOfCMYKInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      kValueOfCMYK: strValue,
    })
    this.colorUpdate()
  },



  onLOfLABInput: function (e) {
    var strValue = e.detail.value.replace(/[^0-9]/ig, "")
    if (parseInt(strValue) > 100) {
      strValue = strValue.substring(0, strValue.length - 1)
    }
    this.setData({
      lValueOfLAB: strValue,
    })
    this.colorUpdate()
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
    this.colorUpdate()
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
    this.colorUpdate()
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
    this.colorUpdate()
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
    this.colorUpdate()
  },

  confirmInputs: function () {
    //Process Empty
    var rValueOfRGBA = this.data.rValueOfRGBA
    if (rValueOfRGBA.length == 0) {
      rValueOfRGBA = "0"
    }
    var gValueOfRGBA = this.data.gValueOfRGBA
    if (gValueOfRGBA.length == 0) {
      gValueOfRGBA = "0"
    }
    var bValueOfRGBA = this.data.bValueOfRGBA
    if (bValueOfRGBA.length == 0) {
      bValueOfRGBA = "0"
    }
    var aValueOfRGBA = this.data.aValueOfRGBA
    if (aValueOfRGBA.length == 0) {
      aValueOfRGBA = "0"
    }


    var sixteenValue = this.data.sixteenValue
    switch (sixteenValue.length) {
      case 0:
        sixteenValue = "ffffff"
        break
      case 1:
        sixteenValue = "00000" + sixteenValue
        break
      case 2:
        sixteenValue = "0000" + sixteenValue
        break
      case 3:
        sixteenValue = sixteenValue[0] + sixteenValue[0] + sixteenValue[1] + sixteenValue[1] + sixteenValue[2] + sixteenValue[2]
        break
      case 4:
        sixteenValue = "00" + sixteenValue
        break
      case 5:
        sixteenValue = "0" + sixteenValue
        break
      default:
        break
    }
    var aOfSixteenValue = this.data.aOfSixteenValue
    if (aOfSixteenValue.length ==1) {
      aOfSixteenValue = "0" + aOfSixteenValue
    } else if (aOfSixteenValue.length == 0) {
      aOfSixteenValue = "ff"
    }
    this.setData({
      rValueOfRGBA: rValueOfRGBA,
      gValueOfRGBA: gValueOfRGBA,
      bValueOfRGBA: bValueOfRGBA,
      aValueOfRGBA: aValueOfRGBA,
      titleOpacity: 1,
      shouldShowInputs: "hide-inputs-wrapper",
      aOfSixteenValue: aOfSixteenValue,
      sixteenValue: sixteenValue
    })
    this.colorUpdate()
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


    var rotateAnimation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: that.data.duration,
      timingFunction: "ease",
      delay: 240
    })
    if ((end - start) > 0) {
      rotateAnimation.rotate(360).step()
    } else if ((end - start) < 0) {
      rotateAnimation.rotate(0).step()      
    }


    that.setData({
      currentType: index,
      animationData: animation.left(left).step().export(),
      resultOneAnimation: resultOneAnimation.left(resultLeft).step().export(),
      resultTwoAnimation: resultTwoAnimation.left(resultLeft).step().export(),
      resultThreeAnimation: resultThreeAnimation.left(resultLeft).step().export(),
      resultFourAnimation: resultFourAnimation.left(resultLeft).step().export(),
      rotateAnimation: rotateAnimation,
    })
  },
  colorUpdate: function() {
    var that = this
    var currentType = this.data.currentType
    var currentColor
    switch (currentType) {
      case 0:
        var r = that.data.rValueOfRGBA
        var g = that.data.gValueOfRGBA
        var b = that.data.bValueOfRGBA
        var a = that.data.aValueOfRGBA
        var sixteen = util.rgbToSixteen(r, g, b, a)
        that.setData({
          currentColor: 'rgba(' + r + ',' + g + ',' + b + ',' + a / 100 + ')',
          sixteenValue: sixteen.color,
          aOfSixteenValue: sixteen.a,

          // hValueOfHSLA: '',
          // sValueOfHSLA: '',
          // lValueOfHSLA: '',
          // aValueOfHSLA: a,

          // cValueOfCMYK: '',
          // mValueOfCMYK: '',
          // yValueOfCMYK: '',
          // kValueOfCMYK: '',

          // lValueOfLAB: '',
          // aValueOfLAB: '',
          // bValueOfLAB: '',
        })
        break
      case 1:
        var sixteenValue = that.data.sixteenValue
        var aOfSixteenValue = that.data.aOfSixteenValue
        var rgbaColor = util.sixteenToRgba(sixteenValue, aOfSixteenValue)
        var r = rgbaColor.r
        var g = rgbaColor.g
        var b = rgbaColor.b
        var a = rgbaColor.a
        // var hslArr = util.rgbToHsl(r,g,b)
        that.setData({
          currentColor: 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')',
          sixteenValue: sixteenValue,
          aOfSixteenValue: aOfSixteenValue,

          rValueOfRGBA: r,
          gValueOfRGBA: g,
          bValueOfRGBA: b,
          aValueOfRGBA: a,

          // hValueOfHSLA: hslArr[0],
          // sValueOfHSLA: hslArr[1],
          // lValueOfHSLA: hslArr[2],
          // aValueOfHSLA: '100',

          // cValueOfCMYK: '',
          // mValueOfCMYK: '',
          // yValueOfCMYK: '',
          // kValueOfCMYK: '',

          // lValueOfLAB: '',
          // aValueOfLAB: '',
          // bValueOfLAB: '',
        })
        break
      // case 2:
      //   var hValueOfHSLA = that.data.hValueOfHSLA
      //   var lValueOfHSLA = that.data.lValueOfHSLA
      //   var sValueOfHSLA = that.data.sValueOfHSLA
      //   var aValueOfHSLA = that.data.aValueOfHSLA
      //   that.setData({
      //     sixteenValue: '',

      //     rValueOfRGBA: '',
      //     gValueOfRGBA: '',
      //     bValueOfRGBA: '',
      //     aValueOfRGBA: '',

      //     cValueOfCMYK: '',
      //     mValueOfCMYK: '',
      //     yValueOfCMYK: '',
      //     kValueOfCMYK: '',

      //     lValueOfLAB: '',
      //     aValueOfLAB: '',
      //     bValueOfLAB: '',
      //   })
      //   break
      // case 3:
      //   var cValueOfCMYK = that.data.cValueOfCMYK
      //   var mValueOfCMYK = that.data.mValueOfCMYK
      //   var yValueOfCMYK = that.data.yValueOfCMYK
      //   var kValueOfCMYK = that.data.kValueOfCMYK
      //   that.setData({
      //     sixteenValue: '',

      //     rValueOfRGBA: '',
      //     gValueOfRGBA: '',
      //     bValueOfRGBA: '',
      //     aValueOfRGBA: '',

      //     hValueOfHSLA: '',
      //     sValueOfHSLA: '',
      //     lValueOfHSLA: '',
      //     aValueOfHSLA: '',

      //     lValueOfLAB: '',
      //     aValueOfLAB: '',
      //     bValueOfLAB: '',
      //   })
      //   break
      // case 4:
      //   var lValueOfLAB = that.data.lValueOfLAB
      //   var aValueOfLAB = that.data.aValueOfLAB
      //   var bValueOfLAB = that.data.bValueOfLAB
      //   that.setData({
      //     sixteenValue: '',

      //     rValueOfRGBA: '',
      //     gValueOfRGBA: '',
      //     bValueOfRGBA: '',
      //     aValueOfRGBA: '',

      //     hValueOfHSLA: '',
      //     sValueOfHSLA: '',
      //     lValueOfHSLA: '',
      //     aValueOfHSLA: '',

      //     cValueOfCMYK: '',
      //     mValueOfCMYK: '',
      //     yValueOfCMYK: '',
      //     kValueOfCMYK: '',
      //   })
      //   break
      default:
        break
    }
  },
  colorAnimator: function() {
    var that = this
    var shouldAnimateColor = that.data.shouldAnimateColor
    if (shouldAnimateColor) {

      var defaultColor = util.colorGenerator()

      var colorAnimation = wx.createAnimation({
        // transformOrigin: "50% 50%",
        duration: that.data.duration,
        timingFunction: "ease",
        delay: 0
      })
      var color = 'rgba(' + defaultColor.r + ',' + defaultColor.g + ',' + defaultColor.b + ',' + 1 + ')'
      var sixteenColor = util.rgbToSixteen(defaultColor.r, defaultColor.g, defaultColor.b, 100).color
      colorAnimation.opacity(0.1).scale(0.9, 0.9).step()
      colorAnimation.opacity(1).scale(1, 1).step()

      that.setData({
        colorAnimation: colorAnimation.export(),
        currentColor: color,
        sixteenValue: sixteenColor,
        aOfSixteenValue: "ff",
        rValueOfRGBA: defaultColor.r,
        gValueOfRGBA: defaultColor.g,
        bValueOfRGBA: defaultColor.b,
        aValueOfRGBA: 100
      })
    }
  }
})