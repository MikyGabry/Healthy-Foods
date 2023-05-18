const mongoose = require('mongoose');

const foodsSchema = new mongoose.Schema(
    {
        dishName: {
            type: String,
            required: [true, "It must have a name!"],
            unique: true
        },
        ingredients: {
            type: Array,
            required: [true, "Ingredients go here"]
        },
        cuisine: {
            type: String,
        },
        recipe: {
            type: String,
            required: [true, "We do need the prep instructions"]
        },
        dishImage: {
            type: String,
            //required: [true]
        },
        dishVideo: {
            type: String
        }
    },
    {
        timeseries: true
    }
);

const Foods = mongoose.model('food', foodsSchema);

module.exports = Foods;