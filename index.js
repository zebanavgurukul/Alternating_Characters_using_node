const express = require("express");
const app = express();
app.use(express.json());
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
        for (var i = 1, l = word.length; i < l; i++) {
            if (word[i] === datastore) {
                count ++ ;
            } 
            else { 
                datastore = word[i]; 
            } 
        } 
        return res.send(count); 
    } 
    console.log(getCountDeleting(input))
});

app.listen(4000, () => {
    console.log("app listening at 4000");
});
