# vjest-ws-sample

インタラクティブなVJ配信プラットフォーム[VJest](https://vjest.com/)を利用する際に、

観客の操作信号を[OSC](http://opensoundcontrol.org/introduction-osc)に変換する、WebScoketサーバーを立ち上げるスクリプトです。

## 構成イメージ

![VJest 構成図 (1)](https://user-images.githubusercontent.com/5201487/81564958-865f5a80-93d3-11ea-82dd-7fe88ba1651e.png)

localhostのポート**8000番**に向けて、ユーザーの操作データがOSC通信として送信されます。

## 必要環境
node.jsがインストールされている環境が必要です。

## 利用

下記コマンドでWebSocketサーバーが立ち上がります。

```bash
$ node server.js
```

OSCに変換した信号はすべてターミナル上に表示されます。

## 規格

### 例
```bash
/fader1 "axkThNsWAQy5j2rJ" 67
```

- OSC Message
  - ボタンやフェーダーなど、各UIオブジェクトを指す値が入ります。

- OSC Arguments
  1. ユーザーを示すランダムな英数字１６字が入ります
  2. フェーダーの場合：1~127、　ボタンの場合：押下時に１
