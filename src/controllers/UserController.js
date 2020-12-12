const User = require('../models/User');

module.exports = {
    async index(req, res){
        const user = await User.find({}).sort();
        console.log('idex');
        console.log(user);

        return res.json(user);
    },
    async login(req,res){
    	console.log('login')
    	const username = req.body.username;
    	const password = req.body.password;
    	const email = req.body.email;

    	const user = await User.find({"username" : username})
 
    	return res.json(user);
    },
    async store(req,res){

        const user = await User.create(req.body);

        req.io.emit('Users', User);
        
        return res.json(user);        
    }
}