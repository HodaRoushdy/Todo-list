//make child class (customErrHandler) from parent class(Error)
class customErrHandler extends Error {
    constructor(statusCode , message){
        super(message)
        this.statusCode = statusCode
    }
}
// function to call my constructor and send the parameters to it instead of customErrHandler(message,statusCode)
const createCustomErrHandler= (message,statusCode)=>{
    return new customErrHandler(message , statusCode)
}

module.exports ={
    customErrHandler,
    createCustomErrHandler
}