require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

const { loadNuxt, build } = require('nuxt');
const isDev = process.env.NODE_ENV !== 'production';
async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start');
  app.use(nuxt.render);
  if (isDev) {
    build(nuxt);
  }
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

start();
