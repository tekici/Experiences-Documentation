/////////////////////////////////////////
///////////INSERT and DELETE OPERATIONS
/////////////////////////////////////////
db.parts.insert( { bok: "card", sok: 15 } )
db.parts.insert( { item: "card", qty: 15 } )
db.parts.insert({partno:"0001", name : "far", qty : 5.0, cost: 30, price: 25})
db.parts.remove({bok : "card"})
/////////////////////////////////////////
///////////QUERY OPERATIONS
/////////////////////////////////////////
//find all documents inside the collection
db.parts.find({})
/////////////////////////////////////////
///////////UPDATE OPERATIONS 
/////////////////////////////////////////
//renaming an existing collection
db.parts.renameCollection("parts")
//renaming a field of all documents
db.parts.updateMany({}, {$rename: {"manufacturer":"partno"}})
db.parts.updateMany({}, {$rename: {"catalog_number":"name"}})
//updating a specific document's specific field's value
db.parts.update({name:"asf"},{"manufacturer" : "manifaturaci"})
//adding a field to all documents of the existing catalog
db.parts.update({}, {$set : {"catalog_number":null} })
db.parts.update({}, {$set : {"cost":5} })
db.parts.update({}, {$set : {"price":30.5} })
db.parts.update({}, {$set : {"qty": 10} })
//adding an array field to all documents of the existing catalog
db.parts.update({}, {$set : {} }
//TODO: Try creating different structured documents in the same collection.