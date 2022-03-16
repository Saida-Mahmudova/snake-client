const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to the server!");
    conn.write("Name: SM");
    setTimeout(() => {
      conn.write("Move: up");
    }, 2000)
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};
module.exports = connect;