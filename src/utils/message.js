import Vue from 'vue'
const vueInstance = new Vue()
/**
 * 消息提示框统一封装
 * @param {String} type 提示语类型
 * @param {String} msg  提示语内容
 * @param {String} customClass 提示语样式类
 * @param {String} center 提示语是否居中
 * @param {String} onClose 提示语关闭的回调函数
 * @param {String} duration 提示语关闭的延时时间
 */
export function openMessage({
  type = 'info',
  msg = '',
  customClass = '',
  center = true,
  onClose,
  duration = 3000
}) {
  customClass = customClass.includes("msg-") ? customClass : `msg-${customClass}`;
  vueInstance.$message({
    type,
    center,
    showClose: true,
    customClass,
    duration,
    dangerouslyUseHTMLString: true,
    message: customClass ? `<strong>${msg}</strong>` : msg,
    onClose:
      onClose ||
      function() {
        console.log('onClose')
      }
  })
}

/**
 * 显示全屏加载动效
 * @param {string} text 正在加载的提示内容
 * @param {object} config 加载框的其他配置
 */
export function showLoading(text = 'Loading', config = {}) {
  const loading = vueInstance.$loading({
    lock: true,
    text,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.3)',
    ...config
  })
  return loading
}

// 隐藏全屏加载动效
export function hideLoading() {
  vueInstance.$loading() && vueInstance.$loading().close()
}
