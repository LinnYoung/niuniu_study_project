const MySql = require("mysql");

class DB {
  constructor() {
    const mysql = MySql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "bull_data",
    });
    mysql.connect();
    console.log("连接数据库");
    this._mysql = mysql;
  }

  getUserInfo(id) {
    return new Promise((resole, reject) => {
      this._mysql.query(
        "select * from user_info where id =" + id,
        (err, res) => {
          if (err) {
            console.log("err:", err);
          } else {
            console.log("res： ", res);
            resole(res);
          }
        }
      );
    });
  }
}

module.exports = DB;
