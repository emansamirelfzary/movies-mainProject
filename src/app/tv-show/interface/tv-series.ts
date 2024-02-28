export interface TvSeries {
  backdrop_path:string,
  first_air_date:string,
  last_air_date:string,
  id:number,
  name:string,
  original_language:string,
  overview:string,
  popularity:number,
  poster_path:string,
  vote_average:number,
  vote_count:number,
  number_of_seasons:number,
  number_of_episodes:number,
  status:string,
  homepage:string,
  genres:genres[]
}

export interface genres{
  name:string
  id:number
}
