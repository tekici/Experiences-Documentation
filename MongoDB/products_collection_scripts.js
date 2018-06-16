//creating new collection
//queries
db.products.find({})
// Fetch the Product document identified by this catalog number
product = db.products.findOne({catalog_number: 1234});
   // Fetch all the Parts that are linked to this Product
product_parts = db.parts.find({_id: { $in : product.parts } } ) ;

while ( product_parts.hasNext() ) {
   printjson( product_parts.next() );
}

////////////////////////////
//create new collection
db.createCollection("products")
//inserting documents 
db.products.insert(
{
 	name : 'left-handed smoke shifter',
    manufacturer : 'Acme Corp',
    catalog_number: 1234,
    parts : [     // array of references to Part documents
        "5afa0328ef2ac876ca63514f",    // reference to the #4 grommet above
        "5afa134c7a02eb730b239e9a",    // reference to a different Part
        "5afa13557a02eb730b239e9b",
    ]
}
)
db.products.remove({})
