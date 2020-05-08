const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://144.48.7.151:27017';

const dbName = 'lease';


function* getClient(callback) {
  console.log('getClient')
  const bbb = yield MongoClient.connect(url);
  console.log('eeeeee', bbb)
    // yield MongoClient.connect(url, function*(err, client) {
    //   console.log('MongoClient.connect')
    //   if (err) {
    //     console.error(err);
    //     return err;
    //   }
    //   const db = client.db(dbName);
    //   const result = {
    //     db,
    //     client,
    //   }
    //   yield result;
    // })
}

function* insert(table, value, callback) {
  console.log('ddddd');
  const client = yield getClient();
  console.log('client', client.next());
  // getClient(function(db, client) {
  //   const collection = db.collection(table);

  //   if ('[object Object]' === Object.prototype.toString.call(value)) {
  //     value = [value];
  //   }

  //   collection.insertMany(value, function(err, result) {
  //     client.close();
  //     callback(err, result);
  //   });
  // });
}

function find(table, condition, callback) {
  getClient(function(db, client) {
    let conditionNew = {};
    if (condition) {
      conditionNew = condition
    }
    const collection = db.collection(table);
    collection.find(conditionNew).toArray(function(error, result) {
      client.close();
      callback(error, result);
    })
  });
}

function findOne(table, condition, callback) {
  find(table, condition, function(error, result) {
    if (result && '[object Array]' === Object.prototype.toString.call(result)) {
      callback(error, result[0]);
    } else {
      callback(error, result);
    }
  })
}

module.exports = {
  insert,
  find,
  findOne
};