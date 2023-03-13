const { User, Post } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find({})
            .populate({ path: 'posts', select: '-__v' })
            .select('-__v')
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
            .then((userData) => !userData ? res.status(404).josn({ message: 'No user has been found with this id' }) : res.josn(userData)
            );
    },
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((userData) => !userData ? res.status(404).json({ message: 'no user has been found with this id!' }) : res.json(userData))
            .catch((err) => res.json(err));
    }
}