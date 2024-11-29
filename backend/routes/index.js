var express = require('express');
var router = express.Router();
var { pro } = require('../model/model')

//获取pro async await
router.get('/ls', async (req, res) => {
  let ls = await pro.find()
  res.send({
    status: 200,
    ls
  })
})

module.exports = router;
