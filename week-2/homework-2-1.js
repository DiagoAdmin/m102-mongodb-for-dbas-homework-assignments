Jacobs-MacBook-Pro:week-2 jacobward$ mongoimport --db pcat -c products < products.json
connected to: 127.0.0.1
2015-01-18T17:09:26.120+0000 check 9 11
2015-01-18T17:09:26.120+0000 imported 11 objects
Jacobs-MacBook-Pro:week-2 jacobward$ mongo --shell pcat homework2.js
MongoDB shell version: 2.6.5
connecting to: pcat
type "help" for help
Server has startup warnings:
2015-01-18T11:57:22.713+0000 [initandlisten]
2015-01-18T11:57:22.713+0000 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
> b = db.products_bak; db.products.find().forEach( function(o){ b.insert(o) }
... )
> b.count()
11
>
> homework.a()
3.05
>
