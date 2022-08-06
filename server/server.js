require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4040;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routers')

app.use(cors())
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use(router)

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
});