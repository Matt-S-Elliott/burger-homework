const db = require("../models");

module.exports = app => {
    app.get("/", (req, res) => {
        db.Burger.findAll().then(results => {
            res.render("index", { burgers: results });
        });
    });

    app.post("/api/burger", (req, res) => {
        console.log(req.body);
        db.Burger.update(
            {devoured: true}, 
            {where: { id: req.body.id }})
            .then(results => res.status(200).end());
    });

    app.post("/api/newBurger", (req, res) => {
        db.Burger.create({
            devoured: false,
            burger_name: req.body.burger_name
        }).then(results => {
            res.redirect("/");
        });
    });

    app.get("/api/resetDB", (req, res) => {
        db.Burger.destroy({
            where: {}
        }).then(() => {
            res.redirect("/");
        })
    })
}