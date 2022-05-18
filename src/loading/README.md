<!--
 * @author: Archy
 * @Date: 2022-05-18 10:43:22
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-18 10:46:39
 * @FilePath: \ardirectives\src\loading\README.md
 * @description: 
-->
# ardirectives/loading

loading的自定义指令，快捷的使用loading而不引入组件库

# 使用方式

```javascript
import { loading } from 'ardirectives'

// main.ts
const app = createApp(App)
app.directive('loading', download) 

// template
 <div 
    v-download="
      {
        visible:visible.value,
        options:{
          size:'small',
          fill:'white',
          tips:'loading...'
        }
      }
    "
    style="{width:'100px',height:'100px',backgroundColor:'black'}"
  >
    box
  </div>
```

# 类型

```javascript
export type LoadingBinding = boolean | { 
  visible: boolean,
  options: LoadingOptions
}

export type LoadingOptions = {
  size?: LoadingSizeEnum,
  tips?: string,
} & SVGAttributes
```

