const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://127.0.0.1:27017'
const url = 'mongodb://3.138.244.174:27017'

const client = new MongoClient(url, { useNewUrlParser: true });

module.exports = client;
