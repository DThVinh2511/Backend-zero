const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query('SELECT * FROM Users');
  return results;
}
const getUserById = async (userId) => {
  const [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
  const user = results.length > 0 ? results[0] : {};
  return user;
}
const updateUser = async (params) => {
  const {
    userId,
    fname,
    email,
    city
  } = params;
  console.log(userId);
  const [results, fields] = await connection.query(
    `UPDATE Users
    SET emdil = ?, city = ?, name = ?
    WHERE id = ?
    `,
    [email, city, fname, userId]
  )
}
module.exports = {
  getAllUsers,
  getUserById,
  updateUser
}