const mysql = require('mysql');

module.exports = mysql.createPool({
  connectionLimit : 10,
  host            : '193.112.253.42',
  user            : 'develop',
  password        : 'Liuqi4141/',
  database        : 'blog'
})
