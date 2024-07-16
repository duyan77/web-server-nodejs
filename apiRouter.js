const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router is working!");
});

router.get("/about", (req, res) => {
  res.send("About page!");
});

router.get("/contact", (req, res) => {
  res.send("Contact page!");
});

router.get("/services", (req, res) => {
  res.send("Services page!");
});

// router có parameters
// có params nên để ở cuối để tránh bị trùng với các route khác
router.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
