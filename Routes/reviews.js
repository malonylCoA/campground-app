const express = require('express');
const router = express.Router({mergeParams: true}); //now we have access to the params
const Review = require('../models/reviews')
const Campground = require('../models/campground');
const reviews = require('../controllers/reviews')
const ExpressError = require('../utils/ExpressError')
const catchAsync = require('../utils/catchAsync')
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')

 

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview)) 

module.exports = router;