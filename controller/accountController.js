const account = require("../models/account");

exports.createAccount = async(req,res)=>{
    req.body.uuid = generateCode();
    let data = await account.model.create(
        req.body
    )
    console.log(req.body);
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