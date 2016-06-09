var adp = require('./apply');
var configPort = require('./configPort');
var serv = apply.listen(config.port, function(){
	console.log('Express server listening on port' + server.address().port);
});

module.export = serv;