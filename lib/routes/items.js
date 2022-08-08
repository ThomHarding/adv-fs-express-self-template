const { Router } = require('express');
const Item = require('../models/Item');
const authorizeItem = require('../middleware/authorizeItem');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const item = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(item);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      res.json(items);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', authorizeItem, async (req, res, next) => {
    try {
      const item = await Item.updateById(req.params.id, req.body);
      res.json(item);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', authorizeItem, async (req, res, next) => {
    try {
      const item = await Item.delete(req.params.id);
      res.json(item);
    } catch (e) {
      next(e);
    }
  });