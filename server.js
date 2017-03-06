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
app.get('/ui/2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.html'));
});
app.get('/ui/3.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3.html'));
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

app.get('/ui/37.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '37.png'));
});


app.get('/ui/38.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '38.png'));
});
app.get('/ui/39.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '39.png'));
});
app.get('/ui/40.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '40.png'));
});
app.get('/ui/41.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '41.png'));
});
app.get('/ui/42.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '42.png'));
});
app.get('/ui/43.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '43.png'));
});
app.get('/ui/44.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '44.png'));
});
app.get('/ui/45.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '45.png'));
});
app.get('/ui/46.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '46.png'));
});
app.get('/ui/47.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '47.png'));
});
app.get('/ui/48.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '48.png'));
});
app.get('/ui/49.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '49.png'));
});
app.get('/ui/50.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '50.png'));
});
app.get('/ui/51.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '51.png'));
});
app.get('/ui/52.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '52.png'));
});
app.get('/ui/53.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '53.png'));
});
app.get('/ui/54.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '54.png'));
});
app.get('/ui/55.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '55.png'));
});
app.get('/ui/56.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '56.png'));
});
app.get('/ui/57.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '57.png'));
});
app.get('/ui/58.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '58.png'));
});
app.get('/ui/59.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '58.png'));
});
app.get('/ui/60.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '60.png'));
});
app.get('/ui/61.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '61.png'));
});
app.get('/ui/62.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '62.png'));
});
app.get('/ui/63.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '63.png'));
});
app.get('/ui/64.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '64.png'));
});
app.get('/ui/65.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '65.png'));
});
app.get('/ui/66.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '66.png'));
});
app.get('/ui/67.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '67.png'));
});
app.get('/ui/68.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '68.png'));
});
app.get('/ui/69.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '69.png'));
});
app.get('/ui/70.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '70.png'));
});
app.get('/ui/71.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '71.png'));
});
app.get('/ui/72.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '72.png'));
});
app.get('/ui/73.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '73.png'));
});
app.get('/ui/74.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '74.png'));
});
app.get('/ui/75.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '75.png'));
});
app.get('/ui/76.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '76.png'));
});
app.get('/ui/77.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '77.png'));
});
app.get('/ui/78.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '78.png'));
});
app.get('/ui/79.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '79.png'));
});
app.get('/ui/80.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '80.png'));
});
app.get('/ui/81.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '81.png'));
});
app.get('/ui/82.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '82.png'));
});
app.get('/ui/83.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '83.png'));
});
app.get('/ui/84.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '84.png'));
});
app.get('/ui/85.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '85.png'));
});
app.get('/ui/86.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '86.png'));
});
app.get('/ui/87.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '87.png'));
});
app.get('/ui/88.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '88.png'));
});
app.get('/ui/89.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '89.png'));
});
app.get('/ui/90.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '90.png'));
});
app.get('/ui/91.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '91.png'));
});
app.get('/ui/92.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '92.png'));
});
app.get('/ui/93.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '93.png'));
});
app.get('/ui/94.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '94.png'));
});
app.get('/ui/95.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '95.png'));
});
app.get('/ui/96.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '96.png'));
});
app.get('/ui/97.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '97.png'));
});
app.get('/ui/98.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '98.png'));
});
app.get('/ui/99.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '99.png'));
});
app.get('/ui/100.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '100.png'));
});

app.get('/ui/101.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '101.png'));
});

app.get('/ui/102.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '102.png'));
});
app.get('/ui/103.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '103.png'));
});
app.get('/ui/104.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '104.png'));
});
app.get('/ui/105.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '105.png'));
});app.get('/ui/106.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '106.png'));
});
app.get('/ui/107.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '107.png'));
});
app.get('/ui/108.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '108.png'));
});
app.get('/ui/109.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '109.png'));
});
app.get('/ui/110.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '110.png'));
});
app.get('/ui/111.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '111.png'));
});
app.get('/ui/112.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '112.png'));
});
app.get('/ui/113.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '113.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
