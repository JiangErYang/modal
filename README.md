# modal
项目中常用的portal弹框组件

#使用说明

参数             说明               类型                   默认值

visible	      弹框是否可见	       boolean	                 -

bodyStyle	    Modal body 样式       {}                      有

maskStyle      蒙层样式              {}                      有

closeText	    关闭按钮文字          string                 我知道了

closeTextStyle关闭按钮文字样式	      {}                      有

maskClosable  点击蒙层是否允许关闭   string                  true

closeTextButton 是否显示 关闭按钮   boolean                 true


animationType  动画类型  1）fadeInFadeOut 淡入淡出
                         2）bottomInTopOut 下入上出    string    -值可选：fadeInFadeOut || bottomInTopOut

  <Uimodal
    visible={visible}
    bodyStyle={modalStyle}
    maskStyle = {maskStyle}
    closeText = '我知道了'
    closeTextStyle = {closeTextStyle}
    maskClosable = {false}
    closeTextButton = {true}
    animationType = "fadeInFadeOut"
  >
    <div style={{width:'100%',height:220,lineHeight:'220PX'}}>我是弹框内容</div>
  </Uimodal>
