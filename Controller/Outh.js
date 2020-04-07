const express = require("express");
const router = express.Router();
const passport = require('passport')

// auth with login /auth/google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

// Callback route for google redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  try {
    res.json(req.user);
  }
  catch (err) {
    res.json(err);
  }
})

module.exports = router;