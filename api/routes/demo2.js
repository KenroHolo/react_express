var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test1";


router.get('/', urlencodedParser,  function (req, res,nexts) { 


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test1");
        var whereStr = {"id":"1"};
        dbo.collection("info"). find(whereStr).toArray(function(err, result) { 
            if (err) throw err;
            console.log(result);
            if(result) res.send(result[0]);
            db.close();
        });
    });

});
module.exports = router;