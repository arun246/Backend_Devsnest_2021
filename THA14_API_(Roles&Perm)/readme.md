###CONFIG MANAGEMENT
>npm -i -s dotenv
>/.env  
PORT = 5000		//static info for the whole app env
>.json //dynamic info is kept here


>Dont use user(psql)  modules while using Mongo mudules 

###Applying roles and resource authorization with passport

>Install
npm install passport passport-jwt

//for authentcation for Google and facebook
//jwt is used for manually password entry

>app.js //for kinds of strategy in authentication of Google or Facebook or Others

const passport  = require("passport")



app.use(passport.initialize());
require("./middlewares/passport")(passport);

