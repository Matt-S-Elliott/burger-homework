const express = require("express");
db = require("./models");
burger_seeds = require("./burger_seeds");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes")(app);

db.sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log("Listening on port: " + PORT);
        //Dummy data to be loaded after table is reset.
        burger_seeds();
    })
}
)