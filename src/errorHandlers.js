const catchAllErrorHandler = (err, req, res, next) => {
    if(err) {
        if (!req.headersSent) {
            res
              .status(err.status || 500)
              .send({ message: err.message || "Something went wrong!"});
        }
    } 
    next();
}