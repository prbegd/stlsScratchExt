# 概述

做作品的时候写到柏林噪声这一功能的时候需要用到种子随机，但是自己写很麻烦，于是想到可以做一个扩展来实现这一功能
正在陆续添加更多的随机算法...
详见[Github](https://github.com/prbegd/stlsScratchExt)

# 注意事项
## Xorshift
Xorshift算法并不原生支持小数生成，扩展提供的小数生成通过将整数转为小数来实现。