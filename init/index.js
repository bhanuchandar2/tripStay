
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initdata = require('./realdata'); // your file exporting { data: [...] }
const dotenv=require("dotenv").config({ path: "../.env" });
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected to DB"))
  .catch(err => console.log(err));

const initdb = async () => {
  try {
    await Listing.deleteMany({});

    const updatedData = initdata.data.map(obj => ({
      ...obj,                  
      price: Number(obj.price), 
      owner: "6a741566e612280b01a31cec"
    }));

    await Listing.insertMany(updatedData);
    console.log("Database initialized successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

initdb();