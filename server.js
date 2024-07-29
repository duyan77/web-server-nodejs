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
// const path = require("path");

// ==============================================
const express = require("express");
const path = require("path");
const servers = require("./servers.json").servers;

servers.forEach((server) => {
  const site = express();

  // Cấu hình để phục vụ các tệp tĩnh
  site.use(express.static(path.join(__dirname, "public")));

  // Xử lý yêu cầu đến trang chủ
  // site.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "public", server.name, "index.html"));
  //   res.send(`Hello from ${server.name}`);
  // });

  // Lắng nghe trên cổng tương ứng với từng site
  site.listen(server.port, () => {
    console.log(`${server.name} is running at http://localhost:${server.port}`);
  });
});
