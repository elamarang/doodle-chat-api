const handleAdd =(req,res,db)=>{
    
    const {name, mobile,email} = req.body;

    if(!name||!mobile||!email){
      return  res.status(400).json('Incorrect form submission');
    }

    db.insert({
        'name':name,
        'mobile':mobile,
        'email': email
    })
    .into('users')
    .then(db.commit)
    .then(result=>res.json(result[0])) 
    .catch(err=>res.status(400).json('Unable to add'));

    // db.transaction(trx=>{
    //     trx.insert({
    //         'name':name,
    //         'mobile':mobile,
    //         'email': email
    //     })
    //     .into('login')
    //     .then(trx.commit)
    //     .catch(trx.rollback);
    // })
    // .catch(err=>{res.status(400).json('Unable to register')});
    
}

module.exports = {
    handleAdd:handleAdd
}