var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.html'));
});

app.get('/ui/intro.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'intro.gif'));
});
app.get('/ui/1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.png'));
});
app.get('/ui/2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.png'));
});
app.get('/ui/3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3.png'));
});
app.get('/ui/4.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '4.png'));
});
app.get('/ui/5.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '5.png'));
});
app.get('/ui/6.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '6.png'));
});
app.get('/ui/7.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '7.png'));
});
app.get('/ui/8.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '8.png'));
});
app.get('/ui/9.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '9.png'));
});
app.get('/ui/10.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '10.png'));
});
app.get('/ui/11.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '11.png'));
});
app.get('/ui/12.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '12.png'));
});
app.get('/ui/13.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '13.png'));
});
app.get('/ui/14.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '14.png'));
});
app.get('/ui/15.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '15.png'));
});
app.get('/ui/16.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '16.png'));
});
app.get('/ui/17.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '17.png'));
});
app.get('/ui/18.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '18.png'));
});
app.get('/ui/19.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '19.png'));
});
app.get('/ui/20.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '20.png'));
});
app.get('/ui/21.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '21.png'));
});
app.get('/ui/22.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '22.png'));
});
app.get('/ui/23.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '23.png'));
});
app.get('/ui/24.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '24.png'));
});
app.get('/ui/25.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '25.png'));
});
app.get('/ui/26.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '26.png'));
});
app.get('/ui/27.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '27.png'));
});
app.get('/ui/30.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '30.png'));
});
app.get('/ui/31.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '31.png'));
});
app.get('/ui/32.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '32.png'));
});
app.get('/ui/33.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '33.png'));
});
app.get('/ui/34.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '34.png'));
});
app.get('/ui/35.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '35.png'));
});

app.get('/ui/36.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '36.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
