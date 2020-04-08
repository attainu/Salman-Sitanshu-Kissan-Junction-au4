const User = require('../Model/User');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/', async (req, res) => {
  try {
    const { body } = req;
    let user = await User.create(body);
    res.json(user);
  } catch (err) {
    res.json(err)
  }
})

// Read All Operation
router.get('/', async (req, res) => {
  try {
    let user = await User.findAll();
    res.json(user);
  } catch (err) {
    res.json(err)
  }
})

// Read One Operation
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findByPk(id);
    res.json(user);
  } catch (err) {
    res.json(err)
  }
})

// Update Operation
router.put('/:id', async (req, res) => {
  try {
    const { params, body } = req;
    let user = await User.update(body, { where: { id: params.id } });
    res.json(user);
  } catch (err) {
    res.json(err)
  }
})

// Delete Operation
router.delete('/:id', async (req, res) => {
  try {
    const { params } = req;
    let user = await User.destroy({ where: { id: params.id } });
    res.json(user);
  } catch (err) {
    res.json(err)
  }
})

module.exports = router;