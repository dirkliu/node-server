const MongoClient = require('mongodb').MongoClient
const findDocuments = require('./findDocuments')
const assert = require('assert')
// Connection URL
const url = 'mongodb://localhost:27017'
// Database Name
const dbName = 'test'
// Create a new MongoClient
const client = new MongoClient(url);
// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err)
  console.log("Connected successfully to server")
  const db = client.db(dbName)

  findDocuments(db, function() {
    client.close()
  })
  // client.close()
})
