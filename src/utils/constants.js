export const LOGO = "https://about.netflix.com/images/logo.png";

export const BGIMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg";

export const USER_AVATAR =
  "https://img.icons8.com/?size=100&id=13042&format=png&color=000000";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const PLAYING_MOVIE =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const MPoster_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिन्दी" },
  { identifier: "marathi", name: "मराठी" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
