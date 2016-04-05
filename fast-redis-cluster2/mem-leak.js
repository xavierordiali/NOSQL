var heapdump = require('heapdump');

setInterval(function(){
	heapdump.writeSnapshot();
}, 15000);


var rcluster = require('./index.js').clusterClient;

var settings = {
	host: '127.0.0.1',
	port: 7001,
	useFallbackDriver: true
};

var t = new rcluster.clusterInstance(settings, function (err, r) {
	if (err) throw err;
	
	function doSomething() {
		for(var i=0;i<1000;i++) {
			r.incr('aaaa'+i);
		}
		setTimeout(doSomething, 1000);
	}
	
	doSomething();
});