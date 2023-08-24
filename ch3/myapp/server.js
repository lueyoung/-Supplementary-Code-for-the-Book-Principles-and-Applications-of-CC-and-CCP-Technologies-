const http = require('http');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://db:27017';

MongoClient.connect(url, function(err, client) {
  const db = client.db('mydb');
  
  const server = http.createServer((req, res) => {
    db.collection('test').insertOne({time: Date.now()}, function(err, result) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    });
  });

  server.listen(3000, '0.0.0.0', () => {
    console.log('Server running at http://0.0.0.0:3000/');
  });
});
