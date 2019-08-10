exports.console = msg => {
  console.log(msg);
};

exports.ParseCallback = (isSuccess, message) => {
  if (!isSuccess) {
    res.status(500).json({ err: err });
  } else {
    res.status(200).json(data);
  }
};

exports.sendResponse = (err, data, req, res) => {
  console.log('[' + req.method + '] ' + req.url + ' | ' + req.connection.remoteAddress);
  if (err) {
    res.status(500).json({ err: data });
    // console.log('[!STORE-ERR] ' + err);
  } else {
    res.status(200).json({ message: data });
  }
};
