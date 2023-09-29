const express = require('express');
const mongodbUrl='mongodb+srv://jyotishmanpathak11:13683255@cluster0.tuaw33f.mongodb.net/?retryWrites=true&w=majority'
const router = express.Router(); // Create a router instance

router.get('/', (req, res) => {
    res.send("Hello, this is product listing");
});

module.exports = router; // Export the router
