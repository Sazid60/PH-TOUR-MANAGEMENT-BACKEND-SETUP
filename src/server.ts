import { Server } from "http"

import mongoose from "mongoose"
import app from "./app";

let server: Server


const startServer = async () => {
    try {
        await mongoose.connect("");
        console.log("Connected To MongoDb")
        server = app.listen(5000, () => {
            console.log("Server is Running On Port 5000")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()

