const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const distDir = __dirname + "/dist/beths-coven";
app.use(express.static(distDir));

const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
});

app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});