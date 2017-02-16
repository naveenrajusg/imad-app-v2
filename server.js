var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article_one = {
    title: 'article_one | Naveen Raju',
    heading:'Article_one',
    date:'feb-16-2017',
content:` <p>
             This is my content for the first artical. This is my content for the first artical.
             This is my content for the first artical. This is my content for the first artical.
           </p>
            <p>
             This is my content for the first artical. This is my content for the first artical.
             This is my content for the first artical. This is my content for the first artical.
           </p>
            <p>
             This is my content for the first artical. This is my content for the first artical.
             This is my content for the first artical. This is my content for the first artical.
           </p>`
};
fuction createTemplate (data){
var title = data.title;
var data  = data.data;
var heading=data.heading;
var content=data.content;
var htmltemplate=`
                 <html>
                 <head>
                <title>
                  ${title}
                </title>
                 <meta name="viewport" content="width-device-width,initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
              </head>
              <body>
                <div class="container">
                    <div>
                      <d href="/">Home</d>
                    </div>
                    <hr/>
                    <h3>
                      ${heading}
                    </h3>
                    <div>
                      ${date}
                    </div>
                     <div>
                       ${content}
                     </div>
                 </div>
              </body>
            </html>
            `;
            return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article_one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_one.html'));
});
app.get('/article_two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
