var rh = require('../response.js');

exports.login = (req,res) =>{
  try{
    //res.send("Please login");
    res.status(500);
    var id = req.params.id;
    rh.responseHandler(null,'"data":'+id+' }',req,res);
    //res.render('index');
  }
  catch(err) {
    console.log("Error:"+ err);
    rh.responseHandler(err,"Error",req,res);
  }
}

exports.api = (req,res) => {
  var hello = [];
  hello.push('hu');
  var bb = JSON.stringify(hello);
  res.render(bb);
}
