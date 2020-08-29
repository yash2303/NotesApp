const User = require("../models/user.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Empty request"
    });
  }

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error occurred while creating User."
      });
    else res.send(data);
  });
};

exports.auth = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  User.findByUsername(req.body.username, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `User Not found with username ${req.body.username}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with username " + req.body.username
        });
      }
    } else {
      if(data.password == req.body.password){
        res.send({
            status: 'success',
            userId: data.userId
        });
      }
      else{
        res.status(401).send({
          message: "Authentication error  " + req.body.username
        });
      }
    } 
  });

}
