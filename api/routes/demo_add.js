var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test1";


router.post('/', urlencodedParser,  function (req, res,nexts) { 
// console.log("req: " +req.body.name+","+req.body.name+","+req.body.pwd);
    let wen = req.body.wendu;
    let shi = req.body.shidu;
    let iid = req.body.id;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
        var dbo = db.db("test1");
        var myobj = { "id":iid,"wendu": wen,"shidu":shi};
        dbo.collection("info").find(myobj).toArray(function(err, result) { 
            dbo.collection("info").insertOne(myobj, function(err, result) {
                console.log("数据插入成功");
                db.close();
            });
 
        });
});
});
module.exports = router;
