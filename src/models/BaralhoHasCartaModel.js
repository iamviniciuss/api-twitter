const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize')

class BaralhoHasCarta extends Model {

  static async all()
  {
    return await this.findAll(); 
  }

}

BaralhoHasCarta.init({
  baralho_id: {type: DataTypes.INTEGER, primaryKey: true },
  carta_id: {type: DataTypes.INTEGER, primaryKey: true },
  usuario_id: {type: DataTypes.STRING, allowNull: false },
  mesa: {type: DataTypes.STRING, allowNull: false },
  
}, {
  sequelize, 
  modelName: 'baralho_has_carta',
  freezeTableName: true,
  timestamps: false

});

module.exports = BaralhoHasCarta;


// const f = new BaralhoHasCarta();
// BaralhoHasCarta.all().then((baralhoHasCartas)=>{
//   baralhoHasCartas.map((baralhoHasCarta)=>{
//     console.log(baralhoHasCarta.dataValues)
//   })
// });
