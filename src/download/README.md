# ardirectives/download

使用addEventListener的钩子函数

# 使用方式

```javascript
import {download} from 'ardirectives'

// main.ts
const app = createApp(App)
app.directive('download', download) 

// template
 <div v-download="
    {
      url: 'https://portrait.gitee.com/uploads/avatars/user/2694/8083832_archyInk_1647334458.png!avatar200',
      filename: 'examples',
      onBeforeDownload: beforeDownload,
      onDownloaded: downloaded,
    }
  ">
    download
  </div>

```

# 类型

```javascript
export declare type DownloadOptions = {
    url: string;
    filename?: string;
    style?: CSSProperties | string;
    onBeforeDownload?: () => void;
    onFetched?: () => void;
};
declare const _default: Directive<HTMLElement, string | DownloadOptions>;
```

