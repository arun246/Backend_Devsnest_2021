// const User = require("../models/users");
// const bcrypt = require('bcrypt');
// const saltRound = 10;

// const register =  async (req,res) =>{
// const {email, pass} = req.body;

// try{
// 	const alreadyExists = await User.findOne({where :{email}})
// 	if(alreadyExists){	
// 	res.status(401).send("Email already exists");
// 	}
// 	const salt = bcrypt.genSaltSync(saltRound);
// 	const hash  = bcrypt.hashSync(pass,salt);	
	
// 	const newUser = new User({email: email.toLowerCase(), password: hash});
// 	const savedUser = await newUser.save();
// 	res.status(201).send(savedUser);
// }
// catch(err){
// 	console.log(err);
// 	res.status(500).send("Somethings in went wrong")
// 	}

// }




// const regSuperAdmin = async (req,res) =>{
// const email = req.body.email;
// const pass = req.body.password;
// const usernm = req.body.username;
// const fnm = req.body.fname;
// //console.log(email,pass)
// try{
// 	const alreadyExists = await User.findOne({where :{email}})
// 	if(alreadyExists){	
// 	res.status(401).send("Email already exists");
// 	}
// 	const salt = bcrypt.genSaltSync(saltRound);
// 	const hash  = bcrypt.hashSync(pass,salt);	
	
// 	const newUser = new User({email: email.toLowerCase()  ,username:usernm, password: hash , fname : fnm, role:"super-admin"	});
// 	const savedUser = await newUser.save();
// 	//req.session.User  = savedUser;
// 	res.status(201).send(savedUser);
// }
// catch(err){
// 	console.log(err);
// 	res.status(500).send("Somethings went wrong")
// 	}

// }



// module.exports  = {register,regSuperAdmin};




