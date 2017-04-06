module.exports = function(app, crypto){
	app.get('/', function(req, res){
		res.render('index.html');
		console.log(res);
		return;
	});

	app.post('/', function(req, res){
		console.log('Post body received by server: ');
		console.log(req.body.iData);
		console.log('*******');

		const hash = crypto.createHash('sha256');
		hash.on('readable', function(){
			const hData = hash.read();
			if (hData) {
				res.send(hData.toString('hex'));
			}
		});
		hash.write(req.body.iData);
		hash.end();
		return;
	})
}