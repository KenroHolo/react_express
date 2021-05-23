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
        var whereStr = {"id":iid};
        dbo.collection("info"). find(whereStr).toArray(function(err, result) { 
            if (err) throw err;
            console.log(result);
            if(result) res.send("1");
            db.close();
        });
    });

});
module.exports = router;