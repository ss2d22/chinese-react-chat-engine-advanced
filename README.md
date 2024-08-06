# 一个叉的 'react-chat-engine-advanced' 文本已翻译成中文 

## 如何使用

您还可以使用它来修改welcome.gif文本，因为自定义呈现不起作用，或者只将所有文本修改为diff语言/you can also use this to modify the welcome.gif text as the custom render does not work or to just modify all the text to a diff language

除了最上面的两句英语之外，整个readMe都是中文的/This entire readMe is in chinese other than these two sentences at the top in english

### 1) 克隆存储库

```
git clone https://github.com/ss2d22/chinese-react-chat-engine-advanced.git

cd chinese-react-chat-engine-advanced
```

### 2)（如果你在中国）: 

#### 在项目的根目录下创建一个.npmrc文件，并粘贴以下内容：
  ```diff
+ registry=https://registry.npm.taobao.org/
+ disturl=https://npm.taobao.org/dist
+ chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
+ operadriver_cdnurl=http://cdn.npm.taobao.org/dist/operadriver
+ phantomjs_cdnurl=http://cdn.npm.taobao.org/dist/phantomjs
+ sass_binary_site=http://cdn.npm.taobao.org/dist/node-sass
+ electron_mirror=http://cdn.npm.taobao.org/dist/electron/
+ selenium_cdnurl=http://npm.taobao.org/mirrors/selenium
+ node_inspector_cdnurl=https://npm.taobao.org/mirrors/node-inspector
```

要复制和粘贴：

```
registry=https://registry.npm.taobao.org/
disturl=https://npm.taobao.org/dist
chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
operadriver_cdnurl=http://cdn.npm.taobao.org/dist/operadriver
phantomjs_cdnurl=http://cdn.npm.taobao.org/dist/phantomjs
sass_binary_site=http://cdn.npm.taobao.org/dist/node-sass
electron_mirror=http://cdn.npm.taobao.org/dist/electron/
selenium_cdnurl=http://npm.taobao.org/mirrors/selenium
node_inspector_cdnurl=https://npm.taobao.org/mirrors/node-inspector

```


### 3) 安装依赖项
```
npm i
```

### 4) 构建项目

```
npm run build
```

如果不起作用，请删除dist文件夹，然后重试

### 5) 转到要在其中使用此功能的项目的文件夹

```
cd /路径/到/你的/项目
npm install react-chat-engine-advanced --save 
```

例子:
```
cd /Users/sriram/developer/medai/medai
npm install react-chat-engine-advanced --save 
```
在这里进入你自己的项目，你的道路会有所不同

### 6) 安装"patch-package”包裹
```
npm i patch-package
```

在package.json中 : 
```diff
 "scripts": {
+  "postinstall": "patch-package"
 }
```
要复制和粘贴：
```
"postinstall": "patch-package"
```
### 7) cd放入模块文件夹
```
cd node_modules/react-chat-engine-advanced
```
### 8) 更新此文件夹中的文件

```
rm -rf dist src

cp -R /路径/到/chinese-react-chat-engine-advanced/dist ./

cp -R /路径/到/chinese-react-chat-engine-advanced/src ./
```

例子：

```
rm -rf dist src

cp -R /Users/sriram/developer/chinese-react-chat-engine-advanced/dist ./   

cp -R /Users/sriram/developer/chinese-react-chat-engine-advanced/src ./   
```

### 9) 应用并保存补丁

```
cd ../../

npx patch-package react-chat-engine-advanced
```

### 10) 清除缓存并重新启动项目

根据您使用的react框架，您可能需要再次删除`node_modules`文件夹和`npm install`

无论框架如何，最简单的方法是：

```
rm -rf node_modules

npm install
```

### 11) 重新启动“dev server”

例子：
```
npm run dev
```

              
# 原始存储库中的自述文件翻译成中文如下：

<p align="center" >
    <p align="center" >
        <a href="https://chatengine.io/">
            <img    
                alt="react-chat-engine-advanced" 
                style='max-height: 333px; max-width: 100%;'
                src="https://chat-engine-assets.s3.amazonaws.com/react-chat-engine.gif" 
            />
        </a>
    </p>
</p>

## 聊天引擎

聊天引擎是一个开发者友好的聊天UI工具包.

在以下网址设置免费计划 [chatengine.io](https://chatengine.io)

## 特征

- Typescript (从2.0.0开始)
- 注册/身份验证
- 设置聊天
- 发送消息
- 发送文件和照片
- 通过Sockets订阅聊天
- 邀请/删除聊天成员
- 无尽的聊天滚动
- 无尽的消息滚动

## 安装

- 使用 [npm](https://www.npmjs.com/#getting-started): `npm install react-chat-engine-advanced --save`
- 使用 [Yarn](https://yarnpkg.com/): `yarn add react-chat-engine-advanced`

## 快速入门

在3分钟内将无服务器聊天添加到您的React应用程序中。

1. 注册后，在以下网址创建**project**和**user**[chatengine.io](https://chatengine.io)

2. 收集 **Project ID** / **username** / **User Secret**

3. 安装 `yarn add react-chat-engine-advanced`

4. 进口 `MultiChatWindow`, `MultiChatSocket`, 和 `useMultiChatLogic`

5. 声明 `const props = useMultiChatLogic(projectId, username, secret);` 并通过返回 `props` 对象进入 `MultiChatWindow` 和 `MultiChatSocket`.

6. 瞧！你完了

示例实现 ⬇️

```jsx
import React from 'react';

import {
  ChatEngine,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

export function App() {
  const chatProps = useMultiChatLogic(
    'b75e5bd5-cd84-404c-b820-06feff8c98c0',
    '贝贝',
    '1234'
  );
  return (
    <>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </>
  );
}
```

## Props

- **`projectId`** _(String 必修的)_ - [chatengine.io](https://chatengine.io) 项目的公共API密钥
- **`username`** _(String 必修的)_ - 此项目中人员的用户名
- **`secret`** _(String 必修的)_ - 为此人设置一个秘密并使用它进行身份验证。
- **`onConnect`** (Function) - 连接/身份验证完成时回调
- **`onFailAuth`** (Function) - 连接/身份验证失败时回调
- **`onGetChats`** _(Function)_ 当该人获取他们的聊天数组时进行回调
- **`onNewChat`** _(Function)_ - 当该人创建新聊天时回调
- **`onEditChat`** _(Function)_ - 当用户编辑聊天标题时回调
- **`onDeleteChat`** _(Function)_ - 当该人删除他们的一个聊天记录时进行回调（必须是聊天记录的管理员）
- **`onAddPerson`** _(Function)_ - 当一个人被添加到聊天时回调
- **`onRemovePerson`** _(Function)_ - 当某人从聊天中删除/删除时进行回调
- **`onGetMessages`** _(Function)_ - 当对方收到聊天消息时进行回拨
- **`onNewMessage`** _(Function)_ - 当一个人在聊天中发布新消息时进行回调
- **`onEditMessage`** _(Function)_ - 当一个人在聊天中编辑新消息时进行回调
- **`onDeleteMessage`** _(Function)_ - 当一个人删除其中一个聊天中的新消息时进行回调
- **`hideUI`** _(Boolean)_ - 隐藏自定义实现的所有UI组件（警告：高级）

## 警告

`react-chat-engine-advanced` 不适用于react StrictMode。请从您的项目中删除 `<React.StrictMode>`。
