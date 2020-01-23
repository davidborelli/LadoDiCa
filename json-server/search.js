const jsonDB = require('./db');

class Search {
  find(req, res) {
    const { key, searchBy } = req.body;

    const products = jsonDB[key];

    const resultSearchName = products.filter(product => {
      return product.name.toLowerCase().includes(searchBy.toLowerCase());
    });

    const resultSearchRef = products.filter(product => {
      return product.ref.toLowerCase().includes(searchBy.toLowerCase());
    });

    const resultSearch = resultSearchName.concat(resultSearchRef);

    return res.json(resultSearch);
  }
}

module.exports = new Search();
