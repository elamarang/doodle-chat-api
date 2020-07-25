const handleSendMsg =(req,res,db)=>{
    
    const {fromid, toid,msg} = req.body;

    db.insert({
        'fromid':fromid,
        'toid':toid,
        'msg': msg,
        'senttime': new Date()
    })
    .into('messages')
    .then(result=>res.json(result[0]))
    .then(db.commit)
    .catch(err=>res.status(400).json('Unable to add'));    
}

module.exports = {
    handleSendMsg:handleSendMsg
}