var server = require('./server');
var route = require('./router');
var requestHandler = require('./requestHandler');

var handler = {};
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;

server.start(route.route,handler);