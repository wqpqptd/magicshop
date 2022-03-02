exports.create = (req, res) => {
    res.send({ message: "create handler"});
};

exports.findAll = (red, res) => {
    res.send({ message: "findAll handler"});
};

exports.findOne = (red, res) => {
    res.send({ message: "findOne handler"});
};

exports.update = (red, res) => {
    res.send({ message: "update handler"});
};

exports.delete = (red, res) => {
    res.send({ message: "delete handler"});
};

exports.deleteAll = (red, res) => {
    res.send({ message: "deleteAll handler"});
};

exports.findAllFavorite = (red, res) => {
    res.send({ message: "findAllFavorite handler"});
};