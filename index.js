// expressオブジェクトの作成
const express = require('express')
// Expressのアプリケーション本体となるオブジェクトの作成
const app = express()

// すべてのAPIをCORS許可する
const cors = require('cors')
app.use(cors())

// クライアント経由でデータを取得
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const multer = require('multer')
const fs = require('fs')

// ルーティングの設定
app.post('/', multer({ dest: 'tmp/' }).single('image'), (req, res) => {
    console.log(req.file)
    // const content = fs.readFiileSync(req.file,'utf-8')
    // console.log(filename,content)
    // res.setHeader("Content-Security-Policy", "default-src 'self' *");
    res.send('tmp/' + req.file.filename)
})

// 待ち受けの開始
app.listen(3000, () => {
    console.log('Start server port:3000')
})