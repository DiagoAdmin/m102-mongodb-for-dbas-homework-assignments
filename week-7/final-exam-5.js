Question: Which of these statements is true? Note: to get a multiple answer question right in this final you must get all the components right, so even if some parts are simple, take your time.

Answers:

 - We can create an index to make the following query fast/faster: db.postings.find( { "comments.flagged" : true } )

 - One way to assure people vote at most once per posting is to use this form of update: db.postings.update( { _id: . . . , voters:{$ne:'joe'} }, { $inc : {votes:1}, $push : {voters:'joe'} } );
 
