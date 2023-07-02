const mongoose = require("mongoose");
require("dotenv").config();

const Superuser = require("./models/Superuser");

mongoose
  .connect(process.env.MONGO_DB_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Prompt for username and password
    const prompt = require("prompt-sync")();
    const username = prompt("Enter username: ");
    const password = prompt("Enter password: ");

    // Create a new admin user
    const adminUser = new Superuser({
      username: username,
      password: password,
    });

    // Save the user to the database
    try {
      const savedUser = await adminUser.save();
      console.log("Superuser saved successfully");
    } catch (error) {
      console.error("Error saving superuser:", error);
    }
    mongoose.disconnect();
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
