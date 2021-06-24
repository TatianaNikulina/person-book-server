const express = require("express");
// const bodyParser = require('body-parser')
const cors = require("cors");
const PORT = 8080;
const db = require('./models');

const authRoutes = require('./routes/auth.routes')
const {authJwt} = require('./middleware')

const app = express();

let corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();
authRoutes(app)

require('./routes/user.routes')(app);

app.get("/", (req, res) => {
    res.json({ message: "Good morning!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});