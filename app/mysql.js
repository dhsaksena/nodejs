var mysql = require('mysql');
var con = mysql.createConnection({
    host:"mysql-service",
    user:"root",
    password:"ronnie01",
    database:"resto"
});

con.connect(function(error){
    if(error)
    {
        throw error;
    }
    else 
    {
        console.log("connected")
        con.query("select * from users", function(error, result){
            if(error)
            {
                console.log("results failed");
            }
            else
            {
                console.log("Results are: "+ JSON.stringify(result));
            }
        });
    }
})
