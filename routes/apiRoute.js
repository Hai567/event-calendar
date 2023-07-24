let express = require("express")
let route = express.Router()
let passport = require("passport")
let getRequestController = require("../app/controllers/getRequestController")
let postRequestController = require("../app/controllers/postRequestController")
let initGoogleOauth =  require ("../app/Oauth Strategy/GoogleOauthStrategy")

initGoogleOauth()

route.get("/super-users/all-users", getRequestController.allUsers)
route.post("/user/auth/sign-in", postRequestController.signIn)
route.post("/user/auth/sign-up", postRequestController.signUp)
route.get("/user/auth/google", passport.authenticate("google", { scope: ["profile", "email", "openid"] }));
route.get("/user/auth/google/callback", passport.authenticate("google", { 
    successRedirect: "/api/successGoogleOauth",
    failureRedirect: "/api/failureGoogleOauth",
    failureFlash: "Unable to sign in with google",
    failureFlash : true
}));
route.get('/successGoogleOauth', function(req, res) {
    res.json({ message: 'Successfully login using Google' });
});
route.get('/failureGoogleOauth', function(req, res) {
    res.json({ message: 'Unable to login using Google' });
});

route.get('/user/auth/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.json({ message: "Logged Out" });
    });
});


module.exports = route