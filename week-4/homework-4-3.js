> rs.status()
{
    "set" : "hw42",
    "date" : ISODate("2015-01-29T15:10:48Z"),
    "myState" : 1,
    "members" : [
        {
            "_id" : 0,
            "name" : "Jacobs-MacBook-Pro.local:27001",
            "health" : 1,
            "state" : 1,
            "stateStr" : "PRIMARY",
            "uptime" : 426,
            "optime" : Timestamp(1422543838, 1),
            "optimeDate" : ISODate("2015-01-29T15:03:58Z"),
            "electionTime" : Timestamp(1422543838, 2),
            "electionDate" : ISODate("2015-01-29T15:03:58Z"),
            "self" : true
        }
    ],
    "ok" : 1
}
> rs.add("Jacobs-MacBook-Pro.local:27002")
{ "ok" : 1 }
> rs.add("Jacobs-MacBook-Pro.local:27003")
{ "ok" : 1 }
>
> rs.slaveOk()
>
> homework.c()
5
>
