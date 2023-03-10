var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
app.use((req, res, next) => {

 let string = `${req.method} ${req.path} - ${req.ip}`
 console.log(string) 
   
  next();

});

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World")

/** 2) A first working Express Server 
app.get("/", function(req, res) {
res.send('Hello Express');
});*/
app.listen(3001, function() {
console.log('Listening on port 3000');
});

/** 3) Serve an HTML file */
app.get("/", function(req, res) {
res.sendFile("/views/index.html"  , { root : __dirname})
 });

/** 4) Serve static assets  */
app.use(express.static(__dirname + '/public/'))
app.get("/", function(req, res) {
res.sendFile("/views/index.html"  , { root : __dirname})
});

/** 5) serve JSON on a specific route */
app.get('/json', (req, res) => {
  let message = 'Hello json'
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.json({"message": message.toUpperCase()})
  }
  return res.status(200).json({"message": message})
})

/** 6) Use the .env file to configure the app */
 let messageObject = {"message": "Hello json"};
app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
     var u_=JSON.parse(JSON.stringify(messageObject ));
     u_.message=u_.message.toUpperCase();
     return res.json(u_);
  } else {
      return res.json(messageObject);
  }
});
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;