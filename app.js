var express = require('express');
var fs = require('fs');
var app = express();

app.set('view engine', 'ejs');

app.use('/content', express.static('content'));

// var myreadstream = fs.ReadStream('readme.txt', 'utf8');
// var mywritestream = fs.WriteStream('writeme.txt');

// myreadstream.on('data', function (chunk) {     //buffer  
//     mywritestream.write(chunk);
// console.log('succcess');
// });
//myreadstream.pipe(mywritestream)


app.get("/", function (req, res) {
    console.log(req.url);
    res.render('home');
});

app.get("/writeText", function (req, res) {
    console.log(req.url);
    // var myreadstream = fs.ReadStream('readme.txt', 'utf8');
    var data = fs.readFileSync("readme.txt", 'utf8');

    res.render('writetext', { text: data })
});

app.get("/contact", function (req, res) {
    console.log(req.url);
    var data = {
        name: 'vignesh',
        age: '25',
        job: 'Developer'
    }

    res.render('contact', { data: data });
    // res.end('contact');
});

app.use(function (req, res) {
    console.log(req.url)
    res.status = 404;
    res.render('404');
});


app.listen(3000);

console.log('server started successfully');

