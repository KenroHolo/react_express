var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test1";


router.post('/', urlencodedParser,  function (req, res,nexts) { 

    let wen = req.body.wendu;
    let shi = req.body.shidu;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test1");
        console.log("数据库已创建!");
        var whereStr = {"id":"1"};  // 查询条件
        var updateStr = {$set: { "wendu" : wen ,"shidu" : shi }};
        dbo.collection("info").updateOne(whereStr, updateStr, function(err, res) {
            if (err) throw err;
            console.log("文档更新成功");
            db.close();
        });
});

});
module.exports = router;