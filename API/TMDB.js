
const API_TOKEN = '';

export function getFilmsFromSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/original' + name
}
export function getFilms () {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_TOKEN + '&language=fr&region=FR'
        return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
