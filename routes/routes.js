// load up our shiny new route for affirmations
const affirmationRoutes = require("./affirmations");

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  // run our affirmation route module here to complete the wire up
  affirmationRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;
