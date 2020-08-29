const sql = require("./db.js");

const Note = function(note) {
  this.userId = note.userId;
  this.note = note.note;
};

Note.create = (newNote, result) => {
  const query = `INSERT INTO notes (note, userId) VALUES ("${newNote.note}", ${newNote.userId})`
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created note: ", { id: res.insertId, ...newNote });
    result(null, { id: res.insertId, ...newNote });
  });
};

Note.findByUserId = (userId, result) => {
  sql.query(`SELECT * FROM notes WHERE userId = ${userId}`, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Found notes: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = Note;


// CREATE TABLE IF NOT EXISTS `notes` (
//   id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//   note longtext NOT NULL,
//   userId int(11) ,
//   CONSTRAINT FK_UserNotes FOREIGN KEY (userId) REFERENCES users(id)
// );
