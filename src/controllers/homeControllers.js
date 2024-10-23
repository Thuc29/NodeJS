const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render('home.ejs')
};
const getThuctd = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log('>>> result: ', req.body)
   res.send('create add new user')
}

module.exports = {
  getHomePage,
  getThuctd,
  postCreateUser
};
