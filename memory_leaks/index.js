import { memoryUsage } from 'node:process';
import http from'node:http';

console.log(memoryUsage());

const headers = [];

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
      headers.push(req.headers);

      console.log(memoryUsage());
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
