const express = require('express');
const cors = require('cors');
const knex = require('knex');
const users = require('./controllers/users');
const add = require('./controllers/add');
const remove = require('./controllers/remove');
const update = require('./controllers/update');
const msgs = require('./controllers/msgs');
const sendmsg = require('./controllers/sendmsg');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 

const db=knex({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl: true
    }
  });

const app =express();
app.use (express.json());
app.use(cors());

app.get('/',(req,res)=>{res.json('it is working')});

app.get('/users',(req,res)=>{users.handleUsers(req,res,db)});

app.post('/msgs',(req,res)=>{msgs.handleMsgs(req,res,db)});

app.post('/sendmsg',(req,res)=>{sendmsg.handleSendMsg(req,res,db)});

app.post('/add',(req,res)=>{add.handleAdd(req,res,db)});

app.post('/remove',(req,res)=>{remove.handleDelete(req,res,db)});

app.post('/update',(req,res)=>{update.handleUpdate(req,res,db)});

app.listen(process.env.PORT||3000,()=>{
    console.log(`app is running ${process.env.PORT}`);
})