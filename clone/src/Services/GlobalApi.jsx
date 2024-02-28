import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "9c5a0850045c7c01db5627f372796f8c";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export default {
  getTrendingVideos,
};
