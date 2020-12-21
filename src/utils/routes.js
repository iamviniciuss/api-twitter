const express = require('express');

const routes = express.Router();

const client = require('./mongo.js');

routes.get('/', async (req,res)=>{

	const valor = await run();

	console.log(valor)

	res.send(valor)
});

async function run() {

	return new Promise(async(resolve,reject)=>{

		try {
			
			await client.connect();
			
			const database = client.db('twitter');
			
			const collection = database.collection("usuarios");
			
			const collections = await collection.find()

			await collections.toArray((err,docs)=>{

				resolve(docs);
				
			});

		}catch(e){
			
			console.log('Erro ao tentar buscar dados no mongo.')
			
		}finally {
			
			console.log("depois3 de resolver.")
			
		}

	});
}

module.exports = routes;