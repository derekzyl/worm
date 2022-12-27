const mysql = require("mysql");
class MysqlDatabase {
  data = null;
  constructor(data, name) {
    {
      this.data = data;
      this.name = name;

      var connection = mysql.createConnection({
        host: "example.org",
        user: "bob",
        password: "secret",
      });
    }
  }

  connectMysql() {
    const a = mysql.createConnection(this.data);
  }

  findById() {}
  find() {}
  create() {}
  update() {}
  updateMany() {}
  delete() {}

  createMany() {}
}

fetchAll();
