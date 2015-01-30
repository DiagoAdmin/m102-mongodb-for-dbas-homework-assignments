> rs.initiate()
2015-01-29T15:03:57.766+0000 trying reconnect to 127.0.0.1:27001 (127.0.0.1) failed
2015-01-29T15:03:57.767+0000 reconnect 127.0.0.1:27001 (127.0.0.1) ok
{
    "info2" : "no configuration explicitly specified -- making one",
    "me" : "Jacobs-MacBook-Pro.local:27001",
    "info" : "Config now saved locally.  Should come online in about a minute.",
    "ok" : 1
}
> rs.initiate()
{
    "info" : "try querying local.system.replset to see current configuration",
    "ok" : 0,
    "errmsg" : "already initialized"
}
> use replication
switched to db replication
> db.foo.find()
{ "_id" : ObjectId("54ca4b234895a81fb2a24cf0"), "x" : 0, "y" : 0.7528036930598319 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf1"), "x" : 1, "y" : 0.7169712090399116 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf2"), "x" : 2, "y" : 0.6212866040877998 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf3"), "x" : 3, "y" : 0.5948635842651129 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf4"), "x" : 4, "y" : 0.5058173451106995 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf5"), "x" : 5, "y" : 0.2583425713237375 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf6"), "x" : 6, "y" : 0.10007316898554564 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf7"), "x" : 7, "y" : 0.9018002464435995 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf8"), "x" : 8, "y" : 0.6978986938484013 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cf9"), "x" : 9, "y" : 0.6906784807797521 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cfa"), "x" : 10, "y" : 0.40157335670664907 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cfb"), "x" : 11, "y" : 0.4710884864907712 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cfc"), "x" : 12, "y" : 0.5725742233917117 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cfd"), "x" : 13, "y" : 0.31141795101575553 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cfe"), "x" : 14, "y" : 0.1468609923031181 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24cff"), "x" : 15, "y" : 0.790571253048256 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24d00"), "x" : 16, "y" : 0.5274313418194652 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24d01"), "x" : 17, "y" : 0.36070351931266487 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24d02"), "x" : 18, "y" : 0.8747175063472241 }
{ "_id" : ObjectId("54ca4b244895a81fb2a24d03"), "x" : 19, "y" : 0.37031641718931496 }
Type "it" for more
> homework.b()
5002
>
