const notFound = (req,res)=>{
    res.status(404).send('Ooh bad request')
}
module.exports = notFound