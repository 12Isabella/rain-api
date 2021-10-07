const affirmationRoutes = (app, fs) => {
  // variables
  const dataPath = "./data/affirmations.json";

  // READ
  app.get("/affirmations", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  // CREATE
  app.post("/affirmations", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      const existing = JSON.parse(data);
      const updatedItems = [...existing, req.body];
      fs.writeFile(dataPath, JSON.stringify(updatedItems), (err) => {
        if (err) {
          throw err;
        }
      });
      res.status(200).send("new affirmation added");
    });
  });
};

module.exports = affirmationRoutes;
