const jwt = require("jsonwebtoken")

exports.requireSignin = (req,res,next) =>{
    const token = req.headers.authorization?.split(" ")[1];

    if(req.headers.authorization){
        console.log(token)
        console.log(process.env.JWT_SECRET)
        const user = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = user;
    }else{
        return res.status(400).json({ message: 'Authorization required'});
    }
    next();

}

exports.userMiddleware = (req,res,next) =>{
    if(!req.user || req.user.role !== 'user' ){
        return res.status(403).json({message:'user Access denied'})
    }
    next();
}

exports.adminMiddleware = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access denied' });
    }
    console.log(req.user.role)
    next();
  };


  

  