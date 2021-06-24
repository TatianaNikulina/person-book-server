const db = require('../models');
const User = db.users;

exports.findAll = (req, res) => {
    User.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users'
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    User.findByPk(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `User with id=${id} not found`
                })
            }
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving User with id = " + id
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id
    User.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({message: "User info was successfully updated"})
            } else {
                res.send({
                    message: `Cannot update User info with id=${id}.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating User info with id = " + id
            })
        })
}

exports.delete= (req, res) => {
    const id = req.params.id
    User.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({message: "User was successfully deleted"})
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting User with id = " + id
            })
        })
}
