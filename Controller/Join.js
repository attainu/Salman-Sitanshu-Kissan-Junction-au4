const User = require('../Model/User');
const Address = require('../Model/Address');
const Product = require('../Model/Product');
const Order = require('../Model/Order');
const Sold = require('../Model/Sold');
const ConnectProduct = require('../Model/ConnectProduct');
const express = require("express");
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    let user = await User.findAll({
      include: [{
        model: Address,
      },
      {
        model: ConnectProduct,
        include: [{
          model: Product
        }],
      }]
    })
    res.json({ user })
  }
  catch (error) {
    res.json({
      error
    })
  }
})

router.get('/:id', async (req, res) => {
  const {id} = req.params

  try {
    let user = await User.findOne({
      where: {
        id
      },
      include: [{
        model: Address,
      },
      {
        model: ConnectProduct,
        include: [{
          model: Product
        }]
      }]
    })
    res.json({
      user
    })
  }
  catch (error) {
    res.json({
      error
    })
  }
})

module.exports = router;