const API_KEY  ='f1126485660670c5dae956150888b8f4';


const requests = {
    fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en-us',
    fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
    fetchTopRated: '/movie/top_rated/?api_key=${API_KEY}&language=en-us',
    fetchTrending: '/discover/movie?api_key=${API_KEY}&with_genres=28',
    fetchTrending: '/discover/movie?api_key=${API_KEY}&with_genres=35',
    fetchTrending: '/discover/movie?api_key=${API_KEY}&with_genres=27',
    fetchTrending: '/discover/movie?api_key=${API_KEY}&with_genres=10749',
    fetchTrending: '/discover/movie?api_key=${API_KEY}&with_genres=99',
}

export default requests;