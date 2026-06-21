const express = require('express');
const app=express();
const port =process.env.PORT || 6700;

// to tell app, where static files -html/css/js rae stored
app.use(express.static("frontend"));
app.listen(port, function(){
    console.log("App runnug on http://localhost:"+port);
});