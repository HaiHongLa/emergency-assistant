const bcrypt = require("bcrypt");
const FirstAidInstruction = require("../models/FirstAidInstructions");
const Superuser = require("../models/Superuser");

exports.getAllInstructions = async (req, res) => {
  try {
    const instructions = await FirstAidInstruction.find();
    return res.status(200).json(instructions);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while retrieving the instructions.",
      error: error,
    });
  }
};

exports.getInstructionById = async (req, res) => {
  const instructionId = req.params.id;
  try {
    const instruction = await FirstAidInstruction.findById(instructionId);
    if (!instruction) {
      return res.status(404).json({ message: "Instruction not found." });
    }
    return res.status(200).json(instruction);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while retrieving the instruction.",
      error: error,
    });
  }
};

exports.createInstruction = async (req, res) => {
  const { username, password, firstAidId, firstAidName, markdownContent } =
    req.body;
  try {
    const superuser = await Superuser.findOne({ username: username });
    if (!superuser) {
      return res.status(401).json({ message: "Invalid username or password." });
    }
    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, superuser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password." });
    }
    // Create the new first aid instruction
    const instruction = new FirstAidInstruction({
      firstAidId: firstAidId,
      firstAidName: firstAidName,
      markdownContent: markdownContent,
    });
    // Save the instruction to the database
    const savedInstruction = await instruction.save();

    return res.status(201).json({
      message: "First aid instruction created successfully.",
      instruction: savedInstruction,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating the first aid instruction.",
      error: error,
    });
  }
};

exports.deleteInstructionById = async (req, res) => {
  const instructionId = req.params.id;
  try {
    const deletedInstruction = await FirstAidInstruction.findByIdAndDelete(
      instructionId
    );
    if (!deletedInstruction) {
      return res.status(404).json({ message: "Instruction not found." });
    }
    return res.status(200).json({
      message: "Instruction deleted successfully.",
      instruction: deletedInstruction,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while deleting the instruction.",
      error: error,
    });
  }
};
