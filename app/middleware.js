module.exports = function(req, resp, next)
{
    console.log("Requested URL is:: "+ req.originalUrl);
    next();
}