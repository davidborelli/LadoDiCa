const jsonServer = require('json-server');
const Search = require('./json-server/search');

const server = jsonServer.create();
const router = jsonServer.router('./json-server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.post('/search', Search.find);

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running at port 3001');
});
