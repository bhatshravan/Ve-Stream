exports.console = msg => {
  console.log(msg);
};

exports.ParseCallback = (res, isSuccess, message) => {
  if (!isSuccess) {
    res.status(500).json({ success: false, message: message });
  } else {
    res.status(200).json({ success: true, message: message });
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
