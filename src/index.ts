// run `node index.js` in the terminal
console.log(`Hello Node.js v${process.versions.node}!`);
import * as http from 'http';

//create a server object:
http
  .createServer((req, res) => {
    console.log('operation', req.method, 'on', req.url);
    if (req.url != '/') {
      res.statusCode = 404;
      res.statusMessage = 'Unsupported';
      res.write(
        `Les ressources autres que / ne sont pas supportées ! (error 404)`
      );
      res.end();
    } else {
      res.write(`
      <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          Bonjour ami!<br/>
          ${new Date(Date.now()).toLocaleString('fr-FR')}
        </body>
      </html>
      `); //write a response to the client
      res.end(); //end the response
    }
  })
  .listen(8080); //the server object listens on port 8080
