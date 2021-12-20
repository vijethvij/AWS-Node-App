const express = require("express");
const app = express();
const path = require('path');
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./index.html'))
  });
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });