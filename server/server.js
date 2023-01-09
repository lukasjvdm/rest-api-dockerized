const express = require('express');
const myRoutes = require('./src/number/routes');
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const serverPort = 5000;

//setting up express server

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", myRoutes);

app.listen(serverPort,()=>console.log(`server container listening on port ${serverPort}`));