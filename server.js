'use strict';

const express = require('express');
const app = express();


const port = 4000;

app.use(express.static('public'));


app.listen(port,(err)=>{
	if (err) {
		console.log('server not connected');
	}
	else{
		console.log('server connected');
	}
})