var MongoClient = require("mongodb").MongoClient;
var fs = require('fs');
const { connect } = require("http2");
var obj = {
    "databaseName": "sampledatabase",
    "collectionName": "samplecollection"
};

var connectionString = process.env.MYSECRET_CONNECTIONS_STRING;
var stringSplit1 = connectionString.split("://")[1];
var stringSplit2 = stringSplit1.split(",");
var userNamePassword = stringSplit2[0];
userNamePassword = userNamePassword.split(':');
var userName = userNamePassword[0];
var password = userNamePassword[1];
var databaseName = obj.databaseName;
var collectionName = obj.collectionName;
connectionString = ("mongodb://" + encodeURIComponent(userName) + ":" + encodeURIComponent(password) + "@" + stringSplit2);

module.exports = {

    queryCount: function (callback, errorCallback) {
        console.log(`Querying container:\n${collectionName}`);
        MongoClient.connect(connectionString, { useNewUrlParser: true }, function (err, client) {
            if (err != null) {
                errorCallback(err);
                return;
            }
            console.log("Connected to the server");
            var db = client.db(databaseName);
            const collection = db.collection(collectionName);
            collection.count(function (err, count) {
                if (err != null) {
                    errorCallback(err)
                }
                console.log(`Found ${count} records`);
                callback(count);
                callback.close();
            });
        });
    },

    addRecord: function (pageName, callback, errorCallback) {
        var milliseconds = (new Date).getTime().toString();
        var itemBody = {
            "id": milliseconds,
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
            collection.insertDocuments([itemBody], function (err, result) {
                if (err != null) {
                    errorCallback(err)
                }
                callback();
                client.close();
            });
        });
    }
}