const Note = require("../models/notes.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Empty request"
    });
  }

  const note = new Note({
    userId: req.query.user,
    note: req.body.note
  });

  Note.create(note, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error occured while creating note."
      });
    else res.send(data);
  });
};


exports.getNotes = (req, res) => {
  Note.findByUserId(req.query.user, (err, data) => {
    if (err){
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Notes not found for userId ${req.query.user}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving notes for userId " + req.query.user
        });
      }
    }
    else res.send(data);
  });
};