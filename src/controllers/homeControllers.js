const getHomePage = (req, res) => {
       res.send('Hello World & ThucTD')
}
const getThuctd = (req, res) => {
     res.render('sample.ejs')
} 
module.exports = {
     getHomePage,
     getThuctd
}