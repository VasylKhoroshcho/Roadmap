import http from'node:http';

const server = http.createServer((req, res) => {

  let body = '';

  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    console.log('chunk', chunk)
    body += chunk;
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // Write back something interesting to the user:
      res.write(typeof data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(1337);
