import connect from "../config/connection.js"

let jogador = {}
const con = await connect()

jogador.all = async function(req, res) {
    try {
        let jogadores = await con.query("SELECT * from jogador;")   
        res.send(jogadores[0])
    } catch (e) {
     console.log(" erro consulta....", e)   
     
    }
}

jogador.create = async function(req, res) {
    try {
        let jogador = req.body
        let sql = "INSERT INTO jogador (codigo_jogador, nome_jogador, habilidade_principal) VALUES (?,?,?);"
        let values = [jogador.codigo_jogador, jogador.nome_jogador, jogador.habilidade_principal]
        let result = await con.query(sql, values)
        res.send({
            status:"Inserção efetuada com sucesso!",
            result:result
        })
    } catch (e) {
        console.log("Erro ao inserir dados", e)
    }
}

jogador.update = async function(req, res) {
    try {
        let codigo_jogador = req.params.codigo_jogador
        let jogador = req.body
        let sql = "UPDATE jogador SET nome_jogador=?, habilidade_principal=? WHERE codigo_jogador=?;"
        let values = [jogador.nome_jogador,  jogador.habilidade_principal, codigo_jogador, jogador]
        let result = await con.query(sql, values)
        res.send({
            status:"Atualização do Jogador efetuada com sucesso!",
            result:result
        })

    } catch (e) {
        console.log("Erro ao Atualizar os dados", e)
    }
}

export {jogador}