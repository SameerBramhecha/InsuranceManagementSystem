const config = {
  user: "test", // sql user
  password: "test123", //sql user password
  server: "127.0.0.1", // if it does not work try- localhost
  database: "db1",
  trustServerCertificate: true,
  encrypt: false,
  dialect: "mssql",
  options: {
    trustedconnection: true,
    enableArithAbort: true,

    // instancename:  'SQLEXPRESS'  // SQL Server instance name
  },
  port: 64485,
};

const sql = require("mssql");

//'mssql://User:Password@ComputerName/\Instance/DatabaseName'
//Following example:
// const config = 'mssql://sa:123456@Vinicius/\SA/company';

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to SQLServer...");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

module.exports = {
  sql,
  poolPromise,
};
