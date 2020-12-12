const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize')

class Sala extends Model {

  static async all()
  {
    return await this.findAll(); 
  }

}

Sala.init({
  id: {type: DataTypes.STRING, primaryKey: true },
  baralho_id: {type: DataTypes.STRING, allowNull: false },
  nome: { type: DataTypes.STRING, allowNull: false },
  // valor: { type: DataTypes.STRING, allowNull: false },
  // card: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize, 
  modelName: 'sala',
  freezeTableName: true,
  timestamps: false
});

module.exports = Sala;


// const f = new Sala();
Sala.all().then((salas)=>{
  salas.map((sala)=>{
    console.log(sala.dataValues)
  })
});
