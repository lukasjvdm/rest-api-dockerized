const getUsers = "SELECT * FROM user_numbers";
const getUser = "SELECT * FROM user_numbers WHERE username = $1";
const checkUserExists = "SELECT u FROM user_numbers u WHERE u.username = $1";
const addUser = "INSERT INTO user_numbers (username,user_number) VALUES ($1, $2)";
const removeUser = "DELETE FROM user_numbers WHERE username = $1"
const updateUserNumber = "UPDATE user_numbers SET user_number = $1 WHERE username = $2";

module.exports = {
    getUsers,
    addUser,
    getUser,
    checkUserExists,
    removeUser,
    updateUserNumber,
};