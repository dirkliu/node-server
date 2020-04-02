const assert = require('assert')
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('points');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

module.exports = findDocuments
