//importing the required modules
const express = require('express') ;
// const fetch = require('node-fetch') ;
const Datastore = require('nedb') ;

//  constants in program
const port = 3000 || process.env.PORT ;

// initialing the express application and the message_database
const app = express() ; 
const message_database = new Datastore('message_database.db') ;
const credential_database = new Datastore('credential_database.db') ;

// making the server to listen for incoming connections/requests
app.listen(port, ()=> console.log(`listening to server at port ${port}`)) ;

// making the app to serve the static files in the public directory
app.use(express.static('public')) ;

// ?
app.use(express.json({ limit : '1mb' })) ;

// loading the message_database
message_database.loadDatabase() ;
credential_database.loadDatabase() ;


app.get('/api', (request, response) => {
message_database.find({}).sort({"timestamp":+1}).exec(function(err, data) {
    if (err) {
        response.end();
        return;
    }
    response.json(data);
});
}) ;


app.post('/api', (request, response)=>{
    console.log('server got a request !') ;
    const timestamp = Date.now() ;
    const data = request.body ;
    data.timestamp = timestamp ;
    message_database.insert(data) ;
    response.json('success') ;
}) ;

app.post('/usradd', (request, response)=>{
    console.log('server got a request to add a user!') ;
    const timestamp = Date.now() ;
    const data = request.body ;
    data.timestamp = timestamp ;
    credential_database.insert(data) ;
    response.json('successfully added user to cred db') ;
}) ;

app.get('/logs/remove/:username', (request, response) => {
    const username = request.params.username ;
    console.log(username) ;
    message_database.remove({username:username}, (err, nums) => {
        if(err) console.error(err) ;
        console.log(`${nums} elements removed`) ;
    }) ;
}) ;


