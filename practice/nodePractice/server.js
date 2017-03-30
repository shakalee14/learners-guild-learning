const http = require("http");
//requires http module which offers createServer which returns an object with the method listen -- for the port number
// could of just written var server = http.createServer()
// server.listen(8888) ---> would have started a server that listened at port 8888 and not do anything else

http.createServer( function( request, response) {
  //passed the createServer function an anonymous function
  // with responses of functions
  // asynch callbacks in node that are event -driven
  // underlying execution model in node is different from runtime environments like python, ruby, php or java

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  console.log('it is running a node server');
  response.end()
}).listen(8888);