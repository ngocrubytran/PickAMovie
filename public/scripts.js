const playBtn = document.getElementById('playButton');

//get genres from api
const getGenres = async()=>{

    try {
        const response = await fetch('genres/');
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            return jsonResponse.genres;
        }throw new Error("Getting genres failed!")
    } catch(error){
        console.log(error.message)
    }
};

const getMovies = async() => {

    const selectedGenre = getSelectedGenre();

    try {
        const response = await fetch(`movies/${selectedGenre}`);
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse.results;
        } throw new Error("Getting movies from selected genre failed!")
    } catch(error){
        console.log(error.message);
    }
}

const getMovieInfo = async(movie) => {
    const movieId = movie.id
    try {
        const response = await fetch(`movieInfo/${movieId}`);
        if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        } throw new Error("Getting movie info failed!")
    }catch(error){
        console.log(error.message);
    }
}

const showRandomMovie = async() => {
    const movieInfo = document.getElementById('movieInfo');
    if(movieInfo.childNodes.length>0){
        clearCurrentMovie();
    }
    const movies = await getMovies();
    const randomMovie = await getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

// const data = 2;
// fetch(`api/${data}`)
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// }
// fetch('/api', options).then(response=>{console.log(response)})

getGenres().then(populateGenreDropDown);
playBtn.onclick = showRandomMovie;