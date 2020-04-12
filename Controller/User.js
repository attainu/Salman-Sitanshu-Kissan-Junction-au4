const User = require("../Model/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "agricom";
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");
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

/* Forget Password Routes*/

//-------------------------------------For User Forgot Password--------------------------------//
/*router.forgot = function (req, res, next) {
  async.waterfall(
    [
      function (done) {
        crypto.randomBytes(20, function (err, buf) {
          var token = buf.toString("hex");
          done(err, token);
        });
      },
      function (token, done) {
        User.register.findOne({ email: req.body.email }, function (err, user) {
          if (!user) {
            return res.json({
              flag: false,
            });
          }

          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

          user.save(function (err) {
            done(err, token, user);
          });
        });
      },
      function (token, user, done) {
        var smtpTransport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "eagle.ecommerce.app@gmail.com",
            pass: "fKnyKSjgjSPHRkFkdMd!5xDka9cxbxna7Grvv6H7F$t*YY!UCz",
          },
        });
        var mailOptions = {
          to: user.email,
          from: "eagle.ecommerce.app@gmail.com",
          subject: "Ecommerce Password Reset",
          text:
            "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
            "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
            "http://" +
            req.headers.host +
            "/reset/" +
            token +
            "\n\n" +
            "If you did not request this, please ignore this email and your password will remain unchanged.\n",
        };
        smtpTransport.sendMail(mailOptions, function (err) {
          console.log("mail sent");

          done(err, "done");
        });
      },
    ],
    function (err) {
      if (err) return next(err);
      return res.render("forgot", {
        flag: true,
      });
    }
  );
};

router.verify = function (req, res) {
  console.log(req.params.token);
  User.register.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    },
    function (err, user) {
      if (!user) {
        return res.redirect("/forgot");
      }
      res.render("reset", { token: req.params.token });
    }
  );
};
router.token = function (req, res) {
  console.log("reached");
  async.waterfall(
    [
      function (done) {
        User.register.findOne(
          {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
          },
          function (err, user) {
            if (!user) {
              return res.redirect("back");
            }
            if (req.body.password === req.body.confirm) {
              user.password = req.body.password;

              user.resetPasswordToken = undefined;
              user.resetPasswordExpires = undefined;

              user.save(function (err) {
                req.logIn(user, function (err) {
                  done(err, user);
                });
              });
            } else {
              return res.redirect("back");
            }
          }
        );
      },
      function (user, done) {
        var smtpTransport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "eagle.ecommerce.app@gmail.com",
            pass: "fKnyKSjgjSPHRkFkdMd!5xDka9cxbxna7Grvv6H7F$t*YY!UCz",
          },
        });
        var mailOptions = {
          to: user.email,
          from: "learntocodeinfo@mail.com",
          subject: "Your password has been changed",
          text:
            "Hello,\n\n" +
            "This is a confirmation that the password for your account " +
            user.email +
            " has just been changed.\n",
        };
        smtpTransport.sendMail(mailOptions, function (err) {
          done(err);
        });
      },
    ],
    function (err) {
      res.redirect("/user-login");
    }
  );
};*/

module.exports = router;
