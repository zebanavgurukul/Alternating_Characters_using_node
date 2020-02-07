const express = require("express");
const app = express();
var path = require("path")
app.use(express.urlencoded());

app.get("/api", (req, res) => {
    res.sendFile(path.join(__dirname + "/form.html"));
});

app.post("/api", (req, res) => {
    var input = req.body.strings
    function getCountDeleting(word){ 
        var count = 0; 
        datastore = word[0];
        let l = word.length;
        for (var i = 1; i < l; i++) {
            if (word[i] === datastore) {
                count ++ ;
            } 
            else { 
                datastore = word[i]; 
            } 
        } 
        res.json({count}); 
    } 
    getCountDeleting(input)
});

app.listen(4000, () => {
    console.log("app listening at 4000");
});