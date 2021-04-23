const todo = require("../models/todo");
const session = require("express-session");
const account = require("../models/account");

exports.showTodo = async(req,res)=>{
    await todo.model.findAll({ 
        where:{
            uuid:req.session.uuid
        }
    }).then((data)=>{
        res.render("todo",{result:data})
    }).catch(function(err){
        console.log(err);
    }) 
}

exports.addTodo = async(req,res)=>{
    req.body.uuid = req.session.uuid;
    if(req.body.id === ""){
        await todo.model.create(
            req.body
        ).then(()=>{
            res.redirect("/");
        }).catch(function(err){
            console.log(err);
        })
    }else{
        await todo.model.update(
            {
                content: req.body.content,
                where:{
                    todo_id:req.body.id
                }
            }
        ).then(()=>{
            res.redirect("/");
        }).catch(function(err){
            console.log(err);
        })
    }
    
}

