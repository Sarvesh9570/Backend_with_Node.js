const mongoose = require("mongoose");

const MenuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "sour", "spicy"],
    required: true,
  },
});

const foodItems = mongoose.model("foodItems", MenuItemsSchema);
module.exports = foodItems;
