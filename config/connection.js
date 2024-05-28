import mysql2 from "mysql2/promise"

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const mysql = mysql2
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/esportes")
    
    console.log("Conectado ao Banco MySQL")
    global.connection = connection
    return connection
}
export default connect
 