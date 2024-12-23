const express = require('express');
const { where } = require('sequelize');
const { Todo } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allTodo = await Todo.findAll();
  console.log('allTodo:', allTodo);
  res.json(allTodo);
});

router.post('/add', async (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  const newTodo = await Todo.create({ title, text });
  res.json(newTodo);
});

router.delete('/delete/:id', async (req, res) => {
  console.log('reqparams:', req.params);
  const { id } = req.params;
  await Todo.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;
