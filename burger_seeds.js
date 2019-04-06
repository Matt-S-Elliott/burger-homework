module.exports = () => {
    db.Burger.create({
        burger_name: "Cheese Burger",
        devoured: false
    });
    db.Burger.create({
        burger_name: "BBQ Burger",
        devoured: false
    });
    db.Burger.create({
        burger_name: "Breakfast Burger",
        devoured: false
    });
    db.Burger.create({
        burger_name: "Nacho Burger",
        devoured: true
    });
    db.Burger.create({
        burger_name: "Jalapeno Burger",
        devoured: true
    });
}