var server = require('./rouer_1');
var router = require('./router');

server.start(router.route);
router.filename();
router.dirname();