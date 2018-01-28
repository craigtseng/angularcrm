

## npm 升級指令
```bash
npm install npm@latest -g
```
## ng cli 升級指令 (務必按照步驟)
## 1.
```bash
npm uninstall -g angular-cli @angular/cli
```
## 2.
```bash
npm cache clean
```
## 3.
```bash
npm install -g @angular/cli@latest
```
## 可解決ng build --prod (module not found 問題)
```bash
npm install enhanced-resolve@3.3.0
```
## 取時間
var date = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
https://zhidao.baidu.com/question/269103569.html?qbl=relate_question_1

## angular 資源
https://angular.zeef.com/%E9%99%B3%E5%A5%95%E5%AE%89?ref=%E9%99%B3%E5%A5%95%E5%AE%89&share=9b6369e71ce245eb9bc1919473154297

[PWA推波通知](https://jonny-huang.github.io/angular/training/21_pwa3/ "推波通知")
