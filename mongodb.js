//CRUD Operations
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length);
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>{
    if(error){
        return console.log("==Conneciton Error");
    }

    const db = client.db(databaseName);
    
    db.collection('users').findOne({_id: new ObjectID("5ea750200c208a8e65fb7b23")}, (error, user) => {
        if(error) {
            return console.log("Unable to fetch")
        }
        console.log(user)
    })

    db.collection('users').find({age: 27}).toArray((error, users) =>{
        console.log(users);
    })

    db.collection('users').find({age: 27}).count((error, count) =>{
        console.log(count);
    })

    db.collection('tasks').findOne({_id: new ObjectID("5ea753e846739b8ebcf96197")}, (error, task) =>{
        console.log(task);
    })

    db.collection('tasks').find({completed: true}).toArray((error, tasks) =>{
        console.log(tasks);
    })

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID("5ea750200c208a8e65fb7b24")
    }, {
        // $set: {
        //     name: 'JavaScript Guy'
        // }
     $inc:{
         age: 1
     }

    })
    updatePromise.then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


   const updateMany =  db.collection('tasks').updateMany({
       completed: true },
       {
         $set:{
            completed: false
        }
    })
    updateMany.then((result) =>{
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    })



    // db.collection('users').deleteMany({
    //     age: 26 

    // }).then((result) =>{
    //     console.log(result) 
    // }).catch((error) =>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description : "Task1" 
    }).then((result) =>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })
})


