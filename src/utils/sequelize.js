const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eleven', 'root2', 'root2', {
  host: 'localhost',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate().then(function(e){
	console.log('Connection has been established successfully.');
}).catch(function(error){
	console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;

