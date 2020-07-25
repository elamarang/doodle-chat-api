const handleUpdate =(req,res,db)=>{
    
    const {name, mobile,email,id} = req.body;
    db('users')
    .where({ id })
    .update({ name, mobile, email })
    .then(db.commit)
    .then(result=>res.json(result[0]))
    .catch(err=>res.status(400).json('Unable to update'));    
}

module.exports = {
    handleUpdate:handleUpdate
}