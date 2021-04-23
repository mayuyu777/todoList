const account = require("../models/account");
const bcrypt = require("bcrypt");
const session = require("express-session");
const saltRounds = 10;


exports.createAccount = async(req,res)=>{
    
    var salt = bcrypt.genSaltSync(saltRounds);
    req.body.password = bcrypt.hashSync(req.body.password,salt);
    req.body.uuid = generateCode();
    await account.model.create(
        req.body
    ).then(()=>{
        res.render("index",{message:"Account registered successfully!"});
    }).catch(function(err){
        console.log(err);
        res.render("index",{message:"Email already exists!"});
    })
    
}


exports.checkauth = async(req,res)=>{
    if(req.session.uuid){
        res.redirect("/todo");
    }else{
        res.redirect("/login");
    }
}

exports.signin = async(req,res)=>{

    await account.model.findOne({
        where:{
            email: req.body.email
        }
    }).then((data)=>{

        if(bcrypt.compareSync(req.body.password,data.password) && data.password!=''){
            var sess = req.session;
            sess.uuid = data.uuid;
            session
            res.redirect("/");
        }else{
            res.render("index",{message:"Incorrect email or password!"});
        }
        
    }).catch(function(err){
        console.log(err);
        res.render("index",{message:"Incorrect email or password!"});
    })
    
}


exports.showlogin = async(req,res)=>{
    if(!req.session.uuid){
        res.render("index");
    }else{
        res.redirect("/");
    }
}

generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}

