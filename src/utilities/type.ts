type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  type: string;
};
type GenreType = {
  id: number;
  name: string;
};
type CrewType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: boolean;
  credit_id: string;
  department: string;
  job: string;
};
type CastType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: boolean;
  cast_id: number;
  credit_id: string;
  character: string;
  order: number;
};

type TrailerType = {
  id: string;
  type: string;
  key: string;
};
