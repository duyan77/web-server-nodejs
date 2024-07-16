// const express = require("express");
// const app = express();
// const port = 3000;
// const router = require("./apiRouter.js");

// app.set("view engine", "ejs"); // setting the view engine to ejs

// // app.get("/", (req, res) => {
// //   res.render("index", { text: "Hello World!" }); // rendering the index.ejs file
// // });

// app.use(express.static("public")); // using the public folder

// app.use("/router", router); // using the router

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// ==============================================
const express = require("express");
const vhost = require("vhost");
const path = require("path");
const servers = require("./serverConfig.json").servers;

const app = express();

// Cho phép truy cập qua địa chỉ IP

servers.forEach((server) => {
  const site = express();

  site.get("/", (req, res) => {
    res.send(`Welcome to ${server.name}`);
  });

  // Lắng nghe trên cổng tương ứng với từng site
  site.listen(server.port, () => {
    console.log(
      `Server ${server.name} is running at http://localhost:${server.port}`
    );
  });
});

// Sử dụng express.static để phục vụ các tệp tĩnh từ thư mục public
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", site1); // Mặc định truy cập site1 qua địa chỉ IP
