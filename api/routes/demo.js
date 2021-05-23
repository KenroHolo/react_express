var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test1";


router.post('/', function (req, res,nexts) { 
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test1");
        dbo.collection("info"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });

});
module.exports = router;
