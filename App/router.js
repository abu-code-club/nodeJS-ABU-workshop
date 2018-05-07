const express = require('express')
const router = express.Router()
const todo = require('./Models/todo').Todo;

const toBeRendered = [new todo("welcome")]

router.get('/',(req,res) => {
    res.render('todo',{todos:toBeRendered});
});

router.post('/add-todo',(req,res) => {
    const newToDo = new todo(req.body.todo);
    toBeRendered.push(newToDo);
    res.redirect('/');
});





module.exports.router = router