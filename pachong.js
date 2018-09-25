const request = require('request');
const cheerio = require('cheerio');
const express = require('express')

const app = express()
app.get('/', (req,res) => {
    request('https://www.kancloud.cn/digest/clearning/149688', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.

        const $ = cheerio.load(body)
        let html = $('.content').html()
        res.send(`
            <p>${html}</p>
        `)
    });
})

app.listen(3000)
