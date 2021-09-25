const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  return Category.findAll({ include: [{ model: Product}]});
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  return Category.findAll({where: { id: req.params.id }, include: [{ model: Product}]})
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Tag.destroy({
    where: {id: req.params.id,},
  })
    .then((deleted) => {
      res.json(deleted);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
