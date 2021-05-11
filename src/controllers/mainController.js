let mainController = {
    showHome: (req,res) => {
        res.render('index');
    },
    showAbout: (req,res) => {
        res.render('about');
    }
}

module.exports = mainController;