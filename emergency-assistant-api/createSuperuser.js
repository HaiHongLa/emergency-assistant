const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
require("dotenv").config();

const superuserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

superuserSchema.plugin(uniqueValidator);

superuserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

const Superuser = mongoose.model("Superuser", superuserSchema);

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
