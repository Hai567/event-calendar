let passport = require("passport")
let UserModel = require("../models/UserModel")
let findThingsOrCreateThings = require("../plugins/findThingsOrCreateThings")

module.exports = function initGoogleOauth(param) {  
  let GoogleStrategy = require('passport-google-oauth20').Strategy;
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, cb) {
      UserModel.findThingsOrCreateThings({ 
        googleId: profile.id
      },{
        displayName: profile.displayName,
        fName: profile.givenName,
        lName: profile.familyName,
        email: profile.value,
        avatar: profile.picture,
        loginMethod: "Google"
      }, function (err, user) {
        return cb(err, user);
      });
    }
  ));

  passport.serializeUser((user, done) => {
    return done(null, user)
  })
  passport.deserializeUser((user, done) => {
    UserModel.findOne({googleId: user.googleId})
        .then(user => {
            if (user) {
                return done(null, user)
            }else{
                return done(null, false)
            }
        })
        .catch(err => console.log("Error In GoogleOauthStrategy", err))
  })
}