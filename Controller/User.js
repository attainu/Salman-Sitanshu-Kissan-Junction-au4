const User = require("../Model/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "agricom";
// route for create profile using bycrypt
router.post("/", async (req, res) => {
  try {
    const { body } = req;

    let user = await User.create(body);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

//route for create profile using bycrypt
router.post("/signupBycrpyt", async (req, res) => {
  const { body } = req;
  try {
    await bcrypt.hash(body.password, 10, async function (err, hash) {
      body.password = hash;
      let user = await User.create(body);
      res.json(user);
    });
  } catch (err) {
    res.json(err);
  }
});

router.post("/loginverify", async (req, res) => {
  try {
    const { body } = req;

    let user = await User.findOne({
      where: {
        email: [body.email],
      },
    });

    await bcrypt.compare(body.password, user.password, function (err, result) {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
});

// Read All Operation
router.get("/", async (req, res) => {
  try {
    let user = await User.findAll();
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

router.post("/login", async (req, res) => {
  const { body } = req;
  try {
    let user = await User.findAll({
      where: {
        email: [body.email],
        password: [body.password],
      },
    });
    const data = user[0].dataValues;
    console.log("Login BE", data);
    jwt.sign(data, secret, (err, token) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          data,
          token: token,
        });
      }
    });
  } catch (err) {
    res.json(err);
  }
});

router.get("/tokenverify", (req, res) => {
  const bearer = req.headers["authorization"];
  if (bearer) {
    const bearerToken = bearer.split(" ");
    const token = bearerToken[1];
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json(data);
      }
    });
  } else {
    res.sendStatus(403);
  }
});

router.post("/google", async (req, res) => {
  try {
    const { body } = req;

    const [user] = await User.findOrCreate({
      where: { googleId: body.googleId },
      defaults: body,
    });
    const data = user.dataValues;
    console.log("Google BE", data);
    jwt.sign(data, secret, (err, token) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          data,
          token: token,
        });
      }
    });
  } catch (err) {
    res.json(err);
  }
});

// Read One Operation
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findByPk(id);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

// Update Operation
router.put("/:id", async (req, res) => {
  try {
    const { params, body } = req;
    let user = await User.update(body, { where: { id: params.id } });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

// Delete Operation
router.delete("/:id", async (req, res) => {
  try {
    const { params } = req;
    let user = await User.destroy({ where: { id: params.id } });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
