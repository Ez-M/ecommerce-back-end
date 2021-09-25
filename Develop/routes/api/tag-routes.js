const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  return Tag.findAll({include: [{ model: Product}]});

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  return Tag.findAll({ where: { id: req.params.id }, includ: [{model: product}] });

});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id: req.params.id,},
  })
    .then((deleted) => {
      res.json(deleted);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
