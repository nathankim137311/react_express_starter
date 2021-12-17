const puppeteer = require('puppeteer');
const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/oney', cors(), async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(); 
  await page.goto('https://sharkrobot.com/collections/oney');

  const products = await page.evaluate(() => {
    // let ul = document.querySelectorAll('.block-grid .product-title');
    let ul = document.querySelectorAll('.block-grid li'); 

    let products = [];
    ul.forEach(element => {

      const product = {
        title: element.querySelector('.product-title').textContent,
        imgSrc: element.querySelector('.thumb img').src,
        price: element.querySelector('.money').textContent, 
      };

      if (product != null) {
        products.push(product);
      }
    });

    return products
  });

  console.log(products);
  res.json(products);
  browser.close();
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);