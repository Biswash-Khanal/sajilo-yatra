export const errorMiddleWare = (err, req, res, next)=>{
    try {
        
        console.log(err.statusCode)
        console.log(err.message)
        res.status(err.statusCode).json({message:err.message});
        
    } catch (error) {
        next(error);
    }
}