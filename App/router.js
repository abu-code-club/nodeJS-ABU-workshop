const express = require('express')
const router = express.Router()
const todo = require('./Models/todo').Todo;
const User = require('./Models/user').User;
const connection = require('./database/database').connection;
const SQLCommands = require('./database/database').SQLCommands;
const commands = new SQLCommands();
const bycrpt = require('bcrypt-nodejs');


// goes to home 
router.get('/',(req,res) => {
    res.render('home');
})

// goes to login 
router.get('/login',(req,res)=> {
    res.render('login',{login:'Login'});
})

// goes to sign up 
router.get('/signup',(req,res)=> {
    res.render('signup');
})

router.post('/Add-User',(req,res)=> {
    const newPass = bycrpt.hashSync(req.body.password,bycrpt.genSaltSync(10));
    const user = new User(id="",username=req.body.username, name=req.body.name,surname=req.body.surname)
    connection.query(commands.addUser(),[user.username,newPass,user.name,user.surname],(err,results,field)=>{
        if (err){
            console.log(err);
            res.sendStatus(500);
        }
        res.redirect('/login')
    })
})

router.post('/secret-layer',(req,res)=> {
    const newPass = bycrpt.hashSync(req.body.password,bycrpt.genSaltSync(10));
    const username = req.body.username;
    connection.query(commands.getUser(),[username],(err,results,field)=>{
        if (err){
            console.log(err);
            res.sendStatus(500);
        }
        res.redirect('/todo');
    });
})

router.get('/users',(req,res)=>{
    connection.query(commands.fetchUsers(),[],(err,rows)=>{
        if (err) {
        
            console.log(err);
            res.sendStatus(500);
        } else {
            const toBeRendered = rows.map((row) => {
                return new User(row.id,row.username,row.name,row.surname)
            });
            res.json(toBeRendered);
        }
    })
})

// goes to todo
router.get('/todo',(req,res) => {
    const username = "Silly";
    connection.query(commands.renderTODO(),[username],(err,rows)=>{
        if (err) {
        
            console.log(err);
            res.sendStatus(500);
        } else {
            const toBeRendered = rows.map((row) => {
                return new todo(row.id,row.username,row.todo)
            });
            res.render('todo',{todos:toBeRendered});
        }
    })
});

router.post('/todo/add-todo',(req,res) => {
    const data = new todo(0,"Silly",req.body.todo);
    connection.query(commands.addTODO(),[data.username,data.todo],(err,rows)=>{
        if (err) {
            console.log('error')
            res.sendStatus(500);
        } else {
            res.redirect('/')
        }
    })
});

router.post('/todo/delete-todo',(req,res) => {
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

module.exports.router = router;