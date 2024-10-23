const connection = require("../config/database");
const { getAllUsers, getUserById, updateUserById, importUser} = require("../services/CRUDService")
const getHomePage = async (req, res) => {
  let result = await getAllUsers();
  return res.render('home.ejs', {listU: result})
};


const getCreatePage = (req, res) => {
  res.render('create.ejs')
}

const getUpdatePage = async(req, res) => {
  // req.params()
  const userId = req.params.id
 let user = await getUserById(userId)
  res.render('update.ejs', {userEdit: user})
}

const postUpdateUser = async (req, res) => {
  // let email = req.body.email
  // let name = req.body.name
  // let city = req.body.city
  let { userId, email, name, city } = req.body
  await updateUserById( email, name, city, userId )
  res.redirect('/')
}

const postCreateUser = async (req, res) => {
  // let email = req.body.email
  // let name = req.body.name
  // let city = req.body.city
  let { email, name, city } = req.body
  await importUser(email, name, city)
  res.redirect('/')
}

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  updateUserById
};
