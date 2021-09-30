// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',

});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});


Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'pro_tag'
});

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tag_pro'
});



// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//     through: "productTag",
//     as: "tag",
//     foreignKey: 'tag_id',
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//     through: "productTag",
//     as: "product",
//     foreignKey: 'product_id',
// });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
