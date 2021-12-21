const puppeteer = require('puppeteer');
const express = require('express');
const cors = require('cors');

const app = express();

app.get('/creators/OneyPlays/products', cors(), async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(); 
  await page.goto('https://sharkrobot.com/collections/oney');

  const products = await page.evaluate(() => {
    let ul = document.querySelectorAll('.block-grid li'); 

    let products = [];
    ul.forEach(element => {

      const product = {
        title: element.querySelector('.product-title').textContent.replace(/\$\d+\.\d+ USD/, '').replace(/from /g, ''),
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

// app.get('/creators/products/TigerBelly', cors(), async (req, res) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage(); 
//   await page.goto('https://tigerbelly.myshopify.com/collections/all');
//   await page.screenshot()

//   // const products = await page.evaluate(() => {
//   //   products = element.querySelector('.grid__image img').src; 
//     // let ul = document.querySelectorAll('.grid-uniform.product-grid div'); 

//     // let products = [];
//     // ul.forEach(element => {

//     //   const product = {
//     //     title: element.querySelector('.product-grid-title').textContent,
//     //     imgSrc: element.querySelector('.grid__image img').src,
//     //     price: element.querySelector('.price').textContent, 
//     //   };

//     //   if (product != null) {
//     //     products.push(product);
//     //   }
//     // });

//   //   return products
//   // });

//   console.log(products);
//   res.json(products);
//   browser.close();
// });

const port = 5001;

app.listen(port, () => `Server running on port ${port}`);