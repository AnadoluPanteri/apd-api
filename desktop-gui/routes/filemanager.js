filemanager.one = function(req, res){
  var folder = req.params.folder;
  res.json({ 'deneme' : folder });
};


filemanager.main = function(req, res){
  res.render('index', { title: 'Anadolu Panteri Desktop' });
};
