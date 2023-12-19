const { default: Axios } = require("axios")

// import axios here
const axios = require("axios")

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'
// const options = {
//   method: 'GET',
//   params: {language: 'en-US'},
//   headers: {accept: 'application/json'},
//   Authorization: 'Bearer d771b19ef336ed8381def3a60b574464'
// };

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios.get(url).then(response => {
    return response
  })
}

const getMovieById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`
  // code here
  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    throw error;
  }
}
// getMovieById()

const getMovieByIdFailure = async () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    return status = 404;
  }
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}