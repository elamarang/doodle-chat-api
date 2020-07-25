const handleUsers=(req,res,db)=>{

    db.select('*').from('users').orderBy('id')
    .then(user=>{
        if(user.length){
            res.json(user)
        }
        else{
            res.status(400).json('not found')
        }
    })
    .catch(err=>res.status(400).json('error getting user'));

}

module.exports = {
    handleUsers : handleUsers
}
