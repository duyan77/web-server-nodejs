const express = require("express");
const path = require("path");
const servers = require("./servers.json").servers;

servers.forEach((server) => {
  const site = express();

  // Cấu hình để phục vụ các tệp tĩnh
  site.use(express.static(path.join(__dirname, "public")));

  // Lắng nghe trên cổng tương ứng với từng site
  site.listen(server.port, () => {
    console.log(`${server.name} is running at http://localhost:${server.port}`);
  });
});
