export const HeaderList = [
  {
    name: '发现音乐',
    link: '/#'
  },
  {
    name: '我的音乐',
    link: '/#'
  },
  {
    name: '朋友',
    link: '/#'
  },
  {
    name: '上传',
    link: '/#'
  },
  {
    name: '音乐人',
    link: '/#'
  },
  {
    name: '下载客户端',
    link: '/#'
  }
]
export const initDialogZindex = 10000
export const zIndex = (function getZIndexByDialog () {
  let _zIndex = initDialogZindex
  return {
    getZIndex: function () {
      return ++_zIndex
    },
    getCurZIndex: function () {
      return _zIndex
    }
  }
})()

export default function noop (params: any): void {}
