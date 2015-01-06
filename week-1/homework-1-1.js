Jacobs-MacBook-Pro:week-1 jacobward$ mongo
MongoDB shell version: 2.6.5
connecting to: test
Server has startup warnings:
2015-01-06T19:26:10.207+0000 [initandlisten]
2015-01-06T19:26:10.207+0000 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
>
> db.isMaster().maxBsonObjectSize
16777216
>
