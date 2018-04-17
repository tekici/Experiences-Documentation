//create the database and connect to it
var db = connect('127.0.0.1:27017/turgay'),
    allDocuments = null;
	
//create the names collection and add documents to it
db.names.insert({'name' : 'Don Draper'});
db.names.insert({'name' : 'Peter Campbell'});
db.names.insert({'name' : 'Betty Draper'});
db.names.insert({'name' : 'Joan Harris'});

//set a reference to all documents in the database
allDocuments = db.names.find();

//iterate the names collection and output each document
while (allDocuments.hasNext()) {
   printjson(allDocuments.next());
}