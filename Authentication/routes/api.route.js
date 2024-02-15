const router = require("express").Router();
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

router.get("/getdata", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

///authentication
const secretKey = "secrete";
router.post("/auth", (req, res, next) => {
  console.log("reqqq>>>", req.body);
  const user = {
    id: 1,
    username: req.body.username,
    email: req.body.email,
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    res.cookie("test", "okkkkkkk");
    res.json({
      token,
    });
  });
});

router.post("/profile", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData1) => {
    if (err) {
      res.send({ result: "invalid token" });
    } else {
      res.json({
        message: "Profile accessed",
        authData1,
      });
    }
  });
});

function verifyToken(req, res, next) {
  console.log("req5555555555>>>>>>>>>>>", req.body);
  const token = req.body.token1;
  console.log("bearerrrrr", token);
  if (typeof token !== "undefined") {
    req.token = token;
    next();
  } else {
    res.send({
      result: "token is not valid",
    });
  }
}

module.exports = router;
