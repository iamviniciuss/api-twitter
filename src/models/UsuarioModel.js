const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize')

class Usuario extends Model {

  static async all()
  {
    return await this.findAll(); 
    return usuarios;
  }

}

Usuario.init({
  id: {
    type: DataTypes.STRING, 
    primaryKey: true
  },
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize, 
  modelName: 'usuario',
  freezeTableName: true,
  timestamps: false
});

module.exports = Usuario;

// const f = new Usuario();
// const users = Usuario.all().then((d)=>{
//   console.log(d);
// });
