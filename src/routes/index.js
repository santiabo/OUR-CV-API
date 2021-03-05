const { Router } = require('express');
const router = Router();

// import all routers;
const user = require("./user.js");
const education = require("./education.js");
const experience = require("./experience");
const summary = require("./summary");
const skills = require("./skills");
const passions = require("./passions"); 
const auth = require("./auth");
const curriculum = require("./curriculum");

// load each router on a route;
router.use('/user', user);
router.use('/auth', auth);
router.use('/education', education);
router.use('/experience', experience);
router.use('/summary', summary);
router.use('/skills', skills);
router.use('/passions', passions); 
router.use('/curriculum', curriculum);

module.exports = router;