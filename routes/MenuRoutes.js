const express = require("express");
const router = express.Router();
const foodItems = require("./../Models/MenuItems");

router.get("/", async (req, res) => {
  try {
    const response = await foodItems.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tastype = req.params.tasteType;
    if (tastype == "sour" || tastype == "sweet" || tastype == "spicy") {
      const response = await foodItems.find({ taste: tastype });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newData = new foodItems(data);
    const response = await newData.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const itemid = req.params.id;
    const datatobeupdated = req.body;
    const response = await foodItems.findByIdAndUpdate(
      itemid,
      datatobeupdated,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Bad Request" });
    }
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ error: "Server side error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const itemid = req.params.id;
    const response = await foodItems.findByIdAndDelete(itemid);
    if (!response) {
      return res.send(404).json({ error: "Bad Request" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
