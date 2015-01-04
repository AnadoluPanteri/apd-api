var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  debug('ENTER: ' + server.address().port + '/');
  res.render('index', { title: 'Anadolu Panteri Desktop' });
});

module.exports = router;
