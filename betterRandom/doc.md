# 概述

做作品的时候写到柏林噪声这一功能的时候需要用到种子随机，但是自己写很麻烦，于是想到可以做一个扩展来实现这一功能
正在陆续添加更多的随机算法...
详见[Github](https://github.com/prbegd/stlsScratchExt)

# 注意事项
本扩展的所有生成器都是32位的，因为JavaScript的Number类型没办法表示64位数字。但是如果有更好表示64位数字的办法可以告诉我
扩展使用TypeScript编写，后编译为JavaScript。因此，不建议直接阅读编译后的代码，请前往Github查看。

# 所有生成器
注：*斜体*表示是无符号的生成器

- 线性同余
- *梅森旋转*
- *Xorshift*
- *Xoshiro128+/Xoshiro128++/Xoshiro128\*\**  支持jump/long_jump
- *Xoroshiro64\*/Xoroshiro64\*\**