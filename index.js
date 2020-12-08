const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();


// Setup Express for use
const app = express();
app.use(express.json());    // This allows us to use JSON.
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`the server is listening at ${PORT}!`)
});