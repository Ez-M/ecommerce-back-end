const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
  const cat = await Category.findAll({ include: [{ model: Product}]});
  res.json(cat);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const cat = await Category.findAll({where: { id: req.params.id }, include: [{ model: Product}]})
  res.json(cat);
});

router.post('/', async (req, res) => {
  // create a new category
 const cat = await Category.create(req.body)
 res.json(cat);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const cat = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.json(cat);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id,},
  })
    .then((deleted) => {
      res.json(deleted);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
