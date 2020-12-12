const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize')

class Carta extends Model {

  static async all()
  {
    return await this.findAll(); 
    return Cartas;
  }

}

Carta.init({
  id: {type: DataTypes.STRING, primaryKey: true },
  naipe: { type: DataTypes.STRING, allowNull: false },
  valor: { type: DataTypes.STRING, allowNull: false },
  card: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize, 
  modelName: 'carta',
  freezeTableName: true,
  timestamps: false

});

module.exports = Carta;


// const f = new Carta();
Carta.all().then((cartas)=>{
  cartas.map((carta)=>{
    console.log(carta.dataValues)
  })
});
