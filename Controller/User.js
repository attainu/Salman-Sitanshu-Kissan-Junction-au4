const User = require("../Model/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "agricom";
// Create Operation
router.post("/", async (req, res) => {
  try {
    const { body } = req;

    let user = await User.create(body);
    res.json(user);
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
    await jwt.sign({ user }, secret, (err, token) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          user: { user: user },
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
        res.json({
          user: data,
        });
      }
    });
  } else {
    res.sendStatus(403);
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
