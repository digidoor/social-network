const router = require('express').Router();
//const { Thought } = require('../models');

//user the newer callback-to-controller style for thoughts
const {
	getThoughts,
	getThought,
	makeThought,
	updateThought,
	deleteThought,
	//makeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(makeThought);

router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);

//router.route('/:thoughtId/reactions').post(makeReaction);

module.exports = router;