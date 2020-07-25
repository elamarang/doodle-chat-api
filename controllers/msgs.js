const handleMsgs=(req,res,db)=>{

    const {fromid,toid} = req.body;
    db.select('*').from('messages')
    .whereIn(['fromid','toid'], [[fromid, toid],[toid, fromid]])
    .then(user=>{
        if(user.length){
            res.json(user)
        }
        else{
            res.status(400).json('not found')
        }
    })
    .catch(err=>res.status(400).json('error getting msgs'));
}

module.exports = {
    handleMsgs : handleMsgs
}
