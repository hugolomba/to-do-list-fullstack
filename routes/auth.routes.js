const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const User = require("../models/User.model");

//rotas de autenticação
router.get("/", (req, res, next) => {
  res.send("Tudo certo aqui"); // teste
});

//rotas de cadastro

router.get("/signup", (req, res, next) => {
  res.send("Exibe a página de cadastro"); // teste
});

router.post("/signup", (req, res, next) => {
  const { username, password, coverImgUrl, profileImgUrl } = req.body;

  if (!username || !password) throw new Error("Informações Obrigatórias");

  // User.find({ username: username }).then((user) => {
  //   if (user[0].username) throw Error("Usuário já existe");
  // });

  // bcrypt
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hashSync(password, salt))
    .then((hashedPassword) => {
      // console.log(`Password hash: ${hashedPassword}`);
      // res.json(req.body);
      return User.create({
        username,
        passwordHash: hashedPassword,
        coverImgUrl,
        profileImgUrl,
      });
    })
    .then((userFromDB) => {
      console.log("Ususário Criado: ", userFromDB);
      res.json(userFromDB);
    })
    .catch((error) => next(error));
});

// rotas de login

module.exports = router;
