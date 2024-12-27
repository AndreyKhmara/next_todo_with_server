const express = require('express');
const { where } = require('sequelize');
const { Task } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allTodo = await Task.findAll();
  res.json(allTodo);
});

router.post('/add', async (req, res) => {
  const { text, isdone } = req.body;
  console.log('req.body:', req.body);
  const newTodo = await Task.create({ text, isdone });
  res.json(newTodo);
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.sendStatus(200);
});

router.patch('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { text, isdone } = req.body;
  try {
    await Task.update({ text, isdone }, { where: { id } });
    const updatedTodo = await Task.findOne({ where: { id } });
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
  }
});

router.patch('/check/:id', async (req, res) => {
  const { id } = req.params;
  const { isdone } = req.body;
  console.log('req.body:', req.body);
  try {
    Task.update({ isdone }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
