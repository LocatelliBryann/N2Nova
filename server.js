import express from "express"
import {router} from "./routes/jogador_routes.js"

let server = express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use("/", router)
server.listen(3000, function () {
    console.log("Porta 3000")
})
