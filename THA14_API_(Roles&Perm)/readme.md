*********************CONFIG MANAGEMENT
>Dont use user or redis modules while using Mongo mudules 
>npm -i -s dotenv

>>>>>>>>>>>/.env  
PORT = 5000		//static info for the whole app env
>>>>>>>>>>>>.json //dynamic info is kept here


>>>>>>>>>>>>>>>>>>>>>>>>>>>>Install
npm install passport passport-jwt

//for authentcation for Google and facebook
//jwt is used for manually password entry

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>app.js //for kinds of strategy in authentication of Google or Facebook or Others

const passport  = require("passport")



app.use(passport.initialize());
require("./middlewares/passport")(passport);

