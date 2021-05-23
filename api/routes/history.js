var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test1";
 

router.post('/',function(req, res){ 
    //var tem=parseInt(req.body.wendu)
    //var hum=parseInt(req.body.shidu)
    var tem=[]
    var hum=[]
     console.log(req.body);   
     
     tem.push(parseInt(req.body.wendu))
     hum.push(parseInt(req.body.shidu))
     var iid = req.body.id
     MongoClient.connect(url,{ useNewUrlParser: true} ,{useUnifiedTopology: true},function(err, db) {
        if (err) throw err;
        var dbo = db.db("test1");
        var myobj = {"id":iid,"wendu":tem,"shidu":hum};
        var i = {"id":iid}
        dbo.collection("info2").find(i).toArray(function(err,data){

            if(err) {
                res.send('网络故障，稍后重试');
            } 

            if(data[0]) {
                var t=data[0].wendu
                var s=data[0].shidu
                console.log(data[0].wendu)
                t.push(parseInt(req.body.wendu))
                s.push(parseInt(req.body.shidu))
                var updateStr = {$set: { "wendu" : t ,"shidu" : s }};
                dbo.collection("info2").updateOne(i, updateStr, function(err, result) {
                    if (err) throw err;
                    console.log("文档更新成功");
                    db.close();
                    res.send('成功');  
                });
                
            }

            if(data[0]==null){               
                
                dbo.collection("info2").insertOne(myobj, function(err,data){
                    if (err) {
                        res.send('网络故障，稍后重试');
                    }
                    console.log("文档插入成功");

                    res.send('成功');    
                    db.close();
                                   
            })
            
            }   

        });
        
    });
 });
module.exports = router;
