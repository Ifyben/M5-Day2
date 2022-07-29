export const notFound = (err, req, res, next) => {
    if(err && err.status === 404) {
        res.status(404).send({ message: err.message || "Not Found" })
    }
    next();
}


export const forbidden = (err, req, res, next) => {
    if(err && err.status === 403) {
        res.status(403).send({ message: err.message || "Forbidden!" });
    }
    next();
}


export const catchAllErrorHandler = (err, req, res, next) => {
    if(err) {
        if (!req.headersSent) {
            res
              .status(err.status || 500)
              .send({ message: err.message || "Something went wrong!" });
        }
    } 
    next();
}