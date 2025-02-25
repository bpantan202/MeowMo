const express = require("express");
const {getMeows, getMeow, createMeow, updateMeow, deleteMeow} = require('../controllers/meow')

const router = express.Router();

router.route('/').get(getMeows).post(createMeow)
router.route('/:id').get(getMeow).put(updateMeow).delete(deleteMeow)

module.exports = router;