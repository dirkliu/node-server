const assert = require('assert');

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('points');
  // Insert some documents
  collection.insertMany([
    {x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

module.exports = insertDocuments
