var rh = require('../response.js');

exports.login = (req,res) =>{
  try
  {
    //res.send("Please login");
    res.status(200);
    var id = req.body.id; //or req.body.id or req.query.id
    //rh.rh2(null,'"data":'+id+' }',req,res);
    rh.responseHandler(null,'"data":'+id+' }',req,res);
    //res.render('index');
  }
  catch(err)
  {
    console.log("Error:"+ err);
    rh.rh2(err,"Error: "+err,req,res);
  }
};
