const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize')

class SalaHasUsuario extends Model {

  static async all()
  {
    return await this.findAll(); 
  }

}

SalaHasUsuario.init({
  usuario_id: {type: DataTypes.INTEGER, primaryKey: true },
  sala_id: {type: DataTypes.INTEGER, primaryKey: true },  
}, {
  sequelize, 
  modelName: 'sala_has_usuario',
  freezeTableName: true,
  timestamps: false

});

module.exports = SalaHasUsuario;


// const f = new SalaHasUsuario();
SalaHasUsuario.all().then((salaHasUsuarios)=>{
  salaHasUsuarios.map((salaHasUsuario)=>{
    console.log(salaHasUsuario.dataValues)
  })
});
