const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	port: '3306',
	database: 'node_blog'
})

connection.connect()

var id = parseInt(Math.random() * 10000)

connection.query('INSERT INTO article (id, title, content, author) VALUES (?, ? ,? , ?)', [
		id,
		'标题啊' + id,
		'内容啊' + id,
		'作者啊：' + id
	])

connection.end()
