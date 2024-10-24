const connection  = require("../config/database")
const getAllUsers = async() => {
       let [result, fields] = await connection.query('select * from Users')
     return result;
}

const getUserById = async (userId) => {
     let [result, fields] = await connection.query('select * from Users where id = ?', [userId])
  let user = result && result.length > 0 ? result[0] : {};
     return user;
}
const updateUserById = async (email, name, city, userId) => {
     let [result, fields] = await connection.query(
          `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
          [email, name, city, userId]);
}

const importUser = async (email, name, city) => {
     let [result, fields] = await connection.query(
          `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
          [email, name, city])

}

const deleteUserById = async (userId) => {
     let [result, fields] = await connection.query(
          `DELETE FROM Users WHERE id = ?`,
          [userId])
}

module.exports = {
     getAllUsers,
     getUserById,
     updateUserById,
     importUser,
     deleteUserById
}