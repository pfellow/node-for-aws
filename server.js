const http = require('http');
const fs = require('fs');
const path = require('path');

function doOnRequest(request, response) {
  // Send back a message saying "Welcome toTwitter"

  // response.end('Welcome to Twitter');
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    const fileToServe = fs.readFileSync(path.join(__dirname, 'index.html'));
    response.write(fileToServe);
    response.end();
  } else if (request.method === 'POST' && request.url === '/sayHi') {
    fs.appendFileSync(
      path.join(__dirname, 'hi_log.txt'),
      `Somebody said hi.\n`
    );
    response.write('hi back to you!');
    response.end();
  } else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    const body = [];
    request.on('data', (chunk) => {
      // receiving data by chunks
      body.push(chunk);
    });
    request.on('end', () => {
      // do something after receiving all the data
      const parsedBody = Buffer.concat(body).toString(); // need to use Buffer for this
      const textToRespond =
        parsedBody === `hello`
          ? 'hello there!'
          : parsedBody === `what's up`
          ? 'the sky'
          : 'good morning';
      fs.appendFileSync(path.join(__dirname, 'hi_log.txt'), `${parsedBody}\n`);
      response.end(textToRespond);
    });
  } else if (request.method === 'PUT' && request.url === '/') {
    fs.writeFileSync(path.join(__dirname, 'hi_log.txt'), `updated message`);
    response.write('file updated');
    response.end();
  } else if (request.method === 'DELETE' && request.url === '/') {
    fs.unlink(path.join(__dirname, 'hi_log.txt'), () => {
      response.write('file deleted');
      response.end();
    });
  } else if (request.method === 'GET' && request.url === '/style.css') {
    //req.url has the pathname, check if it conatins '.css'

    fs.readFile(path.join(__dirname, 'style.css'), function (err, data) {
      if (err) console.log(err);
      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.write(data);
      response.end();
    });
  } else {
    //   // Handle 404 error: page not found
    response.statusCode = 404;
    response.end(`Error: Not Found`);
  }
}

const server = http.createServer(doOnRequest);

server.listen(3000);
