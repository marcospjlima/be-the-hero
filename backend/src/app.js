const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
* Rota / Recurso
*/

/*
* GET: Buscar uma informação do back-end
* POST: Inserir uma informação do back-end
* PUT: Alterar uma informação do back-end
* DELETE: Excluir uma informação do back-end
*/

/*
* Tipos de parametros:
* Query Params: Parametros nomeados enviados na rota após o "?" (Filtro, paginação)
* Route Params: Parametros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
* SQL: mySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc 
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/



module.exports = app;