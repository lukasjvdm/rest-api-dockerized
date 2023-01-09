const { response } = require('express');
const pgClient = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pgClient.query(queries.getUsers,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUser = (req, res) => {
    const username = req.params.username;
    console.log(username)
    pgClient.query(queries.getUser, [username], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });

};

const addUser = (req, res) => {
    const { username, user_number } = req.body;

    pgClient.query(queries.checkUserExists, [username], (error, results) => {
        if (results.rows.length) {
            res.send("User already exists");
        }

        pgClient.query(queries.addUser, [username, user_number], (error, results) => {
            if (error) throw error;
            res.status(201).send("User inserted successfully");
        });
    });
};

const removeUser = (req, res) => {
    const { username } = req.params.username;

    pgClient.query(queries.removeUser, [username], (error, results) => {
        if (error) throw error;
        res.status(200).send("User successfully removed");
    });
};

const updateUserNumber = (req, res) => {
    const username = req.params.username;
    const { user_number } = req.body;

    pgClient.query(queries.getUser, [username], (error, results) => {
        if(!results.rows.length){
            res.send("User does not exist in the database");
        }

        pgClient.query(queries.updateUserNumber, [user_number, username], (error, results) => {
            if (error) throw error;
            res.status(200).send("User updated successfully");
        });
    });
};



module.exports = {
    addUser,
    getUsers,
    getUser,
    removeUser,
    updateUserNumber,
}
