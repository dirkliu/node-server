const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

class DB {
  constructor (url, dbName) {
    this.url = url
    this.dbName = dbName
    this.client = new MongoClient(url)
    this.client.connect(er => {
      assert.equal(null, err)
      this.db = this.client.db(dbName)
    })
  }

  insert () {
  },

  delete () {
  },

  update () {
  }

  query () {
  },

  close () {
    this.client.close()
  }
}