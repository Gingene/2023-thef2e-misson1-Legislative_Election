# The F2E 2023 - Mission 1 立委競選

![官網形象](./readme-img/cover.png)

## 作品說明

### The F2E 2023

- Mission 1 - 立委競選官網 喵立翰 Miao Li-Han
- 作者 jhen [連結](https://2023.thef2e.com/users/12061579704041679194)

## Node.js 版本

- 專案的 Node.js 版本需為 v16 以上
- 查看自己版本指令：`node -v`

## 指令列表

```
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
```

## 資料夾結構

```
  - assets # 靜態資源放置處
    - font # 字型檔案
    - images # 圖片放置處
    - scss # SCSS 的樣式放置處
    - js # 處理渲染和動畫效果以及表單驗證
    - lottie # lottie動畫檔案
  - pages
    - index.html
    - backup.html 保存原本交給js渲染的html原始碼
  - main.js 匯入asset中所有的js文件
```

## 使用技術

- vite (本次專案使用六角的[repo](https://github.com/hexschool/web-layout-training-vite))
- CSS
  - Bootstrap5
- 第三方套件
  - Lottie
  - AOS.js
  - Swiper

## 待施工項目

- a tag hover 效果
- swiper 在手機中會破版
- AOS 整頁效果(因遇到 bug 暫停)
- 引入 ESLint
