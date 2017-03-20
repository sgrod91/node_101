var dns = require('dns');
var host = 'yahoo.com';
// var ip = '98.139.183.24';

dns.lookup(host, function(err, ip) {
  console.log('IP address is:', ip);
if (err) {
  console.log(err.message);
  return;
}
});
