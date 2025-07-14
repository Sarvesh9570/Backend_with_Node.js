const passport = require("passport");
const Localstrategy = require("passport-local").Strategy;
const Person = require("./Models/person");

// already define that it takes username, password and done
passport.use(
  new Localstrategy(async function (USERNAME, password, done) {
    try {
      const user = await Person.findOne({ username: USERNAME });
      if (!user) {
        // done take (error, user, message)
        return done(null, false, { message: "Incorect username" });
      }
      //const isPasswordMatch = user.password === password ? true : false;
      const isPasswordMatch = await user.comparePassword(password);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect Password" });
      }
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = passport;
