const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    try {
      let owners = await ownerModel.find();
      if (owners.length > 0) {
        return res
          .status(403)
          .send("You don't have permission to create a new owner");
      }

      let { fullname, email, password } = req.body;

      let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });

      res.status(201).send(createdOwner);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
}

router.get("/", function (req, res) {
  res.send("hey its working");
});

module.exports = router;
