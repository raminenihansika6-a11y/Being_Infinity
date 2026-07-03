const express = require('express')
const app = express()
// change this
// const PORT = 3002;
const PORT = process.env.PORT || 3002
// web server;
app.use(express.static("frontend"))
app.listen(PORT, function() {
    console.log("successfully running at http://localhost:" + PORT)
})

