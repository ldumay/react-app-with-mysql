const mysql = require('mysql2')

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "react_todo_task"
})

module.exports = connection
