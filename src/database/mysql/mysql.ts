const mysql = require("mysql");

async function table(tableName, dataSchema) {
  let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "data",
  });

  connection.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }

    console.log("Connected to the MySQL server.");
  });

  async function createTable() {
    let vc = [];
    for ([k, v] of Object.entries(dataSchema.schema)) {
      vc.push(k);
    }
    console.log(vc.join(", "), "this is the keys of the schema");
    const create_table_schema = `create table if not exists todos(
      id int primary key auto_increment,
      title varchar(255)not null,
      completed tinyint(1) not null default 0
  )`;
  }
}
