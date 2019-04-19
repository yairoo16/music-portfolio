// Install express server

const express = require('express');

const path = require('path');

const app = express();

// Serve only the static files fom the dist diectory

// Replace the '/dist/<to_your_project_name>'

app.use(express.static(__dirname + '.dist/music-portfolio '));

app.get('*', function(req, res) {

    // Replace the '/dist/<to_your_project_name>/index.html'

    res.sendFile(path.join(__dirname+ '/dist/music-portfolio/index.html'));
});

app.listen(process.env.PORT || 8080);