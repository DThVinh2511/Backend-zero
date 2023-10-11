const connection = require('../config/database');
const {
  getAllUsers,
  getUserById,
  updateUser
} = require('../services/CRUDservice');

const getHomePage = async (req, res) => {
  const results = await getAllUsers();
  res.render('home.ejs', {
    listUsers: results
  });
}

const getABC = (req, res) => {
  // res.send('Hello World!')
  res.render('sample.ejs');
}
const getCreateUsers = async (req, res) => {
  console.log(">>> check users", req.body);
  let {
    fname,
    email,
    city
  } = req.body;
  const [results, fields] = await connection.query(
    `INSERT INTO Users (emdil, name, city) 
    VALUES( ?, ?, ?)`,
    [email, fname, city],
  );
  res.redirect('/')
}
const getCreatePage = (req, res) => {
  res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  const results = await getUserById(userId);
  res.render('edit.ejs', {
    user: results
  });
}
const updateUsers = async (req, res) => {
  const params = req.body;
  console.log(params);
  await updateUser(params);
  res.redirect('/');
}
module.exports = {
  getHomePage,
  getABC,
  getCreateUsers,
  getCreatePage,
  getUpdatePage,
  updateUsers
}