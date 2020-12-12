const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize')

class Baralho extends Model {

  static async all()
  {
    return await this.findAll(); 
  }

}

Baralho.init({
  id: {type: DataTypes.STRING, primaryKey: true },
  // naipe: { type: DataTypes.STRING, allowNull: false },
  // valor: { type: DataTypes.STRING, allowNull: false },
  // card: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize, 
  modelName: 'baralho',
  freezeTableName: true,
  timestamps: false
});
module.exports = Baralho;

// const f = new Baralho();
// Baralho.all().then((baralhos)=>{
//   baralhos.map((baralho)=>{
//     console.log(baralho.dataValues)
//   })
// });
