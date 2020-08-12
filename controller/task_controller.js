const db = require('../config/mongoose');
const Task = require('../models/task');

// module.exports.home = function(req, res){
//     res.render('task.ejs');
// }

module.exports.home=function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log(err);
            return;
        }
        return res.render('task.ejs',{
            title: "task",
            TaskList : tasks
        })
    })
};


module.exports.newTask=function(req,res){
    
    Task.create({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        date : req.body.date,
        pin : req.body.pin,
        status : "completed"
    }, function(err,newTask){
        if(err){
            console.log(err)

        }
        console.log(newTask);
        return res.redirect('back');
    });
}

module.exports.deleteTask = function(req,res){
    Task.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log(err);
            }
            return res.redirect('back');
    });
};