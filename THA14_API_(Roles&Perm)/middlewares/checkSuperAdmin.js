const check =(req,res,next) =>{
	if(req.session.User.role === "super-admin"){
		next();
	}
	res.status(401).send("Needs to be super admin");
	}

    module.exports = check;