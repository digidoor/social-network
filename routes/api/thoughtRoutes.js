const router = require('express').Router();
//const { Thought } = require('../models');

const {
	getThoughts,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);

module.exports = router;