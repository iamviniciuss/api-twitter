const express = require('express');

const routes = express.Router();

const client = require('./mongo.js');

// const TweetController = require('./controllers/TweetController');
// const UsuarioController = require('./controllers/UsuarioController');
// const SalaController = require('./controllers/SalaController');
// const UsuarioModel = require('./models/UsuarioModel');


routes.get('/', async (req,res)=>{

	const valor = await run();

		console.log(valor)
	

	// valor.then(()=>{
	
	// 	console.log('sucesso')
	
	// }).catch(()=>{
	
	// 	console.log('error');
	
	// });


    res.send(':) Hello World')
});

async function run() {

	return new Promise(async(resolve,reject)=>{

		try {
    
		    await client.connect();
		    
		    const database = client.db("sample_airbnb");
		    
		    const collection = database.collection("listingsAndReviews");
		   
		    const movie = await collection.find();

		    // since this method returns the matched document, not a cursor, print it directly
		    console.log(movie);
		  
		  } finally {
		  
		    await client.close();
		  
		    return resolve([])
		  
		  }

		  return resolve(movie)

	});

  

  // return movie

}




// routes.get('/usuarios', UsuarioController.index)
// routes.get('/usuario/:id/sala/:sala_id', UsuarioController.cartas)

// routes.get('/salas', SalaController.index)

// routes.post('/autenticate' , async (req, res)=>{
    
//     const {email , senha } = req.body
//     const usuario = await UsuarioModel.findOne({where: {email:email}})
    
//     if(!usuario){
//         res.status(401).send({mensagem:'Usuário não existe ou está cancelado.'})
//     }

//     res.send(usuario)
// });



module.exports = routes;