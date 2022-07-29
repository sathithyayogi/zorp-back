require("dotenv").config();
const express = require("express");
var router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const connect = require('./db/connect');
const TemplateRoute = require("./route/TemplateRoute");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(cors({
    origin: "*"
}));



app.listen(process.env.PORT || 5000, err => {
    console.log(`Server listening `);

    connect();

});

app.use("/api/template", TemplateRoute);


app.get('/health-check', async function (req, res) {
    res.send("breathing ....");
})



module.exports = router;