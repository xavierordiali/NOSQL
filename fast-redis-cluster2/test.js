var rcluster = require('./index.js').clusterClient;

var settings = {
	host: '127.0.0.1',
	port: 7001
};

var t = new rcluster.clusterInstance(settings, function (err, r) {
	if (err) throw err;
});

// t.on('error', function(err){
// 	console.error(err);
// });
//
// setInterval(function(){
// 	t.incr('key', function(e, incr){
// 		console.log('INCR', e, incr);
// 	});
// }, 1000);

//698 new Buffer
//414 without new Buffer

var start = +new Date;
var a = 'привет';
for(var i=0;i<1000000;i++) {
	t.calcSlot(a);
}
console.log(+new Date - start);