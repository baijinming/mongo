var express = require('express');
var router = express.Router();
var users = require('../model/users')

/* GET home page. */

//获取数据接口
router.get('/users', function(req, res, next) {
  var { pn = 1, size = 5} = req.query;
  pn = parseInt(pn)
  size = parseInt(size)
  users.find().limit(size).skip((pn-1)*size).then(data => {
    res.json({
        code: 200,
        data
    })
  })
});

//增加数据接口
router.post('/users', (req,res) => {
    var { id, name, sex, friends } = req.body
    users.create({ id, name, sex, friends }).then(data => {
      res.json({
          code: 200,
          data
      })
    })
})

//修改数据接口
router.put('/users/:id', (req,res) => {
  var { id } = req.params;
  var { name } = req.body;
  users.updateOne({ id },{$set: {name} }).then(data => {
    res.json({
        code: 200,
        data
    })
    })
})

//删除数据接口
router.delete('/users', (req,res) => {
  var { id } = req.body;
  users.remove({ id }).then(data => {
    res.json({
        code: 200,
        data
    })
  })
})


module.exports = router;
