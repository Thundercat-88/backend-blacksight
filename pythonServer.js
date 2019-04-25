var PythonShell = require('python-shell');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var app = express();

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/pythonScripts/getIP', ipCall);

function ipCall(req, res) {
    var options = {
        args:
        [
            req.query.ip
        ]
    }
}

PythonShell.run('./pythonScripts/getIP', options, function (err, data) {
    if (err) res.send(err);
    res.send(data.toString())
    console.log(data)
});

//Load Network model
const Network = require('../../Models/Network');

app.post("/network", (req, res) => {
    Network.save()
      .then(data => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });