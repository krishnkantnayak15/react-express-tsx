/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
import {IRoute, Express, Router} from 'express';
import items from './routes/items';
import {default as startup} from './appstart';

require('./database');

let bodyParser = require('body-parser');
let express:any = require('express');	
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router:Router = express.Router(); 

app.use('/api', router);

app.get('/', startup)
	.use((<any>express).static(__dirname + '/../.tmp'))
	.listen(7777);
	
items(router);