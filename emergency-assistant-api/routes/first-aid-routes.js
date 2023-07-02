const express = require("express");
const firstAidController = require("../controllers/first-aid-controller");

const router = express.Router();

router.get('/getAll', firstAidController.getAllInstructions)
router.get('/getById/:id', firstAidController.getInstructionById)
router.post('/create', firstAidController.createInstruction)
// router.put('/update/:id')
// router.delete('/delete/:id')

module.exports = router;
