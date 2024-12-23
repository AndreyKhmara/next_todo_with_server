const express = require('express');
const { where } = require('sequelize');
const { Task } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allTodo = await Task.findAll();
  console.log('allTodo:', allTodo);
  res.json(allTodo);
});

router.post('/add', async (req, res) => {
  const { text, isdone } = req.body;
  const newTodo = await Task.create({ text, isdone });
  res.json(newTodo);
});

router.delete('/delete/:id', async (req, res) => {
  console.log('reqparams:', req.params);
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;
