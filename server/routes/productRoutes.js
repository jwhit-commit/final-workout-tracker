app.get('/api/products', (req, res) => {
    Product.find({}, (err, products) => {
      if (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(products);
      }
    });
  });
  