
const whiteList = [
  'http://letconst.cn',
  'https://letconst.cn',
]

const allowOriginMap = new Map()
allowOriginMap.set('default', whiteList[1])

whiteList.forEach(item => {
  allowOriginMap.set(item, item)
})

export default allowOriginMap
