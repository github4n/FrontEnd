var exec = require('child_process').exec;
//非阻塞操作

function start(response) {
  console.log("Request handler 'start' was called.");

  exec("ls -lah",
    { timeout: 10000},
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(stdout);
      response.end();
    });
}

function upload (response) {
	console.log('Request handler upload was called');
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello Upload");
	response.end();
}

module.exports = {
	start : start,
	upload : upload
}