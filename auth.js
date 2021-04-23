const accountRoutes = require("./routes/accountRoutes");
const todoRoutes = require("./routes/todoRoutes");
exports.checkAuth = async(req,res)=>{
    if(req.session.uuid){
        res.redirect("/todo");
    }else{
        res.redirect("/login");
    }
}