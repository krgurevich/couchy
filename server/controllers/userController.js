const { User, Comment } = require('../models');

const { signToken } = require('../utils/auth');

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
    async createUser({ body }, res) {
        const user = await User.create(body)

        if (!user) {
            return res.status(400).json({ message: 'Something is not working correctly' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((userData) => !userData ? res.status(404).json({ message: 'no user has been found with this id!' }) : res.json(userData))
            .catch((err) => res.json(err));
    },
    deleteUser(req, res) {
        User.deleteOne({ _id: req.params.userId })
            .then(userData => {
                !userData ? res.status(404).json({ message: "No user has been found with the given id" }) : Comment.deleteMany({ username: userData.username })
                    .then(deletedData => deletedData ? res.json({ message: "All comments associated with this user have been deleted" }) : res.status(404).json({ message: 'No comments have been found under this username' }))
            })
    },
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
}