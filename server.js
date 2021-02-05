const express = require('express');
require('dotenv').config();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const favicon = require("serve-favicon");
const emailjs = require('emailjs-com')

app.use(cors());
app.use(favicon(path.join(__dirname, "client", "build", "favicon.ico")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const userId = process.env.REACT_APP_USER_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;

app.post('/submit', (req, res) => {
  console.log('req', req.body);
  
  let server = emailjs.server.connect({
    user: userId,
    
  });
});

/*
const formInfo = req.body;
  emailjs.send(
    serviceId, templateId, formInfo, userId
  ).then(() => {
    console.log('server was sent');
  })
  .catch((err) => {
    console.log('error', err);
  });
*/


const port = process.env.PORT || 5004;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});