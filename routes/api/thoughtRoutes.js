const router = require('express').Router();
//const { Thought } = require('../models');

//user the newer callback-to-controller style for thoughts
const {
	getThoughts,
	makeThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(makeThought);

module.exports = router;