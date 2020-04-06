const UserProduct = require('../Model/ConnectProduct');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/', async (req, res) => {
  try {
    const { body } = req;
    let userproduct = await UserProduct.create(body);
    res.json({
      userproduct
    })
  } catch (err) {
    console.log(err);
  }
})

// Read Operation
router.get('/', async (req, res) => {
  try {
    let userproduct = await UserProduct.findAll();
    // let userproduct = await UserProduct.findAll({ attributes: ['name'] }); //for select query
    res.json({
      userproduct
    })
  } catch (err) {
    console.log(err);
  }
})

// Update Operation
router.put('/:id', async (req, res) => {
  try {
    const { params, body } = req;
    let userproduct = await UserProduct.update(body, { where: { id: params.id } });
    res.json({
      userproduct
    })
  } catch (err) {
    console.log(err);
  }
})

// Delete Operation
router.delete('/:id', async (req, res) => {
  try {
    const { params } = req;

    let userproduct = await UserProduct.destroy({ where: { id: params.id } });
    res.json({
      userproduct
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;