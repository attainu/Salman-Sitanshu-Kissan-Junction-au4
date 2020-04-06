const Product = require('../Model/Product');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/', async (req, res) => {
  try {
    const { body } = req;
    let product = await Product.create(body);
    res.json({
      product
    })
  } catch (err) {
    console.log(err);
  }
})

// Read Operation
router.get('/', async (req, res) => {
  try {
    let product = await Product.findAll();
    // let product = await Product.findAll({ attributes: ['name'] }); //for select query
    res.json({
      product
    })
  } catch (err) {
    console.log(err);
  }
})

// Update Operation
router.put('/:id', async (req, res) => {
  try {
    const { params, body } = req;
    let product = await Product.update(body, { where: { id: params.id } });
    res.json({
      product
    })
  } catch (err) {
    console.log(err);
  }
})

// Delete Operation
router.delete('/:id', async (req, res) => {
  try {
    const { params } = req;

    let product = await Product.destroy({ where: { id: params.id } });
    res.json({
      product
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;