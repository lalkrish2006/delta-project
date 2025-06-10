const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});

router.route("/")
.get(wrapAsync(listingController.index))// Index
.post(isLoggedIn, upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing));


//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListings))//show route
.put(isLoggedIn, isOwner , upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing))//Update Route
.delete(isLoggedIn , isOwner ,wrapAsync(listingController.deleteListing))//Delete listing
;

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListing));


module.exports = router;