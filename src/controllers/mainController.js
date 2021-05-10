const path = require('path');
const homePath = path.resolve(__dirname,'../views/index.html');
const aboutPath = path.resolve(__dirname,'../views/about.html');

let mainController = {
    showHome: (req,res) => {
        res.sendFile(homePath);
    },
    showAbout: (req,res) => {
        res.sendFile(aboutPath);
    }
}

module.exports = mainController;