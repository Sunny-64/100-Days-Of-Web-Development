const express = require('express');
const https = require('https');

const app = express();

app.get("/", function (req, res) {
    const userAgent = req.get('user-agent');
    const options = {
        host: 'newsapi.org',
        path: '/v2/top-headlines?country=in&apiKey=',
        headers: {
            'User-Agent': userAgent
        }
    }
    https.get(options, function (response) {
        let data;
        response.on('data', function (chunk) {
            if (!data) {
                data = chunk;
            }
            else {
                data += chunk;
            }
        });
        response.on('end', function () {
            const newsData = JSON.parse(data);
            console.log(newsData);
        });
    });
    res.send("Did it work?");
});

app.listen(3000, function () {
    console.log("Server running on port : 3000");
});




// using fetch to retrieve data from the api.

// import express from "express";
// import https from "https";

// app.get("/", async function (req, res) {
//     let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0ade211d8e654cbabaa485d654022047";
//     try {

//         const response = await fetch(url, {
//             method: 'GET'
//         });
//         const data = await response.json();

//         // console.log(data.articles);
//         res.json({ data })
//     }

//     catch (error) {
//         console.log(error)
//     }

// });







