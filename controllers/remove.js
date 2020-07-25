const handleDelete =(req,res,db)=>{
    
    const {id} = req.body;

    db.delete('*').from('users').where({id})
    .then(db.commit)
    .then(result=>res.json(result[0]))    
    .catch(err=>res.status(400).json('Unable to remove'));    
}

module.exports = {
    handleDelete:handleDelete
}