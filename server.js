var express = require('express'),
    app = express();

var path = require('path');

app.use(express.static('dist/ngRider'));


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

app.set('port', process.env.PORT);

app.listen(app.get('port'), "0.0.0.0", function () {
    console.log('Express server listening on port ' + app.get('port'));
});