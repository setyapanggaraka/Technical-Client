const express = require("express");
const { verifyPassword } = require("./helpers/bycript");
const { generateToken, verifyToken } = require("./helpers/jwt");
const { User } = require("./models");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username) throw { name: "Username is required" };
    if (!password) throw { name: "Password is required" };
    const findUser = await User.findOne({ where: { username } });
    if (!findUser) throw { name: "Invalid Username/ Password" };
    const checkPassword = verifyPassword(password, findUser.password);
    if (!checkPassword) throw { name: "Invalid Username/ Password" };
    const payload = {
      Userid: "ifabula",
      Scope: "user",
    };
    const access_token = generateToken(payload);
    res.status(200).json({ access_token });
  } catch (err) {
    next(err);
  }
});

app.use(async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: "Invalid Token" };
    const checkToken = verifyToken(access_token);
    console.log(checkToken, ">>>");
    if (checkToken.Userid !== "ifabula" && checkToken.Scope !== "user")
      throw { name: "Invalid Token" };
    next();
  } catch (err) {
    next(err);
  }
});

app.get("/users", async (req, res, next) => {
  try {
    const showUsers = await User.findAll();
    res.status(200).json(showUsers);
  } catch (err) {
    next(err);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const showUsers = await User.findByPk(id);
    res.status(200).json(showUsers);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  let code = 500;
  let message = "Internal Server Error";
  console.log(err);

  if (err.name === "Username is required") {
    code = 400;
    message = err.name;
  } else if (err.name === "Password is required") {
    code = 400;
    message = err.name;
  } else if (err.name === "Invalid Username/ Password") {
    code = 400;
    message = err.name;
  } else if (err.name === "Invalid Token" || err.name === "JsonWebTokenError") {
    code = 401;
    message = "UNAUTHORIZED";
  }
  res.status(code).json({ message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
