import express from "express"
import {jogador} from "../controller/jogador_controller.js"

let router = express.Router()

router.get('/jogador', jogador.all)
router.post('/jogador', jogador.create)
// mimimi

export {router}
