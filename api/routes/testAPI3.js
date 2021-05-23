var express = require("express");
var router = express.Router();
var path = require('path'); //系统路径模块
var fs = require("fs");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test1";



 router.post('/', urlencodedParser,  function (req, res) { 
    console.log("req: " +req.body.filename+","+req.body.name+","+req.body.pwd);
    
   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    var dbo = db.db("test1");
     var whereStr = {"name":req.body.name,"pwd":req.body.pwd};  
      dbo.collection("users").find(whereStr).toArray(function(err, result) {
        console.log(result);
        if (result.length==0) {console.log("no result");db.close();res.send("密码或用户名错误")  ; return;}
        console.log("end"); console.log(result.length);
        db.close();
        res.send(result[0].root);
    });
    
    
    
});
 
});
 
module.exports = router;
