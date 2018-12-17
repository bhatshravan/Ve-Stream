
var rh = {
  responseHandler : (err, data, req, res) => {
    console.log('[SERVER] -> '+req.method+', '+req.url);
    if(err) {
      console.log('[ERR] -> '+req.method+', '+req.url+' -> '+err);
      res.status(500).send('{ "response: error" }');
    } else res.status(200).send(JSON.parse('{ "response": "success" ,'+data));
  }
}

module.exports = rh;
