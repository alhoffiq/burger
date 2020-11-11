const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/cats", function (req, res) {
    cat.insertOne([req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    cat.updateOne(condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;