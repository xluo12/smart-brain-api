const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     // console.log(req.query)
//     // req.body
//     console.log(req.headers);
//     // req.params
//     const user = {
//         name: "John",
//         age: 5
//     }
//     res.send(user);
// })

// app.get('/profile', (req, res) => {
//     console.log(req.body);
//     res.send("getting profile")
// })

// app.post('/profile', (req, res) => {
//     console.log(req.body);
//     res.send("posting profile success")
// })

app.listen(3000);




