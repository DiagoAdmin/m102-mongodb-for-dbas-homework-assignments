> db.products.ensureIndex( { "for": 1 } )
{
    "createdCollectionAutomatically" : false,
    "numIndexesBefore" : 1,
    "numIndexesAfter" : 2,
    "ok" : 1
}
> db.products.find( { "for": "ac3" } ).explain()
{
    "cursor" : "BtreeCursor for_1",
    "isMultiKey" : true,
    "n" : 4,
    "nscannedObjects" : 4,
    "nscanned" : 4,
    "nscannedObjectsAllPlans" : 4,
    "nscannedAllPlans" : 4,
    "scanAndOrder" : false,
    "indexOnly" : false,
    "nYields" : 0,
    "nChunkSkips" : 0,
    "millis" : 0,
    "indexBounds" : {
        "for" : [
        [
        "ac3",
        "ac3"
        ]
        ]
    },
    "server" : "Jacobs-MacBook-Pro.local:27017",
    "filterSet" : false
}
>


Q1. 4
Q2. 4
Q3. Yes
