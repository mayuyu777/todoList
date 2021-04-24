const todo = require("../models/todo");
const session = require("express-session");
const account = require("../models/account");

exports.showTodo = async(req,res)=>{
    if(req.session.uuid){
        await todo.model.findAll({ 
            where:{
                uuid:req.session.uuid
            }
        }).then((data)=>{
            res.render("todo",{result:data})
        }).catch(function(err){
            console.log(err);
        }) 
    }else{
        res.redirect("/");
    }
   
}

exports.addTodo = async(req,res)=>{
    req.body.uuid = req.session.uuid;
    if(req.body.todo_id === ""){
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
              
            },{
                where:{
                    todo_id:req.body.todo_id
                }
            }
        ).then(()=>{
            res.redirect("/");
        }).catch(function(err){
            console.log(err);
        })
    }
    
}

exports.deleteTodo = async(req,res)=>{
    await todo.model.destroy({
        where:{
            todo_id:req.body.id
        }
    }).then(()=>{
        res.redirect("/");
    }).catch(function(err){
        console.log(err);
    })
}

exports.stattodo = async(req,res)=>{

    await todo.model.update(
        {
            status: req.body.stat,
          
        },{
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

exports.logout = async(req,res)=>{
    req.session.destroy();
    res.redirect("/");
}