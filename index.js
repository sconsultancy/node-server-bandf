const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const keys = require("./config/keys");
require("./models/User");
const mongoose = require("mongoose");
const session = require("express-session");

// setup session
app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);
// Setup cors
app.use(
  cors({
    origin: "*",
  })
);

// setup passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI).then(() => {
  console.log("mongo Connected");
});
require("./services/passport");

require("./routes/authRoutes")(app);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google auth login

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("runnng on", PORT);
});

/*
=> 





*/
