// Student Name: Gabriel Gonzales Bradshaw //
// Student ID: ggonza49
// Date: 07/08/2024

// log request details
const logger = (req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname, req.path, req.time); //through researching I learned how to print a timestamp in the terminal
    next(); // Call the next middleware or route handler
};

module.exports = logger;
