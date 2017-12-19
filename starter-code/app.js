const express = require('express');
const app = express();
const Chuck = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response, next) => {
    response.render('index');
});

app.get('/random', (req, res, next) => {
    client.getRandomJoke()
        .then((response) => {
            res.render('random', {
                response : response.value
            });
        }).catch((err) => {
            console.log(err);
    });
});

app.get('/categories', (req, res, next) => {
    client.getJokeCategories()
    .then((response)=>  {
        res.render('categories', {
            categories : response,
        });
    })
    .catch((err)=> {
      // handle error
    });
});

// app.get('/search', (request, response, next) => {
//     response.render('hello world');
// });

app.listen(3000);