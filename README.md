# vjest-ws-sample

インタラクティブなVJ配信プラットフォーム[VJest](https://vjest.com/)を利用する際に、

観客の操作信号を[OSC](http://opensoundcontrol.org/introduction-osc)に変換する、WebScoketサーバーを立ち上げるスクリプトです。

## 利用方法

### 必要環境
node.jsがインストールされている環境が必要です。

### WebSocketサーバーを立ち上げる

下記コマンドでWebSocketサーバーが立ち上がります。

```bash
$ node server.js
```

### 利用



localhostのポート**8000番**に向けて、ユーザーの操作データがOSC通信として送信されます。


