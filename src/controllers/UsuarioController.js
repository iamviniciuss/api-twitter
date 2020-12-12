const Usuario = require('../models/UsuarioModel');
const Sala = require('../models/SalaModel');
const Carta = require('../models/CartaModel');
const BaralhoHasCarta = require('../models/BaralhoHasCartaModel');

module.exports = {
  
    async index(req, res){
        const usuarios = await Usuario.all();

        let json = usuarios.map((usuario)=>{
            return usuario.dataValues;
        })

        return res.json(json);
    },

    async get(req,res){
        const usuario = await Usuario.findByPk(req.params.id);
    	return res.json(usuario);
    },

    async cartas(req,res){

        const sala = await Sala.findByPk(req.params.sala_id);
        const cartas_baralho = await BaralhoHasCarta.findAll({ where: { baralho_id: sala.baralho_id , usuario_id: req.params.id } });

        const cartas = await cartas_baralho.map(async(carta_baralho)=>{
            return new Promise(function(resolve,reject){
                resolve(Carta.findByPk(carta_baralho.carta_id));
            })
        });

        Promise.all(cartas).then(function(lista_cartas){
            return res.json(lista_cartas);
        });

    },
}