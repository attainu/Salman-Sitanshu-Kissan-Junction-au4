const Address = require('../Model/Address');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/', async (req, res) => {
  try {
    const { body } = req;
    let address = await Address.create(body);
    res.json({
      address
    })
  } catch (err) {
    console.log(err);
  }
})

// Read Operation
router.get('/', async (req, res) => {
  try {
    let address = await Address.findAll();
    // let address = await Address.findAll({ attributes: ['name'] }); //for select query
    res.json({
      address
    })
  } catch (err) {
    console.log(err);
  }
})

// Update Operation
router.put('/:id', async (req, res) => {
  try {
    const { params, body } = req;
    let address = await Address.update(body, { where: { id: params.id } });
    res.json({
      address
    })
  } catch (err) {
    console.log(err);
  }
})

// Delete Operation
router.delete('/:id', async (req, res) => {
  try {
    const { params } = req;

    let address = await Address.destroy({ where: { id: params.id } });
    res.json({
      address
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;