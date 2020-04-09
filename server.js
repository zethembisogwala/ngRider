var express = require('express'), app = express();

var path = require('path');

var http = require('http');

var enforce = require('express-sslify');


// Use enforce.HTTPS({ trustProtoHeader: true }) since you're behind Heroku's reverse proxy
//app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get('*',function(req,res,next){
  if(req.protocol !== 'https'){
  	console.log('Not https, redirectig')
    res.redirect(`https://${req.header('host')}${req.url}`)
  }else{
    next()
  }
})

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);

app.get('*', function (request, response){
    response.sendFile( path.resolve() + '/dist/ngRider/index.html')
}); //does not work //now it does thanks to adding path.resolve()

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), "0.0.0.0", function () {
    console.log('Express server listening on port ' + app.get('port'));
});