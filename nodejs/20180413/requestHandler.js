var exec = require('child_process').exec;

function start(response) {
    exec("ls -lah",function (error,stdout,stderr) {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    })
}

function upload(response) {
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Upload");
    response.end();
}

module.exports = {
    start : start,
    upload : upload
}