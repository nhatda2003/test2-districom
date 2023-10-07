import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const express = require('express');
const app = express();
const s3Controller = require('./src/s3-controller');

app.get('/', (reg, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.post('/upload-to-s3', s3Controller.s3Upload);

app.get('/all-files', s3Controller.s3Get);

app.get('/get-object-url/:key', s3Controller.getSignedUrl);

const port = process.env.port || '1507';
app.listen(port, () =>{
    console.log('App listening on: '+port);
});


