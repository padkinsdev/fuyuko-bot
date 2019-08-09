const sql = require("sqlite3")

module.exports.init = function(){
  db = new sql.Database("./tmp/dataDB.sqlite", err => {
    if (err) {
      console.log("Failed to connect to database")
    } else {
      console.log("Successfully connected to database")
    }
  })
  db.run(`CREATE TABLE IF NOT EXISTS users (
  userId INTEGER PRIMARY KEY,  
  msgsSent INTEGER, 
  level INTEGER,
  balance INTEGER)`)
  return db;
}
