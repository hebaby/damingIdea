// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    visible1: false,
    avatarUrl: '',
    userInfo: {}
  },

  inputChange: function({detail}) {
    this.setData({
      value1: detail.detail.value
    })
  },
  joinRoom: function() {
    this.setData({
      visible1: true
    })
  },
  handleOk: function() {
    console.log(this.data.value1);
    if(this.data.value1 !== '') {
      wx.navigateTo({url: '../room/room'})
    }
    this.setData({
      visible1: false
    })
  },
  handleCancel: function() {
    this.setData({
      visible1: false
    })
  },

  onLoad: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
              console.log(res.userInfo);
            }
          })
        }
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

  }
})