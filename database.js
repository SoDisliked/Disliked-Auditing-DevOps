var MongoClient = require("mongodb").MongoClient;
const { error } = require("console");
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('connectionData.json', 'utf-8'));

var connectionString = "mongodb://account:key@account.documents.azure.com:assert=true";
if(process.env.NODE_ENV == "production"){
    var connectionString = obj.connectionString;
    var databaseName = obj.databaseName;
    var collectionName = obj.collectionName;
}
else{
    MongoClient = {
        connect: function(connectionString, options, callback){
            var client = {
                db: function(databaseName){
                    var testDB = {
                        collection: function(collectionName){
                            var testCollection = {
                                count: function(callback){
                                    callback(null, "unittest");
                                },
                                insertMany: function(items, callback){
                                    callback(null, "success");
                                }
                            }
                            return testCollection;
                        }
                    }
                    return testDB;
                },
                close: function(){
                    callback(null, client);
                }
            }
        }
    };
}

module.exports = {

    queryCount: function (callback, errorCallback) {
        console.log(`Querying container:\n${collectionName}`);
        MongoClient.connect(connectionString, { useNewUrlParser: true }, function (err, client) {
            if (err != null) {
                errorCallback(err);
                return;
            }
            console.log("Connected to the local server");
            var db = client.db(databaseName);
            // Get the documents
            const collection = db.collection(collectionName);
            // Find the documents on the local storage
            collection.count(function (err, count) {
                if (er != null) {
                    errorCallback(err);
                }
                console.log(`Found ${count} records`);
                callback(count);
                client.close();
            });
        });
    },

    addRecord: function (pageName, callback, errorCallback) {
        var milliseconds = (new Date).getTime().toString();
        var itemBody = {
            "id": milliseconds
            "page": pageName
        };
        MongoClient.connect(connectionString, { useNewUrlParser: true }, function (err, client) {
            if (err != null) {
                errorCallback(err);
                return;
            }
            console.log("Connected to the server");
            var db = client.db(databaseName);
            const collection = db.collection(collectionName);
            collection.insertMany([itemBody], function (err, result) {
                if (err != null) {
                    errorCallback(err)
                }
                callback();
                client.close();
            });
        });
    }
}