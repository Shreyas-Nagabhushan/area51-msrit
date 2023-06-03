//importing the required modules
const express = require('express') ;
const Datastore = require('nedb') ;

//  constants in program
const port = 3000 || process.env.PORT ;

// initialing the express application and the database
const app = express() ; 
const database = new Datastore('database.db') ;

// making the server to listen for incoming connections/requests
app.listen(port, ()=> console.log(`listening to server at port ${port}`)) ;

// making the app to serve the static files in the public directory
app.use(express.static('public')) ;

// ?
app.use(express.json({ limit : '1mb' })) ;

// loading the database
database.loadDatabase() ;

app.get('/api', (request, response) => {
    console.log('fetching the items in the database') ;
    database.find({}, (err, data) => {
        if(err) {
            response.end() ;
            return ;
        }
        response.json(data) ;
    }) ;
}) ;

app.post('/api', (request, response)=>{
    console.log('server got a request !') ;
    const timestamp = Date.now() ;
    const data = request.body ;
    data.timestamp = timestamp ;
    database.insert(data) ;
    response.json('success') ;
}) ;


