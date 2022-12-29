const tmdbBaseUrl = 'https://api.themoviedb.org/3';

const fetch = require('node-fetch')//used node-fetch@2
const response = require('express');
const express = require('express');
const app = express();

require('dotenv').config();//load anything in .env file into environment variables

const tmdbKey = process.env.tmdbKey;

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening at ${port}`))

app.use(express.static('public'))//render index.html in 'public' at port 3000

app.use(express.json({limit:'1mb'}));//specify maximum request body size

//handle get genres request from client
app.get('/genres', async (req, res)=>{
    console.log('Server got get request for genres!')

    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = '?api_key=' + tmdbKey;

    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

    const genres_response = await fetch(urlToFetch)
    const genres_response_json = await genres_response.json()
    res.json(genres_response_json)
})

//handle get movies request from client
app.get(`/movies/:selectedGenre`, async(req, res)=>{
    console.log("Server got request for movies!")
    const selectedGenre = req.params.selectedGenre
    const discoverMovieEndpoint = '/discover/movie'
    const requestParams = '?api_key=' + tmdbKey + '&with_genres='+selectedGenre;
    const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

    const response = await fetch(urlToFetch)
    const jsonResponse = await response.json()
    res.json(jsonResponse)
})

//handle get movie info request from client
app.get(`/movieInfo/:movieId`, async(req, res)=>{
    console.log("Server got get request for movie info!");

    const movieId = req.params.movieId;
    const movieEndpoint = '/movie/' + movieId;
    const requestParams = '?api_key=' + tmdbKey;
    const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

    const response = await fetch(urlToFetch)
    const jsonResponse = await response.json()
    res.json(jsonResponse)
})

//test getting data from client
// app.get(`/api/:data`, async(req, res)=>{
//     console.log(req.params)

//     console.log("You got get request from api")
// })