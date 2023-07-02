const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const firstAidInstructionSchema = new Schema({
  firstAidId: {
    type: String,
    unique: true,
    required: true,
  },
  firstAidName: {
    type: String,
    required: true,
  },
  markdownContent: {
    type: String,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

firstAidInstructionSchema.plugin(uniqueValidator);
module.exports = mongoose.model(
  "FirstAidInstruction",
  firstAidInstructionSchema
);
