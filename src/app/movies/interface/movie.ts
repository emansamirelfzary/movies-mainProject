export interface Movie {
  title:string,
  poster_path:string,
  backdrop_path:string,
  id:number,
  vote_average:number,
  release_date:string,
  overview:string,
  vote_count:number,
  runtime:number,
  popularity:number,
  tagline:string,
  status:string,
  imdb_id:string,
  original_language:string,
  genres:genres[]
}

export interface genres{
  name:string,
  id:number
}
