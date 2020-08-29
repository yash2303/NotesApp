module.exports = app => {
  const user = require("../controllers/user.js");
  const notes = require("../controllers/notes.js");

  app.post("/app/user", user.create);

  app.post("/app/user/auth", user.auth);

  app.get("/app/sites/list", notes.getNotes);

  app.post("/app/sites", notes.create);

};
