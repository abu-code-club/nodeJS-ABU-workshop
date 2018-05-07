const express = require('express')
const router = express.Router()
const todo = require('./Models/todo').Todo;
const connection = require('./database/database').connection;
const SQLCommands = require('./database/database').SQLCommands;
const commands = new SQLCommands();

router.get('/',(req,res) => {
    const username = "Silly"
    connection.query(commands.renderTODO(),[username],(err,rows)=>{
        if (err) {
            console.log('error')
            res.sendStatus(500);
        } else {
            const toBeRendered = rows.map((row) => {
                return new todo(row.id,row.username,row.todo)
            });
            res.render('todo',{todos:toBeRendered});
        }
    })
});

router.post('/add-todo',(req,res) => {
    const data = new todo(0,"Silly",req.body.todo);

    connection.query(commands.addTodo(),[data.username,data.todo],(err,rows)=>{
        if (err) {
            console.log('error')
            res.sendStatus(500);
        } else {
            res.redirect('/')
        }
    })
});

router.post('/delete-todo',(req,res) => {
    const id = req.body.id;
    connection.query(commands.deleteTODO(),[id],(err,rows)=>{
        if (err) {
            console.log('error')
            res.sendStatus(500);
        } else {
            res.redirect('/')
        }
    })
});





module.exports.router = router