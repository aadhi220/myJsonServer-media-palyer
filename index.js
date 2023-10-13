const jsonServer = require('json-server');

//create json server using json-server library
const mediaPlayerServer= jsonServer.create()

//set up path/route for db.json file
const router = jsonServer.router('db.json')

const middleware= jsonServer.defaults()

//set up port for server app

const port =4000 || process.env.PORT


//use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//server listen for request from frontend
mediaPlayerServer.listen(port,()=> {
    console.log(`media player server started at post : ${port}, and waiting for client reqeust!!`);
})