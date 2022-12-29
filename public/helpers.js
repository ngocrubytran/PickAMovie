//Dropdown menu with all genres
const populateGenreDropDown = (genres) => {
    const select = document.getElementById('genres');

    for (const genre of genres ) {
        const option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
}

const getSelectedGenre = () =>{
    return document.getElementById('genres').value;
    
}

const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random()*movies.length);
    const randomMovie = movies[randomIndex];
    console.log(randomMovie);
    return randomMovie;
}

const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
}

const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');

    return posterImg;
}

const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;

    return titleHeader;
}

const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;

    return overviewParagraph
}

const createDate = (date) => {
    const dateHeader = document.createElement('h3');
    dateHeader.setAttribute('id', 'movieDate');
    dateHeader.innerHTML = date;

    return dateHeader;
}

const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');

    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const movieTitle = createMovieTitle(movieInfo.title);
    const movieOverview = createMovieOverview(movieInfo.overview);
    const movieDate = createDate(movieInfo.release_date);

    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(movieTitle);
    movieTextDiv.appendChild(movieOverview);
    movieTextDiv.appendChild(movieDate);
}