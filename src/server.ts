import DBConnect from "./config/db";
import {createServer} from 'http'
import {ConnectSocket} from './config/Socket'
import dotenv from 'dotenv'
import app from "./app";
dotenv.config()
const PORT = process.env.PORT|| 3000
const server = createServer(app)
ConnectSocket(server)
 app.get("/", (_req, res) => {
  res.status(200).send("Backend is running 🚀 123");
})


DBConnect()

.then(()=>{

    server.listen(PORT,()=>{
        console.log(`Server connected on    -:- http://localhost:${PORT}`);
         
        
    })
   ;
})
.catch((error)=>{
    console.log("Server Connection error",error);
    
})
