var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test1";


router.post('/', urlencodedParser,  function (req, res,nexts) { 

    let iid = req.body.id;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test1");
        console.log("数据库已创建!");
        var whereStr = {"id":iid};  // 查询条件
        dbo.collection("info").deleteOne(whereStr, function(err, obj) {
            if (err) throw err;
            console.log("文档删除成功");
            db.close();
        });
    });

});
module.exports = router;